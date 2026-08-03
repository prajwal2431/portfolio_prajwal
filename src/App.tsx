import Nav from './components/Nav'
import Hero from './components/Hero'
import {
  Contact,
  Education,
  Experience,
  Focus,
  Footer,
  Projects,
  Stack,
} from './components/Sections'
import { ThemeProvider } from './hooks/useTheme'
import './styles/layout.css'

export default function App() {
  return (
    <ThemeProvider>
      <Nav />
      <main>
        <Hero />
        <Focus />
        <Experience />
        <Projects />
        <Stack />
        <Education />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  )
}
