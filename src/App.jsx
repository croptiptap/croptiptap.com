import { HashRouter, Routes, Route } from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'

import theme from './theme'

import Home from './pages/Home'
import Grant from './pages/Grant'
import NotFound from './pages/NotFound'

import Header from './components/Header'
import Footer from './components/Footer'

import '@fontsource-variable/montserrat'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HashRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/grant" element={<Grant />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>

        <Footer />
      </HashRouter>
    </ThemeProvider>
  )
}
