import React, { useState, useEffect, useRef } from 'react';

const SLIDESHOW_IMAGES = [
  '/about-thumb.png',
  '/about-thumb-2.png',
  '/about-thumb-3.png',
];

const MAIN_SERVICES = [
  {
    tag: '01 · UNDERSTAND THE PROBLEM',
    title: 'Start with the why',
    description: 'Before thinking about screens, features or visuals, I want to understand what we are actually trying to solve.',
  },
  {
    tag: '02 · MAKE IT REAL',
    title: 'Build early',
    description: 'Ideas become easier to judge once they exist. I prototype, design and build early enough to learn from the work itself.',
  },
  {
    tag: '03 · QUESTION & REFINE',
    title: 'Keep improving',
    description: 'The first answer is rarely the final one. I test assumptions, revisit decisions and simplify wherever the work becomes unnecessarily complicated.',
  },
  {
    tag: '04 · CARE ABOUT THE FINISH',
    title: 'Details matter',
    description: 'Performance, interaction, typography, pacing and presentation all shape how something feels. The details matter when they make the whole experience better.',
  },
];

const DETAILED_SERVICES = [
  {
    title: 'Web & Application Development',
    description: 'I build responsive web products from interface to backend, with a focus on usability, maintainability and translating ideas into working software.',
    bullets: ['React, Next.js & JavaScript', 'Node.js, Express & MongoDB', 'API Integration, Deployment & Cloud'],
  },
  {
    title: 'UX & Product Design',
    description: 'I design digital products around how people actually use them, combining research, interaction design and technical understanding.',
    bullets: ['UX Research & Product Strategy', 'Figma, Prototyping & Design Systems', 'UI Design & Frontend Implementation'],
  },
  {
    title: 'LMS & Digital Learning',
    description: 'I create and improve digital learning experiences, from interactive course content to the systems and standards that support them.',
    bullets: ['Moodle, H5P & Articulate', 'SCORM, xAPI & cmi5', 'Course UX, Accessibility & LMS Integration'],
  },
  {
    title: 'Photo, Video & Motion',
    description: 'I produce visual content from concept through final delivery, combining photography, video production and motion design for brands and organizations.',
    bullets: ['Photography & Video Production', 'Premiere Pro & After Effects', 'Interviews, Commercials & Brand Content'],
  },
];

const HOME_SELECTED_WORKS = [
  {
    id: 101,
    tag: '01 · PRODUCT DESIGN & DEVELOPMENT',
    title: 'GHONTHEMAP',
    subtitle: 'PRODUCT DESIGN & NEXT.JS DEVELOPMENT',
    type: 'Product Design & Development',
    stack: 'Next.js · Interactive SVG',
    year: '/ 2026',
    client: 'Independent Project',
    services: 'Product Design, Next.js Development & Visual Storytelling',
    description: 'An interactive digital experience for exploring Ghana through its places, people, history and culture.',
    heroImage: '/images/ghonthemap/ghonthemap.png',
    gallery: ['/images/ghonthemap/ghonthemap.png', '/images/ghonthemap/ghonthemap2.png'],
    image: '/images/ghonthemap/ghonthemap.png',
  },
  {
    id: 103,
    tag: '02 · AI AUDIT PLATFORM',
    title: 'TrueLens',
    subtitle: 'AI EXPERIENCE DESIGN & NEXT.JS',
    type: 'Product Design & Frontend',
    stack: 'Next.js · AI',
    year: '/ 2026',
    client: 'TechNation AIEO Visibility Challenge',
    services: 'Product Design, AI Experience Design & Frontend Development',
    description: 'An AI audit platform built to uncover regional blind spots in how Canadian opportunities are surfaced and represented by AI.',
    heroImage: '/images/truelens/truelens.png',
    gallery: ['/images/truelens/truelens.png', '/images/truelens/truelens2.png'],
    image: '/images/truelens/truelens.png',
  },
  {
    id: 106,
    tag: '03 · PRODUCT DESIGN & AI',
    title: 'PolicyCompass',
    subtitle: 'AI EXPERIENCE DESIGN & FRONTEND',
    type: 'Product Design & AI',
    stack: 'Next.js · AI',
    year: '/ 2026',
    client: 'G7 GovAI Grand Challenge',
    services: 'Product Design, Frontend Development & AI Experience Design',
    description: 'An AI-powered platform designed to make government policies and regulations easier to understand and navigate.',
    heroImage: '/images/policycompass/policycompass.png',
    gallery: ['/images/policycompass/policycompass.png', '/images/policycompass/policycompass2.png'],
    image: '/images/policycompass/policycompass.png',
  },
  {
    id: 107,
    tag: '04 · WEB DESIGN & DEVELOPMENT',
    title: 'BAWYP',
    subtitle: 'WEB DESIGN & CONTENT STRATEGY',
    type: 'Web Design & Development',
    stack: 'Next.js',
    year: '/ 2026',
    client: 'BAWYP',
    services: 'Web Design, Frontend Development & Content Strategy',
    description: 'A digital platform for a non-profit supporting women and young entrepreneurs across Africa through practical, hands-on business development.',
    heroImage: '/images/bawyp/bawyp.png',
    gallery: ['/images/bawyp/bawyp.png', '/images/bawyp/bawyp2.png'],
    image: '/images/bawyp/bawyp.png',
  },
];

const PRICING_TIERS = [
  {
    id: 'event-photo',
    badge: 'P.01 · EVENT PHOTOGRAPHY',
    name: 'Event Photography',
    price: '$175',
    period: '/ hour',
    features: [
      'Professional Event Photography Coverage',
      'Candid, Detail & Key Moment Coverage',
      'Professionally Edited High-Resolution Photos',
      'Private Online Gallery & Digital Delivery',
      '2-Hour Minimum Booking',
    ],
  },
  {
    id: 'event-photo-video',
    badge: 'P.02 · EVENT PHOTO + VIDEO',
    name: 'Event Photography & Videography',
    price: '$325',
    period: '/ hour',
    features: [
      'Photography & Videography Coverage',
      'Candid, Detail & Key Moment Coverage',
      'Professionally Edited Photo Gallery',
      'Highlight Video with Color Grading',
      '3-Hour Minimum Booking',
    ],
  },
  {
    id: 'wedding-photo',
    badge: 'P.03 · WEDDING PHOTOGRAPHY',
    name: 'Wedding Photography',
    price: '$1,800',
    period: '/ event',
    features: [
      'Full-Day Wedding Photography Coverage',
      'Ceremony, Portraits & Reception Coverage',
      'Couple, Family & Detail Portraits',
      'Professionally Edited High-Resolution Gallery',
      'Private Online Gallery & Digital Delivery',
    ],
  },
  {
    id: 'wedding-photo-video',
    badge: 'P.04 · WEDDING PHOTO + VIDEO',
    name: 'Wedding Photography & Film',
    price: '$3,200',
    period: '/ event',
    features: [
      'Full-Day Photography & Videography Coverage',
      'Ceremony, Portraits & Reception Coverage',
      'Professionally Edited Wedding Gallery',
      'Cinematic Wedding Highlight Film',
      'Professional Audio, Color Grade & Final Delivery',
    ],
  },
];

const PHOTOGRAPHY_WORKS = [
  {
    id: 1,
    title: 'LACEY @ 2',
    subtitle: 'MILESTONE PORTRAIT',
    category: 'portrait',
    date: '02/2026',
    year: '2026',
    client: 'Lacey & Family',
    services: 'Portraiture & Milestone Lifestyle',
    description: 'An intimate 2nd birthday milestone portrait and lifestyle story capturing pure toddler wonder, playful curiosity, and soft natural daylight.',
    image: '/images/Lacey@2/DD7A2583.jpg',
    heroImage: '/images/Lacey@2/DD7A2583.jpg',
    credits: [
      { role: 'Photographer', name: 'Dave' },
      { role: 'Art Direction', name: 'Dave' },
      { role: 'Lighting', name: 'Natural Daylight & Diffused Fill' },
      { role: 'Color Grading', name: 'Dave' },
    ],
    gallery: [
      '/images/Lacey@2/DD7A2587.jpg',
      '/images/Lacey@2/DD7A2589.jpg',
      '/images/Lacey@2/DD7A2607.jpg',
      '/images/Lacey@2/DD7A2612.jpg',
      '/images/Lacey@2/DD7A2614.jpg',
      '/images/Lacey@2/DD7A2619.jpg',
      '/images/Lacey@2/DD7A2636.jpg',
      '/images/Lacey@2/DD7A2640.jpg',
      '/images/Lacey@2/DD7A2641.jpg',
      '/images/Lacey@2/DD7A2651.jpg',
      '/images/Lacey@2/DD7A2657.jpg',
      '/images/Lacey@2/DD7A2658.jpg',
      '/images/Lacey@2/DD7A2659.jpg',
      '/images/Lacey@2/DD7A2679.jpg',
      '/images/Lacey@2/DD7A2681.jpg',
    ],
  },
  {
    id: 2,
    title: 'TASTE OF GHANA - TORONTO',
    subtitle: 'CULTURAL DOCUMENTARY',
    category: 'editorial',
    date: '02/2026',
    year: '2026',
    client: 'Taste of Ghana Toronto',
    services: 'Cultural Documentary & Festival Stills',
    description: 'A vibrant cultural festival and documentary photography series capturing the rich culinary heritage, rhythmic live performances, colorful traditional textiles, and electric community energy of Ghana in Toronto.',
    image: '/images/tasteofghana-toronto/2M7A7466.jpg',
    heroImage: '/images/tasteofghana-toronto/2M7A7466.jpg',
    credits: [
      { role: 'Photographer', name: 'Dave' },
      { role: 'Event', name: 'Taste of Ghana Toronto' },
      { role: 'Coverage', name: 'Cultural Documentary & Festival Stills' },
      { role: 'Color Grading', name: 'Dave' },
    ],
    gallery: [
      '/images/tasteofghana-toronto/2M7A7493.jpg',
      '/images/tasteofghana-toronto/2M7A7506.jpg',
      '/images/tasteofghana-toronto/2M7A7563.jpg',
      '/images/tasteofghana-toronto/2M7A7572.jpg',
      '/images/tasteofghana-toronto/2M7A7582.jpg',
      '/images/tasteofghana-toronto/2M7A7607.jpg',
      '/images/tasteofghana-toronto/2M7A7642.jpg',
      '/images/tasteofghana-toronto/2M7A7648.jpg',
      '/images/tasteofghana-toronto/2M7A7688.jpg',
      '/images/tasteofghana-toronto/2M7A7764.jpg',
    ],
  },
  {
    id: 3,
    title: 'R & R BABY CHRISTENING',
    subtitle: 'CEREMONY & MILESTONE',
    category: 'portrait',
    date: '02/2026',
    year: '2026',
    client: 'R & R Family',
    services: 'Ceremony & Milestone Celebration',
    description: 'A tender family christening ceremony and milestone celebration capturing heartfelt family blessings, quiet reverence, and joyous candid moments.',
    image: '/images/r&r/_MG_9478.jpg',
    heroImage: '/images/r&r/_MG_9478.jpg',
    credits: [
      { role: 'Photographer', name: 'Dave' },
      { role: 'Event', name: 'R & R Christening Ceremony' },
      { role: 'Coverage', name: 'Ceremony & Family Milestone' },
      { role: 'Color Grading', name: 'Dave' },
    ],
    gallery: [
      '/images/r&r/_MG_9485.jpg',
      '/images/r&r/_MG_9498.jpg',
      '/images/r&r/_MG_9500.jpg',
      '/images/r&r/_MG_9507.jpg',
      '/images/r&r/_MG_9508.jpg',
      '/images/r&r/_MG_9517.jpg',
      '/images/r&r/_MG_9566.jpg',
      '/images/r&r/_MG_9587.jpg',
      '/images/r&r/_MG_9589.jpg',
      '/images/r&r/_MG_9634.jpg',
      '/images/r&r/_MG_9644.jpg',
      '/images/r&r/_MG_9727.jpg',
      '/images/r&r/_MG_9741.jpg',
      '/images/r&r/_MG_9747.jpg',
    ],
  },
  {
    id: 4,
    title: "PATRICK'S DAY",
    subtitle: 'WEDDING & EDITORIAL',
    category: 'portrait',
    date: '02/2026',
    year: '2026',
    client: "Patrick's Wedding",
    services: 'Editorial Wedding & Reception',
    description: 'A timeless editorial wedding story celebrating devotion, romantic warmth, refined ceremony elegance, and heartfelt reception moments.',
    image: '/images/patricks-day/_MG_9249.jpg',
    heroImage: '/images/patricks-day/_MG_9249.jpg',
    credits: [
      { role: 'Photographer', name: 'Dave' },
      { role: 'Event', name: "Patrick's Day Wedding" },
      { role: 'Coverage', name: 'Editorial Wedding & Reception' },
      { role: 'Color Grading', name: 'Dave' },
    ],
    gallery: [
      '/images/patricks-day/_MG_9255.jpg',
      '/images/patricks-day/_MG_9259.jpg',
      '/images/patricks-day/_MG_9267.jpg',
      '/images/patricks-day/_MG_9287.jpg',
      '/images/patricks-day/_MG_9289.jpg',
      '/images/patricks-day/_MG_9292.jpg',
      '/images/patricks-day/_MG_9314.jpg',
      '/images/patricks-day/_MG_9322.jpg',
      '/images/patricks-day/_MG_9339.jpg',
      '/images/patricks-day/_MG_9344.jpg',
      '/images/patricks-day/_MG_9348.jpg',
      '/images/patricks-day/_MG_9354.jpg',
      '/images/patricks-day/_MG_9371.jpg',
      '/images/patricks-day/_MG_9410.jpg',
      '/images/patricks-day/_MG_9413.jpg',
    ],
  },
];

