import React from "react";
import { Link } from "react-router-dom";

import {
  HeaderNavigation,
  ALIGN,
  StyledNavigationList,
  StyledNavigationItem,
} from "baseui/header-navigation";
import { StyledLink } from "baseui/link";
import { Button } from "baseui/button";

const TopNav = () => {
  return (
    <div className="topNav">
      <HeaderNavigation>
        <StyledNavigationList $align={ALIGN.left}>
          <StyledNavigationItem>Shoes Shop</StyledNavigationItem>
        </StyledNavigationList>
        <StyledNavigationList $align={ALIGN.center} />
        <StyledNavigationList $align={ALIGN.right}>
          <StyledNavigationItem>
            <StyledLink>
              <Link to="/">Home</Link>
            </StyledLink>
          </StyledNavigationItem>
          <StyledNavigationItem>
            <StyledLink>
              <Link to="/products">Products</Link>
            </StyledLink>
          </StyledNavigationItem>
        </StyledNavigationList>
        <StyledNavigationList $align={ALIGN.right}>
          <StyledNavigationItem>
            <Link to="/cart">
              <Button>Cart</Button>
            </Link>
          </StyledNavigationItem>
        </StyledNavigationList>
      </HeaderNavigation>
    </div>
  );
};

export default TopNav;
