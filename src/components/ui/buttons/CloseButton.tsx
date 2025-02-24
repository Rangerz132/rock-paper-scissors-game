import CrossIcon from "../../../assets/images/icon-close.svg";
import Button from "./Button";

const CloseButton = (props: { onClick: () => void; className?: string }) => {
  return (
    <Button onClick={props.onClick} className={props.className}>
      <img src={CrossIcon} alt={"Cross icon"} />
    </Button>
  );
};

export default CloseButton;
