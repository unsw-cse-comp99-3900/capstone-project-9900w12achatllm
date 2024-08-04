import React from 'react';
import { ChakraProvider, Box, Flex, Heading, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, VStack, Link } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes, Link as RouterLink } from 'react-router-dom';
import IntroLLM from './pages/IntroLLM';
import StructureLLM from './pages/StructureLLM';
import StructureFineTuningMethods from './pages/StructureFineTuningMethods';
import Models from './pages/Models';
import FineTuningMethods from './pages/FineTuningMethods';
import Datasets from './pages/Datasets';
import LLaMABoard from './pages/LLaMABoard';
import CommandLine from './pages/CommandLine';
import HyperparameterSetting from './pages/HyperparameterSetting';
import FineTuningComparison from './pages/FineTuningComparison';
import LLMComparison from './pages/LLMComparison';
import UserDrivenEvaluationConclusion from './pages/UserDrivenEvaluationConclusion';
import Limitations from './pages/Limitations';
import DataTransform from './pages/DataTransform';
import HyperparameterExplore from './pages/HyperparameterExplore';
import References from './pages/References';
import Page from './Page';
import Qwen05BInstruct from './pages/Qwen05BInstruct'; 
import Qwen15BInstruct from './pages/Qwen15BInstruct'; 
import Phi3Mini4KInstruct from './pages/Phi3Mini4KInstruct';
import IntroductionAssessmentIndicators from './pages/IntroductionAssessmentIndicators';
import StructureFineModels from './pages/StructureFineModels';


const App = () => {
  return (
    <ChakraProvider>
      <Router>
        <Flex minH="100vh">
          <Box w="280px" bg="gray.800" color="white" p="4" overflowY="auto" height="100vh">
            <Heading size="md" mb="4">COMP9900 CHATLLM REPORT</Heading>

            <Accordion allowMultiple>
              {/* 1. System Architecture Diagram */}
              <AccordionItem>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    System Architecture Diagram
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel>
                  <VStack align="start" spacing="4">
                    <Link as={RouterLink} to="/introllm">Introduction of Large Language Models</Link>
                    <Link as={RouterLink} to="/StructureLLM">The Structure of Large Language Models</Link>
                    <Link as={RouterLink} to="/StructureFineTuningMethods">The Structure of Fine-tuning Methods</Link>
                    <Link as={RouterLink} to="/StructureFineModels">The Structure of Fine-tuning the Models</Link>
                  </VStack>
                </AccordionPanel>
              </AccordionItem>

              {/* 2. Design Justification */}
              <AccordionItem>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Design Justifications
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel>
                  <VStack align="start" spacing="4">
                    <Link as={RouterLink} to="/models">The models we choose</Link>
                    <Link as={RouterLink} to="/fine-tuning-methods">The fine-tuning methods we choose</Link>
                    <Link as={RouterLink} to="/datasets">The dataset we choose</Link>
                  </VStack>
                  <AccordionItem>
                      <AccordionButton>
                        <Box flex="1" textAlign="left">
                          Introduction of LLaMA-Factory
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                      <AccordionPanel>
                        <VStack align="start" spacing="4">
                          <Link as={RouterLink} to="/llama-board">LLaMA Board</Link>
                          <Link as={RouterLink} to="/command-line">Command Line</Link>
                        </VStack>
                      </AccordionPanel>
                    </AccordionItem>
                </AccordionPanel>
              </AccordionItem>

              {/* 3. User-Driven Evaluation of Solution */}
              <AccordionItem>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    User-Driven Evaluation of Solution
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel>
                  <VStack align="start" spacing="4">
                    <Link as={RouterLink} to="/introduction-assessment-indicators">Introduction of the Assessment Indicators</Link>
                    <Link as={RouterLink} to="/hyperparameter-setting-and-result">Hyperparameter Setting and Result</Link>
                    <Link as={RouterLink} to="/Fine-tuning-Method-Comparison&Discussion">Fine-tuning Method Comparison & Discussion</Link>
                    <Link as={RouterLink} to="/LLM-Comparison&Discussion">Large Language Model Comparison & Discussion</Link>
                    <Link as={RouterLink} to="/user-driven-evaluation-conclusion">Conclusion</Link>
                  </VStack>
                </AccordionPanel>
              </AccordionItem>

              {/* 4. Limitations and Future Work */}
              <AccordionItem>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Limitations and Future Work
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel>
                  <Link as={RouterLink} to="/limitations&future-work">Limitations and Future Work</Link>
                </AccordionPanel>
              </AccordionItem>

              {/* 5. Engineering Practices*/}
              <AccordionItem>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Engineering Practices
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel>
                  <VStack align="start" spacing="4">
                    <Link as={RouterLink} to="/data-transform">Data Transform</Link>
                    <Link as={RouterLink} to="/hyperparameter-explore">Exploring Hyperparameter Setting</Link>
                  </VStack>
                </AccordionPanel>
              </AccordionItem>

              {/* 6. Loss Comparison*/}
              <AccordionItem>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Loss Comparison
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel>
                  <VStack align="start" spacing="4">
                    <Link as={RouterLink} to="/loss-comparison/qwen-05b-instruct">Qwen2-0.5B-instruct</Link>
                    <Link as={RouterLink} to="/loss-comparison/qwen-15b-instruct">Qwen2-1.5B-instruct</Link>
                    <Link as={RouterLink} to="/loss-comparison/phi3-mini-4k-instruct">Phi3-mini-4K-instruct</Link>
                  </VStack>
                </AccordionPanel>
              </AccordionItem>

              {/* 7. References*/}
              <AccordionItem>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    References
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel>
                  <Link as={RouterLink} to="/references">References</Link>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>

          <Box flex="1" p="4" overflowY="auto" height="100vh">
            <Routes>
              <Route path="/introllm" element={<IntroLLM />} />
              <Route path="/StructureLLM" element={<StructureLLM />} />
              <Route path="/StructureFineTuningMethods" element={<StructureFineTuningMethods />} />
              <Route path="/StructureFineModels" element={<StructureFineModels />} />
              <Route path="/models" element={<Models />} />
              <Route path="/fine-tuning-methods" element={<FineTuningMethods />} />
              <Route path="/datasets" element={<Datasets />} />
              <Route path="/llama-board" element={<LLaMABoard />} />
              <Route path="/command-line" element={<CommandLine />} />
              <Route path="/hyperparameter-setting-and-result" element={<HyperparameterSetting />} />
              <Route path="/Fine-tuning-Method-Comparison&Discussion" element={<FineTuningComparison />} />
              <Route path="/LLM-Comparison&Discussion" element={<LLMComparison />} />
              <Route path="/user-driven-evaluation-conclusion" element={<UserDrivenEvaluationConclusion />} />
              <Route path="/limitations&future-work" element={<Limitations />} />
              <Route path="/data-transform" element={<DataTransform />} />
              <Route path="/hyperparameter-explore" element={<HyperparameterExplore />} />
              <Route path="/loss-comparison/qwen-05b-instruct" element={<Qwen05BInstruct />} />
              <Route path="/loss-comparison/qwen-15b-instruct" element={<Qwen15BInstruct />} />
              <Route path="/loss-comparison/phi3-mini-4k-instruct" element={<Phi3Mini4KInstruct />} />
              <Route path="/references" element={<References />} />
              <Route path="/introduction-assessment-indicators" element={<IntroductionAssessmentIndicators />} />
              <Route path="/page/:pageId" element={<Page />} />
              <Route path="/" element={<IntroLLM />} />
            </Routes>
          </Box>
        </Flex>
      </Router>
    </ChakraProvider>
  );
};

export default App;



