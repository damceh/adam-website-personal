# Adam Almahdi Portfolio Website

A modern, professional portfolio website built with Next.js 15, featuring a clean slate design aesthetic with smooth animations and optimal performance.

## 🌟 Features

### ✨ **Design & User Experience**
- **Professional Slate Theme**: Clean, modern design with slate color palette
- **Typewriter Animation**: Dynamic title cycling through different roles
- **Smooth Animations**: Framer Motion powered interactions and scroll effects
- **Responsive Design**: Mobile-first approach, works perfectly on all devices
- **Theme Toggle**: Light/Dark/System theme switching with localStorage persistence
- **Grain Texture**: Subtle background noise effect for visual depth

### 🚀 **Technical Features**
- **Next.js 15**: Latest App Router with React 19 and TypeScript
- **Tailwind CSS v4**: Modern utility-first styling with custom design system
- **Performance Optimized**: Lighthouse scores >90, fast loading times
- **SEO Ready**: Complete meta tags, Open Graph, and structured data
- **Accessibility**: WCAG 2.1 AA compliance with proper ARIA labels
- **Security**: CSP headers, form protection, and secure deployment

### 📧 **Contact Integration**
- **Web3Forms**: Unlimited free form submissions
- **Webhook Support**: n8n automation integration
- **Form Validation**: Real-time client-side validation with error handling
- **Spam Protection**: Honeypot field and rate limiting

## 🛠️ **Tech Stack**

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **UI Components**: Custom shadcn/ui components
- **Forms**: Web3Forms integration
- **Deployment**: Vercel (zero-config)

## 🚀 **Quick Start**

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd adam-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` and add your Web3Forms access key:
   ```env
   NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_web3forms_key_here
   WEBHOOK_URL=your_n8n_webhook_url (optional)
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 **Content Management**

All content is managed through JSON files in the `/src/data` directory:

### Profile Information (`src/data/profile.json`)
```json
{
  "name": "Adam Almahdi",
  "title": "IT & Performance Marketing Specialist", 
  "description": "Your bio description...",
  "image": "/images/profile.jpg",
  "location": "Remote",
  "email": "hello@adamalmahdi.com",
  "socialLinks": [...]
}
```

### Work Experience (`src/data/experience.json`)
```json
[
  {
    "id": "exp-1",
    "company": "Company Name",
    "position": "Job Title",
    "period": "May 2023 - Present",
    "description": "Job description...",
    "technologies": ["Tech1", "Tech2"],
    "achievements": ["Achievement 1", "Achievement 2"]
  }
]
```

### Projects (`src/data/projects.json`)
```json
[
  {
    "id": "project-1",
    "title": "Project Name",
    "description": "Project description...",
    "technologies": ["Tech1", "Tech2"],
    "githubUrl": "https://github.com/...",
    "demoUrl": "https://demo.com",
    "featured": true,
    "status": "completed",
    "category": "Category"
  }
]
```

## 🎨 **Customization**

### Colors
The color scheme is defined in `src/app/globals.css` using CSS custom properties. The design uses the shadcn/ui color system with slate as the primary palette.

### Animations
Animation variants are defined in `src/lib/animations.ts`. You can customize timing, easing, and effects.

### Typography
Fonts are configured in `src/app/layout.tsx`:
- **Primary**: Inter (clean, modern)
- **Monospace**: JetBrains Mono (code/technical content)

## 📧 **Contact Form Setup**

### Web3Forms Configuration

1. **Get your access key**
   - Visit [Web3Forms](https://web3forms.com)
   - Sign up for a free account
   - Get your access key

2. **Add to environment variables**
   ```env
   NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_access_key_here
   ```

3. **Optional: Webhook Integration**
   ```env
   WEBHOOK_URL=https://your-n8n-instance.com/webhook/your-id
   ```

### Form Features
- ✅ Real-time validation
- ✅ Spam protection (honeypot)
- ✅ Success/error notifications
- ✅ Webhook integration for automation
- ✅ Accessible form design

## 🚀 **Deployment**

### Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Add environment variables in Vercel dashboard
   - Deploy automatically

3. **Custom Domain** (Optional)
   - Add your custom domain in Vercel dashboard
   - Update DNS settings
   - SSL certificate is automatic

### Environment Variables for Production
```env
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_production_key
WEBHOOK_URL=your_production_webhook_url
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

## 📊 **Performance**

### Lighthouse Scores (Target)
- **Performance**: >90
- **Accessibility**: >95
- **Best Practices**: >90
- **SEO**: >95

### Optimizations Included
- ✅ Image optimization with Next.js Image component
- ✅ Code splitting and lazy loading
- ✅ Minification and compression
- ✅ Security headers
- ✅ Font optimization
- ✅ Bundle size optimization

## 🔧 **Development**

### Available Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

### Project Structure
```
src/
├── app/                 # Next.js App Router
├── components/          # React components
│   ├── ui/             # Base UI components
│   ├── sections/       # Page sections
│   └── layout/         # Layout components
├── data/               # Content JSON files
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── types/              # TypeScript definitions
```

## 🛡️ **Security**

- **Content Security Policy**: Configured for Web3Forms
- **HTTPS Enforcement**: Automatic with Vercel
- **Form Protection**: Honeypot spam protection
- **Input Validation**: Client and server-side validation
- **Environment Variables**: Secure API key management

## 📱 **Browser Support**

- **Modern Browsers**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Mobile**: iOS Safari 14+, Chrome Mobile 90+
- **Progressive Enhancement**: Graceful degradation for older browsers

## 🤝 **Contributing**

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 **License**

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙋‍♂️ **Support**

For questions or support:
- **Email**: hello@adamalmahdi.com
- **GitHub Issues**: Create an issue in this repository

---

**Built with ⚡ by Adam Almahdi**

*This portfolio showcases the perfect blend of technical expertise and creative design vision.*
