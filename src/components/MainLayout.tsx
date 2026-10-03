import TechList from "./TechList";
import Stack from "./Stack";
import type { Technology } from "../types";

interface MainLayoutProps {
  technologies: Technology[];
  stack: Technology[];
  loading: boolean;
  error: string | null;
  handleAddToStack: (tech: Technology) => void;
  handleRemoveFromStack: (id: string) => void;
  handleRemoveAll: () => void;
}

const MainLayout = ({
  technologies,
  stack,
  loading,
  error,
  handleAddToStack,
  handleRemoveFromStack,
  handleRemoveAll,
}: MainLayoutProps) => {
  return (
    <section id="technologies" className="bg-white px-6 py-16 md:px-16">
      <h2 className="text-2xl font-bold text-slate-900">
        Explore the <span className="text-pink-600">Technologies</span>
      </h2>
      <p className="mt-1 mb-8 text-sm text-slate-500">
        Pick one technology per category to build your ideal stack.
      </p>

      <div className="flex flex-col gap-6 lg:flex-row">
        <div className="flex-1">
          {loading ? (
            <p className="py-10 text-center text-sm text-slate-500">
              Loading technologies...
            </p>
          ) : error ? (
            <p className="py-10 text-center text-sm text-red-500">{error}</p>
          ) : (
            <TechList
              technologies={technologies}
              stack={stack}
              handleAddToStack={handleAddToStack}
            />
          )}
        </div>

        <Stack
          stack={stack}
          handleRemoveFromStack={handleRemoveFromStack}
          handleRemoveAll={handleRemoveAll}
        />
      </div>
    </section>
  );
};

export default MainLayout;