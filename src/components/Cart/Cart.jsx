import { useCart } from '../../context/CartContext'

export default function Cart() {
  const { items, removeItem, clear, total } = useCart()

  if (items.length === 0) {
    return <div style={{ padding: 16 }}>Tu carrito está vacío.</div>
  }

  return (
    <div style={{ padding: 16 }}>
      <h2>Carrito</h2>

      <div style={{ display: 'grid', gap: 12, maxWidth: 720 }}>
        {items.map(p => (
          <div key={p.id} style={{ display: 'grid', gridTemplateColumns: '80px 1fr auto auto auto', alignItems: 'center', gap: 12, border: '1px solid #ddd', borderRadius: 10, padding: 8 }}>
            <img src={p.image} alt={p.title} style={{ width: 72, height: 60, objectFit: 'cover' }} />
            <div>
              <div style={{ fontWeight: 600 }}>{p.title}</div>
              <div style={{ fontSize: 12, opacity: 0.8 }}>Categoría: {p.category}</div>
            </div>
            <div>Cant: {p.qty}</div>
            <div>${p.precio}</div>
            <div style={{ fontWeight: 600 }}>${p.qty * p.precio}</div>
            <button onClick={() => removeItem(p.id)} style={{ gridColumn: '1 / -1', justifySelf: 'end' }}>
              Quitar
            </button>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 16, display: 'flex', gap: 12, alignItems: 'center' }}>
        <strong>Total: ${total}</strong>
        <button onClick={clear}>Vaciar carrito</button>
      </div>
    </div>
  )
}
