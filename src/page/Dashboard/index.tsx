import { Summary } from "./components/Summary";
import { TransactionTable } from "./components/TransactionTable";
import { DashboardStyle } from "./style";

export function Dashboard() {
  return (
    <DashboardStyle>
      <Summary />
      <TransactionTable />
    </DashboardStyle>
  );
}
