import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/solid";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  // Show the UI after mounting on client
  useEffect(() => setMounted(true), []);

  return (
    <button
      type="button"
      className="ml-1 mr-1 h-8 w-8 rounded p-1 sm:ml-4"
      onClick={() =>
        setTheme(
          theme === "dark" || resolvedTheme === "dark" ? "light" : "dark"
        )
      }
    >
      {mounted && (theme === "dark" || resolvedTheme === "dark") ? (
        <MoonIcon className="text-gray-100" />
      ) : (
        <SunIcon className="text-gray-900" />
      )}
    </button>
  );
};

export default ThemeSwitch;
