import teamJson from '../data/team.json';

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
}

export const teamMembers: TeamMember[] = teamJson;
