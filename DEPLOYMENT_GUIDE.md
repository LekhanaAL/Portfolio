# 🚀 GitHub Pages Deployment Guide

Your portfolio is now ready for deployment! Here's how to deploy it to GitHub Pages:

## 📋 Prerequisites

1. **GitHub Account**: Make sure you have a GitHub account
2. **Git**: Ensure Git is installed on your system
3. **Node.js**: Version 18 or higher (already installed)

## 🎯 Step-by-Step Deployment

### Step 1: Initialize Git Repository

```bash
# Navigate to your project root
cd /Users/lekhanaal/Portfolio

# Initialize git repository
git init

# Add all files
git add .

# Make initial commit
git commit -m "Initial commit: Portfolio website"
```

### Step 2: Create GitHub Repository

1. Go to [GitHub.com](https://github.com)
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Repository name: `Portfolio` (exactly as shown)
5. Make it **Public** (required for GitHub Pages)
6. **Don't** initialize with README, .gitignore, or license
7. Click "Create repository"

### Step 3: Connect and Push to GitHub

```bash
# Add the remote repository (replace YOUR_USERNAME with your actual GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/Portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" section (in the left sidebar)
4. Under "Source", select "GitHub Actions"
5. This will use the workflow we created automatically

### Step 5: Automatic Deployment

Once you push your code, GitHub Actions will automatically:
1. Build your project
2. Deploy it to GitHub Pages
3. Make it available at: `https://YOUR_USERNAME.github.io/Portfolio`

## 🔧 Manual Deployment (Alternative)

If you prefer manual deployment:

```bash
# Navigate to portfolio directory
cd portfolio

# Build the project
npm run build

# Deploy to GitHub Pages
npm run deploy
```

## 🌐 Your Live Portfolio

After deployment, your portfolio will be available at:
**https://YOUR_USERNAME.github.io/Portfolio**

## 📝 Important Notes

### Repository Name
- Your repository **must** be named `Portfolio` (case-sensitive)
- The base path in `vite.config.ts` is set to `/Portfolio/`
- If you use a different name, update the base path accordingly

### Custom Domain (Optional)
If you want to use a custom domain:
1. Go to repository Settings → Pages
2. Add your custom domain
3. Update the `homepage` field in `package.json`

### Updating Your Portfolio
To update your portfolio:
```bash
# Make your changes
# Then commit and push
git add .
git commit -m "Update portfolio content"
git push origin main
```

## 🎨 Customization

### Changing Colors
Edit the gradient colors in `src/App.tsx`:
```typescript
// Example: Change from blue-purple to green-teal
color: 'from-green-500 to-teal-600'
```

### Adding Projects
Add new projects to the `projects` array in `src/App.tsx`:
```typescript
{
  id: 'new-project',
  title: 'New Project',
  role: 'Your Role',
  // ... other details
}
```

### Updating Personal Info
Edit your personal information in the hero section of `src/App.tsx`.

## 🚨 Troubleshooting

### Build Errors
If you get build errors:
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Try building again
npm run build
```

### GitHub Pages Not Working
1. Check repository settings → Pages
2. Ensure repository is public
3. Verify the GitHub Actions workflow ran successfully
4. Check the Actions tab for any error messages

### 404 Errors
If you get 404 errors:
1. Verify the base path in `vite.config.ts` matches your repository name
2. Check that the `homepage` field in `package.json` is correct
3. Ensure the GitHub Actions workflow completed successfully

## 🎉 Success!

Once deployed, your portfolio will be:
- ✅ Live and accessible worldwide
- ✅ Automatically updated when you push changes
- ✅ Mobile-responsive
- ✅ SEO optimized
- ✅ Fast and modern

## 📞 Need Help?

If you encounter any issues:
1. Check the GitHub Actions logs
2. Verify all configuration files are correct
3. Ensure your repository name matches the base path
4. Make sure the repository is public

Your portfolio is now ready to impress potential employers and showcase your amazing work! 🚀 