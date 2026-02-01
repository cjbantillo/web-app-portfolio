<template>
  <div class="app" :class="{ light: isLight }">
    <!-- ══════════ NAVBAR ══════════ -->
    <nav class="navbar">
      <div class="container nav-inner">
        <!-- Logo -->
        <a href="#" class="nav-logo" @click.prevent="scrollTop">
          <span class="logo-bracket">{</span>
          <span class="logo-text">CJB</span>
          <span class="logo-bracket">}</span>
        </a>

        <!-- Links -->
        <ul class="nav-links" :class="{ open: mobileOpen }">
          <li v-for="item in navItems" :key="item.id">
            <a :href="'#' + item.id" @click="mobileOpen = false">{{
              item.label
            }}</a>
          </li>
        </ul>

        <!-- Right controls: theme toggle + hamburger -->
        <div class="nav-controls">
          <button
            class="theme-toggle"
            @click="toggleTheme"
            :aria-label="
              isLight ? 'Switch to dark mode' : 'Switch to light mode'
            "
          >
            <i :class="isLight ? 'fas fa-moon' : 'fas fa-sun'"></i>
          </button>
          <button
            class="hamburger"
            :class="{ open: mobileOpen }"
            @click="mobileOpen = !mobileOpen"
            aria-label="Toggle menu"
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </nav>

    <!-- ══════════ HERO ══════════ -->
    <section class="hero">
      <div class="container hero-inner">
        <div class="hero-content">
          <p class="hero-eyebrow anim-fade-up">
            Software Developer & Entrepreneur
          </p>
          <h1 class="hero-name anim-fade-up anim-delay-1">
            Christian James<br />M. Bantillo
          </h1>
          <p class="hero-sub anim-fade-up anim-delay-2">
            Full-Stack Developer · Startup CEO · Tech Innovator
          </p>
          <p class="hero-desc anim-fade-up anim-delay-3">
            Building elegant digital solutions with cutting-edge technology and
            creative problem-solving. Currently graduating BSIT at Caraga State
            University.
          </p>
          <div class="hero-actions anim-fade-up anim-delay-4">
            <a href="#contact" class="btn btn-cta"
              ><i class="fas fa-envelope"></i> Get in Touch</a
            >
            <a href="#projects" class="btn btn-outline"
              ><i class="fas fa-folder-open"></i> View Work</a
            >
            <a
              href="https://the-unit-singularity.netlify.app/"
              class="btn btn-outline"
              target="_blank"
              rel="noopener"
              ><i class="fas fa-terminal"></i> The Unit Singularity</a
            >
          </div>
        </div>
        <div class="hero-portrait anim-fade-up anim-delay-2">
          <img
            src="/src/assets/img/IMG_0436.jpg"
            alt="Christian James M. Bantillo"
          />
        </div>

        <!-- Stats row -->
        <div class="hero-stats anim-fade-up anim-delay-5">
          <div class="stat" v-for="s in heroStats" :key="s.label">
            <span class="stat-value">{{ s.value }}</span>
            <span class="stat-label">{{ s.label }}</span>
          </div>
        </div>
      </div>

      <!-- subtle bottom rule -->
      <div class="hero-bottom-rule"></div>
    </section>

    <!-- ══════════ ABOUT ══════════ -->
    <section id="about" class="section about-section">
      <div class="container">
        <p class="section-label"><i class="fas fa-user"></i> About</p>
        <h2 class="section-title">About Me</h2>
        <div class="section-divider"></div>

        <div class="about-grid">
          <div class="about-text">
            <p>
              I am a passionate Bachelor of Science in Information Technology
              student at Caraga State University, driven by continuous learning
              and building real-world systems that make an impact.
            </p>
            <p>
              My journey spans <strong>frontend development</strong>,
              <strong>full-stack systems</strong>, and
              <strong>entrepreneurship</strong>. I thrive on rapid prototyping,
              leveraging AI tools effectively, and collaborating with talented
              teams under tight deadlines.
            </p>
          </div>

          <div class="about-highlights">
            <div
              class="highlight-item"
              v-for="h in aboutHighlights"
              :key="h.title"
            >
              <div class="highlight-icon"><i :class="h.icon"></i></div>
              <div>
                <h4 class="highlight-title">{{ h.title }}</h4>
                <p class="highlight-desc">{{ h.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ══════════ EXPERIENCE ══════════ -->
    <section id="experience" class="section">
      <div class="container">
        <p class="section-label"><i class="fas fa-briefcase"></i> Experience</p>
        <h2 class="section-title">Work & Leadership</h2>
        <div class="section-divider"></div>

        <div class="experience-timeline">
          <div class="exp-card card" v-for="exp in experiences" :key="exp.id">
            <!-- top meta row -->
            <div class="exp-meta">
              <div class="exp-meta-left">
                <span class="exp-role-badge badge">{{ exp.role }}</span>
                <span class="exp-date"
                  ><i class="fas fa-calendar-alt"></i> {{ exp.date }}</span
                >
              </div>
            </div>

            <h3 class="exp-title">{{ exp.title }}</h3>
            <p class="exp-org">{{ exp.org }}</p>

            <!-- contributions -->
            <ul class="exp-list">
              <li v-for="(c, i) in exp.contributions" :key="i">
                <i class="fas fa-check"></i>
                <span>{{ c }}</span>
              </li>
            </ul>

            <!-- achievement callout (optional) -->
            <div v-if="exp.achievement" class="exp-achievement">
              <i class="fas fa-trophy"></i>
              <span>{{ exp.achievement }}</span>
            </div>

            <!-- tech stack -->
            <div class="exp-stack">
              <span class="badge" v-for="t in exp.stack" :key="t">{{ t }}</span>
            </div>

            <!-- gallery (optional) -->
            <div v-if="exp.gallery && exp.gallery.length" class="exp-gallery">
              <div class="gallery-grid">
                <img
                  v-for="(img, idx) in exp.gallery"
                  :key="idx"
                  :src="img.src"
                  :alt="img.alt"
                  class="gallery-img"
                  @click="openImageModal(img.src, img.alt)"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ══════════ PROJECTS ══════════ -->
    <section id="projects" class="section">
      <div class="container">
        <p class="section-label"><i class="fas fa-folder-open"></i> Projects</p>
        <h2 class="section-title">Featured Projects</h2>
        <div class="section-divider"></div>

        <div class="projects-grid">
          <div class="card project-card" v-for="p in projects" :key="p.id">
            <div class="project-icon"><i :class="p.icon"></i></div>
            <h3>{{ p.title }}</h3>
            <p class="project-desc">{{ p.desc }}</p>
            <div class="project-stack">
              <span class="badge" v-for="t in p.stack" :key="t">{{ t }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ══════════ SKILLS ══════════ -->
    <section id="skills" class="section">
      <div class="container">
        <p class="section-label"><i class="fas fa-code"></i> Skills</p>
        <h2 class="section-title">Technical Skills</h2>
        <div class="section-divider"></div>

        <div class="skills-grid">
          <div
            class="card skill-card"
            v-for="cat in skillCategories"
            :key="cat.title"
          >
            <div class="skill-card-header">
              <i :class="cat.icon"></i>
              <h3>{{ cat.title }}</h3>
            </div>
            <div class="skill-tags">
              <span class="badge" v-for="s in cat.skills" :key="s">{{
                s
              }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ══════════ CERTIFICATIONS ══════════ -->
    <section id="certifications" class="section">
      <div class="container">
        <p class="section-label">
          <i class="fas fa-certificate"></i> Certifications
        </p>
        <h2 class="section-title">Certifications & Awards</h2>
        <div class="section-divider"></div>

        <!-- filter tabs -->
        <div class="cert-filters">
          <button
            v-for="cat in certCategories"
            :key="cat"
            class="cert-filter-btn"
            :class="{ active: activeCertCat === cat }"
            @click="activeCertCat = cat"
          >
            {{ cat }}
          </button>
        </div>

        <div class="certs-grid">
          <div
            class="card cert-card"
            :class="{ clickable: !!c.file }"
            v-for="c in filteredCerts"
            :key="c.id"
            @click="openCertModal(c)"
          >
            <div class="cert-icon-wrap"><i :class="c.icon"></i></div>
            <h3>{{ c.title }}</h3>
            <p class="cert-issuer">{{ c.issuer }}</p>
            <p class="cert-date">
              <i class="fas fa-calendar"></i> {{ c.date }}
            </p>
            <p class="cert-desc">{{ c.description }}</p>
            <a
              v-if="c.link"
              :href="c.link"
              target="_blank"
              class="cert-link"
              @click.stop
            >
              View Certificate <i class="fas fa-external-link-alt"></i>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- ══════════ CONTACT ══════════ -->
    <section id="contact" class="section contact-section">
      <div class="container">
        <p class="section-label"><i class="fas fa-paper-plane"></i> Contact</p>
        <h2 class="section-title">Let's Connect</h2>
        <div class="section-divider"></div>

        <p class="contact-intro">
          I'm always interested in hearing about new projects and opportunities.
          Feel free to reach out.
        </p>

        <div class="contact-grid">
          <a
            v-for="m in contactMethods"
            :key="m.label"
            :href="m.href"
            :target="m.target || '_self'"
            class="card contact-card"
          >
            <div class="contact-icon-wrap"><i :class="m.icon"></i></div>
            <div class="contact-info">
              <h4>{{ m.label }}</h4>
              <p>{{ m.value }}</p>
            </div>
          </a>
        </div>
      </div>
    </section>

    <!-- ══════════ IMAGE MODAL ══════════ -->
    <div v-if="imageModal.show" class="image-modal" @click="closeImageModal">
      <div class="modal-content" @click.stop>
        <button class="modal-close" @click="closeImageModal">
          <i class="fas fa-times"></i>
        </button>
        <img :src="imageModal.src" :alt="imageModal.alt" />
      </div>
    </div>

    <!-- ══════════ CERTIFICATE MODAL ══════════ -->
    <div v-if="certModal.show" class="cert-modal" @click="closeCertModal">
      <div class="cert-modal-content" @click.stop>
        <button class="modal-close" @click="closeCertModal">
          <i class="fas fa-times"></i>
        </button>
        <h3 class="cert-modal-title">{{ certModal.title }}</h3>
        <div class="cert-viewer">
          <iframe
            v-if="certModal.type === 'pdf'"
            :src="certModal.src"
            title="Certificate PDF"
          ></iframe>
          <img v-else :src="certModal.src" :alt="certModal.title" />
        </div>
        <a
          class="cert-download"
          :href="certModal.src"
          target="_blank"
          rel="noopener"
        >
          Open in new tab
        </a>
      </div>
    </div>

    <!-- ══════════ FOOTER ══════════ -->
    <footer class="footer">
      <div class="container footer-inner">
        <p class="footer-copy">
          &copy; 2026 Christian James M. Bantillo. All rights reserved.
        </p>
        <p class="footer-built">Built with Vue 3 + Vite</p>
      </div>
    </footer>
  </div>
  <!-- .app -->
</template>

<!-- ══════════════════════════════════════════════════════════
     SCRIPT
     ══════════════════════════════════════════════════════════ -->
<script>
const certFiles = {
  ideation: new URL(
    "./assets/Certificates/BANTILLO_S1_10152025_IDEATION WEDNESDAYS-24.pdf",
    import.meta.url,
  ).href,
  top15Individual: new URL(
    "./assets/Certificates/Bantillo_Top15RPC_2025-26.pdf",
    import.meta.url,
  ).href,
  top15Team: new URL(
    "./assets/Certificates/Guardian_Top15Teams_RPC2025-9.pdf",
    import.meta.url,
  ).href,
  introML: new URL(
    "./assets/Certificates/Christian James Bantillo - Intro to Machine Learning.png",
    import.meta.url,
  ).href,
  introDL: new URL(
    "./assets/Certificates/Christian James Bantillo - Intro to Deep Learning.png",
    import.meta.url,
  ).href,
};

export default {
  name: "App",

  data() {
    return {
      isLight: false, // default = dark
      mobileOpen: false,
      imageModal: {
        show: false,
        src: "",
        alt: "",
      },
      certModal: {
        show: false,
        src: "",
        title: "",
        type: "image",
      },

      // ── Nav ──
      navItems: [
        { id: "about", label: "About" },
        { id: "experience", label: "Experience" },
        { id: "projects", label: "Projects" },
        { id: "skills", label: "Skills" },
        { id: "certifications", label: "Certs" },
        { id: "contact", label: "Contact" },
      ],

      // ── Hero stats ──
      heroStats: [
        { value: "4+", label: "Years Experience" },
        { value: "12+", label: "Certifications" },
        { value: "2nd", label: "Regional Runner-Up" },
      ],

      // ── About highlights ──
      aboutHighlights: [
        {
          icon: "fas fa-rocket",
          title: "Startup Founder",
          desc: "Founded & led Care Guardian — an AI-powered eldercare monitoring startup, achieving 2nd Runner-Up at the DICT Caraga Regional Pitching Competition.",
        },
        {
          icon: "fas fa-code",
          title: "Internship",
          desc: "Frontend Developer Intern at Caraga State University, contributing to an internal React-based web system for curriculum digitization.",
        },
        {
          icon: "fas fa-film",
          title: "Creative Production",
          desc: "Freelance graphic design and video editing for digital marketing at Elite Royalties and i-Singapore.",
        },
      ],

      // ── Experiences ──
      experiences: [
        {
          id: 1,
          role: "Frontend Developer Intern",
          date: "2024 – 2025",
          title: "OCID Internal Web System",
          org: "Office of Curriculum and Instructional Development — Caraga State University",
          contributions: [
            "Dashboard UI development and refinement",
            "Login and navigation screens aligned to Figma wireframes",
            "Procedural content pages with downloadable PDF resources",
            "Frontend UI/UX improvements and responsive design polish",
          ],
          stack: [
            "React",
            "Tailwind CSS",
            "PostgreSQL",
            "PHP Laravel",
            "Figma",
          ],
          gallery: [
            { src: "/src/assets/img/OCID-system.png", alt: "OCID Dashboard" },
            {
              src: "/src/assets/img/OCID-Certificate.jpeg",
              alt: "Internship Certificate",
            },
            {
              src: "/src/assets/img/550958202_1298140575118436_1356883172998839872_n.jpg",
              alt: "Team Development",
            },
            {
              src: "/src/assets/img/550513469_1349979503351633_3662702284138704297_n.jpg",
              alt: "Team Collaboration",
            },
          ],
        },
        {
          id: 2,
          role: "CEO & Co-Founder",
          date: "2024 – Present",
          title: "Care Guardian",
          org: "AI-Powered Eldercare Monitoring Startup",
          contributions: [
            "Strategic ideation and business model development",
            "Comprehensive market research (TAM / SAM / SOM analysis)",
            "Pitch deck creation and competitive pitching across regional events",
            "Revenue projections and government / hospital partnership planning",
          ],
          achievement:
            "🥈 2nd Runner-Up — DICT Caraga Regional Pitching Competition (RPC 2025-26)",
          stack: ["Python", "Node.js", "React", "Vue.js", "PostgreSQL", "IoT"],
          gallery: [
            {
              src: "/src/assets/img/pitching-competition-pagsanyog.png",
              alt: "University Pitching Competition",
            },
            {
              src: "/src/assets/img/pagsanyog.jpeg",
              alt: "University Competition",
            },
            {
              src: "/src/assets/img/trophy-pitch-regional.jpeg",
              alt: "Regional Trophy",
            },
            {
              src: "/src/assets/img/trio-regional-pitch.jpeg",
              alt: "Regional Pitch Team",
            },
          ],
        },
        {
          id: 3,
          role: "Graphic Designer & Video Editor",
          date: "2023, 2025",
          title: "Creative Digital Production",
          org: "Elite Royalties · i-Singapore",
          contributions: [
            "Short-form podcast clips for social media reels",
            "Acrylic graphic designs for marketing and advertising",
            "Video editing for promotional and brand content",
            "Brand asset creation and design consistency across campaigns",
          ],
          stack: ["Adobe Premiere Pro", "CapCut", "Canva", "Figma"],
        },
      ],

      // ── Projects ──
      projects: [
        {
          id: 1,
          icon: "fas fa-briefcase",
          title: "Jobify",
          desc: "Student freelancing platform prototype connecting learners with real-world gig opportunities and project-based work.",
          stack: ["Next.js", "Tailwind CSS", "PostgreSQL", "Supabase"],
        },
        {
          id: 2,
          icon: "fas fa-apple-alt",
          title: "Food App",
          desc: "Mobile application prototype for calorie tracking and nutritional analysis with a clean, responsive interface.",
          stack: ["Vue 3", "Supabase", "Responsive Design"],
        },
        {
          id: 3,
          icon: "fas fa-cube",
          title: "Docker & Nginx Demo",
          desc: "Introductory containerization project demonstrating DevOps fundamentals including multi-container orchestration.",
          stack: ["Docker", "Nginx", "Linux"],
        },
      ],

      // ── Skills ──
      skillCategories: [
        {
          icon: "fas fa-layer-group",
          title: "Frontend",
          skills: [
            "React",
            "Vue 3",
            "Next.js",
            "JavaScript",
            "HTML / CSS",
            "Tailwind CSS",
            "Bootstrap",
            "shadcn/ui",
          ],
        },
        {
          icon: "fas fa-server",
          title: "Backend",
          skills: [
            "Node.js",
            "Python",
            "PHP Laravel",
            "PostgreSQL",
            "Supabase",
            "REST APIs",
          ],
        },
        {
          icon: "fas fa-brain",
          title: "Emerging Tech",
          skills: [
            "Machine Learning",
            "Deep Learning",
            "IoT Systems",

            "AI Workflows",
            "Cloud Architecture",
          ],
        },
        {
          icon: "fas fa-chart-line",
          title: "Business & Strategy",
          skills: [
            "Startup Leadership",
            "Market Research",
            "Pitch Presentation",
            "Business Models",
            "Strategic Planning",
          ],
        },
        {
          icon: "fas fa-palette",
          title: "Design & Creative",
          skills: [
            "Figma",
            "UI/UX Design",
            "Adobe Premiere",
            "CapCut",
            "Graphic Design",
            "Video Editing",
          ],
        },
        {
          icon: "fas fa-tools",
          title: "Tools & DevOps",
          skills: [
            "Git / GitHub",
            "VS Code",
            "Docker",
            "Nginx",
            "Vercel",
            "Netlify",
          ],
        },
      ],

      // ── Certifications ──
      activeCertCat: "All",
      certCategories: [
        "All",
        "Programming",
        "Web Development",
        "Database",
        "Machine Learning",
        "Entrepreneurship",
      ],
      certifications: [
        {
          id: 1,
          title: "Intermediate C",
          issuer: "SoloLearn",
          category: "Programming",
          date: "2024",
          icon: "fa-solid fa-c",
          description: "Advanced C programming concepts and implementation.",
          link: "https://www.sololearn.com/certificates/CC-PWXMWAKI",
        },
        {
          id: 2,
          title: "Introduction to C",
          issuer: "SoloLearn",
          category: "Programming",
          date: "2024",
          icon: "fa-solid fa-c",
          description: "Foundational C programming skills.",
          link: "https://www.sololearn.com/certificates/CC-2BLNAV1I",
        },
        {
          id: 3,
          title: "Introduction to JavaScript",
          issuer: "SoloLearn",
          category: "Programming",
          date: "2024",
          icon: "fa-brands fa-js",
          description: "Core JavaScript programming fundamentals.",
          link: "https://www.sololearn.com/certificates/CC-GVYBVAXN",
        },
        {
          id: 4,
          title: "Introduction to HTML",
          issuer: "SoloLearn",
          category: "Web Development",
          date: "2024",
          icon: "fa-brands fa-html5",
          description: "HTML5 markup and structure.",
          link: "https://www.sololearn.com/certificates/CC-77JGEPRP",
        },
        {
          id: 5,
          title: "Introduction to CSS",
          issuer: "SoloLearn",
          category: "Web Development",
          date: "2024",
          icon: "fa-brands fa-css3",
          description: "CSS styling and layout design.",
          link: "https://www.sololearn.com/certificates/CC-YRVCNG7A",
        },
        {
          id: 6,
          title: "Introduction to SQL",
          issuer: "SoloLearn",
          category: "Database",
          date: "2024",
          icon: "fas fa-database",
          description: "Database management and queries.",
          link: "https://www.sololearn.com/certificates/CC-DZVD6P5F",
        },
        {
          id: 7,
          title: "Social Media Marketing with AI",
          issuer: "SoloLearn",
          category: "Database",
          date: "2024",
          icon: "fas fa-chart-line",
          description: "AI-driven marketing strategies.",
          link: "https://www.sololearn.com/certificates/CC-NBULWXUX",
        },
        {
          id: 8,
          title: "Intro to Machine Learning",
          issuer: "Kaggle Learn",
          category: "Machine Learning",
          date: "March 2025",
          icon: "fas fa-robot",
          file: certFiles.introML,
          description:
            "Foundational ML concepts and practical applications by Dan Becker.",
        },
        {
          id: 9,
          title: "Intro to Deep Learning",
          issuer: "Kaggle Learn",
          category: "Machine Learning",
          date: "April 2025",
          icon: "fas fa-brain",
          file: certFiles.introDL,
          description:
            "Neural networks and deep learning fundamentals by Ryan Holbrook.",
        },
        {
          id: 10,
          title: "DICT Caraga RPC — Top 15 Individual",
          issuer: "DICT Caraga",
          category: "Entrepreneurship",
          date: "December 2025",
          icon: "fas fa-trophy",
          file: certFiles.top15Individual,
          description:
            "Recognized as Top 15 Individual Participant at the regional pitching competition.",
        },
        {
          id: 11,
          title: "Care Guardian — Top 15 Team",
          issuer: "DICT Caraga",
          category: "Entrepreneurship",
          date: "December 2025",
          icon: "fas fa-trophy",
          file: certFiles.top15Team,
          description:
            "2nd Runner-Up at the DICT Caraga Regional Pitching Competition.",
        },
        {
          id: 12,
          title: "Ideation Wednesdays Program",
          issuer: "Startup Program",
          category: "Entrepreneurship",
          date: "October 2025",
          icon: "fas fa-lightbulb",
          file: certFiles.ideation,
          description:
            "AI-assisted agile development and startup fundamentals.",
        },
      ],

      // ── Contact ──
      contactMethods: [
        {
          icon: "fas fa-envelope",
          label: "Email",
          value: "bantillocj1@gmail.com",
          href: "mailto:bantillocj1@gmail.com",
        },
        {
          icon: "fab fa-whatsapp",
          label: "WhatsApp",
          value: "+63 968 575 2351",
          href: "https://wa.me/639685752351",
          target: "_blank",
        },
        {
          icon: "fab fa-github",
          label: "GitHub",
          value: "cjbantillo",
          href: "https://github.com/cjbantillo",
          target: "_blank",
        },
        {
          icon: "fab fa-linkedin",
          label: "LinkedIn",
          value: "Christian James M. Bantillo",
          href: "https://www.linkedin.com/in/cjbantillo",
          target: "_blank",
        },
        {
          icon: "fab fa-facebook",
          label: "Facebook",
          value: "Christian James M. Bantillo",
          href: "https://www.facebook.com/profile.php?id=100008629815223",
          target: "_blank",
        },
      ],

      socialLinks: [
        {
          icon: "fab fa-github",
          label: "GitHub",
          href: "https://github.com/cjbantillo",
        },
        {
          icon: "fab fa-linkedin",
          label: "LinkedIn",
          href: "https://www.linkedin.com/in/cjbantillo",
        },
        {
          icon: "fab fa-facebook",
          label: "Facebook",
          href: "https://www.facebook.com/profile.php?id=100008629815223",
        },
        {
          icon: "fab fa-whatsapp",
          label: "WhatsApp",
          href: "https://wa.me/639685752351",
        },
      ],
    };
  },

  computed: {
    filteredCerts() {
      if (this.activeCertCat === "All") return this.certifications;
      return this.certifications.filter(
        (c) => c.category === this.activeCertCat,
      );
    },
  },

  methods: {
    applyTheme() {
      const root = document.documentElement;
      if (this.isLight) {
        root.classList.add("light");
      } else {
        root.classList.remove("light");
      }
    },
    toggleTheme() {
      this.isLight = !this.isLight;
      this.applyTheme();
      // persist preference
      try {
        localStorage.setItem("theme", this.isLight ? "light" : "dark");
      } catch (e) {}
    },
    scrollTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    openImageModal(src, alt) {
      this.imageModal = { show: true, src, alt };
      document.body.style.overflow = "hidden";
    },
    closeImageModal() {
      this.imageModal = { show: false, src: "", alt: "" };
      document.body.style.overflow = "";
    },
    openCertModal(cert) {
      if (!cert || !cert.file) return;
      const ext = cert.file.split(".").pop()?.toLowerCase();
      const type = ext === "pdf" ? "pdf" : "image";
      this.certModal = {
        show: true,
        src: cert.file,
        title: cert.title,
        type,
      };
      document.body.style.overflow = "hidden";
    },
    closeCertModal() {
      this.certModal = { show: false, src: "", title: "", type: "image" };
      document.body.style.overflow = "";
    },
  },

  mounted() {
    // restore saved preference
    try {
      const saved = localStorage.getItem("theme");
      if (saved === "light") this.isLight = true;
      if (
        !saved &&
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: light)").matches
      ) {
        this.isLight = true;
      }
    } catch (e) {}
    this.applyTheme();
  },
};
</script>

<!-- ══════════════════════════════════════════════════════════
     SCOPED STYLES
     ══════════════════════════════════════════════════════════ -->
<style scoped>
/* ── NAVBAR ── */
.navbar {
  position: sticky;
  top: 0;
  z-index: 1000;
  background: var(--nav-bg);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-bottom: 1px solid var(--border);
  transition:
    background 0.35s ease,
    border-color 0.35s ease;
}

.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 62px;
}

/* logo */
.nav-logo {
  display: flex;
  align-items: center;
  font-family: "Fira Code", monospace;
  font-size: 1.15rem;
  font-weight: 700;
  gap: 0;
  text-decoration: none;
  opacity: 1;
}
.nav-logo:hover {
  opacity: 0.7;
}
.logo-bracket {
  color: var(--text-muted);
  transition: color 0.35s;
}
.logo-text {
  color: var(--text-primary);
  transition: color 0.35s;
}

/* links */
.nav-links {
  display: flex;
  list-style: none;
  gap: 1.8rem;
}
.nav-links a {
  font-size: 0.8rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--text-secondary);
  transition: color 0.25s ease;
}
.nav-links a:hover {
  color: var(--text-primary);
  opacity: 1;
}

/* controls */
.nav-controls {
  display: flex;
  align-items: center;
  gap: 0.9rem;
}

.theme-toggle {
  background: none;
  border: 1px solid var(--border);
  border-radius: 6px;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: var(--text-secondary);
  font-size: 0.9rem;
  transition:
    border-color 0.25s,
    color 0.25s,
    background 0.25s;
  padding: 0;
}
.theme-toggle:hover {
  border-color: var(--border-hover);
  color: var(--text-primary);
  background: var(--accent-dim);
}

/* hamburger */
.hamburger {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 34px;
  height: 34px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}
.hamburger span {
  display: block;
  width: 22px;
  height: 2px;
  background: var(--text-secondary);
  border-radius: 1px;
  transition: all 0.3s ease;
}
.hamburger.open span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}
.hamburger.open span:nth-child(2) {
  opacity: 0;
}
.hamburger.open span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

