<template>
  <section class="hero is-visible">
    <div class="hero-background">
      <img src="/src/assets/_DSC7428.JPG" alt="Hero Background" class="hero-bg-image" />
      <div class="hero-overlay"></div>
    </div>
    
    <div class="container hero-inner" v-show="!isModalOpen">
      <div class="right-content">
        <!-- Text Card -->
        <div class="text-card anim-fade-up">
          <p class="hero-eyebrow">
            Software Developer & Lecturer
          </p>
          <h1 class="hero-name">
            Christian James Bantillo
          </h1>
          <p class="hero-desc">
            Building elegant digital solutions with cutting-edge technology and creative problem-solving. I am a recent graduate of BSIT at Caraga State University, passionate about creating seamless and efficient web applications.
          </p>
        </div>
        
        <!-- Global Navigation Pill -->
        <div class="nav-pill anim-fade-up anim-delay-1">
          <button class="nav-btn" @click="$emit('open-modal', 'about')">About</button>
          <button class="nav-btn" @click="$emit('open-modal', 'resume')">Resume</button>
          <button class="nav-btn" @click="$emit('open-modal', 'projects')">Projects</button>
          <button class="nav-btn" @click="$emit('open-modal', 'expertise')">Expertise</button>
          <button class="nav-btn" @click="$emit('open-modal', 'contact')">Contact</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Hero",
  props: {
    isModalOpen: {
      type: Boolean,
      default: false
    }
  },
  emits: ['open-modal'],
};
</script>

<style scoped>
.hero {
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding-right: 1vw;
  position: relative;
  overflow: hidden;
}

.logo {
  position: absolute;
  top: 2rem;
  left: 2rem;
  font-family: "Inter", sans-serif;
  font-size: 2rem;
  font-weight: 700;
  color: #FFFFFF;
  z-index: 10;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.hero-bg-image {
  position: absolute;
  top: 0;
  /* Make the image wider than the screen and shift it left */
  left: -15%;
  width: 115%;
  height: 100%;
  object-fit: cover;
  /* Center vertically, left horizontally */
  object-position: right center;
  z-index: -2;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.6) 100%);
  z-index: -1;
}

.hero-inner {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  position: relative;
  z-index: 1;
}

.right-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 600px;
}

/* Glassmorphism Base styling */
.text-card, .nav-pill {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.text-card {
  padding: 2.5rem;
  border-radius: 16px;
  text-align: left;
}

.hero-eyebrow {
  font-family: "Inter", sans-serif;
  font-size: 1.1rem;
  font-weight: 600;
  color: #FFFFFF;
  margin-bottom: 0.5rem;
}

.hero-name {
  font-family: "Inter", sans-serif;
  font-size: 2.8rem;
  font-weight: 700;
  color: #FFFFFF;
  line-height: 1.1;
  margin-bottom: 1.2rem;
}

.hero-desc {
  font-family: "Inter", sans-serif;
  font-size: 1.1rem;
  color: #E2E8F0;
  line-height: 1.5;
}

.nav-pill {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  padding: 1.2rem 2rem;
  border-radius: 9999px; /* Pill shape */
}

.nav-btn {
  background: transparent;
  border: none;
  color: #FFFFFF;
  font-family: "Inter", sans-serif;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: color 0.2s ease, transform 0.2s ease;
}

.nav-btn:hover {
  color: #E2E8F0;
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .hero {
    align-items: center;
    padding-right: 0;
  }
  .hero-inner {
    justify-content: center;
    padding: 0 1.5rem;
  }
  .right-content {
    max-width: 100%;
  }
  .hero-name {
    font-size: 2rem;
  }
  .nav-pill {
    flex-wrap: wrap;
    gap: 1rem;
    border-radius: 16px; /* Adjust pill on mobile */
  }
}
</style>

