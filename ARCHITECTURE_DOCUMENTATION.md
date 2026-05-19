# MOBILISE - ARCHITECTURE DOCUMENTATION
## CODE_EXP 2026 Submission

**Purpose**: Technical architecture showing infrastructure, network, compute, storage, connections
**Format**: Diagram + detailed component descriptions
**Scope**: Production-ready scalable architecture

---

## ARCHITECTURE OVERVIEW

### System Type: **Hybrid Cloud Progressive Web Application**

### Key Principles:
1. **Privacy-Preserving**: Sensitive data on secure infrastructure
2. **Offline-Capable**: Edge computing for resilience
3. **Scalable**: Handles 100,000+ concurrent users
4. **Secure**: Role-based access, encryption, audit logging
5. **Feasible**: Uses mature, deployable technologies

---

## HIGH-LEVEL ARCHITECTURE DIAGRAM

```
┌─────────────────────────────────────────────────────────────────┐
│                        USER DEVICES                              │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐         │
│  │   NSman      │  │  Commander   │  │    Admin     │         │
│  │   Mobile     │  │   Desktop    │  │   Portal     │         │
│  └──────────────┘  └──────────────┘  └──────────────┘         │
│         │                  │                  │                  │
│         └──────────────────┴──────────────────┘                 │
│                            │                                     │
│                  [HTTPS / TLS 1.3]                              │
└─────────────────────────────────────────────────────────────────┘
                             │
                             ↓
┌─────────────────────────────────────────────────────────────────┐
│                     CDN / EDGE LAYER                             │
│  ┌────────────────────────────────────────────────────────────┐ │
│  │  CloudFlare CDN (or AWS CloudFront)                        │ │
│  │  • Static asset delivery (JS, CSS, images)                 │ │
│  │  • DDoS protection                                          │ │
│  │  • Global edge caching                                      │ │
│  │  • SSL/TLS termination                                      │ │
│  └────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────┘
                             │
                             ↓
┌─────────────────────────────────────────────────────────────────┐
│                    FRONTEND LAYER (PWA)                          │
│  ┌────────────────────────────────────────────────────────────┐ │
│  │  Next.js 14 Application (SSR + Static Generation)          │ │
│  │  • TypeScript for type safety                               │ │
│  │  • Tailwind CSS for styling                                 │ │
│  │  • React 19 for UI components                               │ │
│  │  • Service Worker for offline capability                    │ │
│  │  • IndexedDB for local data persistence                     │ │
│  └────────────────────────────────────────────────────────────┘ │
│  ┌────────────────────────────────────────────────────────────┐ │
│  │  Edge-AI Inference Layer (On-Device)                       │ │
│  │  • TensorFlow Lite for mobile inference                     │ │
│  │  • ONNX Runtime for browser inference                       │ │
│  │  • Model: MobileNetV3 (optimized for mobile)               │ │
│  │  • Training: Synthetic dataset (no sensitive data)         │ │
│  │  • Privacy: All processing local, no transmission          │ │
│  └────────────────────────────────────────────────────────────┘ │
│                                                                   │
│  Hosting: Vercel (Next.js optimized) or AWS Amplify             │
└─────────────────────────────────────────────────────────────────┘
                             │
                   [API Gateway / Load Balancer]
                             ↓
┌─────────────────────────────────────────────────────────────────┐
│                    API GATEWAY LAYER                             │
│  ┌────────────────────────────────────────────────────────────┐ │
│  │  Kong API Gateway / AWS API Gateway                        │ │
│  │  • Request routing and load balancing                       │ │
│  │  • Rate limiting (1000 req/min per user)                    │ │
│  │  • Authentication validation (JWT)                          │ │
│  │  • API versioning (/api/v1/)                                │ │
│  │  • Request/response logging                                 │ │
│  └────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────┘
                             │
                             ↓
┌─────────────────────────────────────────────────────────────────┐
│                   BACKEND APPLICATION LAYER                      │
│  ┌────────────────────────────────────────────────────────────┐ │
│  │  FastAPI Microservices (Python 3.11+)                      │ │
│  │                                                              │ │
│  │  ┌─────────────────┐  ┌─────────────────┐                │ │
│  │  │  Auth Service   │  │ Readiness Svc   │                │ │
│  │  │  • Singpass     │  │ • Checklist API │                │ │
│  │  │  • JWT tokens   │  │ • Score calc    │                │ │
│  │  │  • RBAC         │  │ • Expiry track  │                │ │
│  │  └─────────────────┘  └─────────────────┘                │ │
│  │                                                              │ │
│  │  ┌─────────────────┐  ┌─────────────────┐                │ │
│  │  │  Commander Svc  │  │ Notification Svc│                │ │
│  │  │  • Dashboard    │  │ • Push notif    │                │ │
│  │  │  • Analytics    │  │ • Email/SMS     │                │ │
│  │  │  • Reports      │  │ • Alerts        │                │ │
│  │  └─────────────────┘  └─────────────────┘                │ │
│  │                                                              │ │
│  │  ┌─────────────────┐  ┌─────────────────┐                │ │
│  │  │  Buddy Svc      │  │ SAF100 Svc      │                │ │
│  │  │  • Matching     │  │ • Acknowledge   │                │ │
│  │  │  • Requests     │  │ • Confirmation  │                │ │
│  │  │  • Proximity    │  │ • Audit trail   │                │ │
│  │  └─────────────────┘  └─────────────────┘                │ │
│  └────────────────────────────────────────────────────────────┘ │
│                                                                   │
│  Container Orchestration: Kubernetes (EKS/GKE) or Docker Swarm  │
│  Auto-scaling: Horizontal Pod Autoscaler (HPA)                  │
└─────────────────────────────────────────────────────────────────┘
                             │
                             ↓
┌─────────────────────────────────────────────────────────────────┐
│                        DATA LAYER                                │
│  ┌────────────────────────────────────────────────────────────┐ │
│  │  Primary Database: PostgreSQL 15+                          │ │
│  │  • User profiles and authentication                         │ │
│  │  • Readiness records and checklists                         │ │
│  │  • Commander analytics data                                 │ │
│  │  • SAF100 acknowledgement records                           │ │
│  │  • Buddy coordination requests                              │ │
│  │  • Audit logs and compliance                                │ │
│  │                                                              │ │
│  │  High Availability: Primary + Read Replicas (2x)           │ │
│  │  Backup: Daily snapshots + WAL archiving                    │ │
│  │  Encryption: AES-256 at rest, TLS 1.3 in transit           │ │
│  └────────────────────────────────────────────────────────────┘ │
│                                                                   │
│  ┌────────────────────────────────────────────────────────────┐ │
│  │  Cache Layer: Redis Cluster                                │ │
│  │  • Session management (JWT blacklist)                       │ │
│  │  • API response caching                                      │ │
│  │  • Real-time readiness scores                               │ │
│  │  • Rate limiting counters                                    │ │
│  │  • Pub/Sub for notifications                                │ │
│  │                                                              │ │
│  │  High Availability: Redis Sentinel (3 nodes)               │ │
│  │  TTL: 15 minutes for API responses, 24h for sessions       │ │
│  └────────────────────────────────────────────────────────────┘ │
│                                                                   │
│  ┌────────────────────────────────────────────────────────────┐ │
│  │  Object Storage: S3-compatible (AWS S3 / MinIO)            │ │
│  │  • AI model files (TFLite, ONNX)                            │ │
│  │  • User-uploaded images (verification scans - encrypted)   │ │
│  │  • Export reports (PDF)                                      │ │
│  │  • Static assets (images, documents)                        │ │
│  │                                                              │ │
│  │  Lifecycle: 90-day retention, then archive                 │ │
│  │  Encryption: Server-side (SSE-S3)                           │ │
│  └────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────┘
                             │
                             ↓
┌─────────────────────────────────────────────────────────────────┐
│                   INTEGRATION LAYER                              │
│  ┌────────────────────────────────────────────────────────────┐ │
│  │  External Services (Production)                            │ │
│  │                                                              │ │
│  │  • Singpass Authentication (MyInfo API)                     │ │
│  │    - OAuth 2.0 / OpenID Connect                             │ │
│  │    - User profile retrieval (name, NRIC, unit)             │ │
│  │                                                              │ │
│  │  • Push Notification Service                                │ │
│  │    - Firebase Cloud Messaging (FCM)                         │ │
│  │    - Apple Push Notification Service (APNS)                │ │
│  │                                                              │ │
│  │  • SMS Gateway (Twilio / AWS SNS)                           │ │
│  │    - Critical alerts and OTP                                │ │
│  │                                                              │ │
│  │  • Email Service (SendGrid / AWS SES)                       │ │
│  │    - Weekly summaries and reports                           │ │
│  │                                                              │ │
│  │  • Geolocation Service (Google Maps API)                    │ │
│  │    - Buddy proximity calculation                            │ │
│  └────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────┘
                             │
                             ↓
┌─────────────────────────────────────────────────────────────────┐
│                 MONITORING & OBSERVABILITY                       │
│  ┌────────────────────────────────────────────────────────────┐ │
│  │  Logging: ELK Stack (Elasticsearch, Logstash, Kibana)      │ │
│  │  • Application logs (structured JSON)                       │ │
│  │  • Access logs (nginx/API gateway)                          │ │
│  │  • Audit logs (compliance)                                  │ │
│  │  • Retention: 90 days active, 1 year archive                │ │
│  └────────────────────────────────────────────────────────────┘ │
│                                                                   │
│  ┌────────────────────────────────────────────────────────────┐ │
│  │  Metrics: Prometheus + Grafana                             │ │
│  │  • API latency (p50, p95, p99)                              │ │
│  │  • Request rate (req/sec)                                    │ │
│  │  • Error rate (4xx, 5xx)                                     │ │
│  │  • Database query performance                                │ │
│  │  • Cache hit rate                                            │ │
│  └────────────────────────────────────────────────────────────┘ │
│                                                                   │
│  ┌────────────────────────────────────────────────────────────┐ │
│  │  Alerting: PagerDuty / Opsgenie                            │ │
│  │  • Critical: API downtime, database failure                 │ │
│  │  • Warning: High error rate, slow queries                   │ │
│  │  • Info: Deployment notifications                           │ │
│  └────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────┘
```

