import Home from '../pages/Home'
import About from '../pages/About'
import News from '../pages/News'
import Contact from '../pages/Contact'
import Detail from '../pages/Detail'

export const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/detail/:id',
    component: Detail
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/news',
    component: News
  },
  {
    path: '/contact',
    component: Contact
  }
]
