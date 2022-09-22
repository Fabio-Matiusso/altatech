import styled from 'styled-components';
import { Props, Links } from './types';

export const Ul = styled.ul<Props>`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  background: rgba(255, 255, 255, 0.04);
  width: 33%;
  text-align: center;
  justify-content: flex-end;
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0d2538;
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
  }
`;

export const LiStyled = styled.li`
  cursor: pointer;
  list-style: none;
  margin: 0px;
  display: flex;
  color: #fff;
  text-decoration: none;
  margin: 10px;
`;

export default function RightNav({ open }: Props) {
  return <Ul open={open}></Ul>;
}
