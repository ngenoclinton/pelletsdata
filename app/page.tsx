import Link from "next/link"
import { ArrowRight, BarChart3, BookOpen, ChevronRight, Database, Shield, Zap } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import HeroSection from "@/components/Home/hero/hero-section"
import Hero from "@/components/Home/hero/hero"
import CardHome from "@/components/Home/HomeBody/Card"
import ServicesSection from "@/components/Home/servicesection/Service_Section"
// import { NavigationLoader } from "@/components/loader/NavigationLoader"
import HowWeDoIt from "@/components/Home/HowWeDoIt"
// import HeroSection from "@/components/hero/hero-section"

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col">
        {/* <NavigationLoader /> */}

        <main className="flex-1">
        <Hero />
        <CardHome/>
        <ServicesSection />
        <HowWeDoIt/>
       
        {/* <section id="services" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Services</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Expertise</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We offer comprehensive data solutions and professional training to help your business thrive.
              div>
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
        </section> */}
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
