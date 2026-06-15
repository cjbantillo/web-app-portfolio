<template>
  <nav class="navbar">
    <div class="container nav-inner">
      <!-- Logo -->
      <a href="#" class="nav-logo" @click.prevent="scrollTop">
        <span class="logo-bracket">{</span>
        <span class="logo-text">CJB</span>
        <span class="logo-bracket">}</span>
      </a>

      <!-- Links -->
      <ul class="nav-links" :class="{ open: mobileOpen }">
        <li v-for="item in navItems" :key="item.id">
          <a :href="'#' + item.id" @click="mobileOpen = false">{{
            item.label
          }}</a>
        </li>
      </ul>

      <!-- Right controls: theme toggle + hamburger -->
      <div class="nav-controls">
        <button
          class="theme-toggle"
          @click="$emit('toggle-theme')"
          :aria-label="isLight ? 'Switch to dark mode' : 'Switch to light mode'"
        >
          <i :class="isLight ? 'fas fa-moon' : 'fas fa-sun'"></i>
        </button>
        <button
          class="hamburger"
          :class="{ open: mobileOpen }"
          @click="mobileOpen = !mobileOpen"
          aria-label="Toggle menu"
        >
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    isLight: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      mobileOpen: false,
      navItems: [
        { id: "about", label: "About" },
        { id: "education", label: "Education" },
        { id: "experience", label: "Experience" },
        { id: "projects", label: "Projects" },
        { id: "skills", label: "Skills" },
        { id: "certifications", label: "Certs" },
        { id: "contact", label: "Contact" },
      ],
    };
  },
  methods: {
    scrollTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
};
</script>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  z-index: 1000;
  background: var(--nav-bg);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-bottom: 1px solid var(--border);
  transition:
    background 0.35s ease,
    border-color 0.35s ease;
}

.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 62px;
}

.nav-logo {
  display: flex;
  align-items: center;
  font-family: "Fira Code", monospace;
  font-size: 1.15rem;
  font-weight: 700;
  gap: 0;
  text-decoration: none;
  opacity: 1;
}
.nav-logo:hover {
  opacity: 0.7;
}
.logo-bracket {
  color: var(--text-muted);
  transition: color 0.35s;
}
.logo-text {
  color: var(--text-primary);
  transition: color 0.35s;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 1.8rem;
}
.nav-links a {
  font-size: 0.8rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--text-secondary);
  transition: color 0.25s ease;
}
.nav-links a:hover {
  color: var(--text-primary);
  opacity: 1;
}

.nav-controls {
  display: flex;
  align-items: center;
  gap: 0.9rem;
}

.theme-toggle {
  background: none;
  border: 1px solid var(--border);
  border-radius: 6px;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: var(--text-secondary);
  font-size: 0.9rem;
  transition:
    border-color 0.25s,
    color 0.25s,
    background 0.25s;
  padding: 0;
}
.theme-toggle:hover {
  border-color: var(--border-hover);
  color: var(--text-primary);
  background: var(--accent-dim);
}

.hamburger {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 34px;
  height: 34px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}
.hamburger span {
  display: block;
  width: 22px;
  height: 2px;
  background: var(--text-secondary);
  border-radius: 1px;
  transition: all 0.3s ease;
}
.hamburger.open span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}
.hamburger.open span:nth-child(2) {
  opacity: 0;
}
.hamburger.open span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

@media (max-width: 768px) {
  .hamburger {
    display: flex;
  }

  .nav-links {
    position: fixed;
    top: 62px;
    left: 0;
    width: 100%;
    flex-direction: column;
    gap: 0;
    background: var(--bg-secondary);
    border-bottom: 1px solid var(--border);
    max-height: 0;
    overflow: hidden;
    transition:
      max-height 0.35s ease,
      padding 0.35s ease;
    padding: 0;
  }
  .nav-links.open {
    max-height: 360px;
    padding: 1rem 0;
  }
  .nav-links li {
    text-align: center;
  }
  .nav-links a {
    display: block;
    padding: 0.7rem 0;
    font-size: 0.78rem;
  }
}
</style>
