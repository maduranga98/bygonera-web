# Bygone Era Photography Website

A vintage-themed photography portfolio and booking platform built with Next.js 14 and Tailwind CSS. This website showcases artistic photography with a nostalgic aesthetic, designed to attract customers and facilitate photography bookings.

## 🎨 Features

### Client-Facing Features

- **Vintage Portfolio Gallery** - Elegant photo displays with vintage filters and frames
- **Service Booking System** - Easy appointment scheduling for photography sessions
- **Contact Forms** - Multiple ways for clients to reach out
- **Testimonials Carousel** - Client reviews with vintage styling
- **About the Artist** - Photographer's story and artistic journey
- **Service Packages** - Clear pricing and package options
- **Blog/Stories** - Photography tips and client stories

### Technical Features

- **Responsive Design** - Optimized for all devices
- **SEO Optimized** - Enhanced search engine visibility
- **Performance Optimized** - Fast loading times with Next.js optimization
- **Firebase Integration** - Backend services for bookings and content management
- **Image Optimization** - Automatic image compression and lazy loading
- **Contact Management** - Lead capture and customer communication

## 🛠 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Backend:** Firebase (Firestore, Functions, Storage, Hosting)
- **Authentication:** Firebase Auth
- **Image Handling:** Next.js Image Optimization
- **Forms:** React Hook Form with validation
- **Animations:** Framer Motion (optional)
- **Icons:** Lucide React
- **Fonts:** Google Fonts (Vintage typography)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun
- Firebase account and project setup

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd bygonera-web
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Environment Setup**
   Create a `.env.local` file in the root directory:

   ```env
   NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
   ```

4. **Firebase Configuration**

   - Set up Firestore database
   - Configure Firebase Storage for image uploads
   - Set up Firebase Functions for contact forms and bookings
   - Configure Firebase Hosting (optional)

5. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
bygonera-web/
├── app/                    # Next.js App Router
│   ├── (routes)/          # Route groups
│   │   ├── gallery/       # Portfolio gallery
│   │   ├── services/      # Photography services
│   │   ├── booking/       # Appointment booking
│   │   ├── about/         # About the photographer
│   │   └── contact/       # Contact page
│   ├── api/               # API routes
│   ├── globals.css        # Global styles
│   ├── layout.js          # Root layout
│   └── page.js            # Home page
├── components/            # Reusable components
│   ├── ui/                # UI components
│   ├── forms/             # Form components
│   ├── gallery/           # Gallery components
│   └── layout/            # Layout components
├── lib/                   # Utility functions
│   ├── firebase.js        # Firebase configuration
│   ├── utils.js           # Helper functions
│   └── validations.js     # Form validations
├── public/                # Static assets
│   ├── images/            # Photography portfolio
│   ├── icons/             # Website icons
│   └── vintage-assets/    # Vintage design elements
└── styles/                # Additional stylesheets
```

## 🎨 Design System

### Color Palette (Vintage Theme)

- **Primary:** Sepia tones (#8B4513, #D2B48C)
- **Secondary:** Cream and ivory (#F5F5DC, #FFFFF0)
- **Accent:** Deep burgundy (#800020)
- **Text:** Charcoal (#36454F)

### Typography

- **Headings:** Vintage serif fonts (Playfair Display, Merriweather)
- **Body:** Clean serif (Crimson Text, Lora)
- **Accent:** Script fonts for decorative elements

### Components

- Vintage-styled buttons with ornate borders
- Antique photo frames for gallery images
- Aged paper textures for backgrounds
- Elegant dividers and ornamental elements

## 📱 Pages Overview

### Home Page

- Hero section with vintage photography slideshow
- Featured services with antique styling
- Client testimonials with period-appropriate design
- Call-to-action for bookings

### Gallery

- Masonry layout for portfolio images
- Category filters (Portraits, Weddings, Events, etc.)
- Lightbox with vintage frame overlays
- Image details and metadata

### Services

- Photography packages with vintage pricing cards
- Service descriptions with ornate typography
- Add-on services and customization options
- Booking CTAs throughout

### Booking System

- Multi-step booking form with vintage styling
- Calendar integration for availability
- Package selection and customization
- Contact information and special requests
- Payment integration (if required)

### About

- Photographer's story with vintage timeline
- Artistic philosophy and approach
- Equipment showcase with retro styling
- Personal photos with family heritage feel

### Contact

- Multiple contact methods
- Vintage-styled contact form
- Location map with antique styling
- Business hours and availability

## 🔧 Development

### Key Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues
```

### Code Quality

- ESLint configuration for Next.js
- Prettier for code formatting
- Pre-commit hooks for code quality
- TypeScript support (optional upgrade)

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Configure environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Firebase Hosting

1. Build the project: `npm run build`
2. Install Firebase CLI: `npm install -g firebase-tools`
3. Initialize Firebase: `firebase init hosting`
4. Deploy: `firebase deploy`

### Custom Server

1. Build the project: `npm run build`
2. Start the server: `npm start`
3. Configure reverse proxy (nginx/Apache)

## 📊 Performance Optimization

- **Images:** Next.js Image component with automatic optimization
- **Fonts:** Font optimization with `next/font`
- **Code Splitting:** Automatic with Next.js App Router
- **SEO:** Meta tags, structured data, and sitemap
- **Analytics:** Google Analytics integration
- **Monitoring:** Performance monitoring setup

## 🔒 Security & Privacy

- Form validation and sanitization
- Firebase security rules
- HTTPS enforcement
- Privacy policy and GDPR compliance
- Secure contact form handling

## 📈 SEO & Marketing

- **Meta Tags:** Dynamic meta descriptions and titles
- **Structured Data:** Photography business schema markup
- **Sitemap:** Automatic sitemap generation
- **Open Graph:** Social media preview optimization
- **Local SEO:** Google My Business integration
- **Analytics:** Conversion tracking setup

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -m 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For technical support or customization requests:

- Create an issue in the GitHub repository
- Contact the development team
- Check the documentation wiki

## 🎯 Future Enhancements

- **E-commerce Integration:** Sell prints and digital downloads
- **Client Portal:** Private galleries for clients
- **Mobile App:** React Native companion app
- **AI Features:** Automatic photo tagging and organization
- **Social Integration:** Instagram feed integration
- **Advanced Booking:** Resource management and team scheduling

---

**Built with ❤️ for capturing timeless moments**

_Bringing the elegance of bygone eras to modern photography_
