"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { 
  TextInput, 
  Button, 
  Group, 
  Select, 
  Grid, 
  Textarea, 
  Box, 
  NumberInput, 
  Title,
  Container, 
  Card
} from "@mantine/core";
import { CreateJobOpeningDTO, JobTypes } from "@/app/lib/types";
import { useRouter } from "next/navigation";

interface JobOpeningFormProps {
  onJobCreated?: () => void; 
}

export default function JobOpeningForm({ onJobCreated }: JobOpeningFormProps) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  
  const { control, handleSubmit, formState: { errors } } = useForm<CreateJobOpeningDTO>({
    defaultValues: {
      companyName: "",
      jobTitle: "",
      jobType: "",
      department: "",
      location: "",
      salaryMin: 0, 
      salaryMax: 0,
      experience: "",
      applicationDeadline: "",
      description: "",
      status: "draft",
    }
  });

  const onSubmit = async (data: CreateJobOpeningDTO) => {
    try {
      setLoading(true);
  
      const response = await fetch("/api/job-openings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Failed to create job opening");

      // ✅ Call onJobCreated if it's provided
      if (onJobCreated) {
        onJobCreated();
      }

    } catch (error) {
      console.error("Error creating job opening:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container size="sm">
      <Card shadow="lg" p="xl" radius="md" withBorder>
        <Title order={2} mb="lg" style={{ textAlign: "center" }}>
          Create Job Opening
        </Title>
        
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid gutter="md">
            <Grid.Col span={6}>
              <Controller
                name="jobTitle"
                control={control}
                rules={{ required: "Job title is required" }}
                render={({ field }) => (
                  <TextInput
                    label="Job Title"
                    placeholder="e.g. Frontend Developer"
                    error={errors.jobTitle?.message}
                    {...field}
                  />
                )}
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <Controller
                name="companyName"
                control={control}
                rules={{ required: "Company name is required" }}
                render={({ field }) => (
                  <TextInput
                    label="Company Name"
                    placeholder="Amazon, Microsoft, Swiggy"
                    error={errors.companyName?.message}
                    {...field}
                  />
                )}
              />
            </Grid.Col>

            <Grid.Col span={6}>
              <Controller
                name="location"
                control={control}
                rules={{ required: "Location is required" }}
                render={({ field }) => (
                  <TextInput
                    label="Location"
                    placeholder="Choose Preferred Location"
                    error={errors.location?.message}
                    {...field}
                  />
                )}
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <Controller
                name="jobType"
                control={control}
                rules={{ required: "Job type is required" }}
                render={({ field }) => (
                  <Select
                    label="Job Type"
                    placeholder="Select Job Type"
                    data={JobTypes}
                    error={errors.jobType?.message}
                    {...field}
                  />
                )}
              />
            </Grid.Col>

            <Grid.Col span={6}>
              <Controller
                name="salaryMin"
                control={control}
                render={({ field }) => (
                  <NumberInput
                    label="Salary Range (Min)"
                    placeholder="₹0"
                    error={errors.salaryMin?.message}
                    {...field}
                  />
                )}
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <Controller
                name="salaryMax"
                control={control}
                render={({ field }) => (
                  <NumberInput
                    label="Salary Range (Max)"
                    placeholder="₹12,00,000"
                    error={errors.salaryMax?.message}
                    {...field}
                  />
                )}
              />
            </Grid.Col>

            <Grid.Col span={6}>
              <Controller
                name="applicationDeadline"
                control={control}
                render={({ field }) => (
                  <TextInput
                    type="date"
                    label="Application Deadline"
                    error={errors.applicationDeadline?.message}
                    {...field}
                  />
                )}
              />
            </Grid.Col>
          
            <Grid.Col span={12}>
              <Controller
                name="description"
                control={control}
                rules={{ required: "Job description is required" }}
                render={({ field }) => (
                  <Textarea
                    label="Job Description"
                    placeholder="Please share a description to let the candidate know more about the job role"
                    minRows={5}
                    error={errors.description?.message}
                    {...field}
                  />
                )}
              />
            </Grid.Col>
          </Grid>

          <Group justify="space-between" mt="xl">
            <Button variant="outline" size="md">
              Save Draft ⌄
            </Button>
            <Button type="submit" size="md" loading={loading} color="blue">
              Publish »
            </Button>
          </Group>
        </form>
      </Card>
    </Container>
  );
}