/* ── HERO ── */
.hero {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5rem 0 3rem;
}

.hero-inner {
  width: 100%;
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 3rem;
  align-items: center;
}
.hero-inner .hero-eyebrow {
  font-family: "Fira Code", monospace;
  font-size: 0.72rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: var(--text-muted);
  margin-bottom: 1rem;
  transition: color 0.35s;
}

.hero-inner .hero-name {
  margin-bottom: 1.1rem;
  /* gradient only in dark; solid in light handled via .light override below */
  background: linear-gradient(
    135deg,
    var(--text-primary) 0%,
    var(--text-secondary) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-inner .hero-sub {
  font-family: "Fira Code", monospace;
  font-size: 1rem;
  color: var(--text-secondary);
  margin-bottom: 1.1rem;
  transition: color 0.35s;
}

.hero-inner .hero-desc {
  font-size: 1.05rem;
  color: var(--text-secondary);
  max-width: 540px;
  line-height: 1.75;
  margin-bottom: 2rem;
  transition: color 0.35s;
}

.hero-inner .hero-actions {
  display: flex;
  gap: 0.85rem;
  flex-wrap: wrap;
  margin-bottom: 3.5rem;
}

.hero-inner .hero-portrait {
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-inner .hero-portrait img {
  width: 280px;
  height: 280px;
  object-fit: cover;
  border-radius: 12px;
  border: 1px solid var(--border);
  box-shadow: var(--shadow-card);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease,
    border-color 0.3s ease;
}

.hero-inner .hero-portrait img:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-card-hover);
  border-color: var(--border-hover);
}
.hero-stats {
  display: flex;
  align-items: center;
  gap: 2.5rem;
  flex-wrap: wrap;
  margin-top: 1.5rem;
}
.stat {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}
.stat-value {
  font-family: "Fira Code", monospace;
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--text-primary);
  transition: color 0.35s;
}
.stat-label {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--text-muted);
  transition: color 0.35s;
}