---

## COMPONENT DETAILS

### 1. USER DEVICES

**Supported Platforms**:
- **Mobile**: iOS 14+, Android 8+ (Progressive Web App)
- **Desktop**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Tablet**: iPadOS 14+, Android tablets

**Client Requirements**:
- **Browser**: Modern browser with JavaScript enabled
- **Storage**: 50 MB for offline data (IndexedDB)
- **Camera**: Required for verification feature (optional)
- **Network**: 3G minimum (offline-capable after initial load)

**Offline Capabilities**:
- Checklist viewing and editing
- Readiness score calculation
- Edge-AI verification (local processing)
- Data sync when connection restored

---

### 2. CDN / EDGE LAYER

**Provider**: CloudFlare (or AWS CloudFront)

**Purpose**:
- Global content delivery with <50ms latency
- DDoS protection and WAF (Web Application Firewall)
- Static asset caching (images, JS, CSS)
- SSL/TLS termination

**Configuration**:
- **Caching**: 
  - Static assets: 30 days TTL
  - API responses: No cache (dynamic)
  - HTML pages: 5 minutes TTL (SSR)
- **Compression**: Brotli + Gzip
- **Security**: 
  - HTTPS only (TLS 1.3)
  - HSTS headers
  - CSP (Content Security Policy)

