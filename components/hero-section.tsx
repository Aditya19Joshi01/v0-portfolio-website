import { Button } from "@/components/ui/button"
import { ArrowRight, FileText } from "lucide-react"

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="animate-fade-in opacity-0">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-balance">Software Engineer</h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            Backend Engineering • Cloud Infrastructure • Distributed Systems
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            Designing reliable backend services, containerized workflows, and cloud-native architectures with a focus on
            performance and automation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="gap-2" asChild>
              <a
                href="https://drive.google.com/file/d/13QD0gQ-SMrVamUaMfadIZVXMJnKkwzj-/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileText className="h-5 w-5" />
                View Resume
              </a>
            </Button>
            <Button size="lg" variant="outline" className="gap-2 bg-transparent" asChild>
              <a href="#contact">
                Contact Me
                <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
