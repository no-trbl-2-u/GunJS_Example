import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import links from './navigationLinks.js';

/* Components */
const NavLinksContainer = styled.div`
  position: absolute;
  box-shadow: inset 1px 1px 62px lightblue, 1px 1px 62px lightblue;
  border: ${({ isNavExpanded }) =>
    isNavExpanded ? '50px solid rgba(255, 255, 255, 0.4);' : undefined};

  width: 150%;
  height: ${({ isNavExpanded }) => (isNavExpanded ? '140%' : '0px')};
  transition: height 400ms;
  border-radius: 1000px;
`;

const StyledList = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  margin-top: 0px;

  font-size: 28px;
`;

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
`;

const StyledListItem = styled.li`
  background-color: white;
  padding: 20px;
  border-radius: 50px;
  border: 4px solid black;

  box-shadow: 4px 4px 20px rgba(0, 0, 0, 1);

  transform: ${({ isCenterLink }) =>
    isCenterLink ? 'translateY(-100px)' : 'translateY(-30px)'};

  transition: box-shadow 400ms;
  transition: transform 300ms;

  &:hover {
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 1);
    background-color: rgba(255, 255, 255, 0.7);

    transform: ${({ isCenterLink }) =>
      isCenterLink ? 'translateY(-80px)' : 'translateY(-10px)'};
  }
`;

/* Render */
export const NavLinks = ({ isNavExpanded, handleMouseEnter, handleMouseLeave }) => {
  return (
    <NavLinksContainer isNavExpanded={isNavExpanded}>
      {isNavExpanded && (
        <StyledList>
          {links.map(({ to, label, isCenterLink }, idx) => (
            <StyledListItem
              key={`${label}-${idx}`}
              isCenterLink={isCenterLink}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <StyledLink to={to}>{label}</StyledLink>
            </StyledListItem>
          ))}
        </StyledList>
      )}
    </NavLinksContainer>
  );
};
