"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"

const publications = [
  {
    title: "xG-Based Football Scouting System using ML Techniques",
    publisher: "IEEE",
    date: "June 2024",
    summary:
      "A data-driven football scouting framework that leverages machine learning-based xG modeling to evaluate player performance and tactical efficiency. The system analyzes match events, player behavior, and chance quality to derive objective scouting metrics. Demonstrates how ML can modernize talent identification and tactical analysis within professional football environments.",
    link: "https://ieeexplore.ieee.org/abstract/document/10544261",
    tags: ["Machine Learning", "Sports Analytics", "Predictive Modeling"],
  },
  {
    title: "Automated Threat Detection in the Dark Web: A Multi-Model NLP Approach",
    publisher: "IEEE",
    date: "June 2025",
    summary:
      "A multi-model NLP system for automated dark web threat detection, integrating transformer architectures (BERT, DistilBERT, DarkBERT) fine-tuned on DNRTI, Agora, and CoDA datasets. Achieved >95% accuracy, deployed with Firebase for scalable classification, visualization, and automated threat reporting.",
    link: "https://ieeexplore.ieee.org/document/11011956",
    tags: ["NLP", "Cybersecurity", "Transformer Models", "Automation"],
  },
]

export function PublicationsSection() {
  return (
    <section id="publications" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-balance">Publications</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Research work published in IEEE conferences, focusing on machine learning applications and automated
            systems.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {publications.map((publication, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-8 hover:shadow-lg transition-all duration-300 border-border/50 hover:border-accent/50">
                <div className="flex flex-col gap-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold mb-2 text-balance leading-tight">{publication.title}</h3>
                      <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground mb-4">
                        <span className="font-medium text-foreground">{publication.publisher}</span>
                        <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
                        <span>{publication.date}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed text-pretty">{publication.summary}</p>

                  <div className="flex flex-wrap gap-2 mt-2">
                    {publication.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full border border-accent/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4">
                    <Button asChild variant="outline" className="group bg-transparent">
                      <a href={publication.link} target="_blank" rel="noopener noreferrer">
                        View Publication
                        <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
