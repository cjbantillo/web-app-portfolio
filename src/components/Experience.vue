<template>
  <section id="experience" class="section">
    <div class="container">
      <p class="section-label"><i class="fas fa-briefcase"></i> Experience</p>
      <h2 class="section-title">Work & Leadership</h2>
      <div class="section-divider"></div>

      <div class="experience-timeline">
        <div class="exp-card card" v-for="exp in experiences" :key="exp.id">
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

          <ul class="exp-list">
            <li v-for="(c, i) in exp.contributions" :key="i">
              <i class="fas fa-check"></i>
              <span>{{ c }}</span>
            </li>
          </ul>

          <div v-if="exp.achievement" class="exp-achievement">
            <i class="fas fa-trophy"></i>
            <span>{{ exp.achievement }}</span>
          </div>

          <div class="exp-stack">
            <span class="badge" v-for="t in exp.stack" :key="t">{{ t }}</span>
          </div>

          <div v-if="exp.gallery && exp.gallery.length" class="exp-gallery">
            <div class="gallery-grid">
              <img
                v-for="(img, idx) in exp.gallery"
                :key="idx"
                :src="img.src"
                :alt="img.alt"
                class="gallery-img"
                @click="$emit('open-image-modal', img.src, img.alt)"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Experience",
  data() {
    return {
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
    };
  },
};
</script>

<style scoped>
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
  cursor: pointer;
  transition:
    border-color 0.25s,
    transform 0.25s;
}
.gallery-img:hover {
  border-color: var(--border-hover);
  transform: scale(1.03);
}

@media (max-width: 768px) {
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
