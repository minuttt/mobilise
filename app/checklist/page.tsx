'use client';

import { useState } from 'react';
import BottomNav from '@/components/BottomNav';

interface ChecklistItem {
  id: number;
  name: string;
  category: string;
  status: 'complete' | 'expiring' | 'missing';
  expiryDate?: string;
  daysUntilExpiry?: number;
}

export default function ChecklistPage() {
  const [items] = useState<ChecklistItem[]>([
    // Uniform & Attire
    { id: 1, name: 'Combat Uniform (No.4)', category: 'Uniform & Attire', status: 'complete' },
    { id: 2, name: 'PT Kit', category: 'Uniform & Attire', status: 'complete' },
    { id: 3, name: 'Boots', category: 'Uniform & Attire', status: 'complete' },
    { id: 4, name: 'Helmet', category: 'Uniform & Attire', status: 'complete' },

    // Field Pack
    { id: 5, name: 'Field Pack', category: 'Field Pack', status: 'complete' },
    { id: 6, name: 'Poncho', category: 'Field Pack', status: 'complete' },
    { id: 7, name: 'Ground Sheet', category: 'Field Pack', status: 'complete' },

    // Medical
    { id: 8, name: 'Field Dressing', category: 'Medical', status: 'expiring', expiryDate: '28 May 2026', daysUntilExpiry: 13 },
    { id: 9, name: 'Plaster', category: 'Medical', status: 'expiring', expiryDate: '15 Jun 2026', daysUntilExpiry: 31 },

    // Equipment
    { id: 10, name: 'Water Bottle', category: 'Equipment', status: 'complete' },
    { id: 11, name: 'Torch Light', category: 'Equipment', status: 'complete' },
    { id: 12, name: 'Black Tape', category: 'Equipment', status: 'missing' },
    { id: 13, name: 'Lighter', category: 'Equipment', status: 'missing' },
  ]);

  const categories = Array.from(new Set(items.map(item => item.category)));

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'complete':
        return 'text-success';
      case 'expiring':
        return 'text-warning';
      case 'missing':
        return 'text-destructive';
      default:
        return 'text-foreground-muted';
    }
  };

  const getStatusBg = (status: string) => {
    switch (status) {
      case 'complete':
        return 'bg-success/10 border-success';
      case 'expiring':
        return 'bg-warning/10 border-warning';
      case 'missing':
        return 'bg-destructive/10 border-destructive';
      default:
        return 'bg-background-elevated border-border';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'complete':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
        );
      case 'expiring':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
        );
      case 'missing':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
          </svg>
        );
      default:
        return null;
    }
  };

  const completeCount = items.filter(i => i.status === 'complete').length;
  const expiringCount = items.filter(i => i.status === 'expiring').length;
  const missingCount = items.filter(i => i.status === 'missing').length;

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="military-gradient p-6 pb-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold text-foreground mb-4">Equipment Checklist</h1>

          {/* Status Summary */}
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-background-card rounded-lg p-3 border border-border">
              <div className="flex items-center justify-between">
                <svg className="w-5 h-5 text-success" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-2xl font-bold text-success">{completeCount}</span>
              </div>
              <p className="text-xs text-foreground-muted mt-1">Complete</p>
            </div>
            <div className="bg-background-card rounded-lg p-3 border border-border">
              <div className="flex items-center justify-between">
                <svg className="w-5 h-5 text-warning" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <span className="text-2xl font-bold text-warning">{expiringCount}</span>
              </div>
              <p className="text-xs text-foreground-muted mt-1">Expiring</p>
            </div>
            <div className="bg-background-card rounded-lg p-3 border border-border">
              <div className="flex items-center justify-between">
                <svg className="w-5 h-5 text-destructive" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                <span className="text-2xl font-bold text-destructive">{missingCount}</span>
              </div>
              <p className="text-xs text-foreground-muted mt-1">Missing</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-6 space-y-6">
        {categories.map((category) => {
          const categoryItems = items.filter(item => item.category === category);
          return (
            <div key={category} className="card-elevated space-y-3">
              <h2 className="text-lg font-semibold text-foreground">{category}</h2>
              <div className="space-y-2">
                {categoryItems.map((item) => (
                  <div
                    key={item.id}
                    className={`p-4 rounded-lg border ${getStatusBg(item.status)} transition-colors`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <p className="font-medium text-foreground">{item.name}</p>
                        {item.status === 'expiring' && (
                          <div className="mt-2 space-y-1">
                            <p className="text-sm text-warning font-medium">
                              Expires: {item.expiryDate}
                            </p>
                            <p className="text-xs text-foreground-muted">
                              {item.daysUntilExpiry} days remaining
                            </p>
                          </div>
                        )}
                        {item.status === 'missing' && (
                          <p className="text-sm text-destructive mt-1">
                            Item not found in last scan
                          </p>
                        )}
                      </div>
                      <div className={`${getStatusColor(item.status)} flex-shrink-0 ml-3`}>
                        {getStatusIcon(item.status)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}

        {/* Action Buttons */}
        <div className="space-y-3">
          <button className="w-full touch-target bg-accent hover:bg-accent-light text-white font-semibold py-4 px-6 rounded-lg transition-all duration-200 transform active:scale-95">
            Run New Verification Scan
          </button>
          <button className="w-full touch-target bg-secondary hover:bg-secondary-light text-white font-semibold py-4 px-6 rounded-lg transition-all duration-200 transform active:scale-95">
            Find Buddy for Missing Items
          </button>
        </div>
      </main>

      <BottomNav />
    </div>
  );
}
