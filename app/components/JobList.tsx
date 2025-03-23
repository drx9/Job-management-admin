"use client";

import { useEffect, useState } from "react";
import { Container, Grid, Text } from "@mantine/core";
import JobCard from "@/app/components/JobCard";
import { JobOpening } from "@/app/lib/types";

interface JobsListProps {
  initialJobs?: JobOpening[];
  showActions?: boolean;
}

export default function JobsList({ initialJobs, showActions = false }: JobsListProps) {
  const [jobs, setJobs] = useState<JobOpening[]>(initialJobs || []);
  const [loading, setLoading] = useState(!initialJobs);

  const fetchJobs = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/job-openings");
      const data: JobOpening[] = await res.json();

      if (Array.isArray(data)) {
        setJobs(data);
      } else {
        console.error("Invalid jobs data:", data);
        setJobs([]);
      }
    } catch (error) {
      console.error("Error fetching jobs:", error);
      setJobs([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <Container size="xl">
      {loading ? (
        <Text mt="md">Loading jobs...</Text>
      ) : jobs.length === 0 ? (
        <Text mt="md">No job openings found.</Text>
      ) : (
        <Grid mt="md" gutter="md">
          {jobs.map((job) => (
            <Grid.Col key={job.id} span={{ base: 12, sm: 6, md: 4, lg: 3 }}>
              <JobCard job={{ ...job, companyLogo: job.companyLogo || "/default-logo.png" }} showActions />
            </Grid.Col>
          ))}
        </Grid>
      )}
    </Container>
  );
}
