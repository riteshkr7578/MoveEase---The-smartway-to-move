import useInView from "../hooks/useInView";

export default function Reveal({ children, direction = "up", delay = 0 }) {
  const [ref, isVisible] = useInView({ threshold: 0.15 });

  const directionClasses = {
    up: "translate-y-12",
    down: "-translate-y-12",
    left: "translate-x-12",
    right: "-translate-x-12",
  };

  return (
    <div
      ref={ref}
      className={`
        transition-all duration-700 ease-out
        ${delay}
        ${isVisible ? "opacity-100 translate-x-0 translate-y-0" : `opacity-0 ${directionClasses[direction]}`}
      `}
    >
      {children}
    </div>
  );
}
