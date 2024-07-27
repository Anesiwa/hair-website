import React from "react";
/// import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
/// import { NavLinks } from "./navLinks";   {!isMobile && <NavLinks />}
///import { DeviceSize } from "./responsive/index.jsx";
import { Fragment } from "react";
/// import { MobileNavLinks } from "./mobileNavLinks"; {isMobile && <MobileNavLinks />}
import "../../../index.css";
///import { Link } from "react-router-dom";
import { NavLinks } from "./navLinks";

const NavbarContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

const LeftSection = styled.div`
  height: 100%;
  width: 70px;
  padding: 25px;
`;

const RightSection = styled.div`
  width: 70%;
  height: 100%;
  padding: 25px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export function Navbar() {
  return (
    <div>
      <Fragment>
        <NavbarContainer>
          <LeftSection>
            <div>
              <div>insert logo</div>
            </div>
          </LeftSection>
          <RightSection>
            <NavLinks />
          </RightSection>
        </NavbarContainer>
      </Fragment>
    </div>
  );
}
