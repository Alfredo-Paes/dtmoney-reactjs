import React, { useState } from "react";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import { NewTransactionModalStyle, TransactionTypeContainer } from "./style";
import { Button } from "../../components/UI/Button";
import { Modal } from "../../components/UI/Modal";
import { RadioBoxButton } from "./components/RadioBoxButton";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const [typeTransaction, setTypeTransaction] = useState("deposit");

  return (
    <Modal
      isOpen={isOpen}
      onClickClose={onRequestClose}
      titleModal='Cadastrar transação'>
      <NewTransactionModalStyle>
        <input placeholder='Título' />

        <input type='number' placeholder='Valor' value={0} />

        <TransactionTypeContainer>
          <RadioBoxButton
            title='Entrada'
            isActive={typeTransaction === "deposit"}
            icon={incomeImg}
            type='button'
            activeColor='green'
            onClick={() => {
              setTypeTransaction("deposit");
            }}
          />
          <RadioBoxButton
            title='Saída'
            isActive={typeTransaction === "withdraw"}
            icon={outcomeImg}
            type='button'
            activeColor='red'
            onClick={() => {
              setTypeTransaction("withdraw");
            }}
          />
        </TransactionTypeContainer>
        <input placeholder='Categoria' />

        <Button
          type='submit'
          onClick={() => alert("Teste")}
          title='Cadastrar'
          collorButton='success'
        />
      </NewTransactionModalStyle>
    </Modal>
  );
}