**Locations**: 
- Singapore (primary)
- Southeast Asia edge nodes
- Global fallback

---

### 3. FRONTEND LAYER (PWA)

#### 3.1 Next.js Application

**Technology Stack**:
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript 5.0
- **UI Library**: React 19
- **Styling**: Tailwind CSS 3.4
- **State**: React Context + Local Storage

**Features**:
- **Server-Side Rendering (SSR)**: Initial page load
- **Static Site Generation (SSG)**: Landing pages
- **Client-Side Rendering (CSR)**: Dynamic content
- **Code Splitting**: Automatic route-based splitting
- **Image Optimization**: Next.js Image component
- **Font Optimization**: Outfit + JetBrains Mono (Google Fonts)

**Progressive Web App (PWA)**:
- **Service Worker**: Workbox-powered
- **Manifest**: App install prompt
- **Offline Support**: Core routes cached
- **Background Sync**: Queue API requests when offline
- **Push Notifications**: FCM integration

**Local Storage**:
- **IndexedDB**: Checklist data, readiness scores
- **LocalStorage**: User preferences, JWT token
- **Cache API**: Static assets, API responses

#### 3.2 Edge-AI Inference Layer

**Technology**:
- **Mobile**: TensorFlow Lite (iOS/Android)
- **Browser**: ONNX Runtime Web
- **Fallback**: Server-side inference (optional)

**Model Architecture**:
- **Base Model**: MobileNetV3-Small (optimized for mobile)
- **Task**: Object detection (equipment items)
- **Input**: 224x224 RGB images
- **Output**: Bounding boxes + class labels + confidence scores
- **Classes**: 32 equipment categories (Field Pack, Uniform, Medical, etc.)

**Training**:
- **Dataset**: Synthetic images (Blender 3D renders)
- **Size**: 50,000 training images, 10,000 validation
- **Augmentation**: Rotation, scaling, lighting variations
- **Framework**: TensorFlow 2.x
- **Quantization**: INT8 quantization for mobile deployment
- **Model Size**: <5 MB (optimized)

**Performance**:
- **Inference Time**: <500ms on mid-range mobile devices
- **Accuracy**: 92-98% confidence for common items
- **Privacy**: 100% local processing, no image transmission
- **Offline**: Fully functional without internet

---

### 4. API GATEWAY LAYER

**Technology**: Kong API Gateway (or AWS API Gateway)

**Responsibilities**:
- **Request Routing**: Forward requests to appropriate microservices
- **Load Balancing**: Round-robin across service replicas
- **Rate Limiting**: 1000 requests/minute per user
- **Authentication**: JWT validation
- **API Versioning**: /api/v1/, /api/v2/
- **CORS**: Configured for web app domain
- **Logging**: Request/response logging to ELK

