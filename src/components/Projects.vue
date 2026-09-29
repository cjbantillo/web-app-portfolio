<template>
  <div class="projects-content">
      <p class="section-label"><i class="fas fa-folder-open"></i> Projects</p>
      <h2 class="section-title">Featured Projects</h2>
      <div class="section-divider"></div>

      <div class="projects-grid">
        <GlowCard class="project-card" v-for="p in projects" :key="p.id">
          <!-- Thumbnail Image if available -->
          <div v-if="p.image" class="project-image-wrap">
             <img :src="p.image" :alt="p.title" class="project-image clickable" @click="$emit('open-image-modal', p.image, p.title)" />
          </div>
          <!-- Otherwise Icon -->
          <div v-else class="project-icon"><i :class="p.icon"></i></div>
          
          <div class="project-content">
            <div class="project-header">
              <h3>{{ p.title }}</h3>
              <a v-if="p.link" :href="p.link" target="_blank" class="live-link" title="Visit Live Site">
                <i class="fas fa-external-link-alt"></i>
              </a>
            </div>
            <p class="project-desc">{{ p.desc }}</p>
            
            <div class="project-stack">
              <span class="badge" v-for="t in p.stack" :key="t">{{ t }}</span>
            </div>
            
            <!-- Gallery if available -->
            <div v-if="p.gallery && p.gallery.length" class="project-gallery">
              <div class="gallery-grid">
                <img
                  v-for="(img, idx) in p.gallery"
                  :key="idx"
                  :src="img.src"
                  :alt="img.alt"
                  class="gallery-thumb"
                  :style="img.style"
                  @click="$emit('open-image-modal', img.src, img.alt)"
                />
              </div>
            </div>
          </div>
        </GlowCard>
      </div>
  </div>
</template>

<script>
import GlowCard from "./GlowCard.vue";

