/**
 * AI TRUST CHECK - MAIN UTILITIES
 * Core helper functions for the platform
 */

// ============================================
// THEME MANAGEMENT
// ============================================

const ThemeManager = {
  STORAGE_KEY: 'ai-trust-theme',
  DARK: 'dark',
  LIGHT: 'light',

  init() {
    const saved = localStorage.getItem(this.STORAGE_KEY);
    const theme = saved || (window.matchMedia('(prefers-color-scheme: dark)').matches ? this.DARK : this.LIGHT);
    this.set(theme);
    
    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!localStorage.getItem(this.STORAGE_KEY)) {
        this.set(e.matches ? this.DARK : this.LIGHT);
      }
    });
  },

  set(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(this.STORAGE_KEY, theme);
  },

  toggle() {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === this.DARK ? this.LIGHT : this.DARK;
    this.set(next);
    return next;
  },

  get() {
    return document.documentElement.getAttribute('data-theme');
  }
};

// ============================================
// DOM UTILITIES
// ============================================

const DOM = {
  create(tag, className = '', innerHTML = '') {
    const el = document.createElement(tag);
    if (className) el.className = className;
    if (innerHTML) el.innerHTML = innerHTML;
    return el;
  },

  query(selector) {
    return document.querySelector(selector);
  },

  queryAll(selector) {
    return document.querySelectorAll(selector);
  },

  on(element, event, handler) {
    if (Array.isArray(element)) {
      element.forEach(el => el.addEventListener(event, handler));
    } else {
      element.addEventListener(event, handler);
    }
  },

  off(element, event, handler) {
    element.removeEventListener(event, handler);
  },

  addClass(element, className) {
    if (Array.isArray(element)) {
      element.forEach(el => el.classList.add(className));
    } else {
      element.classList.add(className);
    }
  },

  removeClass(element, className) {
    if (Array.isArray(element)) {
      element.forEach(el => el.classList.remove(className));
    } else {
      element.classList.remove(className);
    }
  },

  toggleClass(element, className) {
    element.classList.toggle(className);
  },

  hasClass(element, className) {
    return element.classList.contains(className);
  },

  empty(element) {
    element.innerHTML = '';
  },

  show(element) {
    element.style.display = '';
    element.classList.remove('hidden');
  },

  hide(element) {
    element.classList.add('hidden');
  },

  focus(element) {
    element.focus();
  }
};

// ============================================
// LOCAL STORAGE
// ============================================

const Storage = {
  set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (e) {
      console.error('Storage error:', e);
      return false;
    }
  },

  get(key, defaultValue = null) {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (e) {
      console.error('Storage error:', e);
      return defaultValue;
    }
  },

  remove(key) {
    localStorage.removeItem(key);
  },

  clear() {
    localStorage.clear();
  }
};

// ============================================
// NOTIFICATION/TOAST SYSTEM
// ============================================

const Toast = {
  container: null,

  init() {
    if (!this.container) {
      this.container = DOM.create('div', 'toast-container');
      this.container.style.cssText = `
        position: fixed;
        top: 2rem;
        right: 2rem;
        z-index: 1500;
        display: flex;
        flex-direction: column;
        gap: 1rem;
      `;
      document.body.appendChild(this.container);
    }
  },

  show(message, type = 'info', duration = 4000) {
    this.init();
    const toast = DOM.create('div', `toast toast-${type}`);
    toast.style.cssText = `
      padding: 1rem 1.5rem;
      border-radius: 0.5rem;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      animation: slideInRight 0.3s ease-out;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    `;
    
    const bgColor = {
      success: 'rgba(16, 185, 129, 0.9)',
      error: 'rgba(239, 68, 68, 0.9)',
      warning: 'rgba(245, 158, 11, 0.9)',
      info: 'rgba(59, 130, 246, 0.9)'
    }[type] || 'rgba(59, 130, 246, 0.9)';
    
    toast.style.backgroundColor = bgColor;
    toast.style.color = 'white';
    toast.innerHTML = message;
    
    this.container.appendChild(toast);
    
    if (duration > 0) {
      setTimeout(() => {
        toast.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => toast.remove(), 300);
      }, duration);
    }
    
    return toast;
  },

  success(message, duration) {
    return this.show(message, 'success', duration);
  },

  error(message, duration) {
    return this.show(message, 'error', duration);
  },

  warning(message, duration) {
    return this.show(message, 'warning', duration);
  },

  info(message, duration) {
    return this.show(message, 'info', duration);
  }
};

