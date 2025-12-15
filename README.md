# Footfolio - Football Tools Directory

A curated directory of the best football (soccer) tools, platforms, and resources for fans, analysts, bettors, fantasy players, and professionals.

## 🚀 Features

- **25+ Curated Tools**: Hand-picked football tools across 12 categories
- **12 Categories**: From Live Scores to Analytics, Betting to Fantasy Football
- **Search Functionality**: Quick search to find the perfect tool
- **Responsive Design**: Beautiful experience on desktop, tablet, and mobile
- **SEO Optimized**: Dynamic meta tags and optimized for search engines
- **Fast Performance**: Built with Next.js 15 for optimal speed

## 📂 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Ready for Vercel
- **Package Manager**: pnpm

## 🏗️ Project Structure

```
footfolio/
├── src/
│   ├── app/              # Next.js app router pages
│   │   ├── page.tsx      # Homepage
│   │   ├── category/     # Category pages
│   │   ├── tools/        # Tool detail pages
│   │   └── search/       # Search page
│   ├── components/       # React components
│   │   ├── Navigation.tsx
│   │   ├── Footer.tsx
│   │   ├── ToolCard.tsx
│   │   ├── CategoryCard.tsx
│   │   └── SearchBar.tsx
│   ├── lib/             # Utilities and data
│   │   ├── categories.ts
│   │   ├── mockData.ts
│   │   └── utils.ts
│   └── types/           # TypeScript type definitions
│       └── index.ts
├── public/              # Static assets
└── package.json
```

## 🎯 Categories

1. **Data & APIs** - Football data providers and APIs
2. **News & Media** - Journalism sites and podcasts
3. **Live Scores & Fixtures** - Real-time match updates
4. **Fantasy Football** - DFS platforms and optimizers
5. **Betting Tools** - Odds comparison and calculators
6. **Analytics & Stats** - xG tools and tactical software
7. **Streaming & Broadcasting** - Where-to-watch guides
8. **Social & Community** - Forums and fan platforms
9. **Training & Coaching** - Tactical boards and drills
10. **Merchandise & Tickets** - Jerseys and ticket marketplaces
11. **Management Games** - FM tools and FIFA companions
12. **Predictors & Simulations** - Match prediction models

## 🚦 Getting Started

### Prerequisites

- Node.js 18+
- pnpm (or npm/yarn)

### Installation

1. Clone the repository:
```bash
cd footfolio
```

2. Install dependencies:
```bash
pnpm install
# or
npm install
```

3. Run the development server:
```bash
pnpm dev
# or
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📝 Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## 🎨 Customization

### Adding New Tools

Edit `src/lib/mockData.ts` and add a new tool object following the `Tool` interface:

```typescript
{
  id: '26',
  name: 'Tool Name',
  slug: 'tool-name',
  tagline: 'Brief tagline',
  description: 'Detailed description',
  websiteUrl: 'https://example.com',
  categories: ['category-id'],
  tags: ['tag1', 'tag2'],
  pricing: 'free' | 'freemium' | 'paid' | 'enterprise',
  platforms: ['web', 'ios', 'android', 'api'],
  rating: 4.5,
  // ... more fields
}
```

### Adding New Categories

Edit `src/lib/categories.ts` to add new categories:

```typescript
{
  id: 'new-category',
  name: 'New Category',
  slug: 'new-category',
  description: 'Category description',
  icon: '🔥',
  toolCount: 0,
  order: 13
}
```

### Styling

The project uses Tailwind CSS with a custom color palette:

- **Primary Color**: `pitch-*` (green theme)
- Customize in `tailwind.config.ts`

## 🚀 Deployment

### Deploy to Vercel

The easiest way to deploy is using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/footfolio)

1. Push your code to GitHub
2. Import your repository to Vercel
3. Vercel will automatically detect Next.js and configure the build
4. Deploy!

### Other Platforms

The app can be deployed to any platform supporting Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📊 Data Source

Currently using mock data in `src/lib/mockData.ts`. For production, consider integrating:

- **Supabase** - For database and real-time updates
- **Firebase** - Alternative backend solution
- **Contentful/Sanity** - Headless CMS for easy content management

## 🔮 Future Enhancements

- [ ] User accounts and authentication
- [ ] User reviews and ratings
- [ ] Tool submission form with moderation
- [ ] Filtering system on category pages
- [ ] Comparison tool (side-by-side)
- [ ] Newsletter integration
- [ ] Blog section
- [ ] Dark mode
- [ ] Bookmarking/favorites
- [ ] Admin panel for content management

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Contact

For questions or feedback, please open an issue on GitHub.

---

**Built with ⚽ by Footfolio**
