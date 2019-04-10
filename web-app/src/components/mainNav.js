import React, { Component } from 'react';
import {
    Navbar, Nav, NavLink as BNavLink,
    NavbarBrand,
    NavbarToggler, NavItem,
    Collapse,
    Container
} from 'reactstrap';
import { Auth } from "./../services";
import { NavLink } from "react-router-dom";
import firebase from "firebase";

class MainNav extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        const navLinkList = [
            { name: "Home", path: "/" },
            { name: "Login / SignUp", path: "/loginsignup", Auth: "NotAuth" },
            { name: "Profile", path: "/profile", Auth: "Auth" },
            { name: "Profile Edit", path: "/profilebasics", Auth: "Auth" },
            { name: "Logout", path: "/logout", Auth: "Auth", onClick: Auth.onLogout },
        ];

        return (
            <div className="mb-1">

                <Navbar color="dark" dark expand="md">
                    <Container>
                        <NavbarBrand href="/">App Profile</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <NavBuilder navLinkList={navLinkList} />

                        </Collapse>
                    </Container>

                </Navbar>
            </div>
        )
    }
}

export default MainNav;

const NavBuilder = ({ navLinkList }) => {
    const currentUser = firebase.auth().currentUser;
    return (
        <Nav className="ml-auto" navbar>
            {navLinkList.map((navItem, index) => (
                (currentUser && navItem.Auth === "Auth") ||
                    (!currentUser && navItem.Auth === "NotAuth") ||
                    (navItem.Auth === "Normal" || !navItem.Auth) ?
                    <NavItem key={index}>
                        {navItem.onClick ?
                            <BNavLink onClick={navItem.onClick} className="nav-link">{navItem.name}</BNavLink>
                            :
                            <NavLink exact className="nav-link" to={navItem.path}>{navItem.name}</NavLink>}
                    </NavItem> : ""
            ))}
        </Nav>
    );
}