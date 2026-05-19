# MOBILISE - WIREFRAME DOCUMENTATION
## CODE_EXP 2026 Submission

**Purpose**: Document app screens, user flow, and design descriptions
**Total Screens**: 8 key pages
**Format**: Screenshots + flow diagram + descriptions

---

## WIREFRAME OVERVIEW

### Application Flow Map

```
[1. Login] 
    ↓ (Authentication)
[2. Dashboard] → [3. Verify Pack] → Results → [4. Checklist]
    ↓                                              ↓
[8. Acknowledge] ← [7. Notifications] ← [6. Buddy] ← [5. Commander]
```

### User Roles:
1. **NSman** - Primary user (Screens 1-4, 6-8)
2. **Commander** - Unit leader (Screen 5 + Dashboard view)

---

## SCREEN 1 — LOGIN & AUTHENTICATION

### Purpose:
Secure entry point with Singpass-style authentication simulation

### Key Elements:

**Visual Components**:
- **Shield Icon** (20x20 / 24x24)
  - Cyan gradient (from-accent via-accent-600 to-accent-700)
  - Tactical command center styling
  - Hover: Scale 1.05 transformation

- **MOBILISE Title**
  - Font: Outfit, fluid-hero sizing (clamp 2.5rem-5rem)
  - Gradient: Electric cyan 3-color gradient
  - Tagline: "Smart Mobilisation Preparation & Readiness Platform"

- **Login Card** (glass-command styling)
  - Background: rgba(15, 23, 41, 0.85)
  - Border: 1px cyan tactical border
  - Shadow: Multi-layer with cyan tint

- **Login Button**
  - Text: "Login with Singpass"
  - Gradient background: from-accent to-accent-700
  - Icon: Shield checkmark (left-aligned)
  - Loading state: Spinner animation + "Authenticating..."

- **Security Notice**
  - Text: "🔒 Secure authentication via National Digital Identity"
  - Size: text-xs, centered
  - Color: foreground-dim

- **Footer Information**
  - Version: v1.0.0
  - Branding: CODE_EXP 2026 • Defence Technology
  - Responsive wrap on mobile

**Interactions**:
1. Click "Login with Singpass" → Loading state (1.5s) → Navigate to Dashboard
2. Hover effects: Button scale 1.02, shield scale 1.05
3. Responsive: Mobile padding adjustments, font size scaling

**User Flow**:
- Entry point for all users
- Simulates Singpass authentication (actual Singpass integration in production)
- 1.5 second loading simulation
- Redirects to Dashboard upon success

**Design Notes**:
- Command center aesthetic with deep navy background
- Cyan tactical accents throughout
- Professional military-inspired design (not gaming/cyberpunk)
- Accessible: 44px touch targets, WCAG AA contrast

---

## SCREEN 2 — HOME READINESS DASHBOARD

### Purpose:
Central hub showing overall readiness status and quick actions

### Key Elements:

**Header** (military-gradient):
- **Title**: "Readiness Dashboard"
  - Font: Outfit, text-2xl sm:text-3xl, bold
- **User Info**: "SGT John Tan • 3SIR • Bravo Company"
  - Font: text-xs sm:text-sm, muted color
- **Commander Button**: Icon button (chart icon)
  - Links to Commander Dashboard
  - Cyan accent background

**Readiness Score Card** (glass-command):
- **Status Badge**: "ACTIVE"
  - Background: accent/20, border: accent/40
  - Font: text-xs, bold, cyan color

- **Readiness Percentage**: "78%"
  - Font: JetBrains Mono, text-fluid-score (clamp 3rem-5.5rem)
  - Gradient: gradient-text-command (cyan 3-color)
  - Label: "Operational Ready"

- **Trend Indicator**: "↗ +5% from last week"
  - Color: Cyan accent
  - Font: text-xs sm:text-sm, semibold

- **Progress Bar**:
  - Height: h-4 sm:h-5
  - Background: secondary/30 with cyan border
  - Fill: Gradient from-accent via-accent-600 to-accent
  - Width: 78% animated transition (1000ms)
  - Shadow: cyan glow underneath

- **Shield Icon**:
  - Size: w-16 h-16 sm:w-20 sm:h-20
  - Background: Gradient from-accent/30 to-accent-700/20
  - Border: accent/30 tactical border
  - Contains: Checkmark shield SVG (cyan color)

**ICT Countdown Card** (glass-card):
- **Calendar Icon**: 
  - Size: w-14 h-14 sm:w-16 sm:h-16
  - Background: Gradient from-secondary to-secondary-dark
  - Border: accent/20
  - Icon: Calendar SVG (cyan color)

