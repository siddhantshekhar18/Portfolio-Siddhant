# Professional React Portfolio Website

A modern, responsive portfolio website built with React.js, featuring smooth animations and professional design.

## 🚀 Features

- **Responsive Design** - Works perfectly on all devices (mobile, tablet, desktop)
- **Modern UI** - Clean and professional interface with smooth animations
- **Component-Based** - Modular React components for easy maintenance
- **Sections Included**:
  - Navigation Bar with smooth scrolling
  - Hero Section with CTA buttons
  - About Section with education and interests
  - Skills Section with progress bars and tech stack
  - Projects Section with project cards
  - Contact Section with form and social links
  - Footer

## 📁 Project Structure

```
portfolio-website/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── styles/
│   │   ├── globals.css
│   │   ├── Navbar.css
│   │   ├── Hero.css
│   │   ├── About.css
│   │   ├── Skills.css
│   │   ├── Projects.css
│   │   ├── Contact.css
│   │   └── Footer.css
│   ├── assets/
│   ├── App.jsx
│   └── main.jsx
├── package.json
├── vite.config.js
└── .gitignore
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation Steps

1. **Navigate to the project directory**
   ```bash
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   The website will be available at `http://localhost:5173`

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 📝 How to Customize

### Personal Information
Edit the component files to add your personal information:

- **Navbar.jsx** - Update contact links and navigation
- **Hero.jsx** - Change name, title, and add CV link
- **About.jsx** - Add your photo, bio, education, and interests
- **Skills.jsx** - Update skills list and proficiency levels
- **Projects.jsx** - Add your projects with descriptions and links
- **Contact.jsx** - Update contact details and social media links
- **Footer.jsx** - Update footer information

### Images/Assets
1. Create an `assets` folder inside `src/`
2. Add your images there
3. Import and use them in components:
   ```jsx
   import profileImg from '../assets/profile.jpg';
   ```

### Colors & Theme
Colors are defined in `src/styles/globals.css` using CSS variables:
```css
:root {
  --primary-color: #6366f1;
  --secondary-color: #ec4899;
  /* ... other colors ... */
}
```

### Add Your Photos
The placeholder sections show where to add:
- Profile photo in Hero section
- About section photo
- Project preview images

Simply replace the image placeholders with actual images.

## 🎨 Design Features

- **Gradient Effects** - Modern gradient colors and animations
- **Smooth Animations** - Fade-in, slide-in, zoom, and scale animations
- **Hover Effects** - Interactive hover states on all clickable elements
- **Mobile Responsive** - Mobile-first design approach
- **Professional Layout** - Clean spacing and typography
- **Accessibility** - Semantic HTML and proper ARIA attributes

## 📱 Mobile Responsive

The design is fully responsive with breakpoints for:
- Mobile (< 768px)
- Tablet (768px - 1024px)
- Desktop (> 1024px)

## 🌐 Deployment

### Deploy to Netlify
1. Push your code to GitHub
2. Connect your GitHub repo to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`

### Deploy to Vercel
1. Push your code to GitHub
2. Connect your GitHub repo to Vercel
3. Vercel will automatically detect Vite and configure settings

## 📦 Dependencies

- **React** - UI library
- **React DOM** - DOM rendering
- **react-icons** - Icon library (icons from Font Awesome)
- **Vite** - Build tool

## 🔧 Technologies Used

- React.js
- CSS3
- HTML5
- Vite
- JavaScript (ES6+)

## 💡 Tips & Best Practices

1. **Update Your Info** - Replace all placeholder text with your actual information
2. **Add Real Images** - Replace image placeholders with your real photos
3. **Update Links** - Add actual links to your projects, GitHub, LinkedIn, etc.
4. **Optimize Images** - Compress images before adding them for better performance
5. **Test Responsiveness** - Check your portfolio on different devices
6. **SEO** - Update the title and meta tags in `public/index.html`

## 📧 Contact Form Setup

The contact form is currently set up to log messages to the console. To fully implement email functionality, you can:

1. **Use EmailJS**
   ```js
   import emailjs from '@emailjs/browser';
   // Configure and send emails
   ```

2. **Use Formspree** - No backend required, just form handling service

3. **Use Your Backend** - Send form data to your own server

## 🚀 Future Enhancements

- Add dark mode toggle
- Implement actual email functionality
- Add blog section
- Add testimonials section
- Add experience/timeline section
- Implement filtering for projects
- Add search functionality

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

Your Name - Your Portfolio Website

---

**Happy Coding! 🎉**
