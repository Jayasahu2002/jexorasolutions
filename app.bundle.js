(function () {
  const SOCIAL_LINKS = {
    facebook: 'https://www.facebook.com/Jexorasolutions/',
    instagram: 'https://www.instagram.com/jexorasolutions/',
    linkedin: 'https://www.linkedin.com/company/jexorasolutions/',
    whatsappBase: 'https://wa.me/917427837194',
  };

  const HERO_SLIDES = [
    {
      id: 'slide-1',
      label: '01 — GROW YOUR BUSINESS ONLINE',
      heading: 'Grow Your Business',
      accentHeading: 'With Us',
      subheadline: 'Smart Digital Solutions for Every Business',
      description:
        'We help businesses get more customers, build their online presence and grow with the right digital marketing services.',
      image: '/assets/hero-trending-1.jpg',
    },
    {
      id: 'slide-2',
      label: '02 — GET MORE CUSTOMERS',
      heading: 'Reach More People.',
      accentHeading: 'Get More Customers.',
      subheadline: 'Make Your Business Stand Out Online',
      description:
        'From Google to social media, we help your business reach the right people and attract more customers.',
      image: '/assets/hero-slide-2.jpg',
    },
    {
      id: 'slide-3',
      label: '03 — BUILD YOUR ONLINE PRESENCE',
      heading: 'Take Your Business',
      accentHeading: 'to the Next Level',
      subheadline: 'Everything Your Business Needs to Grow',
      description:
        'Get professional websites, creative designs, online marketing and complete digital support in one place.',
      image: '/assets/hero-slide-3.jpg',
    },
  ];

  const SERVICES_DATA = [
    {
      id: 'seo-optimization',
      number: '01',
      category: 'search',
      shortLabel: 'SEO',
      title: 'SEO Optimization',
      shortDesc:
        'Strengthen your organic search visibility with technical, on-page and content-led SEO architectures.',
      iconName: 'search',
      whatsIncluded: [
        'Technical SEO audit & crawl fixes',
        'High-intent keyword research',
        'On-page & metadata optimization',
        'Content and authority link strategy',
      ],
      problemsAddressed:
        'Low organic visibility, stagnant search traffic and technical website issues holding back rankings.',
      whoBenefits:
        'Businesses seeking compounding, sustainable visibility across Google Search.',
      keyDeliverables: [
        'Technical SEO audit',
        'Keyword & intent map',
        'Optimization changelog',
        'Monthly ranking reports',
      ],
    },
    {
      id: 'aeo-geo-optimization',
      number: '02',
      category: 'search',
      shortLabel: 'AEO & GEO',
      title: 'AEO & GEO Optimization',
      shortDesc:
        'Engineer your brand content to be cited by answer engines and AI-powered search through Answer & Generative Engine Optimization.',
      iconName: 'sparkles',
      whatsIncluded: [
        'Answer-focused content structuring',
        'Schema.org & structured data review',
        'Entity and topic authority mapping',
        'AI search visibility monitoring',
      ],
      problemsAddressed:
        'Brand content that AI assistants and answer engines fail to interpret, cite or surface.',
      whoBenefits:
        'Forward-thinking brands capturing discoverability across both Google and AI search.',
      keyDeliverables: [
        'AI visibility audit',
        'Answer-first content blueprints',
        'JSON-LD schema recommendations',
        'Citation & visibility reporting',
      ],
    },
    {
      id: 'social-media-marketing',
      number: '03',
      category: 'brand',
      shortLabel: 'Social Media',
      title: 'Social Media Marketing',
      shortDesc:
        'Build an authoritative, active brand presence with strategic social calendars, visual storytelling and community management.',
      iconName: 'megaphone',
      whatsIncluded: [
        'Monthly content strategy & planning',
        'Custom post design and persuasive copy',
        'Consistent multi-platform scheduling',
        'Active community & DM engagement',
      ],
      problemsAddressed:
        'Irregular posting, weak visual identity, low engagement and fragmented brand messaging.',
      whoBenefits:
        'Businesses seeking a consistent, professionally managed social presence that builds trust.',
      keyDeliverables: [
        'Monthly content calendar',
        'Custom designed posts & carousels',
        'Caption & hashtag system',
        'Engagement & reach summary',
      ],
    },
    {
      id: 'google-ads-management',
      number: '04',
      category: 'paid',
      shortLabel: 'Google Ads',
      title: 'Google Ads Management',
      shortDesc:
        'Capture high-intent buyers on Google with tightly targeted campaigns, precision conversion tracking and continuous bid optimization.',
      iconName: 'target',
      whatsIncluded: [
        'Full-funnel Google campaign strategy',
        'High-intent keyword & audience targeting',
        'Conversion-focused ad copywriting',
        'GA4 & conversion tracking setup',
      ],
      problemsAddressed:
        'Wasted ad spend, irrelevant clicks, weak targeting and unclear return on ad spend.',
      whoBenefits:
        'Businesses investing in Google Search & Display for qualified enquiries, bookings and sales.',
      keyDeliverables: [
        'Campaign & ad-group architecture',
        'High-CTR ad copy variations',
        'Conversion tracking verification',
        'Ongoing ROAS reporting',
      ],
    },
    {
      id: 'meta-ads-whatsapp-advertising',
      number: '05',
      category: 'paid',
      shortLabel: 'Meta & WhatsApp',
      title: 'Meta Ads & WhatsApp Advertising',
      shortDesc:
        'Generate qualified leads and instant customer conversations through Facebook, Instagram and click-to-WhatsApp campaigns.',
      iconName: 'share2',
      whatsIncluded: [
        'Meta full-funnel campaign strategy',
        'Precision lookalike & interest targeting',
        'Scroll-stopping ad creative production',
        'Click-to-WhatsApp enquiry flows',
      ],
      problemsAddressed:
        'Low-quality leads, ad fatigue and friction between ad clicks and real customer conversations.',
      whoBenefits:
        'Service and D2C brands scaling daily enquiries through Instagram, Facebook and WhatsApp.',
      keyDeliverables: [
        'Funnel & campaign structure',
        'Static & video ad creatives',
        'WhatsApp lead-capture flow',
        'Weekly performance analytics',
      ],
    },
    {
      id: 'website-landing-page-design',
      number: '06',
      category: 'web',
      shortLabel: 'Web Design',
      title: 'Website & Landing Page Design',
      shortDesc:
        'High-converting custom websites and focused campaign landing pages engineered to turn traffic into qualified enquiries.',
      iconName: 'layout',
      whatsIncluded: [
        'Custom UI/UX & brand-led visual design',
        'Responsive desktop & mobile build',
        'Conversion-focused landing page copy',
        'Form, speed & CTA optimization',
      ],
      problemsAddressed:
        'Outdated websites, poor mobile experiences and generic templates that leak paid & organic traffic.',
      whoBenefits:
        'Businesses launching, redesigning or scaling campaign-specific landing experiences.',
      keyDeliverables: [
        'Custom UI/UX concepts',
        'Live responsive website / landing page',
        'Lead-capture form integration',
        'Launch & handover guide',
      ],
    },
    {
      id: 'video-reel-creation-editing',
      number: '07',
      category: 'brand',
      shortLabel: 'Video & Reels',
      title: 'Video & Reel Creation and Editing',
      shortDesc:
        'Create high-retention short-form videos and reels with strong hooks, dynamic editing and platform-ready formatting.',
      iconName: 'clapperboard',
      whatsIncluded: [
        'Hook-driven video concepts & scripts',
        'Dynamic reel editing & pacing',
        'Kinetic captions and motion typography',
        'Sound design, music & color polish',
      ],
      problemsAddressed:
        'Low watch time, inconsistent video presence and edits that lose viewer attention in the first 3 seconds.',
      whoBenefits:
        'Brands scaling reach and authority across Instagram Reels, YouTube Shorts and paid video ads.',
      keyDeliverables: [
        'Video concept & script plan',
        'Edited HD videos & reels',
        'Platform-ready aspect exports',
        'Custom cover thumbnails',
      ],
    },
    {
      id: 'graphic-design',
      number: '08',
      category: 'brand',
      shortLabel: 'Graphic Design',
      title: 'Graphic Design',
      shortDesc:
        'Sharp, on-brand visual communication — social creatives, campaign banners, posters and ad graphics crafted for instant authority.',
      iconName: 'palette',
      whatsIncluded: [
        'Social media & campaign creatives',
        'Posters, banners and digital flyers',
        'High-converting ad visuals & thumbnails',
        'Marketing decks & print collateral',
      ],
      problemsAddressed:
        'Inconsistent or amateur visuals that weaken brand perception and lower ad click-through rates.',
      whoBenefits:
        'Growing brands needing a steady stream of cohesive, agency-grade graphic assets.',
      keyDeliverables: [
        'Editable source & HD export files',
        'Multi-platform sized variations',
        'Reusable design templates',
        'Structured revision rounds',
      ],
    },
  ];

  const FEATURED_BLUEPRINTS = [
    {
      id: 'bp-search-ai',
      category: 'search',
      tag: 'SEO & AI VISIBILITY',
      title: 'Get Your Business Found on Google & AI Search',
      summary:
        'We help your business appear in Google search results and AI platforms like ChatGPT through better website content, SEO and search optimization.',
      metrics: [
        { value: 'SEO + AI Search', label: 'Improve your visibility on Google and AI platforms.' },
        { value: 'Complete SEO Audit', label: 'Find and fix website SEO problems.' },
      ],
      image: '/assets/bp-seo-ai.jpg',
      serviceLink: 'AEO & GEO Optimization',
      badge: 'ORGANIC GROWTH ENGINE',
    },
    {
      id: 'bp-paid-acquisition',
      category: 'paid',
      tag: 'PAID ADS & LEAD GENERATION',
      title: 'Get More Customers with Google & Social Media Ads',
      summary:
        'We create and manage Google and Facebook & Instagram ads to help your business reach the right people, get more enquiries and generate quality leads directly on WhatsApp.',
      metrics: [
        { value: '3 Ad Channels', label: 'Google · Facebook · Instagram' },
        { value: 'Track Results', label: 'Ad Performance & Lead Tracking' },
      ],
      image: '/assets/bp-google-ads.jpg',
      serviceLink: 'Meta Ads & WhatsApp Advertising',
      badge: 'PERFORMANCE ACQUISITION',
    },
    {
      id: 'bp-web-brand',
      category: 'web',
      tag: 'WEBSITE & LANDING PAGE DESIGN',
      title: 'Websites That Attract Visitors & Bring More Customers',
      summary:
        'We design modern, mobile-friendly websites and landing pages that showcase your business, build trust and help turn visitors into customers.',
      metrics: [
        { value: 'Mobile-Friendly', label: 'Works smoothly on phones, tablets and computers.' },
        { value: 'Built to Convert', label: 'Clear content and easy enquiry options.' },
      ],
      image: '/assets/bp-web-ux.jpg',
      serviceLink: 'Website & Landing Page Design',
      badge: 'WEB & CONVERSION',
    },
    {
      id: 'bp-hospitality-growth',
      category: 'paid',
      tag: 'BUSINESS GROWTH & DIGITAL MARKETING',
      title: 'Digital Marketing Solutions for Every Business',
      summary:
        'We help businesses across different industries reach more customers, improve their online presence and grow with effective digital marketing strategies.',
      metrics: [
        { value: 'More Reach', label: 'SEO, Google & Social Media' },
        { value: 'More Leads', label: 'Online Ads & Customer Enquiries' },
      ],
      image: '/assets/ind-restaurants.jpg',
      serviceLink: 'Social Media Marketing',
      badge: 'INDUSTRY PLAYBOOK',
    },
    {
      id: 'bp-consultation-funnels',
      category: 'search',
      tag: 'CONTENT & BRAND GROWTH',
      title: 'Build Trust. Reach More People. Grow Your Business.',
      summary:
        'We help businesses and professionals promote their services through useful content, social media and professional websites to attract more customers and enquiries.',
      metrics: [
        { value: 'Build Trust', label: 'Posts, Videos & Helpful Content' },
        { value: 'Get More Leads', label: 'Online Forms & Bookings' },
      ],
      image: '/assets/ind-astrology.jpg',
      serviceLink: 'SEO Optimization',
      badge: 'GLOBAL CONSULTATION FUNNEL',
    },
  ];

  const INDUSTRIES_DATA = [
    {
      id: 'astrology-spirituality',
      title: 'Astrology & Spirituality',
      focusTag: 'Consultation Funnels',
      iconName: 'moon',
      description:
        'Content marketing, social media authority and conversion-focused websites that bring genuine international consultation enquiries.',
      channels: ['SEO & Content Hubs', 'Reels & Trust Creatives', 'WhatsApp Booking Funnels'],
      image: '/assets/ind-astrology.jpg',
      alt: 'Astrology & Spirituality digital marketing services by JEXORA SOLUTIONS',
    },
    {
      id: 'restaurants-cafes',
      title: 'Restaurants & Cafés',
      focusTag: 'Local SEO & Footfall',
      iconName: 'utensils',
      description:
        'Local search dominance, mouth-watering reels and hyper-local promotions engineered to fill more tables every week.',
      channels: ['Local SEO & Maps', 'Food Reels & Graphics', 'Hyper-Local Meta Ads'],
      image: '/assets/ind-restaurants.jpg',
      alt: 'Restaurants & Cafés marketing and local SEO by JEXORA SOLUTIONS',
    },
    {
      id: 'hotels-resorts',
      title: 'Hotels & Resorts',
      focusTag: 'Direct Bookings',
      iconName: 'building',
      description:
        'High-intent search visibility, experiential visuals and performance campaigns that reduce OTA dependence and grow direct bookings.',
      channels: ['Google Search Ads', 'Destination Video Reels', 'Direct Booking Pages'],
      image: '/assets/ind-hotels.jpg',
      alt: 'Hotels & Resorts digital marketing and direct booking campaigns',
    },
    {
      id: 'travel-tourism',
      title: 'Travel & Tourism',
      focusTag: 'Tour Package Leads',
      iconName: 'plane',
      description:
        'Inspiring destination storytelling, targeted paid campaigns and streamlined enquiry funnels for high-value tour packages.',
      channels: ['Package Landing Pages', 'Meta & WhatsApp Leads', 'Seasonal SEO'],
      image: '/assets/ind-travel.jpg',
      alt: 'Travel & Tourism marketing and tour enquiry funnels',
    },
    {
      id: 'real-estate',
      title: 'Real Estate',
      focusTag: 'Buyer Lead Gen',
      iconName: 'home',
      description:
        'Property launch marketing, high-converting project landing pages and qualified buyer & investor lead generation.',
      channels: ['Google & Meta Lead Gen', 'Project Microsites', 'Walkthrough Reels'],
      image: '/assets/ind-realestate.jpg',
      alt: 'Real Estate property marketing and lead generation',
    },
    {
      id: 'salons-beauty',
      title: 'Salons & Beauty',
      focusTag: 'Appointment Growth',
      iconName: 'scissors',
      description:
        'Local visibility, transformation reels and irresistible seasonal offer creatives focused directly on booked appointments.',
      channels: ['Instagram Reels', 'Click-to-WhatsApp Ads', 'Local Discovery SEO'],
      image: '/assets/ind-salons.jpg',
      alt: 'Salons & Beauty marketing and appointment generation',
    },
    {
      id: 'yoga-wellness',
      title: 'Yoga & Wellness',
      focusTag: 'Classes & Retreats',
      iconName: 'heart',
      description:
        'Calm, cohesive brand storytelling, international search visibility and enquiry funnels for studios, coaches and retreats.',
      channels: ['Global SEO & AEO', 'Retreat Landing Pages', 'Community Social Content'],
      image: '/assets/ind-yoga.jpg',
      alt: 'Yoga & Wellness studio and retreat marketing',
    },
    {
      id: 'fashion-clothing',
      title: 'Fashion & Clothing',
      focusTag: 'D2C & Retail Sales',
      iconName: 'bag',
      description:
        'Editorial visuals, graphic creatives, influencer-ready reels and conversion-focused paid campaigns that scale online sales.',
      channels: ['Meta & Shopping Ads', 'Graphic & Social Design', 'Lookbook Reels'],
      image: '/assets/ind-fashion.jpg',
      alt: 'Fashion & Clothing e-commerce and retail marketing',
    },
  ];

  const PROCESS_STEPS = [
    {
      step: '01',
      title: 'Discover & Audit',
      headline: 'Deep-Dive Brand, Market & Technical Audit',
      desc: 'We start by listening and diagnosing — auditing your website UX, search footprint, competitor positioning, and ad account structure to uncover the fastest levers for growth.',
      deliverables: [
        'Website, SEO & AEO/GEO baseline audit',
        'Competitor & audience intent analysis',
        'Conversion bottleneck identification',
      ],
      iconName: 'search',
    },
    {
      step: '02',
      title: 'Strategy & Roadmap',
      headline: 'Custom Multi-Channel Growth Blueprint',
      desc: 'No cookie-cutter retainers. We map your exact channel mix — separating organic brand building from paid acquisition — with crisp KPIs, creative pillars, and milestone timelines.',
      deliverables: [
        'Channel & budget allocation plan',
        'Messaging, funnel & offer architecture',
        '90-day prioritized execution roadmap',
      ],
      iconName: 'compass',
    },
    {
      step: '03',
      title: 'Creative & Launch',
      headline: 'Agency-Grade Design, Content & Campaign Build',
      desc: 'Our designers, editors and performance marketers produce conversion-ready landing pages, reels, graphics, and tightly structured Google, Meta and WhatsApp campaigns.',
      deliverables: [
        'High-converting landing pages & forms',
        'Custom creatives, reels & brand assets',
        'Verified GA4 & conversion tracking launch',
      ],
      iconName: 'sparkles',
    },
    {
      step: '04',
      title: 'Measure & Scale',
      headline: 'Continuous Optimization & Transparent Reporting',
      desc: 'Once live, we refine targeting, test fresh creative hooks, improve landing conversion rates, and double down on the channels driving real enquiries and revenue.',
      deliverables: [
        'Clear, jargon-free performance reports',
        'Creative & audience A/B iteration',
        'Systematic scaling across winning markets',
      ],
      iconName: 'trending',
    },
  ];

  const DIFFERENTIATORS = [
    {
      id: 'diff-strategy',
      tab: 'Strategy Before Spend',
      title: 'Every Marketing Budget Backed by Clear Strategy',
      desc: 'Many agencies rush to boost posts or launch unfocused ads. JEXORA SOLUTIONS builds the strategic foundation first — aligning audience intent, offer positioning, landing page experience, and conversion tracking before scaling budget.',
      highlights: [
        'Separate, transparent plans for organic social vs. paid advertising',
        'Conversion tracking configured before campaigns go live',
        'Clear deliverables defined upfront in every proposal',
      ],
      stat: '100%',
      statLabel: 'Strategy-First Execution',
    },
    {
      id: 'diff-ai',
      tab: 'AEO & GEO AI-Ready',
      title: 'Built for Both Google Search & Next-Gen AI Discovery',
      desc: 'Search is evolving fast. Beyond traditional technical SEO, we specialize in Answer Engine Optimization (AEO) and Generative Engine Optimization (GEO) so your brand is structured to be understood and recommended by AI search platforms.',
      highlights: [
        'Answer-focused content & topic authority architecture',
        'Clean JSON-LD structured data & entity clarity',
        'Future-proof visibility across traditional & AI search',
      ],
      stat: 'SEO+AI',
      statLabel: 'Next-Gen Search Readiness',
    },
    {
      id: 'diff-full',
      tab: 'End-to-End Creative & Tech',
      title: 'One Unified Partner From Web Design to Paid Leads',
      desc: 'Instead of juggling disconnected freelancers for websites, reels, graphics and ads, JEXORA unites strategy, design, video editing, web UX and performance marketing under one cohesive team.',
      highlights: [
        '8 specialist in-house disciplines working in sync',
        'Consistent visual quality across web, social and paid ads',
        'Faster campaign launches with zero handoff friction',
      ],
      stat: '8-in-1',
      statLabel: 'Integrated Specialist Services',
    },
    {
      id: 'diff-global',
      tab: 'Worldwide Delivery',
      title: 'Borderless Digital Execution Across Every Time Zone',
      desc: 'We partner with ambitious startups, SMEs and established brands worldwide — adapting tone, creative aesthetics, search signals and ad targeting to win in every audience segment globally.',
      highlights: [
        'Audience-adapted messaging & global campaign targeting',
        'Seamless remote collaboration via strategy calls & WhatsApp',
        'Industry-proven playbooks across 8 high-growth verticals',
      ],
      stat: 'GLOBAL',
      statLabel: 'Worldwide Client Delivery',
    },
  ];

  const GLOBAL_MARKETS = [
    {
      code: 'SEO',
      num: '01',
      iconName: 'search',
      name: 'Search & AI Discovery',
      shortHint: 'SEO · AEO & GEO',
      tagline: 'Worldwide Organic Visibility · SEO, AEO & GEO',
      desc: 'Technical search optimization, entity-rich content hubs and AI answer-engine structuring that help global brands rank higher and capture compounding high-intent traffic.',
      focus: ['Technical SEO', 'AEO & GEO AI Search', 'Authority Content'],
    },
    {
      code: 'ADS',
      num: '02',
      iconName: 'target',
      name: 'Paid Acquisition',
      shortHint: 'Google · Meta · WhatsApp',
      tagline: 'Performance Funnels · Google, Meta & WhatsApp Ads',
      desc: 'Precision-targeted Google Search, Facebook, Instagram and Click-to-WhatsApp ad systems engineered for qualified enquiries, tracked conversions and measurable ROAS.',
      focus: ['Google Search Ads', 'Meta Lead Funnels', 'WhatsApp Campaigns'],
    },
    {
      code: 'WEB',
      num: '03',
      iconName: 'layout',
      name: 'Web & Conversion UX',
      shortHint: 'Websites & Landing Pages',
      tagline: 'Custom Websites & High-Converting Landing Pages',
      desc: 'Fast, responsive, brand-first websites and dedicated campaign landing pages crafted to turn global visitors into booked consultations and customers.',
      focus: ['Custom UI/UX Design', 'Landing Page CRO', 'Responsive Builds'],
    },
    {
      code: 'VID',
      num: '04',
      iconName: 'clapperboard',
      name: 'Reels & Visual Content',
      shortHint: 'Video · Reels · Graphics',
      tagline: 'Scroll-Stopping Short-Form Video & Social Creatives',
      desc: 'Hook-driven reels, kinetic motion edits, social calendars and sharp graphic design built to command attention across Instagram, YouTube and paid social feeds.',
      focus: ['Video & Reel Editing', 'Social Calendars', 'Ad Creative Design'],
    },
    {
      code: 'SOC',
      num: '05',
      iconName: 'megaphone',
      name: 'Social Media Growth',
      shortHint: 'Organic Content & Reach',
      tagline: 'Consistent Organic Presence & Community Building',
      desc: 'Planned monthly content calendars, custom posts, persuasive copy and active community management that turn social followers into loyal customers.',
      focus: ['Content Calendars', 'Custom Social Posts', 'Community Growth'],
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

  const CLIENT_FEEDBACKS = [
    {
      initials: 'RS',
      name: 'Rohan Sharma',
      role: 'Owner, Spice Courtyard · Hospitality',
      service: 'Local SEO & Reels',
      quote:
        'JEXORA SOLUTIONS transformed our Instagram reels and search visibility — weekend table bookings jumped noticeably within the first month!',
    },
    {
      initials: 'ET',
      name: 'Elena Thompson',
      role: 'Founder, Lumina Wellness · Global Studio',
      service: 'Website & SEO',
      quote:
        'Clean, fast landing pages paired with AEO & SEO strategy brought us consistent qualified consultation leads without wasting ad spend.',
    },
    {
      initials: 'AK',
      name: 'Aman Kapoor',
      role: 'Director, Horizon Realty · Real Estate',
      service: 'Meta & WhatsApp Ads',
      quote:
        'Their Click-to-WhatsApp lead funnel gave our sales team direct buyer conversations daily. Transparent reporting and super responsive team.',
    },
    {
      initials: 'SB',
      name: 'Sophie Bennett',
      role: 'Creative Lead, Atelier Mode · Fashion',
      service: 'Social Media & Graphics',
      quote:
        'From campaign graphics to paid social creatives and reels, JEXORA elevated our online presence to luxury retail standards seamlessly.',
    },
    {
      initials: 'NV',
      name: 'Neha Verma',
      role: 'Founder, Aura Holistic Retreat · Wellness',
      service: 'Google Ads & Web Design',
      quote:
        'Jigyasa and her team truly listen first. Our retreat enquiries grew steadily across both organic search and targeted Google campaigns.',
    },
  ];

  const BLOG_POSTS = [
    {
      slug: 'aeo-geo-ai-search-guide-2026',
      category: 'Search & AI',
      categoryKey: 'search',
      date: 'November 2026',
      readTime: '6 min read',
      author: 'Jigyasa Sahu',
      authorRole: 'Founder & Growth Strategist',
      serviceLink: 'AEO & GEO Optimization',
      image: '/assets/bp-seo-ai.jpg',
      title: 'SEO vs. AEO & GEO: How to Get Your Brand Cited by AI Answer Engines',
      excerpt:
        'Ranking on page one of Google is only half the battle. Learn how structured entities, answer-first architecture, and Schema.org help your business appear in AI-generated answers.',
      keyTakeaways: [
        'Structure core service pages around direct, verifiable answers rather than keyword-stuffed paragraphs.',
        'Deploy clean JSON-LD Schema.org entities so both Google Search and AI crawlers understand your expertise.',
        'Pair technical SEO crawl health with high-authority topic clusters to compound organic discovery globally.',
      ],
      sections: [
        {
          heading: 'Why Traditional SEO Alone Is No Longer Enough',
          body: 'Buyers no longer scroll through ten blue links before making a decision. Increasingly, decision-makers ask AI search engines and conversational assistants for direct recommendations. Brands that only optimize for legacy keyword density risk becoming invisible inside AI summaries.',
        },
        {
          heading: 'Building an Answer-First Content Architecture (AEO)',
          body: 'Answer Engine Optimization focuses on clarity, specificity, and verifiable structure. Every high-value page should open with clear problem-solution framing, scannable checklists, transparent deliverables, and unambiguous entity naming.',
        },
        {
          heading: 'Generative Engine Optimization (GEO) & Entity Signals',
          body: 'Generative models weigh authority signals across your entire digital footprint — consistent JSON-LD markup, aligned social profiles, authoritative guides, and clear service definitions. At JEXORA SOLUTIONS, we combine technical SEO with AEO & GEO so your brand wins both classic search rankings and AI citations.',
        },
      ],
    },
    {
      slug: 'google-meta-click-to-whatsapp-funnel',
      category: 'Paid Media',
      categoryKey: 'paid',
      date: 'November 2026',
      readTime: '5 min read',
      author: 'JEXORA Performance Desk',
      authorRole: 'Paid Acquisition Team',
      serviceLink: 'Meta Ads & WhatsApp Advertising',
      image: '/assets/bp-google-ads.jpg',
      title: 'Why Google Ads + Click-to-WhatsApp Funnels Outperform Cold Lead Forms',
      excerpt:
        'Discover how pairing high-intent Google Search campaigns with instant WhatsApp conversation flows cuts lead response time from hours to seconds and lifts close rates.',
      keyTakeaways: [
        'Capture active bottom-of-funnel demand on Google Search while retargeting warm prospects on Meta.',
        'Route mobile ad clicks directly into structured WhatsApp conversations to eliminate form drop-off.',
        'Track real qualified enquiries and GA4 conversion events instead of optimizing for vanity clicks.',
      ],
      sections: [
        {
          heading: 'The Speed-to-Lead Bottleneck',
          body: 'Most paid ad campaigns leak budget after the click. A prospect fills out a long form, waits hours for a callback, and forgets who they enquired with. Click-to-WhatsApp funnels remove that friction by starting a real conversation the moment intent peaks.',
        },
        {
          heading: 'Pairing Google Search Intent With Meta Visual Retargeting',
          body: 'Google Ads excels at capturing buyers actively searching for your service right now. Meta Ads (Instagram & Facebook) excel at building demand and retargeting visitors with crisp visual proof and offer-driven creatives. Running both channels in a unified funnel lowers blended cost-per-enquiry.',
        },
        {
          heading: 'Tracking What Actually Generates Revenue',
          body: 'Before scaling a single dollar of ad spend, verify GA4 event tracking, negative keyword lists, and creative A/B testing loops. Weekly optimization ensures budget shifts smoothly toward the ad sets producing real booked calls and sales.',
        },
      ],
    },
    {
      slug: 'conversion-engineered-landing-page-patterns',
      category: 'Web & UX',
      categoryKey: 'web',
      date: 'October 2026',
      readTime: '7 min read',
      author: 'Jigyasa Sahu',
      authorRole: 'Founder & Growth Strategist',
      serviceLink: 'Website & Landing Page Design',
      image: '/assets/bp-web-ux.jpg',
      title: '7 Conversion-Engineered Landing Page Patterns That Double Qualified Enquiries',
      excerpt:
        'Traffic means nothing if your website leaks conversions. Explore the above-the-fold hierarchy, trust signals, and mobile-first UX patterns behind high-performing agency builds.',
      keyTakeaways: [
        'Place your core value proposition, primary CTA, and lightweight enquiry form cleanly above the fold.',
        'Eliminate bloated scripts and heavy unoptimized images so mobile pages load in under two seconds.',
        'Match landing page headlines directly to the exact ad copy or search query that brought the visitor.',
      ],
      sections: [
        {
          heading: 'Message Match & Above-the-Fold Clarity',
          body: 'Visitors decide within three seconds whether your website feels trustworthy and relevant. Lead with a bold, unmistakable headline, concise supporting copy, and a clear next step — never bury your primary call-to-action below walls of filler text.',
        },
        {
          heading: 'Visual Proof Over Generic Claims',
          body: 'Replace vague marketing buzzwords with transparent deliverables, structured process steps, industry playbooks, and real client feedback. When visitors understand exactly what happens after they click submit, conversion friction drops sharply.',
        },
        {
          heading: 'Mobile-First Speed & Frictionless Forms',
          body: 'Over 70% of paid social and local search traffic arrives on mobile. Keep enquiry forms concise, ensure tap targets are comfortable, and offer an instant WhatsApp alternative for buyers who prefer direct chat.',
        },
      ],
    },
    {
      slug: 'short-form-reels-three-second-hook-playbook',
      category: 'Social & Reels',
      categoryKey: 'creative',
      date: 'October 2026',
      readTime: '5 min read',
      author: 'JEXORA Creative Studio',
      authorRole: 'Video & Social Media Team',
      serviceLink: 'Video & Reel Creation and Editing',
      image: '/assets/digital-marketing-growth.jpg',
      title: 'The 3-Second Hook Formula: Turning Short-Form Reels Into Consistent Brand Growth',
      excerpt:
        'Why most business reels stall under 300 views — and how kinetic pacing, visual hooks, and structured content calendars turn Instagram Reels and Shorts into lead machines.',
      keyTakeaways: [
        'Open every reel with a visual pattern interrupt and a bold on-screen hook inside the first 2 seconds.',
        'Use crisp kinetic captions because a large share of mobile viewers watch initially on mute.',
        'Separate organic community calendars from paid ad creative testing so each format hits its true KPI.',
      ],
      sections: [
        {
          heading: 'Win the First Three Seconds or Lose the Scroll',
          body: 'Algorithms reward watch time and replays. Slow logo intros and long greetings cause viewers to swipe away immediately. Start mid-action with a clear visual payoff, bold headline text, or a relatable customer problem.',
        },
        {
          heading: 'Rhythm, Captions & Visual Polish',
          body: 'Dynamic cut pacing every 2–3 seconds, clean typography aligned with your brand palette, and balanced audio keep retention curves strong. Pair every reel with a sharp custom cover thumbnail so your profile grid looks cohesive and authoritative.',
        },
        {
          heading: 'From Views to Real Enquiries',
          body: 'Every weekly content calendar should balance reach reels, authority explainers, and clear conversion prompts inviting viewers to DM, click your landing page, or connect on WhatsApp.',
        },
      ],
    },
    {
      slug: 'restaurants-hotels-local-seo-direct-bookings',
      category: 'Industry Growth',
      categoryKey: 'paid',
      date: 'October 2026',
      readTime: '6 min read',
      author: 'JEXORA Strategy Desk',
      authorRole: 'Hospitality Growth Team',
      serviceLink: 'Google Ads Management',
      image: '/assets/ind-restaurants.jpg',
      title: 'How Restaurants & Hotels Turn Local Search + Visual Reels Into Direct Bookings',
      excerpt:
        'Reduce dependence on high-commission aggregators and OTAs by combining hyper-local SEO, mouth-watering visual reels, and targeted local booking campaigns.',
      keyTakeaways: [
        'Optimize Google Business profiles, menus, and local search keywords to dominate near-me discovery.',
        'Run hyper-local radius Meta campaigns during peak dining and weekend travel planning windows.',
        'Route enquiries directly to WhatsApp table reservations and zero-commission direct booking pages.',
      ],
      sections: [
        {
          heading: 'Capturing High-Intent Local & Travel Searches',
          body: 'Diners and travelers search with immediate intent. Accurate local search visibility, crisp photography, and fast mobile pages ensure your restaurant or boutique hotel stands out the moment guests compare options.',
        },
        {
          heading: 'Experiential Visuals That Trigger Instant Cravings',
          body: 'Hospitality is deeply visual. High-retention reels showcasing ambiance, signature dishes, and warm guest experiences outperform static discount flyers by wide margins across Instagram and Facebook.',
        },
        {
          heading: 'Owning Repeat Guests Directly',
          body: 'Instead of paying commissions on every repeat visit, build direct WhatsApp booking links and seasonal offer campaigns so loyal guests book straight with your venue.',
        },
      ],
    },
    {
      slug: 'global-consultation-funnels-high-trust-brands',
      category: 'Search & AI',
      categoryKey: 'search',
      date: 'September 2026',
      readTime: '5 min read',
      author: 'Jigyasa Sahu',
      authorRole: 'Founder & Growth Strategist',
      serviceLink: 'SEO Optimization',
      image: '/assets/ind-astrology.jpg',
      title: 'Building High-Trust Global Consultation Funnels Across Borders & Time Zones',
      excerpt:
        'A practical blueprint for coaches, wellness studios, and specialist advisors scaling international client bookings through authority content, SEO, and WhatsApp.',
      keyTakeaways: [
        'Lead with educational authority content and clear credentials to establish immediate cross-border trust.',
        'Design distraction-free booking pages with transparent next steps and timezone-friendly scheduling.',
        'Combine evergreen SEO & AEO guides with targeted retargeting to sustain worldwide consultation demand.',
      ],
      sections: [
        {
          heading: 'Trust Is the Currency of Global Advisory Brands',
          body: 'When clients book a consultation from another country, credibility decides everything. A clean, modern website backed by thoughtful educational content and genuine client stories bridges the trust gap immediately.',
        },
        {
          heading: 'Borderless Discovery Through Search & Reels',
          body: 'Evergreen SEO articles and AEO-structured FAQs attract high-intent international searchers around the clock, while authentic short-form video builds personal connection before the first call even happens.',
        },
        {
          heading: 'Seamless Enquiry-to-Booking Experience',
          body: 'Keep your booking journey simple: one clear consultation form, one direct WhatsApp desk, and crisp follow-up communication so prospects worldwide can confirm sessions effortlessly.',
        },
      ],
    },
  ];

  const FAQ_DATA = [
    {
      q: 'What digital marketing services does JEXORA SOLUTIONS offer?',
      a: 'We deliver 8 specialist services under one roof: SEO Optimization, AEO & GEO Optimization (AI search visibility), Social Media Marketing, Google Ads Management, Meta Ads & WhatsApp Advertising, Website & Landing Page Design, Video & Reel Creation and Editing, and Graphic Design.',
    },
    {
      q: 'Do you work with businesses worldwide or only in specific regions?',
      a: 'JEXORA SOLUTIONS is a 100% worldwide digital marketing agency. We collaborate seamlessly across every time zone via strategy calls, WhatsApp, and clear reporting — adapting messaging, creative direction, and ad targeting to your target audience anywhere in the world.',
    },
    {
      q: 'What is AEO & GEO Optimization, and why does my business need it?',
      a: 'Answer Engine Optimization (AEO) and Generative Engine Optimization (GEO) structure your website content, entities, and Schema.org markup so AI search platforms and answer engines accurately understand and recommend your business alongside traditional Google Search rankings.',
    },
    {
      q: 'Are organic Social Media Marketing and Paid Ads offered separately?',
      a: 'Yes — always. We keep organic Social Media Marketing (content calendars, posts, reels, community growth) transparently separate from Paid Advertising (Google Ads, Meta Ads & Click-to-WhatsApp campaigns) so you know exactly how your budget is allocated.',
    },
    {
      q: 'How soon can I expect to see results from your campaigns?',
      a: 'Performance campaigns like Google Ads, Meta Ads, and Click-to-WhatsApp funnels typically start generating qualified enquiries within the first few days of launch. Organic channels like SEO, AEO & GEO, and authority content compound steadily over 60 to 90+ days for long-term ROI.',
    },
    {
      q: 'Can you redesign our existing website or build a high-converting ad landing page?',
      a: 'Yes. We design fast, mobile-first custom websites and dedicated campaign landing pages engineered around conversion rate optimization (CRO), clean UI/UX, and frictionless lead capture forms + WhatsApp integration.',
    },
    {
      q: 'Which industries does JEXORA SOLUTIONS specialize in?',
      a: 'We have proven playbooks across 8 key sectors — Astrology & Spirituality, Restaurants & Cafés, Hotels & Resorts, Travel & Tourism, Real Estate, Salons & Beauty, Yoga & Wellness, and Fashion & Clothing — and we also build custom growth roadmaps for startups, SMEs, and service niches.',
    },
    {
      q: 'How do I get started with a free strategy consultation?',
      a: 'Simply submit the proposal form on this website or message us directly on WhatsApp. Our team reviews your current website, search visibility, and socials before your call, then shares a tailored growth plan with transparent deliverables and zero hidden fees.',
    },
  ];

  let popupTimer = null;
  let feedbackTimer = null;
  let feedbackHideTimer = null;
  let feedbackIndex = 0;
  let popupSubmitted = false;
  let popupFirstShown = false;
  let popupSecondShown = false;
  let popupLastClosedAt = 0;
  let engagementListenersAttached = false;
  let heroImagesPreloaded = false;

  // App Interactive State
  let currentSlide = 0;
  let slideTimer = null;
  let mobileMenuOpen = false;
  let mobileBarDismissed = false;
  let activeBlueprintFilter = 'all';
  let activeBlogFilter = 'all';
  let activeFaqIdx = 0;
  let activeIndustryIdx = 0;
  let activeServiceIdx = 0;
  let activeProcessIdx = 0;
  let activeDiffIdx = 0;
  let activeMarketIdx = 0;

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function getSvgIcon(name, cls = 'w-4 h-4') {
    const icons = {
      search: `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>`,
      sparkles: `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>`,
      megaphone: `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 11 18-5v12L3 14v-3z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/></svg>`,
      target: `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>`,
      share2: `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/></svg>`,
      layout: `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="1"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>`,
      clapperboard: `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z"/><path d="m6.2 5.3 3.1 3.9"/><path d="m12.4 3.4 3.1 4"/><path d="M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/></svg>`,
      palette: `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.9 0 1.6-.7 1.6-1.6 0-.4-.2-.8-.4-1.1-.3-.3-.4-.7-.4-1.1 0-.9.7-1.6 1.6-1.6H16c3.3 0 6-2.7 6-6 0-5.5-4.5-9.6-10-9.6Z"/></svg>`,
      package: `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>`,
      check: `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>`,
      compass: `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>`,
      users: `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
      trending: `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>`,
      globe: `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>`,
      chevronRight: `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>`,
      chevronLeft: `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>`,
      chevronDown: `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>`,
      chevronsRight: `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m6 17 5-5-5-5"/><path d="m13 17 5-5-5-5"/></svg>`,
      arrowRight: `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>`,
      mapPin: `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`,
      whatsapp: `<svg class="${cls}" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true"><path d="M16.04 3C8.86 3 3.04 8.82 3.04 16c0 2.29.6 4.53 1.74 6.5L3 29l6.68-1.75A12.94 12.94 0 0 0 16.04 29C23.22 29 29.04 23.18 29.04 16S23.22 3 16.04 3zm0 23.62c-2.06 0-4.08-.55-5.84-1.6l-.42-.25-3.96 1.04 1.06-3.86-.27-.44a10.6 10.6 0 0 1-1.63-5.51c0-5.88 4.78-10.66 10.66-10.66 2.85 0 5.53 1.11 7.54 3.12a10.6 10.6 0 0 1 3.12 7.54c0 5.88-4.78 10.62-10.26 10.62zm5.84-7.95c-.32-.16-1.9-.94-2.19-1.05-.29-.11-.51-.16-.72.16-.21.32-.83 1.05-1.01 1.26-.19.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.59-.95-.85-1.59-1.89-1.78-2.21-.19-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.72-1.74-.99-2.38-.26-.62-.53-.54-.72-.55h-.61c-.21 0-.56.08-.85.4-.29.32-1.12 1.09-1.12 2.66s1.15 3.09 1.31 3.3c.16.21 2.26 3.45 5.48 4.84.77.33 1.36.53 1.83.68.77.24 1.47.21 2.02.13.62-.09 1.9-.78 2.16-1.53.27-.75.27-1.39.19-1.53-.08-.13-.29-.21-.61-.37z"/></svg>`,
      facebook: `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>`,
      instagram: `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>`,
      linkedin: `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>`,
      moon: `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/><path d="M19 3v4"/><path d="M21 5h-4"/></svg>`,
      utensils: `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/></svg>`,
      building: `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="20" x="4" y="2" rx="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>`,
      plane: `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/></svg>`,
      home: `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
      scissors: `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="6" r="3"/><path d="M8.12 8.12 12 12"/><path d="M20 4 8.12 15.88"/><circle cx="6" cy="18" r="3"/><path d="M14.8 14.8 20 20"/></svg>`,
      heart: `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>`,
      bag: `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>`,
      star: `<svg class="${cls}" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`,
      fileText: `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>`,
      phone: `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
    };
    return icons[name] || icons.search;
  }

  function getLogoMarkup(variant = 'header') {
    if (variant === 'footer') {
      return `
        <span class="inline-flex items-center bg-white rounded-[2px] px-3.5 py-2 shadow-lg">
          <img src="/assets/jexora-logo.png" alt="JEXORA SOLUTIONS Logo" class="h-11 w-auto object-contain" />
        </span>
      `;
    }
    return `
      <img src="/assets/jexora-logo.png" alt="JEXORA SOLUTIONS Logo" class="h-12 w-auto object-contain transition-transform duration-200 hover:scale-[1.03]" />
    `;
  }

  function updateSEO(pathname) {
    if (window.JexoraSEO && typeof window.JexoraSEO.applyPageSEO === 'function') {
      window.JexoraSEO.applyPageSEO(pathname);
      return;
    }
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
        desc: 'Eight specialist digital marketing services: SEO Optimization, AEO & GEO Optimization, Social Media Marketing, Google Ads, Meta Ads & WhatsApp, Web Design, Video & Reels, and Graphic Design.',
      },
      '/industries': {
        title:
          'Industries We Serve | JEXORA SOLUTIONS — Marketing Adapted to Your Industry',
        desc: 'We shape channels, messaging and creative around how your customers actually discover and choose businesses like yours across 8 key industries.',
      },
      '/blog': {
        title:
          'Blog & Digital Growth Insights | JEXORA SOLUTIONS — SEO, AEO/GEO, Ads & Web Playbooks',
        desc: 'Read practical digital marketing playbooks from JEXORA SOLUTIONS covering SEO, AEO & GEO AI search, Google & Meta Ads, high-converting web design, and reels.',
      },
      '/contact': {
        title:
          "Contact JEXORA SOLUTIONS | Let's Discuss Your Next Growth Opportunity",
        desc: 'Share a few details and our team will get back to you about your free consultation.',
      },
    };
    let meta = seoMap[pathname];
    if (!meta && pathname.startsWith('/blog/')) {
      const slug = pathname.replace('/blog/', '');
      const post = BLOG_POSTS.find((p) => p.slug === slug);
      if (post) {
        meta = {
          title: `${post.title} | JEXORA SOLUTIONS Blog`,
          desc: post.excerpt,
        };
      }
    }
    meta = meta || seoMap['/'];
    document.title = meta.title;
    const descEl = document.querySelector('meta[name="description"]');
    if (descEl) descEl.setAttribute('content', meta.desc);
    const fullUrl = `https://jexorasolutions.com${pathname === '/' ? '/' : pathname}`;
    const canonEl = document.querySelector('link[rel="canonical"]');
    if (canonEl) canonEl.setAttribute('href', fullUrl);
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', meta.title);
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', meta.desc);
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', fullUrl);
  }

  function renderHeader(pathname) {
    const megaCards = [
      {
        tag: 'SEARCH & AI',
        title: 'SEO, AEO & GEO Visibility',
        desc: 'Rank on Google Search & get cited by AI answer engines.',
        href: '/services#seo-optimization',
        icon: 'search',
      },
      {
        tag: 'PAID ACQUISITION',
        title: 'Google, Meta & WhatsApp Ads',
        desc: 'Performance funnels engineered for daily qualified enquiries.',
        href: '/services#google-ads-management',
        icon: 'target',
      },
      {
        tag: 'CONVERSION UX',
        title: 'Websites & Landing Pages',
        desc: 'Custom responsive experiences built to convert visitors.',
        href: '/services#website-landing-page-design',
        icon: 'layout',
      },
      {
        tag: 'CREATIVE & VIDEO',
        title: 'Reels, Video & Graphic Design',
        desc: 'Scroll-stopping reels, campaign banners and high-impact ad visuals.',
        href: '/services#graphic-design',
        icon: 'palette',
      },
    ];

    return `
      <header id="ds-site-header" class="ds-header">
        <!-- Collapsing Top Utility Strip (Social Icons Only) -->
        <div class="ds-utility-bar">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-9 flex items-center justify-end">
            <div class="flex items-center gap-4">
              <a href="${SOCIAL_LINKS.facebook}" target="_blank" rel="noopener noreferrer" aria-label="Facebook" class="text-white/90 hover:text-[#7DD8FF] transition-colors">${getSvgIcon('facebook', 'w-4 h-4')}</a>
              <a href="${SOCIAL_LINKS.instagram}" target="_blank" rel="noopener noreferrer" aria-label="Instagram" class="text-white/90 hover:text-[#7DD8FF] transition-colors">${getSvgIcon('instagram', 'w-4 h-4')}</a>
              <a href="${SOCIAL_LINKS.linkedin}" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" class="text-white/90 hover:text-[#7DD8FF] transition-colors">${getSvgIcon('linkedin', 'w-4 h-4')}</a>
              <a href="${SOCIAL_LINKS.whatsappBase}?text=Hello%20JEXORA%20SOLUTIONS" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" class="inline-flex items-center justify-center">
                <span class="ds-wa-icon-anim">${getSvgIcon('whatsapp', 'w-[18px] h-[18px] text-[#25D366]')}</span>
              </a>
            </div>
          </div>
        </div>

        <!-- Main Sticky Navigation Row -->
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[72px] flex items-center justify-between relative">
          <a href="/" data-link class="flex items-center gap-3 focus:outline-none">
            ${getLogoMarkup('header')}
          </a>

          <nav class="hidden lg:flex items-center gap-6 xl:gap-7" aria-label="Main Navigation">
            <a href="/" data-link class="ds-nav-link ${pathname === '/' && window.location.hash !== '#faq' ? 'is-active' : ''}">HOME</a>

            <div class="ds-mega-trigger">
              <a href="/services" data-link class="ds-nav-link ${pathname === '/services' ? 'is-active' : ''}">
                <span>SERVICES</span>
                ${getSvgIcon('chevronDown', 'w-3.5 h-3.5 text-[#00B8FF]')}
              </a>
              <div class="ds-mega-drawer">
                <div class="max-w-7xl mx-auto px-6 lg:px-8 py-8">
                  <div class="flex items-center justify-between mb-6 pb-3 border-b border-white/10">
                    <div>
                      <p class="ds-eyebrow">EIGHT SPECIALIST CAPABILITIES</p>
                      <p class="text-sm font-bold text-white mt-0.5">Integrated Digital Marketing, Search, Ads &amp; Web Systems</p>
                    </div>
                    <a href="/services" data-link class="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.14em] text-[#00B8FF] hover:text-white transition-colors">
                      <span>VIEW ALL 8 SERVICES</span>
                      ${getSvgIcon('chevronsRight', 'w-4 h-4')}
                    </a>
                  </div>
                  <div class="grid grid-cols-4 gap-5">
                    ${megaCards
                      .map(
                        (c) => `
                      <a href="${c.href}" data-link class="ds-mega-card p-5 block group">
                        <div class="w-10 h-10 bg-[#00B8FF]/15 border border-[#00B8FF]/40 flex items-center justify-center text-[#00B8FF] mb-4 group-hover:bg-[#00B8FF] group-hover:text-[#0E2A6E] transition-colors">
                          ${getSvgIcon(c.icon, 'w-5 h-5')}
                        </div>
                        <p class="text-[10px] font-bold tracking-[0.2em] uppercase text-[#00B8FF] mb-1">${c.tag}</p>
                        <h3 class="text-sm font-bold text-white mb-1.5 group-hover:text-[#00B8FF] transition-colors">${c.title}</h3>
                        <p class="text-xs text-white/65 leading-relaxed">${c.desc}</p>
                      </a>
                    `
                      )
                      .join('')}
                  </div>
                </div>
              </div>
            </div>

            <a href="/industries" data-link class="ds-nav-link ${pathname === '/industries' ? 'is-active' : ''}">INDUSTRIES</a>
            <a href="/blog" data-link class="ds-nav-link ${pathname === '/blog' || pathname.startsWith('/blog/') ? 'is-active' : ''}">BLOG</a>
            <a href="/#faq" data-link class="ds-nav-link ${pathname === '/' && window.location.hash === '#faq' ? 'is-active' : ''}">FAQ</a>
            <a href="/about" data-link class="ds-nav-link ${pathname === '/about' ? 'is-active' : ''}">ABOUT US</a>
            <a href="/contact" data-link class="ds-nav-link ${pathname === '/contact' ? 'is-active' : ''}">CONTACT</a>
          </nav>

          <div class="hidden lg:flex items-center gap-3">
            <a href="/contact" data-link class="ds-btn-gradient px-5 py-2.5">
              <span>REQUEST A QUOTE</span>
              ${getSvgIcon('chevronRight', 'w-3.5 h-3.5 text-white')}
            </a>
          </div>

          <div class="lg:hidden flex items-center">
            <button type="button" id="mobile-menu-btn" aria-label="Toggle Menu" aria-expanded="${
              mobileMenuOpen ? 'true' : 'false'
            }" class="p-2 border border-[#D5E3F8] text-[#0F2557] hover:border-[#1D58C8] hover:text-[#1D58C8] transition-colors">
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
        } lg:hidden bg-white border-t border-[#D5E3F8] px-5 pt-4 pb-7 space-y-5 shadow-2xl">
          <nav class="flex flex-col space-y-1">
            ${[
              { label: 'Home', path: '/' },
              { label: 'Services', path: '/services' },
              { label: 'Industries', path: '/industries' },
              { label: 'Blog', path: '/blog' },
              { label: 'FAQ', path: '/#faq' },
              { label: 'About Us', path: '/about' },
              { label: 'Contact', path: '/contact' },
            ]
              .map((item) => {
                const isActive =
                  (item.path === '/#faq' && pathname === '/' && window.location.hash === '#faq') ||
                  (item.path === '/' && pathname === '/' && window.location.hash !== '#faq') ||
                  (item.path !== '/' && item.path !== '/#faq' && pathname === item.path) ||
                  (item.path === '/blog' && pathname.startsWith('/blog/'));
                return `
                  <a href="${item.path}" data-link class="px-3.5 py-3 text-xs font-bold uppercase tracking-[0.16em] flex items-center justify-between border-b border-[#EEF4FD] ${
                    isActive
                      ? 'text-[#1D58C8] border-l-2 border-l-[#1D58C8] bg-[#F2F7FF]'
                      : 'text-[#0F2557] hover:text-[#1D58C8]'
                  }">
                    <span>${item.label}</span>
                    ${getSvgIcon('chevronRight', 'w-4 h-4')}
                  </a>
                `;
              })
              .join('')}
          </nav>
          <div class="space-y-3 pt-1">
            <a href="/contact" data-link class="w-full ds-btn-gradient py-3.5">
              <span>REQUEST A QUOTE</span>
              ${getSvgIcon('chevronRight', 'w-4 h-4')}
            </a>
            <a href="${SOCIAL_LINKS.whatsappBase}?text=Hello%20JEXORA%20SOLUTIONS" target="_blank" rel="noopener noreferrer" class="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#16A34A] text-white text-xs font-bold uppercase tracking-[0.14em] py-3 transition-colors">
              <span class="ds-wa-icon-anim">${getSvgIcon('whatsapp', 'w-4 h-4 text-white')}</span>
              <span>WHATSAPP DIRECT</span>
            </a>
          </div>
        </div>

        <!-- Scroll Progress Indicator -->
        <div class="ds-scroll-progress-track">
          <div id="ds-scroll-bar" class="ds-scroll-progress-bar"></div>
        </div>
      </header>
    `;
  }

  function renderBlueprintCards(filter) {
    const filtered =
      filter === 'all'
        ? FEATURED_BLUEPRINTS
        : FEATURED_BLUEPRINTS.filter((b) => b.category === filter);

    return filtered
      .map((item, idx) => {
        const isReversed = idx % 2 === 1;
        return `
          <article class="ds-showcase-card grid grid-cols-1 lg:grid-cols-12 items-stretch ds-animate-in">
            <div class="lg:col-span-6 relative min-h-[260px] sm:min-h-[340px] overflow-hidden ${
              isReversed ? 'lg:order-2' : ''
            }">
              <img src="${item.image}" alt="${item.title}" loading="lazy" class="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105" />
              <div class="absolute inset-0 bg-gradient-to-t from-[#0E2A6E]/85 via-[#0E2A6E]/25 to-transparent"></div>
              <div class="absolute top-4 left-4 bg-[#0E2A6E]/80 backdrop-blur-md border border-[#00B8FF]/45 px-3 py-1.5 text-[10px] font-bold tracking-[0.2em] uppercase text-[#00B8FF]">
                ${item.badge}
              </div>
            </div>

            <div class="lg:col-span-6 flex flex-col justify-between relative bg-white ${
              isReversed ? 'lg:order-1' : ''
            }">
              <div class="p-7 sm:p-10 space-y-5">
                <p class="ds-eyebrow-dark">${item.tag}</p>
                <h3 class="text-2xl sm:text-[28px] font-extrabold text-[#0F2557] leading-tight">${item.title}</h3>
                <p class="text-xs sm:text-sm text-[#4B638C] leading-relaxed">${item.summary}</p>
                <div class="grid grid-cols-2 gap-4 pt-4 border-t border-[#D5E3F8]">
                  ${item.metrics
                    .map(
                      (m) => `
                    <div>
                      <p class="text-xl sm:text-2xl font-extrabold text-[#1D58C8] tracking-tight">${m.value}</p>
                      <p class="text-[11px] text-[#4B638C] mt-0.5 leading-snug">${m.label}</p>
                    </div>
                  `
                    )
                    .join('')}
                </div>
              </div>
              <div class="flex justify-end pt-2">
                <a href="/contact?service=${encodeURIComponent(
                  item.serviceLink
                )}" data-link class="ds-slanted-cta">
                  <span>ENQUIRE ABOUT THIS</span>
                  ${getSvgIcon('chevronsRight', 'w-4 h-4')}
                </a>
              </div>
            </div>
          </article>
        `;
      })
      .join('');
  }

  function renderIndustryCarouselContent(idx) {
    const ind = INDUSTRIES_DATA[idx] || INDUSTRIES_DATA[0];
    return `
      <div class="relative min-h-[400px] sm:min-h-[440px] bg-[#0E2A6E] border border-[#00B8FF]/35 overflow-hidden ds-animate-in">
        <img src="${ind.image}" alt="${ind.alt}" class="absolute inset-0 w-full h-full object-cover object-center opacity-55 transition-all duration-700" />
        <div class="absolute inset-0 bg-gradient-to-r from-[#0E2A6E] via-[#0E2A6E]/82 to-[#1D58C8]/45"></div>

        <div class="relative z-10 p-7 sm:p-12 lg:p-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[400px] sm:min-h-[440px]">
          <div class="lg:col-span-7 border-l-4 border-[#00B8FF] pl-6 space-y-4">
            <div class="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-[#00B8FF]">
              ${getSvgIcon(ind.iconName, 'w-4 h-4')}
              <span>INDUSTRY EXPERTISE · ${ind.focusTag}</span>
            </div>
            <h3 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">${ind.title}</h3>
            <p class="text-sm text-white/80 leading-relaxed max-w-xl">${ind.description}</p>
            <div class="flex flex-wrap gap-2 pt-1">
              ${ind.channels
                .map(
                  (ch) =>
                    `<span class="text-[11px] font-semibold bg-white/10 border border-white/15 text-white/90 px-3 py-1">${ch}</span>`
                )
                .join('')}
            </div>
            <div class="pt-3 flex flex-wrap items-center gap-3">
              <a href="/contact?industry=${encodeURIComponent(
                ind.title
              )}" data-link class="ds-btn-gradient px-6 py-3.5">
                <span>BUILD YOUR ${ind.title.split(' ')[0].toUpperCase()} PLAN</span>
                ${getSvgIcon('chevronRight', 'w-4 h-4')}
              </a>
              <div class="flex items-center gap-2">
                <button type="button" id="ind-prev" aria-label="Previous industry" class="w-10 h-10 border border-[#00B8FF]/60 bg-[#0E2A6E]/70 hover:bg-[#00B8FF] text-white hover:text-[#0E2A6E] flex items-center justify-center transition-colors">
                  ${getSvgIcon('chevronLeft', 'w-4 h-4')}
                </button>
                <button type="button" id="ind-next" aria-label="Next industry" class="w-10 h-10 border border-[#00B8FF]/60 bg-[#0E2A6E]/70 hover:bg-[#00B8FF] text-white hover:text-[#0E2A6E] flex items-center justify-center transition-colors">
                  ${getSvgIcon('chevronRight', 'w-4 h-4')}
                </button>
              </div>
            </div>
          </div>

          <div class="hidden lg:flex lg:col-span-5 justify-end">
            <div class="bg-[#0E2A6E]/75 backdrop-blur-md border border-white/15 border-t-2 border-t-[#00B8FF] p-6 w-full max-w-xs space-y-4">
              <p class="ds-eyebrow">SECTOR FOCUS</p>
              <p class="text-2xl font-extrabold text-white">0${idx + 1} <span class="text-white/35 text-base font-semibold">/ 0${INDUSTRIES_DATA.length}</span></p>
              <p class="text-xs text-white/75 leading-relaxed">Tailored messaging, visual direction, and channel mix designed around how ${ind.title.toLowerCase()} buyers actually decide.</p>
              <a href="/industries#${ind.id}" data-link class="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-[#00B8FF] hover:text-white transition-colors">
                <span>VIEW ALL INDUSTRIES</span>
                ${getSvgIcon('chevronsRight', 'w-3.5 h-3.5')}
              </a>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  function renderServicePanelContent(idx) {
    const s = SERVICES_DATA[idx] || SERVICES_DATA[0];
    return `
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pt-8 ds-animate-in">
        <div class="lg:col-span-6 space-y-5">
          <div class="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-[#1D58C8]">
            <span>SERVICE ${s.number}</span>
            <span class="text-[#00B8FF]">/</span>
            <span>JEXORA SPECIALIST CAPABILITY</span>
          </div>
          <h3 class="text-2xl sm:text-3xl font-extrabold text-[#0E2A6E] leading-tight">${s.title}</h3>
          <p class="text-sm text-[#475569] leading-relaxed">${s.shortDesc}</p>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div class="bg-[#F2F7FF] border-l-2 border-[#1D58C8] p-4 space-y-1.5">
              <p class="text-[10px] font-bold uppercase tracking-[0.18em] text-[#1D58C8]">PROBLEMS IT SOLVES</p>
              <p class="text-xs text-[#334155] leading-relaxed">${s.problemsAddressed}</p>
            </div>
            <div class="bg-[#F2F7FF] border-l-2 border-[#00B8FF] p-4 space-y-1.5">
              <p class="text-[10px] font-bold uppercase tracking-[0.18em] text-[#1D58C8]">WHO BENEFITS</p>
              <p class="text-xs text-[#334155] leading-relaxed">${s.whoBenefits}</p>
            </div>
          </div>

          <div class="pt-2 flex flex-wrap items-center gap-4">
            <a href="/contact?service=${encodeURIComponent(
              s.title
            )}" data-link class="ds-btn-gradient px-6 py-3.5">
              <span>ENQUIRE ABOUT ${s.shortLabel.toUpperCase()}</span>
              ${getSvgIcon('chevronRight', 'w-4 h-4')}
            </a>
            <a href="/services#${s.id}" data-link class="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.14em] text-[#1D58C8] border-b-2 border-[#00B8FF] pb-0.5 hover:text-[#0E2A6E] transition-colors">
              <span>FULL SERVICE BREAKDOWN</span>
              ${getSvgIcon('chevronRight', 'w-3.5 h-3.5')}
            </a>
          </div>
        </div>

        <div class="lg:col-span-6">
          <div class="bg-[#0E2A6E] text-white border border-[#00B8FF]/35 border-t-4 border-t-[#00B8FF] p-7 sm:p-8 shadow-2xl space-y-6 relative overflow-hidden">
            <div class="flex items-center justify-between border-b border-white/10 pb-4">
              <div class="flex items-center gap-3">
                <div class="w-11 h-11 bg-[#1D58C8]/25 border border-[#00B8FF]/50 flex items-center justify-center text-[#00B8FF]">
                  ${getSvgIcon(s.iconName, 'w-5 h-5')}
                </div>
                <div>
                  <p class="text-[10px] font-bold uppercase tracking-[0.22em] text-[#00B8FF]">EXECUTION SCOPE</p>
                  <p class="text-sm font-bold text-white">${s.title}</p>
                </div>
              </div>
              <span class="text-2xl font-extrabold text-white/15">${s.number}</span>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div class="space-y-3">
                <p class="text-[10px] font-bold uppercase tracking-[0.2em] text-[#00B8FF]">WHAT'S INCLUDED</p>
                <ul class="space-y-2.5">
                  ${s.whatsIncluded
                    .map(
                      (item) => `
                    <li class="flex items-start gap-2.5 text-xs text-white/85">
                      ${getSvgIcon('check', 'w-3.5 h-3.5 text-[#00B8FF] shrink-0 mt-0.5')}
                      <span>${item}</span>
                    </li>
                  `
                    )
                    .join('')}
                </ul>
              </div>
              <div class="space-y-3">
                <p class="text-[10px] font-bold uppercase tracking-[0.2em] text-[#00B8FF]">KEY DELIVERABLES</p>
                <ul class="space-y-2.5">
                  ${s.keyDeliverables
                    .map(
                      (item) => `
                    <li class="flex items-start gap-2.5 text-xs text-white/85">
                      ${getSvgIcon('check', 'w-3.5 h-3.5 text-[#00B8FF] shrink-0 mt-0.5')}
                      <span>${item}</span>
                    </li>
                  `
                    )
                    .join('')}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  function renderProcessPanelContent(idx) {
    const p = PROCESS_STEPS[idx] || PROCESS_STEPS[0];
    return `
      <div class="mt-10 bg-[#F2F7FF] border border-[#D5E3F8] border-t-4 border-t-[#1D58C8] p-7 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ds-animate-in">
        <div class="lg:col-span-7 space-y-4">
          <p class="ds-eyebrow-dark">PHASE ${p.step} — ${p.title.toUpperCase()}</p>
          <h3 class="text-2xl sm:text-3xl font-extrabold text-[#0E2A6E]">${p.headline}</h3>
          <p class="text-sm text-[#475569] leading-relaxed">${p.desc}</p>
        </div>
        <div class="lg:col-span-5 bg-[#0E2A6E] text-white p-6 border-l-4 border-[#00B8FF] space-y-3.5">
          <p class="ds-eyebrow">STAGE DELIVERABLES</p>
          <ul class="space-y-2.5">
            ${p.deliverables
              .map(
                (d) => `
              <li class="flex items-start gap-2.5 text-xs text-white/85">
                ${getSvgIcon('check', 'w-4 h-4 text-[#00B8FF] shrink-0 mt-0.5')}
                <span>${d}</span>
              </li>
            `
              )
              .join('')}
          </ul>
        </div>
      </div>
    `;
  }

  function renderDiffPanelContent(idx) {
    const d = DIFFERENTIATORS[idx] || DIFFERENTIATORS[0];
    return `
      <div class="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#F2F7FF] border border-[#D5E3F8] p-7 sm:p-10 ds-animate-in">
        <div class="lg:col-span-7 space-y-4">
          <p class="ds-eyebrow-dark">THE JEXORA ADVANTAGE</p>
          <h3 class="text-2xl sm:text-3xl font-extrabold text-[#0E2A6E] leading-tight">${d.title}</h3>
          <p class="text-sm text-[#475569] leading-relaxed">${d.desc}</p>
          <ul class="space-y-2.5 pt-2">
            ${d.highlights
              .map(
                (h) => `
              <li class="flex items-start gap-2.5 text-xs sm:text-sm font-medium text-[#0E2A6E]">
                ${getSvgIcon('check', 'w-4 h-4 text-[#1D58C8] shrink-0 mt-0.5')}
                <span>${h}</span>
              </li>
            `
              )
              .join('')}
          </ul>
        </div>
        <div class="lg:col-span-5">
          <div class="bg-[#0E2A6E] text-white p-8 border border-[#00B8FF]/35 relative overflow-hidden space-y-4">
            <div class="w-12 h-1 bg-gradient-to-r from-[#1D58C8] to-[#00B8FF]"></div>
            <p class="text-5xl sm:text-6xl font-extrabold ds-gradient-text-light tracking-tight">${d.stat}</p>
            <p class="text-xs font-bold uppercase tracking-[0.2em] text-[#00B8FF]">${d.statLabel}</p>
            <p class="text-xs text-white/70 leading-relaxed pt-2 border-t border-white/10">
              Engineered for measurable business growth without bloated retainers or generic templates.
            </p>
            <a href="/contact" data-link class="ds-btn-gradient w-full py-3 mt-2">
              <span>REQUEST YOUR AUDIT</span>
              ${getSvgIcon('chevronRight', 'w-4 h-4')}
            </a>
          </div>
        </div>
      </div>
    `;
  }

  function renderEmbeddedCtaStrip(headline = 'YOUR INDUSTRY. YOUR NEXT GROWTH STORY.') {
    return `
      <div class="bg-[#0E2A6E] border border-[#00B8FF]/30 p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xl">
        <div class="border-l-4 border-[#00B8FF] pl-5 space-y-1">
          <p class="text-xs sm:text-sm font-extrabold uppercase tracking-[0.16em] text-white">${headline}</p>
          <p class="text-xs text-white/70">Let's build a strategy tailored to your brand, audience and revenue goals.</p>
        </div>
        <a href="/contact" data-link class="ds-btn-gradient px-6 py-3.5 shrink-0">
          <span>REQUEST A QUOTE</span>
          ${getSvgIcon('chevronRight', 'w-4 h-4')}
        </a>
      </div>
    `;
  }

  function renderFaqSection() {
    return `
      <section id="faq" class="scroll-mt-24 bg-white text-[#0E2A6E] py-16 sm:py-20 lg:py-24 border-t border-[#D5E3F8]">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            <!-- Left Sticky Intro & Direct CTA Card -->
            <div class="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
              <div class="space-y-3">
                <p class="ds-eyebrow-dark">FREQUENTLY ASKED QUESTIONS</p>
                <h2 class="text-3xl sm:text-4xl font-extrabold text-[#0E2A6E] leading-tight">
                  Clear Answers Before <span class="ds-gradient-text">We Scale Together</span>
                </h2>
                <p class="text-sm text-[#4B638C] leading-relaxed">
                  Everything founders and marketing teams ask about our 8 specialist services, worldwide delivery, pricing transparency, and timelines.
                </p>
              </div>

              <div class="bg-[#0E2A6E] text-white border-t-4 border-[#00B8FF] p-6 space-y-4 shadow-xl">
                <p class="ds-eyebrow">STILL HAVE A QUESTION?</p>
                <p class="text-sm font-bold text-white leading-snug">
                  Speak directly with our strategy team and get a tailored answer for your business.
                </p>
                <div class="flex flex-col gap-2.5 pt-1">
                  <a href="/contact" data-link class="ds-btn-gradient w-full py-3">
                    <span>BOOK FREE CONSULTATION</span>
                    ${getSvgIcon('chevronRight', 'w-4 h-4')}
                  </a>
                  <a href="${SOCIAL_LINKS.whatsappBase}?text=Hello%20JEXORA%20SOLUTIONS%2C%20I%20have%20a%20quick%20question%20about%20your%20services." target="_blank" rel="noopener noreferrer" class="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#16A34A] text-white text-xs font-bold uppercase tracking-[0.14em] py-3 transition-colors">
                    <span class="ds-wa-icon-anim">${getSvgIcon('whatsapp', 'w-4 h-4 text-white')}</span>
                    <span>ASK ON WHATSAPP</span>
                  </a>
                </div>
              </div>
            </div>

            <!-- Right Interactive FAQ Accordion -->
            <div class="lg:col-span-8 space-y-3" id="faq-accordion-list">
              ${FAQ_DATA.map((item, i) => {
                const isOpen = i === activeFaqIdx;
                return `
                  <div data-faq-card="${i}" class="border transition-all duration-200 ${
                    isOpen
                      ? 'border-[#1D58C8] bg-[#F2F7FF] shadow-md'
                      : 'border-[#D5E3F8] bg-white hover:border-[#00B8FF]'
                  }">
                    <button type="button" data-faq-idx="${i}" aria-expanded="${
                      isOpen ? 'true' : 'false'
                    }" class="w-full px-5 sm:px-6 py-4 sm:py-5 text-left flex items-center justify-between gap-4 cursor-pointer">
                      <div class="flex items-start gap-3.5">
                        <span class="text-xs font-extrabold tracking-[0.18em] pt-0.5 shrink-0 ${
                          isOpen ? 'text-[#1D58C8]' : 'text-[#00B8FF]'
                        }">0${i + 1}</span>
                        <span class="text-sm sm:text-base font-extrabold text-[#0F2557] leading-snug">${item.q}</span>
                      </div>
                      <span data-faq-chevron class="w-8 h-8 shrink-0 flex items-center justify-center border transition-all duration-200 ${
                        isOpen
                          ? 'bg-[#1D58C8] border-[#1D58C8] text-white rotate-180'
                          : 'bg-[#F2F7FF] border-[#D5E3F8] text-[#1D58C8]'
                      }">
                        ${getSvgIcon('chevronDown', 'w-4 h-4')}
                      </span>
                    </button>
                    <div data-faq-body class="${
                      isOpen ? 'block' : 'hidden'
                    } px-5 sm:px-6 pb-5 pt-0 pl-12 sm:pl-14">
                      <p class="text-xs sm:text-sm text-[#4B638C] leading-relaxed border-t border-[#D5E3F8] pt-3.5">${item.a}</p>
                    </div>
                  </div>
                `;
              }).join('')}
            </div>
          </div>
        </div>
      </section>
    `;
  }

  function renderHomePage() {
    const slide = HERO_SLIDES[currentSlide];
    const marqueeItems = [
      'SEO OPTIMIZATION',
      'AEO & GEO AI SEARCH',
      'GOOGLE ADS MANAGEMENT',
      'META & WHATSAPP ADS',
      'WEBSITE & LANDING PAGES',
      'VIDEO & REEL EDITING',
      'GRAPHIC DESIGN',
      'WORLDWIDE DIGITAL GROWTH PARTNER',
    ];

    return `
      <main>
        <!-- ===============================================================
             BAND 0: ASYMMETRIC DIGITAL SILK HERO + WHITE PROPOSAL CARD
             =============================================================== -->
        <section id="hero-slider" class="ds-hero-bg pt-[108px] lg:pt-[112px] text-white">
          <div class="absolute inset-0 z-0">
            <img id="hero-slide-img" src="${slide.image}" alt="${slide.heading}" class="w-full h-full object-cover object-center transition-opacity duration-700" />
            <div class="absolute inset-0 ds-hero-scrim"></div>
            <div class="absolute inset-0 ds-grid-pattern opacity-60"></div>
            <div class="ds-ambient-glow-tr"></div>
            <div class="ds-ambient-glow-bl"></div>
          </div>

          <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-9 pb-8 lg:pb-10">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              <!-- Left Authority Column (Crisp Roboto Editorial Hierarchy) -->
              <div class="lg:col-span-7 space-y-5">
                <h1 id="hero-slide-heading" class="text-[42px] sm:text-[54px] lg:text-[66px] font-bold tracking-[-0.02em] text-white leading-[1.08]">
                  <span class="block">${slide.heading}</span>
                  <span class="block">${slide.accentHeading}</span>
                </h1>

                <p id="hero-slide-sub" class="text-xl sm:text-2xl lg:text-[26px] font-bold text-white tracking-[-0.01em] leading-snug pt-1">${slide.subheadline}</p>

                <p id="hero-slide-desc" class="text-base sm:text-[17px] font-normal text-white/95 leading-[1.6] max-w-[560px]">${slide.description}</p>

                <div class="pt-2 flex flex-wrap items-center gap-3.5">
                  <a href="/services" data-link class="ds-btn-gradient px-6 py-3.5">
                    <span>EXPLORE OUR SERVICES</span>
                    ${getSvgIcon('chevronRight', 'w-4 h-4')}
                  </a>
                  <a href="${SOCIAL_LINKS.whatsappBase}?text=Hello%20JEXORA%20SOLUTIONS%2C%20I%20would%20like%20a%20free%20strategy%20call." target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#16A34A] text-white border border-white/40 rounded-[2px] text-xs font-bold uppercase tracking-[0.14em] px-5 py-3.5 shadow-lg transition-all">
                    <span class="ds-wa-icon-anim">${getSvgIcon('whatsapp', 'w-4 h-4 text-white')}</span>
                    <span>WHATSAPP DIRECT</span>
                  </a>
                </div>

                <!-- Hero Slide Controls -->
                <div class="pt-3 flex items-center gap-4">
                  <div class="flex items-center gap-2">
                    ${HERO_SLIDES.map(
                      (_, i) => `
                      <button type="button" data-slide-idx="${i}" aria-label="Slide ${
                        i + 1
                      }" class="h-1 transition-all duration-300 ${
                        i === currentSlide
                          ? 'w-10 bg-[#00B8FF]'
                          : 'w-4 bg-white/30 hover:bg-white/60'
                      }"></button>
                    `
                    ).join('')}
                  </div>
                  <span id="hero-slide-counter" class="text-[11px] font-bold tracking-[0.2em] text-white/70">0${
                    currentSlide + 1
                  } / 0${HERO_SLIDES.length}</span>
                  <div class="flex items-center gap-1.5">
                    <button type="button" id="slide-prev" aria-label="Previous slide" class="w-8 h-8 border border-white/25 hover:border-[#00B8FF] hover:text-[#00B8FF] flex items-center justify-center text-white transition-colors">
                      ${getSvgIcon('chevronLeft', 'w-3.5 h-3.5')}
                    </button>
                    <button type="button" id="slide-next" aria-label="Next slide" class="w-8 h-8 border border-white/25 hover:border-[#00B8FF] hover:text-[#00B8FF] flex items-center justify-center text-white transition-colors">
                      ${getSvgIcon('chevronRight', 'w-3.5 h-3.5')}
                    </button>
                  </div>
                </div>

                <!-- Authority Recognition Strip -->
                <div class="pt-6 mt-4 border-t border-white/15 grid grid-cols-1 sm:grid-cols-2 gap-5 items-center max-w-xl">
                  <div class="flex items-center gap-3">
                    <div class="w-10 h-10 bg-[#00B8FF]/15 border border-[#00B8FF]/45 flex items-center justify-center text-[#00B8FF] shrink-0">
                      ${getSvgIcon('globe', 'w-5 h-5')}
                    </div>
                    <div>
                      <div class="flex items-center gap-0.5 text-[#00B8FF] mb-0.5">
                        ${Array(5)
                          .fill(getSvgIcon('star', 'w-3 h-3'))
                          .join('')}
                      </div>
                      <p class="text-xs font-bold text-white">Worldwide Digital Reach</p>
                      <p class="text-[11px] text-white/65">Serving Brands Across Every Time Zone</p>
                    </div>
                  </div>
                  <div class="sm:border-l sm:border-white/15 sm:pl-5">
                    <p class="text-[10px] font-bold uppercase tracking-[0.2em] text-[#00B8FF]">FULL-STACK DIGITAL AGENCY</p>
                    <p class="text-sm font-extrabold text-white tracking-tight mt-0.5">8 Specialist Disciplines</p>
                    <p class="text-[11px] text-white/60">SEO · AEO/GEO · Paid · Web · Creative</p>
                  </div>
                </div>
              </div>

              <!-- Right Crisp White Conversion Card -->
              <div class="lg:col-span-5">
                <div id="hero-proposal-container" class="ds-proposal-card p-5 sm:p-6">
                  <div class="mb-4">
                    <p class="text-[10px] font-extrabold uppercase tracking-[0.24em] text-[#1D58C8]">REQUEST A PROPOSAL</p>
                    <h2 class="text-xl sm:text-2xl font-extrabold text-[#0E2A6E] tracking-tight mt-0.5">Start Getting Results</h2>
                  </div>

                  <form id="hero-proposal-form" name="consultation" method="POST" data-netlify="true" netlify-honeypot="bot-field" novalidate class="space-y-2.5">
                    <input type="hidden" name="form-name" value="consultation" />
                    <input type="hidden" name="country" value="Global Enquiry" />
                    <input type="hidden" name="monthlyBudget" value="Prefer not to say" />
                    <input type="hidden" name="privacyConsent" value="Agreed" />
                    <p class="hidden"><label>Bot: <input name="bot-field" /></label></p>

                    <div class="ds-field-wrap">
                      <input type="text" name="fullName" placeholder="Your Name *" required aria-label="Your Name" class="ds-proposal-input" />
                    </div>
                    <div class="ds-field-wrap">
                      <input type="text" name="companyName" placeholder="Company or Brand Name *" required aria-label="Company Name" class="ds-proposal-input" />
                    </div>
                    <div class="ds-field-wrap">
                      <input type="email" name="email" placeholder="Business Email *" required aria-label="Business Email" class="ds-proposal-input" />
                    </div>
                    <div class="ds-field-wrap">
                      <select name="serviceRequired" required aria-label="Service Required" class="ds-proposal-input">
                        <option value="">Service Required *</option>
                        ${SERVICES_DATA.map(
                          (s) => `<option value="${s.title}">${s.title}</option>`
                        ).join('')}
                      </select>
                    </div>
                    <div class="ds-field-wrap">
                      <textarea name="projectDetails" rows="2" placeholder="Tell Us About Your Project &amp; Goals *" required aria-label="Project Details" class="ds-proposal-input"></textarea>
                    </div>

                    <p id="hero-form-err" role="alert" class="hidden text-[11px] font-semibold text-[#DC2626]"></p>

                    <button type="submit" class="ds-btn-gradient w-full py-3.5 mt-1">
                      <span>GET MY PROPOSAL</span>
                      ${getSvgIcon('chevronRight', 'w-4 h-4')}
                    </button>
                  </form>

                  <!-- WHAT HAPPENS NEXT Micro-Diagram -->
                  <div class="mt-5 pt-4 border-t border-[#D5E3F8]">
                    <div class="flex items-center gap-2 mb-3">
                      <span class="h-[1px] bg-[#DCE5F2] flex-grow"></span>
                      <span class="text-[9px] font-extrabold uppercase tracking-[0.22em] text-[#64748B]">WHAT HAPPENS NEXT?</span>
                      <span class="h-[1px] bg-[#DCE5F2] flex-grow"></span>
                    </div>
                    <div class="flex items-center justify-between text-center gap-1">
                      <div class="flex flex-col items-center gap-1">
                        <span class="w-7 h-7 bg-[#F2F7FF] border border-[#D5E3F8] flex items-center justify-center text-[#1D58C8]">${getSvgIcon('fileText', 'w-3.5 h-3.5')}</span>
                        <span class="text-[10px] font-bold text-[#0E2A6E]">Complete Form</span>
                      </div>
                      <span class="text-[#00B4FF] font-extrabold text-[11px] tracking-tighter">&gt;&gt;&gt;</span>
                      <div class="flex flex-col items-center gap-1">
                        <span class="w-7 h-7 bg-[#F2F7FF] border border-[#D5E3F8] flex items-center justify-center text-[#1D58C8]">${getSvgIcon('phone', 'w-3.5 h-3.5')}</span>
                        <span class="text-[10px] font-bold text-[#0E2A6E]">Free Strategy Call</span>
                      </div>
                      <span class="text-[#00B4FF] font-extrabold text-[11px] tracking-tighter">&gt;&gt;&gt;</span>
                      <div class="flex flex-col items-center gap-1">
                        <span class="w-7 h-7 bg-[#F2F7FF] border border-[#D5E3F8] flex items-center justify-center text-[#1D58C8]">${getSvgIcon('trending', 'w-3.5 h-3.5')}</span>
                        <span class="text-[10px] font-bold text-[#0E2A6E]">Get Proposal</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Hero Bottom Infinite Capabilities Ticker -->
          <div class="relative z-10 border-t border-white/10 bg-[#0E2A6E]/65 backdrop-blur-md py-4">
            <div class="ds-marquee-wrap">
              <div class="ds-marquee-track gap-10 items-center">
                ${[...marqueeItems, ...marqueeItems]
                  .map(
                    (txt) => `
                  <div class="flex items-center gap-10 shrink-0">
                    <span class="text-xs font-extrabold tracking-[0.22em] text-white/75 hover:text-[#00B8FF] transition-colors">${txt}</span>
                    <span class="w-1.5 h-1.5 bg-[#00B8FF] rotate-45"></span>
                  </div>
                `
                  )
                  .join('')}
              </div>
            </div>
          </div>
        </section>

        <!-- ===============================================================
             BAND 1: AGENCY PRESENTATION BANNER (ROYAL BLUE GRADIENT)
             =============================================================== -->
        <section class="ds-royal-band text-white py-16 sm:py-20 lg:py-24 relative overflow-hidden">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              <div class="lg:col-span-6 space-y-5">
                <p class="ds-eyebrow">ABOUT JEXORA SOLUTIONS</p>
                <h2 class="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-white leading-[1.12]">
                  Your Business Deserves to Grow. We Help Make It Happen.
                </h2>
                <p class="text-sm sm:text-base text-white/90 leading-relaxed">
                  We help businesses turn their ideas into a strong online presence. From building your website to promoting your brand, we make it easier for people to find you, trust you and choose your business.
                </p>
                <ul class="space-y-3 pt-1">
                  <li class="flex items-start gap-3 text-sm font-medium text-white/95">
                    ${getSvgIcon('check', 'w-4 h-4 text-[#00B8FF] shrink-0 mt-1')}
                    <span><strong>Grow Your Brand</strong> – Build a strong and professional brand identity.</span>
                  </li>
                  <li class="flex items-start gap-3 text-sm font-medium text-white/95">
                    ${getSvgIcon('check', 'w-4 h-4 text-[#00B8FF] shrink-0 mt-1')}
                    <span><strong>Reach More Customers</strong> – Connect with the right people through online marketing.</span>
                  </li>
                  <li class="flex items-start gap-3 text-sm font-medium text-white/95">
                    ${getSvgIcon('check', 'w-4 h-4 text-[#00B8FF] shrink-0 mt-1')}
                    <span><strong>Build Your Website</strong> – Create a website that looks great and works smoothly.</span>
                  </li>
                  <li class="flex items-start gap-3 text-sm font-medium text-white/95">
                    ${getSvgIcon('check', 'w-4 h-4 text-[#00B8FF] shrink-0 mt-1')}
                    <span><strong>Get More Business</strong> – Turn online visitors into potential customers.</span>
                  </li>
                </ul>
                <div class="pt-2 border-t border-white/15 space-y-1.5">
                  <p class="text-sm sm:text-base font-extrabold text-[#7DD8FF]">
                    One Team. Complete Digital Solutions. Real Business Growth.
                  </p>
                  <p class="text-xs sm:text-sm text-white/85 leading-relaxed">
                    We bring creativity, technology and smart marketing together to help your business move forward.
                  </p>
                </div>
                <div class="pt-2">
                  <a href="/about" data-link class="ds-btn-glass px-6 py-3.5">
                    <span>MEET OUR AGENCY</span>
                    ${getSvgIcon('chevronRight', 'w-4 h-4 text-[#00B8FF]')}
                  </a>
                </div>
              </div>

              <div class="lg:col-span-6">
                <div class="relative bg-[#0E2A6E]/70 border border-[#00B8FF]/40 p-3 shadow-2xl">
                  <div class="relative overflow-hidden aspect-[16/10]">
                    <img src="/assets/digital-marketing-growth.jpg" alt="JEXORA SOLUTIONS Digital Marketing & Business Growth" class="w-full h-full object-cover" />
                    <div class="absolute inset-0 bg-gradient-to-t from-[#0E2A6E]/90 via-[#0E2A6E]/30 to-transparent"></div>
                    <div class="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
                      <div>
                        <p class="ds-eyebrow">WHERE TECHNOLOGY MEETS POSSIBILITIES</p>
                        <p class="text-base sm:text-lg font-extrabold text-white mt-0.5">Strategy · Design · Acquisition</p>
                      </div>
                      <a href="/services" data-link class="w-11 h-11 bg-[#00B8FF] hover:bg-white text-[#0E2A6E] flex items-center justify-center shrink-0 transition-colors" aria-label="Explore JEXORA Services">
                        ${getSvgIcon('arrowRight', 'w-5 h-5')}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- ===============================================================
             BAND 2: FEATURED GROWTH BLUEPRINTS (OBSIDIAN BLACK + FILTERS)
             =============================================================== -->
        <section class="ds-sapphire-band text-white pt-20 sm:pt-24 pb-36 relative overflow-hidden">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div class="text-center max-w-3xl mx-auto space-y-3 mb-10">
              <p class="ds-eyebrow">SEE OUR CAPABILITIES IN ACTION</p>
              <h2 class="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-white leading-tight">
                Featured Digital Growth Blueprints
              </h2>
              <p class="text-xs sm:text-sm text-white/70 leading-relaxed">
                Filter our integrated growth frameworks across search, AI discovery, paid acquisition, websites and industry-specific funnels.
              </p>
            </div>

            <!-- Category Filter Pill Bar -->
            <div class="flex justify-center mb-12">
              <div class="inline-flex flex-wrap justify-center bg-[#143992] border border-white/15">
                ${[
                  { key: 'all', label: 'Featured All' },
                  { key: 'search', label: 'Search & AI' },
                  { key: 'paid', label: 'Paid Media' },
                  { key: 'web', label: 'Web & UX' },
                ]
                  .map(
                    (tab) => `
                  <button type="button" data-bp-filter="${tab.key}" class="ds-filter-pill ${
                      activeBlueprintFilter === tab.key ? 'is-active' : ''
                    }">${tab.label}</button>
                `
                  )
                  .join('')}
              </div>
            </div>

            <div id="blueprint-cards-list" class="space-y-8">
              ${renderBlueprintCards(activeBlueprintFilter)}
            </div>
          </div>
        </section>

        <!-- ===============================================================
             BAND 3: OVERLAPPING SEAM FOUNDER & VISION QUOTE CARD
             =============================================================== -->
        <section class="relative z-20 -mt-20 -mb-20 px-4 sm:px-6 lg:px-8">
          <div class="max-w-5xl mx-auto ds-quote-seam p-8 sm:p-12 text-white relative overflow-hidden">
            <div class="absolute top-4 right-8 text-[110px] leading-none font-extrabold text-[#00B8FF]/15 select-none pointer-events-none">&rdquo;</div>
            <div class="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
              <div class="md:col-span-8 space-y-4">
                <p class="ds-eyebrow">OUR FOUNDER'S VISION</p>
                <blockquote class="text-lg sm:text-xl font-bold text-white leading-relaxed">
                  "To be a creative and digital power that goes beyond launching brands — shaping an unforgettable legacy in the market and the hearts of people for generations."
                </blockquote>
                <a href="/about" data-link class="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[#00B8FF] hover:text-white transition-colors pt-1">
                  <span>MEET FOUNDER JIGYASA SAHU</span>
                  ${getSvgIcon('chevronsRight', 'w-4 h-4')}
                </a>
              </div>
              <div class="md:col-span-4 flex items-center md:justify-end gap-4">
                <div class="w-16 h-16 rounded-full overflow-hidden border-2 border-[#00B8FF] shrink-0 bg-white">
                  <img src="/assets/founder-jigyasa-sahu.jpg" alt="Jigyasa Sahu — Founder" class="w-full h-full object-cover object-top" />
                </div>
                <div>
                  <p class="text-sm font-extrabold text-white">Jigyasa Sahu</p>
                  <p class="text-xs text-[#00B8FF] font-semibold">Founder · JEXORA SOLUTIONS</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- ===============================================================
             BAND 4: DUAL-ROW FROSTED GLASS EXPERTISE MARQUEE
             =============================================================== -->
        <section class="ds-royal-band text-white pt-32 pb-20 relative overflow-hidden">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-2 mb-12">
            <p class="ds-eyebrow">FULL-SERVICE CAPABILITY MATRIX</p>
            <h2 class="text-3xl sm:text-4xl font-extrabold text-white">Specialist Services &amp; Industries Across Borders</h2>
          </div>

          <div class="space-y-4">
            <div class="ds-marquee-wrap">
              <div class="ds-marquee-track gap-4">
                ${[...SERVICES_DATA, ...SERVICES_DATA]
                  .map(
                    (s) => `
                  <a href="/services#${s.id}" data-link class="w-64 shrink-0 bg-[#0E2A6E]/55 backdrop-blur-md border border-white/15 hover:border-[#00B8FF] p-5 transition-colors block">
                    <div class="flex items-center justify-between mb-3">
                      <span class="text-[#00B8FF]">${getSvgIcon(s.iconName, 'w-5 h-5')}</span>
                      <span class="text-[10px] font-bold tracking-[0.2em] text-white/45">${s.number}</span>
                    </div>
                    <p class="text-sm font-bold text-white">${s.title}</p>
                    <p class="text-[11px] text-white/60 mt-1 line-clamp-1">${s.whatsIncluded[0]}</p>
                  </a>
                `
                  )
                  .join('')}
              </div>
            </div>

            <div class="ds-marquee-wrap">
              <div class="ds-marquee-track-reverse gap-4">
                ${[...INDUSTRIES_DATA, ...INDUSTRIES_DATA]
                  .map(
                    (ind) => `
                  <a href="/industries#${ind.id}" data-link class="w-64 shrink-0 bg-[#0E2A6E]/45 backdrop-blur-md border border-white/15 hover:border-[#00B8FF] p-5 transition-colors block">
                    <div class="flex items-center justify-between mb-2">
                      <span class="text-[#00B8FF]">${getSvgIcon(ind.iconName, 'w-5 h-5')}</span>
                      <span class="text-[10px] font-bold uppercase tracking-[0.14em] text-[#00B8FF]/80">${ind.focusTag}</span>
                    </div>
                    <p class="text-sm font-bold text-white">${ind.title}</p>
                  </a>
                `
                  )
                  .join('')}
              </div>
            </div>
          </div>
        </section>

        <!-- ===============================================================
             BAND 5: INDUSTRIES SERVED EDITORIAL CAROUSEL (LIGHT ICE BASE)
             =============================================================== -->
        <section class="bg-[#F2F7FF] text-[#0E2A6E] py-16 sm:py-20 lg:py-24">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            ${renderEmbeddedCtaStrip()}

            <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
              <div class="lg:col-span-7 space-y-2">
                <p class="ds-eyebrow-dark">INDUSTRIES WE SERVE</p>
                <h2 class="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0E2A6E] leading-[1.12]">
                  Digital Marketing Built For <span class="ds-gradient-text">Every High-Growth Industry</span>
                </h2>
              </div>
              <div class="lg:col-span-5">
                <p class="text-sm text-[#475569] leading-relaxed">
                  We adapt channels, visual direction, and buyer funnels around how customers actually discover and choose businesses in your sector.
                </p>
              </div>
            </div>

            <!-- Interactive Editorial Industry Carousel -->
            <div class="space-y-4">
              <div id="industry-carousel-stage">
                ${renderIndustryCarouselContent(activeIndustryIdx)}
              </div>

              <!-- 8-Industry Selector Pill Strip -->
              <div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
                ${INDUSTRIES_DATA.map(
                  (ind, i) => `
                  <button type="button" data-ind-idx="${i}" class="p-3 text-left bg-white border transition-all ${
                    i === activeIndustryIdx
                      ? 'border-[#00B8FF] bg-[#0E2A6E] text-white shadow-lg ring-1 ring-[#00B8FF]'
                      : 'border-[#D5E3F8] text-[#0E2A6E] hover:border-[#1D58C8]'
                  }">
                    <span class="block text-[10px] font-bold tracking-[0.16em] ${
                      i === activeIndustryIdx ? 'text-[#00B8FF]' : 'text-[#1D58C8]'
                    }">0${i + 1}</span>
                    <span class="block text-[11px] font-bold mt-0.5 leading-snug">${ind.title}</span>
                  </button>
                `
                ).join('')}
              </div>
            </div>
          </div>
        </section>

        <!-- ===============================================================
             BAND 6: EXPLORE OUR 8 SPECIALIST SERVICES (CRISP PURE WHITE)
             =============================================================== -->
        <section id="home-services-section" class="bg-white text-[#0E2A6E] py-20 sm:py-24 border-t border-[#D5E3F8]">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
              <div class="lg:col-span-7 space-y-2">
                <p class="ds-eyebrow-dark">WHY JEXORA SOLUTIONS?</p>
                <h2 class="text-3xl sm:text-4xl lg:text-[42px] font-extrabold ds-gradient-text leading-tight">
                  Explore Our 8 Specialist Services
                </h2>
              </div>
              <div class="lg:col-span-5">
                <p class="text-sm text-[#475569] leading-relaxed">
                  Select any capability below to inspect deliverables, problems solved, and execution scope — organic social and paid ads are always transparently separated.
                </p>
              </div>
            </div>

            <!-- Interactive Horizontal Service Tabs -->
            <div class="border-b border-[#D5E3F8]">
              <div class="ds-no-scrollbar flex flex-nowrap overflow-x-auto gap-1 pb-0">
                ${SERVICES_DATA.map(
                  (s, i) => `
                  <button type="button" data-srv-idx="${i}" class="shrink-0 whitespace-nowrap inline-flex items-center gap-2 px-4 py-3.5 text-xs font-bold border-b-2 transition-all ${
                    i === activeServiceIdx
                      ? 'border-[#00B8FF] text-[#0E2A6E] bg-[#F2F7FF]'
                      : 'border-transparent text-[#64748B] hover:text-[#0E2A6E] hover:bg-[#F8FAFD]'
                  }">
                    <span class="${
                      i === activeServiceIdx ? 'text-[#1D58C8]' : 'text-[#94A3B8]'
                    }">${getSvgIcon(s.iconName, 'w-4 h-4')}</span>
                    <span>${s.shortLabel}</span>
                    ${
                      i === activeServiceIdx
                        ? '<span class="w-1.5 h-1.5 rounded-full bg-[#00B8FF]"></span>'
                        : ''
                    }
                  </button>
                `
                ).join('')}
              </div>
            </div>

            <div id="service-tab-stage">
              ${renderServicePanelContent(activeServiceIdx)}
            </div>

            <div class="pt-6">
              ${renderEmbeddedCtaStrip('READY TO COMBINE SERVICES INTO ONE UNIFIED PLAN?')}
            </div>
          </div>
        </section>

        <!-- ===============================================================
             BAND 7: 4-STEP CONNECTED GROWTH PROCESS (CRISP PURE WHITE)
             =============================================================== -->
        <section class="bg-white text-[#0E2A6E] py-16 sm:py-20 lg:py-24 border-t border-[#D5E3F8]">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center max-w-2xl mx-auto space-y-2 mb-12">
              <p class="ds-eyebrow-dark">HOW WE WORK</p>
              <h2 class="text-3xl sm:text-4xl lg:text-[42px] font-extrabold ds-gradient-text leading-tight">
                Our Proven Digital Growth Process
              </h2>
              <p class="text-sm text-[#475569]">Click any phase to inspect how we take brands from audit to measurable scale.</p>
            </div>

            <!-- Connected Node Timeline -->
            <div class="relative max-w-4xl mx-auto">
              <div class="hidden sm:block absolute top-[29px] left-[12%] right-[12%] h-[2px] bg-[#DCE5F2] z-0"></div>
              <div class="grid grid-cols-2 sm:grid-cols-4 gap-6 relative z-10">
                ${PROCESS_STEPS.map(
                  (p, i) => `
                  <button type="button" data-proc-idx="${i}" class="ds-step-btn ${
                    i === activeProcessIdx ? 'is-active' : ''
                  }">
                    <span class="ds-step-circle">${getSvgIcon(p.iconName, 'w-5 h-5')}</span>
                    <span class="text-center">
                      <span class="block text-[10px] font-extrabold tracking-[0.2em] text-[#1D58C8]">STEP ${p.step}</span>
                      <span class="block text-xs sm:text-sm font-bold text-[#0E2A6E] mt-0.5">${p.title}</span>
                    </span>
                  </button>
                `
                ).join('')}
              </div>
            </div>

            <div id="process-tab-stage">
              ${renderProcessPanelContent(activeProcessIdx)}
            </div>
          </div>
        </section>

        <!-- ===============================================================
             BAND 8: WHAT SETS JEXORA APART (CRISP PURE WHITE)
             =============================================================== -->
        <section class="bg-white text-[#0E2A6E] py-16 sm:py-20 lg:py-24 border-t border-[#D5E3F8]">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center max-w-3xl mx-auto space-y-2 mb-10">
              <p class="ds-eyebrow-dark">WHY BRANDS CHOOSE US</p>
              <h2 class="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-[#0E2A6E] leading-tight">
                What Sets <span class="ds-gradient-text">JEXORA SOLUTIONS</span> Apart?
              </h2>
            </div>

            <!-- Elevated Shadow-Card Tab Bar -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-[#D5E3F8] shadow-lg divide-y sm:divide-y-0 sm:divide-x divide-[#DCE5F2]">
              ${DIFFERENTIATORS.map(
                (d, i) => `
                <button type="button" data-diff-idx="${i}" class="ds-diff-tab text-left sm:text-center ${
                  i === activeDiffIdx ? 'is-active' : ''
                }">
                  <span class="block text-[10px] font-extrabold tracking-[0.2em] text-[#1D58C8] mb-0.5">0${i + 1}</span>
                  <span>${d.tab}</span>
                </button>
              `
              ).join('')}
            </div>

            <div id="diff-tab-stage">
              ${renderDiffPanelContent(activeDiffIdx)}
            </div>
          </div>
        </section>

        <!-- ===============================================================
             BAND 9: GLOBAL MARKETS HORIZONTAL ACCORDION (ROYAL BLUE GRADIENT)
             =============================================================== -->
        <section class="ds-royal-band text-white py-20 sm:py-24 relative overflow-hidden">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <div class="text-center max-w-2xl mx-auto space-y-2">
              <p class="ds-eyebrow">WORLDWIDE GROWTH PILLARS</p>
              <h2 class="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-white">
                How JEXORA SOLUTIONS Scales Brands Worldwide
              </h2>
              <p class="text-xs sm:text-sm text-white/75">Select a growth pillar below to explore our borderless execution model.</p>
            </div>

            <div id="markets-accordion" class="ds-hacc-container">
              ${GLOBAL_MARKETS.map((m, i) => {
                const isActive = i === activeMarketIdx;
                return `
                <div data-market-idx="${i}" role="button" tabindex="0" aria-expanded="${
                  isActive ? 'true' : 'false'
                }" class="ds-hacc-item p-5 sm:p-6 flex flex-col justify-between ${
                  isActive ? 'is-active' : ''
                }">
                  <!-- Top Icon + Clean Pill Badge -->
                  <div class="relative z-10 flex items-center justify-between gap-2">
                    <span class="ds-m-icon w-9 h-9 flex items-center justify-center border shrink-0 transition-colors ${
                      isActive
                        ? 'bg-[#F2F7FF] border-[#D5E3F8] text-[#1D58C8]'
                        : 'bg-white/10 border-white/20 text-[#7DD8FF]'
                    }">
                      ${getSvgIcon(m.iconName, 'w-4 h-4')}
                    </span>
                    <span class="ds-m-badge text-[10px] font-extrabold tracking-[0.18em] uppercase px-2.5 py-1 border ${
                      isActive
                        ? 'bg-[#F2F7FF] border-[#D5E3F8] text-[#1D58C8]'
                        : 'bg-white/10 border-white/15 text-[#7DD8FF]'
                    }">${m.num} · ${m.code}</span>
                  </div>

                  <!-- Center Content -->
                  <div class="relative z-10 space-y-2.5 my-4">
                    <h3 class="ds-m-title font-extrabold leading-snug ${
                      isActive ? 'text-2xl text-[#0F2557]' : 'text-[17px] text-white'
                    }">${m.name}</h3>
                    <p class="ds-m-hint text-[11px] font-medium text-white/75 leading-snug ${
                      isActive ? 'hidden' : 'block'
                    }">${m.shortHint}</p>
                    <div class="ds-hacc-details ${
                      isActive ? 'block' : 'hidden'
                    } space-y-3.5">
                      <p class="text-[11px] font-bold uppercase tracking-[0.14em] text-[#1D58C8]">${m.tagline}</p>
                      <p class="text-xs sm:text-sm text-[#4B638C] leading-relaxed">${m.desc}</p>
                      <div class="flex flex-wrap gap-1.5 pt-0.5">
                        ${m.focus
                          .map(
                            (f) =>
                              `<span class="text-[10px] font-bold uppercase tracking-[0.1em] bg-[#F2F7FF] border border-[#D5E3F8] px-2.5 py-1 text-[#0F2557]">${f}</span>`
                          )
                          .join('')}
                      </div>
                    </div>
                  </div>

                  <!-- Bottom Action Bar -->
                  <div class="ds-m-foot relative z-10 flex items-center justify-between pt-3.5 border-t ${
                    isActive ? 'border-[#D5E3F8]' : 'border-white/20'
                  }">
                    <span class="ds-m-status text-[10px] font-extrabold uppercase tracking-[0.16em] ${
                      isActive ? 'text-[#1D58C8]' : 'text-white/85'
                    }">${isActive ? 'ACTIVE PILLAR' : 'EXPLORE'}</span>
                    <span class="ds-m-arrow ${
                      isActive ? 'hidden' : 'inline-flex'
                    } items-center text-[#7DD8FF]">${getSvgIcon('chevronRight', 'w-3.5 h-3.5')}</span>
                    <a href="/contact" data-link class="ds-m-cta ${
                      isActive ? 'inline-flex' : 'hidden'
                    } items-center gap-1 text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#1D58C8] hover:text-[#0F2557] transition-colors">
                      <span>DISCUSS ${m.code} PLAN</span>
                      ${getSvgIcon('chevronRight', 'w-3.5 h-3.5 text-[#1D58C8]')}
                    </a>
                  </div>
                </div>
              `;
              }).join('')}
            </div>
          </div>
        </section>

        <!-- ===============================================================
             BAND 9B: LATEST INSIGHTS & DIGITAL GROWTH BLOG (CRISP ICE/WHITE)
             =============================================================== -->
        <section class="bg-[#F2F7FF] text-[#0E2A6E] py-16 sm:py-20 lg:py-24 border-t border-[#D5E3F8]">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <div class="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div class="space-y-2 max-w-2xl">
                <p class="ds-eyebrow-dark">INSIGHTS &amp; PLAYBOOKS</p>
                <h2 class="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0E2A6E] leading-tight">
                  Latest From Our <span class="ds-gradient-text">Digital Growth Blog</span>
                </h2>
                <p class="text-sm text-[#4B638C] leading-relaxed">
                  Actionable guides on SEO, AEO &amp; GEO AI search, Google &amp; Meta Ads, high-converting websites, and short-form video strategy.
                </p>
              </div>
              <a href="/blog" data-link class="ds-btn-outline-blue px-6 py-3.5 shrink-0">
                <span>VIEW ALL ARTICLES</span>
                ${getSvgIcon('chevronRight', 'w-4 h-4')}
              </a>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              ${renderBlogCardsGrid(BLOG_POSTS.slice(0, 3))}
            </div>
          </div>
        </section>

        <!-- ===============================================================
             BAND 9C: FREQUENTLY ASKED QUESTIONS (CRISP PURE WHITE)
             =============================================================== -->
        ${renderFaqSection()}

        <!-- ===============================================================
             BAND 10: DARK CONVERSATION & LEAD CAPTURE BAND (SAPPHIRE BLUE)
             =============================================================== -->
        <section class="ds-sapphire-band text-white py-20 sm:py-24 relative overflow-hidden border-t border-white/10">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div class="lg:col-span-5 space-y-6">
                <p class="ds-eyebrow">START A CONVERSATION</p>
                <h2 class="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-white leading-[1.12]">
                  Take The Smart Road To <span class="ds-gradient-text-light block mt-1">Scaling Your Brand Online</span>
                </h2>
                <p class="text-sm text-white/75 leading-relaxed">
                  Whether you are launching a startup, refreshing your website, or scaling multi-country lead generation, our strategy team is ready to map out your next move.
                </p>

                <div class="space-y-4 pt-2 border-t border-white/10">
                  <a href="${SOCIAL_LINKS.whatsappBase}?text=Hello%20JEXORA%20SOLUTIONS%2C%20let%27s%20discuss%20our%20digital%20growth." target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-3 text-sm font-bold text-white hover:text-[#4ADE80] transition-colors">
                    <span class="w-10 h-10 bg-[#25D366] border border-white/40 flex items-center justify-center text-white shadow-lg"><span class="ds-wa-icon-anim">${getSvgIcon('whatsapp', 'w-5 h-5 text-white')}</span></span>
                    <span>Direct WhatsApp Strategy Desk</span>
                  </a>
                  <div class="flex items-center gap-3 pt-1">
                    <span class="text-[11px] font-bold uppercase tracking-[0.2em] text-white/60">FOLLOW US</span>
                    <a href="${SOCIAL_LINKS.facebook}" target="_blank" rel="noopener noreferrer" aria-label="Facebook" class="w-9 h-9 border border-white/20 hover:border-[#00B8FF] hover:text-[#00B8FF] flex items-center justify-center text-white transition-colors">${getSvgIcon('facebook', 'w-4 h-4')}</a>
                    <a href="${SOCIAL_LINKS.instagram}" target="_blank" rel="noopener noreferrer" aria-label="Instagram" class="w-9 h-9 border border-white/20 hover:border-[#00B8FF] hover:text-[#00B8FF] flex items-center justify-center text-white transition-colors">${getSvgIcon('instagram', 'w-4 h-4')}</a>
                    <a href="${SOCIAL_LINKS.linkedin}" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" class="w-9 h-9 border border-white/20 hover:border-[#00B8FF] hover:text-[#00B8FF] flex items-center justify-center text-white transition-colors">${getSvgIcon('linkedin', 'w-4 h-4')}</a>
                  </div>
                </div>
              </div>

              <div class="lg:col-span-7">
                <div id="bottom-lead-container" class="bg-[#143992]/90 backdrop-blur-md border border-white/15 border-t-4 border-t-[#00B8FF] p-7 sm:p-10 shadow-2xl">
                  <h3 class="text-xl font-extrabold text-white mb-6">Start a conversation with us</h3>
                  <form id="bottom-lead-form" name="consultation" method="POST" data-netlify="true" netlify-honeypot="bot-field" novalidate class="space-y-4">
                    <input type="hidden" name="form-name" value="consultation" />
                    <input type="hidden" name="monthlyBudget" value="Prefer not to say" />
                    <input type="hidden" name="privacyConsent" value="Agreed" />
                    <p class="hidden"><label>Bot: <input name="bot-field" /></label></p>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input type="text" name="fullName" placeholder="Full Name *" required aria-label="Full Name" class="ds-blue-input" />
                      <input type="text" name="companyName" placeholder="Company or Brand Name *" required aria-label="Company Name" class="ds-blue-input" />
                    </div>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input type="email" name="email" placeholder="Business Email *" required aria-label="Business Email" class="ds-blue-input" />
                      <input type="text" name="country" placeholder="Your Country / Time Zone *" required aria-label="Country or Time Zone" class="ds-blue-input" />
                    </div>
                    <select name="serviceRequired" required aria-label="Service Required" class="ds-blue-input">
                      <option value="">Select Required Service *</option>
                      ${SERVICES_DATA.map(
                        (s) => `<option value="${s.title}">${s.title}</option>`
                      ).join('')}
                    </select>
                    <textarea name="projectDetails" rows="3" placeholder="Tell us about your project, goals &amp; timeline *" required aria-label="Project Details" class="ds-blue-input"></textarea>
                    <p id="bottom-form-err" role="alert" class="hidden text-xs font-semibold text-[#F87171]"></p>
                    <button type="submit" class="ds-btn-gradient w-full py-4">
                      <span>SUBMIT ENQUIRY</span>
                      ${getSvgIcon('chevronRight', 'w-4 h-4')}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    `;
  }

  function renderPageBanner(breadcrumb, eyebrow, heading, description) {
    return `
      <section class="ds-sapphire-band text-white pt-[148px] pb-16 sm:pb-20 border-b border-white/10 relative overflow-hidden">
        <div class="absolute inset-0 ds-grid-pattern opacity-50"></div>
        <div class="ds-ambient-glow-tr"></div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div class="max-w-3xl space-y-4 ds-animate-in">
            <nav aria-label="Breadcrumb" class="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-white/65">
              <a href="/" data-link class="hover:text-[#00B8FF] transition-colors">HOME</a>
              <span class="text-[#00B8FF]">/</span>
              <span class="text-white">${breadcrumb}</span>
            </nav>
            <p class="ds-eyebrow">${eyebrow}</p>
            <h1 class="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.1]">${heading}</h1>
            <p class="text-sm sm:text-base text-white/75 leading-relaxed max-w-2xl">${description}</p>
          </div>
        </div>
      </section>
    `;
  }

  function renderAboutPage() {
    return `
      <main>
        ${renderPageBanner(
          'ABOUT US',
          'ABOUT JEXORA SOLUTIONS',
          'A Strategic Partner for Digital Growth',
          'We help startups, SMEs and established businesses strengthen their online presence, reach relevant audiences and build iconic brands.'
        )}

        <section class="bg-white text-[#0E2A6E] py-16 sm:py-20 lg:py-24">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              <div class="lg:col-span-6">
                <div class="bg-[#0E2A6E] p-2.5 border border-[#00B8FF]/40 shadow-2xl">
                  <img src="/assets/hero-slide-2.jpg" alt="JEXORA SOLUTIONS Team" class="w-full h-auto object-cover aspect-[16/10]" />
                </div>
              </div>
              <div class="lg:col-span-6 space-y-5">
                <p class="ds-eyebrow-dark">WHO WE ARE</p>
                <h2 class="text-3xl sm:text-4xl font-extrabold ds-gradient-text leading-tight">
                  Creative minds, strategic thinking
                </h2>
                <p class="text-sm text-[#475569] leading-relaxed">
                  JEXORA SOLUTIONS is a worldwide digital marketing agency working with startups, small and medium-sized businesses, entrepreneurs and established companies across the globe. We bring together strategy, design, content and technology to help brands show up with clarity and authority online.
                </p>
                <div class="bg-[#F2F7FF] border-l-4 border-[#1D58C8] p-5 space-y-1.5">
                  <h3 class="text-xs font-extrabold uppercase tracking-[0.18em] text-[#1D58C8]">OUR APPROACH</h3>
                  <p class="text-sm text-[#334155] leading-relaxed">
                    We start by listening. Then we build a focused plan, execute it carefully and keep improving based on what real performance data shows.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="ds-royal-band text-white py-16 sm:py-20">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="bg-[#0E2A6E]/60 backdrop-blur-md border border-white/15 border-t-4 border-t-[#00B8FF] p-8 space-y-3">
              <p class="ds-eyebrow">OUR VISION</p>
              <p class="text-base font-semibold text-white leading-relaxed">
                "To be a creative and digital power that goes beyond launching brands—shaping an unforgettable legacy in the market and the hearts of people for generations."
              </p>
            </div>
            <div class="bg-[#0E2A6E]/60 backdrop-blur-md border border-white/15 border-t-4 border-t-[#00B8FF] p-8 space-y-3">
              <p class="ds-eyebrow">OUR MISSION</p>
              <p class="text-base font-semibold text-white leading-relaxed">
                "To empower every vision and brand with unmatched creativity, strategic execution, and bold content, transforming them into industry leaders and icons in their industry."
              </p>
            </div>
          </div>
        </section>

        <section class="bg-[#F2F7FF] text-[#0E2A6E] py-16 sm:py-20 lg:py-24">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="bg-white border border-[#D5E3F8] border-t-4 border-t-[#1D58C8] shadow-xl p-7 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div class="lg:col-span-4 flex justify-center">
                <div class="relative max-w-[260px] w-full">
                  <div class="absolute -bottom-3 -right-3 inset-y-3 inset-x-3 border-2 border-[#00B8FF] pointer-events-none"></div>
                  <div class="relative bg-white border border-[#D5E3F8] overflow-hidden shadow-lg">
                    <img src="/assets/founder-jigyasa-sahu.jpg" alt="Jigyasa Sahu — Founder of JEXORA SOLUTIONS" class="w-full h-auto object-cover object-top" />
                  </div>
                </div>
              </div>
              <div class="lg:col-span-8 space-y-4">
                <p class="ds-eyebrow-dark">FOUNDER &amp; STRATEGIST</p>
                <h2 class="text-3xl font-extrabold text-[#0E2A6E]">Meet the Founder — Jigyasa Sahu</h2>
                <div class="space-y-3 text-sm text-[#475569] leading-relaxed">
                  <p>Jigyasa Sahu is the founder of JEXORA SOLUTIONS and a digital marketing professional passionate about creativity, strategic growth, and brand building.</p>
                  <p>She helps businesses strengthen their digital presence through strategic marketing, creative content, website development, search engine optimization and lead generation.</p>
                  <p>Her vision is to help brands grow beyond boundaries, connect meaningfully with their audiences, and build a powerful, lasting presence in the digital world.</p>
                </div>
                <div class="pt-3 flex flex-wrap items-center gap-4">
                  <span class="text-xs font-extrabold uppercase tracking-[0.16em] text-[#1D58C8]">Jigyasa Sahu · Founder</span>
                  <a href="/contact" data-link class="ds-btn-gradient px-6 py-3">
                    <span>BOOK A STRATEGY CALL</span>
                    ${getSvgIcon('chevronRight', 'w-4 h-4')}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    `;
  }

  function renderServicesPage() {
    return `
      <main>
        ${renderPageBanner(
          'SERVICES',
          'EIGHT SPECIALIST CAPABILITIES',
          'Everything Your Brand Needs to Grow Online',
          'Eight specialist services engineered to work together seamlessly. Organic social media and paid advertising are offered transparently as separate services.'
        )}

        <div id="services-sticky-nav" class="sticky top-[72px] z-30 bg-[#143992]/95 backdrop-blur-md border-b border-white/15 shadow-lg">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <div class="ds-no-scrollbar flex flex-nowrap md:flex-wrap overflow-x-auto items-center gap-2">
              ${SERVICES_DATA.map(
                (s) => `
                <a href="#${s.id}" class="shrink-0 whitespace-nowrap inline-flex items-center gap-1.5 bg-white/5 hover:bg-[#1D58C8] text-white/85 hover:text-white border border-white/15 hover:border-[#00B8FF] px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.08em] transition-all">
                  <span class="text-[#00B8FF]">${s.number}</span>
                  <span>${s.shortLabel}</span>
                </a>
              `
              ).join('')}
            </div>
          </div>
        </div>

        <section class="bg-[#F2F7FF] text-[#0E2A6E] py-14 sm:py-20">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            ${SERVICES_DATA.map(
              (s) => `
              <article id="${s.id}" class="scroll-mt-36 bg-white border border-[#D5E3F8] border-t-4 border-t-[#1D58C8] shadow-md overflow-hidden">
                <div class="bg-[#0E2A6E] text-white px-6 sm:px-8 py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div class="flex items-start gap-4">
                    <div class="w-12 h-12 bg-[#1D58C8]/30 border border-[#00B8FF]/50 flex items-center justify-center text-[#00B8FF] shrink-0">
                      ${getSvgIcon(s.iconName, 'w-5 h-5')}
                    </div>
                    <div>
                      <p class="ds-eyebrow">SERVICE ${s.number}</p>
                      <h2 class="text-xl sm:text-2xl font-extrabold text-white mt-0.5">${s.title}</h2>
                      <p class="text-xs sm:text-sm text-white/75 mt-1 max-w-2xl">${s.shortDesc}</p>
                    </div>
                  </div>
                  <a href="/contact?service=${encodeURIComponent(
                    s.title
                  )}" data-link class="ds-btn-gradient px-5 py-3 shrink-0">
                    <span>ENQUIRE NOW</span>
                    ${getSvgIcon('chevronRight', 'w-4 h-4')}
                  </a>
                </div>

                <div class="p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                  <div class="bg-[#F2F7FF] border-l-2 border-[#1D58C8] p-4 space-y-2.5">
                    <h3 class="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#1D58C8]">WHAT'S INCLUDED</h3>
                    <ul class="space-y-2">
                      ${s.whatsIncluded
                        .map(
                          (item) => `
                        <li class="flex items-start gap-2 text-xs text-[#0E2A6E] font-medium">
                          ${getSvgIcon('check', 'w-3.5 h-3.5 text-[#1D58C8] shrink-0 mt-0.5')}
                          <span>${item}</span>
                        </li>
                      `
                        )
                        .join('')}
                    </ul>
                  </div>

                  <div class="bg-[#F2F7FF] border-l-2 border-[#00B8FF] p-4 space-y-2">
                    <h3 class="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#1D58C8]">PROBLEMS IT ADDRESSES</h3>
                    <p class="text-xs text-[#475569] leading-relaxed">${s.problemsAddressed}</p>
                  </div>

                  <div class="bg-[#F2F7FF] border-l-2 border-[#0E2A6E] p-4 space-y-2">
                    <h3 class="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#1D58C8]">WHO BENEFITS</h3>
                    <p class="text-xs text-[#475569] leading-relaxed">${s.whoBenefits}</p>
                  </div>

                  <div class="bg-[#F2F7FF] border-l-2 border-[#1D58C8] p-4 space-y-2.5">
                    <h3 class="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#1D58C8]">KEY DELIVERABLES</h3>
                    <ul class="space-y-2">
                      ${s.keyDeliverables
                        .map(
                          (item) => `
                        <li class="flex items-start gap-2 text-xs text-[#0E2A6E] font-medium">
                          ${getSvgIcon('check', 'w-3.5 h-3.5 text-[#1D58C8] shrink-0 mt-0.5')}
                          <span>${item}</span>
                        </li>
                      `
                        )
                        .join('')}
                    </ul>
                  </div>
                </div>
              </article>
            `
            ).join('')}

            <div class="pt-6">${renderEmbeddedCtaStrip()}</div>
          </div>
        </section>

        ${renderFaqSection()}
      </main>
    `;
  }

  function renderIndustriesPage() {
    return `
      <main>
        ${renderPageBanner(
          'INDUSTRIES',
          'SECTOR EXPERTISE',
          'Marketing Adapted to Your Industry',
          'We shape channels, messaging and creative around how your customers actually discover and choose businesses like yours.'
        )}

        <section class="bg-[#F2F7FF] text-[#0E2A6E] py-16 sm:py-20 lg:py-24">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              ${INDUSTRIES_DATA.map(
                (ind) => `
                <article id="${ind.id}" class="bg-white border border-[#D5E3F8] hover:border-[#00B8FF] shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group overflow-hidden">
                  <div>
                    <div class="relative h-44 bg-[#0E2A6E] overflow-hidden">
                      <img src="${ind.image}" alt="${ind.alt}" loading="lazy" class="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" />
                      <div class="absolute inset-0 bg-gradient-to-t from-[#0E2A6E] via-[#0E2A6E]/35 to-transparent"></div>
                      <div class="absolute top-3 left-3 w-9 h-9 bg-[#0E2A6E]/80 border border-[#00B8FF]/50 flex items-center justify-center text-[#00B8FF]">
                        ${getSvgIcon(ind.iconName, 'w-4 h-4')}
                      </div>
                      <span class="absolute bottom-3 left-3 text-[10px] font-bold uppercase tracking-[0.16em] text-[#00B8FF]">${ind.focusTag}</span>
                    </div>
                    <div class="p-5 space-y-2">
                      <h2 class="text-base font-extrabold text-[#0E2A6E] group-hover:text-[#1D58C8] transition-colors">${ind.title}</h2>
                      <p class="text-xs text-[#475569] leading-relaxed">${ind.description}</p>
                    </div>
                  </div>
                  <div class="px-5 pb-5 pt-2">
                    <a href="/contact?industry=${encodeURIComponent(
                      ind.title
                    )}" data-link class="ds-btn-outline-blue w-full py-2.5 text-[11px]">
                      <span>EXPLORE STRATEGY</span>
                      ${getSvgIcon('chevronRight', 'w-3.5 h-3.5')}
                    </a>
                  </div>
                </article>
              `
              ).join('')}
            </div>

            ${renderEmbeddedCtaStrip("DON'T SEE YOUR INDUSTRY LISTED? WE BUILD CUSTOM PLAYBOOKS FOR ANY NICHE.")}
          </div>
        </section>
      </main>
    `;
  }

  function renderBlogCardsGrid(posts) {
    return posts
      .map(
        (post) => `
      <article class="bg-white border border-[#D5E3F8] hover:border-[#00B8FF] shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group overflow-hidden ds-animate-in">
        <div>
          <a href="/blog/${post.slug}" data-link class="block relative aspect-[16/10] bg-[#0E2A6E] overflow-hidden">
            <img src="${post.image}" alt="${escapeHtml(post.title)}" loading="lazy" class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" />
            <div class="absolute inset-0 bg-gradient-to-t from-[#0E2A6E]/80 via-[#0E2A6E]/15 to-transparent"></div>
            <span class="absolute top-3 left-3 bg-[#0E2A6E]/85 backdrop-blur-md border border-[#00B8FF]/50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[#7DD8FF]">${post.category}</span>
            <span class="absolute bottom-3 right-3 bg-white/95 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.12em] text-[#1D58C8]">${post.readTime}</span>
          </a>
          <div class="p-6 space-y-3">
            <div class="flex items-center gap-2 text-[11px] font-semibold text-[#4B638C]">
              <span>${post.date}</span>
              <span class="text-[#00B8FF]">•</span>
              <span>${post.author}</span>
            </div>
            <h3 class="text-lg font-extrabold text-[#0F2557] leading-snug group-hover:text-[#1D58C8] transition-colors">
              <a href="/blog/${post.slug}" data-link>${post.title}</a>
            </h3>
            <p class="text-xs text-[#4B638C] leading-relaxed">${post.excerpt}</p>
          </div>
        </div>
        <div class="px-6 pb-6 pt-2 flex items-center justify-between border-t border-[#EEF4FD] mt-2">
          <a href="/blog/${post.slug}" data-link class="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-[#1D58C8] hover:text-[#0E2A6E] transition-colors pt-3">
            <span>READ ARTICLE</span>
            ${getSvgIcon('chevronsRight', 'w-3.5 h-3.5')}
          </a>
          <span class="text-[10px] font-bold uppercase tracking-[0.12em] text-[#4B638C] pt-3">${post.category}</span>
        </div>
      </article>
    `
      )
      .join('');
  }

  function renderBlogPage() {
    const featured = BLOG_POSTS[0];
    const filtered =
      activeBlogFilter === 'all'
        ? BLOG_POSTS
        : BLOG_POSTS.filter((p) => p.categoryKey === activeBlogFilter);

    return `
      <main>
        ${renderPageBanner(
          'BLOG',
          'INSIGHTS & RESOURCES',
          'Digital Growth Insights & Playbooks',
          'Practical strategies, technical breakdowns, and campaign frameworks across SEO, AEO & GEO AI search, paid acquisition, websites, and reels.'
        )}

        <section class="bg-[#F2F7FF] text-[#0E2A6E] py-16 sm:py-20 lg:py-24">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <!-- Featured Spotlight Article -->
            <article class="bg-white border border-[#D5E3F8] border-t-4 border-t-[#1D58C8] shadow-xl grid grid-cols-1 lg:grid-cols-12 overflow-hidden ds-animate-in">
              <a href="/blog/${featured.slug}" data-link class="lg:col-span-6 relative min-h-[260px] sm:min-h-[340px] bg-[#0E2A6E] overflow-hidden block group">
                <img src="${featured.image}" alt="${escapeHtml(featured.title)}" class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" />
                <div class="absolute inset-0 bg-gradient-to-t from-[#0E2A6E]/80 via-[#0E2A6E]/20 to-transparent"></div>
                <span class="absolute top-4 left-4 bg-[#1D58C8] border border-[#7DD8FF]/60 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white">FEATURED ARTICLE</span>
              </a>
              <div class="lg:col-span-6 p-7 sm:p-10 flex flex-col justify-between space-y-6">
                <div class="space-y-4">
                  <div class="flex flex-wrap items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.16em] text-[#1D58C8]">
                    <span>${featured.category}</span>
                    <span class="text-[#00B8FF]">•</span>
                    <span class="text-[#4B638C]">${featured.date}</span>
                    <span class="text-[#00B8FF]">•</span>
                    <span class="text-[#4B638C]">${featured.readTime}</span>
                  </div>
                  <h2 class="text-2xl sm:text-3xl font-extrabold text-[#0F2557] leading-tight">
                    <a href="/blog/${featured.slug}" data-link class="hover:text-[#1D58C8] transition-colors">${featured.title}</a>
                  </h2>
                  <p class="text-sm text-[#4B638C] leading-relaxed">${featured.excerpt}</p>
                  <ul class="space-y-2 pt-1">
                    ${featured.keyTakeaways
                      .map(
                        (pt) => `
                      <li class="flex items-start gap-2.5 text-xs text-[#0F2557] font-medium">
                        ${getSvgIcon('check', 'w-3.5 h-3.5 text-[#1D58C8] shrink-0 mt-0.5')}
                        <span>${pt}</span>
                      </li>
                    `
                      )
                      .join('')}
                  </ul>
                </div>
                <div class="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#D5E3F8]">
                  <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-full overflow-hidden border-2 border-[#00B8FF] bg-white shrink-0">
                      <img src="/assets/founder-jigyasa-sahu.jpg" alt="${featured.author}" class="w-full h-full object-cover object-top" />
                    </div>
                    <div>
                      <p class="text-xs font-extrabold text-[#0F2557]">${featured.author}</p>
                      <p class="text-[11px] text-[#4B638C]">${featured.authorRole}</p>
                    </div>
                  </div>
                  <a href="/blog/${featured.slug}" data-link class="ds-btn-gradient px-6 py-3">
                    <span>READ FULL GUIDE</span>
                    ${getSvgIcon('chevronRight', 'w-4 h-4')}
                  </a>
                </div>
              </div>
            </article>

            <!-- Category Filter Bar -->
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#D5E3F8] pb-5">
              <div>
                <p class="ds-eyebrow-dark">EXPLORE BY TOPIC</p>
                <h2 class="text-2xl font-extrabold text-[#0F2557] mt-0.5">All Growth Articles</h2>
              </div>
              <div class="inline-flex flex-wrap bg-[#143992] border border-[#1D58C8]">
                ${[
                  { key: 'all', label: 'All Articles' },
                  { key: 'search', label: 'Search & AI' },
                  { key: 'paid', label: 'Paid Media' },
                  { key: 'web', label: 'Web & UX' },
                  { key: 'creative', label: 'Social & Reels' },
                ]
                  .map(
                    (tab) => `
                  <button type="button" data-blog-filter="${tab.key}" class="ds-filter-pill ${
                      activeBlogFilter === tab.key ? 'is-active' : ''
                    }">${tab.label}</button>
                `
                  )
                  .join('')}
              </div>
            </div>

            <div id="blog-cards-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              ${renderBlogCardsGrid(filtered)}
            </div>

            ${renderEmbeddedCtaStrip('WANT THESE STRATEGIES IMPLEMENTED FOR YOUR BUSINESS?')}
          </div>
        </section>
      </main>
    `;
  }

  function renderBlogDetailPage(slug) {
    const post = BLOG_POSTS.find((p) => p.slug === slug) || BLOG_POSTS[0];
    const related = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);
    const isFounder = post.author === 'Jigyasa Sahu';

    return `
      <main>
        <section class="ds-sapphire-band text-white pt-[148px] pb-14 sm:pb-20 border-b border-white/10 relative overflow-hidden">
          <div class="absolute inset-0 ds-grid-pattern opacity-50"></div>
          <div class="ds-ambient-glow-tr"></div>
          <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-5 ds-animate-in">
            <nav aria-label="Breadcrumb" class="inline-flex flex-wrap items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-white/65">
              <a href="/" data-link class="hover:text-[#00B8FF] transition-colors">HOME</a>
              <span class="text-[#00B8FF]">/</span>
              <a href="/blog" data-link class="hover:text-[#00B8FF] transition-colors">BLOG</a>
              <span class="text-[#00B8FF]">/</span>
              <span class="text-white">${post.category}</span>
            </nav>

            <div class="flex flex-wrap items-center gap-3">
              <span class="bg-[#00B8FF]/20 border border-[#7DD8FF]/50 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#7DD8FF]">${post.category}</span>
              <span class="text-xs font-semibold text-white/75">${post.date}</span>
              <span class="text-[#00B8FF]">•</span>
              <span class="text-xs font-semibold text-white/75">${post.readTime}</span>
            </div>

            <h1 class="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-white tracking-tight leading-[1.12]">${post.title}</h1>
            <p class="text-sm sm:text-base text-white/80 leading-relaxed">${post.excerpt}</p>

            <div class="flex items-center gap-3 pt-2">
              ${
                isFounder
                  ? `<div class="w-11 h-11 rounded-full overflow-hidden border-2 border-[#00B8FF] bg-white shrink-0">
                      <img src="/assets/founder-jigyasa-sahu.jpg" alt="${post.author}" class="w-full h-full object-cover object-top" />
                    </div>`
                  : `<div class="w-11 h-11 rounded-full bg-[#1D58C8] border-2 border-[#7DD8FF] flex items-center justify-center text-white text-xs font-extrabold shrink-0">JX</div>`
              }
              <div>
                <p class="text-sm font-extrabold text-white">${post.author}</p>
                <p class="text-xs text-[#7DD8FF]">${post.authorRole} · JEXORA SOLUTIONS</p>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white text-[#0F2557] py-12 sm:py-16">
          <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <div class="border border-[#D5E3F8] shadow-xl overflow-hidden bg-[#0E2A6E]">
              <img src="${post.image}" alt="${escapeHtml(post.title)}" class="w-full h-auto max-h-[460px] object-cover object-center" />
            </div>

            <div class="bg-[#F2F7FF] border border-[#D5E3F8] border-l-4 border-l-[#1D58C8] p-6 sm:p-8 space-y-4">
              <p class="ds-eyebrow-dark">KEY TAKEAWAYS</p>
              <ul class="space-y-3">
                ${post.keyTakeaways
                  .map(
                    (pt) => `
                  <li class="flex items-start gap-3 text-sm font-medium text-[#0F2557]">
                    ${getSvgIcon('check', 'w-4 h-4 text-[#1D58C8] shrink-0 mt-1')}
                    <span>${pt}</span>
                  </li>
                `
                  )
                  .join('')}
              </ul>
            </div>

            <div class="space-y-8">
              ${post.sections
                .map(
                  (sec, idx) => `
                <div class="space-y-3">
                  <p class="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#1D58C8]">0${idx + 1}</p>
                  <h2 class="text-2xl font-extrabold text-[#0E2A6E] leading-snug">${sec.heading}</h2>
                  <p class="text-sm sm:text-base text-[#334155] leading-relaxed">${sec.body}</p>
                </div>
              `
                )
                .join('')}
            </div>

            <!-- Action Box -->
            <div class="bg-[#0E2A6E] text-white border-t-4 border-[#00B8FF] p-7 sm:p-9 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xl">
              <div class="space-y-2 max-w-xl">
                <p class="ds-eyebrow">RELATED SERVICE · ${post.serviceLink.toUpperCase()}</p>
                <h3 class="text-2xl font-extrabold text-white">Ready to Put This Playbook Into Action?</h3>
                <p class="text-xs sm:text-sm text-white/75 leading-relaxed">
                  Book a free strategy consultation with JEXORA SOLUTIONS and get a custom roadmap tailored to your audience and growth targets.
                </p>
              </div>
              <div class="flex flex-wrap gap-3 shrink-0">
                <a href="/contact?service=${encodeURIComponent(post.serviceLink)}" data-link class="ds-btn-gradient px-6 py-3.5">
                  <span>GET FREE STRATEGY CALL</span>
                  ${getSvgIcon('chevronRight', 'w-4 h-4')}
                </a>
                <a href="/blog" data-link class="ds-btn-glass px-5 py-3.5">
                  <span>ALL ARTICLES</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <!-- Related Articles -->
        <section class="bg-[#F2F7FF] text-[#0E2A6E] py-16 sm:py-20 border-t border-[#D5E3F8]">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <p class="ds-eyebrow-dark">CONTINUE READING</p>
                <h2 class="text-2xl sm:text-3xl font-extrabold text-[#0E2A6E] mt-1">More From JEXORA Insights</h2>
              </div>
              <a href="/blog" data-link class="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.14em] text-[#1D58C8] hover:text-[#0E2A6E] transition-colors">
                <span>VIEW ALL BLOG POSTS</span>
                ${getSvgIcon('chevronsRight', 'w-4 h-4')}
              </a>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              ${renderBlogCardsGrid(related)}
            </div>
          </div>
        </section>
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
          'CONTACT',
          'REQUEST A PROPOSAL',
          "Let's Discuss Your Next Growth Opportunity",
          'Share a few details about your brand and goals — our strategy team will respond with tailored recommendations and a free consultation.'
        )}

        <section class="bg-[#F2F7FF] text-[#0E2A6E] py-16 sm:py-20 lg:py-24">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <aside class="lg:col-span-4 space-y-6">
                <div class="bg-[#0E2A6E] text-white border-t-4 border-[#00B8FF] p-7 space-y-6 shadow-2xl">
                  <div class="space-y-2">
                    <p class="ds-eyebrow">WHAT HAPPENS NEXT</p>
                    <h2 class="text-xl font-extrabold text-white">Your Free Strategy Consultation</h2>
                    <p class="text-xs text-white/70 leading-relaxed">Every enquiry is personally reviewed by our strategy team — no automated sales scripts.</p>
                  </div>
                  <ul class="space-y-4 text-xs">
                    <li class="flex items-start gap-3">
                      <span class="w-6 h-6 bg-[#1D58C8] border border-[#00B8FF] text-white font-extrabold text-[11px] flex items-center justify-center shrink-0">01</span>
                      <div>
                        <p class="font-bold text-white">Brand &amp; Presence Review</p>
                        <p class="text-white/65 text-[11px] mt-0.5">We audit your website, socials and search visibility before we connect.</p>
                      </div>
                    </li>
                    <li class="flex items-start gap-3">
                      <span class="w-6 h-6 bg-[#1D58C8] border border-[#00B8FF] text-white font-extrabold text-[11px] flex items-center justify-center shrink-0">02</span>
                      <div>
                        <p class="font-bold text-white">Tailored Growth Plan</p>
                        <p class="text-white/65 text-[11px] mt-0.5">Focused channel mix aligned with your market and budget.</p>
                      </div>
                    </li>
                    <li class="flex items-start gap-3">
                      <span class="w-6 h-6 bg-[#1D58C8] border border-[#00B8FF] text-white font-extrabold text-[11px] flex items-center justify-center shrink-0">03</span>
                      <div>
                        <p class="font-bold text-white">Transparent Proposal</p>
                        <p class="text-white/65 text-[11px] mt-0.5">Clear scope, deliverables and timelines with zero hidden fees.</p>
                      </div>
                    </li>
                  </ul>
                  <div class="pt-4 border-t border-white/10 space-y-3">
                    <a href="${SOCIAL_LINKS.whatsappBase}?text=Hello%20JEXORA%20SOLUTIONS%2C%20I%20would%20like%20to%20book%20a%20free%20consultation." target="_blank" rel="noopener noreferrer" class="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#16A34A] text-white text-xs font-bold uppercase tracking-[0.14em] py-3 shadow-lg transition-colors">
                      <span class="ds-wa-icon-anim">${getSvgIcon('whatsapp', 'w-4 h-4 text-white')}</span>
                      <span>CHAT ON WHATSAPP</span>
                    </a>
                    <div class="flex items-center justify-between pt-2">
                      <span class="text-[11px] uppercase tracking-[0.18em] text-white/60">FOLLOW US</span>
                      <div class="flex items-center gap-2">
                        <a href="${SOCIAL_LINKS.facebook}" target="_blank" rel="noopener noreferrer" aria-label="Facebook" class="w-8 h-8 border border-white/20 hover:border-[#00B8FF] hover:text-[#00B8FF] flex items-center justify-center text-white transition-colors">${getSvgIcon('facebook', 'w-3.5 h-3.5')}</a>
                        <a href="${SOCIAL_LINKS.instagram}" target="_blank" rel="noopener noreferrer" aria-label="Instagram" class="w-8 h-8 border border-white/20 hover:border-[#00B8FF] hover:text-[#00B8FF] flex items-center justify-center text-white transition-colors">${getSvgIcon('instagram', 'w-3.5 h-3.5')}</a>
                        <a href="${SOCIAL_LINKS.linkedin}" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" class="w-8 h-8 border border-white/20 hover:border-[#00B8FF] hover:text-[#00B8FF] flex items-center justify-center text-white transition-colors">${getSvgIcon('linkedin', 'w-3.5 h-3.5')}</a>
                      </div>
                    </div>
                  </div>
                </div>
              </aside>

              <div class="lg:col-span-8">
                <div id="contact-card-container" class="ds-proposal-card p-6 sm:p-10">
                  <div class="mb-6 pb-5 border-b border-[#D5E3F8]">
                    <p class="ds-eyebrow-dark">PROJECT ENQUIRY</p>
                    <h2 class="text-2xl font-extrabold text-[#0E2A6E] mt-0.5">Tell Us About Your Project</h2>
                  </div>

                  <form id="jexora-contact-form" name="consultation" method="POST" data-netlify="true" netlify-honeypot="bot-field" novalidate class="space-y-5">
                    <input type="hidden" name="form-name" value="consultation" />
                    <p class="hidden"><label>Bot: <input name="bot-field" /></label></p>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label for="fullName" class="block text-[11px] font-bold uppercase tracking-[0.12em] text-[#0E2A6E] mb-1.5">Full Name *</label>
                        <div class="ds-field-wrap">
                          <input id="fullName" name="fullName" type="text" placeholder="e.g. Aarav Sharma" required class="ds-proposal-input" />
                        </div>
                        <p data-err="fullName" role="alert" class="hidden mt-1 text-[11px] text-[#DC2626] font-semibold"></p>
                      </div>
                      <div>
                        <label for="businessEmail" class="block text-[11px] font-bold uppercase tracking-[0.12em] text-[#0E2A6E] mb-1.5">Business Email *</label>
                        <div class="ds-field-wrap">
                          <input id="businessEmail" name="email" type="email" placeholder="you@company.com" required class="ds-proposal-input" />
                        </div>
                        <p data-err="email" role="alert" class="hidden mt-1 text-[11px] text-[#DC2626] font-semibold"></p>
                      </div>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label for="companyName" class="block text-[11px] font-bold uppercase tracking-[0.12em] text-[#0E2A6E] mb-1.5">Company or Brand Name *</label>
                        <div class="ds-field-wrap">
                          <input id="companyName" name="companyName" type="text" placeholder="Your brand name" required class="ds-proposal-input" />
                        </div>
                        <p data-err="companyName" role="alert" class="hidden mt-1 text-[11px] text-[#DC2626] font-semibold"></p>
                      </div>
                      <div>
                        <label for="websiteUrl" class="block text-[11px] font-bold uppercase tracking-[0.12em] text-[#0E2A6E] mb-1.5">Website URL (Optional)</label>
                        <div class="ds-field-wrap">
                          <input id="websiteUrl" name="websiteUrl" type="url" placeholder="https://yourwebsite.com" class="ds-proposal-input" />
                        </div>
                        <p data-err="websiteUrl" role="alert" class="hidden mt-1 text-[11px] text-[#DC2626] font-semibold"></p>
                      </div>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label for="country" class="block text-[11px] font-bold uppercase tracking-[0.12em] text-[#0E2A6E] mb-1.5">Country / Time Zone *</label>
                        <div class="ds-field-wrap">
                          <input id="country" name="country" type="text" placeholder="Your country or time zone" required class="ds-proposal-input" />
                        </div>
                        <p data-err="country" role="alert" class="hidden mt-1 text-[11px] text-[#DC2626] font-semibold"></p>
                      </div>
                      <div>
                        <label for="serviceRequired" class="block text-[11px] font-bold uppercase tracking-[0.12em] text-[#0E2A6E] mb-1.5">Service Required *</label>
                        <div class="ds-field-wrap">
                          <select id="serviceRequired" name="serviceRequired" required class="ds-proposal-input">
                            <option value="">Select a service</option>
                            ${SERVICES_DATA.map(
                              (s) =>
                                `<option value="${s.title}" ${
                                  s.title.toLowerCase() === prefilledService.toLowerCase()
                                    ? 'selected'
                                    : ''
                                }>${s.title}</option>`
                            ).join('')}
                          </select>
                        </div>
                        <p data-err="serviceRequired" role="alert" class="hidden mt-1 text-[11px] text-[#DC2626] font-semibold"></p>
                      </div>
                    </div>

                    <div>
                      <label for="monthlyBudget" class="block text-[11px] font-bold uppercase tracking-[0.12em] text-[#0E2A6E] mb-1.5">Monthly Marketing Budget (Optional)</label>
                      <div class="ds-field-wrap">
                        <select id="monthlyBudget" name="monthlyBudget" class="ds-proposal-input">
                          ${BUDGET_OPTIONS.map((b) => `<option value="${b}">${b}</option>`).join('')}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label for="projectDetails" class="block text-[11px] font-bold uppercase tracking-[0.12em] text-[#0E2A6E] mb-1.5">Project Details *</label>
                      <div class="ds-field-wrap">
                        <textarea id="projectDetails" name="projectDetails" rows="4" placeholder="Share your goals, target market or timeline..." required class="ds-proposal-input">${escapeHtml(defaultDetails)}</textarea>
                      </div>
                      <p data-err="projectDetails" role="alert" class="hidden mt-1 text-[11px] text-[#DC2626] font-semibold"></p>
                    </div>

                    <input type="hidden" name="privacyConsent" value="Agreed" />

                    <div class="pt-2">
                      <button type="submit" class="w-full sm:w-auto ds-btn-gradient px-8 py-4">
                        <span>GET MY PROPOSAL</span>
                        ${getSvgIcon('chevronRight', 'w-4 h-4')}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    `;
  }

  function renderFooter() {
    return `
      <footer class="ds-footer-bg text-white relative overflow-hidden border-t border-[#00B8FF]/25">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 sm:pt-16 pb-10 relative z-10">
          <!-- Row 1: Giant CTA Headline -->
          <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-10 border-b border-white/15">
            <div>
              <p class="ds-eyebrow mb-2">WHERE TECHNOLOGY MEETS POSSIBILITIES</p>
              <h2 class="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-white tracking-tight">Let's grow your brand.</h2>
            </div>
            <a href="/contact" data-link class="ds-btn-gradient px-8 py-4 shrink-0">
              <span>START A PROJECT</span>
              ${getSvgIcon('chevronRight', 'w-4 h-4')}
            </a>
          </div>

          <!-- Row 2: 4-Column Structured Footer Grid -->
          <div class="py-12 border-b border-white/15 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 items-start">
            <!-- Column 1: Brand Info & Direct Contact -->
            <div class="lg:col-span-4 space-y-5">
              <a href="/" data-link class="inline-block focus:outline-none">
                ${getLogoMarkup('footer')}
              </a>
              <p class="text-xs sm:text-[13px] text-white/80 leading-relaxed max-w-sm">
                Worldwide digital marketing agency helping startups, SMEs and growing brands build a strong online presence, reach more customers, and scale with measurable results.
              </p>

              <div class="space-y-3 pt-1 text-xs sm:text-[13px]">
                <a href="${SOCIAL_LINKS.whatsappBase}?text=Hello%20JEXORA%20SOLUTIONS%2C%20I%20would%20like%20to%20discuss%20my%20business." target="_blank" rel="noopener noreferrer" class="flex items-center gap-3 text-white/90 hover:text-[#4ADE80] transition-colors">
                  <span class="ds-wa-icon-anim shrink-0">${getSvgIcon('whatsapp', 'w-[18px] h-[18px] text-[#25D366]')}</span>
                  <span class="font-semibold">Chat on WhatsApp</span>
                </a>
                <a href="/contact" data-link class="flex items-center gap-3 text-white/85 hover:text-[#7DD8FF] transition-colors">
                  <span class="text-[#7DD8FF] shrink-0">${getSvgIcon('globe', 'w-4 h-4')}</span>
                  <span>jexorasolutions.com</span>
                </a>
              </div>

              <div class="flex items-center gap-2.5 pt-2">
                <a href="${SOCIAL_LINKS.facebook}" target="_blank" rel="noopener noreferrer" aria-label="Facebook" class="w-9 h-9 border border-white/25 hover:border-[#00B8FF] hover:text-[#00B8FF] flex items-center justify-center text-white transition-colors">${getSvgIcon('facebook', 'w-4 h-4')}</a>
                <a href="${SOCIAL_LINKS.instagram}" target="_blank" rel="noopener noreferrer" aria-label="Instagram" class="w-9 h-9 border border-white/25 hover:border-[#00B8FF] hover:text-[#00B8FF] flex items-center justify-center text-white transition-colors">${getSvgIcon('instagram', 'w-4 h-4')}</a>
                <a href="${SOCIAL_LINKS.linkedin}" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" class="w-9 h-9 border border-white/25 hover:border-[#00B8FF] hover:text-[#00B8FF] flex items-center justify-center text-white transition-colors">${getSvgIcon('linkedin', 'w-4 h-4')}</a>
              </div>
            </div>

            <!-- Column 2: EXPLORE -->
            <div class="lg:col-span-2 space-y-4">
              <h3 class="text-xs font-extrabold uppercase tracking-[0.2em] text-[#7DD8FF]">EXPLORE</h3>
              <ul class="space-y-2.5 text-xs sm:text-[13px] text-white/80">
                <li><a href="/" data-link class="hover:text-white transition-colors">Home</a></li>
                <li><a href="/services" data-link class="hover:text-white transition-colors">Services</a></li>
                <li><a href="/industries" data-link class="hover:text-white transition-colors">Industries</a></li>
                <li><a href="/blog" data-link class="hover:text-white transition-colors">Blog</a></li>
                <li><a href="/#faq" data-link class="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="/about" data-link class="hover:text-white transition-colors">About Us</a></li>
                <li><a href="/contact" data-link class="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            <!-- Column 3: SERVICES -->
            <div class="lg:col-span-3 space-y-4">
              <h3 class="text-xs font-extrabold uppercase tracking-[0.2em] text-[#7DD8FF]">SERVICES</h3>
              <ul class="space-y-2.5 text-xs sm:text-[13px] text-white/80">
                ${SERVICES_DATA.map(
                  (s) =>
                    `<li><a href="/services#${s.id}" data-link class="hover:text-white transition-colors leading-snug block">${s.title}</a></li>`
                ).join('')}
              </ul>
            </div>

            <!-- Column 4: INDUSTRIES -->
            <div class="lg:col-span-3 space-y-4">
              <h3 class="text-xs font-extrabold uppercase tracking-[0.2em] text-[#7DD8FF]">INDUSTRIES</h3>
              <ul class="space-y-2.5 text-xs sm:text-[13px] text-white/80">
                ${INDUSTRIES_DATA.map(
                  (ind) =>
                    `<li><a href="/industries#${ind.id}" data-link class="hover:text-white transition-colors leading-snug block">${ind.title}</a></li>`
                ).join('')}
              </ul>
            </div>
          </div>

          <!-- Row 3: Clean Copyright Strip (Cleared from FAB & Mobile Sticky Bar) -->
          <div class="pt-7 pb-28 lg:pb-4 lg:pr-44 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-white/70">
            <p>© 2026 JEXORA SOLUTIONS. All rights reserved.</p>
            <p class="text-[11px] uppercase tracking-[0.14em] text-[#7DD8FF] font-semibold">Where Technology Meets Possibilities</p>
          </div>
        </div>
      </footer>
    `;
  }

  function renderFloatingControls() {
    return `
      <!-- Desktop Floating Animated Green WhatsApp Button -->
      <a id="ds-floating-whatsapp" href="${SOCIAL_LINKS.whatsappBase}?text=Hello%20JEXORA%20SOLUTIONS%2C%20I%20would%20like%20a%20free%20consultation." target="_blank" rel="noopener noreferrer" aria-label="Chat with JEXORA SOLUTIONS on WhatsApp" class="ds-fab is-hidden-top hidden lg:inline-flex fixed bottom-5 right-5 z-40 items-center gap-2.5 px-5 py-3 text-[11px] font-bold uppercase tracking-[0.14em] shadow-2xl">
        <span class="ds-wa-icon-anim">${getSvgIcon('whatsapp', 'w-5 h-5 text-white')}</span>
        <span>WHATSAPP CHAT</span>
      </a>

      <!-- Mobile Sticky Frosted Quote Bar (Hidden on /contact & /seo-admin) -->
      ${
        mobileBarDismissed ||
        window.location.pathname === '/contact' ||
        window.location.pathname === '/seo-admin'
          ? ''
          : `<div id="mobile-sticky-quote" class="lg:hidden fixed bottom-0 left-0 right-0 z-40 ds-mobile-sticky-bar px-4 py-3 flex items-center justify-between gap-3">
              <a href="/contact" data-link class="ds-btn-gradient flex-grow py-3">
                <span>REQUEST A QUOTE</span>
                ${getSvgIcon('chevronRight', 'w-4 h-4')}
              </a>
              <button type="button" id="dismiss-mobile-bar" aria-label="Dismiss quote bar" class="w-10 h-10 bg-[#0E2A6E] text-white flex items-center justify-center shrink-0 text-sm font-bold">✕</button>
            </div>`
      }
    `;
  }

  function updateHeroSlideDOM() {
    const slide = HERO_SLIDES[currentSlide];
    const imgEl = document.getElementById('hero-slide-img');
    const hdgEl = document.getElementById('hero-slide-heading');
    const subEl = document.getElementById('hero-slide-sub');
    const dscEl = document.getElementById('hero-slide-desc');
    const cntEl = document.getElementById('hero-slide-counter');
    if (!imgEl || !hdgEl || !dscEl) return;

    imgEl.src = slide.image;
    imgEl.alt = `${slide.heading} ${slide.accentHeading}`;
    hdgEl.innerHTML = `<span class="block">${slide.heading}</span><span class="block">${slide.accentHeading}</span>`;
    if (subEl) subEl.textContent = slide.subheadline;
    dscEl.textContent = slide.description;
    if (cntEl) cntEl.textContent = `0${currentSlide + 1} / 0${HERO_SLIDES.length}`;

    document.querySelectorAll('[data-slide-idx]').forEach((btn) => {
      const idx = parseInt(btn.getAttribute('data-slide-idx'), 10);
      btn.className = `h-1 transition-all duration-300 ${
        idx === currentSlide
          ? 'w-10 bg-[#00B8FF]'
          : 'w-4 bg-white/30 hover:bg-white/60'
      }`;
    });
  }

  function startHeroTimer() {
    if (slideTimer) clearInterval(slideTimer);
    if (window.location.pathname === '/') {
      if (!heroImagesPreloaded) {
        heroImagesPreloaded = true;
        HERO_SLIDES.forEach((s) => {
          const img = new Image();
          img.src = s.image;
        });
      }
      slideTimer = setInterval(() => {
        currentSlide = (currentSlide + 1) % HERO_SLIDES.length;
        updateHeroSlideDOM();
      }, 6500);
    }
  }

  async function submitNetlifyForm(formEl) {
    if (formEl && formEl.dataset.submitting === '1') return;
    if (formEl) {
      formEl.dataset.submitting = '1';
      const btn = formEl.querySelector('button[type="submit"]');
      if (btn) btn.disabled = true;
    }
    markPopupSubmittedStored();
    try {
      const payload = new URLSearchParams(new FormData(formEl)).toString();
      await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: payload,
      });
    } catch (_) {
      // Graceful local fallback
    }
  }

  function renderThankYouBlock(name, service, waSummary, isDark = false) {
    return `
      <div class="text-center py-6 space-y-4 ds-animate-in">
        <div class="w-14 h-14 mx-auto bg-[#1D58C8]/20 border border-[#00B8FF] flex items-center justify-center text-[#00B8FF]">
          ${getSvgIcon('check', 'w-7 h-7')}
        </div>
        <p class="${isDark ? 'ds-eyebrow' : 'ds-eyebrow-dark'}">PROPOSAL REQUEST RECEIVED</p>
        <h3 class="text-2xl font-extrabold ${isDark ? 'text-white' : 'text-[#0E2A6E]'}">Thank You, ${escapeHtml(name)}!</h3>
        <p class="text-xs sm:text-sm ${isDark ? 'text-white/75' : 'text-[#475569]'} max-w-md mx-auto leading-relaxed">
          We've received your request for <strong>${escapeHtml(service)}</strong>. Send your brief straight to our WhatsApp desk for the fastest response.
        </p>
        <div class="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a href="${SOCIAL_LINKS.whatsappBase}?text=${waSummary}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#16A34A] text-white text-xs font-bold uppercase tracking-[0.14em] px-6 py-3 shadow-lg transition-colors w-full sm:w-auto">
            <span class="ds-wa-icon-anim">${getSvgIcon('whatsapp', 'w-4 h-4 text-white')}</span>
            <span>SEND VIA WHATSAPP</span>
          </a>
          <a href="/contact" data-link class="${isDark ? 'ds-btn-glass' : 'ds-btn-outline-blue'} px-5 py-3 w-full sm:w-auto">
            <span>NEW ENQUIRY</span>
          </a>
        </div>
      </div>
    `;
  }

  function updateScrollUI() {
    const header = document.getElementById('ds-site-header');
    const bar = document.getElementById('ds-scroll-bar');
    const fab = document.getElementById('ds-floating-whatsapp');
    const scrollTop = window.scrollY || document.documentElement.scrollTop || 0;
    if (header) {
      if (scrollTop > 40) header.classList.add('is-scrolled');
      else header.classList.remove('is-scrolled');
    }
    if (fab) {
      const showFab = scrollTop > 360;
      fab.classList.toggle('is-hidden-top', !showFab);
    }
    if (bar) {
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? Math.min(100, Math.max(0, (scrollTop / docHeight) * 100)) : 0;
      bar.style.width = `${pct.toFixed(1)}%`;
    }
  }

  function attachIndustryCarouselEvents() {
    const prev = document.getElementById('ind-prev');
    const next = document.getElementById('ind-next');
    const rerenderStage = () => {
      const stage = document.getElementById('industry-carousel-stage');
      if (stage) stage.innerHTML = renderIndustryCarouselContent(activeIndustryIdx);
      document.querySelectorAll('[data-ind-idx]').forEach((btn) => {
        const i = parseInt(btn.getAttribute('data-ind-idx'), 10);
        const active = i === activeIndustryIdx;
        btn.className = `p-3 text-left border transition-all ${
          active
            ? 'border-[#00B8FF] bg-[#0E2A6E] text-white shadow-lg ring-1 ring-[#00B8FF]'
            : 'bg-white border-[#D5E3F8] text-[#0E2A6E] hover:border-[#1D58C8]'
        }`;
        const numSpan = btn.querySelector('span');
        if (numSpan) {
          numSpan.className = `block text-[10px] font-bold tracking-[0.16em] ${
            active ? 'text-[#00B8FF]' : 'text-[#1D58C8]'
          }`;
        }
      });
      attachIndustryCarouselEvents();
    };
    if (prev) {
      prev.addEventListener('click', () => {
        activeIndustryIdx =
          (activeIndustryIdx - 1 + INDUSTRIES_DATA.length) % INDUSTRIES_DATA.length;
        rerenderStage();
      });
    }
    if (next) {
      next.addEventListener('click', () => {
        activeIndustryIdx = (activeIndustryIdx + 1) % INDUSTRIES_DATA.length;
        rerenderStage();
      });
    }
  }

  function attachEvents() {
    const menuBtn = document.getElementById('mobile-menu-btn');
    if (menuBtn) {
      menuBtn.addEventListener('click', () => {
        mobileMenuOpen = !mobileMenuOpen;
        renderApp();
      });
    }

    const dismissBarBtn = document.getElementById('dismiss-mobile-bar');
    if (dismissBarBtn) {
      dismissBarBtn.addEventListener('click', () => {
        mobileBarDismissed = true;
        const bar = document.getElementById('mobile-sticky-quote');
        if (bar) bar.remove();
      });
    }

    // Hero Slider Controls
    const prevBtn = document.getElementById('slide-prev');
    const nextBtn = document.getElementById('slide-next');
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + HERO_SLIDES.length) % HERO_SLIDES.length;
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

    // Blueprint Filter Tabs
    document.querySelectorAll('[data-bp-filter]').forEach((btn) => {
      btn.addEventListener('click', () => {
        activeBlueprintFilter = btn.getAttribute('data-bp-filter');
        document.querySelectorAll('[data-bp-filter]').forEach((b) => {
          b.classList.toggle(
            'is-active',
            b.getAttribute('data-bp-filter') === activeBlueprintFilter
          );
        });
        const list = document.getElementById('blueprint-cards-list');
        if (list) list.innerHTML = renderBlueprintCards(activeBlueprintFilter);
      });
    });

    // Blog Category Filter Tabs
    document.querySelectorAll('[data-blog-filter]').forEach((btn) => {
      btn.addEventListener('click', () => {
        activeBlogFilter = btn.getAttribute('data-blog-filter');
        document.querySelectorAll('[data-blog-filter]').forEach((b) => {
          b.classList.toggle(
            'is-active',
            b.getAttribute('data-blog-filter') === activeBlogFilter
          );
        });
        const grid = document.getElementById('blog-cards-grid');
        if (grid) {
          const filtered =
            activeBlogFilter === 'all'
              ? BLOG_POSTS
              : BLOG_POSTS.filter((p) => p.categoryKey === activeBlogFilter);
          grid.innerHTML = renderBlogCardsGrid(filtered);
        }
      });
    });

    // Industry Carousel Selector Strip & Prev/Next
    document.querySelectorAll('[data-ind-idx]').forEach((btn) => {
      btn.addEventListener('click', () => {
        activeIndustryIdx = parseInt(btn.getAttribute('data-ind-idx'), 10);
        const stage = document.getElementById('industry-carousel-stage');
        if (stage) stage.innerHTML = renderIndustryCarouselContent(activeIndustryIdx);
        document.querySelectorAll('[data-ind-idx]').forEach((b) => {
          const i = parseInt(b.getAttribute('data-ind-idx'), 10);
          const active = i === activeIndustryIdx;
          b.className = `p-3 text-left border transition-all ${
            active
              ? 'border-[#00B8FF] bg-[#0E2A6E] text-white shadow-lg ring-1 ring-[#00B8FF]'
              : 'bg-white border-[#D5E3F8] text-[#0E2A6E] hover:border-[#1D58C8]'
          }`;
          const numSpan = b.querySelector('span');
          if (numSpan) {
            numSpan.className = `block text-[10px] font-bold tracking-[0.16em] ${
              active ? 'text-[#00B8FF]' : 'text-[#1D58C8]'
            }`;
          }
        });
        attachIndustryCarouselEvents();
      });
    });
    attachIndustryCarouselEvents();

    // FAQ Accordion
    document.querySelectorAll('[data-faq-idx]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.getAttribute('data-faq-idx'), 10);
        activeFaqIdx = activeFaqIdx === idx ? -1 : idx;
        document.querySelectorAll('[data-faq-card]').forEach((card) => {
          const i = parseInt(card.getAttribute('data-faq-card'), 10);
          const isOpen = i === activeFaqIdx;
          card.className = `border transition-all duration-200 ${
            isOpen
              ? 'border-[#1D58C8] bg-[#F2F7FF] shadow-md'
              : 'border-[#D5E3F8] bg-white hover:border-[#00B8FF]'
          }`;
          const trigger = card.querySelector('[data-faq-idx]');
          if (trigger) trigger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
          const numSpan = card.querySelector('[data-faq-idx] span');
          if (numSpan) {
            numSpan.className = `text-xs font-extrabold tracking-[0.18em] pt-0.5 shrink-0 ${
              isOpen ? 'text-[#1D58C8]' : 'text-[#00B8FF]'
            }`;
          }
          const chev = card.querySelector('[data-faq-chevron]');
          if (chev) {
            chev.className = `w-8 h-8 shrink-0 flex items-center justify-center border transition-all duration-200 ${
              isOpen
                ? 'bg-[#1D58C8] border-[#1D58C8] text-white rotate-180'
                : 'bg-[#F2F7FF] border-[#D5E3F8] text-[#1D58C8]'
            }`;
          }
          const body = card.querySelector('[data-faq-body]');
          if (body) {
            body.classList.toggle('block', isOpen);
            body.classList.toggle('hidden', !isOpen);
          }
        });
      });
    });

    // Services Horizontal Tabs
    document.querySelectorAll('[data-srv-idx]').forEach((btn) => {
      btn.addEventListener('click', () => {
        activeServiceIdx = parseInt(btn.getAttribute('data-srv-idx'), 10);
        const stage = document.getElementById('service-tab-stage');
        if (stage) stage.innerHTML = renderServicePanelContent(activeServiceIdx);
        document.querySelectorAll('[data-srv-idx]').forEach((b) => {
          const i = parseInt(b.getAttribute('data-srv-idx'), 10);
          const active = i === activeServiceIdx;
          const srv = SERVICES_DATA[i];
          b.className = `shrink-0 whitespace-nowrap inline-flex items-center gap-2 px-4 py-3.5 text-xs font-bold border-b-2 transition-all ${
            active
              ? 'border-[#00B8FF] text-[#0E2A6E] bg-[#F2F7FF]'
              : 'border-transparent text-[#64748B] hover:text-[#0E2A6E] hover:bg-[#F8FAFD]'
          }`;
          b.innerHTML = `
            <span class="${active ? 'text-[#1D58C8]' : 'text-[#94A3B8]'}">${getSvgIcon(srv.iconName, 'w-4 h-4')}</span>
            <span>${srv.shortLabel}</span>
            ${active ? '<span class="w-1.5 h-1.5 rounded-full bg-[#00B8FF]"></span>' : ''}
          `;
        });
      });
    });

    // Process Node Timeline Tabs
    document.querySelectorAll('[data-proc-idx]').forEach((btn) => {
      btn.addEventListener('click', () => {
        activeProcessIdx = parseInt(btn.getAttribute('data-proc-idx'), 10);
        document.querySelectorAll('[data-proc-idx]').forEach((b) => {
          b.classList.toggle(
            'is-active',
            parseInt(b.getAttribute('data-proc-idx'), 10) === activeProcessIdx
          );
        });
        const stage = document.getElementById('process-tab-stage');
        if (stage) stage.innerHTML = renderProcessPanelContent(activeProcessIdx);
      });
    });

    // Differentiator Tabs
    document.querySelectorAll('[data-diff-idx]').forEach((btn) => {
      btn.addEventListener('click', () => {
        activeDiffIdx = parseInt(btn.getAttribute('data-diff-idx'), 10);
        document.querySelectorAll('[data-diff-idx]').forEach((b) => {
          b.classList.toggle(
            'is-active',
            parseInt(b.getAttribute('data-diff-idx'), 10) === activeDiffIdx
          );
        });
        const stage = document.getElementById('diff-tab-stage');
        if (stage) stage.innerHTML = renderDiffPanelContent(activeDiffIdx);
      });
    });

    // Global Markets Horizontal Accordion
    document.querySelectorAll('[data-market-idx]').forEach((card) => {
      const activate = () => {
        activeMarketIdx = parseInt(card.getAttribute('data-market-idx'), 10);
        document.querySelectorAll('[data-market-idx]').forEach((c) => {
          const i = parseInt(c.getAttribute('data-market-idx'), 10);
          const active = i === activeMarketIdx;
          c.classList.toggle('is-active', active);
          c.setAttribute('aria-expanded', active ? 'true' : 'false');
          const details = c.querySelector('.ds-hacc-details');
          if (details) {
            details.classList.toggle('block', active);
            details.classList.toggle('hidden', !active);
          }
          const hint = c.querySelector('.ds-m-hint');
          if (hint) {
            hint.classList.toggle('hidden', active);
            hint.classList.toggle('block', !active);
          }
          const cta = c.querySelector('.ds-m-cta');
          if (cta) {
            cta.classList.toggle('inline-flex', active);
            cta.classList.toggle('hidden', !active);
          }
          const arrow = c.querySelector('.ds-m-arrow');
          if (arrow) {
            arrow.classList.toggle('hidden', active);
            arrow.classList.toggle('inline-flex', !active);
          }
          const iconEl = c.querySelector('.ds-m-icon');
          if (iconEl) {
            iconEl.className = `ds-m-icon w-9 h-9 flex items-center justify-center border shrink-0 transition-colors ${
              active
                ? 'bg-[#F2F7FF] border-[#D5E3F8] text-[#1D58C8]'
                : 'bg-white/10 border-white/20 text-[#7DD8FF]'
            }`;
          }
          const badgeEl = c.querySelector('.ds-m-badge');
          if (badgeEl) {
            badgeEl.className = `ds-m-badge text-[10px] font-extrabold tracking-[0.18em] uppercase px-2.5 py-1 border ${
              active
                ? 'bg-[#F2F7FF] border-[#D5E3F8] text-[#1D58C8]'
                : 'bg-white/10 border-white/15 text-[#7DD8FF]'
            }`;
          }
          const titleEl = c.querySelector('.ds-m-title');
          if (titleEl) {
            titleEl.className = `ds-m-title font-extrabold leading-snug ${
              active ? 'text-2xl text-[#0F2557]' : 'text-[17px] text-white'
            }`;
          }
          const footEl = c.querySelector('.ds-m-foot');
          if (footEl) {
            footEl.className = `ds-m-foot relative z-10 flex items-center justify-between pt-3.5 border-t ${
              active ? 'border-[#D5E3F8]' : 'border-white/20'
            }`;
          }
          const footStatus = c.querySelector('.ds-m-status');
          if (footStatus) {
            footStatus.textContent = active ? 'ACTIVE PILLAR' : 'EXPLORE';
            footStatus.className = `ds-m-status text-[10px] font-extrabold uppercase tracking-[0.16em] ${
              active ? 'text-[#1D58C8]' : 'text-white/85'
            }`;
          }
        });
      };
      card.addEventListener('click', (e) => {
        if (e.target.closest('a[data-link]')) return;
        activate();
      });
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          activate();
        }
      });
    });

    // Hero Proposal Form
    const heroForm = document.getElementById('hero-proposal-form');
    if (heroForm) {
      heroForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const errEl = document.getElementById('hero-form-err');
        const fullName = heroForm.fullName.value.trim();
        const companyName = heroForm.companyName.value.trim();
        const email = heroForm.email.value.trim();
        const serviceRequired = heroForm.serviceRequired.value;
        const projectDetails = heroForm.projectDetails.value.trim();

        if (
          !fullName ||
          !companyName ||
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email) ||
          !serviceRequired ||
          projectDetails.length < 5
        ) {
          if (errEl) {
            errEl.textContent = 'Please complete all required fields with a valid email.';
            errEl.classList.remove('hidden');
          }
          return;
        }
        if (errEl) errEl.classList.add('hidden');
        await submitNetlifyForm(heroForm);
        const waSummary = encodeURIComponent(
          `Hello JEXORA SOLUTIONS! Proposal Request:\nName: ${fullName}\nBrand: ${companyName}\nEmail: ${email}\nService: ${serviceRequired}\nGoals: ${projectDetails}`
        );
        const container = document.getElementById('hero-proposal-container');
        if (container) {
          container.innerHTML = renderThankYouBlock(fullName, serviceRequired, waSummary, false);
        }
      });
    }

    // Home Bottom Lead Form
    const bottomForm = document.getElementById('bottom-lead-form');
    if (bottomForm) {
      bottomForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const errEl = document.getElementById('bottom-form-err');
        const fullName = bottomForm.fullName.value.trim();
        const companyName = bottomForm.companyName.value.trim();
        const email = bottomForm.email.value.trim();
        const country = bottomForm.country.value.trim();
        const serviceRequired = bottomForm.serviceRequired.value;
        const projectDetails = bottomForm.projectDetails.value.trim();

        if (
          !fullName ||
          !companyName ||
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email) ||
          !country ||
          !serviceRequired ||
          projectDetails.length < 5
        ) {
          if (errEl) {
            errEl.textContent = 'Please fill in all required fields with a valid business email.';
            errEl.classList.remove('hidden');
          }
          return;
        }
        if (errEl) errEl.classList.add('hidden');
        await submitNetlifyForm(bottomForm);
        const waSummary = encodeURIComponent(
          `Hello JEXORA SOLUTIONS! New Enquiry:\nName: ${fullName}\nBrand: ${companyName}\nEmail: ${email}\nCountry: ${country}\nService: ${serviceRequired}\nDetails: ${projectDetails}`
        );
        const container = document.getElementById('bottom-lead-container');
        if (container) {
          container.innerHTML = renderThankYouBlock(fullName, serviceRequired, waSummary, true);
        }
      });
    }

    // Dedicated Contact Page Form
    const contactForm = document.getElementById('jexora-contact-form');
    if (contactForm) {
      contactForm.querySelectorAll('input, select, textarea').forEach((field) => {
        const clearErr = () => {
          const name = field.getAttribute('name');
          const el = contactForm.querySelector(`[data-err="${name}"]`);
          if (el) {
            el.textContent = '';
            el.classList.add('hidden');
          }
          field.classList.remove('is-invalid');
          field.removeAttribute('aria-invalid');
        };
        field.addEventListener('input', clearErr);
        field.addEventListener('change', clearErr);
      });

      contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const fullName = contactForm.fullName.value.trim();
        const email = contactForm.email.value.trim();
        const companyName = contactForm.companyName.value.trim();
        const websiteUrl = contactForm.websiteUrl.value.trim();
        const country = contactForm.country.value.trim();
        const serviceRequired = contactForm.serviceRequired.value;
        const monthlyBudget = contactForm.monthlyBudget.value;
        const projectDetails = contactForm.projectDetails.value.trim();

        const errs = {};
        if (!fullName) errs.fullName = 'Please enter your full name.';
        if (!email) errs.email = 'Please enter your business email address.';
        else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email))
          errs.email = 'Please enter a valid email address.';
        if (!companyName) errs.companyName = 'Please enter your company or brand name.';
        if (
          websiteUrl &&
          !/^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/\S*)?$/i.test(websiteUrl)
        )
          errs.websiteUrl = 'Please enter a valid website URL.';
        if (!country) errs.country = 'Please enter your country.';
        if (!serviceRequired) errs.serviceRequired = 'Please select a required service.';
        if (!projectDetails || projectDetails.length < 10)
          errs.projectDetails = 'Please share at least 10 characters about your project.';

        contactForm.querySelectorAll('[data-err]').forEach((el) => {
          const key = el.getAttribute('data-err');
          const field = contactForm[key];
          if (errs[key]) {
            el.textContent = errs[key];
            el.classList.remove('hidden');
            if (field && field.classList) {
              if (field.type !== 'checkbox') field.classList.add('is-invalid');
              field.setAttribute('aria-invalid', 'true');
            }
          } else {
            el.textContent = '';
            el.classList.add('hidden');
            if (field && field.classList) {
              field.classList.remove('is-invalid');
              field.removeAttribute('aria-invalid');
            }
          }
        });

        if (Object.keys(errs).length === 0) {
          await submitNetlifyForm(contactForm);
          const waSummary = encodeURIComponent(
            `Hello JEXORA SOLUTIONS! Consultation Enquiry:\nName: ${fullName}\nEmail: ${email}\nBrand: ${companyName}\nCountry: ${country}\nService: ${serviceRequired}\nBudget: ${monthlyBudget}\nDetails: ${projectDetails}`
          );
          const container = document.getElementById('contact-card-container');
          if (container) {
            container.innerHTML = renderThankYouBlock(fullName, serviceRequired, waSummary, false);
          }
        }
      });
    }

    if (
      window.location.pathname === '/seo-admin' &&
      window.JexoraSEO &&
      typeof window.JexoraSEO.attachAdminEvents === 'function'
    ) {
      window.JexoraSEO.attachAdminEvents(renderApp);
    }
  }

  function renderApp() {
    const root = document.getElementById('root');
    if (!root) return;

    const rawPath = window.location.pathname;
    const validPaths = ['/', '/about', '/services', '/industries', '/blog', '/contact', '/seo-admin'];
    const isBlogDetail =
      rawPath.startsWith('/blog/') &&
      BLOG_POSTS.some((p) => p.slug === rawPath.replace('/blog/', ''));
    const pathname = validPaths.includes(rawPath) || isBlogDetail ? rawPath : '/';

    updateSEO(pathname);

    let pageContent = '';
    if (pathname === '/') pageContent = renderHomePage();
    else if (pathname === '/about') pageContent = renderAboutPage();
    else if (pathname === '/services') pageContent = renderServicesPage();
    else if (pathname === '/industries') pageContent = renderIndustriesPage();
    else if (pathname === '/blog') pageContent = renderBlogPage();
    else if (isBlogDetail) pageContent = renderBlogDetailPage(pathname.replace('/blog/', ''));
    else if (pathname === '/contact') pageContent = renderContactPage();
    else if (pathname === '/seo-admin') {
      pageContent =
        window.JexoraSEO && typeof window.JexoraSEO.renderAdminPage === 'function'
          ? window.JexoraSEO.renderAdminPage()
          : '';
    }

    root.innerHTML = `
      <div class="min-h-screen flex flex-col bg-white text-[#0F2557]">
        ${renderHeader(pathname)}
        <div class="flex-grow">${pageContent}</div>
        ${renderFooter()}
        ${renderFloatingControls()}
      </div>
    `;

    attachEvents();
    startHeroTimer();
    updateScrollUI();

    if (window.location.hash) {
      const id = window.location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 90);
      }
    }
  }

  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[data-link]');
    if (link) {
      const href = link.getAttribute('href');
      if (href && href.startsWith('/')) {
        e.preventDefault();
        mobileMenuOpen = false;
        if (document.activeElement && typeof document.activeElement.blur === 'function') {
          document.activeElement.blur();
        }
        window.history.pushState({}, '', href);
        renderApp();
        startEngagementPopups();
        if (!href.includes('#')) {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    }
  });

  window.addEventListener('scroll', updateScrollUI, { passive: true });
  window.addEventListener('popstate', () => {
    mobileMenuOpen = false;
    renderApp();
  });

  const POPUP_MAX_PER_USER = 2;
  const FEEDBACK_INTERVAL_MS = 30 * 60 * 1000; // 30 minutes
  const STORAGE_KEYS = {
    popupCount: 'jexora_popup_shown_count',
    popupSubmitted: 'jexora_popup_submitted',
    lastFeedbackAt: 'jexora_last_feedback_at',
  };

  function getStoredPopupCount() {
    try {
      return parseInt(localStorage.getItem(STORAGE_KEYS.popupCount) || '0', 10) || 0;
    } catch (_) {
      return 0;
    }
  }

  function incrementStoredPopupCount() {
    const next = getStoredPopupCount() + 1;
    try {
      localStorage.setItem(STORAGE_KEYS.popupCount, String(next));
    } catch (_) {}
    return next;
  }

  function isPopupSubmittedStored() {
    if (popupSubmitted) return true;
    try {
      return localStorage.getItem(STORAGE_KEYS.popupSubmitted) === '1';
    } catch (_) {
      return false;
    }
  }

  function markPopupSubmittedStored() {
    popupSubmitted = true;
    if (popupTimer) clearTimeout(popupTimer);
    try {
      localStorage.setItem(STORAGE_KEYS.popupSubmitted, '1');
    } catch (_) {}
  }

  function canShowPopupNow() {
    if (isPopupSubmittedStored()) return false;
    if (getStoredPopupCount() >= POPUP_MAX_PER_USER) return false;
    if (window.location.pathname === '/contact' || window.location.pathname === '/seo-admin') {
      return false;
    }
    if (
      document.getElementById('jexora-form-popup') ||
      document.getElementById('jexora-legal-modal')
    ) {
      return false;
    }
    if (popupLastClosedAt && Date.now() - popupLastClosedAt < 3000) {
      return false;
    }
    return true;
  }

  function checkScrollOrServicePopup() {
    if (popupSecondShown || !popupFirstShown || !canShowPopupNow()) return;

    const scrollTop = window.scrollY || document.documentElement.scrollTop || 0;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

    let inServiceSection = window.location.pathname === '/services' && scrollTop > 180;
    const srvSection = document.getElementById('home-services-section');
    if (srvSection) {
      const rect = srvSection.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.65 && rect.bottom >= 120) {
        inServiceSection = true;
      }
    }

    if (scrollPct >= 52 || inServiceSection) {
      popupSecondShown = true;
      showFormPopup('scroll');
    }
  }

  function showFormPopup(trigger = 'initial') {
    if (!canShowPopupNow()) return;
    incrementStoredPopupCount();

    const copyMap = {
      initial: {
        eyebrow: 'FREE GROWTH CONSULTATION',
        title: 'Get Your Custom Proposal',
        subtitle:
          'Share your goals and receive a tailored digital growth plan from JEXORA SOLUTIONS.',
        cta: 'GET MY FREE PROPOSAL',
      },
      scroll: {
        eyebrow: 'TAILORED SERVICE ROADMAP',
        title: 'Need Help Choosing the Right Strategy?',
        subtitle:
          'Tell us which service caught your eye — our team will prepare a custom plan and deliverables.',
        cta: 'REQUEST SERVICE PROPOSAL',
      },
      exit: {
        eyebrow: 'WAIT — BEFORE YOU GO',
        title: 'Claim Your Free Digital Growth Audit',
        subtitle:
          'Leave your email and brand name — we will send actionable SEO, Ads & UX quick-wins for free.',
        cta: 'CLAIM MY FREE AUDIT',
      },
    };
    const copy = copyMap[trigger] || copyMap.initial;

    const popupHtml = `
      <div id="jexora-form-popup" data-trigger="${trigger}" role="dialog" aria-modal="true" aria-labelledby="form-popup-title" class="fixed inset-0 z-[65] bg-[#0E2A6E]/65 backdrop-blur-sm flex items-center justify-center p-4">
        <div class="ds-proposal-card max-w-md w-full p-6 sm:p-7 relative ds-animate-in">
          <button type="button" id="close-form-popup" aria-label="Close proposal popup" class="absolute top-3.5 right-3.5 w-8 h-8 bg-[#F2F7FF] hover:bg-[#1D58C8] text-[#0F2557] hover:text-white flex items-center justify-center text-sm font-bold transition-colors">✕</button>

          <div id="popup-proposal-body">
            <div class="mb-4 pr-8">
              <p class="text-[10px] font-extrabold uppercase tracking-[0.22em] text-[#1D58C8]">${copy.eyebrow}</p>
              <h3 id="form-popup-title" class="text-xl sm:text-2xl font-bold text-[#0F2557] tracking-tight mt-0.5">${copy.title}</h3>
              <p class="text-xs text-[#4B638C] mt-1">${copy.subtitle}</p>
            </div>

            <form id="jexora-popup-form" name="consultation" method="POST" data-netlify="true" netlify-honeypot="bot-field" novalidate class="space-y-3">
              <input type="hidden" name="form-name" value="consultation" />
              <input type="hidden" name="country" value="Popup Enquiry (${trigger})" />
              <input type="hidden" name="monthlyBudget" value="Prefer not to say" />
              <input type="hidden" name="privacyConsent" value="Agreed" />
              <p class="hidden"><label>Bot: <input name="bot-field" /></label></p>

              <div class="ds-field-wrap">
                <input type="text" name="fullName" placeholder="Your Name *" required aria-label="Your Name" class="ds-proposal-input" />
              </div>
              <div class="ds-field-wrap">
                <input type="text" name="companyName" placeholder="Company or Brand Name *" required aria-label="Company Name" class="ds-proposal-input" />
              </div>
              <div class="ds-field-wrap">
                <input type="email" name="email" placeholder="Business Email *" required aria-label="Business Email" class="ds-proposal-input" />
              </div>
              <div class="ds-field-wrap">
                <select name="serviceRequired" required aria-label="Service Required" class="ds-proposal-input">
                  <option value="">Select Service Required *</option>
                  ${SERVICES_DATA.map(
                    (s) => `<option value="${s.title}">${s.title}</option>`
                  ).join('')}
                </select>
              </div>
              <div class="ds-field-wrap">
                <textarea name="projectDetails" rows="2" placeholder="Tell us about your project &amp; goals *" required aria-label="Project Details" class="ds-proposal-input"></textarea>
              </div>

              <p id="popup-form-err" role="alert" class="hidden text-[11px] font-semibold text-[#DC2626]"></p>

              <button type="submit" class="ds-btn-gradient w-full py-3.5">
                <span>${copy.cta}</span>
                ${getSvgIcon('chevronRight', 'w-4 h-4')}
              </button>
            </form>
          </div>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', popupHtml);
    const modalEl = document.getElementById('jexora-form-popup');
    const closePopup = () => {
      document.removeEventListener('keydown', onEsc);
      if (modalEl) modalEl.remove();
      popupLastClosedAt = Date.now();
    };
    const onEsc = (e) => {
      if (e.key === 'Escape') closePopup();
    };
    document.addEventListener('keydown', onEsc);
    modalEl.addEventListener('click', (e) => {
      if (e.target === modalEl) closePopup();
    });
    document
      .getElementById('close-form-popup')
      .addEventListener('click', closePopup);

    const pForm = document.getElementById('jexora-popup-form');
    if (pForm) {
      pForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const errEl = document.getElementById('popup-form-err');
        const fullName = pForm.fullName.value.trim();
        const companyName = pForm.companyName.value.trim();
        const email = pForm.email.value.trim();
        const serviceRequired = pForm.serviceRequired.value;
        const projectDetails = pForm.projectDetails.value.trim();

        if (
          !fullName ||
          !companyName ||
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email) ||
          !serviceRequired ||
          projectDetails.length < 5
        ) {
          if (errEl) {
            errEl.textContent =
              'Please complete all required fields with a valid email.';
            errEl.classList.remove('hidden');
          }
          return;
        }
        if (errEl) errEl.classList.add('hidden');
        popupSubmitted = true;
        if (popupTimer) clearTimeout(popupTimer);
        await submitNetlifyForm(pForm);
        const waSummary = encodeURIComponent(
          `Hello JEXORA SOLUTIONS! Popup Proposal Request:\nName: ${fullName}\nBrand: ${companyName}\nEmail: ${email}\nService: ${serviceRequired}\nGoals: ${projectDetails}`
        );
        const bodyEl = document.getElementById('popup-proposal-body');
        if (bodyEl) {
          bodyEl.innerHTML = renderThankYouBlock(
            fullName,
            serviceRequired,
            waSummary,
            false
          );
        }
      });
    }
  }

  function showClientFeedbackToast() {
    const existing = document.getElementById('jexora-feedback-toast');
    if (existing) existing.remove();
    if (feedbackHideTimer) clearTimeout(feedbackHideTimer);

    const fb = CLIENT_FEEDBACKS[feedbackIndex % CLIENT_FEEDBACKS.length];
    feedbackIndex = (feedbackIndex + 1) % CLIENT_FEEDBACKS.length;

    const toastHtml = `
      <aside id="jexora-feedback-toast" role="status" aria-live="polite" class="ds-feedback-toast ds-toast-in fixed bottom-20 lg:bottom-5 left-4 sm:left-5 z-50 max-w-[340px] w-[calc(100%-2rem)] p-4">
        <button type="button" id="close-feedback-toast" aria-label="Close client feedback" class="absolute top-2.5 right-2.5 w-6 h-6 text-[#4B638C] hover:text-[#1D58C8] flex items-center justify-center text-xs font-bold">✕</button>
        <div class="flex items-start gap-3 pr-5">
          <div class="w-10 h-10 bg-gradient-to-br from-[#143992] to-[#00B8FF] text-white font-bold text-xs flex items-center justify-center shrink-0">
            ${fb.initials}
          </div>
          <div class="space-y-1 min-w-0">
            <div class="flex items-center gap-1.5 flex-wrap">
              <div class="flex items-center gap-0.5 text-[#1D58C8]">
                ${Array(5)
                  .fill(getSvgIcon('star', 'w-3 h-3'))
                  .join('')}
              </div>
              <span class="text-[9px] font-bold uppercase tracking-[0.14em] text-[#1D58C8] bg-[#F2F7FF] border border-[#D5E3F8] px-1.5 py-0.5">${fb.service}</span>
            </div>
            <p class="text-xs text-[#0F2557] leading-snug font-medium">"${fb.quote}"</p>
            <p class="text-[11px] font-bold text-[#143992] pt-0.5">${fb.name} <span class="font-normal text-[#4B638C]">· ${fb.role}</span></p>
          </div>
        </div>
      </aside>
    `;

    document.body.insertAdjacentHTML('beforeend', toastHtml);
    const toastEl = document.getElementById('jexora-feedback-toast');
    const closeBtn = document.getElementById('close-feedback-toast');
    if (closeBtn && toastEl) {
      closeBtn.addEventListener('click', () => {
        toastEl.remove();
      });
    }

    feedbackHideTimer = setTimeout(() => {
      const el = document.getElementById('jexora-feedback-toast');
      if (el) el.remove();
    }, 6800);
  }

  function scheduleNextFeedbackToast() {
    if (feedbackTimer) clearTimeout(feedbackTimer);
    let lastShown = 0;
    try {
      lastShown = parseInt(localStorage.getItem(STORAGE_KEYS.lastFeedbackAt) || '0', 10) || 0;
    } catch (_) {}
    const elapsed = lastShown ? Date.now() - lastShown : 0;
    const remaining = lastShown
      ? Math.max(25000, FEEDBACK_INTERVAL_MS - elapsed)
      : FEEDBACK_INTERVAL_MS;

    const triggerToast = () => {
      if (
        window.location.pathname === '/seo-admin' ||
        document.getElementById('jexora-form-popup')
      ) {
        feedbackTimer = setTimeout(triggerToast, 8000);
        return;
      }
      try {
        localStorage.setItem(STORAGE_KEYS.lastFeedbackAt, String(Date.now()));
      } catch (_) {}
      showClientFeedbackToast();
      scheduleNextFeedbackToast();
    };

    feedbackTimer = setTimeout(triggerToast, remaining);
  }

  function startEngagementPopups() {
    // Max 2 proposal popups per user (persisted in localStorage, disabled on /contact & /seo-admin)
    if (
      window.location.pathname !== '/contact' &&
      window.location.pathname !== '/seo-admin' &&
      getStoredPopupCount() < POPUP_MAX_PER_USER &&
      !isPopupSubmittedStored()
    ) {
      if (!popupFirstShown && !popupTimer) {
        popupTimer = setTimeout(() => {
          popupTimer = null;
          if (!popupFirstShown && canShowPopupNow()) {
            popupFirstShown = true;
            showFormPopup('initial');
          }
        }, 12000);
      }

      if (!engagementListenersAttached) {
        engagementListenersAttached = true;
        window.addEventListener('scroll', checkScrollOrServicePopup, { passive: true });
      }
    }

    // Client feedback toast strictly every 30 minutes (persisted in localStorage)
    if (!feedbackTimer) {
      scheduleNextFeedbackToast();
    }
  }

  function bootstrapApp() {
    if (window.JexoraSEO && typeof window.JexoraSEO.init === 'function') {
      window.JexoraSEO.init(BLOG_POSTS, () => {
        updateSEO(window.location.pathname);
        if (window.location.pathname === '/seo-admin') renderApp();
      });
    }
    renderApp();
    startEngagementPopups();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bootstrapApp);
  } else {
    bootstrapApp();
  }
})();
