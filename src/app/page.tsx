import { LeadCaptureForm } from "@/components/sections/LeadCaptureForm";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { Button } from "@/components/ui/Button";
import { Code, LineChart, Briefcase, Network, Lightbulb, ShieldCheck } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section id="hero" className="min-h-screen pt-32 pb-20 px-4 md:px-6 flex items-center justify-center bg-gradient-to-b from-secondary to-background relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute top-40 -left-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary mb-6">
                <span>✨ The ultimate enterprise learning solution</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 leading-tight">
                Empower Your Team with <br />
                <span className="text-primary relative inline-block">
                  Accredian Enterprise
                  <svg className="absolute -bottom-2 left-0 w-full h-3 text-primary/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="4" />
                  </svg>
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
                World-class tech and data programs designed to upskill your workforce, accelerate digital transformation, and drive business growth.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a href="#contact" className="w-full sm:w-auto bg-primary text-primary-foreground h-12 px-8 rounded-md font-medium hover:bg-primary-hover transition-colors flex items-center justify-center">
                  Book a Demo
                </a>
                <a href="#programs" className="w-full sm:w-auto bg-transparent border border-border text-foreground h-12 px-8 rounded-md font-medium hover:bg-secondary transition-colors flex items-center justify-center">
                  Explore Programs
                </a>
              </div>
              
              <div className="mt-10 flex items-center justify-center lg:justify-start gap-6 text-sm text-muted-foreground font-medium">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  Trusted by Fortune 500
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  50+ Enterprise Programs
                </div>
              </div>
            </div>

            {/* Hero Form */}
            <div id="contact" className="w-full max-w-md mx-auto lg:mx-0 lg:ml-auto">
              <LeadCaptureForm />
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Companies Section */}
      <section className="py-12 bg-background border-t border-border">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <p className="text-sm font-semibold text-muted-foreground tracking-wider uppercase mb-8">
            Trusted by innovative companies worldwide
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Mock logos text */}
            <h3 className="text-2xl font-bold">Google</h3>
            <h3 className="text-2xl font-bold font-serif">Amazon</h3>
            <h3 className="text-2xl font-bold italic">Microsoft</h3>
            <h3 className="text-2xl font-bold">Meta</h3>
            <h3 className="text-2xl font-bold font-mono">IBM</h3>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-24 bg-secondary/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Enterprise-Grade Programs</h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive curriculums designed by industry experts to address your organization's specific skill gaps.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Data Science & AI", desc: "Build predictive models and leverage AI to solve complex business problems.", icon: LineChart },
              { title: "Product Management", desc: "Master the complete product lifecycle from ideation to successful market launch.", icon: Briefcase },
              { title: "Software Engineering", desc: "Adopt modern architectures, cloud-native practices, and agile methodologies.", icon: Code },
            ].map((program, i) => (
              <div key={i} className="bg-background rounded-2xl overflow-hidden border border-border group hover:shadow-xl transition-all">
                <div className="h-48 bg-muted flex items-center justify-center text-muted-foreground group-hover:bg-primary/5 transition-colors">
                  <program.icon className="w-16 h-16 opacity-50 group-hover:opacity-100 group-hover:text-primary transition-all group-hover:scale-110" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{program.title}</h3>
                  <p className="text-muted-foreground mb-4">{program.desc}</p>
                  <a href="#" className="text-primary font-medium flex items-center gap-2 hover:underline">
                    View Syllabus <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Accredian Section */}
      <section id="why-choose-us" className="py-24 bg-background border-t border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Accredian?</h2>
            <p className="text-lg text-muted-foreground">
              We go beyond traditional training by focusing on practical, outcome-driven learning experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              title="Industry-Aligned Curriculum" 
              description="Programs constantly updated to match the latest tech trends and enterprise requirements." 
              icon={Network} 
            />
            <FeatureCard 
              title="Expert Mentorship" 
              description="Learn directly from senior practitioners at top tech companies who bring real-world context." 
              icon={Lightbulb} 
            />
            <FeatureCard 
              title="Enterprise Security" 
              description="Bank-grade security and compliance standards to protect your organization's intellectual property." 
              icon={ShieldCheck} 
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Partners Say</h2>
            <p className="text-primary-foreground/80 text-lg">
              Hear how leading enterprises have transformed their workforce with Accredian.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <TestimonialCard 
              quote="Accredian completely revamped our data team's capabilities. Within 6 months, we saw a 40% increase in model deployment efficiency."
              author="Sarah Jenkins"
              role="VP of Engineering"
              company="TechNova"
            />
            <TestimonialCard 
              quote="The product management program aligned our entire organization on a unified framework. It has been a game-changer for our roadmap execution."
              author="Michael Chen"
              role="Chief Product Officer"
              company="GlobalRetail"
            />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section id="about" className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to transform your workforce?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join hundreds of enterprises already using Accredian to build the teams of tomorrow.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="px-8 text-base">
              Talk to Sales
            </Button>
            <Button size="lg" variant="outline" className="px-8 text-base">
              Download Enterprise Brochure
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
