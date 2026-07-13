/**
 * AI TRUST CHECK - COMPONENT LIBRARY
 * Reusable UI components
 */

// ============================================
// HEADER COMPONENT
// ============================================

const HeaderComponent = {
  render() {
    return `
      <header>
        <div class="container">
          <div class="header-content">
            <div class="logo">
              <span>🔍</span>
              <span>AI Trust Check</span>
            </div>
            
            <nav>
              <a href="/" class="active">Home</a>
              <a href="/pages/tools/index.html">Tools</a>
              <a href="/pages/knowledge/index.html">Learn</a>
              <a href="/pages/blog/index.html">Blog</a>
              <a href="#about">About</a>
              <div class="nav-divider"></div>
              <a href="/pages/community/index.html">Community</a>
            </nav>
            
            <div class="flex gap-md" style="align-items: center;">
              <button class="theme-toggle" id="theme-toggle" title="Toggle theme" aria-label="Toggle dark/light mode">
                <span id="theme-icon">🌙</span>
              </button>
              <button class="mobile-menu" id="mobile-menu" aria-label="Toggle menu">
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </div>
      </header>
    `;
  },

  init() {
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
      themeToggle.addEventListener('click', () => {
        const newTheme = ThemeManager.toggle();
        this.updateThemeIcon(newTheme);
      });
      this.updateThemeIcon(ThemeManager.get());
    }

    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu) {
      mobileMenu.addEventListener('click', () => {
        const nav = DOM.query('nav');
        DOM.toggleClass(nav, 'mobile-active');
      });
    }
  },

  updateThemeIcon(theme) {
    const icon = document.getElementById('theme-icon');
    if (icon) {
      icon.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
  }
};

// ============================================
// FOOTER COMPONENT
// ============================================

const FooterComponent = {
  render() {
    return `
      <footer>
        <div class="container">
          <div class="footer-content">
            <div class="footer-section">
              <h4>Product</h4>
              <ul>
                <li><a href="/pages/tools/index.html">All Tools</a></li>
                <li><a href="#pricing">Pricing</a></li>
                <li><a href="/pages/blog/index.html">Blog</a></li>
                <li><a href="#changelog">Changelog</a></li>
              </ul>
            </div>
            
            <div class="footer-section">
              <h4>Learn</h4>
              <ul>
                <li><a href="/pages/knowledge/index.html">Knowledge Base</a></li>
                <li><a href="#faq">FAQ</a></li>
                <li><a href="#glossary">Glossary</a></li>
                <li><a href="#research">Research</a></li>
              </ul>
            </div>
            
            <div class="footer-section">
              <h4>Community</h4>
              <ul>
                <li><a href="/pages/community/index.html">Database</a></li>
                <li><a href="#discussions">Discussions</a></li>
                <li><a href="#contribute">Contribute</a></li>
                <li><a href="#guidelines">Guidelines</a></li>
              </ul>
            </div>
            
            <div class="footer-section">
              <h4>Company</h4>
              <ul>
                <li><a href="#about">About Us</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#careers">Careers</a></li>
                <li><a href="#press">Press Kit</a></li>
              </ul>
            </div>

            <div class="footer-section">
              <h4>Legal</h4>
              <ul>
                <li><a href="#privacy">Privacy Policy</a></li>
                <li><a href="#terms">Terms of Service</a></li>
                <li><a href="#cookies">Cookie Policy</a></li>
                <li><a href="#disclosure">Disclosure</a></li>
              </ul>
            </div>

            <div class="footer-section">
              <h4>Developer</h4>
              <ul>
                <li><a href="#api">API Documentation</a></li>
                <li><a href="#extensions">Browser Extensions</a></li>
                <li><a href="#github">GitHub</a></li>
                <li><a href="#status">Status Page</a></li>
              </ul>
            </div>
          </div>
          
          <div class="footer-bottom">
            <div>© 2024 AI Trust Check. All rights reserved.</div>
            <div style="display: flex; gap: 2rem;">
              <a href="#twitter" title="Twitter">𝕏</a>
              <a href="#linkedin" title="LinkedIn">in</a>
              <a href="#github" title="GitHub">⚙️</a>
              <a href="#newsletter" title="Newsletter">✉️</a>
            </div>
          </div>
        </div>
      </footer>
    `;
  }
};

// ============================================
// FEATURE CARD COMPONENT
// ============================================

const FeatureCard = {
  render(icon, title, description, link = null) {
    const content = `
      <div class="feature-icon">${icon}</div>
      <h3>${title}</h3>
      <p>${description}</p>
    `;
    
    if (link) {
      return `<a href="${link}" class="card feature-card">${content}</a>`;
    }
    return `<div class="card feature-card">${content}</div>`;
  }
};

// ============================================
// TRUST SCORE DISPLAY COMPONENT
// ============================================

