import React from 'react';

import { Member } from '../interfaces/Member';

interface MemberCardProps {
  member: Member;
}

const MemberCard: React.FC<MemberCardProps> = ({ member }) => {
  return (
    <div className="m-8 p-8 rounded-3xl backdrop-blur-3xl drop-shadow-2xl">
      <div className="text-2xl text-white">{member.name}</div>
      <div className="text-xl text-white/40">{member.email}</div>
    </div>
  );
};

export default MemberCard;
