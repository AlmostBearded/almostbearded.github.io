import type { SkillCategory } from '../data'
import styles from './SkillsSection.module.css'
import InlineList from './InlineList'
import Section from './Section'

interface SkillsSectionProps {
  skills: SkillCategory[]
}

function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <Section>
      <Section.Heading>Skills</Section.Heading>
      <Section.Content>
        <div className={styles.skillsGrid}>
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
        </div>
      </Section.Content>
    </Section>
  )
}

export default SkillsSection
