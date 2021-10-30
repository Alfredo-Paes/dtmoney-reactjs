import React from "react";
import { TransactionTableStyle } from "./style";
// import { Container } from './styles';

export function TransactionTable() {
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
          <tr>
            <td>Teste</td>
            <td>0,00</td>
            <td>Teste</td>
            <td>30/10/2021</td>
          </tr>
        </tbody>
      </table>
    </TransactionTableStyle>
  );
}