**Security**:
- **TLS**: Required for all connections
- **API Keys**: Required for third-party integrations
- **IP Whitelisting**: Admin endpoints only from VPN
- **DDoS Protection**: Rate limiting + CloudFlare

**Scalability**:
- **Auto-scaling**: Based on request rate
- **Health Checks**: Liveness and readiness probes
- **Circuit Breaker**: Fail fast for unhealthy services

---

### 5. BACKEND APPLICATION LAYER

**Architecture**: Microservices (FastAPI)

#### 5.1 Auth Service

**Responsibilities**:
- User authentication via Singpass
- JWT token generation and validation
- Role-Based Access Control (RBAC)
- Session management

**Endpoints**:
- `POST /api/v1/auth/login` - Singpass OAuth flow
- `POST /api/v1/auth/logout` - Invalidate token
- `POST /api/v1/auth/refresh` - Refresh JWT
- `GET /api/v1/auth/me` - Get current user profile

**Database Tables**:
- `users` (id, nric_hash, name, unit, rank, role, created_at)
- `sessions` (id, user_id, token_hash, expires_at)
- `roles` (id, name, permissions)

**Security**:
- Password: Not stored (Singpass handles authentication)
- JWT: RS256 signing, 1-hour expiry
- Refresh Token: 30-day expiry, stored in httpOnly cookie
- NRIC: Hashed with bcrypt (never stored plaintext)

#### 5.2 Readiness Service

**Responsibilities**:
- Checklist management (CRUD)
- Readiness score calculation
- Expiry tracking and alerts
- Unit SOP synchronization

**Endpoints**:
- `GET /api/v1/checklist` - Get user checklist
- `POST /api/v1/checklist/items` - Add checklist item
- `PUT /api/v1/checklist/items/:id` - Update item status
- `GET /api/v1/readiness/score` - Calculate readiness score
- `GET /api/v1/expiry/alerts` - Get expiring items

**Database Tables**:
- `checklists` (id, user_id, unit_id, updated_at)
- `checklist_items` (id, checklist_id, item_name, status, expiry_date, category)
- `unit_sops` (id, unit_id, items_json, version, effective_date)

**Business Logic**:
- Readiness Score = (Complete Items / Total Items) × 100
- Expiry Alerts: RED ZONE (<14 days), Warning (<30 days)
- Auto-sync: Check unit SOP updates every 24 hours

#### 5.3 Commander Service

**Responsibilities**:
- Unit readiness dashboard
- Platoon/company analytics
- Acknowledgement tracking
- Report generation

**Endpoints**:
- `GET /api/v1/commander/dashboard` - Get unit readiness overview
- `GET /api/v1/commander/personnel` - List personnel with readiness
- `POST /api/v1/commander/reminders` - Send batch reminders
- `GET /api/v1/commander/reports/:format` - Export report (PDF/CSV)

**Database Tables**:
- `units` (id, name, type, parent_unit_id)
- `unit_personnel` (id, unit_id, user_id, role)
- `readiness_snapshots` (id, unit_id, personnel_id, score, timestamp)

**Analytics**:
- Average unit readiness (weighted by personnel count)
- Readiness trends (30-day moving average)
- Bottleneck identification (personnel <60% readiness)

#### 5.4 Notification Service

**Responsibilities**:
- Push notifications (FCM/APNS)
- Email notifications (SendGrid)
- SMS alerts (Twilio)
- In-app notifications

**Endpoints**:
- `POST /api/v1/notifications/send` - Send notification
- `GET /api/v1/notifications` - Get user notifications
- `PUT /api/v1/notifications/:id/read` - Mark as read
- `POST /api/v1/notifications/preferences` - Update preferences

**Database Tables**:
- `notifications` (id, user_id, type, title, body, read, sent_at)
- `notification_preferences` (id, user_id, push_enabled, email_enabled, frequency)

**Notification Types**:
- Critical: ICT mobilisation, SAF100 deadline
- Warning: Expiry alerts, missing items
- Info: Unit updates, buddy requests
- Success: Verification completed, acknowledgement confirmed

#### 5.5 Buddy Service

**Responsibilities**:
- Buddy matching (proximity-based)
- Equipment sharing requests
- Coordination workflow

**Endpoints**:
- `GET /api/v1/buddy/matches` - Get nearby buddies with spare items
- `POST /api/v1/buddy/requests` - Send equipment request
- `PUT /api/v1/buddy/requests/:id/approve` - Approve request
- `GET /api/v1/buddy/availability` - Update availability status

**Database Tables**:
- `buddy_availability` (id, user_id, item_name, quantity, available)
- `buddy_requests` (id, requester_id, provider_id, item_name, status, created_at)

