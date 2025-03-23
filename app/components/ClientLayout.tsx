"use client"; 

import { MantineProvider, createTheme } from "@mantine/core";
import { Inter } from "next/font/google";
import { NavBar } from "@/app/components/NavBar";

const inter = Inter({ subsets: ["latin"] });


const theme = createTheme({
  primaryColor: "blue",
});

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <MantineProvider theme={theme}>
      <div className={inter.className}>
        
        <div style={{ height: 60, backgroundColor: "#f5f5f5" }}>
          <NavBar />
        </div>

        
        <main>{children}</main>

        
        <div style={{ height: 60, backgroundColor: "#f5f5f5" }}>Footer Content</div>
      </div>
    </MantineProvider>
  );
}
