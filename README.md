# HustLink Frontend

Modern web application built with Next.js 15, TypeScript, and Tailwind CSS for the HustLink platform.

## 🚀 Features

- **Component Playground**: Interactive showcase for UI components
- **Modern Tech Stack**: Next.js 15, React 19, TypeScript, Tailwind CSS
- **UI Components**: shadcn/ui component library with Radix UI primitives
- **Code Quality**: BiomeJS for linting and formatting
- **Git Hooks**: Husky for pre-commit hooks with lint-staged
- **Responsive Design**: Mobile-first approach with Tailwind CSS

## 📋 Prerequisites

Make sure you have the following installed:
- **Node.js** (version 18 or higher)
- **pnpm** (recommended package manager)

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/hustlink/hustlink_fe.git
   cd hustlink_fe
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Setup Husky git hooks**
   ```bash
   pnpm prepare
   ```

## 🏃‍♂️ Getting Started

### Development Server

Start the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Available Scripts

```bash
# Development
pnpm dev          # Start development server

# Building
pnpm build        # Build for production
pnpm start        # Start production server

# Code Quality
pnpm lint         # Run BiomeJS linter
pnpm lint:strict  # Run linter with error-on-warnings
pnpm format:check # Format code with BiomeJS

# Git Hooks
pnpm prepare      # Setup Husky git hooks
```

## 🎨 Component Playground

Visit `/playground` to explore and test UI components:

- **Button Component**: Various variants, sizes, and interactive examples
- **Interactive Examples**: Counter, form actions, confirmation dialogs
- **Testing Area**: Space for experimenting with component combinations

## 🔧 Development Guidelines

### Code Quality

This project uses BiomeJS for consistent code formatting and linting:

- **Pre-commit hooks**: Automatically format and lint staged files
- **Configuration**: See `biome.json` for rules and settings
- **Commands**: Use `pnpm lint` and `pnpm format:check`

### Git Workflow

1. Make your changes
2. Stage your files: `git add .`
3. Commit (triggers pre-commit hooks): `git commit -m "your message"`
4. Push: `git push`

## 🚀 Deployment

### Vercel (Recommended)

The easiest way to deploy is using [Vercel Platform](https://vercel.com/new):

1. Connect your GitHub repository
2. Configure build settings (automatic detection)
3. Deploy

### Manual Deployment

```bash
# Build the application
pnpm build

# Start production server
pnpm start
```

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) + [Radix UI](https://www.radix-ui.com/)
- **Code Quality**: [BiomeJS](https://biomejs.dev/)
- **Git Hooks**: [Husky](https://typicode.github.io/husky/) + [lint-staged](https://github.com/okonet/lint-staged)
- **Package Manager**: [pnpm](https://pnpm.io/)

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com/)
- [BiomeJS Documentation](https://biomejs.dev/)
