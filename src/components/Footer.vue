<template>
  <footer class="footer">
    <div class="container footer-inner">
      <p class="footer-copy">
        &copy; 2026 Christian James M. Bantillo. All rights reserved.
      </p>
      <p class="footer-built">Built with Vue 3 + Vite</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.footer {
  border-top: 1px solid var(--border);
  padding: 2rem 0;
  transition: border-color 0.35s;
}
.footer-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
}
.footer-copy,
.footer-built {
  font-size: 0.74rem;
  color: var(--text-muted);
  transition: color 0.35s;
}

@media (max-width: 768px) {
  .footer-inner {
    flex-direction: column;
    text-align: center;
  }
}
</style>
