'use client';

import { useState } from 'react';
import Link from 'next/link';
import BottomNav from '@/components/BottomNav';

export default function DashboardPage() {
  const [readinessScore] = useState(78);
  const [ictDays] = useState(12);

  return (
    <div className="min-h-screen pb-20 relative overflow-hidden">
      {/* Ambient Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      {/* Header */}
      <header className="military-gradient p-6 pb-10 relative z-10">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h1 className="text-3xl font-extrabold text-foreground tracking-tight">Readiness Dashboard</h1>
              <p className="text-sm text-foreground-muted font-medium">SGT John Tan • 3SIR</p>
            </div>
            <Link href="/commander" className="touch-target p-3 rounded-xl button-glass backdrop-blur-sm transition-all duration-300 hover:scale-105 group">
              <svg className="w-6 h-6 text-accent group-hover:text-accent-light transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </Link>
          </div>

          {/* Readiness Score Card */}
          <div className="glass-card p-8 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="flex items-center justify-between relative z-10">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-3">
                  <p className="text-sm text-foreground-muted font-semibold tracking-wide uppercase">Overall Readiness</p>
                  <div className="metric-badge px-2 py-0.5 rounded-full text-xs font-bold text-accent">Active</div>
                </div>
                <div className="flex items-baseline space-x-3 mb-6">
                  <span className="text-6xl font-extrabold gradient-text">{readinessScore}%</span>
                  <div className="space-y-0.5">
                    <span className="block text-sm text-foreground font-semibold">Operational Ready</span>
                    <span className="block text-xs text-foreground-muted">+5% from last week</span>
                  </div>
                </div>
                <div className="relative">
                  <div className="w-full h-4 bg-background-elevated/60 rounded-full overflow-hidden backdrop-blur-sm">
                    <div
                      className="h-full bg-gradient-to-r from-accent via-accent-light to-accent rounded-full transition-all duration-1000 ease-out shadow-accent relative overflow-hidden"
                      style={{ width: `${readinessScore}%` }}
                    >
                      <div className="absolute inset-0 shimmer"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ml-8 relative">
                <div className="absolute inset-0 bg-accent/20 rounded-2xl blur-xl animate-pulse-slow"></div>
                <div className="relative w-20 h-20 bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-accent/20">
                  <svg className="w-12 h-12 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-6 space-y-6 relative z-10">
        {/* ICT Countdown */}
        <div className="glass-card p-6 hover:shadow-glass-lg transition-all duration-300">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-5">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-2xl flex items-center justify-center shadow-lg">
                <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-foreground-muted font-semibold mb-1">Next ICT</p>
                <p className="text-3xl font-extrabold text-foreground">{ictDays} <span className="text-xl text-foreground-muted font-semibold">days</span></p>
              </div>
            </div>
            <Link href="/acknowledge" className="px-6 py-3 bg-gradient-to-r from-accent to-accent-dark text-white rounded-xl font-bold hover:from-accent-light hover:to-accent transition-all duration-300 transform hover:scale-105 shadow-accent">
              Review
            </Link>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-foreground px-2">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-4">
            <Link href="/verify" className="glass-card p-6 hover:shadow-glass-lg transition-all duration-300 transform hover:scale-[1.02] group">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-accent/30 to-accent/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-accent/20">
                  <svg className="w-9 h-9 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-foreground text-lg">Verify Pack</p>
                  <p className="text-xs text-foreground-muted mt-1.5 font-medium">Edge-AI Scan</p>
                </div>
              </div>
            </Link>

            <Link href="/checklist" className="glass-card p-6 hover:shadow-glass-lg transition-all duration-300 transform hover:scale-[1.02] group">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary/30 to-secondary/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-secondary/20">
                  <svg className="w-9 h-9 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-foreground text-lg">Checklist</p>
                  <p className="text-xs text-foreground-muted mt-1.5 font-medium">Equipment Status</p>
                </div>
              </div>
            </Link>

            <Link href="/buddy" className="glass-card p-6 hover:shadow-glass-lg transition-all duration-300 transform hover:scale-[1.02] group">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-warning/30 to-warning/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-warning/20">
                  <svg className="w-9 h-9 text-warning" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-foreground text-lg">Buddy System</p>
                  <p className="text-xs text-foreground-muted mt-1.5 font-medium">Coordination</p>
                </div>
              </div>
            </Link>

            <Link href="/notifications" className="glass-card p-6 hover:shadow-glass-lg transition-all duration-300 transform hover:scale-[1.02] group relative">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-destructive/30 to-destructive/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-destructive/20 relative">
                  <svg className="w-9 h-9 text-destructive" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                  <span className="absolute -top-2 -right-2 w-6 h-6 bg-destructive rounded-full text-xs flex items-center justify-center text-white font-bold shadow-lg animate-pulse">3</span>
                </div>
                <div>
                  <p className="font-bold text-foreground text-lg">Alerts</p>
                  <p className="text-xs text-foreground-muted mt-1.5 font-medium">3 Pending</p>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Recent Alerts */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-foreground px-2">Recent Alerts</h2>
          <div className="space-y-3">
            <div className="glass-card p-4 flex items-start space-x-4 hover:shadow-glass-lg transition-all duration-300">
              <div className="w-2.5 h-2.5 mt-2 bg-destructive rounded-full flex-shrink-0 shadow-lg shadow-destructive/50 animate-pulse" />
              <div className="flex-1">
                <p className="font-bold text-foreground">Field dressing expires soon</p>
                <p className="text-sm text-foreground-muted mt-1.5">Expiry date: 28 May 2026 (13 days)</p>
              </div>
            </div>

            <div className="glass-card p-4 flex items-start space-x-4 hover:shadow-glass-lg transition-all duration-300">
              <div className="w-2.5 h-2.5 mt-2 bg-warning rounded-full flex-shrink-0 shadow-lg shadow-warning/50 animate-pulse" />
              <div className="flex-1">
                <p className="font-bold text-foreground">ICT mobilisation notice</p>
                <p className="text-sm text-foreground-muted mt-1.5">Report to Kranji Camp, 0800hrs, 27 May 2026</p>
              </div>
            </div>

            <div className="glass-card p-4 flex items-start space-x-4 hover:shadow-glass-lg transition-all duration-300">
              <div className="w-2.5 h-2.5 mt-2 bg-success rounded-full flex-shrink-0 shadow-lg shadow-success/50" />
              <div className="flex-1">
                <p className="font-bold text-foreground">Pack verification completed</p>
                <p className="text-sm text-foreground-muted mt-1.5">78% readiness score • 2 items missing</p>
              </div>
            </div>
          </div>
        </div>

        {/* Equipment Status Summary */}
        <div className="glass-card p-6 space-y-5">
          <h2 className="text-xl font-bold text-foreground">Equipment Status</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-success/10 rounded-xl border border-success/20">
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-success rounded-full shadow-lg shadow-success/50" />
                <span className="text-sm font-semibold text-foreground">Complete</span>
              </div>
              <span className="text-lg font-bold text-success">28 items</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-warning/10 rounded-xl border border-warning/20">
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-warning rounded-full shadow-lg shadow-warning/50" />
                <span className="text-sm font-semibold text-foreground">Expiring Soon</span>
              </div>
              <span className="text-lg font-bold text-warning">2 items</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-destructive/10 rounded-xl border border-destructive/20">
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-destructive rounded-full shadow-lg shadow-destructive/50" />
                <span className="text-sm font-semibold text-foreground">Missing</span>
              </div>
              <span className="text-lg font-bold text-destructive">2 items</span>
            </div>
          </div>
        </div>
      </main>

      <BottomNav />
    </div>
  );
}
