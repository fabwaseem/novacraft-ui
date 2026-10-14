import { fireEvent, render, screen } from "@testing-library/react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { cn } from "@/lib/utils";

beforeEach(() => {
  localStorage.clear();
  document.documentElement.classList.remove("light");
});

describe("Button", () => {
  it("renders an accessible button that does not submit by default", () => {
    render(<Button>Save</Button>);
    const button = screen.getByRole("button", { name: "Save" });
    expect(button).toHaveAttribute("type", "button");
    expect(button).toBeEnabled();
  });

  it("exposes the loading state to assistive tech", () => {
    render(<Button loading>Save</Button>);
    const button = screen.getByRole("button", { name: "Save" });
    expect(button).toBeDisabled();
    expect(button).toHaveAttribute("aria-busy", "true");
  });

  it("calls onClick", () => {
    const onClick = vi.fn();
    render(<Button onClick={onClick}>Save</Button>);
    fireEvent.click(screen.getByRole("button", { name: "Save" }));
    expect(onClick).toHaveBeenCalledOnce();
  });
});

describe("ThemeToggle", () => {
  it("has an accessible name and toggles pressed state", () => {
    render(<ThemeToggle />);
    const toggle = screen.getByRole("button", { name: "Switch to light theme" });
    expect(toggle).toHaveAttribute("aria-pressed", "false");
    fireEvent.click(toggle);
    expect(screen.getByRole("button", { name: "Switch to dark theme" })).toHaveAttribute("aria-pressed", "true");
  });
});

describe("cn", () => {
  it("merges tailwind classes", () => {
    expect(cn("px-2", "px-4")).toBe("px-4");
  });
});
