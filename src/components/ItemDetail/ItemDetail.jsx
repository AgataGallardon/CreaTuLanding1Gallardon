import { useState } from 'react'

export default function ItemDetail({ product }) {
  const [qty, setQty] = useState(1)
  if (!product) return null
  return (
    <div style={{ padding: 16 }}>
      <img src={product.image} alt={product.title} style={{ width: 220, height: 160, objectFit: 'cover', display: 'block', marginBottom: 12 }} />
      <h2>{product.title}</h2>
      <p>Categoría: {product.category}</p>
      <p>Precio: ${product.precio}</p>
      <p>{product.description}</p>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 12 }}>
        <button onClick={() => setQty(q => Math.max(1, q - 1))}>-</button>
        <span>{qty}</span>
        <button onClick={() => setQty(q => q + 1)}>+</button>
        <button style={{ marginLeft: 12 }}>Agregar al carrito</button>
      </div>
    </div>
  )
}
