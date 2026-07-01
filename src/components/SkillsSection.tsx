import type { SkillCategory } from '../data'
import InlineList from './InlineList'
import Section from './Section'
import Columns from './Columns'

interface SkillsSectionProps {
  skills: SkillCategory[]
}

function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <Section>
      <Section.Heading>Skills</Section.Heading>
      <Section.Content>
        <Columns columnWidth="20rem">
          {skills.map((group) => (
            <Section key={group.category}>
              <Section.Heading>{group.category}</Section.Heading>
              <Section.Content>
                <InlineList>
                  {group.skills.map((skill) => (
                    <InlineList.Item key={skill}>{skill}</InlineList.Item>
                  ))}
                </InlineList>
              </Section.Content>
            </Section>
          ))}
        </Columns>
      </Section.Content>
    </Section>
  )
}

export default SkillsSection
  