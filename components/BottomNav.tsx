'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  {
    href: '/dashboard',
    label: 'Home',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    )
  },
  {
    href: '/verify',
    label: 'Verify',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    )
  },
  {
    href: '/checklist',
    label: 'Checklist',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
    )
  },
  {
    href: '/buddy',
    label: 'Buddy',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    )
  },
  {
    href: '/notifications',
    label: 'Alerts',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
    )
  },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 glass-card border-t border-border/30 safe-area-bottom z-50 shadow-glass">
      <div className="flex justify-around items-center h-20 max-w-7xl mx-auto px-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`touch-target flex-1 flex flex-col items-center justify-center space-y-1.5 transition-all duration-300 relative group ${
                isActive
                  ? 'text-accent'
                  : 'text-foreground-muted hover:text-foreground'
              }`}
            >
              {isActive && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-1.5 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full shadow-accent" />
              )}
              <div className={`p-2 rounded-xl transition-all duration-300 ${
                isActive ? 'bg-accent/10 scale-110' : 'group-hover:bg-white/5'
              }`}>
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {item.icon}
                </svg>
              </div>
              <span className={`text-xs font-semibold transition-all duration-300 ${
                isActive ? 'scale-105' : ''
              }`}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
