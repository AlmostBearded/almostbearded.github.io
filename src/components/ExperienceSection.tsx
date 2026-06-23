import type { Experience as ExperienceData } from '../data'
import Section from './Section'
import Text from './Text'
import Highlights from './Highlights'

interface ExperienceSectionProps {
  items: ExperienceData[]
}

function ExperienceSection({ items }: ExperienceSectionProps) {
  return (
    <Section>
      <Section.Heading>Experience</Section.Heading>
      <Section.Content>
        {items.map((exp) => (
          <Section key={`${exp.institution}-${exp.period}`}>
            <Section.Heading>
              {exp.role}
              <Section.Heading.Subheading>{exp.institution} · {exp.period}</Section.Heading.Subheading>
            </Section.Heading>
            <Section.Content>
              <Text as='p' color='muted'>{exp.summary}</Text>
              <Highlights items={exp.highlights} />
            </Section.Content>
          </Section>
        ))}
      </Section.Content>
    </Section>
  )
}

export default ExperienceSection
