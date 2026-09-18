<template>
  <div class="app">
    <div class="ambient-orbs" aria-hidden="true">
      <div class="orb orb-1"></div>
      <div class="orb orb-2"></div>
      <div class="orb orb-3"></div>
    </div>

    <!-- Global Header acts as Home/Close + Nav -->
    <header class="global-header" :class="{ 'fade-out': modalScrollTop > 50 }" v-show="activeModal !== 'contact'">
      <a href="#" class="global-logo" @click.prevent="activeModal = null">
        {{ activeModal ? activeModal.charAt(0).toUpperCase() + activeModal.slice(1) : '>_' }}
      </a>

      <!-- Global Modal Navigation -->
      <nav class="global-nav" v-show="activeModal">
        <button class="nav-item" @click="activeModal = null">Home</button>
        <button class="nav-item" v-if="activeModal !== 'about'" @click="activeModal = 'about'">About</button>
        <button class="nav-item" v-if="activeModal !== 'resume'" @click="activeModal = 'resume'">Resume</button>
        <button class="nav-item" v-if="activeModal !== 'projects'" @click="activeModal = 'projects'">Projects</button>
        <button class="nav-item" v-if="activeModal !== 'expertise'" @click="activeModal = 'expertise'">Expertise</button>
        <button class="nav-item" v-if="activeModal !== 'contact'" @click="activeModal = 'contact'">Contacts</button>
      </nav>
    </header>

    <!-- Main Full-Screen Hero View -->
    <Hero :isModalOpen="activeModal !== null" @open-modal="activeModal = $event" />



    <!-- Section Modals -->
    <Transition name="fade">
      <ModalWrapper v-if="activeModal === 'about'" title="About" @close="activeModal = null" @scroll="modalScrollTop = $event">
        <About @open-modal="activeModal = $event" />
      </ModalWrapper>
    </Transition>

    <Transition name="fade">
      <ModalWrapper v-if="activeModal === 'resume'" title="Resume" @close="activeModal = null" @scroll="modalScrollTop = $event">
        <Resume @open-image-modal="openImageModal" @open-modal="activeModal = $event" />
      </ModalWrapper>
    </Transition>

    <Transition name="fade">
      <ModalWrapper v-if="activeModal === 'projects'" title="Projects" @close="activeModal = null" @scroll="modalScrollTop = $event">
        <Projects @open-modal="activeModal = $event" />
      </ModalWrapper>
    </Transition>

    <Transition name="fade">
      <ModalWrapper v-if="activeModal === 'expertise'" @close="activeModal = null" @scroll="modalScrollTop = $event">
        <Expertise @open-cert-modal="openCertModal" @open-modal="activeModal = $event" />
      </ModalWrapper>
    </Transition>

    <Transition name="fade">
      <ModalWrapper v-if="activeModal === 'contact'"  @close="activeModal = null" @scroll="modalScrollTop = $event">
        <Contact @open-modal="activeModal = $event" />
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
import Resume from "./components/Resume.vue";
import Projects from "./components/Projects.vue";
import Expertise from "./components/Expertise.vue";
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
    Resume,
    Projects,
    Expertise,
    Contact,
    ImageModal,
    CertificateModal,
    ModalWrapper,
  },

  data() {
    return {
      activeModal: null,
      modalScrollTop: 0,
      imageModal: { show: false, src: "", alt: "" },
      certModal: {
        show: false,
        src: "",
        title: "",
        issuer: "",
        date: "",
        description: "",
      },
    };
  },
  watch: {
    activeModal() {
      this.modalScrollTop = 0; // Reset scroll tracking when modal changes
    }
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

/* Global Header */
.global-header {
  position: fixed;
  top: 2.5rem;
  left: 3rem;
  right: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10000;
  transition: opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1), transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
}

.global-header.fade-out {
  opacity: 0;
  transform: translateY(-15px);
  pointer-events: none;
}

/* Global Logo */
.global-logo {
  font-family: "Inter", sans-serif;
  font-weight: 800;
  font-size: 4rem;
  color: #FFFFFF;
  text-decoration: none;
  letter-spacing: -1px;
  line-height: 1;
  transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), color 0.35s;
}

.global-logo:hover {
  transform: scale(1.05);
  opacity: 0.8;
}

/* Global Navigation in Modals */
.global-nav {
  display: flex;
  gap: 2.5rem;
}

.global-nav .nav-item {
  background: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.9);
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  padding: 0;
  transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), color 0.3s ease;
  transform-origin: center;
}

.global-nav .nav-item:hover {
  color: #fff;
  transform: scale(1.45);
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
