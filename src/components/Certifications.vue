<template>
  <section id="certifications" class="section">
    <div class="container">
      <p class="section-label">
        <i class="fas fa-certificate"></i> Certifications
      </p>
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
        <div
          class="card cert-card"
          :class="{ clickable: !!c.file }"
          v-for="c in filteredCerts"
          :key="c.id"
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
        </div>
      </div>
    </div>
  </section>
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
};

export default {
  name: "Certifications",
  data() {
    return {
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

.cert-card.clickable {
  cursor: pointer;
}
.cert-card.clickable:hover {
  transform: translateY(-2px);
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

@media (max-width: 768px) {
  .certs-grid {
    grid-template-columns: 1fr;
  }
}
</style>
