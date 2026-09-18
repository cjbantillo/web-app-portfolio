<template>
  <div class="resume-content">
    <div class="resume-grid">
      <!-- Column 1: Education -->
      <section class="resume-col">
        <h2 class="section-title">Academic Journey</h2>
        <div class="section-divider"></div>

        <div class="education-timeline">
          <div class="timeline-rail" aria-hidden="true"></div>

          <article class="timeline-item anim-fade-up" v-for="(item, index) in education" :key="item.id" :style="{ animationDelay: `${index * 0.15}s` }">
            <div class="timeline-node" :class="{ 'node-active': index === 0 }" aria-hidden="true"></div>

            <div class="timeline-year">{{ item.period }}</div>

            <GlowCard class="timeline-card card">
              <div class="timeline-meta">
                <span class="timeline-stage">{{ item.stage }}</span>
                <span class="timeline-label">{{ item.label }}</span>
              </div>

              <h3 class="timeline-title">{{ item.title }}</h3>
              <p class="timeline-school">{{ item.school }}</p>
              <p class="timeline-desc">{{ item.description }}</p>

              <div class="timeline-tags">
                <span class="badge" v-for="topic in item.topics" :key="topic">
                  {{ topic }}
                </span>
              </div>
            </GlowCard>
          </article>
        </div>
      </section>

      <!-- Column 2: Experience -->
      <section class="resume-col">
        <h2 class="section-title">Work & Leadership</h2>
        <div class="section-divider"></div>

        <div class="experience-timeline">
          <div class="timeline-rail" aria-hidden="true"></div>

          <article class="timeline-item anim-fade-up" v-for="(exp, index) in experiences" :key="exp.id" :style="{ animationDelay: `${(index + 2) * 0.15}s` }">
            <div class="timeline-node" :class="{ 'node-active': index === 0 }" aria-hidden="true"></div>

            <div class="timeline-year">{{ exp.date }}</div>

            <GlowCard class="timeline-card exp-card">
              <div class="exp-meta">
                <div class="exp-meta-left">
                  <span class="exp-role-badge badge">{{ exp.role }}</span>
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
            </GlowCard>
          </article>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
const galleryImages = {
  ocidSystem: new URL("../assets/img/OCID-system.png", import.meta.url).href,
  ocidCertificate: new URL("../assets/img/OCID-Certificate.jpeg", import.meta.url).href,
  teamDevelopment: new URL("../assets/img/550958202_1298140575118436_1356883172998839872_n.jpg", import.meta.url).href,
  teamCollaboration: new URL("../assets/img/550513469_1349979503351633_3662702284138704297_n.jpg", import.meta.url).href,
  pitchingCompetition: new URL("../assets/img/pitching-competition-pagsanyog.png", import.meta.url).href,
  pagsanyog: new URL("../assets/img/pagsanyog.jpeg", import.meta.url).href,
  trophyRegional: new URL("../assets/img/trophy-pitch-regional.jpeg", import.meta.url).href,
  trioRegional: new URL("../assets/img/trio-regional-pitch.jpeg", import.meta.url).href,
};

import GlowCard from "./GlowCard.vue";

