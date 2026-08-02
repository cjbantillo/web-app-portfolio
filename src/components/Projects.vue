<template>
  <section id="projects" class="section">
    <div class="container">
      <p class="section-label"><i class="fas fa-folder-open"></i> Projects</p>
      <h2 class="section-title">Featured Projects</h2>
      <div class="section-divider"></div>

      <div class="projects-grid">
        <GlowCard class="project-card" v-for="p in projects" :key="p.id">
          <div class="project-icon"><i :class="p.icon"></i></div>
          <h3>{{ p.title }}</h3>
          <p class="project-desc">{{ p.desc }}</p>
          <div class="project-stack">
            <span class="badge" v-for="t in p.stack" :key="t">{{ t }}</span>
          </div>
        </GlowCard>
      </div>
    </div>
  </section>
</template>

<script>
import GlowCard from "./GlowCard.vue";

export default {
  name: "Projects",
  components: {
    GlowCard,
  },
  data() {
    return {
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
    };
  },
};
</script>

<style scoped>
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.15rem;
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

@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>
