# E-Commerce TypeScript Project - Learning Roadmap

A comprehensive learning guide to build a full-stack e-commerce application from scratch using Next.js, Node.js, and TypeScript.

---

## 📚 Project Overview

**Stack:**
- **Frontend:** Next.js 15 + React 18 + TypeScript
- **Backend:** Node.js + Express  
- **Database:** MySQL + Prisma ORM
- **Styling:** Tailwind CSS + DaisyUI
- **Authentication:** NextAuth
- **State Management:** Zustand
- **UI Components:** Headless UI, React Icons

---

## 🗂️ Project Structure

```
e-commerce-type-script/
├── /app                    # Next.js pages & routes
│   ├── /api               # API endpoints
│   ├── /products          # Product pages
│   ├── /cart              # Shopping cart pages
│   ├── /auth              # Authentication pages
│   └── layout.tsx         # Root layout
├── /components            # Reusable UI components
│   ├── /common            # Shared components (Header, Footer, etc.)
│   ├── /products          # Product-related components
│   └── /cart              # Cart-related components
├── /server                # Backend API routes & logic
│   ├── /routes            # Express routes
│   ├── /controllers       # Route handlers
│   └── /middleware        # Authentication & validation
├── /prisma                # Database configuration
│   └── schema.prisma      # Database schema
├── /public                # Static assets
│   ├── /images            # Product images
│   └── /icons             # SVG icons
├── /utils                 # Helper functions
├── /hooks                 # Custom React hooks
├── /types                 # TypeScript type definitions
├── /lib                   # Utility libraries
├── next.config.mjs        # Next.js configuration
├── tailwind.config.ts     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies
```

---

## 📅 Phase 1: Foundation (Days 1-3)

### **Goal:** Set up the project infrastructure and understand the basic structure.

### **Task 1.1: Initialize Next.js Project**
- [ ] Create Next.js project with TypeScript
- [ ] Install required dependencies
- [ ] Set up folder structure

**Commands:**
```bash
npx create-next-app@latest . --typescript --tailwind --eslint
npm install
```

### **Task 1.2: Set Up Tailwind CSS**
- [ ] Verify Tailwind CSS is installed
- [ ] Configure tailwind.config.ts
- [ ] Install DaisyUI for pre-built components
- [ ] Add Tailwind directives to globals.css

**Install DaisyUI:**
```bash
npm install daisyui @tailwindcss/forms @tailwindcss/typography
```

### **Task 1.3: Configure TypeScript**
- [ ] Review tsconfig.json
- [ ] Create /types folder for custom types
- [ ] Set up path aliases for cleaner imports

**Update tsconfig.json paths:**
```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"],
      "@/components/*": ["./components/*"],
      "@/types/*": ["./types/*"],
      "@/utils/*": ["./utils/*"]
    }
  }
}
```

### **Task 1.4: Create Basic Folder Structure**
- [ ] Create `/components` folder
- [ ] Create `/server` folder
- [ ] Create `/prisma` folder
- [ ] Create `/public` folder
- [ ] Create `/types` folder
- [ ] Create `/utils` folder

### **Task 1.5: Create Root Layout**
- [ ] Create `app/layout.tsx` with basic structure
- [ ] Set up global styles
- [ ] Configure fonts and metadata

---

## 🗄️ Phase 2: Database & Backend (Days 4-6)

### **Goal:** Set up the database and create API routes for data management.

### **Task 2.1: Install Prisma**
- [ ] Install Prisma and Prisma Client
- [ ] Initialize Prisma with MySQL

**Commands:**
```bash
npm install @prisma/client
npm install -D prisma
npx prisma init
```

### **Task 2.2: Configure Database Connection**
- [ ] Set up .env.local with DATABASE_URL
- [ ] Test database connection

**.env.local example:**
```
DATABASE_URL="mysql://username:password@localhost:3306/ecommerce_db"
```

### **Task 2.3: Create Database Schema (Prisma)**
- [ ] Define User model
- [ ] Define Product model
- [ ] Define Cart model
- [ ] Define Order model
- [ ] Define OrderItem model
- [ ] Set up relationships between models