const TrustScoreComponent = {
  render(score, maxScore = 100) {
    const percent = (score / maxScore) * 100;
    let level = 'Low';
    let color = '#ef4444';
    
    if (percent >= 75) {
      level = 'High';
      color = '#10b981';
    } else if (percent >= 50) {
      level = 'Medium';
      color = '#f59e0b';
    }
    
    return `
      <div class="trust-score-container" style="text-align: center;">
        <div style="
          width: 120px;
          height: 120px;
          margin: 0 auto 1rem;
          border-radius: 50%;
          background: conic-gradient(
            ${color} 0deg ${percent * 3.6}deg,
            rgba(100, 100, 100, 0.1) ${percent * 3.6}deg 360deg
          );
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--text-primary);
        ">
          ${Math.round(score)}
        </div>
        <div style="font-size: 1.125rem; font-weight: 600; margin-bottom: 0.5rem;">
          ${level} Trust
        </div>
        <div style="color: var(--text-secondary); font-size: 0.95rem;">
          Based on ${maxScore} point scale
        </div>
      </div>
    `;
  }
};

// ============================================
// REPORT CARD COMPONENT
// ============================================

const ReportCard = {
  render(data) {
    const { id, title, type, score, status, timestamp, summary } = data;
    
    return `
      <a href="/pages/reports/${id}.html" class="card" style="display: block; text-decoration: none;">
        <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 1rem;">
          <div>
            <div class="badge badge-primary">${type}</div>
            <h3 style="margin: 0.5rem 0 0;">${Text.truncate(title, 50)}</h3>
          </div>
          <div class="badge" style="background-color: ${score >= 70 ? '#10b981' : score >= 40 ? '#f59e0b' : '#ef4444'}; color: white;">
            ${score}
          </div>
        </div>
        <p style="margin: 0 0 1rem; color: var(--text-secondary); font-size: 0.95rem;">
          ${Text.truncate(summary, 100)}
        </p>
        <div style="display: flex; justify-content: space-between; align-items: center; color: var(--text-tertiary); font-size: 0.875rem;">
          <span>${DateUtils.timeAgo(timestamp)}</span>
          <span>→</span>
        </div>
      </a>
    `;
  }
};

// ============================================
// ANALYSIS RESULT COMPONENT
// ============================================

const AnalysisResult = {
  render(result) {
    const { title, findings, recommendation, confidence } = result;
    
    return `
      <div class="card" style="margin-bottom: 1.5rem;">
        <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 1rem;">
          <h3 style="margin: 0;">${title}</h3>
          <span class="badge" style="background-color: ${confidence >= 80 ? '#10b981' : confidence >= 50 ? '#f59e0b' : '#3b82f6'}; color: white;">
            ${confidence}% confident
          </span>
        </div>
        
        <div style="margin-bottom: 1.5rem;">
          <h4 style="margin-bottom: 0.75rem;">Key Findings</h4>
          <ul style="list-style: none; padding: 0;">
            ${findings.map(f => `
              <li style="padding: 0.5rem 0; padding-left: 1.5rem; position: relative;">
                <span style="position: absolute; left: 0;">${f.type === 'positive' ? '✓' : '⚠️'}</span>
                ${f.text}
              </li>
            `).join('')}
          </ul>
        </div>
        
        <div class="alert alert-info">
          <span class="alert-icon">💡</span>
          <div class="alert-content">
            <strong>Recommendation:</strong> ${recommendation}
          </div>
        </div>
      </div>
    `;
  }
};

// ============================================
// TOOL CARD COMPONENT
// ============================================

const ToolCard = {
  render(tool) {
    const { id, name, icon, description, link } = tool;
    
    return `
      <a href="${link || `/pages/tools/${id}.html`}" class="card" style="display: flex; flex-direction: column; gap: 1rem; text-decoration: none;">
        <div style="font-size: 2.5rem;">${icon}</div>
        <div>
          <h3 style="margin: 0 0 0.5rem;">${name}</h3>
          <p style="margin: 0; color: var(--text-secondary); font-size: 0.95rem;">
            ${description}
          </p>
        </div>
        <div style="margin-top: auto; color: var(--primary-blue); font-weight: 600; font-size: 0.95rem;">
          Try Now →
        </div>
      </a>
    `;
  }
};

// ============================================
// INPUT GROUP COMPONENT
// ============================================

const InputGroup = {
  render(id, label, placeholder, type = 'text', required = false) {
    return `
      <div class="form-group">
        <label for="${id}">
          ${label}
          ${required ? '<span style="color: #ef4444;">*</span>' : ''}
        </label>
        <input 
          type="${type}" 
          id="${id}" 
          name="${id}"
          placeholder="${placeholder}"
          ${required ? 'required' : ''}
          style="width: 100%;"
        />
      </div>
    `;
  }
};

// ============================================
// FILE UPLOAD COMPONENT
// ============================================

