<template>
  <div class="custom-cursor" :class="{ hovering: isHovering }" :style="{ transform: `translate(${mouseX}px, ${mouseY}px)` }">
    <div class="cursor-dot"></div>
  </div>
</template>

<script>
export default {
  name: "CustomCursor",
  data() {
    return {
      mouseX: 0,
      mouseY: 0,
      isHovering: false,
    };
  },
  mounted() {
    window.addEventListener("mousemove", this.updateCursor);
    
    // Use event delegation to detect hovering over clickable items
    document.addEventListener("mouseover", this.handleMouseOver);
    document.addEventListener("mouseout", this.handleMouseOut);
  },
  beforeUnmount() {
    window.removeEventListener("mousemove", this.updateCursor);
    document.removeEventListener("mouseover", this.handleMouseOver);
    document.removeEventListener("mouseout", this.handleMouseOut);
  },
  methods: {
    updateCursor(e) {
      this.mouseX = e.clientX;
      this.mouseY = e.clientY;
    },
    handleMouseOver(e) {
      const target = e.target;
      const isClickable = 
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('gallery-img') ||
        target.classList.contains('timeline-node');
        
      if (isClickable) {
        this.isHovering = true;
      }
    },
    handleMouseOut() {
      this.isHovering = false;
    }
  }
};
</script>

<style scoped>
.custom-cursor {
  position: fixed;
  top: 0;
  left: 0;
  width: 32px;
  height: 32px;
  margin-left: -16px;
  margin-top: -16px;
  border-radius: 50%;
  border: 1px solid var(--accent);
  pointer-events: none;
  z-index: 9999;
  transition: transform 0.1s ease-out, width 0.2s ease, height 0.2s ease, margin 0.2s ease, background-color 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.cursor-dot {
  width: 6px;
  height: 6px;
  background-color: var(--accent);
  border-radius: 50%;
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.custom-cursor.hovering {
  width: 48px;
  height: 48px;
  margin-left: -24px;
  margin-top: -24px;
  background-color: rgba(34, 197, 94, 0.1);
  border-color: transparent;
  backdrop-filter: blur(2px);
}

.custom-cursor.hovering .cursor-dot {
  transform: scale(0);
  opacity: 0;
}

@media (max-width: 768px) {
  .custom-cursor {
    display: none;
  }
}
</style>
