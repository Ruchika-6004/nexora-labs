import React from "react";
import { NavLink } from "react-router-dom";

import Container from "../ui/Container";

const Navbar = () => {
    return (
        <header className="border-b border-gray-200">
            <Container>
                <nav className="flex h-16 items-center gap-8">
                    <NavLink to="/">Home</NavLink>

                    <NavLink to="/solutions">Solutions</NavLink>

                    <NavLink to="/innovation">Innovation</NavLink>

                    <NavLink to="/case-studies">
                        Case Studies
                    </NavLink>

                    <NavLink to="/contact">Contact</NavLink>
                </nav>
            </Container>
        </header>
    );
};

export default Navbar;