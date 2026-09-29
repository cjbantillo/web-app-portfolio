<template>
  <div v-if="show" class="cert-modal" @click="$emit('close')">
    <div class="cert-modal-content" @click.stop>
      <button class="modal-close" @click="$emit('close')">
        <i class="fas fa-times"></i>
      </button>
      <h3 class="cert-modal-title">{{ title }}</h3>
      <div class="cert-viewer">
        <iframe
          v-if="type === 'pdf'"
          :src="src"
          title="Certificate PDF"
        ></iframe>
        <img v-else :src="src" :alt="title" />
      </div>
      <a class="cert-download" :href="src" target="_blank" rel="noopener">
        Open in new tab
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "CertificateModal",
  props: {
    show: {
      type: Boolean,
      required: true,
    },
    src: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "image",
    },
  },
};
</script>

<style scoped>
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
  width: min(1200px, 95vw);
  height: 90vh;
  max-height: 95vh;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.45);
}

.modal-close {
  position: absolute;
  top: 1.25rem;
  right: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  width: 2.2rem;
  height: 2.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.2s ease;
  z-index: 10;
}

.modal-close:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: scale(1.1);
}

.cert-modal-title {
  margin: 0;
  font-size: 1rem;
  color: var(--text-primary);
}

.cert-viewer {
  width: 100%;
  flex: 1;
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
  height: 100%;
  border: none;
}

.cert-viewer img {
  width: 100%;
  height: 100%;
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
