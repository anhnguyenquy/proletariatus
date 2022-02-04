import {
  AboutField,
  EducationField,
  ExperienceField,
  LicensesAndCertificationsField,
  InterestsField,
  SkillsField,
  CVsField
} from './fields'
import { useStyles } from './style'

export const Main = (): JSX.Element => {
  const classes = useStyles()
  return (
    <div className={classes['main']}>
      <AboutField />
      <EducationField />
      <ExperienceField />
      <LicensesAndCertificationsField />
      <InterestsField />
      <SkillsField />
      <CVsField />
    </div>
  )
}
