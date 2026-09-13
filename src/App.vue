<template>
  <div class="app">
    <div class="ambient-orbs" aria-hidden="true">
      <div class="orb orb-1"></div>
      <div class="orb orb-2"></div>
      <div class="orb orb-3"></div>
    </div>

    <!-- Main Full-Screen Hero View -->
    <Hero :isModalOpen="activeModal !== null" @open-modal="activeModal = $event" />

    <!-- Global Modal Navbar (Only visible when a modal is open) -->
    <Transition name="fade">
      <header class="modal-navbar" v-if="activeModal !== null">
        <a href="#" class="nav-brand" @click.prevent="activeModal = null">{CJB}</a>
        <nav class="nav-menu">
          <a href="#" :class="{ active: activeModal === 'about' }" @click.prevent="activeModal = 'about'">About</a>
          <a href="#" :class="{ active: activeModal === 'education' }" @click.prevent="activeModal = 'education'">Education</a>
          <a href="#" :class="{ active: activeModal === 'experience' }" @click.prevent="activeModal = 'experience'">Experience</a>
          <a href="#" :class="{ active: activeModal === 'projects' }" @click.prevent="activeModal = 'projects'">Projects</a>
          <a href="#" :class="{ active: activeModal === 'skills' }" @click.prevent="activeModal = 'skills'">Skills</a>
          <a href="#" :class="{ active: activeModal === 'certificates' }" @click.prevent="activeModal = 'certificates'">Certificates</a>
          <a href="#" class="hire-me" :class="{ active: activeModal === 'contact' }" @click.prevent="activeModal = 'contact'">Contact!</a>
        </nav>
        <div class="nav-social">
          <a href="https://facebook.com" target="_blank" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
          <a href="https://linkedin.com" target="_blank" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
          <a href="https://github.com" target="_blank" aria-label="GitHub"><i class="fab fa-github"></i></a>
        </div>
      </header>
    </Transition>

    <!-- Section Modals -->
    <Transition name="fade">
      <ModalWrapper v-if="activeModal === 'about'" title="About" @close="activeModal = null">
        <About />
      </ModalWrapper>
    </Transition>

    <Transition name="fade">
      <ModalWrapper v-if="activeModal === 'education'" title="Education" @close="activeModal = null">
        <Education />
      </ModalWrapper>
    </Transition>

    <Transition name="fade">
      <ModalWrapper v-if="activeModal === 'experience'" title="Experience" @close="activeModal = null">
        <Experience @open-image-modal="openImageModal" />
      </ModalWrapper>
    </Transition>

    <Transition name="fade">
      <ModalWrapper v-if="activeModal === 'projects'" title="Projects" @close="activeModal = null">
        <Projects />
      </ModalWrapper>
    </Transition>

    <Transition name="fade">
      <ModalWrapper v-if="activeModal === 'skills'" title="Skills" @close="activeModal = null">
        <Skills />
      </ModalWrapper>
    </Transition>

    <Transition name="fade">
      <ModalWrapper v-if="activeModal === 'certificates'" title="Certificate" @close="activeModal = null">
        <Certifications @open-cert-modal="openCertModal" />
      </ModalWrapper>
    </Transition>

    <Transition name="fade">
      <ModalWrapper v-if="activeModal === 'contact'" title="Contact" @close="activeModal = null">
        <Contact />
      </ModalWrapper>
    </Transition>

    <!-- Global Image/Cert Modals (Stacked on top) -->
    <ImageModal
      :show="imageModal.show"
      :src="imageModal.src"
      :alt="imageModal.alt"
      @close="closeImageModal"
    />
    <CertificateModal
      :show="certModal.show"
      :src="certModal.src"
      :title="certModal.title"
      :type="certModal.type"
      @close="closeCertModal"
    />
  </div>
</template>

<script>
import Hero from "./components/Hero.vue";
import About from "./components/About.vue";
import Education from "./components/Education.vue";
import Experience from "./components/Experience.vue";
import Projects from "./components/Projects.vue";
import Skills from "./components/Skills.vue";
import Certifications from "./components/Certifications.vue";
import Contact from "./components/Contact.vue";
import ImageModal from "./components/ImageModal.vue";
import CertificateModal from "./components/CertificateModal.vue";
import ModalWrapper from "./components/ModalWrapper.vue";
// Navbar, Footer, and MiniGame are removed from this layout

export default {
  name: "App",
  components: {
    Hero,
    About,
    Education,
    Experience,
    Projects,
    Skills,
    Certifications,
    Contact,
    ImageModal,
    CertificateModal,
    ModalWrapper,
  },

  data() {
    return {
      activeModal: null,
      imageModal: {
        show: false,
        src: "",
        alt: "",
      },
      certModal: {
        show: false,
        src: "",
        title: "",
        type: "image",
      },
    };
  },

  methods: {
    openImageModal(src, alt) {
      this.imageModal = { show: true, src, alt };
    },
    closeImageModal() {
      this.imageModal = { show: false, src: "", alt: "" };
    },
    openCertModal(cert) {
      if (!cert || !cert.file) return;
      const ext = cert.file.split(".").pop()?.toLowerCase();
      const type = ext === "pdf" ? "pdf" : "image";
      this.certModal = {
        show: true,
        src: cert.file,
        title: cert.title,
        type,
      };
    },
    closeCertModal() {
      this.certModal = { show: false, src: "", title: "", type: "image" };
    },
  },
};
</script>

