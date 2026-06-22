// shared.js — Level Access Baths
// Injects shared nav and footer into all inner pages

(function () {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  // ── NAV HTML ──
  const navHTML = `
  <nav id="shared-nav">
    <div class="nav-inner">
      <a href="/index.html" class="nav-logo" aria-label="Level Access Baths Home">
        <img src="/logo-monogram-navy.png" alt="LAB" width="78" height="30" style="display:block;flex-shrink:0">
        <div class="nav-logo-divider"></div>
        <div class="nav-logo-text">
          <span class="brand">LEVEL ACCESS BATHS</span>
          <span class="tag">LIVE WITHOUT LIMITS</span>
        </div>
      </a>
      <ul class="nav-links">
        <li>
          <a href="/services.html">Shower Solutions
            <svg class="nav-chev" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 4l4 4 4-4"/></svg>
          </a>
          <ul class="nav-drop">
            <li><a href="/zero-entry-showers">Zero-Entry Showers</a></li>
            <li><a href="/walk-in-showers">Walk-In Showers</a></li>
            <li><a href="/tub-to-shower-conversion">Tub-to-Shower Conversions</a></li>
            <li><a href="/ada-bathroom-remodeling">ADA Bathroom Remodeling</a></li>
            <li><a href="/aging-in-place-bathrooms">Aging-in-Place Bathrooms</a></li>
            <li><a href="/services.html#accessories">Safety Accessories</a></li>
          </ul>
        </li>
        <li><a href="/gallery.html">Gallery</a></li>
        <li>
          <a href="/learning.html">Learning Center
            <svg class="nav-chev" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 4l4 4 4-4"/></svg>
          </a>
          <ul class="nav-drop">
            <li><a href="/learning.html">Remodeling Guides</a></li>
            <li><a href="/learning.html">Accessible Shower Guide</a></li>
            <li><a href="/pricing.html">Cost Guide</a></li>
            <li><a href="/learning.html">For Healthcare Professionals</a></li>
          </ul>
        </li>
        <li>
          <a href="/pricing.html">Pricing
            <svg class="nav-chev" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 4l4 4 4-4"/></svg>
          </a>
          <ul class="nav-drop">
            <li><a href="/pricing.html">Cost Guide</a></li>
            <li><a href="/pricing.html#calculator">Instant Estimate</a></li>
            <li><a href="/contact.html">Get My Exact Quote</a></li>
          </ul>
        </li>
        <li>
          <a href="/about.html">About
            <svg class="nav-chev" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 4l4 4 4-4"/></svg>
          </a>
          <ul class="nav-drop">
            <li><a href="/about.html">Our Story</a></li>
            <li><a href="/about.html#service-area">Service Area</a></li>
            <li><a href="/contact.html">Contact</a></li>
          </ul>
        </li>
        <li><a href="/builds.html" style="color:var(--gold);font-weight:600">Builds <span style="font-size:9px;background:var(--gold);color:var(--navy);padding:2px 7px;border-radius:100px;font-weight:700;letter-spacing:.06em;vertical-align:middle;margin-left:2px">COMING SOON</span></a></li>
      <li><a href="/contact.html" class="nav-cta-btn">Free Consultation</a></li>
      <li><a href="/portal.html" style="display:inline-flex;align-items:center;gap:6px;background:rgba(197,165,90,.12);border:1px solid rgba(197,165,90,.3);color:var(--gold);padding:7px 14px;border-radius:100px;font-size:12.5px;font-weight:700">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>My Project</a></li>
      </ul>
      <button class="nav-hbg" id="navHbg" aria-label="Open menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </nav>
  <div class="mobile-nav-overlay" id="mobileNav">
    <div class="mobile-nav-header">
      <span style="font-family:'Cormorant Garamond',serif;font-size:20px;font-weight:700;color:var(--navy)">Level Access Baths</span>
      <button class="mobile-close" id="mobileClose">✕</button>
    </div>
    <ul class="mobile-links">
      <li><a href="/services.html">Shower Solutions</a></li>
      <li><a href="/gallery.html">Gallery</a></li>
      <li><a href="/learning.html">Learning Center</a></li>
      <li><a href="/pricing.html">Pricing</a></li>
      <li><a href="/about.html">About</a></li>
      <li><a href="/contact.html">Contact</a></li>
    </ul>
    <div class="mobile-cta-wrap">
      <a href="/contact.html">Request a Free Consultation</a>
    </div>
  </div>`;

  // ── FOOTER HTML ──
  const footerHTML = `
  <footer id="shared-footer">
    <div class="footer-grid">
      <div>
        <img src="/logo-full-reversed.png" alt="Level Access Baths" style="width:180px;height:auto;display:block;margin-bottom:4px">
        
        <p class="ft-brand-p">Omaha's accessible bathroom specialist. Zero-entry showers, tub-to-shower conversions, and aging-in-place design — owner-installed, backed by a lifetime warranty.</p>
        <div class="ft-contact">
          <a href="tel:+14020000000">📞 (402) 000-0000</a>
          <a href="mailto:hello@levelaccessbaths.com">✉ hello@levelaccessbaths.com</a>
          <a href="/about.html#service-area">📍 Omaha, NE &amp; Surrounding Areas</a>
        </div>
        <div class="ft-socials">
        </div>
      </div>
      <div class="ft-col">
        <h4>Solutions</h4>
        <ul>
          <li><a href="/zero-entry-showers">Zero-Entry Showers</a></li>
          <li><a href="/walk-in-showers">Walk-In Showers</a></li>
          <li><a href="/services.html">Tub-to-Shower</a></li>
          <li><a href="/services.html">ADA Remodeling</a></li>
          <li><a href="/services.html">Aging-in-Place</a></li>
          <li><a href="/services.html">Safety Accessories</a></li>
        </ul>
      </div>
      <div class="ft-col">
        <h4>Learn</h4>
        <ul>
          <li><a href="/learning.html">Remodeling Guides</a></li>
          <li><a href="/pricing.html">Cost Guide</a></li>
          <li><a href="/learning.html">For Healthcare Pros</a></li>
          <li><a href="/gallery.html">Project Gallery</a></li>
        </ul>
      </div>
      <div class="ft-col">
        <h4>Company</h4>
        <ul>
          <li><a href="/about.html">Our Story</a></li>
          <li><a href="/about.html#service-area">Service Area</a></li>
          <li><a href="/gallery.html">Gallery</a></li>
          <li><a href="/contact.html">Contact</a></li>
          <li><a href="/contact.html">Free Consultation</a></li>
          <li><a href="/portal.html" style="color:var(--gold-light)">My Project Portal</a></li>
          <li><a href="/builds.html" style="color:var(--gold-light)">Level Access Builds ↗</a></li>
        </ul>
      </div>
    </div>
    <div class="ft-bottom">
      <p>© 2026 Level Access Baths. All rights reserved. · <a href="/privacy.html" style="color:rgba(255,255,255,.3);transition:color .2s" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='rgba(255,255,255,.3)'">Privacy Policy</a></p>
      <div class="ft-badge">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
        Lifetime Leak-Free Warranty · Omaha, NE
      </div>
    </div>
  </footer>`;

  // Inject nav
  const navPlaceholder = document.getElementById('nav-placeholder');
  if (navPlaceholder) navPlaceholder.outerHTML = navHTML;

  // Inject footer
  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (footerPlaceholder) footerPlaceholder.outerHTML = footerHTML;

  // Sticky nav
  window.addEventListener('scroll', () => {
    const nav = document.getElementById('shared-nav');
    if (nav) nav.classList.toggle('scrolled', window.scrollY > 20);
  });

  // Mobile nav
  document.addEventListener('click', (e) => {
    const hbg = document.getElementById('navHbg');
    const close = document.getElementById('mobileClose');
    const mNav = document.getElementById('mobileNav');
    if (e.target === hbg || hbg?.contains(e.target)) mNav?.classList.add('open');
    if (e.target === close || close?.contains(e.target)) mNav?.classList.remove('open');
  });

  // Active nav link
  document.querySelectorAll('.nav-links a, .mobile-links a').forEach(a => {
    if (a.getAttribute('href') && (a.getAttribute('href').includes(currentPage) && currentPage !== 'index.html')) {
      a.classList.add('active');
    }
  });

  // ── DROPDOWN: JS-controlled so gap never closes it ──
  document.querySelectorAll('.nav-links > li').forEach(li => {
    const drop = li.querySelector('.nav-drop');
    if (!drop) return;
    let timer;
    const open = () => { clearTimeout(timer); drop.style.display = 'block'; };
    const close = () => { timer = setTimeout(() => { drop.style.display = ''; }, 100); };
    li.addEventListener('mouseenter', open);
    li.addEventListener('mouseleave', close);
    drop.addEventListener('mouseenter', open);
    drop.addEventListener('mouseleave', close);
  });

  // Smooth scroll anchors
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    });
  });

})();
