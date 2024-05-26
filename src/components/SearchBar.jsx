import React, { useState } from "react";
import { DocSearch } from "@docsearch/react";
import {
  Menu,
  MenuHandler,
  Button,
  MenuList,
  MenuItem,
  Input,
} from "@material-tailwind/react";
 
export function SearchBar({renderOption, handleMenu, handleClick}) {
  return (
    <div className="mt-8">
        <Menu
          dismiss={{
            itemPress: false,
          }}
        >
          <MenuHandler>
            <Button className="w-[30vw] !bg-yellow-400 !text-blue-700 !text-base">Browse Food</Button>
          </MenuHandler>
          <MenuList>
            <Input
              label="Search"
              containerProps={{
                className: "mb-4",
              }}
              onChange={handleMenu}
            />
            {renderOption.map((option, i) => {
              return <>{(i < 5) && <MenuItem onClick={handleClick} key={i}>{option}</MenuItem>}</>
            })}
          </MenuList>
        </Menu>
    </div>
  );
}