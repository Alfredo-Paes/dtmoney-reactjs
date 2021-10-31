import { useState } from "react";

import { Header } from "./page/Header";
import { GlobalStyle } from "./styles/global";
import { Dashboard } from "./page/Dashboard";
import { NewTransactionModal } from "./page/NewTransactionModal";
import { TransactionsProvider } from "./hooks/useTransactions";


export function App() {
  const [isNewTransitionModalOpen, setIsNewTransitionModalOpen] =
    useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransitionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransitionModalOpen(false);
  }
  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransitionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <GlobalStyle />
    </TransactionsProvider>
  );
}