const WEBDEV_WORKS = [
  {
    id: 101,
    title: 'GHONTHEMAP',
    subtitle: 'PRODUCT DESIGN & NEXT.JS DEVELOPMENT',
    client: 'Independent Project',
    services: 'Product Design, Next.js Development & Visual Storytelling',
    year: '2026',
    description: 'An interactive digital experience for exploring Ghana through its places, people, history and culture.',
    overview:
      'GHONTHEMAP started with a simple idea: create a more engaging way to discover Ghana online. Instead of building another tourism directory, the project uses an interactive map as the entry point into stories, places and cultural context. It brings together product design, web development and visual storytelling to make exploring Ghana feel more personal, visual and immersive.',
    role: 'Creator, designer and developer — responsible for the concept, experience design, implementation and visual direction.',
    stack: ['Next.js', 'JavaScript', 'Interactive SVG', 'Web Animation', 'Responsive Design', 'Photo + Video'],
    highlights: [
      'Interactive map-based exploration of Ghana',
      'Combines cultural storytelling, design and development in one experience',
      'Built to grow beyond the website through original photography, video and documentary content',
    ],
    heroImage: '/images/ghonthemap/ghonthemap.png',
    gallery: ['/images/ghonthemap/ghonthemap.png', '/images/ghonthemap/ghonthemap2.png'],
    image: '/images/ghonthemap/ghonthemap.png',
    aspectRatio: '3 / 4.5',
  },
  {
    id: 102,
    title: 'SYNTH WAVE AUDIO',
    subtitle: 'CANVAS & CREATIVE CODING',
    client: 'SynthWave Sound',
    services: 'Audio Web API & Interactive Visuals',
    year: '2025',
    description: 'Web Audio API synthesizer paired with responsive HTML5 canvas audio reactive visualizer.',
    overview:
      'A browser-native synthesizer built for SynthWave Sound as a promotional instrument. Every oscillator, filter, and envelope is generated with the Web Audio API, while a canvas visualizer reacts to the live audio signal — no samples, no plugins, everything computed in the browser.',
    role: 'Design and development, from sound engine to interface.',
    stack: ['JavaScript', 'Web Audio API', 'HTML5 Canvas', 'CSS'],
    highlights: [
      'Polyphonic synth engine with zero external audio dependencies',
      'Audio-reactive visualizer driven by real-time FFT analysis',
      'Playable on touch devices with sub-10ms input latency',
    ],
    heroImage: '/exp-photo-1.png',
    gallery: ['/exp-photo-1.png', '/exp-photo-3.png'],
    image: '/exp-photo-1.png',
    aspectRatio: '3 / 4.8',
  },
  {
    id: 103,
    title: 'TRUELENS',
    subtitle: 'AI AUDIT PLATFORM & NEXT.JS',
    client: 'TechNation AIEO Visibility Challenge',
    services: 'Product Design, AI Experience Design & Frontend Development',
    year: '2026',
    description: 'An AI audit platform built to uncover regional blind spots in how Canadian opportunities are surfaced and represented by AI.',
    overview:
      'TrueLens explores a growing problem: AI can only recommend what it can reliably find and understand. The platform was designed to test how well opportunities from different regions appear in AI-powered discovery, then expose where visibility breaks down. A Nova Scotia pilot paired the audit experience with a verified program registry, creating a clearer reference point for understanding what AI systems may be overlooking.',
    role: 'Co-created as a competition prototype — from research and product thinking through experience design and implementation.',
    stack: ['Next.js'],
    highlights: [
      '1st Place, TechNation AIEO Visibility Challenge',
      'Built a verified Nova Scotia opportunity registry using 211.ca data',
      'Designed to surface regional gaps between real-world opportunities and what AI systems can discover',
    ],
    heroImage: '/images/truelens/truelens.png',
    gallery: ['/images/truelens/truelens.png', '/images/truelens/truelens2.png'],
    image: '/images/truelens/truelens.png',
    aspectRatio: '16 / 10',
  },
  {
    id: 104,
    title: 'METALLIC PORTFOLIO',
    subtitle: 'PERFORMANCE & MOTION DESIGN',
    client: 'Dave Portfolio',
    services: 'Full Stack Frontend & Photography',
    year: '2026',
    description: 'High-performance ultra-dark creative portfolio featuring metallic typography, crossfading photography, and smooth custom cursors.',
    overview:
      'This site. A single-page portfolio that treats performance as a design feature — page transitions, crossfading imagery, and a custom cursor are all built by hand instead of reaching for animation libraries, keeping the bundle lean and the interactions deliberate.',
    role: 'Everything — design, build, photography, and copy.',
    stack: ['React 19', 'Vite', 'Hand-rolled CSS', 'No animation libraries'],
    highlights: [
      'Custom page-transition and loader system in under 2kb of code',
      'Fully responsive editorial layout without a CSS framework',
      'Photography and dev work unified in one navigation model',
    ],
    heroImage: '/exp-photo-3.png',
    gallery: ['/exp-photo-3.png', '/hero-portrait.png'],
    image: '/exp-photo-3.png',
    aspectRatio: '3 / 4.2',
  },
  {
    id: 105,
    title: 'KINETIC SHADERS',
    subtitle: 'THREE.JS & GLSL CANVAS',
    client: 'Kinetic Motion',
    services: 'WebGL Creative Coding',
    year: '2026',
    description: 'Interactive GLSL fragment shader experiments exploring liquid metallic physics and custom raymarching.',
    overview:
      'An ongoing series of fragment shader studies for Kinetic Motion, exploring how far raymarched materials can be pushed in a browser. Each piece simulates liquid-metal surfaces responding to pointer input, packaged as embeddable canvases for campaign sites.',
    role: 'Creative coding and shader authoring.',
    stack: ['GLSL', 'Three.js', 'Raymarching / SDFs', 'WebGL 2'],
    highlights: [
      'Signed-distance-field materials with physically-inspired lighting',
      'Pointer-reactive fluid dynamics computed entirely on the GPU',
      'Each study ships as a self-contained embed under 100kb',
    ],
    heroImage: '/about-thumb.png',
    gallery: ['/about-thumb.png', '/exp-photo-4.png'],
    image: '/about-thumb.png',
    aspectRatio: '3 / 4',
  },
  {
    id: 106,
    title: 'POLICYCOMPASS',
    subtitle: 'AI EXPERIENCE DESIGN & FRONTEND',
    client: 'G7 GovAI Grand Challenge',
    services: 'Product Design, Frontend Development & AI Experience Design',
    year: '2026',
    description: 'An AI-powered platform designed to make government policies and regulations easier to understand and navigate.',
    overview:
      'PolicyCompass was built around a simple problem: government information is often difficult to interpret when people need clear answers quickly. The platform allows users to describe their situation in plain language and helps them navigate relevant policies and regulations without having to understand how government information is structured. The experience focuses on making complex information feel clearer, more accessible and easier to act on.',
    role: 'Creator and designer — responsible for the product concept, user experience, interface design and frontend implementation.',
    stack: ['Next.js'],
    highlights: [
      'Plain-language navigation of complex government policies',
      'AI-driven experience built around real-life situations rather than traditional policy search',
      'Designed to reduce the communication barrier between government information and the people trying to understand it',
    ],
    heroImage: '/images/policycompass/policycompass.png',
    gallery: ['/images/policycompass/policycompass.png', '/images/policycompass/policycompass2.png'],
    image: '/images/policycompass/policycompass.png',
    aspectRatio: '16 / 9',
  },
  {
    id: 107,
    title: 'BAWYP',
    subtitle: 'WEB DESIGN & CONTENT STRATEGY',
    client: 'BAWYP',
    services: 'Web Design, Frontend Development & Content Strategy',
    year: '2026',
    description: 'A digital platform for a non-profit supporting women and young entrepreneurs across Africa through practical, hands-on business development.',
    overview:
      'BAWYP is a private non-profit institution focused on helping micro and small businesses build the knowledge, confidence and support systems they need to grow. The website was designed to communicate that mission clearly while making BAWYP’s approach to business support easier to understand. Rather than focusing on training alone, the organization brings together practical learning, peer-to-peer interaction, on-site coaching, health and wellness initiatives and business incubation. The experience places particular emphasis on women and young entrepreneurs who are often underserved by traditional business support programs.',
    role: 'Web designer and developer — responsible for design, frontend implementation and content strategy.',
    stack: ['Next.js'],
    highlights: [
      'Communicates BAWYP’s 360-degree approach to supporting micro and small businesses',
      'Built around the needs of underserved women and young entrepreneurs across Africa',
      'Brings education, coaching, wellness and business incubation into one clear digital presence',
    ],
    heroImage: '/images/bawyp/bawyp.png',
    gallery: ['/images/bawyp/bawyp.png', '/images/bawyp/bawyp2.png'],
    image: '/images/bawyp/bawyp.png',
    aspectRatio: '3 / 5',
  },
];

function ArrowLeftSvg({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
      <line x1="19" y1="12" x2="5" y2="12"></line>
      <polyline points="12 19 5 12 12 5"></polyline>
    </svg>
  );
}

function ArrowRightSvg({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
      <line x1="5" y1="12" x2="19" y2="12"></line>
      <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
  );
}

function ArrowUpRightSvg({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block', verticalAlign: 'middle', marginLeft: '3px' }}>
      <line x1="7" y1="17" x2="17" y2="7"></line>
      <polyline points="7 7 17 7 17 17"></polyline>
    </svg>
  );
}

function PageTransitionLoader({ stage, progress }) {
  if (stage === 'idle') return null;

  return (
    <div className={`page-transition-curtain stage-${stage}`}>
      <div className="loader-center-content">
        <div className="loader-progress-track">
          <div className="loader-progress-fill" style={{ width: `${progress}%` }} />
        </div>
        <span className="loader-percentage-text">{Math.floor(progress)}</span>
      </div>
      <span className="loader-bottom-tag">DAVE · CREATIVE PORTFOLIO</span>
    </div>
  );
}

function SiteFooter({ navigateToTab }) {
  return (
    <footer className="site-footer">
      <div className="site-footer-container">
        <div className="footer-col">
          <h3 className="footer-brand-title">Dave</h3>
          <p className="footer-brand-sub">Independent Frontend Developer & Photographer</p>
        </div>

        <div className="footer-col">
          <span className="footer-col-label">NAVIGATION</span>
          <div className="footer-links-list">
            <button className="footer-link-item" onClick={() => navigateToTab('index')}>Home</button>
            <button className="footer-link-item" onClick={() => navigateToTab('photography')}>Photography</button>
            <button className="footer-link-item" onClick={() => navigateToTab('webdev')}>Web Development</button>
            <button className="footer-link-item" onClick={() => navigateToTab('about')}>About</button>
            <button className="footer-link-item" onClick={() => navigateToTab('pricing')}>Pricing</button>
            <button className="footer-link-item" onClick={() => navigateToTab('contact')}>Contact</button>
          </div>
        </div>

        <div className="footer-col">
          <span className="footer-col-label">CONTACT</span>
          <div className="footer-links-list">
            <a href="mailto:davead461@gmail.com" className="footer-link-item">davead461@gmail.com</a>
            <a href="https://www.linkedin.com/in/davvead/" target="_blank" rel="noreferrer" className="footer-link-item">LinkedIn</a>
            <a href="https://github.com/davvvead" target="_blank" rel="noreferrer" className="footer-link-item">GitHub</a>
            <a href="https://www.youtube.com/@davvead" target="_blank" rel="noreferrer" className="footer-link-item">YouTube</a>
          </div>
        </div>

        <div className="footer-col">
          <p className="footer-info-text">© 2026 · Canada</p>
          <p className="footer-info-text">Designed & built in-house</p>
        </div>
      </div>
    </footer>
  );
}

const GLITCH_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';

function ScrambledText({ text, triggerScramble }) {
  const [displayText, setDisplayText] = useState(text);

  useEffect(() => {
    let frame = 0;
    const totalFrames = 36; // Duration ~1.1s

    const interval = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;

      const scrambled = text
        .split('')
        .map((char, index) => {
          if (char === '\n' || char === ' ') return char;
          // Reveal character when progress reaches its index proportion
          const revealThreshold = index / text.length;
          if (progress >= revealThreshold + 0.15) {
            return char;
          }
          return GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)];
        })
        .join('');

      setDisplayText(scrambled);

      if (frame >= totalFrames) {
        setDisplayText(text);
        clearInterval(interval);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [text, triggerScramble]);

  return (
    <>
      {displayText.split('\n').map((line, lIdx, arr) => (
        <React.Fragment key={lIdx}>
          {line}
          {lIdx < arr.length - 1 && <br />}
        </React.Fragment>
      ))}
    </>
  );
}

function CustomCursor({ isLightTheme }) {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isOverWhiteCard, setIsOverWhiteCard] = useState(false);
  const [isOverDarkFooter, setIsOverDarkFooter] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });

      const target = e.target;
      const elem = document.elementFromPoint(e.clientX, e.clientY);
      const overDarkFooter = !!(target && target.closest('.photo-work-footer')) || !!(elem && elem.closest('.photo-work-footer'));
      setIsOverDarkFooter(overDarkFooter);
      const overWhite = !overDarkFooter && ((target && target.closest('.services-inset-white-card, .photo-dedicated-footer, .photography-page-view, .photo-editorial-hero-header-stage, .photo-editorial-page-top-nav, .photo-editorial-marquee-section, .photo-editorial-gallery-section, .photo-editorial-photo-page')) || (elem && elem.closest('.services-inset-white-card, .photo-dedicated-footer, .photography-page-view, .photo-editorial-hero-header-stage, .photo-editorial-page-top-nav, .photo-editorial-marquee-section, .photo-editorial-gallery-section, .photo-editorial-photo-page')));
      setIsOverWhiteCard(!!overWhite);

      const isInteractive = target && (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.closest('button, a, input, textarea, .nav-pill-btn, .nav-brand, .service-grid-card, .info-link, .mobile-burger-btn, .webdev-strip-card, .filter-toggle-btn, .btn-back-link, .btn-next-proj, .btn-pricing-cta, .photo-pricing-cta, .home-work-card, .btn-see-all-works, .carousel-arrow-btn, .service-intro-card, .service-inset-card, .footer-link-item, .nav-dropdown-item, .mobile-drawer-sub-btn, .photo-editorial-gallery-card, .photo-editorial-marquee-card, .photo-editorial-gallery-see-all-btn, .photo-editorial-nav-pill-btn, .photo-editorial-cta-hire-pill, .photo-editorial-page-top-brand, .photo-masthead-nav-link, .photo-masthead-social-link, .photo-featured-card, .photo-masthead-toggle, .photo-masthead-curtain-link')
      );
      setIsHovered(!!isInteractive);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const shouldBeDarkCursor = (isLightTheme || isOverWhiteCard) && !isOverDarkFooter;

  return (
    <div 
      className={`custom-cursor-dot ${shouldBeDarkCursor ? 'dark-theme-dot' : ''} ${isHovered ? 'hovered' : ''}`} 
      style={{ left: `${pos.x}px`, top: `${pos.y}px` }} 
    />
  );
}

function SparkleSvg({ size }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5Z" fill="currentColor" />
    </svg>
  );
}

function AboutImageSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDESHOW_IMAGES.length);
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="about-thumb-wrapper">
      {SLIDESHOW_IMAGES.map((src, index) => (
        <img
          key={src}
          src={src}
          alt={`Dave Photography Work ${index + 1}`}
          className={`about-thumb-img-slide ${index === currentSlide ? 'active' : ''}`}
        />
      ))}
    </div>
  );
}

function Col2Icon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="currentColor">
      <rect x="2.5" y="2" width="6.5" height="16" rx="2.2" />
      <rect x="11" y="2" width="6.5" height="16" rx="2.2" />
    </svg>
  );
}

function Col3Icon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="currentColor">
      <rect x="1.5" y="2" width="4.8" height="16" rx="1.8" />
      <rect x="7.6" y="2" width="4.8" height="16" rx="1.8" />
      <rect x="13.7" y="2" width="4.8" height="16" rx="1.8" />
    </svg>
  );
}

