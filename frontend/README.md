# ⚡ TITAN FORGE — Premium Gym & Fitness Web Application

A modern, high-performance, and mobile-responsive Gym & Fitness web application built with **React JS**, **Tailwind CSS**, **JavaScript**, **React Router DOM**, **Lucide React Icons**, and **Framer Motion**.

---

## 🎨 Design Theme
- **Color Palette**: Premium Black (`#08090a`, `#0f1115`) + High-Voltage Neon Green (`#B6FF00`)
- **Typography**: Athletic Oswald Headings & Clean Plus Jakarta Sans Body
- **Aesthetics**: Dark Glassmorphism, ambient neon glows, high-res athletic photography, smooth scroll reveals, and interactive modals.

---

## 📂 Project Architecture (`frontend/`)

```
e:/MWT/GYM Website/frontend/
├── public/
│   └── logo.svg                # Custom SVG barbell/titan brand mark
├── src/
│   ├── assets/                 # Brand assets
│   ├── components/             # Reusable modular UI components
│   │   ├── Navbar.jsx          # Sticky navbar with mobile hamburger menu
│   │   ├── Footer.jsx          # Multi-column footer with newsletter & hours
│   │   ├── FloatingWhatsApp.jsx# Quick floating WhatsApp chat popover
│   │   ├── BackToTop.jsx       # Smooth scroll-to-top button
│   │   ├── JoinModal.jsx       # Interactive enrollment & free pass modal
│   │   ├── ProgramModal.jsx    # In-depth program details popup
│   │   ├── LightboxModal.jsx   # Fullscreen gallery lightbox with Next/Prev
│   │   ├── SectionHeader.jsx   # Reusable section heading with neon accents
│   │   ├── ScrollToTop.jsx     # Route change scroll reset
│   │   └── SocialIcons.jsx     # SVG social media icons
│   ├── data/
│   │   └── gymData.js          # Centralized data (programs, trainers, plans, FAQs)
│   ├── pages/                  # 7 core website pages
│   │   ├── Home.jsx            # Hero, stats, programs preview, trainers, reviews
│   │   ├── About.jsx           # Mission, vision, timeline story, facilities
│   │   ├── Programs.jsx        # 8 athletic disciplines with category filters
│   │   ├── Trainers.jsx        # IFBB & CSCS coach profile cards & specialties
│   │   ├── Membership.jsx      # 4 pricing tiers, feature matrix & FAQs
│   │   ├── Gallery.jsx         # Categorized media grid & before/after transformations
│   │   └── Contact.jsx         # Location, phone, hours, maps, inquiry form
│   ├── App.jsx                 # Router, state orchestration, route titles
│   ├── index.css               # Tailwind CSS styles & neon glow utilities
│   └── main.jsx                # Application root entry
├── package.json
└── vite.config.js
```

---

## 🚀 Running the Project

Open your terminal and run:

```bash
# 1. Navigate to the frontend directory
cd frontend

# 2. Start the development server
npm run dev
```

Visit the displayed local URL in your browser (typically `http://localhost:5173`).

To build for production:
```bash
npm run build
npm run preview
```

---

## 📱 Mobile & Responsive Testing
- **Mobile (320px – 480px)**: Single-column pricing, touch-friendly buttons (≥44px), animated mobile drawer menu, zero horizontal overflow.
- **Tablet (481px – 1024px)**: 2-column balanced layouts, sticky compact navigation.
- **Desktop (1025px+)**: Expansive multi-column layouts, micro-interaction hover glows, lightbox key navigation.
