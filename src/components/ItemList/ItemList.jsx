import Item from '../Item/Item'

export default function ItemList({ items }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(220px,1fr))', gap: 16, padding: 16 }}>
      {items.map(p => (
        <Item key={p.id} product={p} />
      ))}
    </div>
  )
}