- **Label**: "NEXT ICT"
  - Font: text-xs sm:text-sm, bold, uppercase, muted
- **Days Remaining**: "12 days"
  - Font: JetBrains Mono, text-2xl sm:text-3xl, bold
- **Review Button**:
  - Text: "Review"
  - Background: Gradient from-accent to-accent-700
  - Hover: Shadow enhancement, from-accent-400 to-accent-600
  - Links to: /acknowledge (SAF100 page)

**Quick Actions Grid** (2x2 grid):
1. **Verify Pack**
   - Icon: Checkmark circle (cyan)
   - Label: "Verify Pack"
   - Sublabel: "Edge-AI Scan"
   - Link: /verify

2. **Checklist**
   - Icon: Clipboard (secondary cyan)
   - Label: "Checklist"
   - Sublabel: "Equipment Status"
   - Link: /checklist

3. **Buddy System**
   - Icon: Users group (warning amber)
   - Label: "Buddy System"
   - Sublabel: "Coordination"
   - Link: /buddy

4. **Alerts**
   - Icon: Bell (destructive red)
   - Badge: "3" unread notifications
   - Label: "Alerts"
   - Sublabel: "3 Pending"
   - Link: /notifications

**Recent Alerts Section**:
- **Title**: "Recent Alerts"
- **3 Alert Cards**:
  1. **Critical** (red dot): "Field dressing expires soon" (13 days)
  2. **Warning** (amber dot): "ICT mobilisation notice" (27 May 2026)
  3. **Success** (cyan dot): "Pack verification completed" (78% score)

**Equipment Status Summary**:
- **Complete**: 28 items (cyan background)
- **Expiring Soon**: 2 items (amber background)
- **Missing**: 2 items (red background)

**Interactions**:
1. Click readiness card → Navigate to detailed checklist
2. Click "Review" ICT → Navigate to SAF100 acknowledgement
3. Click quick action cards → Navigate to respective pages
4. Click commander icon → Navigate to commander dashboard
5. Scroll: Smooth scrolling with bottom nav offset

**User Flow**:
- Primary landing page after login
- One-glance readiness overview
- Hub for all major actions
- Persistent bottom navigation

**Design Notes**:
- Information hierarchy: Readiness score most prominent
- Color coding: Cyan (good), Amber (warning), Red (critical)
- Responsive grid: 2 columns on mobile, expandable on tablet+
- Command center aesthetic maintained throughout

---

## SCREEN 3 — EDGE-AI PACK VERIFICATION

### Purpose:
Scan and verify packed equipment using Edge-AI detection

### Key Elements:

**Header**:
- **Title**: "Pre-Pack Verification"
- **Subtitle**: "Verify Before You Pack"
- **Offline Indicator**: 
  - Badge: "Offline Verification Active"
  - Icon: Wi-Fi off + checkmark
  - Color: Cyan accent

**Verification Interface** (main card):
- **Photo Capture Area**:
  - Background: Dark gradient with tactical grid overlay
  - Icon: Camera symbol (large, centered)
  - Text: "Lay equipment flat and take overhead photo"
  - Border: Dashed cyan tactical border
  - Helper text: "Spread items on table/floor with clear spacing"

- **Capture Button**:
  - Text: "Take Photo & Verify"
  - Background: Gradient cyan (from-accent to-accent-700)
  - Icon: Camera icon + layout grid icon
  - Loading State: "Analyzing Photo..." with animated bars

**Verification Results** (after scan):
- **Readiness Score**: "75%" 
  - Font: JetBrains Mono, large display
  - Gradient: Cyan command gradient
  - Label: "Pack Readiness"

**Detected Items** (6 items):
1. Field Dressing - 98% confidence ✓
2. Water Bottle - 95% confidence ✓
3. Torch - 92% confidence ✓
4. Poncho - 94% confidence ✓
5. First Aid Kit - 96% confidence ✓
6. Helmet - 97% confidence ✓

- **Display Format**:
  - Item name (left)
  - Confidence percentage (right)
  - Cyan checkmark icon
  - Confidence bar (cyan gradient)

**Missing Items** (2 items):
1. Black Tape ✗
2. Lighter ✗

- **Display Format**:
  - Item name (left)
  - Red X icon
  - Warning background (red/20)
  - "Find Buddy" button (links to /buddy)

**Action Buttons**:
1. **Save Results**
   - Background: Cyan gradient
   - Icon: Save/download
   - Action: Updates checklist with verification results

2. **Find Equipment**
   - Background: Amber gradient
   - Icon: Users icon
   - Action: Navigate to /buddy with missing items pre-filled

