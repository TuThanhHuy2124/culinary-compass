import { Button } from "@material-tailwind/react";
import { Link, Outlet } from "react-router-dom";

export function LinkButton(props) {
  return <Link to={props.destination}><Button>{props.name}</Button></Link>;
}