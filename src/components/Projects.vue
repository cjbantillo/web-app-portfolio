<template>
  <div class="projects-content">
      <p class="section-label"><i class="fas fa-folder-open"></i> Projects</p>
      <h2 class="section-title">Featured Projects</h2>
      <div class="section-divider"></div>

      <div class="projects-grid">
        <GlowCard class="project-card" v-for="p in projects" :key="p.id">
          <!-- Thumbnail Image if available -->
          <div v-if="p.image" class="project-image-wrap">
             <img :src="p.image" :alt="p.title" class="project-image" @click="p.gallery ? null : $emit('open-image-modal', p.image, p.title)" :class="{'clickable': !p.gallery}" />
          </div>
          <!-- Otherwise Icon -->
          <div v-else class="project-icon"><i :class="p.icon"></i></div>
          
          <div class="project-content">
            <h3>{{ p.title }}</h3>
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
          desc: "Full-page website design featuring dynamic layouts and modern UI aesthetics.",
          stack: ["Web Design", "Frontend"],
          image: new URL("../assets/projects/websites/the_unit_fullpage.png", import.meta.url).href,
        },
        {
          id: 3,
          title: "Oddy Portfolio",
          desc: "Personal portfolio website tailored to highlight professional experience and creative projects.",
          stack: ["Vue 3", "Web Design"],
          image: new URL("../assets/projects/websites/oddy-portfolio.png", import.meta.url).href,
        },
        {
          id: 4,
          title: "Ken Portfolio",
          desc: "Sleek and modern portfolio website designed for a creative professional.",
          stack: ["Web Design", "UI/UX"],
          image: new URL("../assets/projects/websites/ken-portfolio.png", import.meta.url).href,
        },
        {
          id: 5,
          title: "Julia Portfolio",
          desc: "Elegant personal portfolio website focused on clean typography and imagery.",
          stack: ["Web Design", "Frontend"],
          image: new URL("../assets/projects/websites/julia-portfolio.png", import.meta.url).href,
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

.project-content h3 {
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
  font-weight: 700;
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
