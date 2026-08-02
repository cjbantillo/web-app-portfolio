<template>
  <section id="about" class="section about-section">
    <div class="container">
      <p class="section-label"><i class="fas fa-user"></i> About</p>
      <h2 class="section-title">About Me</h2>
      <div class="section-divider"></div>

      <div class="about-grid">
        <div class="about-text">
          <p>
            I graduated with a Bachelor of Science in Information Technology
            from Caraga State University on June 19, 2026, and I'm driven by
            continuous learning and building real-world systems that make an
            impact.
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
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      aboutHighlights: [
        {
          icon: "fas fa-rocket",
          title: "Startup Founder",
          desc: "Founded & led Care Guardian — an AI-powered eldercare monitoring startup, achieving 2nd Runner-Up at the DICT Caraga Regional Pitching Competition & graduating from NavigatU TBI Cohort 9.",
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
    };
  },
};
</script>

<style scoped>
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
  gap: 1.15rem;
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

@media (max-width: 768px) {
  .about-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}
</style>
