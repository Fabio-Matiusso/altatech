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
import { Container, Title, Question } from './styles';

export default function AccordionList() {
  return (
    <Container>
      <Title>FAQ.</Title>

      <Accordion
        allowMultiple
        defaultIndex={[0]}
        width="80%"
        margin="0 auto"
        backgroundColor="#EFF0F2"
        border="none"
        gridColumn="span 12"
      >
        {questions.map(({ title, answer }: Questions) => (
          <AccordionItem borderRadius="8px" border="none">
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
