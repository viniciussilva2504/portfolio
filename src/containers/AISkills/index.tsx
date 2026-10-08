import { SectionLabel } from '../../styles'
import { ProcessSection, ProcessGrid, ProcessStep } from './styles'

const process = [
  ['01', 'Understand', 'Requirements · user stories'],
  ['02', 'Design', 'Scenarios · test cases'],
  ['03', 'Execute', 'Manual · automated tests'],
  ['04', 'Investigate', 'Defects · evidence · logs'],
  ['05', 'Validate', 'Regression · retest'],
  ['06', 'Improve', 'Automation · quality feedback'],
]

export default function AISkills() {
  return (
      <ProcessSection id="method" aria-labelledby="method-title">
        <SectionLabel>02 / QUALITY PROCESS</SectionLabel>
        <h2 id="method-title">A repeatable testing workflow</h2>
        <p className="intro">A practical sequence for turning requirements into useful quality evidence.</p>
        <ProcessGrid>
          {process.map(([number, title, details]) => <ProcessStep key={number}><span>{number}</span><h3>{title}</h3><p>{details}</p></ProcessStep>)}
        </ProcessGrid>
      </ProcessSection>
  )
}
