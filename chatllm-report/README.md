# Frontend Setup and Overview for ChatLLM-Report

## How to Run the Application

To get the frontend up and running, please follow these steps:

1. **Navigate to the `chatllm-report` directory** in your terminal.
2. **Execute the command** `npm start` to start the application.
3. If you encounter any errors during the startup, it may be due to package dependency issues. In that case, try running:
`npm install react-mathjax-preview --legacy-peer-deps` to resolve these issues.
By following these instructions, you should be able to successfully launch the ChatLLM-Report web application.

## Frontend Overview
The ChatLLM-Report web application provides a user-friendly interface designed to align closely with the contents of our comprehensive report, as specified by our client. The main features of the frontend are outlined below:

### Navigation and Structure
The web interface features a dashboard with a navigation bar located on the left-hand side. This navigation bar is structured to mirror the table of contents of our report. By clicking on each item in the navigation bar, users can access different pages that demonstrate various aspects of our work. The design ensures that the navigation elements are almost identical to the structure of the report, with minor differences noted in the training loss results.

### Content Consistency and Enhancements
Most of the content on the web pages is kept identical to that of the report to maintain consistency. Various web components are employed to enhance the visual appeal and user interaction. For example, in sections detailing engineering practices, we have replaced static images with interactive code components.

### Hyperparameter Settings
The appearance of hyperparameter settings has been formatted to provide a clear and organized display, making it easier for users to understand the configurations used during the model training process.

### Loss Graphs Display
Distinct from the report, the loss graphs obtained during the training process are showcased under the "Loss Comparison" section of the website. This section is divided into three subsections, each representing a different set of comparisons among various hyperparameters. Due to the extensive number of loss graphs generated, it was impractical to include all of them in the printed report. Instead, they are effectively displayed on the website, where users can navigate through different subsections to view the corresponding loss graphs and conclusions.

### Interactive Features
The website allows for interactive exploration of data. By clicking on designated boxes within the "Loss Comparison" section, users can view detailed loss graphs and the associated analytical conclusions, enhancing their understanding of the model's performance under different conditions.

This frontend setup ensures that users have a comprehensive and interactive experience, closely mirroring the analytical depth and scope of our report.

