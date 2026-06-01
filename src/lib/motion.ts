/** Transición estándar del sitio (Motion for React) */
export const easeOut = [0.22, 1, 0.36, 1] as const;

export const fadeUpTransition = {
  duration: 1,
  ease: easeOut,
} as const;

export const viewportOnce = {
  once: true,
  margin: "-64px 0px -64px 0px",
} as const;

/** Scroll: más recorrido y más lento */
export const scrollReveal = {
  hidden: { opacity: 0, y: 56 },
  visible: { opacity: 1, y: 0 },
} as const;

export const staggerItemReveal = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
} as const;

/** Clic / hover en botones y enlaces */
export const interactiveSpring = {
  type: "spring" as const,
  stiffness: 320,
  damping: 22,
};

export const interactiveHover = {
  scale: 1.05,
  y: -4,
};

export const interactiveTap = {
  scale: 0.9,
};

export const interactiveTapLight = {
  scale: 0.94,
};

export const pageEnterTransition = {
  duration: 0.95,
  ease: easeOut,
} as const;
