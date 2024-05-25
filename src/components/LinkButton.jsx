import { Button } from "@material-tailwind/react";
import { Link, Outlet } from "react-router-dom";

export function LinkButton(props) {
  return <Link to={props.destination}><Button className="!bg-yellow-400 !text-blue-800">{props.name}</Button></Link>;
}