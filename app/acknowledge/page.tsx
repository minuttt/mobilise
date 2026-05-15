'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import BottomNav from '@/components/BottomNav';

export default function AcknowledgePage() {
  const router = useRouter();
  const [acknowledged, setAcknowledged] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleAcknowledge = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setAcknowledged(true);
      setIsSubmitting(false);
      setTimeout(() => {
        router.push('/dashboard');
      }, 2000);
    }, 1500);
  };

  if (acknowledged) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="text-center space-y-6 animate-fade-in">
          <div className="flex justify-center">
            <svg className="w-24 h-24 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-foreground">Acknowledgement Received</h2>
            <p className="text-foreground-muted mt-2">Your mobilisation confirmation has been recorded</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="military-gradient p-6 pb-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold text-foreground mb-2">SAF100 Acknowledgement</h1>
          <p className="text-sm text-foreground-muted">
            ICT Mobilisation Notification
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-6 space-y-6">
        {/* Alert Banner */}
        <div className="bg-destructive/20 border-2 border-destructive rounded-lg p-4 flex items-start space-x-3">
          <svg className="w-6 h-6 text-destructive flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <div>
            <p className="font-bold text-destructive">Action Required</p>
            <p className="text-sm text-foreground-muted mt-1">
              You must acknowledge this mobilisation notice within 24 hours
            </p>
          </div>
        </div>

        {/* Mobilisation Details */}
        <div className="card-elevated space-y-4">
          <h2 className="text-lg font-semibold text-foreground">Mobilisation Details</h2>

          <div className="space-y-3">
            <div className="flex items-start justify-between py-3 border-b border-border">
              <span className="text-sm font-medium text-foreground-muted">Unit</span>
              <span className="text-sm font-semibold text-foreground text-right">3rd Platoon, Bravo Company<br />3 SIR</span>
            </div>

            <div className="flex items-start justify-between py-3 border-b border-border">
              <span className="text-sm font-medium text-foreground-muted">Reporting Date</span>
              <span className="text-sm font-semibold text-foreground">27 May 2026 (Tue)</span>
            </div>

            <div className="flex items-start justify-between py-3 border-b border-border">
              <span className="text-sm font-medium text-foreground-muted">Reporting Time</span>
              <span className="text-sm font-semibold text-foreground">0800 Hours</span>
            </div>

            <div className="flex items-start justify-between py-3 border-b border-border">
              <span className="text-sm font-medium text-foreground-muted">Location</span>
              <span className="text-sm font-semibold text-foreground text-right">Kranji Camp<br />9 Woodlands Road</span>
            </div>

            <div className="flex items-start justify-between py-3 border-b border-border">
              <span className="text-sm font-medium text-foreground-muted">Duration</span>
              <span className="text-sm font-semibold text-foreground">7 Days (In-Camp Training)</span>
            </div>

            <div className="flex items-start justify-between py-3">
              <span className="text-sm font-medium text-foreground-muted">Activity</span>
              <span className="text-sm font-semibold text-foreground">Individual Physical Proficiency Test</span>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="card-elevated space-y-4">
          <h2 className="text-lg font-semibold text-foreground">Reporting Instructions</h2>

          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-xs">1</div>
              <p className="text-sm text-foreground">
                Report in No. 4 uniform with all personal equipment and field pack
              </p>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-xs">2</div>
              <p className="text-sm text-foreground">
                Bring NRIC, 11B, and medical documents (if applicable)
              </p>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-xs">3</div>
              <p className="text-sm text-foreground">
                Complete field pack verification using MOBILISE before reporting
              </p>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-xs">4</div>
              <p className="text-sm text-foreground">
                Report to Guard Room for temperature screening and check-in
              </p>
            </div>
          </div>
        </div>

        {/* Acknowledgement */}
        <div className="card-elevated space-y-4">
          <h2 className="text-lg font-semibold text-foreground">Acknowledgement</h2>

          <div className="bg-warning/10 border border-warning rounded-lg p-4">
            <p className="text-sm text-foreground">
              By acknowledging, you confirm that you have received this mobilisation notice and will report at the specified date, time, and location with all required equipment.
            </p>
          </div>

          <button
            onClick={handleAcknowledge}
            disabled={isSubmitting}
            className="w-full touch-target bg-accent hover:bg-accent-light text-white font-semibold py-4 px-6 rounded-lg transition-all duration-200 transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Submitting...
              </span>
            ) : (
              <span className="flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                I Acknowledge SAF100
              </span>
            )}
          </button>
        </div>

        {/* Help */}
        <div className="card-elevated space-y-3">
          <h2 className="text-lg font-semibold text-foreground">Need Help?</h2>
          <p className="text-sm text-foreground-muted">
            If you cannot report or need to defer, contact your unit S1 Branch immediately.
          </p>
          <button className="w-full touch-target bg-secondary hover:bg-secondary-light text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform active:scale-95">
            Contact Unit
          </button>
        </div>
      </main>

      <BottomNav />
    </div>
  );
}
