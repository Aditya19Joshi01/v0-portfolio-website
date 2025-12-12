import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github } from "lucide-react"

const projects = [
  {
    title: "Containerized ML Orchestration Pipeline",
    description:
      "Production-grade ML orchestration system automating end-to-end Geneformer fine-tuning workflows. Features GPU-enabled scheduling, automated versioning, and complete observability stack (Prometheus, Grafana, cAdvisor) for real-time monitoring. Migrated to AWS EKS using KubernetesPodOperator and Helm for scalable, cloud-native execution.",
    tech: ["Airflow", "Docker", "Kubernetes", "EKS", "Prometheus", "Grafana", "Helm", "Geneformer"],
    repo: "https://github.com/Aditya19Joshi01/helical-assignment",
    image: "/ml-pipeline-orchestration-dashboard-with-airflow-d.jpg",
  },
  {
    title: "IoT Fleet Management System",
    description:
      "Real-time IoT device management system with MQTT messaging, FastAPI backend, and telemetry dashboard for monitoring distributed vehicle fleets. Features vehicle history tracking, live map visualization with route markers, speed/time graphs, and maintenance ticket management.",
    tech: ["MQTT", "FastAPI", "IoT Core", "AWS Lambda", "API Gateway", "RDS", "TimescaleDB"],
    repo: "https://github.com/Aditya19Joshi01/IoT-fleet-management",
    image: "/iot-fleet-dashboard-interface-with-vehicle-list-ma.jpg",
  },
  {
    title: "IncidentResponder.AI",
    description:
      "Autonomous cloud SOC and threat response simulator using containerized AI agents to ingest GuardDuty findings, perform log forensics, apply MITRE ATT&CK attribution, and execute rule-based remediation workflows. Features multi-agent decision flows, secure config management, and audit-grade logging.",
    tech: ["Terraform", "AWS GuardDuty", "Python", "Multi-Agent", "MITRE ATT&CK", "Docker", "Observability"],
    repo: "https://github.com/Aditya19Joshi01/Incident-Responder",
    image: "/security-incident-response-dashboard-with-threat-d.jpg",
  },
  {
    title: "CryptoPulse",
    description:
      "Real-time cryptocurrency analytics platform with async FastAPI backend delivering live market prices, time-series data, and DeFi TVL metrics. Integrates CoinGecko and DeFiLlama APIs with WebSockets for low-latency updates. Features Redis caching, PostgreSQL storage, and modular OOP backend design.",
    tech: ["FastAPI", "Redis", "PostgreSQL", "WebSockets", "CoinGecko API", "DeFiLlama API", "Async Tasks"],
    repo: "https://github.com/Aditya19Joshi01/crypto-webapp",
    image: "/cryptocurrency-market-dashboard-with-live-price-ch.jpg",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-lg transition-shadow duration-300 animate-fade-in opacity-0"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 bg-muted overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-balance">{project.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <Button variant="outline" size="sm" className="gap-2 bg-transparent" asChild>
                  <a href={project.repo} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                    View Code
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
