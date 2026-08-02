<template>
  <div class="mini-game-wrapper">
    <div v-if="!isPlaying" class="game-hint" @click="startGame">
      <i class="fas fa-terminal blink-icon"></i>
      <span class="hint-text">System Override. Access Terminal?</span>
    </div>

    <div v-else class="game-container">
      <div class="arcade-screen">
        <div class="screen-header">
          <span>ROOT@SYS:~/SNAKE</span>
          <span class="close-btn" @click="stopGame"><i class="fas fa-times"></i></span>
        </div>
        <canvas ref="gameCanvas" width="400" height="400" tabindex="0" @keydown.prevent="handleKeydown"></canvas>
        <div v-if="isGameOver" class="game-over-overlay">
          <h2>SYSTEM FAILURE</h2>
          <p>SCORE: {{ score }}</p>
          <button @click="resetGame" class="restart-btn">REBOOT SYSTEM</button>
        </div>
        <div v-if="!isGameOver && !hasStarted" class="start-overlay">
          <h2>SNAKE.EXE</h2>
          <p>Use Arrow Keys to move</p>
          <button @click="startMovement" class="restart-btn">EXECUTE</button>
        </div>
      </div>
      <div class="score-display">SCORE: {{ score }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MiniGame",
  data() {
    return {
      isPlaying: false,
      isGameOver: false,
      hasStarted: false,
      score: 0,
      grid: 20,
      snake: [{x: 160, y: 160}],
      dx: 20,
      dy: 0,
      apple: {x: 320, y: 320},
      animationFrameId: null,
      lastTime: 0,
      fps: 8
    };
  },
  methods: {
    startGame() {
      this.isPlaying = true;
      this.resetGame();
      this.$nextTick(() => {
        if (this.$refs.gameCanvas) {
          this.$refs.gameCanvas.focus();
        }
      });
    },
    stopGame() {
      this.isPlaying = false;
      this.hasStarted = false;
      cancelAnimationFrame(this.animationFrameId);
    },
    resetGame() {
      this.snake = [{x: 160, y: 160}];
      this.dx = 20;
      this.dy = 0;
      this.score = 0;
      this.isGameOver = false;
      this.hasStarted = false;
      this.placeApple();
      this.$nextTick(() => {
        if (this.$refs.gameCanvas) {
          this.drawInitialState();
          this.$refs.gameCanvas.focus();
        }
      });
    },
    startMovement() {
      this.hasStarted = true;
      this.lastTime = performance.now();
      this.$refs.gameCanvas.focus();
      this.animationFrameId = requestAnimationFrame(this.gameLoop);
    },
    gameLoop(time) {
      if (this.isGameOver) return;
      this.animationFrameId = requestAnimationFrame(this.gameLoop);

      const deltaTime = time - this.lastTime;
      if (deltaTime < 1000 / this.fps) return;
      this.lastTime = time;

      this.update();
      this.draw();
    },
    update() {
      const head = { x: this.snake[0].x + this.dx, y: this.snake[0].y + this.dy };

      // Wall collision (wrap around)
      if (head.x < 0) head.x = 400 - this.grid;
      else if (head.x >= 400) head.x = 0;
      
      if (head.y < 0) head.y = 400 - this.grid;
      else if (head.y >= 400) head.y = 0;

      // Self collision
      for (let i = 0; i < this.snake.length; i++) {
        if (head.x === this.snake[i].x && head.y === this.snake[i].y) {
          this.isGameOver = true;
          return;
        }
      }

      this.snake.unshift(head);

      // Eat apple
      if (head.x === this.apple.x && head.y === this.apple.y) {
        this.score += 10;
        this.placeApple();
        if (this.score % 50 === 0) this.fps += 1; // Increase speed
      } else {
        this.snake.pop();
      }
    },
    draw() {
      const canvas = this.$refs.gameCanvas;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      
      // Clear canvas
      ctx.fillStyle = '#0c0c0c';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw apple
      ctx.fillStyle = '#ff2a2a';
      ctx.shadowBlur = 10;
      ctx.shadowColor = '#ff2a2a';
      ctx.fillRect(this.apple.x, this.apple.y, this.grid - 1, this.grid - 1);
      ctx.shadowBlur = 0;

      // Draw snake
      ctx.fillStyle = '#22c55e';
      this.snake.forEach((part, index) => {
        if (index === 0) {
          ctx.fillStyle = '#2f80ff';
          ctx.shadowBlur = 10;
          ctx.shadowColor = '#2f80ff';
        } else {
          ctx.fillStyle = '#22c55e';
          ctx.shadowBlur = 0;
        }
        ctx.fillRect(part.x, part.y, this.grid - 1, this.grid - 1);
      });
      ctx.shadowBlur = 0;
    },
    drawInitialState() {
      const canvas = this.$refs.gameCanvas;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      ctx.fillStyle = '#0c0c0c';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.fillStyle = '#2f80ff';
      ctx.shadowBlur = 10;
      ctx.shadowColor = '#2f80ff';
      ctx.fillRect(this.snake[0].x, this.snake[0].y, this.grid - 1, this.grid - 1);
      ctx.shadowBlur = 0;

      ctx.fillStyle = '#ff2a2a';
      ctx.shadowBlur = 10;
      ctx.shadowColor = '#ff2a2a';
      ctx.fillRect(this.apple.x, this.apple.y, this.grid - 1, this.grid - 1);
      ctx.shadowBlur = 0;
    },
    placeApple() {
      this.apple.x = Math.floor(Math.random() * (400 / this.grid)) * this.grid;
      this.apple.y = Math.floor(Math.random() * (400 / this.grid)) * this.grid;
      
      // Avoid placing on snake
      for (let part of this.snake) {
        if (part.x === this.apple.x && part.y === this.apple.y) {
          this.placeApple();
          break;
        }
      }
    },
    handleKeydown(e) {
      if ([37, 38, 39, 40].includes(e.keyCode)) {
        e.preventDefault();
      }
      if (!this.hasStarted && !this.isGameOver && [37, 38, 39, 40].includes(e.keyCode)) {
        this.startMovement();
      }
      if (e.keyCode === 37 && this.dx === 0) {
        this.dx = -this.grid;
        this.dy = 0;
      } else if (e.keyCode === 38 && this.dy === 0) {
        this.dy = -this.grid;
        this.dx = 0;
      } else if (e.keyCode === 39 && this.dx === 0) {
        this.dx = this.grid;
        this.dy = 0;
      } else if (e.keyCode === 40 && this.dy === 0) {
        this.dy = this.grid;
        this.dx = 0;
      }
    }
  },
  beforeUnmount() {
    cancelAnimationFrame(this.animationFrameId);
  }
};
</script>

