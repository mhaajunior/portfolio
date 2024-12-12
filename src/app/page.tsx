"use client";

import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import Stack from "@/components/Stack";
import { ThemeSwitcherBtn } from "@/components/ThemeSwitcherBtn";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import dynamic from "next/dynamic";

const Grid = dynamic(() => import("@/components/Grid"), { ssr: false });

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <Stack />
        <RecentProjects />
        {/* temp */}
        <div className="fixed right-0 top-0">
          <ThemeSwitcherBtn />
        </div>
      </div>
    </main>
  );
}
