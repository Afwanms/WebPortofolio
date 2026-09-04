export const projects = [
  {
  id: 1,
  slug: "recruitment-feedback-analyzer",
  title: "Recruitment Feedback Analyzer",
  image: "/project-photo/recruitment-feedback/001.png",
  category: "AI",

  tags: [
    "Python",
    "Llama",
    "Ollama",
    "FastAPI",
    "React",
    "PostgreSQL",
    "Docker",
    "AWS EC2",
  ],

  period: "Jun 2026 - Jul 2026",
  sortDate: "2026-07",

  description:
    "An AI-powered decision support system designed to analyze client interview feedback and identify factors influencing candidate acceptance.",

  implementation:
    "Built an end-to-end recruitment feedback analysis system with a FastAPI backend, PostgreSQL database, React dashboard, and LLM-based feedback analysis to classify unstructured client interview feedback into actionable insights.",

  concepts: [
    "AI-Powered Decision Support",
    "Natural Language Processing",
    "Feedback Classification",
    "Data Centralization",
    "Full-Stack Development",
  ],

  impact:
    "Centralized candidate and interview feedback while providing recruiters with structured insights into recurring feedback patterns, candidate performance, and recruitment metrics to support better decision-making.",

  github:
    "https://github.com/Afwanms/RecruitmentFeedbackAnalyzer",

  documentation: [
    "/project-photo/recruitment-feedback/002.png",
    "/project-photo/recruitment-feedback/003.png",
    "/project-photo/recruitment-feedback/004.png",
    "/project-photo/recruitment-feedback/005.png",
  ],
},
{
  id: 2,
  slug: "ai-powered-customer-service-insight",
  title: "AI-Powered Customer Service Insight",
  image: "/project-photo/customer-service/001.png",
  category: "AI",

  tags: [
    "Python",
    "OpenAI API",
    "Streamlit",
  ],

  period: "Jun 2025 - Aug 2025",
  sortDate: "2025-08",

  description:
    "An AI-powered analytics system designed to automate customer service call transcription, sentiment analysis, and operational insight generation from audio recordings.",

  implementation:
    "Built an automated workflow using Python and OpenAI API to preprocess audio recordings, perform speech-to-text transcription, classify customer sentiment, and generate actionable insights through an interactive Streamlit dashboard.",

  concepts: [
    "AI Analytics",
    "Speech-to-Text",
    "Sentiment Analysis",
    "Audio Processing",
    "Data Visualization",
  ],

  impact:
    "Enabled faster analysis of customer service interactions by automating the transcription and sentiment analysis workflow and providing operational insights through an interactive dashboard.",

  github:
    null,

  documentation: [
    "/project-photo/customer-service/002.png",
    "/project-photo/customer-service/003.png",
    "/project-photo/customer-service/004.png",
  ],
},
{
  id: 3,
  slug: "netflix-etl-pipeline",
  title: "Netflix ETL Pipeline",
  image: "/project-photo/netflix-etl/001.png",
  category: "DATA",

  tags: [
    "Python",
    "Pandas",
    "Apache Airflow",
    "PostgreSQL",
    "Docker",
  ],

  period: "Jun 2026",
  sortDate: "2026-06",

  description:
    "An automated ETL pipeline designed to extract, transform, and load Netflix dataset records into a PostgreSQL database through an orchestrated data processing workflow.",

  implementation:
    "Built an end-to-end ETL workflow using Python and Pandas for data extraction and transformation, Apache Airflow for workflow orchestration, and PostgreSQL for data storage. The pipeline was containerized with Docker to provide a consistent and reproducible execution environment.",

  concepts: [
    "ETL Pipeline",
    "Data Engineering",
    "Workflow Orchestration",
    "Data Transformation",
    "Data Integration",
    "Containerization",
  ],

  impact:
    "Automated the end-to-end data processing workflow, producing structured and analytics-ready datasets while improving the reliability, scalability, and reproducibility of the data pipeline.",

  github:
    "https://github.com/Afwanms/NetflixETLPipeline",

  documentation: [
    "/project-photo/netflix-etl/002.png",
    "/project-photo/netflix-etl/003.png",
    "/project-photo/netflix-etl/004.png",
  ],
},
{
  id: 4,
  slug: "customer-segmentation-analysis",
  title: "Customer Segmentation Analysis",
  image: "/project-photo/customer-segmentation/001.png",
  category: "DATA",

  tags: [
    "Microsoft Excel",
    "PostgreSQL",
    "SQL",
    "Power BI",
  ],

  period: "Jun 2026",
  sortDate: "2026-06",

  description:
    "A customer analytics project designed to segment customers based on purchasing behavior using RFM analysis and identify actionable insights for targeted marketing strategies.",

  implementation:
    "Prepared and cleaned customer transaction data using Microsoft Excel, performed exploratory analysis and calculated Recency, Frequency, and Monetary metrics using PostgreSQL, then developed an interactive Power BI dashboard to visualize customer segments and purchasing patterns.",

  concepts: [
    "Customer Segmentation",
    "RFM Analysis",
    "Customer Behavior Analysis",
    "Business Intelligence",
    "Data Visualization",
    "Marketing Analytics",
  ],

  impact:
    "Identified high-value customer segments and purchasing patterns to support customer retention, targeted marketing campaigns, and personalized marketing initiatives.",

  github:
    "https://github.com/Afwanms/CustomerSegmentationAnalysis",

  documentation: [
   "/project-photo/customer-segmentation/002.png",
   "/project-photo/customer-segmentation/003.png",
  ],
},
{
  id: 5,
  slug: "sales-performance-dashboard",
  title: "Sales Performance Dashboard",
  image: "/project-photo/sales-performance/001.png",
  category: "DATA",

  tags: [
    "Microsoft Excel",
    "PostgreSQL",
    "SQL",
    "Power BI",
  ],

  period: "Jun 2026",
  sortDate: "2026-06",

  description:
    "An interactive business intelligence dashboard designed to analyze sales performance, profitability, product performance, and regional business trends using Global Superstore data.",

  implementation:
    "Performed data cleaning and preprocessing using Microsoft Excel, stored and analyzed the dataset with PostgreSQL and SQL, then developed an interactive Power BI dashboard to visualize key performance indicators, sales trends, product performance, customer contribution, and regional insights.",

  concepts: [
    "Data Analytics",
    "Business Intelligence",
    "Exploratory Data Analysis",
    "Data Visualization",
    "KPI Development",
    "Data Storytelling",
  ],

  impact:
    "Provided actionable business insights by identifying top-performing products and categories, regional sales patterns, customer contributions, and overall revenue and profitability trends to support data-driven decision-making.",

  github:
    "https://github.com/Afwanms/SalesPerformanceDashboard",

  documentation: [
    "/project-photo/sales-performance/002.png",
    "/project-photo/sales-performance/003.png",
  ],
},
{
  id: 6,
  slug: "early-breast-cancer-identification-system",
  title: "Early Breast Cancer Identification System",
  image: "/project-photo/breast-cancer/001.png",
  category: "IOT",

  tags: [
    "Python",
    "Pandas",
    "NumPy",
    "scikit-learn",
    "PPG",
  ],

  period: "Aug 2025 - Dec 2025",
  sortDate: "2025-12",

  description:
    "An AI and IoT-based physiological signal monitoring system designed to support early breast cancer identification through PPG signal acquisition and machine learning classification.",

  implementation:
    "Designed and developed a hardware prototype for acquiring photoplethysmogram (PPG) signals, then built a machine learning pipeline using Python, Pandas, and NumPy for signal preprocessing and feature extraction. A Decision Tree classifier was developed and evaluated using scikit-learn to classify physiological signal patterns.",

  concepts: [
    "IoT",
    "Embedded Systems",
    "Machine Learning",
    "PPG Signal Processing",
    "Classification",
    "Feature Extraction",
    "Hardware-Software Integration",
  ],

  impact:
    "Integrated physiological signal acquisition hardware with a machine learning classification pipeline, creating a functional prototype for collecting and analyzing PPG signal patterns to support early breast cancer identification research.",

  github:
    "https://github.com/Afwanms/BreastCancerClassification",

  documentation: [
    "/project-photo/breast-cancer/002.jpg",
    "/project-photo/breast-cancer/003.jpeg",
    "/project-photo/breast-cancer/004.jpg",
  ],
},
{
  id: 7,
  slug: "dposture-sensor",
  title: "Dposture Sensor: A Posture Classifier Wearable",
  image: "/project-photo/dposture-sensor/001.png",
  category: "IOT",

  tags: [
    "ESP32",
    "MPU6050",
    "Python",
    "TensorFlow",
    "1D-CNN",
    "Embedded Systems",
    "Flask",
    "MQTT",
  ],

  period: "Feb 2025 - May 2025",
  sortDate: "2025-05",

  description:
    "A wearable posture classification system designed to detect proper and improper lifting postures using motion data collected from an MPU6050 IMU sensor.",

  implementation:
    "Developed a wearable hardware prototype using ESP32 and MPU6050 to collect real-time IMU sensor data. The sensor data was collected and preprocessed in Python, then used to train a 1D-CNN model for lifting posture classification and integrated with the embedded hardware for real-time posture monitoring.",

  concepts: [
    "Embedded AI",
    "Wearable Technology",
    "IoT",
    "IMU Sensor Processing",
    "Deep Learning",
    "1D-CNN",
    "Real-Time Classification",
    "Hardware-Software Integration",
  ],

  impact:
    "Built a functional wearable prototype capable of classifying proper and improper lifting postures in real time by integrating IMU-based motion sensing with a deep learning classification model.",

  github:
    "https://github.com/Afwanms/capstone_project",

  documentation: [
    "/project-photo/dposture-sensor/002.png",
    "/project-photo/dposture-sensor/003.png",
    "/project-photo/dposture-sensor/004.png",
  ],
},
{
  id: 8,
  slug: "vibration-alert-system",
  title: "Vibration Alert System",
  image: "/project-photo/vibration-alert/001.jpeg",
  category: "IOT",

  tags: [
    "ESP8266",
    "ESP-NOW",
    "C/C++",
    "Arduino IDE",
  ],

  period: "Jun 2026 - Jul 2026",
  sortDate: "2026-07",

  description:
    "A wireless wearable alert system designed to provide real-time physical notifications for deaf and hard-of-hearing users through configurable vibration patterns.",

  implementation:
    "Developed a wearable alert system using ESP8266 devices communicating through ESP-NOW, enabling a transmitter to deliver target-specific notifications to multiple wearable receivers. Integrated keypad and OLED interfaces for alert selection and monitoring, with distinct vibration patterns for different notification types.",

  concepts: [
    "IoT",
    "Wireless Communication",
    "Embedded Systems",
    "Wearable Technology",
    "Assistive Technology",
    "Device-to-Device Communication",
  ],

  impact:
    "Developed a functional assistive technology prototype that converts important auditory notifications such as teacher calls, school bells, and emergency alerts into distinct vibration patterns, helping deaf and hard-of-hearing users receive timely physical notifications.",

  github:
    "https://github.com/Afwanms/VibrationAlertSystem",

  documentation: [
    "/project-photo/vibration-alert/002.jpeg",
    "/project-photo/vibration-alert/003.png",
    "/project-photo/vibration-alert/004.png",
  ],
},
{
  id: 9,
  slug: "nyc-taxi-streaming-pipeline",

  title: "NYC Taxi Streaming Pipeline",
  image: "/project-photo/nyc-taxi-streaming/001.png",
  category: "DATA",

  tags: [
    "Python",
    "Pandas",
    "Apache Kafka",
    "PostgreSQL",
    "Docker",
    "Power BI",
  ],

  period: "Aug 2026",
  sortDate: "2026-08",

  description:
    "An end-to-end streaming data pipeline designed to simulate real-time processing of NYC Yellow Taxi trip data using Apache Kafka, with data validation, error handling, and analytical visualization.",

  implementation:
    "Built a batch-to-streaming pipeline that publishes taxi trip records from a Parquet dataset through a Python Kafka Producer, processes and validates events using a Kafka Consumer, routes invalid records to a Dead Letter Queue (DLQ), and stores validated data in PostgreSQL. The pipeline was containerized using Docker and integrated with Power BI for analytical visualization.",

  concepts: [
    "Data Engineering",
    "Real-Time Data Streaming",
    "Event-Driven Architecture",
    "Data Validation",
    "Data Quality",
    "Dead Letter Queue",
    "Data Visualization",
  ],

  impact:
    "Developed a functional streaming pipeline capable of processing, validating, and storing taxi trip events while handling invalid records separately through a Dead Letter Queue and providing analytical insights through Power BI.",

  github:
    "https://github.com/Afwanms/NYCTaxiStreamingPipeline",

  documentation: [
    "/project-photo/nyc-taxi-streaming/002.png",
    "/project-photo/nyc-taxi-streaming/003.png",
    "/project-photo/nyc-taxi-streaming/004.png",
    "/project-photo/nyc-taxi-streaming/005.png"
  ],
},
];