3. **Scan Again**
   - Background: Secondary gradient
   - Icon: Refresh icon
   - Action: Reset and re-scan

**Technical Note Display**:
- Text: "Processing on-device • No data transmitted"
- Icon: Shield lock
- Color: Muted, text-xs
- Purpose: Emphasize privacy

**Interactions**:
1. Tap scan button → Simulated scanning animation (2s) → Show results
2. Detected items: Expandable to show confidence details
3. Missing items: Click "Find Buddy" → Navigate with context
4. Save results: Toast notification + update dashboard readiness

**User Flow**:
- Accessed from Dashboard quick actions
- **Step 1**: Lay out all equipment flat on table/floor
- **Step 2**: Take overhead photo (birds-eye view)
- **Step 3**: AI analyzes equipment layout locally
- **Step 4**: Review detected vs. missing items
- **Step 5**: Take action (save, find buddy, re-take photo)
- **Step 6**: Pack systematically with confidence
- Return to dashboard with updated readiness

**Design Notes**:
- **Practical approach**: Cannot scan inside packed bag (bulky field pack has depth)
- **Pre-pack verification**: Ensures completeness BEFORE packing
- Emphasize offline capability (privacy-preserving)
- Clear visual distinction: Detected (cyan) vs. Missing (red)
- Confidence percentages for transparency
- AI powered but not oversold - practical assistance

---

## SCREEN 4 — EQUIPMENT CHECKLIST

### Purpose:
Comprehensive equipment tracking with expiry monitoring

### Key Elements:

**Header**:
- **Title**: "Equipment Checklist"
- **Stats Row**:
  - Total: 32 items
  - Complete: 28 items (cyan)
  - Expiring: 2 items (amber)
  - Missing: 2 items (red)

**Status Summary Cards** (3 cards):
1. **Complete**: 28 items
   - Background: cyan/10, border: cyan/20
   - Icon: Checkmark circle
   - Color: Cyan accent

2. **Expiring Soon**: 2 items
   - Background: amber/10, border: amber/20
   - Icon: Clock/warning
   - Color: Amber warning

3. **Missing**: 2 items
   - Background: red/10, border: red/20
   - Icon: X circle
   - Color: Red destructive

**Checklist Categories** (4 categories, collapsible):

### 1. **Uniform Items** (8 items)
- No. 4 Uniform ✓
- PT Attire ✓
- Admin Attire ✓
- Boots (Combat) ✓
- Boots (PT) ✓
- Beret ✓
- Name Tag ✓
- Rank Insignia ✓

### 2. **Field Pack** (12 items)
- Poncho ✓
- Water Bottle ✓
- Torch ✓
- Mess Tin ✓
- Spare Batteries ✓
- **Field Dressing** ⚠️ Expires: 28 May 2026 (13 days) - **RED ZONE**
- **Plaster** ⚠️ Expires: 19 Jun 2026 (31 days) - Warning
- Black Tape ✗ Missing
- Lighter ✗ Missing
- Helmet ✓
- LBV (Load Bearing Vest) ✓
- Assault Pack ✓

### 3. **Medical Items** (6 items)
- First Aid Kit ✓
- Field Dressing (see above)
- Plaster (see above)
- Personal Medication ✓
- Insect Repellent ✓
- Sunscreen ✓

### 4. **Equipment** (6 items)
- Rifle (M16/SAR21) ✓ (Issued during mobilisation)
- Magazine Pouches ✓
- Canteen ✓
- Entrenching Tool ✓
- NBC Mask ✓
- Protective Gear ✓

**Item Display Format**:
- **Checkbox** (left): Checked/unchecked/warning state
- **Item Name** (center): Bold for items, regular for sub-items
- **Status Badge** (right):
  - ✓ Complete (cyan)
  - ⚠️ Expiring (amber with days remaining)
  - ✗ Missing (red)
  - 📅 Expiry date displayed for expiring items

**RED ZONE Visual Treatment**:
- Items expiring <14 days: Red background, pulsing border
- Prominent "RED ZONE" badge
- Countdown: "13 days remaining"
- Action button: "Replace Item" (links to buddy or external purchase)

**Quick Actions** (bottom buttons):
1. **Run Scan**
   - Icon: Camera
   - Links to: /verify
   - Background: Cyan gradient

2. **Find Buddy**
   - Icon: Users
   - Links to: /buddy with missing items
   - Background: Amber gradient

3. **Export List**
   - Icon: Download
   - Action: Generate PDF checklist
   - Background: Secondary gradient

