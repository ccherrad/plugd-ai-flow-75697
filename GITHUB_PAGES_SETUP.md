# GitHub Pages Custom Domain Setup Guide

## Current Configuration Status

✅ **Build & Deployment**: Working correctly
- GitHub Actions workflow builds and deploys to `gh-pages` branch
- CNAME file configured with `www.stckd.space`
- Vite base path set to `/` for custom domain

## Required Steps to Enable Custom Domain

### 1. DNS Configuration

You need to configure DNS records for `stckd.space` with your domain registrar:

**Option A: Using www subdomain (Recommended)**
Add a CNAME record:
```
Type: CNAME
Name: www
Value: ccherrad.github.io
TTL: 3600 (or your registrar's default)
```

**Option B: Using apex domain (stckd.space)**
Add A records pointing to GitHub's IPs:
```
Type: A
Name: @
Value: 185.199.108.153
```
```
Type: A
Name: @
Value: 185.199.109.153
```
```
Type: A
Name: @
Value: 185.199.110.153
```
```
Type: A
Name: @
Value: 185.199.111.153
```

And add CNAME for www:
```
Type: CNAME
Name: www
Value: ccherrad.github.io
```

### 2. GitHub Pages Settings

1. Go to your repository: https://github.com/ccherrad/stckd-ai-flow-75697
2. Click on **Settings** tab
3. Scroll to **Pages** section (left sidebar)
4. Under **Source**, ensure it's set to deploy from `gh-pages` branch
5. Under **Custom domain**, enter: `www.stckd.space`
6. Click **Save**
7. Wait for DNS check to complete (can take a few minutes)
8. Once DNS check passes, enable **Enforce HTTPS** (recommended)

### 3. Verify DNS Propagation

DNS changes can take 24-48 hours to fully propagate, but often complete in minutes.

Check DNS propagation:
```bash
# Check CNAME record
nslookup www.stckd.space

# Or use online tools
# https://www.whatsmydns.net/#CNAME/www.stckd.space
```

### 4. Test Your Site

Once DNS is configured and GitHub Pages recognizes the custom domain:

1. Visit: https://www.stckd.space
2. Verify SSL certificate is active (green padlock in browser)
3. Check that all assets load correctly

## Troubleshooting

### DNS Not Resolving
- Wait 24-48 hours for full DNS propagation
- Verify DNS records with your registrar
- Clear your browser cache
- Try accessing in incognito/private browsing mode

### 404 Errors
- Ensure `gh-pages` branch has the latest deployment
- Check that CNAME file exists in `gh-pages` branch
- Verify Vite config has `base: "/"`

### Assets Not Loading (404 on JS/CSS)
- Check browser console for asset path errors
- Verify `base: "/"` in `vite.config.ts`
- Trigger a new deployment by pushing to main branch

### HTTPS Certificate Issues
- GitHub automatically provisions SSL certificates
- Can take up to 24 hours after DNS is configured
- Temporarily disable "Enforce HTTPS" if needed during setup

## Alternative: Use GitHub Pages Default URL

If you prefer not to use a custom domain, you can use the default GitHub Pages URL:

1. Remove CNAME configuration:
   - Update `vite.config.ts`: change `base: "/"` to `base: "/stckd-ai-flow-75697/"`
   - Remove `cname: www.stckd.space` from `.github/workflows/deploy-pages.yml`
2. Commit and push changes
3. Access site at: https://ccherrad.github.io/stckd-ai-flow-75697/

## Current URLs

- **Default GitHub Pages**: https://ccherrad.github.io/stckd-ai-flow-75697/
- **Custom Domain** (once configured): https://www.stckd.space

## Next Steps

1. Configure DNS with your domain registrar
2. Set custom domain in GitHub Pages settings
3. Wait for DNS propagation
4. Test your site at https://www.stckd.space
