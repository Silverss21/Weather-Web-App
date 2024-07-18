import Header from '../components/header';
import MemberCard from '../components/member-card';

import { teamMembers } from '../constants/team-members';


const AboutUs = () => {

  return (
    <div className="min-h-screen bg-bg bg-cover bg-no-repeat bg-center">
      <Header title="About Us" />
      <div className="grid grid-cols-2 gap-8 p-24 mt-20 rounded-3xl mx-auto max-w-[80%]">
        {teamMembers.map((member, index) => (
          <MemberCard key={index} member={member} />
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