.hero-bottom-rule {
  width: 100%;
  max-width: 1140px;
  height: 1px;
  background: var(--border);
  margin-top: 3rem;
  transition: background 0.35s;
}

/* ── ABOUT ── */
.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
}

.about-text p {
  color: var(--text-secondary);
  margin-bottom: 1rem;
  font-size: 0.98rem;
  transition: color 0.35s;
}
.about-text strong {
  color: var(--text-primary);
  transition: color 0.35s;
}

.about-highlights {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.highlight-item {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}
.highlight-icon {
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background: var(--accent-dim);
  border: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary);
  font-size: 0.95rem;
  transition:
    background 0.35s,
    border-color 0.35s,
    color 0.35s;
}
.highlight-title {
  color: var(--text-primary);
  font-size: 0.9rem;
  margin-bottom: 0.25rem;
  transition: color 0.35s;
}
.highlight-desc {
  color: var(--text-muted);
  font-size: 0.82rem;
  line-height: 1.55;
  transition: color 0.35s;
}

/* ── EXPERIENCE ── */
.experience-timeline {
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
}

.exp-card {
  padding: 1.75rem;
}

.exp-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.9rem;
}
.exp-meta-left {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.exp-role-badge {
  background: var(--cta);
  color: #fff;
  border-color: var(--cta);
  font-size: 0.68rem;
}
.exp-date {
  font-family: "Fira Code", monospace;
  font-size: 0.72rem;
  color: var(--text-muted);
  display: flex;
  align-items: center;
  gap: 0.4rem;
  transition: color 0.35s;
}

.exp-title {
  margin-bottom: 0.3rem;
  font-size: 1.2rem;
}
.exp-org {
  color: var(--text-muted);
  font-size: 0.82rem;
  margin-bottom: 1.1rem;
  transition: color 0.35s;
}

.exp-list {
  list-style: none;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
}
.exp-list li {
  display: flex;
  gap: 0.6rem;
  align-items: flex-start;
  font-size: 0.88rem;
  color: var(--text-secondary);
  transition: color 0.35s;
}
.exp-list li i {
  color: var(--cta);
  margin-top: 2px;
  flex-shrink: 0;
  font-size: 0.7rem;
}

.exp-achievement {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  background: var(--accent-dim);
  border: 1px solid var(--border);
  border-radius: 6px;
  padding: 0.65rem 0.9rem;
  margin-bottom: 1rem;
  font-size: 0.82rem;
  color: var(--text-secondary);
  transition:
    background 0.35s,
    border-color 0.35s,
    color 0.35s;
}
.exp-achievement i {
  color: #eab308;
}

.exp-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  margin-bottom: 1rem;
}

