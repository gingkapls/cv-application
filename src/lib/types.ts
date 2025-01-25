import { ContactDetails } from "../Components/ContactForm";
import { EducationDetails } from "../Components/EducationForm";
import { ExperienceDetails } from "../Components/ExperienceForm";
import { ProjectDetails } from "../Components/ProjectForm";
import { SkillsDetails } from "../Components/SkillsForm";

type Maybe<T> = T | null;
type detailType = ContactDetails | EducationDetails[] | ExperienceDetails[] | ProjectDetails[] | SkillsDetails;

export type { Maybe, detailType };
