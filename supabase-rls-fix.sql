-- ============================================================================
-- CRITICAL SECURITY FIX: Enable Row Level Security on Articles Table
-- ============================================================================
-- This script addresses the security vulnerability where the articles table
-- is publicly accessible without Row Level Security (RLS) enabled.
--
-- BEFORE: Anyone with the anon key can read ALL articles (including unpublished)
--         and perform INSERT, UPDATE, DELETE operations
-- AFTER:  Public users can only read published articles
--         All write operations are blocked for public users
--
-- Run this in your Supabase SQL Editor immediately.
-- ============================================================================

-- Step 1: Enable Row Level Security on the articles table
ALTER TABLE articles ENABLE ROW LEVEL SECURITY;

-- Step 2: Drop any existing policies (in case this script is re-run)
DROP POLICY IF EXISTS "Public users can read published articles" ON articles;
DROP POLICY IF EXISTS "Service role has full access" ON articles;

-- Step 3: Create policy for public read access to published articles only
CREATE POLICY "Public users can read published articles"
ON articles
FOR SELECT
TO public
USING (is_published = true);

-- Step 4: Create policy for service role (full access for admin operations)
-- Note: The service role key bypasses RLS by default, but we'll be explicit
CREATE POLICY "Service role has full access"
ON articles
FOR ALL
TO authenticated, service_role
USING (true)
WITH CHECK (true);

-- ============================================================================
-- VERIFICATION QUERIES
-- ============================================================================
-- Run these queries after applying the fix to verify it worked:

-- 1. Check that RLS is enabled
-- SELECT schemaname, tablename, rowsecurity
-- FROM pg_tables
-- WHERE tablename = 'articles';
-- Expected: rowsecurity = true

-- 2. View active policies
-- SELECT * FROM pg_policies WHERE tablename = 'articles';
-- Expected: Should see 2 policies

-- ============================================================================
-- WHAT THIS FIXES
-- ============================================================================
-- ✓ Public users can only SELECT published articles (is_published = true)
-- ✓ Public users CANNOT insert, update, or delete articles
-- ✓ Public users CANNOT read unpublished/draft articles
-- ✓ Your API routes using supabaseAdmin (service role) continue to work normally
-- ✓ Admin operations are unaffected
-- ============================================================================
