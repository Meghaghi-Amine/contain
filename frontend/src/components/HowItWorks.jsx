function HowItWorks() {
  const steps = [
    {
      emoji: "🧑‍🚀",
      number: "1",
      title: "Create your hero",
      description: "Give your character a name, age, and a unique look with colors you love!",
      color: "#fff0f6",
      border: "#ffb3d1",
    },
    {
      emoji: "🎨",
      number: "2",
      title: "Tell your story",
      description: "Describe what you want to happen in your adventure. Anything is possible!",
      color: "#f0f4ff",
      border: "#b3c6ff",
    },
    {
      emoji: "✨",
      number: "3",
      title: "Choose your style",
      description: "Fairy tale, sci-fi, superhero or nature? Pick the vibe of your story!",
      color: "#fffbf0",
      border: "#ffd97a",
    },
    {
      emoji: "📖",
      number: "4",
      title: "Read & save",
      description: "Your AI story is ready! Read it panel by panel and save your favorites.",
      color: "#f0fff6",
      border: "#85e0a3",
    },
  ];

  return (
    <section className="how-it-works">
      <div className="how-badge">How it works</div>
      <h2>Ready in 4 easy steps! </h2>
      <p className="how-subtitle">Creating your story is super easy and fun!</p>

      <div className="steps-grid">
        {steps.map((step) => (
          <div
            key={step.number}
            className="step-card"
            style={{ backgroundColor: step.color, borderColor: step.border }}
          >
            <div className="step-number">{step.number}</div>
            <div className="step-emoji">{step.emoji}</div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>

    </section>
  );
}

export default HowItWorks;
