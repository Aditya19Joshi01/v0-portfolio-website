import { Badge } from "@/components/ui/badge"

const skills = {
  Programming: [
    "Python",
    "Java",
    "C/C++",
    "JavaScript",
    "Node.js",
    "React",
    "TypeScript",
    "HTML/CSS",
    "SQL",
    "Bash",
    "Go",
    "C#",
    ".NET",
  ],
  "Backend & APIs": [
    "FastAPI",
    "Flask",
    "Django",
    "GraphQL",
    "WebSockets",
    "ORM",
    "Microservices",
    "Alembic",
    "JWT",
    "OAuth2",
    "OOP",
  ],
  Cloud: [
    "AWS",
    "Azure",
    "GCP",
    "Networking",
    "DNS",
    "TCP/IP",
    "Load Balancing",
    "Subnets",
    "Security Groups",
    "Nginx",
    "Helm",
    "VPC",
  ],
  "Databases & Messaging": [
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "Redis",
    "NoSQL",
    "Apache Kafka",
    "RabbitMQ",
    "Celery",
    "MQTT",
  ],
  "Observability & DevOps": [
    "Prometheus",
    "Grafana",
    "Loki",
    "OpenTelemetry",
    "ELK",
    "Docker",
    "Kubernetes",
    "Terraform",
    "CI/CD",
  ],
  "AI/ML & Automation": [
    "PyTorch",
    "Scikit-learn",
    "Pandas",
    "NumPy",
    "MLflow",
    "LangChain",
    "RAG",
    "n8n",
    "Fine-tuning",
    "Airflow",
  ],
  "Development Practices": [
    "Linux/Unix CLI",
    "Agile & Scrum",
    "Code Reviews",
    "System Design",
    "Git",
    "Software Testing",
  ],
}

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Skills</h2>
        <div className="grid gap-8">
          {Object.entries(skills).map(([category, items], index) => (
            <div key={category} className="animate-fade-in opacity-0" style={{ animationDelay: `${index * 100}ms` }}>
              <h3 className="text-xl font-semibold mb-4">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <Badge key={skill} variant="outline" className="text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
