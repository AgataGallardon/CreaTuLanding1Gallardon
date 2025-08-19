import './NavBar.css'
import { Link } from 'react-router-dom'
import Cardwidget from '../CardWidget/CardWidget'

export default function NavBar() {
  return (
    <header>
      <div className="logoNav">
        <img src="/images/logoart.png" alt="logo Nav" />
      </div>
      <nav>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/category/cuadernos">Cuadernos</Link></li>
          <li><Link to="/category/lapices">Lápices</Link></li>
          <li><Link to="/category/fibrones">Marcadores</Link></li>
          <li><Link to="/category/mochilas">Mochilas</Link></li>
        </ul>
      </nav>
      <Cardwidget />
    </header>
  )
}
