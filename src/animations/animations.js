export const loaderVariants = {
  animationOne: {
    x: [-40, 40],
    y: [0, -30],
    transition: {
      x: { repeat: Infinity, duration: 0.5 },
      y: { repeat: Infinity, duration: 0.25, ease: "easeOut" },
    },
  },
  animationTwo: {
    y: [0, -40],
    x: 0,
    transition: {
      y: {
        repeat: Infinity,
        duration: 0.25,
        ease: "easeOut",
      },
    },
  },
}

export const headerVariants = {
  from: {
    y: -250,
    opacity: 0,
  },
  to: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.2,
    },
  },
}

export const parentVariants = {
  from: {
    opacity: 0,
    scale: 0,
  },
  to: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      mass: 0.4,
      damping: 8,
      stiffness: 250,
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
  exit: {
    x: "-100vw",
    transition: {
      ease: "easeInOut",
    },
  },
}

export const ChildVariants = {
  from: {
    opacity: 0,
    scale: 0,
  },
  to: {
    opacity: 1,
    scale: 1,
  },
}

export const modal = {
  from: {
    y: "-100vh",
    opacity: 0,
  },
  to: {
    y: "-50px",
    opacity: 1,
    transition: {
      delay: 0.5,
    },
  },
}

export const backdrop = {
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
    transition: {
      duration: 0.4,
    },
  },
}
