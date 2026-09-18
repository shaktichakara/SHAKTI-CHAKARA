/* =========================================================
   SHAKTI CHAKRA — NAVRATRI 2026
   Premium 3D CSS Website
   No Images Required
   ========================================================= */


/* =========================================================
   ROOT
   ========================================================= */

:root {

    --bg: #07050d;
    --bg-2: #0e0819;
    --bg-3: #160b24;

    --panel: rgba(255, 255, 255, 0.055);
    --panel-strong: rgba(255, 255, 255, 0.09);

    --gold: #f4c76a;
    --gold-light: #ffe4a2;

    --purple: #7a35bd;
    --violet: #b44cff;
    --pink: #ef4bd8;
    --red: #ff6574;

    --white: #fff8f0;
    --muted: #b9afc2;

    --border: rgba(255, 255, 255, 0.1);

    --shadow:
        0 25px 80px rgba(0, 0, 0, 0.45);

    --transition:
        0.35s cubic-bezier(0.2, 0.8, 0.2, 1);
}


/* =========================================================
   RESET
   ========================================================= */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: "Poppins", sans-serif;
    color: var(--white);
    background:
        radial-gradient(
            circle at 15% 10%,
            rgba(180, 76, 255, 0.08),
            transparent 30%
        ),
        radial-gradient(
            circle at 90% 30%,
            rgba(239, 75, 216, 0.06),
            transparent 30%
        ),
        var(--bg);
    line-height: 1.7;
    overflow-x: hidden;
}

a {
    color: inherit;
    text-decoration: none;
}

button,
a {
    -webkit-tap-highlight-color: transparent;
}

img {
    max-width: 100%;
    display: block;
}

::selection {
    color: var(--bg);
    background: var(--gold);
}


/* =========================================================
   CONTAINER
   ========================================================= */

.container {
    width: min(1180px, calc(100% - 40px));
    margin: 0 auto;
}


/* =========================================================
   HEADER
   ========================================================= */

.site-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;

    background:
        rgba(7, 5, 13, 0.7);

    border-bottom:
        1px solid rgba(255, 255, 255, 0.06);

    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
}

.nav-wrapper {
    min-height: 82px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    gap: 30px;
}

.brand {
    display: flex;
    align-items: center;
    gap: 12px;

    font-family: "Cinzel", serif;
    font-size: 14px;
    font-weight: 700;

    letter-spacing: 0.12em;
}

.brand-symbol {
    width: 34px;
    height: 34px;

    display: grid;
    place-items: center;

    border:
        1px solid rgba(244, 199, 106, 0.5);

    border-radius: 50%;

    color: var(--gold);

    box-shadow:
        0 0 20px rgba(244, 199, 106, 0.15);
}

.main-nav {
    display: flex;
    align-items: center;
    gap: 25px;
}

.main-nav > a {
    position: relative;

    font-size: 12px;
    font-weight: 500;

    text-transform: uppercase;
    letter-spacing: 0.08em;

    color: var(--muted);

    transition: var(--transition);
}

.main-nav > a:not(.nav-cta)::after {
    content: "";

    position: absolute;
    left: 0;
    bottom: -7px;

    width: 0;
    height: 1px;

    background: var(--gold);

    transition: var(--transition);
}

.main-nav > a:hover {
    color: var(--white);
}

.main-nav > a:hover::after {
    width: 100%;
}

.nav-cta {
    padding: 10px 17px;

    border:
        1px solid rgba(244, 199, 106, 0.4);

    color: var(--gold) !important;

    border-radius: 50px;
}

.nav-cta:hover {
    background: var(--gold);
    color: var(--bg) !important;
}


/* =========================================================
   BUTTONS
   ========================================================= */

.btn {
    min-height: 50px;

    display: inline-flex;
    align-items: center;
    justify-content: center;

    gap: 12px;

    padding: 0 23px;

    border-radius: 50px;

    font-size: 12px;
    font-weight: 600;

    text-transform: uppercase;
    letter-spacing: 0.08em;

    transition: var(--transition);
}

.btn span {
    font-size: 16px;
}

.btn-primary {
    color: #1a0c04;

    background:
        linear-gradient(
            135deg,
            var(--gold-light),
            var(--gold)
        );

    box-shadow:
        0 10px 35px rgba(244, 199, 106, 0.15);
}

.btn-primary:hover {
    transform: translateY(-4px);

    box-shadow:
        0 18px 45px rgba(244, 199, 106, 0.25);
}

.btn-outline {
    color: var(--white);

    border:
        1px solid rgba(255, 255, 255, 0.2);

    background:
        rgba(255, 255, 255, 0.035);
}

