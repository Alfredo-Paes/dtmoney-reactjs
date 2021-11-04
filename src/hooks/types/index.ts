import { ReactNode } from "react";

export interface ITransaction {
    id: string;
    title: string;
    typeTransaction: string;
    category: string;
    amount: number;
    createdAt: string;
}

export type ITransactionInput = Omit<ITransaction, "id" | "createdAt">;

export interface ITransactionsContextData {
    transactions: ITransaction[];
    createTransaction: (transaction: ITransactionInput) => Promise<void>;
}

export interface ITransactionsProviderProps {
    children: ReactNode;
}
