<template>
  <div v-if="show" class="image-modal" @click="$emit('close')">
    <button class="modal-close" @click.stop="$emit('close')" aria-label="Close">
      <i class="fas fa-times"></i>
    </button>
    <div class="modal-content" @click.stop>
      <img :src="src" :alt="alt" />
    </div>
  </div>
</template>

<script>
export default {
  name: "ImageModal",
  props: {
    show: {
      type: Boolean,
      required: true,
    },
    src: {
      type: String,
      default: "",
    },
    alt: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped>
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
  width: auto;
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: transparent;
}

/* Hide scrollbar for clean look */
.modal-content::-webkit-scrollbar {
  display: none;
}
.modal-content {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.modal-content img {
  max-width: 100%;
  max-height: 90vh;
  width: auto;
  height: auto;
  object-fit: contain;
  display: block;
  border-radius: 8px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
}

.modal-close {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: rgba(0, 0, 0, 0.5);
  border: 2px solid rgba(255, 255, 255, 0.6);
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 1.2rem;
  cursor: pointer;
  z-index: 10001;
  transition: all 0.3s ease;
  backdrop-filter: blur(4px);
}

.modal-close:hover {
  transform: scale(1.1);
  background: rgba(255, 255, 255, 0.15);
  border-color: #fff;
}
</style>