.exp-gallery {
  margin-top: 1.2rem;
}
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 0.7rem;
}
.gallery-img {
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: 6px;
  border: 1px solid var(--border);
  transition:
    border-color 0.25s,
    transform 0.25s;
}
.gallery-img:hover {
  border-color: var(--border-hover);
  transform: scale(1.03);
}

.cert-card.clickable {
  cursor: pointer;
}
.cert-card.clickable:hover {
  transform: translateY(-2px);
}

/* ── PROJECTS ── */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.project-icon {
  font-size: 1.3rem;
  color: var(--text-muted);
  margin-bottom: 0.7rem;
  transition: color 0.35s;
}
.project-card h3 {
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
}
.project-desc {
  color: var(--text-secondary);
  font-size: 0.87rem;
  line-height: 1.6;
  margin-bottom: 1rem;
  transition: color 0.35s;
}
.project-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

/* ── SKILLS ── */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.skill-card-header {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  margin-bottom: 1rem;
}
.skill-card-header i {
  color: var(--text-muted);
  font-size: 0.9rem;
  transition: color 0.35s;
}
.skill-card-header h3 {
  font-size: 0.95rem;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

/* ── CERTIFICATIONS ── */
.cert-filters {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2.2rem;
}

.cert-filter-btn {
  background: transparent;
  border: 1px solid var(--border);
  border-radius: 5px;
  color: var(--text-secondary);
  font-family: "Fira Code", monospace;
  font-size: 0.72rem;
  font-weight: 600;
  padding: 0.38rem 0.8rem;
  cursor: pointer;
  transition: all 0.25s ease;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}
.cert-filter-btn:hover {
  border-color: var(--border-hover);
  color: var(--text-primary);
}
.cert-filter-btn.active {
  background: var(--text-primary);
  color: var(--bg-primary);
  border-color: var(--text-primary);
}

.certs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  gap: 1.4rem;
}

