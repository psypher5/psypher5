const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, '..', 'assets', 'commercial', 'logos');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

const tinderstoneSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 80" width="320" height="80">
  <defs>
    <linearGradient id="tsGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#00f0ff"/>
      <stop offset="100%" stop-color="#0284c7"/>
    </linearGradient>
  </defs>
  <g transform="translate(15, 12)">
    <polygon points="28,4 52,18 28,32 4,18" fill="rgba(0, 240, 255, 0.25)" stroke="#00f0ff" stroke-width="2" stroke-linejoin="round"/>
    <polygon points="4,18 28,32 28,52 4,38" fill="rgba(2, 132, 199, 0.35)" stroke="#00f0ff" stroke-width="2" stroke-linejoin="round"/>
    <polygon points="52,18 28,32 28,52 52,38" fill="rgba(14, 165, 233, 0.45)" stroke="#38bdf8" stroke-width="2" stroke-linejoin="round"/>
    <line x1="28" y1="4" x2="28" y2="32" stroke="#fff" stroke-width="1.5" stroke-opacity="0.7"/>
    <circle cx="28" cy="4" r="2.5" fill="#00f0ff"/>
    <circle cx="52" cy="18" r="2" fill="#38bdf8"/>
    <circle cx="4" cy="18" r="2" fill="#38bdf8"/>
    <circle cx="28" cy="52" r="2" fill="#0284c7"/>
  </g>
  <text x="82" y="42" fill="#ffffff" font-family="'Segoe UI', system-ui, -apple-system, sans-serif" font-size="24" font-weight="900" letter-spacing="1.5">TINDERSTONE</text>
  <text x="84" y="58" fill="#00f0ff" font-family="'Consolas', monospace" font-size="11" font-weight="700" letter-spacing="2.8">3D STUDIO &amp; SYSCOM</text>
</svg>`;

const ndevrSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 80" width="300" height="80">
  <defs>
    <linearGradient id="ndevrGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#c084fc"/>
      <stop offset="100%" stop-color="#a855f7"/>
    </linearGradient>
  </defs>
  <g transform="translate(20, 16)">
    <circle cx="24" cy="24" r="6" fill="#a855f7"/>
    <circle cx="24" cy="24" r="3" fill="#f5d0fe"/>
    <path d="M12,12 A17,17 0 0,1 36,12" fill="none" stroke="#c084fc" stroke-width="3" stroke-linecap="round"/>
    <path d="M5,5 A27,27 0 0,1 43,5" fill="none" stroke="#e9d5ff" stroke-width="2.5" stroke-linecap="round" opacity="0.75"/>
    <path d="M12,36 A17,17 0 0,0 36,36" fill="none" stroke="#c084fc" stroke-width="3" stroke-linecap="round"/>
    <path d="M5,43 A27,27 0 0,0 43,43" fill="none" stroke="#e9d5ff" stroke-width="2.5" stroke-linecap="round" opacity="0.75"/>
  </g>
  <text x="80" y="46" fill="#ffffff" font-family="'Segoe UI', system-ui, -apple-system, sans-serif" font-size="30" font-weight="800" letter-spacing="1">ndevr</text>
  <text x="175" y="36" fill="#a855f7" font-family="'Consolas', monospace" font-size="11" font-weight="800" letter-spacing="1.5">LTD</text>
  <text x="82" y="60" fill="#d8b4fe" font-family="'Segoe UI', sans-serif" font-size="10" font-weight="600" letter-spacing="2">IOT &amp; CONNECTED SYSTEMS</text>
</svg>`;

const jlrSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 80" width="340" height="80">
  <defs>
    <linearGradient id="lrGreen" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#064e3b"/>
      <stop offset="100%" stop-color="#022c22"/>
    </linearGradient>
  </defs>
  <g transform="translate(15, 15)">
    <ellipse cx="32" cy="25" rx="28" ry="18" fill="url(#lrGreen)" stroke="#10b981" stroke-width="2"/>
    <text x="32" y="23" fill="#fef08a" font-family="'Arial Black', sans-serif" font-size="7.5" font-weight="900" text-anchor="middle" letter-spacing="0.5">LAND</text>
    <text x="32" y="32" fill="#fef08a" font-family="'Arial Black', sans-serif" font-size="7.5" font-weight="900" text-anchor="middle" letter-spacing="0.5">ROVER</text>
  </g>
  <text x="85" y="38" fill="#ffffff" font-family="'Segoe UI', system-ui, -apple-system, sans-serif" font-size="19" font-weight="900" letter-spacing="1.8">JAGUAR LAND ROVER</text>
  <text x="86" y="55" fill="#10b981" font-family="'Consolas', monospace" font-size="10.5" font-weight="700" letter-spacing="2">CONNECT GROUP // TELEMATICS</text>
</svg>`;

const synopsysAnsysSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 80" width="360" height="80">
  <g transform="translate(15, 20)">
    <path d="M5,25 Q15,5 25,25 T45,25" fill="none" stroke="#a855f7" stroke-width="4" stroke-linecap="round"/>
    <circle cx="45" cy="25" r="4" fill="#00f0ff"/>
  </g>
  <text x="72" y="46" fill="#ffffff" font-family="'Segoe UI', sans-serif" font-size="24" font-weight="900" letter-spacing="1.2">SYNOPSYS</text>
  <text x="216" y="46" fill="#94a3b8" font-family="'Segoe UI', sans-serif" font-size="20" font-weight="400">&amp;</text>
  <text x="238" y="46" fill="#ffb703" font-family="'Segoe UI', sans-serif" font-size="24" font-weight="900" font-style="italic" letter-spacing="1">Ansys</text>
  <text x="73" y="62" fill="#00f0ff" font-family="'Consolas', monospace" font-size="9.5" font-weight="700" letter-spacing="2">HPC SIMULATION &amp; DIGITAL TWINS</text>
</svg>`;

const malvernSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 80" width="340" height="80">
  <g transform="translate(15, 16)">
    <circle cx="14" cy="14" r="6" fill="#f43f5e"/>
    <circle cx="34" cy="34" r="6" fill="#00f0ff"/>
    <circle cx="34" cy="14" r="4" fill="#94a3b8"/>
    <circle cx="14" cy="34" r="4" fill="#38bdf8"/>
    <line x1="14" y1="14" x2="34" y2="34" stroke="#f43f5e" stroke-width="2.5"/>
    <line x1="34" y1="14" x2="14" y2="34" stroke="#00f0ff" stroke-width="2" stroke-dasharray="2,2"/>
  </g>
  <text x="68" y="38" fill="#ffffff" font-family="'Segoe UI', sans-serif" font-size="21" font-weight="900" letter-spacing="1.5">MALVERN</text>
  <text x="69" y="54" fill="#fda4af" font-family="'Segoe UI', sans-serif" font-size="14" font-weight="700" letter-spacing="2.5">PANALYTICAL</text>
  <text x="69" y="67" fill="#94a3b8" font-family="'Consolas', monospace" font-size="9" font-weight="600" letter-spacing="1.5">A SPECTRIS COMPANY</text>
</svg>`;

const classifiedSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 80" width="340" height="80">
  <g transform="translate(15, 14)">
    <path d="M26,4 L46,12 L46,34 C46,44 26,52 26,52 C26,52 6,44 6,34 L6,12 Z" fill="rgba(239, 68, 68, 0.2)" stroke="#ef4444" stroke-width="2.5"/>
    <circle cx="26" cy="26" r="7" fill="#ef4444"/>
    <path d="M26,19 L26,33 M19,26 L33,26" stroke="#fff" stroke-width="2"/>
  </g>
  <text x="72" y="36" fill="#ffffff" font-family="'Segoe UI', sans-serif" font-size="19" font-weight="900" letter-spacing="2">[CLASSIFIED]</text>
  <text x="73" y="52" fill="#f87171" font-family="'Segoe UI', sans-serif" font-size="12" font-weight="800" letter-spacing="2">UK DEFENCE &amp; SECURITY</text>
  <text x="74" y="66" fill="#ef4444" font-family="'Consolas', monospace" font-size="9" font-weight="700" letter-spacing="2.2">OFFICIAL SENSITIVE // LEAD ARCHITECT</text>
</svg>`;

const zyngaSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 80" width="320" height="80">
  <rect x="12" y="10" width="60" height="60" rx="10" fill="#e11d48"/>
  <g transform="translate(18, 16) scale(0.85)">
    <!-- Zynga Bulldog Silhouette -->
    <path d="M12 28 C12 22, 16 18, 22 18 C24 18, 25 16, 28 14 C31 16, 33 18, 33 22 C37 21, 41 23, 44 26 C47 30, 46 36, 42 38 L38 35 L35 38 L30 38 L25 35 L22 38 Z" fill="#ffffff"/>
    <circle cx="20" cy="24" r="2" fill="#e11d48"/>
  </g>
  <text x="86" y="52" fill="#ffffff" font-family="'Arial Black', 'Segoe UI Black', sans-serif" font-size="38" font-weight="900" letter-spacing="-1">zynga</text>
  <text x="228" y="32" fill="#e11d48" font-family="sans-serif" font-size="14" font-weight="900">®</text>
</svg>`;

const staffsUniSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 380 90" width="380" height="90">
  <g transform="translate(12, 12)">
    <rect x="0" y="0" width="55" height="66" rx="4" fill="#e11d48"/>
    <path d="M12 18 C12 36, 43 36, 43 18 M12 24 C28 42, 28 48, 28 54" fill="none" stroke="#ffffff" stroke-width="4" stroke-linecap="round"/>
    <ellipse cx="27.5" cy="36" rx="14" ry="10" fill="none" stroke="#ffffff" stroke-width="4"/>
  </g>
  <text x="82" y="42" fill="#ffffff" font-family="'Segoe UI', -apple-system, sans-serif" font-size="24" font-weight="900" letter-spacing="1">STAFFORDSHIRE</text>
  <text x="82" y="66" fill="#fca5a5" font-family="'Segoe UI', -apple-system, sans-serif" font-size="20" font-weight="700" letter-spacing="2">UNIVERSITY</text>
</svg>`;

fs.writeFileSync(path.join(dir, 'tinderstone.svg'), tinderstoneSvg);
fs.writeFileSync(path.join(dir, 'ndevr.svg'), ndevrSvg);
fs.writeFileSync(path.join(dir, 'jlr.svg'), jlrSvg);
fs.writeFileSync(path.join(dir, 'synopsys_ansys.svg'), synopsysAnsysSvg);
fs.writeFileSync(path.join(dir, 'malvern.svg'), malvernSvg);
fs.writeFileSync(path.join(dir, 'classified.svg'), classifiedSvg);
fs.writeFileSync(path.join(dir, 'zynga.svg'), zyngaSvg);
fs.writeFileSync(path.join(dir, 'staffsuni.svg'), staffsUniSvg);

console.log('All vector brand marks generated in assets/commercial/logos/');

