import incomeImg from "../../../../assets/income.svg";
import outcomeImg from "../../../../assets/outcome.svg";
import totalImg from "../../../../assets/total.svg";

import { SummaryStyled } from "./style";

export function Summary() {
  return (
    <SummaryStyled>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt='Entradas' />
        </header>
        <strong>0,00</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt='Saídas' />
        </header>
        <strong>0,00</strong>
      </div>
      <div>
        <header>
          <p>Total</p>
          <img src={totalImg} alt='Total' />
        </header>
        <strong>0,00</strong>
      </div>
    </SummaryStyled>
  );
}