**Create `prisma/schema.prisma`:**
```prisma
// Users
model User {
  id        String   @id @default(cuid())
  email     String   @unique
  password  String
  name      String
  cart      Cart?
  orders    Order[]
  createdAt DateTime @default(now())
}

// Products
model Product {
  id          String   @id @default(cuid())
  name        String
  description String
  price       Float
  quantity    Int
  image       String
  createdAt   DateTime @default(now())
}

// Shopping Cart
model Cart {
  id        String   @id @default(cuid())
  userId    String   @unique
  user      User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  items     CartItem[]
  createdAt DateTime @default(now())
}

model CartItem {
  id        String @id @default(cuid())
  cartId    String
  cart      Cart   @relation(fields: [cartId], references: [id], onDelete: Cascade)
  productId String
  quantity  Int
}

// Orders
model Order {
  id        String      @id @default(cuid())
  userId    String
  user      User        @relation(fields: [userId], references: [id], onDelete: Cascade)
  items     OrderItem[]
  total     Float
  status    String      @default("pending")
  createdAt DateTime    @default(now())
}

model OrderItem {
  id        String @id @default(cuid())
  orderId   String
  order     Order  @relation(fields: [orderId], references: [id], onDelete: Cascade)
  productId String
  quantity  Int
  price     Float
}
```

### **Task 2.4: Run Database Migration**
- [ ] Generate Prisma Client
- [ ] Push schema to database
- [ ] Verify tables are created

**Commands:**
```bash
npx prisma generate
npx prisma db push
npx prisma studio  # To view database UI
```

### **Task 2.5: Create API Routes**
- [ ] Create `/app/api/products/route.ts` (GET, POST)
- [ ] Create `/app/api/products/[id]/route.ts` (GET, PUT, DELETE)
- [ ] Create `/app/api/users/route.ts` (POST - register)
- [ ] Create `/app/api/cart/route.ts` (GET, POST)
- [ ] Create `/app/api/orders/route.ts` (GET, POST)

### **Task 2.6: Create API Helpers**
- [ ] Create utility functions for database queries
- [ ] Create error handling utilities
- [ ] Create response formatting utilities

---

## 🎨 Phase 3: Frontend Components (Days 7-10)

### **Goal:** Build reusable UI components and pages for the application.

### **Task 3.1: Create Layout Components**
- [ ] Header component (navigation, search, cart icon)
- [ ] Footer component
- [ ] Sidebar/Menu component (for admin)

### **Task 3.2: Create Product Components**
- [ ] ProductCard component
- [ ] ProductGrid component
- [ ] ProductDetail component
- [ ] ProductFilter component
- [ ] ProductSearch component

### **Task 3.3: Create Authentication Components**
- [ ] LoginForm component
- [ ] RegisterForm component
- [ ] ProtectedRoute wrapper

### **Task 3.4: Create Cart Components**
- [ ] CartItem component
- [ ] CartSummary component
- [ ] CartPage layout

### **Task 3.5: Create Pages**
- [ ] `/app/page.tsx` - Home page with featured products
- [ ] `/app/products/page.tsx` - Product listing page
- [ ] `/app/products/[id]/page.tsx` - Product detail page
- [ ] `/app/cart/page.tsx` - Shopping cart page
- [ ] `/app/auth/login/page.tsx` - Login page
- [ ] `/app/auth/register/page.tsx` - Register page
- [ ] `/app/orders/page.tsx` - Orders history page

### **Task 3.6: Set Up Zustand Store**
- [ ] Install Zustand: `npm install zustand`
- [ ] Create cart store
- [ ] Create user store
- [ ] Create product store

**Create `store/cart.ts`:**
```typescript
import create from 'zustand';

interface CartItem {
  productId: string;
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  addItem: (productId: string, quantity: number) => void;
  removeItem: (productId: string) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartStore>((set) => ({
  items: [],
  addItem: (productId, quantity) =>
    set((state) => ({
      items: [...state.items, { productId, quantity }],
    })),
  removeItem: (productId) =>
    set((state) => ({
      items: state.items.filter((item) => item.productId !== productId),
    })),
  clearCart: () => set({ items: [] }),
}));
```

