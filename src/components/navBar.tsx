import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";

export default function navBar() {
  return (
    <Navbar>
      <NavbarBrand>
        <Link href="#">
          <img src="pricePulseLogoV1.png" alt="PricePulse Logo" width={"128"} />
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#database">
            Procedure Database
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#aboutUs">
            About Us
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#customers">
            Our Customers
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          {/* <Button as={Link} color="primary" href="#" variant="flat">
            Try the Demo
          </Button> */}
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
