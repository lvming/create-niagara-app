import React, { forwardRef } from "react";
import { NavLink, NavLinkProps } from "react-router-dom";

import Button, { ButtonProps } from "@material-ui/core/Button";

type NavLinkButtonProps = ButtonProps & NavLinkProps;

const MyNavLink = forwardRef<HTMLAnchorElement | null, any>((props, ref) => (
  <NavLink {...props} innerRef={ref} />
));

const NavLinkButton = (props: NavLinkButtonProps) => (
  <Button {...props} component={MyNavLink as any}>
    {props.children}
  </Button>
);

export default NavLinkButton;
