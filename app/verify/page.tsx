'use client';

import { useState } from 'react';
import BottomNav from '@/components/BottomNav';

export default function VerifyPage() {
  const [isScanning, setIsScanning] = useState(false);
  const [scanComplete, setScanComplete] = useState(false);
  const [isOffline] = useState(true);

  const mockDetectedItems = [
    { name: 'Combat Uniform (No.4)', status: 'detected', confidence: 98 },
    { name: 'Field Pack', status: 'detected', confidence: 95 },
    { name: 'Helmet', status: 'detected', confidence: 97 },
    { name: 'Boots', status: 'detected', confidence: 96 },
    { name: 'Water Bottle', status: 'detected', confidence: 94 },
    { name: 'Torch Light', status: 'detected', confidence: 92 },
  ];

  const mockMissingItems = [
    { name: 'Black Tape', status: 'missing' },
    { name: 'Lighter', status: 'missing' },
  ];

  const handleScan = () => {
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
      setScanComplete(true);
    }, 3000);
  };

  const resetScan = () => {
    setScanComplete(false);
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="military-gradient p-6 pb-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Edge-AI Pack Verification</h1>
              <p className="text-sm text-foreground-muted mt-1">Scan your field pack for readiness check</p>
            </div>
          </div>

          {isOffline && (
            <div className="bg-accent/20 border border-accent rounded-lg p-3 flex items-center space-x-3">
              <svg className="w-5 h-5 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <div>
                <p className="text-sm font-semibold text-accent">Offline Verification Active</p>
                <p className="text-xs text-foreground-muted mt-0.5">Edge-AI processing on device</p>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-6 space-y-6">
        {!scanComplete ? (
          <>
            {/* Scan Area */}
            <div className="card-elevated space-y-4">
              <div className="aspect-video bg-background-elevated rounded-lg border-2 border-dashed border-border flex flex-col items-center justify-center relative overflow-hidden">
                {isScanning ? (
                  <div className="text-center space-y-4 animate-pulse">
                    <div className="w-20 h-20 border-4 border-accent border-t-transparent rounded-full animate-spin mx-auto" />
                    <div className="space-y-2">
                      <p className="text-lg font-semibold text-foreground">Analyzing Equipment...</p>
                      <p className="text-sm text-foreground-muted">Edge-AI processing in progress</p>
                    </div>
                  </div>
                ) : (
                  <div className="text-center space-y-4 p-6">
                    <svg className="w-16 h-16 mx-auto text-foreground-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <p className="text-lg font-semibold text-foreground">Ready to Scan</p>
                      <p className="text-sm text-foreground-muted mt-2">Place your field pack in view and tap scan</p>
                    </div>
                  </div>
                )}
              </div>

              <button
                onClick={handleScan}
                disabled={isScanning}
                className="w-full touch-target bg-accent hover:bg-accent-light text-white font-semibold py-4 px-6 rounded-lg transition-all duration-200 transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background"
              >
                {isScanning ? 'Scanning...' : 'Start Verification Scan'}
              </button>
            </div>

            {/* How It Works */}
            <div className="card-elevated space-y-4">
              <h2 className="text-lg font-semibold text-foreground">How It Works</h2>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">1</div>
                  <div>
                    <p className="font-medium text-foreground">Spread out your equipment</p>
                    <p className="text-sm text-foreground-muted mt-1">Lay items flat with clear visibility</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">2</div>
                  <div>
                    <p className="font-medium text-foreground">Start the scan</p>
                    <p className="text-sm text-foreground-muted mt-1">Edge-AI detects items in real-time</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">3</div>
                  <div>
                    <p className="font-medium text-foreground">Review results</p>
                    <p className="text-sm text-foreground-muted mt-1">Check detected and missing items</p>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Scan Results */}
            <div className="card-elevated space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-foreground">Verification Complete</h2>
                <button onClick={resetScan} className="text-sm text-accent hover:text-accent-light font-medium">
                  Rescan
                </button>
              </div>

              <div className="bg-accent/20 border border-accent rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-foreground-muted">Readiness Score</p>
                    <p className="text-3xl font-bold text-accent">75%</p>
                  </div>
                  <svg className="w-16 h-16 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Detected Items */}
            <div className="card-elevated space-y-4">
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h2 className="text-lg font-semibold text-foreground">Detected Items ({mockDetectedItems.length})</h2>
              </div>
              <div className="space-y-2">
                {mockDetectedItems.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-background-elevated rounded-lg">
                    <span className="text-sm text-foreground">{item.name}</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs text-foreground-muted">{item.confidence}%</span>
                      <svg className="w-5 h-5 text-success" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Missing Items */}
            <div className="card-elevated space-y-4">
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-destructive" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h2 className="text-lg font-semibold text-foreground">Missing Items ({mockMissingItems.length})</h2>
              </div>
              <div className="space-y-2">
                {mockMissingItems.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-destructive/10 border border-destructive rounded-lg">
                    <span className="text-sm text-foreground">{item.name}</span>
                    <svg className="w-5 h-5 text-destructive" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </div>
                ))}
              </div>

              <button className="w-full touch-target bg-secondary hover:bg-secondary-light text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform active:scale-95">
                Find Buddy with Spare Items
              </button>
            </div>
          </>
        )}
      </main>

      <BottomNav />
    </div>
  );
}
