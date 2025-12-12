export function AboutSection() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">About</h2>
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            I'm a software engineer focused on building reliable, cloud-native systems that scale. My work revolves
            around containerized architectures, distributed systems, and automating everything from deployment workflows
            to complex ML pipelines. I enjoy designing backend services with Python, orchestrating workloads across
            Kubernetes, and shaping infrastructure using Terraform and modern DevOps tooling.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            I've built and deployed systems across domains like IoT, security automation, and large-scale ML workflows —
            from real-time telemetry pipelines to autonomous incident response agents. I care deeply about
            observability, performance, and writing code that is maintainable, predictable, and production-ready.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I'm constantly exploring better ways to design resilient systems, contribute to open-source tooling, and
            push the boundaries of cloud engineering. Whether it's improving monitoring stacks, optimizing event-driven
            architectures, or shipping end-to-end platform features, I aim to build systems that are elegant, scalable,
            and operationally sound.
          </p>
        </div>
      </div>
    </section>
  )
}