.btn-outline:hover {
    border-color: var(--gold);
    color: var(--gold);

    transform: translateY(-4px);
}


/* =========================================================
   HERO
   ========================================================= */

.hero {
    position: relative;

    min-height: 100vh;

    padding:
        150px 0
        70px;

    display: flex;
    align-items: center;

    overflow: hidden;
}

.hero::before {
    content: "";

    position: absolute;
    inset: 0;

    background:
        linear-gradient(
            120deg,
            transparent 35%,
            rgba(180, 76, 255, 0.05),
            transparent 70%
        );

    pointer-events: none;
}

.hero-glow {
    position: absolute;

    width: 500px;
    height: 500px;

    border-radius: 50%;

    filter: blur(100px);

    pointer-events: none;
}

.glow-one {
    left: -250px;
    top: 100px;

    background:
        rgba(122, 53, 189, 0.22);
}

.glow-two {
    right: -250px;
    bottom: 0;

    background:
        rgba(239, 75, 216, 0.13);
}

.hero-grid {
    position: relative;
    z-index: 2;

    display: grid;

    grid-template-columns:
        minmax(0, 1.05fr)
        minmax(400px, 0.95fr);

    align-items: center;

    gap: 50px;
}

.hero-content {
    max-width: 650px;
}

.eyebrow {
    display: inline-flex;

    padding: 7px 13px;

    border:
        1px solid rgba(244, 199, 106, 0.25);

    border-radius: 50px;

    color: var(--gold);

    font-size: 10px;
    font-weight: 600;

    letter-spacing: 0.18em;
}

.gujarati-line {
    margin-top: 24px;

    color: var(--gold-light);

    font-size: 15px;
    font-weight: 500;

    letter-spacing: 0.15em;
}

.hero h1 {
    margin-top: 12px;

    font-family: "Cinzel", serif;

    font-size:
        clamp(58px, 9vw, 116px);

    line-height: 0.9;

    letter-spacing: -0.055em;

    display: flex;
    flex-direction: column;

    text-shadow:
        0 10px 50px rgba(0, 0, 0, 0.35);
}

.hero h1 span {
    color: var(--white);
}

.hero h1 strong {
    font-weight: 800;

    background:
        linear-gradient(
            110deg,
            var(--gold-light),
            var(--gold),
            var(--violet),
            var(--pink)
        );

    -webkit-background-clip: text;
    background-clip: text;

    color: transparent;

    background-size: 200% auto;

    animation:
        gradientMove 6s ease-in-out infinite;
}

.hero-tagline {
    margin-top: 25px;

    font-family: "Cinzel", serif;

    font-size: 22px;

    color: var(--gold-light);

    letter-spacing: 0.04em;
}

.hero-description {
    max-width: 600px;

    margin-top: 16px;

    color: var(--muted);

    font-size: 15px;
}

.event-meta {
    margin-top: 32px;

    display: flex;
    flex-wrap: wrap;

    gap: 25px;
}

.event-meta > div {
    padding-left: 15px;

    border-left:
        1px solid rgba(244, 199, 106, 0.4);

    display: flex;
    flex-direction: column;
}

.meta-label {
    margin-bottom: 3px;

    color: var(--muted);

    font-size: 9px;
    letter-spacing: 0.18em;
}

.event-meta strong {
    font-size: 12px;

    letter-spacing: 0.08em;
}

.hero-actions {
    margin-top: 35px;

    display: flex;
    flex-wrap: wrap;

    gap: 13px;
}


/* =========================================================
   3D CHAKRA
   ========================================================= */

.chakra-stage {
    position: relative;

    width: min(500px, 100%);
    aspect-ratio: 1;

    margin: auto;

    display: grid;
    place-items: center;

    perspective: 1200px;
}

.chakra-shadow {
    position: absolute;

    width: 65%;
    height: 20%;

    bottom: 10%;

    border-radius: 50%;

    background: rgba(0, 0, 0, 0.7);

    filter: blur(30px);

    transform:
        rotateX(65deg);
}

.chakra {
    position: relative;

    width: 72%;
    aspect-ratio: 1;

    border-radius: 50%;

    transform-style: preserve-3d;

    transform:
        rotateX(17deg)
        rotateY(-12deg);

    animation:
        chakraFloat 7s ease-in-out infinite;

    background:
        radial-gradient(
            circle,
            rgba(255, 255, 255, 0.06),
            transparent 60%
        );

    box-shadow:
        0 0 80px rgba(180, 76, 255, 0.18);
}

.chakra-ring {
    position: absolute;

    inset: 0;

    border-radius: 50%;

    transform-style: preserve-3d;
}

