import { Input } from "@material-tailwind/react";
 
export function CustomInput({ id, name, value, onChange }) {
  return (
    <div className="w-full">
      <Input id={id != null ? id: "input"} label={name} defaultValue={value} onChange={onChange}/>
    </div>
  );
}