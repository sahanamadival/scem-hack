import { v4 as uuidv4 } from 'uuid';

export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  jobType: string;
  salary: string;
  description: string;
  requirements: string[];
  skills: string[];
  postedDate: string;
  industry: string;
  experienceLevel: string;
  education: string;
  benefits: string[];
  isVeteranFriendly: boolean;
  matchScore: number; // 0-100 score based on veteran's profile match
}

// Helper function to calculate days ago for posted date
const daysAgo = (days: number): string => {
  if (days === 0) return 'Today';
  if (days === 1) return 'Yesterday';
  return `${days} days ago`;
};

export const mockJobs: Job[] = [
  {
    id: uuidv4(),
    title: 'Security Operations Manager',
    company: 'SecureTech Solutions',
    location: 'Dallas, TX',
    jobType: 'Full-time',
    salary: '$85,000 - $110,000',
    description: 'Looking for a seasoned security professional to oversee our security operations center. This role requires leadership, attention to detail, and experience in threat assessment and mitigation. Veterans with military security experience are highly encouraged to apply.',
    requirements: [
      'Bachelor\'s degree in security management or related field',
      '5+ years of experience in security operations',
      'Excellent leadership and communication skills',
      'Experience with security protocols and procedures'
    ],
    skills: ['Leadership', 'Security Operations', 'Risk Assessment', 'Team Management', 'Crisis Response'],
    postedDate: daysAgo(2),
    industry: 'Technology',
    experienceLevel: 'Mid',
    education: 'Bachelor\'s',
    benefits: ['Health insurance', 'Retirement plan', 'Paid time off', 'Professional development'],
    isVeteranFriendly: true,
    matchScore: 92
  },
  {
    id: uuidv4(),
    title: 'Project Manager',
    company: 'BuildCorp Industries',
    location: 'Remote',
    jobType: 'Full-time',
    salary: '$75,000 - $95,000',
    description: 'BuildCorp is seeking a detail-oriented Project Manager to coordinate complex construction projects. Your military experience in logistics and operations will be valuable in this role as you coordinate resources, track progress, and ensure deadlines are met.',
    requirements: [
      'Bachelor\'s degree in management, engineering, or related field',
      '3+ years of experience in project management',
      'PMP certification (preferred but not required)',
      'Experience with project management software'
    ],
    skills: ['Project Planning', 'Resource Allocation', 'Risk Management', 'Stakeholder Communication', 'Leadership'],
    postedDate: daysAgo(5),
    industry: 'Construction',
    experienceLevel: 'Mid',
    education: 'Bachelor\'s',
    benefits: ['Health insurance', 'Retirement plan', 'Paid time off', 'Flexible schedule'],
    isVeteranFriendly: true,
    matchScore: 88
  },
  {
    id: uuidv4(),
    title: 'Logistics Coordinator',
    company: 'Global Supply Systems',
    location: 'Houston, TX',
    jobType: 'Full-time',
    salary: '$60,000 - $75,000',
    description: 'Global Supply Systems is looking for a Logistics Coordinator with experience in supply chain management. This role involves coordinating shipments, managing inventory, and ensuring efficient operations. Military logistics experience is highly valued.',
    requirements: [
      'Associate\'s or Bachelor\'s degree in logistics, supply chain, or related field',
      '2+ years of experience in logistics or supply chain management',
      'Knowledge of logistics software and systems',
      'Strong analytical and problem-solving skills'
    ],
    skills: ['Supply Chain Management', 'Inventory Control', 'Logistics Planning', 'Problem Solving', 'Attention to Detail'],
    postedDate: daysAgo(1),
    industry: 'Logistics',
    experienceLevel: 'Entry',
    education: 'Associate\'s',
    benefits: ['Health insurance', 'Retirement plan', 'Paid time off', 'Employee discount program'],
    isVeteranFriendly: true,
    matchScore: 95
  },
  {
    id: uuidv4(),
    title: 'Information Security Analyst',
    company: 'CyberDefend',
    location: 'San Diego, CA',
    jobType: 'Full-time',
    salary: '$90,000 - $115,000',
    description: 'CyberDefend is seeking an Information Security Analyst to help protect our systems and data. This role involves monitoring security systems, identifying vulnerabilities, and implementing security measures. Veterans with cybersecurity experience are encouraged to apply.',
    requirements: [
      'Bachelor\'s degree in cybersecurity, IT, or related field',
      '3+ years of experience in information security',
      'Security certifications (CISSP, Security+, etc.)',
      'Knowledge of security frameworks and compliance regulations'
    ],
    skills: ['Network Security', 'Vulnerability Assessment', 'Security Protocols', 'Incident Response', 'Compliance'],
    postedDate: daysAgo(3),
    industry: 'Technology',
    experienceLevel: 'Mid',
    education: 'Bachelor\'s',
    benefits: ['Health insurance', 'Retirement plan', 'Paid time off', 'Professional development'],
    isVeteranFriendly: true,
    matchScore: 87
  },
  {
    id: uuidv4(),
    title: 'Healthcare Administrator',
    company: 'Veterans Health Network',
    location: 'San Antonio, TX',
    jobType: 'Full-time',
    salary: '$70,000 - $90,000',
    description: 'Veterans Health Network is looking for a Healthcare Administrator to oversee daily operations at our facility. This role involves coordinating staff, managing resources, and ensuring quality patient care. Military medical administrative experience is highly valued.',
    requirements: [
      'Bachelor\'s degree in healthcare administration or related field',
      '3+ years of experience in healthcare administration',
      'Knowledge of healthcare regulations and compliance',
      'Strong leadership and communication skills'
    ],
    skills: ['Healthcare Operations', 'Staff Management', 'Regulatory Compliance', 'Budget Administration', 'Strategic Planning'],
    postedDate: daysAgo(7),
    industry: 'Healthcare',
    experienceLevel: 'Mid',
    education: 'Bachelor\'s',
    benefits: ['Health insurance', 'Retirement plan', 'Paid time off', 'Tuition assistance'],
    isVeteranFriendly: true,
    matchScore: 83
  },
  {
    id: uuidv4(),
    title: 'Operations Analyst',
    company: 'Strategic Consulting Group',
    location: 'Chicago, IL',
    jobType: 'Full-time',
    salary: '$65,000 - $85,000',
    description: 'Strategic Consulting Group is seeking an Operations Analyst to help optimize client operations. This role involves data analysis, process improvement, and developing recommendations. Veterans with experience in operations and analysis are encouraged to apply.',
    requirements: [
      'Bachelor\'s degree in business, operations, or related field',
      '2+ years of experience in operations analysis',
      'Strong analytical and problem-solving skills',
      'Proficiency in data analysis tools'
    ],
    skills: ['Data Analysis', 'Process Improvement', 'Problem Solving', 'Strategic Thinking', 'Project Management'],
    postedDate: daysAgo(4),
    industry: 'Consulting',
    experienceLevel: 'Entry',
    education: 'Bachelor\'s',
    benefits: ['Health insurance', 'Retirement plan', 'Paid time off', 'Professional development'],
    isVeteranFriendly: false,
    matchScore: 78
  },
  {
    id: uuidv4(),
    title: 'Leadership Development Trainer',
    company: 'Elite Leadership Academy',
    location: 'Remote',
    jobType: 'Full-time',
    salary: '$70,000 - $90,000',
    description: 'Elite Leadership Academy is looking for a Leadership Development Trainer to design and deliver leadership training programs. This role involves creating curriculum, facilitating workshops, and coaching participants. Military leadership experience is highly valued.',
    requirements: [
      'Bachelor\'s degree in education, business, or related field',
      '5+ years of leadership experience',
      'Experience in training and development',
      'Strong communication and presentation skills'
    ],
    skills: ['Leadership Training', 'Curriculum Development', 'Public Speaking', 'Coaching', 'Facilitation'],
    postedDate: daysAgo(10),
    industry: 'Education',
    experienceLevel: 'Senior',
    education: 'Bachelor\'s',
    benefits: ['Health insurance', 'Retirement plan', 'Paid time off', 'Flexible schedule'],
    isVeteranFriendly: true,
    matchScore: 90
  },
  {
    id: uuidv4(),
    title: 'Mechanical Engineer',
    company: 'Advanced Defense Systems',
    location: 'Huntsville, AL',
    jobType: 'Full-time',
    salary: '$85,000 - $110,000',
    description: 'Advanced Defense Systems is seeking a Mechanical Engineer to design and develop defense-related products. This role involves CAD design, prototype testing, and product improvement. Veterans with engineering experience are encouraged to apply.',
    requirements: [
      'Bachelor\'s degree in mechanical engineering',
      '3+ years of experience in mechanical engineering',
      'Proficiency in CAD software',
      'Experience with product development lifecycle'
    ],
    skills: ['Mechanical Design', 'CAD', 'Product Development', 'Testing', 'Quality Control'],
    postedDate: daysAgo(8),
    industry: 'Manufacturing',
    experienceLevel: 'Mid',
    education: 'Bachelor\'s',
    benefits: ['Health insurance', 'Retirement plan', 'Paid time off', 'Relocation assistance'],
    isVeteranFriendly: true,
    matchScore: 75
  },
  {
    id: uuidv4(),
    title: 'Financial Advisor',
    company: 'Veterans Financial Services',
    location: 'Phoenix, AZ',
    jobType: 'Full-time',
    salary: '$60,000 - $80,000 + Commission',
    description: 'Veterans Financial Services is looking for a Financial Advisor to help clients plan for their financial future. This role involves client consultations, financial planning, and investment recommendations. Veterans with leadership and communication skills are encouraged to apply.',
    requirements: [
      'Bachelor\'s degree in finance, business, or related field',
      'Series 7 and 66 licenses (or willing to obtain)',
      'Strong communication and interpersonal skills',
      'Customer service orientation'
    ],
    skills: ['Financial Planning', 'Client Relations', 'Investment Strategies', 'Communication', 'Problem Solving'],
    postedDate: daysAgo(6),
    industry: 'Finance',
    experienceLevel: 'Entry',
    education: 'Bachelor\'s',
    benefits: ['Health insurance', 'Retirement plan', 'Paid time off', 'Commission structure'],
    isVeteranFriendly: true,
    matchScore: 72
  },
  {
    id: uuidv4(),
    title: 'IT Project Manager',
    company: 'Tech Innovations',
    location: 'Denver, CO',
    jobType: 'Full-time',
    salary: '$90,000 - $115,000',
    description: 'Tech Innovations is seeking an IT Project Manager to oversee technology implementation projects. This role involves coordinating teams, managing timelines, and ensuring successful project delivery. Veterans with project management experience are encouraged to apply.',
    requirements: [
      'Bachelor\'s degree in IT, computer science, or related field',
      '5+ years of experience in IT project management',
      'PMP or Agile certification preferred',
      'Experience with IT infrastructure and software implementation'
    ],
    skills: ['Project Management', 'IT Infrastructure', 'Agile Methodology', 'Stakeholder Management', 'Risk Mitigation'],
    postedDate: daysAgo(12),
    industry: 'Technology',
    experienceLevel: 'Senior',
    education: 'Bachelor\'s',
    benefits: ['Health insurance', 'Retirement plan', 'Paid time off', 'Remote work options'],
    isVeteranFriendly: false,
    matchScore: 80
  },
  {
    id: uuidv4(),
    title: 'Emergency Management Specialist',
    company: 'National Preparedness Agency',
    location: 'Washington, DC',
    jobType: 'Full-time',
    salary: '$75,000 - $95,000',
    description: 'National Preparedness Agency is looking for an Emergency Management Specialist to help develop and implement emergency response plans. This role involves risk assessment, planning, and coordination with various stakeholders. Military experience in emergency operations is highly valued.',
    requirements: [
      'Bachelor\'s degree in emergency management or related field',
      '3+ years of experience in emergency management',
      'Knowledge of FEMA guidelines and procedures',
      'Experience with emergency response operations'
    ],
    skills: ['Emergency Planning', 'Risk Assessment', 'Crisis Management', 'Stakeholder Coordination', 'Policy Implementation'],
    postedDate: daysAgo(9),
    industry: 'Government',
    experienceLevel: 'Mid',
    education: 'Bachelor\'s',
    benefits: ['Health insurance', 'Retirement plan', 'Paid time off', 'Federal benefits package'],
    isVeteranFriendly: true,
    matchScore: 94
  },
  {
    id: uuidv4(),
    title: 'Human Resources Manager',
    company: 'Veterans First Corporation',
    location: 'Austin, TX',
    jobType: 'Full-time',
    salary: '$80,000 - $100,000',
    description: 'Veterans First Corporation is seeking a Human Resources Manager to oversee HR functions and programs. This role involves recruitment, employee relations, and policy development. Veterans with leadership and people management experience are encouraged to apply.',
    requirements: [
      'Bachelor\'s degree in human resources or related field',
      '5+ years of experience in human resources',
      'PHR or SHRM certification preferred',
      'Knowledge of HR best practices and regulations'
    ],
    skills: ['Recruitment', 'Employee Relations', 'Policy Development', 'Training', 'Performance Management'],
    postedDate: daysAgo(15),
    industry: 'Technology',
    experienceLevel: 'Senior',
    education: 'Bachelor\'s',
    benefits: ['Health insurance', 'Retirement plan', 'Paid time off', 'Professional development'],
    isVeteranFriendly: true,
    matchScore: 85
  }
];