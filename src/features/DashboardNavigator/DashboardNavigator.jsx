import styled from '@emotion/styled';
import React, { useState } from 'react';
import NavLinks from './components/NavLinks';

// TODO: Replace some values with { theme }
const DashboardContainer = styled.div`
  background-color: white;
  border-radius: 1000px;

  position: relative;
  z-index: 1;

  height: 40%;
  width: 30%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  /* Shadow Logic */
  border: 5px solid black;
  box-shadow: 1px 1px 50px rgba(0, 0, 0, 0.8);

  transition: transform 200ms;
  transition: box-shadow 300ms;

  &:hover {
    /* box-shadow: 1px 1px 20px rgba(0, 0, 0, 1); */
    box-shadow: 1px 1px 50px lightblue;
  }
`;

const TextTesting = styled.div`
  margin: 20px;
  font-size: ${({ size }) => (size === 's' ? '30px' : '60px')};
`;

/* Constants */
const rightDancer = '(> -_-)>';
const leftDancer = '<(-_- <)';
const defaultDancer = '^(^_^)^';

/* Helpers */
const isEven = n => n % 2 === 0;

/* Render */
export const DashboardNavigator = props => {
  // TODO: Figure out what should be in a Context
  // ==> and what should be handled locally
  const [isHovering, setIsHovering] = useState(false);
  const [count, setCount] = useState(0);
  const [currentDancer, setCurrentDancer] = useState(defaultDancer);
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const links = [
    {
      href: 'www.google.com',
      label: 'No Evil Here'
    },
    {
      href: 'www.wikipedia.com',
      label: 'For Nerds',
      isCenterLink: true
    },
    {
      href: 'www.liar.com',
      label: 'Learn to Lie'
    }
  ];

  /* Handlers */
  const handleMouseEnter = () => {
    setIsHovering(true);
    setCount(c => c + 1);
    setCurrentDancer(isEven(count) ? leftDancer : rightDancer);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setCurrentDancer(defaultDancer);
  };

  return (
    <DashboardContainer
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => setIsNavExpanded(cur => !cur)}
    >
      <TextTesting>{'Welcome'}</TextTesting>
      <TextTesting>{currentDancer}</TextTesting>
      <TextTesting size="s">{'Get down, bruh'}</TextTesting>
      <NavLinks
        links={links}
        isNavExpanded={isNavExpanded}
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
      />
    </DashboardContainer>
  );
};
