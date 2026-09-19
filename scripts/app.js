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
        'sonicforces': {
            studio: 'SEGA HARDLIGHT',
            studioUrl: 'https://www.hardlightstudio.com/',
            platform: 'iOS / Android',
            title: 'Sonic Forces: Speed Battle',
            icon: 'assets/commercial/icons/sonicforces.jpg',
            banner: 'assets/commercial/banners/sonicforces.png',
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
            icon: 'assets/commercial/icons/sonicdash2.jpg',
            banner: 'assets/commercial/banners/sonicdash2.png',
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
            icon: 'assets/commercial/icons/valkyria.jpg',
            banner: 'assets/commercial/banners/valkyria.jpg',
            tagline: 'Tactical RPG // PC Platform Quality Verification',
            desc: 'Verified PC platform release candidate builds, graphical display scaling, keyboard/mouse remapping, and port stability for SEGA\'s critically acclaimed tactical role-playing game.',
            bullets: [
                'Verified PC release candidate build stability, 4K resolution scaling, and ultra-wide monitor framing.',
                'Tested keyboard/mouse input remapping, gamepad hot-swapping, and Steam overlay integrations.',
                'Logged and verified regression fixes alongside developer leads in SEGA\'s global Jira database.'
            ],
            tags: ['SEGA', 'PC Port QA', 'Steam Integration', 'Input Remapping', 'Display Scaling']
        },
        'csr': {
            studio: 'ZYNGA / NATURALMOTION',
            studioUrl: 'https://www.naturalmotion.com/',
            platform: 'iOS / Android / Kindle',
            title: 'CSR Racing',
            icon: 'assets/commercial/icons/csr.jpg',
            banner: 'assets/commercial/banners/csr.png',
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
            icon: 'assets/commercial/icons/csr2.jpg',
            banner: 'assets/commercial/banners/csr2.png',
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
            icon: 'assets/commercial/icons/csrclassics.jpg',
            banner: 'assets/commercial/banners/csrclassics.jpg',
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
            icon: 'assets/commercial/icons/titans.png',
            banner: 'assets/commercial/banners/titans.jpg',
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
            icon: 'assets/commercial/icons/ninja.jpg',
            banner: 'assets/commercial/banners/ninja.jpg',
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
            icon: 'assets/commercial/icons/farmville.jpg',
            banner: 'assets/commercial/banners/farmville.jpg',
            tagline: 'Global Casual Phenomenon & Offline/Online Sync',
            desc: 'Tested farm expansion loops, crafting timers, offline-to-online state reconciliation, and social trading markets across diverse international localized builds.',
            bullets: [
                'Offline timer reconciliation & conflict resolution on reconnect.',
                'Multi-language localization and UI text truncation verification.',
                'Co-op social trade order book testing and cross-platform friend sync.'
            ],
            tags: ['Offline State Sync', 'Localization QA', 'Crafting Loops', 'Social Systems']
        },
        'pizzahut': {
            studio: 'ADACTUS & EDM GROUP',
            studioUrl: 'https://www.adactus.co.uk/',
            platform: 'Web / iOS / Android',
            title: 'Pizza Hut Loyalty & Web',
            icon: 'assets/commercial/icons/pizzahut.jpg',
            banner: 'assets/commercial/banners/pizzahut.jpg',
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
            icon: 'assets/commercial/icons/skyscrappers.jpg',
            banner: 'assets/commercial/banners/skyscrappers.jpg',
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

    // 3. Personal Indie Projects Database (Interactive Showcase Carousel)
    const indieBoxes = {
        'aegis': {
            title: 'Aegis of Ages',
            tagline: 'Hilltop Fortress Defense & Siege Arcana',
            status: 'Live on Spawn.co',
            statusClass: 'status-playable',
            engine: 'Spawn Engine // WebGL 3D',
            playableUrl: 'https://www.spawn.co/@psypher5/aegis-of-ages/play',
            externalTab: true,
            heroImage: 'assets/aegis_of_ages.webp',
            desc: 'You command a hilltop fortress under siege from every direction! Strategically place archers, barricades, and spikes between waves, aim the heavy ballista by hand, douse spreading structural fires, and hold the line against escalating hostile incursions.',
            pillars: [
                '360° hilltop fortress fortification: place archers, spikes, and emergency barricades between mounting enemy waves.',
                'Manual ballista ballistics: tactile trajectory aiming and high-impact siege physics against oncoming siege units.',
                'Tactical crisis response: dousing spreading structural fires while coordinating multi-directional defense.'
            ],
            tech: ['Spawn Engine', 'WebGL 3D', 'Tactical Tower Defense', 'Real-Time Physics', 'Spatial Audio'],
            psr: {
                problem: 'Orchestrating multi-directional 360-degree siege waves, manual ballista trajectory aiming, and procedural fire propagation in a real-time web-accessible 3D environment.',
                solution: 'Engineered on the high-performance Spawn engine with reactive wave management, localized spatial siege paths, and manual physics-driven defense targeting.',
                result: 'A thrilling, immediate hilltop siege experience playable directly in modern browsers with zero download friction.'
            },
            conceptArt: [
                { src: 'assets/aegis_of_ages.webp', title: 'Hilltop Fortress Under Siege', tag: 'AEGIS OF AGES // KEY ART', desc: 'Commanding the high ground: ballista positions, archer ramparts, and invading siege battalions.' }
            ]
        },
        'noblegnomes': {
            title: 'Noble Gnomes',
            tagline: 'Steam-Powered Pond Exploration & Slime Arcana',
            status: 'Live Playable 3D',
            statusClass: 'status-playable',
            engine: 'Three.js / WebGL & Cloudflare Workers',
            playableUrl: 'https://noblegnomes.psypher5.workers.dev/',
            heroImage: 'assets/noble_gnomes.png',
            desc: 'A whimsical and vibrant 3D fantasy aquatic adventure! Captain the steam-powered "Puddlehopper" exploration vessel across an enchanted lilypad pond with a stalwart crew of gnomes, confronting ancient glowing moss slime behemoths with arcane shield runes.',
            pillars: [
                'Steam-powered boat navigation across enchanted garden waters with real-time wake physics.',
                'Tactical arcane battles with magical sigils against colossal glowing pond entities.',
                'Procedural Web Audio soundscapes paired with custom stylized lilypad & flora shaders.'
            ],
            tech: ['Three.js', 'WebGL', 'Web Audio API', 'Cloudflare Workers', 'Edge Architecture'],
            psr: {
                problem: 'Delivering rich interactive 3D water shaders, dynamic boat wake ripples, and spatial pond acoustics instantly on mobile web without heavy pre-load waits.',
                solution: 'Deployed on Cloudflare Workers edge network with compressed asset streaming, instanced pond lilypad geometry, and a procedural Web Audio acoustic synthesizer.',
                result: 'Instant global cold-start loading (<150ms), buttery smooth 60 FPS mobile WebGL rendering, and an enchanting interactive sandbox.'
            },
            conceptArt: [
                { src: 'assets/noble_gnomes.png', title: 'Puddlehopper vs Slime Behemoth', tag: 'NOBLE GNOMES // KEY ART', desc: 'The Gnome Explorer steam vessel confronting the arcane moss slime beast in the enchanted lilypad pond.' }
            ]
        },
        'moments': {
            title: 'Moments',
            tagline: 'Memories of Merlin',
            status: 'Live Playable 3D',
            statusClass: 'status-playable',
            engine: 'Three.js / WebGL',
            playableUrl: 'games/moments/index.html',
            heroImage: 'assets/merlin.jpg',
            desc: 'An emotional 3D memorial journey created for Merlin the miniature dachshund. Guide Merlin across celestial meadows, bridge rainbow chasms, collect memory prism gems, and run free under vibrant starry skies.',
            pillars: [
                'Emotional memorial journey featuring dynamic ambient orchestral sound design.',
                '3D stylized terrain with rainbow bridges, memory prisms, and petal dynamics.',
                'Gem power belt mechanics: Sunburst Dash, Petal Shield, and Spirit Bark.'
            ],
            tech: ['Three.js', 'WebGL', 'Web Audio API', 'Procedural Terrain'],
            psr: {
                problem: 'High-fidelity 3D rendering with dynamic web audio and petal particle dynamics often causes frame stutter and audio buffer underruns on mobile devices.',
                solution: 'Optimized procedural chunk streaming in Three.js, instanced meshes for meadow flora, and an asynchronous Web Audio API bus architecture with spatial node panning.',
                result: 'Rock-solid 60 FPS on mobile browsers, zero audio stutter, and an emotional, seamless interactive tribute.'
            },
            conceptArt: [
                { src: 'assets/merlin.jpg', title: 'Memories of Merlin', tag: 'MOMENTS // PROTAGONIST', desc: 'Merlin the miniature dachshund across every chapter of life — from a puppy in the palm of a hand to exploring the morning frost.' }
            ]
        },
        'ewefo': {
            title: 'ewe-FO',
            tagline: 'Abduct. Automate. Ascend.',
            status: 'Live Playable 3D',
            statusClass: 'status-playable',
            engine: 'Three.js / WebGL & Godot 4',
            playableUrl: 'games/ewefo/index.html',
            heroImage: 'assets/psypher53-2-WE5f5c30150a (1).png',
            desc: 'An arcade physics-based abduction game set across a diorama-styled British countryside. Pilot a tractor-beam equipped UFO by night to herd and harvest livestock, while building automated conveyor networks, energy condensors, and processing pipelines by day.',
            pillars: [
                'Dynamic tractor-beam spring physics & multi-body rope constraints.',
                '2.5D tilt-shift camera shader with day/night atmospheric transitions.',
                'Factory-style automation loops: wool spin, raw milk refining, and alien tech trees.'
            ],
            tech: ['Three.js', 'WebGL', 'Godot 4', 'Custom Physics', 'Automation'],
            psr: {
                problem: 'Simulating multi-body elastic rope constraints for a tractor beam while simultaneously updating multiple autonomous pasture AI entities caused physics instability and erratic raycast tunneling.',
                solution: 'Implemented a sub-stepped Verlet integration solver with velocity damping and spatial grid partitioning for herd AI queries.',
                result: 'Predictable, tactile tractor-beam spring physics that feel delightfully responsive at 60 FPS in WebGL.'
            },
            conceptArt: [
                { src: 'assets/psypher53-2-WE5f5c30150a (1).png', title: 'ewe-FO: Visual Pipeline', tag: 'CONCEPT // 2.5D DIORAMA', desc: 'Concept art and 3D diorama assets authored for the prototype.' }
            ]
        },
        'wick': {
            title: 'Adventures of Wick',
            tagline: 'Keep the flame alive.',
            status: 'Engine Concept',
            statusClass: 'status-engine',
            engine: 'Custom C++ Engine (SDL2 / Modern OpenGL)',
            heroImage: 'assets/art-web/digital/Out_of_the_mist__by_Psypher5.webp',
            desc: 'A dark, atmospheric platformer following a candle-headed sprite. Navigate a shadowy, wind-swept forest, solve physics-based light puzzles, and manage your melting wax reserve before the draft extinguishes your spark.',
            pillars: [
                'Dynamic 2D shadow raymarching and soft light illumination fields.',
                'Melting wax mechanic balancing player speed against remaining lifetime.',
                'Custom lightweight 2D physics solver and tilemap streaming engine.'
            ],
            tech: ['C++ 17', 'SDL2 / OpenGL', '2D Raymarching', 'Shadow Physics', 'Custom Engine'],
            psr: {
                problem: 'Full 2D soft shadow rendering in custom engines often requires complex geometry clipping or heavy multi-pass screen-space shaders that overwhelm integrated GPUs.',
                solution: 'Engineered a custom lightweight 2D radial distance field raymarcher using Modern OpenGL & SDL2 in C++17, caching static occluder edges into a 1D shadow lookup texture.',
                result: 'Sub-millisecond light pass times (<0.4ms) with buttery-smooth penumbras and real-time melting wax vertex displacement.'
            },
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
            heroImage: 'assets/art-web/digital/peng back.webp',
            desc: 'A tactical sci-fi defense system simulator. Manage power distribution matrices, synchronize automated point-defense turrets, and coordinate shield vectors to defend orbital mining facilities against escalating hostile incursions.',
            pillars: [
                'Dynamic energy rerouting between shields, CIWS kinetic turrets, and cooling systems.',
                'Vector-based shield modulation against laser sweeps and kinetic swarm missiles.',
                'Automated drone patrol routing and critical infrastructure triage.'
            ],
            tech: ['Unity Engine', 'C# Systems Architecture', 'RTS / Tactical', 'Energy Grid Matrix'],
            psr: {
                problem: 'Managing hundreds of simultaneous ballistic projectile trajectories, rotating CIWS turrets, and energy grid load balancing in real time can saturate the main CPU thread.',
                solution: 'Decoupled event-driven system in Unity C# using sparse array pooling for projectiles, deterministic vector maths for shield deflection arcs, and state-machine power routing.',
                result: 'Zero allocation during gameplay loops, rock-solid frame delivery, and fluid tactical orbital defense feedback.'
            },
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
    const navButtons = document.querySelectorAll('.nav-dock-btn, .hero-nav-btn');

    window.switchTab = function(tabId, e) {
        const evt = e || window.event;
        if (evt && typeof evt.stopPropagation === 'function') {
            evt.stopPropagation();
        }
        if (!appContainer) return;

        // Guarantee all modals and overlays are dismissed when switching tabs
        if (typeof closeModal === 'function') closeModal();
        if (typeof closeArtLightbox === 'function') closeArtLightbox();
        if (typeof closeGameTheater === 'function') closeGameTheater();
        
        const targetBtn = document.querySelector(`.nav-dock-btn[data-tab="${tabId}"], .hero-nav-btn[data-tab="${tabId}"]`);
        if (targetBtn && targetBtn.classList.contains('active') && appContainer.classList.contains('state-subpage-active')) {
            goHome(evt);
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
        
        navButtons.forEach(btn => {
            if (btn.getAttribute('data-tab') === tabId) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        // Update URL hash smoothly without jump
        if (window.history && window.history.replaceState) {
            window.history.replaceState(null, '', '#' + tabId);
        }
    };

    window.goHome = function(e) {
        const evt = e || window.event;
        if (evt && typeof evt.stopPropagation === 'function') {
            evt.stopPropagation();
        }
        if (!appContainer) return;

        // Guarantee all modals and overlays are dismissed when returning home
        if (typeof closeModal === 'function') closeModal();
        if (typeof closeArtLightbox === 'function') closeArtLightbox();
        if (typeof closeGameTheater === 'function') closeGameTheater();

        appContainer.classList.remove('state-subpage-active');
        subpages.forEach(page => page.classList.remove('active'));
        navButtons.forEach(btn => btn.classList.remove('active'));

        // Clear hash on return to home (preserve soundtrack deep links)
        if (window.history && window.history.replaceState) {
            if (!window.location.hash.includes('soundtrack') && !window.location.hash.includes('track')) {
                window.history.replaceState(null, '', window.location.pathname + window.location.search);
            }
        }
    };

    // Click outside active subpage to return to homepage
    document.addEventListener('click', function(e) {
        if (!appContainer || !appContainer.classList.contains('state-subpage-active')) return;
        // Ignore clicks from elements that were removed from the DOM during event handling (e.g. timeline node re-rendering)
        if (!document.body.contains(e.target)) return;

        const isSubpage = e.target.closest('.subpage');
        const isNavDock = e.target.closest('#bottom-nav');
        const isHeroNav = e.target.closest('.hero-nav-dock') || e.target.closest('#hero');
        const isModal = e.target.closest('.modal-wrapper') || e.target.closest('.modal-overlay') || e.target.closest('#art-lightbox') || e.target.closest('#game-theater-modal');
        const isHeader = e.target.closest('#site-header') || e.target.closest('.header-brand');

        if (!isSubpage && !isNavDock && !isHeroNav && !isModal && !isHeader) {
            window.goHome(e);
        }
    });

    // 5. Interactive Smartphone OS & App Lifecycle Controller
    let currentAppKey = null;
    const commercialAppKeys = Object.keys(commercialApps);

    window.openApp = function(appKey) {
        const data = commercialApps[appKey];
        if (!data) return;
        currentAppKey = appKey;

        const homeScreen = document.getElementById('phone-screen-home');
        const appScreen = document.getElementById('phone-screen-app');
        const heroBanner = document.getElementById('app-hero-banner');
        const heroIcon = document.getElementById('app-hero-icon');
        const heroTitle = document.getElementById('app-hero-title');
        const heroStudio = document.getElementById('app-hero-studio');
        const platformBadge = document.getElementById('app-platform-badge');
        const studioLink = document.getElementById('app-studio-link');
        const taglineEl = document.getElementById('app-tagline');
        const descEl = document.getElementById('app-desc');
        const bulletList = document.getElementById('app-bullet-list');
        const techTags = document.getElementById('app-tech-tags');
        const bodyScroll = document.getElementById('app-screen-body');

        // Populate In-Phone App Detail Content
        if (heroBanner) {
            heroBanner.src = data.banner;
            heroBanner.alt = `${data.title} Hero Banner`;
        }
        if (heroIcon) {
            heroIcon.src = data.icon;
            heroIcon.alt = `${data.title} Icon`;
        }
        if (heroTitle) heroTitle.textContent = data.title;
        if (heroStudio) heroStudio.textContent = data.studio;
        if (platformBadge) platformBadge.textContent = data.platform;
        if (studioLink) {
            if (data.studioUrl) {
                studioLink.href = data.studioUrl;
                studioLink.style.display = 'inline-flex';
            } else {
                studioLink.style.display = 'none';
            }
        }
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

        // Scroll app view to top on load
        if (bodyScroll) bodyScroll.scrollTop = 0;

        // Slide into App Detail Screen
        if (homeScreen) homeScreen.classList.add('is-background');
        if (appScreen) appScreen.classList.add('is-open');
    };

    window.selectApp = window.openApp; // Backwards compatibility

    window.phoneNavBack = function() {
        const homeScreen = document.getElementById('phone-screen-home');
        const appScreen = document.getElementById('phone-screen-app');
        if (appScreen && appScreen.classList.contains('is-open')) {
            appScreen.classList.remove('is-open');
            if (homeScreen) homeScreen.classList.remove('is-background');
            currentAppKey = null;
        }
    };

    window.phoneNavHome = function() {
        phoneNavBack();
    };

    window.phoneNavNext = function() {
        if (!commercialAppKeys.length) return;
        if (!currentAppKey) {
            openApp(commercialAppKeys[0]);
            return;
        }
        const currentIndex = commercialAppKeys.indexOf(currentAppKey);
        const nextIndex = (currentIndex + 1) % commercialAppKeys.length;
        openApp(commercialAppKeys[nextIndex]);
    };

    // 6. Interactive Unified Project Showcase Carousel Controller
    const projectKeys = ['noblegnomes', 'aegis', 'moments', 'ewefo', 'wick', 'voidwarden'];
    let activeIndieKey = 'noblegnomes';

    window.selectProject = function(boxKey) {
        const data = indieBoxes[boxKey];
        if (!data) return;
        activeIndieKey = boxKey;

        // Update Netflix Tray Cards Active State
        document.querySelectorAll('.netflix-card').forEach(card => {
            if (card.getAttribute('data-project') === boxKey) {
                card.classList.add('active');
                card.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
            } else {
                card.classList.remove('active');
            }
        });

        // Update Billboard Elements
        const billboard = document.getElementById('netflix-billboard');
        const backdropImg = document.getElementById('billboard-backdrop-img');
        const kickerEl = document.getElementById('billboard-kicker');
        const statusBadge = document.getElementById('billboard-status-badge');
        const engineBadge = document.getElementById('billboard-engine-badge');
        const titleEl = document.getElementById('billboard-title');
        const taglineEl = document.getElementById('billboard-tagline');
        const descEl = document.getElementById('billboard-desc');
        const playBtn = document.getElementById('btn-billboard-play');
        const playLabel = document.getElementById('btn-billboard-play-label');
        const pillarsList = document.getElementById('project-pillars-list');
        const techTags = document.getElementById('project-tech-tags');

        // PSR Framework Elements
        const psrProblem = document.getElementById('psr-problem-text');
        const psrSolution = document.getElementById('psr-solution-text');
        const psrResult = document.getElementById('psr-result-text');

        if (backdropImg) {
            backdropImg.src = data.heroImage;
            backdropImg.alt = `${data.title} Hero Artwork`;
        }

        if (kickerEl) {
            kickerEl.textContent = `PSYPHER5 ORIGINAL // ${data.engine.toUpperCase()}`;
        }

        if (statusBadge) {
            statusBadge.textContent = data.status;
            statusBadge.className = `status-badge-chip ${data.statusClass}`;
        }

        if (engineBadge) engineBadge.textContent = data.engine;
        if (titleEl) titleEl.textContent = data.title;
        if (taglineEl) taglineEl.textContent = data.tagline;
        if (descEl) descEl.textContent = data.desc;

        // Toggle Play in Browser Button
        const newTabBtn = document.querySelector('.btn-billboard-newtab');
        if (playBtn) {
            if (data.playableUrl) {
                playBtn.style.display = 'inline-flex';
                if (data.externalTab) {
                    if (playLabel) playLabel.textContent = `Play ${data.title} on Spawn.co ↗`;
                    if (newTabBtn) newTabBtn.style.display = 'none';
                } else {
                    if (playLabel) playLabel.textContent = `Play ${data.title} in Browser`;
                    if (newTabBtn) newTabBtn.style.display = 'inline-flex';
                }
            } else {
                playBtn.style.display = 'none';
                if (newTabBtn) newTabBtn.style.display = 'none';
            }
        }

        // PSR Case Study
        if (data.psr) {
            if (psrProblem) psrProblem.textContent = data.psr.problem;
            if (psrSolution) psrSolution.textContent = data.psr.solution;
            if (psrResult) psrResult.textContent = data.psr.result;
        }

        // Pillars
        if (pillarsList) {
            pillarsList.innerHTML = '';
            data.pillars.forEach(p => {
                const li = document.createElement('li');
                li.textContent = p;
                pillarsList.appendChild(li);
            });
        }

        // Tech Tags
        if (techTags) {
            techTags.innerHTML = '';
            data.tech.forEach(t => {
                const span = document.createElement('span');
                span.className = 'tech-tag';
                span.textContent = t;
                techTags.appendChild(span);
            });
        }

        // Concept gallery thumbnails
        renderIndieConceptGallery(boxKey);

        // Smooth billboard crossfade animation
        if (billboard) {
            billboard.classList.remove('billboard-fade');
            void billboard.offsetWidth; // Trigger reflow
            billboard.classList.add('billboard-fade');
        }
    };

    window.scrollToSpecsDrawer = function() {
        const drawer = document.getElementById('netflix-specs-drawer');
        if (drawer) {
            drawer.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    window.selectIndieBox = window.selectProject; // Backwards compatibility

    window.stepProject = function(dir) {
        const currentIndex = projectKeys.indexOf(activeIndieKey);
        let nextIndex = currentIndex + dir;
        if (nextIndex < 0) nextIndex = projectKeys.length - 1;
        if (nextIndex >= projectKeys.length) nextIndex = 0;
        selectProject(projectKeys[nextIndex]);
    };

    function initProjectSwipe() {
        const stage = document.getElementById('project-showcase-stage');
        if (!stage) return;
        let touchStartX = 0;
        let touchStartY = 0;

        stage.addEventListener('touchstart', (e) => {
            touchStartX = e.touches[0].clientX;
            touchStartY = e.touches[0].clientY;
        }, { passive: true });

        stage.addEventListener('touchend', (e) => {
            const touchEndX = e.changedTouches[0].clientX;
            const touchEndY = e.changedTouches[0].clientY;
            const diffX = touchEndX - touchStartX;
            const diffY = touchEndY - touchStartY;

            if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 40) {
                if (diffX < 0) {
                    stepProject(1);
                } else {
                    stepProject(-1);
                }
            }
        }, { passive: true });
    }

    // 7. Live Game Theater Modal Engine
    window.launchActiveGame = function(key) {
        const targetKey = key || activeIndieKey;
        const game = indieBoxes[targetKey];
        if (game && game.playableUrl) {
            if (game.externalTab) {
                window.open(game.playableUrl, '_blank', 'noopener,noreferrer');
            } else {
                openGameTheater(targetKey);
            }
        }
    };

    window.openGameTheater = function(key) {
        const game = indieBoxes[key];
        if (!game || !game.playableUrl) return;

        if (game.externalTab) {
            window.open(game.playableUrl, '_blank', 'noopener,noreferrer');
            return;
        }

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

    window.openTheaterNewTab = function() {
        const game = indieBoxes[activeIndieKey];
        if (game && game.playableUrl) {
            window.open(game.playableUrl, '_blank', 'noopener,noreferrer');
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
            phoneNavBack();
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

    // 12. Career Time-Deck Runway & Scrubber Controller
    function renderCareerScrubber() {
        const rail = document.getElementById('career-scrubber-rail');
        if (!rail) return;
        rail.innerHTML = '';

        careerMilestones.forEach((m, i) => {
            const btn = document.createElement('button');
            btn.className = `career-era-node${i === careerIndex ? ' active' : ''}${m.isMystery ? ' node-mystery' : ''}`;
            btn.type = 'button';
            btn.setAttribute('role', 'tab');
            btn.setAttribute('aria-selected', i === careerIndex ? 'true' : 'false');
            btn.setAttribute('aria-label', `${m.company} (${m.year})`);
            btn.innerHTML = `<span class="era-dot"><span class="sonar-ring"></span></span><span class="era-year">${m.year}</span>`;
            btn.onclick = (e) => {
                if (e) e.stopPropagation();
                careerIndex = i;
                updateCareerDeck();
            };
            rail.appendChild(btn);
        });
    }

    let lastCareerSwipeTime = 0;

    function renderCareerDeckCards() {
        const runway = document.getElementById('career-deck-runway');
        if (!runway) return;
        runway.innerHTML = '';

        careerMilestones.forEach((m, i) => {
            const card = document.createElement('div');
            card.className = 'career-deck-card glass-panel';
            card.setAttribute('role', 'tabpanel');
            card.setAttribute('data-index', i);
            card.setAttribute('data-key', m.key);

            let tagsHtml = '';
            if (m.tags && m.tags.length > 0) {
                tagsHtml = m.tags.map(t => `<span class="career-card-chip">${t}</span>`).join('');
            } else if (m.isMystery) {
                tagsHtml = `<span class="career-card-chip chip-classified"><span class="chip-dot"></span> SUB-SURFACE // CLASSIFIED</span>`;
            }

            card.innerHTML = `
                <div class="career-card-header">
                    <span class="career-card-period">${m.date.toUpperCase()}</span>
                    <span class="career-card-index">${String(i + 1).padStart(2, '0')} / ${String(careerMilestones.length).padStart(2, '0')}</span>
                </div>
                <div class="career-card-body">
                    <h3 class="career-card-role">${m.role}</h3>
                    <h4 class="career-card-company">${m.company}</h4>
                    <div class="career-card-tags">${tagsHtml}</div>
                </div>
                <div class="career-card-inspect-hint">
                    <span>Tap to inspect full engineering scope</span>
                    <span class="hint-arrow">&rarr;</span>
                </div>
            `;

            card.onclick = (e) => {
                if (e) e.stopPropagation();
                // Prevent synthetic clicks right after a touch swipe
                if (Date.now() - lastCareerSwipeTime < 350) return;
                if (i === careerIndex) {
                    // Active card click opens the deep-dive modal
                    openModal(m.key);
                } else {
                    // Clicking faded side card advances/reverses timeline to that card
                    careerIndex = i;
                    updateCareerDeck();
                }
            };

            runway.appendChild(card);
        });
    }

    function updateCareerDeck() {
        const runway = document.getElementById('career-deck-runway');
        if (!runway) return;

        const cards = runway.querySelectorAll('.career-deck-card');
        cards.forEach((card, i) => {
            const diff = i - careerIndex;
            card.classList.remove('is-active', 'is-next', 'is-next-2', 'is-prev', 'is-prev-2', 'is-distant');

            if (diff === 0) {
                card.classList.add('is-active');
                card.setAttribute('aria-hidden', 'false');
                card.setAttribute('tabindex', '0');
            } else if (diff === 1) {
                card.classList.add('is-next');
                card.setAttribute('aria-hidden', 'false');
                card.setAttribute('tabindex', '0');
            } else if (diff === 2) {
                card.classList.add('is-next-2');
                card.setAttribute('aria-hidden', 'true');
                card.setAttribute('tabindex', '-1');
            } else if (diff === -1) {
                card.classList.add('is-prev');
                card.setAttribute('aria-hidden', 'false');
                card.setAttribute('tabindex', '0');
            } else if (diff === -2) {
                card.classList.add('is-prev-2');
                card.setAttribute('aria-hidden', 'true');
                card.setAttribute('tabindex', '-1');
            } else {
                card.classList.add('is-distant');
                card.setAttribute('aria-hidden', 'true');
                card.setAttribute('tabindex', '-1');
            }
        });

        // Update horizontal scrubber rail nodes
        const rail = document.getElementById('career-scrubber-rail');
        const railWrapper = document.getElementById('career-scrubber-rail-wrapper');
        if (rail) {
            const nodes = rail.querySelectorAll('.career-era-node');
            nodes.forEach((node, i) => {
                const isActive = (i === careerIndex);
                node.classList.toggle('active', isActive);
                node.setAttribute('aria-selected', isActive ? 'true' : 'false');
                if (isActive && railWrapper) {
                    const targetScroll = node.offsetLeft - (railWrapper.clientWidth / 2) + (node.clientWidth / 2);
                    railWrapper.scrollTo({ left: Math.max(0, targetScroll), behavior: 'smooth' });
                }
            });
        }

        // Update stationary navigation arrow states
        const prevBtn = document.getElementById('career-prev');
        const nextBtn = document.getElementById('career-next');
        if (prevBtn) prevBtn.disabled = (careerIndex === 0);
        if (nextBtn) nextBtn.disabled = (careerIndex === careerMilestones.length - 1);

        // Update counter and timeline metadata
        const m = careerMilestones[careerIndex];
        const counterEl = document.getElementById('career-deck-counter');
        if (counterEl) {
            counterEl.textContent = `${String(careerIndex + 1).padStart(2, '0')} / ${String(careerMilestones.length).padStart(2, '0')}`;
        }
        const spanEl = document.getElementById('career-deck-timeline-span');
        if (spanEl && m) {
            spanEl.innerHTML = `${m.date} &bull; ${m.company}`;
        }
    }

    // Touch Swipe Gestures for Career Runway (Mobile)
    (function initCareerSwipe() {
        const stage = document.getElementById('career-deck-stage');
        if (!stage) return;

        let touchStartX = 0;
        let touchStartY = 0;
        let touchEndX = 0;
        let touchEndY = 0;
        const SWIPE_THRESHOLD = 40;

        stage.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
            touchStartY = e.changedTouches[0].screenY;
        }, { passive: true });

        stage.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            touchEndY = e.changedTouches[0].screenY;

            const deltaX = touchEndX - touchStartX;
            const deltaY = touchEndY - touchStartY;

            if (Math.abs(deltaX) > SWIPE_THRESHOLD && Math.abs(deltaX) > Math.abs(deltaY)) {
                lastCareerSwipeTime = Date.now();
                if (deltaX < 0) {
                    stepCareer(1); // Swipe left → advance forward in time
                } else {
                    stepCareer(-1); // Swipe right → step back
                }
            }
        }, { passive: true });
    })();

    window.stepCareer = function(dir) {
        const total = careerMilestones.length;
        careerIndex = Math.max(0, Math.min(total - 1, careerIndex + dir));
        updateCareerDeck();
    };

    window.openActiveMilestoneModal = function() {
        const m = careerMilestones[careerIndex];
        if (m) openModal(m.key);
    };

    renderCareerScrubber();
    renderCareerDeckCards();
    updateCareerDeck();
    selectProject('noblegnomes');

    // Hash routing or default to Hero Home
    const initialHash = window.location.hash.replace('#', '');
    if (['about', 'projects', 'contact'].includes(initialHash)) {
        switchTab(initialHash);
    } else if (initialHash.includes('soundtrack') || initialHash.includes('track')) {
        // Stay on home and preserve soundtrack deep link
        if (appContainer) {
            appContainer.classList.remove('state-subpage-active');
            subpages.forEach(page => page.classList.remove('active'));
            navButtons.forEach(btn => btn.classList.remove('active'));
        }
    } else {
        goHome();
    }

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

    // 14. Retro-Modern Contact Console Interactivity
    const contactChannels = {
        email: {
            label: 'TRANSMISSION TARGET // DIRECT EMAIL',
            url: 'tom@psypher5.co.uk',
            href: 'mailto:tom@psypher5.co.uk',
            openLabel: 'Launch Email ↗',
            copyText: 'tom@psypher5.co.uk'
        },
        twitter: {
            label: 'TRANSMISSION TARGET // X (TWITTER)',
            url: 'x.com/psypher5',
            href: 'https://x.com/psypher5',
            openLabel: 'Open Profile ↗',
            copyText: 'https://x.com/psypher5'
        },
        linkedin: {
            label: 'TRANSMISSION TARGET // LINKEDIN',
            url: 'linkedin.com/in/psypher5',
            href: 'https://www.linkedin.com/in/psypher5',
            openLabel: 'Open Profile ↗',
            copyText: 'https://www.linkedin.com/in/psypher5'
        },
        github: {
            label: 'TRANSMISSION TARGET // GITHUB',
            url: 'github.com/psypher5',
            href: 'https://github.com/psypher5',
            openLabel: 'Open Repos ↗',
            copyText: 'https://github.com/psypher5'
        },
        twitch: {
            label: 'TRANSMISSION TARGET // TWITCH',
            url: 'twitch.tv/psypher5',
            href: 'https://www.twitch.tv/psypher5',
            openLabel: 'Open Stream ↗',
            copyText: 'https://www.twitch.tv/psypher5'
        },
        steam: {
            label: 'TRANSMISSION TARGET // STEAM',
            url: 'steamcommunity.com/id/psypher5',
            href: 'https://steamcommunity.com/id/psypher5',
            openLabel: 'Open Steam Profile ↗',
            copyText: 'psypher5'
        }
    };


    let activeContactChannel = 'email';

    window.selectContactChannel = function(channelKey) {
        const data = contactChannels[channelKey];
        if (!data) return;
        activeContactChannel = channelKey;

        // Update active icon button
        document.querySelectorAll('.inset-icon-btn').forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-channel') === channelKey);
        });

        // Update readout
        const labelEl = document.getElementById('retro-readout-label');
        const urlEl = document.getElementById('retro-readout-url');
        const openBtn = document.getElementById('retro-action-open');
        const openLabel = document.getElementById('retro-action-open-label');

        if (labelEl) labelEl.textContent = data.label;
        if (urlEl) {
            urlEl.style.opacity = '0';
            setTimeout(() => {
                urlEl.textContent = data.url;
                urlEl.style.opacity = '1';
            }, 100);
        }
        if (openBtn) {
            openBtn.href = data.href;
            if (data.href.startsWith('mailto:')) {
                openBtn.removeAttribute('target');
                openBtn.removeAttribute('rel');
            } else {
                openBtn.setAttribute('target', '_blank');
                openBtn.setAttribute('rel', 'noopener noreferrer');
            }
        }
        if (openLabel) openLabel.textContent = data.openLabel;
    };

    window.copyCurrentContactHandle = function(e) {
        if (e) e.preventDefault();
        const data = contactChannels[activeContactChannel];
        if (!data) return;

        const textToCopy = data.copyText;
        const toast = document.getElementById('retro-copy-toast');

        function showToast() {
            if (toast) {
                toast.textContent = `COPIED: ${textToCopy}`;
                toast.classList.add('visible');
                setTimeout(() => {
                    toast.classList.remove('visible');
                }, 2200);
            }
        }

        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(textToCopy).then(showToast).catch(() => {
                fallbackCopy(textToCopy);
            });
        } else {
            fallbackCopy(textToCopy);
        }

        function fallbackCopy(text) {
            const ta = document.createElement('textarea');
            ta.value = text;
            ta.style.position = 'fixed';
            ta.style.opacity = '0';
            document.body.appendChild(ta);
            ta.select();
            try {
                document.execCommand('copy');
                showToast();
            } catch (err) {}
            document.body.removeChild(ta);
        }
    };

    // ===================================================
    // 16. Gemini Soundtrack Audio Player Widget Controller
    // ===================================================
    const geminiTracks = [
        {
            id: 0,
            title: 'Arrival at the Maw',
            artist: 'Tom Woodward & Gemini AI',
            file: 'assets/audio/Arrival_at_the_Maw.mp3',
            art: 'assets/noble_gnomes.png',
            genre: 'Orchestral / Ambient'
        },
        {
            id: 1,
            title: 'Cathedral at Speed',
            artist: 'Tom Woodward & Gemini AI',
            file: 'assets/audio/Cathedral_at_Speed.mp3',
            art: 'assets/psypher53-2-WE5f5c30150a (1).png',
            genre: 'Cyber Synthwave'
        },
        {
            id: 2,
            title: "Gravity's Last Stand",
            artist: 'Tom Woodward & Gemini AI',
            file: 'assets/audio/Gravity_s_Last_Stand.mp3',
            art: 'assets/art-web/digital/peng back.webp',
            genre: 'Sci-Fi / Cinematic'
        },
        {
            id: 3,
            title: 'Quantum Entanglement',
            artist: 'Tom Woodward & Gemini AI',
            file: 'assets/audio/Quantum_Entanglement.mp3',
            art: 'assets/art-web/digital/Out_of_the_mist__by_Psypher5.webp',
            genre: 'Atmospheric Glitch'
        },
        {
            id: 4,
            title: 'Salt-Stained Morning',
            artist: 'Tom Woodward & Gemini AI',
            file: 'assets/audio/Salt_Stained_Morning.mp3',
            art: 'assets/merlin.jpg',
            genre: 'Reflective Melodic'
        },
        {
            id: 5,
            title: "The Archmage's Gait",
            artist: 'Tom Woodward & Gemini AI',
            file: 'assets/audio/The_Archmage_s_Gait.mp3',
            art: 'assets/aegis_of_ages.webp',
            genre: 'Arcane Fantasy'
        }
    ];

    let currentTrackIndex = 0;
    let lastVolume = 0.8;
    const audioEl = document.getElementById('gemini-audio-player');
    const widgetEl = document.getElementById('audio-player-widget');

    // ── Global Like & Social Share System (Cloudflare KV + Organic Counts) ──
    const baselineLikes = [0, 0, 0, 0, 0, 0];

    function getLikedTracks() {
        try {
            return JSON.parse(localStorage.getItem('psypher5_liked_tracks') || '[]');
        } catch (e) {
            return [];
        }
    }

    function getTrackLikes(idx) {
        try {
            const cached = JSON.parse(localStorage.getItem('psypher5_track_likes') || '{}');
            if (typeof cached[idx] === 'number') {
                return cached[idx];
            }
        } catch (e) {}
        return baselineLikes[idx] || 0;
    }

    function setTrackLikes(idx, count) {
        try {
            const cached = JSON.parse(localStorage.getItem('psypher5_track_likes') || '{}');
            cached[idx] = count;
            localStorage.setItem('psypher5_track_likes', JSON.stringify(cached));
        } catch (e) {}
    }

    async function fetchLikesFromServer() {
        try {
            const res = await fetch('/api/likes');
            if (res.ok) {
                const data = await res.json();
                if (data && data.tracks) {
                    localStorage.setItem('psypher5_track_likes', JSON.stringify(data.tracks));
                    updateLikeUI(currentTrackIndex);
                }
            }
        } catch (err) {
            // Local preview or offline - graceful fallback to localStorage
        }
    }

    function updateLikeUI(index) {
        const likeBtn = document.getElementById('audio-like-btn');
        const countEl = document.getElementById('audio-like-count');
        if (!likeBtn || !countEl) return;

        const likedTracks = getLikedTracks();
        const isLiked = likedTracks.includes(index);
        const count = getTrackLikes(index);

        if (isLiked) {
            likeBtn.classList.add('liked');
            likeBtn.setAttribute('title', 'Unlike this track');
        } else {
            likeBtn.classList.remove('liked');
            likeBtn.setAttribute('title', 'Like this track');
        }
        countEl.textContent = count.toLocaleString();
    }

    // Micro-interaction: particle burst on like
    function spawnLikeParticles() {
        const container = document.getElementById('audio-like-particles');
        if (!container) return;
        container.innerHTML = '';

        const symbols = ['❤️', '💖', '✨', '🔥', '🎵'];
        for (let i = 0; i < 5; i++) {
            const p = document.createElement('span');
            p.className = 'heart-particle';
            p.textContent = symbols[i % symbols.length];
            const angle = (Math.PI * 2 * i) / 5 + (Math.random() - 0.5) * 0.5;
            const dist = 24 + Math.random() * 20;
            const tx = Math.cos(angle) * dist;
            const ty = -18 - Math.random() * 25;
            p.style.setProperty('--tx', `${tx}px`);
            p.style.setProperty('--ty', `${ty}px`);
            p.style.left = '20%';
            p.style.top = '30%';
            container.appendChild(p);
            setTimeout(() => {
                if (p.parentNode) p.parentNode.removeChild(p);
            }, 850);
        }
    }

    window.toggleAudioLike = function(e) {
        if (e) e.stopPropagation();
        const likedTracks = getLikedTracks();
        const trackIdx = currentTrackIndex;
        const alreadyLiked = likedTracks.includes(trackIdx);
        let currentCount = getTrackLikes(trackIdx);

        if (alreadyLiked) {
            const updated = likedTracks.filter(id => id !== trackIdx);
            localStorage.setItem('psypher5_liked_tracks', JSON.stringify(updated));
            currentCount = Math.max(0, currentCount - 1);
            setTrackLikes(trackIdx, currentCount);

            // Cloudflare KV Sync
            fetch('/api/likes', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ track: trackIdx, action: 'unlike' })
            }).then(r => r.json()).then(data => {
                if (data && typeof data.count === 'number') {
                    setTrackLikes(trackIdx, data.count);
                    updateLikeUI(trackIdx);
                }
            }).catch(() => {});
        } else {
            likedTracks.push(trackIdx);
            localStorage.setItem('psypher5_liked_tracks', JSON.stringify(likedTracks));
            currentCount += 1;
            setTrackLikes(trackIdx, currentCount);
            spawnLikeParticles();

            // Cloudflare KV Sync
            fetch('/api/likes', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ track: trackIdx, action: 'like' })
            }).then(r => r.json()).then(data => {
                if (data && typeof data.count === 'number') {
                    setTrackLikes(trackIdx, data.count);
                    updateLikeUI(trackIdx);
                }
            }).catch(() => {});
        }
        updateLikeUI(trackIdx);
    };

    // Social Share Menu
    window.toggleAudioShareMenu = function(e) {
        if (e) e.stopPropagation();
        const popover = document.getElementById('audio-share-popover');
        if (!popover) return;
        popover.classList.toggle('active');
    };

    function getShareableTrackUrl(index) {
        const isFile = window.location.protocol === 'file:' || !window.location.origin || window.location.origin === 'null';
        if (isFile) {
            return `https://psypher5.pages.dev/#soundtrack?track=${index}`;
        }
        const origin = window.location.origin;
        const path = window.location.pathname && window.location.pathname !== '/' ? window.location.pathname : '/';
        return `${origin}${path}#soundtrack?track=${index}`;
    }

    window.shareTrackOnX = function(e) {
        if (e) e.stopPropagation();
        const track = geminiTracks[currentTrackIndex];
        const shareUrl = getShareableTrackUrl(currentTrackIndex);
        const tweetText = `Listening to "${track.title}" (${track.genre}) on @psypher5's Gemini AI Soundtrack! 🎧✨`;
        const twitterIntent = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}&url=${encodeURIComponent(shareUrl)}`;
        window.open(twitterIntent, '_blank', 'noopener,noreferrer,width=560,height=440');
        const popover = document.getElementById('audio-share-popover');
        if (popover) popover.classList.remove('active');
    };

    window.copyTrackLink = function(e) {
        if (e) e.stopPropagation();
        const shareUrl = getShareableTrackUrl(currentTrackIndex);
        const label = document.getElementById('copy-link-label');

        navigator.clipboard.writeText(shareUrl).then(() => {
            if (label) {
                const origText = label.textContent;
                label.textContent = 'Copied! ✓';
                label.style.color = '#00e5ff';
                setTimeout(() => {
                    label.textContent = origText;
                    label.style.color = '';
                    const popover = document.getElementById('audio-share-popover');
                    if (popover) popover.classList.remove('active');
                }, 1400);
            }
        }).catch(() => {
            // Fallback for non-secure or restricted environments
            const ta = document.createElement('textarea');
            ta.value = shareUrl;
            document.body.appendChild(ta);
            ta.select();
            document.execCommand('copy');
            document.body.removeChild(ta);
            if (label) {
                label.textContent = 'Copied! ✓';
                setTimeout(() => {
                    label.textContent = 'Copy Track Link';
                }, 1400);
            }
        });
    };

    // ── Time & Formatting ──
    function formatAudioTime(seconds) {
        if (isNaN(seconds) || seconds < 0) return '0:00';
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    }

    function updateTrackUI(index) {
        const track = geminiTracks[index];
        if (!track) return;

        const miniArt = document.getElementById('audio-mini-art');
        const deckArt = document.getElementById('audio-deck-art');
        const titleEl = document.getElementById('audio-track-title');
        const countEl = document.getElementById('audio-track-count');
        const genreEl = document.getElementById('audio-track-genre');
        const artistEl = document.getElementById('audio-track-artist');

        if (miniArt) miniArt.src = track.art;
        if (deckArt) deckArt.src = track.art;
        if (titleEl) titleEl.textContent = track.title;
        if (countEl) countEl.textContent = `TRACK 0${index + 1} OF 0${geminiTracks.length}`;
        if (genreEl) genreEl.textContent = track.genre;
        if (artistEl) artistEl.textContent = track.artist;

        document.querySelectorAll('.audio-track-item').forEach(item => {
            const itemIdx = parseInt(item.getAttribute('data-track-index'), 10);
            if (itemIdx === index) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });

        updateLikeUI(index);
    }

    function setPlayingStateUI(isPlaying) {
        if (!widgetEl) return;
        if (isPlaying) {
            widgetEl.classList.add('is-playing');
        } else {
            widgetEl.classList.remove('is-playing');
        }

        const miniPlayIcon = document.getElementById('mini-play-icon');
        const miniPauseIcon = document.getElementById('mini-pause-icon');
        const deckPlayIcon = document.getElementById('deck-play-icon');
        const deckPauseIcon = document.getElementById('deck-pause-icon');

        if (miniPlayIcon && miniPauseIcon) {
            miniPlayIcon.style.display = isPlaying ? 'none' : 'block';
            miniPauseIcon.style.display = isPlaying ? 'block' : 'none';
        }
        if (deckPlayIcon && deckPauseIcon) {
            deckPlayIcon.style.display = isPlaying ? 'none' : 'block';
            deckPauseIcon.style.display = isPlaying ? 'block' : 'none';
        }
    }

    window.toggleAudioPlayer = function(e) {
        if (e) e.stopPropagation();
        if (!widgetEl) return;
        widgetEl.classList.toggle('collapsed');
        // Redraw wave canvas immediately when expanding
        if (!widgetEl.classList.contains('collapsed')) {
            setTimeout(drawWaveScrubber, 50);
        }
    };

    window.toggleAudioPlayback = function(e) {
        if (e) e.stopPropagation();
        if (!audioEl) return;

        if (audioEl.paused) {
            const playPromise = audioEl.play();
            if (playPromise !== undefined) {
                playPromise.catch(err => {
                    console.warn('Playback error, re-executing load pipeline:', err);
                    audioEl.load();
                    audioEl.play().catch(e => console.error('Audio play failed:', e));
                });
            }
        } else {
            audioEl.pause();
        }
    };

    function loadTrack(index, autoPlay = false) {
        if (!audioEl || !geminiTracks[index]) return;
        currentTrackIndex = index;
        const track = geminiTracks[index];

        const resolvedUrl = new URL(track.file, window.location.href).href;
        if (audioEl.src !== resolvedUrl) {
            audioEl.src = resolvedUrl;
            audioEl.load();
        }

        updateTrackUI(index);

        const currTimeEl = document.getElementById('audio-time-curr');
        if (currTimeEl) currTimeEl.textContent = '0:00';

        drawWaveScrubber();

        if (autoPlay) {
            const playPromise = audioEl.play();
            if (playPromise !== undefined) {
                playPromise.catch(err => console.warn('Autoplay prevented:', err));
            }
        }
    }

    window.playTrack = function(index) {
        if (index === currentTrackIndex) {
            window.toggleAudioPlayback();
        } else {
            loadTrack(index, true);
        }
    };

    window.prevAudioTrack = function() {
        if (!audioEl) return;
        if (audioEl.currentTime > 3) {
            audioEl.currentTime = 0;
            drawWaveScrubber();
        } else {
            const nextIdx = (currentTrackIndex - 1 + geminiTracks.length) % geminiTracks.length;
            loadTrack(nextIdx, !audioEl.paused);
        }
    };

    window.nextAudioTrack = function() {
        if (!audioEl) return;
        const nextIdx = (currentTrackIndex + 1) % geminiTracks.length;
        loadTrack(nextIdx, !audioEl.paused);
    };

    // ── Volume & Mute ──
    window.setAudioVolume = function(val) {
        if (!audioEl) return;
        const volume = parseFloat(val);
        audioEl.volume = volume;
        audioEl.muted = volume === 0;
        updateVolumeIcons(volume);
    };

    window.toggleAudioMute = function() {
        if (!audioEl) return;
        const slider = document.getElementById('audio-vol-slider');
        if (audioEl.muted || audioEl.volume === 0) {
            audioEl.muted = false;
            audioEl.volume = lastVolume > 0 ? lastVolume : 0.8;
            if (slider) slider.value = audioEl.volume;
            updateVolumeIcons(audioEl.volume);
        } else {
            lastVolume = audioEl.volume;
            audioEl.muted = true;
            audioEl.volume = 0;
            if (slider) slider.value = 0;
            updateVolumeIcons(0);
        }
    };

    function updateVolumeIcons(volume) {
        const volHigh = document.getElementById('vol-high-icon');
        const volMuted = document.getElementById('vol-muted-icon');
        if (volHigh && volMuted) {
            if (volume === 0 || (audioEl && audioEl.muted)) {
                volHigh.style.display = 'none';
                volMuted.style.display = 'block';
            } else {
                volHigh.style.display = 'block';
                volMuted.style.display = 'none';
            }
        }
    }

    // ── Android Auto Style Dynamic Squiggly Wavy Scrubber Canvas ──
    let waveCanvas = null;
    let waveCtx = null;
    let wavePhase = 0;
    let waveAnimId = null;
    let isSeeking = false;

    function initWaveScrubber() {
        waveCanvas = document.getElementById('audio-wave-canvas');
        if (!waveCanvas) return;
        waveCtx = waveCanvas.getContext('2d');

        const container = document.getElementById('audio-wave-container');
        if (!container) return;

        function updateCanvasSize() {
            if (!waveCanvas || !container) return;
            const rect = container.getBoundingClientRect();
            if (rect.width === 0) return;
            const dpr = window.devicePixelRatio || 1;
            waveCanvas.width = rect.width * dpr;
            waveCanvas.height = rect.height * dpr;
            waveCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
            drawWaveScrubber();
        }

        window.addEventListener('resize', updateCanvasSize);
        setTimeout(updateCanvasSize, 100);

        // Hover timestamp indicator
        const hoverLine = document.getElementById('audio-wave-hover-line');
        const tooltip = document.getElementById('audio-wave-tooltip');

        function handlePointerSeek(e) {
            if (!audioEl || !audioEl.duration) return;
            const rect = container.getBoundingClientRect();
            const clientX = e.touches && e.touches.length ? e.touches[0].clientX : e.clientX;
            const clickX = Math.max(0, Math.min(rect.width, clientX - rect.left));
            const pct = clickX / rect.width;
            audioEl.currentTime = pct * audioEl.duration;
            drawWaveScrubber();
        }

        function handlePointerMove(e) {
            const rect = container.getBoundingClientRect();
            const clientX = e.touches && e.touches.length ? e.touches[0].clientX : e.clientX;
            const hoverX = Math.max(0, Math.min(rect.width, clientX - rect.left));
            const pct = hoverX / rect.width;

            if (hoverLine) {
                hoverLine.style.left = `${hoverX}px`;
            }
            if (tooltip && audioEl && audioEl.duration) {
                tooltip.style.left = `${hoverX}px`;
                tooltip.textContent = formatAudioTime(pct * audioEl.duration);
            }

            if (isSeeking) {
                handlePointerSeek(e);
            }
        }

        container.addEventListener('pointerdown', (e) => {
            isSeeking = true;
            container.setPointerCapture(e.pointerId);
            handlePointerSeek(e);
        });

        container.addEventListener('pointermove', handlePointerMove);

        container.addEventListener('pointerup', (e) => {
            if (isSeeking) {
                isSeeking = false;
                try { container.releasePointerCapture(e.pointerId); } catch (err) {}
            }
        });

        container.addEventListener('pointercancel', (e) => {
            isSeeking = false;
            try { container.releasePointerCapture(e.pointerId); } catch (err) {}
        });
    }

    function drawWaveScrubber() {
        if (!waveCanvas || !waveCtx) return;
        const rect = waveCanvas.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        if (width === 0 || height === 0) return;

        waveCtx.clearRect(0, 0, width, height);

        const centerY = height / 2;
        const duration = audioEl && audioEl.duration ? audioEl.duration : 1;
        const currentTime = audioEl ? audioEl.currentTime : 0;
        const progressPct = Math.max(0, Math.min(1, currentTime / duration));
        const playedWidth = progressPct * width;

        // 1. Draw Unplayed Track (Sleek horizontal rail + buffered)
        waveCtx.beginPath();
        waveCtx.moveTo(playedWidth, centerY);
        waveCtx.lineTo(width, centerY);
        waveCtx.strokeStyle = 'rgba(255, 255, 255, 0.16)';
        waveCtx.lineWidth = 2.5;
        waveCtx.lineCap = 'round';
        waveCtx.stroke();

        // Buffered segment
        if (audioEl && audioEl.buffered && audioEl.buffered.length > 0 && duration > 0) {
            const bufferedEnd = audioEl.buffered.end(audioEl.buffered.length - 1);
            const bufferedWidth = Math.min(width, (bufferedEnd / duration) * width);
            if (bufferedWidth > playedWidth) {
                waveCtx.beginPath();
                waveCtx.moveTo(playedWidth, centerY);
                waveCtx.lineTo(bufferedWidth, centerY);
                waveCtx.strokeStyle = 'rgba(255, 255, 255, 0.28)';
                waveCtx.lineWidth = 2.5;
                waveCtx.stroke();
            }
        }

        // 2. Draw Dynamic Squiggly Sine Wave (Android Auto Style)
        if (playedWidth > 0) {
            const wavelength = 22; // px per full sine wave cycle
            const amplitude = 4.2;  // wave peak height in px
            const isPlaying = audioEl && !audioEl.paused;

            waveCtx.save();
            waveCtx.beginPath();

            const step = 2; // px resolution for smooth curve
            for (let x = 0; x <= playedWidth; x += step) {
                // Smooth envelope: taper amplitude smoothly near the start and right before the scrubber thumb
                const taperStart = Math.min(1, x / 10);
                const taperEnd = Math.min(1, (playedWidth - x) / 14);
                const env = taperStart * taperEnd;

                // Sine harmonic formula
                const y = centerY + Math.sin((x / wavelength) * (Math.PI * 2) - wavePhase) * (amplitude * env);

                if (x === 0) {
                    waveCtx.moveTo(x, y);
                } else {
                    waveCtx.lineTo(x, y);
                }
            }

            // Connect exactly to thumb position
            waveCtx.lineTo(playedWidth, centerY);

            // Radiant gradient stroke
            const grad = waveCtx.createLinearGradient(0, 0, playedWidth, 0);
            grad.addColorStop(0, '#0072f5');
            grad.addColorStop(1, '#00e5ff');

            waveCtx.strokeStyle = grad;
            waveCtx.lineWidth = 3.2;
            waveCtx.lineCap = 'round';
            waveCtx.lineJoin = 'round';
            waveCtx.shadowColor = '#00e5ff';
            waveCtx.shadowBlur = isPlaying ? 8 : 4;
            waveCtx.stroke();
            waveCtx.restore();
        }

        // 3. Draw Concentric Scrubber Thumb Handle
        const thumbRadius = isSeeking ? 7.5 : 5.8;
        waveCtx.save();
        waveCtx.beginPath();
        waveCtx.arc(playedWidth, centerY, thumbRadius, 0, Math.PI * 2);
        waveCtx.fillStyle = '#ffffff';
        waveCtx.shadowColor = '#00e5ff';
        waveCtx.shadowBlur = 10;
        waveCtx.fill();

        waveCtx.beginPath();
        waveCtx.arc(playedWidth, centerY, thumbRadius, 0, Math.PI * 2);
        waveCtx.strokeStyle = '#00e5ff';
        waveCtx.lineWidth = 2;
        waveCtx.stroke();
        waveCtx.restore();
    }

    function startWaveLoop() {
        if (waveAnimId) cancelAnimationFrame(waveAnimId);

        function tick() {
            if (audioEl && !audioEl.paused) {
                wavePhase += 0.09; // smooth wave ripple speed
                drawWaveScrubber();
            }
            waveAnimId = requestAnimationFrame(tick);
        }
        waveAnimId = requestAnimationFrame(tick);
    }

    // ── Tracklist UI ──
    function initAudioTracklist() {
        const container = document.getElementById('audio-tracklist-items');
        if (!container) return;
        container.innerHTML = '';

        geminiTracks.forEach((track, idx) => {
            const item = document.createElement('div');
            item.className = `audio-track-item ${idx === currentTrackIndex ? 'active' : ''}`;
            item.setAttribute('data-track-index', idx);
            item.onclick = () => window.playTrack(idx);

            item.innerHTML = `
                <span class="audio-item-num">${(idx + 1) < 10 ? '0' : ''}${idx + 1}</span>
                <img src="${track.art}" alt="${track.title}" class="audio-item-art" loading="lazy">
                <div class="audio-item-info">
                    <span class="audio-item-title">${track.title}</span>
                    <span class="audio-item-tag">${track.genre}</span>
                </div>
                <div class="audio-item-wave" aria-hidden="true">
                    <span></span><span></span><span></span>
                </div>
            `;
            container.appendChild(item);
        });
    }

    // ── Master Player Initializer ──
    function initMusicPlayer() {
        if (!audioEl) return;

        audioEl.volume = 0.8;
        initWaveScrubber();
        initAudioTracklist();

        // Check for deep-linking: #soundtrack?track=X or ?track=X
        let initialTrack = 0;
        const hashMatch = window.location.hash.match(/track=(\d+)/);
        const searchMatch = window.location.search.match(/track=(\d+)/);
        if (hashMatch && geminiTracks[parseInt(hashMatch[1], 10)]) {
            initialTrack = parseInt(hashMatch[1], 10);
            if (widgetEl) widgetEl.classList.remove('collapsed');
        } else if (searchMatch && geminiTracks[parseInt(searchMatch[1], 10)]) {
            initialTrack = parseInt(searchMatch[1], 10);
            if (widgetEl) widgetEl.classList.remove('collapsed');
        }

        loadTrack(initialTrack, false);
        updateLikeUI(initialTrack);
        fetchLikesFromServer();
        startWaveLoop();

        window.addEventListener('hashchange', () => {
            const hMatch = window.location.hash.match(/track=(\d+)/);
            if (hMatch && geminiTracks[parseInt(hMatch[1], 10)]) {
                const targetIdx = parseInt(hMatch[1], 10);
                loadTrack(targetIdx, false);
                if (widgetEl) widgetEl.classList.remove('collapsed');
            }
        });

        // Audio events
        audioEl.addEventListener('play', () => setPlayingStateUI(true));
        audioEl.addEventListener('pause', () => {
            setPlayingStateUI(false);
            drawWaveScrubber();
        });
        audioEl.addEventListener('ended', () => {
            const nextIdx = (currentTrackIndex + 1) % geminiTracks.length;
            loadTrack(nextIdx, true);
        });

        audioEl.addEventListener('timeupdate', () => {
            const curr = audioEl.currentTime;
            const currTimeEl = document.getElementById('audio-time-curr');
            if (currTimeEl) currTimeEl.textContent = formatAudioTime(curr);
            drawWaveScrubber();
        });

        audioEl.addEventListener('loadedmetadata', () => {
            const durTimeEl = document.getElementById('audio-time-dur');
            if (durTimeEl) durTimeEl.textContent = formatAudioTime(audioEl.duration);
            drawWaveScrubber();
        });

        audioEl.addEventListener('progress', () => {
            drawWaveScrubber();
        });

        audioEl.addEventListener('error', (e) => {
            console.warn('Audio decoding / network event error:', e);
        });

        // Close widget or share menu on outside click
        document.addEventListener('click', (e) => {
            const popover = document.getElementById('audio-share-popover');
            if (popover && popover.classList.contains('active')) {
                const shareWrap = document.querySelector('.audio-share-wrapper');
                if (shareWrap && !shareWrap.contains(e.target)) {
                    popover.classList.remove('active');
                }
            }

            if (!widgetEl || widgetEl.classList.contains('collapsed')) return;
            if (!widgetEl.contains(e.target)) {
                widgetEl.classList.add('collapsed');
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && widgetEl && !widgetEl.classList.contains('collapsed')) {
                widgetEl.classList.add('collapsed');
                const popover = document.getElementById('audio-share-popover');
                if (popover) popover.classList.remove('active');
            }
        });
    }

    initMusicPlayer();

});


