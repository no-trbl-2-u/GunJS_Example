import React from 'react';
import styled from '@emotion/styled';

const DancerContainer = styled.div`
  margin: 20px;
  font-size: 48px;
`;

export const Dancer = ({ dancer }) => {
  return <DancerContainer>{dancer}</DancerContainer>;
};
