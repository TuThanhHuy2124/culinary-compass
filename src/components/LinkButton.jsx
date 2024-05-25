import { Button } from "@material-tailwind/react";
import { Link, Outlet } from "react-router-dom";

export function LinkButton(props) {
  return <Link to={props.destination}><Button className="!text-base !bg-transparent !shadow-none hover:!bg-yellow-400 hover:!shadow-lg !text-blue-800">{props.name}</Button></Link>;
}