import type { Education as EducationData } from '../data'
import Section from './Section'
import Text from './Text'
import Highlights from './Highlights'

interface EducationSectionProps {
  items: EducationData[]
}

function EducationSection({ items }: EducationSectionProps) {
  return (
    <Section>
      <Section.Heading>Education</Section.Heading>
      <Section.Content>
        {items.map((edu) => (
          <Section key={`${edu.institution}-${edu.period}`}>
            <Section.Heading>
              {edu.program}
              <Section.Heading.Subheading>{edu.institution} · {edu.period}</Section.Heading.Subheading>
            </Section.Heading>
            <Section.Content>
              {edu.degree && <Text as='p' color='muted'>{edu.degree}</Text>}
              <Highlights items={edu.highlights} />
            </Section.Content>
          </Section>
        ))}
      </Section.Content>
    </Section>
  )
}

export default EducationSection
