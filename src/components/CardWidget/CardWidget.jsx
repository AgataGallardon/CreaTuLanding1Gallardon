import "./CardWidget.css"

const CardWidget = () => {
const imgCarrito = "./images/carrito.png"
  return (
    <div>
        <img className="imgCarrito" src={imgCarrito} alt="imagen carrito" />
    </div>
  )
}

export default CardWidget