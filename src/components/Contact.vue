<template>
  <div class="contact-content">
      <p class="section-label"><i class="fas fa-paper-plane"></i> Contact</p>
      <h2 class="section-title">Let's Connect</h2>
      <div class="section-divider"></div>

      <div class="contact-layout">
        <div class="contact-left">
          <p class="contact-intro">
            I'm always interested in hearing about new projects and opportunities.
            Feel free to reach out.
          </p>

          <div class="contact-grid">
            <a
              v-for="m in contactMethods"
              :key="m.label"
              :href="m.href"
              :target="m.target || '_self'"
              class="contact-link"
            >
              <GlowCard class="contact-card card">
                <div class="contact-card-inner">
                  <div class="contact-icon-wrap"><i :class="m.icon"></i></div>
                  <div class="contact-info">
                    <h4>{{ m.label }}</h4>
                    <p>{{ m.value }}</p>
                  </div>
                </div>
              </GlowCard>
            </a>
          </div>
        </div>

        <div class="contact-right">
          <img src="../assets/3d-man-sitting-with-laptop.png" alt="3D Man sitting with laptop" class="contact-image" />
        </div>
      </div>
  </div>
</template>

<script>
import GlowCard from "./GlowCard.vue";

export default {
  name: "Contact",
  components: {
    GlowCard,
  },
  data() {
    return {
      contactMethods: [
        {
          icon: "fas fa-envelope",
          label: "Email",
          value: "bantillocj1@gmail.com",
          href: "mailto:bantillocj1@gmail.com",
        },
        {
          icon: "fab fa-whatsapp",
          label: "WhatsApp",
          value: "+63 968 575 2351",
          href: "https://wa.me/639685752351",
          target: "_blank",
        },
        {
          icon: "fab fa-github",
          label: "GitHub",
          value: "cjbantillo",
          href: "https://github.com/cjbantillo",
          target: "_blank",
        },
        {
          icon: "fab fa-linkedin",
          label: "LinkedIn",
          value: "Christian James M. Bantillo",
          href: "https://www.linkedin.com/in/cjbantillo",
          target: "_blank",
        },
        {
          icon: "fab fa-facebook",
          label: "Facebook",
          value: "Christian James M. Bantillo",
          href: "https://www.facebook.com/ems.sem148/",
          target: "_blank",
        },
      ],
    };
  },
};
</script>
<style scoped>

.contact-content {
  margin-top: -5rem; /* Shift only this specific modal up to counteract the global 7rem padding */
}

.contact-section {
  text-align: center;
}

.contact-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: center;
  margin-top: 1rem;
}

.contact-left {
  display: flex;
  flex-direction: column;
}

.contact-right {
  display: flex;
  justify-content: center;
  align-items: center;
}

.contact-image {
  max-width: 100%;
  max-height: 65vh;
  object-fit: contain;
  animation: float 6s ease-in-out infinite;
  filter: drop-shadow(0 20px 30px rgba(0, 0, 0, 0.4));
}

@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
}

.contact-intro {
  color: var(--text-secondary);
  font-size: 0.95rem;
  max-width: none;
  margin-bottom: 2rem;
  transition: color 0.35s;
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.25rem;
  margin-bottom: 1.5rem;
}

.contact-link {
  text-decoration: none;
  display: block;
}

.contact-card {
  padding: 1.1rem 1.25rem;
  opacity: 1;
  width: 100%;
  max-width: 300px;
  text-align: left;
}
.contact-card-inner {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.contact-card:hover {
  opacity: 1;
}

.contact-icon-wrap {
  flex-shrink: 0;
  width: 38px;
  height: 38px;
  border-radius: 8px;
  background: var(--accent-dim);
  border: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary);
  font-size: 0.9rem;
  transition:
    background 0.35s,
    border-color 0.35s,
    color 0.35s;
}

.contact-info h4 {
  font-size: 0.82rem;
  color: var(--text-primary);
  margin-bottom: 0.15rem;
  transition: color 0.35s;
}
.contact-info p {
  font-size: 0.75rem;
  color: var(--text-muted);
  margin: 0;
  transition: color 0.35s;
}

@media (max-width: 1024px) {
  .contact-layout {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}

@media (max-width: 768px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }
}
</style>
