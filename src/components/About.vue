<template>
  <div class="about-content">
    <div class="about-text">
      <!-- Image floated right inside the text container -->
      <img src="/src/assets/img/IMG_0436.jpg" alt="Christian James Bantillo" class="about-avatar" />
      
      <p>
        I am a driven technology professional and educator with a Bachelor of Science in Information Technology from Caraga State University (Class of 2026). Currently serving as a <strong>Lecturer</strong>, I am deeply committed to tech education, where I mentor aspiring developers and share my passion for continuous learning and the architecture of real-world systems.
      </p>
      <p>
        My technical expertise spans modern <strong>frontend development</strong> and scalable <strong>full-stack engineering</strong>. I thrive in dynamic environments that require rapid prototyping, the strategic integration of AI tools, and seamless collaboration with talented cross-functional teams to deliver impactful solutions under tight deadlines.
      </p>
      <p>
        My journey is deeply rooted in an entrepreneurial mindset. Previously, I founded <strong>Care Guardian</strong>, an AI-powered eldercare monitoring startup. Leading this venture, I successfully guided our team to secure 2nd Runner-Up at the highly competitive DICT Caraga Regional Pitching Competition and proudly graduated from the NavigatU TBI Cohort 9 accelerator program.
      </p>
      <p>
        Whether I am in the classroom breaking down complex software paradigms, or in the editor architecting elegant digital solutions, my core mission remains the same: to leverage technology to solve meaningful problems and empower others to do the same.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>

<style scoped>
.about-content {
  width: 100%;
}

.about-text {
  /* Removed max-width to allow text to fill the massive glass card */
  width: 100%;
}

.about-avatar {
  float: right;
  width: 220px; /* Made slightly larger again to match the huge modal */
  height: 220px;
  object-fit: cover;
  border-radius: 12px;
  margin-left: 3rem;
  margin-bottom: 2rem;
}

.about-text p {
  color: #E2E8F0;
  font-weight: 400;
  margin-bottom: 1.5rem;
  font-size: 1.25rem; /* Increased size to comfortably fill the large layout */
  line-height: 1.6;
  font-family: "Inter", sans-serif;
  text-align: justify; /* Forces text to fit perfectly into a rectangle shape */
  transition: color 0.35s;
}

.about-text p:last-child {
  margin-bottom: 0;
}

.about-text strong {
  color: #FFFFFF;
  font-weight: 700; /* Bold for emphasis, not 900 */
  transition: color 0.35s;
}

@media (max-width: 768px) {
  .about-avatar {
    float: none;
    display: block;
    margin: 0 auto 2rem auto;
  }
  .about-text {
    text-align: left;
  }
}
</style>
