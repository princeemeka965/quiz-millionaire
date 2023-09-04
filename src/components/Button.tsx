interface ButtonProps {
  btnText: string;
  class: string;
  submit: (data: boolean) => void;
  disabled?: boolean;
}

const Button = (props: ButtonProps) => {
  const clickSubmit = () => {
    props.submit(true);
  };

  return (
    <>
      <div className="w-full flex">
        <div className={`flex justify-center ${props.class}`}>
          <button
            type="submit"
            disabled={props.disabled}
            className="w-full h-full items-center"
            onClick={clickSubmit}
          >
            <p className={`text-base text-white`}> {props.btnText} </p>
          </button>
        </div>
      </div>
    </>
  );
};

export default Button;
