# 🚀 Portfolio Website - Quick Start Guide

## What You've Got

A professional, fully responsive React portfolio website with:
- ✅ Navigation with smooth scrolling
- ✅ Hero section with CTA buttons
- ✅ About section with education timeline
- ✅ Skills section with progress bars & tech stack
- ✅ Projects showcase with 6 project cards
- ✅ Contact form with social links
- ✅ Footer with social media
- ✅ Mobile responsive design
- ✅ Smooth animations & modern UI

## 📦 Project Location
```
c:\Users\Asus\Desktop\Portfilo-Siddhant\portfolio-website\
```

## ⚡ Quick Setup Steps

### Step 1: Install Dependencies
```bash
cd c:\Users\Asus\Desktop\Portfilo-Siddhant\portfolio-website
npm install
```

### Step 2: Run Development Server
```bash
npm run dev
```
Then open: `http://localhost:5173` in your browser

### Step 3: Customize Your Portfolio

#### 1. **Update Personal Information**

**In `src/components/Navbar.jsx`:**
- Change `YOUR NAME` to your name
- Update navigation links if needed

**In `src/components/Hero.jsx`:**
- Change `YOUR NAME`
- Update tagline (Full Stack Developer & Designer)
- Update description
- Add link to your CV (replace `#`)

**In `src/components/About.jsx`:**
- Update name and bio
- Change education details (college name, dates, CGPA)
- Update interests/tags
- Add your photo

**In `src/components/Skills.jsx`:**
- Modify skill names and percentages
- Update tech stack badges
- Add/remove skills as needed

**In `src/components/Projects.jsx`:**
- Replace project titles and descriptions
- Update technologies used
- Add GitHub and Live links
- Update project images

**In `src/components/Contact.jsx`:**
- Update email address
- Update phone number
- Update location
- Add social media links (GitHub, LinkedIn, Twitter, Instagram)

**In `src/components/Footer.jsx`:**
- Update name
- Update title/tagline
- Update social media links
- Update year in copyright

#### 2. **Add Your Images**

1. Create folder: `src/assets/`
2. Add your images there
3. Replace image placeholders in components

**For profile photo:**
```jsx
import profileImg from '../assets/your-photo.jpg';
// Then in JSX:
<img src={profileImg} alt="Your Name" />
```

**For project images:**
```jsx
import projectImg from '../assets/project-image.jpg';
// Then in JSX:
<img src={projectImg} alt="Project Name" />
```

#### 3. **Customize Colors (Optional)**

Edit `src/styles/globals.css`:
```css
:root {
  --primary-color: #6366f1;        /* Change primary color */
  --secondary-color: #ec4899;      /* Change secondary color */
  --text-dark: #1f2937;            /* Dark text color */
  --text-light: #6b7280;           /* Light text color */
  --bg-light: #f9fafb;             /* Light background */
  /* ... more colors ... */
}
```

## 📱 File Structure

```
src/
├── components/
│   ├── Navbar.jsx          ← Navigation
│   ├── Hero.jsx            ← Main banner
│   ├── About.jsx           ← About section
│   ├── Skills.jsx          ← Skills & tech stack
│   ├── Projects.jsx        ← Project showcase
│   ├── Contact.jsx         ← Contact & contact form
│   └── Footer.jsx          ← Footer
├── styles/
│   ├── globals.css         ← Global styles & colors
│   ├── Navbar.css
│   ├── Hero.css
│   ├── About.css
│   ├── Skills.css
│   ├── Projects.css
│   ├── Contact.css
│   └── Footer.css
├── assets/                 ← Add your images here
├── App.jsx                 ← Main component
└── main.jsx                ← Entry point
```

## 🎯 Important Customization Checklist

- [ ] Update all personal info (name, email, phone, location)
- [ ] Update education details
- [ ] Add 6 projects with descriptions and links
- [ ] Update skills and proficiency levels
- [ ] Add social media links
- [ ] Add your profile photo
- [ ] Add project images
- [ ] Update CV download link
- [ ] Setup email form (optional - see README.md for options)
- [ ] Update website title in `public/index.html`
- [ ] Test on mobile devices

## 🚀 Building for Production

```bash
npm run build
```
This creates a `dist/` folder with optimized production files.

## 📤 Deployment Options

### **Netlify** (Easiest)
1. Build: `npm run build`
2. Drag & drop `dist/` folder to Netlify
3. Or connect GitHub repo for auto-deploy

### **Vercel**
1. Connect GitHub repo to Vercel
2. Vercel auto-detects Vite and deploys

### **GitHub Pages**
1. Update `vite.config.js` with your repo name
2. Run: `npm run build`
3. Push to GitHub
4. Enable GitHub Pages in repo settings

## 🎨 Design Highlights

- **Modern gradients** - Smooth color transitions
- **Smooth animations** - Fade-in, slide-in effects
- **Hover effects** - Interactive elements
- **Mobile responsive** - Works on all screen sizes
- **Professional spacing** - Clean, balanced layout
- **Typography** - Easy to read fonts

## 💬 Contact Form Notes

Currently logs to console. To enable email:

**Option 1: Using EmailJS (Free)**
```bash
npm install @emailjs/browser
```

**Option 2: Using Formspree (No-code)**
- Visit formspree.io
- Create form
- Update form action in Contact.jsx

**Option 3: Your own backend**
- Point form to your server endpoint

## 🆘 Common Issues & Solutions

### Port 5173 already in use?
```bash
npm run dev -- --port 3000
```

### Images not showing?
- Ensure image path is correct
- Images should be in `src/assets/`
- Use relative import: `import img from '../assets/...'`

### Want different layout?
- Components are modular - reorder them in App.jsx
- CSS is separate - modify styles without affecting logic

## 📚 Learn More

- React: https://react.dev
- Vite: https://vitejs.dev
- CSS Grid/Flexbox: https://css-tricks.com

## 🎉 You're Ready!

Your portfolio website is ready to customize. Just:
1. Add your info
2. Add your images
3. Deploy it
4. Share the link!

Good luck! 🚀
