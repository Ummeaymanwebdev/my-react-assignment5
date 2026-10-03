import type { Technology } from "../types";

interface TechCardProps {
  tech: Technology;
  stack: Technology[];
  handleAddToStack: (tech: Technology) => void;
}

const TechCard = ({ tech, stack, handleAddToStack }: TechCardProps) => {
  const isAdded = stack.some((item) => item.id === tech.id);

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <img src={tech.icon} alt={tech.name} className="h-8 w-8 object-contain" />
        <span className="rounded-full bg-pink-50 px-3 py-1 text-xs text-pink-500">
          {tech.badge}
        </span>
      </div>

      <h3 className="mt-4 text-base font-semibold text-slate-900">{tech.name}</h3>

      <p className="mt-2 min-h-15 text-xs leading-5 text-slate-500">
        {tech.description}
      </p>

      <div className="mt-3 flex items-center justify-between text-xs">
        <span className="rounded bg-slate-100 px-2 py-1 text-slate-600">
          {tech.category}
        </span>
        <span className="text-slate-500">{tech.difficulty}</span>
        <span className="text-slate-700">
          <span className="text-amber-400">★</span> {tech.rating}
        </span>
      </div>

      <button
        onClick={() => handleAddToStack(tech)}
        disabled={isAdded}
        className={`mt-3 w-full rounded-md py-2 text-xs font-medium text-white transition ${
          isAdded
            ? "cursor-not-allowed bg-slate-400"
            : "bg-slate-950 hover:bg-slate-800"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
};

export default TechCard;