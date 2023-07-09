import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { routes } from './routes/routes'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <div className='App' style={{ backgroundColor: 'var(--black-color)' }}>
      <BrowserRouter>
        <Header />
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} Component={route.component} />
          ))}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