.ring-outer {
    border:
        1px solid rgba(244, 199, 106, 0.8);

    box-shadow:
        0 0 25px rgba(244, 199, 106, 0.15);

    animation:
        spin 20s linear infinite;
}

.ring-middle {
    inset: 8%;

    border:
        2px dashed rgba(180, 76, 255, 0.65);

    animation:
        spinReverse 14s linear infinite;
}

.ring-inner {
    inset: 17%;

    border:
        1px solid rgba(239, 75, 216, 0.65);

    animation:
        spin 10s linear infinite;
}

.chakra-spokes {
    position: absolute;

    inset: 5%;

    border-radius: 50%;

    animation:
        spin 30s linear infinite;
}

.chakra-spokes span {
    position: absolute;

    left: 50%;
    top: 50%;

    width: 45%;
    height: 2px;

    transform-origin: left center;

    background:
        linear-gradient(
            90deg,
            var(--gold),
            rgba(244, 199, 106, 0)
        );

    opacity: 0.65;
}

.chakra-spokes span:nth-child(1) {
    transform: rotate(0deg);
}

.chakra-spokes span:nth-child(2) {
    transform: rotate(45deg);
}

.chakra-spokes span:nth-child(3) {
    transform: rotate(90deg);
}

.chakra-spokes span:nth-child(4) {
    transform: rotate(135deg);
}

.chakra-spokes span:nth-child(5) {
    transform: rotate(180deg);
}

.chakra-spokes span:nth-child(6) {
    transform: rotate(225deg);
}

.chakra-spokes span:nth-child(7) {
    transform: rotate(270deg);
}

.chakra-spokes span:nth-child(8) {
    transform: rotate(315deg);
}

.chakra-center {
    position: absolute;

    inset: 30%;

    border-radius: 50%;

    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;

    background:
        radial-gradient(
            circle at 35% 25%,
            rgba(255, 255, 255, 0.12),
            rgba(122, 53, 189, 0.3) 40%,
            rgba(7, 5, 13, 0.95)
        );

    border:
        1px solid rgba(244, 199, 106, 0.55);

    box-shadow:
        inset 0 0 35px rgba(180, 76, 255, 0.25),
        0 0 45px rgba(180, 76, 255, 0.18);

    transform:
        translateZ(25px);
}

.chakra-symbol {
    font-size: 48px;

    color: var(--gold);

    text-shadow:
        0 0 25px rgba(244, 199, 106, 0.45);
}

.chakra-center small {
    margin-top: 3px;

    font-size: 8px;

    letter-spacing: 0.4em;

    color: var(--gold-light);
}

.orbit {
    position: absolute;

    border-radius: 50%;

    border:
        1px solid rgba(255, 255, 255, 0.12);

    transform-style: preserve-3d;
}

.orbit i {
    position: absolute;

    width: 8px;
    height: 8px;

    border-radius: 50%;

    background: var(--gold);

    box-shadow:
        0 0 20px var(--gold);
}

.orbit-one {
    width: 95%;
    height: 45%;

    transform:
        rotateX(68deg)
        rotateZ(18deg);

    animation:
        orbitRotate 13s linear infinite;
}

.orbit-one i {
    top: -4px;
    left: 50%;
}

.orbit-two {
    width: 85%;
    height: 55%;

    transform:
        rotateY(65deg)
        rotateZ(-12deg);

    animation:
        orbitRotateReverse 18s linear infinite;
}

.orbit-two i {
    right: -4px;
    top: 50%;
}

.orbit-three {
    width: 55%;
    height: 95%;

    transform:
        rotateX(15deg)
        rotateZ(55deg);

    animation:
        orbitRotate 21s linear infinite;
}

.orbit-three i {
    bottom: -4px;
    left: 50%;
    background: var(--pink);
    box-shadow: 0 0 20px var(--pink);
}


/* =========================================================
   HERO STATS
   ========================================================= */

.hero-stats {
    position: relative;
    z-index: 2;

    margin-top: 60px;

    display: grid;

    grid-template-columns:
        repeat(3, 1fr);

    border-top:
        1px solid rgba(255, 255, 255, 0.08);

    border-bottom:
        1px solid rgba(255, 255, 255, 0.08);
}

.stat {
    padding: 22px 25px;

    display: flex;
    align-items: center;

    gap: 16px;
}

.stat + .stat {
    border-left:
        1px solid rgba(255, 255, 255, 0.08);
}

.stat strong {
    font-family: "Cinzel", serif;

    font-size: 35px;

    color: var(--gold);
}

.stat span {
    max-width: 140px;

    color: var(--muted);

    font-size: 9px;

    line-height: 1.5;

    letter-spacing: 0.13em;
}


