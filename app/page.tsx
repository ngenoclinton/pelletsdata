import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  ChevronRight,
  Database,
  Shield,
  Zap,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import HeroSection from "@/components/Home/hero/hero-section";
import Hero from "@/components/Home/hero/hero";
import CardHome from "@/components/Home/HomeBody/Card";
import ServicesSection from "@/components/Home/servicesection/Service_Section";
// import { NavigationLoader } from "@/components/loader/NavigationLoader"
import HowWeDoIt from "@/components/Home/HowWeDoIt";
import IndustriesSection from "@/components/Home/Industries";
import TeamSection from "@/components/Home/TeamSection";
import QuickContact from "@/components/Home/QuickContact";
import WhatWeProvide from "@/components/Home/servicesection/WhatWeProvide";
// import HeroSection from "@/components/hero/hero-section"

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* <NavigationLoader /> */}

      <main className="flex-1">
        <Hero />
        <CardHome />
        {/* <ServicesSection /> */}
        <WhatWeProvide/>
        <HowWeDoIt />
        <IndustriesSection />
        <TeamSection />
        <QuickContact />
        
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">
          © 2025 Pellets Data Analysts. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4">
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
