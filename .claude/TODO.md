# Design Refresh TODO

Tracking remaining work to implement all Figma designs from the [Amigo Figma file](https://www.figma.com/design/8Jm7bC6Hs2sXYR882PqDXV/Amigo?node-id=0-1).

## Landing Page (node `963:2`)

- [x] Hero layout — two-column grid (desktop) / flex column (mobile)
- [x] LandingNavbar component (About, Contact, Login, Apply button)
- [x] Headline with lavender "anything" highlight
- [x] CTA "apply for card" outlined button
- [x] Illustration assets (card, 3 smileys) downloaded and positioned
- [x] Animations — fadeInUp text, floating illustrations, hover effects
- [x] Responsive breakpoints (768px, 480px)
- [x] `prefers-reduced-motion` accessibility
- [ ] Add Franxurter Totally font files (.woff2) to `public/fonts/` — currently using fallback fonts
- [ ] Fine-tune smiley/card positioning after viewing on multiple screen sizes
- [ ] Replace placeholder `#about` and `#contact` nav links with real destinations

## /activate (node `2784:118`)

- [x] Redesign activate page to match Figma
- [x] Welcome header: "Welcome to Amigo! You're seconds away from using your new card!"
- [x] Subheader: "Please enter your card's information in the form below."
- [x] Form fields: 16-digit card number, expiration date (mm/yy), CVV, "next" button
- [x] Disclaimer text block at bottom
- [x] White card container (971×806) centered on grid-line background
- [x] Responsive form layout

## /activate2 (node `2792:215`)

- [ ] Second step of activation flow (currently a placeholder in Figma)
- [ ] Determine what content/form goes here — may need design input

## /dashboard (node `2784:157`)

- [x] Redesign dashboard to match Figma
- [x] Top card: total spent, credit limit, next payment due, statement period
- [x] "Pay now" and "Statements" action buttons
- [x] Transaction history table (date, to/from, amount, total spent)
- [x] "See all activity" expandable link
- [ ] Spending limit progress bar (63% indicator)
- [x] "Navbar-logged in" variant — `DashboardNavbar` component created
- [x] Responsive table/card layout for mobile

## /dashboard-paynow (node `2938:462`)

- [x] Payment type selection screen
- [x] Radio buttons: statement balance, today's balance, minimum payment due
- [x] Amount display for each option ($950, $950, $95)
- [x] "Pay now" confirmation button
- [x] Centered card layout (527×461)

## /dashboard-paynow2 (node `2938:538`)

- [x] Wallet connection modal overlay
- [x] "Connect your wallet" header
- [x] MetaMask option row (placeholder icon)
- [x] WalletConnect option row (placeholder icon)
- [x] Close button (X) top-right
- [x] Semi-transparent backdrop overlay
- [ ] Wallet integration logic (MetaMask, WalletConnect on Polygon)

## /apply (node `2784:18`)

- [ ] Marked "out of scope" in Figma — skip for now
- [ ] Revisit when application flow is designed

## Cross-cutting

- [ ] Obtain and install Franxurter Totally font files (Fat + Medium weights)
- [ ] Create shared design tokens file (colors, spacing, shadows) for consistency across pages
- [ ] Ensure all pages use the grid-line background pattern from the Figma design
- [ ] Audit Bootstrap style leakage into custom components
- [ ] Mobile testing on real devices
- [ ] Lighthouse performance check after all pages implemented