**Interactions**:
1. Tap category header → Expand/collapse category
2. Tap checklist item → Show item details (expiry, notes, photo)
3. Tap status badge → Quick actions (mark complete, set expiry, etc.)
4. Swipe item left → Quick actions (edit, delete)
5. RED ZONE items: Animated pulsing border for attention

**User Flow**:
- Accessed from Dashboard or after verification scan
- Review complete/missing/expiring items
- Take action on expiring items (replace, update expiry)
- Mark items as complete manually
- Export checklist for reference

**Design Notes**:
- Color-coded status for quick scanning
- RED ZONE treatment for critical expiry (<14 days)
- Collapsible categories reduce scrolling
- Touch-friendly list items (44px height minimum)
- Integration with verification scan results

---

## SCREEN 5 — COMMANDER DASHBOARD

### Purpose:
Unit-level readiness overview for commanders (**STRONGEST DIFFERENTIATOR**)

### Key Elements:

**Header**:
- **Title**: "Commander Dashboard"
- **Unit**: "Bravo Company, 3SIR"
- **View Toggle**: 
  - Platoon view (active)
  - Company view
  - Battalion view (if authorized)

**Key Metrics Row** (3 cards):

1. **Average Platoon Readiness**: 73%
   - Font: JetBrains Mono, large display
   - Gradient: Cyan command gradient
   - Trend: ↓ -5% from last sync
   - Icon: Shield with percentage

2. **Acknowledgement Status**: 4/8 confirmed
   - Progress ring: 50% filled (cyan)
   - Label: "SAF100 Pending: 4"
   - Action: "Send Reminder" button

3. **Critical Issues**: 3 items
   - Icon: Alert triangle
   - Color: Red destructive
   - Details: "2 expiring, 1 missing"
   - Action: "View Issues" button

**Readiness Heatmap** (8 personnel grid):

Visual: 2x4 grid of personnel cards

**Personnel Card Format**:
- **Name**: "SGT Tan"
- **Readiness Score**: 78% (colored by tier)
- **Visual Indicator**: 
  - 80-100%: Cyan background (Operational Ready)
  - 60-79%: Amber background (Needs Attention)
  - <60%: Red background (Critical)
- **Status**: ✓ Acknowledged / ⏳ Pending
- **Hover**: Expand to show details (missing items, expiry alerts)

**8 Personnel Examples**:
1. SGT Tan - 78% - ✓ (Amber - Needs Attention)
2. CPL Lee - 95% - ✓ (Cyan - Ready)
3. LCP Wong - 45% - ⏳ (Red - Critical)
4. PTE Lim - 88% - ✓ (Cyan - Ready)
5. PTE Chen - 62% - ⏳ (Amber - Needs Attention)
6. LCP Kumar - 100% - ✓ (Cyan - Ready)
7. CPL Rajah - 55% - ⏳ (Red - Critical)
8. SGT Ismail - 92% - ✓ (Cyan - Ready)

**Operational Bottlenecks** (list):
- **LCP Wong (45%)**:
  - Missing: 4 items (Black Tape, Lighter, Field Dressing, Plaster)
  - Status: Not acknowledged SAF100
  - Last activity: 7 days ago
  - Action: "Contact Personnel" button

- **CPL Rajah (55%)**:
  - Missing: 2 items
  - Expiring: 1 item (RED ZONE)
  - Status: Not acknowledged SAF100
  - Last activity: 3 days ago
  - Action: "Contact Personnel" button

**Action Buttons** (bottom bar):
1. **Send Reminders**
   - Icon: Bell
   - Action: Send push notification to pending personnel
   - Target: 4 unacknowledged personnel

2. **Export Report**
   - Icon: Download
   - Action: Generate PDF report for S1 branch
   - Contents: Readiness summary, bottlenecks, trends

3. **View Trends**
   - Icon: Chart line
   - Action: Open historical readiness chart
   - Shows: 30-day readiness trend graph

**Notifications Panel** (sidebar, collapsible):
- Recent events:
  - "LCP Wong completed verification - 45% readiness"
  - "CPL Lee acknowledged SAF100"
  - "SGT Tan: Field dressing expiring in 13 days"
- Real-time updates as personnel interact with system

**Interactions**:
1. Click personnel card → Expand to detailed view (items, expiry, history)
2. Click bottleneck entry → Direct message/call personnel
3. Hover heatmap → Quick preview of status
4. Send reminders → Batch notification with confirmation
5. Export report → Download PDF with unit stamp

**User Flow**:
- Accessed from Dashboard commander icon
- Restricted to authorized commanders (role-based)
- Monitor unit readiness in real-time
- Identify and address bottlenecks
- Track acknowledgement completion
- Generate reports for higher command

