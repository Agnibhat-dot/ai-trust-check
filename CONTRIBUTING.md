# Contributing to AI Trust Check

We welcome contributions! This document outlines how to get started.

## Code of Conduct

- Be respectful and inclusive
- No harassment or discrimination
- Focus on the code, not the person
- Help newcomers feel welcome

## Getting Started

### 1. Fork & Clone
```bash
git clone https://github.com/YOUR_USERNAME/ai-trust-check.git
cd ai-trust-check
```

### 2. Create a Branch
```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/your-bug-fix
```

### 3. Make Changes
- Keep commits focused and small
- Write clear commit messages
- Test your changes locally

### 4. Run Tests & Checks
```bash
npm run build        # Build
npm run dev         # Dev server
npm run lint        # Linting (when available)
```

### 5. Submit a Pull Request
- Reference the issue number: "Fixes #123"
- Describe what you changed and why
- Include screenshots for UI changes
- Request review from maintainers

## Contribution Types

### 🐛 Bug Fixes
- Create an issue first
- Link to the issue in PR
- Include before/after screenshots

### ✨ Features
- Discuss in an issue before starting
- Keep scope focused
- Add tests if applicable

### 📝 Documentation
- Update README if relevant
- Add comments to complex code
- Keep guides up-to-date

### 🎨 Design & UX
- Maintain visual consistency
- Test on mobile & desktop
- Ensure accessibility (WCAG AA)

### 🚀 Performance
- Include Lighthouse before/after
- Profile your changes
- Benchmark improvements

## Code Standards

### HTML
- Semantic HTML5
- Proper heading hierarchy (h1 → h4)
- Accessibility attributes (aria-*, role, etc.)

### CSS
- Use CSS variables
- Mobile-first responsive design
- Dark mode support
- BEM naming convention

### JavaScript
- ES6+ syntax
- Clear variable names
- Comments for complex logic
- Error handling with try/catch

## Testing

Before submitting:
- ✅ Test on Chrome, Firefox, Safari
- ✅ Test on mobile (iOS & Android)
- ✅ Test dark mode
- ✅ Verify Lighthouse 90+
- ✅ Check accessibility (WCAG AA)

## Commit Message Format

```
[TYPE] Brief description (50 chars max)

Detailed explanation if needed.
Multiple paragraphs okay.

Fixes #123
Relates to #456
```

Types: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `chore`

Example:
```
feat: Add PDF report download functionality

Users can now download verification reports as PDFs.
Implemented using jsPDF library with custom styling.

Fixes #42
```

## Review Process

1. **Automated Checks** (GitHub Actions)
   - Lighthouse audit
   - Security scan
   - SEO validation

2. **Maintainer Review**
   - Code quality
   - Performance impact
   - Accessibility compliance

3. **Approval & Merge**
   - 2 approvals required
   - All checks passing
   - Squash and merge

## Roadmap

See [GitHub Projects](https://github.com/ai-trust-check/projects) for priorities.

Current focus:
1. Real API integration
2. User authentication
3. PDF reports
4. Mobile app
5. Browser extension

## Questions?

- 💬 Discussions: GitHub Discussions tab
- 📧 Email: hello@aitrust.check
- 📚 Docs: Check README and guides

## License

By contributing, you agree your work is licensed under the project's license.

**Thank you for making AI Trust Check better!** 🚀
