// middleware.ts - Using existing constants
import { withAuth } from 'next-auth/middleware'
import { NextResponse } from 'next/server'
import { 
  AUTH_ROUTES, 
  ROUTE_ACCESS, 
  getRedirectRoute 
} from '@/utils/constants'

// =====================
// 🔧 DEV TOGGLE
// Set true untuk mem-bypass semua guard di DEV
// Set false untuk mengaktifkan kembali guard normal
// =====================
const DISABLE_AUTH_GUARDS = false && process.env.NODE_ENV === 'development'

// ----- Middleware normal (aktif jika guard tidak dinonaktifkan)
const guardedMiddleware = withAuth(
  function middleware(req) {
    const { pathname } = req.nextUrl
    const token = req.nextauth.token
    
    console.log('NextAuth Middleware:', {
      pathname,
      hasToken: !!token,
      userType: token?.userType || 'none',
      isCompleted: token?.isCompleted || false
    })

    // Role-based access control
    if (token?.userType) {
      const userType = token.userType as 'client' | 'freelancer'
      const isCompleted = token.isCompleted as boolean
      
      // Block client dari freelancer routes
      const isFreelancerRoute = ROUTE_ACCESS.FREELANCER_ONLY.some(route => 
        pathname.startsWith(route.replace(/\[.*?\]/g, '')) // Handle dynamic routes
      )
      
      if (isFreelancerRoute && userType !== 'freelancer') {
        console.log('CLIENT BLOCKED FROM FREELANCER ROUTE')
        const redirectUrl = getRedirectRoute('client', isCompleted)
        return NextResponse.redirect(new URL(redirectUrl, req.url))
      }

      // Block freelancer dari client routes
      const isClientRoute = ROUTE_ACCESS.CLIENT_ONLY.some(route => 
        pathname.startsWith(route.replace(/\[.*?\]/g, ''))
      )
      
      if (isClientRoute && userType !== 'client') {
        console.log('FREELANCER BLOCKED FROM CLIENT ROUTE')
        const redirectUrl = getRedirectRoute('freelancer', isCompleted)
        return NextResponse.redirect(new URL(redirectUrl, req.url))
      }

      // Optional: Profile completion redirect
      // Uncomment jika ingin force redirect ke completion pages
      /*
      const requiresCompletion = ['/client/dashboard', '/freelancer/dashboard']
      const needsCompletion = requiresCompletion.some(route => 
        pathname.startsWith(route)
      )
      
      if (needsCompletion && !isCompleted) {
        const completionUrl = getRedirectRoute(userType, false) // incomplete route
        return NextResponse.redirect(new URL(completionUrl, req.url))
      }
      */
    }

    return NextResponse.next()
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        const { pathname } = req.nextUrl

        // 🔓 Always allow error pages
        if (pathname.startsWith('/auth/error') || pathname.startsWith('/api/auth/error')) {
          return true
        }

        // Skip middleware untuk static files dan API routes
        if (
          pathname.startsWith('/_next') ||
          pathname.startsWith('/api/auth') ||
          (pathname.startsWith('/api') && !pathname.startsWith('/api/auth')) ||
          pathname.includes('.') ||
          pathname === '/favicon.ico'
        ) {
          return true
        }

        // Allow public routes
        const isPublicRoute = ROUTE_ACCESS.PUBLIC.some(route => pathname === route)
        if (isPublicRoute) {
          return true
        }

        // Handle auth pages
        const isAuthRoute = Object.values(AUTH_ROUTES).some(route => 
          pathname.startsWith(route)
        )
        
        if (isAuthRoute) {
          // Block authenticated users dari auth pages
          return !token
        }

        // Protected routes require authentication
        const isProtectedRoute = [
          ...ROUTE_ACCESS.CLIENT_ONLY,
          ...ROUTE_ACCESS.FREELANCER_ONLY,
          ...ROUTE_ACCESS.SHARED
        ].some(route => pathname.startsWith(route.replace(/\[.*?\]/g, '')))

        if (isProtectedRoute) {
          return !!token
        }

        // Default allow
        return true
      },
    },
    pages: {
      signIn: AUTH_ROUTES.LOGIN,
      error: '/auth/error',
    },
  }
)

// ----- Single export default: pilih perilaku berdasarkan flag
export default function middleware(req: Request) {
  if (DISABLE_AUTH_GUARDS) {
    console.log('⚠️ AUTH DISABLED (DEV) - Middleware bypass aktif')
    return NextResponse.next()
  }
  // @ts-expect-error NextAuth's withAuth signature
  return guardedMiddleware(req)
}

// ----- Single export const config: pilih matcher secara statik
export const config = DISABLE_AUTH_GUARDS
  ? { matcher: [] } // bypass semuanya di DEV
  : {
      matcher: [
        /*
         * Match all request paths except static files
         */
        '/((?!api/(?!auth)|_next/static|_next/image|favicon.ico|public/).*)',
        
        // Explicitly include protected routes
        '/client/:path*',
        '/freelancer/:path*',
        '/test-profile/:path*',
        '/editprofile/:path*',
        
        // Include auth routes
        '/login',
        '/signup', 
        '/forgot-password'
      ],
    }
