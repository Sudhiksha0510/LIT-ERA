# Litera Club - Literary Magazine Platform

A modern literary magazine platform built with React, Node.js, and PostgreSQL, featuring submission management, admin dashboard, and file upload capabilities.

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- PostgreSQL (or SQLite for development)
- npm or yarn

### Installation

1. **Clone and Install Dependencies**
   ```bash
   cd litera-club
   npm install
   ```

2. **Database Setup**

   **Option A: PostgreSQL (Production)**
   ```bash
   # Install PostgreSQL
   # Windows: https://www.postgresql.org/download/windows/
   # Mac: brew install postgresql
   # Linux: sudo apt-get install postgresql
   
   # Create Database
   psql -U postgres -c "CREATE DATABASE litera_club;"
   
   # Configure Environment
   cp .env.example .env
   # Edit .env with your PostgreSQL credentials:
   DATABASE_URL=postgresql://postgres:YOUR_PASSWORD@localhost:5432/litera_club
   ```

   **Option B: SQLite (Development)**
   ```bash
   # Install SQLite driver
   npm install better-sqlite3 @types/better-sqlite3
   
   # Configure Environment
   cp .env.example .env
   # Edit .env with SQLite URL:
   DATABASE_URL=sqlite:./litera_club.db
   ```

3. **Database Migration**
   ```bash
   npm run db:push
   ```

4. **Start Development Server**
   ```bash
   npm run dev
   ```

5. **Access Application**
   - Frontend: http://localhost:3000 (or port shown in terminal)
   - API: http://localhost:5000

## 📁 Features

### Core Functionality
- **Literary Magazine**: Browse and read articles, poetry, and stories
- **Submission System**: Submit literary works with file attachments
- **Admin Dashboard**: Manage submissions, users, and content
- **File Management**: Upload, store, and download submitted files
- **User Authentication**: Secure login system with admin roles
- **Contact System**: Contact form with admin notifications

### Technical Stack
- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Backend**: Node.js, Express, TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **File Storage**: Local filesystem with Multer
- **Authentication**: Passport.js with sessions
- **Development**: Vite for frontend, tsx for backend

## 📋 Project Structure

```
litera-club/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── pages/        # Page components
│   │   ├── hooks/         # Custom hooks
│   │   └── lib/           # Utilities
├── server/                 # Node.js backend
│   ├── routes.ts            # API endpoints
│   ├── db.ts               # Database configuration
│   └── storage.ts           # Database operations
├── shared/                 # Shared types and schemas
│   └── schema.ts            # Database schema definitions
├── uploads/                # File upload directory
│   └── submissions/         # Submitted files
└── drizzle.config.ts        # Database configuration
```

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the project root:

```env
# Database Configuration
DATABASE_URL=postgresql://postgres:password@localhost:5432/litera_club
# OR for SQLite:
# DATABASE_URL=sqlite:./litera_club.db

# Session Secret (use strong random string in production)
SESSION_SECRET=your-secret-key-here-change-in-production

# Admin Code (for creating admin users)
ADMIN_CODE=admin123

# Node Environment
NODE_ENV=development
```

### Database Schema

#### Submissions Table
```sql
CREATE TABLE submissions (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  title TEXT NOT NULL,
  category TEXT NOT NULL,
  description TEXT NOT NULL,
  file_name TEXT,
  file_size INTEGER,
  original_file_name TEXT,
  file_path TEXT,
  status TEXT DEFAULT 'pending',
  submitted_at TIMESTAMP DEFAULT NOW()
);
```

## 📤 File Upload System

### Supported File Types
- PDF (.pdf)
- Microsoft Word (.doc, .docx)
- Plain Text (.txt)
- Maximum file size: 10MB

### File Storage
- Files are stored in `uploads/submissions/` directory
- Each file gets a unique name with timestamp
- Original filename is preserved for download

### Upload Process
1. User selects file in submission form
2. Frontend validates file type and size
3. File is uploaded via FormData to `/api/submissions`
4. Backend stores file metadata in database
5. Actual file is saved to filesystem
6. Admin can view and download files from dashboard

## 🔐 Security Features

### Authentication
- Password-based authentication with bcrypt
- Session management with secure cookies
- Admin role-based access control
- Protected API endpoints

### File Security
- File type validation (whitelist approach)
- File size limits (10MB max)
- Secure file storage outside web root
- Admin-only file access