.cert-card {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.cert-icon-wrap {
  width: 48px;
  height: 48px;
  border-radius: 10px;
  background: var(--accent-dim);
  border: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary);
  font-size: 1.2rem;
  margin-bottom: 0.85rem;
  transition:
    background 0.35s,
    border-color 0.35s,
    color 0.35s;
}

.cert-card h3 {
  font-size: 0.95rem;
  margin-bottom: 0.3rem;
}
.cert-issuer {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--cta);
  margin-bottom: 0.25rem;
}
.cert-date {
  font-family: "Fira Code", monospace;
  font-size: 0.7rem;
  color: var(--text-muted);
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.35rem;
  transition: color 0.35s;
}
.cert-desc {
  color: var(--text-secondary);
  font-size: 0.8rem;
  line-height: 1.5;
  flex-grow: 1;
  margin-bottom: 0.75rem;
  transition: color 0.35s;
}
.cert-link {
  font-family: "Fira Code", monospace;
  font-size: 0.72rem;
  font-weight: 600;
  color: var(--text-primary);
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  transition: color 0.25s;
}
.cert-link:hover {
  color: var(--cta);
  opacity: 1;
}

/* ── CONTACT ── */
.contact-section {
  text-align: center;
}

.contact-intro {
  color: var(--text-secondary);
  font-size: 0.95rem;
  max-width: 520px;
  margin-bottom: 2rem;
  margin-left: auto;
  margin-right: auto;
  transition: color 0.35s;
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1rem;
  margin-bottom: 2.5rem;
  justify-items: center;
}

