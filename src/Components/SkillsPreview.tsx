import { SkillsDetails } from './SkillsForm';

function SkillsPreview({ skillsDetails }: { skillsDetails: SkillsDetails }) {
  const { languages, frameworks, devTools, libraries } = skillsDetails;

  return (
    <div className='skills-preview'>
      <table>
        <caption>Technical Skills</caption>
        <tbody>
          <tr>
            <th>Languages</th>
            <td>{languages}</td>
          </tr>
          <tr>
            <th>Frameworks</th>
            <td>{frameworks}</td>
          </tr>
          <tr>
            <th>Developer Tools</th>
            <td>{devTools}</td>
          </tr>
          <tr>
            <th>Libraries</th>
            <td>{libraries}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default SkillsPreview;