**Matching Algorithm**:
- Filter: Same unit + item availability
- Sort: By proximity (geolocation-based)
- Limit: Top 5 matches
- Privacy: Only show unit members

#### 5.6 SAF100 Service

**Responsibilities**:
- Mobilisation acknowledgement
- Confirmation generation
- Audit trail

**Endpoints**:
- `POST /api/v1/saf100/acknowledge` - Acknowledge mobilisation
- `GET /api/v1/saf100/confirmation/:id` - Get confirmation PDF
- `GET /api/v1/saf100/status` - Check acknowledgement status

**Database Tables**:
- `mobilisations` (id, unit_id, ict_date, report_time, location, deadline)
- `acknowledgements` (id, mobilisation_id, user_id, acknowledged_at, confirmation_number)

**Workflow**:
1. User clicks "Acknowledge SAF100"
2. Record timestamp and generate confirmation number
3. Send confirmation to user and commander
4. Update dashboard status
5. Audit log for compliance

---

### 6. DATA LAYER

#### 6.1 PostgreSQL Database

**Version**: PostgreSQL 15+

**Configuration**:
- **High Availability**: Primary + 2 read replicas
- **Backup**: Daily snapshots + WAL archiving (30-day retention)
- **Replication**: Streaming replication (async)
- **Connection Pooling**: PgBouncer (max 1000 connections)

**Schema Design**:

```sql
-- Users and Authentication
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    nric_hash VARCHAR(255) UNIQUE NOT NULL,
    name VARCHAR(255) NOT NULL,
    unit_id UUID REFERENCES units(id),
    rank VARCHAR(50),
    role VARCHAR(50) DEFAULT 'nsman',
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

-- Units and Hierarchy
CREATE TABLE units (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    type VARCHAR(50), -- platoon, company, battalion
    parent_unit_id UUID REFERENCES units(id),
    created_at TIMESTAMP DEFAULT NOW()
);

-- Checklists
CREATE TABLE checklists (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    unit_id UUID REFERENCES units(id),
    readiness_score INTEGER DEFAULT 0,
    updated_at TIMESTAMP DEFAULT NOW()
);

-- Checklist Items
CREATE TABLE checklist_items (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    checklist_id UUID REFERENCES checklists(id) ON DELETE CASCADE,
    item_name VARCHAR(255) NOT NULL,
    category VARCHAR(50), -- uniform, field_pack, medical, equipment
    status VARCHAR(50) DEFAULT 'pending', -- complete, expiring, missing
    expiry_date DATE,
    notes TEXT,
    created_at TIMESTAMP DEFAULT NOW()
);

-- Mobilisations
CREATE TABLE mobilisations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    unit_id UUID REFERENCES units(id),
    ict_date DATE NOT NULL,
    report_time TIME NOT NULL,
    location VARCHAR(255),
    deadline TIMESTAMP NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);

-- Acknowledgements (SAF100)
CREATE TABLE acknowledgements (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    mobilisation_id UUID REFERENCES mobilisations(id),
    user_id UUID REFERENCES users(id),
    acknowledged_at TIMESTAMP NOT NULL,
    confirmation_number VARCHAR(50) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);

-- Buddy Requests
CREATE TABLE buddy_requests (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    requester_id UUID REFERENCES users(id),
    provider_id UUID REFERENCES users(id),
    item_name VARCHAR(255) NOT NULL,
    status VARCHAR(50) DEFAULT 'pending', -- pending, approved, declined, completed
    created_at TIMESTAMP DEFAULT NOW()
);

-- Notifications
CREATE TABLE notifications (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    type VARCHAR(50) NOT NULL, -- critical, warning, info, success
    title VARCHAR(255) NOT NULL,
    body TEXT,
    read BOOLEAN DEFAULT FALSE,
    sent_at TIMESTAMP DEFAULT NOW()
);

-- Audit Logs
CREATE TABLE audit_logs (
    id BIGSERIAL PRIMARY KEY,
    user_id UUID REFERENCES users(id),
    action VARCHAR(255) NOT NULL,
    resource_type VARCHAR(50),
    resource_id UUID,
    ip_address INET,
    user_agent TEXT,
    created_at TIMESTAMP DEFAULT NOW()
);

-- Indexes for Performance
CREATE INDEX idx_checklist_items_checklist_id ON checklist_items(checklist_id);
CREATE INDEX idx_checklist_items_expiry_date ON checklist_items(expiry_date) WHERE expiry_date IS NOT NULL;
CREATE INDEX idx_notifications_user_id_read ON notifications(user_id, read);
CREATE INDEX idx_buddy_requests_status ON buddy_requests(status);
CREATE INDEX idx_audit_logs_user_id_created_at ON audit_logs(user_id, created_at DESC);
```

