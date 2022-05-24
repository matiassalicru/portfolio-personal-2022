// Libraries
import { BrowserRouter as Router, Routes, Route, Link, HashRouter } from 'react-router-dom'

// Components
import { Home }from './containers/Home/Home'
import { About } from './sections/AboutSection/About/About'

export const App = () => {
  return (
    <Router >
      <HashRouter basename='/'>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
      </Routes>
      </HashRouter>
    </Router>
  )
}
