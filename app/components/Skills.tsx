import {
  SiPython,
  SiPostgresql,
  SiApachekafka,
  SiDocker,
  SiReact,
  SiArduino,
  SiGit,
  SiGithub,
  SiApacheairflow,
  SiFastapi
} from "react-icons/si";

import { hardSkills, softSkills } from "../data/skills";

const skillIcons = {
  python: SiPython,
  postgresql: SiPostgresql,
  kafka: SiApachekafka,
  docker: SiDocker,
  react: SiReact,
  arduino: SiArduino,
  git: SiGit,
  github: SiGithub,
  airflow: SiApacheairflow,
  fastapi: SiFastapi,
};

export default function Skills() {
  return (
    <section className="skillsSection">
      <div className="skillsHeader">
        <div>
          <p className="skillsLabel">SKILLS & INTERESTS</p>
          <h2>Things I Work With</h2>
        </div>
      </div>

      <div className="skillsContent">

        {/* HARD SKILLS */}
        <div className="skillsGroup">
          <div className="skillsGroupTitle">
            <h3>HARD SKILLS</h3>
          </div>

          <div className="hardSkillsGrid">
            {hardSkills.map((skill) => {
              const Icon =
                skillIcons[
                  skill.icon as keyof typeof skillIcons
                ];

              return (
                <div className="hardSkill revealItem" 
                key={skill.id}>
                  <Icon />

                  <span>{skill.name}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* SOFT SKILLS */}
        <div className="skillsGroup">
          <div className="skillsGroupTitle">
            <h3>SOFT SKILLS</h3>
          </div>

          <div className="softSkillsGrid">
            {softSkills.map((skill) => (
              <div className="softSkill revealItem" key={skill}>
                {skill}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}