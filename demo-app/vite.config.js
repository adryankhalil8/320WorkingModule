import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import fs from 'fs'

const demoRoot = __dirname
const lessonsRoot = path.resolve(demoRoot, '..')

// Plugin to serve .md files from the lessons root directory
function serveLessonsPlugin() {
  return {
    name: 'serve-lessons-md',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url && req.url.endsWith('.md')) {
          const filePath = path.join(lessonsRoot, decodeURIComponent(req.url))
          if (fs.existsSync(filePath)) {
            res.setHeader('Content-Type', 'text/plain; charset=utf-8')
            res.end(fs.readFileSync(filePath, 'utf-8'))
            return
          }
        }
        next()
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), serveLessonsPlugin()],
  resolve: {
    alias: {
      '@lessons': lessonsRoot,
    },
    dedupe: ['react', 'react-dom', 'react-router-dom', 'react-router'],
  },
  server: {
    fs: {
      allow: [lessonsRoot],
    },
  },
  assetsInclude: ['**/*.md'],
})
