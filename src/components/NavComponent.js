import { Component } from 'react';
import { Navbar, NavbarBrand, Collapse, Nav, NavItem, NavLink, DropdownToggle, DropdownMenu, DropdownItem, NavbarToggler } from 'reactstrap';

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }

    toggle(open) {
        this.setState({isOpen: !open})
    }



    render() {

        return(
            <Navbar className="sticky-top" color="dark" dark expand="md">
            <NavbarBrand href="/">
              <img src="./assets/images/PPI_logo_blue.png" width="50px" height="auto"></img>
              Player Power Index
            </NavbarBrand>
            <NavbarToggler onClick={() => this.toggle(this.state.isOpen)} />
            <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                      <NavLink href="#association">For Associations</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="#coaches">For Coaches</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="/">Login</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
          </Navbar>
        )
    }
}

export default Navigation;