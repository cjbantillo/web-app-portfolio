<template>
  <section class="hero">
    <div class="hero-background">
      <Squares
        v-if="!isLight"
        class="squares-dark"
        direction="diagonal"
        :speed="0.2"
        :squareSize="40"
        borderColor="rgba(255, 255, 255, 0.08)"
        hoverFillColor="rgba(255, 255, 255, 0.12)"
        :noGradient="true"
      />
      <Squares
        v-if="isLight"
        class="squares-light"
        direction="diagonal"
        :speed="0.2"
        :squareSize="40"
        borderColor="rgba(0, 0, 0, 0.15)"
        hoverFillColor="rgba(0, 0, 0, 0.08)"
        :noGradient="true"
      />
    </div>
    <div class="container hero-inner">
      <div class="hero-content">
        <p class="hero-eyebrow anim-fade-up">
          Software Developer & Entrepreneur
        </p>
        <h1 class="hero-name anim-fade-up anim-delay-1">
          Christian James<br />M. Bantillo
        </h1>
        <p class="hero-sub anim-fade-up anim-delay-2">
          <span class="typed-text">{{ typeValue }}</span>
          <span class="cursor" :class="{ typing: typeStatus }">&nbsp;</span>
        </p>
        <p class="hero-desc anim-fade-up anim-delay-3">
          Building elegant digital solutions with cutting-edge technology and
          creative problem-solving. Currently graduating BSIT at Caraga State
          University.
        </p>
        <div class="hero-actions anim-fade-up anim-delay-4">
          <a href="#contact" class="btn btn-cta"
            ><i class="fas fa-envelope"></i> Get in Touch</a
          >
          <a href="#projects" class="btn btn-outline"
            ><i class="fas fa-folder-open"></i> View Work</a
          >
          <a
            href="https://the-unit-singularity.netlify.app/"
            class="btn btn-outline"
            target="_blank"
            rel="noopener"
            ><i class="fas fa-terminal"></i> The Unit Singularity</a
          >
        </div>
      </div>
      <div class="hero-portrait anim-fade-up anim-delay-2">
        <img
          src="/src/assets/img/IMG_0436.jpg"
          alt="Christian James M. Bantillo"
        />
      </div>

      <div class="hero-stats anim-fade-up anim-delay-5">
        <div class="stat" v-for="s in heroStats" :key="s.label">
          <span class="stat-value">{{ s.value }}</span>
          <span class="stat-label">{{ s.label }}</span>
        </div>
      </div>
    </div>

    <div class="hero-bottom-rule"></div>
  </section>
</template>

<script>
import Squares from "./Squares.vue";

export default {
  name: "Hero",
  components: {
    Squares,
  },
  props: {
    isLight: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      typeValue: "",
      typeStatus: false,
      displayTextArray: [
        "Full-Stack Developer",
        "Creative Problem Solver",
        "Tech Innovator",
        "Video Editor & Designer",
        "Always Upskilling",
      ],
      typingSpeed: 100,
      erasingSpeed: 50,
      newTextDelay: 2000,
      displayTextArrayIndex: 0,
      charIndex: 0,
      heroStats: [
        { value: "4+", label: "Years Experience" },
        { value: "12+", label: "Certifications" },
        { value: "2nd", label: "Regional Runner-Up" },
      ],
    };
  },
  created() {
    setTimeout(this.typeText, this.newTextDelay + 200);
  },
  methods: {
    typeText() {
      if (this.charIndex < this.displayTextArray[this.displayTextArrayIndex].length) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue += this.displayTextArray[this.displayTextArrayIndex].charAt(this.charIndex);
        this.charIndex += 1;
        setTimeout(this.typeText, this.typingSpeed);
      } else {
        this.typeStatus = false;
        setTimeout(this.eraseText, this.newTextDelay);
      }
    },
    eraseText() {
      if (this.charIndex > 0) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue = this.displayTextArray[this.displayTextArrayIndex].substring(0, this.charIndex - 1);
        this.charIndex -= 1;
        setTimeout(this.eraseText, this.erasingSpeed);
      } else {
        this.typeStatus = false;
        this.displayTextArrayIndex += 1;
        if (this.displayTextArrayIndex >= this.displayTextArray.length) {
          this.displayTextArrayIndex = 0;
        }
        setTimeout(this.typeText, this.typingSpeed + 1000);
      }
    },
  },
};
</script>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5rem 0 3rem;
  position: relative;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  opacity: 0.8;
}

