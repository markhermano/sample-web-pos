import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import UnoCSS from 'unocss/vite'
import presetIcons from '@unocss/preset-icons'
import { presetUno } from 'unocss'

export default defineConfig({
  plugins: [
    vue(),
    UnoCSS({
      presets:[presetUno()]
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
})
