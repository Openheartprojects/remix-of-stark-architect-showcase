const TrustSection = () => {
  const statements = [
    "Built to operate in bandwidth‑constrained regions",
    "Designed for privacy‑sensitive workloads",
    "Validated through internal production use",
  ];

  return (
    <section className="py-20 md:py-28 px-6 border-t border-border/40">
      <div className="container mx-auto max-w-5xl">
        <div className="rounded-2xl border border-border/60 bg-card">
          <div className="grid md:grid-cols-3">
            {statements.map((statement, i) => (
              <div
                key={i}
                className={`px-6 py-7 md:py-8 text-center md:text-left ${
                  i !== 0 ? "md:border-l md:border-border/60" : ""
                } ${i !== 0 ? "border-t border-border/60 md:border-t-0" : ""}`}
              >
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  {statement}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
