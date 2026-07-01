import type { Experience as ExperienceData } from '../data'
import Section from './Section'
import Highlights from './Highlights'
import Paragraph from './Paragraph'

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
              <Paragraph color='muted'>{exp.summary}</Paragraph>
              <Highlights items={exp.highlights} />
            </Section.Content>
          </Section>
        ))}
      </Section.Content>
    </Section>
  )
}

export default ExperienceSection
