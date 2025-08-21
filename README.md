# Rajwan Raju - Portfolio Website

A modern, responsive portfolio website built with Next.js 15+, React.js, Ant Design, Tailwind CSS, and TypeScript.

## 🚀 Features

- **Modern Design**: Clean and professional portfolio layout
- **Responsive**: Fully responsive design that works on all devices
- **Fast Performance**: Built with Next.js 15+ for optimal performance
- **TypeScript**: Full TypeScript support for better development experience
- **Ant Design**: Beautiful UI components from Ant Design
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Smooth Animations**: Hover effects and smooth transitions
- **SEO Optimized**: Meta tags and structured data for better SEO
- **Comprehensive Testing**: Full test coverage with Jest and React Testing Library

## 📋 Sections

1. **Hero Section** - Introduction and call-to-action
2. **Statistics** - Key metrics and achievements
3. **About** - Personal information and background
4. **Skills** - Technical expertise and technologies
5. **Services** - Offered services and expertise
6. **Portfolio** - Showcase of recent work
7. **Contact** - Get in touch section

## 🛠️ Tech Stack

- **Framework**: Next.js 15+
- **Language**: TypeScript
- **UI Library**: Ant Design
- **Styling**: Tailwind CSS
- **State Management**: Redux Toolkit
- **Icons**: Ant Design Icons
- **Images**: Next.js Image Optimization
- **Testing**: Jest, React Testing Library

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Rajwan-portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3333](http://localhost:3333) in your browser.

## 🧪 Testing

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage

# Run tests in CI mode
npm run test:ci
```

### Test Coverage

The project includes comprehensive test coverage for:

- **Component Testing**: All React components are tested with React Testing Library
- **Unit Testing**: Utility functions and hooks
- **Integration Testing**: Component interactions and user flows
- **Accessibility Testing**: ARIA attributes and keyboard navigation

### Test Structure

```
src/
├── components/
│   ├── __tests__/           # Test utilities and setup
│   ├── sections/
│   │   └── __tests__/       # Section component tests
│   └── layout/
│       └── __tests__/       # Layout component tests
├── app/
│   └── __tests__/           # Page component tests
└── utils/
    └── __tests__/           # Utility function tests
```

### Test Files

- `HeroSection.test.tsx` - Tests for hero section component
- `StatisticsSection.test.tsx` - Tests for statistics section
- `SkillsSection.test.tsx` - Tests for skills section with progress bars
- `PortfolioSection.test.tsx` - Tests for portfolio grid and filtering
- `ContactSection.test.tsx` - Tests for contact form and social links
- `Navbar.test.tsx` - Tests for navigation and mobile menu
- `page.test.tsx` - Tests for main page component
- `cn.test.ts` - Tests for utility functions

## 📁 Project Structure

```
src/
├── app/
│   ├── (root)/
│   │   └── page.tsx          # Home page
│   ├── globals.css           # Global styles
│   └── layout.tsx            # Root layout
├── components/
│   ├── common/               # Common components
│   ├── layout/               # Layout components
│   ├── sections/             # Page section components
│   └── __tests__/            # Test utilities
├── hooks/                    # Custom hooks
├── store/                    # Redux store
├── utils/                    # Utility functions
└── __tests__/                # Test files
```

## 🎨 Customization

### Colors
Update the color scheme in `src/app/globals.css`:
```css
@theme {
  --color-primary: #2563eb;
  --color-primary-hover: #3b82f6;
  --color-primary-active: #1d4ed8;
}
```

### Content
Update the content in `src/components/sections/` to match your information:
- Personal details
- Services offered
- Portfolio items
- Contact information

### Images
Replace images in the `public/img/` directory:
- `logo.png` - Your logo
- `rajwan.jpg` - Hero section image
- `rajwan.png` - About section image
- Portfolio images in `portfolio/` folder
- Brand logos in `brands/` folder

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
The app can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- DigitalOcean App Platform

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

For any questions or support, please contact:
- Email: rajwan@example.com
- Website: [Your Website]
- LinkedIn: [Your LinkedIn]

---

Made with ❤️ by Rajwan Raju
