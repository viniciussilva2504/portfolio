import { SectionLabel } from '../../styles'
import { ProfileSection, ProfileCopy, EvidenceGrid, EvidenceItem, FocusList } from './styles'

export default function Sobre() {
  return (
    <ProfileSection id="profile" aria-labelledby="profile-title">
      <div>
        <SectionLabel>01 / PROFILE</SectionLabel>
        <ProfileCopy>
          <h2 id="profile-title">Quality through a systems perspective.</h2>
          <p>I work across software testing and development, with hands-on experience in Cypress end-to-end automation, React Testing Library, Python and REST API development. Understanding how interfaces and services are built helps me investigate behavior, communicate findings and think through meaningful test scenarios.</p>
          <p>My background in Architecture informs a structured approach to systems, details and user experience. I am currently focused on growing into QA Engineering.</p>
        </ProfileCopy>
      </div>
      <div>
        <FocusList aria-label="Quality focus areas">
          <li>Test design</li><li>Functional validation</li><li>Automation</li><li>Defect investigation</li>
        </FocusList>
        <EvidenceGrid>
          <EvidenceItem><dt>Web testing</dt><dd>Cypress · React Testing Library</dd></EvidenceItem>
          <EvidenceItem><dt>Language</dt><dd>Python · JavaScript · TypeScript</dd></EvidenceItem>
          <EvidenceItem><dt>API context</dt><dd>REST · Django</dd></EvidenceItem>
          <EvidenceItem><dt>Location</dt><dd>Porto · Portugal</dd></EvidenceItem>
        </EvidenceGrid>
      </div>
    </ProfileSection>
  )
}
