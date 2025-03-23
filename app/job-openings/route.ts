import { NextResponse } from 'next/server';
import pool from '@/app/lib/db';

export async function GET() {
  try {
    const result = await pool.query('SELECT * FROM job_openings ORDER BY id DESC');
    return NextResponse.json(result.rows);
  } catch (error) {
    console.error('Error fetching job openings:', error);
    return NextResponse.json({ error: 'Failed to fetch job openings' }, { status: 500 });
  }
}
