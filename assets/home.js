{
  const hero = document.querySelector("header");
  const cursor = document.createElement("div");
  const randomTextLayer = document.createElement("div");
  const canUseCustomCursor = window.matchMedia(
    "(hover: hover) and (pointer: fine)",
  ).matches;
  const randomWords = [
    "HTML",
    "CSS",
    "JavaScript",
    "API",
    "DOM",
    "Input",
    "Random",
    "Motion",
  ];

  let lastTextTime = 0;

  document.documentElement.classList.add("js");
  cursor.className = "site-cursor";

  if (canUseCustomCursor) {
    document.body.append(cursor);
  }

  if (hero) {
    randomTextLayer.className = "hero-random-texts";
    hero.append(randomTextLayer);
  }

  const setCursorPosition = (event) => {
    document.documentElement.style.setProperty(
      "--cursor-x",
      `${event.clientX}px`,
    );
    document.documentElement.style.setProperty(
      "--cursor-y",
      `${event.clientY}px`,
    );
  };

  const setHeroGradientPosition = (event) => {
    if (!hero) return;

    const rect = hero.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    hero.style.setProperty("--hero-x", `${x}px`);
    hero.style.setProperty("--hero-y", `${y}px`);
  };

  const showRandomText = (event) => {
    if (!hero || !randomTextLayer) return;

    const now = Date.now();
    if (now - lastTextTime < 180) return;
    lastTextTime = now;

    const rect = hero.getBoundingClientRect();
    const text = document.createElement("span");
    const word = randomWords[Math.floor(Math.random() * randomWords.length)];
    const offsetX = Math.round(Math.random() * 96 - 48);
    const offsetY = Math.round(Math.random() * 80 - 40);

    text.className = "hero-random-text";
    text.textContent = word;
    text.style.left = `${event.clientX - rect.left + offsetX}px`;
    text.style.top = `${event.clientY - rect.top + offsetY}px`;
    text.style.setProperty("--random-rotate", `${Math.random() * 18 - 9}deg`);
    randomTextLayer.append(text);

    text.addEventListener("animationend", () => text.remove(), { once: true });
  };

  document.addEventListener("pointermove", (event) => {
    if (canUseCustomCursor) {
      setCursorPosition(event);
      cursor.classList.add("is-visible");
    }

    if (hero?.contains(event.target)) {
      setHeroGradientPosition(event);
      showRandomText(event);
    }
  });

  document.addEventListener("pointerdown", () => {
    if (!canUseCustomCursor) return;

    cursor.classList.add("is-pressed");
  });

  document.addEventListener("pointerup", () => {
    if (!canUseCustomCursor) return;

    cursor.classList.remove("is-pressed");
  });

  document.addEventListener("pointerleave", () => {
    if (!canUseCustomCursor) return;

    cursor.classList.remove("is-visible");
  });

  document.querySelectorAll("a, button").forEach((element) => {
    if (!canUseCustomCursor) return;

    element.addEventListener("pointerenter", () =>
      cursor.classList.add("is-link"),
    );
    element.addEventListener("pointerleave", () =>
      cursor.classList.remove("is-link"),
    );
  });

  const sections = document.querySelectorAll("section");
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add("is-visible");
        sectionObserver.unobserve(entry.target);
      });
    },
    {
      rootMargin: "-14% 0px -14% 0px",
      threshold: 0.12,
    },
  );

  sections.forEach((section) => {
    section.classList.add("fade-section");
    sectionObserver.observe(section);
  });
}
