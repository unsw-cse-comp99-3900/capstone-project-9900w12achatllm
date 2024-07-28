import React from 'react';
import { ChakraProvider, Box, Flex, Heading, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, VStack, Link } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes, Link as RouterLink } from 'react-router-dom';

// Import page components
import SupportingTheories from './pages/SupportingTheories';
import ModelIntroduction from './pages/ModelIntroduction';
import FineTuningMethod from './pages/FineTuningMethod';
import DatasetIntroduction from './pages/DatasetIntroduction';
import ModelA from './pages/ModelA';
import ModelB from './pages/ModelB';
import ModelC from './pages/ModelC';
import FineTuningMethod1 from './pages/FineTuningMethod1';
import FineTuningMethod2 from './pages/FineTuningMethod2';
import FineTuningMethod3 from './pages/FineTuningMethod3';
import Dataset1 from './pages/Dataset1';
import Dataset2 from './pages/Dataset2';
import Summary from './pages/Summary';
import LossComparison from './pages/LossComparison'; // Import the new page component
import Page from './Page';  // Assuming Page is a generic page component

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
                    <Link as={RouterLink} to="/theories">Supporting Theories</Link>
                    <Link as={RouterLink} to="/model-introduction">Model Introduction</Link>
                    <Link as={RouterLink} to="/fine-tuning-method">Fine-Tuning Method Introduction</Link>
                    <Link as={RouterLink} to="/dataset-introduction">Dataset Introduction</Link>
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
                          <Link as={RouterLink} to="/model-a">Qwen2-1.5B-instruct</Link>
                          <Link as={RouterLink} to="/model-b">Qwen2-0.5B-instruct</Link>
                          <Link as={RouterLink} to="/model-c">Phi-3-mini-4k-instruct</Link>
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
                          <Link as={RouterLink} to="/fine-tuning-method1">Lora</Link>
                          <Link as={RouterLink} to="/fine-tuning-method2">QLora</Link>
                          <Link as={RouterLink} to="/fine-tuning-method3">Freeze</Link>
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
                          <Link as={RouterLink} to="/dataset1">MedQA</Link>
                          <Link as={RouterLink} to="/dataset2">PubMedQA</Link>
                        </VStack>
                      </AccordionPanel>
                    </AccordionItem>

                    {/* 新增的 Loss Comparison 链接 */}
                    <AccordionItem>
                      <AccordionButton>
                        <Box flex="1" textAlign="left">
                          Loss Comparison
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                      <AccordionPanel>
                        <Link as={RouterLink} to="/loss-comparison">Loss Comparison</Link>
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
                  <Link as={RouterLink} to="/summary">Summary</Link>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>

          <Box flex="1" p="4">
            <Routes>
              <Route path="/theories" element={<SupportingTheories />} />
              <Route path="/model-introduction" element={<ModelIntroduction />} />
              <Route path="/fine-tuning-method" element={<FineTuningMethod />} />
              <Route path="/dataset-introduction" element={<DatasetIntroduction />} />
              <Route path="/model-a" element={<ModelA />} />
              <Route path="/model-b" element={<ModelB />} />
              <Route path="/model-c" element={<ModelC />} />
              <Route path="/fine-tuning-method1" element={<FineTuningMethod1 />} />
              <Route path="/fine-tuning-method2" element={<FineTuningMethod2 />} />
              <Route path="/fine-tuning-method3" element={<FineTuningMethod3 />} />
              <Route path="/dataset1" element={<Dataset1 />} />
              <Route path="/dataset2" element={<Dataset2 />} />
              <Route path="/summary" element={<Summary />} />
              <Route path="/loss-comparison" element={<LossComparison />} /> {/* Add the new route */}
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



