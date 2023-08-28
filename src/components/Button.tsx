interface ButtonProps {
  btnText: string;
  class: string;
  submit: (data: boolean) => void;
}

const Button = (props: ButtonProps) => {
  const clickSubmit = () => {
    props.submit(true);
  };

  return (
    <>
      <div className="w-full flex">
        <div
          className={`w-full flex p-4 justify-center ${props.class}`}
          onClick={clickSubmit}
        >
          <button type="submit" className="w-full h-full items-center">
            <p className={`text-base text-white`}> {props.btnText} </p>
          </button>
        </div>
      </div>
    </>
  );
};

export default Button;
