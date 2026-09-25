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

    // 2b. Spawn.co Official Partner Games Catalog
    const spawnGames = {
        'noble-gnomes': {
            id: 'noble-gnomes',
            slug: 'noble-gnomes-pond-to-pond',
            title: 'Noble Gnomes: Pond to Pond',
            headline: 'RING THE BELL, SAVE THE POND',
            genre: 'Adventure / Multiplayer',
            players: '1-4 Co-op Tug',
            boxArt: 'assets/box_noble_gnomes.webp',
            screenshot: 'assets/shot_noble_gnomes.webp',
            playUrl: 'https://www.spawn.co/@psypher5/noble-gnomes-pond-to-pond/play',
            spawnUrl: 'https://www.spawn.co/@psypher5/noble-gnomes-pond-to-pond',
            tags: ['Adventure', 'Multiplayer', 'Co-op', 'Bullet-Hell'],
            desc: 'Steer your steam tug through an overgrown garden pond, ring bells to clear evolving algae blooms, and rescue your stranded crew. Navigate aquatic hazards, survive a bullet-hell miniboss, and return the harvest safely to Port Bramble.',
            features: [
                'Ring brass bells to clear spreading algae growth across murky pond waters',
                'Rescue five trapped gnomes before the colossal pond miniboss awakens',
                'Pilot your steam tug through bullet-hell patterns and dodge incoming seed volleys',
                'Live multiplayer co-op with friends or high-tension solo rescue sorties'
            ],
            review: {
                quote: 'Such a charming and vibrant pond world! Maneuvering the steam tug while dodging algae bullets with friends is an absolute blast.',
                author: 'PortBrambleCrew',
                rating: '★★★★★'
            },
            version: 'v1.4 — Algae Bloom & Waterway Hazards',
            likes: 11
        },
        'starbloom': {
            id: 'starbloom',
            slug: 'starbloom',
            title: 'Starbloom',
            headline: 'GROW ZERO-G GEMSTONES DAILY',
            genre: 'Cozy / Crafting',
            players: 'Solo Zen',
            boxArt: 'assets/box_starbloom.webp',
            screenshot: 'assets/shot_starbloom.webp',
            playUrl: 'https://www.spawn.co/@psypher5/starbloom/play',
            spawnUrl: 'https://www.spawn.co/@psypher5/starbloom',
            tags: ['Cozy', 'Crafting', 'Sci-Fi', 'Relaxing'],
            desc: 'Crush space ores, weave magic spells, and serve wandering aliens from your cosmic camper kitchen. Every shift brings new customers, new recipes, and new cosmic wonders.',
            features: [
                'Haul asteroid chunks using tactical sonar tractor beams',
                'Hand-craft radiant amethyst, ruby, and peridot crystal recipes',
                'Serve hungry space travelers before life-support tethers expire',
                'Atmospheric zero-gravity sound design with relaxing ambient cosmic vibes'
            ],
            review: {
                quote: 'The cosmic camper vibe is so relaxing and addictive! Crushing space gems and crafting alien recipes hits the perfect cozy game loop.',
                author: 'CosmicWanderer',
                rating: '★★★★★'
            },
            version: 'v2.1 — Alien Diner Recipe Expansion',
            likes: 11
        },
        'void-warden': {
            id: 'void-warden',
            slug: 'void-warden',
            title: 'Void Warden',
            headline: 'LAUNCH INTO ORBITAL COMBAT',
            genre: 'Action / Tactics',
            players: '1-4 Squad Co-op',
            boxArt: 'assets/box_void_warden.webp',
            screenshot: 'assets/shot_void_warden.webp',
            playUrl: 'https://www.spawn.co/@psypher5/void-warden/play',
            spawnUrl: 'https://www.spawn.co/@psypher5/void-warden',
            tags: ['Action', 'Tactics', 'Multiplayer', 'Sci-Fi'],
            desc: 'You suit up as an armored penguin commando and launch from a volcanic sanctuary into a luminous slipstream battle. Destroy three machine relays, survive the drone onslaught, and extract alive.',
            features: [
                'Four combat doctrine suits engineered for solo or coordinated squad play',
                'Infiltrate and obliterate three machine relays while evading lethal drone swarms',
                'Tactile belly slides, slipstream speed boosts, and low-gravity space hop mechanics',
                'Cooperative revive protocols and adrenaline-pumping extraction countdowns'
            ],
            review: {
                quote: 'Void Warden is such a fun game! The belly slide and space hop are pretty cute xD. Fast-paced slipstream battles and awesome team mechanics!',
                author: 'laurence1',
                rating: '★★★★★'
            },
            version: 'v3538 — The Coastal Awakening',
            likes: 11
        },
        'star-sanctuary': {
            id: 'star-sanctuary',
            slug: 'star-sanctuary',
            title: 'Star Sanctuary',
            headline: 'FIND YOUR QUIET PLACE AMONG STARS',
            genre: 'Social Hub / Creative',
            players: 'Massive Social Co-op',
            boxArt: 'assets/box_star_sanctuary.webp',
            screenshot: 'assets/shot_star_sanctuary.webp',
            playUrl: 'https://www.spawn.co/@psypher5/star-sanctuary/play',
            spawnUrl: 'https://www.spawn.co/@psypher5/star-sanctuary',
            tags: ['Cozy', 'Exploration', 'Multiplayer', 'Peaceful'],
            desc: 'Step into living snowglobes suspended in space and discover peaceful worlds crafted by other players. Meet friends, explore cosmic festivals, serene lakes, and enchanted woodlands, and share your own sanctuary with the cosmos.',
            features: [
                'Explore a vast shared cosmic hub featuring seasonal festivals, lakes, and woodlands',
                'Sculpt, decorate, and share your own personal globe with visitors across the globe',
                'No combat, no timers, no pressure—just tranquil discovery and genuine connection',
                'Official community hub for Spawn creators, players, and world builders'
            ],
            review: {
                quote: 'Truly a sanctuary among the stars. Stepping inside each miniature snowglobe feels magical and meditative. The community hub is wonderful.',
                author: 'StarlitVoyager',
                rating: '★★★★★'
            },
            version: 'v1260 — Celestial Globes & Festival Grounds',
            likes: 11
        },
        'aegis-of-ages': {
            id: 'aegis-of-ages',
            slug: 'aegis-of-ages',
            title: 'Aegis of Ages',
            headline: 'KEEP THE KING ALIVE',
            genre: 'Strategy / Tower Defense',
            players: 'Tactical Defense',
            boxArt: 'assets/box_aegis_of_ages.webp',
            screenshot: 'assets/shot_aegis_of_ages.webp',
            playUrl: 'https://www.spawn.co/@psypher5/aegis-of-ages/play',
            spawnUrl: 'https://www.spawn.co/@psypher5/aegis-of-ages',
            tags: ['Strategy', 'Tactics', 'Defense', 'Medieval Arcana'],
            desc: 'You command a hilltop fortress under siege from every direction! Strategically place archers, barricades, and spikes between waves, aim the heavy ballista by hand, douse spreading structural fires, and hold the line until the king\'s keep stands unbroken.',
            features: [
                'Manual heavy ballista with tactile arc trajectory targeting and high-impact bolt physics',
                'Twelve defensive fortress sectors to fortify, repair, and reinforce between onslaughts',
                'Dynamic spreading fire simulation—manage cooldowns and douse flames before ramparts fall',
                'Hold the line against escalating siege ramps, battering rams, and elite war golems'
            ],
            review: {
                quote: 'The manual ballista aiming feels so satisfying, and the panic of fighting fires while placing emergency archers makes for intense siege defense!',
                author: 'SiegeMaster_UK',
                rating: '★★★★★'
            },
            version: 'v2.8 — Fire Propagation & Heavy Ballista Overhaul',
            likes: 11
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

    // 4. One-Pager Navigation & Smooth Scroll Controller
    const appContainer = document.getElementById('app-container');

    window.scrollToSection = function(id) {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView();
        }
    };

    window.scrollToTop = function() {
        window.scrollTo(0, 0);
    };

    window.switchTab = function(tabId, e) {
        const evt = e || window.event;
        if (evt && typeof evt.stopPropagation === 'function') {
            evt.stopPropagation();
        }

        // Dismiss any active modals or overlays
        if (typeof closeModal === 'function') closeModal();
        if (typeof closeArtLightbox === 'function') closeArtLightbox();
        if (typeof closeGameTheater === 'function') closeGameTheater();
        if (typeof closeGameShelfModal === 'function') closeGameShelfModal();
        if (typeof closeSagaJobModal === 'function') closeSagaJobModal();
        if (typeof closeWaveInlineInspector === 'function') closeWaveInlineInspector();

        if (tabId === 'home' || !tabId) {
            window.scrollToTop();
            return;
        }

        if (tabId === 'about') {
            window.scrollToSection('content-container');
        } else if (tabId === 'games') {
            window.scrollToSection('section-game-shelf');
        } else if (tabId === 'career') {
            window.scrollToSection('career-wave-strip-wrapper');
        } else if (tabId === 'projects') {
            window.open('https://starsanctuary.uk/', '_blank');
        } else if (tabId === 'contact') {
            window.scrollToSection('section-contact');
        }

        if (window.history && window.history.replaceState) {
            window.history.replaceState(null, '', '#' + tabId);
        }
    };

    window.goHome = function(e) {
        const evt = e || window.event;
        if (evt && typeof evt.stopPropagation === 'function') {
            evt.stopPropagation();
        }

        if (typeof closeModal === 'function') closeModal();
        if (typeof closeArtLightbox === 'function') closeArtLightbox();
        if (typeof closeGameTheater === 'function') closeGameTheater();
        if (typeof closeGameShelfModal === 'function') closeGameShelfModal();
        if (typeof closeSagaJobModal === 'function') closeSagaJobModal();
        if (typeof closeWaveInlineInspector === 'function') closeWaveInlineInspector();

        window.scrollToTop();

        // Clear hash on return to home (preserve soundtrack deep links)
        if (window.history && window.history.replaceState) {
            if (!window.location.hash.includes('soundtrack') && !window.location.hash.includes('track')) {
                window.history.replaceState(null, '', window.location.pathname + window.location.search);
            }
        }
    };

    // Responsive Scroll Listener: Header brand & floating bottom HUD visibility
    function handleScrollIndicator() {
        const currentScroll = window.scrollY || (document.documentElement ? document.documentElement.scrollTop : 0) || (document.body ? document.body.scrollTop : 0);
        const isScrolled = currentScroll > 120;
        if (isScrolled) {
            document.body.classList.add('scrolled-past-hero');
        } else {
            document.body.classList.remove('scrolled-past-hero');
        }
    }
    window.addEventListener('scroll', handleScrollIndicator, { passive: true });
    document.addEventListener('scroll', handleScrollIndicator, { passive: true });
    handleScrollIndicator();

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
        if (!document.getElementById('netflix-billboard')) return;
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

    // 7b. Spawn.co 3D Game Shelf & Detail Modal Engine
    let activeShelfKey = 'void-warden';
    const shelfLikesState = {};

    window.openGameShelfModal = function(key) {
        const game = spawnGames[key];
        if (!game) return;
        activeShelfKey = key;

        const modal = document.getElementById('game-shelf-modal');
        if (!modal) return;

        // Populate elements
        const titleEl = document.getElementById('shelf-modal-title');
        const headlineEl = document.getElementById('shelf-modal-headline');
        const genreEl = document.getElementById('shelf-modal-genre');
        const playersEl = document.getElementById('shelf-modal-players');
        const descEl = document.getElementById('shelf-modal-desc');
        const featuresEl = document.getElementById('shelf-modal-features');
        const versionEl = document.getElementById('shelf-modal-version');
        const boxImg = document.getElementById('shelf-modal-box-img');
        const playBtn = document.getElementById('shelf-modal-play-btn');
        const spawnLink = document.getElementById('shelf-modal-spawn-link');
        const starsEl = document.getElementById('shelf-modal-stars');
        const quoteEl = document.getElementById('shelf-modal-quote');
        const authorEl = document.getElementById('shelf-modal-author');
        const screenshotEl = document.getElementById('shelf-modal-screenshot');
        const likesEl = document.getElementById('shelf-modal-likes');

        if (titleEl) titleEl.textContent = game.title;
        if (headlineEl) headlineEl.textContent = game.headline;
        if (genreEl) genreEl.textContent = game.genre;
        if (playersEl) playersEl.textContent = game.players;
        if (descEl) descEl.textContent = game.desc;
        if (versionEl) versionEl.textContent = game.version;
        if (boxImg) {
            boxImg.src = game.boxArt;
            boxImg.alt = `${game.title} Box Art`;
        }
        if (playBtn) {
            playBtn.href = game.playUrl;
            playBtn.setAttribute('data-url', game.playUrl);
        }
        if (spawnLink) spawnLink.href = game.spawnUrl;

        // Features list
        if (featuresEl) {
            featuresEl.innerHTML = '';
            game.features.forEach(feat => {
                const li = document.createElement('li');
                li.className = 'modal-feature-item';
                li.textContent = feat;
                featuresEl.appendChild(li);
            });
        }

        // Reviews
        if (starsEl) starsEl.textContent = game.review.rating;
        if (quoteEl) quoteEl.textContent = `“${game.review.quote}”`;
        if (authorEl) authorEl.textContent = `— ${game.review.author}`;

        // In-game screenshot
        if (screenshotEl) {
            screenshotEl.src = game.screenshot;
            screenshotEl.alt = `${game.title} In-game Screenshot`;
        }

        // Likes
        const curLikes = shelfLikesState[key] !== undefined ? shelfLikesState[key] : game.likes;
        if (likesEl) likesEl.textContent = curLikes;

        const container = modal.querySelector('.shelf-modal-container');
        if (container) container.scrollTop = 0;

        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
    };

    window.closeGameShelfModal = function() {
        const modal = document.getElementById('game-shelf-modal');
        if (!modal) return;
        modal.classList.remove('show');
        document.body.style.overflow = '';
    };

    window.closeGameShelfModalOnOutsideClick = function(e) {
        const modal = document.getElementById('game-shelf-modal');
        if (e.target === modal) {
            closeGameShelfModal();
        }
    };

    window.launchActiveShelfGame = function() {
        const game = spawnGames[activeShelfKey];
        if (game && game.playUrl) {
            window.open(game.playUrl, '_blank', 'noopener,noreferrer');
        }
    };

    window.launchRandomGame = function() {
        const keys = Object.keys(spawnGames);
        const randKey = keys[Math.floor(Math.random() * keys.length)];
        openGameShelfModal(randKey);
    };

    window.inspectGameScreenshot = function() {
        const game = spawnGames[activeShelfKey];
        if (game && game.screenshot && typeof openArtLightbox === 'function') {
            openArtLightbox(game.screenshot, `${game.title} // In-Game Capture`, game.headline);
        }
    };

    window.handleShelfGameLike = function(e) {
        if (e) e.stopPropagation();
        const game = spawnGames[activeShelfKey];
        if (!game) return;

        if (!shelfLikesState[activeShelfKey]) {
            shelfLikesState[activeShelfKey] = game.likes + 1;
        } else {
            shelfLikesState[activeShelfKey] += 1;
        }

        const likesEl = document.getElementById('shelf-modal-likes');
        const heartEl = document.getElementById('shelf-modal-like-heart');
        if (likesEl) {
            likesEl.textContent = shelfLikesState[activeShelfKey];
            likesEl.classList.add('pop');
            setTimeout(() => likesEl.classList.remove('pop'), 400);
        }
        if (heartEl) {
            heartEl.textContent = '❤️';
        }
    };

    // 3D Shelf Box Tilt Mechanics
    let boxTiltRaf = null;
    window.handleBox3DTilt = function(e, boxEl) {
        if (!boxEl) return;
        const boxWrap = boxEl.querySelector('.box-3d-wrap');
        const shine = boxEl.querySelector('.box-shine-layer');
        if (!boxWrap) return;

        const rect = boxEl.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 to 0.5
        const y = (e.clientY - rect.top) / rect.height - 0.5;

        const rotY = (x * 22).toFixed(1);
        const rotX = (-y * 18).toFixed(1);

        if (boxTiltRaf) cancelAnimationFrame(boxTiltRaf);
        boxTiltRaf = requestAnimationFrame(() => {
            boxWrap.style.transform = `translateY(-14px) rotateY(${rotY}deg) rotateX(${rotX}deg) scale(1.04)`;
            if (shine) {
                const shineX = (x + 0.5) * 100;
                const shineY = (y + 0.5) * 100;
                shine.style.background = `radial-gradient(circle at ${shineX}% ${shineY}%, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.05) 50%, transparent 80%)`;
                shine.style.opacity = '1';
            }
        });
    };

    window.resetBox3DTilt = function(boxEl) {
        if (!boxEl) return;
        const boxWrap = boxEl.querySelector('.box-3d-wrap');
        const shine = boxEl.querySelector('.box-shine-layer');
        if (boxTiltRaf) cancelAnimationFrame(boxTiltRaf);

        if (boxWrap) {
            boxWrap.style.transform = `translateY(0) rotateY(-8deg) rotateX(2deg) scale(1)`;
        }
        if (shine) {
            shine.style.opacity = '0';
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

    // Global Keyboard Listeners (Escape, Arrow Navigation, Shelf Hotkeys)
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
            closeArtLightbox();
            closeGameTheater();
            closeGameShelfModal();
            phoneNavBack();
        } else if (e.code === 'Space') {
            const shelfModal = document.getElementById('game-shelf-modal');
            if (shelfModal && shelfModal.classList.contains('show')) {
                // Avoid accidental launch if focused on an input or textarea
                const activeTag = document.activeElement ? document.activeElement.tagName.toLowerCase() : '';
                if (activeTag !== 'input' && activeTag !== 'textarea') {
                    e.preventDefault();
                    launchActiveShelfGame();
                }
            }
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

    // Lightweight Web Audio Synth SFX for Diorama Micro-Toys & Overworld Map
    const DioramaAudio = (function() {
        let ctx = null;
        let effectsMuted = false;

        function getContext() {
            if (!ctx) {
                const AudioCtx = window.AudioContext || window.webkitAudioContext;
                if (AudioCtx) ctx = new AudioCtx();
            }
            if (ctx && ctx.state === 'suspended') {
                ctx.resume();
            }
            return ctx;
        }

        function isMuted() {
            if (effectsMuted) return true;
            const player = document.getElementById('gemini-audio-player');
            return player ? player.muted : false;
        }

        return {
            toggleMute() {
                effectsMuted = !effectsMuted;
                return effectsMuted;
            },
            isEffectsMuted() {
                return effectsMuted;
            },
            playHop() {
                if (isMuted()) return;
                const c = getContext();
                if (!c) return;
                try {
                    const now = c.currentTime;
                    const osc = c.createOscillator();
                    const gain = c.createGain();
                    osc.type = 'triangle';
                    osc.frequency.setValueAtTime(260, now);
                    osc.frequency.exponentialRampToValueAtTime(520, now + 0.12);
                    gain.gain.setValueAtTime(0.16, now);
                    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.14);
                    osc.connect(gain);
                    gain.connect(c.destination);
                    osc.start(now);
                    osc.stop(now + 0.14);
                } catch(e) {}
            },
            playArrival() {
                if (isMuted()) return;
                const c = getContext();
                if (!c) return;
                try {
                    const now = c.currentTime;
                    [523.25, 659.25, 783.99, 1046.50].forEach((freq, idx) => {
                        const osc = c.createOscillator();
                        const gain = c.createGain();
                        osc.type = 'sine';
                        osc.frequency.setValueAtTime(freq, now + idx * 0.05);
                        gain.gain.setValueAtTime(0.1, now + idx * 0.05);
                        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.05 + 0.2);
                        osc.connect(gain);
                        gain.connect(c.destination);
                        osc.start(now + idx * 0.05);
                        osc.stop(now + idx * 0.05 + 0.22);
                    });
                } catch(e) {}
            },
            play(type) {
                if (isMuted()) return;
                const c = getContext();
                if (!c) return;

                if (type === 'hop') {
                    this.playHop();
                    return;
                }
                if (type === 'arrival') {
                    this.playArrival();
                    return;
                }

                try {
                    const now = c.currentTime;
                    if (type === 'ring') {
                        // Sonic golden ring chime (two high crystalline harmonic bells)
                        const osc = c.createOscillator();
                        const gain = c.createGain();
                        osc.type = 'sine';
                        osc.frequency.setValueAtTime(987.77, now);
                        osc.frequency.setValueAtTime(1318.51, now + 0.08);
                        gain.gain.setValueAtTime(0.2, now);
                        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.45);
                        osc.connect(gain);
                        gain.connect(c.destination);
                        osc.start(now);
                        osc.stop(now + 0.45);
                    } else if (type === 'sonar') {
                        // Sonar radar echo ping
                        const osc = c.createOscillator();
                        const gain = c.createGain();
                        osc.type = 'sine';
                        osc.frequency.setValueAtTime(800, now);
                        gain.gain.setValueAtTime(0.25, now);
                        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.65);
                        osc.connect(gain);
                        gain.connect(c.destination);
                        osc.start(now);
                        osc.stop(now + 0.65);
                    } else if (type === 'laser') {
                        // Laser diffraction sweep and optical harmonic ping
                        const osc = c.createOscillator();
                        const gain = c.createGain();
                        osc.type = 'sawtooth';
                        osc.frequency.setValueAtTime(1400, now);
                        osc.frequency.exponentialRampToValueAtTime(320, now + 0.24);
                        gain.gain.setValueAtTime(0.14, now);
                        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.26);
                        osc.connect(gain);
                        gain.connect(c.destination);
                        osc.start(now);
                        osc.stop(now + 0.26);
                    } else if (type === 'windtunnel') {
                        // Aerodynamic wind tunnel whoosh + digital compute surge
                        const osc = c.createOscillator();
                        const gain = c.createGain();
                        osc.type = 'triangle';
                        osc.frequency.setValueAtTime(160, now);
                        osc.frequency.linearRampToValueAtTime(520, now + 0.18);
                        osc.frequency.exponentialRampToValueAtTime(110, now + 0.42);
                        gain.gain.setValueAtTime(0.2, now);
                        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.42);
                        osc.connect(gain);
                        gain.connect(c.destination);
                        osc.start(now);
                        osc.stop(now + 0.42);
                        // Followed by compute AI surge
                        const osc2 = c.createOscillator();
                        const gain2 = c.createGain();
                        osc2.type = 'sine';
                        osc2.frequency.setValueAtTime(1760, now + 0.1);
                        gain2.gain.setValueAtTime(0.12, now + 0.1);
                        gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.32);
                        osc2.connect(gain2);
                        gain2.connect(c.destination);
                        osc2.start(now + 0.1);
                        osc2.stop(now + 0.32);
                    } else if (type === 'shimmer') {
                        // Delicate crystalline silver bells
                        [1046.5, 1318.5, 1567.9, 2093.0].forEach((freq, idx) => {
                            const osc = c.createOscillator();
                            const gain = c.createGain();
                            osc.type = 'sine';
                            osc.frequency.setValueAtTime(freq, now + idx * 0.045);
                            gain.gain.setValueAtTime(0.12, now + idx * 0.045);
                            gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.045 + 0.35);
                            osc.connect(gain);
                            gain.connect(c.destination);
                            osc.start(now + idx * 0.045);
                            osc.stop(now + idx * 0.045 + 0.35);
                        });
                    } else if (type === 'academic') {
                        // Triumphant graduation collegiate fanfare
                        [523.25, 659.25, 783.99, 1046.50].forEach((freq, idx) => {
                            const osc = c.createOscillator();
                            const gain = c.createGain();
                            osc.type = 'triangle';
                            osc.frequency.setValueAtTime(freq, now + idx * 0.06);
                            gain.gain.setValueAtTime(0.15, now + idx * 0.06);
                            gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.06 + 0.42);
                            osc.connect(gain);
                            gain.connect(c.destination);
                            osc.start(now + idx * 0.06);
                            osc.stop(now + idx * 0.06 + 0.42);
                        });
                    } else if (type === 'server' || type === 'telemetry') {
                        // High-tech digital bleeps
                        [0, 0.07].forEach((delay, idx) => {
                            const osc = c.createOscillator();
                            const gain = c.createGain();
                            osc.type = 'triangle';
                            osc.frequency.setValueAtTime(idx === 0 ? 1200 : 1600, now + delay);
                            gain.gain.setValueAtTime(0.15, now + delay);
                            gain.gain.exponentialRampToValueAtTime(0.001, now + delay + 0.06);
                            osc.connect(gain);
                            gain.connect(c.destination);
                            osc.start(now + delay);
                            osc.stop(now + delay + 0.06);
                        });
                    } else if (type === 'arcade') {
                        // 8-bit coin arpeggio
                        [523.25, 659.25, 783.99, 1046.50].forEach((freq, idx) => {
                            const osc = c.createOscillator();
                            const gain = c.createGain();
                            osc.type = 'square';
                            osc.frequency.setValueAtTime(freq, now + idx * 0.05);
                            gain.gain.setValueAtTime(0.08, now + idx * 0.05);
                            gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.05 + 0.08);
                            osc.connect(gain);
                            gain.connect(c.destination);
                            osc.start(now + idx * 0.05);
                            osc.stop(now + idx * 0.05 + 0.08);
                        });
                    } else if (type === 'launch') {
                        // Drag launch rev
                        const osc = c.createOscillator();
                        const gain = c.createGain();
                        osc.type = 'sawtooth';
                        osc.frequency.setValueAtTime(220, now);
                        osc.frequency.linearRampToValueAtTime(880, now + 0.25);
                        gain.gain.setValueAtTime(0.15, now);
                        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
                        osc.connect(gain);
                        gain.connect(c.destination);
                        osc.start(now);
                        osc.stop(now + 0.3);
                    } else {
                        // Clean tactile blip
                        const osc = c.createOscillator();
                        const gain = c.createGain();
                        osc.type = 'sine';
                        osc.frequency.setValueAtTime(650, now);
                        osc.frequency.exponentialRampToValueAtTime(250, now + 0.12);
                        gain.gain.setValueAtTime(0.15, now);
                        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
                        osc.connect(gain);
                        gain.connect(c.destination);
                        osc.start(now);
                        osc.stop(now + 0.12);
                    }
                } catch (e) {
                    // Autoplay policy or unsupported audio
                }
            }
        };
    })();

    // 12. Career Timeline & Diorama Wave Nodes Manager
    const careerMilestones = [
        {
            key: 'classified-defence',
            date: 'Present',
            year: "'26",
            role: 'Senior Engineer - Software Engineering (Assurance)',
            company: '[CLASSIFIED] Defence & Security',
            tags: ['Defence Systems', 'Telemetry Assurance', 'Sub-Surface QA'],
            isMystery: true,
            stamp: '📡 PING! SUB-SURFACE',
            stampClass: 'stamp-emerald',
            narrative: 'Classified mission-critical assurance and sub-surface telemetry systems. Building hardened automated test foundations where zero defect leakage is tolerated.',
            sfx: 'sonar',
            toyName: 'Stealth Submarine Scale Model',
            toyAction: '⚓ Executive naval scale model resting on polished brass mounts!',
            meshType: 'radar',
            color: 0x10b981,
            conceptImg: 'assets/models/diorama_concept_defence.jpg',
            logoImg: 'assets/commercial/logos/classified.svg',
            companyLogoSvg: `
                <svg viewBox="0 0 115 24" class="logo-classified" fill="none">
                    <rect x="2" y="2" width="111" height="20" rx="10" fill="rgba(6, 78, 59, 0.45)" stroke="rgba(16, 185, 129, 0.6)" stroke-width="1.2"/>
                    <circle cx="14" cy="12" r="4.5" fill="none" stroke="#34d399" stroke-width="1.2"/>
                    <circle cx="14" cy="12" r="1.8" fill="#10b981"/>
                    <line x1="14" y1="5" x2="14" y2="19" stroke="#34d399" stroke-width="0.8" stroke-dasharray="1 1"/>
                    <line x1="7" y1="12" x2="21" y2="12" stroke="#34d399" stroke-width="0.8" stroke-dasharray="1 1"/>
                    <text x="25" y="15" fill="#ecfdf5" font-family="monospace" font-size="8.5" font-weight="900" letter-spacing="1.2">CLASSIFIED</text>
                </svg>
            `,
            propSvg: `
                <div class="prop-radar-dome">
                    <div class="radar-ping-ring"></div>
                    <div class="radar-screen">
                        <div class="radar-blip"></div>
                        <div class="radar-sweep-line"></div>
                    </div>
                </div>
            `
        },
        {
            key: 'synopsys-ansys',
            date: 'Feb 2023 — Apr 2026',
            year: "'23",
            role: 'Staff R&D Engineer / Tech Architect',
            company: 'Synopsys & Ansys',
            tags: ['HPC Cloud', 'Agentic AI', 'Playwright', 'Cypress'],
            stamp: '⚡ SCALE UP!',
            stampClass: 'stamp-cyan',
            narrative: 'Architected test foundations for cloud HPC simulation and digital twins. Spearheaded agentic AI quality passes and high-concurrency browser automation clusters.',
            sfx: 'windtunnel',
            toyName: 'Wind Tunnel & Server Racks',
            toyAction: '⚡ Mach 1 wind tunnel streamlines & GPU cluster synced!',
            meshType: 'synopsys',
            color: 0x00f0ff,
            conceptImg: 'assets/models/diorama_concept_synopsys.jpg',
            logoImg: 'assets/commercial/logos/synopsys_ansys.svg',
            companyLogoSvg: `
                <svg viewBox="0 0 125 24" class="logo-synopsys-ansys" fill="none">
                    <rect x="2" y="2" width="121" height="20" rx="10" fill="rgba(15, 23, 42, 0.75)" stroke="rgba(0, 240, 255, 0.45)" stroke-width="1"/>
                    <path d="M9 13 C12 7, 15 17, 18 11" stroke="#00f0ff" stroke-width="2" stroke-linecap="round"/>
                    <text x="23" y="14.5" fill="#f8fafc" font-family="'Segoe UI', sans-serif" font-size="8.5" font-weight="800" letter-spacing="0.4">SYNOPSYS</text>
                    <text x="73" y="14.5" fill="#64748b" font-family="'Segoe UI', sans-serif" font-size="8">&amp;</text>
                    <text x="83" y="14.5" fill="#fbbf24" font-family="'Segoe UI', sans-serif" font-size="8.5" font-weight="900" font-style="italic" letter-spacing="0.6">Ansys</text>
                </svg>
            `,
            propSvg: `
                <div class="prop-wind-tunnel-cluster">
                    <div class="server-blade-rack rack-left">
                        <div class="rack-unit"><span class="rack-led l-cyan"></span><span class="rack-led l-blue"></span></div>
                        <div class="rack-unit"><span class="rack-led l-emerald"></span><span class="rack-led l-cyan"></span></div>
                        <div class="rack-unit"><span class="rack-led l-blue"></span><span class="rack-led l-emerald"></span></div>
                    </div>
                    <div class="wind-tunnel-chamber">
                        <div class="tunnel-glass-tube">
                            <div class="aero-test-model"></div>
                            <div class="cfd-streamlines">
                                <div class="streamline line-top"></div>
                                <div class="streamline line-mid"></div>
                                <div class="streamline line-bot"></div>
                            </div>
                        </div>
                    </div>
                    <div class="server-blade-rack rack-right">
                        <div class="rack-unit"><span class="rack-led l-emerald"></span><span class="rack-led l-cyan"></span></div>
                        <div class="rack-unit"><span class="rack-led l-cyan"></span><span class="rack-led l-blue"></span></div>
                        <div class="rack-unit"><span class="rack-led l-blue"></span><span class="rack-led l-cyan"></span></div>
                    </div>
                </div>
            `
        },
        {
            key: 'malvern',
            date: 'Sep 2018 — Feb 2023',
            year: "'18",
            role: 'Software Test Engineer',
            company: 'Malvern Panalytical',
            tags: ['Ranorex', 'UX Systems', 'Azure DevOps'],
            stamp: '🔬 LASER FOCUS!',
            stampClass: 'stamp-rose',
            narrative: 'Engineered automated validation for physical particle sizing and laser diffraction instruments. Bridged scientific hardware calibration with high-precision UI testing.',
            sfx: 'laser',
            toyName: 'Laser Diffraction Chamber',
            toyAction: '🔬 Laser diffraction optics calibrated to 0.1 nanometers!',
            meshType: 'laser',
            color: 0xf43f5e,
            conceptImg: 'assets/models/diorama_concept_malvern.jpg',
            logoImg: 'assets/commercial/logos/malvern.svg',
            companyLogoSvg: `
                <svg viewBox="0 0 120 24" class="logo-malvern" fill="none">
                    <rect x="2" y="2" width="116" height="20" rx="10" fill="rgba(15, 23, 42, 0.75)" stroke="rgba(244, 63, 94, 0.45)" stroke-width="1"/>
                    <circle cx="12" cy="9" r="2.5" fill="#f43f5e"/>
                    <circle cx="18" cy="15" r="2.5" fill="#00f0ff"/>
                    <circle cx="18" cy="9" r="1.8" fill="#94a3b8"/>
                    <circle cx="12" cy="15" r="1.8" fill="#38bdf8"/>
                    <line x1="12" y1="9" x2="18" y2="15" stroke="#f43f5e" stroke-width="1"/>
                    <text x="25" y="12" fill="#f8fafc" font-family="'Segoe UI', sans-serif" font-size="7.5" font-weight="800" letter-spacing="0.4">MALVERN</text>
                    <text x="25" y="18" fill="#fda4af" font-family="'Segoe UI', sans-serif" font-size="6" font-weight="700" letter-spacing="0.8">PANALYTICAL</text>
                </svg>
            `,
            propSvg: `
                <div class="prop-laser-diffraction">
                    <div class="laser-diode-mount">
                        <div class="diode-lens"></div>
                        <div class="collimated-red-beam"></div>
                    </div>
                    <div class="quartz-particle-cell">
                        <div class="cuvette-liquid">
                            <div class="micro-particle p1"></div>
                            <div class="micro-particle p2"></div>
                            <div class="micro-particle p3"></div>
                            <div class="micro-particle p4"></div>
                        </div>
                    </div>
                    <div class="diffraction-scatter-fan">
                        <div class="diffraction-ring ring-inner"></div>
                        <div class="diffraction-ring ring-mid"></div>
                        <div class="diffraction-ring ring-outer"></div>
                    </div>
                </div>
            `
        },
        {
            key: 'sega',
            date: 'Aug 2017 — Apr 2018',
            year: "'17",
            role: 'QA Tester',
            company: 'SEGA Hardlight',
            tags: ['Sonic Franchise', 'PC QA', 'Mobile SDKs'],
            stamp: '🌀 GOTTA GO FAST!',
            stampClass: 'stamp-amber',
            narrative: 'Shipped Sonic Forces, Sonic Dash 2, and Sonic Boom. Validated high-speed gameplay feel, physics tunnels, and monetization flows across mobile and PC.',
            sfx: 'ring',
            toyName: 'Sonic Loop & Gold Ring',
            toyAction: '✨ Sonic loop cleared! +100 Rings Collected!',
            meshType: 'sega',
            color: 0x0284c7,
            conceptImg: 'assets/models/diorama_concept_sega.jpg',
            logoImg: 'assets/commercial/logos/sega.png',
            companyLogoSvg: `
                <svg viewBox="0 0 115 24" class="logo-sega" fill="none">
                    <rect x="2" y="2" width="111" height="20" rx="10" fill="rgba(10, 14, 26, 0.85)" stroke="rgba(245, 158, 11, 0.55)" stroke-width="1"/>
                    <text x="9" y="15" fill="#0284c7" font-family="'Arial Black', sans-serif" font-size="11.5" font-weight="900" letter-spacing="1">SEGA</text>
                    <rect x="49" y="5" width="58" height="14" rx="3" fill="rgba(245, 158, 11, 0.2)" stroke="#f59e0b" stroke-width="1"/>
                    <text x="53" y="15" fill="#fef08a" font-family="monospace" font-size="7.2" font-weight="800" letter-spacing="0.5">HARDLIGHT</text>
                </svg>
            `,
            propSvg: `
                <div class="prop-sonic-loop">
                    <div class="sonic-loop-track-wrap">
                        <div class="sonic-loop-track">
                            <div class="sonic-grass-crest"></div>
                            <div class="sonic-track-checker"></div>
                        </div>
                        <div class="sonic-loop-ring">
                            <div class="sonic-golden-ring">
                                <div class="inner-sheen"></div>
                            </div>
                        </div>
                        <div class="sonic-dash-streak"></div>
                    </div>
                </div>
            `
        },
        {
            key: 'connect',
            date: 'Oct 2016 — Jul 2017',
            year: "'16",
            role: 'QA & Automation Tester',
            company: 'Connect Group (JLR)',
            tags: ['Java', 'Cucumber BDD', 'Selenium'],
            stamp: '🚗 TELEMETRY SYNC!',
            stampClass: 'stamp-cyan',
            narrative: 'Engineered BDD automation in Java & Cucumber for Jaguar Land Rover connected vehicle telemetry, tracking sensor pipelines from ECU to dealer.',
            sfx: 'telemetry',
            toyName: 'JLR Telemetry ECU',
            toyAction: '🚗 JLR telematics bus synced at 500kbps!',
            meshType: 'ecu',
            color: 0x10b981,
            conceptImg: 'assets/models/diorama_concept_jlr.jpg',
            logoImg: 'assets/commercial/logos/jlr.svg',
            companyLogoSvg: `
                <svg viewBox="0 0 115 24" class="logo-jlr" fill="none">
                    <rect x="2" y="2" width="111" height="20" rx="10" fill="rgba(6, 78, 59, 0.35)" stroke="rgba(16, 185, 129, 0.55)" stroke-width="1"/>
                    <rect x="6" y="5" width="28" height="14" rx="7" fill="#064e3b" stroke="#34d399" stroke-width="1"/>
                    <text x="10" y="15" fill="#fef08a" font-family="'Segoe UI', sans-serif" font-size="7.5" font-weight="900" font-style="italic">JLR</text>
                    <text x="39" y="14.5" fill="#f8fafc" font-family="'Segoe UI', sans-serif" font-size="8" font-weight="800" letter-spacing="0.5">CONNECT</text>
                </svg>
            `,
            propSvg: `
                <div class="prop-auto-ecu">
                    <div class="ecu-title"><span class="dot"></span><span>CAN-BUS</span></div>
                    <div class="ecu-bus">
                        <div class="ecu-pin"></div>
                        <div class="ecu-pin" style="animation-delay:0.2s"></div>
                        <div class="ecu-pin" style="animation-delay:0.4s"></div>
                        <div class="ecu-pin" style="animation-delay:0.6s"></div>
                    </div>
                </div>
            `
        },
        {
            key: 'ndevr',
            date: 'Aug 2016 — Sep 2016',
            year: "'16",
            role: 'Associate Project Manager',
            company: 'ndevr Ltd',
            tags: ['Agile Scrum', 'IoT Incubator'],
            stamp: '📡 IOT BROADCAST!',
            stampClass: 'stamp-purple',
            narrative: 'Project-managed hardware/software IoT incubator prototypes for international exchange students, coordinating agile sprints across sensor telemetry, microcontrollers, and robotics.',
            sfx: 'server',
            toyName: 'IoT Lab & Exchange Globe',
            toyAction: '📡 International IoT exchange telemetry linked!',
            meshType: 'beacon',
            color: 0xa855f7,
            conceptImg: 'assets/models/diorama_concept_ndevr.jpg',
            logoImg: 'assets/commercial/logos/ndevr.svg',
            companyLogoSvg: `
                <svg viewBox="0 0 100 24" class="logo-ndevr" fill="none">
                    <rect x="2" y="2" width="96" height="20" rx="10" fill="rgba(88, 28, 135, 0.35)" stroke="rgba(168, 85, 247, 0.55)" stroke-width="1"/>
                    <circle cx="14" cy="12" r="4" fill="rgba(168, 85, 247, 0.4)" stroke="#c084fc" stroke-width="1.2"/>
                    <circle cx="14" cy="12" r="1.5" fill="#f3e8ff"/>
                    <text x="24" y="15" fill="#f5d0fe" font-family="'Segoe UI', sans-serif" font-size="10" font-weight="800" letter-spacing="0.8">ndevr</text>
                </svg>
            `,
            propSvg: `
                <div class="prop-iot-beacon">
                    <div class="beacon-wave"></div>
                    <div class="beacon-tower">
                        <div class="beacon-light"></div>
                        <div class="beacon-mast"></div>
                    </div>
                </div>
            `
        },
        {
            key: 'adactus',
            date: 'Oct 2015 — Jul 2016',
            year: "'15",
            role: 'Junior QA Tester',
            company: 'Adactus & EDM Group',
            tags: ['Pizza Hut Loyalty', 'Cross-Browser'],
            stamp: '🍕 ORDER UP!',
            stampClass: 'stamp-amber',
            narrative: 'Rigorous cross-browser and mobile web verification for high-volume loyalty platforms including Pizza Hut Rewards.',
            sfx: 'launch',
            toyName: 'Loyalty Ticket Stamp',
            toyAction: '🍕 Loyalty voucher generated and validated!',
            meshType: 'stamp',
            color: 0xf59e0b,
            conceptImg: 'assets/models/diorama_concept_pizzahut.jpg',
            logoImg: 'assets/commercial/logos/pizzahut.png',
            companyLogoSvg: `
                <svg viewBox="0 0 115 24" class="logo-adactus" fill="none">
                    <rect x="2" y="2" width="111" height="20" rx="10" fill="rgba(69, 26, 3, 0.35)" stroke="rgba(245, 158, 11, 0.55)" stroke-width="1"/>
                    <path d="M8 15 L15 7 L22 15 Z" fill="#ef4444"/>
                    <rect x="10" y="15" width="10" height="2" fill="#fbbf24"/>
                    <text x="27" y="13" fill="#f8fafc" font-family="'Segoe UI', sans-serif" font-size="7.5" font-weight="800" letter-spacing="0.4">ADACTUS</text>
                    <text x="27" y="19" fill="#fca5a5" font-family="monospace" font-size="6" font-weight="700">PIZZA HUT</text>
                </svg>
            `,
            propSvg: `
                <div class="prop-loyalty-stamp">
                    <span class="stamp-icon">🍕</span>
                    <div class="stamp-seal">PASS ✓</div>
                </div>
            `
        },
        {
            key: 'silverlining',
            date: 'Jun 2015 — Sep 2015',
            year: "'15",
            role: 'QA Lead (Co-founder)',
            company: 'Silver Lining QA',
            tags: ['Dawn of Titans', 'SkyScrappers'],
            stamp: '🛡️ SQUAD ASSEMBLED!',
            stampClass: 'stamp-cyan',
            narrative: 'Co-founded an indie QA agency providing embedded QA testing for titles like Dawn of Titans and SkyScrappers.',
            sfx: 'shimmer',
            toyName: 'Silver Cloud & QA Shield',
            toyAction: '☁️ Silver Lining QA pass deployed: 100% bug free!',
            meshType: 'cloud',
            color: 0x00a0e3,
            conceptImg: 'assets/models/diorama_concept_silverlining.jpg',
            logoImg: 'assets/commercial/logos/silverlining.png',
            companyLogoSvg: `
                <div class="logo-silverlining-wrap" title="Silver Lining QA">
                    <img src="assets/commercial/icons/silverlining_logo.png" alt="Silver Lining QA Logo" class="logo-silverlining-img" />
                </div>
            `,
            propSvg: `
                <div class="prop-silver-cloud">
                    <div class="cloud-ribbon-stage">
                        <img src="assets/commercial/icons/silverlining_cloud.png" alt="Silver Lining QA Cloud" class="cloud-ribbon-emblem" />
                        <div class="cloud-glow-underlay"></div>
                    </div>
                    <div class="cloud-sparkles">
                        <span class="c-spark sp-1">✦</span>
                        <span class="c-spark sp-2">✧</span>
                    </div>
                </div>
            `
        },
        {
            key: 'zynga',
            date: 'Jul 2014 — May 2015',
            year: "'14",
            role: 'Game Tester',
            company: 'Zynga / NaturalMotion',
            tags: ['CSR Racing', 'Euphoria Physics'],
            stamp: '🏎️ GREEN LIGHT!',
            stampClass: 'stamp-rose',
            narrative: 'Stress-tested AAA mobile drag racer CSR Racing, verifying Euphoria physics engine ragdolls, vehicle customisation, and server multiplayer.',
            sfx: 'launch',
            toyName: 'Drag Strip Staging Tree',
            toyAction: '🏎️ RPM pinned! Perfect launch 0.001s RT!',
            meshType: 'dragtree',
            color: 0xef4444,
            conceptImg: 'assets/models/diorama_concept_zynga.jpg',
            logoImg: 'assets/commercial/logos/zynga.svg',
            companyLogoSvg: `
                <svg viewBox="0 0 100 24" class="logo-zynga" fill="none">
                    <rect x="2" y="2" width="96" height="20" rx="10" fill="rgba(15, 23, 42, 0.75)" stroke="rgba(239, 68, 68, 0.55)" stroke-width="1"/>
                    <path d="M7 14 C7 11.5, 9.5 9, 12 9 C13 9, 13.5 8, 14.5 7 C15.5 8.5, 17 9.5, 17 11 C17 11, 19.5 10.5, 20 12 C20.5 13.5, 19 15, 17.5 15 L15.5 13.5 L14 15 L11.5 15 L9 13.5 L7.5 15 Z" fill="#ef4444"/>
                    <text x="26" y="16" fill="#f8fafc" font-family="'Arial Black', sans-serif" font-size="11.5" font-weight="900" letter-spacing="-0.4">zynga</text>
                </svg>
            `,
            propSvg: `
                <div class="prop-drag-tree">
                    <div class="tree-light tree-amber-1"></div>
                    <div class="tree-light tree-amber-2"></div>
                    <div class="tree-light tree-green"></div>
                </div>
            `
        },
        {
            key: 'tinderstone',
            date: 'Nov 2013 — Aug 2014',
            year: "'13",
            role: '3D Artist & QA Tester',
            company: 'Tinderstone & Syscom',
            tags: ['3D Retopology', '3ds Max'],
            stamp: '📐 VERTEX SNAP!',
            stampClass: 'stamp-cyan',
            narrative: 'Digitised high-end retail furniture for DFS using a 360° DSLR photogrammetry rig, converting multi-angle photography into optimized 3D textured assets and clean quad topology.',
            sfx: 'server',
            toyName: '360° Photogrammetry Rig & Wireframe Sofa',
            toyAction: '📐 DFS 3D sofa digitized: 0 ngons, clean photogrammetry quad mesh!',
            meshType: 'cube',
            color: 0x00f0ff,
            conceptImg: 'assets/models/diorama_concept_tinderstone.jpg',
            logoImg: 'assets/commercial/logos/tinderstone.svg',
            companyLogoSvg: `
                <svg viewBox="0 0 115 24" class="logo-tinderstone" fill="none">
                    <rect x="2" y="2" width="111" height="20" rx="10" fill="rgba(15, 23, 42, 0.75)" stroke="rgba(0, 240, 255, 0.45)" stroke-width="1"/>
                    <polygon points="12,4 20,8 16,18 8,18 4,8" fill="rgba(0, 240, 255, 0.2)" stroke="#00f0ff" stroke-width="1"/>
                    <line x1="12" y1="4" x2="16" y2="18" stroke="#38bdf8" stroke-width="0.8"/>
                    <text x="26" y="12" fill="#f8fafc" font-family="'Segoe UI', sans-serif" font-size="7.5" font-weight="800" letter-spacing="0.4">TINDERSTONE</text>
                    <text x="26" y="18" fill="#7dd3fc" font-family="monospace" font-size="6" font-weight="700">3D &amp; SYSCOM</text>
                </svg>
            `,
            propSvg: `
                <div class="prop-wireframe-cube">
                    <div class="wireframe-box">
                        <div class="vert-dot v-tl"></div>
                        <div class="vert-dot v-tr"></div>
                        <div class="vert-dot v-bl"></div>
                        <div class="vert-dot v-br"></div>
                        <span class="wireframe-label">XYZ</span>
                    </div>
                </div>
            `
        },
        {
            key: 'ticketmaster',
            date: 'Mar 2013 — Sep 2013',
            year: "'13",
            role: 'Graduate QA Engineer',
            company: 'Ticketmaster / LiveNation',
            tags: ['Sports Ticketing', 'LiveNation'],
            stamp: '🎟️ MATCHDAY PASS!',
            stampClass: 'stamp-amber',
            narrative: 'QA and validation for high-volume football and rugby sports ticketing infrastructure, turnstile access gateways, venue capacity metrics, and queueing logic.',
            sfx: 'laser',
            toyName: 'Matchday Kiosk & Stadium Turnstile',
            toyAction: '🎟️ Turnstile cleared: Sports Matchday Pass Validated!',
            meshType: 'ticket',
            color: 0x0284c7,
            conceptImg: 'assets/models/diorama_concept_ticketmaster.jpg',
            logoImg: 'assets/commercial/logos/ticketmaster.png',
            companyLogoSvg: `
                <svg viewBox="0 0 120 24" class="logo-ticketmaster" fill="none">
                    <rect x="2" y="2" width="116" height="20" rx="10" fill="rgba(15, 23, 42, 0.75)" stroke="rgba(2, 132, 199, 0.55)" stroke-width="1"/>
                    <circle cx="13" cy="12" r="8" fill="#0284c7" stroke="#38bdf8" stroke-width="1"/>
                    <text x="10" y="16.5" fill="#fff" font-family="Georgia, serif" font-size="12" font-weight="bold" font-style="italic">t</text>
                    <text x="26" y="15" fill="#f8fafc" font-family="'Arial Rounded MT Bold', sans-serif" font-size="8.5" font-weight="700" letter-spacing="0.2">ticketmaster</text>
                </svg>
            `,
            propSvg: `
                <div class="prop-vip-ticket">
                    <div class="ticket-header"><span>VIP</span><span>#01</span></div>
                    <div class="ticket-barcode">
                        <div class="bar b1"></div><div class="bar b2"></div><div class="bar b3"></div><div class="bar b4"></div>
                        <div class="bar b1"></div><div class="bar b3"></div>
                    </div>
                    <div class="laser-scanner-line"></div>
                </div>
            `
        },
        {
            key: 'staffuni',
            date: 'Sep 2007 — Feb 2013',
            year: "'07",
            role: 'MEng Games Design & 3D Modelling',
            company: 'Staffordshire University',
            tags: ["Master's (MEng)", 'Engine Tech'],
            stamp: '🎓 GRADUATED MEng',
            stampClass: 'stamp-purple',
            narrative: 'Five years of game engine engineering, C++ math, HLSL vertex/pixel shaders, physics simulation, and 3D environment modelling.',
            sfx: 'academic',
            toyName: 'Uni Hall & Mortarboard Cap',
            toyAction: '🎓 Graduation honors achieved! MEng Game Design unlocked!',
            meshType: 'uni',
            color: 0x991b1b,
            conceptImg: 'assets/models/diorama_concept_staffs.jpg',
            logoImg: 'assets/commercial/logos/staffsuni.svg',
            companyLogoSvg: `
                <svg viewBox="0 0 120 24" class="logo-staffs" fill="none">
                    <rect x="2" y="2" width="116" height="20" rx="10" fill="rgba(69, 10, 10, 0.4)" stroke="rgba(239, 68, 68, 0.55)" stroke-width="1"/>
                    <path d="M6 5 L18 5 C18 12, 14 16, 12 18 C10 16, 6 12, 6 5 Z" fill="#991b1b" stroke="#ef4444" stroke-width="1"/>
                    <circle cx="12" cy="10" r="2.5" fill="none" stroke="#fef08a" stroke-width="1"/>
                    <text x="24" y="12" fill="#f8fafc" font-family="'Segoe UI', sans-serif" font-size="7.5" font-weight="800" letter-spacing="0.4">STAFFORDSHIRE</text>
                    <text x="24" y="18" fill="#fca5a5" font-family="monospace" font-size="6" font-weight="700" letter-spacing="0.6">UNIVERSITY</text>
                </svg>
            `,
            propSvg: `
                <div class="prop-uni-building">
                    <div class="uni-roof-pediment">
                        <div class="uni-triangle-roof"></div>
                        <div class="uni-clock"></div>
                    </div>
                    <div class="uni-mortarboard-cap">
                        <div class="mortar-diamond">
                            <div class="mortar-center-button"></div>
                            <div class="mortar-tassel-wrap">
                                <div class="mortar-tassel-string"></div>
                                <div class="mortar-tassel-fringe"></div>
                            </div>
                        </div>
                    </div>
                    <div class="uni-building-body">
                        <div class="uni-columns-row">
                            <div class="uni-col"></div>
                            <div class="uni-col"></div>
                            <div class="uni-door-arch">
                                <div class="uni-door-inner"></div>
                            </div>
                            <div class="uni-col"></div>
                            <div class="uni-col"></div>
                        </div>
                        <div class="uni-steps-base"></div>
                    </div>
                </div>
            `
        }
    ];

    // ═════════════════════════════════════════════════════════════
    // 12. TRADITIONAL LEVEL SELECT 3D CAREER DIORAMA CONTROLLER
    // ═════════════════════════════════════════════════════════════
    let careerIndex = 1; // Default to Synopsys & Ansys (Level 11)
    let dioramaScene, dioramaCamera, dioramaRenderer, dioramaControls;
    let dioramaClock = null;
    let isDioramaInitialized = false;
    let currentDioramaMesh = null;
    const dioramaCache = {}; // Cached groups: { [arrayIdx]: THREE.Group }
    let isTransitioningDiorama = false;

    // Helper: Map meshType to emoji icon and smear theme
    function getIconForType(type) {
        const map = {
            radar: '📡', synopsys: '⚡', laser: '🔬', sega: '🌀',
            ecu: '🚗', beacon: '📡', stamp: '🍕', cloud: '☁️',
            dragtree: '🏎️', cube: '📐', ticket: '🎟️', uni: '🎓'
        };
        return map[type] || '✨';
    }

    function getThemeClassForType(type) {
        const map = {
            radar: 'smear-emerald', synopsys: 'smear-cyan', laser: 'smear-rose',
            sega: 'smear-blue', ecu: 'smear-emerald', beacon: 'smear-purple',
            stamp: 'smear-amber', cloud: 'smear-cyan', dragtree: 'smear-rose',
            cube: 'smear-cyan', ticket: 'smear-amber', uni: 'smear-rose'
        };
        return map[type] || 'smear-cyan';
    }

    // ═════════════════════════════════════════════════════════════
    // 3D MUSEUM EXHIBIT PLAQUE GENERATOR WITH AUTHENTIC LOGOS
    // ═════════════════════════════════════════════════════════════
    function createPlaqueTexture(milestone, lvlNumber) {
        const canvas = document.createElement('canvas');
        canvas.width = 512;
        canvas.height = 256;
        const ctx = canvas.getContext('2d');
        const texture = new THREE.CanvasTexture(canvas);
        texture.anisotropy = 4;

        function render(img) {
            ctx.clearRect(0, 0, 512, 256);

            // Plaque Card Body
            const r = 24;
            ctx.fillStyle = '#0a0f1d';
            ctx.beginPath();
            if (ctx.roundRect) {
                ctx.roundRect(12, 12, 488, 232, r);
            } else {
                ctx.rect(12, 12, 488, 232);
            }
            ctx.fill();

            // Subtle Glass Gradient Highlight
            const grad = ctx.createLinearGradient(0, 0, 512, 256);
            grad.addColorStop(0, 'rgba(255, 255, 255, 0.09)');
            grad.addColorStop(0.5, 'rgba(255, 255, 255, 0.02)');
            grad.addColorStop(1, 'rgba(0, 0, 0, 0.55)');
            ctx.fillStyle = grad;
            ctx.fill();

            // Rim Glow Accent
            ctx.lineWidth = 6;
            const hex = '#' + (milestone.color ? milestone.color.toString(16).padStart(6, '0') : '00f0ff');
            ctx.strokeStyle = hex;
            ctx.stroke();

            // Header: Level Badge & Year
            ctx.fillStyle = '#00f0ff';
            ctx.font = 'bold 22px monospace';
            ctx.fillText(`LVL ${String(lvlNumber).padStart(2, '0')}`, 32, 52);

            ctx.fillStyle = '#94a3b8';
            ctx.font = '700 20px monospace';
            ctx.textAlign = 'right';
            ctx.fillText(milestone.year || '', 480, 52);
            ctx.textAlign = 'left';

            // Hairline Divider
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.14)';
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.moveTo(32, 66);
            ctx.lineTo(480, 66);
            ctx.stroke();

            // Logo in Center (Fitted with aspect ratio)
            if (img && img.width > 0 && img.height > 0) {
                const maxW = 380;
                const maxH = 96;
                const scale = Math.min(maxW / img.width, maxH / img.height, 1);
                const w = img.width * scale;
                const h = img.height * scale;
                const x = 256 - w / 2;
                const y = 132 - h / 2;

                // Crisp White Enamel Insert Plate for high-contrast branding
                ctx.fillStyle = '#ffffff';
                ctx.beginPath();
                if (ctx.roundRect) {
                    ctx.roundRect(x - 12, y - 8, w + 24, h + 16, 12);
                } else {
                    ctx.rect(x - 12, y - 8, w + 24, h + 16);
                }
                ctx.fill();
                ctx.strokeStyle = 'rgba(0, 240, 255, 0.4)';
                ctx.lineWidth = 1.5;
                ctx.stroke();

                ctx.drawImage(img, x, y, w, h);
            } else {
                ctx.fillStyle = '#ffffff';
                ctx.font = 'bold 30px "Segoe UI", sans-serif';
                ctx.textAlign = 'center';
                ctx.fillText(milestone.company, 256, 136);
                ctx.textAlign = 'left';
            }

            // Subtitle Footer
            ctx.fillStyle = '#cbd5e1';
            ctx.font = '600 17px "Segoe UI", sans-serif';
            ctx.textAlign = 'center';
            const roleShort = (milestone.role && milestone.role.length > 34) ? milestone.role.substring(0, 32) + '…' : milestone.role;
            ctx.fillText(roleShort, 256, 218);
            ctx.textAlign = 'left';

            texture.needsUpdate = true;
        }

        render(null);

        if (milestone.logoImg) {
            const img = new Image();
            img.crossOrigin = 'anonymous';
            img.onload = () => render(img);
            img.src = milestone.logoImg;
        }

        return texture;
    }

    function createStagePlaque(milestone, lvlNumber) {
        const plaqueGroup = new THREE.Group();
        plaqueGroup.name = 'stagePlaque';

        // Plinth Base (Sits on mahogany pedestal)
        const baseGeo = new THREE.BoxGeometry(2.6, 0.16, 0.6);
        const baseMat = new THREE.MeshStandardMaterial({
            color: 0x0b1120,
            roughness: 0.5,
            metalness: 0.8
        });
        const baseMesh = new THREE.Mesh(baseGeo, baseMat);
        baseMesh.position.set(0, 0.72, 3.75);
        baseMesh.castShadow = true;
        plaqueGroup.add(baseMesh);

        // Angled Display Easel Stand Group (tilted back ~24° towards camera view)
        const easelGroup = new THREE.Group();
        easelGroup.position.set(0, 0.8, 3.75);
        easelGroup.rotation.x = -0.42;

        // Twin Brass Mounting Struts
        const strutGeo = new THREE.CylinderGeometry(0.06, 0.06, 0.95, 8);
        const strutMat = new THREE.MeshStandardMaterial({
            color: 0xd4af37,
            metalness: 0.95,
            roughness: 0.15
        });
        const s1 = new THREE.Mesh(strutGeo, strutMat);
        s1.position.set(-0.8, 0.45, -0.04);
        easelGroup.add(s1);

        const s2 = s1.clone();
        s2.position.x = 0.8;
        easelGroup.add(s2);

        // Plaque Backboard
        const boardGeo = new THREE.BoxGeometry(2.55, 1.38, 0.08);
        const boardMat = new THREE.MeshStandardMaterial({
            color: 0x1a1208,
            roughness: 0.4,
            metalness: 0.5
        });
        const board = new THREE.Mesh(boardGeo, boardMat);
        board.position.set(0, 0.95, 0.04);
        board.castShadow = true;
        easelGroup.add(board);

        // Plaque Face with Canvas Texture
        const texture = createPlaqueTexture(milestone, lvlNumber);
        const faceGeo = new THREE.PlaneGeometry(2.45, 1.28);
        const faceMat = new THREE.MeshBasicMaterial({
            map: texture,
            transparent: true
        });
        const face = new THREE.Mesh(faceGeo, faceMat);
        face.position.set(0, 0.95, 0.09);
        easelGroup.add(face);

        // Gold Bezel Trim
        const trimGeo = new THREE.BoxGeometry(2.59, 1.42, 0.04);
        const trimMat = new THREE.MeshStandardMaterial({
            color: 0xfacc15,
            roughness: 0.2,
            metalness: 0.9
        });
        const trim = new THREE.Mesh(trimGeo, trimMat);
        trim.position.set(0, 0.95, 0.06);
        easelGroup.add(trim);

        plaqueGroup.add(easelGroup);
        return plaqueGroup;
    }

    // ═════════════════════════════════════════════════════════════
    // HIGH-CRAFT BESPOKE 3D LANDMARK PROP BUILDS
    // ═════════════════════════════════════════════════════════════
    function createBespokeMountainProp(milestone) {
        const propGroup = new THREE.Group();

        switch (milestone.meshType) {
            case 'uni': {
                // Level 01: Staffordshire University - Collegiate Clocktower & Graduation Honors
                const brickMat = new THREE.MeshStandardMaterial({ color: 0x881337, roughness: 0.7, metalness: 0.1 });
                const stoneMat = new THREE.MeshStandardMaterial({ color: 0x94a3b8, roughness: 0.5, metalness: 0.2 });
                const slateMat = new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.35, metalness: 0.4 });
                const warmLampMat = new THREE.MeshBasicMaterial({ color: 0xfde047 });
                const goldMat = new THREE.MeshStandardMaterial({ color: 0xfacc15, metalness: 0.95, roughness: 0.1 });

                // Ground Portico & Archway
                const portico = new THREE.Mesh(new THREE.BoxGeometry(2.0, 1.8, 1.8), brickMat);
                portico.position.y = 0.9;
                portico.castShadow = true;
                propGroup.add(portico);

                // Arch Entrance Cavity
                const arch = new THREE.Mesh(new THREE.CylinderGeometry(0.45, 0.45, 0.8, 12, 1, false, 0, Math.PI), stoneMat);
                arch.rotation.z = Math.PI / 2;
                arch.position.set(0, 0.6, 0.92);
                propGroup.add(arch);

                const door = new THREE.Mesh(new THREE.BoxGeometry(0.7, 1.1, 0.2), warmLampMat);
                door.position.set(0, 0.55, 0.85);
                propGroup.add(door);

                // Clocktower Shaft
                const tower = new THREE.Mesh(new THREE.BoxGeometry(1.4, 2.2, 1.4), brickMat);
                tower.position.y = 2.5;
                tower.castShadow = true;
                propGroup.add(tower);

                // Lancet Windows
                const win1 = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.65, 0.1), warmLampMat);
                win1.position.set(-0.35, 2.4, 0.72);
                propGroup.add(win1);
                const win2 = win1.clone();
                win2.position.x = 0.35;
                propGroup.add(win2);

                // Clock Face Stage
                const clockTrim = new THREE.Mesh(new THREE.BoxGeometry(1.55, 0.7, 1.55), stoneMat);
                clockTrim.position.y = 3.8;
                propGroup.add(clockTrim);

                const clockFace = new THREE.Mesh(new THREE.CylinderGeometry(0.32, 0.32, 0.08, 16), warmLampMat);
                clockFace.rotation.x = Math.PI / 2;
                clockFace.position.set(0, 3.8, 0.8);
                propGroup.add(clockFace);

                // Belfry with Open Arches & Bell
                const belfry = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.9, 1.2), stoneMat);
                belfry.position.y = 4.45;
                propGroup.add(belfry);

                const bell = new THREE.Mesh(new THREE.ConeGeometry(0.22, 0.32, 12), goldMat);
                bell.rotation.x = Math.PI;
                bell.position.set(0, 4.4, 0);
                bell.name = 'rotatingProp';
                propGroup.add(bell);

                // Octagonal Slate Spire
                const spire = new THREE.Mesh(new THREE.ConeGeometry(0.95, 2.0, 8), slateMat);
                spire.position.y = 5.7;
                spire.castShadow = true;
                propGroup.add(spire);

                // Golden Weathervane Finial
                const finial = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.6, 8), goldMat);
                finial.position.y = 6.8;
                propGroup.add(finial);

                // Graduation Monument: Pedestal + Mortarboard Cap + Tassel
                const capPedestal = new THREE.Mesh(new THREE.CylinderGeometry(0.45, 0.55, 0.6, 8), stoneMat);
                capPedestal.position.set(1.4, 0.3, 0.7);
                propGroup.add(capPedestal);

                const capSquare = new THREE.Mesh(new THREE.BoxGeometry(1.1, 0.08, 1.1), slateMat);
                capSquare.position.set(1.4, 0.85, 0.7);
                capSquare.rotation.y = Math.PI / 4;
                capSquare.rotation.z = -0.15;
                capSquare.name = 'floatingCap';
                propGroup.add(capSquare);

                const capSkull = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.38, 0.25, 12), slateMat);
                capSkull.position.set(1.4, 0.7, 0.7);
                propGroup.add(capSkull);

                const tassel = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.06, 0.45, 8), goldMat);
                tassel.position.set(1.85, 0.65, 0.7);
                propGroup.add(tassel);
                break;
            }

            case 'ticket': {
                // Level 02: Ticketmaster / LiveNation - Concert VIP Gateway & Lighting Truss
                const steelMat = new THREE.MeshStandardMaterial({ color: 0x334155, metalness: 0.85, roughness: 0.25 });
                const glassMat = new THREE.MeshPhysicalMaterial({ color: 0x00f0ff, transmission: 0.85, transparent: true, opacity: 0.7 });
                const brassMat = new THREE.MeshStandardMaterial({ color: 0xd97706, metalness: 0.95, roughness: 0.1 });
                const velvetMat = new THREE.MeshStandardMaterial({ color: 0x991b1b, roughness: 0.8 });
                const neonBlueMat = new THREE.MeshBasicMaterial({ color: 0x00f0ff });

                // Turnstile Pylons
                const p1 = new THREE.Mesh(new THREE.BoxGeometry(0.4, 1.4, 1.2), steelMat);
                p1.position.set(-1.1, 0.7, 0);
                p1.castShadow = true;
                propGroup.add(p1);

                const p2 = p1.clone();
                p2.position.x = 1.1;
                propGroup.add(p2);

                // Glass Gate Paddles
                const g1 = new THREE.Mesh(new THREE.BoxGeometry(0.65, 0.9, 0.08), glassMat);
                g1.position.set(-0.45, 0.75, 0);
                g1.rotation.y = 0.2;
                propGroup.add(g1);

                const g2 = new THREE.Mesh(new THREE.BoxGeometry(0.65, 0.9, 0.08), glassMat);
                g2.position.set(0.45, 0.75, 0);
                g2.rotation.y = -0.2;
                propGroup.add(g2);

                // Overhead Concert Truss Arch
                const trussMat = new THREE.MeshStandardMaterial({ color: 0x64748b, metalness: 0.9, roughness: 0.2 });
                const postL = new THREE.Mesh(new THREE.BoxGeometry(0.18, 3.2, 0.18), trussMat);
                postL.position.set(-1.5, 1.6, 0);
                propGroup.add(postL);

                const postR = postL.clone();
                postR.position.x = 1.5;
                propGroup.add(postR);

                const crossBeam = new THREE.Mesh(new THREE.BoxGeometry(3.3, 0.25, 0.25), trussMat);
                crossBeam.position.set(0, 3.1, 0);
                propGroup.add(crossBeam);

                // VIP Neon Sign
                const sign = new THREE.Mesh(new THREE.BoxGeometry(1.8, 0.45, 0.1), neonBlueMat);
                sign.position.set(0, 3.5, 0);
                propGroup.add(sign);

                // Stage Spotlights with Volumetric Cones
                const spot1 = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.22, 0.4, 12), steelMat);
                spot1.position.set(-0.9, 2.9, 0);
                spot1.rotation.z = -0.35;
                propGroup.add(spot1);

                const coneGeo = new THREE.ConeGeometry(0.75, 2.2, 16, 1, true);
                const coneMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.25, depthWrite: false });
                const cone1 = new THREE.Mesh(coneGeo, coneMat);
                cone1.position.set(-0.55, 1.7, 0);
                cone1.rotation.z = -0.35;
                propGroup.add(cone1);

                // Crowd Stanchions with Velvet Rope
                const stanch1 = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.1, 1.1, 8), brassMat);
                stanch1.position.set(-1.6, 0.55, 1.3);
                propGroup.add(stanch1);

                const stanch2 = stanch1.clone();
                stanch2.position.set(-0.7, 0.55, 1.5);
                propGroup.add(stanch2);

                const ropeCurve = new THREE.QuadraticBezierCurve3(
                    new THREE.Vector3(-1.6, 0.95, 1.3),
                    new THREE.Vector3(-1.15, 0.72, 1.4),
                    new THREE.Vector3(-0.7, 0.95, 1.5)
                );
                const ropeGeo = new THREE.TubeGeometry(ropeCurve, 12, 0.04, 8, false);
                const ropeMesh = new THREE.Mesh(ropeGeo, velvetMat);
                propGroup.add(ropeMesh);
                break;
            }

            case 'cube': {
                // Level 03: Tinderstone & Syscom - 3D Sculpting Hologram Lab
                const studioMat = new THREE.MeshStandardMaterial({ color: 0x090d16, roughness: 0.4, metalness: 0.8 });
                const cyanMat = new THREE.MeshBasicMaterial({ color: 0x00f0ff });
                const holoMat = new THREE.MeshPhysicalMaterial({ color: 0x0284c7, transmission: 0.85, transparent: true, opacity: 0.75, roughness: 0.1 });

                // Projector Base Turntable
                const turntable = new THREE.Mesh(new THREE.CylinderGeometry(1.6, 1.9, 0.45, 16), studioMat);
                turntable.position.y = 0.22;
                propGroup.add(turntable);

                // Concentric Neon Rings
                const ring1 = new THREE.Mesh(new THREE.TorusGeometry(1.2, 0.04, 8, 24), cyanMat);
                ring1.rotateX(Math.PI / 2);
                ring1.position.y = 0.46;
                propGroup.add(ring1);

                // Holographic Polyhedron (Suzanne / Icosahedron)
                const icoGeo = new THREE.IcosahedronGeometry(0.85, 0);
                const icoMesh = new THREE.Mesh(icoGeo, holoMat);
                icoMesh.position.y = 1.85;
                icoMesh.name = 'rotatingProp';

                // Wireframe Overlay
                const wire = new THREE.LineSegments(new THREE.WireframeGeometry(icoGeo), new THREE.LineBasicMaterial({ color: 0x00f0ff, linewidth: 2 }));
                icoMesh.add(wire);

                // Rotating Dual-Gimbal Bounding Cage
                const cage1 = new THREE.Mesh(new THREE.TorusGeometry(1.2, 0.03, 8, 24), cyanMat);
                cage1.name = 'rotatingRing';
                icoMesh.add(cage1);

                const cage2 = new THREE.Mesh(new THREE.TorusGeometry(1.35, 0.03, 8, 24), new THREE.MeshBasicMaterial({ color: 0x38bdf8 }));
                cage2.rotateX(Math.PI / 2);
                icoMesh.add(cage2);

                propGroup.add(icoMesh);

                // 3D XYZ Gizmo Axis arrows
                const gizmoGroup = new THREE.Group();
                gizmoGroup.position.set(0, 1.85, 0);
                const axX = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.6), new THREE.MeshBasicMaterial({ color: 0xef4444 }));
                axX.rotation.z = Math.PI / 2;
                axX.position.x = 0.3;
                gizmoGroup.add(axX);

                const axY = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.6), new THREE.MeshBasicMaterial({ color: 0x10b981 }));
                axY.position.y = 0.3;
                gizmoGroup.add(axY);

                const axZ = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.6), new THREE.MeshBasicMaterial({ color: 0x3b82f6 }));
                axZ.rotation.x = Math.PI / 2;
                axZ.position.z = 0.3;
                gizmoGroup.add(axZ);
                propGroup.add(gizmoGroup);

                // Drafting Desk with Ultrawide Curved Display
                const desk = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.7, 0.8), studioMat);
                desk.position.set(-1.4, 0.35, -0.6);
                propGroup.add(desk);

                const monitor = new THREE.Mesh(new THREE.BoxGeometry(1.3, 0.55, 0.06), new THREE.MeshBasicMaterial({ color: 0x00f0ff }));
                monitor.position.set(-1.4, 0.95, -0.55);
                monitor.rotation.y = 0.35;
                propGroup.add(monitor);
                break;
            }

            case 'dragtree': {
                // Level 04: Zynga / NaturalMotion - CSR Racing Staging Lane
                const tarmacMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.95 });
                const steelMat = new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.5, metalness: 0.8 });
                const chromeMat = new THREE.MeshStandardMaterial({ color: 0xf1f5f9, metalness: 0.95, roughness: 0.1 });
                const amberMat = new THREE.MeshBasicMaterial({ color: 0xf59e0b });
                const greenMat = new THREE.MeshBasicMaterial({ color: 0x10b981 });
                const blueMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8 });

                // Drag Strip Tarmac Slab
                const tarmac = new THREE.Mesh(new THREE.BoxGeometry(4.2, 0.15, 2.8), tarmacMat);
                tarmac.position.y = 0.08;
                propGroup.add(tarmac);

                // Yellow Staging Lines
                const yellowLine = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.02, 2.6), amberMat);
                yellowLine.position.set(0.3, 0.16, 0);
                propGroup.add(yellowLine);

                // NHRA Christmas Tree Staging Light Pole
                const treePole = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.12, 3.4, 8), steelMat);
                treePole.position.set(-1.4, 1.7, 0);
                propGroup.add(treePole);

                // Pre-stage / Stage dual blue LEDs
                [-0.2, 0.2].forEach(ox => {
                    const b = new THREE.Mesh(new THREE.SphereGeometry(0.1, 8, 8), blueMat);
                    b.position.set(-1.4 + ox, 3.2, 0);
                    propGroup.add(b);
                });

                // 3 Amber Countdown Tiers
                for (let i = 0; i < 3; i++) {
                    [-0.3, 0.3].forEach(ox => {
                        const l = new THREE.Mesh(new THREE.SphereGeometry(0.13, 8, 8), amberMat);
                        l.position.set(-1.4 + ox, 2.7 - i * 0.45, 0);
                        l.name = `stagingAmber${i}`;
                        propGroup.add(l);
                    });
                }

                // Green Launch Bulb
                [-0.3, 0.3].forEach(ox => {
                    const g = new THREE.Mesh(new THREE.SphereGeometry(0.15, 8, 8), greenMat);
                    g.position.set(-1.4 + ox, 1.35, 0);
                    propGroup.add(g);
                });

                // Roaring V8 Dragster Engine Block
                const engineBlock = new THREE.Mesh(new THREE.BoxGeometry(1.3, 0.9, 1.1), steelMat);
                engineBlock.position.set(0.8, 0.6, 0);
                engineBlock.castShadow = true;
                propGroup.add(engineBlock);

                // 8 Velocity Intake Trumpets
                for (let r = 0; r < 2; r++) {
                    for (let c = 0; c < 4; c++) {
                        const stack = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.05, 0.35, 8), chromeMat);
                        stack.position.set(0.5 + c * 0.22, 1.2, -0.25 + r * 0.5);
                        propGroup.add(stack);
                    }
                }

                // Upward Swept 4-Pipe Zoomie Exhaust Headers
                for (let c = 0; c < 4; c++) {
                    const pipe = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.6, 8), chromeMat);
                    pipe.position.set(0.5 + c * 0.22, 0.8, 0.65);
                    pipe.rotation.x = 0.6;
                    propGroup.add(pipe);

                    // Glowing combustion exhaust tip
                    const fire = new THREE.Mesh(new THREE.ConeGeometry(0.08, 0.25, 8), new THREE.MeshBasicMaterial({ color: 0xff6600 }));
                    fire.position.set(0.5 + c * 0.22, 1.15, 0.82);
                    fire.rotation.x = 0.6;
                    propGroup.add(fire);
                }
                break;
            }

            case 'cloud': {
                // Level 05: Silver Lining QA - Ethereal QA Cloud Kingdom & Heraldic Shield
                const cloudMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.35, metalness: 0.05 });
                const goldMat = new THREE.MeshStandardMaterial({ color: 0xfacc15, metalness: 0.95, roughness: 0.15 });
                const emeraldMat = new THREE.MeshBasicMaterial({ color: 0x10b981 });
                const cyanOrbMat = new THREE.MeshBasicMaterial({ color: 0x00f0ff });

                // 9-part Volumetric Cumulus Cloud Cluster
                const cloudCenter = new THREE.Group();
                cloudCenter.position.set(0, 1.2, 0);

                const spheres = [
                    { x: 0, y: 0, z: 0, r: 1.1 },
                    { x: -0.9, y: -0.15, z: 0.2, r: 0.85 },
                    { x: 0.9, y: -0.15, z: -0.1, r: 0.9 },
                    { x: -0.45, y: 0.6, z: 0.1, r: 0.8 },
                    { x: 0.45, y: 0.55, z: 0.15, r: 0.75 },
                    { x: 0, y: 0.8, z: -0.2, r: 0.65 },
                    { x: -1.4, y: -0.3, z: 0, r: 0.6 },
                    { x: 1.4, y: -0.3, z: 0.1, r: 0.65 },
                    { x: 0, y: -0.4, z: 0.6, r: 0.7 }
                ];

                spheres.forEach(s => {
                    const sp = new THREE.Mesh(new THREE.SphereGeometry(s.r, 14, 14), cloudMat);
                    sp.position.set(s.x, s.y, s.z);
                    sp.castShadow = true;
                    cloudCenter.add(sp);
                });
                propGroup.add(cloudCenter);

                // Floating Heraldic QA Shield
                const shieldGroup = new THREE.Group();
                shieldGroup.position.set(0, 2.7, 0.4);
                shieldGroup.name = 'rotatingProp';

                const shieldGeo = new THREE.BoxGeometry(1.1, 1.3, 0.12);
                const shieldMesh = new THREE.Mesh(shieldGeo, goldMat);
                shieldGroup.add(shieldMesh);

                // Emerald QA Pass Checkmark ✓
                const checkL = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.45, 0.14), emeraldMat);
                checkL.position.set(-0.16, -0.05, 0.08);
                checkL.rotation.z = -0.7;
                shieldGroup.add(checkL);

                const checkR = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.8, 0.14), emeraldMat);
                checkR.position.set(0.14, 0.1, 0.08);
                checkR.rotation.z = 0.6;
                shieldGroup.add(checkR);
                propGroup.add(shieldGroup);

                // Floating Diamond Star Sparkles
                [-1.6, 1.6].forEach((ox, idx) => {
                    const spark = new THREE.Mesh(new THREE.OctahedronGeometry(0.22, 0), cyanOrbMat);
                    spark.position.set(ox, 2.2 + idx * 0.4, 0.5);
                    spark.name = 'floatingCap';
                    propGroup.add(spark);
                });
                break;
            }

            case 'stamp': {
                // Level 06: Adactus / Pizza Hut Rewards - Brick Pizzeria Oven & Pepperoni Pizza
                const brickMat = new THREE.MeshStandardMaterial({ color: 0xb45309, roughness: 0.85, metalness: 0.1 });
                const fireMat = new THREE.MeshBasicMaterial({ color: 0xff6b00 });
                const woodMat = new THREE.MeshStandardMaterial({ color: 0x78350f, roughness: 0.65 });
                const crustMat = new THREE.MeshStandardMaterial({ color: 0xd97706, roughness: 0.6 });
                const cheeseMat = new THREE.MeshStandardMaterial({ color: 0xfef08a, roughness: 0.4 });
                const pepMat = new THREE.MeshStandardMaterial({ color: 0x991b1b, roughness: 0.5 });

                // Masonry Dome Oven
                const ovenBase = new THREE.Mesh(new THREE.CylinderGeometry(1.6, 1.7, 0.8, 16), brickMat);
                ovenBase.position.set(-0.6, 0.4, -0.2);
                ovenBase.castShadow = true;
                propGroup.add(ovenBase);

                const ovenDome = new THREE.Mesh(new THREE.SphereGeometry(1.4, 16, 10, 0, Math.PI * 2, 0, Math.PI / 2), brickMat);
                ovenDome.position.set(-0.6, 0.8, -0.2);
                ovenDome.castShadow = true;
                propGroup.add(ovenDome);

                // Glowing Fire Oven Mouth
                const mouth = new THREE.Mesh(new THREE.CylinderGeometry(0.65, 0.65, 0.5, 12, 1, false, 0, Math.PI), brickMat);
                mouth.rotation.z = Math.PI / 2;
                mouth.position.set(-0.6, 0.65, 0.95);
                propGroup.add(mouth);

                const fire = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.45, 0.4), fireMat);
                fire.position.set(-0.6, 0.5, 0.85);
                propGroup.add(fire);

                // Chimney with Smoke Puff
                const chimney = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.32, 1.1, 8), brickMat);
                chimney.position.set(-0.6, 2.2, 0.4);
                propGroup.add(chimney);

                const smoke = new THREE.Mesh(new THREE.SphereGeometry(0.35, 8, 8), new THREE.MeshBasicMaterial({ color: 0xe2e8f0, transparent: true, opacity: 0.7 }));
                smoke.position.set(-0.6, 2.9, 0.4);
                smoke.name = 'floatingCap';
                propGroup.add(smoke);

                // Baker's Peel Paddle
                const peelStick = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 2.4, 8), woodMat);
                peelStick.rotation.x = Math.PI / 2.3;
                peelStick.position.set(0.9, 0.75, 0.5);
                propGroup.add(peelStick);

                const peelHead = new THREE.Mesh(new THREE.CylinderGeometry(0.75, 0.75, 0.05, 16), woodMat);
                peelHead.position.set(0.9, 0.58, 1.4);
                propGroup.add(peelHead);

                // 8-Slice Pepperoni Pizza
                const crust = new THREE.Mesh(new THREE.CylinderGeometry(0.65, 0.65, 0.06, 16), crustMat);
                crust.position.set(0.9, 0.62, 1.4);
                propGroup.add(crust);

                const cheese = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.55, 0.07, 16), cheeseMat);
                cheese.position.set(0.9, 0.63, 1.4);
                propGroup.add(cheese);

                // Pepperoni discs
                for (let i = 0; i < 6; i++) {
                    const a = (i / 6) * Math.PI * 2;
                    const pep = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.11, 0.08, 8), pepMat);
                    pep.position.set(0.9 + Math.cos(a) * 0.32, 0.64, 1.4 + Math.sin(a) * 0.32);
                    propGroup.add(pep);
                }
                break;
            }

            case 'beacon': {
                // Level 07: ndevr Ltd - Satellite Telecommunications Ground Station
                const mastMat = new THREE.MeshStandardMaterial({ color: 0x334155, metalness: 0.85, roughness: 0.3 });
                const dishMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, metalness: 0.3, roughness: 0.2 });
                const solarMat = new THREE.MeshStandardMaterial({ color: 0x1d4ed8, metalness: 0.85, roughness: 0.2 });
                const purpleWaveMat = new THREE.MeshBasicMaterial({ color: 0xc084fc, transparent: true, opacity: 0.7 });

                // Ground Telemetry Hub
                const hub = new THREE.Mesh(new THREE.CylinderGeometry(1.6, 1.8, 0.5, 8), mastMat);
                hub.position.y = 0.25;
                propGroup.add(hub);

                // Steerable Satellite Dish Gimbal
                const dishGroup = new THREE.Group();
                dishGroup.position.set(-0.5, 1.6, 0);
                dishGroup.name = 'rotatingProp';

                const dish = new THREE.Mesh(new THREE.SphereGeometry(1.25, 16, 10, 0, Math.PI), dishMat);
                dish.rotation.x = -Math.PI / 3;
                dishGroup.add(dish);

                const horn = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.08, 0.8, 8), mastMat);
                horn.position.set(0, 0.45, 0.5);
                horn.rotation.x = 0.5;
                dishGroup.add(horn);
                propGroup.add(dishGroup);

                // Twin Photovoltaic Solar Wings
                [-1.4, 1.4].forEach(ox => {
                    const panel = new THREE.Mesh(new THREE.BoxGeometry(0.9, 1.5, 0.06), solarMat);
                    panel.position.set(ox, 1.2, -0.6);
                    panel.rotation.x = 0.45;
                    propGroup.add(panel);
                });

                // Telecom Spire & Pulsing Broadcast Wavefronts
                const spire = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.18, 3.8, 8), mastMat);
                spire.position.set(1.1, 1.9, 0.4);
                propGroup.add(spire);

                const beaconBulb = new THREE.Mesh(new THREE.SphereGeometry(0.18, 8, 8), new THREE.MeshBasicMaterial({ color: 0xef4444 }));
                beaconBulb.position.set(1.1, 3.8, 0.4);
                propGroup.add(beaconBulb);

                // Concentric Wavefront Arcs
                [0.6, 1.1, 1.6].forEach(r => {
                    const wave = new THREE.Mesh(new THREE.TorusGeometry(r, 0.04, 8, 24, Math.PI), purpleWaveMat);
                    wave.position.set(1.1, 3.8, 0.4);
                    wave.rotation.z = Math.PI / 2;
                    wave.name = 'floatingCap';
                    propGroup.add(wave);
                });
                break;
            }

            case 'ecu': {
                // Level 08: Connect Group - Jaguar Land Rover Connected Vehicle
                const carGreenMat = new THREE.MeshStandardMaterial({ color: 0x064e3b, roughness: 0.25, metalness: 0.75 });
                const wheelMat = new THREE.MeshStandardMaterial({ color: 0x64748b, roughness: 0.3, metalness: 0.9 });
                const neonWireMat = new THREE.MeshBasicMaterial({ color: 0x00f0ff });
                const glassMat = new THREE.MeshPhysicalMaterial({ color: 0xdde5ed, transmission: 0.9, transparent: true });

                // Dyno Rolling Road Rollers
                const roller1 = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.28, 2.6, 12), wheelMat);
                roller1.rotation.z = Math.PI / 2;
                roller1.position.set(0, 0.15, -0.7);
                propGroup.add(roller1);

                const roller2 = roller1.clone();
                roller2.position.z = 0.7;
                propGroup.add(roller2);

                // Concept Vehicle Chassis Tub
                const carBody = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.55, 2.9), carGreenMat);
                carBody.position.set(0, 0.55, 0);
                carBody.castShadow = true;
                propGroup.add(carBody);

                const cockpit = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.45, 1.4), glassMat);
                cockpit.position.set(0, 0.95, -0.1);
                propGroup.add(cockpit);

                // 4 Wheels
                [[-0.9, -0.7], [0.9, -0.7], [-0.9, 0.7], [0.9, 0.7]].forEach(([wx, wz]) => {
                    const wheel = new THREE.Mesh(new THREE.CylinderGeometry(0.38, 0.38, 0.25, 16), wheelMat);
                    wheel.rotation.z = Math.PI / 2;
                    wheel.position.set(wx, 0.4, wz);
                    propGroup.add(wheel);
                });

                // Glowing CAN-Bus Fiber-Optic Wiring Loom
                const loom = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.08, 2.6), neonWireMat);
                loom.position.set(0, 0.85, 0);
                propGroup.add(loom);

                // Floating Diagnostic HUD
                const hud = new THREE.Mesh(new THREE.PlaneGeometry(1.3, 0.65), new THREE.MeshBasicMaterial({ color: 0x00f0ff, transparent: true, opacity: 0.8, side: THREE.DoubleSide }));
                hud.position.set(0, 1.6, 0.4);
                hud.rotation.x = -0.2;
                propGroup.add(hud);
                break;
            }

            case 'sega': {
                // Level 09: SEGA Hardlight - Green Hill Zone High-Craft Diorama (Blender GLB)
                const fallbackMat = new THREE.MeshStandardMaterial({ color: 0x0284c7, roughness: 0.4 });
                const placeholder = new THREE.Mesh(new THREE.TorusGeometry(1.4, 0.28, 16, 32), fallbackMat);
                placeholder.position.y = 1.4;
                propGroup.add(placeholder);

                if (typeof THREE.GLTFLoader !== 'undefined') {
                    const loader = new THREE.GLTFLoader();
                    loader.load(
                        'assets/models/sega_diorama.glb',
                        (gltf) => {
                            const model = gltf.scene;
                            model.scale.set(0.82, 0.82, 0.82);
                            model.position.set(0, -0.4, 0);
                            // Orient diorama front corner directly towards camera sightline
                            model.rotation.y = Math.PI * 0.72;

                            // Find and animate the golden ring
                            model.traverse((child) => {
                                if (child.isMesh) {
                                    child.castShadow = true;
                                    child.receiveShadow = true;
                                    if (child.name && child.name.includes('GiantSonicGoldRing')) {
                                        child.name = 'rotatingProp';
                                    }
                                }
                            });

                            // Clear placeholder and mount bespoke model
                            while (propGroup.children.length > 0) {
                                propGroup.remove(propGroup.children[0]);
                            }
                            propGroup.add(model);

                            // Hide the generic terrace plaque in favor of the bespoke model's museum plaque
                            if (propGroup.parent) {
                                const tp = propGroup.parent.getObjectByName('terracePlaque');
                                if (tp) tp.visible = false;
                            }
                        },
                        undefined,
                        (err) => {
                            console.warn('[Diorama] Could not load sega_diorama.glb, fallback kept:', err);
                        }
                    );
                }
                break;
            }

            case 'laser': {
                // Level 10: Malvern Panalytical - Precision Laser Diffraction Optical Bench
                const benchMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.3, metalness: 0.85 });
                const anodizedMat = new THREE.MeshStandardMaterial({ color: 0x090d16, roughness: 0.2, metalness: 0.95 });
                const laserRubyMat = new THREE.MeshBasicMaterial({ color: 0xff0044 });
                const quartzMat = new THREE.MeshPhysicalMaterial({ color: 0xffffff, transmission: 0.95, transparent: true, opacity: 0.9, roughness: 0.05, ior: 1.5 });
                const brassMat = new THREE.MeshStandardMaterial({ color: 0xd4af37, metalness: 0.9, roughness: 0.2 });

                // Optical Breadboard Table
                const bench = new THREE.Mesh(new THREE.BoxGeometry(3.8, 0.3, 1.8), benchMat);
                bench.position.set(0, 0.4, 0);
                bench.castShadow = true;
                propGroup.add(bench);

                // HeNe Laser Cylinder Housing
                const laserTube = new THREE.Mesh(new THREE.CylinderGeometry(0.32, 0.32, 1.8, 16), anodizedMat);
                laserTube.rotation.z = Math.PI / 2;
                laserTube.position.set(-1.1, 1.1, 0);
                propGroup.add(laserTube);

                // Brass Micrometer Adjustment Thumbscrews
                const screw = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 0.3, 8), brassMat);
                screw.position.set(-1.6, 1.5, 0);
                propGroup.add(screw);

                // Quartz Cuvette Sample Chamber
                const cuvette = new THREE.Mesh(new THREE.BoxGeometry(0.7, 1.2, 0.7), quartzMat);
                cuvette.position.set(0.1, 1.1, 0);
                propGroup.add(cuvette);

                // Micro-particles in suspension
                for (let i = 0; i < 8; i++) {
                    const p = new THREE.Mesh(new THREE.SphereGeometry(0.04, 6, 6), new THREE.MeshBasicMaterial({ color: 0x00f0ff }));
                    p.position.set(0.1 + (Math.random() - 0.5) * 0.4, 0.8 + Math.random() * 0.6, (Math.random() - 0.5) * 0.4);
                    propGroup.add(p);
                }

                // Collimated Ruby Laser Beam
                const beamIn = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 1.0, 8), laserRubyMat);
                beamIn.rotation.z = Math.PI / 2;
                beamIn.position.set(-0.5, 1.1, 0);
                propGroup.add(beamIn);

                // Scattered Diffraction Conical Fan
                const fanGeo = new THREE.ConeGeometry(0.85, 1.4, 16, 1, true);
                fanGeo.rotateZ(-Math.PI / 2);
                const fanMat = new THREE.MeshBasicMaterial({ color: 0xf43f5e, transparent: true, opacity: 0.35, depthWrite: false });
                const fan = new THREE.Mesh(fanGeo, fanMat);
                fan.position.set(0.85, 1.1, 0);
                propGroup.add(fan);

                // Circular Photodiode Detector Array
                const detector = new THREE.Mesh(new THREE.TorusGeometry(0.9, 0.12, 12, 24), anodizedMat);
                detector.rotation.y = Math.PI / 2;
                detector.position.set(1.5, 1.1, 0);
                detector.name = 'rotatingProp';
                propGroup.add(detector);
                break;
            }

            case 'synopsys': {
                // Level 11: Synopsys & Ansys - HPC Supersonic Wind Tunnel & Blade Server Racks
                const rackMat = new THREE.MeshStandardMaterial({ color: 0x090d16, roughness: 0.35, metalness: 0.85 });
                const glassMat = new THREE.MeshPhysicalMaterial({ color: 0x00f0ff, transmission: 0.85, transparent: true, opacity: 0.7 });
                const wingMat = new THREE.MeshStandardMaterial({ color: 0xdde5ed, roughness: 0.2, metalness: 0.9 });
                const streamCyan = new THREE.MeshBasicMaterial({ color: 0x00f0ff, transparent: true, opacity: 0.85 });
                const streamGold = new THREE.MeshBasicMaterial({ color: 0xfbbf24, transparent: true, opacity: 0.85 });

                // Dual Enterprise Blade Server Racks
                [-1.4, 1.4].forEach(ox => {
                    const rack = new THREE.Mesh(new THREE.BoxGeometry(0.8, 3.2, 1.4), rackMat);
                    rack.position.set(ox, 1.6, 0);
                    rack.castShadow = true;
                    propGroup.add(rack);

                    // LED status array
                    for (let r = 0; r < 5; r++) {
                        const led = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.08, 0.16), (r % 2 === 0 ? streamCyan : streamGold));
                        led.position.set(ox + (ox > 0 ? -0.42 : 0.42), 0.8 + r * 0.45, 0.3);
                        propGroup.add(led);
                    }
                });

                // Wind Tunnel Transparent Chamber Tube
                const chamber = new THREE.Mesh(new THREE.CylinderGeometry(0.95, 0.95, 2.0, 16), glassMat);
                chamber.rotation.z = Math.PI / 2;
                chamber.position.set(0, 1.6, 0);
                propGroup.add(chamber);

                // Supersonic Swept Delta-Wing Aircraft Model
                const wingGeo = new THREE.ConeGeometry(0.55, 1.4, 4);
                wingGeo.rotateZ(Math.PI / 2);
                wingGeo.scale(1, 0.15, 1.8);
                const wing = new THREE.Mesh(wingGeo, wingMat);
                wing.position.set(0, 1.6, 0);
                propGroup.add(wing);

                // CFD Aerodynamic Streamline Ribbons
                [-0.3, 0, 0.3].forEach((oz, idx) => {
                    const ribbonGeo = new THREE.TubeGeometry(
                        new THREE.CatmullRomCurve3([
                            new THREE.Vector3(-0.9, 1.55 + Math.sin(idx) * 0.2, oz),
                            new THREE.Vector3(-0.2, 1.8 + Math.cos(idx) * 0.15, oz),
                            new THREE.Vector3(0.4, 1.65 - Math.sin(idx) * 0.2, oz),
                            new THREE.Vector3(0.9, 1.5 + Math.cos(idx) * 0.15, oz)
                        ]),
                        16, 0.025, 6, false
                    );
                    const ribbon = new THREE.Mesh(ribbonGeo, (idx === 1 ? streamGold : streamCyan));
                    ribbon.name = 'floatingCap';
                    propGroup.add(ribbon);
                });
                break;
            }

            case 'radar': {
                // Level 12: [CLASSIFIED] UK Defence - Covert Subterranean Command Node
                const bunkerMat = new THREE.MeshStandardMaterial({ color: 0x0b1120, roughness: 0.6, metalness: 0.5 });
                const steelMat = new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.3, metalness: 0.85 });
                const laserRedMat = new THREE.MeshBasicMaterial({ color: 0xef4444 });
                const emeraldMat = new THREE.MeshBasicMaterial({ color: 0x10b981 });

                // Hardened Geodesic Bunker Dome
                const dome = new THREE.Mesh(new THREE.SphereGeometry(1.8, 12, 8, 0, Math.PI * 2, 0, Math.PI / 2), bunkerMat);
                dome.position.set(0, 0.2, 0);
                dome.castShadow = true;
                propGroup.add(dome);

                // Titanium Blast Door Portal
                const door = new THREE.Mesh(new THREE.BoxGeometry(1.1, 1.3, 0.4), steelMat);
                door.position.set(0, 0.75, 1.6);
                propGroup.add(door);

                // Rotating 3D Phased-Array Radar Antenna (AESA)
                const radarGroup = new THREE.Group();
                radarGroup.position.set(0, 2.1, 0);
                radarGroup.name = 'rotatingProp';

                const aesaPlate = new THREE.Mesh(new THREE.BoxGeometry(1.6, 1.0, 0.15), steelMat);
                aesaPlate.rotation.x = -0.25;
                radarGroup.add(aesaPlate);

                // Radar Feed Matrix
                const feed = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.8, 0.05), emeraldMat);
                feed.position.set(0, 0, 0.09);
                feed.rotation.x = -0.25;
                radarGroup.add(feed);
                propGroup.add(radarGroup);

                // Clearance Beacon
                const beacon = new THREE.Mesh(new THREE.SphereGeometry(0.18, 8, 8), laserRedMat);
                beacon.position.set(0, 3.2, 0);
                propGroup.add(beacon);

                // Perimeter Security Surveillance Pylons
                [[-1.5, -1.2], [1.5, -1.2], [-1.5, 1.2], [1.5, 1.2]].forEach(([px, pz]) => {
                    const pylon = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.12, 1.4, 8), steelMat);
                    pylon.position.set(px, 0.7, pz);
                    propGroup.add(pylon);

                    const scanner = new THREE.Mesh(new THREE.SphereGeometry(0.12, 8, 8), emeraldMat);
                    scanner.position.set(px, 1.4, pz);
                    propGroup.add(scanner);
                });
                break;
            }

            default: {
                const defMesh = new THREE.Mesh(new THREE.BoxGeometry(1.5, 1.5, 1.5), new THREE.MeshStandardMaterial({ color: milestone.color }));
                propGroup.add(defMesh);
                break;
            }
        }

        return propGroup;
    }

    // ═════════════════════════════════════════════════════════════
    // 12. HIGH-CRAFT 3D LEVEL SELECT DIORAMA CONTROLLER
    // ═════════════════════════════════════════════════════════════

    // Build the Isolated 3D Stage Diorama (Molding Pedestal, Underside Rock, Plaque, Hero Props)
    function buildStageDiorama(milestone, lvlNumber, arrayIdx) {
        const dioramaGroup = new THREE.Group();
        dioramaGroup.userData = { milestone, lvlNumber, arrayIdx };

        // ── 1. Pedestal Base: Underside Floating Asteroid Rock Core ──
        const rockGeo = new THREE.CylinderGeometry(5.0, 0.6, 3.6, 7);
        const rockMat = new THREE.MeshStandardMaterial({
            color: 0x090d16,
            roughness: 0.95,
            metalness: 0.1,
            flatShading: true
        });
        const rockMesh = new THREE.Mesh(rockGeo, rockMat);
        rockMesh.position.y = -1.8;
        rockMesh.receiveShadow = true;
        dioramaGroup.add(rockMesh);

        // Small floating rock satellite clusters
        [[-3.8, -2.4, 2.2, 0.45], [4.1, -2.1, -1.8, 0.55], [-2.2, -2.8, -3.4, 0.4]].forEach(([rx, ry, rz, s]) => {
            const sat = new THREE.Mesh(new THREE.DodecahedronGeometry(s, 0), rockMat);
            sat.position.set(rx, ry, rz);
            sat.name = 'floatingCap';
            dioramaGroup.add(sat);
        });

        // ── 2. Pedestal Plinth: Dark Carved Mahogany / Obsidian Museum Base ──
        const plinthGeo = new THREE.CylinderGeometry(5.6, 6.0, 1.2, 36);
        const plinthMat = new THREE.MeshStandardMaterial({
            color: 0x121724,
            roughness: 0.4,
            metalness: 0.25
        });
        const plinthMesh = new THREE.Mesh(plinthGeo, plinthMat);
        plinthMesh.position.y = 0.6;
        plinthMesh.castShadow = true;
        plinthMesh.receiveShadow = true;
        dioramaGroup.add(plinthMesh);

        // Molded Upper Chamfer Step
        const chamferGeo = new THREE.CylinderGeometry(5.3, 5.6, 0.22, 36);
        const chamferMat = new THREE.MeshStandardMaterial({
            color: 0x1a2133,
            roughness: 0.35,
            metalness: 0.3
        });
        const chamferMesh = new THREE.Mesh(chamferGeo, chamferMat);
        chamferMesh.position.y = 1.25;
        dioramaGroup.add(chamferMesh);

        // Polished Museum Stage Floor Disc
        const floorGeo = new THREE.CylinderGeometry(5.1, 5.1, 0.08, 36);
        const floorMat = new THREE.MeshStandardMaterial({
            color: 0x0a0f1d,
            roughness: 0.2,
            metalness: 0.55
        });
        const floorMesh = new THREE.Mesh(floorGeo, floorMat);
        floorMesh.position.y = 1.38;
        floorMesh.receiveShadow = true;
        dioramaGroup.add(floorMesh);

        // Glowing Stage Neon Trim Ring
        const ringGeo = new THREE.TorusGeometry(5.25, 0.07, 8, 48);
        ringGeo.rotateX(Math.PI / 2);
        const ringMat = new THREE.MeshBasicMaterial({
            color: milestone.color || 0x00f0ff,
            transparent: true,
            opacity: 0.85
        });
        const ringMesh = new THREE.Mesh(ringGeo, ringMat);
        ringMesh.position.y = 1.36;
        ringMesh.name = 'trimRing';
        dioramaGroup.add(ringMesh);

        // Under-pedestal accent ring
        const underRingGeo = new THREE.TorusGeometry(3.2, 0.06, 8, 32);
        underRingGeo.rotateX(Math.PI / 2);
        const underRingMat = new THREE.MeshBasicMaterial({
            color: milestone.color || 0x00f0ff,
            transparent: true,
            opacity: 0.45
        });
        const underRing = new THREE.Mesh(underRingGeo, underRingMat);
        underRing.position.y = -1.2;
        dioramaGroup.add(underRing);

        // ── 3. Front Easel Museum Plaque ──
        const plaque = createStagePlaque(milestone, lvlNumber);
        plaque.position.set(0, 0.65, 5.2);
        plaque.rotation.x = -0.16; // Tilted back comfortably toward camera
        dioramaGroup.add(plaque);

        // ── 4. Bespoke Prop Group / GLTF Hero ──
        const propContainer = new THREE.Group();
        propContainer.position.y = 1.42;
        propContainer.name = 'stageHeroProps';

        // Add high-craft Three.js procedural prop
        const proceduralProp = createBespokeMountainProp(milestone);
        proceduralProp.name = 'proceduralProp';
        propContainer.add(proceduralProp);

        // If SEGA stage (or future ComfyUI GLB assets), attempt async glTF load
        if (milestone.key === 'sega') {
            const LoaderClass = (typeof THREE.GLTFLoader !== 'undefined') ? THREE.GLTFLoader : (typeof GLTFLoader !== 'undefined' ? GLTFLoader : null);
            if (LoaderClass) {
                const loader = new LoaderClass();
                loader.load(
                    'assets/models/sega_diorama.glb',
                    (gltf) => {
                        const glbScene = gltf.scene;
                        glbScene.name = 'comfyGlbModel';
                        glbScene.position.set(0, 0, 0);
                        glbScene.scale.set(1.45, 1.45, 1.45);
                        glbScene.traverse(child => {
                            if (child.isMesh) {
                                child.castShadow = true;
                                child.receiveShadow = true;
                            }
                        });
                        propContainer.add(glbScene);
                        // Once high-craft GLTF is rendered, hide fallback
                        proceduralProp.visible = false;
                    },
                    undefined,
                    (err) => {
                        console.log('[Diorama] sega_diorama.glb loading fallback:', err);
                    }
                );
            }
        }

        dioramaGroup.add(propContainer);
        return dioramaGroup;
    }

    // Load Diorama for a specific Level Index with Spring Bounce Transition
    function loadDioramaForLevel(arrayIdx, animate = true) {
        if (arrayIdx < 0 || arrayIdx >= careerMilestones.length) return;
        if (!dioramaScene) return;

        careerIndex = arrayIdx;
        const m = careerMilestones[arrayIdx];
        const lvlNumber = 12 - arrayIdx;

        // Retrieve or build diorama
        let nextDiorama = dioramaCache[arrayIdx];
        if (!nextDiorama) {
            nextDiorama = buildStageDiorama(m, lvlNumber, arrayIdx);
            dioramaCache[arrayIdx] = nextDiorama;
        }

        if (animate && currentDioramaMesh && currentDioramaMesh !== nextDiorama) {
            const outgoing = currentDioramaMesh;
            const incoming = nextDiorama;
            isTransitioningDiorama = true;

            DioramaAudio.playHop();

            // Phase 1: Scale down outgoing diorama
            const startTime = performance.now();
            const phase1Duration = 140; // ms
            const phase2Duration = 280; // ms

            function animateTransition(now) {
                const elapsed = now - startTime;
                if (elapsed < phase1Duration) {
                    const p = elapsed / phase1Duration;
                    const s = Math.max(0, 1 - p * p);
                    outgoing.scale.set(s, s, s);
                    outgoing.position.y = -p * 1.5;
                    requestAnimationFrame(animateTransition);
                } else {
                    // Switch meshes in scene
                    dioramaScene.remove(outgoing);
                    outgoing.scale.set(1, 1, 1);
                    outgoing.position.y = 0;

                    incoming.scale.set(0.01, 0.01, 0.01);
                    incoming.position.y = -1.2;
                    dioramaScene.add(incoming);
                    currentDioramaMesh = incoming;

                    DioramaAudio.playArrival();

                    // Phase 2: Spring bounce scale incoming diorama
                    const phase2Start = performance.now();
                    function animateIncoming(now2) {
                        const elapsed2 = now2 - phase2Start;
                        const p2 = Math.min(1, elapsed2 / phase2Duration);
                        // Spring physics with overshoot
                        const bounce = 1 + Math.sin(p2 * Math.PI) * 0.18 * (1 - p2);
                        const s = p2 * bounce;
                        incoming.scale.set(s, s, s);
                        incoming.position.y = (1 - p2) * -1.2;

                        if (p2 < 1) {
                            requestAnimationFrame(animateIncoming);
                        } else {
                            incoming.scale.set(1, 1, 1);
                            incoming.position.y = 0;
                            isTransitioningDiorama = false;
                        }
                    }
                    requestAnimationFrame(animateIncoming);
                }
            }
            requestAnimationFrame(animateTransition);
        } else {
            if (currentDioramaMesh && currentDioramaMesh !== nextDiorama) {
                dioramaScene.remove(currentDioramaMesh);
            }
            nextDiorama.scale.set(1, 1, 1);
            nextDiorama.position.y = 0;
            dioramaScene.add(nextDiorama);
            currentDioramaMesh = nextDiorama;
        }

        updateLevelDossierUI(arrayIdx);
        updateLevelRibbonActive(arrayIdx);
        updateLevelGridActive(arrayIdx);
    }

    // Synchronize Dossier Bar & Top Controls
    function updateLevelDossierUI(arrayIdx) {
        const m = careerMilestones[arrayIdx];
        if (!m) return;
        const lvlNumber = 12 - arrayIdx;

        const counter = document.getElementById('career-level-counter');
        const numPill = document.getElementById('level-num-pill');
        const periodPill = document.getElementById('level-period-pill');
        const nodeKey = document.getElementById('level-node-key');
        const logoBadge = document.getElementById('level-logo-badge');
        const roleTitle = document.getElementById('level-role-title');
        const tagsLine = document.getElementById('level-tags-line');
        const quoteDesc = document.getElementById('level-quote-desc');
        const toyLabel = document.getElementById('level-toy-label');
        const toyBtn = document.getElementById('level-toy-btn');
        const glowEl = document.getElementById('narrative-watercolor-glow');

        if (counter) counter.textContent = `LVL ${String(lvlNumber).padStart(2, '0')} / 12`;
        if (numPill) numPill.textContent = `LVL ${String(lvlNumber).padStart(2, '0')}`;
        if (periodPill) periodPill.textContent = m.date;
        if (nodeKey) {
            const tagStatus = (lvlNumber === 12) ? 'SUMMIT' : (lvlNumber === 1 ? 'BASE CAMP' : 'CAREER MILESTONE');
            nodeKey.textContent = `STAGE ${String(lvlNumber).padStart(2, '0')} // ${tagStatus}`;
        }
        if (logoBadge) {
            if (m.logoImg) {
                logoBadge.innerHTML = `<img src="${m.logoImg}" alt="${m.company} Logo" class="dossier-brand-img" />`;
            } else {
                logoBadge.innerHTML = m.companyLogoSvg || `<span class="company-name">${m.company}</span>`;
            }
        }
        if (roleTitle) roleTitle.textContent = m.role;
        if (tagsLine) tagsLine.textContent = (m.tags && m.tags.length > 0) ? m.tags.join(' • ') : 'Mission-Critical Architecture';
        if (quoteDesc) quoteDesc.textContent = `"${m.narrative}"`;
        if (toyLabel) toyLabel.textContent = m.toyName || 'Test Prop';
        if (toyBtn) {
            const iconSpan = toyBtn.querySelector('.toy-icon');
            if (iconSpan) iconSpan.textContent = getIconForType(m.meshType);
        }

        // Stepper button disabled states
        const prevBtn = document.getElementById('career-prev-lvl-btn');
        const nextBtn = document.getElementById('career-next-lvl-btn');
        if (prevBtn) prevBtn.disabled = (lvlNumber === 1);
        if (nextBtn) nextBtn.disabled = (lvlNumber === 12);

        // Watercolor thematic glow
        const themeClass = getThemeClassForType(m.meshType);
        if (glowEl) glowEl.className = `narrative-watercolor-glow ${themeClass}`;

        // Pilot HUD
        const pilotSub = document.getElementById('pilot-level-sub');
        const pilotBubble = document.getElementById('pilot-speech-bubble');
        if (pilotSub) pilotSub.textContent = `STAGE ${String(lvlNumber).padStart(2, '0')}`;
        if (pilotBubble) {
            const speechMap = {
                uni: 'Graduation honors achieved! MEng Game Design 🎓',
                ticket: 'Concert gates clear! VIP backstage pass active 🎟️',
                cube: 'Retopology complete: 0 ngons, clean quad topology! 📐',
                dragtree: 'RPM pinned to 9,000! Perfect green light reaction 🏎️',
                cloud: 'Co-founded Silver Lining! 100% QA pass rate ☁️',
                stamp: 'Pizza Hut mobile stack & loyalty pipeline validated! 🍕',
                beacon: 'IoT telemetry feed locked & transmitting! 📡',
                ecu: 'Connected vehicle CAN-bus telemetry synced! 🚗',
                sega: 'Gotta go fast! Speed-testing Sonic loop tracks 🌀',
                laser: 'Laser diffraction beam aligned at sub-micron precision 🔬',
                synopsys: 'Scaling supersonic cloud compute clusters & HPC digital twins ⚡',
                radar: 'Classified defence systems online. Official sensitive clearance 🛡️'
            };
            pilotBubble.textContent = speechMap[m.meshType] || `Surveying Stage ${lvlNumber} // ${m.company} 🚀`;
        }
    }

    // Render Ribbon Track (Stage 01 to Stage 12, left to right)
    function renderLevelRibbonTrack() {
        const track = document.getElementById('level-ribbon-track');
        if (!track) return;
        track.innerHTML = '';

        for (let k = 0; k < 12; k++) {
            const arrayIdx = 11 - k; // k=0 -> Base (Staffs Uni, idx 11); k=11 -> Summit (Classified, idx 0)
            const lvlNumber = k + 1;
            const m = careerMilestones[arrayIdx];
            const isClassified = (m.meshType === 'radar');

            const pill = document.createElement('button');
            pill.type = 'button';
            pill.className = `level-ribbon-pill ${arrayIdx === careerIndex ? 'is-active' : ''} ${isClassified ? 'is-classified' : ''}`;
            pill.id = `ribbon-pill-${arrayIdx}`;
            pill.innerHTML = `
                <span class="pill-lvl-num">LVL ${String(lvlNumber).padStart(2, '0')}</span>
                <span class="pill-status-dot"></span>
                <span class="pill-company-name">${m.company}</span>
                <span class="pill-year-badge">${m.year || ''}</span>
            `;
            pill.onclick = () => setCareerLevel(arrayIdx);
            track.appendChild(pill);
        }

        scrollActiveRibbonPillIntoView();
    }

    function updateLevelRibbonActive(activeIdx) {
        const track = document.getElementById('level-ribbon-track');
        if (!track) return;
        const pills = track.querySelectorAll('.level-ribbon-pill');
        pills.forEach(pill => pill.classList.remove('is-active'));
        const activePill = document.getElementById(`ribbon-pill-${activeIdx}`);
        if (activePill) activePill.classList.add('is-active');
        scrollActiveRibbonPillIntoView();
    }

    function scrollActiveRibbonPillIntoView() {
        const container = document.getElementById('level-ribbon-container');
        const activePill = document.getElementById(`ribbon-pill-${careerIndex}`);
        if (!container || !activePill) return;

        const containerRect = container.getBoundingClientRect();
        const pillRect = activePill.getBoundingClientRect();
        const scrollOffset = (pillRect.left + pillRect.width / 2) - (containerRect.left + containerRect.width / 2);
        container.scrollBy({ left: scrollOffset, behavior: 'smooth' });
    }

    // Render Expandable Bento Matrix Grid Drawer
    function renderLevelGridMatrix() {
        const grid = document.getElementById('level-grid-matrix');
        if (!grid) return;
        grid.innerHTML = '';

        for (let k = 0; k < 12; k++) {
            const arrayIdx = 11 - k;
            const lvlNumber = k + 1;
            const m = careerMilestones[arrayIdx];

            const card = document.createElement('div');
            card.className = `level-grid-card ${arrayIdx === careerIndex ? 'is-active' : ''}`;
            card.id = `grid-card-${arrayIdx}`;
            card.innerHTML = `
                <div class="grid-card-thumb">
                    <img src="${m.conceptImg || 'assets/models/diorama_concept_synopsys.jpg'}" alt="${m.company} Concept" class="grid-card-img" onerror="this.src='assets/commercial/covers/sonicforces_landscape.jpg'" />
                    <span class="grid-card-lvl-badge">STAGE ${String(lvlNumber).padStart(2, '0')}</span>
                    <span class="grid-card-year">${m.year || ''}</span>
                </div>
                <div class="grid-card-body">
                    <div class="grid-card-company">${m.company}</div>
                    <div class="grid-card-role">${m.role}</div>
                </div>
            `;
            card.onclick = () => {
                setCareerLevel(arrayIdx);
                toggleLevelGridMatrix(false);
            };
            grid.appendChild(card);
        }
    }

    function updateLevelGridActive(activeIdx) {
        const grid = document.getElementById('level-grid-matrix');
        if (!grid) return;
        const cards = grid.querySelectorAll('.level-grid-card');
        cards.forEach(card => card.classList.remove('is-active'));
        const activeCard = document.getElementById(`grid-card-${activeIdx}`);
        if (activeCard) activeCard.classList.add('is-active');
    }

    // Step Level: Prev (-1, lower level number = higher arrayIdx) or Next (+1, higher level number = lower arrayIdx)
    window.stepCareerLevel = function(dir) {
        let next = careerIndex - dir;
        if (next < 0) next = 0;
        if (next >= careerMilestones.length) next = careerMilestones.length - 1;
        loadDioramaForLevel(next, true);
    };

    window.setCareerLevel = function(arrayIdx) {
        loadDioramaForLevel(arrayIdx, true);
    };

    window.toggleLevelGridMatrix = function(forceState) {
        const drawer = document.getElementById('level-grid-matrix-drawer');
        const toggleBtn = document.getElementById('career-grid-toggle-btn');
        const iconSpan = document.getElementById('grid-toggle-icon');
        const textSpan = document.getElementById('grid-toggle-text');
        if (!drawer) return;

        const isOpen = (typeof forceState === 'boolean') ? forceState : !drawer.classList.contains('is-open');
        drawer.classList.toggle('is-open', isOpen);
        if (toggleBtn) toggleBtn.classList.toggle('active', isOpen);
        if (iconSpan) iconSpan.textContent = isOpen ? '✕' : '⊞';
        if (textSpan) textSpan.textContent = isOpen ? 'Close Matrix' : 'All Stages';

        DioramaAudio.play('shimmer');
    };

    window.resetDioramaOrbit = function() {
        if (!dioramaCamera || !dioramaControls) return;
        DioramaAudio.play('shimmer');
        dioramaControls.reset();
        dioramaCamera.position.set(0, 7.0, 14.5);
        dioramaControls.target.set(0, 1.2, 0);
    };

    window.triggerDioramaToy = function() {
        const m = careerMilestones[careerIndex];
        if (!m) return;
        DioramaAudio.play(m.sfx);

        if (currentDioramaMesh) {
            const propGroup = currentDioramaMesh.getObjectByName('stageHeroProps');
            const target = propGroup || currentDioramaMesh;
            const startTime = performance.now();
            function bounce(now) {
                const p = (now - startTime) / 360;
                if (p <= 1) {
                    const s = 1 + Math.sin(p * Math.PI) * 0.28;
                    target.scale.set(s, s, s);
                    requestAnimationFrame(bounce);
                } else {
                    target.scale.set(1, 1, 1);
                }
            }
            requestAnimationFrame(bounce);
        }

        const toast = document.getElementById('level-toy-toast');
        if (toast) {
            toast.textContent = m.toyAction;
            toast.classList.add('is-visible');
            clearTimeout(toast._timer);
            toast._timer = setTimeout(() => {
                toast.classList.remove('is-visible');
            }, 2500);
        }
    };

    window.openActiveLevelModal = function() {
        const m = careerMilestones[careerIndex];
        if (m && typeof openModal === 'function') {
            openModal(m.key);
        }
    };

    window.toggleDioramaAudio = function() {
        const isMuted = DioramaAudio.toggleMute();
        const icon = document.getElementById('diorama-audio-icon');
        if (icon) icon.textContent = isMuted ? '🔇' : '🔊';
    };

    window.triggerLevelPilotGreeting = function() {
        DioramaAudio.play('shimmer');
        const bubble = document.getElementById('pilot-speech-bubble');
        if (!bubble) return;
        const m = careerMilestones[careerIndex];
        const lvlNumber = 12 - careerIndex;
        const greetings = [
            `Howdo! Station Pilot Tom here. Surveying Stage ${String(lvlNumber).padStart(2, '0')} // ${m.company}! 👋`,
            `Systems nominal! Drag to inspect 360° or tap the toy button for telemetry! 🚀`,
            `Diorama rendered at 60fps WebGL with studio Three.js lighting! ✨`,
            `Tap "Inspect Scope" to open the deep-dive mission dossier! 🎮`
        ];
        const pick = greetings[Math.floor(Math.random() * greetings.length)];
        bubble.textContent = pick;
        bubble.style.opacity = '1';
        bubble.style.transform = 'translateY(0) scale(1.05)';
        setTimeout(() => {
            bubble.style.transform = 'translateY(0) scale(1)';
        }, 220);
    };

    // Legacy backwards-compatible aliases
    window.focusMountainLevel = function(idx, anim) { loadDioramaForLevel(idx, anim); };
    window.stepMountainLevel = function(dir) { stepCareerLevel(dir); };
    window.resetMountainOrbit = function() { resetDioramaOrbit(); };
    window.triggerMountainToy = function() { triggerDioramaToy(); };
    window.openActiveMountainModal = function() { openActiveLevelModal(); };
    window.toggleOverworldAudio = function() { toggleDioramaAudio(); };
    window.triggerMountainPilotGreeting = function() { triggerLevelPilotGreeting(); };
    window.getCareerIndex = function() { return careerIndex; };

    // Canvas Resize Handler
    function onDioramaResize() {
        const container = document.getElementById('level-canvas-container');
        if (!container || !dioramaRenderer || !dioramaCamera) return;
        const width = container.clientWidth;
        const height = container.clientHeight || 520;
        if (width <= 0 || height <= 0) return;

        dioramaCamera.aspect = width / height;
        dioramaCamera.updateProjectionMatrix();
        dioramaRenderer.setSize(width, height);
        dioramaRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    }
    window.onDioramaResize = onDioramaResize;
    window.onMountainWindowResize = onDioramaResize;

    // Interactive Raycasting on Canvas
    function setupDioramaRaycasting(canvas) {
        const raycaster = new THREE.Raycaster();
        const mouse = new THREE.Vector2();
        const tooltip = document.getElementById('level-hover-tooltip');

        canvas.addEventListener('pointerdown', (e) => {
            if (e.button !== 0) return; // Left click only
            const rect = canvas.getBoundingClientRect();
            mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
            mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

            raycaster.setFromCamera(mouse, dioramaCamera);
            if (currentDioramaMesh) {
                const intersects = raycaster.intersectObjects([currentDioramaMesh], true);
                if (intersects.length > 0) {
                    // Check if clicked plaque or prop
                    let obj = intersects[0].object;
                    let isPlaque = false;
                    while (obj && obj !== currentDioramaMesh) {
                        if (obj.name === 'stagePlaque' || obj.name === 'easelGroup') {
                            isPlaque = true;
                            break;
                        }
                        obj = obj.parent;
                    }
                    if (isPlaque) {
                        openActiveLevelModal();
                    } else {
                        triggerDioramaToy();
                    }
                }
            }
        });

        canvas.addEventListener('pointermove', (e) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
            mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

            raycaster.setFromCamera(mouse, dioramaCamera);
            if (currentDioramaMesh) {
                const intersects = raycaster.intersectObjects([currentDioramaMesh], true);
                if (intersects.length > 0 && tooltip) {
                    const m = careerMilestones[careerIndex];
                    const lvl = 12 - careerIndex;
                    tooltip.textContent = `LVL ${String(lvl).padStart(2, '0')} // ${m.company} • Tap to interact`;
                    tooltip.style.left = `${e.clientX - rect.left}px`;
                    tooltip.style.top = `${e.clientY - rect.top}px`;
                    tooltip.style.display = 'block';
                    canvas.style.cursor = 'pointer';
                    return;
                }
            }
            if (tooltip) tooltip.style.display = 'none';
            canvas.style.cursor = 'grab';
        });

        // Mobile touch swipe gestures
        let touchStartX = 0;
        canvas.addEventListener('touchstart', (e) => {
            if (e.touches.length === 1) {
                touchStartX = e.touches[0].clientX;
            }
        }, { passive: true });

        canvas.addEventListener('touchend', (e) => {
            if (e.changedTouches.length === 1) {
                const diffX = e.changedTouches[0].clientX - touchStartX;
                if (Math.abs(diffX) > 60) {
                    if (diffX > 0) {
                        stepCareerLevel(-1); // Swipe right -> previous stage
                    } else {
                        stepCareerLevel(1);  // Swipe left -> next stage
                    }
                }
            }
        }, { passive: true });
    }

    // Initialize 3D Level Select Studio Scene
    function initCareerLevelSelect() {
        if (isDioramaInitialized) return;
        if (typeof THREE === 'undefined') {
            setTimeout(initCareerLevelSelect, 100);
            return;
        }

        const container = document.getElementById('level-canvas-container');
        const canvas = document.getElementById('career-level-canvas');
        if (!container || !canvas) return;

        const width = container.clientWidth || 800;
        const height = container.clientHeight || 520;

        // 1. Scene
        dioramaScene = new THREE.Scene();

        // 2. Camera (Perspective Studio View)
        dioramaCamera = new THREE.PerspectiveCamera(40, width / height, 0.5, 200);
        dioramaCamera.position.set(0, 7.0, 14.5);

        dioramaClock = new THREE.Clock();

        // 3. Renderer
        dioramaRenderer = new THREE.WebGLRenderer({
            canvas,
            antialias: true,
            alpha: true,
            powerPreference: 'high-performance'
        });
        dioramaRenderer.setSize(width, height);
        dioramaRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        dioramaRenderer.shadowMap.enabled = true;
        dioramaRenderer.shadowMap.type = THREE.PCFSoftShadowMap;

        // 4. OrbitControls
        dioramaControls = new THREE.OrbitControls(dioramaCamera, canvas);
        dioramaControls.enableDamping = true;
        dioramaControls.dampingFactor = 0.06;
        dioramaControls.maxPolarAngle = Math.PI / 2 - 0.05; // clamp above floor
        dioramaControls.minPolarAngle = 0.2;
        dioramaControls.minDistance = 8.0;
        dioramaControls.maxDistance = 25.0;
        dioramaControls.target.set(0, 1.2, 0);

        // 5. Studio Lighting
        const ambLight = new THREE.AmbientLight(0xffffff, 0.75);
        dioramaScene.add(ambLight);

        // Key Warm Studio Spotlight
        const keyLight = new THREE.DirectionalLight(0xffffff, 1.4);
        keyLight.position.set(12, 18, 14);
        keyLight.castShadow = true;
        keyLight.shadow.mapSize.width = 1024;
        keyLight.shadow.mapSize.height = 1024;
        keyLight.shadow.camera.near = 5;
        keyLight.shadow.camera.far = 60;
        keyLight.shadow.camera.left = -10;
        keyLight.shadow.camera.right = 10;
        keyLight.shadow.camera.top = 10;
        keyLight.shadow.camera.bottom = -10;
        keyLight.shadow.bias = -0.001;
        dioramaScene.add(keyLight);

        // Cyan Rim / Back Light
        const cyanRim = new THREE.DirectionalLight(0x00f0ff, 0.85);
        cyanRim.position.set(-14, 12, -12);
        dioramaScene.add(cyanRim);

        // Under-pedestal Upward Point Light
        const underPoint = new THREE.PointLight(0x00f0ff, 1.8, 14);
        underPoint.position.set(0, -1.0, 0);
        dioramaScene.add(underPoint);

        // 6. Contact Shadow Disc at Floor Level
        const shadowDiscGeo = new THREE.CircleGeometry(7.5, 36);
        shadowDiscGeo.rotateX(-Math.PI / 2);
        const shadowDiscMat = new THREE.MeshBasicMaterial({
            color: 0x030610,
            transparent: true,
            opacity: 0.55
        });
        const shadowDisc = new THREE.Mesh(shadowDiscGeo, shadowDiscMat);
        shadowDisc.position.y = -3.8;
        dioramaScene.add(shadowDisc);

        // 7. Ambient Floating Dust Particles
        const pCount = 70;
        const pGeom = new THREE.BufferGeometry();
        const pPos = new Float32Array(pCount * 3);
        for (let i = 0; i < pCount * 3; i += 3) {
            pPos[i] = (Math.random() - 0.5) * 28;
            pPos[i + 1] = Math.random() * 14 - 3;
            pPos[i + 2] = (Math.random() - 0.5) * 28;
        }
        pGeom.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
        const pMat = new THREE.PointsMaterial({
            color: 0x00f0ff,
            size: 0.35,
            transparent: true,
            opacity: 0.45
        });
        const dustPoints = new THREE.Points(pGeom, pMat);
        dioramaScene.add(dustPoints);

        // 8. Event Listeners & Raycasting
        window.addEventListener('resize', onDioramaResize);
        setupDioramaRaycasting(canvas);

        // 9. Initial Build: Ribbon, Grid Matrix, and Initial Diorama
        renderLevelRibbonTrack();
        renderLevelGridMatrix();
        loadDioramaForLevel(careerIndex, false);

        // 10. Animation Loop
        function animateDiorama() {
            requestAnimationFrame(animateDiorama);
            const delta = dioramaClock ? dioramaClock.getDelta() : 0.016;

            // Slowly rotate dust points
            dustPoints.rotation.y += delta * 0.04;

            // Rotate animated stage props
            if (currentDioramaMesh) {
                const rotProp = currentDioramaMesh.getObjectByName('rotatingProp');
                if (rotProp) rotProp.rotation.y += delta * 1.5;

                const rotRing = currentDioramaMesh.getObjectByName('rotatingRing');
                if (rotRing) {
                    rotRing.rotation.x += delta * 2.0;
                    rotRing.rotation.y += delta * 1.2;
                }

                const floatCap = currentDioramaMesh.getObjectByName('floatingCap');
                if (floatCap) floatCap.rotation.y += delta * 0.8;
            }

            dioramaControls.update();
            dioramaRenderer.render(dioramaScene, dioramaCamera);
        }
        animateDiorama();

        isDioramaInitialized = true;
    }
    window.initCareerLevelSelect = initCareerLevelSelect;
    window.initCareerSpiralMountain = initCareerLevelSelect; // Backwards compatibility alias

    // ═════════════════════════════════════════════════════════════
    // 12. CYBERNETIC WAVE STRIP CAREER DIORAMA CONTROLLER
    // ═════════════════════════════════════════════════════════════
    // Sinuous continuous wave strip coordinates (2500px x 480px)
    // Inverted order: Left = Present ('26 Defence), Right = Beginning ('07 Staffs Uni)
    const waveNodeCoords = [
        { lvl: 12, arrayIdx: 0,  x: 140,  y: 170, stem: 'down', title: "Classified Defence" },
        { lvl: 11, arrayIdx: 1,  x: 350,  y: 310, stem: 'up',   title: "Synopsys & Ansys" },
        { lvl: 10, arrayIdx: 2,  x: 560,  y: 170, stem: 'down', title: "Malvern Panalytical" },
        { lvl: 9,  arrayIdx: 3,  x: 770,  y: 310, stem: 'up',   title: "SEGA Hardlight" },
        { lvl: 8,  arrayIdx: 4,  x: 980,  y: 170, stem: 'down', title: "Connect Group / JLR" },
        { lvl: 7,  arrayIdx: 5,  x: 1190, y: 310, stem: 'up',   title: "ndevr Ltd" },
        { lvl: 6,  arrayIdx: 6,  x: 1400, y: 170, stem: 'down', title: "Adactus & Pizza Hut" },
        { lvl: 5,  arrayIdx: 7,  x: 1610, y: 310, stem: 'up',   title: "Silver Lining QA" },
        { lvl: 4,  arrayIdx: 8,  x: 1820, y: 170, stem: 'down', title: "Zynga / NaturalMotion" },
        { lvl: 3,  arrayIdx: 9,  x: 2030, y: 310, stem: 'up',   title: "Tinderstone & Syscom" },
        { lvl: 2,  arrayIdx: 10, x: 2240, y: 170, stem: 'down', title: "Ticketmaster" },
        { lvl: 1,  arrayIdx: 11, x: 2420, y: 280, stem: 'up',   title: "Staffordshire University" }
    ];

    let currentWaveStage = 11; // Default to Stage 11 (Synopsys & Ansys)
    const waveFallbackImg = 'assets/commercial/covers/sonicforces_landscape.jpg';

    function initCareerWaveStrip() {
        const layer = document.getElementById('career-wave-nodes-layer');
        if (!layer) return;
        layer.innerHTML = '';

        waveNodeCoords.forEach(node => {
            const m = careerMilestones[node.arrayIdx];
            if (!m) return;

            const el = document.createElement('div');
            el.className = `career-wave-node stem-${node.stem} ${node.lvl === currentWaveStage ? 'is-active' : ''}`;
            el.style.left = `${node.x}px`;
            el.style.top = `${node.y}px`;
            el.id = `wave-node-${node.lvl}`;

            const imgSrc = m.conceptImg || waveFallbackImg;

            el.innerHTML = `
                <div class="wave-node-dot" title="Stage ${node.lvl}: ${m.company}">
                    <span>${String(node.lvl).padStart(2, '0')}</span>
                    <div class="sonar-ring"></div>
                </div>
                <div class="wave-connector-stem"></div>
                <div class="wave-diorama-card" title="Inspect ${m.company}">
                    <img src="${imgSrc}" alt="${m.company}" onerror="this.src='${waveFallbackImg}';" loading="lazy" />
                    <div class="wave-card-meta">
                        <div class="wave-card-header">
                            <span class="wave-card-company">${m.company}</span>
                            <span class="wave-card-year">${m.year || ''}</span>
                        </div>
                        <span class="wave-card-role">${m.role}</span>
                    </div>
                </div>
            `;

            el.onclick = () => openWaveInlineInspector(node.lvl);
            layer.appendChild(el);
        });

        setupWaveDragScroll();
        updateWaveAvatarPosition(currentWaveStage, false);
        updateWaveDock(currentWaveStage);
        updateWaveControls(currentWaveStage);
        setTimeout(centerWaveActiveNode, 180);
    }

    function selectWaveStage(lvl, animate = true) {
        if (lvl < 1) lvl = 1;
        if (lvl > 12) lvl = 12;
        currentWaveStage = lvl;

        const node = waveNodeCoords.find(n => n.lvl === lvl);
        if (!node) return;

        careerIndex = node.arrayIdx; // sync internal careerIndex

        // Audio feedback
        const sfxType = lvl === 12 || lvl === 10 ? 'shimmer' : (lvl === 9 ? 'ring' : (lvl === 4 ? 'launch' : 'hop'));
        DioramaAudio.play(sfxType);

        // Update active node styling
        document.querySelectorAll('.career-wave-node').forEach(n => n.classList.remove('is-active'));
        const activeNodeEl = document.getElementById(`wave-node-${lvl}`);
        if (activeNodeEl) activeNodeEl.classList.add('is-active');

        updateWaveAvatarPosition(lvl, animate);
        updateWaveDock(lvl);
        updateWaveControls(lvl);

        // If inline inspector is currently active, refresh its content smoothly
        const inspector = document.getElementById('career-wave-inline-inspector');
        if (inspector && inspector.classList.contains('active')) {
            updateWaveInlineInspector(lvl);
            centerWaveActiveNode();
        }
    }

    function openWaveInlineInspector(lvl) {
        selectWaveStage(lvl, true);

        const node = waveNodeCoords.find(n => n.lvl === lvl);
        if (!node) return;

        updateWaveInlineInspector(lvl);

        // Dim track and show inline inspector
        const track = document.getElementById('career-wave-track');
        const inspector = document.getElementById('career-wave-inline-inspector');
        if (track) track.classList.add('is-dimmed');
        if (inspector) inspector.classList.add('active');

        centerWaveActiveNode();
        DioramaAudio.play('shimmer');
    }

    function updateWaveInlineInspector(lvl) {
        const node = waveNodeCoords.find(n => n.lvl === lvl);
        if (!node) return;
        const m = careerMilestones[node.arrayIdx];
        if (!m) return;
        const data = experienceData[m.key];

        // Left Panel (Diorama & Narrative)
        const stagePill = document.getElementById('inline-stage-pill');
        const periodPill = document.getElementById('inline-period-pill');
        const dioramaImg = document.getElementById('inline-diorama-img');
        const dioramaCompany = document.getElementById('inline-diorama-company');
        const dioramaRole = document.getElementById('inline-diorama-role');
        const dioramaNarrative = document.getElementById('inline-diorama-narrative');
        const dioramaTags = document.getElementById('inline-diorama-tags');
        const toyIcon = document.getElementById('inline-toy-icon');
        const toyLabel = document.getElementById('inline-toy-label');

        if (stagePill) stagePill.textContent = `STAGE ${String(node.lvl).padStart(2, '0')}`;
        if (periodPill) periodPill.textContent = m.date;
        if (dioramaImg) {
            dioramaImg.src = m.conceptImg || waveFallbackImg;
            dioramaImg.onerror = function() { this.src = waveFallbackImg; };
        }
        if (dioramaCompany) dioramaCompany.textContent = m.company;
        if (dioramaRole) dioramaRole.textContent = m.role;
        if (dioramaNarrative) dioramaNarrative.textContent = `"${m.narrative}"`;
        if (toyIcon) toyIcon.textContent = getIconForType(m.meshType);
        if (toyLabel) toyLabel.textContent = m.toyName || 'Test Prop';

        if (dioramaTags) {
            dioramaTags.innerHTML = '';
            (m.tags || []).forEach(t => {
                const span = document.createElement('span');
                span.className = 'inline-tag-chip';
                span.textContent = t;
                dioramaTags.appendChild(span);
            });
        }

        // Right Panel (Job Dossier)
        const dossierTitle = document.getElementById('inline-dossier-title');
        const dossierCompany = document.getElementById('inline-dossier-company');
        const dossierPeriod = document.getElementById('inline-dossier-period');
        const dossierLocation = document.getElementById('inline-dossier-location');
        const dossierBullets = document.getElementById('inline-dossier-bullets');
        const dossierSkills = document.getElementById('inline-dossier-skills');

        const titleText = data ? data.title : m.role;
        const companyText = (data ? data.company : m.company).toUpperCase();
        const periodText = (data ? data.period : m.date).toUpperCase();
        const locationText = (data ? data.location : 'UK').toUpperCase();

        if (dossierTitle) dossierTitle.textContent = titleText;
        if (dossierCompany) dossierCompany.textContent = companyText;
        if (dossierPeriod) dossierPeriod.textContent = periodText;
        if (dossierLocation) dossierLocation.textContent = locationText;

        if (dossierBullets) {
            dossierBullets.innerHTML = '';
            const bullets = (data && data.bullets) ? data.bullets : [m.narrative];
            bullets.forEach(b => {
                const li = document.createElement('li');
                li.textContent = b;
                dossierBullets.appendChild(li);
            });
        }

        if (dossierSkills) {
            dossierSkills.innerHTML = '';
            const skills = (data && data.skills && data.skills.length > 0) ? data.skills : (m.tags || []);
            skills.forEach(s => {
                const span = document.createElement('span');
                span.className = 'inline-skill-chip';
                span.textContent = s;
                dossierSkills.appendChild(span);
            });
        }
    }

    function closeWaveInlineInspector() {
        const inspector = document.getElementById('career-wave-inline-inspector');
        const track = document.getElementById('career-wave-track');
        if (inspector) inspector.classList.remove('active');
        if (track) track.classList.remove('is-dimmed');
        centerWaveActiveNode();
    }

    function closeWaveInlineInspectorOnBackdrop(event) {
        const inspector = document.getElementById('career-wave-inline-inspector');
        if (event.target === inspector) {
            closeWaveInlineInspector();
        }
    }

    function triggerInlineToy() {
        const node = waveNodeCoords.find(n => n.lvl === currentWaveStage);
        if (!node) return;
        const m = careerMilestones[node.arrayIdx];
        if (!m) return;
        DioramaAudio.play(m.sfx || 'shimmer');

        const btn = document.getElementById('btn-inline-toy');
        if (btn) {
            btn.style.transform = 'scale(1.14)';
            setTimeout(() => { btn.style.transform = ''; }, 200);
        }
    }

    function updateWaveControls(lvl) {
        const node = waveNodeCoords.find(n => n.lvl === lvl);
        if (!node) return;
        const m = careerMilestones[node.arrayIdx];
        if (!m) return;

        const stageBadge = document.getElementById('wave-active-stage-badge');
        const dateRange = document.getElementById('wave-active-date-range');
        if (stageBadge) stageBadge.textContent = `STAGE ${String(node.lvl).padStart(2, '0')} // ${(m.company).toUpperCase()}`;
        if (dateRange) dateRange.textContent = m.date;
    }

    function updateWaveDock(lvl) {
        const node = waveNodeCoords.find(n => n.lvl === lvl);
        if (!node) return;
        const m = careerMilestones[node.arrayIdx];
        if (!m) return;

        const thumb = document.getElementById('wave-dock-thumb');
        const stageLabel = document.getElementById('wave-dock-stage-label');
        const company = document.getElementById('wave-dock-company');
        const role = document.getElementById('wave-dock-role');

        if (thumb) {
            thumb.src = m.conceptImg || waveFallbackImg;
            thumb.onerror = function() { this.src = waveFallbackImg; };
        }
        if (stageLabel) stageLabel.textContent = `STAGE ${String(node.lvl).padStart(2, '0')} // ${m.stamp || 'MILESTONE'}`;
        if (company) company.textContent = m.company;
        if (role) role.textContent = m.role;
    }

    function updateWaveAvatarPosition(lvl, animate = true) {
        const node = waveNodeCoords.find(n => n.lvl === lvl);
        const avatar = document.getElementById('career-wave-avatar');
        if (!node || !avatar) return;

        avatar.style.left = `${node.x}px`;
        avatar.style.top = `${node.y}px`;
    }

    function centerWaveActiveNode() {
        const node = waveNodeCoords.find(n => n.lvl === currentWaveStage);
        const viewport = document.getElementById('career-wave-viewport');
        if (!node || !viewport) return;

        const targetScroll = node.x - viewport.clientWidth / 2;
        viewport.scrollTo({ left: targetScroll, behavior: 'smooth' });
    }

    function stepWaveStage(dir) {
        const currIdx = waveNodeCoords.findIndex(n => n.lvl === currentWaveStage);
        let nextIdx = (currIdx !== -1 ? currIdx : 0) + dir;
        if (nextIdx < 0) nextIdx = waveNodeCoords.length - 1;
        if (nextIdx >= waveNodeCoords.length) nextIdx = 0;

        const targetNode = waveNodeCoords[nextIdx];
        if (!targetNode) return;

        const inspector = document.getElementById('career-wave-inline-inspector');
        if (inspector && inspector.classList.contains('active')) {
            openWaveInlineInspector(targetNode.lvl);
        } else {
            selectWaveStage(targetNode.lvl, true);
            centerWaveActiveNode();
        }
    }

    function openActiveStageInspect() {
        openWaveInlineInspector(currentWaveStage);
    }

    function setupWaveDragScroll() {
        const slider = document.getElementById('career-wave-viewport');
        if (!slider || slider._dragInitialized) return;
        slider._dragInitialized = true;

        let isDown = false;
        let startX;
        let scrollLeft;

        slider.addEventListener('mousedown', (e) => {
            if (e.target.closest('.career-wave-node') || e.target.closest('button') || e.target.closest('#career-wave-inline-inspector')) return;
            isDown = true;
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        });

        slider.addEventListener('mouseleave', () => { isDown = false; });
        slider.addEventListener('mouseup', () => { isDown = false; });

        slider.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX) * 1.6;
            slider.scrollLeft = scrollLeft - walk;
        });

        // Touch drag
        let touchStartX = 0;
        let touchScrollLeft = 0;
        slider.addEventListener('touchstart', (e) => {
            if (e.target.closest('#career-wave-inline-inspector')) return;
            if (e.touches.length === 1) {
                touchStartX = e.touches[0].pageX;
                touchScrollLeft = slider.scrollLeft;
            }
        }, { passive: true });

        slider.addEventListener('touchmove', (e) => {
            if (e.target.closest('#career-wave-inline-inspector')) return;
            if (e.touches.length === 1) {
                const diff = (e.touches[0].pageX - touchStartX) * 1.4;
                slider.scrollLeft = touchScrollLeft - diff;
            }
        }, { passive: true });
    }

    // Window bindings & Aliases for backwards compatibility
    window.initCareerWaveStrip = initCareerWaveStrip;
    window.selectWaveStage = selectWaveStage;
    window.stepWaveStage = stepWaveStage;
    window.centerWaveActiveNode = centerWaveActiveNode;
    window.openActiveStageInspect = openActiveStageInspect;
    window.openWaveInlineInspector = openWaveInlineInspector;
    window.closeWaveInlineInspector = closeWaveInlineInspector;
    window.closeWaveInlineInspectorOnBackdrop = closeWaveInlineInspectorOnBackdrop;
    window.triggerInlineToy = triggerInlineToy;

    // Saga / legacy aliases
    window.initSagaMap = initCareerWaveStrip;
    window.selectSagaStage = selectWaveStage;
    window.stepSagaStage = stepWaveStage;
    window.centerSagaActiveNode = centerWaveActiveNode;
    window.closeSagaJobModal = closeWaveInlineInspector;
    window.openActiveMilestoneFullModal = function() {
        openWaveInlineInspector(currentWaveStage);
    };
    window.triggerModalToy = triggerInlineToy;

    window.toggleAudio = function() {
        const isMuted = DioramaAudio.toggleMute();
        const icon = document.getElementById('wave-sound-icon');
        if (icon) icon.textContent = isMuted ? '🔇' : '🔊';
        return isMuted;
    };

    // Keyboard navigation (Arrow keys + Escape)
    window.addEventListener('keydown', (e) => {
        const aboutTab = document.getElementById('subpage-about');
        if (!aboutTab || !aboutTab.classList.contains('active')) return;
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

        if (e.key === 'ArrowRight') {
            e.preventDefault();
            stepWaveStage(1); // rightwards towards the beginning
        } else if (e.key === 'ArrowLeft') {
            e.preventDefault();
            stepWaveStage(-1); // leftwards towards present
        } else if (e.key === 'Escape') {
            closeWaveInlineInspector();
        }
    });

    // Initialize Wave Strip
    initCareerWaveStrip();

    // Hash routing or default to Hero Home
    const initialHash = window.location.hash.replace('#', '');
    if (['about', 'career', 'contact'].includes(initialHash)) {
        setTimeout(() => switchTab(initialHash), 180);
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
                if (urlEl.tagName === 'A') {
                    urlEl.href = data.href;
                    if (data.href.startsWith('mailto:')) {
                        urlEl.removeAttribute('target');
                        urlEl.removeAttribute('rel');
                    } else {
                        urlEl.setAttribute('target', '_blank');
                        urlEl.setAttribute('rel', 'noopener noreferrer');
                    }
                }
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


