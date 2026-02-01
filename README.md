# Anastasia Rose | Makeup Artist Portfolio

A Netlify CMS-powered portfolio website for makeup artist Anastasia Rose.

## Features

- **Easy Photo Management**: Upload, organize, and delete portfolio photos without touching code
- **5 Portfolio Categories**: Editorial, Beauty, Hair Campaigns, Fashion Week, Bridal
- **Responsive Design**: Looks great on desktop, tablet, and mobile
- **Lightbox Gallery**: Click any image to view full-size with keyboard navigation
- **Free Hosting**: Runs entirely on Netlify's free tier

---

## Deployment Guide

### Step 1: Push to GitHub

1. Create a new repository on GitHub (e.g., `makeup-artist-portfolio`)

2. Initialize and push the code:
   ```bash
   cd makeup-artist-cms
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/makeup-artist-portfolio.git
   git push -u origin main
   ```

### Step 2: Deploy to Netlify

1. Go to [netlify.com](https://netlify.com) and sign up/log in

2. Click **"Add new site"** → **"Import an existing project"**

3. Connect your GitHub account and select the `makeup-artist-portfolio` repo

4. Configure build settings:
   - **Build command**: `node build.js`
   - **Publish directory**: `.`

5. Click **"Deploy site"**

### Step 3: Enable Netlify Identity (Required for CMS)

1. In Netlify, go to **Site settings** → **Identity**

2. Click **"Enable Identity"**

3. Under **Registration**, select **"Invite only"** (important for security)

4. Under **Services** → **Git Gateway**, click **"Enable Git Gateway"**

### Step 4: Invite the Artist as Admin

1. Go to **Identity** → **Invite users**

2. Enter Anastasia's email address

3. She'll receive an email to set up her password

### Step 5: Connect Custom Domain (Optional)

1. Go to **Site settings** → **Domain management**

2. Click **"Add custom domain"**

3. Enter `makeup-artist.com`

4. Follow the DNS configuration instructions

---

## How to Use the CMS

### Logging In

1. Go to `makeup-artist.com/admin` (or your Netlify URL + `/admin`)
2. Click "Login with Netlify Identity"
3. Enter your email and password

### Adding a New Photo

1. Click a category (e.g., "Editorial")
2. Click **"New Editorial"**
3. Click **"Choose an image"** and upload your photo
4. (Optional) Add alt text for accessibility
5. (Optional) Set order number (lower = appears first)
6. Click **"Publish"**

### Deleting a Photo

1. Click a category
2. Find and click the image entry
3. Click **"Delete"** (in the top-right menu)
4. Confirm deletion

### Reordering Photos

1. Edit each photo
2. Set the **Order** field (0 = first, 1 = second, etc.)
3. Publish changes

---

## File Structure

```
makeup-artist-cms/
├── index.html              # Main website
├── admin/
│   ├── index.html          # CMS admin panel
│   └── config.yml          # CMS configuration
├── images/
│   ├── uploads/            # CMS-uploaded photos
│   └── anastasia-photo.jpg # About page headshot
├── _data/
│   ├── editorial/          # Editorial photo entries
│   ├── beauty/             # Beauty photo entries
│   ├── hair-campaigns/     # Hair campaign entries
│   ├── fashion-week/       # Fashion week entries
│   ├── bridal/             # Bridal photo entries
│   └── settings/           # Site settings
├── build.js                # Build script (generates index files)
├── netlify.toml            # Netlify configuration
└── README.md               # This file
```

---

## Technical Notes

### How the CMS Works

1. Artist uploads a photo via `/admin`
2. Netlify CMS creates a JSON file in `_data/[category]/`
3. Image is saved to `images/uploads/`
4. Netlify rebuilds the site (runs `build.js`)
5. Build script creates index files for each category
6. Frontend reads index files and displays images

### Image Storage

- Images are stored in the Git repository under `images/uploads/`
- Netlify's CDN serves them with automatic optimization
- Large repos may need Netlify Large Media (for repos > 100MB)

### Build Process

The `build.js` script:
1. Scans each category folder for JSON files
2. Extracts image paths, alt text, and order
3. Creates `_data/[category]-index.json` for the frontend

---

## Troubleshooting

### "Loading..." never disappears
- Check browser console for errors
- Verify `build.js` ran during deploy
- Check that `_data/[category]-index.json` files exist

### Images not appearing after upload
- Wait 30-60 seconds for Netlify to rebuild
- Hard refresh the page (Ctrl+Shift+R / Cmd+Shift+R)
- Check Netlify deploy logs for errors

### Can't log into admin
- Verify Netlify Identity is enabled
- Check that Git Gateway is enabled
- Ensure you've been invited via email

### Domain not working
- DNS changes can take up to 48 hours
- Verify DNS records match Netlify's instructions
- Check for HTTPS certificate provisioning

---

## Support

For technical issues, contact the developer.

For CMS usage questions, refer to [Netlify CMS Documentation](https://www.netlifycms.org/docs/).

---

## Quick Reference

| Task | How To |
|------|--------|
| Add photo | Admin → Category → New → Upload → Publish |
| Delete photo | Admin → Category → Select → Delete |
| Reorder photos | Edit photo → Change Order number → Publish |
| View site | Go to your domain or Netlify URL |
| View admin | Go to your domain + `/admin` |

---

**Built with Netlify CMS** | Free hosting on Netlify
