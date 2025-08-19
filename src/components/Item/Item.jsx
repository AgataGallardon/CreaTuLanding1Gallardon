export default function Item({ product }) {
  return (
    <div style={{ border: '1px solid #ddd', borderRadius: 12, padding: 16, textAlign: 'center' }}>
      <img src={product.image} alt={product.title} style={{ width: 120, height: 120, objectFit: 'contain', marginBottom: 12 }} />
      <h3>{product.title}</h3>
      <p>Precio: ${product.precio}</p>
      <button>Ver detalle</button>
    </div>
  )
}
