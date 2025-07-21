# 🎨 Magic Bento - React Component Library

> A modern, elegant component library inspired by ReactBits.dev with beautiful animations and sophisticated design patterns.

![Magic Bento Preview](https://img.shields.io/badge/Magic-Bento-purple?style=for-the-badge&logo=react)
![React](https://img.shields.io/badge/React-19.1.0-blue?style=for-the-badge&logo=react)
![Next.js](https://img.shields.io/badge/Next.js-15.4.2-black?style=for-the-badge&logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-purple?style=for-the-badge&logo=tailwind-css)

## ✨ Overview

Magic Bento is a comprehensive React component library that combines the elegance of bento-style layouts with modern UI components inspired by ReactBits.dev. Built with Next.js 15, React 19, and Tailwind CSS 4, it provides developers with a complete toolkit for creating stunning web applications.

## 🚀 Features

### 🎯 Core Features

- **Bento-Style Layouts**: Intelligent grid system that automatically arranges content
- **Magic Animations**: Smooth, elegant animations with 60fps performance
- **Glassmorphism Design**: Modern glass-like effects with backdrop blur
- **Responsive Design**: Mobile-first approach with perfect scaling
- **Dark Theme**: Sophisticated dark theme with purple accents
- **TypeScript Support**: Full TypeScript support for better development experience

### 🎨 Design System

- **Magic Gradients**: 8 different gradient color schemes
- **Consistent Spacing**: Tailwind-based spacing system
- **Typography**: Optimized font hierarchy and readability
- **Interactive States**: Hover, focus, and active states for all components
- **Accessibility**: WCAG compliant with proper ARIA labels

## 📦 Components

### 🏠 Layout Components

- **Magic Bento Grid**: Main layout system with intelligent content arrangement
- **Responsive Container**: Max-width containers with proper spacing
- **Flexible Grid**: CSS Grid and Flexbox combinations

### 🎭 UI Components

#### Interactive Elements

- **Magic Buttons**: Primary, secondary, and accent button styles
- **Toggle Switches**: Animated toggle controls
- **Progress Bars**: Animated progress indicators
- **Form Inputs**: Styled input fields with focus states
- **Search Components**: Advanced search with keyboard shortcuts

#### Data Display

- **Data Tables**: Sortable tables with user avatars and actions
- **Kanban Board**: Drag-and-drop task management
- **Calendar**: Interactive calendar with event management
- **Stats Cards**: Metric display with icons and animations
- **User Cards**: Profile cards with avatars and information

#### Communication

- **Chat Interface**: Real-time chat with message bubbles
- **Notification System**: Toast notifications and status indicators
- **Modal Dialogs**: Overlay components with backdrop blur
- **Tooltips**: Contextual information display

#### Navigation

- **Settings Panel**: Sidebar navigation with categories
- **Breadcrumbs**: Hierarchical navigation
- **Pagination**: Page navigation controls
- **Tabs**: Content organization with smooth transitions

### 🎪 Animation System

#### Magic Animations

```css
.magic-fade-in          /* Smooth fade-in animation */
/* Smooth fade-in animation */
.magic-float            /* Subtle floating effect */
.magic-glow             /* Elegant glow effect */
.magic-shimmer          /* Shimmer animation on hover */
.magic-scale            /* Scale transform on hover */
.magic-rotate           /* Rotation animation */
.magic-slide-in; /* Slide-in from different directions */
```

#### Gradient System

```css
.magic-gradient-primary    /* Purple gradient */
/* Purple gradient */
.magic-gradient-secondary  /* Blue gradient */
.magic-gradient-accent     /* Pink gradient */
.magic-gradient-success    /* Green gradient */
.magic-gradient-warning    /* Orange gradient */
.magic-gradient-info       /* Cyan gradient */
.magic-gradient-error; /* Red gradient */
```

## 🛠️ Installation

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Quick Start

1. **Clone the repository**

```bash
git clone https://github.com/your-username/magic-bento.git
cd magic-bento
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Run the development server**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📖 Usage

### Basic Component Usage

```tsx
import { MagicBentoCard, MagicButton } from "@/components";

export default function MyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <MagicBentoCard className="p-8">
        <h1 className="text-2xl font-bold text-white magic-text-glow">
          Welcome to Magic Bento
        </h1>
        <p className="text-gray-300 mt-4">
          Create stunning layouts with our component library.
        </p>
        <MagicButton className="mt-6">Get Started</MagicButton>
      </MagicBentoCard>
    </div>
  );
}
```

### Bento Grid Layout

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr">
  {/* Large Feature Card */}
  <div className="lg:col-span-2 lg:row-span-2 magic-bento-card p-8">
    <div className="w-20 h-20 magic-gradient-primary rounded-2xl mb-8 flex items-center justify-center">
      <span className="text-3xl">🎯</span>
    </div>
    <h3 className="text-2xl font-bold text-white mb-4 magic-text-glow">
      Smart Layout Engine
    </h3>
    <p className="text-gray-300 mb-8">
      Our intelligent layout system automatically arranges your content.
    </p>
    <MagicButton>Learn More</MagicButton>
  </div>

  {/* Smaller Cards */}
  <div className="magic-bento-card p-6">
    <h4 className="text-lg font-bold text-white">Feature 1</h4>
    <p className="text-gray-400">Description here</p>
  </div>
</div>
```

## 🎨 Customization

### Theme Configuration

The design system is built on CSS custom properties and Tailwind CSS. You can customize colors, spacing, and animations by modifying the CSS variables in `app/globals.css`.

```css
:root {
  --magic-primary: 139 92 246; /* Purple */
  --magic-secondary: 59 130 246; /* Blue */
  --magic-accent: 236 72 153; /* Pink */
  --magic-success: 34 197 94; /* Green */
  --magic-warning: 251 146 60; /* Orange */
  --magic-info: 6 182 212; /* Cyan */
}
```

### Animation Customization

You can customize animation durations, easing functions, and effects by modifying the keyframes in `app/globals.css`.

```css
@keyframes magic-float {
  0%,
  100% {
    transform: translateY(0px) translateZ(0px);
  }
  50% {
    transform: translateY(-8px) translateZ(10px);
  }
}
```

## 📱 Responsive Design

Magic Bento is built with a mobile-first approach using Tailwind CSS breakpoints:

- **Mobile**: `sm:` (640px+)
- **Tablet**: `md:` (768px+)
- **Desktop**: `lg:` (1024px+)
- **Large Desktop**: `xl:` (1280px+)

## ♿ Accessibility

All components are built with accessibility in mind:

- **ARIA Labels**: Proper labeling for screen readers
- **Keyboard Navigation**: Full keyboard support
- **Focus Management**: Visible focus indicators
- **Color Contrast**: WCAG AA compliant color ratios
- **Semantic HTML**: Proper HTML structure

## 🚀 Performance

- **Optimized Animations**: 60fps animations using CSS transforms
- **Lazy Loading**: Components load only when needed
- **Tree Shaking**: Unused CSS is automatically removed
- **Image Optimization**: Next.js Image component for optimal loading
- **Code Splitting**: Automatic code splitting with Next.js

## 🧪 Testing

```bash
# Run tests
npm run test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

## 📦 Build

```bash
# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Setup

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **ReactBits.dev**: Inspiration for component design patterns
- **Tailwind CSS**: Utility-first CSS framework
- **Next.js**: React framework for production
- **React Community**: Amazing ecosystem and support

## 📞 Support

- **Documentation**: [docs.magicbento.dev](https://docs.magicbento.dev)
- **Issues**: [GitHub Issues](https://github.com/your-username/magic-bento/issues)
- **Discussions**: [GitHub Discussions](https://github.com/your-username/magic-bento/discussions)
- **Email**: support@magicbento.dev

## 🗺️ Roadmap

### v1.1.0 (Q1 2024)

- [ ] Additional form components
- [ ] Data visualization charts
- [ ] Advanced animation presets
- [ ] Theme builder tool

### v1.2.0 (Q2 2024)

- [ ] React Native support
- [ ] Vue.js port
- [ ] Figma plugin
- [ ] Component playground

### v2.0.0 (Q3 2024)

- [ ] AI-powered component generation
- [ ] Advanced theming system
- [ ] Performance optimizations
- [ ] Enterprise features

---

<div align="center">
  <p>Made with ❤️ by the Magic Bento Team</p>
  <p>
    <a href="https://github.com/your-username/magic-bento/stargazers">
      <img src="https://img.shields.io/github/stars/your-username/magic-bento" alt="Stars">
    </a>
    <a href="https://github.com/your-username/magic-bento/network">
      <img src="https://img.shields.io/github/forks/your-username/magic-bento" alt="Forks">
    </a>
    <a href="https://github.com/your-username/magic-bento/issues">
      <img src="https://img.shields.io/github/issues/your-username/magic-bento" alt="Issues">
    </a>
  </p>
</div>
