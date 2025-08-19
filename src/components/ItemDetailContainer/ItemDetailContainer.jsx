import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../../data/catalog'
import ItemDetail from '../ItemDetail/ItemDetail'

export default function ItemDetailContainer() {
  const { itemId } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    const getProduct = new Promise(resolve => {
      setTimeout(() => resolve(products.find(p => String(p.id) === String(itemId))), 600)
    })
    getProduct.then(res => {
      setProduct(res || null)
      setLoading(false)
    })
  }, [itemId])

  if (loading) return <div style={{ padding: 16 }}>Cargando...</div>
  if (!product) return <div style={{ padding: 16 }}>Producto no encontrado</div>
  return <ItemDetail product={product} />
}
