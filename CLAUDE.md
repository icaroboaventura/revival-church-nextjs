# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
Revival Church is a modern Next.js 15 website for a church featuring contemporary design with PocketBase CMS integration. The project uses a sophisticated design system with alternating color schemes and modern UI patterns built with TypeScript, Tailwind CSS 4, and DaisyUI.

## Development Commands

### Core Development
- `pnpm dev` - Start development server with Turbopack
- `pnpm build` - Build for production  
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

### PocketBase Integration
- `pnpm typegen` - Generate TypeScript types from PocketBase schema
- Requires `.env.local` with `NEXT_PUBLIC_PB_URL` set to PocketBase instance

## Architecture Overview

### CMS Architecture
The application uses **PocketBase** as a headless CMS with auto-generated TypeScript types:

- **Data Layer**: `/src/lib/data-fetcher.ts` - Generic functions for fetching PocketBase collections
- **PocketBase Client**: `/src/lib/pocketbase.ts` - Configured PocketBase instance
- **Type Safety**: `pocketbase-types.ts` - Auto-generated types via `pocketbase-typegen`
- **Data Actions**: `/src/actions/fetchPublicData.ts` - Server actions for specific data fetching

### Data Flow Pattern
```typescript
// Server-side data fetching in layout/pages
const navbarData = await navbar(); // Fetches Contact collection
const homeData = await home(); // Fetches Home collection
const teamData = await teamMembers(); // Fetches TeamMember collection

// Props passed to components with typed interfaces
// <Component props={typedData} />
```

### Collection Schema
Key PocketBase collections:
- `contact` - Logo, social links for navbar/footer
- `home` - Hero, church, vision/mission/values content
- `teamMember` - Team member profiles with images and descriptions

### Component Architecture
**Section-Based Design**: Each major page section is a separate component following the alternating color pattern:

1. **Hero** (Primary) → **Church** (Secondary) → **Vision/Mission/Values** (Primary) → **Team** (Secondary) → **Ministerien** (Primary) → **Footer** (Secondary)

**Interactive Card Pattern**: All cards use consistent hover/click states:
- Desktop: Hover reveals additional content
- Mobile: Click/tap toggles between states  
- Unified component structure with gradient overlays and accent lines

### Styling Architecture

**Custom DaisyUI Theme**: `revival` theme with custom color palette defined in `globals.css`:
- Primary: `#e53a02` (orange-red)
- Secondary: `#2b0b00` (dark brown)
- Base colors: Warm cream tones

**Typography System**:
- **Inter**: Body text, UI elements (`font-inter`)
- **Playfair Display**: Headings, titles (`font-playfair`)

**Layout Pattern**: All sections follow consistent structure with gradients, decorative elements, responsive content, and bottom accent lines.

## Key Development Patterns

### Adding New CMS Collections
1. Update PocketBase schema
2. Run `pnpm typegen` to regenerate types
3. Add new fetch functions in `/src/actions/fetchPublicData.ts`
4. Use typed responses in components

### Creating Interactive Cards
Follow the established pattern with:
- `useState` for mobile click states
- Combined hover/click interactions: `${isActive ? "opacity-100" : "opacity-0 md:group-hover:opacity-100"}`
- Proper gradient overlays using section colors
- Bottom accent lines with hover animations

### File Generation
Images are served via PocketBase: `pb.files.getURL(record, record.fieldName)`
Placeholder images use: `/api/placeholder/[width]/[height]`

## Design System

### Color Scheme Pattern
The website follows a **Primary → Secondary → Primary → Secondary** alternating pattern across sections:

1. **Hero Section**: Primary colors
2. **Church Section**: Secondary colors  
3. **Vision/Mission/Values**: Primary colors
4. **Team Section**: Secondary colors
5. **Ministerien Section**: Primary colors
6. **Footer**: Secondary colors
7. **Events Page Hero**: Primary colors
8. **Events Grid**: Base colors (neutral)

