import React, { ChangeEvent, FocusEvent } from 'react';
import styled from 'styled-components';

export const ContainerInput = styled.div`
  padding: 15px;
`;

export const StyledInput = styled.input`
  background: #f4f5f7;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  outline: none;
  border: none;
  max-height: 40px;
  font-size: 1.1rem;
  padding: 8px 10px;
  width: 100%;
`;

export const spanError = styled.p`
  color: red;
`;

type InputProps = {
  colSpan: number;
  value: string;
  placeholder: string;
  setValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: boolean;
  helperText?: string;
};

export default function Input({
  colSpan,
  value,
  placeholder,
  setValue,
}: InputProps) {
  return (
    <ContainerInput style={{ gridColumn: `span ${colSpan}` }}>
      <StyledInput
        type="text"
        value={value}
        onChange={setValue}
        placeholder={placeholder}
      />
    </ContainerInput>
  );
}
