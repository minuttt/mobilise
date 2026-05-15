'use client';

import { useState } from 'react';
import BottomNav from '@/components/BottomNav';

interface Notification {
  id: number;
  type: 'critical' | 'warning' | 'info' | 'success';
  title: string;
  message: string;
  time: string;
  read: boolean;
}

export default function NotificationsPage() {
  const [notifications] = useState<Notification[]>([
    {
      id: 1,
      type: 'critical',
      title: 'ICT Mobilisation Notice',
      message: 'Report to Kranji Camp, 0800hrs, 27 May 2026. SAF100 acknowledgement required.',
      time: '2 hours ago',
      read: false,
    },
    {
      id: 2,
      type: 'warning',
      title: 'Field Dressing Expiring Soon',
      message: 'Your field dressing expires on 28 May 2026 (13 days). Replace before ICT.',
      time: '5 hours ago',
      read: false,
    },
    {
      id: 3,
      type: 'warning',
      title: 'Missing Equipment Detected',
      message: '2 items missing from last scan: Black Tape, Lighter. Check buddy system for support.',
      time: '1 day ago',
      read: false,
    },
    {
      id: 4,
      type: 'success',
      title: 'Pack Verification Complete',
      message: 'Your readiness score is 78%. Good operational standing.',
      time: '1 day ago',
      read: true,
    },
    {
      id: 5,
      type: 'info',
      title: 'Buddy Request from CPL Wei Ming',
      message: 'CPL Wei Ming is requesting spare batteries. Review buddy coordination.',
      time: '2 days ago',
      read: true,
    },
    {
      id: 6,
      type: 'info',
      title: 'Unit Readiness Update',
      message: 'Platoon average readiness: 75%. 4 personnel require support.',
      time: '3 days ago',
      read: true,
    },
  ]);

  const unreadCount = notifications.filter(n => !n.read).length;

  const getTypeConfig = (type: string) => {
    switch (type) {
      case 'critical':
        return {
          bg: 'bg-destructive/10',
          border: 'border-destructive',
          icon: 'text-destructive',
          iconPath: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z'
        };
      case 'warning':
        return {
          bg: 'bg-warning/10',
          border: 'border-warning',
          icon: 'text-warning',
          iconPath: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z'
        };
      case 'success':
        return {
          bg: 'bg-success/10',
          border: 'border-success',
          icon: 'text-success',
          iconPath: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
        };
      default:
        return {
          bg: 'bg-secondary/10',
          border: 'border-secondary',
          icon: 'text-secondary',
          iconPath: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
        };
    }
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="military-gradient p-6 pb-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Operational Alerts</h1>
              <p className="text-sm text-foreground-muted mt-1">
                {unreadCount} unread notification{unreadCount !== 1 ? 's' : ''}
              </p>
            </div>
            <button className="touch-target p-2 rounded-lg hover:bg-white/10 transition-colors">
              <svg className="w-6 h-6 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-6 space-y-4">
        {notifications.length === 0 ? (
          <div className="card-elevated text-center py-12">
            <svg className="w-16 h-16 mx-auto text-foreground-muted mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <p className="text-lg font-semibold text-foreground">No Notifications</p>
            <p className="text-sm text-foreground-muted mt-2">You're all caught up</p>
          </div>
        ) : (
          <>
            {notifications.map((notification) => {
              const config = getTypeConfig(notification.type);
              return (
                <div
                  key={notification.id}
                  className={`p-4 rounded-lg border ${config.bg} ${config.border} ${!notification.read ? 'border-2' : ''} transition-all hover:scale-[1.01] cursor-pointer`}
                >
                  <div className="flex items-start space-x-3">
                    <div className={`flex-shrink-0 ${config.icon}`}>
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={config.iconPath} />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between">
                        <p className="font-semibold text-foreground">{notification.title}</p>
                        {!notification.read && (
                          <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0 ml-2 mt-1.5" />
                        )}
                      </div>
                      <p className="text-sm text-foreground-muted mt-1">{notification.message}</p>
                      <p className="text-xs text-foreground-dim mt-2">{notification.time}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </>
        )}

        {/* Actions */}
        {notifications.length > 0 && (
          <div className="pt-4">
            <button className="w-full touch-target bg-background-card hover:bg-background-elevated border border-border text-foreground font-semibold py-3 px-6 rounded-lg transition-all duration-200">
              Mark All as Read
            </button>
          </div>
        )}
      </main>

      <BottomNav />
    </div>
  );
}
