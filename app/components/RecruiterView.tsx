import Link from "next/link";

export default function RecruiterView() {
    return (
        <main>
            <div className="recruiterPageUp">
                <div className="recruiterDocumentUp">
                    <Link href="/" className="recruiterBack">
                        <span>←</span>
                        Back to Portfolio
                    </Link>
                    <header className="recruiterHeader">
                        <div className="recruiterHeaderContent">
                            <div className="recruiterIdentity">
                                <h1>
                                    Afwan Maulana Sidqi
                                </h1>
                                <p className="recruiterRole">
                                    AI Engineer · Data Engineer · Data Scientist
                                </p>
                                <div className="recruiterActions">
                                    <a
                                        href="/cv/Afwan-Maulana-Sidqi-CV.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="recruiterButton primary"
                                    >
                                        Download Resume
                                    </a>

                                    <a
                                        href="https://github.com/Afwanms"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="recruiterButton"
                                    >
                                        GitHub
                                    </a>

                                    <a
                                        href="https://linkedin.com/in/afwan-maulana-sidqi"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="recruiterButton"
                                    >
                                        LinkedIn
                                    </a>

                                    <a
                                        href="mailto:your@email.com"
                                        className="recruiterButton"
                                    >
                                        Email
                                    </a>
                                </div>
                            </div>
                        </div>
                    </header>
                </div>
            </div>
            <div className="recruiterPageDown">
                <div className="recruiterDocumentDown">
                    <section className="recruiterContent">
                        <div className="recruiterSectionHeader">
                            <h2>Professional Summary</h2>
                        </div>
                            <div className="recruiterSectionDescription">
                                <p>
                                    Passionate about building practical AI and data-driven solutions that solve real-world problems. Experienced in developing automated AI pipelines, data analytics systems, and interactive dashboards, including a pipeline that processed 44 customer service call recordings in approximately 1.5 hours. I&apos;m now seeking to grow as an AI Engineer, focusing on building scalable AI systems and turning intelligent technologies into impactful products.
                                </p>
                            </div>
                    </section>
                    <section className="recruiterContent">
                        <div className="recruiterSectionHeader">
                            <h2>
                                Technical Skills
                            </h2>
                        </div>
                    <div className="recruiterSkills">
                        <div className="recruiterSkillCategory">
                            <span>
                                AI & Machine Learning
                            </span>
                            <p>
                                NLP, Sentiment Analysis, OpenAI API, Llama
                            </p>
                        </div>
                        <div className="recruiterSkillCategory">
                            <span>
                                Data & Engineering
                            </span>
                            <p>
                                Python, Excel, PostgreSQL, ETL, Power BI, Airflow, Kafka, Docker, FastAPI
                            </p>
                        </div>
                        <div className="recruiterSkillCategory">
                            <span>
                                IoT & Embedded
                            </span>
                            <p>
                                C++, Arduino, ESP8266
                            </p>
                        </div>
                    </div>
                </section>
                <section className="recruiterContent">
                    <div className="recruiterSectionHeader">
                        <h2>
                            Featured Projects
                        </h2>
                    </div>
                        <div className="recruiterProjectList">
                            <article className="recruiterProject">
                                <div className="recruiterProjectName">
                                    <h3>
                                        AI-Powered Customer Service Insight
                                    </h3>
                                    <span>
                                        AI Engineer/Data Scientist
                                    </span>
                                </div>
                                <p>
                                    AI-powered analytics system
                                    to automate customer service call
                                    transcription, sentiment analysis, and
                                    operational insight generation from audio
                                    recordings.
                                </p>
                                <div className="recruiterProjectTools">
                                    Python · OpenAI API · Streamlit
                                </div>
                                <Link href="/projects/ai-powered-customer-service-insight">
                                    VIEW PROJECT →
                                </Link>
                            </article>
                            <article className="recruiterProject">
                                <div className="recruiterProjectName">
                                    <h3>
                                        NYC Streaming Pipeline
                                    </h3>
                                    <span>
                                        Data Engineer
                                    </span>
                                </div>
                                <p>
                                    Real-time data streaming pipeline designed
                                    to process and store streaming NYC Taxi data
                                </p>
                                <div className="recruiterProjectTools">
                                    Python · Kafka · PostgreSQL · Docker · PowerBI
                                </div>
                                <Link href="/projects/nyc-taxi-streaming-pipeline">
                                    VIEW PROJECT →
                                </Link>
                            </article>
                            <article className="recruiterProject">
                                <div className="recruiterProjectName">
                                    <h3>
                                        Recruitment Feedback Analyzer
                                    </h3>
                                    <span>
                                        AI Engineer
                                    </span>
                                </div>
                                <p>
                                    AI-powered tool designed to classify and centralize
                                    recruitment feedback to help recruiters identify
                                    suitable candidates for client interviews.
                                </p>
                                <div className="recruiterProjectTools">
                                    Python · Llama · Ollama · FastAPI · React · PostgreSQL · Docker · AWS EC2
                                </div>
                                <Link href="/projects/recruitment-feedback-analyzer">
                                    VIEW PROJECT →
                                </Link>
                            </article>
                        </div>
                    </section>
                    <section className="recruiterContent">
                    <div className="recruiterSectionHeader">
                        <h2>
                            Professional Experience
                        </h2>
                    </div>
                        <div className="recruiterExperienceList">
                            <article className="recruiterExperience">
                                <div className="recruiterExperienceHeader">
                                    <div>
                                        <h3>
                                            PT Phillip Sekuritas Indonesia
                                        </h3>
                                        <p>
                                            AI Engineer Intern
                                        </p>
                                    </div>
                                    <span>
                                        Jun 2025 - Aug 2025
                                    </span>
                                </div>
                                <ul>
                                    <li>
                                        Developed an automated data and AI
                                        pipeline for preprocessing, transcription,
                                        sentiment analysis, and reporting.
                                    </li>
                                    <li>
                                        Designed and implemented an interactive
                                        dashboard to visualize analytical insights
                                        and performance metrics.
                                    </li>

                                    <li>
                                        Collaborated with internal teams to
                                        optimize AI workflows and improve system
                                        integration.
                                    </li>
                                </ul>
                            </article>
                        </div>
                    </section>
                    <section className="recruiterContent">
                        <div className="recruiterSectionHeader">
                            <h2>
                                Education
                            </h2>
                        </div>
                        <div className="recruiterEducation">
                            <div className="recruiterEducationHeader">
                                <h3>Universitas Brawijaya</h3>

                                <span>
                                2022 - 2026
                                </span>
                            </div>

                            <p>
                                Computer Engineering, Faculty of Computer Science — GPA 3.85 / 4.0
                            </p>
                        </div>
                    </section>
                    <section className="recruiterContact">
                        <h2>
                            Contact
                        </h2>
                        <p>
                            afwanmaulanas02@gmail.com · github.com/Afwanms · linkedin.com/in/afwan-maulana-sidqi
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
}