/* =========================================================
   GENERAL SECTIONS
   ========================================================= */

.section {
    position: relative;

    padding: 120px 0;
}

.section-heading {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    gap: 30px;

    margin-bottom: 60px;
}

.section-heading.centered {
    display: block;

    max-width: 750px;

    margin:
        0 auto
        60px;

    text-align: center;
}

.section-number {
    color: var(--gold);

    font-size: 11px;

    letter-spacing: 0.2em;
}

.section-kicker {
    margin-bottom: 10px;

    color: var(--gold);

    font-size: 10px;
    font-weight: 600;

    letter-spacing: 0.25em;

    text-transform: uppercase;
}

.section-heading h2 {
    font-family: "Cinzel", serif;

    font-size:
        clamp(38px, 5vw, 64px);

    line-height: 1.05;

    letter-spacing: -0.035em;
}

.section-heading h2 span,
.final-content h2 span {
    color: var(--gold);
}

.heading-description {
    margin-top: 15px;

    color: var(--muted);

    font-size: 14px;
}

.heading-side-text {
    max-width: 320px;

    color: var(--muted);

    font-size: 13px;
}


/* =========================================================
   ABOUT
   ========================================================= */

.about-section {
    background:
        linear-gradient(
            180deg,
            transparent,
            rgba(122, 53, 189, 0.035)
        );
}

.about-grid {
    display: grid;

    grid-template-columns:
        1.1fr 0.9fr;

    gap: 80px;

    align-items: center;
}

.about-copy {
    max-width: 650px;
}

.about-copy p {
    margin-bottom: 18px;

    color: var(--muted);

    font-size: 15px;
}

.about-copy .lead {
    color: var(--white);

    font-family: "Cinzel", serif;

    font-size: 23px;

    line-height: 1.5;
}

.quote-card {
    position: relative;

    padding: 50px 40px;

    border:
        1px solid rgba(244, 199, 106, 0.22);

    border-radius: 28px;

    background:
        linear-gradient(
            145deg,
            rgba(255, 255, 255, 0.065),
            rgba(255, 255, 255, 0.025)
        );

    box-shadow: var(--shadow);

    overflow: hidden;
}

.quote-card::before {
    content: "";

    position: absolute;

    width: 180px;
    height: 180px;

    top: -80px;
    right: -70px;

    border-radius: 50%;

    background:
        rgba(180, 76, 255, 0.15);

    filter: blur(30px);
}

.quote-mark {
    color: var(--gold);

    font-family: Georgia, serif;

    font-size: 80px;

    line-height: 0.7;
}

.quote-card p {
    margin: 25px 0;

    font-family: "Cinzel", serif;

    font-size: 23px;

    line-height: 1.55;
}

.quote-card span {
    color: var(--muted);

    font-size: 9px;

    letter-spacing: 0.2em;
}


/* =========================================================
   EXPERIENCE
   ========================================================= */

.experience-grid {
    display: grid;

    grid-template-columns:
        repeat(4, 1fr);

    gap: 18px;
}

.glass-card {
    position: relative;

    min-height: 310px;

    padding: 30px 25px;

    border:
        1px solid var(--border);

    border-radius: 22px;

    background:
        linear-gradient(
            145deg,
            rgba(255, 255, 255, 0.055),
            rgba(255, 255, 255, 0.018)
        );

    transition: var(--transition);

    overflow: hidden;
}

.glass-card::before {
    content: "";

    position: absolute;

    width: 130px;
    height: 130px;

    right: -60px;
    bottom: -60px;

    border-radius: 50%;

    background:
        rgba(180, 76, 255, 0.12);

    filter: blur(25px);

    transition: var(--transition);
}

.glass-card:hover {
    transform:
        translateY(-10px)
        rotateX(2deg);

    border-color:
        rgba(244, 199, 106, 0.25);

    box-shadow:
        0 25px 60px rgba(0, 0, 0, 0.35);
}

.glass-card:hover::before {
    transform: scale(1.4);
}

.card-icon {
    width: 48px;
    height: 48px;

    display: grid;
    place-items: center;

    border:
        1px solid rgba(244, 199, 106, 0.35);

    border-radius: 50%;

    color: var(--gold);

    font-size: 20px;
}

.card-number {
    position: absolute;

    top: 28px;
    right: 25px;

    color: rgba(255, 255, 255, 0.3);

    font-family: "Cinzel", serif;

    font-size: 11px;
}

.glass-card h3 {
    margin-top: 70px;

    font-family: "Cinzel", serif;

    font-size: 21px;
}

.glass-card p {
    margin-top: 12px;

    color: var(--muted);

    font-size: 13px;
}


