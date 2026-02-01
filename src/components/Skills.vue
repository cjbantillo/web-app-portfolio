<template>
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
            <span class="badge" v-for="s in cat.skills" :key="s">{{ s }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Skills",
  data() {
    return {
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
    };
  },
};
</script>

<style scoped>
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

@media (max-width: 768px) {
  .skills-grid {
    grid-template-columns: 1fr;
  }
}
</style>
