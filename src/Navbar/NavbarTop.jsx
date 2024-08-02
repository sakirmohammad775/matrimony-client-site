import { Avatar, Dropdown, Navbar } from "flowbite-react";
import logo from "../assets/kevinRushLogo.png"

const NavbarTop = () => {
  return (
    <>
      <Navbar fluid rounded className="bg-transparent text-white mt-6">
        <Navbar.Brand href="https://flowbite-react.com">
          <img src={logo} className="mr-3 h-6 sm:h-9" />
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">name@flowbite.com</span>
            </Dropdown.Header>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse className="text-white">
          <Navbar.Link className="text-white bg-white" href="#" active>Home</Navbar.Link>
          <Navbar.Link className="text-white" href="#">About</Navbar.Link>
          <Navbar.Link className="text-white" href="#">Services</Navbar.Link>
          <Navbar.Link className="text-white" href="#">Pricing</Navbar.Link>
          <Navbar.Link className="text-white" href="#"> Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavbarTop;