import { ContactDetails } from '../Components/ContactForm';
import { EducationDetails } from '../Components/EducationForm';
import { ExperienceDetails } from '../Components/ExperienceForm';
import { ProjectDetails } from '../Components/ProjectForm';
import { SkillsDetails } from '../Components/SkillsForm';

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

function generateContactSrc({
  fullName,
  phoneNumber,
  linkedIn,
  github,
  gmail,
}: ContactDetails) {
  return `
% -------------------- HEADING--------------------

\\vspace{-5pt}

\\begin{center}
    \\textbf{\\Huge \\scshape ${fullName}} \\\\ \\vspace{8pt}
    \\faIcon{phone}
    \\small \\href{tel:+${phoneNumber}}{\\underline{+${phoneNumber}}} $ $
    ${github ? '\\faIcon{github}' : ''}
    ${
      github
        ? `\\href{https://github.com/${github}}{\\underline{github.com/${github}}} $  $`
        : ''
    }
    % \\faIcon{code}
    % \\href{https://www.mattydoe.com}
    % {\\underline{mattydoe.com}} $  $
    ${linkedIn ? '\\faIcon{linkedin}' : ''}
    ${
      linkedIn
        ? `\\href{https://linkedin.com/in/${linkedIn}}{\\underline{linkedin.com/in/${linkedIn}}} $  $`
        : ''
    }
    \\faIcon{envelope}
    ${gmail ? `\\href{mailto:${gmail}}` : ''}
    ${gmail ? `{\\underline{${gmail}}}` : ''}
\\end{center}
    `;
}

function generateEducationDetailItem({
  collegeName,
  degree,
  gpa,
  duration,
}: EducationDetails) {
  return `
    \\resumeSubheading
      {${collegeName}}{${duration.join(' - ')}}
      {${degree}}{GPA: ${gpa}}
`;
}

function generateEducationSrc(educationDetails: EducationDetails[]) {
  const start = `
% -------------------- EDUCATION --------------------
\\section{Education}
  \\resumeSubHeadingListStart

`;

  const visibleDetails = educationDetails.filter(
    (details) => details.isVisible
  );

  const items = visibleDetails.map((details) =>
    generateEducationDetailItem(details)
  );

  const coursework = visibleDetails
    .map((details) => details.coursework)
    .filter((coursework) => coursework.length)
    .join(', ');

  const courseworkSrc = `
    \\vspace{-10pt}

    \\subsection{Coursework}
    \\textbf{Courses:} ${coursework} \\\\
    `;

  const end = `
  \\resumeSubHeadingListEnd   
  `;

  if (items.length === 0) return '';

  return `
    ${start}
    ${items.join('\n\n')}
    ${coursework.length === 0 ? '' : courseworkSrc}
    ${end}`;
}

function generateExperienceDetailItem({
  orgName,
  jobTitle,
  duration,
  location,
  description,
}: ExperienceDetails) {
  const bullets = description
    .split('\n')
    .map((item) => `\\resumeItem{${item}}`);

  return `
    \\resumeSubheading
      {${jobTitle}}{${duration.join(' - ')}}
      {${orgName}}{${location}}

      \\resumeItemListStart

        ${bullets.join('\n\n')}

      \\resumeItemListEnd
`;
}

function generateExperienceSrc(experienceDetails: ExperienceDetails[]) {
  const start = `\\section{Experience}
  \\resumeSubHeadingListStart
  `;

  const items = experienceDetails
    .filter((detail) => !detail.hidden)
    .map((detail) => generateExperienceDetailItem(detail));

  const end = `
  \\resumeSubHeadingListEnd
  `;

  if (items.length === 0) return '';

  return `
  ${start}
  ${items.join('\n\n')}
  ${end}
  `;
}

function generateProjectDetailsItem({
  name,
  techUsed,
  duration,
  description,
}: ProjectDetails) {
  const start = `
    \\resumeProjectHeading
          {\\textbf{${name}} $|$ \\emph{${techUsed}}}{${duration.join(' - ')}}
    `;

  const items = description
    .split('\n')
    .map((bullet) => `\\resumeItem{${bullet}}`);

  if (description.split('\n').length === 0) return start;

  return `
  ${start}
  \\resumeItemListStart
  ${items.join('\n')}
  \\resumeItemListEnd`;
}

function generateProjectSrc(projectDetails: ProjectDetails[]) {
  const start = `
%-----------PROJECTS-----------
\\section{Projects}
    \\resumeSubHeadingListStart
    `;

  const items = projectDetails
    .filter((details) => !details.hidden)
    .map((details) => generateProjectDetailsItem(details));

  const end = `
\\resumeSubHeadingListEnd`;

  return `
    ${start}
    ${items}
    ${end}`;
}

const volunteerWork = `
% -------------------- CONTRIBUTIONS --------------------

\\section{Volunteer Work}
    \\resumeSubHeadingListStart
        \\resumeProjectHeading
          {\\textbf{Pookie Corp}} {May 2024 - Present}
          \\resumeItemListStart
            \\resumeItem{done good stuff}


          \\resumeItemListEnd
          
    \\resumeSubHeadingListEnd

`;

function generateSkillsSrc({
  languages,
  frameworks,
  libraries,
  devTools,
}: SkillsDetails) {
  const skills = `
% -------------------- SKILLS --------------------
\\section{Skills}
 \\begin{itemize}[leftmargin=0.15in, label={}]
    \\small{\\item{
     \\textbf{Languages}{: ${languages}} \\\\
     \\textbf{Frameworks}{: ${frameworks}} \\\\
     \\textbf{Developer Tools}{: ${devTools}} \\\\
     \\textbf{Libraries}{: ${libraries}} \\\\
    }}
 \\end{itemize}
`;
  return skills;
}

const docEnd = `\\end{document}`;

interface IgenerateTexCode {
  contactDetails: ContactDetails;
  educationDetails: EducationDetails[];
  experienceDetails: ExperienceDetails[];
  projectDetails: ProjectDetails[];
  skillsDetails: SkillsDetails;
}

function generateTexCode({
  contactDetails,
  educationDetails,
  experienceDetails,
  projectDetails,
  skillsDetails,
}: IgenerateTexCode) {
  return (
    preamble +
    generateContactSrc(contactDetails) +
    generateEducationSrc(educationDetails) +
    generateExperienceSrc(experienceDetails) +
    generateProjectSrc(projectDetails) +
    generateSkillsSrc(skillsDetails) +
    docEnd
  );
}

export default generateTexCode;

// export default source;
