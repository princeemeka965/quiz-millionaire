interface CardProps {
  class: string;
  children: any;
}

const Card = (props: CardProps) => {
  return (
    <>
      <div
        className={`flex bg-white ${props.class}`}
        style={{ boxShadow: "0px 15px 40px 5px #EDEDED" }}
      >
        {props.children}
      </div>
    </>
  );
};

export default Card;