**Data Encryption**:
- At Rest: AES-256 (PostgreSQL TDE)
- In Transit: TLS 1.3
- Sensitive Fields: Hashed (NRIC using bcrypt)

**Performance**:
- Query Optimization: EXPLAIN ANALYZE for slow queries
- Partitioning: audit_logs by month (time-series)
- Vacuum: Autovacuum configured
- Connection Pooling: PgBouncer

#### 6.2 Redis Cache

**Version**: Redis 7+

**Configuration**:
- **High Availability**: Redis Sentinel (3 nodes)
- **Persistence**: RDB snapshots + AOF (append-only file)
- **Memory**: 4 GB per node
- **Eviction Policy**: LRU (Least Recently Used)

**Use Cases**:
1. **Session Management**:
   - Key: `session:{token_hash}`
   - TTL: 1 hour (JWT expiry)
   - Data: User ID, role, permissions

2. **API Response Caching**:
   - Key: `api:{endpoint}:{params_hash}`
   - TTL: 15 minutes
   - Data: JSON response

3. **Readiness Scores**:
   - Key: `readiness:{user_id}`
   - TTL: 5 minutes
   - Data: Score + timestamp

4. **Rate Limiting**:
   - Key: `ratelimit:{user_id}:{minute}`
   - TTL: 1 minute
   - Data: Request count

5. **Pub/Sub** (Real-time notifications):
   - Channel: `notifications:{user_id}`
   - Subscribers: WebSocket connections

#### 6.3 Object Storage (S3)

**Provider**: AWS S3 (or MinIO for on-premise)

**Buckets**:
1. **AI Models**: `mobilise-models`
   - TFLite models (versioned)
   - ONNX models (versioned)
   - Public read access (CDN-backed)

2. **User Uploads**: `mobilise-uploads`
   - Verification scan images (encrypted)
   - Private access (pre-signed URLs)
   - 90-day lifecycle (archive to Glacier)

3. **Reports**: `mobilise-reports`
   - PDF exports (commander reports)
   - CSV exports (data analytics)
   - 30-day retention

**Security**:
- Encryption: SSE-S3 (server-side)
- Access: IAM roles (least privilege)
- Versioning: Enabled for models
- Logging: CloudTrail audit logs

---

### 7. INTEGRATION LAYER

#### 7.1 Singpass Authentication (MyInfo)

**Protocol**: OAuth 2.0 / OpenID Connect

**Flow**:
1. User clicks "Login with Singpass"
2. Redirect to Singpass authorization endpoint
3. User authenticates with Singpass (2FA)
4. Singpass redirects back with authorization code
5. Exchange code for access token
6. Retrieve user profile from MyInfo API
7. Create/update user record
8. Issue JWT token
9. Redirect to dashboard

**Data Retrieved**:
- Name
- NRIC (hashed before storage)
- Unit assignment (if available)
- Rank (if available)

**Environment**:
- **Staging**: Singpass Developer Portal (test accounts)
- **Production**: Singpass production environment

#### 7.2 Push Notifications

**Providers**:
- **Android**: Firebase Cloud Messaging (FCM)
- **iOS**: Apple Push Notification Service (APNS)
- **Web**: Web Push API (service worker)

**Implementation**:
- Registration: Device token stored in database
- Sending: Batch send via Firebase Admin SDK
- Delivery: Guaranteed delivery with retry logic
- Handling: Open app to relevant page (deep linking)

#### 7.3 SMS Gateway

**Provider**: Twilio (or AWS SNS)

**Use Cases**:
- Critical alerts (ICT mobilisation)
- OTP for sensitive operations
- Fallback when push fails

**Configuration**:
- Sender ID: "MOBILISE"
- Delivery Report: Enabled
- Fallback: Email if SMS fails

#### 7.4 Email Service

**Provider**: SendGrid (or AWS SES)

**Use Cases**:
- Weekly readiness summary
- Commander reports (PDF attachment)
- Account notifications

**Templates**:
- Transactional: Account created, password reset
- Digest: Weekly summary (HTML + plain text)
- Reports: Commander export (PDF attachment)

#### 7.5 Geolocation Service

**Provider**: Google Maps Platform (Geocoding API)

**Use Cases**:
- Buddy proximity calculation
- Unit location mapping
- Route planning (future)

**Implementation**:
- Input: User postal code (entered once)
- Output: Latitude/longitude coordinates
- Distance: Haversine formula for proximity
- Privacy: Postal code level (not exact address)

---

### 8. MONITORING & OBSERVABILITY

#### 8.1 Logging (ELK Stack)

**Components**:
- **Elasticsearch**: Log storage and indexing
- **Logstash**: Log aggregation and parsing
- **Kibana**: Visualization and dashboards

**Log Types**:
1. **Application Logs**:
   - Format: Structured JSON
   - Fields: timestamp, level, message, user_id, trace_id
   - Retention: 90 days active, 1 year archive

