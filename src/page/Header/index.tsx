import logoImg from "../../assets/logo.svg";
import { Button } from "../../components/UI/Button";
import { Container, HeaderStyled } from "./style";

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
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
