import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
} from "@heroui/react";


import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { tokenContext } from "../../context/tokenContext";


export default function NavbarComponent() {
let {setToken} = useContext(tokenContext)
let navigate = useNavigate()

function logoutSystem() {
  localStorage.removeItem('token');
  setToken(null);
  navigate('/auth/login')

}


  return (
    <Navbar>
      <NavbarBrand>

        <p className="font-bold text-sky-900 text-3xl">LinkedPost</p>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex " justify="end">

  
      </NavbarContent>

      <NavbarContent as="div" justify="end">
              <NavbarItem>
        <Link to={'/'} color="foreground" href="#">
            Home
          </Link>
        </NavbarItem>
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="primary"
              name="Jason Hughes"
              size="sm"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">zoey@example.com</p>
            </DropdownItem>
            <DropdownItem key="settings"><Link to={'/profile'}>Profile</Link></DropdownItem>
            <DropdownItem onClick={() => { logoutSystem()}} key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
}

