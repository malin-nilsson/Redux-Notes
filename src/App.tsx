import { Provider } from 'react-redux'
import { StyledAppWrapper } from './components/styledComponents/StyledAppWrapper'
import AddNote from './components/AddNote'
import Store from './redux/Store'
import './index.css'
import { AnimatePresence } from 'framer-motion'
import StyledCard from './components/styledComponents/StyledCard'

function App() {
  return (
    <Provider store={Store}>
      <AnimatePresence>
        <StyledAppWrapper>
          <AddNote />
          <StyledCard />
        </StyledAppWrapper>
      </AnimatePresence>
    </Provider>
  )
}

export default App
