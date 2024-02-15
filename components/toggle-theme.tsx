"use client";

import { Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";

export default function ToggleTheme() {
    const {theme, setTheme} = useTheme();
    const ToggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <Button
            className="flex justify-center"
            variant="ghost"
            size="icon"
            onClick={ToggleTheme}
        >
            <Moon className="h-6 w-6 scale-100 dark:scale-0" />
            <Sun className="h-6 w-6 scale-0 dark:scale-100" />
        </Button>
    )
}
