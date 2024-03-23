import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";

export default function navBar() {
  return (
    <Navbar>
      <NavbarBrand>
        <p className="font-bold text-inherit">PricePulse</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Demo
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Customers
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Try the Demo
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
