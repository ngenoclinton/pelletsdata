import Link from "next/link"
import { ArrowRight, BarChart3, BookOpen, ChevronRight, Database, Shield, Zap } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import HeroSection from "@/components/Home/hero/hero-section"
import Hero from "@/components/Home/hero/hero"
import CardHome from "@/components/Home/HomeBody/Card"
import ServicesSection from "@/components/Home/servicesection/Service_Section"
// import HeroSection from "@/components/hero/hero-section"

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col">
     {/* // Navigation bar   */}
      {/* <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <BarChart3 className="h-6 w-6 text-primary" />
              <span className="inline-block font-bold">Pellets Data Analysts</span>
            </Link>
            <nav className="hidden gap-6 md:flex">
              <Link
                href="#about"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                About
              </Link>
              <Link
                href="#services"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Services
              </Link>
              <Link
                href="#contact"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Contact
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <Button variant="outline" className="hidden sm:flex">
              Log in
            </Button>
            <Button>Get Started</Button>
          </div>
        </div>
      </header> */}

      <main className="flex-1">
        <Hero />
        <CardHome/>
        <ServicesSection />

        {/* <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">About Us</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Making Data Accessible and Actionable
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Every business leader seeks to understand their business and understand their customer. As your
                  business data continues to grow in volume and detail, so does the challenge of applying it to provide
                  answers to your most important questions.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl">Our Mission</h3>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Increase efficiency of businesses by providing timely intelligence to decision makers.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl">Our Vision</h3>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Converting data into a strategic business asset for our clients.
                  </p>
                </div>
              </div>
            </div>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-muted-foreground md:text-xl/relaxed">
                Even though data is complex, getting answers you need shouldn't be. We leverage the convenience of cloud
                computing to provide dashboards that provide a 360-degree view of businesses with the most important
                metrics in one place.
              </p>
            </div>
          </div>
        </section> */}
        <section id="services" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Services</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Expertise</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We offer comprehensive data solutions and professional training to help your business thrive.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Database className="h-6 w-6 text-primary" />
                    <CardTitle>Data Solutions Consultancy</CardTitle>
                  </div>
                  <CardDescription>
                    We leverage cloud technologies to transform raw data from business applications into actionable
                    insights.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="grid gap-4">
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Data Engineering</h4>
                        <p className="text-sm text-muted-foreground">
                          Building robust data pipelines and infrastructure to collect, store, and process your data.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Data Science</h4>
                        <p className="text-sm text-muted-foreground">
                          Applying advanced analytics and machine learning to extract valuable insights from your data.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Data Analysis and Visualization</h4>
                        <p className="text-sm text-muted-foreground">
                          Creating intuitive dashboards and reports that make complex data easy to understand.
                        </p>
                      </div>
                    </li>
                  </ul>
                  <Button variant="link" className="mt-4 px-0">
                    Read More <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-6 w-6 text-primary" />
                    <CardTitle>Trainings</CardTitle>
                  </div>
                  <CardDescription>
                    Professional development programs designed to enhance your team's capabilities.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="grid gap-2">
                    <li className="flex items-center gap-2">
                      <Zap className="h-4 w-4 text-primary" />
                      <span>Business Intelligence</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Shield className="h-4 w-4 text-primary" />
                      <span>Information Security</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <BarChart3 className="h-4 w-4 text-primary" />
                      <span>Financial Management</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-primary" />
                      <span>Energy Sector</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-primary" />
                      <span>Occupational Safety & Health Management</span>
                    </li>
                  </ul>
                  <Button variant="link" className="mt-4 px-0">
                    View All Trainings <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Transform Your Data?</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Contact us today to learn how we can help your business leverage data for strategic advantage.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <Button size="lg" className="w-full">
                  Get Started
                </Button>
                <Button variant="outline" size="lg" className="w-full">
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">© 2025 Pellets Data Analysts. All rights reserved.</p>
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
  )
}