export default {
  name: "Resume",
  components: {
    GlowCard,
  },
  emits: ["open-image-modal"],
  data() {
    return {
      education: [
        {
          id: 4,
          stage: "College",
          label: "BSIT",
          period: "2021 – 2026",
          title: "Bachelor of Science in Information Technology",
          school: "Caraga State University",
          description: "Formally began my programming journey with C and have continued expanding my skills in software development, web technologies, and problem-solving. Graduated June 19, 2026.",
          topics: ["C Programming", "Software Development", "Web Technologies"],
        },
        {
          id: 3,
          stage: "Senior High School",
          label: "STEM",
          period: "2020 – 2021",
          title: "STEM Strand",
          school: "Senior High School",
          description: "Explored graphic design and was introduced to web development through HTML, CSS, and JavaScript, which strengthened my passion for software development.",
          topics: ["STEM", "Graphic Design", "HTML", "CSS", "JavaScript"],
        },
        {
          id: 2,
          stage: "Grade 10",
          label: "ALS",
          period: "2019",
          title: "Basic Electronics",
          school: "Agusan National High School",
          description: "Expanded my technical background through the study of electronic components, circuits, and related technologies.",
          topics: ["Electronics", "Circuits", "Components"],
        },
        {
          id: 1,
          stage: "Grade 9",
          label: "ALS",
          period: "2018",
          title: "Computer Systems Servicing",
          school: "Agusan National High School",
          description: "Built foundational knowledge in computer hardware, troubleshooting, and system maintenance.",
          topics: ["Hardware", "Troubleshooting", "System Maintenance"],
        },
      ],
      experiences: [
        {
          id: 6,
          role: "Full Time Lecturer",
          date: "Aug 2026 – Present",
          title: "ITE Subjects Lecturer",
          org: "Caraga State University (CSU)",
          contributions: [
            "Handling Computer Programming Logic and Design (ITE 111)",
            "Handling Fundamentals of Programming (ITE 12)",
            "Handling Fundamental Computational Techniques for ITE",
          ],
          stack: ["Programming Logic", "Curriculum Delivery"],
        },
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
          stack: ["React", "Tailwind CSS", "PostgreSQL", "PHP Laravel", "Figma"],
          gallery: [
            { src: galleryImages.ocidSystem, alt: "OCID Dashboard" },
            { src: galleryImages.ocidCertificate, alt: "Internship Certificate" },
            { src: galleryImages.teamDevelopment, alt: "Team Development" },
            { src: galleryImages.teamCollaboration, alt: "Team Collaboration" },
          ],
        },
        {
          id: 2,
          role: "CEO & Co-Founder",
          date: "2024 – July 2026",
          title: "Care Guardian",
          org: "AI-Powered Eldercare Monitoring Startup",
          contributions: [
            "Strategic ideation and business model development",
            "Comprehensive market research (TAM / SAM / SOM analysis)",
            "Pitch deck creation and competitive pitching across regional events",
            "Revenue projections and government / hospital partnership planning",
          ],
          achievement: "🥈 2nd Runner-Up — DICT Caraga RPC (2025-26) | 🚀 Graduate — NavigatU TBI Incubation (Cohort 9)",
          stack: ["Python", "Node.js", "React", "Vue.js", "PostgreSQL", "IoT"],
          gallery: [
            { src: galleryImages.pitchingCompetition, alt: "University Pitching Competition" },
            { src: galleryImages.pagsanyog, alt: "University Competition" },
            { src: galleryImages.trophyRegional, alt: "Regional Trophy" },
            { src: galleryImages.trioRegional, alt: "Regional Pitch Team" },
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
        {
          id: 5,
          role: "Freelance Full-Stack Developer",
          date: "May 2026 – July 2026",
          title: "Private Company (NDA)",
          org: "Confidential (NDA)",
          contributions: [
            "Built and maintained full-stack features across frontend and backend",
            "Implemented responsive UI components and RESTful APIs",
            "Performed code reviews, debugging, and performance optimizations",
            "Deployed releases and supported production monitoring while adhering to NDA terms",
          ],
          stack: ["JavaScript", "Node.js", "Vue.js", "React", "SQL"],
        },
      ],
    };
  },
};
</script>

<style scoped>
.resume-content {
  padding: 1rem 0 4rem;
  max-width: 1600px;
  margin: 0 auto;
}

.resume-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
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

/* Shared Timeline Styles */
.education-timeline,
.experience-timeline {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-left: 2rem;
}

.timeline-rail {
  position: absolute;
  left: 0.85rem;
  top: 1rem;
  bottom: 0;
  width: 2px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.2),
    rgba(255, 255, 255, 0.05)
  );
}

.timeline-item {
  position: relative;
  display: grid;
  grid-template-columns: 7rem 1fr;
  column-gap: 1.5rem;
  align-items: start;
  opacity: 0;
  animation: fadeUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}

.timeline-node {
  position: absolute;
  left: -1.5rem; /* Adjusted for 2rem padding */
  top: 0.4rem;
  z-index: 1;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #222;
  border: 3px solid #555;
  transition: all 0.3s ease;
}

.timeline-node.node-active {
  background: #FFFFFF;
  border-color: #FFFFFF;
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.4);
}

.timeline-year {
  font-family: "Fira Code", monospace;
  font-size: 0.95rem;
  font-weight: 700;
  color: #FFFFFF;
  padding-top: 0.15rem;
  text-align: right;
  line-height: 1.4;
}