**Design Notes**:
- **STRONGEST DIFFERENTIATOR** - most teams ignore commander perspective
- Heat map visualization for instant pattern recognition
- Color-coded tiers (cyan/amber/red) for quick assessment
- Actionable insights (bottlenecks identified with solutions)
- Real-time updates (simulated with timestamps)
- Export capability for formal reporting

**Competitive Edge**:
- Reduces manual coordination by 80%
- Real-time visibility (vs. spreadsheets)
- Proactive intervention (vs. reactive firefighting)
- Data-driven decision making
- Addresses commander admin burden directly

---

## SCREEN 6 — BUDDY COORDINATION ENGINE

### Purpose:
Equipment sharing and coordination within units

### Key Elements:

**Header**:
- **Title**: "Buddy Coordination"
- **Subtitle**: "Equipment Sharing Within Unit"
- **My Status**: 
  - Readiness: 78%
  - Missing: 2 items
  - Available to help: Yes/No toggle

**My Missing Items** (2 cards):

1. **Black Tape**
   - Icon: Tape roll
   - Status: Missing
   - Buddy Matches: 3 nearby
   - Action: "Find Buddy" button

2. **Lighter**
   - Icon: Flame
   - Status: Missing
   - Buddy Matches: 2 nearby
   - Action: "Find Buddy" button

**Nearby Buddy Recommendations** (sorted by proximity):

### 1. **CPL Lee** - 1.2 km away
- **Availability**: ✓ Available (Spare Black Tape)
- **Readiness**: 95%
- **Distance**: 1.2 km (Yishun Camp)
- **Contact**: Message / Call buttons
- **Request Button**: "Request Black Tape"
- **Response Time**: Usually replies within 1 hour

### 2. **SGT Ismail** - 2.5 km away
- **Availability**: ✓ Available (Spare Lighter, Black Tape)
- **Readiness**: 92%
- **Distance**: 2.5 km (Sembawang)
- **Contact**: Message / Call buttons
- **Request Button**: "Request Lighter + Black Tape"
- **Response Time**: Usually replies within 2 hours

### 3. **LCP Kumar** - 4.5 km away
- **Availability**: ⚠️ Limited (Spare Lighter only)
- **Readiness**: 100%
- **Distance**: 4.5 km (Woodlands)
- **Contact**: Message / Call buttons
- **Request Button**: "Request Lighter"
- **Response Time**: Usually replies within 4 hours

**Spare Items I Can Share** (3 items):
1. **Batteries** (Qty: 4 spares)
   - Requests: 1 pending from PTE Lim
   - Action: "Approve" / "Decline"

2. **Plaster** (Qty: 10 spares)
   - Requests: None
   - Availability: Set to Available/Limited/Unavailable

3. **Safety Pins** (Qty: 6 spares)
   - Requests: None
   - Availability: Available

**Recent Coordination** (activity feed):
- "CPL Lee shared Black Tape with you - 2 days ago"
- "You helped PTE Chen with batteries - 5 days ago"
- "SGT Tan requested lighter - declined (unavailable)"

**Request System**:
- **Send Request**:
  - Select buddy
  - Select item
  - Add optional message
  - Send notification

- **Receive Request**:
  - Notification badge
  - Item requested + requester details
  - Approve/Decline buttons
  - Optional: Schedule pickup/delivery

**Availability Toggle**:
- **Available**: Active coordination, receive requests
- **Limited**: Selective items only
- **Unavailable**: Pause all requests (e.g., overseas, busy)

**Interactions**:
1. Tap "Find Buddy" → Filter by missing item
2. Tap buddy card → Expand details + send request
3. Approve request → Send confirmation + coordinate logistics
4. Decline request → Notify requester with reason (optional)
5. Toggle availability → Update status for all buddies

**User Flow**:
- Accessed from Dashboard or Checklist "Find Buddy"
- View missing items + buddy matches
- Send coordination requests
- Manage spare items and incoming requests
- Build unit camaraderie through mutual support

**Design Notes**:
- **Transforms camaraderie into operational coordination** (key insight)
- Proximity-based ranking (nearest first)
- Availability status prevents spam requests
- Two-way coordination (request + share)
- Activity feed builds trust and reciprocity
- Privacy: Only unit members visible (role-based access)

**Competitive Edge**:
- Addresses equipment shortages collaboratively
- Reduces last-minute scrambling
- Builds unit cohesion
- Practical application of NS camaraderie value

---

## SCREEN 7 — NOTIFICATION CENTER

### Purpose:
Centralized alerts and operational notifications

### Key Elements:

