import Card from "./Card";

interface InputProps {
  label: string;
  type: string;
  value: string;
  placeholder: string;
  changeInput: (data: string) => void;
}

const InputField = (props: InputProps): any => {
  const handleInputChange = (e: string) => {
    props.changeInput(e);
  };

  return (
    <>
      <label className="my-2 mx-4 text-grayText text-sm">{props.label}</label>
      <Card class="p-4 rounded-full flex flex-col">
        <div className="flex flex-col px-2">
          <input
            type={props.type}
            value={props.value}
            placeholder={props.placeholder}
            onChange={(e) => handleInputChange(e.target.value)}
          />
        </div>
      </Card>
    </>
  );
};

export default InputField;