/* Muted year for non-active */
.timeline-item:not(:first-child) .timeline-year {
  color: rgba(255, 255, 255, 0.5);
}

.timeline-card {
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.timeline-card:hover {
  border-color: rgba(255, 255, 255, 0.2);
  transform: translateY(-3px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
}

/* Education Specific */
.timeline-meta {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.8rem;
}
.timeline-stage {
  color: #FFFFFF;
  font-size: 1.1rem;
  font-weight: 800;
  letter-spacing: -0.2px;
}
.timeline-label {
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.75rem;
  font-family: "Fira Code", monospace;
  text-transform: uppercase;
  letter-spacing: 2px;
}
.timeline-title {
  font-size: 1.4rem;
  font-weight: 700;
  color: #FFFFFF;
  margin-bottom: 0.4rem;
  line-height: 1.2;
}
.timeline-school {
  color: #FFFFFF;
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 1rem;
  opacity: 0.8;
}
.timeline-desc {
  color: #A0AEC0;
  font-size: 0.95rem;
  line-height: 1.6;
  text-align: justify;
}
.timeline-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-top: 1.5rem;
}
.timeline-tags .badge {
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
.timeline-tags .badge:hover {
  background: rgba(255, 255, 255, 0.1);
  color: #FFFFFF;
  border-color: rgba(255, 255, 255, 0.3);
}

/* Experience Specific */
.exp-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}
.exp-role-badge {
  background: rgba(255, 255, 255, 0.05);
  color: #FFFFFF;
  border: 1px solid rgba(255, 255, 255, 0.2);
  font-weight: 700;
  font-size: 0.75rem;
  border-radius: 8px;
  padding: 0.4rem 0.8rem;
}
.exp-title {
  margin-bottom: 0.4rem;
  font-size: 1.4rem;
  font-weight: 700;
  color: #FFFFFF;
}
.exp-org {
  color: #FFFFFF;
  opacity: 0.8;
  font-size: 1rem;
  margin-bottom: 1.5rem;
}
.exp-list {
  list-style: none;
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}
.exp-list li {
  display: flex;
  gap: 0.6rem;
  align-items: flex-start;
  font-size: 0.95rem;
  color: #E2E8F0;
  line-height: 1.5;
}
.exp-list li i {
  color: #FFFFFF;
  opacity: 0.6;
  margin-top: 4px;
  flex-shrink: 0;
  font-size: 0.75rem;
}
.exp-achievement {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  padding: 0.8rem 1rem;
  margin-bottom: 1.5rem;
  font-size: 0.9rem;
  color: #FFFFFF;
  font-weight: 500;
}
.exp-achievement i {
  color: #FFFFFF;
  font-size: 1rem;
}
.exp-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-bottom: 1rem;
}
.exp-stack .badge {
  font-family: "Fira Code", monospace;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 0.4rem 0.8rem;
  border-radius: 8px;
  color: #FFFFFF;
  font-size: 0.75rem;
  transition: all 0.3s ease;
}
.exp-stack .badge:hover {
  background: rgba(255, 255, 255, 0.1);
  color: #FFFFFF;
  border-color: rgba(255, 255, 255, 0.3);
}
.exp-gallery {
  margin-top: 1.5rem;
}
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 0.8rem;
}
.gallery-img {
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  cursor: pointer;
  transition: all 0.3s ease;
}
.gallery-img:hover {
  border-color: #FFFFFF;
  transform: scale(1.05);
  box-shadow: 0 10px 20px rgba(0,0,0,0.5);
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
  .resume-grid {
    grid-template-columns: 1fr;
    gap: 4rem;
  }
}

@media (max-width: 768px) {
  .education-timeline,
  .experience-timeline {
    padding-left: 1rem;
  }
  .timeline-rail {
    left: -0.15rem;
  }
  .timeline-node {
    left: -1.95rem;
    width: 14px;
    height: 14px;
  }
  .timeline-item {
    grid-template-columns: 1fr;
    row-gap: 0.5rem;
  }
  .timeline-year {
    text-align: left;
    margin-bottom: 0.5rem;
  }
  .timeline-card {
    padding: 1.5rem;
  }
  .timeline-title,
  .exp-title {
    font-size: 1.3rem;
  }
}
</style>
