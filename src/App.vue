<template>
  <div class="app" :class="{ light: isLight }">
    <Navbar :isLight="isLight" @toggle-theme="toggleTheme" />
    <Hero :isLight="isLight" />
    <About />
    <Education />
    <Experience @open-image-modal="openImageModal" />
    <Projects />
    <Skills />
    <Certifications @open-cert-modal="openCertModal" />
    <Contact />
    <Footer />

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
import Navbar from "./components/Navbar.vue";
import Hero from "./components/Hero.vue";
import About from "./components/About.vue";
import Education from "./components/Education.vue";
import Experience from "./components/Experience.vue";
import Projects from "./components/Projects.vue";
import Skills from "./components/Skills.vue";
import Certifications from "./components/Certifications.vue";
import Contact from "./components/Contact.vue";
import Footer from "./components/Footer.vue";
import ImageModal from "./components/ImageModal.vue";
import CertificateModal from "./components/CertificateModal.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Hero,
    About,
    Education,
    Experience,
    Projects,
    Skills,
    Certifications,
    Contact,
    Footer,
    ImageModal,
    CertificateModal,
  },

  data() {
    // Initialize theme from localStorage before rendering
    // Default to dark mode
    let isLight = false;
    try {
      const saved = localStorage.getItem("theme");
      if (saved === "light") {
        isLight = true;
      }
      // Removed system preference check - dark mode is now default
    } catch (e) {}

    return {
      isLight,
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
    applyTheme() {
      const root = document.documentElement;
      if (this.isLight) {
        root.classList.add("light");
      } else {
        root.classList.remove("light");
      }
    },
    toggleTheme() {
      this.isLight = !this.isLight;
      this.applyTheme();
      // persist preference
      try {
        localStorage.setItem("theme", this.isLight ? "light" : "dark");
      } catch (e) {}
    },
    scrollTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    openImageModal(src, alt) {
      this.imageModal = { show: true, src, alt };
      document.body.style.overflow = "hidden";
    },
    closeImageModal() {
      this.imageModal = { show: false, src: "", alt: "" };
      document.body.style.overflow = "";
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
      document.body.style.overflow = "hidden";
    },
    closeCertModal() {
      this.certModal = { show: false, src: "", title: "", type: "image" };
      document.body.style.overflow = "";
    },
  },

  mounted() {
    // Apply theme to root element after component mounts
    this.applyTheme();
  },
};
</script>

<!-- ══════════════════════════════════════════════════════════
     SCOPED STYLES
     ══════════════════════════════════════════════════════════ -->
<style scoped>
/* Application wrapper */
.app {
  min-height: 100vh;
  background: var(--bg-primary);
  color: var(--text-primary);
  transition:
    background 0.35s ease,
    color 0.35s ease;
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
