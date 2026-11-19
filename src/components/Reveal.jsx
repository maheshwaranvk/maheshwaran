import { motion } from "framer-motion";

const ease = [0.2, 0.7, 0.2, 1];

// Fades and lifts its children into view when scrolled to
export function Reveal({ as = "div", delay = 0, y = 22, className, children, ...rest }) {
  const M = motion[as];
  return (
    <M
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease }}
      {...rest}
    >
      {children}
    </M>
  );
}

// Container whose direct <StaggerItem> children appear one after another
export function Stagger({ as = "div", className, gap = 0.08, children, ...rest }) {
  const M = motion[as];
  return (
    <M
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: gap } } }}
      {...rest}
    >
      {children}
    </M>
  );
}

export function StaggerItem({ as = "div", className, children, ...rest }) {
  const M = motion[as];
  return (
    <M
      className={className}
      variants={{
        hidden: { opacity: 0, y: 24, scale: 0.98 },
        show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.65, ease } },
      }}
      {...rest}
    >
      {children}
    </M>
  );
}