/* =========================================================
   MANTRA
   ========================================================= */

.mantra-section {
    position: relative;

    min-height: 480px;

    display: flex;
    align-items: center;
    justify-content: center;

    text-align: center;

    overflow: hidden;

    background:
        radial-gradient(
            circle at center,
            rgba(122, 53, 189, 0.22),
            transparent 55%
        );
}

.mantra-content {
    position: relative;
    z-index: 5;
}

.mantra-content > span {
    color: var(--gold);

    font-size: 9px;

    letter-spacing: 0.3em;
}

.mantra-symbol {
    margin-top: 20px;

    font-family: serif;

    font-size:
        clamp(70px, 12vw, 150px);

    line-height: 1;

    background:
        linear-gradient(
            135deg,
            var(--gold-light),
            var(--gold),
            var(--pink)
        );

    -webkit-background-clip: text;
    background-clip: text;

    color: transparent;

    filter:
        drop-shadow(
            0 0 35px rgba(244, 199, 106, 0.18)
        );
}

.mantra-content h2 {
    font-family: "Cinzel", serif;

    font-size: 35px;

    letter-spacing: 0.3em;
}

.mantra-content p {
    margin-top: 8px;

    color: var(--muted);

    font-size: 11px;

    letter-spacing: 0.18em;
}

.mantra-mandala {
    position: absolute;

    width: 330px;
    height: 330px;

    border-radius: 50%;

    opacity: 0.25;

    background:
        repeating-conic-gradient(
            from 0deg,
            transparent 0deg 9deg,
            rgba(244, 199, 106, 0.6) 10deg 11deg,
            transparent 12deg 18deg
        );

    mask-image:
        radial-gradient(
            circle,
            transparent 40%,
            black 41% 44%,
            transparent 45% 50%,
            black 51% 52%,
            transparent 53%
        );

    animation:
        spin 30s linear infinite;
}

.mandala-left {
    left: -130px;
}

.mandala-right {
    right: -130px;

    animation-direction: reverse;
}


/* =========================================================
   ARTISTS
   ========================================================= */

.artist-grid {
    display: grid;

    grid-template-columns:
        repeat(3, 1fr);

    gap: 20px;
}

.artist-card {
    min-height: 400px;

    padding: 25px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    border:
        1px solid var(--border);

    border-radius: 26px;

    background:
        linear-gradient(
            145deg,
            rgba(255, 255, 255, 0.05),
            rgba(255, 255, 255, 0.015)
        );

    overflow: hidden;

    transition: var(--transition);
}

.artist-card:hover {
    transform: translateY(-8px);

    border-color:
        rgba(244, 199, 106, 0.25);
}

.artist-orb {
    width: 180px;
    height: 180px;

    margin: 25px auto;

    display: grid;
    place-items: center;

    border-radius: 50%;

    font-family: "Cinzel", serif;

    font-size: 45px;

    color: var(--gold);

    background:
        radial-gradient(
            circle at 30% 25%,
            rgba(255, 255, 255, 0.13),
            rgba(180, 76, 255, 0.18) 35%,
            rgba(7, 5, 13, 0.9) 70%
        );

    border:
        1px solid rgba(244, 199, 106, 0.3);

    box-shadow:
        0 0 50px rgba(180, 76, 255, 0.13),
        inset 0 0 35px rgba(244, 199, 106, 0.08);

    animation:
        orbFloat 5s ease-in-out infinite;
}

.artist-info > span {
    color: var(--gold);

    font-size: 8px;

    letter-spacing: 0.2em;
}

.artist-info h3 {
    margin-top: 5px;

    font-family: "Cinzel", serif;

    font-size: 23px;
}

.artist-info p {
    margin-top: 7px;

    color: var(--muted);

    font-size: 12px;
}


/* =========================================================
   PASSES
   ========================================================= */

.passes-section {
    background:
        linear-gradient(
            180deg,
            rgba(122, 53, 189, 0.035),
            transparent
        );
}

.passes-grid {
    display: grid;

    grid-template-columns:
        repeat(3, 1fr);

    gap: 20px;
}

.pass-card {
    position: relative;

    padding: 35px 30px;

    min-height: 370px;

    display: flex;
    flex-direction: column;

    border:
        1px solid var(--border);

    border-radius: 25px;

    background:
        rgba(255, 255, 255, 0.035);

    overflow: hidden;

    transition: var(--transition);
}

.pass-card:hover {
    transform:
        translateY(-8px);

    border-color:
        rgba(244, 199, 106, 0.3);
}

