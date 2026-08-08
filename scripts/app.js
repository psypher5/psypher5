document.addEventListener('DOMContentLoaded', () => {

    // 1. Comprehensive Career Timeline Data Store
    const experienceData = {
        'synopsys-ansys': {
            title: 'Staff R&D Engineer / Technical Architect',
            company: 'Synopsys & Ansys',
            period: 'Feb 2023 - Present',
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
            platform: 'iOS / Android / Kindle',
            title: 'CSR Racing',
            tagline: '130M+ Downloads // Drag Racing Phenomenon',
            desc: 'Provided comprehensive exploratory and release verification for CSR Racing across iOS, Android, and Kindle hardware matrices. Extensively analyzed crash dumps, memory spikes, and device logs via ADB, Android Monitor, Charles Proxy, and Xcode.',
            bullets: [
                'Memory profiling & thermal throttling analysis on low-end ARM chipsets.',
                'Live-event server synchronization & multiplayer network packet verification.',
                'IAP purchase flow validation and platform storefront compliance.'
            ],
            tags: ['iOS / Android', 'ADB Logcat', 'Charles Proxy', 'Xcode Instruments', 'Jira Agile']
        },
        'csr2': {
            studio: 'ZYNGA / NATURALMOTION',
            platform: 'iOS / Android',
            title: 'CSR 2',
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
            platform: 'iOS / Android',
            title: 'CSR Classics',
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
            platform: 'iOS / Android',
            title: 'Dawn of Titans',
            tagline: 'Console-Quality 3D Strategy & Massive Scale Battles',
            desc: 'Led on-site QA teams in London executing large-scale tactical army simulations, rendering engine stress testing, and cloud save synchronization.',
            bullets: [
                'On-site QA team coordination and daily milestone status reports.',
                'Stress testing rendering limits with thousands of concurrent on-screen units.',
                'Alliance war network packet validation and live event monitoring.'
            ],
            tags: ['On-site QA Lead', 'Massive Unit Rendering', 'Alliance Multiplayer', 'Cloud Saves']
        },
        'ninja': {
            studio: 'NATURALMOTION',
            platform: 'iOS / Android',
            title: 'Clumsy Ninja',
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
            platform: 'iOS / Android / Kindle',
            title: 'FarmVille 2: Country Escape',
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
            platform: 'iOS / Android',
            title: 'Sonic Forces: Speed Battle',
            tagline: 'Real-Time 4-Player Synchronous Racing',
            desc: 'Verified live 4-player multiplayer matchmaking, weapon projectile hit detection, and compiled custom internal builds from developer pull requests.',
            bullets: [
                'Compiled and verified internal developer PR builds across daily pipelines.',
                '4-player synchronous online matchmaking and obstacle hit registration.',
                'COPPA compliance, parental gate reviews, and app store metadata audits.'
            ],
            tags: ['SEGA Hardlight', 'Live Matchmaking', 'PR Build Integration', 'COPPA Review']
        },
        'sonicdash2': {
            studio: 'SEGA HARDLIGHT',
            platform: 'iOS / Android',
            title: 'Sonic Dash 2: Sonic Boom',
            tagline: 'Team Switch Endless Runner // Enerbeam Mechanics',
            desc: 'Validated character switching mid-run, energetic beam swinging mechanics, and global leaderboard telemetry across global Android and iOS release rings.',
            bullets: [
                'Character mid-run team swap state and powerup combination testing.',
                'Enerbeam swinging physics and gyro tilt control sensitivity calibration.',
                'Store submission certification (App Store, Google Play Store, Amazon Appstore).'
            ],
            tags: ['Endless Runner', 'Sonic Boom', 'Store Certification', 'Leaderboards']
        },
        'pizzahut': {
            studio: 'ADACTUS & EDM GROUP',
            platform: 'Web / iOS / Android',
            title: 'Pizza Hut Loyalty & Web',
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
            platform: 'PC / Consoles',
            title: 'SkyScrappers',
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
            status: 'Evolving Prototype',
            statusClass: 'status-in-dev',
            engine: 'Godot 4.3 (C# & GDScript)',
            desc: 'An arcade physics-based abduction game set across a diorama-styled British countryside. Pilot a tractor-beam equipped UFO by night to herd and harvest livestock, while building automated conveyor networks, energy condensors, and processing pipelines by day.',
            pillars: [
                'Dynamic tractor-beam spring physics & multi-body rope constraints.',
                '2.5D tilt-shift camera shader with day/night atmospheric transitions.',
                'Factory-style automation loops: wool spin, raw milk refining, and alien tech trees.'
            ],
            tech: ['Godot 4', 'C# / GDScript', 'Custom Physics', 'Automation', 'Diorama Aesthetic']
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
            tech: ['Unity Engine', 'C# Systems Architecture', 'RTS / Tactical', 'Energy Grid Matrix']
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
            tech: ['C++ 17', 'SDL2 / OpenGL', '2D Raymarching', 'Shadow Physics', 'Custom Engine']
        }
    };

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

        const isSubpage = e.target.closest('.subpage');
        const isNavDock = e.target.closest('#bottom-nav');
        const isModal = e.target.closest('.modal-wrapper') || e.target.closest('.modal-overlay') || e.target.closest('#art-lightbox-modal');
        const isHeader = e.target.closest('#site-header');

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

        const studioEl = document.getElementById('dossier-studio');
        const platformEl = document.getElementById('dossier-platform');
        const titleEl = document.getElementById('dossier-title');
        const taglineEl = document.getElementById('dossier-tagline');
        const descEl = document.getElementById('dossier-desc');
        const bulletList = document.getElementById('dossier-bullet-list');
        const techTags = document.getElementById('dossier-tech-tags');

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
    };

    // 6. Project Subnav Switching (Indie Games vs Art Mosaic)
    window.switchProjectCategory = function(cat) {
        const indieView = document.getElementById('proj-view-indie');
        const artView = document.getElementById('proj-view-art');
        const tabBtns = document.querySelectorAll('.proj-tab-btn');

        if (cat === 'indie') {
            if (indieView) indieView.classList.add('active');
            if (artView) artView.classList.remove('active');
            if (tabBtns[0]) tabBtns[0].classList.add('active');
            if (tabBtns[1]) tabBtns[1].classList.remove('active');
        } else {
            if (indieView) indieView.classList.remove('active');
            if (artView) artView.classList.add('active');
            if (tabBtns[0]) tabBtns[0].classList.remove('active');
            if (tabBtns[1]) tabBtns[1].classList.add('active');
        }
    };

    // 7. Indie 3D Game Box Selection (3 Boxes: ewe-FO, Void Warden, Wick)
    window.selectIndieBox = function(boxKey) {
        const data = indieBoxes[boxKey];
        if (!data) return;

        document.querySelectorAll('.game-box-3d').forEach(box => {
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
    };

    // 8. Mosaic Category Filter Bar
    window.filterMosaic = function(category) {
        const items = document.querySelectorAll('.mosaic-item');
        const pills = document.querySelectorAll('.filter-pill');

        pills.forEach(pill => {
            if (pill.getAttribute('onclick').includes(category)) {
                pill.classList.add('active');
            } else {
                pill.classList.remove('active');
            }
        });

        items.forEach(item => {
            const itemCat = item.getAttribute('data-cat');
            if (category === 'all' || itemCat === category) {
                item.style.display = 'block';
                setTimeout(() => { item.style.opacity = '1'; item.style.transform = 'scale(1)'; }, 20);
            } else {
                item.style.opacity = '0';
                item.style.transform = 'scale(0.95)';
                setTimeout(() => { item.style.display = 'none'; }, 300);
            }
        });
    };

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

    // 10. Art Lightbox Operations
    const artLightbox = document.getElementById('art-lightbox');
    
    window.openArtLightbox = function(imgSrc, title, tag, desc) {
        if (!artLightbox) return;
        const imgEl = document.getElementById('lightbox-img');
        const titleEl = document.getElementById('lightbox-title');
        const tagEl = document.getElementById('lightbox-tag');
        const descEl = document.getElementById('lightbox-desc');

        if (imgEl) imgEl.src = imgSrc;
        if (titleEl) titleEl.textContent = title;
        if (tagEl) tagEl.textContent = tag;
        if (descEl) descEl.textContent = desc;

        artLightbox.classList.add('show');
    };

    window.closeArtLightbox = function() {
        if (!artLightbox) return;
        artLightbox.classList.remove('show');
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

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
            closeArtLightbox();
        }
    });

    // 12. Career Timeline & Wave Nodes Manager
    const careerMilestones = [
        { key: 'synopsys-ansys', date: 'Feb 2023 — Present', year: "'23", role: 'Staff R&D Engineer / Tech Architect', company: 'Synopsys & Ansys',          tags: ['HPC Cloud','Agentic AI','Playwright'] },
        { key: 'malvern',        date: 'Sep 2018 — Feb 2023', year: "'18", role: 'Software Test Engineer',             company: 'Malvern Panalytical',          tags: ['Ranorex','UX Systems','Azure DevOps'] },
        { key: 'sega',           date: 'Aug 2017 — Apr 2018', year: "'17", role: 'QA Tester',                          company: 'SEGA Hardlight',               tags: ['Sonic Franchise','PC QA','Mobile SDKs'] },
        { key: 'connect',        date: 'Oct 2016 — Jul 2017', year: "'16", role: 'QA & Automation Tester',             company: 'Connect Group (JLR)',           tags: ['Java','Cucumber BDD','Selenium'] },
        { key: 'ndevr',          date: 'Aug 2016 — Sep 2016', year: "'16", role: 'Associate Project Manager',          company: 'ndevr Ltd',                    tags: ['Agile Scrum','IoT Incubator'] },
        { key: 'adactus',        date: 'Oct 2015 — Jul 2016', year: "'15", role: 'Junior QA Tester',                   company: 'Adactus & EDM Group',          tags: ['Pizza Hut Loyalty','Cross-Browser'] },
        { key: 'silverlining',   date: 'Jun 2015 — Sep 2015', year: "'15", role: 'QA Lead (Co-founder)',               company: 'Silver Lining QA',          tags: ['Dawn of Titans','SkyScrappers'] },
        { key: 'zynga',          date: 'Jul 2014 — May 2015', year: "'14", role: 'Game Tester',                        company: 'Zynga / NaturalMotion',        tags: ['CSR Racing','Euphoria Physics'] },
        { key: 'tinderstone',    date: 'Nov 2013 — Aug 2014', year: "'13", role: '3D Artist & QA Tester',              company: 'Tinderstone & Syscom',         tags: ['3D Retopology','3ds Max'] },
        { key: 'ticketmaster',   date: 'Mar 2013 — Sep 2013', year: "'13", role: 'Graduate QA Engineer',               company: 'Ticketmaster / LiveNation',    tags: ['Agile QA','LiveNation'] },
        { key: 'staffuni',       date: 'Sep 2007 — Feb 2013', year: "'07", role: 'MEng Games Design & 3D Modelling',  company: 'Staffordshire University',     tags: ["Master's (MEng)",'Engine Tech'] }
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
            node.className = `wave-node${i === careerIndex ? ' active' : ''}`;
            
            // X position spaced evenly along track (8% to 92%)
            const xPercent = (i / (total - 1)) * 84 + 8;
            node.style.left = `${xPercent}%`;

            node.innerHTML = `
                <div class="node-dot"></div>
                <span class="node-label">${m.year}</span>
                <div class="node-tooltip">${m.company}</div>
            `;
            node.onclick = () => {
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
            tagsEl.innerHTML = m.tags.map(t => `<span class="q-tag">${t}</span>`).join('');
        }

        // Progress indicator dots
        const dotsEl = document.getElementById('career-dots');
        if (dotsEl) {
            dotsEl.innerHTML = '';
            careerMilestones.forEach((_, i) => {
                const dot = document.createElement('span');
                dot.className = `career-dot${i === careerIndex ? ' active' : ''}`;
                dot.title = careerMilestones[i].company;
                dot.onclick = () => { careerIndex = i; renderCareer(); };
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
