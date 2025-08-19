import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList'
import { products } from '../../data/catalog'

export default function ItemListContainer({ saludo }) {
  const { categoryId } = useParams()
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    const getProducts = new Promise(resolve => {
      setTimeout(() => resolve(products), 600)
    })
    getProducts.then(res => {
      setItems(categoryId ? res.filter(p => p.category === categoryId) : res)
      setLoading(false)
    })
  }, [categoryId])

  if (loading) return <div style={{ padding: 16 }}>Cargando...</div>
  if (items.length === 0) return <div style={{ padding: 16 }}>Sin resultados</div>

  return (
    <div>
      {saludo ? <h2 style={{ padding: 16 }}>{saludo}</h2> : null}
      <ItemList items={items} />
    </div>
  )
}
