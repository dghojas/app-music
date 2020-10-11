import React from 'react';
import { ProfileMenuContainer, ProfileMenuLink } from './navbarStyles';

const NavbarProfileMenu = ({ open }) => {
    return open ? (
        <ProfileMenuContainer>
            <ProfileMenuLink href="https://open.spotify.com" target="_blank">
                Cuenta
            </ProfileMenuLink>
        </ProfileMenuContainer>
    ) : null;
};

export default NavbarProfileMenu;
