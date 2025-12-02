import React from 'react'
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import ReactGA from 'react-ga4'

import theme from './theme'

import Home from './pages/Home'
import NotFound from './pages/NotFound'

import Header from './components/Header'
import Footer from './components/Footer'

import '@fontsource-variable/montserrat';

import { GAProvider } from './providers/GAProvider'

ReactGA.initialize([
  {
    trackingId: 'G-XXXXXXXXXX',
  },
])

function Tracker() {
  const location = useLocation()

  React.useEffect(() => {
    ReactGA.send({
      hitType: 'pageview',
      page: location.pathname + location.search,
    })
  }, [location])

  return null
}

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GAProvider>
        <CssBaseline />
        <HashRouter>
          <Tracker />
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>

          <Footer />
        </HashRouter>
      </GAProvider>
    </ThemeProvider>
  )
}