function Col4Icon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="currentColor">
      <rect x="2" y="2" width="7" height="7" rx="2" />
      <rect x="11" y="2" width="7" height="7" rx="2" />
      <rect x="2" y="11" width="7" height="7" rx="2" />
      <rect x="11" y="11" width="7" height="7" rx="2" />
    </svg>
  );
}

function PhotographyFooter({ navigateToTab }) {
  return (
    <footer className="photo-dedicated-footer">
      <div className="photo-footer-container">
        {/* Massive Brand Heading */}
        <div className="photo-footer-giant-brand">DAVE</div>

        {/* Info Grid */}
        <div className="photo-footer-info-grid font-mono">
          <div className="photo-footer-col">
            <span className="photo-footer-col-label">GENERAL MENU</span>
            <div className="photo-footer-nav-links">
              <button onClick={() => navigateToTab('index')}>HOME</button>
              <button onClick={() => navigateToTab('photography')}>WORKS</button>
              <button onClick={() => navigateToTab('about')}>ABOUT</button>
              <button onClick={() => navigateToTab('pricing')}>PRICING</button>
              <button onClick={() => navigateToTab('contact')}>CONTACT</button>
            </div>
          </div>

          <div className="photo-footer-col">
            <span className="photo-footer-col-label">MAIN OFFICE</span>
            <p className="photo-footer-text">
              26 RUE SAINT-GEORGES, 2ND FLOOR<br />
              PARIS, FRANCE 75009<br />
              MONDAY – FRIDAY, 10:00 / 19:00
            </p>
          </div>

          <div className="photo-footer-col">
            <span className="photo-footer-col-label">CONTACT</span>
            <p className="photo-footer-text">
              <a href="mailto:DAVEAD461@GMAIL.COM">DAVEAD461@GMAIL.COM</a><br />
              <a href="tel:+33673197860">+33 6 73 19 78 60</a>
            </p>
          </div>
        </div>

        {/* 5 Thumbnail Image Cards Row */}
        <div className="photo-footer-cards-row">
          <div className="photo-footer-card card-1">
            <img src="/about-thumb.png" alt="Editorial Portrait" />
            <div className="photo-footer-card-pill font-mono">@DAVE</div>
          </div>
          <div className="photo-footer-card card-2">
            <img src="/about-thumb-3.png" alt="Product Lighting" />
            <div className="photo-footer-card-pill font-mono">@DAVE</div>
          </div>
          <div className="photo-footer-card card-3 card-hero">
            <img src="/hero-portrait.png" alt="Main Portrait" />
            <div className="photo-footer-card-pill font-mono">@DAVE</div>
          </div>
          <div className="photo-footer-card card-4">
            <img src="/exp-photo-1.png" alt="Product Detail" />
            <div className="photo-footer-card-pill font-mono">@DAVE</div>
          </div>
          <div className="photo-footer-card card-5">
            <img src="/exp-photo-2.png" alt="Eyewear Fashion" />
            <div className="photo-footer-card-pill font-mono">@DAVE</div>
          </div>
        </div>

        {/* Bottom Legal & Socials */}
        <div className="photo-footer-bottom-bar font-mono">
          <span>DAVE® 2026 ALL RIGHTS RESERVED.</span>
          <button className="photo-footer-legal-btn">PRIVACY POLICY</button>
          <div className="photo-footer-socials">
            <a href="https://www.youtube.com/@davvead" target="_blank" rel="noreferrer">YOUTUBE</a>
            <a href="https://www.linkedin.com/in/davvead/" target="_blank" rel="noreferrer">LINKEDIN</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function AerraFloatingHeader({ navigateToTab, setMobileNavOpen }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="photo-float-floating-header-container">
      {!menuOpen ? (
        <div className="photo-float-floating-header-pill">
          <button 
            className="photo-float-pill-brand font-mono" 
            onClick={() => navigateToTab('index')}
            title="Go to Home"
          >
            ÆRRA<sup>®</sup>
          </button>
          <div className="photo-float-pill-separator" />
          <button 
            className="photo-float-pill-burger-btn" 
            onClick={() => setMenuOpen(true)}
            title="Open Navigation Menu"
          >
            <span className="photo-float-burger-bar" />
            <span className="photo-float-burger-bar" />
          </button>
        </div>
      ) : (
        <div className="photo-float-nav-expanded-card">
          <div className="photo-float-nav-header-row">
            <button 
              className="photo-float-nav-brand-title font-mono" 
              onClick={() => {
                navigateToTab('index');
                setMenuOpen(false);
              }}
            >
              ÆRRA<sup>®</sup>
            </button>
            <button 
              className="photo-float-nav-close-btn" 
              onClick={() => setMenuOpen(false)}
              title="Close Menu"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          <div className="photo-float-nav-menu-list">
            <button 
              className="photo-float-nav-menu-card font-mono" 
              onClick={() => {
                navigateToTab('index');
                setMenuOpen(false);
              }}
            >
              HOME
            </button>
            <button 
              className="photo-float-nav-menu-card font-mono" 
              onClick={() => {
                navigateToTab('photography');
                setMenuOpen(false);
              }}
            >
              PHOTOGRAPHY
            </button>
            <button 
              className="photo-float-nav-menu-card font-mono" 
              onClick={() => {
                navigateToTab('webdev');
                setMenuOpen(false);
              }}
            >
              WEB DEV
            </button>
            <button 
              className="photo-float-nav-menu-card font-mono" 
              onClick={() => {
                navigateToTab('about');
                setMenuOpen(false);
              }}
            >
              ABOUT
            </button>
            <button 
              className="photo-float-nav-menu-card font-mono" 
              onClick={() => {
                navigateToTab('pricing');
                setMenuOpen(false);
              }}
            >
              PRICING
            </button>
            <button 
              className="photo-float-nav-menu-card font-mono" 
              onClick={() => {
                navigateToTab('contact');
                setMenuOpen(false);
              }}
            >
              CONTACT
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function AerraFloatingCreatorPill({ navigateToTab }) {
  return (
    <div className="photo-float-floating-creator-pill font-mono">
      <button 
        className="creator-pill-info-btn"
        onClick={() => navigateToTab('about')}
        title="View Creator About"
      >
        <img 
          src="/photos/avatar_profile.jpg" 
          alt="Amora Soris" 
          className="creator-pill-avatar"
        />
        <span className="creator-pill-name">AMORA SORIS</span>
      </button>
      
      <div className="creator-pill-separator" />
      
      <div className="creator-pill-icons">
        <button 
          className="creator-icon-btn" 
          onClick={() => navigateToTab('webdev')}
          title="Digital Works"
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 17L17 7M17 7H7M17 7V17" />
          </svg>
        </button>
        <a 
          href="https://twitter.com" 
          target="_blank" 
          rel="noreferrer" 
          className="creator-icon-btn"
          title="Twitter / X"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        </a>
        <a 
          href="https://instagram.com" 
          target="_blank" 
          rel="noreferrer" 
          className="creator-icon-btn"
          title="Instagram"
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
          </svg>
        </a>
      </div>
    </div>
  );
}

function AerraFloatingFilterPill({ photoCategory, setPhotoCategory, photoFilterOpen, setPhotoFilterOpen }) {
  const CATEGORIES = [
    { id: 'all', label: 'SELECTED WORK' },
    { id: 'editorial', label: 'EDITORIAL' },
    { id: 'commercial', label: 'COMMERCIAL' },
    { id: 'portrait', label: 'PORTRAIT' },
    { id: 'spatial', label: 'SPATIAL' },
    { id: 'lifestyle', label: 'LIFESTYLE' },
    { id: 'objects', label: 'OBJECTS' },
  ];

  return (
    <div className="photo-float-floating-filter-wrapper font-mono">
      {photoFilterOpen && (
        <div className="photo-float-filter-dropdown">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              className={`photo-float-filter-menu-btn ${photoCategory === cat.id ? 'active' : ''}`}
              onClick={() => {
                setPhotoCategory(cat.id);
                setPhotoFilterOpen(false);
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>
      )}
      
      <button 
        className={`photo-float-floating-filter-pill ${photoFilterOpen ? 'open' : ''}`}
        onClick={() => setPhotoFilterOpen(!photoFilterOpen)}
        title="Filter Photography Works"
      >
        <span>
          {photoCategory === 'all' 
            ? 'SELECTED WORK' 
            : CATEGORIES.find(c => c.id === photoCategory)?.label || photoCategory.toUpperCase()}
        </span>
        <svg 
          className={`filter-chevron ${photoFilterOpen ? 'open' : ''}`} 
          width="10" 
          height="10" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M18 15l-6-6-6 6"/>
        </svg>
      </button>
    </div>
  );
}

function PhotographyTopHeader({ activeTab, navigateToTab, setMobileNavOpen }) {
  return (
    <header className="photography-top-header">
      <div className="photography-nav-bar">
        <button className="photo-nav-brand" onClick={() => navigateToTab('index')}>
          DAVE
        </button>

        <div className="photo-nav-links-cluster">
          <button 
            className={`photo-nav-link ${activeTab === 'index' ? 'active' : ''}`}
            onClick={() => navigateToTab('index')}
          >
            HOME
          </button>
          <button 
            className={`photo-nav-link ${activeTab === 'about' ? 'active' : ''}`}
            onClick={() => navigateToTab('about')}
          >
            ABOUT
          </button>
          <button 
            className={`photo-nav-link ${activeTab === 'photography' ? 'active' : ''}`}
            onClick={() => navigateToTab('photography')}
          >
            PHOTOGRAPHY
          </button>
          <button 
            className={`photo-nav-link ${activeTab === 'webdev' ? 'active' : ''}`}
            onClick={() => navigateToTab('webdev')}
          >
            WEB DEV
          </button>
          <button 
            className={`photo-nav-link ${activeTab === 'pricing' ? 'active' : ''}`}
            onClick={() => navigateToTab('pricing')}
          >
            PRICING
          </button>
          <button 
            className={`photo-nav-link ${activeTab === 'contact' ? 'active' : ''}`}
            onClick={() => navigateToTab('contact')}
          >
            CONTACT
          </button>
        </div>

        <button className="mobile-burger-btn photo-mobile-burger" onClick={() => setMobileNavOpen(true)}>
          <span>MENU</span>
          <div className="burger-icon-lines">
            <div className="burger-line" style={{ backgroundColor: '#ffffff' }} />
            <div className="burger-line" style={{ backgroundColor: '#ffffff' }} />
          </div>
        </button>
      </div>
    </header>
  );
}

function OtherWorksInteractive({ selectedProject, allWorks, onSelectProject }) {
  const [hoveredSide, setHoveredSide] = useState(null);

  const currentIndex = allWorks.findIndex((p) => p.id === selectedProject.id);
  const prevIndex = (currentIndex - 1 + allWorks.length) % allWorks.length;
  const nextIndex = (currentIndex + 1) % allWorks.length;

  const prevProj = allWorks[prevIndex] || allWorks[0];
  const nextProj = allWorks[nextIndex] || allWorks[0];

  return (
    <section className="photo-detail-other-works-section">
      <span className="other-works-tag font-mono">[OTHER WORKS]</span>

      {/* Large Center Plus Crosshair Icon */}
      <div className="other-works-plus-wrapper">
        <div className={`plus-crosshair ${hoveredSide ? `hover-${hoveredSide}` : ''}`}>
          <div className="plus-line horizontal" />
          <div className="plus-line vertical" />
        </div>
      </div>

      {/* Interactive Left Hover Target Area */}
      <div 
        className="other-works-hover-zone zone-left"
        onMouseEnter={() => setHoveredSide('left')}
        onMouseLeave={() => setHoveredSide(null)}
        onClick={() => onSelectProject(prevProj)}
      >
        <div className={`other-works-preview-card ${hoveredSide === 'left' ? 'visible' : ''}`}>
          <img src={prevProj.heroImage || prevProj.image} alt={prevProj.title} />
          <div className="preview-card-pill font-mono">
            <span className="preview-title">{prevProj.title}</span>
            <div className="preview-meta-right">
              <span className="preview-badge">@DAVE</span>
              <span className="preview-year-tag">{prevProj.year || '/ 2026'}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Right Hover Target Area */}
      <div 
        className="other-works-hover-zone zone-right"
        onMouseEnter={() => setHoveredSide('right')}
        onMouseLeave={() => setHoveredSide(null)}
        onClick={() => onSelectProject(nextProj)}
      >
        <div className={`other-works-preview-card ${hoveredSide === 'right' ? 'visible' : ''}`}>
          <img src={nextProj.heroImage || nextProj.image} alt={nextProj.title} />
          <div className="preview-card-pill font-mono">
            <span className="preview-title">{nextProj.title}</span>
            <div className="preview-meta-right">
              <span className="preview-badge">@DAVE</span>
              <span className="preview-year-tag">{nextProj.year || '/ 2026'}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const MAIN_NAV_LINKS = [
  { id: 'index', label: 'HOME' },
  { id: 'about', label: 'ABOUT' },
  { id: 'photography', label: 'PHOTOGRAPHY' },
  { id: 'webdev', label: 'WEB DEV' },
  { id: 'pricing', label: 'PRICING' },
  { id: 'contact', label: 'CONTACT' },
];

function SashaNavPills({ activeTab, navigateToTab }) {
  return (
    <nav className="photo-editorial-top-nav-cluster">
      {MAIN_NAV_LINKS.map((link) => (
        <button
          key={link.id}
          className={`photo-editorial-nav-pill-btn ${activeTab === link.id ? 'active' : ''}`}
          onClick={() => navigateToTab(link.id)}
        >
          {link.label}
        </button>
      ))}
    </nav>
  );
}

function PhotographyPageHero({ activeTab, navigateToTab, onBack, compact = false }) {
  const [timeStr, setTimeStr] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeStr(
        now
          .toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: '2-digit',
            second: '2-digit',
            hour12: true,
          })
          .toLowerCase()
      );
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const navLinks = MAIN_NAV_LINKS;

  const socials = [
    { label: 'GH', href: 'https://github.com/davvvead' },
    { label: 'LI', href: 'https://www.linkedin.com/in/davvead/' },
    { label: 'IG', href: 'https://instagram.com' },
    { label: 'YT', href: 'https://www.youtube.com/@davvead' },
  ];

  const goTo = (id) => {
    setMenuOpen(false);
    if (id === 'photography' && onBack) {
      onBack();
    } else {
      navigateToTab(id);
    }
  };

  return (
    <header className={`photo-masthead-hero ${menuOpen ? 'is-open' : ''} ${compact ? 'is-compact' : ''}`}>
      <div className="photo-masthead-top">
        <button 
          type="button" 
          className="photo-masthead-name-btn"
          onClick={() => {
            if (onBack) onBack();
            else navigateToTab('photography');
          }}
          title="Back to all projects"
        >
          DAVE
        </button>

        <div className="photo-masthead-right">
          <div className="photo-masthead-side-copy">
            <span className="photo-masthead-time">{timeStr || '9:57:10 am'}</span>
            <span className="photo-masthead-location">Based in Canada</span>
          </div>
          <img
            src="/hero-portrait.png"
            alt="Dave"
            className="photo-masthead-portrait"
          />
        </div>

        <button
          className="photo-masthead-toggle"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? '×' : '+'}
        </button>
      </div>

      <div className="photo-masthead-curtain">
        <div className="photo-masthead-curtain-inner">
          <div className="photo-masthead-curtain-profile">
            <img
              src="/hero-portrait.png"
              alt="Dave"
              className="photo-masthead-curtain-portrait"
            />
            <div className="photo-masthead-curtain-copy">
              <span className="photo-masthead-time">{timeStr || '9:57:10 am'}</span>
              <span className="photo-masthead-location">Based in Canada</span>
            </div>
          </div>

          <nav className="photo-masthead-curtain-nav">
            {navLinks.map((link) => (
              <button
                key={link.id}
                className={`photo-masthead-curtain-link ${activeTab === link.id ? 'active' : ''}`}
                onClick={() => goTo(link.id)}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="photo-masthead-curtain-socials">
            {socials.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="photo-masthead-social-link"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="photo-masthead-rule" />

      <div className="photo-masthead-bottom">
        <nav className="photo-masthead-nav">
          {navLinks.map((link) => (
            <button
              key={link.id}
              className={`photo-masthead-nav-link ${activeTab === link.id ? 'active' : ''}`}
              onClick={() => navigateToTab(link.id)}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="photo-masthead-socials">
          {socials.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="photo-masthead-social-link"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}

const PHOTO_FEATURED_WORKS = [
  {
    id: 'lacey-at-2',
    title: 'LACEY @ 2',
    category: 'Milestone & Portrait',
    image: '/images/Lacey@2/DD7A2583.jpg',
    heroImage: '/images/Lacey@2/DD7A2583.jpg',
    client: 'Lacey & Family',
    year: '2026',
    description: 'An intimate 2nd birthday milestone portrait and lifestyle story capturing pure toddler wonder, playful curiosity, and soft natural daylight.',
    credits: [
      { role: 'Photographer', name: 'Dave' },
      { role: 'Art Direction', name: 'Dave' },
      { role: 'Lighting', name: 'Natural Daylight & Diffused Fill' },
      { role: 'Color Grading', name: 'Dave' },
    ],
    gallery: [
      '/images/Lacey@2/DD7A2587.jpg',
      '/images/Lacey@2/DD7A2589.jpg',
      '/images/Lacey@2/DD7A2607.jpg',
      '/images/Lacey@2/DD7A2612.jpg',
      '/images/Lacey@2/DD7A2614.jpg',
      '/images/Lacey@2/DD7A2619.jpg',
      '/images/Lacey@2/DD7A2636.jpg',
      '/images/Lacey@2/DD7A2640.jpg',
      '/images/Lacey@2/DD7A2641.jpg',
      '/images/Lacey@2/DD7A2651.jpg',
      '/images/Lacey@2/DD7A2657.jpg',
      '/images/Lacey@2/DD7A2658.jpg',
      '/images/Lacey@2/DD7A2659.jpg',
      '/images/Lacey@2/DD7A2679.jpg',
      '/images/Lacey@2/DD7A2681.jpg',
    ],
  },
  {
    id: 'taste-of-ghana-toronto',
    title: 'TASTE OF GHANA - TORONTO',
    category: 'Cultural & Event Documentary',
    image: '/images/tasteofghana-toronto/2M7A7466.jpg',
    heroImage: '/images/tasteofghana-toronto/2M7A7466.jpg',
    client: 'Taste of Ghana Toronto',
    year: '2026',
    description: 'A vibrant cultural festival and documentary photography series capturing the rich culinary heritage, rhythmic live performances, colorful traditional textiles, and electric community energy of Ghana in Toronto.',
    credits: [
      { role: 'Photographer', name: 'Dave' },
      { role: 'Event', name: 'Taste of Ghana Toronto' },
      { role: 'Coverage', name: 'Cultural Documentary & Festival Stills' },
      { role: 'Color Grading', name: 'Dave' },
    ],
    gallery: [
      '/images/tasteofghana-toronto/2M7A7493.jpg',
      '/images/tasteofghana-toronto/2M7A7506.jpg',
      '/images/tasteofghana-toronto/2M7A7563.jpg',
      '/images/tasteofghana-toronto/2M7A7572.jpg',
      '/images/tasteofghana-toronto/2M7A7582.jpg',
      '/images/tasteofghana-toronto/2M7A7607.jpg',
      '/images/tasteofghana-toronto/2M7A7642.jpg',
      '/images/tasteofghana-toronto/2M7A7648.jpg',
      '/images/tasteofghana-toronto/2M7A7688.jpg',
    ],
  },
  {
    id: 'r-and-r-baby-christening',
    title: 'R & R BABY CHRISTENING',
    category: 'Ceremony & Milestone',
    image: '/images/r&r/_MG_9478.jpg',
    heroImage: '/images/r&r/_MG_9478.jpg',
    client: 'R & R Family',
    year: '2026',
    description: 'A tender family christening ceremony and milestone celebration capturing heartfelt family blessings, quiet reverence, and joyous candid moments.',
    credits: [
      { role: 'Photographer', name: 'Dave' },
      { role: 'Event', name: 'R & R Christening Ceremony' },
      { role: 'Coverage', name: 'Ceremony & Family Milestone' },
      { role: 'Color Grading', name: 'Dave' },
    ],
    gallery: [
      '/images/r&r/_MG_9485.jpg',
      '/images/r&r/_MG_9498.jpg',
      '/images/r&r/_MG_9500.jpg',
      '/images/r&r/_MG_9507.jpg',
      '/images/r&r/_MG_9508.jpg',
      '/images/r&r/_MG_9517.jpg',
      '/images/r&r/_MG_9566.jpg',
      '/images/r&r/_MG_9587.jpg',
      '/images/r&r/_MG_9589.jpg',
      '/images/r&r/_MG_9634.jpg',
      '/images/r&r/_MG_9644.jpg',
    ],
  },
  {
    id: 'patricks-day-wedding',
    title: "PATRICK'S DAY",
    category: 'Wedding & Editorial',
    image: '/images/patricks-day/_MG_9249.jpg',
    heroImage: '/images/patricks-day/_MG_9249.jpg',
    client: "Patrick's Wedding",
    year: '2026',
    description: 'A timeless editorial wedding story celebrating devotion, romantic warmth, refined ceremony elegance, and heartfelt reception moments.',
    credits: [
      { role: 'Photographer', name: 'Dave' },
      { role: 'Event', name: "Patrick's Day Wedding" },
      { role: 'Coverage', name: 'Editorial Wedding & Reception' },
      { role: 'Color Grading', name: 'Dave' },
    ],
    gallery: [
      '/images/patricks-day/_MG_9255.jpg',
      '/images/patricks-day/_MG_9259.jpg',
      '/images/patricks-day/_MG_9267.jpg',
      '/images/patricks-day/_MG_9287.jpg',
      '/images/patricks-day/_MG_9289.jpg',
      '/images/patricks-day/_MG_9292.jpg',
      '/images/patricks-day/_MG_9314.jpg',
      '/images/patricks-day/_MG_9322.jpg',
      '/images/patricks-day/_MG_9339.jpg',
      '/images/patricks-day/_MG_9344.jpg',
      '/images/patricks-day/_MG_9348.jpg',
      '/images/patricks-day/_MG_9354.jpg',
      '/images/patricks-day/_MG_9371.jpg',
      '/images/patricks-day/_MG_9410.jpg',
      '/images/patricks-day/_MG_9413.jpg',
    ],
  },
];

const PHOTO_DETAIL_GALLERY_POOL = [
  '/photos/monstera_light.jpg',
  '/photos/silk_texture.jpg',
  '/photos/abstract_shadows.jpg',
  '/photos/studio_shadow.jpg',
  '/photos/glass_reflections.jpg',
  '/photos/sunset_horizon.jpg',
  '/photos/nordic_coast.jpg',
  '/photos/desert_dune.jpg',
  '/photos/bird_stone.jpg',
  '/photos/ceramic_vessel.jpg',
  '/photos/steel_architecture.jpg',
  '/photos/minimal_building.jpg',
];

function getPhotoProjectGallery(project) {
  if (project.gallery && Array.isArray(project.gallery) && project.gallery.length > 0) {
    return project.gallery;
  }
  const hero = project.image || project.heroImage;
  const pool = PHOTO_DETAIL_GALLERY_POOL.filter((src) => src !== hero);
  const start = Math.max(0, PHOTO_FEATURED_WORKS.findIndex((p) => p.title === project.title));
  return Array.from({ length: 5 }, (_, k) => pool[(start + k) % pool.length]);
}

function PhotographyProjectDetail({ project, navigateToTab, openProjectDetail, onBack }) {
  const gallery = getPhotoProjectGallery(project);
  const moreProjects = PHOTO_FEATURED_WORKS.filter((p) => p.title !== project.title);
  const currentIdx = PHOTO_FEATURED_WORKS.findIndex((p) => p.title === project.title);
  const credits = project.credits || [
    { role: 'Photographer', name: 'Dave' },
    { role: 'Art Direction', name: 'Dave' },
    { role: 'Lighting', name: 'Studio Dave' },
    { role: 'Retouching', name: 'Studio Dave' },
  ];

  // Pressing Esc key closes the project view
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (onBack) onBack();
        else navigateToTab('photography');
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onBack, navigateToTab]);

  const openFeatured = (item) => {
    openProjectDetail({
      ...item,
      id: item.title,
      heroImage: item.image,
      subtitle: item.category,
    });
  };

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      navigateToTab('photography');
    }
  };

  const ArrowLeftSvg = ({ size }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 12H5M12 19l-7-7 7-7" />
    </svg>
  );

  return (
    <main className="photography-page-view photo-project-page">
      {/* Floating Sticky Back Badge */}
      <button 
        type="button" 
        className="photo-proj-sticky-back"
        onClick={handleBack}
        title="Back to all projects (Esc)"
        aria-label="Back to all projects"
      >
        <ArrowLeftSvg size={15} />
        <span>ALL PROJECTS</span>
      </button>

      <PhotographyPageHero
        activeTab="photography"
        navigateToTab={navigateToTab}
        onBack={handleBack}
        compact
      />

      {/* Prominent Top Back Bar with Breadcrumbs */}
      <div className="photo-proj-back-bar">
        <button 
          type="button"
          className="photo-proj-back-btn" 
          onClick={handleBack}
        >
          <ArrowLeftSvg size={14} /> BACK TO PHOTOGRAPHY
        </button>
        <div className="photo-proj-back-meta font-mono">
          <span className="photo-proj-back-num">PROJ #{String(Math.max(currentIdx, 0) + 1).padStart(2, '0')}</span>
          <span className="photo-proj-back-dot">/</span>
          <span className="photo-proj-back-name">{project.title}</span>
        </div>
      </div>

      <section className="photo-proj-header">
        <h1 className="photo-proj-title">{project.title}</h1>
        <div className="photo-proj-meta">
          <div>
            <span className="photo-proj-meta-label">Category</span>
            <span className="photo-proj-meta-val">{project.category}</span>
          </div>
          <div>
            <span className="photo-proj-meta-label">Client</span>
            <span className="photo-proj-meta-val">{project.client || 'Studio Dave'}</span>
          </div>
          <div>
            <span className="photo-proj-meta-label">Year</span>
            <span className="photo-proj-meta-val">{project.year || '2026'}</span>
          </div>
        </div>
      </section>

      <section className="photo-proj-hero-grid">
        <div className="photo-proj-hero-media">
          <img src={project.image || project.heroImage} alt={project.title} />
        </div>
        <aside className="photo-proj-sidebar">
          <p className="photo-proj-sidebar-copy">
            {project.description}
          </p>
          <div className="photo-proj-credits">
            <span className="photo-proj-credits-label">CREDITS</span>
            {credits.map((row) => (
              <div key={row.role} className="photo-proj-credit-row">
                <span className="photo-proj-credit-role">{row.role}</span>
                <span className="photo-proj-credit-name">{row.name}</span>
              </div>
            ))}
          </div>
        </aside>
      </section>

      <section className="photo-proj-info">
        <h2 className="photo-services-title">INFO.</h2>
        <div className="photo-services-rule" />
        <p className="photo-proj-info-copy">
          {project.description} Shot with a minimal, cinematic approach to emphasize tone, texture, and mood.
        </p>
        {gallery[0] && <img src={gallery[0]} alt={`${project.title} still`} className="photo-proj-wide-img" />}
        {gallery[1] && <img src={gallery[1]} alt={`${project.title} landscape`} className="photo-proj-wide-img" />}
      </section>

      <section className="photo-proj-gallery">
        <h2 className="photo-services-title">GALLERY.</h2>
        <div className="photo-services-rule" />
        <div className="photo-proj-masonry">
          {(gallery.length > 2 ? gallery.slice(2) : gallery).map((src, idx) => (
            <div key={`${src}-${idx}`} className={`photo-proj-masonry-item item-${idx}`}>
              <img src={src} alt={`${project.title} gallery ${idx + 1}`} loading="lazy" />
            </div>
          ))}
        </div>
      </section>

      <section className="photo-more-section">
        <h2 className="photo-services-title">MORE PROJECTS.</h2>
        <div className="photo-services-rule" />
        <div className="photo-more-list">
          {moreProjects.map((item, idx) => (
            <button
              key={item.title}
              className="photo-more-row"
              onClick={() => openFeatured(item)}
            >
              <span className="photo-more-num">{String(idx + 1).padStart(2, '0')}</span>
              <span className="photo-more-name">{item.title}</span>
              <span className="photo-more-thumb-wrap">
                <img src={item.image} alt="" className="photo-more-thumb" />
                <span className="photo-viewfinder" aria-hidden="true">
                  <span className="vf vf-tl" />
                  <span className="vf vf-tr" />
                  <span className="vf vf-bl" />
                  <span className="vf vf-br" />
                </span>
              </span>
              <span className="photo-more-year">{item.year}</span>
              <span className="photo-more-cat">{item.category}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Large Bottom Navigation Back Bar */}
      <div className="photo-proj-bottom-nav">
        <button 
          type="button"
          className="photo-proj-back-btn photo-proj-back-btn-large" 
          onClick={handleBack}
        >
          <ArrowLeftSvg size={16} /> BACK TO ALL PROJECTS
        </button>
      </div>

      <PhotographyWorkFooter navigateToTab={navigateToTab} />
    </main>
  );
}

function PhotographyFeaturedWork({ openProjectDetail }) {
  return (
    <section className="photo-featured-section">
      <div className="photo-featured-header">
        <p className="photo-featured-intro">
          I'm Dave, a photographer and videographer who creates beautiful, authentic visuals that bring your story to life.
        </p>
        <span className="photo-featured-meta">Featured work © 2026</span>
      </div>

      <div className="photo-featured-grid">
        {PHOTO_FEATURED_WORKS.map((item) => (
          <button
            key={item.title}
            className="photo-featured-card"
            onClick={() => {
              openProjectDetail({
                ...item,
                id: item.title,
                heroImage: item.image,
                subtitle: item.category,
              });
            }}
          >
            <div className="photo-featured-img-wrap">
              <img src={item.image} alt={item.title} className="photo-featured-img" />
              <span className="photo-viewfinder" aria-hidden="true">
                <span className="vf vf-tl" />
                <span className="vf vf-tr" />
                <span className="vf vf-bl" />
                <span className="vf vf-br" />
              </span>
            </div>
            <div className="photo-featured-caption">
              <span className="photo-featured-title">{item.title}</span>
              <span className="photo-featured-category">{item.category}</span>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}

const PHOTO_SERVICES = [
  {
    title: 'Photography',
    items: ['Portraits', 'Lifestyle & Candid Shots', 'Events & Weddings', 'Product & Commercial'],
  },
  {
    title: 'Videography',
    items: ['Brand Videos', 'Short Films', 'Event Coverage', 'Social Media Clips'],
  },
  {
    title: 'Content Creation',
    items: ['Editorial Content', 'Motion Graphics', 'Storyboarding', 'Branded Visual Packages'],
  },
];

function PhotographyServicesSection() {
  return (
    <section className="photo-services-section">
      <h2 className="photo-services-title">SERVICES.</h2>
      <div className="photo-services-rule" />

      <div className="photo-services-grid">
        <p className="photo-services-intro">
          I help individuals and brands tell their stories through carefully crafted visuals. Whether you're looking for photography, video, or a combination of both.
        </p>

        {PHOTO_SERVICES.map((group) => (
          <div key={group.title} className="photo-services-col">
            <h3 className="photo-services-col-title">{group.title}</h3>
            <ul className="photo-services-list">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

function ClientLogoSpiral() {
  return (
    <svg viewBox="0 0 64 64" className="photo-client-svg" aria-hidden="true">
      <path
        d="M32 10c12.15 0 22 9.85 22 22S44.15 54 32 54 10 44.15 10 32s9.85-22 22-22zm0 8c-7.73 0-14 6.27-14 14s6.27 14 14 14 14-6.27 14-14-6.27-14-14-14zm0 8c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6 2.69-6 6-6z"
        fill="currentColor"
      />
    </svg>
  );
}

function ClientLogoIpsum() {
  return (
    <svg viewBox="0 0 140 40" className="photo-client-svg photo-client-wordmark" aria-hidden="true">
      <text x="0" y="32" fill="currentColor" fontFamily="Arial Black, Helvetica, sans-serif" fontSize="32" fontWeight="800" letterSpacing="-1">IPSUM</text>
    </svg>
  );
}

function ClientLogoBars() {
  return (
    <svg viewBox="0 0 64 64" className="photo-client-svg" aria-hidden="true">
      <path d="M14 48L28 16h10L24 48H14zm18 0L46 16h10L42 48H32z" fill="currentColor" />
    </svg>
  );
}

function ClientLogoLoqo() {
  return (
    <svg viewBox="0 0 130 40" className="photo-client-svg photo-client-wordmark" aria-hidden="true">
      <text x="0" y="32" fill="currentColor" fontFamily="Arial, Helvetica, sans-serif" fontSize="30" fontWeight="700" letterSpacing="2">LOQO</text>
    </svg>
  );
}

function ClientLogoEye() {
  return (
    <svg viewBox="0 0 72 40" className="photo-client-svg" aria-hidden="true">
      <ellipse cx="36" cy="20" rx="28" ry="14" fill="none" stroke="currentColor" strokeWidth="5" />
      <rect x="8" y="17.5" width="56" height="5" fill="currentColor" />
    </svg>
  );
}

function ClientLogoLuju() {
  return (
    <svg viewBox="0 0 120 48" className="photo-client-svg photo-client-wordmark" aria-hidden="true">
      <text x="0" y="30" fill="currentColor" fontFamily="Georgia, serif" fontSize="28" fontStyle="italic" fontWeight="700">Luju</text>
      <text x="72" y="42" fill="currentColor" fontFamily="Arial, Helvetica, sans-serif" fontSize="9" fontWeight="700" letterSpacing="1.5">IPSUM</text>
    </svg>
  );
}

const PHOTO_CLIENT_LOGOS = [
  { id: 'spiral', Mark: ClientLogoSpiral },
  { id: 'ipsum', Mark: ClientLogoIpsum },
  { id: 'bars', Mark: ClientLogoBars },
  { id: 'loqo', Mark: ClientLogoLoqo },
  { id: 'eye', Mark: ClientLogoEye },
  { id: 'luju', Mark: ClientLogoLuju },
];

const HOME_TECH_STACK = [
  'React',
  'TypeScript',
  'Next.js',
  'Vite',
  'Node.js',
  'Web3',
  'Solana',
  'Tailwind CSS',
  'Express',
  'PostgreSQL',
  'MongoDB',
  'Lightroom',
  'Illustrator',
  'Photoshop',
  'Premiere',
];

function HomeTechStackMarquee() {
  const loop = [...HOME_TECH_STACK, ...HOME_TECH_STACK, ...HOME_TECH_STACK];

  return (
    <section className="home-techstack-section">
      <div className="home-techstack-marquee">
        <div className="home-techstack-track">
          {loop.map((tech, idx) => (
            <div key={`${tech}-${idx}`} className="home-techstack-slot">
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PhotographyClientsSection() {
  const loop = [...PHOTO_CLIENT_LOGOS, ...PHOTO_CLIENT_LOGOS, ...PHOTO_CLIENT_LOGOS];

  return (
    <section className="photo-clients-section">
      <h2 className="photo-services-title">CLIENTS.</h2>
      <div className="photo-services-rule" />

      <div className="photo-clients-marquee">
        <div className="photo-clients-track">
          {loop.map((logo, idx) => (
            <div key={`${logo.id}-${idx}`} className="photo-client-slot">
              <logo.Mark />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PhotographyPricingSection({ navigateToTab }) {
  const trackRef = useRef(null);

  const slideBy = (dir) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector('.photo-pricing-card');
    const step = card ? card.offsetWidth + 20 : track.clientWidth;
    track.scrollBy({ left: dir * step, behavior: 'smooth' });
  };

  return (
    <section id="photo-pricing" className="photo-pricing-section">
      <h2 className="photo-services-title">PRICING.</h2>
      <div className="photo-services-rule" />

      <div className="photo-pricing-header-row">
        <p className="photo-pricing-intro">
          Whether it’s a two-hour event or a full wedding day, pricing is built around the time, coverage and final work each job actually requires.
        </p>
        <div className="photo-pricing-slider-controls">
          <button className="photo-pricing-arrow" aria-label="Previous packages" onClick={() => slideBy(-1)}>
            <ArrowLeftSvg size={16} />
          </button>
          <button className="photo-pricing-arrow" aria-label="Next packages" onClick={() => slideBy(1)}>
            <ArrowRightSvg size={16} />
          </button>
        </div>
      </div>

      <div className="photo-pricing-track" ref={trackRef}>
        {PRICING_TIERS.map((tier) => (
          <div key={tier.id} className="photo-pricing-card">
            <div className="photo-pricing-card-top">
              <span className="photo-pricing-badge">{tier.badge}</span>
              <h3 className="photo-pricing-name">{tier.name}</h3>
              <div className="photo-pricing-rate">
                {tier.price} <span>{tier.period}</span>
              </div>
              <div className="photo-pricing-features">
                {tier.features.map((feat) => (
                  <div key={feat} className="photo-pricing-feature">
                    {feat}
                  </div>
                ))}
              </div>
            </div>
            <button className="photo-pricing-cta" onClick={() => navigateToTab('contact')}>
              CHECK AVAILABILITY <ArrowRightSvg size={14} />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

function PhotographyWorkFooter({ navigateToTab }) {
  return (
    <footer className="photo-work-footer">
      <div className="photo-work-footer-inner">
        <div className="photo-work-footer-top">
          <button className="photo-work-footer-title" onClick={() => navigateToTab('contact')}>
            LET'S WORK TOGETHER.
          </button>
          <p className="photo-work-footer-note">
            Feel free to get in touch. I aim to respond within 24 hours.
          </p>
        </div>

        <div className="photo-work-footer-rule" />

        <div className="photo-work-footer-mid">
          <div className="photo-work-footer-contact">
            <a href="mailto:hello@daveportfolio.com">DAVEAD461@GMAIL.COM</a>
            <a href="tel:+16479046138">+1 (647) 904-6138</a>
          </div>
          <div className="photo-work-footer-socials">
            <a href="https://github.com/davvvead" target="_blank" rel="noreferrer">GITHUB</a>
            <a href="https://www.linkedin.com/in/davvead/" target="_blank" rel="noreferrer">LINKEDIN</a>
            <a href="https://www.youtube.com/@davvead" target="_blank" rel="noreferrer">YOUTUBE</a>
          </div>
        </div>

        <div className="photo-work-footer-bottom">
          <span>© 2026 All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}

const SASHA_MARQUEE_IMAGES = [
  { id: 'm0', title: 'LACEY @ 2', subtitle: 'PORTRAIT', image: '/images/Lacey@2/DD7A2583.jpg', aspect: 'tall' },
  { id: 'm1', title: 'TASTE OF GHANA', subtitle: 'DOCUMENTARY', image: '/images/tasteofghana-toronto/2M7A7466.jpg', aspect: 'tall' },
  { id: 'm2', title: 'R & R CHRISTENING', subtitle: 'CEREMONY', image: '/images/r&r/_MG_9478.jpg', aspect: 'tall' },
  { id: 'm3', title: "PATRICK'S DAY", subtitle: 'WEDDING', image: '/images/patricks-day/_MG_9249.jpg', aspect: 'tall' },
  { id: 'm4', title: 'LACEY WONDER', subtitle: 'MILESTONE', image: '/images/Lacey@2/DD7A2619.jpg', aspect: 'square' },
  { id: 'm5', title: 'TORONTO FESTIVAL', subtitle: 'CULTURE', image: '/images/tasteofghana-toronto/2M7A7563.jpg', aspect: 'portrait' },
  { id: 'm6', title: 'FAMILY BLESSINGS', subtitle: 'REVERENCE', image: '/images/r&r/_MG_9566.jpg', aspect: 'square' },
  { id: 'm7', title: 'WEDDING PROMISES', subtitle: 'ROMANCE', image: '/images/patricks-day/_MG_9287.jpg', aspect: 'tall' },
  { id: 'm8', title: 'LACEY SMILE', subtitle: 'PORTRAIT', image: '/images/Lacey@2/DD7A2607.jpg', aspect: 'portrait' },
  { id: 'm9', title: 'COMMUNITY JOY', subtitle: 'DOCUMENTARY', image: '/images/tasteofghana-toronto/2M7A7688.jpg', aspect: 'tall' },
  { id: 'm10', title: 'CHRISTENING CELEBRATION', subtitle: 'CEREMONY', image: '/images/r&r/_MG_9747.jpg', aspect: 'tall' },
  { id: 'm11', title: 'WEDDING TOAST', subtitle: 'RECEPTION', image: '/images/patricks-day/_MG_9410.jpg', aspect: 'portrait' },
];

function SashaAutoScrollGallery({ openProjectDetail }) {
  // Triple array for seamless infinite looping
  const marqueeItems = [...SASHA_MARQUEE_IMAGES, ...SASHA_MARQUEE_IMAGES, ...SASHA_MARQUEE_IMAGES];

  return (
    <section className="photo-editorial-marquee-section">
      <div className="photo-editorial-marquee-track">
        {marqueeItems.map((item, idx) => (
          <div 
            key={`${item.id}-${idx}`}
            className={`photo-editorial-marquee-card ${item.aspect || 'tall'}`}
            onClick={() => {
              const work = PHOTOGRAPHY_WORKS.find(
                (w) =>
                  w.image === item.image ||
                  (w.gallery && w.gallery.includes(item.image)) ||
                  w.title.toLowerCase().includes(item.title.toLowerCase()) ||
                  item.title.toLowerCase().includes(w.title.toLowerCase())
              ) || PHOTOGRAPHY_WORKS[0];
              openProjectDetail(work);
            }}
          >
            <img 
              src={item.image} 
              alt={item.title} 
              className="photo-editorial-marquee-img" 
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

const SASHA_GALLERY_COLUMNS = [
  // Column 1
  [
    { id: 'g1', num: '(1)', title: 'Lacey @ 2', subtitle: 'Milestone & Portrait', category: 'portrait', date: '2026', image: '/images/Lacey@2/DD7A2583.jpg', aspect: 'tall' },
    { id: 'g5', num: '(5)', title: 'Lacey @ 2', subtitle: 'Playful Wonder', category: 'portrait', date: '2026', image: '/images/Lacey@2/DD7A2619.jpg', aspect: 'medium' },
  ],
  // Column 2
  [
    { id: 'g2', num: '(2)', title: 'Taste of Ghana', subtitle: 'Cultural Documentary', category: 'editorial', date: '2026', image: '/images/tasteofghana-toronto/2M7A7466.jpg', aspect: 'tall' },
    { id: 'g6', num: '(6)', title: 'Taste of Ghana', subtitle: 'Live Festival Stills', category: 'editorial', date: '2026', image: '/images/tasteofghana-toronto/2M7A7563.jpg', aspect: 'medium' },
  ],
  // Column 3
  [
    { id: 'g3', num: '(3)', title: 'R & R Christening', subtitle: 'Ceremony & Milestone', category: 'portrait', date: '2026', image: '/images/r&r/_MG_9478.jpg', aspect: 'tall' },
    { id: 'g7', num: '(7)', title: 'R & R Christening', subtitle: 'Family Celebration', category: 'portrait', date: '2026', image: '/images/r&r/_MG_9566.jpg', aspect: 'medium' },
  ],
  // Column 4
  [
    { id: 'g4', num: '(4)', title: "Patrick's Day", subtitle: 'Wedding & Editorial', category: 'portrait', date: '2026', image: '/images/patricks-day/_MG_9249.jpg', aspect: 'tall' },
    { id: 'g8', num: '(8)', title: "Patrick's Day", subtitle: 'Ceremony & Reception', category: 'portrait', date: '2026', image: '/images/patricks-day/_MG_9287.jpg', aspect: 'medium' },
  ],
];

function SashaEditorialGallerySection({ openProjectDetail, navigateToTab }) {
  return (
    <section className="photo-editorial-gallery-section">
      {/* Top Section Header: Gallery | ©2026 | See all */}
      <div className="photo-editorial-gallery-header-row">
        <span className="photo-editorial-gallery-header-title">Gallery</span>
        <span className="photo-editorial-gallery-header-center">©2026</span>
        <button 
          className="photo-editorial-gallery-see-all-btn"
          onClick={() => navigateToTab('photography')}
        >
          See all
        </button>
      </div>

      <div className="photo-editorial-gallery-divider-line" />

      {/* 4-Column Asymmetric Masonry Grid */}
      <div className="photo-editorial-gallery-4col-grid">
        {SASHA_GALLERY_COLUMNS.map((column, colIdx) => (
          <div key={colIdx} className="photo-editorial-gallery-column">
            {column.map((item) => (
              <div 
                key={item.id} 
                className="photo-editorial-gallery-card"
                onClick={() => {
                  const work = PHOTOGRAPHY_WORKS.find(w => w.title.toLowerCase() === item.title.toLowerCase()) || {
                    id: item.id,
                    title: item.title,
                    subtitle: item.subtitle,
                    category: item.category,
                    date: item.date,
                    year: '2026',
                    client: item.title,
                    services: 'Creative Photography & Direction',
                    description: `${item.title} is an editorial study exploring light, tactile texture, and visual narrative.`,
                    image: item.image,
                    heroImage: item.image,
                    gallery: [item.image],
                  };
                  openProjectDetail(work);
                }}
              >
                {/* Card Top Label Row: Title on Left + (1) on Right */}
                <div className="photo-editorial-card-meta-row">
                  <span className="photo-editorial-card-meta-name">{item.title}</span>
                  <span className="photo-editorial-card-meta-num">{item.num}</span>
                </div>

                {/* Card Image Container */}
                <div className={`photo-editorial-card-image-wrap ${item.aspect || 'tall'}`}>
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="photo-editorial-card-img" 
                    loading="lazy" 
                  />
                  <span className="photo-editorial-card-view-btn">View</span>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

function TopHeaderNav({
  activeTab,
  navigateToTab,
  setMobileNavOpen,
  lightTheme = false,
}) {
  return (
    <header className={`top-header ${lightTheme ? 'light-theme' : ''}`}>
      <button className="nav-brand" onClick={() => navigateToTab('index')}>
        DAVE
      </button>

      <div className="nav-pill-group">
        {MAIN_NAV_LINKS.filter((link) => link.id !== 'pricing').map((link) => (
          <button
            key={link.id}
            className={`nav-pill-btn ${activeTab === link.id ? 'active' : ''}`}
            onClick={() => navigateToTab(link.id)}
          >
            {link.label}
          </button>
        ))}
      </div>

      <button className="mobile-burger-btn" onClick={() => setMobileNavOpen(true)}>
        <span>MENU</span>
        <div className="burger-icon-lines">
          <div className="burger-line" />
          <div className="burger-line" />
        </div>
      </button>
    </header>
  );
}

export default function App() {
  const [activeTab, setActiveTab] = useState('index');
  const [experimentsFilter, setExperimentsFilter] = useState('photography'); // 'photography' | 'webdev'
  const [selectedProject, setSelectedProject] = useState(null);
  const [photoGridCols, setPhotoGridCols] = useState(3); // 2 | 3 | 4 columns layout
  const [photoCategory, setPhotoCategory] = useState('all');
  const [photoFilterOpen, setPhotoFilterOpen] = useState(false);
  const [sparkles, setSparkles] = useState([]);
  const [formSent, setFormSent] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [heroHoverTrigger, setHeroHoverTrigger] = useState(0);
  const [pendingPhotoScroll, setPendingPhotoScroll] = useState(null);

  // Smooth Page Transition Loader State (Exact Reference Screenshot)
  const [loaderStage, setLoaderStage] = useState('loading'); // initial load starts with loading
  const [loaderProgress, setLoaderProgress] = useState(0);

  // Initial load animation (Slower & more dramatic)
  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += Math.random() * 3.5 + 1.8;
      if (current >= 100) {
        current = 100;
        setLoaderProgress(100);
        clearInterval(interval);
        setTimeout(() => setLoaderStage('exit'), 350);
        setTimeout(() => setLoaderStage('idle'), 920);
      } else {
        setLoaderProgress(current);
      }
    }, 32);

    return () => clearInterval(interval);
  }, []);

  const triggerPageTransition = (onSwitchCallback) => {
    setLoaderStage('enter');
    setLoaderProgress(0);

    setTimeout(() => {
      setLoaderStage('loading');
      if (onSwitchCallback) onSwitchCallback();
      window.scrollTo({ top: 0, behavior: 'instant' });

      let current = 0;
      const interval = setInterval(() => {
        current += Math.random() * 4.5 + 2.2;
        if (current >= 100) {
          current = 100;
          setLoaderProgress(100);
          clearInterval(interval);
          setTimeout(() => setLoaderStage('exit'), 300);
          setTimeout(() => setLoaderStage('idle'), 880);
        } else {
          setLoaderProgress(current);
        }
      }, 32);
    }, 500);
  };

  useEffect(() => {
    if (activeTab === 'experiments' || activeTab === 'pricing') {
      setActiveTab('photography');
    }
  }, [activeTab]);

  const navigateToTab = (tabName) => {
    let target = tabName;
    if (target === 'experiments') target = 'photography';

    if (target === 'pricing') {
      setMobileNavOpen(false);
      if (activeTab === 'photography' && !selectedProject) {
        document.getElementById('photo-pricing')?.scrollIntoView({ behavior: 'smooth' });
        return;
      }
      triggerPageTransition(() => {
        setActiveTab('photography');
        setSelectedProject(null);
        setPendingPhotoScroll('photo-pricing');
      });
      return;
    }

    if (activeTab === target && !selectedProject) return;
    triggerPageTransition(() => {
      setActiveTab(target);
      setSelectedProject(null);
      setMobileNavOpen(false);
    });
  };

  useEffect(() => {
    if (!pendingPhotoScroll || loaderStage !== 'idle' || activeTab !== 'photography') return;
    const id = pendingPhotoScroll;
    const timer = setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      setPendingPhotoScroll(null);
    }, 80);
    return () => clearTimeout(timer);
  }, [pendingPhotoScroll, loaderStage, activeTab]);

  const openProjectDetail = (proj) => {
    try {
      window.history.pushState({ projectId: proj.id || proj.title }, '');
    } catch {
      // ignore
    }
    triggerPageTransition(() => {
      setSelectedProject(proj);
    });
  };

  useEffect(() => {
    const handlePopState = () => {
      if (selectedProject) {
        setSelectedProject(null);
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [selectedProject]);

  // Dynamic Random Sparkles Generator for Hero
  useEffect(() => {
    if (activeTab !== 'index') return;

    const createSparkle = () => {
      const newSparkle = {
        id: Date.now() + Math.random(),
        top: `${(Math.random() * 82 + 8).toFixed(1)}%`,
        left: `${(Math.random() * 86 + 7).toFixed(1)}%`,
        size: Math.floor(Math.random() * 7) + 6,
        duration: (Math.random() * 0.8 + 1.8).toFixed(2),
      };

      setSparkles((prev) => {
        const filtered = prev.filter((s) => Date.now() - s.id < 2400);
        return [...filtered, newSparkle];
      });
    };

    for (let i = 0; i < 6; i++) {
      setTimeout(createSparkle, i * 200);
    }

    const sparkleInterval = setInterval(createSparkle, 450);
    return () => clearInterval(sparkleInterval);
  }, [activeTab, heroHoverTrigger]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSent(true);
    setTimeout(() => setFormSent(false), 4500);
  };

  const isPhotographyMode = activeTab === 'photography' || (selectedProject && PHOTOGRAPHY_WORKS.some((p) => p.id === selectedProject.id));
  // Home cards carry partial data (e.g. stack as a display string); resolve the full entry for the case study
  const webdevCase = selectedProject ? (WEBDEV_WORKS.find((w) => w.id === selectedProject.id) || selectedProject) : null;
  const currentWorksList = isPhotographyMode ? PHOTOGRAPHY_WORKS : WEBDEV_WORKS;
  const isLightThemeActive = activeTab === 'photography';
  const showPhotoProjectPage = selectedProject && activeTab === 'photography';

  const handleNextProject = () => {
    if (!selectedProject) return;
    const idx = currentWorksList.findIndex((p) => p.id === selectedProject.id);
    const nextIdx = (idx + 1) % currentWorksList.length;
    openProjectDetail(currentWorksList[nextIdx]);
  };

  return (
    <div className="portfolio-app">
      {/* Page Transition Loader Overlay Curtain */}
      <PageTransitionLoader stage={loaderStage} progress={loaderProgress} />

      {/* Custom White / Black Dot Cursor */}
      <CustomCursor isLightTheme={isLightThemeActive} />

      {/* Mobile Side Drawer Navigation Overlay */}
      <div className={`mobile-nav-overlay ${mobileNavOpen ? 'open' : ''}`}>
        <div className="mobile-drawer-top">
          <button className="nav-brand" onClick={() => navigateToTab('index')}>
            DAVE
          </button>
          <button className="mobile-close-btn" onClick={() => setMobileNavOpen(false)}>
            ✕
          </button>
        </div>

        <div className="mobile-drawer-links">
          <button 
            className={`mobile-drawer-link-btn ${activeTab === 'index' ? 'active' : ''}`}
            onClick={() => navigateToTab('index')}
          >
            HOME
          </button>
          <button 
            className={`mobile-drawer-link-btn ${activeTab === 'photography' ? 'active' : ''}`}
            onClick={() => navigateToTab('photography')}
          >
            PHOTOGRAPHY
          </button>
          <button 
            className={`mobile-drawer-link-btn ${activeTab === 'webdev' ? 'active' : ''}`}
            onClick={() => navigateToTab('webdev')}
          >
            WEB DEV
          </button>

          <button 
            className={`mobile-drawer-link-btn ${activeTab === 'about' ? 'active' : ''}`}
            onClick={() => navigateToTab('about')}
          >
            ABOUT
          </button>
          {activeTab === 'photography' && (
            <button 
              className={`mobile-drawer-link-btn ${activeTab === 'pricing' ? 'active' : ''}`}
              onClick={() => navigateToTab('pricing')}
            >
              PRICING
            </button>
          )}
          <button 
            className={`mobile-drawer-link-btn ${activeTab === 'contact' ? 'active' : ''}`}
            onClick={() => navigateToTab('contact')}
          >
            CONTACT
          </button>
        </div>

        <div className="mobile-drawer-footer">
          <a href="mailto:davead461@gmail.com" className="mobile-footer-email">
            DAVEAD461@GMAIL.COM
          </a>
          <div className="mobile-footer-socials">
            <span>GITHUB</span>
            <span>LINKEDIN</span>
            <span>YOUTUBE</span>
          </div>
        </div>
      </div>

      {/* VIEW 1: HERO INDEX STAGE */}
      {activeTab === 'index' && !selectedProject && (
        <>
          <section className="hero-stage">
            <img
              src="/hero-portrait.png"
              alt=""
              className="hero-portrait-bg"
            />
            <div className="hero-vignette-overlay" />

            {sparkles.map((s) => (
              <span
                key={s.id}
                className="star-sparkle"
                style={{
                  top: s.top,
                  left: s.left,
                  animationDuration: `${s.duration}s`,
                }}
              >
                <SparkleSvg size={s.size} />
              </span>
            ))}

            <TopHeaderNav
              activeTab={activeTab}
              navigateToTab={navigateToTab}
              setMobileNavOpen={setMobileNavOpen}
            />

            <div className="hero-center">
              <div
                className="hero-title-wrap"
                onMouseEnter={() => setHeroHoverTrigger((n) => n + 1)}
              >
                <h1 className="hero-big-title">
                  Hello,<br />I am Dave
                </h1>
              </div>
            </div>

            <div className="bottom-meta">
              <div className="bottom-left-info">
                <p className="info-line-top">
                  Independent <strong>developer</strong> & <strong>photographer</strong> —{' '}
                  <button className="info-link" onClick={() => navigateToTab('contact')}>
                    available for work <span className="arrow-icon">↗</span>
                  </button>
                </p>
                <p className="info-line-sub">Based in Canada · 2026</p>
              </div>
            </div>
          </section>

          {/* Tech Stack Marquee (repurposed client carousel) */}
          <HomeTechStackMarquee />

          {/* Home Page Section 2: Philosophy */}
          <section className="home-philosophy-section">
            <div className="philosophy-container">
              <h2 className="philosophy-title">Philosophy</h2>
              <p className="philosophy-text">
                Good work starts with knowing what it needs to do and who it is for.
I move between code, design and storytelling because, to me, they are all shaping the same thing: the experience.
I’m drawn to ambitious ideas, but not complexity for its own sake. I experiment, refine and strip things back until the technology gets out of the way.
The goal is work that feels clear, thoughtful and memorable, where every choice feels like it belongs.

              </p>
            </div>
          </section>

          {/* Home Page Section 3: Intro Services (Exact Reference Screenshot Design) */}
          <section className="home-services-intro-section">
            <div className="services-intro-container">
              <p className="services-intro-left-text">
                I like being close to the work. I ask questions early, make ideas tangible quickly, and keep refining until the solution feels right.
                <br />
                <br />
                Whether I am coding, designing or creating visual work, the process stays the same: understand what matters, choose the right approach, and make every decision earn its place.
              </p>

              <div className="services-intro-right-wrapper">
                <div className="services-intro-2x2-grid">
                  {MAIN_SERVICES.map((service, sIdx) => (
                    <div key={sIdx} className="service-intro-card">
                      <span className="service-intro-card-tag">{service.tag}</span>
                      <div className="service-intro-card-head">
                        <h3 className="service-intro-card-title">{service.title}</h3>
                      </div>
                      <p className="service-intro-card-desc">{service.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Home Page Section 4: Projects Selected Carousel Grid */}
          <section className="home-selected-works-section">
            <div className="selected-works-container">
              {/* Header with Title & Arrow Controls */}
              <div className="selected-works-header">
                <h2 className="selected-works-big-heading">
                  Projects<br />selected
                </h2>

                <div className="selected-works-header-right">
                  <div className="carousel-arrow-controls">
                    <button className="carousel-arrow-btn" aria-label="Previous">
                      <ArrowLeftSvg size={16} />
                    </button>
                    <button className="carousel-arrow-btn" aria-label="Next">
                      <ArrowRightSvg size={16} />
                    </button>
                  </div>
                  <p className="selected-works-subtext">
                    Four selected builds — web applications, realtime dashboards, and e-commerce platforms. Each is engineered for performance, typographic detail, and scrolling rhythm.
                  </p>
                </div>
              </div>

              {/* Cards Grid / Carousel */}
              <div className="works-carousel-grid">
                {HOME_SELECTED_WORKS.map((work) => (
                  <div key={work.id} className="home-work-card" onClick={() => openProjectDetail(work)}>
                    <div className="home-work-img-box">
                      <img src={work.image} alt={work.title} className="home-work-img" />
                    </div>
                    <span className="home-work-tag">{work.tag}</span>
                    <h3 className="home-work-title">{work.title}</h3>

                    <div className="home-work-divider" />

                    <div className="home-work-specs-grid">
                      <div className="home-spec-item">
                        <span className="home-spec-label">TYPE</span>
                        <span className="home-spec-val">{work.type}</span>
                      </div>
                      <div className="home-spec-item">
                        <span className="home-spec-label">STACK</span>
                        <span className="home-spec-val">{work.stack}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* See All Works Bottom Right Action Link */}
              <div className="selected-works-bottom-action">
                <button className="btn-see-all-works" onClick={() => navigateToTab('webdev')}>
                  See web development <ArrowRightSvg size={18} />
                </button>
              </div>
            </div>
          </section>

          {/* Home Page Section 5: Services Inset Light Container Card */}
          <section className="home-services-section">
            <div className="services-inset-white-card">
              <div className="services-inset-header">
                <div className="services-inset-title-group">
                  <h2 className="services-inset-title">Services</h2>
                </div>
                <p className="services-inset-subtext">
                  From building the product to shaping how it looks, works, teaches and communicates, I work across four connected disciplines. Each project starts with the problem, then brings together the right mix of development, design, digital learning and visual storytelling.
                </p>
              </div>

              <div className="services-inset-2x2-grid">
                {DETAILED_SERVICES.map((s, sIdx) => (
                  <div key={sIdx} className="service-inset-card">
                    <div className="service-inset-card-head">
                      <h3 className="service-inset-card-title">{s.title}</h3>
                    </div>
                    <p className="service-inset-card-desc">{s.description}</p>
                    <div className="service-inset-bullet-list">
                      {s.bullets.map((b, bIdx) => (
                        <div key={bIdx} className="service-inset-bullet-item">
                          — {b}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Home Page Section 6: LET'S TALK ABOUT YOUR PROJECT (Exact Reference Screenshot) */}
          <section className="home-talk-cta-section">
            <div className="talk-cta-container">
              <div className="talk-cta-top-row">
                <div className="talk-cta-meta-left">
                  <span className="talk-cta-label">AVAILABLE</span>
                  <span className="talk-cta-years">2025 — 2026</span>
                </div>
                <p className="talk-cta-text-right">
                  Have something in mind? Tell me what you’re building, what you’re trying to solve, and where you need help. The best projects usually start with a simple conversation.
                </p>
              </div>

              <h2 className="talk-cta-big-title" onClick={() => navigateToTab('contact')}>
                LET'S TALK ABOUT YOUR PROJECT
              </h2>

              <div className="talk-cta-gradient-bar" />

              {/* Action Row matching Reference Screenshot */}
              <div className="talk-cta-action-row">
                <div className="talk-direct-email-block">
                  <span className="talk-cta-label">WRITE DIRECTLY</span>
                  <a href="mailto:davead461@gmail.com" className="talk-direct-email-link">
                    davead461@gmail.com
                  </a>
                </div>

                <div className="talk-cta-btn-group">
                  <button className="btn-talk-cta-primary" onClick={() => navigateToTab('contact')}>
                    Start a project <ArrowRightSvg size={16} />
                  </button>
                  <button className="btn-talk-cta-secondary" onClick={() => navigateToTab('about')}>
                    About
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Site Footer */}
          <SiteFooter navigateToTab={navigateToTab} />
        </>
      )}

      {/* VIEW 2: ABOUT / LIBRARY PAGE VIEW */}
      {activeTab === 'about' && !selectedProject && (
        <main className="about-page-view">
          {/* Top Header Navbar */}
          <TopHeaderNav 
            activeTab={activeTab}
            navigateToTab={navigateToTab}
            setMobileNavOpen={setMobileNavOpen}
          />

          <div className="about-container">
            {/* Giant Main Headline Statement */}
            <h1 className="about-hero-statement">
              DAVE IS A DEVELOPER AND CREATIVE WHO ENJOYS TURNING IDEAS INTO EXPERIENCES PEOPLE CAN ACTUALLY USE. HIS BACKGROUND SPANS SOFTWARE DEVELOPMENT, UX, VISUAL DESIGN AND STORYTELLING, GIVING HIM A MULTIDISCIPLINARY APPROACH TO PROBLEM-SOLVING. HE IS MOST AT HOME BUILDING, EXPERIMENTING AND FIGURING THINGS OUT, ESPECIALLY WHERE TECHNOLOGY, DESIGN AND REAL-WORLD IMPACT INTERSECT.
            </h1>

            {/* Sub-sections Stack */}
            <div className="about-sections-wrapper">
              {/* Services Subgroup */}
              <div className="about-subgroup">
                <span className="about-label">SERVICES</span>
                <div className="about-list">
                  <div className="about-item-bold">WEB & APPLICATION DEVELOPMENT</div>
                  <div className="about-item-bold">UX & PRODUCT DESIGN</div>
                  <div className="about-item-bold">LMS & DIGITAL LEARNING</div>
                  <div className="about-item-bold">PHOTO, VIDEO & MOTION</div>
                </div>
              </div>

              {/* Find Me Subgroup */}
              <div className="about-subgroup">
                <span className="about-label">FIND ME</span>
                <div className="about-list">
                  <a href="https://github.com/davvvead" target="_blank" rel="noreferrer" className="about-item-link">
                    GITHUB
                  </a>
                  <a href="https://www.linkedin.com/in/davvead/" target="_blank" rel="noreferrer" className="about-item-link">
                    LINKEDIN
                  </a>
                  <a href="https://www.youtube.com/@davvead" target="_blank" rel="noreferrer" className="about-item-link">
                    YOUTUBE
                  </a>
                </div>
              </div>

              {/* Contact Subgroup */}
              <div className="about-subgroup">
                <span className="about-label">CONTACT</span>
                <div className="about-list">
                  <button onClick={() => navigateToTab('contact')} className="about-item-link" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                    DAVEAD461@GMAIL.COM
                  </button>
                  <a href="tel:+16479046138" className="about-item-link">
                    +1 (647) 904-6138
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom Left Thumbnail Card & Copyright */}
            <div className="about-bottom-bar" style={{ marginBottom: '4rem' }}>
              <div className="about-thumbnail-card">
                <AboutImageSlideshow />
                <span className="about-copyright">© 2026 DAVE</span>
              </div>
            </div>
          </div>

          <SiteFooter navigateToTab={navigateToTab} />
        </main>
      )}



      {/* VIEW 3: DEDICATED PHOTOGRAPHY PAGE VIEW */}
      {activeTab === 'photography' && !selectedProject && (
        <main className="photography-page-view">
          <PhotographyPageHero
            activeTab={activeTab}
            navigateToTab={navigateToTab}
          />
          <PhotographyFeaturedWork openProjectDetail={openProjectDetail} />
          <PhotographyServicesSection />
          <PhotographyPricingSection navigateToTab={navigateToTab} />
          <PhotographyWorkFooter navigateToTab={navigateToTab} />
        </main>
      )}

      {/* VIEW 4: DEDICATED WEB DEVELOPMENT PAGE VIEW */}
      {activeTab === 'webdev' && !selectedProject && (
        <main className="webdev-page-view mode-webdev">
          {/* Top Header Navbar (Homepage Style) */}
          <TopHeaderNav 
            activeTab={activeTab}
            navigateToTab={navigateToTab}
            setMobileNavOpen={setMobileNavOpen}
          />

          {/* Web Dev Meta Header */}
          <section className="webdev-hero-header">
            <div className="webdev-header-meta font-mono">
              <span className="webdev-tag">W.02 // DIGITAL PRODUCTS</span>
              <span className="webdev-status">REACT 19 · NEXT.JS · THREE.JS · TYPESCRIPT</span>
            </div>
            <h1 className="webdev-hero-title">WEB DEVELOPMENT</h1>
            <p className="webdev-hero-sub">
              High-performance web applications, interactive WebGL shaders, and bespoke design systems. Built with restraint, clean modular architecture, and 95+ Lighthouse optimization.
            </p>
          </section>

          {/* Horizontal Scrollable Row of Web Dev Work Cards */}
          <section className="works-horizontal-strip-wrapper">
            <div className="works-cards-flex-row">
              {HOME_SELECTED_WORKS.map((item) => (
                <div key={item.id} className="webdev-strip-card" onClick={() => openProjectDetail(item)}>
                  <div className="webdev-card-img-box" style={{ aspectRatio: item.aspectRatio || '3 / 4' }}>
                    <img src={item.image} alt={item.title} className="webdev-card-img" />
                    <div className="code-badge-overlay font-mono">
                      <span>&lt;REACT /&gt;</span>
                    </div>
                  </div>
                  <div className="webdev-card-meta">
                    <h3 className="webdev-card-title">{item.title}</h3>
                    <span className="webdev-card-sub">{item.subtitle}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <SiteFooter navigateToTab={navigateToTab} />
        </main>
      )}

      {showPhotoProjectPage && (
        <PhotographyProjectDetail
          project={selectedProject}
          navigateToTab={navigateToTab}
          openProjectDetail={openProjectDetail}
          onBack={() => triggerPageTransition(() => setSelectedProject(null))}
        />
      )}

      {/* VIEW 5: PROJECT DETAIL VIEW */}
      {selectedProject && !showPhotoProjectPage && (
        <main className={`project-detail-view mode-${isPhotographyMode ? 'photography' : 'webdev'}`}>
          {isPhotographyMode ? (
            <>
              {/* Fixed Hero Stage pinned behind scroll */}
              <div className="photo-detail-sticky-wrapper">
                <section className="photo-detail-hero-stage">
                  <img 
                    src={selectedProject.heroImage || selectedProject.image} 
                    alt={selectedProject.title} 
                    className="photo-detail-hero-img" 
                  />
                  <div className="photo-detail-hero-vignette" />

                  {/* Top Navigation */}
                  <PhotographyTopHeader 
                    activeTab={activeTab}
                    navigateToTab={navigateToTab}
                    setMobileNavOpen={setMobileNavOpen}
                  />

                  {/* 2 Frosted Glass Pills at Bottom of Hero */}
                  <div className="photo-detail-hero-pills-row">
                    {/* Left Glass Pill (Longer Pill) */}
                    <div className="photo-detail-glass-pill pill-left">
                      <h1 className="photo-detail-title">{selectedProject.title}</h1>
                      <p className="photo-detail-desc font-mono">
                        {selectedProject.description || `${selectedProject.title} REIMAGINED WITH BOLD EDITORIAL FLAIR.`}
                      </p>
                    </div>

                    {/* Right Glass Pill (Shorter Pill) */}
                    <div className="photo-detail-glass-pill pill-right font-mono">
                      <div className="photo-detail-meta-col">
                        <div className="meta-item">
                          <span className="meta-label">CLIENT :</span>
                          <span className="meta-val">{selectedProject.client || selectedProject.title}</span>
                        </div>
                        <div className="meta-item">
                          <span className="meta-label">YEAR :</span>
                          <span className="meta-val">{selectedProject.year ? selectedProject.year.replace('/ ', '') : '2025'}</span>
                        </div>
                      </div>

                      <div className="photo-detail-meta-col">
                        <div className="meta-item">
                          <span className="meta-label">SERVICE :</span>
                          <span className="meta-val">{selectedProject.services || 'INTERACTION DESIGN / ART DIRECTION'}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>

              {/* Scrollable Content Layer sliding OVER the fixed hero */}
              <div className="photo-detail-scroll-layer">
                {/* Bento Grid Gallery Section */}
                <section className="photo-detail-bento-section">
                  {(() => {
                    const g = (selectedProject.gallery && selectedProject.gallery.length > 0)
                      ? selectedProject.gallery
                      : ['/exp-photo-1.png', '/exp-photo-2.png', '/hero-portrait.png', '/about-thumb.png', '/about-thumb-3.png', '/exp-photo-3.png', '/exp-photo-4.png', '/about-thumb-2.png', '/exp-photo-1.png', '/exp-photo-2.png'];
                    return (
                      <>
                        {/* Row 1: 2 Big Cards (Clear over hero) */}
                        <div className="bento-row bento-2col">
                          <div className="bento-card">
                            <img src={g[0] || g[0 % g.length]} alt="Bento 1" />
                          </div>
                          <div className="bento-card">
                            <img src={g[1] || g[1 % g.length]} alt="Bento 2" />
                          </div>
                        </div>

                        {/* Gradient Blur Backdrop Overlay Starts Here from First Long Card (Row 2) */}
                        <div className="bento-row-wrapper-gradient">
                          <div className="bento-gradient-overlay" />

                          {/* Row 2: 1 Long Wide Card */}
                          <div className="bento-row bento-1col">
                            <div className="bento-card">
                              <img src={g[2] || g[2 % g.length]} alt="Bento 3" />
                            </div>
                          </div>

                          {/* Row 3: 2 Big Cards */}
                          <div className="bento-row bento-2col">
                            <div className="bento-card">
                              <img src={g[3] || g[3 % g.length]} alt="Bento 4" />
                            </div>
                            <div className="bento-card">
                              <img src={g[4] || g[4 % g.length]} alt="Bento 5" />
                            </div>
                          </div>

                          {/* Row 4: 2 Big Cards */}
                          <div className="bento-row bento-2col">
                            <div className="bento-card">
                              <img src={g[5] || g[5 % g.length]} alt="Bento 6" />
                            </div>
                            <div className="bento-card">
                              <img src={g[6] || g[6 % g.length]} alt="Bento 7" />
                            </div>
                          </div>

                          {/* Row 5: 1 Long Wide Card */}
                          <div className="bento-row bento-1col">
                            <div className="bento-card">
                              <img src={g[7] || g[7 % g.length]} alt="Bento 8" />
                            </div>
                          </div>

                          {/* Row 6: 2 Big Cards */}
                          <div className="bento-row bento-2col">
                            <div className="bento-card">
                              <img src={g[8] || g[8 % g.length]} alt="Bento 9" />
                            </div>
                            <div className="bento-card">
                              <img src={g[9] || g[9 % g.length]} alt="Bento 10" />
                            </div>
                          </div>
                        </div>
                      </>
                    );
                  })()}
                </section>

                {/* About Project & Contributors Section */}
                <section className="photo-detail-about-section font-mono">
                  <div className="photo-detail-about-grid">
                    <div className="about-col">
                      <span className="about-section-label">ABOUT</span>
                      <p className="about-paragraph">
                        {selectedProject.title} GALLERY IS A DIGITAL-FIRST CONTEMPORARY ART PLATFORM DEDICATED TO SHOWCASING EMERGING FEMALE AND NON-BINARY ARTISTS THROUGH ONLINE EXHIBITIONS, CURATORIAL ESSAYS, AND IMMERSIVE EDITORIAL FEATURES. OUR TASK WAS TO CREATE A STRONG YET SUBTLE VISUAL IDENTITY AND WEB PRESENCE THAT AMPLIFIES THE WORK WITHOUT OVERSHADOWING IT. THE SITE STRUCTURE WAS DESIGNED LIKE A QUIET EDITORIAL MAGAZINE — AIRY, ELEGANT, AND DRIVEN BY RHYTHM, ALLOWING ARTWORK AND WRITING TO BREATHE SIDE BY SIDE. CUSTOM TYPOGRAPHY, ADAPTIVE MOTION, AND A MODULAR SYSTEM FOR EXHIBITIONS MAKE THE PLATFORM FEEL CURATED YET DYNAMIC, WITH SPACE FOR GROWTH AND TRANSFORMATION OVER TIME.
                      </p>
                    </div>

                    <div className="contributors-col">
                      <span className="about-section-label">CONTRIBUTORS</span>
                      <div className="contributors-list">
                        <div className="contributor-row">
                          <span className="role-pill">ART DIRECTOR</span>
                          <span className="name-pill">ISABELLE M.</span>
                        </div>
                        <div className="contributor-row">
                          <span className="role-pill">UX/UI</span>
                          <span className="name-pill">JOHAN C.</span>
                        </div>
                        <div className="contributor-row">
                          <span className="role-pill">COPYWRITING</span>
                          <span className="name-pill">DARIA V.</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Interactive [OTHER WORKS] Section with Center Plus & Hover Preview */}
                <OtherWorksInteractive 
                  selectedProject={selectedProject}
                  allWorks={PHOTOGRAPHY_WORKS}
                  onSelectProject={openProjectDetail}
                />

                {/* White Dedicated Photography Footer */}
                <PhotographyFooter navigateToTab={navigateToTab} />
              </div>
            </>
          ) : (
            <>
              {/* Top Header Navbar */}
              <TopHeaderNav 
                activeTab={activeTab}
                navigateToTab={navigateToTab}
                setMobileNavOpen={setMobileNavOpen}
              />

              {/* Back Navigation Bar */}
              <div className="project-detail-top-bar">
                <button className="btn-back-link" onClick={() => triggerPageTransition(() => setSelectedProject(null))}>
                  <ArrowLeftSvg size={16} /> BACK
                </button>
              </div>

              {/* Hero Meta Header */}
              <section className="project-detail-hero">
                <h1 className="project-detail-heading">{selectedProject.title}</h1>

                <div className="project-detail-meta-grid">
                  <div className="project-detail-meta-left">
                    <div className="meta-spec-block">
                      <span className="meta-spec-label">CLIENT</span>
                      <span className="meta-spec-val">{selectedProject.client}</span>
                    </div>

                    <div className="meta-spec-block">
                      <span className="meta-spec-label">SERVICES</span>
                      <span className="meta-spec-val">{selectedProject.services}</span>
                    </div>
                  </div>

                  <div className="project-detail-meta-right">
                    <span className="meta-spec-label" style={{ marginBottom: '0.4rem' }}>DESCRIPTION</span>
                    <p className="project-desc-paragraph">{selectedProject.description}</p>
                  </div>
                </div>
              </section>

              {/* Case Study Body */}
              <section className="project-case-study">
                {webdevCase.overview && (
                  <div className="case-study-block">
                    <span className="meta-spec-label">OVERVIEW</span>
                    <p className="case-study-copy">{webdevCase.overview}</p>
                    {webdevCase.role && (
                      <p className="case-study-role">{webdevCase.role}</p>
                    )}
                  </div>
                )}

                {Array.isArray(webdevCase.gallery) && webdevCase.gallery.length > 0 && (
                  <div className="case-study-block case-study-block-wide">
                    <span className="meta-spec-label">SCREENS</span>
                    <div className="case-study-screens">
                      {webdevCase.gallery.slice(0, 2).map((shot, idx) => (
                        <figure key={`${shot}-${idx}`} className="case-study-screen-frame">
                          <div className="screen-frame-chrome">
                            <span className="screen-frame-dot" />
                            <span className="screen-frame-dot" />
                            <span className="screen-frame-dot" />
                          </div>
                          <img src={shot} alt={`${webdevCase.title} screen ${idx + 1}`} loading="lazy" />
                        </figure>
                      ))}
                    </div>
                  </div>
                )}

                {Array.isArray(webdevCase.stack) && (
                  <div className="case-study-block">
                    <span className="meta-spec-label">TECH STACK</span>
                    <div className="case-study-stack">
                      {webdevCase.stack.map((tech) => (
                        <span key={tech} className="case-study-stack-pill">{tech}</span>
                      ))}
                    </div>
                  </div>
                )}

                {webdevCase.highlights && (
                  <div className="case-study-block">
                    <span className="meta-spec-label">HIGHLIGHTS</span>
                    <ul className="case-study-highlights">
                      {webdevCase.highlights.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </section>

              {/* Next Project Footer */}
              <footer className="project-detail-next-nav" style={{ marginBottom: '4rem' }}>
                <button className="btn-back-link" onClick={() => triggerPageTransition(() => setSelectedProject(null))}>
                  <ArrowLeftSvg size={16} /> ALL PROJECTS
                </button>
                <button className="btn-next-proj" onClick={handleNextProject}>
                  NEXT PROJECT <ArrowRightSvg size={24} />
                </button>
              </footer>

              <SiteFooter navigateToTab={navigateToTab} />
            </>
          )}
        </main>
      )}

      {/* VIEW 6: CONTACT PAGE VIEW */}
      {activeTab === 'contact' && !selectedProject && (
        <main className="contact-page-view">
          {/* Top Header Navbar */}
          <TopHeaderNav 
            activeTab={activeTab}
            navigateToTab={navigateToTab}
            setMobileNavOpen={setMobileNavOpen}
          />

          {/* Contact Hero Header Section */}
          <section className="contact-hero-header">
            <h1 className="contact-big-title">CONTACT</h1>
            <p className="contact-subtitle-text">
              Let's talk about your project. Describe what you want build — I will get back to you within 24 hours with a first reading of the perimeter and next steps.
            </p>
          </section>

          {/* Contact Main 2-Column Section */}
          <section className="contact-main-grid" style={{ marginBottom: '3rem' }}>
            {/* Left Column: C.01 Contact details */}
            <div className="contact-details-col">
              <div className="contact-col-header">
                <span className="contact-col-idx">C.01</span>
                <h2 className="contact-col-heading">Contact details</h2>
              </div>

              <div className="contact-field-group">
                <span className="contact-field-label">EMAIL</span>
                <a href="mailto:davead461@gmail.com" className="contact-field-value">
                  davead461@gmail.com
                </a>
              </div>

              <div className="contact-field-group">
                <span className="contact-field-label">LOCATION</span>
                <p className="contact-field-value">
                  Canada · Remote & international
                </p>
              </div>

              <div className="contact-field-group">
                <span className="contact-field-label">AVAILABILITY</span>
                <p className="contact-field-value">
                  Response within 24 hours — quote within one week framing
                </p>
              </div>
            </div>

            {/* Right Column: C.02 Form */}
            <div className="contact-form-col">
              <div className="contact-col-header">
                <span className="contact-col-idx">C.02</span>
                <h2 className="contact-col-heading">Form</h2>
              </div>

              <form className="contact-form-elements" onSubmit={handleFormSubmit}>
                <div className="form-row-grid">
                  <div className="minimal-input-box">
                    <label className="input-mono-label">FIRST NAME</label>
                    <input type="text" required className="minimal-field-input" placeholder="First name" />
                  </div>
                  <div className="minimal-input-box">
                    <label className="input-mono-label">NAME</label>
                    <input type="text" required className="minimal-field-input" placeholder="Last name" />
                  </div>
                </div>

                <div className="form-row-grid">
                  <div className="minimal-input-box">
                    <label className="input-mono-label">EMAIL</label>
                    <input type="email" required className="minimal-field-input" placeholder="email@example.com" />
                  </div>
                  <div className="minimal-input-box">
                    <label className="input-mono-label">PHONE (optional)</label>
                    <input type="tel" className="minimal-field-input" placeholder="+1 (000) 000-0000" />
                  </div>
                </div>

                <div className="minimal-input-box">
                  <label className="input-mono-label">MESSAGE</label>
                  <textarea rows="3" required className="minimal-field-textarea" placeholder="A few lines on the project, the context, the deadlines..."></textarea>
                </div>

                <div className="form-submit-action-bar">
                  <button type="submit" className="btn-send-message">
                    {formSent ? 'Message sent ✓' : <>Send the message <ArrowRightSvg size={16} /></>}
                  </button>
                  <span className="submit-disclaimer-note">
                    By sending this form, you agree to be contacted by email regarding your request.
                  </span>
                </div>
              </form>
            </div>
          </section>

          <SiteFooter navigateToTab={navigateToTab} />
        </main>
      )}

      {/* VIEW 7: PRIVACY POLICY PAGE VIEW (REFERENCE SCREENSHOT DESIGN) */}
      {activeTab === 'privacy' && !selectedProject && (
        <main className="privacy-page-view">
          {/* Top Navigation */}
          <PhotographyTopHeader 
            activeTab={activeTab}
            navigateToTab={navigateToTab}
            setMobileNavOpen={setMobileNavOpen}
          />

          {/* Privacy Main 2-Column Section */}
          <section className="privacy-main-section">
            <div className="privacy-main-grid">
              {/* Left Column: PRIVACY-POLICY Title & Sticky Metallic Image */}
              <div className="privacy-left-col">
                <h1 className="privacy-page-title">PRIVACY-POLICY</h1>
                <div className="privacy-sticky-img-box">
                  <img src="/about-thumb.png" alt="Privacy Metallic Control Dial" className="privacy-img" />
                </div>
              </div>

              {/* Right Column: Spec Block Stack */}
              <div className="privacy-right-col font-mono">
                <div className="privacy-narrative-tag font-mono">
                  BUILDING BRANDS THAT FEEL AS GOOD AS THEY LOOK.
                </div>

                <div className="privacy-blocks-stack">
                  <div className="privacy-block-row">
                    <div className="privacy-pill-label">INFORMATION WE COLLECT</div>
                    <p className="privacy-block-text">
                      WE COLLECT TWO TYPES OF INFORMATION: PERSONAL AND NON-PERSONAL. PERSONAL INFORMATION INCLUDES DETAILS YOU VOLUNTARILY PROVIDE, SUCH AS YOUR NAME, EMAIL ADDRESS, OR PHONE NUMBER, TYPICALLY THROUGH FORMS OR SUBSCRIPTIONS. NON-PERSONAL DATA, LIKE YOUR BROWSER TYPE, IP ADDRESS, AND BROWSING PATTERNS, ARE COLLECTED AUTOMATICALLY THROUGH COOKIES AND TRACKING TECHNOLOGIES. THIS DATA HELPS US OPTIMIZE YOUR EXPERIENCE AND IMPROVE THE FUNCTIONALITY OF OUR SITE. YOUR CONSENT IS SOUGHT BEFORE COLLECTING SENSITIVE DATA, WHERE APPLICABLE.
                    </p>
                  </div>

                  <div className="privacy-block-row">
                    <div className="privacy-pill-label">HOW WE USE YOUR INFORMATION</div>
                    <p className="privacy-block-text">
                      TO PROVIDE AND IMPROVE OUR SERVICES.<br />
                      TO PERSONALIZE YOUR EXPERIENCE ON OUR WEBSITE.<br />
                      FOR MARKETING AND PROMOTIONAL COMMUNICATIONS (IF YOU HAVE OPTED IN).<br />
                      TO ANALYZE SITE TRAFFIC AND TRENDS.
                    </p>
                  </div>

                  <div className="privacy-block-row">
                    <div className="privacy-pill-label">SHARING YOUR INFORMATION</div>
                    <p className="privacy-block-text">
                      WE RESPECT YOUR PRIVACY AND DO NOT SELL OR RENT YOUR PERSONAL INFORMATION. HOWEVER, WE MAY SHARE YOUR DATA WITH TRUSTED THIRD-PARTY PROVIDERS TO FACILITATE OUR SERVICES, SUCH AS PAYMENT PROCESSING, ANALYTICS, OR HOSTING. IN COMPLIANCE WITH LEGAL OBLIGATIONS, WE MIGHT SHARE INFORMATION WITH AUTHORITIES IF REQUIRED. WE ENSURE THAT ANY THIRD PARTY ACCESSING YOUR DATA FOLLOWS STRICT CONFIDENTIALITY AND SECURITY PROTOCOLS ALIGNED WITH THIS PRIVACY POLICY.
                    </p>
                  </div>

                  <div className="privacy-block-row">
                    <div className="privacy-pill-label">DATA SECURITY</div>
                    <p className="privacy-block-text">
                      WE PRIORITIZE THE SECURITY OF YOUR PERSONAL DATA AND IMPLEMENT ROBUST MEASURES TO PROTECT IT AGAINST UNAUTHORIZED ACCESS, LOSS, OR MISUSE. OUR SYSTEMS USE ENCRYPTION, SECURE SERVERS, AND ACCESS CONTROL MECHANISMS. HOWEVER, NO ONLINE PLATFORM IS ENTIRELY IMMUNE TO SECURITY RISKS. WHILE WE STRIVE TO PROTECT YOUR INFORMATION, WE ENCOURAGE YOU TO USE STRONG PASSWORDS AND NOTIFY US IMMEDIATELY IF YOU SUSPECT UNAUTHORIZED ACCESS TO YOUR DATA.
                    </p>
                  </div>

                  <div className="privacy-block-row">
                    <div className="privacy-pill-label">THIRD-PARTY LINKS</div>
                    <p className="privacy-block-text">
                      OUR WEBSITE MAY CONTAIN LINKS TO THIRD-PARTY WEBSITES. WE ARE NOT RESPONSIBLE FOR THEIR PRIVACY PRACTICES. PLEASE REVIEW THEIR POLICIES BEFORE SUBMITTING ANY INFORMATION.
                    </p>
                  </div>

                  <div className="privacy-block-row">
                    <div className="privacy-pill-label">CHANGES TO THIS PRIVACY POLICY</div>
                    <p className="privacy-block-text">
                      WE MAY PERIODICALLY UPDATE THIS PRIVACY POLICY TO REFLECT CHANGES IN OUR PRACTICES OR LEGAL REQUIREMENTS. ANY UPDATES WILL BE POSTED ON THIS PAGE WITH AN UPDATED EFFECTIVE DATE. WE ENCOURAGE YOU TO REVIEW THIS PAGE REGULARLY TO STAY INFORMED ABOUT HOW WE PROTECT YOUR PRIVACY. YOUR CONTINUED USE OF OUR WEBSITE CONSTITUTES ACCEPTANCE OF THESE CHANGES.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <PhotographyFooter navigateToTab={navigateToTab} />
        </main>
      )}
    </div>
  );
}
