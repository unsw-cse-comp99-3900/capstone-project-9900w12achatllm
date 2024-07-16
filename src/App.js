import React from 'react';
import { ChakraProvider, Box, Flex, Heading, Textarea, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, VStack, Link } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes, Link as RouterLink } from 'react-router-dom';

// 示例页面组件
const Page = ({ title }) => (
  <Box>
    <Heading>{title}</Heading>
    <Textarea placeholder={`这是${title}页面的内容`} />
  </Box>
);

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
                    实验背景介绍
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel>
                  <VStack align="start" spacing="4">
                    <Link as={RouterLink} to="/theory">理论基础</Link>
                    <Link as={RouterLink} to="/model-introduction">模型介绍</Link>
                    <Link as={RouterLink} to="/fine-tuning-method">微调方法介绍</Link>
                    <Link as={RouterLink} to="/dataset-introduction">数据集介绍</Link>
                  </VStack>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    实验设计
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel>
                  <Accordion allowMultiple>
                    <AccordionItem>
                      <AccordionButton>
                        <Box flex="1" textAlign="left">
                          同一模型不同微调方法对比
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                      <AccordionPanel>
                        <VStack align="start" spacing="4">
                          <Link as={RouterLink} to="/model-a">模型A</Link>
                          <Link as={RouterLink} to="/model-b">模型B</Link>
                          <Link as={RouterLink} to="/model-c">模型C</Link>
                        </VStack>
                      </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                      <AccordionButton>
                        <Box flex="1" textAlign="left">
                          同一微调方法不同模型对比
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                      <AccordionPanel>
                        <VStack align="start" spacing="4">
                          <Link as={RouterLink} to="/fine-tuning-method1">微调方法1</Link>
                          <Link as={RouterLink} to="/fine-tuning-method2">微调方法2</Link>
                          <Link as={RouterLink} to="/fine-tuning-method3">微调方法3</Link>
                        </VStack>
                      </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                      <AccordionButton>
                        <Box flex="1" textAlign="left">
                          同一模型不同参数对比
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                      <AccordionPanel>
                        <VStack align="start" spacing="4">
                          <Link as={RouterLink} to="/dataset1">数据集1</Link>
                          <Link as={RouterLink} to="/dataset2">数据集2</Link>
                        </VStack>
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    总结
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel>
                  <Link as={RouterLink} to="/summary">总结</Link>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>

          <Box flex="1" p="4">
            <Routes>
              <Route path="/theory" element={<Page title="理论基础" />} />
              <Route path="/model-introduction" element={<Page title="模型介绍" />} />
              <Route path="/fine-tuning-method" element={<Page title="微调方法介绍" />} />
              <Route path="/dataset-introduction" element={<Page title="数据集介绍" />} />
              <Route path="/model-a" element={<Page title="模型A" />} />
              <Route path="/model-b" element={<Page title="模型B" />} />
              <Route path="/model-c" element={<Page title="模型C" />} />
              <Route path="/fine-tuning-method1" element={<Page title="微调方法1" />} />
              <Route path="/fine-tuning-method2" element={<Page title="微调方法2" />} />
              <Route path="/fine-tuning-method3" element={<Page title="微调方法3" />} />
              <Route path="/dataset1" element={<Page title="数据集1" />} />
              <Route path="/dataset2" element={<Page title="数据集2" />} />
              <Route path="/summary" element={<Page title="总结" />} />
              <Route path="/" element={<Page title="首页" />} />
            </Routes>
          </Box>
        </Flex>
      </Router>
    </ChakraProvider>
  );
};

export default App;







