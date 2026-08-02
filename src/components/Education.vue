<template>
  <section id="education" class="section education-section">
    <div class="container">
      <div>
        <p class="section-label">
          <i class="fas fa-graduation-cap"></i> Education
        </p>
        <h2 class="section-title">Academic Journey</h2>
      </div>
      <div class="section-divider"></div>

      <div class="education-timeline">
        <div class="timeline-rail" aria-hidden="true"></div>

        <article class="timeline-item" v-for="item in education" :key="item.id">
          <div class="timeline-node" aria-hidden="true"></div>

          <div class="timeline-year">{{ item.period }}</div>

          <div class="timeline-card card">
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
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Education",
  data() {
    return {
      education: [
        {
          id: 1,
          stage: "Grade 9",
          label: "ALS",
          period: "2018",
          title: "Computer Systems Servicing",
          school: "Agusan National High School",
          description:
            "Built foundational knowledge in computer hardware, troubleshooting, and system maintenance.",
          topics: ["Hardware", "Troubleshooting", "System Maintenance"],
        },
        {
          id: 2,
          stage: "Grade 10",
          label: "ALS",
          period: "2019",
          title: "Basic Electronics",
          school: "Agusan National High School",
          description:
            "Expanded my technical background through the study of electronic components, circuits, and related technologies.",
          topics: ["Electronics", "Circuits", "Components"],
        },
        {
          id: 3,
          stage: "Senior High School",
          label: "STEM",
          period: "2020 – 2021",
          title: "STEM Strand",
          school: "Senior High School",
          description:
            "Explored graphic design and was introduced to web development through HTML, CSS, and JavaScript, which strengthened my passion for software development.",
          topics: ["STEM", "Graphic Design", "HTML", "CSS", "JavaScript"],
        },
        {
          id: 4,
          stage: "College",
          label: "BSIT",
          period: "2021 – 2026",
          title: "Bachelor of Science in Information Technology",
          school: "Caraga State University",
          description:
            "Formally began my programming journey with C and have continued expanding my skills in software development, web technologies, and problem-solving. Graduated June 19, 2026.",
          topics: ["C Programming", "Software Development", "Web Technologies"],
        },
      ],
    };
  },
};
</script>

<style scoped>
.education-section {
  position: relative;
  overflow: hidden;
}

.education-section::before {
  content: "";
  position: absolute;
  inset: 0;
  background:
    radial-gradient(
      circle at 12% 14%,
      rgba(34, 197, 94, 0.08),
      transparent 22%
    ),
    radial-gradient(
      circle at 82% 22%,
      rgba(59, 130, 246, 0.08),
      transparent 20%
    );
  pointer-events: none;
}

.education-timeline {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1.15rem;
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
  grid-template-columns: 1.1rem 6.5rem 1fr;
  column-gap: 0.9rem;
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

.timeline-year {
  font-family: "Fira Code", monospace;
  font-size: 0.76rem;
  color: #22c55e;
  padding-top: 0.42rem;
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

.timeline-card:hover {
  transform: none;
  box-shadow: none;
  border-color: transparent;
}

.timeline-meta {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  margin-bottom: 0.45rem;
}

.timeline-stage {
  color: var(--text-primary);
  font-size: 1rem;
  font-weight: 700;
}

.timeline-label {
  color: var(--text-muted);
  font-size: 0.72rem;
  font-family: "Fira Code", monospace;
  text-transform: uppercase;
  letter-spacing: 0.12em;
}

.timeline-title {
  margin-bottom: 0.2rem;
  font-size: 1rem;
}

.timeline-school {
  color: var(--text-secondary);
  font-size: 0.82rem;
  margin-bottom: 0.45rem;
}

.timeline-desc {
  color: var(--text-secondary);
  font-size: 0.9rem;
  line-height: 1.7;
  max-width: 48rem;
}

.timeline-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  margin-top: 0.8rem;
}

@media (max-width: 768px) {
  .education-timeline {
    padding-left: 1.35rem;
  }

  .timeline-rail {
    left: calc(2.31rem - 1px);
  }

  .timeline-item {
    grid-template-columns: 1.1rem 1fr;
    row-gap: 0.3rem;
  }

  .timeline-year {
    grid-column: 2;
    padding-top: 0;
    margin-bottom: 0.25rem;
  }

  .timeline-card {
    grid-column: 2;
  }

  .timeline-stage {
    font-size: 0.95rem;
  }

  .timeline-meta {
    flex-wrap: wrap;
  }

  .timeline-desc {
    font-size: 0.88rem;
  }
}
</style>
