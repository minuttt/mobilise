'use client';

import { useState } from 'react';
import BottomNav from '@/components/BottomNav';

interface BuddyMatch {
  id: number;
  rank: string;
  name: string;
  item: string;
  distance: string;
  availability: 'available' | 'limited' | 'unavailable';
}

export default function BuddyPage() {
  const [myMissingItems] = useState(['Black Tape', 'Lighter']);
  const [buddyMatches] = useState<BuddyMatch[]>([
    { id: 1, rank: 'CPL', name: 'Wei Ming', item: 'Black Tape', distance: '2.3 km', availability: 'available' },
    { id: 2, rank: 'LCP', name: 'Raj Kumar', item: 'Black Tape', distance: '3.8 km', availability: 'available' },
    { id: 3, rank: 'PTE', name: 'Ahmad', item: 'Lighter', distance: '1.2 km', availability: 'available' },
    { id: 4, rank: 'PTE', name: 'David Lim', item: 'Lighter', distance: '4.5 km', availability: 'limited' },
  ]);

  const [mySpareItems] = useState(['Batteries (AA)', 'Plaster', 'Safety Pins']);

  const getAvailabilityColor = (availability: string) => {
    switch (availability) {
      case 'available':
        return 'text-success';
      case 'limited':
        return 'text-warning';
      default:
        return 'text-foreground-muted';
    }
  };

  const getAvailabilityBadge = (availability: string) => {
    switch (availability) {
      case 'available':
        return 'bg-success/20 text-success';
      case 'limited':
        return 'bg-warning/20 text-warning';
      default:
        return 'bg-foreground-muted/20 text-foreground-muted';
    }
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="military-gradient p-6 pb-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold text-foreground mb-2">Buddy Coordination</h1>
          <p className="text-sm text-foreground-muted">
            Connect with unit members for equipment support
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-6 space-y-6">
        {/* My Missing Items */}
        <div className="card-elevated space-y-4">
          <div className="flex items-center space-x-2">
            <svg className="w-5 h-5 text-destructive" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <h2 className="text-lg font-semibold text-foreground">Items I Need ({myMissingItems.length})</h2>
          </div>
          <div className="space-y-2">
            {myMissingItems.map((item, index) => (
              <div key={index} className="p-3 bg-destructive/10 border border-destructive rounded-lg">
                <p className="font-medium text-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Buddy Matches */}
        <div className="card-elevated space-y-4">
          <div className="flex items-center space-x-2">
            <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <h2 className="text-lg font-semibold text-foreground">Available Buddies</h2>
          </div>

          <p className="text-sm text-foreground-muted">
            Unit members with spare items you need
          </p>

          <div className="space-y-3">
            {buddyMatches.map((buddy) => (
              <div
                key={buddy.id}
                className="p-4 bg-background-elevated rounded-lg border border-border hover:border-accent transition-colors"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="font-semibold text-foreground">
                        {buddy.rank} {buddy.name}
                      </span>
                      <span className={`text-xs px-2 py-1 rounded-full font-medium ${getAvailabilityBadge(buddy.availability)}`}>
                        {buddy.availability}
                      </span>
                    </div>
                    <p className="text-sm text-foreground-muted mt-1">
                      Has spare: <span className="font-medium text-foreground">{buddy.item}</span>
                    </p>
                  </div>
                  <div className="flex-shrink-0 text-right">
                    <p className="text-sm font-semibold text-accent">{buddy.distance}</p>
                    <p className="text-xs text-foreground-muted mt-1">away</p>
                  </div>
                </div>
                <button className="w-full touch-target bg-accent hover:bg-accent-light text-white font-semibold py-2.5 px-4 rounded-lg transition-all duration-200 transform active:scale-95 text-sm">
                  Request Item
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* My Spare Items */}
        <div className="card-elevated space-y-4">
          <div className="flex items-center space-x-2">
            <svg className="w-5 h-5 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h2 className="text-lg font-semibold text-foreground">Items I Can Share ({mySpareItems.length})</h2>
          </div>

          <p className="text-sm text-foreground-muted">
            Your spare items available for unit support
          </p>

          <div className="space-y-2">
            {mySpareItems.map((item, index) => (
              <div key={index} className="p-3 bg-success/10 border border-success rounded-lg flex items-center justify-between">
                <p className="font-medium text-foreground">{item}</p>
                <span className="text-xs text-success font-medium">Available</span>
              </div>
            ))}
          </div>

          <button className="w-full touch-target bg-secondary hover:bg-secondary-light text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform active:scale-95">
            Update Spare Items
          </button>
        </div>

        {/* How It Works */}
        <div className="card-elevated space-y-4">
          <h2 className="text-lg font-semibold text-foreground">How Buddy Coordination Works</h2>
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">1</div>
              <div>
                <p className="font-medium text-foreground">System matches you with buddies</p>
                <p className="text-sm text-foreground-muted mt-1">Based on missing items and proximity</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">2</div>
              <div>
                <p className="font-medium text-foreground">Request items from nearby buddies</p>
                <p className="text-sm text-foreground-muted mt-1">Coordinate pickup or meetup</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">3</div>
              <div>
                <p className="font-medium text-foreground">Update your readiness</p>
                <p className="text-sm text-foreground-muted mt-1">Improve unit operational readiness together</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <BottomNav />
    </div>
  );
}
