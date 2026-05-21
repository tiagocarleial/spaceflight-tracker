# Adsterra Ad Placement Guide

## ✅ Current Setup

Your Adsterra ads are now configured with the reusable `AdsterraAd` component.

**Ad Unit 1** (Horizontal Banner): `f3e65203656eb536de288445042d86d3`
**Ad Unit 2** (Vertical Banner): `a989577f8b00169fa31ebc43fdf7f8bd` (160x300)

---

## 📦 Two Ad Types Configured

### Ad Type 1: Horizontal Banner (effectivecpmnetwork.com)
```tsx
<AdsterraAd atOptions={{ key: 'f3e65203656eb536de288445042d86d3' }} />
```
- **Format**: Responsive horizontal banner
- **Best for**: Between content sections
- **Placement**: Homepage after "Next Launches"

### Ad Type 2: Vertical Banner (highperformanceformat.com)
```tsx
<AdsterraAd
  atOptions={{
    key: 'a989577f8b00169fa31ebc43fdf7f8bd',
    format: 'iframe',
    height: 300,
    width: 160,
    params: {}
  }}
  domain="iframe"
/>
```
- **Format**: 160x300 (vertical skyscraper)
- **Best for**: Sidebar, between vertical content
- **Placement**: Homepage after "Data Sources"

---

## 📐 Recommended Widget Format

### **Best: 4:1 (Horizontal Banner)**
- **Use case**: Desktop and mobile
- **Placement**: Between content sections
- **Viewability**: High
- **Examples**: 728x90, 970x90, responsive horizontal

### Alternative: 2:2 (Square)
- **Use case**: Sidebar or mid-content
- **Placement**: In content or sidebar
- **Viewability**: Medium-High
- **Examples**: 300x250, 336x280

### Not Recommended: 1:4 (Vertical)
- Your site doesn't have sidebars, so vertical formats won't work well

---

## 📍 Best Placement Locations (Ranked)

### **1. After "Next Launches" Section** ✅ (Already Added)
```tsx
{/* Adsterra Ad - After Next Launches */}
<section className="container mx-auto px-4">
  <AdsterraAd atOptions={{ key: 'f3e65203656eb536de288445042d86d3' }} />
</section>
```
**Why**: High engagement area, users just viewed launch cards

### **2. After "What We Track" Section**
```tsx
{/* After What We Track Section - Around line 273 */}
<section className="container mx-auto px-4 py-6">
  <AdsterraAd atOptions={{ key: 'YOUR_SECOND_AD_KEY_HERE' }} />
</section>
```
**Why**: Natural break after informational content

### **3. Before "Why Space Matters" Section**
```tsx
{/* Before Why Space Matters - Around line 275 */}
<section className="container mx-auto px-4 py-6">
  <AdsterraAd atOptions={{ key: 'YOUR_THIRD_AD_KEY_HERE' }} />
</section>
```
**Why**: Separates different content types

### **4. After "Data Sources" Section**
```tsx
{/* After Data Sources - Around line 420 */}
<section className="container mx-auto px-4 py-6">
  <AdsterraAd atOptions={{ key: 'YOUR_FOURTH_AD_KEY_HERE' }} />
</section>
```
**Why**: Bottom of page, last chance for engagement

---

## 📄 Other Pages to Add Ads

### `/launches` Page
**Best positions**:
1. After the filters/search bar, before launch cards
2. Between every 6-9 launch cards
3. After all launches, before footer

### `/iss` Page
**Best positions**:
1. Below the live map
2. Between statistics sections

### `/asteroids` Page
**Best positions**:
1. After the asteroid list/table
2. Between educational content

### `/rockets/[id]` Page
**Best positions**:
1. After rocket specifications
2. Between technical sections

---

## 🎨 Customizing the Component

If you need multiple ad formats or want to customize styling:

```tsx
// Example with custom styling
<div className="bg-gray-800/20 border border-gray-700 rounded-lg p-4 my-8">
  <p className="text-gray-500 text-xs text-center mb-2">Advertisement</p>
  <AdsterraAd atOptions={{ key: 'f3e65203656eb536de288445042d86d3' }} />
</div>
```

---

## ⚠️ Ad Best Practices

### DO:
- ✅ Place ads between natural content breaks
- ✅ Use 4:1 horizontal format for best performance
- ✅ Leave space around ads (padding/margin)
- ✅ Test on mobile and desktop
- ✅ Monitor ad performance in Adsterra dashboard

### DON'T:
- ❌ Place ads in navigation or header
- ❌ Add more than 3-4 ads per page
- ❌ Block primary content with ads
- ❌ Place ads too close together
- ❌ Use multiple formats on same page (stick to one format)

---

## 🔧 Getting Multiple Ad Units

To add more ads, you need to:

1. Go to your Adsterra dashboard
2. Create additional ad units
3. Get new ad keys for each unit
4. Add them to different pages/positions

Each ad unit will have a unique key like:
- `f3e65203656eb536de288445042d86d3` (your current one)
- `abc123...` (future ad unit 2)
- `xyz789...` (future ad unit 3)

---

## 📊 Testing Your Ads

After deployment, check:
1. Ads load correctly on desktop
2. Ads are responsive on mobile
3. No layout shifts when ads load
4. Ads don't cover important content
5. Page speed isn't significantly impacted

---

## 🚀 Current Implementation

✅ **Component created**: `/components/AdsterraAd.tsx`
✅ **Ad added to**: Homepage after "Next Launches"
✅ **Format**: Horizontal banner (4:1 recommended)

Your ad will appear automatically once deployed to production!