**Header**:
- **Title**: "Notifications"
- **Unread Badge**: "3 unread"
- **Filter Tabs**:
  - All (active)
  - Critical (1)
  - Warning (4)
  - Info (6)
  - Success (2)

**Notification Categories** (color-coded):

### Critical Notifications (Red):

1. **ICT Mobilisation Notice**
   - Icon: Alert triangle (red)
   - Title: "Report to Kranji Camp"
   - Details: "0800hrs, 27 May 2026"
   - Time: 12 days from now
   - Action: "Acknowledge SAF100"
   - Status: Unread (red dot)

2. **SAF100 Required**
   - Icon: Document alert (red)
   - Title: "Mobilisation Acknowledgement Pending"
   - Details: "Deadline: 20 May 2026, 12:00 noon"
   - Time: 1 day remaining
   - Action: "Acknowledge Now"
   - Status: Unread (red dot)

### Warning Notifications (Amber):

1. **Field Dressing Expires Soon**
   - Icon: Medkit (amber)
   - Title: "Equipment expiring"
   - Details: "Expiry date: 28 May 2026 (13 days)"
   - Time: RED ZONE
   - Action: "Replace Item" / "Find Buddy"
   - Status: Unread (amber dot)

2. **Missing Equipment Alert**
   - Icon: Clipboard X (amber)
   - Title: "2 items missing from pack"
   - Details: "Black Tape, Lighter"
   - Time: Since last verification
   - Action: "Find Buddy" / "Update Checklist"
   - Status: Read

3. **Readiness Below Target**
   - Icon: Shield warning (amber)
   - Title: "Readiness score: 78%"
   - Details: "Target: 85% for full operational readiness"
   - Time: Updated 1 hour ago
   - Action: "View Checklist"
   - Status: Read

4. **Buddy Request**
   - Icon: Users (amber)
   - Title: "PTE Lim requested batteries"
   - Details: "3km away, Sembawang area"
   - Time: 2 hours ago
   - Action: "Approve" / "Decline"
   - Status: Read

### Info Notifications (Blue/Cyan):

1. **Unit SOP Update**
   - Icon: Document (cyan)
   - Title: "Checklist updated by unit"
   - Details: "2 new items added to Field Pack category"
   - Time: 3 days ago
   - Action: "View Checklist"
   - Status: Read

2. **ICT Schedule Reminder**
   - Icon: Calendar (cyan)
   - Title: "ICT begins in 12 days"
   - Details: "27 May 2026 - 7 Jun 2026 (2 weeks)"
   - Time: Daily reminder
   - Action: "View Schedule"
   - Status: Read

3. **System Maintenance**
   - Icon: Settings (cyan)
   - Title: "Scheduled maintenance"
   - Details: "22 May 2026, 02:00-04:00 hrs"
   - Time: Upcoming
   - Action: "Dismiss"
   - Status: Read

### Success Notifications (Green/Cyan):

1. **Pack Verification Completed**
   - Icon: Checkmark circle (cyan)
   - Title: "Scan completed successfully"
   - Details: "Readiness score: 78% • 2 items missing"
   - Time: 1 day ago
   - Action: "View Results"
   - Status: Read

2. **Commander Approved**
   - Icon: Shield check (cyan)
   - Title: "Readiness acknowledged"
   - Details: "Unit commander reviewed your status"
   - Time: 3 days ago
   - Action: "Dismiss"
   - Status: Read

**Notification Actions**:
- **Primary Action**: Blue/Cyan button (main CTA)
- **Secondary Action**: Outline button (optional)
- **Dismiss**: Swipe left or X icon
- **Mark as Read**: Tap notification body

**Batch Actions** (top bar):
- "Mark All as Read"
- "Clear Read Notifications"
- "Settings" (notification preferences)

**Notification Settings** (accessible from header):
- Push notifications: On/Off toggle
- Email notifications: On/Off toggle
- Frequency: Immediate / Daily digest / Weekly summary
- Categories: Select which types to receive
- Quiet hours: Mute notifications (22:00-08:00)

**Interactions**:
1. Tap notification → Navigate to relevant page (with context)
2. Swipe left → Dismiss notification
3. Tap action button → Perform action (acknowledge, approve, etc.)
4. Filter tabs → Show only selected category
5. Mark all as read → Batch operation with confirmation

**User Flow**:
- Accessed from Dashboard quick actions (with badge count)
- Review critical/warning notifications first
- Take action directly from notification
- Manage notification preferences
- Keep inbox clean with dismiss/mark read