### **Task 3.7: Create Custom Hooks**
- [ ] `useCart()` - Cart management hook
- [ ] `useAuth()` - Authentication hook
- [ ] `useProducts()` - Fetch products hook
- [ ] `useFetch()` - Generic fetch hook

---

## 🔗 Phase 4: Integration (Days 11-14)

### **Goal:** Connect all components together and add advanced features.

### **Task 4.1: Connect Frontend to Backend**
- [ ] Update components to fetch data from API
- [ ] Implement error handling
- [ ] Add loading states
- [ ] Set up API client with axios or fetch

### **Task 4.2: Implement Authentication**
- [ ] Install NextAuth: `npm install next-auth`
- [ ] Configure authentication providers
- [ ] Create login/register endpoints
- [ ] Add session management
- [ ] Protect API routes and pages
- [ ] Create logout functionality

### **Task 4.3: Implement Shopping Cart**
- [ ] Connect cart component to Zustand store
- [ ] Sync cart with backend
- [ ] Add cart persistence (localStorage)
- [ ] Implement add/remove from cart
- [ ] Calculate totals

### **Task 4.4: Implement Checkout Flow**
- [ ] Create checkout page
- [ ] Add order summary
- [ ] Integrate payment method (optional: Stripe)
- [ ] Create order confirmation page
- [ ] Send confirmation email (optional)

### **Task 4.5: Create Admin Dashboard**
- [ ] Create admin layout
- [ ] Product management page (Create, Read, Update, Delete)
- [ ] Order management page
- [ ] User management page
- [ ] Sales analytics/dashboard

### **Task 4.6: Add Advanced Features**
- [ ] Product search functionality
- [ ] Product filtering (by price, category, etc.)
- [ ] Product reviews and ratings
- [ ] Wishlist functionality
- [ ] Email notifications
- [ ] Order tracking

### **Task 4.7: Testing & Deployment**
- [ ] Write unit tests (Jest)
- [ ] Write integration tests
- [ ] Test all user flows
- [ ] Deploy to production (Vercel, Netlify, or custom server)
- [ ] Set up CI/CD pipeline

---

## 🛠️ Useful Commands

```bash
# Development
npm run dev                 # Start development server
npm run build              # Build for production
npm start                  # Start production server
npm run lint               # Run ESLint

# Database
npx prisma generate       # Generate Prisma Client
npx prisma db push        # Push schema to database
npx prisma studio         # Open Prisma Studio GUI
npx prisma migrate dev    # Create and apply migration

# Installation
npm install next axios zustand next-auth @prisma/client
npm install -D typescript tailwindcss postcss autoprefixer daisyui
```

---

## 📚 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [React Documentation](https://react.dev)
- [NextAuth.js Documentation](https://next-auth.js.org/)

---

## 💡 Tips for Learning

1. **Start Small** - Build one feature at a time, don't rush
2. **Understand First** - Read and understand the code before copying
3. **Document Your Code** - Write comments explaining your logic
4. **Test As You Go** - Test each feature before moving to the next
5. **Use DevTools** - Browser DevTools and Prisma Studio are your friends
6. **Ask Questions** - Google errors and read documentation
7. **Version Control** - Use Git to track your changes

---

## 📝 Progress Checklist

### Phase 1 ✅
- [ ] Next.js project initialized
- [ ] Tailwind CSS configured
- [ ] TypeScript set up
- [ ] Folder structure created
- [ ] Root layout created

### Phase 2 ✅
- [ ] Prisma installed and configured
- [ ] Database connected
- [ ] Schema created and migrated
- [ ] API routes created
- [ ] Database helpers created

### Phase 3 ✅
- [ ] Layout components created
- [ ] Product components created
- [ ] Auth components created
- [ ] Cart components created
- [ ] Pages created
- [ ] Zustand store set up
- [ ] Custom hooks created

### Phase 4 ✅
- [ ] Frontend connected to backend
- [ ] Authentication implemented
- [ ] Shopping cart functional
- [ ] Checkout flow working
- [ ] Admin dashboard created
- [ ] Advanced features added
- [ ] Testing completed
- [ ] Project deployed

---

## 🚀 Ready to Start?

Begin with **Phase 1** and work through each phase systematically. Take your time to understand each concept before moving forward. Good luck! 🎉
