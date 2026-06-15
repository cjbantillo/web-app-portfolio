<template>
  <section id="experience" class="section">
    <div class="container">
      <p class="section-label"><i class="fas fa-briefcase"></i> Experience</p>
      <h2 class="section-title">Work & Leadership</h2>
      <div class="section-divider"></div>

      <div class="experience-timeline">
        <div class="timeline-rail" aria-hidden="true"></div>

        <article class="timeline-item" v-for="exp in experiences" :key="exp.id">
          <div class="timeline-node" aria-hidden="true"></div>

          <div class="timeline-card exp-card">
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
        </article>
      </div>
    </div>
  </section>
</template>

<script>
const galleryImages = {
  ocidSystem: new URL("../assets/img/OCID-system.png", import.meta.url).href,
  ocidCertificate: new URL(
    "../assets/img/OCID-Certificate.jpeg",
    import.meta.url,
  ).href,
  teamDevelopment: new URL(
    "../assets/img/550958202_1298140575118436_1356883172998839872_n.jpg",
    import.meta.url,
  ).href,
  teamCollaboration: new URL(
    "../assets/img/550513469_1349979503351633_3662702284138704297_n.jpg",
    import.meta.url,
  ).href,
  pitchingCompetition: new URL(
    "../assets/img/pitching-competition-pagsanyog.png",
    import.meta.url,
  ).href,
  pagsanyog: new URL("../assets/img/pagsanyog.jpeg", import.meta.url).href,
  trophyRegional: new URL(
    "../assets/img/trophy-pitch-regional.jpeg",
    import.meta.url,
  ).href,
  trioRegional: new URL(
    "../assets/img/trio-regional-pitch.jpeg",
    import.meta.url,
  ).href,
};

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
            { src: galleryImages.ocidSystem, alt: "OCID Dashboard" },
            {
              src: galleryImages.ocidCertificate,
              alt: "Internship Certificate",
            },
            {
              src: galleryImages.teamDevelopment,
              alt: "Team Development",
            },
            {
              src: galleryImages.teamCollaboration,
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
              src: galleryImages.pitchingCompetition,
              alt: "University Pitching Competition",
            },
            {
              src: galleryImages.pagsanyog,
              alt: "University Competition",
            },
            {
              src: galleryImages.trophyRegional,
              alt: "Regional Trophy",
            },
            {
              src: galleryImages.trioRegional,
              alt: "Regional Pitch Team",
            },
          ],
        },
        {
          id: 3,
          role: "Video Editor & Graphic Designer",
          date: "2024 (1 Month)",
          title: "Video Editing & Asset Design",
          org: "iSchool PTE LTD",
          contributions: [
            "Video editing for various digital platforms and projects",
            "Creating and integrating graphic design assets to support video content",
          ],
          stack: ["Adobe Premiere Pro", "CapCut", "Canva", "Figma"],
        },
        {
          id: 4,
          role: "Graphic Designer & Video Editor",
          date: "2023 (2 Months)",
          title: "Digital Media Production",
          org: "Elite Royalties",
          contributions: [
            "Graphic design, video production, and podcast editing",
            "Cutting and optimizing niche videos for TikTok",
            "Short-form podcast clips for social media reels",
          ],
          stack: ["Adobe Premiere Pro", "CapCut", "Canva"],
        },
      ],
    };
  },
};
</script>

<style scoped>
.experience-timeline {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-left: 2.6rem;
}

.timeline-rail {
  position: absolute;
  left: calc(3.56rem - 1px);
  top: 0.25rem;
  bottom: 0.25rem;
  width: 2px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.18),
    rgba(255, 255, 255, 0.04)
  );
}

.timeline-item {
  position: relative;
  display: grid;
  grid-template-columns: 1.1rem 1fr;
  column-gap: 1.5rem;
  align-items: start;
}

.timeline-node {
  position: relative;
  z-index: 1;
  width: 0.72rem;
  height: 0.72rem;
  border-radius: 50%;
  margin-top: 0.5rem;
  margin-left: 0.6rem;
  background: #2f80ff;
  box-shadow:
    0 0 0 4px rgba(47, 128, 255, 0.16),
    0 0 14px rgba(47, 128, 255, 0.5);
}

.timeline-item:first-of-type .timeline-node {
  background: #0f172a;
  box-shadow:
    0 0 0 4px rgba(255, 255, 255, 0.08),
    0 0 14px rgba(255, 255, 255, 0.2);
}

.timeline-card {
  padding: 0 0 0.15rem 0;
  background: transparent;
  border: 0;
  border-radius: 0;
  box-shadow: none;
  animation: none;
  opacity: 1;
}

.exp-card {
  padding: 0;
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
  .experience-timeline {
    padding-left: 1.35rem;
  }

  .timeline-rail {
    left: calc(2.31rem - 1px);
  }

  .timeline-item {
    column-gap: 0.9rem;
  }

  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
