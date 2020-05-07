import React from "react";
import { connect, styled } from "frontity";
import Link from "../link";

// const SubMenu = ({options, currentPageLink}) => (
//   <Menu submenu>
//     {options.map(({name, href, Menu}) => {
//       // Check if the link matched the current page url
//       const isCurrentPage = currentPageLink === href;
//       return (
//         <MenuItem key={name}>
//           {/* If link url is the current page, add `aria-current` for a11y */}
//           <MenuLink
//             link={href}
//             aria-current={isCurrentPage ? "page" : undefined}
//           >
//             {name}
//           </MenuLink>
//         </MenuItem>
//       );
//     })}
//   </Menu>
// )


const Menu = ({options, currentPageLink, submenu}) => (
  <StyledMenu submenu={submenu}>
    {options.map(({name, href, submenu}) => {
      // Check if the link matched the current page url
      const isCurrentPage = currentPageLink === href;
      return (
        <MenuItem key={name}>
          {/* If link url is the current page, add `aria-current` for a11y */}
          <MenuLink
            link={href}
            aria-current={isCurrentPage ? "page" : undefined}
          >
            {name}
          </MenuLink>
          { submenu && <Menu options={submenu} currentPageLink={currentPageLink} submenu/> }
        </MenuItem>
      );
    })}
  </StyledMenu>
)

/**
 * Navigation Component
 *
 * It renders the navigation links
 */

const Navigation = ({ state }) => (
  <NavWrapper>
    <MenuNav>
      <Menu options={state.theme.menu} currentPageLink={state.router.link} />
    </MenuNav>
  </NavWrapper>
);

export default connect(Navigation);

const NavWrapper = styled.div`
  align-items: center;
  display: flex;
`;

const MenuNav = styled.nav`
  display: none;
  @media (min-width: 1000px) {
    display: block;
    width: 100%;
  }
`;

const MenuItem = styled.li`
  font-size: inherit;
  line-height: 1.25;
  position: relative;
  margin: 0.8rem 0 0 1.6rem !important;

  @media (min-width: 1220px) {
    margin: 0.8rem 0 0 2.5rem !important;
  }
`;

const MenuLink = styled(Link)`
  display: block;
  line-height: 1.2;
  text-decoration: none;

  &:hover,
  &[aria-current="page"] {
    text-decoration: underline;
  }
`;

const StyledMenu = styled.ul`
  display: flex;
  flex-direction: ${({submenu}) => submenu && 'column'};
  visibility: ${({submenu}) => submenu && 'hidden'};
  position: ${({submenu}) => submenu && 'absolute'};
  font-size: 1.8rem;
  font-weight: 500;
  letter-spacing: -0.0277em;
  flex-wrap: wrap;
  justify-content: flex-end;
  list-style: none;
  margin: ${({submenu}) => submenu ? '10px' : 0};
  width: ${({submenu}) => submenu && '100px'};

  ${MenuItem}:hover & {
    visibility: ${({submenu}) => submenu && 'visible'};
  }

  @media (min-width: 1220px) {
    margin-top: ${({submenu}) => submenu ? '10px' : '-0.8rem'}; ;
    margin-right: 0px;
    margin-bottom: 0px;
    margin-left: -2.5rem;
  }
`;