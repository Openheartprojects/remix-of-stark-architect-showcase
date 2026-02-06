const TrustSection = () => {
  const statements = [
    "Built to operate in bandwidth‑constrained regions",
    "Designed for privacy‑sensitive workloads",
    "Validated through internal production use",
  ];

  return (
    <section className="py-20 md:py-28 px-6 border-t border-border/40">
      <div className="container mx-auto max-w-3xl text-center">
        <div className="space-y-6">
          {statements.map((statement, i) => (
            <p
              key={i}
              className="text-muted-foreground text-sm md:text-base tracking-wide"
            >
              {statement}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
