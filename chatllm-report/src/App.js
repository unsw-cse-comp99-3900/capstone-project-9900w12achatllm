import React from 'react';
import { ChakraProvider, Box, Flex, Heading, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, VStack, Link } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes, Link as RouterLink } from 'react-router-dom';
import Page from './Page';

const App = () => {
  return (
    <ChakraProvider>
      <Router>
        <Flex minH="100vh">
          <Box w="240px" bg="gray.800" color="white" p="4">
            <Heading size="md" mb="4">COMP9900 CHATLLM REPORT</Heading>
            <Accordion allowMultiple>
              <AccordionItem>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Background
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel>
                  <VStack align="start" spacing="4">
                    <Link as={RouterLink} to="/page/theory">Supporting Theories</Link>
                    <Link as={RouterLink} to="/page/model-introduction">Model Introduction</Link>
                    <Link as={RouterLink} to="/page/fine-tuning-method">Fine-Tuning Method Introduction</Link>
                    <Link as={RouterLink} to="/page/dataset-introduction">Dataset Introduction</Link>
                  </VStack>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Experimental design
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel>
                  <Accordion allowMultiple>
                    <AccordionItem>
                      <AccordionButton>
                        <Box flex="1" textAlign="left">
                          Comparison Among Models
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                      <AccordionPanel> 
                        <VStack align="start" spacing="4">
                          <Link as={RouterLink} to="/page/model-a">Qwen2-1.5B-instruct</Link>
                          <Link as={RouterLink} to="/page/model-b">Qwen2-0.5B-instruct</Link>
                          <Link as={RouterLink} to="/page/model-c">Phi-3-mini-4k-instruct</Link>
                        </VStack>
                      </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                      <AccordionButton>
                        <Box flex="1" textAlign="left">
                          Comparison Among Fine-Tuning Methods
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                      <AccordionPanel>
                        <VStack align="start" spacing="4">
                          <Link as={RouterLink} to="/page/fine-tuning-method1">Lora</Link>
                          <Link as={RouterLink} to="/page/fine-tuning-method2">QLora</Link>
                          <Link as={RouterLink} to="/page/fine-tuning-method3">Freeze</Link>
                        </VStack>
                      </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                      <AccordionButton>
                        <Box flex="1" textAlign="left">
                          Comparison Among dataset
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                      <AccordionPanel>
                        <VStack align="start" spacing="4">
                          <Link as={RouterLink} to="/page/dataset1">MedQA</Link>
                          <Link as={RouterLink} to="/page/dataset2">PubMedQA</Link>
                        </VStack>
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Summary
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel>
                  <Link as={RouterLink} to="/page/summary">Summary</Link>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>

          <Box flex="1" p="4">
            <Routes>
              <Route path="/page/:pageId" element={<Page />} />
              <Route path="/" element={<Page title="Home" />} />
            </Routes>
          </Box>
        </Flex>
      </Router>
    </ChakraProvider>
  );
};

export default App;
