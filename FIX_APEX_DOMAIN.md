# Fix: "Domain does not resolve to the GitHub Pages server"

## The New Error

```
plugd.space is improperly configured
Domain does not resolve to the GitHub Pages server.
(NotServedByPagesError)
```

## What This Means

You successfully verified domain ownership! ✅

However, GitHub Pages is now checking the **apex domain** (`plugd.space`) and finding it doesn't resolve to GitHub's servers.

When you use a www subdomain (`www.plugd.space`), GitHub also requires the apex domain to be properly configured.

---

## The Solution: Add A Records for Apex Domain

You need to configure the **apex domain** (`plugd.space`) to point to GitHub's servers.

### Go to Your Domain Registrar

Add these **4 A records** for the apex domain:

```
Type: A
Name: @  (or leave blank, or "plugd.space" - depends on registrar)
Value: 185.199.108.153
TTL: 3600
```

```
Type: A
Name: @
Value: 185.199.109.153
TTL: 3600
```

```
Type: A
Name: @
Value: 185.199.110.153
TTL: 3600
```

```
Type: A
Name: @
Value: 185.199.111.153
TTL: 3600
```

**Important:** These are GitHub's official IP addresses for Pages.

---

## Complete DNS Configuration

After adding these, your **complete DNS setup** should be:

### For www subdomain (already configured ✓)
```
Type:  CNAME
Name:  www
Value: ccherrad.github.io
```

### For apex domain (need to add)
```
Type: A
Name: @
Value: 185.199.108.153

Type: A
Name: @
Value: 185.199.109.153

Type: A
Name: @
Value: 185.199.110.153

Type: A
Name: @
Value: 185.199.111.153
```

### For domain verification (already added ✓)
```
Type:  TXT
Name:  _github-pages-challenge-ccherrad
Value: [your verification code]
```

---

## What "@" Means

The `@` symbol represents the **apex/root domain** (plugd.space without any subdomain).

Different registrars may want:
- `@` (most common)
- Leave the Name field blank
- Enter the full domain: `plugd.space`

Check your registrar's documentation if unsure.

---

## Why This Is Required

GitHub Pages needs the apex domain configured for two reasons:

1. **Redirect traffic**: If someone visits `plugd.space`, GitHub can redirect to `www.plugd.space`
2. **SSL certificate**: GitHub provisions SSL for both apex and www subdomain
3. **Verification**: GitHub verifies you control the entire domain

---

## Timeline

1. **Add A records**: 2 minutes
2. **DNS propagation**: 5-60 minutes (usually < 30 minutes)
3. **GitHub verification**: Automatic once DNS propagates
4. **Error clears**: Within an hour
5. **HTTPS certificate**: Up to 24 hours

---

## How to Verify It's Working

### Check DNS propagation for A records:
Visit: https://dnschecker.org/#A/plugd.space

You should see all 4 GitHub IP addresses showing globally.

### Check www CNAME (already working):
Visit: https://dnschecker.org/#CNAME/www.plugd.space

Should show: `ccherrad.github.io` ✓

---

## After DNS Propagates

Once the A records propagate:

1. The error in GitHub Pages settings should clear automatically
2. Both `plugd.space` and `www.plugd.space` will work
3. GitHub will redirect `plugd.space` → `www.plugd.space` (since you specified www in custom domain)
4. HTTPS will be enabled for both

---

## Testing

After adding A records and waiting for propagation:

### Test apex domain:
```bash
# Should show GitHub's IPs
nslookup plugd.space
```

### Visit your site:
- https://www.plugd.space (your primary URL)
- https://plugd.space (will redirect to www)

Both should work!

---

## Troubleshooting

### "My registrar only allows one A record"
Most registrars allow multiple A records with the same name. Add all 4 separately.

### "Should I delete existing A records?"
If you have A records pointing elsewhere, yes - replace them with GitHub's IPs.

### "Can I use CNAME for apex?"
No. DNS standards don't allow CNAME for apex domains. You must use A records.

### "Error still showing after 1 hour"
- Verify all 4 A records are added correctly
- Check DNS propagation: https://dnschecker.org/#A/plugd.space
- Try removing and re-adding the custom domain in GitHub Pages settings
- Wait up to 24 hours for full propagation

---

## Alternative: Use Only www (Not Recommended)

If you don't want to configure the apex domain:

1. You could try using only `www.plugd.space`
2. But GitHub may still require apex configuration
3. Users who type `plugd.space` (without www) won't reach your site

**Recommendation:** Add the A records - it's the proper configuration.

---

## Summary of Next Steps

- [ ] Go to your domain registrar's DNS settings
- [ ] Add 4 A records for `@` (apex) pointing to GitHub's IPs:
  - 185.199.108.153
  - 185.199.109.153
  - 185.199.110.153
  - 185.199.111.153
- [ ] Keep existing CNAME for `www` (don't delete!)
- [ ] Save/publish DNS changes
- [ ] Wait 10-60 minutes for propagation
- [ ] Check: https://dnschecker.org/#A/plugd.space
- [ ] Verify GitHub Pages error clears
- [ ] Test: https://www.plugd.space
- [ ] Enable "Enforce HTTPS" once available

---

## Final DNS Configuration Checklist

Your complete DNS should have:
- [x] TXT record for `_github-pages-challenge-ccherrad` (verification)
- [x] CNAME record for `www` → `ccherrad.github.io`
- [ ] A record for `@` → `185.199.108.153`
- [ ] A record for `@` → `185.199.109.153`
- [ ] A record for `@` → `185.199.110.153`
- [ ] A record for `@` → `185.199.111.153`

Once all are configured, your site will be live! 🚀
