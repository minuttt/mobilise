'use client';

import { useState } from 'react';
import Link from 'next/link';
import BottomNav from '@/components/BottomNav';

export default function DashboardPage() {
  const [readinessScore] = useState(78);
  const [ictDays] = useState(12);

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="military-gradient p-6 pb-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Readiness Dashboard</h1>
              <p className="text-sm text-foreground-muted mt-1">SGT John Tan • 3SIR</p>
            </div>
            <Link href="/commander" className="touch-target p-2 rounded-lg hover:bg-white/10 transition-colors">
              <svg className="w-6 h-6 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </Link>
          </div>

          {/* Readiness Score Card */}
          <div className="bg-background-card rounded-lg p-6 border border-border">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <p className="text-sm text-foreground-muted mb-2">Overall Readiness</p>
                <div className="flex items-baseline">
                  <span className="text-5xl font-bold text-accent operational-glow">{readinessScore}%</span>
                  <span className="ml-3 text-sm text-foreground-muted">Operational Ready</span>
                </div>
                <div className="mt-4 w-full bg-background-elevated rounded-full h-3">
                  <div
                    className="bg-accent h-3 rounded-full transition-all duration-500"
                    style={{ width: `${readinessScore}%` }}
                  />
                </div>
              </div>
              <div className="ml-6">
                <svg className="w-16 h-16 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-6 space-y-6">
        {/* ICT Countdown */}
        <div className="card-elevated">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-foreground-muted">Next ICT</p>
                <p className="text-2xl font-bold text-foreground">{ictDays} days</p>
              </div>
            </div>
            <Link href="/acknowledge" className="px-4 py-2 bg-accent text-white rounded-lg font-medium hover:bg-accent-light transition-colors">
              Review
            </Link>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground px-2">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-3">
            <Link href="/verify" className="card-elevated hover:border-accent transition-colors touch-target">
              <div className="flex flex-col items-center text-center space-y-3 py-2">
                <div className="w-14 h-14 bg-accent/20 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Verify Pack</p>
                  <p className="text-xs text-foreground-muted mt-1">Edge-AI Scan</p>
                </div>
              </div>
            </Link>

            <Link href="/checklist" className="card-elevated hover:border-accent transition-colors touch-target">
              <div className="flex flex-col items-center text-center space-y-3 py-2">
                <div className="w-14 h-14 bg-secondary/20 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Checklist</p>
                  <p className="text-xs text-foreground-muted mt-1">Equipment Status</p>
                </div>
              </div>
            </Link>

            <Link href="/buddy" className="card-elevated hover:border-accent transition-colors touch-target">
              <div className="flex flex-col items-center text-center space-y-3 py-2">
                <div className="w-14 h-14 bg-warning/20 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-warning" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Buddy System</p>
                  <p className="text-xs text-foreground-muted mt-1">Coordination</p>
                </div>
              </div>
            </Link>

            <Link href="/notifications" className="card-elevated hover:border-accent transition-colors touch-target">
              <div className="flex flex-col items-center text-center space-y-3 py-2">
                <div className="w-14 h-14 bg-destructive/20 rounded-full flex items-center justify-center relative">
                  <svg className="w-8 h-8 text-destructive" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-destructive rounded-full text-xs flex items-center justify-center text-white font-bold">3</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Alerts</p>
                  <p className="text-xs text-foreground-muted mt-1">3 Pending</p>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Recent Alerts */}
        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground px-2">Recent Alerts</h2>
          <div className="space-y-2">
            <div className="card-elevated flex items-start space-x-3">
              <div className="w-2 h-2 mt-2 bg-destructive rounded-full flex-shrink-0" />
              <div className="flex-1">
                <p className="font-medium text-foreground">Field dressing expires soon</p>
                <p className="text-sm text-foreground-muted mt-1">Expiry date: 28 May 2026 (13 days)</p>
              </div>
            </div>

            <div className="card-elevated flex items-start space-x-3">
              <div className="w-2 h-2 mt-2 bg-warning rounded-full flex-shrink-0" />
              <div className="flex-1">
                <p className="font-medium text-foreground">ICT mobilisation notice</p>
                <p className="text-sm text-foreground-muted mt-1">Report to Kranji Camp, 0800hrs, 27 May 2026</p>
              </div>
            </div>

            <div className="card-elevated flex items-start space-x-3">
              <div className="w-2 h-2 mt-2 bg-success rounded-full flex-shrink-0" />
              <div className="flex-1">
                <p className="font-medium text-foreground">Pack verification completed</p>
                <p className="text-sm text-foreground-muted mt-1">78% readiness score • 2 items missing</p>
              </div>
            </div>
          </div>
        </div>

        {/* Equipment Status Summary */}
        <div className="card-elevated space-y-4">
          <h2 className="text-lg font-semibold text-foreground">Equipment Status</h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-success rounded-full" />
                <span className="text-sm text-foreground">Complete</span>
              </div>
              <span className="text-sm font-semibold text-foreground">28 items</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-warning rounded-full" />
                <span className="text-sm text-foreground">Expiring Soon</span>
              </div>
              <span className="text-sm font-semibold text-foreground">2 items</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-destructive rounded-full" />
                <span className="text-sm text-foreground">Missing</span>
              </div>
              <span className="text-sm font-semibold text-foreground">2 items</span>
            </div>
          </div>
        </div>
      </main>

      <BottomNav />
    </div>
  );
}
