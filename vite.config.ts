import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  // Para GitHub Pages sem domínio customizado, use o nome do repositório
  // Exemplo: se o repo é "seu-usuario/ss-engenharia", use base: '/ss-engenharia/'
  // Se estiver usando domínio customizado, use base: '/'
  const base = mode === 'production' ? '/ss-engenharia/' : '/'
  
  return {
    base,
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: { '@': path.resolve(__dirname, './src') },
    },
  }
})