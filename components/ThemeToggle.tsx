"use client"; // Use this in Next.js App Router (app directory)

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Ensure theme is loaded before rendering
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null; // Avoid hydration mismatch

    return (
        <button
            className="p-2 rounded-lg border border-gray-300 dark:border-gray-600"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
            {theme === "dark" ? "🌙 Dark Mode" : "☀️ Light Mode"}
        </button>
    );
}
