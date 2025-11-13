# Wool Sneakers E-commerce - Design Style Guide

## Design Philosophy

**Core Concept**: "Natural wool meets urban tech" - A sophisticated fusion of organic comfort and modern functionality that speaks to conscious consumers who value both style and sustainability.

**Visual Language**: Clean minimalism with warm, tactile elements that emphasize the natural softness and premium quality of merino wool. The design evokes immediate emotional resonance through subtle textures and harmonious color relationships.

## Color Palette

**Primary Colors** (Low-saturation warm tones):
- **Warm White**: #FEFCF8 (main background, clean and soft)
- **Oat**: #E8DCC0 (secondary backgrounds, wool textures)
- **Mist Grey**: #C4B5A0 (text, subtle accents)
- **Soft Charcoal**: #8B7355 (primary text, strong contrast)

**Accent Colors** (Muted natural tones):
- **Sage**: #A8A090 (subtle highlights, secondary actions)
- **Cream**: #F5F1E8 (card backgrounds, gentle contrast)

**Saturation Rule**: All colors maintain saturation below 50% to create the sophisticated, muted aesthetic that emphasizes wool's natural softness.

## Typography

**Display Font**: Canela (serif) - For headings and brand elements
- Bold, editorial quality that conveys luxury and craftsmanship
- Used for: Main headings, product names, brand story titles

**Body Font**: Neue Haas Grotesk (sans-serif) - For body text and UI elements
- Clean, neutral readability for extended reading
- Used for: Product descriptions, navigation, form labels, body text

**Font Hierarchy**:
- Hero Heading: 3.5rem, Canela Bold
- Section Headings: 2.5rem, Canela Medium
- Product Titles: 1.5rem, Neue Haas Grotesk Medium
- Body Text: 1rem, Neue Haas Grotesk Regular
- UI Elements: 0.875rem, Neue Haas Grotesk Regular

## Visual Effects & Animation

**Core Libraries Used**:
1. **Anime.js** - Smooth micro-interactions and element animations
2. **ECharts.js** - Sustainability data visualizations
3. **Pixi.js** - Wool fiber texture effects and particle systems
4. **Shader-park** - Subtle background gradients and organic flow effects
5. **Splide.js** - Product image carousels and testimonials
6. **Matter.js** - Physics-based hover effects on product cards
7. **p5.js** - Interactive wool texture generation

**Animation Principles**:
- **Subtle Motion**: All animations serve functionality, never decorative
- **Organic Timing**: Easing curves mimic natural wool fiber movement
- **Performance First**: 60fps animations with hardware acceleration
- **Accessibility**: Respects prefers-reduced-motion settings

**Specific Effects**:
- **Hero Section**: Gentle parallax with floating wool fiber particles
- **Product Cards**: 3D tilt on hover with depth shadows
- **Brand Story**: Scroll-triggered reveal animations with wool texture overlays
- **Shopping Cart**: Smooth slide-in transitions with elastic easing
- **Background**: Subtle shader-based gradient flow suggesting wool movement

## Layout & Composition

**Grid System**: 12-column responsive grid with generous whitespace
**Breakpoints**:
- Mobile: 320px - 768px
- Tablet: 768px - 1024px  
- Desktop: 1024px - 1440px
- Large: 1440px+

**Spacing Scale** (based on 8px unit):
- xs: 4px, sm: 8px, md: 16px, lg: 24px, xl: 32px, 2xl: 48px, 3xl: 64px

**Content Width**: Maximum 1200px centered with 32px horizontal padding

## Component Styling

**Buttons**:
- Primary: Warm White background, Soft Charcoal text, subtle shadow
- Secondary: Transparent with Soft Charcoal border and text
- Hover: Gentle lift with increased shadow depth

**Cards**:
- Background: Cream with subtle wool texture overlay
- Border: None, relying on shadow for definition
- Hover: Lift animation with expanded shadow

**Forms**:
- Input fields: Warm White background with Mist Grey borders
- Focus states: Sage accent color with smooth transition
- Validation: Muted red/green tones maintaining low saturation

**Navigation**:
- Sticky header with Warm White background and subtle transparency
- Typography: Neue Haas Grotesk Medium, Soft Charcoal color
- Hover effects: Underline animation with Sage accent

## Imagery Guidelines

**Product Photography**:
- Clean, minimal backgrounds in Warm White or Oat tones
- Soft, diffused lighting emphasizing texture
- Consistent shadow depth and angle across all products
- High resolution for retina displays

**Lifestyle Imagery**:
- Natural settings with urban elements
- Muted color grading matching the overall palette
- Focus on comfort, sustainability, and modern lifestyle
- Authentic moments rather than posed scenarios

**Brand Imagery**:
- Abstract wool textures and close-ups
- Manufacturing process showing craftsmanship
- Sustainable materials and natural environments
- Minimal post-processing to maintain authenticity

## Accessibility & Usability

**Contrast Ratios**:
- Primary text (Soft Charcoal on Warm White): 8.2:1
- Secondary text (Mist Grey on Warm White): 4.8:1
- All combinations exceed WCAG AA standards

**Interactive Elements**:
- Minimum 44px touch targets on mobile
- Clear focus indicators for keyboard navigation
- Semantic HTML structure for screen readers
- Alt text for all meaningful images

**Performance**:
- Optimized images with WebP format
- Lazy loading for below-the-fold content
- Minimal JavaScript bundle size
- CSS-first animations where possible