.featured-pass {
    background:
        linear-gradient(
            145deg,
            rgba(180, 76, 255, 0.12),
            rgba(255, 255, 255, 0.035)
        );

    border-color:
        rgba(180, 76, 255, 0.35);
}

.pass-badge {
    position: absolute;

    top: 0;
    right: 0;

    padding: 8px 15px;

    background: var(--gold);

    color: var(--bg);

    font-size: 8px;

    font-weight: 700;

    letter-spacing: 0.12em;

    border-bottom-left-radius: 12px;
}

.pass-top {
    display: flex;
    justify-content: space-between;

    color: var(--muted);

    font-size: 9px;

    letter-spacing: 0.2em;
}

.pass-card h3 {
    margin-top: 50px;

    font-family: "Cinzel", serif;

    font-size: 29px;
}

.coming {
    margin-top: 15px;

    color: var(--gold);

    font-size: 10px;

    letter-spacing: 0.2em;
}

.pass-card p {
    margin-top: 15px;

    color: var(--muted);

    font-size: 13px;
}

.pass-card a {
    margin-top: auto;

    color: var(--gold);

    font-size: 11px;

    font-weight: 600;

    letter-spacing: 0.1em;

    text-transform: uppercase;
}

.pass-card a:hover {
    color: var(--gold-light);
}


/* =========================================================
   MEMORY WALL
   ========================================================= */

.memory-wall {
    display: grid;

    grid-template-columns:
        repeat(4, 1fr);

    grid-auto-rows: 180px;

    gap: 15px;
}

.memory-tile {
    position: relative;

    display: flex;
    align-items: flex-end;

    padding: 25px;

    overflow: hidden;

    border:
        1px solid rgba(255, 255, 255, 0.1);

    border-radius: 20px;

    background:
        radial-gradient(
            circle at 70% 25%,
            rgba(239, 75, 216, 0.25),
            transparent 25%
        ),
        linear-gradient(
            135deg,
            rgba(122, 53, 189, 0.32),
            rgba(12, 7, 20, 0.9)
        );

    transition: var(--transition);
}

.memory-tile::before {
    content: "";

    position: absolute;

    inset: 20%;

    border:
        1px solid rgba(244, 199, 106, 0.2);

    border-radius: 50%;

    transform:
        rotate(25deg)
        scaleX(1.6);

    transition: var(--transition);
}

.memory-tile::after {
    content: "";

    position: absolute;

    width: 150px;
    height: 150px;

    right: -70px;
    top: -70px;

    border-radius: 50%;

    background:
        rgba(244, 199, 106, 0.13);

    filter: blur(20px);
}

.memory-tile:hover {
    transform:
        translateY(-6px)
        rotateX(2deg);

    border-color:
        rgba(244, 199, 106, 0.35);
}

.memory-tile:hover::before {
    transform:
        rotate(90deg)
        scaleX(1.3);
}

.memory-tile span {
    position: relative;
    z-index: 2;

    font-family: "Cinzel", serif;

    font-size: 22px;

    letter-spacing: 0.1em;
}

.memory-tile small {
    position: absolute;

    top: 18px;
    left: 20px;

    color: var(--gold);

    font-size: 8px;

    letter-spacing: 0.15em;
}

.tile-large {
    grid-column: span 2;
}

.tile-wide {
    grid-column: span 2;
}

.tile-tall {
    grid-row: span 2;
}


/* =========================================================
   FAQ
   ========================================================= */

.faq-section {
    background:
        linear-gradient(
            180deg,
            transparent,
            rgba(239, 75, 216, 0.025)
        );
}

.faq-grid {
    display: grid;

    grid-template-columns:
        0.75fr 1.25fr;

    gap: 90px;
}

.faq-intro h2 {
    font-family: "Cinzel", serif;

    font-size:
        clamp(35px, 4vw, 55px);

    line-height: 1.1;
}

.faq-intro h2 span {
    color: var(--gold);
}

.faq-intro > p:not(.section-kicker) {
    margin-top: 18px;

    color: var(--muted);

    font-size: 14px;
}

.text-link {
    display: inline-block;

    margin-top: 25px;

    color: var(--gold);

    font-size: 11px;

    letter-spacing: 0.08em;
}

.faq-list details {
    border-bottom:
        1px solid rgba(255, 255, 255, 0.1);
}

.faq-list summary {
    list-style: none;

    cursor: pointer;

    padding: 25px 0;

    display: flex;
    justify-content: space-between;
    align-items: center;

    font-family: "Cinzel", serif;

    font-size: 17px;
}

.faq-list summary::-webkit-details-marker {
    display: none;
}

.faq-list summary span {
    color: var(--gold);

    font-family: Poppins, sans-serif;

    font-size: 20px;

    transition: var(--transition);
}

