
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'

const rootElement = document.getElementById('root')
if (rootElement) {
  createRoot(rootElement).render(
      <App />

  )
}

// The link tag should be in the HTML file, not in the JavaScript file
// <link rel="icon" type="image/x-icon" href="/favicon.ico">
