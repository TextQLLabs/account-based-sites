import { Database } from 'lucide-react';

/**
- Design System Reference
  */

export const colors = {
// Color schemes for dark and light modes
schemes: {
dark: {
50: '#C5E0D8',  // Lighter Mint - Primary text/highlights (5%)
100: '#8AB3A3', // Brighter Sage - Secondary text (10%)
200: '#132926', // Softened Forest Green - UI panels (25%)
300: '#0D1211', // Softened Black - Background (60%)
accent: '#E0C5B8' // Soft Terracotta - Accent color (optional)
},
light: {
50: '#2A3B35',  // Deep Forest - Primary text/highlights (5%)
100: '#4A665C', // Deep Sage - Secondary text (10%)
200: '#E6EBE8', // Deeper Light Sage - UI panels (25%)
300: '#F5F2ED', // Eggshell/Cream - Background (60%)
accent: '#A3738A' // Muted Mauve - Accent color (optional)
}
},

// Opacity variants
opacity: {
'white-20': 'rgba(255, 255, 255, 0.2)',
'white-30': 'rgba(255, 255, 255, 0.3)',
'forest-20': 'rgba(42, 59, 53, 0.2)',
'forest-30': 'rgba(42, 59, 53, 0.3)',
},

// Color distribution
distribution: {
background: '60%',
panels: '20%',
secondary: '10%',
primary: '10%', // Increased from 5% to 10% for more flexibility
},
};

export const typography = {
// Font weights
fontWeight: {
extralight: 200,
light: 300,
normal: 400,
medium: 500,
semibold: 600,
bold: 700,
},

// Font sizes (in pixels)
fontSize: {
xs: '12px',
sm: '14px',
base: '16px',
lg: '18px',
xl: '20px',
'2xl': '24px',
'3xl': '30px',
'4xl': '36px',
'5xl': '48px',
'6xl': '60px',
'7xl': '72px',
},

// Line heights
lineHeight: {
none: '1',
tight: '1.1',
snug: '1.25',
normal: '1.5',
relaxed: '1.625',
loose: '2',
},

// Letter spacing
letterSpacing: {
tighter: '-0.05em',
tight: '-0.025em',
normal: '0',
wide: '0.025em',
wider: '0.05em',
widest: '0.1em',
},

// Color combinations
colorScheme: {
dark: {
background: colors.schemes.dark[300],
surface: colors.schemes.dark[200],
primary: colors.schemes.dark[50],   // Lighter Mint (10%) for primary text
secondary: colors.schemes.dark[100], // Brighter Sage (10%) for secondary text
muted: `rgba(138, 179, 163, 0.6)`,  // Brighter Sage with opacity
accent: colors.schemes.dark.accent,  // Soft Terracotta accent
},
light: {
background: colors.schemes.light[300],
surface: colors.schemes.light[200],
primary: colors.schemes.light[50],   // Deep Forest (10%) for primary text
secondary: colors.schemes.light[100], // Deep Sage (10%) for secondary text
muted: `rgba(74, 102, 92, 0.6)`,    // Deep Sage with opacity
accent: colors.schemes.light.accent,  // Muted Mauve accent
}
},

// Typography styles
styles: {
dark: {
heading: {
color: colors.schemes.dark[50],    // Lighter Mint (10%)
fontWeight: 'medium',              // Increased from extralight to medium
},
body: {
color: colors.schemes.dark[100],   // Brighter Sage (10%)
fontWeight: 'normal',              // Increased from light to normal
}
},
light: {
heading: {
color: colors.schemes.light[50],   // Deep Forest (10%)
fontWeight: 'medium',              // Increased from extralight to medium
},
body: {
color: colors.schemes.light[100],  // Deep Sage (10%)
fontWeight: 'normal',              // Increased from light to normal
}
}
},

// Usage guidelines
guidelines: {
dark: `
Typography Guidelines (Dark Mode):
1. Primary Text (10%)
   - Color: Lighter Mint (#C5E0D8)
   - Weight: Medium (500)
   - Usage: Headings, important content, CTAs
2. Secondary Text (10%)
   - Color: Brighter Sage (#8AB3A3)
   - Weight: Normal (400)
   - Usage: Body text, descriptions, navigation
3. Muted Text
   - Color: Brighter Sage with 60% opacity
   - Weight: Normal (400)
   - Usage: Supporting text, metadata, disabled states
4. Accent Color (Optional)
   - Color: Soft Terracotta (#E0C5B8)
   - Usage: Highlights, interactive elements, accents
     `, light: `
     Typography Guidelines (Light Mode):
5. Primary Text (10%)
   - Color: Deep Forest (#2A3B35)
   - Weight: Medium (500)
   - Usage: Headings, important content, CTAs
6. Secondary Text (10%)
   - Color: Deep Sage (#4A665C)
   - Weight: Normal (400)
   - Usage: Body text, descriptions, navigation
7. Muted Text
   - Color: Deep Sage with 60% opacity
   - Weight: Normal (400)
   - Usage: Supporting text, metadata, disabled states
8. Accent Color (Optional)
   - Color: Muted Mauve (#A3738A)
   - Usage: Highlights, interactive elements, accents
     `
     }
     };

export const spacing = {
// Spacing scale (in pixels)
text: '16px',
element: '20px',
panel: '24px',
};

export const breakpoints = {
sm: '640px',
md: '768px',
lg: '1024px',
xl: '1280px',
'2xl': '1536px',
};

export const accessibility = {
minimumContrastRatio: '4.5:1',
focusIndicators: true,
keyboardNavigation: true,
semanticMarkup: true,
lightMode: {
textOnBackground: '5:1',   // Deep Forest on Eggshell
textOnSurface: '4.8:1',    // Deep Forest on Light Sage
},
darkMode: {
textOnBackground: '7:1',   // Lighter Mint on Softened Black
textOnSurface: '5.5:1',    // Lighter Mint on Softened Forest Green
}
};