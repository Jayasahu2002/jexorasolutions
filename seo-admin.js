(function () {
  const OVERRIDES_KEY = 'jexora_seo_overrides_v1';
  const PASSCODE_KEY = 'jexora_seo_admin_passcode_v1';
  const AUTH_KEY = 'jexora_seo_admin_auth_v1';
  const SESSION_PASS_KEY = 'jexora_seo_session_pass_v1';
  const DEFAULT_PASSCODE = 'jexora2026';

  let blogPostsRef = [];
  let baseConfig = null;
  let cloudAvailable = false;
  let activeTab = 'meta';
  let selectedRoute = '/';
  let serpMode = 'desktop';
  let toastNotice = '';
  let toastIsError = false;

  function getSessionPasscode() {
    try {
      return sessionStorage.getItem(SESSION_PASS_KEY) || '';
    } catch (_) {
      return '';
    }
  }

  async function publishConfigToCloud(cfg) {
    try {
      const res = await fetch('/api/seo-config', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-SEO-Passcode': getSessionPasscode(),
        },
        body: JSON.stringify({ config: cfg }),
      });
      const ct = res.headers.get('content-type') || '';
      if (!ct.includes('application/json')) return { mode: 'offline' };
      const data = await res.json();
      if (res.ok && data && data.ok) {
        cloudAvailable = true;
        baseConfig = cfg;
        try {
          localStorage.removeItem(OVERRIDES_KEY);
        } catch (_) {}
        return { mode: 'cloud', ok: true, message: data.message };
      }
      return { mode: 'cloud', ok: false, error: (data && data.error) || 'Cloud save failed' };
    } catch (_) {
      return { mode: 'offline' };
    }
  }

  function esc(str) {
    return String(str == null ? '' : str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function buildDefaultConfig() {
    const pages = {
      '/': {
        label: 'Home Page',
        title: 'Digital Marketing Agency Worldwide | JEXORA SOLUTIONS',
        description:
          'JEXORA SOLUTIONS is an international digital marketing agency offering complete digital marketing services: SEO, paid ads, social media, web design & leads.',
        keywords:
          'Digital Marketing Agency, Digital Marketing Services, International Digital Marketing Agency, JEXORA SOLUTIONS, SEO, Paid Advertising, Social Media Marketing, Website Design, Lead Generation',
        robots: 'index, follow',
        ogTitle: 'Digital Marketing Agency Helping Businesses Grow Worldwide | JEXORA SOLUTIONS',
        ogDescription:
          'Complete digital marketing services for businesses ready to grow — SEO, AEO & GEO AI search, Google & Meta Ads, social media, custom web design & lead generation.',
        ogImage: 'https://jexorasolutions.com/og-cover.jpg',
        priority: '1.0',
        changefreq: 'weekly',
      },
      '/services': {
        label: 'Services (8 Specialist Capabilities)',
        title: 'Digital Marketing Services | JEXORA SOLUTIONS',
        description:
          'Explore professional digital marketing services including SEO, AEO, GEO, social media marketing, Google Ads, Meta Ads, web design, video editing and graphic design.',
        keywords:
          'Digital Marketing Services, Online Marketing Services, Professional Digital Marketing Services, Full-Service Digital Marketing, International Digital Marketing Services, Digital Marketing Solutions, SEO Services, AEO Services, GEO Services, Social Media Marketing Services, Google Ads Management Services, Meta Ads Management Services, WhatsApp Marketing Services, Website Design Services, Landing Page Design Services, Video Editing Services, Reels Editing Services, Graphic Design Services',
        robots: 'index, follow',
        ogTitle: 'Digital Marketing Services | JEXORA SOLUTIONS',
        ogDescription:
          'Explore professional digital marketing services including SEO, AEO, GEO, social media marketing, Google Ads, Meta Ads, web design, video editing and graphic design.',
        ogImage: 'https://jexorasolutions.com/og-cover.jpg',
        priority: '0.9',
        changefreq: 'monthly',
      },
      '/industries': {
        label: 'Industries We Serve',
        title: 'Industries We Serve | JEXORA SOLUTIONS Agency',
        description:
          'Tailored marketing playbooks for Astrology, Restaurants, Hotels, Travel, Real Estate, Salons, Yoga & Wellness, and Fashion brands worldwide.',
        keywords:
          'Hospitality Digital Marketing, Restaurant Local SEO, Hotel Direct Booking Ads, Real Estate Lead Generation, Astrology Marketing, Salon Marketing, Fashion D2C Ads',
        robots: 'index, follow',
        ogTitle: 'Industries We Serve | JEXORA SOLUTIONS',
        ogDescription:
          'Tailored channels, creative direction and lead funnels built around how customers choose businesses in your sector.',
        ogImage: 'https://jexorasolutions.com/og-cover.jpg',
        priority: '0.8',
        changefreq: 'monthly',
      },
      '/blog': {
        label: 'Blog & Insights Index',
        title: 'Digital Growth Blog & Playbooks | JEXORA SOLUTIONS',
        description:
          'Actionable guides from JEXORA SOLUTIONS on SEO, AEO & GEO AI search, Google & Meta Ads, Click-to-WhatsApp funnels, high-converting web UX, and reels.',
        keywords:
          'Digital Marketing Blog, SEO Guide, AEO GEO Guide, Google Ads Tips, WhatsApp Marketing Funnel, Landing Page CRO, Instagram Reels Strategy',
        robots: 'index, follow',
        ogTitle: 'Digital Growth Insights & Playbooks | JEXORA SOLUTIONS Blog',
        ogDescription:
          'Actionable guides on SEO, AI search visibility, paid acquisition, conversion web design and reels.',
        ogImage: 'https://jexorasolutions.com/og-cover.jpg',
        priority: '0.85',
        changefreq: 'weekly',
      },
      '/faq': {
        label: 'Frequently Asked Questions',
        title: 'Frequently Asked Questions | JEXORA SOLUTIONS Agency',
        description:
          'Clear answers about JEXORA SOLUTIONS digital marketing services, worldwide delivery, AEO & GEO AI search, timelines, pricing transparency, and consultations.',
        keywords:
          'JEXORA SOLUTIONS FAQ, Digital Marketing Questions, SEO Timeline, Google Ads ROI, AEO GEO Explained, Worldwide Marketing Agency',
        robots: 'index, follow',
        ogTitle: 'Frequently Asked Questions | JEXORA SOLUTIONS',
        ogDescription:
          'Everything founders and marketing teams ask about our 8 specialist digital marketing services and worldwide execution.',
        ogImage: 'https://jexorasolutions.com/og-cover.jpg',
        priority: '0.8',
        changefreq: 'monthly',
      },
      '/about': {
        label: 'About Us & Founder',
        title: 'About JEXORA SOLUTIONS | Meet Founder Jigyasa Sahu',
        description:
          'Meet JEXORA SOLUTIONS and founder Jigyasa Sahu. A worldwide strategic partner helping ambitious businesses strengthen their online presence and scale globally.',
        keywords:
          'About JEXORA SOLUTIONS, Jigyasa Sahu, Digital Marketing Agency Founder, Worldwide Marketing Partner',
        robots: 'index, follow',
        ogTitle: 'About JEXORA SOLUTIONS — A Strategic Partner for Digital Growth',
        ogDescription:
          'Creative minds, strategic thinking — meet Jigyasa Sahu and the worldwide JEXORA SOLUTIONS team.',
        ogImage: 'https://jexorasolutions.com/assets/founder-jigyasa-sahu.jpg',
        priority: '0.8',
        changefreq: 'monthly',
      },
      '/contact': {
        label: 'Contact & Free Consultation',
        title: 'Contact JEXORA SOLUTIONS | Free Growth Proposal',
        description:
          'Book a free strategy consultation with JEXORA SOLUTIONS. Share your project goals for a transparent custom proposal covering SEO, AEO/GEO, Ads, Web, or Reels.',
        keywords:
          'Contact JEXORA SOLUTIONS, Free Digital Marketing Consultation, Request SEO Proposal, Hire Digital Marketing Agency',
        robots: 'index, follow',
        ogTitle: 'Request Your Free Growth Proposal | JEXORA SOLUTIONS',
        ogDescription:
          'Share your goals and receive a tailored digital growth roadmap from our strategy team.',
        ogImage: 'https://jexorasolutions.com/og-cover.jpg',
        priority: '0.9',
        changefreq: 'monthly',
      },
    };

    (blogPostsRef || []).forEach((post) => {
      const route = `/blog/${post.slug}`;
      const shortTitle =
        post.title.length > 56 ? `${post.title.slice(0, 55).trim()}…` : post.title;
      const shortDesc =
        post.excerpt.length > 158
          ? `${post.excerpt.slice(0, 155).trim()}…`
          : post.excerpt;
      pages[route] = {
        label: `Blog: ${post.category}`,
        title: `${shortTitle} | JEXORA`,
        description: shortDesc,
        keywords: `${post.category}, ${post.serviceLink}, JEXORA SOLUTIONS, Digital Marketing`,
        robots: 'index, follow',
        ogTitle: post.title,
        ogDescription: shortDesc,
        ogImage: `https://jexorasolutions.com${post.image}`,
        priority: '0.75',
        changefreq: 'monthly',
      };
    });

    return {
      siteUrl: 'https://jexorasolutions.com',
      siteName: 'JEXORA SOLUTIONS',
      defaultOgImage: 'https://jexorasolutions.com/og-cover.jpg',
      tracking: {
        googleSiteVerification: '',
        ga4MeasurementId: '',
        gtmContainerId: '',
        metaPixelId: '',
      },
      robotsRules:
        'User-agent: *\nAllow: /\nDisallow: /seo-admin\n\nSitemap: https://jexorasolutions.com/sitemap.xml',
      pages,
    };
  }

  function deepMergeConfig(def, remote, local) {
    const merged = JSON.parse(JSON.stringify(def));
    [remote, local].forEach((src) => {
      if (!src || typeof src !== 'object') return;
      if (src.siteUrl) merged.siteUrl = src.siteUrl;
      if (src.siteName) merged.siteName = src.siteName;
      if (src.defaultOgImage) merged.defaultOgImage = src.defaultOgImage;
      if (typeof src.robotsRules === 'string') merged.robotsRules = src.robotsRules;
      if (src.tracking && typeof src.tracking === 'object') {
        merged.tracking = Object.assign({}, merged.tracking, src.tracking);
      }
      if (src.pages && typeof src.pages === 'object') {
        Object.keys(src.pages).forEach((k) => {
          merged.pages[k] = Object.assign({}, merged.pages[k] || {}, src.pages[k]);
        });
      }
    });
    return merged;
  }

  function loadLocalOverrides() {
    try {
      const raw = localStorage.getItem(OVERRIDES_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch (_) {
      return null;
    }
  }

  function saveLocalOverrides(cfg) {
    try {
      localStorage.setItem(OVERRIDES_KEY, JSON.stringify(cfg));
    } catch (_) {}
  }

  function getConfig() {
    const def = buildDefaultConfig();
    return deepMergeConfig(def, baseConfig, loadLocalOverrides());
  }

  function getPasscode() {
    try {
      return localStorage.getItem(PASSCODE_KEY) || DEFAULT_PASSCODE;
    } catch (_) {
      return DEFAULT_PASSCODE;
    }
  }

  function isAuthenticated() {
    try {
      return sessionStorage.getItem(AUTH_KEY) === '1';
    } catch (_) {
      return false;
    }
  }

  function setMetaTag(selector, attrName, attrVal, content) {
    let el = document.querySelector(selector);
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute(attrName, attrVal);
      document.head.appendChild(el);
    }
    el.setAttribute('content', content || '');
  }

  function injectTracking(cfg) {
    const tr = (cfg && cfg.tracking) || {};
    if (tr.googleSiteVerification && tr.googleSiteVerification.trim()) {
      setMetaTag(
        'meta[name="google-site-verification"]',
        'name',
        'google-site-verification',
        tr.googleSiteVerification.trim()
      );
    }
    if (
      tr.ga4MeasurementId &&
      /^G-[A-Z0-9]+$/i.test(tr.ga4MeasurementId.trim()) &&
      !document.getElementById('jexora-ga4-script')
    ) {
      const gaId = tr.ga4MeasurementId.trim();
      const s = document.createElement('script');
      s.id = 'jexora-ga4-script';
      s.async = true;
      s.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(gaId)}`;
      document.head.appendChild(s);
      window.dataLayer = window.dataLayer || [];
      window.gtag = function () {
        window.dataLayer.push(arguments);
      };
      window.gtag('js', new Date());
      window.gtag('config', gaId);
    }
  }

  function updateArticleSchema(pathname, cfg) {
    const existing = document.getElementById('jexora-article-schema');
    if (existing) existing.remove();
    if (!pathname.startsWith('/blog/')) return;
    const slug = pathname.replace('/blog/', '');
    const post = (blogPostsRef || []).find((p) => p.slug === slug);
    if (!post) return;
    const baseUrl = (cfg.siteUrl || 'https://jexorasolutions.com').replace(/\/+$/, '');
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.excerpt,
      image: `${baseUrl}${post.image}`,
      author: {
        '@type': post.author === 'Jigyasa Sahu' ? 'Person' : 'Organization',
        name: post.author,
      },
      publisher: {
        '@type': 'Organization',
        name: cfg.siteName || 'JEXORA SOLUTIONS',
        logo: {
          '@type': 'ImageObject',
          url: `${baseUrl}/assets/jexora-logo.png`,
        },
      },
      mainEntityOfPage: `${baseUrl}${pathname}`,
    };
    const script = document.createElement('script');
    script.id = 'jexora-article-schema';
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
  }

  function updateServicesSchema(pathname, cfg) {
    const existing = document.getElementById('jexora-services-schema');
    if (existing) existing.remove();
    if (pathname !== '/services') return;
    if (document.getElementById('jexora-static-services-schema')) return;
    const baseUrl = (cfg.siteUrl || 'https://jexorasolutions.com').replace(/\/+$/, '');
    const schema = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${baseUrl}/` },
            { '@type': 'ListItem', position: 2, name: 'Digital Marketing Services', item: `${baseUrl}/services` },
          ],
        },
        {
          '@type': 'Service',
          '@id': `${baseUrl}/services#digital-marketing-services`,
          name: 'Digital Marketing Services',
          serviceType: 'Digital Marketing Services',
          url: `${baseUrl}/services`,
          description:
            'Explore professional digital marketing services including SEO, AEO, GEO, social media marketing, Google Ads, Meta Ads, web design, video editing and graphic design.',
          areaServed: 'Worldwide',
          provider: {
            '@type': 'ProfessionalService',
            '@id': `${baseUrl}/#organization`,
            name: cfg.siteName || 'JEXORA SOLUTIONS',
            url: `${baseUrl}/`,
            email: 'solutionsjexora@gmail.com',
            telephone: '+91-74278-37194',
          },
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'JEXORA SOLUTIONS — 8 Specialist Digital Marketing Services',
            itemListElement: [
              { '@type': 'Offer', position: 1, itemOffered: { '@type': 'Service', name: 'SEO Optimization', serviceType: 'SEO Services', url: `${baseUrl}/services#seo-optimization`, description: 'Professional SEO services including technical SEO audits, keyword mapping, on-page SEO and authority strategy.' } },
              { '@type': 'Offer', position: 2, itemOffered: { '@type': 'Service', name: 'AEO & GEO Optimization', serviceType: 'AEO Services & GEO Services', url: `${baseUrl}/services#aeo-geo-optimization`, description: 'Answer Engine Optimization and Generative Engine Optimization for AI search citations and entity authority.' } },
              { '@type': 'Offer', position: 3, itemOffered: { '@type': 'Service', name: 'Social Media Marketing', serviceType: 'Social Media Marketing Services', url: `${baseUrl}/services#social-media-marketing`, description: 'Organic social media management, monthly content calendars, custom visuals and active community engagement.' } },
              { '@type': 'Offer', position: 4, itemOffered: { '@type': 'Service', name: 'Google Ads Management', serviceType: 'Google Ads Management Services', url: `${baseUrl}/services#google-ads-management`, description: 'Targeted Google PPC advertising, high-intent keyword strategy, ad copywriting and verified conversion tracking.' } },
              { '@type': 'Offer', position: 5, itemOffered: { '@type': 'Service', name: 'Meta Ads & WhatsApp Advertising', serviceType: 'Meta Ads Management Services', url: `${baseUrl}/services#meta-ads-whatsapp-advertising`, description: 'Facebook Ads management, Instagram Ads management and WhatsApp marketing services for direct lead generation.' } },
              { '@type': 'Offer', position: 6, itemOffered: { '@type': 'Service', name: 'Website & Landing Page Design', serviceType: 'Website Design Services', url: `${baseUrl}/services#website-landing-page-design`, description: 'Custom mobile-responsive business website design and conversion-focused landing page design services.' } },
              { '@type': 'Offer', position: 7, itemOffered: { '@type': 'Service', name: 'Video & Reel Creation & Editing', serviceType: 'Video Editing Services', url: `${baseUrl}/services#video-reel-creation-editing`, description: 'Retention-focused video editing services, reels editing services and social media video production.' } },
              { '@type': 'Offer', position: 8, itemOffered: { '@type': 'Service', name: 'Graphic Design', serviceType: 'Graphic Design Services', url: `${baseUrl}/services#graphic-design`, description: 'Professional graphic design and business graphic design for social creatives, banners, posters and ad visuals.' } },
            ],
          },
        },
      ],
    };
    const script = document.createElement('script');
    script.id = 'jexora-services-schema';
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
  }

  function applyPageSEO(pathname) {
    if (pathname === '/seo-admin') {
      document.title = 'SEO Command Center | JEXORA SOLUTIONS Admin';
      setMetaTag('meta[name="robots"]', 'name', 'robots', 'noindex, nofollow');
      setMetaTag(
        'meta[name="description"]',
        'name',
        'description',
        'Internal SEO administration panel for JEXORA SOLUTIONS.'
      );
      return;
    }

    const cfg = getConfig();
    const pageMeta = cfg.pages[pathname] || cfg.pages['/'];
    const baseUrl = (cfg.siteUrl || 'https://jexorasolutions.com').replace(/\/+$/, '');
    const fullUrl = pathname === '/' ? `${baseUrl}/` : `${baseUrl}${pathname}`;

    document.title = pageMeta.title || cfg.pages['/'].title;
    setMetaTag('meta[name="description"]', 'name', 'description', pageMeta.description || '');
    setMetaTag('meta[name="keywords"]', 'name', 'keywords', pageMeta.keywords || '');
    const rawRobots = pageMeta.robots || 'index, follow';
    const fullRobots =
      rawRobots === 'index, follow'
        ? 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
        : rawRobots;
    setMetaTag('meta[name="robots"]', 'name', 'robots', fullRobots);

    let canon = document.querySelector('link[rel="canonical"]');
    if (!canon) {
      canon = document.createElement('link');
      canon.setAttribute('rel', 'canonical');
      document.head.appendChild(canon);
    }
    canon.setAttribute('href', pageMeta.canonical || fullUrl);

    setMetaTag(
      'meta[property="og:title"]',
      'property',
      'og:title',
      pageMeta.ogTitle || pageMeta.title || ''
    );
    setMetaTag(
      'meta[property="og:description"]',
      'property',
      'og:description',
      pageMeta.ogDescription || pageMeta.description || ''
    );
    setMetaTag('meta[property="og:url"]', 'property', 'og:url', fullUrl);
    setMetaTag(
      'meta[property="og:image"]',
      'property',
      'og:image',
      pageMeta.ogImage || cfg.defaultOgImage || ''
    );
    setMetaTag(
      'meta[name="twitter:title"]',
      'name',
      'twitter:title',
      pageMeta.ogTitle || pageMeta.title || ''
    );
    setMetaTag(
      'meta[name="twitter:description"]',
      'name',
      'twitter:description',
      pageMeta.ogDescription || pageMeta.description || ''
    );

    injectTracking(cfg);
    updateArticleSchema(pathname, cfg);
    updateServicesSchema(pathname, cfg);
  }

  function scorePageSEO(meta) {
    let score = 0;
    const issues = [];
    const titleLen = (meta.title || '').trim().length;
    const descLen = (meta.description || '').trim().length;
    const kwCount = (meta.keywords || '')
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean).length;

    if (titleLen >= 35 && titleLen <= 68) {
      score += 25;
    } else if (titleLen > 0) {
      score += 14;
      issues.push(
        titleLen < 35
          ? `Title is short (${titleLen} chars; aim for 45–60)`
          : `Title may truncate in Google (${titleLen} chars; aim for 45–65)`
      );
    } else {
      issues.push('Missing Meta Title');
    }

    if (descLen >= 115 && descLen <= 165) {
      score += 25;
    } else if (descLen > 0) {
      score += 14;
      issues.push(
        descLen < 115
          ? `Description is short (${descLen} chars; aim for 130–160)`
          : `Description may truncate (${descLen} chars; aim for 130–160)`
      );
    } else {
      issues.push('Missing Meta Description');
    }

    if (kwCount >= 3) {
      score += 15;
    } else {
      score += 6;
      issues.push('Add at least 3 focus keywords');
    }

    if ((meta.ogImage || '').startsWith('https://')) {
      score += 15;
    } else {
      issues.push('Set an HTTPS Open Graph share image URL');
    }

    if ((meta.robots || 'index, follow').includes('index') && !(meta.robots || '').includes('noindex')) {
      score += 10;
    } else {
      issues.push('Page is set to noindex (blocked from Google)');
    }

    if ((meta.ogTitle || meta.title) && (meta.ogDescription || meta.description)) {
      score += 10;
    }

    return { score, issues, titleLen, descLen, kwCount };
  }

  function generateSitemapXml(cfg) {
    const baseUrl = (cfg.siteUrl || 'https://jexorasolutions.com').replace(/\/+$/, '');
    const entries = Object.keys(cfg.pages)
      .filter((route) => {
        const p = cfg.pages[route];
        return !(p.robots || '').includes('noindex');
      })
      .map((route) => {
        const p = cfg.pages[route];
        const loc = route === '/' ? `${baseUrl}/` : `${baseUrl}${route}`;
        return `  <url>\n    <loc>${loc}</loc>\n    <changefreq>${p.changefreq || 'monthly'}</changefreq>\n    <priority>${p.priority || '0.8'}</priority>\n  </url>`;
      })
      .join('\n');

    return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>\n`;
  }

  function downloadTextFile(filename, content, mimeType) {
    const blob = new Blob([content], { type: mimeType || 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  function renderScorePill(score) {
    const cls =
      score >= 85
        ? 'bg-[#DCFCE7] text-[#15803D] border-[#86EFAC]'
        : score >= 65
        ? 'bg-[#E0F2FE] text-[#1D58C8] border-[#7DD3FC]'
        : 'bg-[#FEF2F2] text-[#DC2626] border-[#FCA5A5]';
    return `<span class="inline-flex items-center px-2.5 py-0.5 text-[11px] font-extrabold border ${cls}">${score}/100</span>`;
  }

  function renderSerpPreview(route, meta, cfg) {
    const baseUrl = (cfg.siteUrl || 'https://jexorasolutions.com').replace(/\/+$/, '');
    const displayHost = baseUrl.replace(/^https?:\/\//, '');
    const crumb =
      route === '/'
        ? displayHost
        : `${displayHost} › ${route.replace(/^\//, '').replace(/\//g, ' › ')}`;
    const title = meta.title || 'Untitled Page';
    const desc = meta.description || 'Add a compelling meta description to lift click-through rate.';
    const maxTitle = serpMode === 'mobile' ? 58 : 65;
    const maxDesc = serpMode === 'mobile' ? 125 : 160;
    const shownTitle = title.length > maxTitle ? `${title.slice(0, maxTitle - 1)}…` : title;
    const shownDesc = desc.length > maxDesc ? `${desc.slice(0, maxDesc - 1)}…` : desc;

    return `
      <div class="bg-white border border-[#D5E3F8] p-5 space-y-3 shadow-sm">
        <div class="flex items-center justify-between gap-2 pb-2.5 border-b border-[#EEF4FD]">
          <p class="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#1D58C8]">LIVE GOOGLE SERP PREVIEW</p>
          <div class="inline-flex border border-[#D5E3F8]">
            <button type="button" data-serp-mode="desktop" class="px-2.5 py-1 text-[10px] font-bold uppercase ${
              serpMode === 'desktop' ? 'bg-[#1D58C8] text-white' : 'bg-white text-[#4B638C]'
            }">Desktop</button>
            <button type="button" data-serp-mode="mobile" class="px-2.5 py-1 text-[10px] font-bold uppercase ${
              serpMode === 'mobile' ? 'bg-[#1D58C8] text-white' : 'bg-white text-[#4B638C]'
            }">Mobile</button>
          </div>
        </div>
        <div class="${serpMode === 'mobile' ? 'max-w-[340px] border border-[#EEF4FD] p-3.5 bg-[#FAFCFF]' : ''}">
          <div class="flex items-center gap-2 mb-1">
            <img src="/assets/jexora-logo.png" alt="JEXORA" class="w-5 h-5 object-contain rounded-full border border-[#D5E3F8] bg-white p-0.5" />
            <div class="leading-tight min-w-0">
              <p class="text-[11px] font-bold text-[#0F2557] truncate">${esc(cfg.siteName || 'JEXORA SOLUTIONS')}</p>
              <p class="text-[10px] text-[#4B638C] truncate">${esc(crumb)}</p>
            </div>
          </div>
          <p class="text-[17px] font-medium text-[#1A0DAB] leading-snug hover:underline cursor-pointer">${esc(shownTitle)}</p>
          <p class="text-xs text-[#4B5563] leading-relaxed mt-1">${esc(shownDesc)}</p>
        </div>
      </div>

      <div class="bg-white border border-[#D5E3F8] overflow-hidden shadow-sm">
        <div class="px-5 py-2.5 bg-[#F2F7FF] border-b border-[#D5E3F8] flex items-center justify-between">
          <p class="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#1D58C8]">SOCIAL SHARE PREVIEW (OG CARD)</p>
          <span class="text-[10px] font-semibold text-[#4B638C]">WhatsApp · LinkedIn · Facebook</span>
        </div>
        <div class="aspect-[16/9] bg-[#0E2A6E] overflow-hidden relative">
          <img src="${esc((meta.ogImage || cfg.defaultOgImage || '/og-cover.jpg').replace(/^https?:\/\/(www\.)?jexorasolutions\.com/, ''))}" alt="OG Preview" class="w-full h-full object-cover" onerror="this.src='/og-cover.jpg'" />
        </div>
        <div class="p-4 space-y-1 bg-[#FAFCFF] border-t border-[#D5E3F8]">
          <p class="text-[10px] font-bold uppercase tracking-[0.14em] text-[#4B638C]">${esc(displayHost)}</p>
          <p class="text-sm font-extrabold text-[#0F2557] leading-snug">${esc(meta.ogTitle || meta.title || '')}</p>
          <p class="text-xs text-[#4B638C] leading-snug">${esc((meta.ogDescription || meta.description || '').slice(0, 120))}</p>
        </div>
      </div>
    `;
  }

  function renderAdminPage() {
    if (!isAuthenticated()) {
      return `
        <main class="bg-[#F2F7FF] min-h-screen pt-[132px] pb-20">
          <div class="max-w-md mx-auto px-4">
            <div class="ds-proposal-card p-7 sm:p-9 space-y-6 ds-animate-in">
              <div class="text-center space-y-2">
                <span class="inline-flex items-center justify-center w-12 h-12 bg-[#0E2A6E] text-[#00B8FF] border border-[#00B8FF]/50 mx-auto">
                  <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                </span>
                <p class="ds-eyebrow-dark">RESTRICTED ACCESS · NOINDEX</p>
                <h1 class="text-2xl font-extrabold text-[#0E2A6E]">JEXORA SEO Command Center</h1>
                <p class="text-xs text-[#4B638C] leading-relaxed">
                  Enter your SEO Admin passcode to manage page metadata, live SERP previews, GA4 &amp; Search Console tags, JSON-LD schema, and sitemaps.
                </p>
              </div>

              <form id="seo-admin-login-form" class="space-y-4">
                <div>
                  <label for="seo-passcode-input" class="block text-[11px] font-bold uppercase tracking-[0.14em] text-[#0E2A6E] mb-1.5">Admin Passcode</label>
                  <div class="ds-field-wrap">
                    <input id="seo-passcode-input" type="password" required placeholder="Enter passcode (default: jexora2026)" class="ds-proposal-input" autocomplete="current-password" />
                  </div>
                </div>
                <p id="seo-login-err" role="alert" class="hidden text-xs font-semibold text-[#DC2626]"></p>
                <button type="submit" class="ds-btn-gradient w-full py-3.5">
                  <span>UNLOCK SEO ADMIN PANEL</span>
                </button>
              </form>

              <div class="bg-[#F2F7FF] border border-[#D5E3F8] p-3.5 text-[11px] text-[#4B638C] leading-relaxed">
                <strong class="text-[#0E2A6E]">Default Passcode:</strong> <code class="bg-white px-1.5 py-0.5 border border-[#D5E3F8] text-[#1D58C8] font-bold">jexora2026</code><br/>
                You can change this passcode anytime inside the Export &amp; Settings tab. This route is excluded from search engines via <code>noindex</code> and <code>robots.txt</code>.
              </div>
            </div>
          </div>
        </main>
      `;
    }

    const cfg = getConfig();
    const routes = Object.keys(cfg.pages);
    if (!cfg.pages[selectedRoute]) selectedRoute = '/';
    const curMeta = cfg.pages[selectedRoute];
    const curAudit = scorePageSEO(curMeta);

    const allAudits = routes.map((r) => ({
      route: r,
      meta: cfg.pages[r],
      audit: scorePageSEO(cfg.pages[r]),
    }));
    const avgScore = Math.round(
      allAudits.reduce((acc, x) => acc + x.audit.score, 0) / Math.max(1, allAudits.length)
    );
    const hasDrafts = Boolean(loadLocalOverrides());

    const tabs = [
      { key: 'meta', label: 'Page Meta & SERP' },
      { key: 'audit', label: `Sitewide Audit (${avgScore}/100)` },
      { key: 'tracking', label: 'Analytics & GSC' },
      { key: 'schema', label: 'Schema & AEO/GEO' },
      { key: 'export', label: 'Sitemap & Export' },
    ];

    let tabBody = '';

    if (activeTab === 'meta') {
      tabBody = `
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-7 items-start">
          <!-- Left Editor -->
          <div class="lg:col-span-7 bg-white border border-[#D5E3F8] border-t-4 border-t-[#1D58C8] p-6 sm:p-7 shadow-md space-y-5">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#D5E3F8]">
              <div>
                <p class="ds-eyebrow-dark">PAGE METADATA EDITOR</p>
                <h2 class="text-xl font-extrabold text-[#0E2A6E] mt-0.5">${esc(curMeta.label || selectedRoute)}</h2>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-[11px] font-bold text-[#4B638C]">SEO Score:</span>
                <span id="seo-live-score-wrap">${renderScorePill(curAudit.score)}</span>
              </div>
            </div>

            <div>
              <label for="seo-route-select" class="block text-[11px] font-bold uppercase tracking-[0.14em] text-[#0E2A6E] mb-1.5">Select Page / Route to Optimize</label>
              <div class="ds-field-wrap">
                <select id="seo-route-select" class="ds-proposal-input font-bold">
                  ${routes
                    .map(
                      (r) =>
                        `<option value="${esc(r)}" ${r === selectedRoute ? 'selected' : ''}>${esc(r)} — ${esc(cfg.pages[r].label || r)}</option>`
                    )
                    .join('')}
                </select>
              </div>
            </div>

            <form id="seo-page-form" class="space-y-4">
              <div>
                <div class="flex items-center justify-between mb-1.5">
                  <label for="seo-title" class="text-[11px] font-bold uppercase tracking-[0.14em] text-[#0E2A6E]">Meta Title</label>
                  <span id="seo-title-count" class="text-[11px] font-bold ${
                    curAudit.titleLen >= 35 && curAudit.titleLen <= 68
                      ? 'text-[#15803D]'
                      : 'text-[#1D58C8]'
                  }">${curAudit.titleLen} / 60 chars</span>
                </div>
                <div class="ds-field-wrap">
                  <input id="seo-title" name="title" type="text" value="${esc(curMeta.title || '')}" class="ds-proposal-input" />
                </div>
              </div>

              <div>
                <div class="flex items-center justify-between mb-1.5">
                  <label for="seo-desc" class="text-[11px] font-bold uppercase tracking-[0.14em] text-[#0E2A6E]">Meta Description</label>
                  <span id="seo-desc-count" class="text-[11px] font-bold ${
                    curAudit.descLen >= 115 && curAudit.descLen <= 165
                      ? 'text-[#15803D]'
                      : 'text-[#1D58C8]'
                  }">${curAudit.descLen} / 160 chars</span>
                </div>
                <div class="ds-field-wrap">
                  <textarea id="seo-desc" name="description" rows="3" class="ds-proposal-input">${esc(curMeta.description || '')}</textarea>
                </div>
              </div>

              <div>
                <label for="seo-keywords" class="block text-[11px] font-bold uppercase tracking-[0.14em] text-[#0E2A6E] mb-1.5">Focus Keywords (comma-separated)</label>
                <div class="ds-field-wrap">
                  <input id="seo-keywords" name="keywords" type="text" value="${esc(curMeta.keywords || '')}" class="ds-proposal-input" />
                </div>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label for="seo-robots" class="block text-[11px] font-bold uppercase tracking-[0.14em] text-[#0E2A6E] mb-1.5">Search Engine Indexing</label>
                  <div class="ds-field-wrap">
                    <select id="seo-robots" name="robots" class="ds-proposal-input">
                      ${['index, follow', 'noindex, follow', 'noindex, nofollow']
                        .map(
                          (val) =>
                            `<option value="${val}" ${(curMeta.robots || 'index, follow') === val ? 'selected' : ''}>${val}</option>`
                        )
                        .join('')}
                    </select>
                  </div>
                </div>
                <div>
                  <label for="seo-priority" class="block text-[11px] font-bold uppercase tracking-[0.14em] text-[#0E2A6E] mb-1.5">Sitemap Priority</label>
                  <div class="ds-field-wrap">
                    <select id="seo-priority" name="priority" class="ds-proposal-input">
                      ${['1.0', '0.9', '0.85', '0.8', '0.75', '0.6', '0.5']
                        .map(
                          (val) =>
                            `<option value="${val}" ${(curMeta.priority || '0.8') === val ? 'selected' : ''}>${val}</option>`
                        )
                        .join('')}
                    </select>
                  </div>
                </div>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-[#EEF4FD]">
                <div>
                  <label for="seo-og-title" class="block text-[11px] font-bold uppercase tracking-[0.14em] text-[#0E2A6E] mb-1.5">Open Graph Title (Social)</label>
                  <div class="ds-field-wrap">
                    <input id="seo-og-title" name="ogTitle" type="text" value="${esc(curMeta.ogTitle || '')}" class="ds-proposal-input" />
                  </div>
                </div>
                <div>
                  <label for="seo-og-image" class="block text-[11px] font-bold uppercase tracking-[0.14em] text-[#0E2A6E] mb-1.5">Open Graph Image URL</label>
                  <div class="ds-field-wrap">
                    <input id="seo-og-image" name="ogImage" type="url" value="${esc(curMeta.ogImage || '')}" class="ds-proposal-input" />
                  </div>
                </div>
              </div>

              <div>
                <label for="seo-og-desc" class="block text-[11px] font-bold uppercase tracking-[0.14em] text-[#0E2A6E] mb-1.5">Open Graph Description (Social)</label>
                <div class="ds-field-wrap">
                  <textarea id="seo-og-desc" name="ogDescription" rows="2" class="ds-proposal-input">${esc(curMeta.ogDescription || '')}</textarea>
                </div>
              </div>

              <div class="pt-2 flex flex-wrap items-center gap-3">
                <button type="submit" class="ds-btn-gradient px-6 py-3">
                  <span>${cloudAvailable ? 'SAVE &amp; PUBLISH LIVE' : 'SAVE &amp; APPLY LIVE'}</span>
                </button>
                <a href="${esc(selectedRoute)}" data-link class="ds-btn-outline-blue px-5 py-3">
                  <span>OPEN LIVE PAGE</span>
                </a>
              </div>
            </form>
          </div>

          <!-- Right Live SERP & Recommendations -->
          <div class="lg:col-span-5 space-y-5">
            <div id="seo-serp-live-wrap" class="space-y-5">
              ${renderSerpPreview(selectedRoute, curMeta, cfg)}
            </div>

            <div class="bg-[#0E2A6E] text-white border-t-4 border-[#00B8FF] p-5 space-y-3 shadow-lg">
              <p class="ds-eyebrow">PAGE OPTIMIZATION SIGNALS</p>
              <div id="seo-issues-list">
                ${
                  curAudit.issues.length === 0
                    ? `<p class="text-xs text-[#7DD8FF] font-semibold">All on-page SEO checks passed for ${esc(selectedRoute)}!</p>`
                    : `<ul class="space-y-2">${curAudit.issues
                        .map(
                          (iss) =>
                            `<li class="text-xs text-white/85 flex items-start gap-2"><span class="text-[#00B8FF] font-bold">•</span><span>${esc(iss)}</span></li>`
                        )
                        .join('')}</ul>`
                }
              </div>
            </div>
          </div>
        </div>
      `;
    } else if (activeTab === 'audit') {
      tabBody = `
        <div class="space-y-6">
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div class="bg-white border border-[#D5E3F8] border-t-4 border-t-[#1D58C8] p-5">
              <p class="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#4B638C]">AVG SITE SEO SCORE</p>
              <p class="text-3xl font-extrabold text-[#1D58C8] mt-1">${avgScore}<span class="text-sm text-[#4B638C]">/100</span></p>
            </div>
            <div class="bg-white border border-[#D5E3F8] border-t-4 border-t-[#00B8FF] p-5">
              <p class="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#4B638C]">INDEXABLE ROUTES</p>
              <p class="text-3xl font-extrabold text-[#0E2A6E] mt-1">${allAudits.filter((a) => !(a.meta.robots || '').includes('noindex')).length} <span class="text-sm text-[#4B638C]">/ ${allAudits.length}</span></p>
            </div>
            <div class="bg-white border border-[#D5E3F8] border-t-4 border-t-[#1D58C8] p-5">
              <p class="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#4B638C]">SCHEMA MARKUP</p>
              <p class="text-lg font-extrabold text-[#0E2A6E] mt-2">Org + FAQ + Article</p>
            </div>
            <div class="bg-white border border-[#D5E3F8] border-t-4 border-t-[#00B8FF] p-5">
              <p class="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#4B638C]">GA4 &amp; SEARCH CONSOLE</p>
              <p class="text-sm font-extrabold mt-2 ${
                cfg.tracking.ga4MeasurementId || cfg.tracking.googleSiteVerification
                  ? 'text-[#15803D]'
                  : 'text-[#1D58C8]'
              }">${
                cfg.tracking.ga4MeasurementId || cfg.tracking.googleSiteVerification
                  ? 'Configured'
                  : 'Ready to Connect'
              }</p>
            </div>
          </div>

          <div class="bg-white border border-[#D5E3F8] shadow-md overflow-hidden">
            <div class="px-6 py-4 bg-[#0E2A6E] text-white flex items-center justify-between">
              <h2 class="text-sm font-extrabold uppercase tracking-[0.16em]">All ${allAudits.length} Website Routes — Live SEO Audit</h2>
              <span class="text-[11px] text-[#7DD8FF] font-semibold">Click Optimize to edit any page</span>
            </div>
            <div class="overflow-x-auto">
              <table class="w-full text-left border-collapse">
                <thead>
                  <tr class="bg-[#F2F7FF] border-b border-[#D5E3F8] text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#4B638C]">
                    <th class="px-5 py-3">Route</th>
                    <th class="px-5 py-3">Title Length</th>
                    <th class="px-5 py-3">Desc Length</th>
                    <th class="px-5 py-3">Robots</th>
                    <th class="px-5 py-3">Score</th>
                    <th class="px-5 py-3 text-right">Action</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-[#EEF4FD] text-xs">
                  ${allAudits
                    .map(
                      (row) => `
                    <tr class="hover:bg-[#F7FAFF]">
                      <td class="px-5 py-3.5">
                        <p class="font-extrabold text-[#0F2557]">${esc(row.route)}</p>
                        <p class="text-[11px] text-[#4B638C]">${esc(row.meta.label || '')}</p>
                      </td>
                      <td class="px-5 py-3.5 font-semibold ${
                        row.audit.titleLen >= 35 && row.audit.titleLen <= 68
                          ? 'text-[#15803D]'
                          : 'text-[#1D58C8]'
                      }">${row.audit.titleLen} chars</td>
                      <td class="px-5 py-3.5 font-semibold ${
                        row.audit.descLen >= 115 && row.audit.descLen <= 165
                          ? 'text-[#15803D]'
                          : 'text-[#1D58C8]'
                      }">${row.audit.descLen} chars</td>
                      <td class="px-5 py-3.5"><span class="px-2 py-0.5 bg-[#F2F7FF] border border-[#D5E3F8] text-[10px] font-bold text-[#0F2557]">${esc(row.meta.robots || 'index, follow')}</span></td>
                      <td class="px-5 py-3.5">${renderScorePill(row.audit.score)}</td>
                      <td class="px-5 py-3.5 text-right">
                        <button type="button" data-seo-edit-route="${esc(row.route)}" class="text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#1D58C8] hover:text-[#0E2A6E]">OPTIMIZE ›</button>
                      </td>
                    </tr>
                  `
                    )
                    .join('')}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      `;
    } else if (activeTab === 'tracking') {
      tabBody = `
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-7 items-start">
          <form id="seo-tracking-form" class="lg:col-span-7 bg-white border border-[#D5E3F8] border-t-4 border-t-[#1D58C8] p-6 sm:p-7 shadow-md space-y-5">
            <div class="pb-4 border-b border-[#D5E3F8]">
              <p class="ds-eyebrow-dark">GLOBAL DOMAIN, ANALYTICS &amp; VERIFICATION</p>
              <h2 class="text-xl font-extrabold text-[#0E2A6E] mt-0.5">Search Console &amp; Tracking IDs</h2>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label for="seo-site-url" class="block text-[11px] font-bold uppercase tracking-[0.14em] text-[#0E2A6E] mb-1.5">Primary Domain URL</label>
                <div class="ds-field-wrap">
                  <input id="seo-site-url" name="siteUrl" type="url" value="${esc(cfg.siteUrl || 'https://jexorasolutions.com')}" class="ds-proposal-input" />
                </div>
              </div>
              <div>
                <label for="seo-default-og" class="block text-[11px] font-bold uppercase tracking-[0.14em] text-[#0E2A6E] mb-1.5">Default OG Share Image</label>
                <div class="ds-field-wrap">
                  <input id="seo-default-og" name="defaultOgImage" type="url" value="${esc(cfg.defaultOgImage || '')}" class="ds-proposal-input" />
                </div>
              </div>
            </div>

            <div>
              <label for="seo-gsc" class="block text-[11px] font-bold uppercase tracking-[0.14em] text-[#0E2A6E] mb-1.5">Google Search Console Verification Code</label>
              <div class="ds-field-wrap">
                <input id="seo-gsc" name="googleSiteVerification" type="text" placeholder="Paste the content value from Google Search Console HTML tag" value="${esc(cfg.tracking.googleSiteVerification || '')}" class="ds-proposal-input" />
              </div>
              <p class="text-[11px] text-[#4B638C] mt-1">Automatically injects <code>&lt;meta name="google-site-verification" content="..."&gt;</code> into your site header.</p>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label for="seo-ga4" class="block text-[11px] font-bold uppercase tracking-[0.14em] text-[#0E2A6E] mb-1.5">Google Analytics 4 (GA4 ID)</label>
                <div class="ds-field-wrap">
                  <input id="seo-ga4" name="ga4MeasurementId" type="text" placeholder="G-XXXXXXXXXX" value="${esc(cfg.tracking.ga4MeasurementId || '')}" class="ds-proposal-input" />
                </div>
              </div>
              <div>
                <label for="seo-meta-pixel" class="block text-[11px] font-bold uppercase tracking-[0.14em] text-[#0E2A6E] mb-1.5">Meta Pixel ID (Optional)</label>
                <div class="ds-field-wrap">
                  <input id="seo-meta-pixel" name="metaPixelId" type="text" placeholder="123456789012345" value="${esc(cfg.tracking.metaPixelId || '')}" class="ds-proposal-input" />
                </div>
              </div>
            </div>

            <div class="pt-2">
              <button type="submit" class="ds-btn-gradient px-6 py-3">
                <span>SAVE TRACKING SETTINGS</span>
              </button>
            </div>
          </form>

          <div class="lg:col-span-5 bg-[#0E2A6E] text-white border-t-4 border-[#00B8FF] p-6 space-y-4 shadow-lg">
            <p class="ds-eyebrow">GOOGLE LAUNCH CHECKLIST</p>
            <h3 class="text-lg font-extrabold text-white">Get Indexed Fast on Google</h3>
            <ol class="space-y-3 text-xs text-white/80 leading-relaxed">
              <li><strong class="text-[#7DD8FF]">1. Verify Domain:</strong> Open Google Search Console, add <code>https://jexorasolutions.com</code>, copy the verification token, and paste it here.</li>
              <li><strong class="text-[#7DD8FF]">2. Submit Sitemap:</strong> Inside Search Console → <strong>Sitemaps</strong>, submit <code>https://jexorasolutions.com/sitemap.xml</code> (all 12 routes + blog articles included).</li>
              <li><strong class="text-[#7DD8FF]">3. Connect GA4:</strong> Paste your <code>G-XXXXXXXXXX</code> Measurement ID to track organic traffic, enquiries, and landing page performance.</li>
              <li><strong class="text-[#7DD8FF]">4. Publish Config:</strong> Download <code>seo-config.json</code> from the Export tab and deploy to Netlify so all visitors load your updated config permanently.</li>
            </ol>
          </div>
        </div>
      `;
    } else if (activeTab === 'schema') {
      const existingSchemas = Array.from(
        document.querySelectorAll('script[type="application/ld+json"]')
      ).map((el, idx) => ({
        idx: idx + 1,
        text: el.textContent.trim(),
      }));

      tabBody = `
        <div class="space-y-6">
          <div class="bg-white border border-[#D5E3F8] border-t-4 border-t-[#1D58C8] p-6 shadow-md space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <p class="ds-eyebrow-dark">AEO &amp; GEO STRUCTURED DATA</p>
                <h2 class="text-xl font-extrabold text-[#0E2A6E] mt-0.5">Active JSON-LD Schemas Detected (${existingSchemas.length})</h2>
              </div>
              <span class="px-3 py-1 bg-[#DCFCE7] border border-[#86EFAC] text-[#15803D] text-xs font-extrabold">AI Answer Engine Ready</span>
            </div>
            <p class="text-xs text-[#4B638C] leading-relaxed">
              Your website ships with <strong>ProfessionalService</strong> (Organization, Founder Jigyasa Sahu, 8 Specialist Services, Worldwide reach, Facebook/Instagram/LinkedIn <code>sameAs</code>), <strong>FAQPage</strong> (Rich FAQ snippets), and automatic <strong>BlogPosting</strong> JSON-LD schema on every blog article page.
            </p>
            <div class="space-y-4">
              ${existingSchemas
                .map(
                  (s) => `
                <div class="border border-[#D5E3F8] bg-[#F2F7FF]">
                  <div class="px-4 py-2.5 bg-[#0E2A6E] text-white flex items-center justify-between">
                    <span class="text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#7DD8FF]">JSON-LD Block #${s.idx}</span>
                    <button type="button" data-copy-schema="${s.idx}" class="text-[10px] font-bold uppercase tracking-[0.14em] bg-[#1D58C8] hover:bg-[#00B8FF] hover:text-[#0E2A6E] px-2.5 py-1 transition-colors">COPY JSON-LD</button>
                  </div>
                  <pre id="seo-schema-block-${s.idx}" class="p-4 text-[11px] text-[#0F2557] overflow-x-auto max-h-64 leading-relaxed">${esc(s.text)}</pre>
                </div>
              `
                )
                .join('')}
            </div>
          </div>
        </div>
      `;
    } else if (activeTab === 'export') {
      const sitemapPreview = generateSitemapXml(cfg);
      const jsonPreview = JSON.stringify(cfg, null, 2);

      tabBody = `
        <div class="space-y-6">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div class="bg-white border border-[#D5E3F8] border-t-4 border-t-[#1D58C8] p-5 flex flex-col justify-between space-y-4 shadow-sm">
              <div class="space-y-1.5">
                <p class="ds-eyebrow-dark">LIVE SITE CONFIG</p>
                <h3 class="text-lg font-extrabold text-[#0E2A6E]">seo-config.json</h3>
                <p class="text-xs text-[#4B638C]">Contains all edited page titles, descriptions, keywords, OG tags, and GA4/GSC IDs. Place in <code>dist/</code> to publish globally.</p>
              </div>
              <button type="button" id="seo-dl-config" class="ds-btn-gradient w-full py-3">DOWNLOAD SEO-CONFIG.JSON</button>
            </div>

            <div class="bg-white border border-[#D5E3F8] border-t-4 border-t-[#00B8FF] p-5 flex flex-col justify-between space-y-4 shadow-sm">
              <div class="space-y-1.5">
                <p class="ds-eyebrow-dark">SEARCH ENGINE MAP</p>
                <h3 class="text-lg font-extrabold text-[#0E2A6E]">sitemap.xml</h3>
                <p class="text-xs text-[#4B638C]">Auto-generated XML sitemap covering all indexable routes &amp; blog articles with your custom priorities.</p>
              </div>
              <button type="button" id="seo-dl-sitemap" class="ds-btn-gradient w-full py-3">DOWNLOAD SITEMAP.XML</button>
            </div>

            <div class="bg-white border border-[#D5E3F8] border-t-4 border-t-[#1D58C8] p-5 flex flex-col justify-between space-y-4 shadow-sm">
              <div class="space-y-1.5">
                <p class="ds-eyebrow-dark">CRAWLER DIRECTIVES</p>
                <h3 class="text-lg font-extrabold text-[#0E2A6E]">robots.txt</h3>
                <p class="text-xs text-[#4B638C]">Directs Googlebot &amp; AI crawlers to your sitemap while keeping <code>/seo-admin</code> private.</p>
              </div>
              <button type="button" id="seo-dl-robots" class="ds-btn-gradient w-full py-3">DOWNLOAD ROBOTS.TXT</button>
            </div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div class="lg:col-span-7 bg-white border border-[#D5E3F8] p-6 space-y-3 shadow-sm">
              <p class="ds-eyebrow-dark">GENERATED SITEMAP.XML PREVIEW</p>
              <pre class="bg-[#F2F7FF] border border-[#D5E3F8] p-4 text-[11px] text-[#0F2557] overflow-x-auto max-h-64">${esc(sitemapPreview)}</pre>
            </div>

            <div class="lg:col-span-5 bg-white border border-[#D5E3F8] p-6 space-y-5 shadow-sm">
              <div class="space-y-3">
                <p class="ds-eyebrow-dark">ADMIN SECURITY</p>
                <form id="seo-passcode-form" class="space-y-3">
                  <label for="seo-new-passcode" class="block text-[11px] font-bold uppercase tracking-[0.14em] text-[#0E2A6E]">Change Admin Passcode</label>
                  <div class="ds-field-wrap">
                    <input id="seo-new-passcode" type="password" minlength="4" required placeholder="New passcode (min 4 chars)" class="ds-proposal-input" />
                  </div>
                  <button type="submit" class="ds-btn-outline-blue w-full py-2.5">UPDATE PASSCODE</button>
                </form>
              </div>

              <div class="pt-4 border-t border-[#D5E3F8] space-y-2.5">
                <p class="ds-eyebrow-dark">DRAFT MANAGEMENT</p>
                <button type="button" id="seo-reset-drafts" class="w-full py-2.5 px-4 border border-[#DC2626] text-[#DC2626] hover:bg-[#FEF2F2] text-xs font-bold uppercase tracking-[0.14em] transition-colors">RESET LOCAL DRAFTS TO DEFAULT</button>
              </div>
            </div>
          </div>

          <details class="bg-white border border-[#D5E3F8] p-5">
            <summary class="text-xs font-extrabold uppercase tracking-[0.16em] text-[#1D58C8] cursor-pointer">Inspect Full seo-config.json Payload</summary>
            <pre class="mt-3 bg-[#F2F7FF] border border-[#D5E3F8] p-4 text-[11px] text-[#0F2557] overflow-x-auto max-h-72">${esc(jsonPreview)}</pre>
          </details>
        </div>
      `;
    }

    return `
      <main class="bg-[#F2F7FF] min-h-screen">
        <section class="ds-sapphire-band text-white pt-[132px] pb-10 border-b border-white/10">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div class="space-y-1.5">
                <div class="flex flex-wrap items-center gap-2">
                  <span class="ds-eyebrow">JEXORA SOLUTIONS · INTERNAL SEO SUITE</span>
                  ${
                    cloudAvailable
                      ? '<span class="px-2.5 py-0.5 bg-[#DCFCE7] border border-[#86EFAC] text-[#15803D] text-[10px] font-extrabold uppercase">Cloud Auto-Publish Live</span>'
                      : '<span class="px-2.5 py-0.5 bg-[#00B8FF]/20 border border-[#7DD8FF]/50 text-[#7DD8FF] text-[10px] font-bold uppercase">Local Preview Mode</span>'
                  }
                  ${
                    hasDrafts && !cloudAvailable
                      ? '<span class="px-2 py-0.5 bg-white/15 border border-white/30 text-white text-[10px] font-bold uppercase">Local Drafts Active</span>'
                      : ''
                  }
                </div>
                <h1 class="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">SEO &amp; AI Search Admin Panel</h1>
              </div>
              <div class="flex flex-wrap items-center gap-2.5">
                <a href="/" data-link class="ds-btn-glass px-4 py-2.5">VIEW WEBSITE</a>
                <button type="button" id="seo-logout-btn" class="px-4 py-2.5 bg-white/10 hover:bg-white/20 border border-white/30 text-white text-xs font-bold uppercase tracking-[0.14em] transition-colors">LOCK PANEL</button>
              </div>
            </div>

            <div class="flex flex-wrap gap-2 mt-7 pt-5 border-t border-white/15">
              ${tabs
                .map(
                  (t) => `
                <button type="button" data-seo-tab="${t.key}" class="px-4 py-2.5 text-xs font-extrabold uppercase tracking-[0.12em] border transition-colors ${
                    activeTab === t.key
                      ? 'bg-white text-[#1D58C8] border-white shadow-md'
                      : 'bg-white/10 text-white/85 border-white/20 hover:bg-white/20'
                  }">${t.label}</button>
              `
                )
                .join('')}
            </div>
          </div>
        </section>

        <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 space-y-6">
          ${
            toastNotice
              ? `<div id="seo-admin-notice" class="${
                  toastIsError
                    ? 'bg-[#FEF2F2] border-[#FCA5A5] text-[#DC2626]'
                    : 'bg-[#DCFCE7] border-[#86EFAC] text-[#15803D]'
                } border px-4 py-3 text-xs font-bold flex items-center justify-between">
                  <span>${esc(toastNotice)}</span>
                  <button type="button" id="seo-dismiss-notice" class="text-xs font-extrabold px-2">✕</button>
                </div>`
              : ''
          }
          ${tabBody}
        </section>
      </main>
    `;
  }

  function attachAdminEvents(rerenderCallback) {
    const loginForm = document.getElementById('seo-admin-login-form');
    if (loginForm) {
      loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const input = document.getElementById('seo-passcode-input');
        const err = document.getElementById('seo-login-err');
        const entered = input ? input.value.trim() : '';
        let verified = false;
        let usedCloud = false;

        try {
          const res = await fetch('/api/seo-config', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'X-SEO-Passcode': entered,
            },
            body: JSON.stringify({ action: 'verify' }),
          });
          const ct = res.headers.get('content-type') || '';
          if (ct.includes('application/json')) {
            usedCloud = true;
            cloudAvailable = true;
            const data = await res.json();
            verified = Boolean(res.ok && data && data.ok);
          }
        } catch (_) {}

        if (!usedCloud) {
          verified = entered === getPasscode();
        }

        if (verified) {
          try {
            sessionStorage.setItem(AUTH_KEY, '1');
            sessionStorage.setItem(SESSION_PASS_KEY, entered);
          } catch (_) {}
          toastIsError = false;
          toastNotice = cloudAvailable
            ? 'SEO Admin unlocked in Cloud Auto-Publish Mode — every Save updates jexorasolutions.com, sitemap.xml & robots.txt live automatically!'
            : 'SEO Admin unlocked in Local Preview Mode. Once deployed on Netlify, every Save auto-publishes globally with zero GitHub edits!';
          rerenderCallback();
        } else if (err) {
          err.textContent = 'Incorrect passcode. Try again (default: jexora2026).';
          err.classList.remove('hidden');
        }
      });
      return;
    }

    const dismissNotice = document.getElementById('seo-dismiss-notice');
    if (dismissNotice) {
      dismissNotice.addEventListener('click', () => {
        toastNotice = '';
        const box = document.getElementById('seo-admin-notice');
        if (box) box.remove();
      });
    }

    const logoutBtn = document.getElementById('seo-logout-btn');
    if (logoutBtn) {
      logoutBtn.addEventListener('click', () => {
        try {
          sessionStorage.removeItem(AUTH_KEY);
          sessionStorage.removeItem(SESSION_PASS_KEY);
        } catch (_) {}
        toastNotice = '';
        toastIsError = false;
        rerenderCallback();
      });
    }

    document.querySelectorAll('[data-seo-tab]').forEach((btn) => {
      btn.addEventListener('click', () => {
        activeTab = btn.getAttribute('data-seo-tab');
        toastNotice = '';
        rerenderCallback();
      });
    });

    document.querySelectorAll('[data-seo-edit-route]').forEach((btn) => {
      btn.addEventListener('click', () => {
        selectedRoute = btn.getAttribute('data-seo-edit-route');
        activeTab = 'meta';
        toastNotice = '';
        rerenderCallback();
      });
    });

    const routeSelect = document.getElementById('seo-route-select');
    if (routeSelect) {
      routeSelect.addEventListener('change', () => {
        selectedRoute = routeSelect.value;
        toastNotice = '';
        rerenderCallback();
      });
    }

    const bindSerpModeButtons = () => {
      document.querySelectorAll('[data-serp-mode]').forEach((btn) => {
        btn.addEventListener('click', () => {
          serpMode = btn.getAttribute('data-serp-mode');
          refreshLiveSerp();
        });
      });
    };

    const pageForm = document.getElementById('seo-page-form');
    const refreshLiveSerp = () => {
      if (!pageForm) return;
      const cfg = getConfig();
      const draftMeta = Object.assign({}, cfg.pages[selectedRoute], {
        title: pageForm.title.value,
        description: pageForm.description.value,
        keywords: pageForm.keywords.value,
        robots: pageForm.robots.value,
        priority: pageForm.priority.value,
        ogTitle: pageForm.ogTitle.value,
        ogDescription: pageForm.ogDescription.value,
        ogImage: pageForm.ogImage.value,
      });
      const audit = scorePageSEO(draftMeta);
      const tCount = document.getElementById('seo-title-count');
      if (tCount) {
        tCount.textContent = `${audit.titleLen} / 60 chars`;
        tCount.className = `text-[11px] font-bold ${
          audit.titleLen >= 35 && audit.titleLen <= 68 ? 'text-[#15803D]' : 'text-[#1D58C8]'
        }`;
      }
      const dCount = document.getElementById('seo-desc-count');
      if (dCount) {
        dCount.textContent = `${audit.descLen} / 160 chars`;
        dCount.className = `text-[11px] font-bold ${
          audit.descLen >= 115 && audit.descLen <= 165 ? 'text-[#15803D]' : 'text-[#1D58C8]'
        }`;
      }
      const scoreWrap = document.getElementById('seo-live-score-wrap');
      if (scoreWrap) scoreWrap.innerHTML = renderScorePill(audit.score);
      const serpWrap = document.getElementById('seo-serp-live-wrap');
      if (serpWrap) {
        serpWrap.innerHTML = renderSerpPreview(selectedRoute, draftMeta, cfg);
        bindSerpModeButtons();
      }
      const issuesEl = document.getElementById('seo-issues-list');
      if (issuesEl) {
        issuesEl.innerHTML =
          audit.issues.length === 0
            ? `<p class="text-xs text-[#7DD8FF] font-semibold">All on-page SEO checks passed for ${esc(selectedRoute)}!</p>`
            : `<ul class="space-y-2">${audit.issues
                .map(
                  (iss) =>
                    `<li class="text-xs text-white/85 flex items-start gap-2"><span class="text-[#00B8FF] font-bold">•</span><span>${esc(iss)}</span></li>`
                )
                .join('')}</ul>`;
      }
    };

    if (pageForm) {
      bindSerpModeButtons();
      pageForm.querySelectorAll('input, textarea, select').forEach((el) => {
        el.addEventListener('input', refreshLiveSerp);
        el.addEventListener('change', refreshLiveSerp);
      });
      pageForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const cfg = getConfig();
        cfg.pages[selectedRoute] = Object.assign({}, cfg.pages[selectedRoute], {
          title: pageForm.title.value.trim(),
          description: pageForm.description.value.trim(),
          keywords: pageForm.keywords.value.trim(),
          robots: pageForm.robots.value,
          priority: pageForm.priority.value,
          ogTitle: pageForm.ogTitle.value.trim(),
          ogDescription: pageForm.ogDescription.value.trim(),
          ogImage: pageForm.ogImage.value.trim(),
        });

        const res = await publishConfigToCloud(cfg);
        if (res.mode === 'cloud' && res.ok) {
          toastIsError = false;
          toastNotice = `Published LIVE for "${selectedRoute}"! Meta tags & /sitemap.xml are updated globally — zero GitHub edits needed.`;
        } else if (res.mode === 'cloud' && !res.ok) {
          toastIsError = true;
          toastNotice = `Could not publish to cloud: ${res.error}`;
        } else {
          saveLocalOverrides(cfg);
          toastIsError = false;
          toastNotice = `Saved "${selectedRoute}" in Local Preview! On live Netlify hosting, clicking Save auto-publishes globally with zero GitHub edits.`;
        }
        rerenderCallback();
      });
    }

    const trackForm = document.getElementById('seo-tracking-form');
    if (trackForm) {
      trackForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const cfg = getConfig();
        cfg.siteUrl = trackForm.siteUrl.value.trim().replace(/\/+$/, '') || 'https://jexorasolutions.com';
        cfg.defaultOgImage = trackForm.defaultOgImage.value.trim();
        cfg.tracking.googleSiteVerification = trackForm.googleSiteVerification.value.trim();
        cfg.tracking.ga4MeasurementId = trackForm.ga4MeasurementId.value.trim();
        cfg.tracking.metaPixelId = trackForm.metaPixelId.value.trim();
        cfg.robotsRules = `User-agent: *\nAllow: /\nDisallow: /seo-admin\n\nSitemap: ${cfg.siteUrl}/sitemap.xml`;
        injectTracking(cfg);

        const res = await publishConfigToCloud(cfg);
        if (res.mode === 'cloud' && res.ok) {
          toastIsError = false;
          toastNotice = 'Tracking, GA4, Search Console & robots.txt published LIVE globally!';
        } else if (res.mode === 'cloud' && !res.ok) {
          toastIsError = true;
          toastNotice = `Could not publish tracking settings: ${res.error}`;
        } else {
          saveLocalOverrides(cfg);
          toastIsError = false;
          toastNotice = 'Tracking settings saved for Local Preview (auto-publishes live on Netlify).';
        }
        rerenderCallback();
      });
    }

    document.querySelectorAll('[data-copy-schema]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const idx = btn.getAttribute('data-copy-schema');
        const pre = document.getElementById(`seo-schema-block-${idx}`);
        if (pre && navigator.clipboard) {
          navigator.clipboard.writeText(pre.textContent).catch(() => {});
          btn.textContent = 'COPIED ✓';
          setTimeout(() => {
            btn.textContent = 'COPY JSON-LD';
          }, 1800);
        }
      });
    });

    const dlConfig = document.getElementById('seo-dl-config');
    if (dlConfig) {
      dlConfig.addEventListener('click', () => {
        downloadTextFile(
          'seo-config.json',
          JSON.stringify(getConfig(), null, 2) + '\n',
          'application/json'
        );
      });
    }

    const dlSitemap = document.getElementById('seo-dl-sitemap');
    if (dlSitemap) {
      dlSitemap.addEventListener('click', () => {
        downloadTextFile('sitemap.xml', generateSitemapXml(getConfig()), 'application/xml');
      });
    }

    const dlRobots = document.getElementById('seo-dl-robots');
    if (dlRobots) {
      dlRobots.addEventListener('click', () => {
        const cfg = getConfig();
        downloadTextFile(
          'robots.txt',
          (cfg.robotsRules || `User-agent: *\nAllow: /\nDisallow: /seo-admin\n\nSitemap: ${cfg.siteUrl}/sitemap.xml`) + '\n',
          'text/plain'
        );
      });
    }

    const passForm = document.getElementById('seo-passcode-form');
    if (passForm) {
      passForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const inp = document.getElementById('seo-new-passcode');
        const val = inp ? inp.value.trim() : '';
        if (val.length >= 4) {
          let handledInCloud = false;
          try {
            const res = await fetch('/api/seo-config', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'X-SEO-Passcode': getSessionPasscode(),
              },
              body: JSON.stringify({ action: 'change_passcode', newPasscode: val }),
            });
            const ct = res.headers.get('content-type') || '';
            if (ct.includes('application/json')) {
              handledInCloud = true;
              const data = await res.json();
              if (res.ok && data && data.ok) {
                try {
                  sessionStorage.setItem(SESSION_PASS_KEY, val);
                } catch (_) {}
                toastIsError = false;
                toastNotice = 'Cloud SEO Admin passcode updated securely!';
              } else {
                toastIsError = true;
                toastNotice = (data && data.error) || 'Failed to update passcode.';
              }
            }
          } catch (_) {}

          if (!handledInCloud) {
            try {
              localStorage.setItem(PASSCODE_KEY, val);
              sessionStorage.setItem(SESSION_PASS_KEY, val);
            } catch (_) {}
            toastIsError = false;
            toastNotice = 'Local admin passcode updated successfully!';
          }
          rerenderCallback();
        }
      });
    }

    const resetBtn = document.getElementById('seo-reset-drafts');
    if (resetBtn) {
      resetBtn.addEventListener('click', async () => {
        try {
          localStorage.removeItem(OVERRIDES_KEY);
        } catch (_) {}
        if (cloudAvailable) {
          try {
            const res = await fetch('/api/seo-config', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'X-SEO-Passcode': getSessionPasscode(),
              },
              body: JSON.stringify({ action: 'reset' }),
            });
            const ct = res.headers.get('content-type') || '';
            if (ct.includes('application/json') && res.ok) {
              baseConfig = null;
              toastIsError = false;
              toastNotice = 'Live cloud SEO config reset to default settings.';
              rerenderCallback();
              return;
            }
          } catch (_) {}
        }
        toastIsError = false;
        toastNotice = 'Local SEO drafts cleared — restored to default seo-config.json.';
        rerenderCallback();
      });
    }
  }

  function init(blogPosts, onLoaded) {
    blogPostsRef = Array.isArray(blogPosts) ? blogPosts : [];
    const loadStaticFallback = () =>
      fetch('/seo-config.json', { cache: 'no-cache' })
        .then((res) => (res.ok ? res.json() : null))
        .then((json) => {
          if (json && typeof json === 'object') {
            baseConfig = json;
            if (typeof onLoaded === 'function') onLoaded();
          }
        })
        .catch(() => {});

    fetch('/api/seo-config', { cache: 'no-store' })
      .then((res) => {
        const ct = res.headers.get('content-type') || '';
        if (!res.ok || !ct.includes('application/json')) return null;
        return res.json();
      })
      .then((data) => {
        if (data && data.ok) {
          cloudAvailable = true;
          if (data.config && typeof data.config === 'object') {
            baseConfig = data.config;
            if (typeof onLoaded === 'function') onLoaded();
          } else {
            loadStaticFallback();
          }
        } else {
          loadStaticFallback();
        }
      })
      .catch(() => {
        loadStaticFallback();
      });
  }

  window.JexoraSEO = {
    init,
    applyPageSEO,
    renderAdminPage,
    attachAdminEvents,
  };
})();