2. **Access Logs**:
   - Format: nginx combined format
   - Fields: IP, method, path, status, latency
   - Retention: 30 days

3. **Audit Logs**:
   - Format: Structured JSON
   - Fields: user_id, action, resource, timestamp
   - Retention: 7 years (compliance)

**Dashboards**:
- Real-time error tracking
- API latency percentiles
- User activity timeline

#### 8.2 Metrics (Prometheus + Grafana)

**Metrics Collected**:
1. **API Performance**:
   - Request rate (req/sec)
   - Response time (p50, p95, p99)
   - Error rate (4xx, 5xx)

2. **Database**:
   - Query latency
   - Connection pool usage
   - Cache hit rate

3. **Infrastructure**:
   - CPU/memory usage
   - Network throughput
   - Disk I/O

**Dashboards**:
- System overview (golden signals)
- Service-specific metrics
- Database performance

**Retention**:
- Raw data: 15 days
- Aggregated data: 1 year

#### 8.3 Alerting

**Provider**: PagerDuty (or Opsgenie)

**Alert Rules**:
1. **Critical** (immediate response):
   - API downtime (>1 minute)
   - Database failure
   - High error rate (>5% for 5 minutes)

2. **Warning** (next business day):
   - Slow queries (>1 second)
   - Cache miss rate high (>50%)
   - Disk space low (<20%)

3. **Info** (logged only):
   - Deployment notifications
   - Scaling events
   - Scheduled maintenance

**Escalation**:
- Tier 1: On-call engineer (15 minutes)
- Tier 2: Lead engineer (30 minutes)
- Tier 3: CTO/Manager (1 hour)

---

## SECURITY ARCHITECTURE

### Authentication & Authorization

**Authentication Flow**:
1. User → Singpass OAuth
2. Singpass → MyInfo (user profile)
3. MOBILISE → Issue JWT (1-hour expiry)
4. Client → Store JWT (httpOnly cookie)
5. API requests → Validate JWT (signature + expiry)

**Authorization (RBAC)**:
- **NSman**: Read/write own data
- **Commander**: Read unit data, write reminders
- **Admin**: Full system access

### Data Protection

**Sensitive Data**:
- **NRIC**: Hashed with bcrypt (cost factor 12)
- **JWT Tokens**: RS256 signing (2048-bit key)
- **Passwords**: Not stored (Singpass handles)
- **Verification Images**: AES-256 encrypted in S3

**Data Minimization**:
- Only collect necessary data
- No permanent storage of verification images (encrypted, 90-day lifecycle)
- Anonymized analytics (no PII)

### Network Security

**Perimeter**:
- CloudFlare WAF (Web Application Firewall)
- DDoS protection (rate limiting)
- IP whitelisting for admin endpoints

**Internal**:
- VPC (Virtual Private Cloud) isolation
- Private subnets for database/cache
- Security groups (least privilege)

**Transport**:
- TLS 1.3 everywhere
- HSTS (HTTP Strict Transport Security)
- Certificate pinning (mobile apps)

### Compliance

**Standards**:
- **PDPA** (Personal Data Protection Act Singapore)
- **NIST Cybersecurity Framework**
- **OWASP Top 10** (mitigation)

**Audit**:
- All actions logged to audit_logs table
- 7-year retention for compliance
- Regular security audits (quarterly)

---

## SCALABILITY & PERFORMANCE

### Horizontal Scaling

**Application Tier**:
- Kubernetes HPA (Horizontal Pod Autoscaler)
- Target: 70% CPU utilization
- Min replicas: 3, Max replicas: 20
- Scale-up: +2 pods per minute
- Scale-down: -1 pod every 5 minutes

**Database Tier**:
- Read replicas (2x) for read-heavy queries
- Write traffic to primary only
- Connection pooling (PgBouncer)

### Caching Strategy

**Multi-Layer**:
1. **CDN**: Static assets (30-day TTL)
2. **Redis**: API responses (15-minute TTL)
3. **Browser**: Service worker cache (offline)

**Cache Invalidation**:
- TTL-based (time-to-live)
- Explicit invalidation (on data update)
- Cache warming (pre-populate hot data)

### Load Testing

**Scenarios**:
1. **Peak Load**: 10,000 concurrent users
2. **Sustained Load**: 5,000 users for 1 hour
3. **Spike Test**: 0 → 10,000 users in 1 minute

**Tools**:
- Locust (Python load testing)
- JMeter (distributed testing)
- Artillery (CI/CD integration)

**Target Metrics**:
- Response time: p95 < 500ms
- Error rate: < 0.1%
- Throughput: 10,000 req/sec

---

## DEPLOYMENT ARCHITECTURE

### Environments

