# Deployment Guide - Kidrove Workshop

## Prerequisites for Deployment
- GitHub account
- Vercel account (for frontend)
- Railway or Render account (for backend)
- MongoDB Atlas account (for cloud database)

## Step 1: Prepare MongoDB (Cloud)

### MongoDB Atlas Setup
1. Go to https://www.mongodb.com/cloud/atlas
2. Create free account
3. Create a cluster
4. Get connection string (looks like: `mongodb+srv://user:pass@cluster.mongodb.net/kidrove?retryWrites=true&w=majority`)

## Step 2: Deploy Backend

### Option A: Deploy to Railway

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Railway**
   - Go to https://railway.app
   - Click "New Project" → "Deploy from GitHub"
   - Select your repository
   - Add following environment variables:
     - `MONGODB_URI`: Your MongoDB Atlas connection string
     - `PORT`: 3000 (or any available port)
     - `FRONTEND_URL`: Your Vercel frontend URL
     - `NODE_ENV`: production

3. **Deploy**
   - Railway automatically deploys from Git pushes
   - Your API URL will be: `https://yourrailwayapp.railway.app`

### Option B: Deploy to Render

1. **Create render.yaml** in backend root:
   ```yaml
   services:
     - type: web
       name: kidrove-api
       env: node
       plan: free
       buildCommand: npm install
       startCommand: npm start
       envVars:
         - key: MONGODB_URI
           value: your_mongodb_atlas_url
         - key: FRONTEND_URL
           value: your_vercel_frontend_url
   ```

2. **Push to GitHub and deploy via Render Dashboard**

## Step 3: Deploy Frontend

### Deploy to Vercel

1. **Build locally**
   ```bash
   cd frontend
   npm run build
   ```

2. **Deploy to Vercel**
   ```bash
   # Install Vercel CLI
   npm install -g vercel
   
   # Deploy
   vercel
   ```

3. **Configure Environment**
   - In Vercel Dashboard → Settings → Environment Variables
   - Add: `VITE_API_URL=https://yourrailwayapp.railway.app`

4. **Update Frontend API URL**
   - Change in `frontend/src/components/RegistrationForm.jsx`:
   ```javascript
   const res = await fetch("https://yourrailwayapp.railway.app/api/enquiry", {
   ```

## Step 4: Update CORS

In `backend/.env`:
```
FRONTEND_URL=https://yourvercelapp.vercel.app
```

## Step 5: Verify Deployment

1. Open your Vercel frontend URL
2. Fill the registration form
3. Check if data appears in MongoDB Atlas

## Production Environment Variables

### Backend (.env)
```
PORT=3000
NODE_ENV=production
MONGODB_URI=mongodb+srv://user:password@cluster.mongodb.net/kidrove?retryWrites=true&w=majority
FRONTEND_URL=https://yourvercelapp.vercel.app
```

### Frontend (.env.production)
```
VITE_API_URL=https://yourrailwayapp.railway.app
```

## Domain Setup (Optional)

### Connect Custom Domain

**For Vercel:**
1. Go to Project Settings → Domains
2. Add your custom domain
3. Follow DNS configuration

**For Railway:**
1. Project Settings → Networking
2. Add custom domain

## Monitoring & Logs

### Railway
- Dashboard shows logs in real-time
- Deployment history visible

### Render
- Logs tab shows application output
- Email alerts for failures

### Vercel
- Analytics tab for performance
- Function logs for errors

## Troubleshooting Deployment

### CORS Errors
```
Access to XMLHttpRequest blocked by CORS policy
```
Solution: Update `FRONTEND_URL` in backend .env

### API Not Found
```
404 Error on /api/enquiry
```
Solution: Check backend is deployed and running on correct port

### Database Connection Failed
```
MongooseError: Cannot connect to MongoDB
```
Solution: 
- Verify MongoDB Atlas connection string
- Check IP whitelist allows your deployment server IP
- Set to 0.0.0.0/0 for testing (less secure)

## Post-Deployment

1. **Test in Production**
   - Fill form and verify submission
   - Check MongoDB for data

2. **Setup Monitoring**
   - Use Sentry for error tracking
   - Use Datadog for performance monitoring

3. **Enable HTTPS**
   - Vercel: automatic
   - Railway/Render: automatic

4. **Backup Strategy**
   - Enable MongoDB Atlas automated backups
   - Export data regularly

## Continuous Deployment

Both Railway and Render support automatic deployment on Git push to main branch.

```bash
# Your commits automatically deploy
git add .
git commit -m "Feature: Add new section"
git push origin main
```

## Cost Estimates

- **Vercel Frontend**: Free (Hobby plan)
- **Railway Backend**: Free (500 GB/month limit)
- **MongoDB Atlas**: Free (512 MB storage)
- **Total**: $0/month for this project

## Summary

Your live URLs:
- Frontend: `https://yourvercelapp.vercel.app`
- Backend: `https://yourrailwayapp.railway.app`
- Database: MongoDB Atlas (cloud)

## Need Help?

- Vercel Docs: https://vercel.com/docs
- Railway Docs: https://docs.railway.app
- MongoDB Atlas: https://docs.atlas.mongodb.com
- Render Docs: https://render.com/docs