.contact-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  text-decoration: none;
  padding: 1.1rem 1.25rem;
  opacity: 1;
  width: 100%;
  max-width: 300px;
  text-align: left;
}
.contact-card:hover {
  opacity: 1;
}

.contact-icon-wrap {
  flex-shrink: 0;
  width: 38px;
  height: 38px;
  border-radius: 8px;
  background: var(--accent-dim);
  border: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary);
  font-size: 0.9rem;
  transition:
    background 0.35s,
    border-color 0.35s,
    color 0.35s;
}

.contact-info h4 {
  font-size: 0.82rem;
  color: var(--text-primary);
  margin-bottom: 0.15rem;
  transition: color 0.35s;
}
.contact-info p {
  font-size: 0.75rem;
  color: var(--text-muted);
  margin: 0;
  transition: color 0.35s;
}

/* Social icons */
.social-row {
  display: flex;
  gap: 0.75rem;
}
.social-icon {
  width: 42px;
  height: 42px;
  border-radius: 8px;
  border: 1px solid var(--border);
  background: var(--accent-dim);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-secondary);
  font-size: 1rem;
  transition:
    border-color 0.25s,
    background 0.25s,
    color 0.25s,
    transform 0.25s;
  opacity: 1;
}
.social-icon:hover {
  border-color: var(--border-hover);
  color: var(--text-primary);
  background: var(--accent-glow);
  transform: translateY(-2px);
  opacity: 1;
}