.faq-list details[open] summary span {
    transform: rotate(45deg);
}

.faq-list details p {
    max-width: 750px;

    padding:
        0 40px 25px 0;

    color: var(--muted);

    font-size: 13px;
}


/* =========================================================
   FINAL CTA
   ========================================================= */

.final-cta {
    position: relative;

    min-height: 560px;

    display: flex;
    align-items: center;
    justify-content: center;

    text-align: center;

    overflow: hidden;

    background:
        radial-gradient(
            circle at center,
            rgba(122, 53, 189, 0.18),
            transparent 55%
        );
}

.final-cta::before {
    content: "";

    position: absolute;

    width: 550px;
    height: 550px;

    border-radius: 50%;

    border:
        1px solid rgba(244, 199, 106, 0.1);

    box-shadow:
        0 0 100px rgba(180, 76, 255, 0.1);

    animation:
        pulseRing 5s ease-in-out infinite;
}

.final-content {
    position: relative;
    z-index: 2;

    max-width: 700px;
}

.final-content h2 {
    font-family: "Cinzel", serif;

    font-size:
        clamp(45px, 7vw, 82px);

    line-height: 1.05;
}

.final-content > p:not(.section-kicker) {
    max-width: 530px;

    margin:
        20px auto 30px;

    color: var(--muted);

    font-size: 14px;
}

.cta-orbit {
    position: absolute;

    border:
        1px solid rgba(255, 255, 255, 0.08);

    border-radius: 50%;
}

.orbit-a {
    width: 700px;
    height: 250px;

    transform:
        rotate(25deg);

    animation:
        spin 25s linear infinite;
}

.orbit-b {
    width: 450px;
    height: 180px;

    transform:
        rotate(-30deg);

    animation:
        spinReverse 18s linear infinite;
}


/* =========================================================
   FOOTER
   ========================================================= */

.site-footer {
    padding: 60px 0 25px;

    border-top:
        1px solid rgba(255, 255, 255, 0.07);

    background:
        #05040a;
}

.footer-grid {
    display: grid;

    grid-template-columns:
        1.4fr 1fr 0.7fr;

    gap: 40px;
}

.footer-brand {
    font-family: "Cinzel", serif;

    font-size: 16px;
    font-weight: 700;

    letter-spacing: 0.12em;

    color: var(--gold);
}

.footer-grid p {
    margin-top: 10px;

    color: var(--muted);

    font-size: 12px;
}

.footer-links {
    display: grid;

    grid-template-columns:
        repeat(2, 1fr);

    gap: 8px;
}

.footer-links a,
.footer-social a {
    color: var(--muted);

    font-size: 11px;

    transition: var(--transition);
}

.footer-links a:hover,
.footer-social a:hover {
    color: var(--gold);
}

.footer-social {
    text-align: right;
}

.footer-bottom {
    margin-top: 45px;
    padding-top: 20px;

    border-top:
        1px solid rgba(255, 255, 255, 0.06);

    display: flex;
    justify-content: space-between;

    gap: 20px;

    color: rgba(255, 255, 255, 0.4);

    font-size: 9px;
}

.footer-bottom a {
    color: rgba(255, 255, 255, 0.45);
}

.footer-bottom a:hover {
    color: var(--gold);
}


/* =========================================================
   ANIMATIONS
   ========================================================= */

@keyframes spin {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}

@keyframes spinReverse {
    from {
        transform: rotate(360deg);
    }

    to {
        transform: rotate(0deg);
    }
}

@keyframes orbitRotate {
    from {
        transform:
            rotateX(68deg)
            rotateZ(0deg);
    }

    to {
        transform:
            rotateX(68deg)
            rotateZ(360deg);
    }
}

@keyframes orbitRotateReverse {
    from {
        transform:
            rotateY(65deg)
            rotateZ(360deg);
    }

    to {
        transform:
            rotateY(65deg)
            rotateZ(0deg);
    }
}

@keyframes chakraFloat {

    0%,
    100% {
        transform:
            translateY(0)
            rotateX(17deg)
            rotateY(-12deg);
    }

    50% {
        transform:
            translateY(-15px)
            rotateX(20deg)
            rotateY(-8deg);
    }
}

@keyframes orbFloat {

    0%,
    100% {
        transform:
            translateY(0)
            scale(1);
    }

    50% {
        transform:
            translateY(-10px)
            scale(1.03);
    }
}

@keyframes gradientMove {

    0%,
    100% {
        background-position: 0% 50%;
    }

    50% {
        background-position: 100% 50%;
    }
}

