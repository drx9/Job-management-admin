import { NextResponse } from 'next/server';
import db from '@/app/lib/db';


export async function GET() {
  try {
    const jobs = await db.query(`
      SELECT 
        id, 
        job_title AS "jobTitle", 
        company_name AS "companyName",
        job_type AS "jobType",
        status, 
        location, 
        salary_min AS "salaryMin", 
        salary_max AS "salaryMax",
        description 
      FROM job_openings
    `);

    return NextResponse.json(jobs.rows, { status: 200 });
  } catch (error) {
    console.error("Error fetching jobs:", error);
    return NextResponse.json({ error: "Failed to fetch jobs" }, { status: 500 });
  }
}


export async function POST(req: Request) {
  try {
    const data = await req.json(); 

    const job = await db.query(
      `INSERT INTO job_openings (company_name, job_title, job_type, department, location, salary_min, salary_max, experience, application_deadline, description, status) 
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING *`,
      [
        data.companyName, 
        data.jobTitle, 
        data.jobType, 
        data.department, 
        data.location, 
        data.salaryMin, 
        data.salaryMax, 
        data.experience, 
        data.applicationDeadline, 
        data.description, 
        data.status
      ]
    );

    return NextResponse.json({ job: job.rows[0] }, { status: 201 });
  } catch (error: any) {
    console.error("Error creating job opening:", error);
    return NextResponse.json({ error: "Internal Server Error", details: error.message }, { status: 500 });
  }
}
