<template>
  <section id="contact" class="section contact-section">
    <div class="container">
      <p class="section-label"><i class="fas fa-paper-plane"></i> Contact</p>
      <h2 class="section-title">Let's Connect</h2>
      <div class="section-divider"></div>

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
          class="card contact-card"
        >
          <div class="contact-icon-wrap"><i :class="m.icon"></i></div>
          <div class="contact-info">
            <h4>{{ m.label }}</h4>
            <p>{{ m.value }}</p>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Contact",
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
.contact-section {
  text-align: center;
}

.contact-intro {
  color: var(--text-secondary);
  font-size: 0.95rem;
  max-width: 520px;
  margin-bottom: 2rem;
  margin-left: auto;
  margin-right: auto;
  transition: color 0.35s;
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1rem;
  margin-bottom: 2.5rem;
  justify-items: center;
}

.contact-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  text-decoration: none;
  padding: 1.1rem 1.25rem;
  opacity: 1;
  width: 100%;
  max-width: 300px;
  text-align: left;
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

@media (max-width: 768px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }
}
</style>
