import incomeImg from "../../../../assets/income.svg";
import outcomeImg from "../../../../assets/outcome.svg";
import totalImg from "../../../../assets/total.svg";
import { useTransactions } from "../../../../hooks/useTransactions";

import { SummaryStyled } from "./style";

export function Summary() {
  const { transactions } = useTransactions()

  const summary = transactions.reduce(
    (acc, transaction) => {
      switch (transaction.typeTransaction) {
        case "deposit":
          acc.totalDeposit += transaction.amount;
          acc.total += transaction.amount;
          break;

        case "withdraw":
          acc.totalWitdraw += transaction.amount;
          acc.total -= transaction.amount;
          break;
      }

      return acc;
    },
    {
      totalDeposit: 0,
      totalWitdraw: 0,
      total: 0,
    }
  );

  return (
    <SummaryStyled totalBalance={summary.total < summary.totalWitdraw}>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt='Entradas' />
        </header>
        <strong>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(summary.totalDeposit)}
        </strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt='Saídas' />
        </header>
        <strong>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(summary.totalWitdraw)}
        </strong>
      </div>
      <div>
        <header>
          <p>Total</p>
          <img src={totalImg} alt='Total' />
        </header>
        <strong>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(summary.total)}
        </strong>
      </div>
    </SummaryStyled>
  );
}