<style scoped>
.mini-game-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -1.5rem; /* Negative margin to overlap Hero */
  margin-bottom: 0.5rem;
  width: 100%;
  position: relative;
  z-index: 10;
}

.game-hint {
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.6rem 1.2rem;
  background: rgba(34, 197, 94, 0.05);
  border: 1px solid rgba(34, 197, 94, 0.2);
  border-radius: 8px;
  color: var(--text-muted);
  font-family: "Fira Code", monospace;
  font-size: 0.8rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.game-hint:hover {
  background: rgba(34, 197, 94, 0.1);
  border-color: rgba(34, 197, 94, 0.4);
  color: #22c55e;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(34, 197, 94, 0.15);
}

.blink-icon {
  color: #22c55e;
  animation: blink 2s infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
}

.game-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  animation: popIn 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
}

@keyframes popIn {
  0% { transform: scale(0.8); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
}

.arcade-screen {
  background: #000;
  border: 2px solid var(--border);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(34, 197, 94, 0.1);
  position: relative;
}

.screen-header {
  background: var(--bg-card);
  padding: 0.4rem 0.8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--border);
  font-family: "Fira Code", monospace;
  font-size: 0.7rem;
  color: var(--text-muted);
}

.close-btn {
  cursor: pointer;
  transition: color 0.2s;
}

.close-btn:hover {
  color: #ff2a2a;
}

canvas {
  display: block;
  outline: none;
  background: #0c0c0c;
  image-rendering: pixelated;
}

.game-over-overlay, .start-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  font-family: "Fira Code", monospace;
  backdrop-filter: blur(2px);
}

.game-over-overlay h2 {
  color: #ff2a2a;
  text-shadow: 0 0 10px rgba(255, 42, 42, 0.5);
  margin: 0;
}

.start-overlay h2 {
  color: #22c55e;
  text-shadow: 0 0 10px rgba(34, 197, 94, 0.5);
  margin: 0;
}

.game-over-overlay p, .start-overlay p {
  color: #fff;
  font-size: 0.9rem;
  margin: 0;
}

.restart-btn {
  background: transparent;
  border: 1px solid #22c55e;
  color: #22c55e;
  font-family: "Fira Code", monospace;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: all 0.2s;
}

.restart-btn:hover {
  background: rgba(34, 197, 94, 0.2);
  box-shadow: 0 0 10px rgba(34, 197, 94, 0.3);
}

.score-display {
  font-family: "Fira Code", monospace;
  color: var(--text-secondary);
  font-size: 0.9rem;
}

@media (max-width: 480px) {
  .arcade-screen {
    width: 300px;
  }
  canvas {
    width: 300px;
    height: 300px;
  }
}
</style>