@keyframes pulseRing {

    0%,
    100% {
        transform:
            scale(0.95)
            rotate(0deg);

        opacity: 0.5;
    }

    50% {
        transform:
            scale(1.05)
            rotate(12deg);

        opacity: 1;
    }
}


/* =========================================================
   RESPONSIVE — 1050px
   ========================================================= */

@media (max-width: 1050px) {

    .main-nav {
        gap: 15px;
    }

    .main-nav > a {
        font-size: 10px;
    }

    .hero-grid {
        grid-template-columns:
            1fr 0.8fr;
    }

    .experience-grid {
        grid-template-columns:
            repeat(2, 1fr);
    }

    .artist-grid,
    .passes-grid {
        grid-template-columns:
            repeat(2, 1fr);
    }

    .artist-card:last-child {
        grid-column: span 2;
    }

}


/* =========================================================
   RESPONSIVE — 850px
   ========================================================= */

@media (max-width: 850px) {

    .site-header {
        position: absolute;
    }

    .nav-wrapper {
        min-height: 70px;
    }

    .main-nav {
        display: none;
    }

    .hero {
        padding-top: 130px;
    }

    .hero-grid {
        grid-template-columns: 1fr;

        text-align: center;
    }

    .hero-content {
        max-width: 750px;

        margin: auto;
    }

    .event-meta,
    .hero-actions {
        justify-content: center;
    }

    .chakra-stage {
        width: min(480px, 90vw);

        margin-top: 30px;
    }

    .hero-stats {
        margin-top: 30px;
    }

    .about-grid {
        grid-template-columns: 1fr;

        gap: 40px;
    }

    .faq-grid {
        grid-template-columns: 1fr;

        gap: 50px;
    }

    .footer-grid {
        grid-template-columns: 1fr;
    }

    .footer-social {
        text-align: left;
    }

}


/* =========================================================
   RESPONSIVE — 600px
   ========================================================= */

@media (max-width: 600px) {

    .container {
        width: min(100% - 28px, 1180px);
    }

    .section {
        padding: 85px 0;
    }

    .hero {
        min-height: auto;

        padding:
            120px 0
            50px;
    }

    .hero h1 {
        font-size:
            clamp(50px, 17vw, 80px);
    }

    .gujarati-line {
        font-size: 11px;

        letter-spacing: 0.08em;
    }

    .hero-tagline {
        font-size: 18px;
    }

    .hero-description {
        font-size: 13px;
    }

    .event-meta {
        flex-direction: column;

        align-items: center;

        gap: 15px;
    }

    .event-meta > div {
        padding-left: 0;

        border-left: 0;

        text-align: center;
    }

    .hero-actions {
        flex-direction: column;
    }

    .hero-actions .btn {
        width: 100%;
    }

    .chakra-stage {
        width: 90vw;
    }

    .hero-stats {
        grid-template-columns: 1fr;
    }

    .stat {
        justify-content: center;

        padding: 17px;
    }

    .stat + .stat {
        border-left: 0;

        border-top:
            1px solid rgba(255, 255, 255, 0.08);
    }

    .section-heading {
        display: block;

        margin-bottom: 40px;
    }

    .section-heading h2 {
        font-size: 39px;
    }

    .heading-side-text {
        margin-top: 18px;
    }

    .experience-grid,
    .artist-grid,
    .passes-grid {
        grid-template-columns: 1fr;
    }

    .artist-card:last-child {
        grid-column: auto;
    }

    .glass-card {
        min-height: 280px;
    }

    .quote-card {
        padding: 35px 25px;
    }

    .quote-card p {
        font-size: 19px;
    }

    .mantra-section {
        min-height: 400px;
    }

    .mantra-mandala {
        width: 240px;
        height: 240px;
    }

    .mandala-left {
        left: -150px;
    }

    .mandala-right {
        right: -150px;
    }

    .memory-wall {
        grid-template-columns:
            repeat(2, 1fr);

        grid-auto-rows: 150px;
    }

    .tile-large,
    .tile-wide {
        grid-column: span 2;
    }

    .tile-tall {
        grid-row: span 1;
    }

    .memory-tile span {
        font-size: 15px;
    }

    .faq-intro h2 {
        font-size: 38px;
    }

    .final-cta {
        min-height: 470px;
    }

    .final-content h2 {
        font-size: 48px;
    }

    .cta-orbit.orbit-a {
        width: 550px;
    }

    .cta-orbit.orbit-b {
        width: 350px;
    }

    .footer-bottom {
        flex-direction: column;
    }

}


/* =========================================================
   ACCESSIBILITY
   ========================================================= */

@media (prefers-reduced-motion: reduce) {

    html {
        scroll-behavior: auto;
    }

    *,
    *::before,
    *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
    }

}
