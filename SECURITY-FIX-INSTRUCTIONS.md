# Critical Security Fix: Row Level Security (RLS)

## The Problem

Your Supabase database currently has **Row Level Security disabled** on the `articles` table. This means:

- ❌ Anyone with your public anon key can read ALL articles (including unpublished drafts)
- ❌ Anyone can insert, update, or delete articles without authentication
- ❌ Your admin authentication is completely bypassed at the database level

## The Solution

Apply the SQL script to enable RLS and create proper access policies.

## How to Fix (5 minutes)

### Step 1: Access Supabase SQL Editor

1. Go to [Supabase Dashboard](https://supabase.com/dashboard)
2. Select your project: **spaceflight-tracker** (fjiuvbbzplndtpajcykp)
3. Click on **SQL Editor** in the left sidebar
4. Click **New Query**

### Step 2: Run the Fix Script

1. Open the file `supabase-rls-fix.sql` in this directory
2. Copy the entire contents
3. Paste into the Supabase SQL Editor
4. Click **Run** or press `Cmd/Ctrl + Enter`

### Step 3: Verify the Fix

Run these verification queries in the SQL Editor:

```sql
-- Check that RLS is enabled
SELECT schemaname, tablename, rowsecurity
FROM pg_tables
WHERE tablename = 'articles';
```

Expected result: `rowsecurity = true`

```sql
-- View active policies
SELECT * FROM pg_policies WHERE tablename = 'articles';
```

Expected result: Should see 2 policies:
1. "Public users can read published articles"
2. "Service role has full access"

### Step 4: Test the Fix

#### Test 1: Public Access (Should Work)
Your public API route at `/api/blog/articles` should still return published articles:

```bash
curl http://localhost:3000/api/blog/articles?category=all&limit=5
```

#### Test 2: Admin Access (Should Work)
Your admin routes should still work normally (using the service role key).

#### Test 3: Direct Database Access with Anon Key (Should Be Restricted)
If someone tries to query unpublished articles using your anon key, they should now be blocked:

```javascript
// This should now only return published articles, not drafts
const { data } = await supabase
  .from('articles')
  .select('*')
  .eq('is_published', false);  // Will return empty, even if drafts exist
```

## What Changed

### Before (Insecure)
```
┌─────────────────┐
│  articles table │  ← RLS DISABLED
│  - published    │  ← Anyone can read
│  - drafts       │  ← Anyone can read 🚨
│  - all data     │  ← Anyone can modify 🚨
└─────────────────┘
```

### After (Secure)
```
┌─────────────────────────────────────┐
│  articles table (RLS ENABLED) ✓     │
├─────────────────────────────────────┤
│  Public Access:                     │
│  - Can read is_published=true only  │
│  - Cannot read drafts ✓             │
│  - Cannot insert/update/delete ✓    │
├─────────────────────────────────────┤
│  Service Role (Admin):              │
│  - Full access to everything ✓      │
└─────────────────────────────────────┘
```

## Your Code Impact

**No code changes needed!** Your existing code will continue to work:

- ✅ `/api/blog/articles` - Uses service role, will work normally
- ✅ `/api/admin/articles` - Uses service role, will work normally
- ✅ `/api/fetch-articles` - Uses service role, will work normally
- ✅ Client-side queries with anon key - Now properly restricted to published articles only

## Future Database Changes

When creating new tables in Supabase, **always**:

1. Enable RLS immediately: `ALTER TABLE table_name ENABLE ROW LEVEL SECURITY;`
2. Create appropriate policies before exposing to your API
3. Test with the anon key to ensure policies work correctly

## Additional Security Recommendations

1. **Rotate your anon key** if you suspect it may have been misused
2. **Review Supabase logs** for any suspicious access patterns
3. **Enable additional RLS policies** for other tables if they exist
4. **Set up database webhooks** for audit logging if needed

## Need Help?

If you encounter any issues:
1. Check the Supabase logs in your dashboard
2. Verify RLS is enabled: `SELECT * FROM pg_tables WHERE tablename = 'articles';`
3. Review policies: `SELECT * FROM pg_policies WHERE tablename = 'articles';`

---

**Status**: 🔴 Critical - Apply immediately
**Impact**: 🟢 No breaking changes to existing code
**Effort**: ⚡ 5 minutes
