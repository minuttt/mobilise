'use client';

import { useState } from 'react';

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      window.location.href = '/dashboard';
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Animated Background Elements with Enhanced Ambient Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-80 h-80 bg-accent-500/15 rounded-full blur-3xl animate-float ambient-orb"></div>
        <div className="absolute bottom-20 right-10 w-[400px] h-[400px] bg-primary/28 rounded-full blur-3xl animate-float ambient-orb" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-secondary/15 rounded-full blur-3xl animate-float ambient-orb" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="w-full max-w-md space-y-8 animate-fade-in relative z-10">
        {/* Logo Section */}
        <div className="text-center space-y-6">
          <div className="flex justify-center mb-6">
            <div className="relative group cursor-pointer">
              <div className="absolute inset-0 bg-accent/30 rounded-xl blur-2xl animate-pulse-slow"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-secondary/30 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-accent via-accent-600 to-accent-700 rounded-xl flex items-center justify-center group-hover:scale-105 transition-all duration-300 border border-accent/40 shadow-lg shadow-accent/30">
                <svg className="w-10 h-10 sm:w-12 sm:h-12 text-white drop-shadow-md" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="space-y-3 px-4">
            <h1 className="text-fluid-hero gradient-text-command font-display">MOBILISE</h1>
            <div className="h-0.5 w-24 sm:w-32 mx-auto bg-gradient-to-r from-transparent via-accent to-transparent"></div>
            <p className="text-sm sm:text-base text-foreground-muted font-medium max-w-md mx-auto">Smart Mobilisation Preparation & Readiness Platform</p>
            <p className="text-xs sm:text-sm text-accent font-semibold tracking-wide">"From Notification to Combat-Ready"</p>
          </div>
        </div>

        {/* Login Card - Tactical Command Style */}
        <div className="glass-command p-6 sm:p-8 space-y-6 relative overflow-hidden group tactical-border">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          <div className="space-y-2 relative z-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground font-display">Secure Access</h2>
            <p className="text-sm sm:text-base text-foreground-muted leading-relaxed">Authentication required for operational access</p>
          </div>

          <div className="space-y-5 relative z-10">
            <button
              onClick={handleLogin}
              disabled={isLoading}
              className="group/btn w-full py-4 px-6 bg-gradient-to-r from-accent via-accent-600 to-accent-700 hover:from-accent-400 hover:via-accent-500 hover:to-accent-600 text-white font-bold text-base rounded-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-98 disabled:opacity-50 disabled:cursor-not-allowed border border-accent/50 shadow-lg shadow-accent/30 hover:shadow-xl hover:shadow-accent/40 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/25 to-white/0 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000 pointer-events-none"></div>
              {isLoading ? (
                <span className="flex items-center justify-center relative z-10">
                  <svg className="animate-spin -ml-1 mr-3 h-6 w-6 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span className="text-lg">Authenticating...</span>
                </span>
              ) : (
                <span className="flex items-center justify-center relative z-10">
                  <svg className="w-6 h-6 mr-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span className="text-lg">Login with Singpass</span>
                </span>
              )}
            </button>

            <div className="pt-3 border-t border-border">
              <p className="text-xs text-foreground-dim text-center">
                🔒 Secure authentication via National Digital Identity
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center space-y-3 pt-4 px-4">
          <p className="text-xs sm:text-sm text-foreground-muted font-medium italic">
            "From Notification to Combat-Ready"
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-xs text-foreground-dim">
            <span>v1.0.0</span>
            <span>•</span>
            <span>CODE_EXP 2026</span>
            <span>•</span>
            <span>Defence Technology</span>
          </div>
        </div>
      </div>
    </div>
  );
}
