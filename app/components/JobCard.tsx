import { Card, Text, Badge, Group, Button, Avatar } from "@mantine/core";
import { JobOpening } from "@/app/lib/types";

interface JobCardProps {
  job: JobOpening;
  showActions?: boolean;
}

export default function JobCard({ job, showActions = true }: JobCardProps) {
  return (
    <Card
      shadow="md"
      padding="lg"
      radius="12px"
      withBorder
      style={{
        display: "flex",
        flexDirection: "column",
        height: "360px", 
        width: "316px", 
      }}
    >
      
      <Group align="center" mb="xs">
        <Avatar
          src={job.companyLogo || "/default-logo.png"}
          size="lg"
          radius="sm"
          style={{
            width: "83.46px",
            height: "82px",
            borderRadius: "13.18px",
            border: "1px solid #ccc", 
          }}
        />
        <Text size="sm" c="dimmed">
          {job.companyName || "Company Name Missing"}
        </Text>
      </Group>

      
      <Group justify="space-between" mb="xs" style={{ width: "190px", height: "27px" }}>
        <Text fw={700} size="lg">
          {job.jobTitle || "Job Title Missing"}
        </Text>
      </Group>

      <Group style={{ width: "263.08px", height: "22px", gap: "16px" }}>
        <Badge color="green" style={{ width: "94.9px", height: "22px" }}>
          {job.jobType || "Type Unknown"}
        </Badge>
        <Badge color="grey" size="sm" style={{ width: "94.9px", height: "22px" }}>
          {job.salaryMin && job.salaryMax
            ? `₹${job.salaryMin / 1000}k - ₹${job.salaryMax / 1000}k`
            : "Not Disclosed"}
        </Badge>
      </Group>

      
      <Text
        size="sm"
        c="dimmed"
        lineClamp={2}
        mb="sm"
        style={{ width: "300px", height: "76px" }}
      >
        {job.description || "No job description available."}
      </Text>

      
      {showActions && (
        <Button
          color="blue"
          style={{
            width: "284px",
            height: "46px",
            borderRadius: "10px",
            border: "1px solid #ccc", 
            padding: "12px 10px",
          }}
        >
          Apply Now
        </Button>
      )}
    </Card>
  );
}
