import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4 md:p-8 magic-bg-pattern relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Header */}
      <header className="max-w-7xl mx-auto mb-16 relative z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 magic-gradient-primary rounded-2xl shadow-lg flex items-center justify-center magic-glow">
              <span className="text-white font-bold text-lg">MB</span>
            </div>
            <span className="text-3xl font-black text-white tracking-tight magic-text-glow">MagicBento</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <button className="px-6 py-3 magic-bento-card text-white font-medium magic-hover-lift">Home</button>
            <button className="px-6 py-3 magic-bento-card text-white font-medium magic-hover-lift">Features</button>
            <button className="px-6 py-3 magic-bento-card text-white font-medium magic-hover-lift">Pricing</button>
            <button className="px-6 py-3 magic-bento-card text-white font-medium magic-hover-lift">Contact</button>
          </nav>
          <div className="md:hidden w-12 h-12 magic-bento-card flex items-center justify-center magic-hover-lift">
            <span className="text-white text-xl">☰</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto mb-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 magic-fade-in">
            <div className="inline-block px-4 py-2 magic-gradient-secondary rounded-full text-white text-sm font-medium magic-shimmer">
              ✨ Now Available
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-white leading-tight">
              Create <span className="magic-text-gradient">Magic</span> with Bento
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Transform your layouts with our elegant Magic Bento component library. Build stunning interfaces with smooth animations and sophisticated design patterns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="magic-button px-8 py-4 text-lg font-semibold">
                Get Started
              </button>
              <button className="px-8 py-4 magic-bento-card text-white font-semibold text-lg magic-hover-lift">
                View Demo
              </button>
            </div>
          </div>
          <div className="w-full h-[500px] magic-bento-card relative overflow-hidden magic-float">
            <div className="absolute inset-4 magic-gradient-accent rounded-2xl flex items-center justify-center magic-bg-grid">
              <div className="text-white text-center">
                <div className="text-6xl mb-4 magic-scale">🎨</div>
                <div className="text-2xl font-bold">Interactive Preview</div>
                <div className="text-gray-300 mt-2">Hover to explore</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto mb-24 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="magic-bento-card p-8 text-center magic-fade-in">
            <div className="w-16 h-16 magic-gradient-primary rounded-2xl mx-auto mb-6 flex items-center justify-center magic-icon">
              <span className="text-2xl">🚀</span>
            </div>
            <div className="text-3xl font-bold text-white mb-2">10K+</div>
            <div className="text-gray-400">Active Users</div>
          </div>
          <div className="magic-bento-card p-8 text-center magic-fade-in" style={{animationDelay: '0.1s'}}>
            <div className="w-16 h-16 magic-gradient-secondary rounded-2xl mx-auto mb-6 flex items-center justify-center magic-icon">
              <span className="text-2xl">⚡</span>
            </div>
            <div className="text-3xl font-bold text-white mb-2">99.9%</div>
            <div className="text-gray-400">Uptime</div>
          </div>
          <div className="magic-bento-card p-8 text-center magic-fade-in" style={{animationDelay: '0.2s'}}>
            <div className="w-16 h-16 magic-gradient-accent rounded-2xl mx-auto mb-6 flex items-center justify-center magic-icon">
              <span className="text-2xl">🎨</span>
            </div>
            <div className="text-3xl font-bold text-white mb-2">150+</div>
            <div className="text-gray-400">Components</div>
          </div>
          <div className="magic-bento-card p-8 text-center magic-fade-in" style={{animationDelay: '0.3s'}}>
            <div className="w-16 h-16 magic-gradient-success rounded-2xl mx-auto mb-6 flex items-center justify-center magic-icon">
              <span className="text-2xl">⭐</span>
            </div>
            <div className="text-3xl font-bold text-white mb-2">4.9/5</div>
            <div className="text-gray-400">Rating</div>
          </div>
        </div>
      </section>

      {/* Magic Bento Grid */}
      <section className="max-w-7xl mx-auto mb-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr">
          {/* Large Feature Card */}
          <div className="lg:col-span-2 lg:row-span-2 magic-bento-card p-8 magic-fade-in">
            <div className="w-20 h-20 magic-gradient-primary rounded-2xl mb-8 flex items-center justify-center magic-icon">
              <span className="text-3xl">🎯</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 magic-text-glow">Smart Layout Engine</h3>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Our intelligent layout system automatically arranges your content in the most visually appealing way, creating perfect bento-style grids that adapt to any screen size with elegant animations.
            </p>
            <button className="magic-button px-6 py-3 font-semibold">
              Learn More
            </button>
          </div>

          {/* Device Mockup */}
          <div className="magic-bento-card p-6 magic-fade-in" style={{animationDelay: '0.1s'}}>
            <div className="w-full h-48 magic-gradient-accent rounded-2xl mb-6 relative overflow-hidden magic-bg-grid">
              <div className="absolute inset-4 magic-gradient-primary rounded-xl flex items-center justify-center">
                <span className="text-3xl">💻</span>
              </div>
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Desktop Experience</h4>
            <p className="text-gray-400 text-sm">Optimized for large screens</p>
          </div>

          {/* Testimonial */}
          <div className="magic-bento-card p-6 magic-fade-in" style={{animationDelay: '0.2s'}}>
            <div className="w-12 h-12 magic-gradient-secondary rounded-2xl mb-4 flex items-center justify-center magic-icon">
              <span className="text-xl">👤</span>
            </div>
            <p className="text-gray-300 mb-3 text-sm">"This is exactly what I needed for my portfolio!"</p>
            <div className="text-white font-semibold">Sarah Johnson</div>
            <div className="text-gray-400 text-sm">Designer</div>
          </div>

          {/* Icon Grid */}
          <div className="magic-bento-card p-6 magic-fade-in" style={{animationDelay: '0.3s'}}>
            <div className="grid grid-cols-3 gap-3 mb-6">
              <div className="w-10 h-10 magic-gradient-primary rounded-xl flex items-center justify-center magic-icon">
                <span className="text-sm">🔧</span>
              </div>
              <div className="w-10 h-10 magic-gradient-secondary rounded-xl flex items-center justify-center magic-icon">
                <span className="text-sm">⚙️</span>
              </div>
              <div className="w-10 h-10 magic-gradient-accent rounded-xl flex items-center justify-center magic-icon">
                <span className="text-sm">🎨</span>
              </div>
              <div className="w-10 h-10 magic-gradient-success rounded-xl flex items-center justify-center magic-icon">
                <span className="text-sm">📱</span>
              </div>
              <div className="w-10 h-10 magic-gradient-warning rounded-xl flex items-center justify-center magic-icon">
                <span className="text-sm">💡</span>
              </div>
              <div className="w-10 h-10 magic-gradient-info rounded-xl flex items-center justify-center magic-icon">
                <span className="text-sm">🚀</span>
              </div>
            </div>
            <h4 className="text-white font-bold">Built-in Icons</h4>
          </div>

          {/* Smartphone Mockup */}
          <div className="magic-bento-card p-6 magic-fade-in" style={{animationDelay: '0.4s'}}>
            <div className="w-full h-64 magic-gradient-success rounded-2xl mb-6 relative overflow-hidden magic-bg-grid">
              <div className="absolute inset-4 magic-gradient-accent rounded-xl flex items-center justify-center">
                <span className="text-3xl">📱</span>
              </div>
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Mobile First</h4>
            <p className="text-gray-400 text-sm">Responsive design</p>
          </div>

          {/* Large Feature Card */}
          <div className="lg:col-span-2 magic-bento-card p-6 magic-fade-in" style={{animationDelay: '0.5s'}}>
            <div className="w-16 h-16 magic-gradient-warning rounded-2xl mb-6 flex items-center justify-center magic-icon">
              <span className="text-2xl">🎨</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-4 magic-text-glow">Customizable Themes</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Choose from our pre-built themes or create your own custom color schemes. Every component is fully customizable to match your brand with smooth transitions.
            </p>
            <div className="flex space-x-4">
              <button className="magic-button px-4 py-2 font-semibold">
                Themes
              </button>
              <button className="px-4 py-2 magic-bento-card text-white font-semibold magic-hover-lift">
                Customize
              </button>
            </div>
          </div>

          {/* Social Proof */}
          <div className="magic-bento-card p-6 magic-fade-in" style={{animationDelay: '0.6s'}}>
            <div className="w-12 h-12 magic-gradient-info rounded-2xl mb-4 flex items-center justify-center magic-icon">
              <span className="text-xl">🏆</span>
            </div>
            <h4 className="text-white font-bold mb-2">Trusted by 500+</h4>
            <p className="text-gray-400 text-sm">Companies worldwide</p>
          </div>
        </div>
      </section>

      {/* ReactBits Component Showcase */}
      <section className="max-w-7xl mx-auto mb-24 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 magic-text-glow">Component Showcase</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore our collection of ReactBits-inspired components designed for modern web applications.
          </p>
        </div>
        
        {/* Component Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Animated Card */}
          <div className="magic-bento-card p-8 magic-fade-in group">
            <div className="w-16 h-16 magic-gradient-primary rounded-2xl mb-6 flex items-center justify-center magic-icon group-hover:scale-110 transition-transform">
              <span className="text-2xl">✨</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Animated Cards</h3>
            <p className="text-gray-300 mb-6">Smooth hover animations and micro-interactions that delight users.</p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-400">ReactBits Style</span>
              <div className="w-8 h-8 magic-gradient-secondary rounded-lg flex items-center justify-center">
                <span className="text-xs">→</span>
              </div>
            </div>
          </div>

          {/* Interactive Forms */}
          <div className="magic-bento-card p-8 magic-fade-in group" style={{animationDelay: '0.1s'}}>
            <div className="w-16 h-16 magic-gradient-secondary rounded-2xl mb-6 flex items-center justify-center magic-icon group-hover:scale-110 transition-transform">
              <span className="text-2xl">📝</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Interactive Forms</h3>
            <p className="text-gray-300 mb-6">Beautiful form components with validation and smooth transitions.</p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-400">Form Components</span>
              <div className="w-8 h-8 magic-gradient-accent rounded-lg flex items-center justify-center">
                <span className="text-xs">→</span>
              </div>
            </div>
          </div>

          {/* Data Visualization */}
          <div className="magic-bento-card p-8 magic-fade-in group" style={{animationDelay: '0.2s'}}>
            <div className="w-16 h-16 magic-gradient-accent rounded-2xl mb-6 flex items-center justify-center magic-icon group-hover:scale-110 transition-transform">
              <span className="text-2xl">📊</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Data Visualization</h3>
            <p className="text-gray-300 mb-6">Charts and graphs with smooth animations and interactive features.</p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-400">Charts & Graphs</span>
              <div className="w-8 h-8 magic-gradient-success rounded-lg flex items-center justify-center">
                <span className="text-xs">→</span>
              </div>
            </div>
          </div>

          {/* Navigation Components */}
          <div className="magic-bento-card p-8 magic-fade-in group" style={{animationDelay: '0.3s'}}>
            <div className="w-16 h-16 magic-gradient-success rounded-2xl mb-6 flex items-center justify-center magic-icon group-hover:scale-110 transition-transform">
              <span className="text-2xl">🧭</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Navigation</h3>
            <p className="text-gray-300 mb-6">Modern navigation components with smooth transitions and animations.</p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-400">Nav Components</span>
              <div className="w-8 h-8 magic-gradient-warning rounded-lg flex items-center justify-center">
                <span className="text-xs">→</span>
              </div>
            </div>
          </div>

          {/* Modal & Overlays */}
          <div className="magic-bento-card p-8 magic-fade-in group" style={{animationDelay: '0.4s'}}>
            <div className="w-16 h-16 magic-gradient-warning rounded-2xl mb-6 flex items-center justify-center magic-icon group-hover:scale-110 transition-transform">
              <span className="text-2xl">🪟</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Modals & Overlays</h3>
            <p className="text-gray-300 mb-6">Elegant modal dialogs and overlay components with backdrop blur.</p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-400">Dialog Components</span>
              <div className="w-8 h-8 magic-gradient-info rounded-lg flex items-center justify-center">
                <span className="text-xs">→</span>
              </div>
            </div>
          </div>

          {/* Loading States */}
          <div className="magic-bento-card p-8 magic-fade-in group" style={{animationDelay: '0.5s'}}>
            <div className="w-16 h-16 magic-gradient-info rounded-2xl mb-6 flex items-center justify-center magic-icon group-hover:scale-110 transition-transform">
              <span className="text-2xl">⏳</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Loading States</h3>
            <p className="text-gray-300 mb-6">Beautiful loading spinners and skeleton components for better UX.</p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-400">Loading UI</span>
              <div className="w-8 h-8 magic-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-xs">→</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Components Demo */}
      <section className="max-w-7xl mx-auto mb-24 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 magic-text-glow">Interactive Components</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Experience our interactive components with real-time feedback and smooth animations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Dashboard Preview */}
          <div className="magic-bento-card p-8 magic-fade-in">
            <h3 className="text-2xl font-bold text-white mb-6 magic-text-glow">Dashboard Preview</h3>
            <div className="space-y-6">
              {/* Progress Bars */}
              <div className="space-y-3">
                <div className="flex justify-between text-sm text-gray-300">
                  <span>User Engagement</span>
                  <span>78%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                  <div className="magic-gradient-primary h-full rounded-full transition-all duration-1000" style={{width: '78%'}}></div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between text-sm text-gray-300">
                  <span>Revenue Growth</span>
                  <span>92%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                  <div className="magic-gradient-success h-full rounded-full transition-all duration-1000" style={{width: '92%'}}></div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between text-sm text-gray-300">
                  <span>Performance</span>
                  <span>85%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                  <div className="magic-gradient-accent h-full rounded-full transition-all duration-1000" style={{width: '85%'}}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Controls */}
          <div className="magic-bento-card p-8 magic-fade-in" style={{animationDelay: '0.1s'}}>
            <h3 className="text-2xl font-bold text-white mb-6 magic-text-glow">Interactive Controls</h3>
            <div className="space-y-6">
              {/* Toggle Switches */}
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Dark Mode</span>
                <div className="w-14 h-8 bg-gray-700 rounded-full p-1 cursor-pointer magic-hover-lift">
                  <div className="w-6 h-6 magic-gradient-primary rounded-full transition-transform duration-300 transform translate-x-6"></div>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Notifications</span>
                <div className="w-14 h-8 bg-gray-700 rounded-full p-1 cursor-pointer magic-hover-lift">
                  <div className="w-6 h-6 bg-gray-500 rounded-full transition-transform duration-300"></div>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Auto Save</span>
                <div className="w-14 h-8 bg-gray-700 rounded-full p-1 cursor-pointer magic-hover-lift">
                  <div className="w-6 h-6 magic-gradient-success rounded-full transition-transform duration-300 transform translate-x-6"></div>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex space-x-4 pt-4">
                <button className="magic-button px-6 py-2 text-sm font-semibold">
                  Primary
                </button>
                <button className="px-6 py-2 magic-bento-card text-white text-sm font-semibold magic-hover-lift">
                  Secondary
                </button>
                <button className="px-6 py-2 magic-gradient-accent rounded-lg text-white text-sm font-semibold magic-hover-lift">
                  Accent
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced UI Components */}
      <section className="max-w-7xl mx-auto mb-24 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 magic-text-glow">Advanced UI Components</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Professional-grade components for enterprise applications.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Calendar Component */}
          <div className="magic-bento-card p-6 magic-fade-in">
            <div className="w-12 h-12 magic-gradient-primary rounded-xl mb-4 flex items-center justify-center magic-icon">
              <span className="text-lg">📅</span>
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Calendar</h4>
            <p className="text-gray-400 text-sm mb-4">Interactive calendar with event management</p>
            <div className="grid grid-cols-7 gap-1 text-xs">
              {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
                <div key={i} className="text-gray-400 text-center py-1">{day}</div>
              ))}
              {[...Array(31)].map((_, i) => (
                <div key={i} className={`text-center py-1 rounded ${i === 14 ? 'magic-gradient-primary text-white' : 'text-gray-300'}`}>
                  {i + 1}
                </div>
              ))}
            </div>
          </div>

          {/* File Upload */}
          <div className="magic-bento-card p-6 magic-fade-in" style={{animationDelay: '0.1s'}}>
            <div className="w-12 h-12 magic-gradient-secondary rounded-xl mb-4 flex items-center justify-center magic-icon">
              <span className="text-lg">📁</span>
            </div>
            <h4 className="text-lg font-bold text-white mb-2">File Upload</h4>
            <p className="text-gray-400 text-sm mb-4">Drag & drop file upload with progress</p>
            <div className="border-2 border-dashed border-gray-600 rounded-lg p-4 text-center">
              <span className="text-gray-400 text-sm">Drop files here</span>
            </div>
          </div>

          {/* Search Component */}
          <div className="magic-bento-card p-6 magic-fade-in" style={{animationDelay: '0.2s'}}>
            <div className="w-12 h-12 magic-gradient-accent rounded-xl mb-4 flex items-center justify-center magic-icon">
              <span className="text-lg">🔍</span>
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Search</h4>
            <p className="text-gray-400 text-sm mb-4">Advanced search with filters</p>
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search..." 
                className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
              />
              <div className="absolute right-3 top-2.5">
                <span className="text-gray-400">⌘K</span>
              </div>
            </div>
          </div>

          {/* Notification Bell */}
          <div className="magic-bento-card p-6 magic-fade-in" style={{animationDelay: '0.3s'}}>
            <div className="w-12 h-12 magic-gradient-success rounded-xl mb-4 flex items-center justify-center magic-icon">
              <span className="text-lg">🔔</span>
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Notifications</h4>
            <p className="text-gray-400 text-sm mb-4">Real-time notification system</p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 magic-gradient-primary rounded-full"></div>
                <span className="text-gray-300 text-sm">New message</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 magic-gradient-success rounded-full"></div>
                <span className="text-gray-300 text-sm">Task completed</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 magic-gradient-warning rounded-full"></div>
                <span className="text-gray-300 text-sm">System update</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Table Component */}
      <section className="max-w-7xl mx-auto mb-24 relative z-10">
        <div className="magic-bento-card p-8 magic-fade-in">
          <h3 className="text-2xl font-bold text-white mb-6 magic-text-glow">Data Table</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left py-3 px-4 text-gray-300 font-semibold">User</th>
                  <th className="text-left py-3 px-4 text-gray-300 font-semibold">Status</th>
                  <th className="text-left py-3 px-4 text-gray-300 font-semibold">Progress</th>
                  <th className="text-left py-3 px-4 text-gray-300 font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody className="space-y-2">
                <tr className="border-b border-gray-800">
                  <td className="py-3 px-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 magic-gradient-primary rounded-full flex items-center justify-center">
                        <span className="text-xs">JD</span>
                      </div>
                      <div>
                        <div className="text-white font-medium">John Doe</div>
                        <div className="text-gray-400 text-sm">john@example.com</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <span className="px-2 py-1 magic-gradient-success rounded-full text-xs text-white">Active</span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="w-24 bg-gray-700 rounded-full h-2">
                      <div className="magic-gradient-primary h-full rounded-full" style={{width: '75%'}}></div>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <button className="magic-button px-3 py-1 text-xs">Edit</button>
                  </td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-3 px-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 magic-gradient-secondary rounded-full flex items-center justify-center">
                        <span className="text-xs">JS</span>
                      </div>
                      <div>
                        <div className="text-white font-medium">Jane Smith</div>
                        <div className="text-gray-400 text-sm">jane@example.com</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <span className="px-2 py-1 magic-gradient-warning rounded-full text-xs text-white">Pending</span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="w-24 bg-gray-700 rounded-full h-2">
                      <div className="magic-gradient-accent h-full rounded-full" style={{width: '45%'}}></div>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <button className="magic-button px-3 py-1 text-xs">Edit</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Kanban Board */}
      <section className="max-w-7xl mx-auto mb-24 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 magic-text-glow">Kanban Board</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Drag and drop task management with real-time updates.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* To Do Column */}
          <div className="magic-bento-card p-6 magic-fade-in">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-white">To Do</h3>
              <span className="w-6 h-6 magic-gradient-primary rounded-full flex items-center justify-center text-xs text-white">3</span>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-800 rounded-lg p-4 magic-hover-lift cursor-pointer">
                <h4 className="text-white font-medium mb-2">Design System Update</h4>
                <p className="text-gray-400 text-sm mb-3">Update the design system with new components</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">High Priority</span>
                  <div className="w-6 h-6 magic-gradient-primary rounded-full flex items-center justify-center">
                    <span className="text-xs">👨‍🎨</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-lg p-4 magic-hover-lift cursor-pointer">
                <h4 className="text-white font-medium mb-2">API Integration</h4>
                <p className="text-gray-400 text-sm mb-3">Integrate payment gateway API</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">Medium Priority</span>
                  <div className="w-6 h-6 magic-gradient-secondary rounded-full flex items-center justify-center">
                    <span className="text-xs">👨‍💻</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-lg p-4 magic-hover-lift cursor-pointer">
                <h4 className="text-white font-medium mb-2">User Testing</h4>
                <p className="text-gray-400 text-sm mb-3">Conduct user testing sessions</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">Low Priority</span>
                  <div className="w-6 h-6 magic-gradient-accent rounded-full flex items-center justify-center">
                    <span className="text-xs">👥</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* In Progress Column */}
          <div className="magic-bento-card p-6 magic-fade-in" style={{animationDelay: '0.1s'}}>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-white">In Progress</h3>
              <span className="w-6 h-6 magic-gradient-warning rounded-full flex items-center justify-center text-xs text-white">2</span>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-800 rounded-lg p-4 magic-hover-lift cursor-pointer">
                <h4 className="text-white font-medium mb-2">Mobile App Development</h4>
                <p className="text-gray-400 text-sm mb-3">Build React Native mobile app</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">High Priority</span>
                  <div className="w-6 h-6 magic-gradient-success rounded-full flex items-center justify-center">
                    <span className="text-xs">📱</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-lg p-4 magic-hover-lift cursor-pointer">
                <h4 className="text-white font-medium mb-2">Database Optimization</h4>
                <p className="text-gray-400 text-sm mb-3">Optimize database queries</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">Medium Priority</span>
                  <div className="w-6 h-6 magic-gradient-info rounded-full flex items-center justify-center">
                    <span className="text-xs">🗄️</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Done Column */}
          <div className="magic-bento-card p-6 magic-fade-in" style={{animationDelay: '0.2s'}}>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-white">Done</h3>
              <span className="w-6 h-6 magic-gradient-success rounded-full flex items-center justify-center text-xs text-white">4</span>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-800 rounded-lg p-4 opacity-60">
                <h4 className="text-white font-medium mb-2">Landing Page Design</h4>
                <p className="text-gray-400 text-sm mb-3">Complete landing page design</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">Completed</span>
                  <div className="w-6 h-6 magic-gradient-success rounded-full flex items-center justify-center">
                    <span className="text-xs">✅</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-lg p-4 opacity-60">
                <h4 className="text-white font-medium mb-2">Authentication System</h4>
                <p className="text-gray-400 text-sm mb-3">Implement user authentication</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">Completed</span>
                  <div className="w-6 h-6 magic-gradient-success rounded-full flex items-center justify-center">
                    <span className="text-xs">✅</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chat Interface */}
      <section className="max-w-7xl mx-auto mb-24 relative z-10">
        <div className="magic-bento-card p-8 magic-fade-in">
          <h3 className="text-2xl font-bold text-white mb-6 magic-text-glow">Chat Interface</h3>
          <div className="h-96 flex flex-col">
            {/* Chat Header */}
            <div className="flex items-center space-x-3 pb-4 border-b border-gray-700">
              <div className="w-10 h-10 magic-gradient-primary rounded-full flex items-center justify-center">
                <span className="text-sm">CS</span>
              </div>
              <div>
                <div className="text-white font-semibold">Customer Support</div>
                <div className="text-green-400 text-sm">Online</div>
              </div>
            </div>
            
            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto space-y-4 py-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 magic-gradient-primary rounded-full flex items-center justify-center">
                  <span className="text-xs">CS</span>
                </div>
                <div className="bg-gray-800 rounded-lg p-3 max-w-xs">
                  <p className="text-white text-sm">Hello! How can I help you today?</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 justify-end">
                <div className="bg-magic-gradient-primary rounded-lg p-3 max-w-xs">
                  <p className="text-white text-sm">Hi! I need help with the Magic Bento components.</p>
                </div>
                <div className="w-8 h-8 magic-gradient-secondary rounded-full flex items-center justify-center">
                  <span className="text-xs">ME</span>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 magic-gradient-primary rounded-full flex items-center justify-center">
                  <span className="text-xs">CS</span>
                </div>
                <div className="bg-gray-800 rounded-lg p-3 max-w-xs">
                  <p className="text-white text-sm">Of course! What specific component are you working with?</p>
                </div>
              </div>
            </div>
            
            {/* Chat Input */}
            <div className="flex space-x-3 pt-4 border-t border-gray-700">
              <input 
                type="text" 
                placeholder="Type your message..." 
                className="flex-1 bg-gray-800 border border-gray-600 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
              />
              <button className="magic-button px-6 py-2">
                Send
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Settings Panel */}
      <section className="max-w-7xl mx-auto mb-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Settings Navigation */}
          <div className="magic-bento-card p-6 magic-fade-in">
            <h3 className="text-xl font-bold text-white mb-6 magic-text-glow">Settings</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-3 p-3 rounded-lg bg-gray-800 cursor-pointer magic-hover-lift">
                <span className="text-lg">👤</span>
                <span className="text-white">Profile</span>
              </div>
              <div className="flex items-center space-x-3 p-3 rounded-lg cursor-pointer magic-hover-lift">
                <span className="text-lg">🔒</span>
                <span className="text-gray-300">Security</span>
              </div>
              <div className="flex items-center space-x-3 p-3 rounded-lg cursor-pointer magic-hover-lift">
                <span className="text-lg">🔔</span>
                <span className="text-gray-300">Notifications</span>
              </div>
              <div className="flex items-center space-x-3 p-3 rounded-lg cursor-pointer magic-hover-lift">
                <span className="text-lg">🎨</span>
                <span className="text-gray-300">Appearance</span>
              </div>
              <div className="flex items-center space-x-3 p-3 rounded-lg cursor-pointer magic-hover-lift">
                <span className="text-lg">⚙️</span>
                <span className="text-gray-300">Advanced</span>
              </div>
            </div>
          </div>

          {/* Profile Settings */}
          <div className="lg:col-span-2 magic-bento-card p-8 magic-fade-in" style={{animationDelay: '0.1s'}}>
            <h3 className="text-2xl font-bold text-white mb-6 magic-text-glow">Profile Settings</h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-6">
                <div className="w-20 h-20 magic-gradient-primary rounded-full flex items-center justify-center">
                  <span className="text-2xl">👤</span>
                </div>
                <div>
                  <button className="magic-button px-4 py-2 text-sm">Change Avatar</button>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">First Name</label>
                  <input 
                    type="text" 
                    value="John"
                    className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">Last Name</label>
                  <input 
                    type="text" 
                    value="Doe"
                    className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-gray-300 text-sm font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    value="john.doe@example.com"
                    className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-gray-300 text-sm font-medium mb-2">Bio</label>
                  <textarea 
                    rows={3}
                    className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500"
                    placeholder="Tell us about yourself..."
                  ></textarea>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <button className="magic-button px-6 py-2">Save Changes</button>
                <button className="px-6 py-2 magic-bento-card text-white magic-hover-lift">Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section - ReactBits Style */}
      <section className="max-w-7xl mx-auto mb-24 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 magic-text-glow">Choose Your Plan</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Flexible pricing plans designed to scale with your needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Starter Plan */}
          <div className="magic-bento-card p-8 magic-fade-in relative">
            <div className="absolute top-4 right-4">
              <span className="px-3 py-1 magic-gradient-primary rounded-full text-xs text-white font-medium">Popular</span>
            </div>
            <div className="w-16 h-16 magic-gradient-primary rounded-2xl mb-6 flex items-center justify-center magic-icon">
              <span className="text-2xl">🚀</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Starter</h3>
            <div className="text-4xl font-bold text-white mb-6">
              $29<span className="text-lg text-gray-400">/month</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-gray-300">
                <span className="w-5 h-5 magic-gradient-success rounded-full mr-3 flex items-center justify-center">
                  <span className="text-xs">✓</span>
                </span>
                50 Components
              </li>
              <li className="flex items-center text-gray-300">
                <span className="w-5 h-5 magic-gradient-success rounded-full mr-3 flex items-center justify-center">
                  <span className="text-xs">✓</span>
                </span>
                Basic Support
              </li>
              <li className="flex items-center text-gray-300">
                <span className="w-5 h-5 magic-gradient-success rounded-full mr-3 flex items-center justify-center">
                  <span className="text-xs">✓</span>
                </span>
                Documentation
              </li>
            </ul>
            <button className="w-full magic-button py-3 font-semibold">
              Get Started
            </button>
          </div>

          {/* Pro Plan */}
          <div className="magic-bento-card p-8 magic-fade-in relative scale-105" style={{animationDelay: '0.1s'}}>
            <div className="absolute top-4 right-4">
              <span className="px-3 py-1 magic-gradient-secondary rounded-full text-xs text-white font-medium">Best Value</span>
            </div>
            <div className="w-16 h-16 magic-gradient-secondary rounded-2xl mb-6 flex items-center justify-center magic-icon">
              <span className="text-2xl">⭐</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Pro</h3>
            <div className="text-4xl font-bold text-white mb-6">
              $79<span className="text-lg text-gray-400">/month</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-gray-300">
                <span className="w-5 h-5 magic-gradient-success rounded-full mr-3 flex items-center justify-center">
                  <span className="text-xs">✓</span>
                </span>
                150+ Components
              </li>
              <li className="flex items-center text-gray-300">
                <span className="w-5 h-5 magic-gradient-success rounded-full mr-3 flex items-center justify-center">
                  <span className="text-xs">✓</span>
                </span>
                Priority Support
              </li>
              <li className="flex items-center text-gray-300">
                <span className="w-5 h-5 magic-gradient-success rounded-full mr-3 flex items-center justify-center">
                  <span className="text-xs">✓</span>
                </span>
                Custom Themes
              </li>
              <li className="flex items-center text-gray-300">
                <span className="w-5 h-5 magic-gradient-success rounded-full mr-3 flex items-center justify-center">
                  <span className="text-xs">✓</span>
                </span>
                Advanced Analytics
              </li>
            </ul>
            <button className="w-full magic-button py-3 font-semibold">
              Start Free Trial
            </button>
          </div>

          {/* Enterprise Plan */}
          <div className="magic-bento-card p-8 magic-fade-in relative" style={{animationDelay: '0.2s'}}>
            <div className="w-16 h-16 magic-gradient-accent rounded-2xl mb-6 flex items-center justify-center magic-icon">
              <span className="text-2xl">🏢</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Enterprise</h3>
            <div className="text-4xl font-bold text-white mb-6">
              $199<span className="text-lg text-gray-400">/month</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-gray-300">
                <span className="w-5 h-5 magic-gradient-success rounded-full mr-3 flex items-center justify-center">
                  <span className="text-xs">✓</span>
                </span>
                Unlimited Components
              </li>
              <li className="flex items-center text-gray-300">
                <span className="w-5 h-5 magic-gradient-success rounded-full mr-3 flex items-center justify-center">
                  <span className="text-xs">✓</span>
                </span>
                24/7 Support
              </li>
              <li className="flex items-center text-gray-300">
                <span className="w-5 h-5 magic-gradient-success rounded-full mr-3 flex items-center justify-center">
                  <span className="text-xs">✓</span>
                </span>
                Custom Development
              </li>
              <li className="flex items-center text-gray-300">
                <span className="w-5 h-5 magic-gradient-success rounded-full mr-3 flex items-center justify-center">
                  <span className="text-xs">✓</span>
                </span>
                White-label Solutions
              </li>
            </ul>
            <button className="w-full magic-button py-3 font-semibold">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section - ReactBits Style */}
      <section className="max-w-7xl mx-auto mb-24 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 magic-text-glow">What Our Users Say</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Join thousands of satisfied developers and designers who trust our components.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="magic-bento-card p-8 magic-fade-in">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 magic-gradient-primary rounded-full mr-4 flex items-center justify-center">
                <span className="text-lg">👨‍💻</span>
              </div>
              <div>
                <div className="text-white font-semibold">Alex Chen</div>
                <div className="text-gray-400 text-sm">Senior Developer</div>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              "Magic Bento has transformed our development workflow. The components are not only beautiful but also incredibly well-optimized."
            </p>
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400">⭐</span>
              ))}
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="magic-bento-card p-8 magic-fade-in" style={{animationDelay: '0.1s'}}>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 magic-gradient-secondary rounded-full mr-4 flex items-center justify-center">
                <span className="text-lg">👩‍🎨</span>
              </div>
              <div>
                <div className="text-white font-semibold">Maria Rodriguez</div>
                <div className="text-gray-400 text-sm">UI/UX Designer</div>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              "The design quality and attention to detail in these components is outstanding. It's like having a professional design team at your fingertips."
            </p>
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400">⭐</span>
              ))}
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="magic-bento-card p-8 magic-fade-in" style={{animationDelay: '0.2s'}}>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 magic-gradient-accent rounded-full mr-4 flex items-center justify-center">
                <span className="text-lg">👨‍💼</span>
              </div>
              <div>
                <div className="text-white font-semibold">David Kim</div>
                <div className="text-gray-400 text-sm">Product Manager</div>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              "We've reduced our development time by 60% since switching to Magic Bento. The components are production-ready and highly customizable."
            </p>
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400">⭐</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto mb-24 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 magic-text-glow">Why Choose Magic Bento?</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Experience the perfect blend of elegance and functionality with our Magic Bento components.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="magic-bento-card p-8 text-center magic-fade-in">
            <div className="w-20 h-20 magic-gradient-primary rounded-2xl mx-auto mb-6 flex items-center justify-center magic-icon">
              <span className="text-3xl">⚡</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Lightning Fast</h3>
            <p className="text-gray-300">Optimized for performance with smooth 60fps animations and efficient rendering.</p>
          </div>
          <div className="magic-bento-card p-8 text-center magic-fade-in" style={{animationDelay: '0.1s'}}>
            <div className="w-20 h-20 magic-gradient-secondary rounded-2xl mx-auto mb-6 flex items-center justify-center magic-icon">
              <span className="text-3xl">🎨</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Beautiful Design</h3>
            <p className="text-gray-300">Elegant glassmorphism effects with sophisticated color gradients and smooth transitions.</p>
          </div>
          <div className="magic-bento-card p-8 text-center magic-fade-in" style={{animationDelay: '0.2s'}}>
            <div className="w-20 h-20 magic-gradient-accent rounded-2xl mx-auto mb-6 flex items-center justify-center magic-icon">
              <span className="text-3xl">🔧</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Easy to Use</h3>
            <p className="text-gray-300">Simple API with comprehensive documentation and ready-to-use examples.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto mb-24 relative z-10">
        <div className="magic-bento-card p-12 text-center">
          <div className="w-24 h-24 magic-gradient-primary rounded-3xl mx-auto mb-8 flex items-center justify-center magic-icon">
            <span className="text-4xl">🚀</span>
          </div>
          <h2 className="text-3xl font-bold text-white mb-4 magic-text-glow">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of developers and designers who are already building amazing interfaces with Magic Bento.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="magic-button px-8 py-4 text-lg font-semibold">
              Start Free Trial
            </button>
            <button className="px-8 py-4 magic-bento-card text-white font-semibold text-lg magic-hover-lift">
              View Documentation
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto pt-16 border-t border-gray-700/50 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 magic-gradient-primary rounded-2xl flex items-center justify-center magic-icon">
                <span className="text-white font-bold">MB</span>
              </div>
              <span className="text-2xl font-black text-white tracking-tight magic-text-glow">MagicBento</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Create stunning bento-style layouts with our comprehensive component library. Perfect for modern web applications.
            </p>
          </div>
          <div className="space-y-6">
            <h4 className="text-white font-bold text-lg">Product</h4>
            <div className="space-y-3">
              <div className="text-gray-400 hover:text-white cursor-pointer magic-hover-lift">Features</div>
              <div className="text-gray-400 hover:text-white cursor-pointer magic-hover-lift">Pricing</div>
              <div className="text-gray-400 hover:text-white cursor-pointer magic-hover-lift">Documentation</div>
              <div className="text-gray-400 hover:text-white cursor-pointer magic-hover-lift">Updates</div>
            </div>
          </div>
          <div className="space-y-6">
            <h4 className="text-white font-bold text-lg">Company</h4>
            <div className="space-y-3">
              <div className="text-gray-400 hover:text-white cursor-pointer magic-hover-lift">About Us</div>
              <div className="text-gray-400 hover:text-white cursor-pointer magic-hover-lift">Careers</div>
              <div className="text-gray-400 hover:text-white cursor-pointer magic-hover-lift">Blog</div>
              <div className="text-gray-400 hover:text-white cursor-pointer magic-hover-lift">Press</div>
            </div>
          </div>
          <div className="space-y-6">
            <h4 className="text-white font-bold text-lg">Support</h4>
            <div className="space-y-3">
              <div className="text-gray-400 hover:text-white cursor-pointer magic-hover-lift">Help Center</div>
              <div className="text-gray-400 hover:text-white cursor-pointer magic-hover-lift">Contact Support</div>
              <div className="text-gray-400 hover:text-white cursor-pointer magic-hover-lift">Community</div>
              <div className="text-gray-400 hover:text-white cursor-pointer magic-hover-lift">Status</div>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-700/50">
          <div className="text-center text-gray-400">
            © 2024 MagicBento. All rights reserved. Built with ❤️ for modern web design.
          </div>
        </div>
      </footer>
    </div>
  );
}

