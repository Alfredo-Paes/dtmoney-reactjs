import { FormEvent, useState } from "react";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import { useTransactions } from "../../hooks/useTransactions";
import { NewTransactionModalStyle, TransactionTypeContainer } from "./style";
import { Button } from "../../components/UI/Button";
import { Modal } from "../../components/UI/Modal";
import { RadioBoxButton } from "./components/RadioBoxButton";
import { INewTransactionModalProps } from "./types";



export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: INewTransactionModalProps) {
  const { createTransaction } = useTransactions();

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState("");
  const [typeTransaction, setTypeTransaction] = useState("deposit");

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    await createTransaction({
      title,
      amount,
      category,
      typeTransaction,
    });

    setTitle("");
    setAmount(0);
    setCategory("");
    setTypeTransaction("deposit");
    onRequestClose();
  }

  return (
    <Modal
      isOpen={isOpen}
      onClickClose={onRequestClose}
      titleModal='Cadastrar transação'>
      <NewTransactionModalStyle onSubmit={handleCreateNewTransaction}>
        <input
          placeholder='Título'
          value={title}
          onChange={(evt) => setTitle(evt.target.value)}
        />

        <input
          type='number'
          placeholder='Valor'
          value={amount}
          onChange={(evt) => setAmount(Number(evt.target.value))}
        />

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
        <input
          placeholder='Categoria'
          value={category}
          onChange={(evt) => setCategory(evt.target.value)}
        />

        <Button
          type='submit'
          title='Cadastrar'
          collorButton='success'
        />
      </NewTransactionModalStyle>
    </Modal>
  );
}