### Typography
- **Primary Font**: Inter (body text, navigation, buttons)
- **Display Font**: Playfair Display (headings, titles)
- **Usage**: 
  - Use `font-playfair` for all main headings and titles
  - Use `font-inter` (default) for body text, descriptions, navigation

### Color Guidelines

#### DaisyUI Theme Colors (Use Instead of Basic Colors)
- **Instead of `white`** → Use `text-base-100` or `bg-base-100`
- **Instead of `black`** → Use `text-secondary` or `bg-secondary`
- **Primary Colors**: `bg-primary`, `text-primary`, `border-primary`
- **Secondary Colors**: `bg-secondary`, `text-secondary`, `border-secondary`
- **Base Colors**: `bg-base-100`, `bg-base-200`, `bg-base-300` for backgrounds
- **Content Colors**: `text-base-content`, `text-primary-content`, `text-secondary-content`

#### Color Application
- **Primary Sections**: Use `from-primary`, `to-primary`, `bg-primary` gradients
- **Secondary Sections**: Use `from-secondary`, `to-secondary`, `bg-secondary` gradients
- **Neutral Sections**: Use `from-base-100`, `to-base-200` gradients

#### Border Radius Guidelines
- **Always use `rounded-box`** instead of other rounded classes (e.g., `rounded-lg`, `rounded-xl`)
- This ensures consistency with the DaisyUI theme's custom radius settings
- The theme defines `--radius-box: 8px` for consistent corner radius across components

### Component Styling Standards

#### Card Components
All interactive cards follow this pattern:
```tsx
// Base card structure
<div className="group relative h-96 w-80 cursor-pointer overflow-hidden rounded-box shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
  
  // Background image with hover scale
  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105" />
  
  // Gradient overlays (use section-appropriate colors)
  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent" />
  
  // Content sections with click/hover states
  // Default content (visible by default)
  <div className={`absolute bottom-0 left-0 right-0 p-6 transition-opacity duration-300 ${isActive ? "opacity-0" : "opacity-100"}`}>
    // Content here
  </div>
  
  // Hover/Active content (visible on hover/click)
  <div className={`absolute inset-0 flex items-center justify-center bg-primary/95 p-6 transition-opacity duration-300 ${isActive ? "opacity-100" : "opacity-0 md:group-hover:opacity-100"}`}>
    // Expanded content here
  </div>
  
  // Bottom accent line
  <div className="absolute bottom-0 left-0 right-0 h-1 bg-secondary transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
</div>
```

#### Button Styling
- **Primary Buttons**: `btn btn-primary rounded-full shadow-primary/25 hover:shadow-primary/30 shadow-lg hover:shadow-xl`
- **Secondary Buttons**: `btn btn-secondary rounded-full shadow-secondary/25 hover:shadow-secondary/30 shadow-lg hover:shadow-xl`
- **Ghost Buttons**: `btn btn-ghost hover:btn-primary/10`

#### Navigation
- **Active Links**: `btn-primary shadow-primary/25 shadow-lg`
- **Inactive Links**: `btn-ghost hover:btn-primary/10 hover:shadow-md`
- **Fixed Position**: Navbar uses `bg-base-100` (no scroll effects)

### Layout Patterns

#### Section Structure
```tsx
<div className="relative min-h-svh overflow-hidden">
  {/* Background gradients */}
  <div className="absolute inset-0 bg-gradient-to-br from-[SECTION-COLOR] via-[SECTION-COLOR]/90 to-base-300" />
  <div className="absolute inset-0 bg-gradient-to-tl from-[OPPOSITE-COLOR]/10 to-[SECTION-COLOR]/5 via-transparent" />
  
  {/* Decorative geometric elements */}
  <div className="absolute top-20 right-24 size-32 rotate-45 border border-[COLOR]/20 transition-all duration-1000 hover:rotate-90" />
  <div className="absolute bottom-20 left-24 size-28 border border-[COLOR]/10 transition-all duration-1000 hover:scale-110" />
  
  {/* Content */}
  <div className="relative px-10 py-20">
    {/* Section content */}
  </div>
  
  {/* Bottom accent line */}
  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[SECTION-COLOR] to-transparent" />
</div>
```

