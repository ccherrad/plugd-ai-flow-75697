# DNS & GitHub Pages Diagnosis for www.stckd.space

## Possible Issues Based on DNS Checker Results

### Scenario 1: DNS Not Configured
**Symptoms:** DNS checker shows "No record found" or no results
**Cause:** CNAME record hasn't been created at your domain registrar
**Solution:**
1. Log into your domain registrar (where you bought stckd.space)
2. Find DNS settings/DNS management
3. Add CNAME record:
   - Type: CNAME
   - Name: www
   - Value: ccherrad.github.io
   - TTL: 3600 (or default)
4. Save and wait 5-60 minutes for propagation

---

### Scenario 2: DNS Points to Wrong Target
**Symptoms:** DNS checker shows CNAME but points to something other than `ccherrad.github.io`
**Cause:** CNAME is misconfigured
**Common mistakes:**
- Points to `ccherrad.github.io/stckd-ai-flow-75697` (incorrect - no path in CNAME)
- Points to old hosting provider
- Points to `www.ccherrad.github.io` (incorrect - no www prefix)

**Solution:** Update CNAME to point to: `ccherrad.github.io`

---

### Scenario 3: DNS Correct But GitHub Pages Not Configured
**Symptoms:**
- DNS checker shows `www.stckd.space` → `ccherrad.github.io` ✓
- But visiting www.stckd.space shows 404 or doesn't load
**Cause:** GitHub Pages custom domain setting not configured

**Solution:**
1. Go to: https://github.com/ccherrad/stckd-ai-flow-75697/settings/pages
2. Under "Custom domain", enter: `www.stckd.space`
3. Click "Save"
4. Wait for GitHub to verify DNS (green checkmark should appear)
5. Enable "Enforce HTTPS"

---

### Scenario 4: Both Configured But Still Not Working
**Symptoms:**
- DNS propagated correctly
- GitHub Pages shows custom domain configured
- Still getting errors or 404

**Possible causes:**

#### A. DNS Not Fully Propagated
- Wait up to 24-48 hours
- Try accessing from different networks/devices
- Clear browser cache (Ctrl+Shift+Del)
- Try incognito/private browsing

#### B. HTTPS Certificate Not Ready
- GitHub can take up to 24 hours to provision SSL
- Temporarily try http://www.stckd.space (not recommended for production)
- Check GitHub Pages settings for certificate status

#### C. GitHub Pages Source Branch Issue
- Verify Source is set to `gh-pages` branch
- Check that `gh-pages` branch has latest deployment
- CNAME file should exist in `gh-pages` branch root

---

## Diagnostic Checklist

Run through this checklist to identify your specific issue:

### ✓ DNS Configuration
- [ ] CNAME record exists for `www`
- [ ] CNAME points to `ccherrad.github.io` (NOT the full URL with path)
- [ ] DNS checker shows green checkmarks globally
- [ ] TTL is reasonable (300-3600 seconds)

### ✓ GitHub Pages Settings
- [ ] Repository: https://github.com/ccherrad/stckd-ai-flow-75697/settings/pages
- [ ] Source branch: `gh-pages`
- [ ] Custom domain field contains: `www.stckd.space`
- [ ] DNS check shows green checkmark
- [ ] "Enforce HTTPS" can be enabled (means DNS working)

### ✓ Deployment Status
- [ ] `gh-pages` branch exists
- [ ] CNAME file in `gh-pages` contains: `www.stckd.space`
- [ ] Latest commit on `main` triggered workflow
- [ ] GitHub Actions workflow completed successfully

### ✓ Browser Access
- [ ] Clear browser cache
- [ ] Try incognito/private mode
- [ ] Try different browser
- [ ] Try different network (mobile data vs WiFi)

---

## Common Error Messages & Solutions

### "404 - File not found"
**When visiting www.stckd.space:**
- GitHub Pages not configured with custom domain
- Wrong source branch selected
- Deployment hasn't completed yet

**Solution:** Configure custom domain in GitHub Pages settings

### "DNS_PROBE_FINISHED_NXDOMAIN"
**Browser error:**
- DNS not configured or propagated
- CNAME record doesn't exist

**Solution:** Add/fix CNAME record at domain registrar

### "This site can't provide a secure connection"
- SSL certificate not yet provisioned
- Custom domain just configured (wait 24 hours)

**Solution:** Wait for GitHub to provision certificate, or temporarily disable "Enforce HTTPS"

### Page loads but no styling/broken layout
- Assets failing to load (404 on CSS/JS files)
- Base path misconfiguration

**Solution:** Verify `vite.config.ts` has `base: "/"` (already correct in your case)

---

## How to Check Each Component

### 1. Check DNS (Command Line)
```bash
# Check CNAME record
nslookup www.stckd.space

# Expected output should include:
# www.stckd.space canonical name = ccherrad.github.io
```

### 2. Check GitHub Pages Deployment
```bash
# Check if gh-pages branch has CNAME
git fetch origin gh-pages
git checkout gh-pages
cat CNAME
# Should output: www.stckd.space

# Check latest deployment
ls -la
# Should see: index.html, assets/, CNAME, etc.
```

### 3. Check GitHub Actions
Visit: https://github.com/ccherrad/stckd-ai-flow-75697/actions
- Latest workflow should be green (successful)
- Click on latest run to see deployment details

---

## What Should Be Working

Based on your current configuration:

1. ✅ **Vite Config**: Correctly set to `base: "/"` for custom domain
2. ✅ **GitHub Workflow**: Deploys to gh-pages with CNAME
3. ✅ **Build Files**: Successfully building and deploying

**What you need to configure:**
1. ⚠️ DNS CNAME record at your domain registrar
2. ⚠️ Custom domain setting in GitHub Pages

---

## Quick Test

To verify if the issue is DNS or GitHub configuration:

**Test the default GitHub Pages URL:**
```
https://ccherrad.github.io/stckd-ai-flow-75697/
```

- If this works: Issue is with custom domain (DNS or GitHub Pages setting)
- If this doesn't work OR assets don't load: Issue is with the deployment itself

**Note:** With current config (`base: "/"`), the default URL **won't work properly** because it's configured for custom domain. This is expected.

---

## Next Steps

1. **Check DNS Checker Results**: What does https://dnschecker.org/#CNAME/www.stckd.space show?
   - Green checks everywhere? → DNS is good, check GitHub Pages settings
   - Red X's or "No record"? → Need to configure DNS at registrar
   - Mixed results? → Wait for propagation (few hours)

2. **Check GitHub Pages Settings**: https://github.com/ccherrad/stckd-ai-flow-75697/settings/pages
   - Is custom domain field filled in?
   - Does it show a green checkmark next to the domain?
   - Is the source set to `gh-pages` branch?

3. **Report back with:**
   - DNS checker results (CNAME value if any)
   - GitHub Pages custom domain status
   - Any error messages when visiting www.stckd.space