/* ── FOOTER ── */
.footer {
  border-top: 1px solid var(--border);
  padding: 2rem 0;
  transition: border-color 0.35s;
}
.footer-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
}
.footer-copy,
.footer-built {
  font-size: 0.74rem;
  color: var(--text-muted);
  transition: color 0.35s;
}

/* ══════════════════════════════════════════════════════════
   RESPONSIVE — MOBILE
   ══════════════════════════════════════════════════════════ */
@media (max-width: 768px) {
  /* hamburger visible */
  .hamburger {
    display: flex;
  }

  /* mobile nav drawer */
  .nav-links {
    position: fixed;
    top: 62px;
    left: 0;
    width: 100%;
    flex-direction: column;
    gap: 0;
    background: var(--bg-secondary);
    border-bottom: 1px solid var(--border);
    max-height: 0;
    overflow: hidden;
    transition:
      max-height 0.35s ease,
      padding 0.35s ease;
    padding: 0;
  }
  .nav-links.open {
    max-height: 360px;
    padding: 1rem 0;
  }
  .nav-links li {
    text-align: center;
  }
  .nav-links a {
    display: block;
    padding: 0.7rem 0;
    font-size: 0.78rem;
  }

  /* hero */
  .hero {
    padding: 4rem 0 2.5rem;
  }
  .hero-inner {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  .hero-portrait img {
    width: 220px;
    height: 220px;
  }
  .hero-stats {
    gap: 2rem;
  }

  /* about */
  .about-grid {
    grid-template-columns: 1fr;
    gap: 2.2rem;
  }

  /* experience gallery */
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  /* projects / skills / certs */
  .projects-grid,
  .skills-grid,
  .certs-grid {
    grid-template-columns: 1fr;
  }

  /* contact */
  .contact-grid {
    grid-template-columns: 1fr;
  }

  /* footer */
  .footer-inner {
    flex-direction: column;
    text-align: center;
  }
}

@media (max-width: 480px) {
  .hero-actions {
    flex-direction: column;
    align-items: flex-start;
  }
  .hero-portrait img {
    width: 200px;
    height: 200px;
  }
  .hero-stats {
    flex-direction: column;
    gap: 1rem;
  }
}

/* Image Modal */
.image-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  padding: 2rem;
}

