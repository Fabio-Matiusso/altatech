import styled from 'styled-components';
import React, { useState } from 'react';
import RightNav from './RightNav';
import { Props } from './types';
import { StyledBurger } from './styles';

export default function Burger() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <React.Fragment>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <RightNav open={open} />
    </React.Fragment>
  );
}
