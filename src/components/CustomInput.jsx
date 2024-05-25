import { Input } from "@material-tailwind/react";
 
export function CustomInput(props) {
  return (
    <div className="w-full">
      <Input id={props.id != null ? props.id: "input"} label={props.name} />
    </div>
  );
}