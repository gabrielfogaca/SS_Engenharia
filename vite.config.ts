import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // ⚠️ IMPORTANTE: Substitua 'NOME-DO-SEU-REPOSITORIO' pelo nome real do seu repositório GitHub
  // Exemplo: Se o repo é "https://github.com/joao/ss-engenharia", use: base: '/ss-engenharia/',
  base: '/ss_engenharia/',
  
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: { '@': path.resolve(__dirname, './src') },
  },
})
