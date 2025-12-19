# Cloudflare Pages Deployment Guide

## Prerequisites
- GitHub repository connected to Cloudflare Pages
- Cloudflare account with Pages enabled
- Custom domain (optional)

## Initial Setup

### 1. Connect GitHub Repository
1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Navigate to **Pages** → **Create a project**
3. Click **Connect to Git**
4. Select your GitHub account and the **Graphisoft** repository
5. Click **Begin setup**

### 2. Configure Build Settings

**Framework preset**: None (Static HTML)

**Build command**: 
```bash
echo "Static site - no build required"
```

**Build output directory**: 
```
/src/pages
```

**Root directory**: 
```
/
```

**Environment variables** (Production):
```
NODE_ENV=production
STRIPE_PUBLIC_KEY=pk_live_your_key_here
```

### 3. Deploy

Click **Save and Deploy**

Your site will be available at: `https://graphisoft-xxx.pages.dev`

## Custom Domain Setup

### 1. Add Custom Domain
1. Go to your Pages project → **Custom domains**
2. Click **Set up a custom domain**
3. Enter your domain (e.g., `yourdomain.com`)
4. Click **Continue**

### 2. Configure DNS
Cloudflare automatically configures DNS if your domain is on Cloudflare:
- CNAME record: `yourdomain.com` → `graphisoft-xxx.pages.dev`
- SSL certificate is automatically provisioned

### 3. Verify
Wait 2-5 minutes for DNS propagation and SSL activation.

## Continuous Deployment

Every push to your `main` branch triggers automatic deployment:

1. Push code to GitHub:
```bash
git add .
git commit -m "Update site"
git push origin main
```

2. Cloudflare Pages automatically:
   - Detects the push
   - Builds the site
   - Deploys to production
   - Purges CDN cache

## Branch Deployments

Every branch gets its own preview URL:
- `main` → Production
- `dev` → `https://dev.graphisoft-xxx.pages.dev`
- `feature-x` → `https://feature-x.graphisoft-xxx.pages.dev`

## Environment Variables

### Development
```
NODE_ENV=development
STRIPE_PUBLIC_KEY=pk_test_your_test_key
API_URL=http://localhost:3000
```

### Production
```
NODE_ENV=production
STRIPE_PUBLIC_KEY=pk_live_your_live_key
API_URL=https://api.yourdomain.com
```

Add these in: **Pages Project** → **Settings** → **Environment variables**

## Security Headers

Create `public/_headers` file (Cloudflare Pages):

```
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  X-XSS-Protection: 1; mode=block
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: geolocation=(), microphone=(), camera=()
  Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' https://js.stripe.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://api.stripe.com;
```

## Redirects & Rewrites

Create `public/_redirects` file:

```
# 301 Permanent redirects
/old-page  /new-page  301

# SPA fallback (if needed)
/*  /index.html  200

# Custom 404
/404  /404.html  404
```

## Caching Strategy

Cloudflare Pages automatically caches:
- Static assets (CSS, JS, images): 1 year
- HTML pages: No cache (always fresh)

To customize, add cache headers in `_headers`:

```
/assets/*
  Cache-Control: public, max-age=31536000, immutable

/images/*
  Cache-Control: public, max-age=31536000, immutable
```

## Performance Optimization

### 1. Enable Auto Minify
**Cloudflare Dashboard** → **Speed** → **Optimization**
- ✅ Auto Minify: JavaScript, CSS, HTML

### 2. Enable Brotli Compression
Enabled by default on Cloudflare Pages

### 3. Image Optimization
Use Cloudflare Images or optimize before upload:
- WebP format
- Responsive images
- Lazy loading

## Monitoring

### 1. Analytics
Enable Cloudflare Web Analytics:
**Pages Project** → **Analytics**

### 2. Deployment History
View all deployments:
**Pages Project** → **Deployments**

### 3. Logs
Real-time logs:
**Pages Project** → **Functions** → **Logs**

## Rollback

To rollback to a previous version:
1. Go to **Deployments**
2. Find the working deployment
3. Click **⋯** → **Rollback to this deployment**

## Troubleshooting

### Build Failures
- Check build logs in Cloudflare Pages
- Verify file paths are correct
- Ensure all dependencies are committed

### 404 Errors
- Verify file structure matches routing
- Check `_redirects` file
- Ensure `/404.html` exists

### SSL Issues
- Wait 5-10 minutes for provisioning
- Verify DNS records are correct
- Check "Always Use HTTPS" is enabled

## GitHub Actions (Optional)

For advanced workflows, create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Cloudflare Pages

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Deploy to Cloudflare Pages
        uses: cloudflare/pages-action@v1
        with:
          apiToken: ${{ secrets.CLOUDFLARE_API_TOKEN }}
          accountId: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
          projectName: graphisoft
          directory: src/pages
```

## Support

- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)
- [Cloudflare Community](https://community.cloudflare.com/)
- [Status Page](https://www.cloudflarestatus.com/)

---

**Last Updated**: 2025-12-17
