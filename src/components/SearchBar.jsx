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
 
export function SearchBar() {
  const [searching, setSearching] = useState(false);

  const handleMenu = (e) => {
    console.log(e);
    if(e.target.value === "") {setSearching(false)}
    else setSearching(true)
  }
  
  return (
    <div className="m-4">
        <Menu
          dismiss={{
            itemPress: false,
          }}
        >
          <MenuHandler>
            <Button>Browse Food</Button>
          </MenuHandler>
          <MenuList>
            <Input
              label="Search"
              containerProps={{
                className: "mb-4",
              }}
              onChange={handleMenu}
            />
            <MenuItem>Menu Item 1</MenuItem>
            <MenuItem>Menu Item 2</MenuItem>
            <MenuItem>Menu Item 3</MenuItem>
          </MenuList>
        </Menu>
    </div>
  );
}