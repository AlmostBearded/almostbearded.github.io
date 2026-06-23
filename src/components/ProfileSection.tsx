import Text from './Text'
import Section from './Section'

interface ProfileSectionProps {
  profile: string
}

function ProfileSection({ profile }: ProfileSectionProps) {
  return (
    <Section>
      <Section.Heading>Profile</Section.Heading>
      <Section.Content>
        <Text as="p">{profile}</Text>
      </Section.Content>
    </Section>
  )
}

export default ProfileSection
