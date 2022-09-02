export function TransactionHistory({ items }) {
    return (
<table className={TransactionHistory}>
  <thead>
    <tr>
      <th>TYPE</th>
      <th>AMOUNT</th>
      <th>CURRENCY</th>
    </tr>
  </thead>

  <tbody>
    {items.map(({ type, amount, currency, id }) => (
          <tr key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
  </tbody>
</table>
    )
}