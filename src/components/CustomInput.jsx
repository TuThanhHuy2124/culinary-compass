import { Input } from "@material-tailwind/react";
 
export function CustomInput(props) {
  return (
    <div className="w-full">
      <Input label={props.name} />
    </div>
  );
}