// ============================================
// API UTILITIES
// ============================================

const API = {
  async fetch(url, options = {}) {
    try {
      const response = await fetch(url, {
        headers: {
          'Content-Type': 'application/json',
          ...options.headers
        },
        ...options
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('API error:', error);
      throw error;
    }
  },

  async get(url, options = {}) {
    return this.fetch(url, { method: 'GET', ...options });
  },

  async post(url, data, options = {}) {
    return this.fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options
    });
  }
};

// ============================================
// VALIDATION UTILITIES
// ============================================

const Validation = {
  email(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  },

  url(url) {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  },

  domain(domain) {
    const re = /^([a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z]{2,}$/i;
    return re.test(domain);
  },

  notEmpty(value) {
    return value && value.trim().length > 0;
  },

  minLength(value, length) {
    return value && value.length >= length;
  },

  maxLength(value, length) {
    return value && value.length <= length;
  }
};

// ============================================
// TEXT UTILITIES
// ============================================

const Text = {
  truncate(text, length = 100) {
    if (!text || text.length <= length) return text;
    return text.substring(0, length) + '...';
  },

  capitalize(text) {
    if (!text) return '';
    return text.charAt(0).toUpperCase() + text.slice(1);
  },

  slug(text) {
    return text
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '');
  },

  formatNumber(num) {
    return new Intl.NumberFormat('en-US').format(num);
  },

  formatPercent(num, decimals = 0) {
    return (num * 100).toFixed(decimals) + '%';
  }
};

// ============================================
// DATE UTILITIES
// ============================================

const DateUtils = {
  format(date, format = 'YYYY-MM-DD') {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    const hours = String(d.getHours()).padStart(2, '0');
    const minutes = String(d.getMinutes()).padStart(2, '0');
    
    return format
      .replace('YYYY', year)
      .replace('MM', month)
      .replace('DD', day)
      .replace('HH', hours)
      .replace('mm', minutes);
  },

  timeAgo(date) {
    const seconds = Math.floor((new Date() - new Date(date)) / 1000);
    const intervals = {
      year: 31536000,
      month: 2592000,
      week: 604800,
      day: 86400,
      hour: 3600,
      minute: 60
    };
    
    for (const [name, secondsIn] of Object.entries(intervals)) {
      const interval = Math.floor(seconds / secondsIn);
      if (interval >= 1) {
        return interval === 1 ? `1 ${name} ago` : `${interval} ${name}s ago`;
      }
    }
    
    return 'just now';
  }
};

// ============================================
// ANALYTICS WRAPPER
// ============================================

const Analytics = {
  event(category, action, label = '', value = 0) {
    if (typeof gtag !== 'undefined') {
      gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value
      });
    }
  },

  pageView(path) {
    if (typeof gtag !== 'undefined') {
      gtag('config', 'GA_ID', {
        page_path: path
      });
    }
  }
};

// ============================================
// PERFORMANCE UTILITIES
// ============================================

const Performance = {
  debounce(func, delay) {
    let timeoutId;
    return function (...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func(...args), delay);
    };
  },

  throttle(func, limit) {
    let inThrottle;
    return function (...args) {
      if (!inThrottle) {
        func(...args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  },

  lazy(callback, options = {}) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          callback(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, options);
    
    return observer;
  }
};

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  ThemeManager.init();
});

// Add to window for global access
window.ThemeManager = ThemeManager;
window.DOM = DOM;
window.Storage = Storage;
window.Toast = Toast;
window.API = API;
window.Validation = Validation;
window.Text = Text;
window.DateUtils = DateUtils;
window.Analytics = Analytics;
window.Performance = Performance;