1. **Development**: Local Docker Compose
2. **Staging**: Kubernetes cluster (AWS EKS)
3. **Production**: Kubernetes cluster (redundant availability zones)

### CI/CD Pipeline

**Tools**: GitHub Actions + ArgoCD

**Pipeline Stages**:
1. **Build**: 
   - Lint (ESLint, Ruff)
   - Type check (TypeScript, mypy)
   - Unit tests (Jest, Pytest)
   - Build Docker image

2. **Test**:
   - Integration tests
   - E2E tests (Playwright)
   - Security scan (Trivy)

3. **Deploy**:
   - Push image to registry (ECR)
   - Update Kubernetes manifests
   - ArgoCD sync
   - Health check
   - Smoke tests

4. **Monitor**:
   - Deployment notification
   - Alert rules active
   - Dashboard review

**Rollback Strategy**:
- Automatic: If health checks fail
- Manual: Via ArgoCD UI
- Database: Schema migrations reversible

---

## DISASTER RECOVERY

### Backup Strategy

**Database**:
- Daily snapshots (7-day retention)
- WAL archiving (continuous)
- Cross-region replication (async)

**Object Storage**:
- Versioning enabled
- Cross-region replication
- Lifecycle: Archive to Glacier after 90 days

**Recovery Time Objective (RTO)**: 1 hour
**Recovery Point Objective (RPO)**: 15 minutes

### Business Continuity

**Failover**:
- Automatic: Database read replica promotion
- Manual: Switch DNS to backup region
- Testing: Quarterly failover drills

**Data Center Failure**:
- Multi-AZ deployment (AWS)
- Cross-region backup (Disaster Recovery)
- Health checks with automatic failover

---

## COST ESTIMATION (AWS Singapore Region)

### Monthly Operational Cost (10,000 users)

| Component | Specification | Cost (USD) |
|-----------|---------------|------------|
| **Compute** (EKS) | 5 x t3.medium | $180 |
| **Database** (RDS) | db.t3.medium + 2 replicas | $250 |
| **Cache** (ElastiCache) | cache.t3.medium x 3 | $150 |
| **Storage** (S3) | 500 GB | $12 |
| **CDN** (CloudFront) | 1 TB transfer | $85 |
| **Load Balancer** (ALB) | 1 instance | $25 |
| **Monitoring** (CloudWatch) | Logs + metrics | $50 |
| **External Services** | FCM, SendGrid, Twilio | $100 |
| **Total** | | **~$850/month** |

### Scaling Projection (100,000 users)

- Compute: Scale to 20 instances (~$720)
- Database: Upgrade to db.r5.large (~$500)
- Total: **~$2,500/month**

**Cost Optimization**:
- Reserved instances (40% savings)
- Spot instances for non-critical workloads
- S3 lifecycle policies (archive old data)
- Right-sizing (monitor and adjust)

---

## TECHNOLOGY JUSTIFICATION

### Why Next.js?
- ✓ Production-ready SSR + SSG
- ✓ Excellent performance (Lighthouse 95+)
- ✓ Built-in optimization (images, fonts, code splitting)
- ✓ Large community and ecosystem
- ✓ Vercel deployment (optimized hosting)

### Why FastAPI?
- ✓ High performance (comparable to Node.js)
- ✓ Automatic API documentation (OpenAPI)
- ✓ Type safety with Pydantic
- ✓ Async/await support (concurrent requests)
- ✓ Easy to test and maintain

### Why PostgreSQL?
- ✓ ACID compliance (data integrity)
- ✓ JSON support (flexible schemas)
- ✓ Full-text search (checklist items)
- ✓ Mature and battle-tested
- ✓ Strong ecosystem (PgBouncer, PostGIS)

### Why TensorFlow Lite?
- ✓ Mobile-optimized (small model size)
- ✓ On-device inference (privacy)
- ✓ Offline capability (no internet required)
- ✓ Cross-platform (iOS, Android, Web)
- ✓ Official Google support

---

## ARCHITECTURE DIAGRAM FORMATS

### For Submission:

1. **High-Level Diagram** (this document)
   - Format: Markdown ASCII art (readable)
   - Alternative: Draw.io XML → export to PNG/PDF

2. **Detailed Component Diagram**
   - Tool: Lucidchart, Draw.io, or Mermaid.js
   - Format: PNG (1920x1080) or PDF
   - Annotations: Component descriptions

3. **Network Topology**
   - Show: VPC, subnets, security groups
   - Highlight: Data flow paths
   - Label: Ports and protocols

4. **Data Flow Diagram**
   - Show: Request → Response path
   - Include: Authentication flow
   - Highlight: Encryption points

---

**END OF ARCHITECTURE DOCUMENTATION**
**Total Components**: 8 layers (user → monitoring)
**Ready for**: Diagram creation + visual export
