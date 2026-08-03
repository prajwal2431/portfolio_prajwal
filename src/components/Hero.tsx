import { motion } from 'framer-motion'
import { profile } from '../data/content'

const metrics = [
  { value: '40%', label: 'Faster RCA' },
  { value: '95%', label: 'Retrieval lift' },
  { value: '1%', label: 'Hallucinations' },
  { value: 'SDE-1', label: 'Mindstix' },
]

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero-grid">
        <div className="hero-copy">
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {profile.location} · Agentic systems in production
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
          >
            Prajwal
            <br />
            <span>Nivangune</span>
          </motion.h1>

          <motion.p
            className="hero-role"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            {profile.role}
          </motion.p>

          <motion.p
            className="hero-summary"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            {profile.summary}
          </motion.p>

          <motion.div
            className="hero-cta"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <a className="btn btn-primary" href="#contact">
              Get in touch
            </a>
            <a
              className="btn btn-ghost"
              href={profile.links.resume}
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
            <a
              className="btn btn-ghost"
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </motion.div>

          <motion.div
            className="hero-meta"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.28 }}
          >
            <span className="pill">LangChain</span>
            <span className="pill">RAG agents</span>
            <span className="pill">Azure Synapse</span>
            <span className="pill">AWS AgentCore</span>
          </motion.div>
        </div>

        <motion.div
          className="hero-portrait-wrap"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
        >
          <div className="portrait-stage">
            <div className="portrait-frame">
              <img
                className="portrait-img"
                src="/hero-portrait.jpg"
                alt="Prajwal Nivangune"
              />
            </div>
            <div className="portrait-badge">
              <strong>Mindstix Software Labs</strong>
              <span>SDE-1 · Agentic AI & Data</span>
            </div>
            <div className="portrait-ring" aria-hidden="true" />
          </div>
        </motion.div>
      </div>

      <div className="container">
        <motion.div
          className="metric-strip"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {metrics.map((m) => (
            <div key={m.label} className="metric">
              <strong>{m.value}</strong>
              <span>{m.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