## 🎯 Admin Dashboard Features

### Submissions Management
- View all submitted works with file information
- Download submitted files
- Filter by status (pending, approved, rejected)
- View submission details including file metadata

### User Management
- View registered users
- Manage user roles and permissions
- Monitor login activity

### Content Management
- Create and edit magazine content
- Manage thoughts and riddles
- Dynamic content updates

## 🚀 Development

### Available Scripts
```bash
npm run dev          # Start development server
npm run build         # Build for production
npm run start         # Start production server
npm run db:push       # Run database migrations
npm run check         # Type checking
```

### Development Workflow
1. Make changes to frontend or backend
2. Run `npm run db:push` if schema changes
3. Restart development server
4. Test changes in browser

## 📱 Frontend Routes

- `/` - Home page
- `/about` - About page
- `/magazine` - Literary magazine
- `/mun` - Model United Nations
- `/zones` - Club zones
- `/events` - Events page
- `/contact` - Contact form
- `/admin` - Admin dashboard (admin only)

## 🔌 API Endpoints

### Authentication
- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration
- `POST /api/auth/logout` - User logout

### Submissions
- `POST /api/submissions` - Submit new work with file
- `GET /api/submissions` - Get all submissions (admin only)
- `GET /api/submissions/:id/download` - Download submission file (admin only)

### Content
- `GET /api/content` - Get magazine content
- `POST /api/content` - Create/update content (admin only)

### Contact
- `POST /api/contact` - Submit contact form
- `GET /api/contacts` - Get contact messages (admin only)

## 🐛 Troubleshooting

### Common Issues

**Database Connection Failed**
```bash
# Check PostgreSQL is running
pg_isready

# Test connection
node test-db.js
```

**File Upload Not Working**
```bash
# Check uploads directory exists
ls -la uploads/submissions/

# Check file permissions
chmod 755 uploads/submissions/
```

**Server Won't Start**
```bash
# Check port availability
netstat -an | grep :5000

# Check logs
npm run dev 2>&1 | head -20
```

### Development Tips
- Use SQLite for easier local development
- Test file uploads with various file types
- Check browser console for debugging info
- Ensure all dependencies are installed

## 📄 License

MIT License - Feel free to use this project for personal or commercial purposes.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## � Support

For issues and questions:
- Check the troubleshooting section
- Review console logs for errors
- Verify database configuration
- Ensure all dependencies are installed

---

**Built with ❤️ for the literary community**

- **EASY_UPLOAD_GUIDE.md** - Simple guide for uploading puzzles (admin)
- **QUICK_PERFORMANCE_GUIDE.md** - Performance optimization setup
- **CONTRIBUTING.md** - Contribution guidelines

## 🚀 Features

### Public Features
- Browse literary content (thoughts, riddles, quotes, poems)
- View upcoming events and activities
- Explore literary zones (Reading, Writing, Poetry, Debate, Café)
- Submit magazine work
- Contact form
- Interactive games (Strands, Spelling Bee)
- MUN (Model United Nations) information

### User Features (Login Required)
- Register for events
- Join literary zones
- Register for MUN conferences
- Submit game scores
- Track personal registrations

### Admin Features
- Create and manage content
- Upload daily puzzles
- View all submissions and registrations
- Manage users
- View game scores and analytics

## 🛠️ Tech Stack

### Frontend
- React 18 with TypeScript
- Vite for build tooling
- TanStack Query for data fetching
- Wouter for routing
- Tailwind CSS for styling
- Framer Motion for animations
- Shadcn/ui components

### Backend
- Express.js
- PostgreSQL database
- Drizzle ORM
- Express Session for authentication
- Bcrypt for password hashing
- Zod for validation

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- PostgreSQL database
- npm or yarn

### Setup

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd Code-Refactor-Complete
```

2. **Install dependencies**
```bash
npm install
```

3. **Configure environment variables**
Create a `.env` file in the root directory:
```env
DATABASE_URL=postgresql://user:password@localhost:5432/litera_club
SESSION_SECRET=your-secret-key-here
ADMIN_CODE=your-admin-code-here
```

4. **Initialize database**
```bash
npm run db:push
```

5. **Start development server**
```bash
npm run dev
```

The application will be available at `http://localhost:5000`

## 📁 Project Structure

```
Code-Refactor-Complete/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── hooks/         # Custom React hooks
│   │   └── lib/           # Utilities and helpers
├── server/                # Backend Express application
│   ├── routes.ts          # API route definitions
│   ├── storage.ts         # Database operations
│   └── index.ts           # Server entry point
├── shared/                # Shared code between frontend/backend
│   ├── schema.ts          # Database schema and types
│   └── routes.ts          # API route definitions
└── package.json
```

## 🗄️ Database Schema

### Tables
- `users` - User accounts and authentication
- `content` - Literary content (thoughts, riddles, quotes, poems)
- `events` - Club events and activities
- `puzzles` - Daily strands and spelling bee puzzles
- `game_scores` - User game scores
- `contact_submissions` - Contact form submissions
- `submissions` - Magazine submissions
- `event_registrations` - Event registration tracking
- `zone_memberships` - Literary zone memberships
- `mun_registrations` - MUN conference registrations

## 🔐 Authentication

### User Registration
- First user automatically becomes admin
- Additional admins can be created using the admin code
- Passwords are hashed with bcrypt

### Session Management
- Session-based authentication
- Secure HTTP-only cookies
- Automatic session expiration

## 🎮 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user
- `GET /api/auth/me` - Get current user
- `GET /api/auth/users` - List all users (Admin)

### Content
- `GET /api/content` - List all content
- `POST /api/content` - Create content (Admin)
- `PUT /api/content/:id` - Update content (Admin)
- `DELETE /api/content/:id` - Delete content (Admin)

### Events
- `GET /api/events` - List all events
- `POST /api/events` - Create event (Admin)
- `POST /api/events/:id/register` - Register for event
- `GET /api/events/registrations` - User's registrations

### Zones
- `POST /api/zones/:id/join` - Join a zone
- `GET /api/zones/memberships` - User's memberships

### Magazine
- `POST /api/submissions` - Submit work
- `GET /api/submissions` - List submissions (Admin)

### MUN
- `POST /api/mun/register` - Register for MUN
- `GET /api/mun/registrations` - List registrations (Admin)

### Games
- `GET /api/puzzles` - List all puzzles
- `POST /api/puzzles` - Create puzzle (Admin)
- `GET /api/puzzles/daily/:type` - Get daily puzzle
- `POST /api/game-scores` - Submit score
- `GET /api/game-scores` - List all scores

### Contact
- `POST /api/contacts` - Submit contact form
- `GET /api/contacts` - List contacts (Admin)

## 🧪 Testing

### Quick Test Checklist

**Public Features (No Login)**
- [ ] Browse home page and content
- [ ] View events page
- [ ] View zones
- [ ] Submit magazine work
- [ ] Submit contact form
- [ ] Play games

**User Features (Login Required)**
- [ ] Register and login
- [ ] Register for an event
- [ ] Join a literary zone
- [ ] Register for MUN
- [ ] Submit game scores

**Admin Features (Admin Login)**
- [ ] Create content (thought, riddle, quote)
- [ ] Upload daily puzzle
- [ ] View submissions
- [ ] View registrations
- [ ] Manage users

## 🚀 Deployment

### Production Build
```bash
npm run build
```

### Environment Variables for Production
```env
DATABASE_URL=your-production-database-url
SESSION_SECRET=strong-random-secret
ADMIN_CODE=secure-admin-code
NODE_ENV=production
```

### Database Migration
```bash
npm run db:push
```

## 📝 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run db:push` - Push schema changes to database
- `npm run db:studio` - Open Drizzle Studio (database GUI)

### Code Style
- TypeScript for type safety
- ESLint for code quality
- Prettier for formatting (recommended)

## 🔒 Security Features

- Password hashing with bcrypt
- Session-based authentication
- CSRF protection
- Input validation with Zod
- SQL injection prevention (Drizzle ORM)
- XSS prevention (React escaping)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 👥 Authors

LIT'ERA Club Development Team

## 🙏 Acknowledgments

- Shadcn/ui for beautiful components
- Drizzle ORM for type-safe database operations
- TanStack Query for data management
- Framer Motion for animations

## 📞 Support

For issues or questions, please open an issue on GitHub or contact the development team.

---

**Version**: 1.0.0  
**Status**: Production Ready ✅  
**Last Updated**: February 27, 2026
"# LIT-ERA" 
#   L I T - E R A  
 