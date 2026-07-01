import Section from './Section'
import Paragraph from './Paragraph'

interface ProfileSectionProps {
  profile: string
}

function ProfileSection({ profile }: ProfileSectionProps) {
  return (
    <Section>
      <Section.Heading>Profile</Section.Heading>
      <Section.Content>
        <Paragraph>{profile}</Paragraph>
      </Section.Content>
    </Section>
  )
}

export default ProfileSection
