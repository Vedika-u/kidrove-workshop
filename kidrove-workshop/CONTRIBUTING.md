# Contributing to Kidrove Workshop

Thank you for your interest in contributing to the Kidrove Workshop project!

## Getting Started

### 1. Fork & Clone
```bash
git clone https://github.com/YOUR_USERNAME/kidrove-workshop.git
cd kidrove-workshop
```

### 2. Setup Development Environment
```bash
npm run install-all
```

### 3. Create `.env` File
```bash
cp backend/.env.example backend/.env
# Edit backend/.env with your MongoDB Atlas credentials
```

### 4. Run Development Server
```bash
npm run dev
```

---

## Project Structure

```
kidrove-workshop/
├── frontend/              # React frontend
├── backend/               # Express backend
├── .github/               # GitHub workflows
├── docs/                  # Documentation
└── README.md              # Main documentation
```

---

## Development Workflow

### Creating a Feature Branch
```bash
git checkout -b feature/your-feature-name
```

### Making Changes

1. Make your changes
2. Test thoroughly
3. Commit with clear messages
4. Push to your fork
5. Create Pull Request

### Commit Message Format
```
feat: Add new feature
fix: Fix bug
docs: Update documentation
style: Code formatting
refactor: Refactor code
test: Add tests
```

---

## Code Style

### Frontend (React)
- Use functional components
- Use hooks for state management
- Clear component names (PascalCase)
- Props should be well-documented
- Use CSS variables from globals.css

### Backend (Express)
- Use async/await
- Proper error handling
- Consistent variable naming (camelCase)
- Add console logs for debugging
- Use middleware for validation

### General
- Keep functions small and focused
- Add comments for complex logic
- Use meaningful variable names
- Avoid hardcoding values

---

## Testing

### Manual Testing Checklist
- [ ] Form validates input correctly
- [ ] Form submits successfully
- [ ] Data appears in MongoDB
- [ ] Error messages display properly
- [ ] Loading spinner shows
- [ ] Success message displays
- [ ] Responsive on mobile
- [ ] No console errors

### Browser Testing
- [ ] Chrome/Edge
- [ ] Firefox
- [ ] Safari
- [ ] Mobile browser

---

## Pull Request Process

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```

3. **Make your changes**
4. **Test thoroughly**
5. **Commit your changes**
   ```bash
   git commit -m "feat: Add amazing feature"
   ```

6. **Push to your fork**
   ```bash
   git push origin feature/amazing-feature
   ```

7. **Create Pull Request** with:
   - Clear title
   - Description of changes
   - Screenshots (if UI changes)
   - Testing done
   - Issues fixed

---

## Issue Reporting

### Bug Reports
Include:
- Description of the bug
- Steps to reproduce
- Expected behavior
- Actual behavior
- Screenshots/videos
- System info (OS, browser, Node version)

### Feature Requests
Include:
- Clear description
- Use case/benefit
- Proposed implementation
- Any alternatives considered

---

## Documentation

### Updating Docs
- Keep documentation up-to-date
- Add comments to code
- Update README for major changes
- Add examples for new features

### Docs Files
- `README.md` - Main documentation
- `GETTING_STARTED.md` - Quick start
- `ARCHITECTURE.md` - System design
- `DEPLOYMENT.md` - Deployment guide

---

## Setup Issues?

### MongoDB Connection Error
1. Check MongoDB Atlas credentials
2. Verify connection string format
3. Check IP whitelist
4. See TROUBLESHOOTING in README

### Port Already in Use
1. Change PORT in .env
2. Or kill process: `lsof -ti:5000 | xargs kill -9`

### Dependencies Error
```bash
rm -rf node_modules package-lock.json
npm run install-all
```

---

## Useful Commands

```bash
# Development
npm run dev                 # Start everything
npm run dev:frontend       # Frontend only
npm run dev:backend        # Backend only

# Production
npm run build              # Build frontend
npm start                  # Start backend

# Cleaning
rm -rf node_modules
rm package-lock.json
npm install
```

---

## Questions?

- Check existing issues/discussions
- See documentation files
- Open a new GitHub issue
- Ask in discussions

---

## Code of Conduct

Be respectful, constructive, and inclusive. We welcome contributors of all backgrounds and experience levels.

---

Thank you for contributing! 🚀
