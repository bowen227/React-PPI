import { Component } from 'react';
import { Navbar, NavbarBrand, Collapse, Nav, NavItem, NavLink, NavbarToggler } from 'reactstrap';
import { Link } from 'react-router-dom';

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
              <img src="./assets/images/PPI_logo_blue.png" width="50px" height="auto" alt="PPI Logo"></img>
              Player Power Index
            </NavbarBrand>
            <NavbarToggler onClick={() => this.toggle(this.state.isOpen)} />
            <Collapse isOpen={this.state.isOpen} navbar>
              {!this.props.isLoggedIn ? 
                <Nav className="ml-auto" navbar>
                    <NavItem>
                      <NavLink href="#association">For Associations</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="#coaches">For Coaches</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="/login">Login</NavLink>
                    </NavItem>
                </Nav> :
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink href="/">Profile</NavLink>
                  </NavItem>
                </Nav>
              }
            </Collapse>
          </Navbar>
        )
    }
}

export default Navigation;