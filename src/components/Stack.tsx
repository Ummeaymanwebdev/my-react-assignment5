import type { Technology } from "../types";

interface StackProps {
  stack: Technology[];
  handleRemoveFromStack: (id: string) => void;
  handleRemoveAll: () => void;
}

const Stack = ({
  stack,
  handleRemoveFromStack,
  handleRemoveAll,
}: StackProps) => {
  return (
    <aside className="w-full self-start rounded-xl border border-slate-200 bg-white p-4 shadow-sm lg:sticky lg:top-6 lg:w-72">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-base font-semibold text-slate-900">Your Stack</h3>
          <p className="mt-1 text-xs text-slate-500">
            {stack.length === 0
              ? "No technologies selected yet."
              : `${stack.length} Technology Selected`}
          </p>
        </div>

        {stack.length > 0 && (
          <button
            onClick={handleRemoveAll}
            className="text-xs font-medium text-pink-600 hover:underline"
          >
            Remove All
          </button>
        )}
      </div>

      {stack.length === 0 ? (
        <div className="mt-4 rounded-lg border border-dashed border-slate-300 p-4 text-center text-xs text-slate-400">
          Your stack is empty
        </div>
      ) : (
        <ul className="mt-4 grid grid-cols-1 gap-2">
          {stack.map((item) => (
            <li
              key={item.id}
              className="flex items-center gap-3 rounded-lg border border-slate-200 p-2"
            >
              <img
                src={item.icon}
                alt={item.name}
                className="h-7 w-7 object-contain"
              />
              <div className="flex-1">
                <p className="text-sm font-medium text-slate-900">{item.name}</p>
                <p className="text-xs text-slate-500">{item.category}</p>
              </div>
              <button
                onClick={() => handleRemoveFromStack(item.id)}
                aria-label={`Remove ${item.name}`}
                className="rounded p-1 text-slate-400 hover:bg-slate-100 hover:text-red-500"
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      )}
    </aside>
  );
};

export default Stack;