<!-- ══════════════════════════════════════════════════════════
     SCOPED STYLES
     ══════════════════════════════════════════════════════════ -->
<style scoped>
/* Global App Styles */
.app {
  min-height: 100vh;
  position: relative;
  transition:
    background-color 0.3s ease,
    color 0.3s ease;
  background: var(--bg-primary);
  color: var(--text-primary);
}

/* Ambient Orbs */
.ambient-orbs {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  z-index: 0;
  pointer-events: none;
}

.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(120px);
  opacity: 0.4;
  animation: floatOrb 20s infinite alternate ease-in-out;
}

.orb-1 {
  width: 40vw;
  height: 40vw;
  background: rgba(34, 197, 94, 0.15); /* Green accent */
  top: -10vw;
  left: -10vw;
}

.orb-2 {
  width: 35vw;
  height: 35vw;
  background: rgba(59, 130, 246, 0.15); /* Blue accent */
  bottom: -10vw;
  right: -5vw;
  animation-delay: -5s;
  animation-duration: 25s;
}

.orb-3 {
  width: 30vw;
  height: 30vw;
  background: rgba(168, 85, 247, 0.12); /* Purple accent */
  top: 40vh;
  left: 50vw;
  animation-delay: -10s;
  animation-duration: 30s;
}



@keyframes floatOrb {
  0% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(3vw, -5vh) scale(1.1);
  }
  66% {
    transform: translate(-2vw, 4vh) scale(0.9);
  }
  100% {
    transform: translate(1vw, -2vh) scale(1.05);
  }
}

/* Modal Navbar (Visible only when modal is open) */
.modal-navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 4rem;
  z-index: 1001; /* Sit above modal overlay (1000) */
}

.modal-navbar .nav-brand {
  font-family: "Inter", sans-serif;
  font-size: 2rem;
  font-weight: 700;
  color: #FFFFFF;
  text-decoration: none;
}

.modal-navbar .nav-menu {
  display: flex;
  gap: 2.2rem;
  align-items: center;
}

.modal-navbar .nav-menu a {
  font-family: "Inter", sans-serif;
  font-size: 1.05rem;
  font-weight: 500;
  color: #E2E8F0;
  text-decoration: none;
  position: relative;
  padding-bottom: 0.35rem;
  transition: color 0.3s ease;
}

.modal-navbar .nav-menu a:hover,
.modal-navbar .nav-menu a.active {
  color: #FFFFFF;
}

/* Green underline on hover and active */
.modal-navbar .nav-menu a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0%;
  height: 2px;
  background-color: #00ff88;
  transition: width 0.3s ease;
}

.modal-navbar .nav-menu a:hover::after,
.modal-navbar .nav-menu a.active::after {
  width: 100%;
}

.modal-navbar .nav-menu .hire-me {
  color: #00ff88;
  font-weight: 600;
}

.modal-navbar .nav-menu .hire-me:hover,
.modal-navbar .nav-menu .hire-me.active {
  color: #33ff99;
}

.modal-navbar .nav-menu .hire-me::after {
  display: none; /* No underline for the highlight button */
}

.modal-navbar .nav-social {
  display: flex;
  gap: 0.8rem;
}

.modal-navbar .nav-social a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  color: #FFFFFF;
  text-decoration: none;
  transition: all 0.3s ease;
}

.modal-navbar .nav-social a:hover {
  background: rgba(255, 255, 255, 0.25);
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .modal-navbar {
    padding: 1.5rem;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
  }
  .modal-navbar .nav-social {
    display: none;
  }
}

/* Image Modal */
.image-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  padding: 2rem;
}

.modal-content {
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
}

.modal-content img {
  max-width: 100%;
  max-height: 90vh;
  object-fit: contain;
  border-radius: 8px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
}

.modal-close {
  position: absolute;
  top: -3rem;
  right: 0;
  background: none;
  border: none;
  color: #fff;
  font-size: 2rem;
  cursor: pointer;
  padding: 0.5rem;
  transition: transform 0.2s;
}

.modal-close:hover {
  transform: scale(1.2);
}

/* Certificate Modal */
.cert-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10001;
  padding: 2rem;
}

.cert-modal-content {
  position: relative;
  background: var(--bg-primary);
  border: 1px solid var(--border);
  border-radius: 12px;
  width: min(980px, 95vw);
  max-height: 90vh;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.45);
}

.cert-modal-title {
  margin: 0;
  font-size: 1rem;
  color: var(--text-primary);
}

.cert-viewer {
  width: 100%;
  flex: 1;
  min-height: 50vh;
  border: 1px solid var(--border);
  border-radius: 10px;
  background: var(--bg-secondary);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.cert-viewer iframe {
  width: 100%;
  height: 70vh;
  border: none;
}

.cert-viewer img {
  width: 100%;
  height: auto;
  max-height: 70vh;
  object-fit: contain;
}

.cert-download {
  align-self: flex-end;
  font-size: 0.8rem;
  color: var(--text-secondary);
  text-decoration: none;
  transition: color 0.25s;
}

.cert-download:hover {
  color: var(--text-primary);
}
</style>
