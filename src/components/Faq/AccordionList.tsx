import styled from 'styled-components';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from '@chakra-ui/react';
import { questions } from './questions';
import { Questions } from './types';

export const Container = styled.section`
  width: 80%;
  margin: 0 auto;
  height: 120vh;
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  grid-template-columns: repeat(1, 1fr);
  align-content: center;

  @media (max-width: 600px) {
    height: 230vh;
  }
`;

export const Title = styled.h2`
  font-size: 2rem;
  justify-self: flex-start;
  width: 80%;
  margin: 0 auto;
  grid-column: span 12;
  font-weight: 500;
`;

export const Question = styled.h1`
  font-size: 1.5rem;
`;

export default function AccordionList() {
  return (
    <Container>
      <Title>FAQ.</Title>

      <Accordion
        defaultIndex={[0]}
        width="80%"
        margin="0 auto"
        backgroundColor="#EFF0F2"
        border="none"
        gridColumn="span 12"
      >
        {questions.map(({ title, answer }: Questions) => (
          <AccordionItem style={{ borderRadius: '8px', border: 'none' }}>
            <Question>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontSize="1.5rem">
                  {title}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </Question>

            <AccordionPanel background="#f4f5f7">{answer}</AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Container>
  );
}
