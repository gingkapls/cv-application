import { SkillsDetails } from './SkillsForm';

function SkillsPreview({ skillsDetails }: { skillsDetails: SkillsDetails }) {
  const { languages, frameworks, devTools, libraries } = skillsDetails;

  return (
    <div className='skills-preview detail-preview'>
      <table>
        <caption className='section-heading'>Technical Skills</caption>
        <tbody>
          {languages && (
            <tr>
              <th>Languages</th>
              <td>{languages}</td>
            </tr>
          )}

          {frameworks && (
            <tr>
              <th>Frameworks</th>
              <td>{frameworks}</td>
            </tr>
          )}
          {devTools && (
            <tr>
              <th>Developer Tools</th>
              <td>{devTools}</td>
            </tr>
          )}
          {libraries && (
            <tr>
              <th>Libraries</th>
              <td>{libraries}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default SkillsPreview;
