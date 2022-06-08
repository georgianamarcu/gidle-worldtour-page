import React from "react";
import logo from "../assets/logo.png";

import {
  HomepageWrapper,
  HomepageNavBar,
  Logo,
  HomepageMain,
  HomepageNavList,
  HomepageNavListItem,
  HomepageNavListLink,
  HomepageTitle,
  HomepageSubtitle,
  HomepageMainBtn,
} from "../components/Homepage-components";

function Homepage() {
  return (
    <HomepageWrapper>
      <HomepageNavBar>
        <Logo src={logo} />
        <HomepageNavList>
          <HomepageNavListItem>
            <HomepageNavListLink>Merchandise</HomepageNavListLink>
          </HomepageNavListItem>
          <HomepageNavListItem>
            <HomepageNavListLink>About</HomepageNavListLink>
          </HomepageNavListItem>
        </HomepageNavList>
      </HomepageNavBar>
      <HomepageMain>
        <HomepageTitle>
          JUST ME <br /> ()I- DLE
        </HomepageTitle>
        <HomepageSubtitle>2022 WORLD TOUR</HomepageSubtitle>
        <HomepageMainBtn>BUY TICKETS</HomepageMainBtn>
      </HomepageMain>
    </HomepageWrapper>
  );
}

export default Homepage;
