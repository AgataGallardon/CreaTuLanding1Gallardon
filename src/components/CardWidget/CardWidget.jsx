import { useCart } from '../../context/CartContext'

export default function Cardwidget() {
  const { count } = useCart()

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <img src="/images/carrito.png" alt="carrito" style={{ width: 50, height: 50 }} />
      {count > 0 && (
        <span style={{
          position: 'absolute', top: -6, right: -10,
          background: '#222', color: '#fff', borderRadius: 9999,
          fontSize: 12, minWidth: 18, height: 18, lineHeight: '18px',
          textAlign: 'center', padding: '0 4px'
        }}>
          {count}
        </span>
      )}
    </div>
  )
}
