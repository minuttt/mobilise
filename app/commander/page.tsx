'use client';

import { useState } from 'react';
import Link from 'next/link';
import BottomNav from '@/components/BottomNav';

interface PlatoonMember {
  id: number;
  rank: string;
  name: string;
  readiness: number;
  acknowledged: boolean;
  missingItems: number;
}

export default function CommanderPage() {
  const [platoonData] = useState<PlatoonMember[]>([
    { id: 1, rank: 'SGT', name: 'John Tan', readiness: 100, acknowledged: true, missingItems: 0 },
    { id: 2, rank: 'CPL', name: 'Wei Ming', readiness: 95, acknowledged: true, missingItems: 1 },
    { id: 3, rank: 'LCP', name: 'Raj Kumar', readiness: 85, acknowledged: true, missingItems: 3 },
    { id: 4, rank: 'PTE', name: 'Ahmad', readiness: 78, acknowledged: true, missingItems: 2 },
    { id: 5, rank: 'PTE', name: 'David Lim', readiness: 72, acknowledged: false, missingItems: 4 },
    { id: 6, rank: 'PTE', name: 'Chen Wei', readiness: 65, acknowledged: false, missingItems: 5 },
    { id: 7, rank: 'REC', name: 'Ryan Ng', readiness: 58, acknowledged: false, missingItems: 6 },
    { id: 8, rank: 'REC', name: 'Marcus', readiness: 45, acknowledged: false, missingItems: 8 },
  ]);

  const avgReadiness = Math.round(platoonData.reduce((acc, m) => acc + m.readiness, 0) / platoonData.length);
  const acknowledgedCount = platoonData.filter(m => m.acknowledged).length;
  const totalMembers = platoonData.length;

  const getReadinessColor = (readiness: number) => {
    if (readiness >= 90) return 'bg-success';
    if (readiness >= 70) return 'bg-warning';
    return 'bg-destructive';
  };

  const getReadinessTextColor = (readiness: number) => {
    if (readiness >= 90) return 'text-success';
    if (readiness >= 70) return 'text-warning';
    return 'text-destructive';
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="military-gradient p-6 pb-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Commander Dashboard</h1>
              <p className="text-sm text-foreground-muted mt-1">3rd Platoon • Bravo Company</p>
            </div>
            <Link href="/dashboard" className="touch-target p-2 rounded-lg hover:bg-white/10 transition-colors">
              <svg className="w-6 h-6 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </Link>
          </div>

          {/* Platoon Overview Cards */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-background-card rounded-lg p-4 border border-border">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-foreground-muted">Avg Readiness</span>
                <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <p className="text-3xl font-bold text-accent operational-glow">{avgReadiness}%</p>
            </div>

            <div className="bg-background-card rounded-lg p-4 border border-border">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-foreground-muted">Acknowledged</span>
                <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-3xl font-bold text-secondary">{acknowledgedCount}/{totalMembers}</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-6 space-y-6">
        {/* Readiness Heatmap */}
        <div className="card-elevated space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-foreground">Platoon Readiness Heatmap</h2>
            <button className="text-sm text-accent hover:text-accent-light font-medium">
              Refresh
            </button>
          </div>

          <div className="grid grid-cols-4 gap-2">
            {platoonData.map((member) => (
              <div
                key={member.id}
                className={`aspect-square rounded-lg ${getReadinessColor(member.readiness)} flex flex-col items-center justify-center p-2 transition-all hover:scale-105 cursor-pointer`}
              >
                <span className="text-xs font-bold text-white">{member.rank}</span>
                <span className="text-lg font-bold text-white mt-1">{member.readiness}%</span>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center space-x-6 pt-2">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-success rounded" />
              <span className="text-xs text-foreground-muted">≥90%</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-warning rounded" />
              <span className="text-xs text-foreground-muted">70-89%</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-destructive rounded" />
              <span className="text-xs text-foreground-muted">&lt;70%</span>
            </div>
          </div>
        </div>

        {/* Personnel List */}
        <div className="card-elevated space-y-3">
          <h2 className="text-lg font-semibold text-foreground">Personnel Status</h2>
          <div className="space-y-2">
            {platoonData.map((member) => (
              <div
                key={member.id}
                className="p-4 bg-background-elevated rounded-lg border border-border hover:border-accent transition-colors cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3">
                      <span className="font-semibold text-foreground">
                        {member.rank} {member.name}
                      </span>
                      {member.acknowledged ? (
                        <span className="text-xs px-2 py-1 bg-success/20 text-success rounded-full font-medium">
                          Acknowledged
                        </span>
                      ) : (
                        <span className="text-xs px-2 py-1 bg-destructive/20 text-destructive rounded-full font-medium">
                          Pending
                        </span>
                      )}
                    </div>
                    <div className="flex items-center space-x-4 mt-2">
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-foreground-muted">Readiness:</span>
                        <span className={`text-sm font-semibold ${getReadinessTextColor(member.readiness)}`}>
                          {member.readiness}%
                        </span>
                      </div>
                      {member.missingItems > 0 && (
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-foreground-muted">Missing:</span>
                          <span className="text-sm font-semibold text-destructive">
                            {member.missingItems} items
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                  <svg className="w-5 h-5 text-foreground-muted flex-shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Operational Bottlenecks */}
        <div className="card-elevated space-y-4">
          <h2 className="text-lg font-semibold text-foreground">Operational Bottlenecks</h2>
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 mt-2 bg-destructive rounded-full flex-shrink-0" />
              <div>
                <p className="font-medium text-foreground">4 personnel below 70% readiness</p>
                <p className="text-sm text-foreground-muted mt-1">High-priority intervention required</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 mt-2 bg-warning rounded-full flex-shrink-0" />
              <div>
                <p className="font-medium text-foreground">4 SAF100 acknowledgements pending</p>
                <p className="text-sm text-foreground-muted mt-1">Follow up required before mobilisation</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 mt-2 bg-warning rounded-full flex-shrink-0" />
              <div>
                <p className="font-medium text-foreground">Total 29 missing items across platoon</p>
                <p className="text-sm text-foreground-muted mt-1">Buddy coordination may resolve 18 items</p>
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="space-y-3">
          <button className="w-full touch-target bg-accent hover:bg-accent-light text-white font-semibold py-4 px-6 rounded-lg transition-all duration-200 transform active:scale-95">
            Send Readiness Reminder
          </button>
          <button className="w-full touch-target bg-secondary hover:bg-secondary-light text-white font-semibold py-4 px-6 rounded-lg transition-all duration-200 transform active:scale-95">
            Export Report
          </button>
        </div>
      </main>

      <BottomNav />
    </div>
  );
}
