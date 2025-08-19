import { Link } from 'react-router-dom'

export default function Item({ product }) {
  return (
    <div style={{ border: '1px solid #ddd', borderRadius: 12, padding: 16, textAlign: 'center' }}>
      <img src={product.image} alt={product.title} style={{ width: 160, height: 120, objectFit: 'cover', marginBottom: 12 }} />
      <h3>{product.title}</h3>
      <p>Precio: ${product.precio}</p>
      <Link to={`/item/${product.id}`} style={{ display: 'inline-block', padding: '6px 12px', border: '1px solid #333', borderRadius: 6, textDecoration: 'none' }}>
        Ver detalle
      </Link>
    </div>
  )
}
