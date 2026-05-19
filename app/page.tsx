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
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-80 h-80 bg-accent/12 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-[400px] h-[400px] bg-primary/25 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-secondary/12 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="w-full max-w-md space-y-8 animate-fade-in relative z-10">
        {/* Logo Section */}
        <div className="text-center space-y-7">
          <div className="flex justify-center mb-8">
            <div className="relative group cursor-pointer">
              <div className="absolute inset-0 bg-accent/35 rounded-3xl blur-2xl animate-pulse-slow"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-accent/25 to-secondary/25 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative w-28 h-28 bg-gradient-to-br from-accent via-accent to-accent-dark rounded-3xl flex items-center justify-center transform rotate-3 group-hover:rotate-0 group-hover:scale-110 transition-all duration-500 shadow-glass accent-glow-strong border border-accent/30">
                <svg className="w-16 h-16 text-white drop-shadow-lg group-hover:scale-110 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h1 className="text-6xl font-extrabold gradient-text-glow mb-3 tracking-tight" style={{letterSpacing: '-0.035em'}}>MOBILISE</h1>
            <div className="h-1 w-36 mx-auto bg-gradient-to-r from-transparent via-accent to-transparent opacity-80"></div>
            <p className="text-foreground-muted text-lg font-semibold tracking-wide">Smart Mobilisation Preparation & Readiness Platform</p>
            <p className="text-accent text-sm font-bold italic tracking-wide">"From Notification to Combat-Ready"</p>
          </div>
        </div>

        {/* Login Card */}
        <div className="glass-premium p-9 space-y-7 shadow-glass-lg relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/8 via-transparent to-secondary/8 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

          <div className="space-y-3 relative z-10">
            <h2 className="text-3xl font-extrabold text-foreground tracking-tight">Secure Access</h2>
            <p className="text-base text-foreground-muted leading-relaxed font-medium">Authentication required for operational access</p>
          </div>

          <div className="space-y-6 relative z-10">
            <button
              onClick={handleLogin}
              disabled={isLoading}
              className="group/btn w-full touch-target bg-gradient-to-r from-accent via-accent to-accent-dark hover:from-accent-light hover:via-accent hover:to-accent text-white font-bold py-5 px-7 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:-translate-y-1 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none shadow-accent hover:shadow-[0_0_48px_rgba(5,150,105,0.7)] relative overflow-hidden micro-interaction border border-accent-light/30 text-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/35 to-white/0 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1200"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-white/15 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
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

            <div className="pt-4 border-t border-border/50">
              <p className="text-xs text-foreground-dim text-center leading-relaxed">
                🔒 Secure authentication powered by National Digital Identity
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center space-y-4 pt-6">
          <p className="text-base text-foreground-muted font-semibold italic tracking-wide">
            "From Notification to Combat-Ready"
          </p>
          <div className="flex items-center justify-center space-x-3 text-sm text-foreground-dim font-medium">
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
