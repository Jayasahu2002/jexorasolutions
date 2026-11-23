(function () {
  /* =========================================================================
     JEXORA SOLUTIONS — STANDALONE PRODUCTION RUNTIME (React 18 + Router)
     ========================================================================= */

  const HERO_SLIDES = [
    {
      id: 'slide-1',
      label: '01 — JEXORA SOLUTIONS',
      heading: "We Don't Just Build Brands. We Build Digital Empires.",
      description:
        'Turn your vision into a powerful digital presence. We combine creativity, technology and strategic marketing to take your business beyond boundaries.',
      image:
        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1920&q=85',
      fallbackImage: '/assets/hero-slide-ref.jpg',
    },
    {
      id: 'slide-2',
      label: '02 — JEXORA SOLUTIONS',
      heading: 'Smart Digital Strategies. Meaningful Business Growth.',
      description:
        'Build a powerful online presence with strategic marketing, creative content and technology-driven solutions.',
      image:
        'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1920&q=85',
      fallbackImage: '/assets/hero-slide-ref.jpg',
    },
    {
      id: 'slide-3',
      label: '03 — JEXORA SOLUTIONS',
      heading: 'Your Vision. Our Strategy. Measurable Growth.',
      description:
        'Transform your business with innovative digital solutions designed to reach the right audience.',
      image:
        'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1920&q=85',
      fallbackImage: '/assets/hero-slide-ref.jpg',
    },
  ];

  const SERVICES_DATA = [
    {
      id: 'seo-optimization',
      number: '01.',
      title: 'SEO Optimization',
      shortDesc:
        'Strengthen your search visibility with technical, on-page and content-led SEO.',
      iconName: 'search',
      whatsIncluded: [
        'Technical SEO audit',
        'Keyword research',
        'On-page optimization',
        'Content and link strategy',
      ],
      problemsAddressed:
        'Low organic visibility, limited search traffic and technical website issues.',
      whoBenefits:
        'Businesses seeking sustainable visibility in search engines.',
      keyDeliverables: [
        'SEO audit',
        'Keyword map',
        'Optimization log',
        'Performance reporting',
      ],
    },
    {
      id: 'aeo-geo-optimization',
      number: '02.',
      title: 'AEO & GEO Optimization',
      shortDesc:
        'Make your content clearer for answer engines and AI-powered search through Answer Engine and Generative Engine Optimization.',
      iconName: 'sparkles',
      whatsIncluded: [
        'Answer-focused content',
        'Structured data review',
        'Entity and topic optimization',
        'AI search visibility monitoring',
      ],
      problemsAddressed:
        'Content that is difficult for answer engines and AI-powered search to interpret.',
      whoBenefits:
        'Brands looking to improve discoverability across traditional and AI-powered search.',
      keyDeliverables: [
        'Content visibility audit',
        'Answer-focused content recommendations',
        'Structured data recommendations',
        'Visibility reporting',
      ],
    },
    {
      id: 'social-media-marketing',
      number: '03.',
      title: 'Social Media Marketing',
      shortDesc:
        'Build an active brand presence with planned social content and community management.',
      iconName: 'megaphone',
      whatsIncluded: [
        'Content planning',
        'Post design and copy',
        'Scheduling',
        'Community management',
      ],
      problemsAddressed:
        'Irregular posting, low engagement and unclear brand messaging.',
      whoBenefits:
        'Businesses seeking consistent, professionally managed social presence.',
      keyDeliverables: [
        'Content calendar',
        'Designed posts',
        'Engagement summary',
      ],
    },
    {
      id: 'google-ads-management',
      number: '04.',
      title: 'Google Ads Management',
      shortDesc:
        'Reach customers on Google with targeted campaigns, conversion tracking and ongoing optimization.',
      iconName: 'target',
      whatsIncluded: [
        'Campaign strategy',
        'Keyword and audience targeting',
        'Ad creation',
        'Conversion tracking',
      ],
      problemsAddressed:
        'Wasted advertising spend, poor targeting and unclear campaign performance.',
      whoBenefits:
        'Businesses investing in Google advertising for enquiries, sales and awareness.',
      keyDeliverables: ['Campaign setup', 'Ad copy', 'Conversion tracking'],
    },
    {
      id: 'meta-ads-whatsapp-advertising',
      number: '05.',
      title: 'Meta Ads & WhatsApp Advertising',
      shortDesc:
        'Connect with audiences through Facebook and Instagram campaigns and click-to-WhatsApp advertising.',
      iconName: 'share2',
      whatsIncluded: [
        'Meta campaign strategy',
        'Audience targeting',
        'Ad creatives',
        'Click-to-WhatsApp campaigns',
      ],
      problemsAddressed:
        'Low-quality enquiries, weak campaign engagement and friction in starting customer conversations.',
      whoBenefits:
        'Brands seeking leads and customer conversations through Meta platforms and WhatsApp.',
      keyDeliverables: [
        'Campaign structure',
        'Ad creatives',
        'WhatsApp enquiry flow',
        'Campaign reporting',
      ],
    },
    {
      id: 'website-landing-page-design',
      number: '06.',
      title: 'Website & Landing Page Design',
      shortDesc:
        'Professional websites and focused landing pages that turn visitors into enquiries.',
      iconName: 'layout',
      whatsIncluded: [
        'UI/UX and visual design',
        'Responsive development',
        'Landing page copy',
        'Form and CTA optimization',
      ],
      problemsAddressed:
        'Outdated websites, poor mobile experiences and confusing pages that fail to convert.',
      whoBenefits:
        'Businesses launching or refreshing their websites and campaign landing pages.',
      keyDeliverables: [
        'Design concepts',
        'Live website or landing page',
        'Enquiry forms',
        'Handover guide',
      ],
    },
    {
      id: 'video-reel-creation-editing',
      number: '07.',
      title: 'Video & Reel Creation and Editing',
      shortDesc:
        'Create engaging videos and reels with strong concepts, polished editing and platform-ready formats.',
      iconName: 'clapperboard',
      whatsIncluded: [
        'Video concepts and scripts',
        'Reel creation and editing',
        'Captions and motion text',
        'Music and pacing',
      ],
      problemsAddressed:
        'Limited video content or edits that lose audience attention.',
      whoBenefits:
        'Brands creating content for Instagram, YouTube and other video platforms.',
      keyDeliverables: [
        'Video content plan',
        'Edited videos and reels',
        'Platform-ready exports',
        'Thumbnail designs',
      ],
    },
    {
      id: 'graphic-design',
      number: '08.',
      title: 'Graphic Design',
      shortDesc:
        'Professional graphics that grab attention — social creatives, posters, banners and ad visuals made for your brand.',
      iconName: 'palette',
      whatsIncluded: [
        'Social media creatives',
        'Posters, banners and flyers',
        'Ad creatives and thumbnails',
        'Marketing and print collateral',
      ],
      problemsAddressed:
        'Weak or inconsistent visuals that fail to attract attention or match the brand.',
      whoBenefits:
        'Businesses that need a steady flow of professional, on-brand visuals.',
      keyDeliverables: [
        'Source and export files',
        'Platform-ready sizes',
        'Brand-consistent templates',
        'Revision rounds',
      ],
    },
    {
      id: 'brand-packaging-design-creation',
      number: '09.',
      title: 'Brand Packaging & Design Creation',
      shortDesc:
        'A complete brand identity with logo, packaging and product design that looks premium on shelf and online.',
      iconName: 'package',
      whatsIncluded: [
        'Logo and brand identity',
        'Product and box packaging design',
        'Label design',
        'Brand guidelines and mockups',
      ],
      problemsAddressed:
        'Unpolished branding or packaging that makes a good product look ordinary.',
      whoBenefits:
        'Product brands, startups and D2C businesses launching or refreshing their packaging.',
      keyDeliverables: [
        'Logo and identity files',
        'Packaging artwork and dielines',
        '3D mockups',
        'Brand guideline PDF',
      ],
    },
  ];

  const INDUSTRIES_DATA = [
    {
      id: 'astrology-spirituality',
      title: 'Astrology & Spirituality',
      description:
        'Content marketing, social media and websites that bring genuine consultation enquiries.',
      image: '/assets/ind-astrology.jpg',
      fallbackImage:
        'https://images.unsplash.com/photo-1515942661900-94b3d1972591?auto=format&fit=crop&w=800&q=85',
      alt: 'Astrology & Spirituality digital marketing services by JEXORA SOLUTIONS',
    },
    {
      id: 'restaurants-cafes',
      title: 'Restaurants & Cafés',
      description:
        'Local SEO, mouth-watering creatives and promotions that fill more tables.',
      image: '/assets/ind-restaurants.jpg',
      fallbackImage:
        'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=85',
      alt: 'Restaurants & Cafés marketing and local SEO by JEXORA SOLUTIONS',
    },
    {
      id: 'hotels-resorts',
      title: 'Hotels & Resorts',
      description:
        'Search visibility, stunning content and campaigns that drive direct bookings.',
      image: '/assets/ind-hotels.jpg',
      fallbackImage:
        'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=85',
      alt: 'Hotels & Resorts digital marketing and direct booking campaigns',
    },
    {
      id: 'travel-tourism',
      title: 'Travel & Tourism',
      description:
        'Destination content, paid campaigns and enquiry funnels for tour packages.',
      image: '/assets/ind-travel.jpg',
      fallbackImage:
        'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=85',
      alt: 'Travel & Tourism marketing and tour enquiry funnels',
    },
    {
      id: 'real-estate',
      title: 'Real Estate',
      description:
        'Property marketing, landing pages and targeted lead generation for buyers.',
      image: '/assets/ind-realestate.jpg',
      fallbackImage:
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=85',
      alt: 'Real Estate property marketing and lead generation',
    },
    {
      id: 'salons-beauty',
      title: 'Salons & Beauty',
      description:
        'Local visibility, reels and offer creatives focused on appointments.',
      image: '/assets/ind-salons.jpg',
      fallbackImage:
        'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=85',
      alt: 'Salons & Beauty marketing and appointment generation',
    },
    {
      id: 'yoga-wellness',
      title: 'Yoga & Wellness',
      description:
        'Brand awareness, calming social content and class or retreat enquiries.',
      image: '/assets/ind-yoga.jpg',
      fallbackImage:
        'https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=800&q=85',
      alt: 'Yoga & Wellness studio and retreat marketing',
    },
    {
      id: 'fashion-clothing',
      title: 'Fashion & Clothing',
      description:
        'Stylish creatives, influencer-ready content and campaigns that drive sales.',
      image: '/assets/ind-fashion.jpg',
      fallbackImage:
        'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=85',
      alt: 'Fashion & Clothing e-commerce and retail marketing',
    },
  ];

  const BUDGET_OPTIONS = [
    'Prefer not to say',
    'Under $500',
    '$500–$1,000',
    '$1,000–$3,000',
    '$3,000–$5,000',
    'Above $5,000',
  ];

  // Clean SVG Icons matching Lucide
  function getSvgIcon(name, cls = 'w-4 h-4 text-[#F5B800]') {
    const icons = {
      search: `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>`,
      sparkles: `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>`,
      megaphone: `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 11 18-5v12L3 14v-3z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/></svg>`,
      target: `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>`,
      share2: `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/></svg>`,
      layout: `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>`,
      clapperboard: `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z"/><path d="m6.2 5.3 3.1 3.9"/><path d="m12.4 3.4 3.1 4"/><path d="M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/></svg>`,
      palette: `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.9 0 1.6-.7 1.6-1.6 0-.4-.2-.8-.4-1.1-.3-.3-.4-.7-.4-1.1 0-.9.7-1.6 1.6-1.6H16c3.3 0 6-2.7 6-6 0-5.5-4.5-9.6-10-9.6Z"/></svg>`,
      package: `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>`,
      check: `<svg class="w-3.5 h-3.5 text-[#F5B800] shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>`,
      compass: `<svg class="w-5 h-5 text-[#F5B800]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>`,
      users: `<svg class="w-5 h-5 text-[#F5B800]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
      trending: `<svg class="w-5 h-5 text-[#F5B800]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>`,
      mapPin: `<svg class="w-3.5 h-3.5 text-[#F5B800] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`,
      whatsapp: `<svg class="w-3.5 h-3.5 text-[#F5B800] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>`,
      facebook: `<svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>`,
      instagram: `<svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>`,
      linkedin: `<svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>`,
    };
    return icons[name] || icons.search;
  }

  function getLogoSvg() {
    return `
      <svg width="68" height="48" viewBox="0 0 136 96" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="JEXORA SOLUTIONS Logo">
        <rect x="64" y="16" width="5.5" height="11" rx="1" fill="#172653" />
        <rect x="73" y="10" width="5.5" height="17" rx="1" fill="#172653" />
        <rect x="82" y="3" width="6" height="24" rx="1" fill="#172653" />
        <path d="M46 25H63V48C63 59.5 55.2 66 44.5 66C35.2 66 29 60.2 28.5 51.5H40C40.3 55 42 56.8 44.8 56.8C48.2 56.8 50.5 54.3 50.5 48.5V34H46V25Z" fill="#172653" />
        <path d="M84 27H104V36H83.5C79.5 36 77.5 37.6 77.5 40C77.5 42.3 79.4 43.5 84.5 44.2L93 45.4C102.5 46.7 107 50.8 107 57.8C107 65.5 100.2 70 88.5 70H65V60.8H88C92.5 60.8 94.8 59.2 94.8 56.6C94.8 54.2 92.8 52.9 87.5 52.1L79.5 50.9C70.2 49.5 65.5 45.2 65.5 38.5C65.5 31.2 72 27 84 27Z" fill="#F5B800" />
        <path d="M24 50C44 43 68 32 95 16L89 14L103 12L98 24L96 19.5C71 35 46 46 24 50Z" fill="#F5B800" />
        <text x="68" y="83" text-anchor="middle" fill="#172653" font-family="Poppins, sans-serif" font-weight="800" font-size="16.5" letter-spacing="1.5">JEXORA</text>
        <text x="68" y="93.5" text-anchor="middle" fill="#2453A6" font-family="Poppins, sans-serif" font-weight="600" font-size="6.8" letter-spacing="3.4">SOLUTIONS</text>
      </svg>
    `;
  }

  let currentSlide = 0;
  let slideTimer = null;
  let mobileMenuOpen = false;

  function updateSEO(pathname) {
    const seoMap = {
      '/': {
        title:
          'JEXORA SOLUTIONS | Where Technology Meets Possibilities — International Digital Marketing Agency',
        desc: "We Don't Just Build Brands. We Build Digital Empires. JEXORA SOLUTIONS is an international digital marketing agency helping startups, SMEs and established businesses grow online.",
      },
      '/about': {
        title:
          'About Us | JEXORA SOLUTIONS — A Strategic Partner for Digital Growth',
        desc: 'Meet JEXORA SOLUTIONS and founder Jigyasa Sahu. We help businesses strengthen their online presence, reach relevant audiences and grow their brands.',
      },
      '/services': {
        title:
          'Our Services | JEXORA SOLUTIONS — Everything Your Brand Needs to Grow Online',
        desc: 'Nine specialist digital marketing services: SEO Optimization, AEO & GEO Optimization, Social Media Marketing, Google Ads, Meta Ads & WhatsApp, Web Design, Video & Reels, Graphic Design, and Brand Packaging.',
      },
      '/industries': {
        title:
          'Industries We Serve | JEXORA SOLUTIONS — Marketing Adapted to Your Industry',
        desc: 'We shape channels, messaging and creative around how your customers actually discover and choose businesses like yours across 8 key industries.',
      },
      '/contact': {
        title:
          "Contact JEXORA SOLUTIONS | Let's Discuss Your Next Growth Opportunity",
        desc: 'Share a few details and our team will get back to you about your free consultation.',
      },
    };
    const meta = seoMap[pathname] || seoMap['/'];
    document.title = meta.title;
    const descEl = document.querySelector('meta[name="description"]');
    if (descEl) descEl.setAttribute('content', meta.desc);
    const canonEl = document.querySelector('link[rel="canonical"]');
    if (canonEl)
      canonEl.setAttribute('href', 'https://www.jexorasolutions.com' + pathname);
  }

  function renderHeader(pathname) {
    const navItems = [
      { label: 'Home', path: '/' },
      { label: 'About Us', path: '/about' },
      { label: 'Services', path: '/services' },
      { label: 'Industries', path: '/industries' },
      { label: 'Contact', path: '/contact' },
    ];

    return `
      <header class="sticky top-0 z-50 w-full">
        <!-- Thin Golden Top Border -->
        <div class="h-[3px] w-full bg-[#F5B800]"></div>

        <!-- Top Information Bar -->
        <div class="bg-[#2453A6] text-white text-xs border-b border-white/10">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-9 flex items-center justify-between">
            <div class="flex items-center space-x-4 sm:space-x-6">
              <div class="flex items-center space-x-1.5">
                ${getSvgIcon('mapPin')}
                <span class="font-medium tracking-wide">India</span>
                <span class="hidden md:inline text-white/50">|</span>
                <span class="hidden md:inline text-[11px] text-white/90">Serving India, USA, Canada, UK &amp; Australia</span>
              </div>
              <a href="https://wa.me/917427837194?text=Hello%20JEXORA%20SOLUTIONS" target="_blank" rel="noopener noreferrer" class="inline-flex items-center space-x-1.5 hover:text-[#F5B800] transition-colors font-medium">
                ${getSvgIcon('whatsapp')}
                <span>WhatsApp Chat</span>
              </a>
            </div>
            <div class="flex items-center space-x-3">
              <span class="hidden sm:inline text-[11px] text-white/80">www.jexorasolutions.com</span>
              <div class="flex items-center space-x-2">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" class="w-6 h-6 rounded-full bg-white/10 hover:bg-[#F5B800]/20 flex items-center justify-center text-[#F5B800] transition-colors">${getSvgIcon('facebook')}</a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" class="w-6 h-6 rounded-full bg-white/10 hover:bg-[#F5B800]/20 flex items-center justify-center text-[#F5B800] transition-colors">${getSvgIcon('instagram')}</a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" class="w-6 h-6 rounded-full bg-white/10 hover:bg-[#F5B800]/20 flex items-center justify-center text-[#F5B800] transition-colors">${getSvgIcon('linkedin')}</a>
              </div>
            </div>
          </div>
        </div>

        <!-- Main White Navigation Bar -->
        <div class="bg-white/95 backdrop-blur-md shadow-sm border-b border-[#D5E0EF]/60">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
            <a href="/" data-link class="flex items-center focus:outline-none">
              ${getLogoSvg()}
            </a>

            <nav class="hidden md:flex items-center space-x-8" aria-label="Main Navigation">
              ${navItems
                .map((item) => {
                  const isActive = pathname === item.path;
                  return `
                    <a href="${item.path}" data-link class="relative py-2 text-[14px] font-medium transition-colors duration-200 ${
                      isActive
                        ? 'text-[#2453A6] font-semibold'
                        : 'text-[#172653] hover:text-[#2453A6]'
                    }">
                      <span>${item.label}</span>
                      ${
                        isActive
                          ? '<span class="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#F5B800] rounded-full"></span>'
                          : ''
                      }
                    </a>
                  `;
                })
                .join('')}
            </nav>

            <div class="hidden md:flex items-center">
              <a href="/contact" data-link class="inline-flex items-center justify-center bg-[#1D58C8] hover:bg-[#2453A6] text-white text-[13px] font-semibold px-5 py-2.5 rounded-md shadow-sm transition-all duration-200">
                Get a Free Consultation
              </a>
            </div>

            <div class="md:hidden flex items-center">
              <button type="button" id="mobile-menu-btn" aria-label="Toggle Menu" class="p-2 rounded-md text-[#172653] hover:text-[#2453A6] hover:bg-[#F5F8FC]">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  ${
                    mobileMenuOpen
                      ? '<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>'
                      : '<path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/>'
                  }
                </svg>
              </button>
            </div>
          </div>

          <!-- Mobile Drawer -->
          <div id="mobile-drawer" class="${
            mobileMenuOpen ? 'block' : 'hidden'
          } md:hidden bg-white border-t border-[#D5E0EF] px-4 pt-3 pb-6 space-y-3 shadow-lg">
            <nav class="flex flex-col space-y-1">
              ${navItems
                .map((item) => {
                  const isActive = pathname === item.path;
                  return `
                    <a href="${item.path}" data-link class="px-3 py-2.5 rounded-md text-sm font-medium flex items-center justify-between ${
                      isActive
                        ? 'bg-[#F5F8FC] text-[#2453A6] font-semibold border-l-4 border-[#F5B800]'
                        : 'text-[#172653] hover:bg-[#F5F8FC]'
                    }">${item.label}</a>
                  `;
                })
                .join('')}
            </nav>
            <div class="pt-2">
              <a href="/contact" data-link class="w-full inline-flex items-center justify-center bg-[#1D58C8] hover:bg-[#2453A6] text-white text-sm font-semibold px-5 py-3 rounded-md shadow-sm">
                Get a Free Consultation
              </a>
            </div>
          </div>
        </div>
      </header>
    `;
  }

  function renderPageBanner(breadcrumbCurrent, goldenLabel, heading, description) {
    return `
      <section class="bg-gradient-to-br from-[#193B7A] via-[#214B9C] to-[#2453A6] text-white py-14 sm:py-16 lg:py-20 border-b border-white/10">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="max-w-3xl space-y-3">
            ${
              breadcrumbCurrent
                ? `<nav aria-label="Breadcrumb" class="flex items-center space-x-1.5 text-xs font-medium">
                    <a href="/" data-link class="text-white/80 hover:text-white transition-colors">Home</a>
                    <span class="text-white/60">/</span>
                    <span class="text-[#F5B800] font-semibold">${breadcrumbCurrent}</span>
                  </nav>`
                : ''
            }
            ${
              goldenLabel
                ? `<p class="text-[11px] font-bold uppercase tracking-[0.18em] text-[#F5B800] pt-1">${goldenLabel}</p>`
                : ''
            }
            <h1 class="text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight text-white leading-[1.18]">${heading}</h1>
            <p class="text-sm sm:text-base text-white/90 leading-relaxed pt-1 max-w-2xl">${description}</p>
          </div>
        </div>
      </section>
    `;
  }

  function renderCTASection() {
    return `
      <section class="bg-gradient-to-r from-[#1A3C7E] via-[#2453A6] to-[#1D4897] text-white py-16 sm:py-20">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 class="text-2xl sm:text-3xl lg:text-[34px] font-extrabold tracking-tight text-white">
            Ready to Grow Your Business Online?
          </h2>
          <p class="text-xs sm:text-sm text-white/90 max-w-xl mx-auto leading-relaxed">
            Let's create a digital marketing strategy aligned with your brand,
            audience, and business goals.
          </p>
          <div class="pt-2">
            <a href="/contact" data-link class="inline-flex items-center justify-center bg-[#F5B800] hover:bg-[#E0A800] text-[#172653] text-xs sm:text-sm font-bold px-7 py-3.5 rounded-md shadow-md hover:shadow-lg transition-all duration-200">
              Let's Talk About Your Project
            </a>
          </div>
        </div>
      </section>
    `;
  }

  function renderFooter() {
    return `
      <footer class="bg-[#172653] text-white border-t border-white/10">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
            <!-- Col 1 -->
            <div class="lg:col-span-3 space-y-4">
              <a href="/" data-link class="inline-block">
                <h2 class="text-lg font-extrabold tracking-wider text-white uppercase">JEXORA SOLUTIONS</h2>
              </a>
              <p class="text-[#F5B800] text-xs font-semibold leading-relaxed">
                Where Technology Meets<br/>Possibilities.
              </p>
              <p class="text-white/80 text-xs leading-relaxed pr-2">
                An international digital marketing agency helping startups, SMEs and established businesses strengthen their online presence and grow.
              </p>
            </div>

            <!-- Col 2: QUICK LINKS -->
            <div class="lg:col-span-2 space-y-4">
              <h3 class="text-[11px] font-bold uppercase tracking-widest text-[#F5B800]">QUICK LINKS</h3>
              <ul class="space-y-2.5 text-xs">
                <li><a href="/" data-link class="text-white/85 hover:text-[#F5B800] transition-colors">Home</a></li>
                <li><a href="/about" data-link class="text-white/85 hover:text-[#F5B800] transition-colors">About Us</a></li>
                <li><a href="/services" data-link class="text-white/85 hover:text-[#F5B800] transition-colors">Services</a></li>
                <li><a href="/industries" data-link class="text-white/85 hover:text-[#F5B800] transition-colors">Industries</a></li>
                <li><a href="/contact" data-link class="text-white/85 hover:text-[#F5B800] transition-colors">Contact</a></li>
              </ul>
            </div>

            <!-- Col 3: SERVICES -->
            <div class="lg:col-span-4 space-y-4">
              <h3 class="text-[11px] font-bold uppercase tracking-widest text-[#F5B800]">SERVICES</h3>
              <ul class="space-y-2.5 text-xs">
                ${SERVICES_DATA.map(
                  (s) =>
                    `<li><a href="/services#${s.id}" data-link class="text-white/85 hover:text-[#F5B800] transition-colors">${s.title}</a></li>`
                ).join('')}
              </ul>
            </div>

            <!-- Col 4: INDUSTRIES + CONTACT + FOLLOW US -->
            <div class="lg:col-span-3 space-y-6">
              <div class="space-y-4">
                <h3 class="text-[11px] font-bold uppercase tracking-widest text-[#F5B800]">INDUSTRIES</h3>
                <ul class="space-y-2 text-xs">
                  ${INDUSTRIES_DATA.map(
                    (ind) =>
                      `<li><a href="/industries#${ind.id}" data-link class="text-white/85 hover:text-[#F5B800] transition-colors">${ind.title}</a></li>`
                  ).join('')}
                </ul>
              </div>

              <div class="space-y-2 pt-1">
                <h3 class="text-[11px] font-bold uppercase tracking-widest text-[#F5B800]">CONTACT</h3>
                <div>
                  <a href="/contact" data-link class="inline-flex items-center text-xs text-white/90 hover:text-[#F5B800] font-medium transition-colors">
                    <span>Send us an enquiry</span>
                    <span class="ml-1.5">→</span>
                  </a>
                </div>
              </div>

              <div class="space-y-2.5">
                <h3 class="text-[11px] font-bold uppercase tracking-widest text-[#F5B800]">FOLLOW US</h3>
                <div class="flex items-center space-x-3">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" class="w-8 h-8 rounded-full border border-[#F5B800]/50 hover:border-[#F5B800] flex items-center justify-center text-[#F5B800] transition-all">${getSvgIcon('facebook')}</a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" class="w-8 h-8 rounded-full border border-[#F5B800]/50 hover:border-[#F5B800] flex items-center justify-center text-[#F5B800] transition-all">${getSvgIcon('instagram')}</a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" class="w-8 h-8 rounded-full border border-[#F5B800]/50 hover:border-[#F5B800] flex items-center justify-center text-[#F5B800] transition-all">${getSvgIcon('linkedin')}</a>
                </div>
              </div>
            </div>
          </div>

          <div class="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-[11px] text-white/70 gap-4">
            <p>© 2026 JEXORA SOLUTIONS. All rights reserved.</p>
            <div class="flex items-center space-x-6">
              <button type="button" data-modal="privacy" class="hover:text-[#F5B800] transition-colors">Privacy Policy</button>
              <button type="button" data-modal="terms" class="hover:text-[#F5B800] transition-colors">Terms and Conditions</button>
            </div>
          </div>
        </div>
      </footer>
    `;
  }

  function renderHomePage() {
    const slide = HERO_SLIDES[currentSlide];
    return `
      <main>
        <!-- Hero Slider -->
        <section id="hero-slider" class="relative w-full min-h-[480px] sm:min-h-[540px] lg:min-h-[580px] bg-[#172653] text-white overflow-hidden flex items-center">
          <div class="absolute inset-0 z-0">
            <img id="hero-slide-img" src="${slide.image}" onerror="this.onerror=null;this.src='${slide.fallbackImage}'" alt="${slide.heading}" class="w-full h-full object-cover object-center transition-all duration-700" />
            <div class="absolute inset-0 bg-gradient-to-r from-[#0E1836]/95 via-[#172653]/85 to-[#172653]/65"></div>
          </div>

          <div class="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 sm:py-20 lg:py-24">
            <div class="max-w-2xl space-y-5">
              <p id="hero-slide-label" class="text-[11px] font-bold uppercase tracking-[0.22em] text-white/80">${slide.label}</p>
              <h1 id="hero-slide-heading" class="text-3xl sm:text-4xl lg:text-[46px] font-extrabold tracking-tight text-white leading-[1.15]">${slide.heading}</h1>
              <p id="hero-slide-desc" class="text-sm sm:text-base text-white/85 leading-relaxed max-w-xl">${slide.description}</p>

              <div class="pt-2 flex flex-wrap items-center gap-3.5">
                <a href="/services" data-link class="inline-flex items-center justify-center bg-[#1D58C8] hover:bg-[#2453A6] text-white text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded-full shadow-md transition-all">
                  DISCOVER JEXORA
                </a>
                <a href="/contact" data-link class="inline-flex items-center justify-center bg-transparent hover:bg-white/10 text-white border border-white/60 text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded-full transition-all">
                  LET'S TALK BUSINESS
                </a>
              </div>

              <!-- Indicators & Arrows -->
              <div class="pt-8 flex items-center space-x-5">
                <div class="flex items-center space-x-2">
                  ${HERO_SLIDES.map(
                    (s, i) => `
                    <button type="button" data-slide-idx="${i}" aria-label="Slide ${
                      i + 1
                    }" class="h-1 rounded-full transition-all duration-300 ${
                      i === currentSlide
                        ? 'w-8 bg-white'
                        : 'w-3 bg-white/35 hover:bg-white/60'
                    }"></button>
                  `
                  ).join('')}
                </div>
                <div class="flex items-center space-x-2">
                  <button type="button" id="slide-prev" aria-label="Previous slide" class="w-8 h-8 rounded-full border border-white/40 hover:border-white hover:bg-white/10 flex items-center justify-center text-white transition-colors">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="m15 18-6-6 6-6"/></svg>
                  </button>
                  <button type="button" id="slide-next" aria-label="Next slide" class="w-8 h-8 rounded-full border border-white/40 hover:border-white hover:bg-white/10 flex items-center justify-center text-white transition-colors">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="m9 18 6-6-6-6"/></svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- About Preview Section -->
        <section class="py-16 sm:py-20 lg:py-24 bg-[#F5F8FC]">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              <div class="lg:col-span-6">
                <div class="relative rounded-2xl overflow-hidden shadow-lg border border-[#D5E0EF] bg-white">
                  <img src="/assets/corporate-meeting-ref.jpg" onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=85'" alt="JEXORA SOLUTIONS Strategy Meeting" class="w-full h-auto object-cover aspect-[4/3]" />
                </div>
              </div>
              <div class="lg:col-span-6 space-y-5">
                <p class="text-[11px] font-bold uppercase tracking-[0.18em] text-[#F5B800]">ABOUT OUR AGENCY</p>
                <h2 class="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#172653] leading-[1.2]">
                  Building meaningful digital experiences for brands.
                </h2>
                <p class="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                  We are an international digital marketing agency helping startups, SMEs and established businesses strengthen their online presence through strategy, creativity and measurable results.
                </p>
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-3 pb-2">
                  <div class="space-y-2">
                    ${getSvgIcon('compass')}
                    <h3 class="text-xs font-bold text-[#172653] leading-snug">Strategic Brand Growth</h3>
                  </div>
                  <div class="space-y-2">
                    ${getSvgIcon('users')}
                    <h3 class="text-xs font-bold text-[#172653] leading-snug">Audience-Focused Marketing</h3>
                  </div>
                  <div class="space-y-2">
                    ${getSvgIcon('trending')}
                    <h3 class="text-xs font-bold text-[#172653] leading-snug">Performance-Driven Campaigns</h3>
                  </div>
                </div>
                <div class="pt-2">
                  <a href="/about" data-link class="inline-flex items-center justify-center bg-[#1D58C8] hover:bg-[#2453A6] text-white text-xs font-semibold px-6 py-3 rounded-full shadow-sm transition-all">
                    More About Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Services Preview (9 Cards, 4 per row on desktop) -->
        <section class="py-16 sm:py-20 lg:py-24 bg-white border-t border-[#D5E0EF]/60">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center max-w-2xl mx-auto space-y-2.5 mb-12">
              <p class="text-[11px] font-bold uppercase tracking-[0.18em] text-[#F5B800]">OUR SERVICES</p>
              <h2 class="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#172653] leading-tight">
                Everything Your Brand Needs to Grow Online
              </h2>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              ${SERVICES_DATA.map(
                (service) => `
                <div class="bg-white border border-[#D5E0EF] rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between h-full group">
                  <div class="space-y-3">
                    <span class="text-xs font-bold text-[#F5B800] block">${service.number}</span>
                    <h3 class="text-base font-bold text-[#172653] group-hover:text-[#2453A6] transition-colors leading-snug">${service.title}</h3>
                    <p class="text-xs text-[#64748B] leading-relaxed">${service.shortDesc}</p>
                  </div>
                  <div class="pt-5 mt-2 flex items-center justify-between">
                    <a href="/services#${service.id}" data-link aria-label="${service.title}" class="w-9 h-9 rounded-full bg-[#1D58C8] group-hover:bg-[#2453A6] flex items-center justify-center shadow-sm transition-colors">
                      ${getSvgIcon(service.iconName, 'w-4 h-4 text-[#F5B800]')}
                    </a>
                    <a href="/contact?service=${encodeURIComponent(
                      service.title
                    )}" data-link class="text-[11px] font-semibold text-[#2453A6] hover:text-[#172653]">
                      Enquire →
                    </a>
                  </div>
                </div>
              `
              ).join('')}
            </div>
          </div>
        </section>

        <!-- Industries Preview (8 Cards, 4 per row on desktop) -->
        <section class="py-16 sm:py-20 lg:py-24 bg-[#F5F8FC] border-t border-[#D5E0EF]/60">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center max-w-2xl mx-auto space-y-2.5 mb-12">
              <p class="text-[11px] font-bold uppercase tracking-[0.18em] text-[#F5B800]">INDUSTRIES WE SERVE</p>
              <h2 class="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#172653] leading-tight">
                Marketing Adapted to Your Industry
              </h2>
              <p class="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                We shape channels, messaging and creative around how your customers actually discover and choose businesses like yours.
              </p>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              ${INDUSTRIES_DATA.map((ind) => renderIndustryCard(ind)).join('')}
            </div>
          </div>
        </section>

        ${renderCTASection()}
      </main>
    `;
  }

  function renderIndustryCard(industry) {
    return `
      <article id="${industry.id}" class="bg-white border border-[#D5E0EF] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between group h-full">
        <div>
          <div class="relative h-44 sm:h-48 w-full overflow-hidden bg-[#172653]/5">
            <img src="${industry.fallbackImage}" onerror="this.onerror=null;this.src='${industry.image}'" alt="${industry.alt}" loading="lazy" class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" />
          </div>
          <div class="p-5 pb-3 space-y-2">
            <h3 class="text-base font-bold text-[#172653] group-hover:text-[#2453A6] transition-colors">${industry.title}</h3>
            <p class="text-xs text-[#64748B] leading-relaxed">${industry.description}</p>
          </div>
        </div>
        <div class="px-5 pb-5 pt-2">
          <a href="/contact?industry=${encodeURIComponent(
            industry.title
          )}" data-link class="inline-flex items-center justify-center bg-[#F5B800] hover:bg-[#E0A800] text-[#172653] text-[11px] font-bold px-4 py-2 rounded transition-colors shadow-sm">
            Explore More
          </a>
        </div>
      </article>
    `;
  }

  function renderAboutPage() {
    return `
      <main>
        ${renderPageBanner(
          'About Us',
          'ABOUT US',
          'A Strategic Partner for Digital Growth',
          'We help businesses strengthen their online presence, reach relevant audiences and grow their brands.'
        )}

        <!-- Who We Are Section -->
        <section class="py-16 sm:py-20 lg:py-24 bg-white">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              <div class="lg:col-span-6">
                <div class="rounded-xl overflow-hidden shadow-md border border-[#D5E0EF] bg-[#F5F8FC]">
                  <img src="/assets/corporate-meeting-ref.jpg" onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=85'" alt="JEXORA SOLUTIONS Team" class="w-full h-auto object-cover aspect-[4/3]" />
                </div>
              </div>
              <div class="lg:col-span-6 space-y-4">
                <p class="text-[11px] font-bold uppercase tracking-[0.18em] text-[#F5B800]">WHO WE ARE</p>
                <h2 class="text-2xl sm:text-3xl font-extrabold text-[#172653] leading-snug">
                  Creative minds, strategic thinking
                </h2>
                <p class="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                  JEXORA SOLUTIONS is a digital marketing agency working with startups, small and medium-sized businesses, entrepreneurs and established companies. We bring together strategy, design, content and technology to help brands show up with clarity and confidence online.
                </p>
                <div class="pt-3 space-y-2">
                  <h3 class="text-sm sm:text-base font-bold text-[#2453A6]">Our Approach</h3>
                  <p class="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                    We start by listening. Then we build a focused plan, execute it carefully and keep improving based on what the data shows.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Vision and Mission Section -->
        <section class="bg-gradient-to-r from-[#1A3D82] via-[#2453A6] to-[#1D4897] text-white py-14 sm:py-16 lg:py-20">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
              <div class="border-l-2 border-[#F5B800] pl-5 sm:pl-7 space-y-2.5">
                <p class="text-[11px] font-bold uppercase tracking-[0.18em] text-[#F5B800]">OUR VISION</p>
                <p class="text-sm sm:text-base font-medium text-white leading-relaxed">
                  "To be a creative and digital power that goes beyond launching brands—shaping an unforgettable legacy in the market and the hearts of people for generations."
                </p>
              </div>
              <div class="border-l-2 border-[#F5B800] pl-5 sm:pl-7 space-y-2.5">
                <p class="text-[11px] font-bold uppercase tracking-[0.18em] text-[#F5B800]">OUR MISSION</p>
                <p class="text-sm sm:text-base font-medium text-white leading-relaxed">
                  "To empower every vision and brand with unmatched creativity, strategic execution, and bold content, transforming them into industry leaders and icons in their industry."
                </p>
              </div>
            </div>
          </div>
        </section>

        <!-- Founder Section -->
        <section class="py-16 sm:py-20 lg:py-24 bg-[#F5F8FC]">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              <div class="lg:col-span-5 flex justify-center lg:justify-start">
                <div class="relative max-w-sm w-full">
                  <div class="absolute -bottom-3 -right-3 inset-y-3 inset-x-3 border-2 border-[#F5B800] rounded-lg pointer-events-none"></div>
                  <div class="relative rounded-lg overflow-hidden shadow-lg bg-white border border-[#D5E0EF]">
                    <img src="/assets/founder-jigyasa-sahu.jpg" alt="Jigyasa Sahu — Founder of JEXORA SOLUTIONS" class="w-full h-auto object-cover" />
                  </div>
                </div>
              </div>
              <div class="lg:col-span-7 space-y-4">
                <p class="text-[11px] font-bold uppercase tracking-[0.18em] text-[#F5B800]">FOUNDER</p>
                <h2 class="text-2xl sm:text-3xl font-extrabold text-[#172653] leading-snug">
                  Meet the Founder — Jigyasa Sahu
                </h2>
                <div class="space-y-3.5 text-xs sm:text-sm text-[#64748B] leading-relaxed">
                  <p>
                    Jigyasa Sahu is the founder of JEXORA SOLUTIONS and a digital marketing professional passionate about creativity, strategic growth, and brand building.
                  </p>
                  <p>
                    She helps businesses strengthen their digital presence through strategic marketing, creative content, website development, search engine optimization and lead generation.
                  </p>
                  <p>
                    Her vision is to help brands grow beyond boundaries, connect meaningfully with their audiences, and build a powerful, lasting presence in the digital world.
                  </p>
                </div>
                <div class="pt-2">
                  <p class="text-xs sm:text-sm font-bold text-[#2453A6]">Jigyasa Sahu &bull; Founder</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        ${renderCTASection()}
      </main>
    `;
  }

  function renderServicesPage() {
    return `
      <main>
        ${renderPageBanner(
          'Services',
          'OUR SERVICES',
          'Everything Your Brand Needs to Grow Online',
          'Nine specialist services, combined into one plan that fits your goals. Organic social and paid advertising are offered as separate services.'
        )}

        <section class="py-12 sm:py-16 bg-[#F5F8FC]">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <!-- Quick Filter Pills -->
            <div class="flex flex-wrap items-center gap-2">
              ${SERVICES_DATA.map(
                (s) => `
                <a href="#${s.id}" class="inline-flex items-center bg-white hover:bg-[#2453A6] text-[#172653] hover:text-white border border-[#D5E0EF] rounded-md px-3.5 py-1.5 text-[11px] font-medium transition-colors shadow-sm">
                  ${s.title}
                </a>
              `
              ).join('')}
            </div>

            <!-- Nine Detailed Service Cards -->
            <div class="space-y-6">
              ${SERVICES_DATA.map(
                (service) => `
                <article id="${service.id}" class="scroll-mt-28 bg-white border border-[#D5E0EF] rounded-xl p-6 sm:p-8 shadow-sm">
                  <div class="flex items-start space-x-4 pb-6 border-b border-[#D5E0EF]/60">
                    <div class="w-11 h-11 rounded-full bg-[#1D58C8] flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                      ${getSvgIcon(service.iconName, 'w-5 h-5 text-[#F5B800]')}
                    </div>
                    <div class="space-y-1">
                      <h2 class="text-lg sm:text-xl font-bold text-[#172653]">${service.title}</h2>
                      <p class="text-xs sm:text-sm text-[#64748B] leading-relaxed">${service.shortDesc}</p>
                    </div>
                  </div>

                  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
                    <div class="space-y-2.5">
                      <h3 class="text-[11px] font-bold uppercase tracking-wider text-[#F5B800]">WHAT'S INCLUDED</h3>
                      <ul class="space-y-2">
                        ${service.whatsIncluded
                          .map(
                            (item) => `
                          <li class="flex items-start space-x-2 text-xs text-[#172653]">
                            ${getSvgIcon('check')}
                            <span>${item}</span>
                          </li>
                        `
                          )
                          .join('')}
                      </ul>
                    </div>

                    <div class="space-y-2.5">
                      <h3 class="text-[11px] font-bold uppercase tracking-wider text-[#F5B800]">PROBLEMS IT ADDRESSES</h3>
                      <p class="text-xs text-[#64748B] leading-relaxed">${service.problemsAddressed}</p>
                    </div>

                    <div class="space-y-2.5">
                      <h3 class="text-[11px] font-bold uppercase tracking-wider text-[#F5B800]">WHO BENEFITS</h3>
                      <p class="text-xs text-[#64748B] leading-relaxed">${service.whoBenefits}</p>
                    </div>

                    <div class="space-y-2.5">
                      <h3 class="text-[11px] font-bold uppercase tracking-wider text-[#F5B800]">KEY DELIVERABLES</h3>
                      <ul class="space-y-2">
                        ${service.keyDeliverables
                          .map(
                            (item) => `
                          <li class="flex items-start space-x-2 text-xs text-[#172653]">
                            ${getSvgIcon('check')}
                            <span>${item}</span>
                          </li>
                        `
                          )
                          .join('')}
                      </ul>
                    </div>
                  </div>

                  <div class="pt-6 mt-2">
                    <a href="/contact?service=${encodeURIComponent(
                      service.title
                    )}" data-link class="inline-flex items-center justify-center bg-[#1D58C8] hover:bg-[#2453A6] text-white text-xs font-semibold px-5 py-2.5 rounded-md shadow-sm transition-colors">
                      Enquire about this service
                    </a>
                  </div>
                </article>
              `
              ).join('')}
            </div>
          </div>
        </section>

        ${renderCTASection()}
      </main>
    `;
  }

  function renderIndustriesPage() {
    return `
      <main>
        ${renderPageBanner(
          'Industries',
          'INDUSTRIES',
          'Marketing Adapted to Your Industry',
          'We shape channels, messaging and creative around how your customers actually discover and choose businesses like yours.'
        )}

        <section class="py-16 sm:py-20 lg:py-24 bg-[#F5F8FC]">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              ${INDUSTRIES_DATA.map((ind) => renderIndustryCard(ind)).join('')}
            </div>
          </div>
        </section>

        ${renderCTASection()}
      </main>
    `;
  }

  function renderContactPage() {
    const params = new URLSearchParams(window.location.search);
    const prefilledService = params.get('service') || '';
    const prefilledIndustry = params.get('industry') || '';
    const defaultDetails = prefilledIndustry
      ? `Interested in digital marketing strategies tailored for ${prefilledIndustry}.`
      : '';

    return `
      <main>
        ${renderPageBanner(
          'Contact',
          'CONTACT',
          "Let's Discuss Your Next Growth Opportunity",
          'Share a few details and our team will get back to you about your free consultation.'
        )}

        <section class="py-16 sm:py-20 lg:py-24 bg-[#F5F8FC]">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div id="contact-card-container" class="bg-white border border-[#D5E0EF] rounded-xl p-6 sm:p-10 shadow-lg max-w-2xl mx-auto">
              <form id="jexora-contact-form" novalidate class="space-y-5">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label for="fullName" class="block text-xs font-semibold text-[#172653] mb-1.5">Full Name <span class="text-[#2453A6]">*</span></label>
                    <input id="fullName" name="fullName" type="text" required class="w-full rounded-md border border-[#D5E0EF] bg-white px-3.5 py-2.5 text-xs text-[#172653] focus:border-[#2453A6] focus:outline-none" />
                    <p data-err="fullName" class="hidden mt-1 text-[11px] text-[#172653] font-medium"></p>
                  </div>
                  <div>
                    <label for="businessEmail" class="block text-xs font-semibold text-[#172653] mb-1.5">Business Email <span class="text-[#2453A6]">*</span></label>
                    <input id="businessEmail" name="businessEmail" type="email" required class="w-full rounded-md border border-[#D5E0EF] bg-white px-3.5 py-2.5 text-xs text-[#172653] focus:border-[#2453A6] focus:outline-none" />
                    <p data-err="businessEmail" class="hidden mt-1 text-[11px] text-[#172653] font-medium"></p>
                  </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label for="companyName" class="block text-xs font-semibold text-[#172653] mb-1.5">Company or Brand Name <span class="text-[#2453A6]">*</span></label>
                    <input id="companyName" name="companyName" type="text" required class="w-full rounded-md border border-[#D5E0EF] bg-white px-3.5 py-2.5 text-xs text-[#172653] focus:border-[#2453A6] focus:outline-none" />
                    <p data-err="companyName" class="hidden mt-1 text-[11px] text-[#172653] font-medium"></p>
                  </div>
                  <div>
                    <label for="websiteUrl" class="block text-xs font-semibold text-[#172653] mb-1.5">Website URL (optional)</label>
                    <input id="websiteUrl" name="websiteUrl" type="url" class="w-full rounded-md border border-[#D5E0EF] bg-white px-3.5 py-2.5 text-xs text-[#172653] focus:border-[#2453A6] focus:outline-none" />
                    <p data-err="websiteUrl" class="hidden mt-1 text-[11px] text-[#172653] font-medium"></p>
                  </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label for="country" class="block text-xs font-semibold text-[#172653] mb-1.5">Country <span class="text-[#2453A6]">*</span></label>
                    <input id="country" name="country" type="text" required class="w-full rounded-md border border-[#D5E0EF] bg-white px-3.5 py-2.5 text-xs text-[#172653] focus:border-[#2453A6] focus:outline-none" />
                    <p data-err="country" class="hidden mt-1 text-[11px] text-[#172653] font-medium"></p>
                  </div>
                  <div>
                    <label for="serviceRequired" class="block text-xs font-semibold text-[#172653] mb-1.5">Service Required <span class="text-[#2453A6]">*</span></label>
                    <select id="serviceRequired" name="serviceRequired" required class="w-full rounded-md border border-[#D5E0EF] bg-white px-3.5 py-2.5 text-xs text-[#172653] focus:border-[#2453A6] focus:outline-none">
                      <option value="">Select a service</option>
                      ${SERVICES_DATA.map(
                        (s) =>
                          `<option value="${s.title}" ${
                            s.title.toLowerCase() ===
                            prefilledService.toLowerCase()
                              ? 'selected'
                              : ''
                          }>${s.title}</option>`
                      ).join('')}
                    </select>
                    <p data-err="serviceRequired" class="hidden mt-1 text-[11px] text-[#172653] font-medium"></p>
                  </div>
                </div>

                <div>
                  <label for="monthlyBudget" class="block text-xs font-semibold text-[#172653] mb-1.5">Monthly Marketing Budget (optional)</label>
                  <select id="monthlyBudget" name="monthlyBudget" class="w-full rounded-md border border-[#D5E0EF] bg-white px-3.5 py-2.5 text-xs text-[#172653] focus:border-[#2453A6] focus:outline-none">
                    ${BUDGET_OPTIONS.map(
                      (b) => `<option value="${b}">${b}</option>`
                    ).join('')}
                  </select>
                </div>

                <div>
                  <label for="projectDetails" class="block text-xs font-semibold text-[#172653] mb-1.5">Project Details <span class="text-[#2453A6]">*</span></label>
                  <textarea id="projectDetails" name="projectDetails" rows="5" required class="w-full rounded-md border border-[#D5E0EF] bg-white px-3.5 py-2.5 text-xs text-[#172653] focus:border-[#2453A6] focus:outline-none">${defaultDetails}</textarea>
                  <p data-err="projectDetails" class="hidden mt-1 text-[11px] text-[#172653] font-medium"></p>
                </div>

                <div>
                  <label class="inline-flex items-start space-x-2.5 cursor-pointer select-none">
                    <input id="privacyConsent" name="privacyConsent" type="checkbox" class="mt-0.5 w-3.5 h-3.5 rounded border-[#D5E0EF] text-[#2453A6]" />
                    <span class="text-xs text-[#172653]">
                      I agree to the <button type="button" data-modal="privacy" class="text-[#2453A6] underline font-medium">Privacy Policy</button>. <span class="text-[#2453A6]">*</span>
                    </span>
                  </label>
                  <p data-err="privacyConsent" class="hidden mt-1 text-[11px] text-[#172653] font-medium"></p>
                </div>

                <div class="pt-1">
                  <button type="submit" class="w-full sm:w-auto inline-flex items-center justify-center bg-[#1D58C8] hover:bg-[#2453A6] text-white text-xs font-semibold px-7 py-3 rounded-md shadow-sm transition-colors">
                    Send Enquiry
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
    `;
  }

  function showLegalModal(type) {
    const existing = document.getElementById('jexora-legal-modal');
    if (existing) existing.remove();

    const title =
      type === 'privacy' ? 'Privacy Policy' : 'Terms and Conditions';
    const body =
      type === 'privacy'
        ? `<p><strong>1. Information We Collect:</strong> When you submit an enquiry through JEXORA SOLUTIONS, we collect your full name, business email address, company or brand name, country, website URL (if provided), service interest, estimated marketing budget, and project details.</p>
           <p><strong>2. How We Use Your Information:</strong> We use the details you provide solely to review your requirements, prepare a tailored digital marketing consultation, and communicate with you regarding our services.</p>
           <p><strong>3. Data Protection & Confidentiality:</strong> JEXORA SOLUTIONS respects your business privacy. We do not sell, rent, or trade your personal or corporate contact information to third parties.</p>`
        : `<p><strong>1. Scope of Services:</strong> JEXORA SOLUTIONS provides digital marketing, SEO, AEO & GEO optimization, social media marketing, paid advertising, website & landing page design, video & reel editing, graphic design, and brand packaging services.</p>
           <p><strong>2. Proposals & Deliverables:</strong> All project deliverables, timelines, and commercial terms are defined in written service proposals agreed upon prior to project commencement.</p>`;

    const modalHtml = `
      <div id="jexora-legal-modal" class="fixed inset-0 z-50 bg-[#172653]/80 backdrop-blur-sm flex items-center justify-center p-4">
        <div class="bg-white text-[#172653] rounded-xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-[#D5E0EF] space-y-4">
          <div class="flex items-center justify-between pb-3 border-b border-[#D5E0EF]">
            <div>
              <span class="text-[11px] font-bold uppercase tracking-widest text-[#F5B800]">JEXORA SOLUTIONS</span>
              <h3 class="text-lg font-bold text-[#172653]">${title}</h3>
            </div>
            <button type="button" id="close-legal-modal" class="p-1.5 text-[#64748B] hover:text-[#172653]">✕</button>
          </div>
          <div class="space-y-3 text-xs sm:text-sm text-[#64748B] leading-relaxed">${body}</div>
          <div class="pt-3 border-t border-[#D5E0EF] flex justify-end">
            <button type="button" id="close-legal-btn" class="bg-[#2453A6] hover:bg-[#172653] text-white text-xs font-semibold px-5 py-2 rounded-md">Close</button>
          </div>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHtml);
    document
      .getElementById('close-legal-modal')
      .addEventListener('click', () =>
        document.getElementById('jexora-legal-modal').remove()
      );
    document
      .getElementById('close-legal-btn')
      .addEventListener('click', () =>
        document.getElementById('jexora-legal-modal').remove()
      );
  }

  function updateHeroSlideDOM() {
    const slide = HERO_SLIDES[currentSlide];
    const imgEl = document.getElementById('hero-slide-img');
    const lblEl = document.getElementById('hero-slide-label');
    const hdgEl = document.getElementById('hero-slide-heading');
    const dscEl = document.getElementById('hero-slide-desc');
    if (!imgEl || !lblEl || !hdgEl || !dscEl) return;

    imgEl.src = slide.image;
    lblEl.textContent = slide.label;
    hdgEl.textContent = slide.heading;
    dscEl.textContent = slide.description;

    document.querySelectorAll('[data-slide-idx]').forEach((btn) => {
      const idx = parseInt(btn.getAttribute('data-slide-idx'), 10);
      btn.className = `h-1 rounded-full transition-all duration-300 ${
        idx === currentSlide
          ? 'w-8 bg-white'
          : 'w-3 bg-white/35 hover:bg-white/60'
      }`;
    });
  }

  function startHeroTimer() {
    if (slideTimer) clearInterval(slideTimer);
    if (window.location.pathname === '/') {
      slideTimer = setInterval(() => {
        currentSlide = (currentSlide + 1) % HERO_SLIDES.length;
        updateHeroSlideDOM();
      }, 6000);
    }
  }

  function attachEvents() {
    // Mobile menu toggle
    const menuBtn = document.getElementById('mobile-menu-btn');
    if (menuBtn) {
      menuBtn.addEventListener('click', () => {
        mobileMenuOpen = !mobileMenuOpen;
        renderApp();
      });
    }

    // Slider arrows & indicators
    const prevBtn = document.getElementById('slide-prev');
    const nextBtn = document.getElementById('slide-next');
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        currentSlide =
          (currentSlide - 1 + HERO_SLIDES.length) % HERO_SLIDES.length;
        updateHeroSlideDOM();
        startHeroTimer();
      });
    }
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % HERO_SLIDES.length;
        updateHeroSlideDOM();
        startHeroTimer();
      });
    }
    document.querySelectorAll('[data-slide-idx]').forEach((btn) => {
      btn.addEventListener('click', () => {
        currentSlide = parseInt(btn.getAttribute('data-slide-idx'), 10);
        updateHeroSlideDOM();
        startHeroTimer();
      });
    });

    // Legal modals
    document.querySelectorAll('[data-modal]').forEach((btn) => {
      btn.addEventListener('click', () => {
        showLegalModal(btn.getAttribute('data-modal'));
      });
    });

    // Contact form validation & submission
    const form = document.getElementById('jexora-contact-form');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const fullName = form.fullName.value.trim();
        const businessEmail = form.businessEmail.value.trim();
        const companyName = form.companyName.value.trim();
        const websiteUrl = form.websiteUrl.value.trim();
        const country = form.country.value.trim();
        const serviceRequired = form.serviceRequired.value;
        const projectDetails = form.projectDetails.value.trim();
        const privacyConsent = form.privacyConsent.checked;

        const errs = {};
        if (!fullName) errs.fullName = 'Please enter your full name.';
        if (!businessEmail) {
          errs.businessEmail = 'Please enter your business email address.';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(businessEmail)
        ) {
          errs.businessEmail = 'Please enter a valid email address.';
        }
        if (!companyName)
          errs.companyName = 'Please enter your company or brand name.';
        if (
          websiteUrl &&
          !/^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/\S*)?$/i.test(websiteUrl)
        ) {
          errs.websiteUrl = 'Please enter a valid website URL.';
        }
        if (!country) errs.country = 'Please enter your country.';
        if (!serviceRequired)
          errs.serviceRequired = 'Please select a required service.';
        if (!projectDetails || projectDetails.length < 10)
          errs.projectDetails =
            'Please share a few details about your project (at least 10 characters).';
        if (!privacyConsent)
          errs.privacyConsent =
            'You must agree to the Privacy Policy before submitting.';

        document.querySelectorAll('[data-err]').forEach((el) => {
          const key = el.getAttribute('data-err');
          if (errs[key]) {
            el.textContent = errs[key];
            el.classList.remove('hidden');
          } else {
            el.textContent = '';
            el.classList.add('hidden');
          }
        });

        if (Object.keys(errs).length === 0) {
          const container = document.getElementById('contact-card-container');
          if (container) {
            container.innerHTML = `
              <div class="text-center py-6 space-y-4">
                <div class="w-12 h-12 rounded-full bg-[#2453A6]/10 text-[#2453A6] mx-auto flex items-center justify-center font-bold text-xl">✓</div>
                <p class="text-[11px] font-bold uppercase tracking-widest text-[#F5B800]">ENQUIRY RECEIVED</p>
                <h2 class="text-2xl font-bold text-[#172653]">Thank You, ${fullName}!</h2>
                <p class="text-xs sm:text-sm text-[#64748B] max-w-md mx-auto leading-relaxed">
                  We have received your consultation enquiry for <strong class="text-[#172653]">${serviceRequired}</strong>. Our team at <strong class="text-[#172653]">JEXORA SOLUTIONS</strong> will contact you at <strong class="text-[#172653]">${businessEmail}</strong> shortly.
                </p>
                <div class="pt-3">
                  <a href="/contact" data-link class="inline-flex items-center justify-center bg-[#1D58C8] hover:bg-[#2453A6] text-white text-xs font-semibold px-6 py-2.5 rounded-md">
                    Submit Another Enquiry
                  </a>
                </div>
              </div>
            `;
          }
        }
      });
    }
  }

  function renderApp() {
    const root = document.getElementById('root');
    if (!root) return;

    const rawPath = window.location.pathname;
    const validPaths = ['/', '/about', '/services', '/industries', '/contact'];
    const pathname = validPaths.includes(rawPath) ? rawPath : '/';

    updateSEO(pathname);

    let pageContent = '';
    if (pathname === '/') pageContent = renderHomePage();
    else if (pathname === '/about') pageContent = renderAboutPage();
    else if (pathname === '/services') pageContent = renderServicesPage();
    else if (pathname === '/industries') pageContent = renderIndustriesPage();
    else if (pathname === '/contact') pageContent = renderContactPage();

    root.innerHTML = `
      <div class="min-h-screen flex flex-col bg-[#F5F8FC] text-[#172653]">
        ${renderHeader(pathname)}
        <div class="flex-grow">${pageContent}</div>
        ${renderFooter()}
      </div>
    `;

    attachEvents();
    startHeroTimer();

    if (window.location.hash) {
      const id = window.location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 80);
      }
    }
  }

  // Intercept internal SPA navigation links
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[data-link]');
    if (link) {
      const href = link.getAttribute('href');
      if (href && href.startsWith('/')) {
        e.preventDefault();
        mobileMenuOpen = false;
        window.history.pushState({}, '', href);
        renderApp();
        if (!href.includes('#')) {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    }
  });

  window.addEventListener('popstate', () => {
    mobileMenuOpen = false;
    renderApp();
  });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderApp);
  } else {
    renderApp();
  }
})();
