import Button from "../../../components/ui/Button";

interface Props {
  onClick: () => void;
}

export default function SaveProductButton({
  onClick,
}: Props) {
  return (
    <Button onClick={onClick}>
      Salvar Produto
    </Button>
  );
}