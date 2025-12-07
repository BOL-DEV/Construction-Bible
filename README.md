# Construction Bible 🏗️

A comprehensive construction encyclopedia providing easy access to construction terms, definitions, and industry knowledge. Built with Next.js 15 and powered by a dedicated construction dictionary API.

## 📋 Features

- **Browse by Category**: Explore construction knowledge organized by topics including:

  - Architectural Styles
  - Structural Elements
  - Materials
  - Tools & Equipment
  - Techniques
  - Safety & Regulations
  - And more...

- **Search Functionality**: Instant server-side search to find construction terms quickly
- **1000+ Terms**: Comprehensive database of construction terminology with definitions, usage examples, and related terms
- **Dark Mode Support**: Comfortable reading in any lighting condition
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/BOL-DEV/Construction-Bible.git
cd Construction-Bible
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env.local` file in the root directory:

```bash
URL=https://building-dictionary-api.onrender.com/api/
```

4. Run the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: React Icons (Feather Icons)
- **UI Components**: Custom components with dark mode support
- **API**: REST API for construction dictionary data

## 📁 Project Structure

```
construction-bible/
├── app/                    # Next.js app directory
│   ├── categories/        # Category pages
│   ├── terms/            # Terms listing and search
│   ├── page.tsx          # Home page
│   └── layout.tsx        # Root layout
├── components/            # Reusable components
│   ├── Categories.tsx
│   ├── CategoriesCard.tsx
│   ├── SearchInput.tsx
│   ├── TermCard.tsx
│   └── ...
├── public/               # Static assets
└── helper.ts            # API utility functions
```

## 🌐 Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

# Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# Construction-Bible

A construction encyclopedia

> > > > > > > bf00221aa505387231342aa7d8ba9c888a6763c2
