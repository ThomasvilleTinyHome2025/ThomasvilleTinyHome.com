# Thomasville Tiny Homes - Setup Guide

Welcome! This guide will help you get your tiny house design platform up and running.

## 🚀 Quick Start

### 1. Configure Your Cash App

Open `shared/config.ts` and update your Cash App $cashtag:

```typescript
export const PAYMENT_CONFIG = {
  cashAppTag: "YourCashtagHere", // Replace with your actual cashtag (without $)
  // ...
};
```

**Example:** If your Cash App is `$ThomasvilleHomes`, enter `"ThomasvilleHomes"`

### 2. Update Business Information

In the same file, update your business details:

```typescript
export const BUSINESS_INFO = {
  name: "Thomasville Tiny Homes",
  legalName: "Thomasville Industries LLC",
  supportEmail: "your-email@example.com",
};
```

### 3. Get Your Domain

Purchase your domain name: **ThomasvilleTinyHomes.com**

Recommended registrars:
- Namecheap.com (~$10/year)
- Google Domains (~$12/year)
- Cloudflare (~$10/year)

## 🌐 Deployment Options

### Option A: Vercel (Recommended - Free Tier Available)

1. Create account at [vercel.com](https://vercel.com)
2. Install Vercel CLI: `npm install -g vercel`
3. In your project folder, run: `vercel`
4. Follow prompts to deploy
5. Connect your custom domain in Vercel dashboard

**Cost:** Free for hobby projects, $20/month for pro

### Option B: Cloudflare Pages (Free)

1. Create account at [pages.cloudflare.com](https://pages.cloudflare.com)
2. Connect your GitHub repository
3. Set build command: `pnpm build`
4. Set output directory: `dist`
5. Deploy!

**Cost:** Free

### Option C: Netlify (Free Tier Available)

1. Create account at [netlify.com](https://netlify.com)
2. Drag and drop your project folder
3. Connect custom domain
4. Done!

**Cost:** Free for starter, $19/month for pro

## 🔐 Admin Access

### How to Become Admin

The **first person to log in** automatically becomes the admin. Here's how:

1. Deploy your website
2. Visit your site and click "Start Designing"
3. Log in with your email (Manus OAuth)
4. You're now the admin!

### Access Admin Dashboard

Once logged in as admin:
- Visit: `https://your-domain.com/admin`
- Or click "Admin Login" in the footer

### Admin Features

- View all blueprint orders
- Track order status
- Update order progress
- Add tracking notes for customers
- See revenue statistics

## 💰 Payment Setup

### Cash App Setup

1. **Get your $cashtag:**
   - Open Cash App on your phone
   - Tap your profile icon
   - Your $cashtag is displayed at the top

2. **Update config file:**
   - Edit `shared/config.ts`
   - Replace `"YourCashtagHere"` with your actual cashtag

3. **Test payment flow:**
   - Create a test design
   - Go through checkout
   - Verify the Cash App link opens correctly

### How Payments Work

1. Customer designs their tiny house
2. They click "Get Blueprints" and choose a package
3. System generates Cash App link: `https://cash.app/$YourTag/price`
4. Customer pays you directly via Cash App
5. You receive notification on your phone
6. You mark order as paid in admin dashboard
7. System updates order status

**Important:** Payments go directly to YOUR Cash App account. The website never handles money.

## 📧 Order Management Workflow

### When You Receive an Order

1. **Check Admin Dashboard** (`/admin`)
   - New orders appear with status "Pending Payment"

2. **Wait for Payment**
   - Customer pays via Cash App
   - You receive notification on your phone

3. **Confirm Payment**
   - In admin dashboard, click "Update" on the order
   - Change status to "Processing"
   - Add note: "Payment received, generating blueprints"

4. **Generate Blueprints**
   - Create the blueprint PDFs (manually for now)
   - Update status to "Generating"

5. **Deliver Blueprints**
   - Email blueprints to customer
   - Update status to "Delivered"
   - Add note with delivery confirmation

### Customer Order Tracking

Customers can track their orders:
- Visit: `https://your-domain.com/track`
- Enter their Order ID
- See real-time status updates

## 🎨 Customization

### Change Pricing

Edit `server/routers.ts`:

```typescript
const prices = {
  image: 1500,    // $15 - Change to your price (in cents)
  basic: 3900,    // $39
  standard: 6900, // $69
  premium: 9900,  // $99
};
```

### Update Cost Estimator

Edit `client/src/pages/Designer.tsx`:

```typescript
const baseCostPerSqFt = 245; // Change base cost per square foot
```

### Modify Thomas's Tips

Edit messages in `client/src/pages/Designer.tsx` - search for "Thomas Says" or "Thomas's Tip"

## 📊 Database

Your database is automatically managed. It stores:
- User accounts
- Tiny house designs
- Blueprint orders
- Order tracking information

**Backup:** Database is automatically backed up by the hosting platform.

## 🆘 Troubleshooting

### Orders Not Showing in Admin

- Make sure you're logged in
- Verify you have admin role (first user is auto-admin)
- Check browser console for errors

### Payment Link Not Working

- Verify your $cashtag in `shared/config.ts`
- Make sure there's no $ symbol in the config
- Test the link manually in a browser

### Can't Access Admin Dashboard

- Clear browser cache
- Log out and log back in
- Verify URL is `/admin` not `/Admin`

## 📞 Support

Need help? Here's what to do:

1. Check this guide first
2. Review error messages in browser console (F12)
3. Check deployment logs in your hosting dashboard

## 🎯 Next Steps

Once deployed:

1. ✅ Test the entire flow (design → checkout → payment)
2. ✅ Create a test order and track it
3. ✅ Verify Cash App payments work
4. ✅ Share your website link!

## 💡 Marketing Tips

- Share on tiny house forums and Facebook groups
- Create Instagram account showing designs
- Offer first 10 customers a discount
- Ask customers to share their designs
- Consider Pinterest for visual marketing

---

**Congratulations!** Your tiny house design platform is ready to generate passive income! 🎉

Domain: **ThomasvilleTinyHomes.com**  
Admin: `https://your-domain.com/admin`  
Tracking: `https://your-domain.com/track`