export default {
  name: "Projects",
  components: {
    GlowCard,
  },
  emits: ["open-modal", "open-image-modal"],
  data() {
    return {
      projects: [
        {
          id: 1,
          title: "CSU Digital Academy",
          desc: "Comprehensive academic prototype system including user authentication, personalized dashboards, and profile management.",
          stack: ["System Design", "UI/UX", "Prototyping"],
          image: new URL("../assets/projects/systems/csu-digital-academy/csu-digital-academy-prototype-thesis.png", import.meta.url).href,
          gallery: [
            { src: new URL("../assets/projects/systems/csu-digital-academy/dashboard.png", import.meta.url).href, alt: "Dashboard" },
            { src: new URL("../assets/projects/systems/csu-digital-academy/sign-in.png", import.meta.url).href, alt: "Sign In" },
            { src: new URL("../assets/projects/systems/csu-digital-academy/create-account.png", import.meta.url).href, alt: "Create Account" },
            { src: new URL("../assets/projects/systems/csu-digital-academy/profile-settings.png", import.meta.url).href, alt: "Profile Settings" }
          ]
        },
        {
          id: 2,
          title: "The Unit",
          link: "https://the-unit-singularity.netlify.app/",
          desc: "Full-page website design featuring dynamic layouts and modern UI aesthetics. Built with Next.js, Tailwind CSS, and Framer Motion.",
          stack: ["Next.js", "Tailwind CSS", "Framer Motion", "Figma"],
          image: new URL("../assets/projects/websites/the_unit_fullpage.png", import.meta.url).href,
          gallery: [
            { src: new URL("../assets/projects/websites/the_unit_fullpage-hero.png", import.meta.url).href, alt: "Hero Section" },
            { src: new URL("../assets/projects/websites/the_unit_fullpage-about.png", import.meta.url).href, alt: "About Section" },
            { src: new URL("../assets/projects/websites/the_unit_fullpage-contact.png", import.meta.url).href, alt: "Contact Section" },
            { src: new URL("../assets/projects/websites/the_unit_fullpage-footer.png", import.meta.url).href, alt: "Footer Section" }
          ]
        },
        {
          id: 3,
          title: "Oddy Portfolio",
          link: "https://oddy-monton.netlify.app/",
          desc: "Video Editor & Visual Creator portfolio website tailored to highlight professional experience and creative projects.",
          stack: ["HTML", "CSS", "Vanilla JS"],
          image: new URL("../assets/projects/websites/oddy-portfolio.png", import.meta.url).href,
          gallery: [
            { src: new URL("../assets/projects/websites/oddy-portfolio-hero.png", import.meta.url).href, alt: "Hero" },
            { src: new URL("../assets/projects/websites/oddy-portfolio-projects.png", import.meta.url).href, alt: "Projects" },
            { src: new URL("../assets/projects/websites/oddy-portfolio-achievements.png", import.meta.url).href, alt: "Achievements" },
            { src: new URL("../assets/projects/websites/oddy-portfolio-contact_and_footer.png", import.meta.url).href, alt: "Contact & Footer" }
          ]
        },
        {
          id: 4,
          title: "Ken Portfolio",
          link: "https://ken-macasaol.netlify.app/",
          desc: "A highly customized portfolio blending sleek web design with a distinctive video-production aesthetic.",
          stack: ["HTML5", "Vanilla CSS", "JavaScript", "Vite"],
          image: new URL("../assets/projects/websites/ken-portfolio.png", import.meta.url).href,
          gallery: [
            { src: new URL("../assets/projects/websites/ken-portfolio-hero.png", import.meta.url).href, alt: "Hero Section" },
            { src: new URL("../assets/projects/websites/ken-portfolio-project.png", import.meta.url).href, alt: "Projects Section" },
            { src: new URL("../assets/projects/websites/ken-portfolio-graphics.png", import.meta.url).href, alt: "Graphics Section" },
            { src: new URL("../assets/projects/websites/ken-portfolio-testimonial.png", import.meta.url).href, alt: "Testimonial Section" }
          ]
        },
        {
          id: 5,
          title: "Julia Portfolio",
          link: "https://julia-salazar.netlify.app/",
          desc: "A digital experience crafted for creatives to beautifully display their stories. UI/UX: Prioritizes a clean, dynamic design with carefully curated typography, subtle hover effects, and a mobile-first approach. Tech Stack: Developed with modern HTML, custom CSS for precise styling, and JavaScript for interactive elements.",
          stack: ["HTML5", "Vanilla CSS", "JavaScript", "UI/UX"],
          image: new URL("../assets/projects/websites/julia-portfolio.png", import.meta.url).href,
          gallery: [
            { src: new URL("../assets/projects/websites/julia-portfolio-hero.png", import.meta.url).href, alt: "Hero Section" },
            { src: new URL("../assets/projects/websites/julia-portfolio-about.png", import.meta.url).href, alt: "About Section" },
            { src: new URL("../assets/projects/websites/julia-portfolio-expertise.png", import.meta.url).href, alt: "Expertise Section" },
            { src: new URL("../assets/projects/websites/julia-portfolio-footer.png", import.meta.url).href, alt: "Footer Section" }
          ]
        }
      ],
    };
  },
};
</script>

<style scoped>
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1.5rem;
}

.project-card {
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
}

.project-image-wrap {
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 1.2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  aspect-ratio: 16/9;
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
  transition: transform 0.4s ease;
}

.project-image.clickable {
  cursor: pointer;
}
.project-image.clickable:hover {
  transform: scale(1.02);
}

.project-icon {
  font-size: 1.3rem;
  color: var(--text-muted);
  margin-bottom: 0.7rem;
  transition: color 0.35s;
}

.project-content {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.project-header h3 {
  margin-bottom: 0;
  font-size: 1.2rem;
  font-weight: 700;
}

.live-link {
  color: var(--text-muted);
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.2rem;
  height: 2.2rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  transition: all 0.3s ease;
  text-decoration: none;
}

.live-link:hover {
  color: #fff;
  border-color: rgba(255, 255, 255, 0.6);
  background: rgba(255, 255, 255, 0.05);
  transform: translateY(-2px);
}

.project-desc {
  color: var(--text-secondary);
  font-size: 0.9rem;
  line-height: 1.6;
  margin-bottom: 1.2rem;
  flex-grow: 1;
}

.project-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.2rem;
}

.project-gallery {
  margin-top: 0.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 1rem;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.5rem;
}

.gallery-thumb {
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: 6px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  cursor: pointer;
  transition: all 0.3s ease;
}

.gallery-thumb:hover {
  transform: scale(1.1);
  border-color: rgba(255, 255, 255, 0.5);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
}

@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>
