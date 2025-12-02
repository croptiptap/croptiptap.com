import { createContext, useContext } from 'react'
import ReactGA from 'react-ga4'
import PropTypes from 'prop-types'

const GAContext = createContext()

export const GAProvider = ({ children }) => {
  const trackEvent = (category, action, label, value) => {

    ReactGA.event({
      category,
      action,
      label,
      value,
    })
  }

  return (
    <GAContext.Provider value={{ trackEvent }}>{children}</GAContext.Provider>
  )
}

GAProvider.propTypes = {
  children: PropTypes.node,
}

// eslint-disable-next-line react-refresh/only-export-components
export const useGA = () => useContext(GAContext)
