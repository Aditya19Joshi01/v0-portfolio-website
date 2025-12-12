import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    role: "Software Engineering Intern",
    company: "Nokia",
    location: "Bangalore, India",
    period: "January 2025 - June 2025",
    bullets: [
      "Automated KPI Degradation Check, reducing analysis time by 80% via rule-based logic & visual reporting dashboards.",
      "Enhanced ESM by debugging logic affecting cell sleep; integrated visualizations for energy/cost impact for all vendors.",
      "Developed a Configuration validation framework with OOP principles, boosting test validation efficiency by 90%.",
      "Collaborated in Agile sprints, participated in peer code reviews, and supported testing automation.",
    ],
    tech: ["Python", "Automation", "Agile", "Testing", "Code Reviews", "Dashboards"],
    brandColor: "#124191",
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-6 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="p-6 animate-fade-in opacity-0" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold text-xl"
                    style={{ backgroundColor: exp.brandColor }}
                  >
                    N
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                    <div>
                      <h3 className="text-xl font-semibold">{exp.role}</h3>
                      <p className="text-muted-foreground">
                        {exp.company} • {exp.location}
                      </p>
                    </div>
                    <span className="text-sm text-muted-foreground mt-1 md:mt-0">{exp.period}</span>
                  </div>
                </div>
              </div>
              <ul className="space-y-2 mb-4 list-disc list-inside text-muted-foreground leading-relaxed">
                {exp.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {exp.tech.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
