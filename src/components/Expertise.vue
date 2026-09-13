<template>
  <div class="expertise-content">
    <div class="expertise-grid">
      <!-- Column 1: Technical Skills -->
      <section class="expertise-col">
        <h2 class="section-title">Technical Skills</h2>
        <div class="section-divider"></div>

        <div class="skills-grid">
          <GlowCard
            class="skill-card anim-fade-up"
            v-for="(cat, index) in skillCategories"
            :key="cat.title"
            :style="{ animationDelay: `${index * 0.1}s` }"
          >
            <div class="skill-card-header">
              <i :class="cat.icon"></i>
              <h3>{{ cat.title }}</h3>
            </div>
            <div class="skill-tags">
              <span class="badge" v-for="s in cat.skills" :key="s">{{ s }}</span>
            </div>
          </GlowCard>
        </div>
      </section>

      <!-- Column 2: Certifications -->
      <section class="expertise-col">
        <h2 class="section-title">Certifications & Awards</h2>
        <div class="section-divider"></div>

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
          <GlowCard
            class="cert-card anim-fade-up"
            :class="{ clickable: !!c.file }"
            v-for="(c, index) in filteredCerts"
            :key="c.id"
            :style="{ animationDelay: `${index * 0.1}s` }"
            @click="$emit('open-cert-modal', c)"
          >
            <div class="cert-icon-wrap"><i :class="c.icon"></i></div>
            <h3>{{ c.title }}</h3>
            <p class="cert-issuer">{{ c.issuer }}</p>
            <p class="cert-date"><i class="fas fa-calendar"></i> {{ c.date }}</p>
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
          </GlowCard>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
const certFiles = {
  ideation: new URL(
    "../assets/Certificates/BANTILLO_S1_10152025_IDEATION WEDNESDAYS-24.pdf",
    import.meta.url,
  ).href,
  top15Individual: new URL(
    "../assets/Certificates/Bantillo_Top15RPC_2025-26.pdf",
    import.meta.url,
  ).href,
  top15Team: new URL(
    "../assets/Certificates/Guardian_Top15Teams_RPC2025-9.pdf",
    import.meta.url,
  ).href,
  introML: new URL(
    "../assets/Certificates/Christian James Bantillo - Intro to Machine Learning.png",
    import.meta.url,
  ).href,
  introDL: new URL(
    "../assets/Certificates/Christian James Bantillo - Intro to Deep Learning.png",
    import.meta.url,
  ).href,
  navigatuCompletion: new URL(
    "../assets/Certificates/navigatu-completion-cert.jpg",
    import.meta.url,
  ).href,
};

export default {
  name: "Expertise",
  components: {
    GlowCard: () => import("./GlowCard.vue"),
  },
  emits: ["open-cert-modal"],
  data() {
    return {
      /* --- Skills Data --- */
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

      /* --- Certifications Data --- */
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
        {
          id: 13,
          title: "Navigatu TBI Incubation — Cohort 9",
          issuer: "CSU Technology Business Incubator",
          category: "Entrepreneurship",
          date: "July 2026",
          icon: "fas fa-rocket",
          file: certFiles.navigatuCompletion,
          description:
            "Successfully completed the structured incubation program for Care Guardian startup commercialization.",
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
};
</script>

<style scoped>
.expertise-content {
  padding: 1rem 0 4rem;
  max-width: 1600px;
  margin: 0 auto;
}

.expertise-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
}

.section-title {
  font-family: "Inter", sans-serif;
  font-size: 2.2rem;
  font-weight: 800;
  color: #FFFFFF;
  margin-bottom: 2rem;
  letter-spacing: -0.5px;
}

/* ==================================
   Column 1: Skills
================================== */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.skill-card {
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  opacity: 0;
  animation: fadeUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}

.skill-card:hover {
  border-color: rgba(255, 255, 255, 0.2);
  transform: translateY(-3px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
}

.skill-card-header {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 1.2rem;
}
.skill-card-header i {
  color: #FFFFFF;
  font-size: 1.2rem;
}
.skill-card-header h3 {
  font-size: 1.1rem;
  font-weight: 700;
  color: #FFFFFF;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.badge {
  font-family: "Fira Code", monospace;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.4rem 0.8rem;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.05);
  color: #FFFFFF;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.badge:hover {
  background: rgba(255, 255, 255, 0.1);
  color: #FFFFFF;
  border-color: rgba(255, 255, 255, 0.3);
}


/* ==================================
   Column 2: Certifications
================================== */
.cert-filters {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-bottom: 1.5rem;
}

.cert-filter-btn {
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  color: rgba(255, 255, 255, 0.7);
  font-family: "Fira Code", monospace;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.4rem 0.8rem;
  cursor: pointer;
  transition: all 0.25s ease;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}
.cert-filter-btn:hover {
  border-color: rgba(255, 255, 255, 0.5);
  color: #FFFFFF;
}
.cert-filter-btn.active {
  background: rgba(255, 255, 255, 0.1);
  color: #FFFFFF;
  border-color: rgba(255, 255, 255, 0.3);
}

.certs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.cert-card {
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  opacity: 0;
  animation: fadeUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.cert-card.clickable {
  cursor: pointer;
}
.cert-card.clickable:hover {
  border-color: rgba(255, 255, 255, 0.2);
  transform: translateY(-3px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
}

.cert-icon-wrap {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFFFFF;
  font-size: 1.2rem;
  margin-bottom: 1.2rem;
}

.cert-card h3 {
  font-size: 1.1rem;
  font-weight: 700;
  color: #FFFFFF;
  margin-bottom: 0.4rem;
}
.cert-issuer {
  font-size: 0.85rem;
  font-weight: 600;
  color: #FFFFFF;
  opacity: 0.8;
  margin-bottom: 0.4rem;
}
.cert-date {
  font-family: "Fira Code", monospace;
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 0.8rem;
  display: flex;
  align-items: center;
  gap: 0.4rem;
}
.cert-desc {
  color: #E2E8F0;
  font-size: 0.9rem;
  line-height: 1.5;
  flex-grow: 1;
  margin-bottom: 1rem;
}
.cert-link {
  font-family: "Fira Code", monospace;
  font-size: 0.8rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.7);
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  transition: color 0.25s;
}
.cert-link:hover {
  color: #FFFFFF;
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 1024px) {
  .expertise-grid {
    grid-template-columns: 1fr;
    gap: 4rem;
  }
}
</style>
