# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server with Turbopack (faster builds)
- `npm run build` - Create production build 
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality checks

## Architecture Overview

### Framework & Stack
- **Next.js 15.4.6** with Pages Router (not App Router)
- **React 19.1.0** for UI components
- **Tailwind CSS 4.0** for styling (no config file - using defaults)
- **Heroicons** for consistent iconography
- **React Hook Form** for form handling

### Project Structure

**SportsPledge** is a sports team fundraising platform with two main fundraising types:
- **Stat-based**: Donations per goal/point/performance metric
- **Thon-based**: Donations per time/distance in activities

### Component Architecture

#### Layout System
- `Layout.js` - Main wrapper containing Navigation + children + Footer
- `Navigation.js` - Enhanced nav with dropdown menus for comprehensive site links
- `Footer.js` - Site-wide footer component

#### Reusable UI Components
- `Button.js` - Standardized button with variants (primary, outline, etc.)
- `Card.js` - Flexible card component with Header/Body structure

#### Homepage Sections (Modular)
- `HeroSection.js` - Main hero with stats and CTAs
- `FeaturedFundraisers.js` - Campaign showcases with progress tracking
- `HowItWorks.js` - 4-step process explanation with animations
- `TeamFinder.js` - Advanced search with state/school/sport filters
- `SuccessStories.js` - Testimonials with metrics and achievements  
- `CallToAction.js` - Final conversion section with floating animations

### Page Structure

#### Core Pages (Live)
- `/` - Homepage using modular components
- `/dashboard` - User dashboard with campaign analytics
- `/profile` - Tabbed settings (Profile, Security, Notifications, Privacy)
- `/sitemap` - Comprehensive site navigation with status indicators

#### Dynamic Routes
- `/campaign/[id]` - Individual campaign pages with donation flow
- `/team/[id]` - Team profiles with roster, stats, and campaigns  
- `/donate/[campaignId]` - Multi-step donation process (amount → info → payment → success)

#### Static Pages (Planned)
Additional pages for `/about`, `/contact`, `/how-it-works`, etc. are referenced in navigation but need implementation.

### Data Patterns

All pages currently use **mock data** for development. Key data structures:

- **Campaigns**: Include type (stat/thon), progress, supporters, team info
- **Teams**: Roster, achievements, stats, multiple campaigns
- **Users**: Coach profiles with bio, experience, contact info
- **Donations**: Multi-step flow with amount calculation based on campaign type

### Navigation Enhancement

The navigation includes organized dropdowns:
- **Campaigns** (examples, success stories, how it works)
- **Teams** (examples, find teams)  
- **Account** (dashboard, profile)
- **More** (about, contact, help, sitemap)

### Development Notes

- Uses **Heroicons 2.0** - import from `/24/outline` or `/24/solid`
- **Tailwind CSS 4.0** styling throughout - no custom CSS needed
- **Dynamic routing** with Next.js pages structure
- **Component composition** pattern - prefer existing components over inline code
- **Mock data** patterns established for all entities
- **Responsive design** implemented across all components
- added all pages from pdf to project with proper nav bar