const FileUpload = {
  render(id, label, accept = '*/*', required = false) {
    return `
      <div class="form-group">
        <label for="${id}">
          ${label}
          ${required ? '<span style="color: #ef4444;">*</span>' : ''}
        </label>
        <div style="
          border: 2px dashed var(--border-color);
          border-radius: 1rem;
          padding: 2rem;
          text-align: center;
          cursor: pointer;
          transition: all 0.3s ease;
        " id="${id}-dropzone" class="file-dropzone">
          <input 
            type="file" 
            id="${id}" 
            name="${id}"
            accept="${accept}"
            ${required ? 'required' : ''}
            style="display: none;"
          />
          <div style="font-size: 2rem; margin-bottom: 0.5rem;">📁</div>
          <p style="margin: 0; font-weight: 500;">Drag and drop your file here</p>
          <p style="margin: 0.5rem 0 0; color: var(--text-tertiary); font-size: 0.875rem;">or click to browse</p>
        </div>
        <div id="${id}-preview" style="margin-top: 1rem;"></div>
      </div>
    `;
  },

  init(id) {
    const input = document.getElementById(id);
    const dropzone = document.getElementById(`${id}-dropzone`);
    const preview = document.getElementById(`${id}-preview`);

    if (!input || !dropzone) return;

    // Click to upload
    dropzone.addEventListener('click', () => input.click());

    // Drag and drop
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(event => {
      dropzone.addEventListener(event, (e) => {
        e.preventDefault();
        e.stopPropagation();
      });
    });

    dropzone.addEventListener('dragenter', () => DOM.addClass(dropzone, 'drag-active'));
    dropzone.addEventListener('dragleave', () => DOM.removeClass(dropzone, 'drag-active'));
    dropzone.addEventListener('drop', (e) => {
      DOM.removeClass(dropzone, 'drag-active');
      const files = e.dataTransfer.files;
      if (files.length > 0) {
        input.files = files;
        this.showPreview(input, preview);
      }
    });

    input.addEventListener('change', () => {
      this.showPreview(input, preview);
    });
  },

  showPreview(input, preview) {
    if (input.files.length === 0) return;
    
    const file = input.files[0];
    DOM.empty(preview);
    
    const item = DOM.create('div', 'flex flex-between', `
      <div>
        <strong>${file.name}</strong>
        <div style="color: var(--text-tertiary); font-size: 0.875rem;">
          ${(file.size / 1024).toFixed(2)} KB
        </div>
      </div>
      <span style="color: #10b981;">✓</span>
    `);
    
    preview.appendChild(item);
  }
};

// ============================================
// PAGINATION COMPONENT
// ============================================

const Pagination = {
  render(currentPage, totalPages, onPageChange) {
    let html = '<div class="flex flex-center gap-md" style="margin: 2rem 0;">';
    
    if (currentPage > 1) {
      html += `<button class="btn btn-outline btn-sm" onclick="${onPageChange}(${currentPage - 1})">← Previous</button>`;
    }
    
    for (let i = Math.max(1, currentPage - 2); i <= Math.min(totalPages, currentPage + 2); i++) {
      if (i === currentPage) {
        html += `<button class="btn btn-primary btn-sm" style="pointer-events: none;">${i}</button>`;
      } else {
        html += `<button class="btn btn-outline btn-sm" onclick="${onPageChange}(${i})">${i}</button>`;
      }
    }
    
    if (currentPage < totalPages) {
      html += `<button class="btn btn-outline btn-sm" onclick="${onPageChange}(${currentPage + 1})">Next →</button>`;
    }
    
    html += '</div>';
    return html;
  }
};

// ============================================
// SKELETON LOADER COMPONENT
// ============================================

const SkeletonLoader = {
  renderCard() {
    return `
      <div class="card" style="animation: shimmer 2s infinite;">
        <div style="height: 1.5rem; background: var(--bg-tertiary); border-radius: 0.5rem; margin-bottom: 1rem;"></div>
        <div style="height: 1rem; background: var(--bg-tertiary); border-radius: 0.5rem; margin-bottom: 0.5rem;"></div>
        <div style="height: 1rem; background: var(--bg-tertiary); border-radius: 0.5rem; width: 80%;"></div>
      </div>
    `;
  },

  renderTable(rows = 5, cols = 3) {
    let html = '<table style="width: 100%;">';
    for (let i = 0; i < rows; i++) {
      html += '<tr>';
      for (let j = 0; j < cols; j++) {
        html += `<td style="padding: 1rem; border-bottom: 1px solid var(--border-color);">
          <div style="height: 1rem; background: var(--bg-tertiary); border-radius: 0.5rem; animation: shimmer 2s infinite;"></div>
        </td>`;
      }
      html += '</tr>';
    }
    html += '</table>';
    return html;
  }
};

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  // Initialize file uploads
  document.querySelectorAll('[class*="file-dropzone"]').forEach(el => {
    const id = el.id.replace('-dropzone', '');
    FileUpload.init(id);
  });
});

// Export components
window.HeaderComponent = HeaderComponent;
window.FooterComponent = FooterComponent;
window.FeatureCard = FeatureCard;
window.TrustScoreComponent = TrustScoreComponent;
window.ReportCard = ReportCard;
window.AnalysisResult = AnalysisResult;
window.ToolCard = ToolCard;
window.InputGroup = InputGroup;
window.FileUpload = FileUpload;
window.Pagination = Pagination;
window.SkeletonLoader = SkeletonLoader;
