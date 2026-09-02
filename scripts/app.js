document.addEventListener('DOMContentLoaded', () => {

    // 1. Comprehensive Career Timeline Data Store
    const experienceData = {
        'classified-defence': {
            title: 'Senior Engineer - Software Engineering (Assurance)',
            company: '[CLASSIFIED]',
            period: 'Present',
            location: 'Defence / Maritime & Sub-Surface Systems',
            bullets: [
                '[CLASSIFIED]'
            ],
            skills: [] // No tags as requested
        },
        'synopsys-ansys': {
            title: 'Staff R&D Engineer / Technical Architect',
            company: 'Synopsys & Ansys',
            period: 'Feb 2023 - Apr 2026',
            location: 'Remote / Glasgow, UK',
            bullets: [
                'Specialized in the scaling, stability, and infrastructure readiness of high-performance cloud computing (HPC) environments (Central Engineering / Ansys Cloud Portal & Burst Compute).',
                'Pioneered agentic workflows and test automation pipelines utilizing custom AI tooling and Jira Rovo to automate test lifecycle management.',
                'Designed and managed parallelized end-to-end testing frameworks (Playwright, Cypress, Cucumber/Gherkin) across desktop simulation tools and cloud-native simulation platforms.',
                'Led system integration, API verification, and service mocking layers to ensure consistent cross-platform user experiences.',
                'Developed CI/CD automated deployment workflows via GitHub Actions and monitored performance/regression states using Datadog observability telemetry.'
            ],
            skills: ['HPC Cloud Compute', 'Platform Engineering', 'Agentic AI Systems', 'Playwright', 'Cypress', 'Cucumber Gherkin BDD', 'CI/CD Pipelines', 'Datadog Observability', 'Service Mocking', 'Systems Integration']
        },
        'malvern': {
            title: 'Software Test Engineer',
            company: 'Malvern Panalytical',
            period: 'Sep 2018 - Feb 2023',
            location: 'Great Malvern, UK',
            bullets: [
                'Managed testing processes using Ranorex and Selenium for UI and API automation alongside manual regression suites.',
                'Led test planning and collaborated with external QA vendors using Azure DevOps.',
                'Co-founded a company-wide UX team, designing a standardized component library and branding system.',
                'Completed Human-Centered Design courses, championing usability and product design best practices across the SDLC.'
            ],
            skills: ['Ranorex Automation', 'Selenium', 'Azure DevOps', 'UX Design Systems', 'Human-Centered Design', 'SDLC']
        },
        'sega': {
            title: 'QA Tester',
            company: 'SEGA Hardlight',
            period: 'Aug 2017 - Apr 2018',
            location: 'Leamington Spa, UK',
            bullets: [
                'Merged and verified developer pull requests, compiling custom Android and iOS builds for global testing teams.',
                'Liaised with external development studios to manage major milestone build submissions.',
                'Conducted storefront and compliance testing (Apple App Store, Google Play, COPPA, platform certifications) for mobile titles including Sonic Forces: Speed Battle, Sonic Dash, and Sonic Dash 2: Sonic Boom.',
                'Verified PC platform release candidates and port quality for Valkyria Chronicles 4.'
            ],
            skills: ['Mobile Testing', 'iOS/Android SDKs', 'Build Integration', 'COPPA Compliance', 'PC Port QA', 'Jira Systems']
        },
        'connect': {
            title: 'QA & Automation Tester',
            company: 'Connect Group',
            period: 'Oct 2016 - Jul 2017',
            location: 'West Midlands, UK',
            bullets: [
                'Created automation frameworks for Jaguar Land Rover platforms using Java, Selenium, Cucumber BDD, and Maven.',
                'Executed back-end database and integration tests for customer portal applications.'
            ],
            skills: ['Java', 'Selenium Webdriver', 'Cucumber JVM', 'Maven Projects', 'SQL/Database Testing']
        },
        'ndevr': {
            title: 'Associate Project Manager (Volunteer)',
            company: 'ndevr Ltd',
            period: 'Aug 2016 - Sep 2016',
            location: 'West Midlands, UK',
            bullets: [
                'Managed an EU Internship program focusing on IoT solutions, commercial startup creation, and career development.',
                'Introduced Agile methodologies, running sprint cycles and mapping feature requirements.'
            ],
            skills: ['Agile Coordination', 'IoT Concepts', 'Sprint Planning', 'Mentorship']
        },
        'adactus': {
            title: 'Junior QA Tester',
            company: 'Adactus Ltd & EDM Group',
            period: 'Oct 2015 - Jul 2016',
            location: 'Thame, UK',
            bullets: [
                'Executed QA test runs for Pizza Hut UK web platform and mobile loyalty applications.',
                'Identified front-end compatibility bugs across various mobile browser engines and payment gateways.',
                'Supported development testing of bespoke Insurance Claim Management Software.'
            ],
            skills: ['Web QA', 'Cross-Browser Layouts', 'Mobile Testing', 'Loyalty Integration', 'Payment Gateways']
        },
        'silverlining': {
            title: 'QA Engineer / Team Lead (Co-founder)',
            company: 'Silver Lining QA',
            period: 'Jun 2015 - Sep 2015',
            location: 'Oxford, UK',
            bullets: [
                'Co-founded a game QA start-up, providing outsource services to major game development studios.',
                'Led a QA team of 4, coordinating daily/weekly status reporting and onboarding training.',
                'Collaborated on-site with NaturalMotion teams in London on the award-winning Dawn of Titans.',
                'Led QA verification for GroundShatter\'s fast-paced arcade brawler SkyScrappers.'
            ],
            skills: ['Startup Operations', 'Team Leadership', 'Onsite QA Coordination', 'Outsource Management', 'SkyScrappers']
        },
        'zynga': {
            title: 'Game Tester',
            company: 'Zynga / NaturalMotion',
            period: 'Jul 2014 - May 2015',
            location: 'Greater Oxford Area, UK',
            bullets: [
                'Conducted mobile game QA testing across flagship titles: CSR Racing, CSR 2, CSR Classics, Dawn of Titans, Clumsy Ninja, and FarmVille 2: Country Escape.',
                'Analyzed device crash logs using ADB, Android Monitor, Charles Proxy, and Xcode.',
                'Drafted detailed Jira bug cards with clear reproduction steps and hardware parameters.'
            ],
            skills: ['Game QA', 'ADB Commands', 'Charles Proxy', 'Xcode Logging', 'Bug Lifecycle', 'CSR Franchise', 'Euphoria Physics']
        },
        'tinderstone': {
            title: '3D Artist & QA Tester',
            company: 'Tinderstone & Syscom',
            period: 'Nov 2013 - Aug 2014',
            location: 'West Midlands, UK',
            bullets: [
                'Created optimized 3D low-poly models from laser scan files, performing mesh retopology in 3D Coat and 3ds Max.',
                'Created high-resolution 2D tiling textures from fabric samples in Photoshop.',
                'Conducted software validation and test script execution for ERP platform systems at Syscom PLC.'
            ],
            skills: ['3D Modeling', 'Retopology', '3D Coat', '3ds Max', 'Photoshop Textures', 'ERP System Validation']
        },
        'ticketmaster': {
            title: 'Graduate QA Associate Engineer',
            company: 'Ticketmaster / LiveNation',
            period: 'Mar 2013 - Sep 2013',
            location: 'Stoke-on-Trent, UK',
            bullets: [
                'Gained hands-on experience in Agile product teams delivering ticketing software systems.',
                'Participated in feature design planning and sprint reviews with cross-functional teams.',
                'Validated database states and ticketing system performance against release criteria.'
            ],
            skills: ['Agile Teamwork', 'Agile/Scrum', 'Database Validation', 'Software Verification']
        },
        'staffuni': {
            title: 'MEng Computer Games Design & 3D Modelling / Student Warden',
            company: 'Staffordshire University',
            period: 'Sep 2007 - Feb 2013',
            location: 'Stoke-on-Trent, UK',
            bullets: [
                'Graduated with a Master of Engineering (MEng) degree in Computer Games Design and 3D Modelling, specializing in real-time engine architectures, 3D graphics, and systems optimization.',
                'Managed residential halls for over 150 immediate students, acting as first-response pastoral, first-aid, and fire safety support.'
            ],
            skills: ['Master\'s Degree (MEng)', 'Game Engines', '3D Graphics', 'Conflict Resolution', 'Crisis Response']
        }
    };

    // 2. Commercial Games Database (Interactive Smartphone Console)
    const commercialApps = {
        'csr': {
            studio: 'ZYNGA / NATURALMOTION',
            studioUrl: 'https://www.naturalmotion.com/',
            platform: 'iOS / Android / Kindle',
            title: 'CSR Racing',
            icon: '🏎️',
            tagline: '130M+ Downloads // Drag Racing Phenomenon',
            desc: 'Exploratory testing of new vehicle upgrade mechanics, tuning drag physics curves, and authoring Release Candidate (RC) submission test cases across extensive iOS, Android, and Kindle hardware matrices.',
            bullets: [
                'Drafted high-precision JIRA tickets with concise hardware reproduction steps.',
                'Analyzed memory dumps and crash logs using ADB, Android Monitor, Charles Proxy, and Xcode.',
                'Verified live-event server synchronization, IAP storefront flows, and multi-device cloud saves.'
            ],
            tags: ['iOS / Android', 'ADB Logcat', 'Charles Proxy', 'Xcode', 'Jira Agile']
        },
        'csr2': {
            studio: 'ZYNGA / NATURALMOTION',
            studioUrl: 'https://www.naturalmotion.com/',
            platform: 'iOS / Android',
            title: 'CSR 2',
            icon: '🏁',
            tagline: 'Hyper-Realistic Shaders & Synchronous Multiplayer',
            desc: 'Conducted pre-launch graphical profiling, shader fidelity checks, and real-time multiplayer race synchronization testing for next-generation mobile graphics.',
            bullets: [
                'Real-time PBR material rendering & dynamic car paint reflection profiling.',
                'Synchronous real-time multiplayer lobby handshake and latency testing.',
                'Live continuous build verification and feature sign-offs with development leads.'
            ],
            tags: ['Real-time Multiplayer', 'PBR Shaders', 'Continuous Integration', 'Device Farm']
        },
        'csrclassics': {
            studio: 'ZYNGA / NATURALMOTION',
            studioUrl: 'https://www.naturalmotion.com/',
            platform: 'iOS / Android',
            title: 'CSR Classics',
            icon: '🚘',
            tagline: 'Vintage Legends & Custom Restoration',
            desc: 'Focused on vehicle restoration upgrade mechanics, engine audio synchronization, and cross-generation device compatibility for classic muscle and vintage sports cars.',
            bullets: [
                'Restoration stage state persistence and progression verification.',
                'Multi-tier hardware benchmark testing across legacy iOS and Android GPUs.',
                'Storefront packaging and release build certification.'
            ],
            tags: ['Classic Cars', 'Audio Profiling', 'State Persistence', 'Release Verification']
        },
        'titans': {
            studio: 'NATURALMOTION / SILVER LINING',
            studioUrl: 'https://www.naturalmotion.com/',
            platform: 'iOS / Android',
            title: 'Dawn of Titans',
            icon: '⚔️',
            tagline: 'Console-Quality 3D Strategy & Massive Scale Battles',
            desc: 'Led on-site QA team of 4 at NaturalMotion London offices executing large-scale tactical army simulations, rendering engine stress testing, and cloud save synchronization.',
            bullets: [
                'On-site QA team leadership, daily/weekly status reporting, and tester onboarding.',
                'Stress testing rendering limits with thousands of concurrent on-screen units.',
                'Alliance war network packet validation and live event monitoring.'
            ],
            tags: ['On-site QA Lead', 'Massive Unit Rendering', 'Alliance Multiplayer', 'Cloud Saves']
        },
        'ninja': {
            studio: 'NATURALMOTION',
            studioUrl: 'https://www.naturalmotion.com/',
            platform: 'iOS / Android',
            title: 'Clumsy Ninja',
            icon: '🥋',
            tagline: 'Euphoria Physics Engine & Procedural Animation',
            desc: 'Rigorous physics sandbox testing powered by the Euphoria procedural animation engine. Verified ragdoll interactions, touch gesture responsiveness, and AI behavior loops.',
            bullets: [
                'Ragdoll constraint physics & dynamic impulse force validation.',
                'Touch screen multi-point gesture tracking and kinematic response testing.',
                'Interactive sandbox mini-games and reward telemetry verification.'
            ],
            tags: ['Euphoria Physics', 'Procedural Animation', 'Kinematics', 'Touch Mechanics']
        },
        'farmville': {
            studio: 'ZYNGA',
            studioUrl: 'https://www.zynga.com/',
            platform: 'iOS / Android / Kindle',
            title: 'FarmVille 2: Country Escape',
            icon: '🚜',
            tagline: 'Global Casual Phenomenon & Offline/Online Sync',
            desc: 'Tested farm expansion loops, crafting timers, offline-to-online state reconciliation, and social trading markets across diverse international localized builds.',
            bullets: [
                'Offline timer reconciliation & conflict resolution on reconnect.',
                'Multi-language localization and UI text truncation verification.',
                'Co-op social trade order book testing and cross-platform friend sync.'
            ],
            tags: ['Offline State Sync', 'Localization QA', 'Crafting Loops', 'Social Systems']
        },
        'sonicforces': {
            studio: 'SEGA HARDLIGHT',
            studioUrl: 'https://www.hardlightstudio.com/',
            platform: 'iOS / Android',
            title: 'Sonic Forces: Speed Battle',
            icon: '🦔',
            tagline: 'Real-Time 4-Player Synchronous Racing',
            desc: 'Merged and verified developer pull requests, compiled internal developer builds, and performed global test ring distribution for SEGA Hardlight flagship titles.',
            bullets: [
                'Compiled and verified internal developer PR builds across daily pipelines.',
                '4-player synchronous online matchmaking and obstacle hit registration.',
                'COPPA compliance, platform certifications (Apple App Store, Google Play), and feature sign-offs.'
            ],
            tags: ['SEGA Hardlight', 'Build Integration', 'COPPA Review', 'Store Certification']
        },
        'sonicdash2': {
            studio: 'SEGA HARDLIGHT',
            studioUrl: 'https://www.hardlightstudio.com/',
            platform: 'iOS / Android',
            title: 'Sonic Dash 2: Sonic Boom',
            icon: '⚡',
            tagline: 'Team Switch Endless Runner // Enerbeam Mechanics',
            desc: 'Completed release and submission testing with sign-off responsibility for feature work, energetic beam mechanics, and store packaging.',
            bullets: [
                'Character mid-run team swap state and powerup combination testing.',
                'Enerbeam swinging physics and gyro tilt control sensitivity calibration.',
                'Store submission certification (App Store, Google Play Store, Amazon Appstore).'
            ],
            tags: ['Endless Runner', 'Sonic Boom', 'Store Certification', 'Leaderboards']
        },
        'valkyria': {
            studio: 'SEGA',
            studioUrl: 'https://valkyria.sega.com/',
            platform: 'PC / Steam',
            title: 'Valkyria Chronicles 4',
            icon: '🛡️',
            tagline: 'Tactical RPG // PC Platform Quality Verification',
            desc: 'Verified PC platform release candidate builds, graphical display scaling, keyboard/mouse remapping, and port stability for SEGA\'s critically acclaimed tactical role-playing game.',
            bullets: [
                'Verified PC release candidate build stability, 4K resolution scaling, and ultra-wide monitor framing.',
                'Tested keyboard/mouse input remapping, gamepad hot-swapping, and Steam overlay integrations.',
                'Logged and verified regression fixes alongside developer leads in SEGA\'s global Jira database.'
            ],
            tags: ['SEGA', 'PC Port QA', 'Steam Integration', 'Input Remapping', 'Display Scaling']
        },
        'pizzahut': {
            studio: 'ADACTUS & EDM GROUP',
            studioUrl: 'https://www.adactus.co.uk/',
            platform: 'Web / iOS / Android',
            title: 'Pizza Hut Loyalty & Web',
            icon: '🍕',
            tagline: 'Enterprise Ordering & Customer Loyalty Platform',
            desc: 'Executed end-to-end user journeys for the UK Pizza Hut web platform and dedicated mobile customer loyalty applications, covering menu builders, discount vouchers, and payment gateway security.',
            bullets: [
                'Loyalty reward stamp collection & instant voucher redemption verification.',
                'Payment gateway tokenization and 3D Secure transaction testing.',
                'Cross-browser rendering tests (Safari, Chrome, Firefox, Mobile WebViews).'
            ],
            tags: ['Enterprise Web', 'Loyalty Rewards', 'Payment Gateways', 'Cross-Browser']
        },
        'skyscrappers': {
            studio: 'GROUNDSHATTER / SILVER LINING',
            studioUrl: 'http://skyscrappers.groundshatter.com/',
            platform: 'PC / Consoles',
            title: 'SkyScrappers',
            icon: '🥊',
            tagline: 'Arcade Platform Brawler // Fast-Paced Combat',
            desc: 'QA verification for GroundShatter\'s high-tempo arcade brawler. Tested 4-player local controller inputs, falling debris physics, and competitive tournament balance.',
            bullets: [
                '4-player simultaneous gamepad input latency and buffer tests.',
                'Dynamic crumbling building debris collision and camera framing.',
                'Release candidate bug sweeps and frame-rate lock validations.'
            ],
            tags: ['GroundShatter', 'Arcade Brawler', 'Gamepad Input', 'Physics Destruction']
        }
    };

    // 3. Personal Indie Projects Database (3D Game Box Shelf)
    const indieBoxes = {
        'ewefo': {
            title: 'ewe-FO',
            tagline: 'Abduct. Automate. Ascend.',
            status: 'Playable Prototype',
            statusClass: 'status-in-dev',
            engine: 'Three.js / WebGL & Godot 4',
            playableUrl: 'games/ewefo/index.html',
            desc: 'An arcade physics-based abduction game set across a diorama-styled British countryside. Pilot a tractor-beam equipped UFO by night to herd and harvest livestock, while building automated conveyor networks, energy condensors, and processing pipelines by day.',
            pillars: [
                'Dynamic tractor-beam spring physics & multi-body rope constraints.',
                '2.5D tilt-shift camera shader with day/night atmospheric transitions.',
                'Factory-style automation loops: wool spin, raw milk refining, and alien tech trees.'
            ],
            tech: ['Three.js', 'WebGL', 'Godot 4', 'Custom Physics', 'Automation'],
            conceptArt: [
                { src: 'assets/psypher53-2-WE5f5c30150a (1).png', title: 'ewe-FO: Visual Pipeline', tag: 'CONCEPT // 2.5D DIORAMA', desc: 'Concept art and 3D diorama assets authored for the prototype.' }
            ]
        },
        'moments': {
            title: 'Moments',
            tagline: 'Memories of Merlin',
            status: 'Playable Prototype',
            statusClass: 'status-in-dev',
            engine: 'Three.js / WebGL',
            playableUrl: 'games/moments/index.html',
            desc: 'An emotional 3D memorial journey created for Merlin the miniature dachshund. Guide Merlin across celestial meadows, bridge rainbow chasms, collect memory prism gems, and run free under vibrant starry skies.',
            pillars: [
                'Emotional memorial journey featuring dynamic ambient orchestral sound design.',
                '3D stylized terrain with rainbow bridges, memory prisms, and petal dynamics.',
                'Gem power belt mechanics: Sunburst Dash, Petal Shield, and Spirit Bark.'
            ],
            tech: ['Three.js', 'WebGL', 'Web Audio API', 'Procedural Terrain'],
            conceptArt: [
                { src: 'assets/merlin.jpg', title: 'Memories of Merlin', tag: 'MOMENTS // PROTAGONIST', desc: 'Merlin the miniature dachshund across every chapter of life — from a puppy in the palm of a hand to exploring the morning frost.' }
            ]
        },
        'wick': {
            title: 'Adventures of Wick',
            tagline: 'Keep the flame alive.',
            status: 'Engine Concept',
            statusClass: 'status-concept',
            engine: 'Custom C++ Engine (SDL2 / Modern OpenGL)',
            desc: 'A dark, atmospheric platformer following a candle-headed sprite. Navigate a shadowy, wind-swept forest, solve physics-based light puzzles, and manage your melting wax reserve before the draft extinguishes your spark.',
            pillars: [
                'Dynamic 2D shadow raymarching and soft light illumination fields.',
                'Melting wax mechanic balancing player speed against remaining lifetime.',
                'Custom lightweight 2D physics solver and tilemap streaming engine.'
            ],
            tech: ['C++ 17', 'SDL2 / OpenGL', '2D Raymarching', 'Shadow Physics', 'Custom Engine'],
            conceptArt: [
                { src: 'assets/art-web/drawing/AoWConcept01.webp', title: 'Adventures of Wick: Hero Concept', tag: 'CHARACTER // ATMOSPHERE', desc: 'Hand-crafted visual design for the candle-headed sprite and melting wax dynamic state.' },
                { src: 'assets/art-web/drawing/AoWConcept03.webp', title: 'Lantern & Light Mechanism Props', tag: 'PROPS // ILLUMINATION', desc: 'Interactable oil lamps, windbreaks, and light redirect prisms.' },
                { src: 'assets/art-web/digital/Out_of_the_mist__by_Psypher5.webp', title: 'Shadow Forest Environment', tag: 'ENVIRONMENT // LIGHTING', desc: 'Dense misty woodland background layers with soft volumetric illumination.' }
            ]
        },
        'voidwarden': {
            title: 'Void Warden',
            tagline: 'Sector Status: Locked Down.',
            status: 'In Orbit Prototype',
            statusClass: 'status-prototype',
            engine: 'Unity (C#)',
            desc: 'A tactical sci-fi defense system simulator. Manage power distribution matrices, synchronize automated point-defense turrets, and coordinate shield vectors to defend orbital mining facilities against escalating hostile incursions.',
            pillars: [
                'Dynamic energy rerouting between shields, CIWS kinetic turrets, and cooling systems.',
                'Vector-based shield modulation against laser sweeps and kinetic swarm missiles.',
                'Automated drone patrol routing and critical infrastructure triage.'
            ],
            tech: ['Unity Engine', 'C# Systems Architecture', 'RTS / Tactical', 'Energy Grid Matrix'],
            conceptArt: [
                { src: 'assets/art-web/digital/peng back.webp', title: 'Tactical Defense Mech (Penguin)', tag: 'VOID WARDEN // UNIT DESIGN', desc: 'Chassis design and armaments for the automated defense units defending outer mining arrays.' }
            ]
        }
    };

    // 3b. Art & Mosaic Gallery Catalog (Compressed WebP + Multi-Image Stacks)
    const artGalleryData = [
        // GAME CONCEPT ART & 3D PROJECTS
        {
            id: 'wick-concept-stack',
            title: 'Adventures of Wick: Visual Suite',
            tag: 'WICK // GAME CONCEPT',
            category: 'concept',
            isConcept: true,
            projectTag: 'wick',
            wide: true,
            images: [
                { src: 'assets/art-web/drawing/AoWConcept01.webp', title: 'Adventures of Wick: Hero Concept', tag: 'WICK // CHARACTER DESIGN', desc: 'Original visual development for the candle sprite, flame dynamics, and molten wax states.' },
                { src: 'assets/art-web/drawing/AoWConcept03.webp', title: 'Illumination Props & Lanterns', tag: 'WICK // PROPS', desc: 'Interactable forest lanterns, oil reservoirs, and refraction crystal models.' },
                { src: 'assets/art-web/digital/Out_of_the_mist__by_Psypher5.webp', title: 'Shadow Forest Environmental Key', tag: 'WICK // ENVIRONMENT', desc: 'Atmospheric volumetric fog and misty forest canopy lighting study.' }
            ]
        },
        {
            id: 'ewefo-concept-stack',
            title: 'ewe-FO: Visual Development Pipeline',
            tag: 'EWE-FO // IN PROGRESS',
            category: 'concept',
            isConcept: true,
            projectTag: 'ewefo',
            images: [
                { src: 'assets/psypher53-2-WE5f5c30150a (1).png', title: 'ewe-FO: Visual Pipeline (In Development)', tag: 'EWE-FO // CONCEPT', desc: 'Concept art and 3D diorama assets currently being authored for the Godot prototype.' }
            ]
        },
        {
            id: 'voidwarden-concept',
            title: 'Void Warden: Tactical Defense & Storyboard',
            tag: 'VOID WARDEN // CONCEPT',
            category: 'concept',
            isConcept: true,
            projectTag: 'voidwarden',
            wide: true,
            images: [
                { src: 'assets/art-web/digital/peng back.webp', title: 'Tactical Defense Mech (Penguin Unit)', tag: 'VOID WARDEN // CHASSIS', desc: 'Armored patrol unit engineered for orbital mine defense and laser perimeter sweeps.' },
                { src: 'assets/art-web/drawing/voidWardenConceptStoryboard1.webp', title: 'Void Warden Storyboard & Defense Grid', tag: 'VOID WARDEN // STORYBOARD', desc: 'Conceptual storyboard mapping orbital defense perimeter breaches and turret placement.' }
            ]
        },

        // DIGITAL ART & 3D MODELLING
        {
            id: 'giger-stack',
            title: 'H.R. Giger Biomechanical Studies',
            tag: 'BIOMECHANICAL // 3D',
            category: 'digital',
            isConcept: true,
            wide: true,
            images: [
                { src: 'assets/art-web/digital/H_R_Giger__by_Psypher5.webp', title: 'Biomechanical Study I', tag: 'GIGER // 3D SURFACE', desc: 'Organic-mechanical fusion study with micro-facet shading and ribbed bone structures.' },
                { src: 'assets/art-web/digital/H_R_Giger_part2_by_Psypher5.webp', title: 'Biomechanical Study II', tag: 'GIGER // TOPOLOGY', desc: 'Detailed surface displacement mapping and high-frequency chitin detailing.' }
            ]
        },
        {
            id: 'lololomorph-stack',
            title: 'Lololomorph Creature Anatomy',
            tag: 'CREATURE DESIGN',
            category: 'digital',
            isConcept: true,
            images: [
                { src: 'assets/art-web/digital/lololomorph.webp', title: 'Lololomorph: Frontal Aspect', tag: 'CREATURE // ANATOMY', desc: 'Volumetric muscle structure and organic carapace rendering.' },
                { src: 'assets/art-web/digital/lololomorph2.webp', title: 'Lololomorph: Profile Dynamics', tag: 'CREATURE // PROFILE', desc: 'Secondary angle examining biomechanical limb joints and posture.' }
            ]
        },
        {
            id: 'lotus-car-stack',
            title: 'Lotus Sports Car 3D Architecture',
            tag: '3D VEHICLE DESIGN',
            category: 'digital',
            wide: true,
            images: [
                { src: 'assets/art-web/digital/CamLotusInsideMainView.webp', title: 'Lotus Cockpit & Interior Ergonomics', tag: 'VEHICLE // COCKPIT', desc: 'Digital dashboard layout, bucket seat topology, and steering geometry.' },
                { src: 'assets/art-web/digital/CamLotusBackOutsideCloseup.webp', title: 'Lotus Rear Aero & Diffuser Closeup', tag: 'VEHICLE // EXTERIOR', desc: 'Aerodynamic rear diffuser, carbon-weave textures, and dual exhaust placement.' }
            ]
        },
        {
            id: 'rose-sculpt-stack',
            title: 'Organic Rose & Floral Sculpt',
            tag: '3D BOTANICAL',
            category: 'digital',
            images: [
                { src: 'assets/art-web/digital/Top_of_the_rose_by_Psypher5.webp', title: 'Rose Sculpt: Petal Apex', tag: 'BOTANICAL // SURFACE', desc: 'Spiral petal density, natural curve distortion, and subsurface scattering.' },
                { src: 'assets/art-web/digital/Rose_by_Psypher5.webp', title: 'Rose Sculpt: Isometric Perspective', tag: 'BOTANICAL // 3D', desc: 'Full-flower isometric presentation exploring translucent leaf shading.' }
            ]
        },
        {
            id: 'scratched-heart-stack',
            title: 'Scratched Heart Series',
            tag: 'SURREAL DIGITAL',
            category: 'digital',
            images: [
                { src: 'assets/art-web/digital/My_scratched_heart_by_Psypher5.webp', title: 'Scratched Heart: State I', tag: 'SURREAL // DIGITAL', desc: 'Textured wear and procedural surface weathering on hard-surface heart forms.' },
                { src: 'assets/art-web/digital/My_scratched_heart_part2_by_Psypher5.webp', title: 'Scratched Heart: State II', tag: 'SURREAL // MATERIAL', desc: 'Chromatic aberration and deep fissure displacement passes.' }
            ]
        },
        {
            id: 'with-love-stack',
            title: 'With Love // Kinetic Explosion',
            tag: 'DIGITAL SCULPT',
            category: 'digital',
            images: [
                { src: 'assets/art-web/digital/With_love_by_Psypher5.webp', title: 'With Love', tag: 'DIGITAL SCULPT', desc: 'Ethereal glowing heart sculpture with ambient light reflections.' },
                { src: 'assets/art-web/digital/My_heart____exploded__by_Psypher5.webp', title: 'Heart Exploded', tag: 'KINETIC PARTICLES', desc: 'Particle burst and dynamic shattering volume displacement.' },
                { src: 'assets/art-web/digital/Love_sweet_love__by_Psypher5.webp', title: 'Love Sweet Love', tag: 'ABSTRACT FORM', desc: 'Fluid metallic ribbon topology and iridescent reflections.' }
            ]
        },
        {
            id: 'coniglio-stack',
            title: 'Coniglio Character Explorations',
            tag: 'CHARACTER ART',
            category: 'digital',
            images: [
                { src: 'assets/art-web/digital/Coniglio_by_Psypher5.webp', title: 'Coniglio Character Study', tag: 'CHARACTER // 3D', desc: 'Stylized proportions, silhouette weighting, and playful character sculpting.' },
                { src: 'assets/art-web/digital/CongilioBunny.webp', title: 'Coniglio Bunny Render', tag: 'CHARACTER // POSE', desc: 'Expression sheet and material shader validation.' }
            ]
        },
        {
            id: 'hunter-study',
            title: 'Hunter Entity & Silhouette',
            tag: 'FIGURE // DIGITAL',
            category: 'digital',
            images: [
                { src: 'assets/art-web/digital/hunter.webp', title: 'Hunter Entity', tag: 'FIGURE // VOLUMETRIC', desc: 'Dramatic rim lighting, athletic pose silhouette, and atmospheric haze.' },
                { src: 'assets/art-web/digital/body.webp', title: 'Anatomical Form Render', tag: 'FIGURE // LIGHTING', desc: 'Musculature lighting pass and edge highlight calibration.' }
            ]
        },

        // DRAWINGS & PHYSICAL SKETCHBOOKS
        {
            id: 'feb-sketchbook-stack',
            title: 'Sketchbook Series — Feb 2015',
            tag: 'SKETCHBOOK // PENCIL',
            category: 'drawing',
            isConcept: true,
            wide: true,
            images: [
                { src: 'assets/art-web/drawing/20150206_173255.webp', title: 'Sketchbook Feb 06, 2015 — Page 1', tag: 'SKETCHBOOK // MORPHOLOGY', desc: 'Observational anatomy, dynamic mechanical pivots, and posture exploration.' },
                { src: 'assets/art-web/drawing/20150206_173310.webp', title: 'Sketchbook Feb 06, 2015 — Page 2', tag: 'SKETCHBOOK // STUDIES', desc: 'Cross-hatching technique, silhouette rhythm, and organic mechanical details.' },
                { src: 'assets/art-web/drawing/20150206_173321.webp', title: 'Sketchbook Feb 06, 2015 — Page 3', tag: 'SKETCHBOOK // FORMS', desc: 'Rapid gestural figure studies and spatial framing exercises.' },
                { src: 'assets/art-web/drawing/20150206_173327.webp', title: 'Sketchbook Feb 06, 2015 — Page 4', tag: 'SKETCHBOOK // ANATOMY', desc: 'Musculoskeletal details and dynamic joint articulation passes.' }
            ]
        },
        {
            id: 'mar-sketchbook-stack',
            title: 'Botanical & Organic Studies — Mar 2015',
            tag: 'SKETCHBOOK // BOTANY',
            category: 'drawing',
            wide: true,
            images: [
                { src: 'assets/art-web/drawing/20150303_190309.webp', title: 'March 03, 2015 — Botanical Form', tag: 'SKETCHBOOK // GRAPHITE', desc: 'Fine-point pencil rendering of leaf venation and natural growth spirals.' },
                { src: 'assets/art-web/drawing/20150303_190334.webp', title: 'March 03, 2015 — Petal Structure', tag: 'SKETCHBOOK // OBSERVATION', desc: 'Delicate line work examining overlapping organic folds and contour shadow.' },
                { src: 'assets/art-web/drawing/20150303_190342.webp', title: 'March 03, 2015 — Full Study', tag: 'SKETCHBOOK // COMPOSITION', desc: 'Complete botanical page with tonal depth and lighting balance.' }
            ]
        },
        {
            id: 'late-mar-sketchbook-stack',
            title: 'Observational Studies — Mid March 2015',
            tag: 'SKETCHBOOK // INK',
            category: 'drawing',
            images: [
                { src: 'assets/art-web/drawing/20150310_101044.webp', title: 'March 10, 2015 — Form Study', tag: 'SKETCHBOOK // PENCIL', desc: 'Structural graphite study focusing on organic volume and mass.' },
                { src: 'assets/art-web/drawing/20150311_134632.webp', title: 'March 11, 2015 — Page A', tag: 'SKETCHBOOK // LINEWORK', desc: 'Precise line weight modulation and shadow hatch density.' },
                { src: 'assets/art-web/drawing/20150311_180046.webp', title: 'March 11, 2015 — Page B', tag: 'SKETCHBOOK // TONE', desc: 'Deep shadow gradients and structural framing.' }
            ]
        },
        {
            id: 'classic-studies-stack',
            title: 'Classic Morphological Studies Collection',
            tag: 'CROSSHATCH // INK & PENCIL',
            category: 'drawing',
            wide: true,
            images: [
                { src: 'assets/art-web/drawing/495565798219.webp', title: 'Morphological Study I', tag: 'CROSSHATCH // ANATOMY', desc: 'Exploratory cross-hatching and muscle group tension.' },
                { src: 'assets/art-web/drawing/495566003219.webp', title: 'Morphological Study II', tag: 'CROSSHATCH // INK', desc: 'Ink contour lines mapping body dynamics and weight transfer.' },
                { src: 'assets/art-web/drawing/495566163219.webp', title: 'Morphological Study III', tag: 'CROSSHATCH // FIGURE', desc: 'Torso dynamics, skeletal landmarks, and perspective foreshortening.' },
                { src: 'assets/art-web/drawing/495566238219.webp', title: 'Morphological Study IV', tag: 'CROSSHATCH // PENCIL', desc: 'Fine pencil shading balancing sharp edges against soft core shadows.' },
                { src: 'assets/art-web/drawing/495566388219.webp', title: 'Morphological Study V', tag: 'CROSSHATCH // POSE', desc: 'Dynamic rotational pose study with structural construction lines.' },
                { src: 'assets/art-web/drawing/495566513219.webp', title: 'Morphological Study VI', tag: 'CROSSHATCH // TONE', desc: 'High-contrast ink pass defining dramatic directional lighting.' },
                { src: 'assets/art-web/drawing/495606148219.webp', title: 'Morphological Study VII', tag: 'CROSSHATCH // CLOSING', desc: 'Concluding anatomical master study examining biological flow.' }
            ]
        },
        {
            id: 'env-sketches-stack',
            title: 'Environmental & Architecture Concepts 2014',
            tag: 'CONCEPT // INK',
            category: 'drawing',
            isConcept: true,
            images: [
                { src: 'assets/art-web/drawing/20141117_182328.webp', title: 'Architecture Study I', tag: 'PERSPECTIVE // INK', desc: 'Multi-point perspective sketch of architectural angles and building facade depth.' },
                { src: 'assets/art-web/drawing/20141118_141429.webp', title: 'Architecture Study II', tag: 'PERSPECTIVE // PENCIL', desc: 'Structural lines, elevation framing, and environmental concept pass.' }
            ]
        },
        {
            id: 'sonic-fanart',
            title: 'Sonic 3D Dynamic Tribute',
            tag: 'SEGA // FAN ART',
            category: 'drawing',
            images: [
                { src: 'assets/art-web/drawing/Sonic_3D_by_Psypher5.webp', title: 'Sonic 3D Dynamic Tribute', tag: 'SEGA // ISOMETRIC', desc: 'Pencil drawing celebrating classic SEGA isometric character styling and speed lines.' }
            ]
        },
        {
            id: 'xeno-skulls-stack',
            title: 'Xeno Creatures & Cranial Studies',
            tag: 'CREATURE // ANATOMY',
            category: 'drawing',
            isConcept: true,
            images: [
                { src: 'assets/art-web/drawing/alien_by_Psypher5.webp', title: 'Xenomorph Cranial Profile', tag: 'ALIEN // INK', desc: 'Elongated alien skull geometry with bio-mechanical detailing.' },
                { src: 'assets/art-web/drawing/skull_face_2_by_Psypher5.webp', title: 'Skull Face Anatomy II', tag: 'SKULL // GRAPHITE', desc: 'Bone contouring, eye socket depth, and textural shading.' },
                { src: 'assets/art-web/drawing/manken.webp', title: 'Manken Mannequin Study', tag: 'FIGURE // PROPORTIONS', desc: 'Articulated mannequin pose study testing joint rotation constraints.' }
            ]
        },

        // PHOTOGRAPHY & MACRO STUDIES
        {
            id: 'macro-triptych-stack',
            title: 'Macro Flora & Refraction Triptych',
            tag: 'MACRO PHOTOGRAPHY',
            category: 'photography',
            wide: true,
            images: [
                { src: 'assets/art-web/photography/20110719_164333.webp', title: 'Dewdrop Refraction I', tag: 'MACRO // REFRACTION', desc: 'Extreme shallow depth of field capturing crystal-clear droplet optical refraction.' },
                { src: 'assets/art-web/photography/20110719_164340.webp', title: 'Dewdrop Refraction II', tag: 'MACRO // BOTANY', desc: 'Spherical surface tension and natural light diffraction across botanical foliage.' },
                { src: 'assets/art-web/photography/20110719_164354.webp', title: 'Dewdrop Refraction III', tag: 'MACRO // LIGHTING', desc: 'Golden-hour backlight revealing microscopic surface texture and water bead clarity.' }
            ]
        },
        {
            id: 'blooms-stack',
            title: 'Botanical Refraction & Blooms',
            tag: 'NATURE // MACRO',
            category: 'photography',
            wide: true,
            images: [
                { src: 'assets/art-web/photography/White_bloom_by_Psypher5.webp', title: 'White Bloom Petal Texture', tag: 'FLORA // MACRO', desc: 'Soft petal velvety texture and delicate pollen micro-structures.' },
                { src: 'assets/art-web/photography/Blue_drops_by_Psypher5.webp', title: 'Blue Drops on Foliage', tag: 'WATER // REFRACTION', desc: 'Cool-tone colour harmony with bead formation on vibrant leaves.' },
                { src: 'assets/art-web/photography/Daff_by_Psypher5.webp', title: 'Daffodil Trumpet Geometry', tag: 'BOTANICAL // NATURAL', desc: 'Vibrant yellow trumpet geometry with natural ambient daylight.' },
                { src: 'assets/art-web/photography/Ball_by_Psypher5.webp', title: 'Spherical Droplet Lens', tag: 'OPTICS // NATURE', desc: 'Perfect spherical drop acting as a natural fisheye lens for background scenery.' }
            ]
        },
        {
            id: 'neural-texture-study',
            title: 'Neural Texture & Synthesis Pass',
            tag: 'PROCEDURAL // AI',
            category: 'photography',
            isConcept: true,
            images: [
                { src: 'assets/art-web/photography/e88c590860b161eb2e2e815b5018607fresNetFinal_8.webp', title: 'Neural Feature Synthesis Matrix', tag: 'PROCEDURAL // TEXTURE', desc: 'Visual examination of deep residual convolutional feature maps and spatial texture synthesis.' }
            ]
        }
    ];

    // 4. SPA Morphing Tabs State Management
    const appContainer = document.getElementById('app-container');
    const subpages = document.querySelectorAll('.subpage');
    const dockButtons = document.querySelectorAll('.nav-dock-btn');

    window.switchTab = function(tabId) {
        if (!appContainer) return;
        
        const targetBtn = document.querySelector(`.nav-dock-btn[data-tab="${tabId}"]`);
        if (targetBtn && targetBtn.classList.contains('active')) {
            goHome();
            return;
        }
        
        appContainer.classList.add('state-subpage-active');
        
        subpages.forEach(page => {
            if (page.id === `subpage-${tabId}`) {
                page.classList.add('active');
                page.scrollTop = 0;
            } else {
                page.classList.remove('active');
            }
        });
        
        dockButtons.forEach(btn => {
            if (btn.getAttribute('data-tab') === tabId) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    };

    window.goHome = function() {
        if (!appContainer) return;
        appContainer.classList.remove('state-subpage-active');
        subpages.forEach(page => page.classList.remove('active'));
        dockButtons.forEach(btn => btn.classList.remove('active'));
    };

    // Click outside active subpage to return to homepage
    document.addEventListener('click', function(e) {
        if (!appContainer || !appContainer.classList.contains('state-subpage-active')) return;
        // Ignore clicks from elements that were removed from the DOM during event handling (e.g. timeline node re-rendering)
        if (!document.body.contains(e.target)) return;

        const isSubpage = e.target.closest('.subpage');
        const isNavDock = e.target.closest('#bottom-nav');
        const isModal = e.target.closest('.modal-wrapper') || e.target.closest('.modal-overlay') || e.target.closest('#art-lightbox') || e.target.closest('#game-theater-modal');
        const isHeader = e.target.closest('#site-header') || e.target.closest('.header-brand');

        if (!isSubpage && !isNavDock && !isModal && !isHeader) {
            window.goHome();
        }
    });

    // 5. Commercial Smartphone App Selector
    window.selectApp = function(appKey) {
        const data = commercialApps[appKey];
        if (!data) return;

        document.querySelectorAll('.app-icon-item').forEach(el => el.classList.remove('active'));
        const activeIcon = document.querySelector(`.app-icon-item[onclick*="${appKey}"]`);
        if (activeIcon) activeIcon.classList.add('active');

        // Update external dossier panel
        const studioEl = document.getElementById('dossier-studio');
        const platformEl = document.getElementById('dossier-platform');
        const titleEl = document.getElementById('dossier-title');
        const taglineEl = document.getElementById('dossier-tagline');
        const descEl = document.getElementById('dossier-desc');
        const bulletList = document.getElementById('dossier-bullet-list');
        const techTags = document.getElementById('dossier-tech-tags');
        const studioLink = document.getElementById('dossier-studio-link');

        if (studioEl) studioEl.textContent = data.studio;
        if (platformEl) platformEl.textContent = data.platform;
        if (titleEl) titleEl.textContent = data.title;
        if (taglineEl) taglineEl.textContent = data.tagline;
        if (descEl) descEl.textContent = data.desc;

        if (bulletList) {
            bulletList.innerHTML = '';
            data.bullets.forEach(b => {
                const li = document.createElement('li');
                li.textContent = b;
                bulletList.appendChild(li);
            });
        }

        if (techTags) {
            techTags.innerHTML = '';
            data.tags.forEach(t => {
                const span = document.createElement('span');
                span.className = 'tech-tag';
                span.textContent = t;
                techTags.appendChild(span);
            });
        }

        if (studioLink && data.studioUrl) {
            studioLink.href = data.studioUrl;
            studioLink.style.display = 'inline-flex';
        }
    };

    // 6. Indie 3D Game Box Selection (4 Boxes: ewe-FO, Moments, Wick, Void Warden)
    let activeIndieKey = 'ewefo';

    window.selectIndieBox = function(boxKey) {
        const data = indieBoxes[boxKey];
        if (!data) return;
        activeIndieKey = boxKey;

        document.querySelectorAll('.retro-console-box, .game-box-3d').forEach(box => {
            if (box.getAttribute('data-box') === boxKey) {
                box.classList.add('active');
            } else {
                box.classList.remove('active');
            }
        });

        const statusEl = document.getElementById('indie-status');
        const engineEl = document.getElementById('indie-engine');
        const titleEl = document.getElementById('indie-title');
        const taglineEl = document.getElementById('indie-tagline');
        const descEl = document.getElementById('indie-desc');
        const pillarsList = document.getElementById('indie-pillars-list');
        const techPills = document.getElementById('indie-tech-pills');
        const playContainer = document.getElementById('play-action-container');
        const playBtn = document.getElementById('btn-play-game');

        if (statusEl) {
            statusEl.textContent = data.status;
            statusEl.className = `status-tag ${data.statusClass}`;
        }
        if (engineEl) engineEl.textContent = data.engine;
        if (titleEl) titleEl.textContent = data.title;
        if (taglineEl) taglineEl.textContent = data.tagline;
        if (descEl) descEl.textContent = data.desc;

        if (pillarsList) {
            pillarsList.innerHTML = '';
            data.pillars.forEach(p => {
                const li = document.createElement('li');
                li.textContent = p;
                pillarsList.appendChild(li);
            });
        }

        if (techPills) {
            techPills.innerHTML = '';
            data.tech.forEach(t => {
                const span = document.createElement('span');
                span.className = 'tech-tag';
                span.textContent = t;
                techPills.appendChild(span);
            });
        }

        // Toggle Play in Browser Button
        if (playContainer && playBtn) {
            if (data.playableUrl) {
                playContainer.style.display = 'flex';
                playBtn.innerHTML = `<span class="play-icon">&#x25B6;</span> Play ${data.title} in Browser`;
            } else {
                playContainer.style.display = 'none';
            }
        }

        // Render concept art preview thumbnails for the active indie game
        renderIndieConceptGallery(boxKey);
    };

    // 7. Live Game Theater Modal Engine
    window.launchActiveGame = function() {
        const game = indieBoxes[activeIndieKey];
        if (game && game.playableUrl) {
            openGameTheater(activeIndieKey);
        }
    };

    window.openGameTheater = function(key) {
        const game = indieBoxes[key];
        if (!game || !game.playableUrl) return;

        const modal = document.getElementById('game-theater-modal');
        const iframe = document.getElementById('theater-iframe');
        const titleEl = document.getElementById('theater-title');
        if (!modal || !iframe) return;

        if (titleEl) titleEl.textContent = `${game.title} — ${game.tagline}`;
        iframe.src = game.playableUrl;
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
    };

    window.closeGameTheater = function() {
        const modal = document.getElementById('game-theater-modal');
        const iframe = document.getElementById('theater-iframe');
        if (!modal) return;

        modal.classList.remove('show');
        if (iframe) iframe.src = ''; // Instantly halts audio, requestAnimationFrame, and WebGL loops
        document.body.style.overflow = '';
    };

    window.closeGameTheaterOnOutsideClick = function(e) {
        const modal = document.getElementById('game-theater-modal');
        if (e.target === modal) {
            closeGameTheater();
        }
    };

    window.toggleTheaterFullscreen = function() {
        const iframe = document.getElementById('theater-iframe');
        if (!iframe) return;
        if (!document.fullscreenElement) {
            iframe.requestFullscreen().catch(err => console.log('Fullscreen error:', err));
        } else {
            document.exitFullscreen().catch(err => console.log('Exit fullscreen error:', err));
        }
    };

    // Copy Email to Clipboard helper
    window.copyEmailToClipboard = function(e) {
        if (e) e.preventDefault();
        const email = 'tom@psypher5.co.uk';
        navigator.clipboard.writeText(email).then(() => {
            const toast = document.getElementById('copy-email-toast');
            if (toast) {
                toast.textContent = 'Copied to clipboard! 📋';
                toast.classList.add('show');
                setTimeout(() => toast.classList.remove('show'), 2500);
            }
        }).catch(() => {
            window.location.href = `mailto:${email}`;
        });
    };

    // Render Concept Art thumbnails inside the indie game dossier
    function renderIndieConceptGallery(boxKey) {
        const galleryEl = document.getElementById('indie-concept-gallery');
        if (!galleryEl) return;
        galleryEl.innerHTML = '';

        const game = indieBoxes[boxKey];
        if (!game || !game.conceptArt || game.conceptArt.length === 0) return;

        game.conceptArt.forEach((art, index) => {
            const thumb = document.createElement('div');
            thumb.className = 'concept-thumb-item';
            thumb.title = `Click to inspect: ${art.title}`;

            thumb.innerHTML = `
                <div class="concept-thumb-img-box">
                    <img src="${art.src}" alt="${art.title}" class="concept-thumb-img" loading="lazy">
                    <div class="concept-thumb-overlay">
                        <span class="concept-thumb-zoom">🔍 Zoom</span>
                    </div>
                </div>
                <div class="concept-thumb-info">
                    <span class="concept-thumb-tag">${art.tag}</span>
                    <h5 class="concept-thumb-title">${art.title}</h5>
                </div>
            `;

            // Clicking opens the concept art directly inside the interactive Lightbox
            thumb.onclick = () => {
                const stackPayload = {
                    title: `${game.title} Concept Suite`,
                    category: 'concept',
                    images: game.conceptArt
                };
                openArtStack(stackPayload, index);
            };

            galleryEl.appendChild(thumb);
        });
    }

    // 8. Mosaic Dynamic Art Gallery & Multi-Image Stacking Engine
    let currentArtCategory = 'all';

    window.filterMosaic = function(category) {
        currentArtCategory = category;

        const pills = document.querySelectorAll('.mosaic-filter-bar .filter-pill');
        pills.forEach(pill => {
            if (pill.getAttribute('data-category') === category) {
                pill.classList.add('active');
            } else {
                pill.classList.remove('active');
            }
        });

        renderArtGallery(category);
    };

    function renderArtGallery(category) {
        const grid = document.getElementById('mosaic-grid');
        if (!grid) return;
        grid.innerHTML = '';

        const filtered = artGalleryData.filter(item => {
            if (category === 'all') return true;
            if (category === 'concept') return item.isConcept || item.category === 'concept';
            return item.category === category;
        });

        filtered.forEach(item => {
            const isStack = item.images.length > 1;
            const primaryImg = item.images[0];

            const card = document.createElement('div');
            card.className = `mosaic-item${item.wide ? ' mosaic-wide' : ''}${isStack ? ' is-stack' : ''}`;
            card.setAttribute('data-cat', item.category);

            // Stack count indicator
            const stackBadgeHTML = isStack
                ? `<span class="stack-count-badge">📚 ${item.images.length} items</span>`
                : '';

            // Visual pseudo stacked layers behind the primary card
            const stackLayersHTML = isStack
                ? `<div class="stack-layer layer-back-2"></div><div class="stack-layer layer-back-1"></div>`
                : '';

            card.innerHTML = `
                ${stackLayersHTML}
                <div class="mosaic-img-box">
                    <img src="${primaryImg.src}" alt="${item.title}" class="mosaic-img" loading="lazy">
                    ${stackBadgeHTML}
                    <div class="mosaic-overlay">
                        <div class="mosaic-overlay-content">
                            <div class="mosaic-meta-row">
                                <span class="mosaic-tag">${item.tag}</span>
                                ${isStack ? `<span class="mosaic-stack-hint">Click to flip stack ↗</span>` : ''}
                            </div>
                            <h4>${item.title}</h4>
                            <p>${item.desc || (primaryImg && primaryImg.desc) || ''}</p>
                        </div>
                    </div>
                </div>
            `;

            card.onclick = () => {
                openArtStack(item, 0);
            };

            grid.appendChild(card);
        });
    }

    // 9. Experience Modal Operations
    const modal = document.getElementById('experience-modal');
    
    window.openModal = function(key) {
        const data = experienceData[key];
        if (!data || !modal) return;
        
        document.getElementById('modal-title').textContent = data.title;
        document.getElementById('modal-company-meta').textContent = data.company;
        
        const descArea = document.getElementById('modal-desc');
        descArea.innerHTML = '';
        
        const badgesWrapper = document.createElement('div');
        badgesWrapper.className = 'modal-badges-wrapper';
        
        const periodBadge = document.createElement('span');
        periodBadge.className = 'modal-badge period-token';
        periodBadge.textContent = data.period;
        badgesWrapper.appendChild(periodBadge);
        
        const locBadge = document.createElement('span');
        locBadge.className = 'modal-badge location-token';
        locBadge.textContent = data.location;
        badgesWrapper.appendChild(locBadge);
        
        descArea.appendChild(badgesWrapper);
        
        const ul = document.createElement('ul');
        ul.className = 'modal-bullets';
        data.bullets.forEach(bullet => {
            const li = document.createElement('li');
            li.textContent = bullet;
            ul.appendChild(li);
        });
        descArea.appendChild(ul);
        
        if (data.skills && data.skills.length > 0) {
            const skillsWrapper = document.createElement('div');
            skillsWrapper.className = 'skills-container';
            
            const skillsTitle = document.createElement('div');
            skillsTitle.className = 'skills-title';
            skillsTitle.textContent = 'Skills & Technologies';
            skillsWrapper.appendChild(skillsTitle);
            
            const tokensArea = document.createElement('div');
            tokensArea.className = 'skills-tokens-wrapper';
            
            data.skills.forEach(skill => {
                const token = document.createElement('span');
                token.className = 'modal-badge skill-token';
                token.textContent = skill;
                tokensArea.appendChild(token);
            });
            
            skillsWrapper.appendChild(tokensArea);
            descArea.appendChild(skillsWrapper);
        }
        
        modal.classList.add('show');
    };

    window.closeModal = function() {
        if (!modal) return;
        modal.classList.remove('show');
    };

    window.closeModalOnOutsideClick = function(event) {
        if (event.target === modal) {
            closeModal();
        }
    };

    // 10. Interactive Multi-Image Lightbox Modal
    const artLightbox = document.getElementById('art-lightbox');
    let activeStack = null;
    let activeStackIndex = 0;

    window.openArtStack = function(stackData, startIndex = 0) {
        if (!artLightbox || !stackData) return;
        activeStack = stackData;
        activeStackIndex = Math.max(0, Math.min(stackData.images.length - 1, startIndex));
        renderLightboxActiveSlide();
        artLightbox.classList.add('show');
    };

    // Backwards-compatible single-image opener
    window.openArtLightbox = function(imgSrc, title, tag, desc) {
        const payload = {
            title: title,
            category: 'digital',
            images: [{ src: imgSrc, title: title, tag: tag, desc: desc }]
        };
        openArtStack(payload, 0);
    };

    function renderLightboxActiveSlide() {
        if (!activeStack || !activeStack.images[activeStackIndex]) return;
        const current = activeStack.images[activeStackIndex];
        const total = activeStack.images.length;

        const imgEl = document.getElementById('lightbox-img');
        const titleEl = document.getElementById('lightbox-title');
        const tagEl = document.getElementById('lightbox-tag');
        const descEl = document.getElementById('lightbox-desc');
        const counterEl = document.getElementById('lightbox-counter');
        const badgeEl = document.getElementById('lightbox-badge');
        const prevBtn = document.getElementById('lightbox-prev');
        const nextBtn = document.getElementById('lightbox-next');
        const dotsStrip = document.getElementById('lightbox-dots');

        if (imgEl) {
            imgEl.style.opacity = '0.5';
            imgEl.src = current.src;
            imgEl.onload = () => { imgEl.style.opacity = '1'; };
        }

        if (titleEl) titleEl.textContent = current.title || activeStack.title;
        if (tagEl) tagEl.textContent = current.tag || activeStack.tag;
        if (descEl) descEl.textContent = current.desc || activeStack.desc;

        if (counterEl) {
            counterEl.textContent = `${activeStackIndex + 1} / ${total}`;
            counterEl.style.display = total > 1 ? 'block' : 'none';
        }

        if (badgeEl) {
            if (total > 1) {
                badgeEl.textContent = `STACK (${activeStackIndex + 1} of ${total})`;
                badgeEl.style.display = 'inline-block';
            } else {
                badgeEl.style.display = 'none';
            }
        }

        if (prevBtn) {
            prevBtn.style.display = total > 1 ? 'flex' : 'none';
            prevBtn.disabled = activeStackIndex === 0;
        }

        if (nextBtn) {
            nextBtn.style.display = total > 1 ? 'flex' : 'none';
            nextBtn.disabled = activeStackIndex === total - 1;
        }

        // Render Pagination Dots
        if (dotsStrip) {
            dotsStrip.innerHTML = '';
            if (total > 1) {
                activeStack.images.forEach((_, i) => {
                    const dot = document.createElement('span');
                    dot.className = `lightbox-dot${i === activeStackIndex ? ' active' : ''}`;
                    dot.onclick = (e) => {
                        e.stopPropagation();
                        activeStackIndex = i;
                        renderLightboxActiveSlide();
                    };
                    dotsStrip.appendChild(dot);
                });
            }
        }
    }

    window.stepLightboxImage = function(dir, event) {
        if (event) event.stopPropagation();
        if (!activeStack) return;
        const total = activeStack.images.length;
        const newIndex = activeStackIndex + dir;
        if (newIndex >= 0 && newIndex < total) {
            activeStackIndex = newIndex;
            renderLightboxActiveSlide();
        }
    };

    window.closeArtLightbox = function() {
        if (!artLightbox) return;
        artLightbox.classList.remove('show');
        activeStack = null;
    };

    window.closeArtLightboxOnOutsideClick = function(event) {
        if (event.target === artLightbox) {
            closeArtLightbox();
        }
    };

    // 11. Interactive Contact Email Form Handler
    window.handleContactSubmit = function(e) {
        e.preventDefault();
        const name = document.getElementById('form-name')?.value;
        const email = document.getElementById('form-email')?.value;
        const subject = document.getElementById('form-subject')?.value;
        const message = document.getElementById('form-message')?.value;
        const statusMsg = document.getElementById('form-status-msg');

        if (statusMsg) {
            statusMsg.textContent = 'Opening your email client...';
            statusMsg.style.color = 'var(--accent-color)';
        }

        const mailtoUrl = `mailto:tom.woodward@live.co.uk?subject=${encodeURIComponent(subject || 'Message from Portfolio')}&body=${encodeURIComponent(`Hi Tom,\n\n${message}\n\nFrom: ${name} (${email})`)}`;
        window.location.href = mailtoUrl;

        setTimeout(() => {
            if (statusMsg) {
                statusMsg.textContent = 'Thank you! Email client triggered.';
                statusMsg.style.color = '#34d399';
            }
        }, 1500);
    };

    // Global Keyboard Listeners (Escape, Arrow Navigation)
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
            closeArtLightbox();
            closeGameTheater();
        } else if (artLightbox && artLightbox.classList.contains('show')) {
            if (e.key === 'ArrowLeft') {
                stepLightboxImage(-1);
            } else if (e.key === 'ArrowRight') {
                stepLightboxImage(1);
            }
        }
    });

    // Touch Swipe Gestures for Lightbox (Mobile)
    (function initLightboxSwipe() {
        const lightboxWrapper = artLightbox ? artLightbox.querySelector('.lightbox-wrapper') : null;
        if (!lightboxWrapper) return;

        let touchStartX = 0;
        let touchStartY = 0;
        let touchEndX = 0;
        let touchEndY = 0;
        const SWIPE_THRESHOLD = 50;

        lightboxWrapper.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
            touchStartY = e.changedTouches[0].screenY;
        }, { passive: true });

        lightboxWrapper.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            touchEndY = e.changedTouches[0].screenY;

            const deltaX = touchEndX - touchStartX;
            const deltaY = touchEndY - touchStartY;

            // Only register horizontal swipes (ignore vertical scroll)
            if (Math.abs(deltaX) > SWIPE_THRESHOLD && Math.abs(deltaX) > Math.abs(deltaY)) {
                if (deltaX < 0) {
                    stepLightboxImage(1); // Swipe left → next
                } else {
                    stepLightboxImage(-1); // Swipe right → prev
                }
            }
        }, { passive: true });
    })();

    // 12. Career Timeline & Wave Nodes Manager
    const careerMilestones = [
        { key: 'classified-defence', date: 'Present', year: "'26", role: 'Senior Engineer - Software Engineering (Assurance)', company: '[CLASSIFIED]', tags: [], isMystery: true },
        { key: 'synopsys-ansys',     date: 'Feb 2023 — Apr 2026', year: "'23", role: 'Staff R&D Engineer / Tech Architect', company: 'Synopsys & Ansys',          tags: ['HPC Cloud','Agentic AI','Playwright','Cypress'] },
        { key: 'malvern',            date: 'Sep 2018 — Feb 2023', year: "'18", role: 'Software Test Engineer',             company: 'Malvern Panalytical',          tags: ['Ranorex','UX Systems','Azure DevOps'] },
        { key: 'sega',               date: 'Aug 2017 — Apr 2018', year: "'17", role: 'QA Tester',                          company: 'SEGA Hardlight',               tags: ['Sonic Franchise','PC QA','Mobile SDKs'] },
        { key: 'connect',            date: 'Oct 2016 — Jul 2017', year: "'16", role: 'QA & Automation Tester',             company: 'Connect Group (JLR)',           tags: ['Java','Cucumber BDD','Selenium'] },
        { key: 'ndevr',              date: 'Aug 2016 — Sep 2016', year: "'16", role: 'Associate Project Manager',          company: 'ndevr Ltd',                    tags: ['Agile Scrum','IoT Incubator'] },
        { key: 'adactus',            date: 'Oct 2015 — Jul 2016', year: "'15", role: 'Junior QA Tester',                   company: 'Adactus & EDM Group',          tags: ['Pizza Hut Loyalty','Cross-Browser'] },
        { key: 'silverlining',       date: 'Jun 2015 — Sep 2015', year: "'15", role: 'QA Lead (Co-founder)',               company: 'Silver Lining QA',          tags: ['Dawn of Titans','SkyScrappers'] },
        { key: 'zynga',              date: 'Jul 2014 — May 2015', year: "'14", role: 'Game Tester',                        company: 'Zynga / NaturalMotion',        tags: ['CSR Racing','Euphoria Physics'] },
        { key: 'tinderstone',        date: 'Nov 2013 — Aug 2014', year: "'13", role: '3D Artist & QA Tester',              company: 'Tinderstone & Syscom',         tags: ['3D Retopology','3ds Max'] },
        { key: 'ticketmaster',       date: 'Mar 2013 — Sep 2013', year: "'13", role: 'Graduate QA Engineer',               company: 'Ticketmaster / LiveNation',    tags: ['Agile QA','LiveNation'] },
        { key: 'staffuni',           date: 'Sep 2007 — Feb 2013', year: "'07", role: 'MEng Games Design & 3D Modelling',  company: 'Staffordshire University',     tags: ["Master's (MEng)",'Engine Tech'] }
    ];

    let careerIndex = 0;

    // Render nodes directly along the wave track
    function renderWaveNodes() {
        const nodesContainer = document.getElementById('wave-milestone-nodes');
        if (!nodesContainer) return;
        nodesContainer.innerHTML = '';

        const total = careerMilestones.length;
        careerMilestones.forEach((m, i) => {
            const node = document.createElement('div');
            node.className = `wave-node${i === careerIndex ? ' active' : ''}${m.isMystery ? ' node-mystery' : ''}`;
            
            // X position spaced evenly along track (6% to 94%)
            const xPercent = (i / (total - 1)) * 88 + 6;
            node.style.left = `${xPercent}%`;

            const mysteryBadge = m.isMystery ? '<div class="sonar-ring"></div>' : '';

            node.innerHTML = `
                <div class="node-dot">${mysteryBadge}</div>
                <span class="node-label">${m.year}</span>
                <div class="node-tooltip">${m.company}${m.isMystery ? ' 🌊⚓' : ''}</div>
            `;
            node.onclick = (e) => {
                if (e) e.stopPropagation();
                careerIndex = i;
                renderCareer();
            };
            nodesContainer.appendChild(node);
        });
    }

    function renderCareer() {
        const m = careerMilestones[careerIndex];
        if (!m) return;

        // Update single stable center card
        const dateEl = document.getElementById('panel-date');
        const indexEl = document.getElementById('panel-index');
        const roleEl = document.getElementById('panel-role');
        const companyEl = document.getElementById('panel-company');
        const tagsEl = document.getElementById('panel-tags');
        const singleCard = document.getElementById('career-single-card');

        if (singleCard) {
            singleCard.style.opacity = '0.7';
            singleCard.style.transform = 'scale(0.99)';
            if (m.isMystery) {
                singleCard.classList.add('card-classified');
            } else {
                singleCard.classList.remove('card-classified');
            }
            setTimeout(() => {
                singleCard.style.opacity = '1';
                singleCard.style.transform = 'scale(1)';
            }, 100);
        }

        if (dateEl) dateEl.textContent = m.date;
        if (indexEl) indexEl.textContent = `${String(careerIndex + 1).padStart(2, '0')} / ${String(careerMilestones.length).padStart(2, '0')}`;
        if (roleEl) roleEl.textContent = m.role;
        if (companyEl) companyEl.textContent = m.company;
        
        if (tagsEl) {
            if (m.tags && m.tags.length > 0) {
                tagsEl.innerHTML = m.tags.map(t => `<span class="q-tag">${t}</span>`).join('');
            } else if (m.isMystery) {
                tagsEl.innerHTML = `<span class="q-tag q-tag-classified">🌊 🤫 SUB-SURFACE // CLASSIFIED</span>`;
            } else {
                tagsEl.innerHTML = '';
            }
        }

        // Progress indicator dots
        const dotsEl = document.getElementById('career-dots');
        if (dotsEl) {
            dotsEl.innerHTML = '';
            careerMilestones.forEach((_, i) => {
                const dot = document.createElement('span');
                dot.className = `career-dot${i === careerIndex ? ' active' : ''}${careerMilestones[i].isMystery ? ' dot-mystery' : ''}`;
                dot.title = careerMilestones[i].company;
                dot.onclick = (e) => {
                    if (e) e.stopPropagation();
                    careerIndex = i;
                    renderCareer();
                };
                dotsEl.appendChild(dot);
            });
        }

        // Stationary arrow buttons disabled states
        const prevBtn = document.getElementById('career-prev');
        const nextBtn = document.getElementById('career-next');
        if (prevBtn) prevBtn.disabled = careerIndex === 0;
        if (nextBtn) nextBtn.disabled = careerIndex === careerMilestones.length - 1;

        renderWaveNodes();
    }

    window.stepCareer = function(dir) {
        const total = careerMilestones.length;
        careerIndex = Math.max(0, Math.min(total - 1, careerIndex + dir));
        renderCareer();
    };

    window.openActiveMilestoneModal = function() {
        const m = careerMilestones[careerIndex];
        if (m) openModal(m.key);
    };

    renderCareer();
    selectIndieBox('ewefo');
    selectApp('csr');

    // 13. 3-Block Interests Interactive Selector (Square -> Rectangular)
    window.selectInterest = function(index) {
        const blocks = document.querySelectorAll('.interest-block');
        blocks.forEach((block, i) => {
            if (i === index) {
                block.classList.add('active');
            } else {
                block.classList.remove('active');
            }
        });
    };

});
