import { Component } from 'react';
import { Link } from 'react-router-dom';
import {
    Navbar,
    NavbarBrand,
    Collapse,
    Nav,
    NavItem,
    NavLink,
    NavbarToggler,
    Dropdown,
    DropdownItem,
    DropdownToggle,
    DropdownMenu,
    Button
} from 'reactstrap';

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            dropDownOpen: false
        }
    }

    toggle(open) {
        this.setState({ isOpen: !open })
    }

    toggleDropDown() {
        this.setState({ dropDownOpen: !this.state.dropDownOpen });
    }

    render() {
        return (
            <Navbar className="sticky-top" color="dark" dark expand="md">
                <NavbarBrand href="/">
                    <img src="./assets/images/PPI_logo_blue.png" width="50px" height="auto" alt="PPI Logo"></img>
              Player Power Index
            </NavbarBrand>
                <NavbarToggler onClick={() => this.toggle(this.state.isOpen)} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    {!this.props.isLoggedIn ?
                        <Nav className="ml-auto" navbar>
                            {/* <NavItem>
                                <NavLink href="#association">For Associations</NavLink>
                            </NavItem> */}
                            {/* <NavItem>
                                <NavLink href="#coaches">For Coaches</NavLink>
                            </NavItem> */}
                            <NavItem>
                                <NavLink>
                                    <Link to="/login" onClick={() => this.toggle(this.state.isOpen)}>Login</Link>
                                </NavLink>
                            </NavItem>
                        </Nav> :
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="#" onClick={() => this.toggle(this.state.isOpen)}>Profile</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink onClick={() => this.toggle(this.state.isOpen)}>
                                    <button className="btn btn-outline-danger ml-3" onClick={this.props.logout} >Sign Out</button>
                                </NavLink>
                            </NavItem>
                        </Nav>
                    }
                </Collapse>
            </Navbar>
        )
    }
}

export default Navigation;