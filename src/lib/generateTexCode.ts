import { ContactDetails } from '../Components/ContactForm';
import { EducationDetails } from '../Components/EducationForm';
import { ExperienceDetails } from '../Components/ExperienceForm';
import { ProjectDetails } from '../Components/ProjectForm';
import { SkillsDetails } from '../Components/SkillsForm';
import { anonymizeDetails } from './anonymizeDetails';
import { getDuration } from './dateUtils';

const preamble = `
%-------------------------
% Resume in LaTeX
% Author: Matty
% Based on: https://github.com/jakegut/resume (which was itself based on https://github.com/sb2nov/resume)
% License: MIT
% Special thanks to: https://github.com/1993CRV for cleaning things up and making general suggestions
%------------------------

\\documentclass[letterpaper,11pt]{article}

\\usepackage{latexsym}
\\usepackage[empty]{fullpage}
\\usepackage{titlesec}
\\usepackage{marvosym}
\\usepackage[usenames,dvipsnames]{color}
\\usepackage{verbatim}
\\usepackage{enumitem}
\\usepackage[hidelinks]{hyperref}
\\usepackage{fancyhdr}
\\usepackage[english]{babel}
\\usepackage{tabularx}
\\usepackage{xcolor}
\\usepackage{fontawesome5}

\\input{glyphtounicode}

% -------------------- FONT OPTIONS --------------------
% sans-serif
% \\usepackage[sfdefault]{roboto}
% \\usepackage[sfdefault]{noto-sans}
% serif
% \\usepackage{charter}

\\pagestyle{fancy}
\\fancyhf{} % Clear all header and footer fields
\\fancyfoot{}
\\renewcommand{\\headrulewidth}{0pt}
\\renewcommand{\\footrulewidth}{0pt}

% Adjust margins
\\addtolength{\\oddsidemargin}{-0.5in}
\\addtolength{\\evensidemargin}{-0.5in}
\\addtolength{\\textwidth}{1in}
\\addtolength{\\topmargin}{-.5in} % Default was -.5in
\\addtolength{\\textheight}{1.0in}

\\urlstyle{same}

\\raggedbottom
\\raggedright
\\setlength{\\tabcolsep}{0in}

% Section formatting
\\titleformat{\\section}{
  \\vspace{-5pt}\\scshape\\raggedright\\large
}{}{0em}{}[\\color{black}\\titlerule \\vspace{-5pt}]

% Subsection formatting
\\titleformat{\\subsection}{
  \\vspace{-4pt}\\scshape\\raggedright\\large
}{\\hspace{-.15in}}{0em}{}[\\color{black}\\vspace{-8pt}]

% Ensure that generated PDF is machine readable/ATS parsable
\\pdfgentounicode=1

% -------------------- CUSTOM COMMANDS --------------------
\\newcommand{\\resumeItem}[1]{
  \\item\\small{
    {#1 \\vspace{-2pt}}
  }
}

\\newcommand{\\resumeSubheading}[4]{
  \\vspace{-2pt}\\item
    \\begin{tabular*}{0.97\\textwidth}[t]{l@{\\extracolsep{\\fill}}r}
      \\textbf{#1} & {\\small #2} \\\\
      \\textit{\\small#3} & \\textit{\\small #4} \\\\
    \\end{tabular*}\\vspace{-3pt}
}

\\newcommand{\\resumeSubSubheading}[2]{
    \\item
    \\begin{tabular*}{0.97\\textwidth}{l@{\\extracolsep{\\fill}}r}
      \\textit{\\small#1} & \\textit{\\small #2} \\\\
    \\end{tabular*}\\vspace{-7pt}
}

\\newcommand{\\resumeProjectHeading}[2]{
    \\item
    \\begin{tabular*}{0.97\\textwidth}{l@{\\extracolsep{\\fill}}r}
      \\small#1 & {\\small #2} \\\\
    \\end{tabular*}\\vspace{-7pt}
}

\\newcommand{\\resumeSubItem}[1]{\\resumeItem{#1}\\vspace{-4pt}}
\\newcommand{\\resumeSubHeadingListStart}{\\begin{itemize}[leftmargin=0.15in, label={}]}
\\newcommand{\\resumeSubHeadingListEnd}{\\end{itemize}}
\\newcommand{\\resumeItemListStart}{\\begin{itemize}}
\\newcommand{\\resumeItemListEnd}{\\end{itemize}\\vspace{-5pt}}

\\renewcommand\\labelitemii{$\\vcenter{\\hbox{\\tiny$\\bullet$}}$}

\\setlength{\\footskip}{4.08003pt}
% -------------------- START OF DOCUMENT --------------------
\\begin{document}

`;

