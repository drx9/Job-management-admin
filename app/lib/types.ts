export interface JobOpening {
    id: string;
    companyName: string;
    jobTitle: string;
    jobType: string;
    department: string;
    companyLogo?: string;
    location: string;
    salaryMin: number;
    salaryMax: number;
    experience: string;
    applicationDeadline: string;
    description: string;
    postedTime: number;
    status: 'active' | 'closed' | 'draft';
    createdAt: string;
    updatedAt: string;
  }
  
  export type CreateJobOpeningDTO = Omit<JobOpening, 'id' | 'createdAt' | 'updatedAt'>;
  
  export const JobTypes = [
    'Full-time',
    'Part-time',
    'Contract',
    'Temporary',
    'Internship',
    'Remote',
  ];
  
  export const Departments = [
    'Engineering',
    'Design',
    'Marketing',
    'Sales',
    'Customer Support',
    'Human Resources',
    'Finance',
    'Operations',
    'Product',
    'Research',
  ];
  
  export const ExperienceLevels = [
    'Entry Level',
    'Junior',
    'Mid-Level',
    'Senior',
    'Lead',
    'Manager',
    'Director',
    'Executive',
  ];

  console.log("Ts is being loaded");