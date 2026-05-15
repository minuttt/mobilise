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
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="w-full max-w-md space-y-8 animate-fade-in relative z-10">
        {/* Logo Section */}
        <div className="text-center space-y-6">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-accent/30 rounded-2xl blur-xl animate-pulse-slow"></div>
              <div className="relative w-24 h-24 bg-gradient-to-br from-accent to-accent-dark rounded-2xl flex items-center justify-center transform rotate-3 hover:rotate-0 transition-transform duration-500 shadow-glass accent-glow">
                <svg className="w-14 h-14 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <h1 className="text-5xl font-extrabold gradient-text mb-2 tracking-tight">MOBILISE</h1>
            <div className="h-0.5 w-32 mx-auto bg-gradient-to-r from-transparent via-accent to-transparent"></div>
            <p className="text-foreground-muted text-base font-medium">Distributed Operational Readiness System</p>
          </div>
        </div>

        {/* Login Card */}
        <div className="glass-card p-8 space-y-6 shadow-glass-lg relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          <div className="space-y-3 relative z-10">
            <h2 className="text-2xl font-bold text-foreground">Secure Access</h2>
            <p className="text-sm text-foreground-muted leading-relaxed">Authentication required for operational access</p>
          </div>

          <div className="space-y-5 relative z-10">
            <button
              onClick={handleLogin}
              disabled={isLoading}
              className="group/btn w-full touch-target bg-gradient-to-r from-accent to-accent-dark hover:from-accent-light hover:to-accent text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none shadow-accent hover:shadow-[0_0_30px_rgba(5,150,105,0.4)] relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000"></div>
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
        <div className="text-center space-y-3 pt-4">
          <p className="text-sm text-foreground-muted font-medium italic">
            "Operational Readiness Begins Before Mobilisation"
          </p>
          <div className="flex items-center justify-center space-x-3 text-xs text-foreground-dim">
            <span>v1.0.0</span>
            <span>•</span>
            <span>Defence Technology</span>
          </div>
        </div>
      </div>
    </div>
  );
}
