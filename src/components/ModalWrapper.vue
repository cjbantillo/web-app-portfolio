<template>
  <div class="modal-overlay" @click.self="closeModal">
    <div class="modal-layout">
      <h2 class="modal-header-title" v-if="title">{{ title }}</h2>
      <div class="modal-container is-visible">
        <div class="modal-content">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalWrapper",
  props: {
    title: {
      type: String,
      default: ""
    }
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
    handleKeydown(e) {
      if (e.key === "Escape") {
        this.closeModal();
      }
    }
  },
  mounted() {
    document.addEventListener("keydown", this.handleKeydown);
    document.body.style.overflow = "hidden";
  },
  beforeUnmount() {
    document.removeEventListener("keydown", this.handleKeydown);
    document.body.style.overflow = "";
  }
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(15, 15, 15, 0.7); /* Slightly lighter to show background photo clearly */
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  
  animation: fadeIn 0.3s ease;
}

.modal-layout {
  display: flex;
  flex-direction: column;
  width: 100vw; /* Massive width */
  max-width: 1400px;
  height: 90vh; /* Massive height */
}

.modal-header-title {
  font-family: "Inter", sans-serif;
  font-size: 3.5rem;
  font-weight: 800;
  color: #FFFFFF;
  margin-bottom: 1rem;
  padding-left: 0;
  text-align: left;
}

.modal-container {
  /* Sharp frosted glass styling for the Modal */
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 0px; /* Sharp corners */
  width: 100%;
  flex: 1; /* Take up all remaining height in layout */
  position: relative;
  overflow: hidden;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
  animation: slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  display: flex;
  flex-direction: column;
}

.modal-close {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #fff;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  z-index: 10;
}

.modal-close:hover {
  background: rgba(255, 255, 255, 0.25);
  transform: scale(1.05);
}

.modal-content {
  overflow-y: auto;
  padding: 2rem 3rem; /* Reduced top/bottom padding to ensure text fits without overflowing */
  flex: 1;
  
  /* Completely hide scrollbar */
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

/* Hide scrollbar for Chrome, Safari and Opera */
.modal-content::-webkit-scrollbar {
  display: none;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from { 
    opacity: 0;
    transform: translateY(20px) scale(0.98);
  }
  to { 
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@media (max-width: 768px) {
  .modal-overlay {
    padding: 1rem;
  }
  .modal-container {
    max-height: 90vh;
    border-radius: 20px;
  }
  .modal-content {
    padding: 1.5rem;
  }
}
</style>
