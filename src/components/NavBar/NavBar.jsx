import "./NavBar.css"
import CardWidget from '../CardWidget/CardWidget'

const NavBar = () => {
  return (

<header>
      <div className="logoNav">
  <img src="./images/logoart.png" alt="logo Nav" />
</div>

<nav>
    <ul>
        <li>Nosotros</li>
        <li>Categorias</li>
        <li>Contacto </li>  
    </ul>
</nav>

    <CardWidget/>
    </header>
  )
}

export default NavBar