#### Decorative Elements
- **Accent Lines**: `h-1 w-20 bg-[SECTION-COLOR]` for section separators
- **Geometric Shapes**: Rotating squares and circles with hover effects
- **Gradient Lines**: `bg-gradient-to-r from-transparent via-[COLOR]/30 to-transparent`

### Interactive States

#### Mobile vs Desktop
- **Mobile**: Click to toggle states (`onClick` handlers)
- **Desktop**: Hover effects (`group-hover:` classes)
- **Combined**: Use `${isActive ? "opacity-100" : "opacity-0 md:group-hover:opacity-100"}`

#### Hover Animations
- **Cards**: `hover:-translate-y-2 hover:shadow-xl`
- **Images**: `group-hover:scale-105`
- **Buttons**: `hover:scale-105`
- **Geometric Elements**: `hover:rotate-90`, `hover:scale-110`

## File Structure

### Components
- `/src/components/navbar.tsx` - Fixed header with single login button
- `/src/components/hero.tsx` - Main landing section (Primary colors)
- `/src/components/church.tsx` - About section (Secondary colors)
- `/src/components/vision-mission-values.tsx` - Core values (Primary colors)
- `/src/components/team.tsx` - Team showcase (Secondary colors)
- `/src/components/ministerien.tsx` - Ministries section (Primary colors)
- `/src/components/footer.tsx` - Site footer (Secondary colors)
- `/src/components/event-card.tsx` - Reusable event cards

### Pages
- `/src/app/page.tsx` - Homepage with all main sections
- `/src/app/events/page.tsx` - Events listing page
- `/src/app/login/page.tsx` - Authentication page
- `/src/app/layout.tsx` - Root layout with fonts and theme

## Development Guidelines

### Responsive Design
- **Mobile First**: Design for mobile, enhance for desktop
- **Breakpoints**: Use `md:`, `lg:` prefixes for responsive classes
- **Touch Targets**: Ensure buttons are minimum 44px on mobile

### Performance
- **Images**: Use Next.js `Image` component with proper sizing
- **Fonts**: Load Inter and Playfair Display with `display: swap`
- **Animations**: Prefer CSS transitions over JavaScript animations

### CMS Integration
- Components designed for PocketBase CMS
- Use interfaces for type safety
- Handle dynamic content with `dangerouslySetInnerHTML` when needed
- Placeholder images: `/api/placeholder/[width]/[height]`

### Code Standards
- **TypeScript**: Use proper interfaces for all props
- **Client Components**: Add `"use client"` for interactive components
- **State Management**: Use `useState` for local component state
- **Event Handling**: Combine click and hover states for mobile/desktop

## Testing & Build
- Run `npm run dev` for development server
- Ensure all pages render without errors
- Test mobile responsiveness on actual devices
- Verify CMS data integration works correctly

## Common Patterns

### Creating New Sections
1. Choose appropriate color scheme based on alternating pattern
2. Use section structure template above
3. Add decorative elements matching the design
4. Include bottom accent line
5. Ensure responsive design

### Adding New Cards
1. Follow card component structure
2. Use appropriate section colors for gradients
3. Add click/hover state management
4. Include bottom accent line
5. Test on mobile and desktop

### Color Usage Examples
```tsx
// Primary section
<div className="bg-gradient-to-br from-primary via-primary/90 to-base-300">

// Secondary section  
<div className="bg-gradient-to-br from-secondary via-secondary/90 to-base-300">

// Text colors
<h1 className="text-primary-content">Primary Section Heading</h1>
<h1 className="text-base-content">Secondary Section Heading</h1>

// Interactive elements
<button className="btn btn-primary text-primary-content">Primary Button</button>
<div className="text-base-100/80">Subtle white text</div>
```

Remember: Always use theme colors instead of basic colors for consistency and theme support.