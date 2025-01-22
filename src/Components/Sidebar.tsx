import { ContactFormProps } from './ContactForm';
import { EducationProps } from './Education';
import { ExperienceProps } from './Experience';
import { ProjectProps } from './Project';

type DetailType = React.ReactElement<
  ContactFormProps | EducationProps | ExperienceProps | ProjectProps
>;

interface SidebarProps {
  children: DetailType[];
}

function Sidebar({ children }: SidebarProps) {
  return <aside className='sidebar'>{children}</aside>;
}

export default Sidebar;