.modal-content {
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
}

.modal-content img {
  max-width: 100%;
  max-height: 90vh;
  object-fit: contain;
  border-radius: 8px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
}

.modal-close {
  position: absolute;
  top: -3rem;
  right: 0;
  background: none;
  border: none;
  color: #fff;
  font-size: 2rem;
  cursor: pointer;
  padding: 0.5rem;
  transition: transform 0.2s;
}

.modal-close:hover {
  transform: scale(1.2);
}

/* Certificate Modal */
.cert-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10001;
  padding: 2rem;
}

.cert-modal-content {
  position: relative;
  background: var(--bg-primary);
  border: 1px solid var(--border);
  border-radius: 12px;
  width: min(980px, 95vw);
  max-height: 90vh;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.45);
}

.cert-modal-title {
  margin: 0;
  font-size: 1rem;
  color: var(--text-primary);
}

.cert-viewer {
  width: 100%;
  flex: 1;
  min-height: 50vh;
  border: 1px solid var(--border);
  border-radius: 10px;
  background: var(--bg-secondary);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.cert-viewer iframe {
  width: 100%;
  height: 70vh;
  border: none;
}

.cert-viewer img {
  width: 100%;
  height: auto;
  max-height: 70vh;
  object-fit: contain;
}

.cert-download {
  align-self: flex-end;
  font-size: 0.8rem;
  color: var(--text-secondary);
  text-decoration: none;
  transition: color 0.25s;
}

.cert-download:hover {
  color: var(--text-primary);
}
</style>
