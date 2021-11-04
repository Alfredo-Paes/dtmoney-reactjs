import logoImg from "../../assets/logo.svg";
import { Button } from "../../components/UI/Button";
import { Container, HeaderStyled } from "./style";
import { IHeaderProps } from "./types";


export function Header({ onOpenNewTransactionModal }: IHeaderProps) {
  return (
    <HeaderStyled>
      <Container>
        <img src={logoImg} alt='dt money' />
        <Button
          collorButton='primary'
          type='button'
          title='Novo Cadastro'
          onClick={onOpenNewTransactionModal}
        />
      </Container>
    </HeaderStyled>
  );
}
