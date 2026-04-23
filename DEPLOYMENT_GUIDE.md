# Deployment Guide - Aramane Sweets Website

## 🚀 Deployment Options

### Option 1: Netlify (RECOMMENDED - FREE)

#### Step 1: Prepare
1. Ensure all files are in `sweets/` folder
2. Make sure `config.js` is updated with latest details

#### Step 2: Deploy
1. Go to [Netlify.com](https://netlify.com)
2. Click "New site from Git" or "Drag and drop"
3. Upload the entire `sweets/` folder
4. Wait for deployment (< 1 min)

#### Step 3: Get Custom Domain
1. Add domain in Netlify dashboard
2. Point nameservers to Netlify
3. Enable free HTTPS automatically

---

### Option 2: Vercel (FREE)

1. Go to [Vercel.com](https://vercel.com)
2. Import Git repository or upload folder
3. Click Deploy
4. Domain ready in 1 minute

---

### Option 3: GitHub Pages (FREE)

1. Create GitHub repo
2. Push `sweets/` folder to repo
3. Go to Settings > Pages
4. Select main branch
5. Site published in minutes

---

### Option 4: Traditional Hosting

#### Using cPanel (Most Common)

1. **FTP Login**
   ```
   Host: your-ftp-address
   Username: your-username
   Password: your-password
   ```

2. **Upload Files**
   - Connect via FileZilla or similar
   - Navigate to public_html folder
   - Drag & drop `sweets/` folder

3. **Access Website**
   - Visit: yourdomain.com/sweets/
   - Or point root to sweets folder

#### Using SSH (Linux)

```bash
# Connect to server
ssh username@your-server.com

# Navigate to public directory
cd /home/username/public_html

# Upload files (from local machine)
scp -r sweets/ username@your-server.com:/home/username/public_html/

# Done!
```

---

## 🌐 Domain Setup

### Using GoDaddy
1. Buy domain on GoDaddy
2. Get Netlify nameservers
3. Update nameservers in GoDaddy
4. Wait 24 hours for DNS propagation

### Using Namecheap
1. Buy domain on Namecheap
2. Get hosting provider nameservers
3. Update in Namecheap control panel
4. DNS active in minutes

---

## 🔒 SSL/HTTPS Setup

### Automatic (Recommended)
- Netlify: Automatic free SSL ✅
- Vercel: Automatic free SSL ✅
- GitHub Pages: Automatic free SSL ✅

### Manual Setup (cPanel)
1. Go to cPanel > SSL/TLS
2. Request free certificate (AutoSSL)
3. Wait for activation (5 min)
4. Enable HTTPS in config

---

## 📊 Analytics Setup

### Google Analytics

1. **Create Property**
   - Go to [analytics.google.com](https://analytics.google.com)
   - Create new property: "Aramane Sweets"
   - Get Measurement ID (G-XXXXX)

2. **Add to Website**
   Add to every HTML page in `<head>`:
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXX"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'G-XXXXX');
   </script>
   ```

3. **Track Events**
   ```javascript
   gtag('event', 'whatsapp_click', {
     'source': 'home_hero'
   });
   ```

---

## 📧 Email Setup

### Receiving Emails

#### Option 1: Gmail (Easiest)
1. Set up Gmail account for business
2. Use concierge@aramanesweets.com via Gmail
3. Forward all inquiries to Gmail

#### Option 2: cPanel Email
1. Create email account in cPanel
2. Use Roundcube/Horde webmail
3. Or configure desktop client

---

## 📱 Push Notifications (Future)

### Add to Page
```html
<script>
  // Firebase Cloud Messaging setup
  // For order updates, promotions, etc.
</script>
```

---

## 🔄 Backup & Maintenance

### Regular Backups

```bash
# Create backup (local machine)
tar -czf aramane-sweets-backup.tar.gz sweets/

# Or use hosting backup tools
# Most hosts provide automatic daily backups
```

### Monitoring

1. **Uptime Monitoring**
   - Use Uptime Robot (free)
   - Get alerts if site goes down

2. **Performance Monitoring**
   - Google PageSpeed Insights
   - Gtmetrix for detailed analysis

---

## 🛠️ Troubleshooting

### Website Not Loading
- Check files uploaded correctly
- Verify folder permissions (755)
- Check if domain DNS is active
- Clear browser cache

### WhatsApp Links Not Working
- Verify WhatsApp app installed
- Check number format (91XXXXXXXXXX)
- Test on different device
- Check internet connection

### Emails Not Received
- Check spam/junk folder
- Verify email configuration
- Test with another email service
- Check DNS MX records

---

## 🔐 Security Checklist

- [ ] Enable HTTPS/SSL
- [ ] Set strong passwords
- [ ] Regular backups enabled
- [ ] File permissions correct (755)
- [ ] .htaccess protection added
- [ ] WAF enabled (if available)
- [ ] DDoS protection active

---

## 📈 Launch Plan

### Week 1: Preparation
- [x] Website built
- [ ] Deploy to staging
- [ ] Test all links
- [ ] Verify WhatsApp
- [ ] Check mobile version

### Week 2: Deployment
- [ ] Point domain
- [ ] Enable SSL
- [ ] Setup analytics
- [ ] Test from multiple devices
- [ ] Go live!

### Week 3: Promotion
- [ ] Share on social media
- [ ] Send email to contacts
- [ ] Local advertising
- [ ] Google Business Profile
- [ ] Monitor analytics

---

## 📞 Post-Deployment Support

### Monitor WhatsApp
- Check daily for messages
- Respond within 2 hours
- Save important inquiries
- Track popular products

### Analytics Review
- Daily: Check traffic
- Weekly: Top pages analysis
- Monthly: Full report
- Quarterly: Growth analysis

---

## 🎯 Deployment Checklist

### Pre-Deployment
- [x] All files created
- [ ] Config.js updated
- [ ] Links tested
- [ ] Images verified
- [ ] Mobile tested
- [ ] SEO keywords added
- [ ] Redirects setup

### During Deployment
- [ ] Domain pointing
- [ ] SSL activated
- [ ] Files uploaded
- [ ] Analytics setup
- [ ] Email configured
- [ ] Backup automated

### Post-Deployment
- [ ] Website accessible
- [ ] All pages loading
- [ ] WhatsApp working
- [ ] Forms submitting
- [ ] Analytics tracking
- [ ] Mobile responsive
- [ ] Performance checked

---

## 🚀 Quick Deploy Commands

### Netlify CLI
```bash
# Install
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod --dir=sweets/
```

### Vercel CLI
```bash
# Install
npm install -g vercel

# Deploy
vercel sweets/
```

---

## 📊 Performance Optimization

### Image Optimization
```bash
# Compress images (online)
# https://tinypng.com
# https://squoosh.app
```

### Cache Setup
Add to `.htaccess`:
```apache
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
</IfModule>
```

---

## 🎓 Best Practices

1. **Keep Backups:** 3 recent backups always
2. **Monitor Performance:** Check weekly
3. **Update Content:** Monthly at minimum
4. **Respond to Inquiries:** Within 2 hours
5. **Track Analytics:** Review monthly
6. **Security Updates:** Apply as available
7. **Test Changes:** In staging first

---

## 📞 Hosting Recommendations

| Provider | Type | Price | Features |
|----------|------|-------|----------|
| Netlify | Static | Free | ✅ Recommended |
| Vercel | Static | Free | ✅ Excellent |
| GitHub Pages | Static | Free | ✅ Good |
| Bluehost | Shared | $2-10 | Backup needed |
| SiteGround | Shared | $3-7 | Good support |
| DigitalOcean | VPS | $5-20 | Advanced users |

---

## ✅ Final Checklist

- [x] Website developed ✅
- [x] WhatsApp integrated ✅
- [x] Business details added ✅
- [x] 4 locations configured ✅
- [x] Documentation complete ✅
- [ ] Domain ready
- [ ] Hosting selected
- [ ] SSL configured
- [ ] Analytics setup
- [ ] Live deployment

---

**Status:** Ready for deployment 🚀

**Contact:** +91 95354 55770 (WhatsApp)
**Email:** concierge@aramanesweets.com
**Website:** aramanesweets.com (Ready to go live)

---

For deployment support, contact your hosting provider or visit their documentation.