type emptyString = '';
type detailType =
  | ContactDetails
  | EducationDetails
  | ExperienceDetails
  | ProjectDetails
  | SkillsDetails;

function conditionallyRender(
  str: string | string[],
  src: string
): string | emptyString {
  return str.length === 0 ? '' : src;
}

const escapeMap = new Map<string, string>([
  ['#', '\\#'],
  ['$', '\\$'],
  ['%', '\\%'],
  ['&', '\\&'],
  ['_', '\\_'],
  ['{', '\\{'],
  ['}', '\\}'],
  ['\\', '\\textbackslash{}'],
  ['^', '\\textasciicircum{}'],
  ['~', '\\textasciitilde{}'],
]);

function escapeStr(str: string): string {
  return str
    .split('')
    .map((char) => (escapeMap.has(char) ? escapeMap.get(char) : char))
    .join('');
}

function escapeDetails<T extends detailType>(obj: T): T {
  const newObj = { ...obj };
  for (const [k, v] of Object.entries(newObj)) {
    newObj[k] = typeof newObj[k] === 'string' ? escapeStr(v) : v;
  }
  return newObj;
}

function generateContactSrc(details: ContactDetails) {
  const { fullName, phoneNumber, linkedIn, github, gmail } =
    escapeDetails(details);

  return `
% -------------------- HEADING--------------------

\\vspace{-5pt}

\\begin{center}
      ${conditionallyRender(
        fullName,
        `
        \\textbf{\\Huge \\scshape ${fullName}} \\\\ \\vspace{8pt}
        `
      )}
    ${conditionallyRender(
      phoneNumber,
      `
      \\faIcon{phone}
      \\small \\href{tel:${phoneNumber}}{\\underline{${phoneNumber}}} $ $`
    )}
    ${conditionallyRender(
      github,
      `\\faIcon{github}
      \\href{https://github.com/${github}}{\\underline{github.com/${github}}} $  $`
    )}
    % \\faIcon{code}
    % \\href{https://www.mattydoe.com}
    % {\\underline{mattydoe.com}} $  $
    ${conditionallyRender(
      linkedIn,
      `\\faIcon{linkedin}
      \\href{https://linkedin.com/in/${linkedIn}}{\\underline{linkedin.com/in/${linkedIn}}} $  $`
    )}
    ${conditionallyRender(
      gmail,
      `\\faIcon{envelope}
      \\href{mailto:${gmail}}{\\underline{${gmail}}}`
    )}
\\end{center}
    `;
}

function generateEducationDetailItem(details: EducationDetails) {
  const { collegeName, degree, gpa, startDate, endDate } =
    escapeDetails(details);

  const duration = getDuration(startDate, endDate).join(' -- ');
  return `
    \\resumeSubheading
      {${collegeName}}{${duration}}
      {${degree}}{GPA: ${gpa}}
`;
}

function generateEducationSrc(
  educationDetails: EducationDetails[],
  isAnonymized: boolean
) {
  const start = `
% -------------------- EDUCATION --------------------
\\section{Education}
  \\resumeSubHeadingListStart

`;

  const visibleDetails = educationDetails.filter(
    (details) => details.isVisible
  );

  const items = visibleDetails.map((details) =>
    generateEducationDetailItem(anonymizeDetails(details, isAnonymized))
  );

  const coursework = visibleDetails
    .map((details) => details.coursework)
    .filter((coursework) => coursework.length)
    .join(', ');

  const courseworkSrc = `
    \\vspace{-5pt}

    \\subsection{Coursework}
    \\textbf{Courses:} ${escapeStr(coursework)} \\\\
    `;

  const end = `
  \\resumeSubHeadingListEnd   
  `;

  // Generate nothing if no visible details
  return conditionallyRender(
    items,
    `
    ${start}
    ${items.join('\n\n')}
    ${conditionallyRender(coursework, courseworkSrc)}
    ${end}`
  );
}

function generateResumeListItem(description: string) {
  const bullets = description
    .split('\n')
    .map((item) => (item.trim().length !== 0 ? `\\resumeItem{${item}}` : ''))
    .join('\n\n');

  return conditionallyRender(
    bullets.trim(),
    `
      \\resumeItemListStart
        ${bullets}
      \\resumeItemListEnd
`
  );
}

function generateExperienceDetailItem(details: ExperienceDetails) {
  const { orgName, jobTitle, location, description, startDate, endDate } =
    escapeDetails(details);

  const duration = getDuration(startDate, endDate).join(' -- ');
  const start = `
    \\resumeSubheading
      {${jobTitle}}{${duration}}
      {${orgName}}{${location}}
  `;

  const items = generateResumeListItem(description);

  return `
    ${start}
    ${items}
    `;
}

function generateExperienceSrc(
  experienceDetails: ExperienceDetails[],
  isAnonymized: boolean
) {
  const start = `\\section{Experience}
  \\resumeSubHeadingListStart
  `;

  const items = experienceDetails
    .filter((detail) => detail.isVisible)
    .map((detail) =>
      generateExperienceDetailItem(anonymizeDetails(detail, isAnonymized))
    );

  const end = `
  \\resumeSubHeadingListEnd
  `;

  // Generate nothing if no visible details
  return conditionallyRender(
    items,
    `
  ${start}
  ${items.join('\n\n')}
  ${end}
  `
  );
}

function generateProjectDetailsItem(details: ProjectDetails) {
  const { name, techUsed, description, startDate, endDate } =
    escapeDetails(details);

  const duration = getDuration(startDate, endDate).join(' -- ');
  const start = `
    \\resumeProjectHeading
          {\\textbf{${name}} $|$ \\emph{${techUsed}}}{${duration}}
    `;

  const items = generateResumeListItem(description);
  return `
  ${start}
  ${items}
  `;
}

function generateProjectSrc(projectDetails: ProjectDetails[]) {
  const start = `
%-----------PROJECTS-----------
\\section{Projects}
    \\resumeSubHeadingListStart
    `;

  const items = projectDetails
    .filter((details) => details.isVisible)
    .map((details) => generateProjectDetailsItem(details))
    .join('\n');

  const end = `
\\resumeSubHeadingListEnd`;

  return conditionallyRender(
    items,
    `
    ${start}
    ${items}
    ${end}
    `
  );
}

function generateSkillsSrc(details: SkillsDetails) {
  const { languages, frameworks, libraries, devTools } = escapeDetails(details);

  const start = `
% -------------------- SKILLS --------------------
\\section{Skills}
 \\begin{itemize}[leftmargin=0.15in, label={}]
    \\small{\\item{
`;

  type skillItem = { item: string; name: string };

  const items = [
    { item: languages, name: 'Languages' },
    { item: frameworks, name: 'Frameworks' },
    { item: devTools, name: 'Developer Tools' },
    { item: libraries, name: 'Libraries' },
  ] satisfies skillItem[];

  const skills = items
    .map((skill) =>
      conditionallyRender(
        skill.item,
        `
     \\textbf{${skill.name}}{: ${skill.item}} \\\\
    `
      )
    )
    .join('\n');

  const end = `
    }}
 \\end{itemize}
 `;

  if (skills.trim().length === 0) return ``;
  return `
  ${start}
  ${skills}
  ${end}`;
}

const docEnd = `\\end{document}`;

interface IgenerateTexCode {
  contactDetails: ContactDetails;
  educationDetails: EducationDetails[];
  experienceDetails: ExperienceDetails[];
  projectDetails: ProjectDetails[];
  skillsDetails: SkillsDetails;
  isAnonymized: boolean;
}

function generateTexCode({
  contactDetails,
  educationDetails,
  experienceDetails,
  projectDetails,
  skillsDetails,
  isAnonymized,
}: IgenerateTexCode) {
  return (
    preamble +
    generateContactSrc(anonymizeDetails(contactDetails, isAnonymized)) +
    generateExperienceSrc(experienceDetails, isAnonymized) +
    generateEducationSrc(educationDetails, isAnonymized) +
    generateProjectSrc(projectDetails) +
    generateSkillsSrc(skillsDetails) +
    docEnd
  );
}

export default generateTexCode;
