import { Fragment } from "react";
///import { useSelector, useDispatch } from "react-redux";
///import { Outlet } from "react-router-dom";
///import { Link } from "react-router-dom";

///import CartIcon from "../../../components/cart-icon/cart-icon.component";
///import CartDropDown from "../../../components/cart-dropdown/cart-dropdown.component";

///import { selectIsCartOpen } from "../../../store/cart/cart.selector";
///import { selectCurrentUser } from "../../../store/user/user.selector";
///import { signOutStart } from "../../../store/user/user.action";

import styled from "styled-components";
import "../../../index.css";

const NavLinksContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const LinksWrapper = styled.div`
  display: flex;
  height: 100%;
  list-style: none;
  align-items: center;
  justify-content: flex-end;
`;

export function NavLinks() {
  ///const currentUser = useSelector(selectCurrentUser);///
  ///
  ///const isCartOpen = useSelector(selectIsCartOpen);
  // const dispatch = useDispatch();

  ///const signOutUser = () => dispatch(signOutStart());

  return (
    <Fragment>
      <NavLinksContainer>
        <LinksWrapper>
          <div className="nav-link" to="">
            SHOP
          </div>
          <div className="nav-link" to="">
            ABOUT
          </div>
          <div className="nav-link" to="">
            BLOG
          </div>
          <div className="nav-link" to="">
            LIBRARY
          </div>
          <div className="nav-link" to="">
            RECIPES
          </div>
          <div className="nav-link" to="">
            SIGN IN
          </div>
          <div>CART</div>
        </LinksWrapper>
      </NavLinksContainer>
    </Fragment>
  );
}
