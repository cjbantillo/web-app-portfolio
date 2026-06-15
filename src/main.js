import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

const app = createApp(App)

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
        // Optional: uncomment to only animate once
        // observer.unobserve(entry.target)
      }
    })
  },
  {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  }
)

app.directive('reveal', {
  mounted(el) {
    observer.observe(el)
  },
  unmounted(el) {
    observer.unobserve(el)
  }
})

app.mount('#app')
