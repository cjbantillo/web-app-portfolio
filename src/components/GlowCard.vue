<template>
  <div
    class="glow-card card"
    @mousemove="handleMouseMove"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <div
      class="glow-effect"
      :style="{
        opacity: isHovered ? 1 : 0,
        background: `radial-gradient(600px circle at ${mouseX}px ${mouseY}px, var(--glow-color, rgba(255,255,255,0.06)), transparent 40%)`
      }"
    ></div>
    <div class="card-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "GlowCard",
  data() {
    return {
      mouseX: 0,
      mouseY: 0,
      isHovered: false,
    };
  },
  methods: {
    handleMouseMove(e) {
      const rect = this.$el.getBoundingClientRect();
      this.mouseX = e.clientX - rect.left;
      this.mouseY = e.clientY - rect.top;
    },
  },
};
</script>

<style scoped>
.glow-card {
  position: relative;
  overflow: hidden;
  /* Ensure the background from .card is not completely overriding the glow */
  background: var(--bg-card);
}

.glow-card:hover {
  background: var(--bg-card-hover);
}

.glow-effect {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
  transition: opacity 0.3s ease;
}

.card-content {
  position: relative;
  z-index: 1;
  height: 100%;
}
</style>
