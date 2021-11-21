import { TransactionTableStyle } from "./style";
import { useTransactions } from "../../../../hooks/useTransactions";

export function TransactionTable() {
  const { transactions } = useTransactions()

  return (
    <TransactionTableStyle>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Preço</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.typeTransaction}>
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(Number(transaction.amount))}
              </td>
              <td>{transaction.category}</td>
              <td>
                {new Intl.DateTimeFormat("pt-BR", {
                  dateStyle: "short",
                }).format(new Date(transaction.createdAt))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </TransactionTableStyle>
  );
}