**Design Notes**:
- Color-coded by severity (red > amber > cyan)
- Unread badge with count for attention
- Actionable notifications (not just informational)
- Time context (relative timestamps)
- Integration with all major features (verification, checklist, buddy, SAF100)
- Persistent across sessions (local storage + backend sync)

---

## SCREEN 8 — SAF100 ACKNOWLEDGEMENT WORKFLOW

### Purpose:
Digital mobilisation confirmation process (**Shows operational realism**)

### Key Elements:

**Header**:
- **Title**: "ICT Mobilisation"
- **Subtitle**: "SAF100 Acknowledgement Required"
- **Deadline Badge**: 
  - Text: "Acknowledge by: 20 May 2026, 12:00 noon"
  - Color: Red if <24 hours, Amber if <3 days, Cyan otherwise
  - Icon: Clock

**Mobilisation Details Card** (glass-command):

### Basic Information:
- **Unit**: Bravo Company, 3rd Battalion Singapore Infantry Regiment (3SIR)
- **ICT Dates**: 27 May 2026 - 7 Jun 2026
- **Duration**: 2 weeks (14 days)
- **Report Time**: 0800 hrs, 27 May 2026
- **Report Location**: 
  - Kranji Camp
  - Grid Reference: [REDACTED]
  - Gate: Main Gate A
- **Mobilisation Type**: In-Camp Training (ICT)
- **Training Focus**: Field operations, live firing, tactical exercises

### Countdown Display:
- **Large Counter**: "12 days"
  - Font: JetBrains Mono, large display
  - Gradient: Cyan command gradient
  - Label: "Until mobilisation"
- **Hours/Minutes**: Dynamic countdown (HH:MM:SS)

**Reporting Instructions** (4-step checklist):

1. ✓ **Acknowledge SAF100**
   - Deadline: 20 May 2026, 12:00 noon
   - Status: Pending
   - Action: See acknowledgement section below

2. ⏳ **Complete Readiness Check**
   - Current: 78% readiness
   - Target: 85% minimum
   - Action: "Review Checklist" button

3. ⏳ **Arrange Transportation**
   - Report to: Kranji Camp Main Gate A
   - By: 0800 hrs sharp
   - Note: Punctuality is critical

4. ⏳ **Pack Equipment**
   - Verify all items before departure
   - Last verification: 1 day ago
   - Action: "Run Scan" button

**Acknowledgement Section** (primary CTA):

- **Checkbox**: "I acknowledge receipt of this mobilisation notice and will report as instructed."
- **Acknowledgement Button**:
  - Text: "Acknowledge SAF100"
  - Background: Gradient cyan (from-accent to-accent-700)
  - Size: Large, full-width
  - Icon: Shield checkmark
  - Loading State: "Submitting..." with spinner
  - Disabled State: Greyed out until checkbox checked

**Success Confirmation** (after acknowledgement):
- **Title**: "Acknowledgement Confirmed"
- **Icon**: Large checkmark circle (cyan)
- **Confirmation Number**: "ACK-2026-05-19-001234"
- **Timestamp**: "Acknowledged: 19 May 2026, 14:32 hrs"
- **Next Steps**:
  - "Your unit commander has been notified"
  - "Complete readiness preparation before mobilisation"
  - "Report punctually on 27 May 2026, 0800 hrs"
- **Action Buttons**:
  - "View Confirmation" (download PDF)
  - "Return to Dashboard"

**Deferment Option** (bottom section):
- **Text**: "Unable to report?"
- **Link**: "Contact unit for deferment procedures"
- **Phone**: Unit hotline (click to call)
- **Email**: S1 branch email (click to compose)
- **Note**: "Deferments require valid reasons and approval"

**Important Notices** (info cards):
- ⚠️ "Report with completed field pack"
- ⚠️ "Bring NRIC and 11B for identification"
- ⚠️ "No smoking/alcohol 8 hours before reporting"
- ⚠️ "Inform unit immediately if unable to report"

**Interactions**:
1. Check acknowledgement checkbox → Enable button
2. Click "Acknowledge SAF100" → Loading state (1s) → Success confirmation
3. Success state: Generate confirmation PDF
4. Click "Contact unit" → Open dialer or email client
5. Navigation: Return to dashboard with updated status

**User Flow**:
- Accessed from Dashboard ICT countdown card or Notifications
- Review mobilisation details
- Complete readiness checks (via links)
- Acknowledge SAF100 digitally
- Receive confirmation
- Track countdown to mobilisation

**Design Notes**:
- **Shows deep operational understanding** of SAF100 process
- Formal but user-friendly tone
- Critical information prominently displayed
- Deadline pressure conveyed through colors/countdown
- Integration with readiness tracking
- Digital record of acknowledgement (audit trail)
- Deferment option shows realistic workflow awareness

