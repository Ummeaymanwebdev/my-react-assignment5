import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MainLayout from "./components/MainLayout";
import Footer from "./components/Footer";
import type { Technology } from "./types";

const App = () => {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [stack, setStack] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch("/data.json");
        if (!response.ok) {
          throw new Error("Failed to load data");
        }
        const data: Technology[] = await response.json();
        setTechnologies(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const handleAddToStack = (tech: Technology) => {
    const isAlreadyAdded = stack.some((item) => item.id === tech.id);

    if (isAlreadyAdded) {
      toast.warning("Already added!");
      return;
    }

    setStack((previousStack) => [...previousStack, tech]);
  
  };

  const handleRemoveFromStack = (id: string) => {
    setStack((previousStack) => previousStack.filter((item) => item.id !== id));
    
  };

  const handleRemoveAll = () => {
    setStack([]);
    toast.error("All technologies removed!");
  };

  return (
    <>
      <Navbar />
      <Hero />
      <MainLayout
        technologies={technologies}
        stack={stack}
        loading={loading}
        error={error}
        handleAddToStack={handleAddToStack}
        handleRemoveFromStack={handleRemoveFromStack}
        handleRemoveAll={handleRemoveAll}
      />
      <Footer />
      <ToastContainer position="top-right" autoClose={2000} />
    </>
  );
};

export default App;