.squares-dark {
  display: block;
}

.squares-light {
  display: none;
}

.hero-inner {
  width: 100%;
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 3rem;
  align-items: center;
  position: relative;
  z-index: 1;
  pointer-events: none;
}

.hero-inner > * {
  pointer-events: auto;
}

.hero-bottom-rule {
  position: relative;
  z-index: 1;
}
.hero-content {
  pointer-events: none;
}

.hero-content > * {
  pointer-events: none;
}

.hero-content a,
.hero-content button {
  pointer-events: auto;
}

.hero-inner .hero-eyebrow {
  font-family: "Fira Code", monospace;
  font-size: 0.72rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: var(--text-muted);
  margin-bottom: 1rem;
  transition: color 0.35s;
}

.hero-inner .hero-name {
  margin-bottom: 1.1rem;
  background: linear-gradient(
    135deg,
    var(--text-primary) 0%,
    var(--text-secondary) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-inner .hero-sub {
  font-family: "Fira Code", monospace;
  font-size: 1.15rem;
  color: var(--accent);
  margin-bottom: 1.1rem;
  transition: color 0.35s;
  display: flex;
  align-items: center;
  min-height: 1.5rem;
}

.hero-sub .cursor {
  display: inline-block;
  width: 3px;
  background-color: var(--accent);
  animation: blink 1s infinite;
  margin-left: 0.1rem;
}

.hero-sub .cursor.typing {
  animation: none;
}

@keyframes blink {
  49% {
    background-color: var(--accent);
  }
  50% {
    background-color: transparent;
  }
  99% {
    background-color: transparent;
  }
}

.hero-inner .hero-desc {
  font-size: 1.05rem;
  color: var(--text-secondary);
  max-width: 540px;
  line-height: 1.75;
  margin-bottom: 2rem;
  transition: color 0.35s;
}

.hero-inner .hero-actions {
  display: flex;
  gap: 0.85rem;
  flex-wrap: wrap;
  margin-bottom: 3.5rem;
}

.hero-inner .hero-portrait {
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
}

.hero-inner .hero-portrait img {
  width: 280px;
  height: 280px;
  object-fit: cover;
  border-radius: 12px;
  border: 1px solid var(--border);
  box-shadow: var(--shadow-card);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease,
    border-color 0.3s ease;
  pointer-events: auto;
}

.hero-inner .hero-portrait img:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-card-hover);
  border-color: var(--border-hover);
}
.hero-stats {
  display: flex;
  align-items: center;
  gap: 2.5rem;
  flex-wrap: wrap;
  margin-top: 1.5rem;
  pointer-events: none;
}
.stat {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}
.stat-value {
  font-family: "Fira Code", monospace;
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--text-primary);
  transition: color 0.35s;
}
.stat-label {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--text-muted);
  transition: color 0.35s;
}

.hero-bottom-rule {
  width: 100%;
  max-width: 1140px;
  height: 1px;
  background: var(--border);
  margin-top: 3rem;
  transition: background 0.35s;
}

@media (max-width: 768px) {
  .hero {
    padding: 4rem 0 2.5rem;
  }
  .hero-inner {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  .hero-portrait img {
    width: 220px;
    height: 220px;
  }
  .hero-stats {
    gap: 2rem;
  }
}

@media (max-width: 480px) {
  .hero-actions {
    flex-direction: column;
    align-items: flex-start;
  }
  .hero-portrait img {
    width: 200px;
    height: 200px;
  }
  .hero-stats {
    flex-direction: column;
    gap: 1rem;
  }
}
</style>

<style>
/* Unscoped styles for theme-based square visibility */
.app.light .squares-dark,
:root.light .squares-dark {
  display: none !important;
}

.app.light .squares-light,
:root.light .squares-light {
  display: block !important;
}
</style>
