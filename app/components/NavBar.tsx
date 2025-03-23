"use client";

import { useState } from "react";
import {
  Box,
  Group,
  Button,
  Image,
  rem,
  Modal,
  TextInput,
  Select,
  RangeSlider,
  Divider,
  Text
} from "@mantine/core";
import Link from "next/link";
import CreateJobForm from "@/app/components/JobOpeningForm";
import { IconSearch, IconMapPin, IconUser } from "@tabler/icons-react";

export function NavBar() {
  const [opened, setOpened] = useState(false);
  const [salaryRange, setSalaryRange] = useState<[number, number]>([50, 80]);
  const [filters, setFilters] = useState({
    search: "",
    jobType: "",
    location: "",
  });

  const handleFilterChange = (key: string, value: string | null) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [key]: value || "",
    }));
  };

  return (
    <>
      <Modal opened={opened} onClose={() => setOpened(false)} title="Create Job Opening" centered>
        <CreateJobForm />
      </Modal>

      <Box
        style={{
          width: "1440px",
          height: "214px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: "0 auto",
          paddingTop: "21px",
        }}
      >
     
        <Box
          style={{
            background: "white",
            borderRadius: "122px",
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: "#ccc",
            padding: "10px 40px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            width: "890px",
            height: "80px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
        
          <Link href="/" passHref>
            <Image src="/logo.svg" alt="Logo" width={40} height={40} />
          </Link>

          
          <Group gap={35} align="center">
            {["Home", "Find Jobs", "Find Talents", "About us", "Testimonials"].map((text, index) => (
              <Link key={index} href={`/${text.toLowerCase().replace(/\s/g, "-")}`} passHref legacyBehavior>
                <a
                  style={{
                    fontSize: rem(15),
                    fontWeight: 500,
                    color: "#333",
                    textDecoration: "none",
                    cursor: "pointer",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
                    e.currentTarget.style.transform = "scale(1.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                >
                  {text}
                </a>
              </Link>
            ))}
          </Group>

          
          <Button
            style={{
              background: "linear-gradient(90deg, #7B2FF7 0%, #F107A3 100%)",
              color: "white",
              borderRadius: "30px",
              fontWeight: 600,
              fontSize: rem(14),
              height: 40,
              width: 130,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.1)";
              e.currentTarget.style.boxShadow = "0px 4px 15px rgba(123, 47, 247, 0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "none";
            }}
            onClick={() => setOpened(true)}
          >
            Create Jobs
          </Button>
        </Box>

        
        <Box
          mt={20}
          style={{
            background: "white",
            padding: "40px 60px",
            width: "96%",
            maxWidth: "1500px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderRadius: "8px",
          }}
        >
          <Group style={{ flex: 1 }}>
            <IconSearch size={18} />
            <TextInput
              placeholder="Search By Job Title, Role"
              variant="unstyled"
              style={{ flex: 1 }}
              value={filters.search}
              onChange={(e) => handleFilterChange("search", e.target.value)}
            />
          </Group>

          <Divider orientation="vertical" />

          <Group style={{ flex: 1, justifyContent: "center" }}>
            <IconMapPin size={18} />
            <Select
              placeholder="Preferred Location"
              data={["Remote", "On-site", "Hybrid"]}
              variant="unstyled"
              value={filters.location}
              onChange={(value) => handleFilterChange("location", value)}
            />
          </Group>

          <Divider orientation="vertical" />

          <Group style={{ flex: 1, justifyContent: "center" }}>
            <IconUser size={18} />
            <Select
              placeholder="Job type"
              data={["Full-time", "Part-time", "Internship"]}
              variant="unstyled"
              value={filters.jobType}
              onChange={(value) => handleFilterChange("jobType", value)}
            />
          </Group>

          <Divider orientation="vertical" />

          <Box style={{ flex: 1 }}>
            <Text size="sm" fw={500} mb={5}>
              Salary Per Month
            </Text>
            <RangeSlider
              min={10}
              max={200}
              step={10}
              marks={[
                { value: 50, label: "₹50k" },
                { value: 80, label: "₹80k" },
              ]}
              value={salaryRange}
              onChange={setSalaryRange}
              styles={{
                markLabel: { fontSize: "14px", fontWeight: 500 },
                track: { height: "4px", backgroundColor: "black" },
                thumb: { backgroundColor: "black" },
              }}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
}
