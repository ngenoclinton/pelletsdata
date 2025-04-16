"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle, Play, ChevronDown } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px] overflow-hidden">
        <div className="absolute inset-0 bg-[#092c3f]/80 z-10"></div>
        <Image
          src="/placeholder.svg?height=600&width=1200"
          alt="Data analytics team"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
          <div className="max-w-3xl">
            <div className="inline-block px-6 py-2 mb-8 rounded-full border border-[#eb566c] text-[#eb566c] text-sm font-medium">
              ABOUT OUR TEAM
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
              Solve All Your Data
              <br />
              <span className="text-white">Problems With Pellets</span>
            </h1>
            <div className="flex items-start justify-between mt-8">
              <div className="relative group">
                <div className="w-32 h-32 rounded-full border border-white/30 flex items-center justify-center cursor-pointer">
                  <div className="absolute inset-0 rounded-full border border-[#e8ff8d] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="w-2 h-2 rounded-full bg-[#e8ff8d] absolute left-1/2 top-0 transform -translate-x-1/2"></div>
                  <div className="text-center">
                    <span className="text-white text-sm">Explore Our</span>
                    <br />
                    <span className="text-white text-sm">Service</span>
                    <ArrowRight className="h-4 w-4 text-white mt-1 mx-auto" />
                  </div>
                </div>
              </div>

              <p className="text-white/80 max-w-md text-sm">
                Pellets Data Analysts is a data consultancy firm focused on helping businesses harness the full value of
                their data.
              </p>

              <div className="w-16 h-16 rounded-full bg-[#eb566c] flex items-center justify-center cursor-pointer hover:bg-[#eb566c]/90 transition-colors">
                <Play className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section id="our-story" className="py-20 bg- mx-auto max-w-6xl">
        <div className="container mx-auto px-4">
          <div className="mb-2">
            <span className="text-[#092c3f] text-sm font-medium uppercase border-b-2 border-[#eb566c] pb-1">
              ABOUT COMPANY
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-[#092c3f] mb-12 max-w-4xl">
            We Provide The Best Analytics
            <br />
            For Your Business Growth
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-4 flex justify-center md:justify-start">
              <div className="flex justify-center items-center">
                <ChevronDown className="h-16 w-16 text-[#092c3f]/30 animate-bounce" />
              </div>
            </div>

            <div className="md:col-span-8">
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-[#092c3f] mb-2">Our History & Goal.</h3>
                <p className="text-gray-700">
                  Pellets Data Analysts began with a mission: to make data accessible, powerful, and profitable for
                  African businesses. We believe clarity is everything—and we design with that in mind.
                </p>
                <p className="text-gray-700 mt-4">
                  Since our founding in 2018, we've helped over 200 businesses transform their data into actionable
                  insights, leading to an average of 32% increase in operational efficiency and decision-making speed.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="https://img.freepik.com/premium-photo/young-african-businesswoman-presenting-data-analysis-dashboard-tv-concord_31965-129100.jpg?ga=GA1.1.1546325054.1744712213&semt=ais_hybrid&w=740"
              alt="Our team collaborating"
              width={200}
              height={100}
              className="w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <span className="text-[#092c3f] text-sm font-medium uppercase border-b-2 border-[#eb566c] pb-1">
                  ABOUT COMPANY
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-[#092c3f] mt-4">
                  We Are The Best
                  <br />
                  Solution For Your Data
                  <br />
                  Analytics Needs
                </h2>
              </div>

              <div className="bg-[#fdf8f3] p-6 rounded-lg flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="Sarah Johnson"
                    width={80}
                    height={80}
                    className="rounded-full"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#092c3f]">
                    Sarah Johnson, <span className="font-normal">Founder</span>
                  </h3>
                  <p className="text-gray-600 text-sm mt-2">
                    With over 15 years of experience in data science and analytics, Sarah founded Pellets to bridge the
                    gap between complex data and actionable business insights.
                  </p>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-lg group">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Team members collaborating"
                  width={500}
                  height={300}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#092c3f] to-transparent p-4">
                  <Link
                    href="/team"
                    className="text-white font-medium flex items-center gap-2 hover:text-[#e8ff8d] transition-colors"
                  >
                    Discover More
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Team working together"
                  width={600}
                  height={400}
                  className="w-full object-cover"
                />
              </div>

              <div className="space-y-4">
                <p className="text-gray-700">
                  Our team of data specialists combines technical expertise with business acumen to deliver insights
                  that drive real results. We work closely with each client to understand their unique challenges and
                  opportunities.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-[#eb566c]" />
                    <span className="text-[#092c3f] font-medium">Best Analytics Service</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-[#eb566c]" />
                    <span className="text-[#092c3f] font-medium">Highly Dedicated Team</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-[#eb566c]" />
                    <span className="text-[#092c3f] font-medium">Business Strategy & Growth</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-[#eb566c]" />
                    <span className="text-[#092c3f] font-medium">98.7% Customer Satisfaction</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="py-20 bg-[#f8f9fa]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#092c3f] mb-4">Mission and Vision</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Our guiding principles that drive everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-[#eb566c] hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-[#092c3f] mb-4">Mission</h3>
              <p className="text-gray-700">
                To increase efficiency in businesses by providing timely, reliable intelligence to decision-makers.
              </p>
              <div className="mt-6 flex justify-end">
                <div className="h-12 w-12 rounded-full bg-[#e8ff8d] flex items-center justify-center">
                  <span className="text-[#092c3f] font-bold">01</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-[#e8ff8d] hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-[#092c3f] mb-4">Vision</h3>
              <p className="text-gray-700">To make data a strategic asset for every client we serve.</p>
              <div className="mt-6 flex justify-end">
                <div className="h-12 w-12 rounded-full bg-[#eb566c] flex items-center justify-center">
                  <span className="text-white font-bold">02</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Pellets Section */}
      <section className="py-20 bg-[#092c3f]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Pellets?</h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              What makes us the right choice for your data analytics needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#092c3f]/40 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:bg-[#092c3f]/60 transition-colors">
              <div className="mb-6 text-[#e8ff8d]">
                <CheckCircle size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Industry Experts</h3>
              <p className="text-white/80">Industry experts with a track record in analytics delivery</p>
            </div>

            <div className="bg-[#092c3f]/40 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:bg-[#092c3f]/60 transition-colors">
              <div className="mb-6 text-[#e8ff8d]">
                <CheckCircle size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Human-Centric</h3>
              <p className="text-white/80">Human-centric reporting that adapts to your needs</p>
            </div>

            <div className="bg-[#092c3f]/40 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:bg-[#092c3f]/60 transition-colors">
              <div className="mb-6 text-[#e8ff8d]">
                <CheckCircle size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Commitment</h3>
              <p className="text-white/80">Commitment to clarity, security, and business impact</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#092c3f] mb-6">
              Ready to transform your data into actionable insights?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Let's work together to unlock the full potential of your business data.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#eb566c] text-white font-medium hover:bg-[#eb566c]/90 transition-colors"
            >
              <span>Contact Us</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
