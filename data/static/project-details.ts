export interface Project {
  title: string
  description: string
  longDescription: string
  tech: string[]
  image: string
  category: string
  github: string
  demo?: string
  date?: string
  contributors: string[]
  features: string[]
  challenges: string[]
  architecture: string
  screenshots: string[]
}

export const projectData: Record<string, Project> = {
  "ocean-vista": {
    title: "Ocean Vista",
    description:
      "A beach safety application providing real-time alerts and ML-driven insights for beach conditions and safety notifications.",
    longDescription: `This project was built to give a safety score to beaches considering various parameters (oceaninc parameter: wind speed, tidal heights, etc., weather parameters and soil condition) to consider a condition for recreational activities on beaches. It provides the user with information about nearby beaches and various beach activity vendors avaiable near the beach.

    The web application serves the vendors to list out their businesses providing bookings orders and revenue generation report through it. It provides the subscription to list out the ventures. Travellers and tourists can book any listd activity through the application and access them at the site`,
    tech: ["React", "Python", "PostgreSQL", "D3.js", "FastAPI", "Redis", "Docker"],
    image: "/placeholder.svg?height=400&width=800",
    category: "Data Science",
    github: "https://github.com/singhtwenty2/OceanVista",
    demo: "https://app-oceanvista.pages.dev/",
    contributors: ["Aryan Raj", "Team Lead"],
    features: [
      "Real-time sales tracking and revenue analytics",
      "Customer behavior analysis and segmentation",
      "Inventory management with low-stock alerts",
      "Predictive analytics for demand forecasting",
      "Interactive data visualizations with D3.js",
      "Automated report generation and email alerts",
      "Multi-tenant architecture for scalability",
      "RESTful API with comprehensive documentation",
    ],
    challenges: [
      "Handling large volumes of real-time data efficiently",
      "Creating responsive and interactive visualizations",
      "Implementing accurate predictive models",
      "Ensuring data security and user privacy",
    ],
    architecture: `The application follows a microservices architecture with the following components:
    
      - **Frontend**: React application with Redux for state management
      - **Backend**: FastAPI server with async request handling
      - **Database**: PostgreSQL for transactional data, Redis for caching
      - **Analytics Engine**: Python-based ML pipeline using scikit-learn
      - **Visualization**: D3.js for interactive charts and graphs
      - **Deployment**: Docker containers orchestrated with Kubernetes`,
    screenshots: [
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
    ],
  },
  stockport: {
    title: "StockPort: Sentiment-Driven Stock Prediction Platform",
    description:
      "A machine learning-powered platform that integrates financial news sentiment analysis with predictive modeling to forecast stock market trends.",
    longDescription:
      "StockPort is designed to harness the power of sentiment analysis from financial news sources to predict stock market movements. By analyzing the sentiment of news articles related to various stocks, the platform aims to provide insights into potential market trends. The project involves collecting financial news data, preprocessing it, performing sentiment analysis, and using the results to train predictive models that forecast stock price movements.",
    tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "NLTK", "Matplotlib", "Seaborn"],
    image: "/placeholder.svg?height=400&width=800",
    category: "Data Science",
    github: "https://github.com/aryanraj-544/StockPort-Sentiment-Predictive-Analysis",
    date: "2023-12-15",
    contributors: ["Aryan Raj"],
    features: [
      "Sentiment analysis of financial news articles",
      "Data preprocessing and cleaning pipelines",
      "Predictive modeling using machine learning algorithms",
      "Visualization of sentiment trends and stock predictions",
      "Integration of multiple data sources for comprehensive analysis",
    ],
    challenges: [
      "Accurate sentiment extraction from diverse news sources",
      "Aligning sentiment data with corresponding stock movements",
      "Handling noisy and unstructured textual data",
      "Ensuring the robustness of predictive models in volatile markets",
    ],
    architecture:
      "The platform follows a modular architecture with the following components:\n\n- **Data Collection**: Scrapes financial news articles from various sources.\n- **Data Preprocessing**: Cleans and structures the textual data for analysis.\n- **Sentiment Analysis**: Utilizes NLP techniques to determine the sentiment of news articles.\n- **Predictive Modeling**: Applies machine learning algorithms to predict stock movements based on sentiment scores.\n- **Visualization**: Generates plots and charts to visualize sentiment trends and predictions.",
    screenshots: [
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
    ],
  },
  "digit-recognition-mnist": {
    title: "Digit Recognition using MNIST Dataset",
    description:
      "A deep learning project that utilizes the MNIST dataset to accurately recognize handwritten digits through a trained neural network model.",
    longDescription:
      "This project focuses on building a digit recognition system using the MNIST dataset, which comprises 70,000 images of handwritten digits ranging from 0 to 9. The system employs a neural network model trained to classify these digits with high accuracy. The workflow includes data preprocessing, model training, evaluation, and deployment. The trained model is saved for future inference, and a simple web interface is provided for users to input digit images and receive predictions.",
    tech: ["Python", "TensorFlow", "Pygame", "Keras", "Jupyter Notebook", "Flask", "NumPy", "Matplotlib"],
    image: "/placeholder.svg?height=400&width=800",
    category: "Machine Learning",
    github: "https://github.com/aryanraj-544/Digit-Recognition-using-MNIST-dataset",
    contributors: ["Aryan Raj"],
    features: [
      "Data preprocessing including normalization and reshaping",
      "Neural network model trained on MNIST dataset",
      "Model evaluation with accuracy metrics",
      "Saving and loading trained model using HDF5 format",
      "Web interface for digit input and prediction",
    ],
    challenges: [
      "Ensuring model generalization to unseen data",
      "Optimizing model architecture for accuracy and efficiency",
      "Integrating model with web interface for real-time predictions",
    ],
    architecture:
      "The application is structured as follows:\n\n- **Data Preprocessing**: Normalizes and reshapes input images to fit the model's expected input format.\n- **Model Training**: Constructs and trains a neural network using TensorFlow and Keras on the MNIST dataset.\n- **Model Evaluation**: Assesses the trained model's performance using accuracy metrics on test data.\n- **Model Deployment**: Saves the trained model in HDF5 format for future use.\n- **Web Interface**: Implements a Flask-based web application allowing users to upload digit images and receive predictions.",
    screenshots: [
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
    ],
  },
  "cli-task-manager": {
    title: "Command-Line Task Manager",
    description:
      "A Python-based command-line application for managing tasks efficiently, allowing users to add, view, update, and delete tasks directly from the terminal.",
    longDescription:
      "The Command-Line Task Manager is a lightweight and efficient tool designed to help users manage their tasks without the need for a graphical interface. Built using Python, this application enables users to perform CRUD (Create, Read, Update, Delete) operations on their tasks through simple command-line inputs. Tasks are stored persistently, ensuring that users can access their task list even after closing and reopening the application.",
    tech: ["Python", "JSON", "argparse", "os"],
    image: "/placeholder.svg?height=400&width=800",
    category: "Productivity Tools",
    github: "https://github.com/aryanraj-544/CLI-Task-Manager",
    contributors: ["Aryan Raj"],
    features: [
      "Add new tasks with titles and descriptions",
      "View the list of existing tasks",
      "Update details of existing tasks",
      "Delete tasks from the list",
      "Persistent storage of tasks using JSON files",
    ],
    challenges: [
      "Ensuring data persistence across sessions",
      "Handling user input and validation in a CLI environment",
      "Managing file read/write operations efficiently",
    ],
    architecture:
      "The application is structured as follows:\n\n- **User Interface**: Command-line interface built using Python's argparse module to parse user commands and options.\n- **Task Management**: Core functionality to handle adding, viewing, updating, and deleting tasks.\n- **Data Storage**: Tasks are stored in a JSON file, allowing for persistent storage and easy retrieval.\n- **File Operations**: Utilizes Python's os module to handle file paths and ensure compatibility across different operating systems.",
    screenshots: [
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
    ],
  },
  "google-stock": {
    title: "Google Stock Price Predictor using LSTM",
    description:
      "A deep learning model employing LSTM networks to forecast Google's stock prices based on historical data.",
    longDescription:
      "This project implements a Long Short-Term Memory (LSTM) neural network to predict Google's stock prices. Utilizing historical stock data from March 2012 to December 2016 for training and January 2017 for testing, the model aims to capture temporal dependencies in stock price movements. The implementation includes data preprocessing, model training, and evaluation phases, providing insights into the model's predictive capabilities.",
    tech: ["Python", "TensorFlow", "Pandas", "NumPy", "Matplotlib", "scikit-learn"],
    image: "/placeholder.svg?height=400&width=800",
    category: "Machine Learning",
    github: "https://github.com/aryanraj-544/Google-Stock-Price-Predictor-Model",
    contributors: ["Aryan Raj"],
    features: [
      "Data preprocessing including normalization and reshaping",
      "LSTM model trained on historical stock data",
      "Evaluation of model performance on test dataset",
      "Visualization of predicted vs. actual stock prices",
    ],
    challenges: [
      "Capturing complex patterns in stock price movements",
      "Preventing overfitting during model training",
      "Ensuring model generalization to unseen data",
    ],
    architecture:
      "The application is structured as follows:\n\n- **Data Preprocessing**: Normalizes and reshapes input data to fit the model's expected input format.\n- **Model Training**: Constructs and trains an LSTM neural network using TensorFlow on the training dataset.\n- **Model Evaluation**: Assesses the trained model's performance using the test dataset.\n- **Visualization**: Generates plots to compare predicted stock prices against actual values.",
    screenshots: [
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
    ],
  },
}
