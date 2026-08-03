import { motion } from 'framer-motion'
import {
  achievements,
  certifications,
  education,
  experience,
  focusAreas,
  profile,
  projects,
  skillGroups,
} from '../data/content'

const fade = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.4 },
}

export function Focus() {
  return (
    <section className="section" id="about">
      <div className="container about-bento">
        <motion.article className="about-main" {...fade}>
          <img src="/portrait.jpg" alt="Prajwal Nivangune" className="about-photo" />
          <div>
            <p className="eyebrow">About</p>
            <h2 className="section-title">Building agents & data systems that hold up</h2>
            <p className="section-lead">
              Software engineer at Mindstix focused on Agentic AI, Azure data
              platforms, and production backends. I care about measurable
              outcomes — faster RCA, cleaner retrieval, and systems teams can trust.
            </p>
            <div className="tag-row" style={{ marginTop: '1rem' }}>
              <span className="pill">{profile.location}</span>
              <span className="pill">BE CSE · GPA 9.0</span>
              <span className="pill">Available for collab</span>
            </div>
          </div>
        </motion.article>

        <div className="focus-grid">
          {focusAreas.map((item, i) => (
            <motion.article
              key={item.title}
              className="focus-card"
              {...fade}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <span className="focus-index">0{i + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Experience() {
  return (
    <section className="section" id="work">
      <div className="container work-grid">
        <motion.div {...fade}>
          <p className="eyebrow">Experience</p>
          <h2 className="section-title">Where I ship</h2>
          <p className="section-lead">
            Cloud data engineering and agentic AI in real product environments.
          </p>
        </motion.div>

        {experience.map((job) => (
          <motion.article key={job.company} className="job" {...fade}>
            <div className="job-head">
              <div>
                <h3>{job.role}</h3>
                <p className="job-company">
                  {job.company} · {job.location}
                </p>
              </div>
              <span className="pill">{job.period}</span>
            </div>
            <ul>
              {job.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <motion.div className="section-head-row" {...fade}>
          <div>
            <p className="eyebrow">Projects</p>
            <h2 className="section-title">Agents with outcomes</h2>
          </div>
        </motion.div>

        <div className="project-grid">
          {projects.map((project, i) => (
            <motion.article
              key={project.name}
              className="project-card"
              {...fade}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <div className="project-top">
                <span className="pill">{project.tag}</span>
                <h3>{project.name}</h3>
                <p>{project.body}</p>
              </div>
              <div className="project-outcomes">
                {project.outcomes.map((o) => (
                  <div key={o} className="outcome">
                    <strong>{o}</strong>
                  </div>
                ))}
              </div>
              <div className="tag-row">
                {project.stack.map((s) => (
                  <span key={s} className="pill">
                    {s}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Stack() {
  return (
    <section className="section" id="stack">
      <div className="container">
        <motion.div {...fade}>
          <p className="eyebrow">Stack</p>
          <h2 className="section-title">Tools in daily use</h2>
        </motion.div>

        <div className="stack-grid">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.label}
              className="stack-card"
              {...fade}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <h3>{group.label}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Education() {
  return (
    <section className="section education">
      <div className="container education-grid">
        <motion.div className="edu-card" {...fade}>
          <p className="eyebrow">Education</p>
          <h2 className="section-title">{education.degree}</h2>
          <p className="section-lead">
            {education.school} · {education.location}
          </p>
          <div className="tag-row" style={{ marginTop: '0.9rem' }}>
            <span className="pill">{education.period}</span>
            <span className="pill">{education.gpa}</span>
          </div>
        </motion.div>

        <motion.div className="side-panel" {...fade}>
          <div>
            <h3>Certifications</h3>
            <ul>
              {certifications.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Achievements</h3>
            <ul>
              {achievements.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="container contact-panel">
        <motion.div {...fade}>
          <p className="eyebrow">Contact</p>
          <h2 className="section-title">Let’s build something sharp</h2>
          <p className="section-lead">
            Open to Agentic AI, cloud data engineering, and backend roles.
          </p>
          <div className="hero-cta" style={{ marginTop: '1.15rem' }}>
            <a className="btn btn-primary" href={`mailto:${profile.email}`}>
              Email me
            </a>
            <a
              className="btn btn-ghost"
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="btn btn-ghost"
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
          <p className="contact-meta">
            {profile.email}
            <span aria-hidden="true"> · </span>
            {profile.phone}
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} Prajwal Nivangune</p>
        <p className="footer-note">Agentic AI · Data Engineering</p>
      </div>
    </footer>
  )
}
