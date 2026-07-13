# 🔒 Security Policy

## Responsible Disclosure

If you discover a security vulnerability in AI Trust Check, please email **security@aitrust.check** instead of using the issue tracker.

Include:
- Description of the vulnerability
- Steps to reproduce
- Potential impact
- Your contact information

We will respond within 48 hours.

---

## Security Measures

### Frontend Security
- ✅ HTTPS only (enforced via Cloudflare)
- ✅ Content Security Policy (CSP)
- ✅ No external dependencies (reduced attack surface)
- ✅ Input validation on all forms
- ✅ XSS protection via templating

### Backend Security (when implemented)
- ✅ API rate limiting
- ✅ CORS headers
- ✅ Request authentication
- ✅ Encryption for sensitive data
- ✅ Regular security audits

### Data Security
- ✅ No user data stored on device (unless opted in)
- ✅ GDPR compliant
- ✅ CCPA compliant
- ✅ Privacy policy: /privacy.html
- ✅ Cookie policy: /cookies.html

### Infrastructure Security
- ✅ Cloudflare DDoS protection
- ✅ SSL/TLS encryption
- ✅ Automatic backups
- ✅ No known vulnerabilities in dependencies
- ✅ Regular security scans (TruffleHog, npm audit)

---

## Vulnerability Tracking

We follow the [CVSS v3.1](https://www.first.org/cvss/v3.1/) severity ratings:

| Severity | CVSS | Response Time |
|----------|------|---|
| Critical | 9.0-10.0 | 24 hours |
| High | 7.0-8.9 | 48 hours |
| Medium | 4.0-6.9 | 7 days |
| Low | 0.1-3.9 | 30 days |

---

## Security Update Schedule

- **Monthly**: Dependency updates
- **Quarterly**: Security audits
- **Annually**: Penetration testing

---

## Contact

- **Email**: security@aitrust.check
- **GPG Key**: Available upon request
- **Bug Bounty**: Not currently available
