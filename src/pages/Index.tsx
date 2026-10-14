import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Blocks,
  Moon,
  Palette,
  Shield,
  Sparkles,
  Type,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Progress } from "@/components/ui/progress";

const features = [
  {
    icon: Blocks,
    title: "Composable",
    desc: "Build complex UIs from small, reusable primitives",
  },
  {
    icon: Shield,
    title: "Accessible",
    desc: "ARIA-compliant with keyboard navigation built in",
  },
  {
    icon: Moon,
    title: "Dark First",
    desc: "Designed for dark mode with optional light theme",
  },
  {
    icon: Type,
    title: "Typed",
    desc: "Full TypeScript support with exported types",
  },
  {
    icon: Palette,
    title: "Themeable",
    desc: "CSS variables power complete customization",
  },
  {
    icon: Sparkles,
    title: "Animated",
    desc: "Micro-interactions and smooth transitions",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

export default function Index() {
  return (
    <main id="main-content" className="relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />

      {/* Glow orbs */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-40 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Hero */}
      <section className="relative container pt-32 pb-24 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={0}
        >
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 hover:bg-primary/15">
            <Zap className="h-3 w-3 mr-1" /> v1.0 — Production Ready
          </Badge>
        </motion.div>

        <motion.h1
          className="text-5xl sm:text-7xl font-bold tracking-tight mb-6 leading-tight"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={1}
        >
          Build UIs that
          <br />
          <span className="gradient-text text-glow-primary">
            glow different
          </span>
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={2}
        >
          A dark-first, futuristic component library for React. Copy-paste
          components, full customization, zero lock-in.
        </motion.p>

        <motion.div
          className="flex items-center justify-center gap-4"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={3}
        >
          <Button asChild size="lg" className="glow-primary">
            <Link to="/components">
              Browse Components <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/themes">Theme Playground</Link>
          </Button>
        </motion.div>
      </section>

      {/* Component Preview */}
      <section className="relative container pb-24">
        <motion.div
          className="glass rounded-2xl p-8 md:p-12 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-medium text-muted-foreground mb-8 text-center uppercase tracking-widest">
            Component Preview
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex gap-3">
                <Button className="glow-primary">Primary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="secondary" className="glow-secondary">
                  Secondary
                </Button>
              </div>
              <Input placeholder="Type something futuristic..." aria-label="Preview text" />
              <div className="flex items-center gap-3">
                <Switch id="preview-dark-mode" aria-label="Enable dark mode" />
                <label htmlFor="preview-dark-mode" className="text-sm text-muted-foreground">
                  Enable dark mode
                </label>
              </div>
            </div>
            <div className="space-y-4">
              <Slider defaultValue={[65]} className="w-full" aria-label="Preview intensity" />
              <Progress value={72} className="h-2" aria-label="Preview progress" />
              <div className="flex gap-2 flex-wrap">
                <Badge className="bg-primary/10 text-primary border-primary/20">
                  Cyan
                </Badge>
                <Badge className="bg-secondary/10 text-secondary border-secondary/20">
                  Purple
                </Badge>
                <Badge className="bg-accent/10 text-accent border-accent/20">
                  Green
                </Badge>
                <Badge variant="outline">Outline</Badge>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Features */}
      <section className="relative container pb-32">
        <motion.h2
          className="text-3xl font-bold text-center mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Why NovaCraft?
        </motion.h2>
        <motion.p
          className="text-muted-foreground text-center mb-16 max-w-lg mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Every component is designed for the modern developer experience.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              className="glass rounded-xl p-6 group hover:border-primary/30 transition-all duration-300"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i}
            >
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:glow-primary transition-shadow">
                <f.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Zap className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">NovaCraft UI</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Open source. Copy-paste. Ship faster.
          </p>
        </div>
      </footer>
    </main>
  );
}