**Competitive Edge**:
- **Proves workflow understanding** (SAF100 is real process)
- Digitizes paper-based acknowledgement
- Integrates with broader readiness platform
- Reduces manual S1 branch coordination
- Creates audit trail for compliance
- Most teams miss this level of operational detail

---

## WIREFRAME FLOW DIAGRAM

### Primary User Journey (NSman):

```
START
  ↓
[1. Login] → Singpass authentication
  ↓
[2. Dashboard] → Overview of readiness (78%)
  ↓
├─→ [3. Verify Pack] → Scan equipment → Update checklist
│   ↓
│   [4. Checklist] → Review items, expiry alerts
│   ↓
│   [6. Buddy] → Find equipment from buddies
│
├─→ [8. Acknowledge] → SAF100 digital confirmation
│   ↓
│   Return to Dashboard (updated status)
│
└─→ [7. Notifications] → Review alerts and take actions
    ↓
    Return to Dashboard
```

### Commander Journey:

```
START
  ↓
[1. Login] → Commander role authentication
  ↓
[2. Dashboard] → Overview + Commander access
  ↓
[5. Commander Dashboard] → Unit readiness heatmap
  ↓
  ├─→ Identify bottlenecks → Contact personnel
  ├─→ Send reminders → Batch notifications
  └─→ Export report → PDF for S1 branch
      ↓
      Return to Dashboard
```

### Equipment Coordination Flow:

```
[4. Checklist] → Identify missing items
  ↓
[6. Buddy] → Find nearby buddies with spares
  ↓
Send request → Buddy receives notification
  ↓
Buddy approves → Coordinate pickup/delivery
  ↓
[4. Checklist] → Mark item as obtained
  ↓
[3. Verify Pack] → Re-scan to confirm
  ↓
[2. Dashboard] → Updated readiness score
```

---

## DESIGN SPECIFICATIONS

### Color System (Precision Command Theme):
- **Primary**: #0F1729 (Deep Navy)
- **Accent**: #06b6d4 (Electric Cyan)
- **Success**: #06b6d4 (Cyan)
- **Warning**: #f59e0b (Amber)
- **Destructive**: #ef4444 (Red)
- **Background**: #0a0e1a (Command Black)

### Typography:
- **Display/Headings**: Outfit (800-900 weight)
- **Metrics/Scores**: JetBrains Mono (700 weight)
- **Body Text**: Outfit (400-600 weight)

### Component Standards:
- **Glass Cards**: rgba(15, 23, 41, 0.85), 0.75rem border-radius, cyan borders
- **Buttons**: Gradient backgrounds, 44px min height, rounded-lg
- **Icons**: 16-24px (mobile), 20-32px (desktop), cyan accent
- **Spacing**: 1rem (16px) base, 1.5rem (24px) cards, 2rem (32px) sections
- **Shadows**: Multi-layer with cyan tints

### Responsive Breakpoints:
- **Mobile**: 375px (base)
- **Tablet**: 768px (sm:)
- **Desktop**: 1024px+ (md:, lg:)

### Accessibility:
- **Contrast**: WCAG AA (4.5:1 minimum)
- **Touch Targets**: 44px minimum
- **Focus States**: 2px cyan outline
- **Keyboard Navigation**: Tab order logical
- **Screen Reader**: Semantic HTML, ARIA labels

---

## WIREFRAME DELIVERABLES

### To Submit:

1. **Screenshots** (8 high-res PNG):
   - Login page
   - Dashboard (full scroll)
   - Verify Pack (before + after scan)
   - Checklist (expanded categories)
   - Commander Dashboard (heatmap visible)
   - Buddy Coordination (recommendations visible)
   - Notifications (all categories)
   - SAF100 Acknowledgement (full workflow)

2. **Flow Diagram** (1 PDF):
   - Visual user journey map
   - Screen connections
   - Decision points
   - Role-based flows

3. **Annotations** (this document):
   - Screen descriptions
   - Feature explanations
   - Interaction details
   - Design rationale

**Screenshot Specifications**:
- Resolution: 1920x1080 (desktop) or 375x812 (mobile)
- Format: PNG with transparency where applicable
- Quality: High (no compression artifacts)
- Annotations: Red arrows/boxes for key features (optional)
- File naming: `01_Login.png`, `02_Dashboard.png`, etc.

---

**END OF WIREFRAME DOCUMENTATION**
**Total Screens**: 8 (comprehensive coverage)
**Ready for**: Screenshot capture + flow diagram creation
