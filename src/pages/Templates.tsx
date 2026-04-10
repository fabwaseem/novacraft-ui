import { useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { Highlight, themes } from "prism-react-renderer";
import {
  Zap, ArrowRight, Check, Star, ChevronRight, Globe, Sparkles,
  TrendingUp, Shield, Code, Users, CreditCard, BarChart3,
  Mail, Phone, MapPin, Github, Twitter, Linkedin, Play,
  Activity, Rocket, Search, Bell, Settings, MessageSquare,
  Heart, ShoppingCart, Image, FileText, Eye, Download,
  Lock, Menu, X, Plus, Home, Calendar, Clock, Filter,
  MoreHorizontal, ArrowUp, Upload, CheckCircle, Layers,
  Send, Palette, Monitor, Briefcase, BookOpen,
  Headphones, Award, Coffee, Target, Gift, Flame,
  ChevronDown, LogOut, User, PieChart,
  Smartphone, Tablet, Copy, GripVertical,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface TemplateInfo {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  preview: () => React.ReactNode;
}

const templates: TemplateInfo[] = [
  { id: "saas-landing", title: "SaaS Landing Page", description: "Modern SaaS product landing page with hero, features, pricing, testimonials, and CTA sections.", category: "Marketing", tags: ["Landing", "SaaS", "Startup"], preview: SaaSLanding },
  { id: "dashboard", title: "Analytics Dashboard", description: "Full analytics dashboard with KPIs, charts, recent activity, and sidebar navigation.", category: "Application", tags: ["Dashboard", "Analytics", "Admin"], preview: DashboardTemplate },
  { id: "portfolio", title: "Creative Portfolio", description: "Minimal portfolio for designers and developers with project showcase and about section.", category: "Personal", tags: ["Portfolio", "Creative", "Minimal"], preview: PortfolioTemplate },
  { id: "ecommerce", title: "E-Commerce Store", description: "Product listing page with filters, product cards, cart summary, and promotions.", category: "E-Commerce", tags: ["Shop", "Products", "Store"], preview: EcommerceTemplate },
  { id: "blog", title: "Blog / Magazine", description: "Content-rich blog layout with featured posts, categories, and newsletter signup.", category: "Content", tags: ["Blog", "Magazine", "Articles"], preview: BlogTemplate },
  { id: "pricing", title: "Pricing Page", description: "Dedicated pricing page with plan comparison, FAQ, and trust signals.", category: "Marketing", tags: ["Pricing", "Plans", "SaaS"], preview: PricingTemplate },
  { id: "settings", title: "App Settings", description: "Complete settings page with profile, notifications, security, and billing sections.", category: "Application", tags: ["Settings", "Account", "Profile"], preview: SettingsTemplate },
  { id: "chat", title: "Chat / Messaging", description: "Real-time chat interface with conversation list, message thread, and user info panel.", category: "Application", tags: ["Chat", "Messaging", "Social"], preview: ChatTemplate },
];

const categories = ["All", "Marketing", "Application", "Personal", "E-Commerce", "Content"];

function getTemplateCode(id: string): string {
  const codes: Record<string, string> = {
    "saas-landing": `import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function SaaSLanding() {
  return (
    <div>
      {/* Navigation */}
      <nav className="flex items-center justify-between p-4 border-b border-border">
        <div className="flex items-center gap-6">
          <span className="font-bold text-sm">LaunchKit</span>
          <div className="flex gap-4">
            {["Features", "Pricing", "Docs"].map((l) => (
              <a key={l} href="#" className="text-sm text-muted-foreground hover:text-foreground">{l}</a>
            ))}
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="ghost" size="sm">Sign In</Button>
          <Button variant="glow" size="sm">Get Started</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 text-center space-y-6 px-4">
        <Badge variant="outline">✨ Now in Public Beta</Badge>
        <h1 className="text-5xl font-extrabold tracking-tight max-w-3xl mx-auto">
          Ship your next <span className="gradient-text">SaaS product</span> in days
        </h1>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto">
          The all-in-one toolkit for building and scaling modern web apps.
        </p>
        <div className="flex justify-center gap-3">
          <Button variant="glow" size="lg">Start Building</Button>
          <Button variant="outline" size="lg">Watch Demo</Button>
        </div>
      </section>

      {/* Features, Pricing, Testimonials, Footer... */}
    </div>
  );
}`,
    "dashboard": `import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function Dashboard() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-56 border-r border-border bg-card/30 p-4">
        <div className="flex items-center gap-2 mb-6">
          <span className="font-bold text-sm">DataPulse</span>
        </div>
        <nav className="space-y-1">
          {["Overview", "Analytics", "Customers", "Revenue"].map((item) => (
            <div key={item} className="flex items-center gap-2 px-3 py-2 rounded-md text-sm
              text-muted-foreground hover:bg-muted/50 cursor-pointer">
              {item}
            </div>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {/* KPI Cards */}
        <div className="grid grid-cols-4 gap-4">
          {kpis.map((kpi) => (
            <Card key={kpi.label} variant="glass" className="p-4">
              <p className="text-2xl font-bold">{kpi.value}</p>
              <p className="text-xs text-muted-foreground">{kpi.label}</p>
            </Card>
          ))}
        </div>
        {/* Charts, Tables, Activity... */}
      </div>
    </div>
  );
}`,
    "portfolio": `import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Portfolio() {
  return (
    <div>
      <nav className="flex items-center justify-between p-6">
        <span className="text-xl font-bold">Jane<span className="text-primary">.</span></span>
        <div className="flex items-center gap-6">
          {["Work", "About", "Contact"].map((l) => (
            <a key={l} href="#" className="text-sm text-muted-foreground">{l}</a>
          ))}
          <Button variant="soft" size="sm">Hire Me</Button>
        </div>
      </nav>

      <section className="px-6 py-20 max-w-4xl mx-auto space-y-6">
        <Badge variant="soft-secondary">Available for freelance</Badge>
        <h1 className="text-5xl font-extrabold tracking-tight">
          I craft <span className="gradient-text">digital experiences</span> that people love
        </h1>
        <Button variant="glow" size="lg">View My Work</Button>
      </section>

      {/* Projects, About, Contact... */}
    </div>
  );
}`,
    "ecommerce": `import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

export default function EcommerceStore() {
  return (
    <div>
      <nav className="flex items-center justify-between p-4 border-b">
        <span className="font-bold">Tech<span className="text-primary">Store</span></span>
        <div className="flex items-center gap-2">
          <Input variant="glass" placeholder="Search..." className="w-48" />
          <Button variant="soft" size="sm">Cart (3)</Button>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto p-6 flex gap-6">
        {/* Filters Sidebar */}
        <aside className="w-48 shrink-0 space-y-4">
          <h3 className="text-sm font-semibold">Category</h3>
          {/* Filter options */}
        </aside>

        {/* Product Grid */}
        <div className="flex-1 grid grid-cols-3 gap-4">
          {products.map((p) => (
            <Card key={p.name} variant="interactive" className="overflow-hidden">
              <div className="h-36 bg-muted flex items-center justify-center">
                {p.tag && <Badge variant="glow">{p.tag}</Badge>}
              </div>
              <div className="p-3">
                <h3 className="font-medium text-sm">{p.name}</h3>
                <span className="font-bold">{p.price}</span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}`,
    "blog": `import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

export default function Blog() {
  return (
    <div>
      <nav className="flex items-center justify-between p-4 border-b">
        <span className="text-xl font-bold">The <span className="text-primary">Craft</span></span>
        <div className="flex items-center gap-4">
          {["Latest", "Tutorials", "Design"].map((l) => (
            <a key={l} href="#" className="text-sm text-muted-foreground">{l}</a>
          ))}
        </div>
      </nav>

      {/* Featured Post */}
      <section className="max-w-5xl mx-auto p-6">
        <Card className="grid md:grid-cols-5 overflow-hidden">
          <div className="md:col-span-3 bg-primary/10 h-64" />
          <div className="md:col-span-2 p-8 space-y-4">
            <Badge variant="glow">Featured</Badge>
            <h2 className="text-2xl font-bold">The Future of Design Systems</h2>
            <Button variant="soft">Read Article</Button>
          </div>
        </Card>
      </section>

      {/* Post Grid, Newsletter... */}
    </div>
  );
}`,
    "pricing": `import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";

export default function PricingPage() {
  return (
    <div>
      <section className="py-16 text-center space-y-3">
        <h1 className="text-4xl font-extrabold">Plans for every team</h1>
        <div className="flex items-center justify-center gap-2">
          <span className="text-sm">Monthly</span>
          <Switch />
          <span className="text-sm">Yearly <Badge variant="soft">-20%</Badge></span>
        </div>
      </section>

      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 px-4">
        {plans.map((plan) => (
          <Card key={plan.name} variant={plan.popular ? "glow" : "outline"}>
            <h3 className="text-xl font-bold">{plan.name}</h3>
            <span className="text-4xl font-extrabold">{plan.price}</span>
            <Button variant={plan.popular ? "glow" : "outline"} fullWidth>
              {plan.cta}
            </Button>
            {/* Features list */}
          </Card>
        ))}
      </div>

      {/* FAQ Section... */}
    </div>
  );
}`,
    "settings": `import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";

export default function SettingsPage() {
  return (
    <div className="flex h-screen">
      <aside className="w-56 border-r border-border p-4">
        {["Profile", "Notifications", "Security", "Billing"].map((item) => (
          <div key={item} className="px-3 py-2 rounded-md text-sm cursor-pointer
            text-muted-foreground hover:bg-muted/50">
            {item}
          </div>
        ))}
      </aside>

      <div className="flex-1 p-8 max-w-2xl space-y-6">
        <h1 className="text-xl font-bold">Profile Settings</h1>
        <div className="flex items-center gap-4">
          <Avatar size="xl"><AvatarFallback>JD</AvatarFallback></Avatar>
          <Button variant="soft" size="sm">Change Photo</Button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div><Label>First Name</Label><Input defaultValue="Jane" /></div>
          <div><Label>Last Name</Label><Input defaultValue="Doe" /></div>
        </div>
        {/* More fields, toggles... */}
      </div>
    </div>
  );
}`,
    "chat": `import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function ChatApp() {
  return (
    <div className="flex h-screen">
      {/* Conversations List */}
      <aside className="w-72 border-r border-border">
        <div className="p-4 border-b">
          <Input variant="glass" placeholder="Search..." />
        </div>
        {conversations.map((c) => (
          <div key={c.name} className="flex items-center gap-3 px-4 py-3 hover:bg-muted/30">
            <Avatar size="sm"><AvatarFallback>{c.initials}</AvatarFallback></Avatar>
            <div className="flex-1">
              <span className="text-sm font-medium">{c.name}</span>
              <p className="text-xs text-muted-foreground truncate">{c.lastMsg}</p>
            </div>
            {c.unread > 0 && (
              <div className="h-5 w-5 rounded-full bg-primary text-[10px] text-primary-foreground
                flex items-center justify-center">{c.unread}</div>
            )}
          </div>
        ))}
      </aside>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col">
        <div className="border-b p-3 flex items-center gap-3">
          <Avatar size="sm"><AvatarFallback>DT</AvatarFallback></Avatar>
          <span className="font-semibold text-sm">Design Team</span>
        </div>
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {/* Messages */}
        </div>
        <div className="border-t p-3 flex gap-2">
          <Input placeholder="Type a message..." className="flex-1" />
          <Button variant="glow" size="icon">Send</Button>
        </div>
      </div>
    </div>
  );
}`,
  };
  return codes[id] || "// Template code coming soon...";
}

type DeviceSize = "desktop" | "tablet" | "mobile";
const deviceWidths: Record<DeviceSize, number> = { desktop: 9999, tablet: 768, mobile: 375 };
const deviceIcons: Record<DeviceSize, typeof Monitor> = { desktop: Monitor, tablet: Tablet, mobile: Smartphone };

export default function Templates() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<"preview" | "code">("preview");
  const [device, setDevice] = useState<DeviceSize>("desktop");
  const [copied, setCopied] = useState(false);
  const [previewWidth, setPreviewWidth] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  const filtered = activeCategory === "All" ? templates : templates.filter((t) => t.category === activeCategory);
  const selectedInfo = templates.find((t) => t.id === selectedTemplate);

  const handleCopy = () => {
    if (!selectedInfo) return;
    navigator.clipboard.writeText(getTemplateCode(selectedInfo.id));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDragStart = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    
    const container = containerRef.current;
    if (!container) return;
    
    const containerRect = container.getBoundingClientRect();
    const containerCenter = containerRect.left + containerRect.width / 2;

    const handleMouseMove = (ev: MouseEvent) => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      
      rafRef.current = requestAnimationFrame(() => {
        const distFromCenter = Math.abs(ev.clientX - containerCenter);
        const newWidth = Math.max(320, Math.min(distFromCenter * 2, containerRect.width - 24));
        setPreviewWidth(newWidth);
        setDevice("desktop");
      });
    };

    const handleMouseUp = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      setIsDragging(false);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  }, []);

  const handleDeviceClick = (d: DeviceSize) => {
    setDevice(d);
    setPreviewWidth(null);
  };

  const currentWidth = previewWidth
    ? previewWidth
    : device === "desktop"
    ? null
    : deviceWidths[device];

  const displayWidth = currentWidth ? `${Math.round(currentWidth)}px` : "100%";
  const isCustomSize = currentWidth !== null;

  return (
    <div className="min-h-[calc(100vh-4rem)]">
      {selectedTemplate && selectedInfo ? (
        /* ─── Full Preview Mode ─── */
        <div>
          <div className="sticky top-16 z-40 glass-strong border-b border-border">
            <div className="container flex items-center justify-between h-12">
              <div className="flex items-center gap-3">
                <Button variant="ghost" size="sm" onClick={() => { setSelectedTemplate(null); setViewMode("preview"); setDevice("desktop"); setPreviewWidth(null); }}>
                  ← Back
                </Button>
                <Separator orientation="vertical" className="h-5" />
                <span className="text-sm font-medium">{selectedInfo.title}</span>
                <div className="hidden sm:flex gap-1">
                  {selectedInfo.tags.map((t) => (
                    <Badge key={t} variant="outline" className="text-[10px]">{t}</Badge>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2">
                {/* View Toggle */}
                <div className="flex items-center gap-0.5 p-0.5 rounded-lg bg-muted/50 border border-border">
                  <button
                    onClick={() => setViewMode("preview")}
                    className={cn(
                      "flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium transition-all",
                      viewMode === "preview" ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    <Eye className="h-3.5 w-3.5" /> Preview
                  </button>
                  <button
                    onClick={() => setViewMode("code")}
                    className={cn(
                      "flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium transition-all",
                      viewMode === "code" ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    <Code className="h-3.5 w-3.5" /> Code
                  </button>
                </div>

                {/* Device Toggle */}
                {viewMode === "preview" && (
                  <div className="hidden md:flex items-center gap-2">
                    <div className="flex items-center gap-0.5 p-0.5 rounded-lg bg-muted/50 border border-border">
                      {(["desktop", "tablet", "mobile"] as DeviceSize[]).map((d) => {
                        const Icon = deviceIcons[d];
                        return (
                          <button
                            key={d}
                            onClick={() => handleDeviceClick(d)}
                            className={cn(
                              "flex items-center gap-1 px-2 py-1 rounded-md text-xs font-medium transition-all",
                              device === d && !previewWidth ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
                            )}
                            title={d}
                          >
                            <Icon className="h-3.5 w-3.5" />
                          </button>
                        );
                      })}
                    </div>
                    <span className="text-[10px] font-mono text-muted-foreground bg-muted/50 px-2 py-1 rounded border border-border min-w-[60px] text-center">
                      {displayWidth}
                    </span>
                  </div>
                )}

                {/* Copy */}
                <Button variant="ghost" size="sm" className="h-7 text-xs gap-1" onClick={handleCopy}>
                  {copied ? <Check className="h-3 w-3 text-primary" /> : <Copy className="h-3 w-3" />}
                  {copied ? "Copied" : "Copy"}
                </Button>
              </div>
            </div>
          </div>

          {viewMode === "preview" ? (
            <div
              ref={containerRef}
              className={cn("p-4 min-h-[calc(100vh-8rem)] relative", isDragging && "select-none cursor-col-resize")}
            >
              <div
                className={cn(
                  "mx-auto overflow-hidden rounded-xl border border-border bg-background relative",
                  isCustomSize && "shadow-2xl"
                )}
                style={{ 
                  width: currentWidth ? `${currentWidth}px` : "100%",
                  maxWidth: "100%",
                }}
              >
                {/* Device frame for custom sizes */}
                {isCustomSize && (
                  <div className="bg-muted/50 border-b border-border px-3 py-1.5 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <div className="h-2 w-2 rounded-full bg-destructive/60" />
                      <div className="h-2 w-2 rounded-full bg-yellow-500/60" />
                      <div className="h-2 w-2 rounded-full bg-primary/60" />
                    </div>
                    <div className="flex-1 mx-8">
                      <div className="h-4 rounded bg-muted/80 max-w-[140px] mx-auto" />
                    </div>
                    <span className="text-[9px] text-muted-foreground font-mono">{displayWidth}</span>
                  </div>
                )}
                {selectedInfo.preview()}

                {/* Right drag handle */}
                <div
                  onMouseDown={handleDragStart}
                  className="absolute top-0 -right-4 w-8 h-full flex items-center justify-center cursor-col-resize z-20 group"
                >
                  <div className={cn(
                    "w-1.5 h-20 rounded-full transition-colors",
                    isDragging ? "bg-primary" : "bg-border group-hover:bg-primary/60"
                  )} />
                  <GripVertical className={cn(
                    "absolute h-5 w-5 transition-colors",
                    isDragging ? "text-primary" : "text-muted-foreground/50 group-hover:text-primary/60"
                  )} />
                </div>

                {/* Left drag handle */}
                <div
                  onMouseDown={handleDragStart}
                  className="absolute top-0 -left-4 w-8 h-full flex items-center justify-center cursor-col-resize z-20 group"
                >
                  <div className={cn(
                    "w-1.5 h-20 rounded-full transition-colors",
                    isDragging ? "bg-primary" : "bg-border group-hover:bg-primary/60"
                  )} />
                  <GripVertical className={cn(
                    "absolute h-5 w-5 transition-colors",
                    isDragging ? "text-primary" : "text-muted-foreground/50 group-hover:text-primary/60"
                  )} />
                </div>
              </div>
            </div>
          ) : (
            /* Code view with syntax highlighting */
            <div className="m-4 rounded-xl border border-border overflow-hidden bg-[hsl(240,6%,7%)]">
              <div className="border-b border-border px-4 py-2 flex items-center justify-between">
                <span className="text-xs font-mono text-muted-foreground">{selectedInfo.id}.tsx</span>
              </div>
              <div className="overflow-x-auto max-h-[calc(100vh-12rem)] overflow-y-auto scrollbar-thin">
                <Highlight theme={themes.nightOwl} code={getTemplateCode(selectedInfo.id).trim()} language="tsx">
                  {({ style, tokens, getLineProps, getTokenProps }) => (
                    <pre className="p-4 text-xs font-mono" style={{ ...style, background: "transparent" }}>
                      {tokens.map((line, i) => {
                        const lineProps = getLineProps({ line });
                        return (
                          <div key={i} {...lineProps} className={cn(lineProps.className, "flex")}>
                            <span className="w-10 shrink-0 text-right pr-4 text-muted-foreground/40 select-none text-xs leading-6">
                              {i + 1}
                            </span>
                            <span className="leading-6">
                              {line.map((token, key) => (
                                <span key={key} {...getTokenProps({ token })} />
                              ))}
                            </span>
                          </div>
                        );
                      })}
                    </pre>
                  )}
                </Highlight>
              </div>
            </div>
          )}
        </div>
      ) : (
        /* ─── Gallery Mode ─── */
        <div className="container py-12 space-y-10">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <Badge variant="glow">Templates</Badge>
            <h1 className="text-4xl font-bold tracking-tight">
              Ready-made <span className="gradient-text">templates</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Full-page templates built with our component library. Preview, customize, and ship faster.
            </p>
          </div>

          {/* Category filter */}
          <div className="flex justify-center gap-1">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={activeCategory === cat ? "soft" : "ghost"}
                size="sm"
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </Button>
            ))}
          </div>

          {/* Template grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {filtered.map((tmpl, i) => (
              <motion.div
                key={tmpl.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Card
                  variant="interactive"
                  className="overflow-hidden group cursor-pointer"
                  onClick={() => setSelectedTemplate(tmpl.id)}
                >
                  {/* Mini preview */}
                  <div className="h-64 overflow-hidden relative bg-background">
                    <div className="transform scale-[0.35] origin-top-left w-[286%] pointer-events-none">
                      {tmpl.preview()}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-background/60">
                      <Button variant="glow">
                        <Eye className="h-4 w-4" /> Preview Template
                      </Button>
                    </div>
                  </div>
                  {/* Info */}
                  <div className="p-5 space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold">{tmpl.title}</h3>
                      <Badge variant="outline" className="text-[10px]">{tmpl.category}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{tmpl.description}</p>
                    <div className="flex gap-1 pt-1">
                      {tmpl.tags.map((t) => (
                        <Badge key={t} variant="soft" className="text-[10px]">{t}</Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   TEMPLATE 1: SaaS Landing Page
═══════════════════════════════════════════════════════════════ */
function SaaSLanding() {
  return (
    <div>
      {/* Nav */}
      <nav className="flex items-center justify-between p-4 border-b border-border">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-md bg-primary/20 flex items-center justify-center"><Zap className="h-3.5 w-3.5 text-primary" /></div>
            <span className="font-bold text-sm">LaunchKit</span>
          </div>
          <div className="hidden md:flex gap-4">
            {["Features", "Pricing", "Docs", "Blog"].map((l) => (
              <a key={l} href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{l}</a>
            ))}
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="ghost" size="sm">Sign In</Button>
          <Button variant="glow" size="sm">Get Started</Button>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-20 text-center space-y-6 px-4">
        <Badge variant="outline">✨ Now in Public Beta</Badge>
        <h1 className="text-5xl font-extrabold tracking-tight max-w-3xl mx-auto">
          Ship your next <span className="gradient-text">SaaS product</span> in days, not months
        </h1>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto">
          The all-in-one toolkit for building, deploying, and scaling modern web applications. Start free, scale infinitely.
        </p>
        <div className="flex justify-center gap-3">
          <Button variant="glow" size="lg">Start Building <ArrowRight className="h-4 w-4" /></Button>
          <Button variant="outline" size="lg"><Play className="h-4 w-4" /> Watch Demo</Button>
        </div>
        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <div className="flex -space-x-2">
            {["JD", "AK", "MR"].map((i) => (
              <Avatar key={i} size="sm" className="border-2 border-background"><AvatarFallback className="text-[10px]">{i}</AvatarFallback></Avatar>
            ))}
          </div>
          <span>Trusted by 5,000+ developers</span>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-muted/20">
        <div className="max-w-5xl mx-auto space-y-10">
          <div className="text-center space-y-2">
            <Badge variant="soft-secondary">Features</Badge>
            <h2 className="text-3xl font-bold">Everything you need to ship fast</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Zap, title: "Lightning Fast", desc: "Edge computing with sub-millisecond cold starts and global CDN." },
              { icon: Shield, title: "Secure by Default", desc: "SOC2 compliant with built-in DDoS protection and encryption." },
              { icon: Code, title: "Developer First", desc: "TypeScript SDK, great docs, CLI tools, and intuitive APIs." },
              { icon: Globe, title: "Global Scale", desc: "Auto-scaling across 200+ edge locations worldwide." },
              { icon: Palette, title: "Customizable", desc: "Fully themeable components with deep variant support." },
              { icon: TrendingUp, title: "Analytics", desc: "Built-in analytics, monitoring, and error tracking." },
            ].map((f) => (
              <Card key={f.title} variant="interactive" className="p-6 space-y-3">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center"><f.icon className="h-5 w-5 text-primary" /></div>
                <h3 className="font-semibold">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "50K+", label: "Developers" },
            { value: "99.9%", label: "Uptime" },
            { value: "2.4M", label: "API calls/day" },
            { value: "<50ms", label: "Avg latency" },
          ].map((s) => (
            <div key={s.label}>
              <p className="text-3xl font-extrabold text-primary">{s.value}</p>
              <p className="text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-4 bg-muted/20">
        <div className="max-w-4xl mx-auto space-y-10">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold">Simple pricing</h2>
            <p className="text-muted-foreground">No hidden fees. Cancel anytime.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Starter", price: "$0", features: ["1 project", "1GB storage", "Community support"] },
              { name: "Pro", price: "$29", features: ["Unlimited projects", "100GB storage", "Priority support", "Custom domains"], popular: true },
              { name: "Enterprise", price: "$99", features: ["Everything in Pro", "SSO & SAML", "SLA guarantee", "Dedicated support"] },
            ].map((p) => (
              <Card key={p.name} variant={p.popular ? "glow" : "outline"} className={`p-6 space-y-4 ${p.popular ? "ring-2 ring-primary" : ""}`}>
                {p.popular && <Badge variant="glow" className="w-fit">Popular</Badge>}
                <h3 className="text-xl font-bold">{p.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-extrabold">{p.price}</span>
                  <span className="text-muted-foreground">/mo</span>
                </div>
                <Button variant={p.popular ? "glow" : "outline"} fullWidth>Get Started</Button>
                <ul className="space-y-2">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm"><Check className="h-3.5 w-3.5 text-primary" /><span className="text-muted-foreground">{f}</span></li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold text-center">Loved by developers</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { name: "Sarah C.", role: "CTO", quote: "Cut our dev time in half. The DX is unmatched.", initials: "SC" },
              { name: "Alex R.", role: "Lead Dev", quote: "Finally a design system that doesn't feel generic.", initials: "AR" },
              { name: "Jordan L.", role: "Founder", quote: "Shipped our MVP in 3 days. Incredible.", initials: "JL" },
            ].map((t) => (
              <Card key={t.name} variant="glass" className="p-5 space-y-3">
                <div className="flex gap-0.5">{[...Array(5)].map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-primary text-primary" />)}</div>
                <p className="text-sm text-muted-foreground">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-2">
                  <Avatar size="sm"><AvatarFallback className="text-xs">{t.initials}</AvatarFallback></Avatar>
                  <div><p className="text-xs font-medium">{t.name}</p><p className="text-xs text-muted-foreground">{t.role}</p></div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 text-center bg-gradient-to-r from-primary/5 via-transparent to-secondary/5">
        <h2 className="text-3xl font-bold mb-3">Ready to ship faster?</h2>
        <p className="text-muted-foreground mb-6">Join thousands of developers building better products.</p>
        <Button variant="glow" size="xl">Start Free <ArrowRight className="h-4 w-4" /></Button>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-4">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2"><div className="h-6 w-6 rounded bg-primary/20 flex items-center justify-center"><Zap className="h-3 w-3 text-primary" /></div><span className="font-bold text-sm">LaunchKit</span></div>
            <p className="text-xs text-muted-foreground">© 2024 LaunchKit. All rights reserved.</p>
          </div>
          <div className="flex gap-8">
            {[{ t: "Product", l: ["Features", "Pricing", "Docs"] }, { t: "Company", l: ["About", "Blog", "Careers"] }].map((col) => (
              <div key={col.t} className="space-y-2">
                <p className="text-xs font-semibold">{col.t}</p>
                {col.l.map((link) => <a key={link} href="#" className="block text-xs text-muted-foreground hover:text-foreground">{link}</a>)}
              </div>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   TEMPLATE 2: Analytics Dashboard
═══════════════════════════════════════════════════════════════ */
function DashboardTemplate() {
  return (
    <div className="flex h-[800px]">
      {/* Sidebar */}
      <aside className="w-56 border-r border-border bg-card/30 p-4 space-y-6 shrink-0">
        <div className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-md bg-primary/20 flex items-center justify-center"><BarChart3 className="h-3.5 w-3.5 text-primary" /></div>
          <span className="font-bold text-sm">DataPulse</span>
        </div>
        <div className="space-y-1">
          {[
            { icon: Home, label: "Overview", active: true },
            { icon: BarChart3, label: "Analytics", active: false },
            { icon: Users, label: "Customers", active: false },
            { icon: CreditCard, label: "Revenue", active: false },
            { icon: FileText, label: "Reports", active: false },
            { icon: Settings, label: "Settings", active: false },
          ].map((item) => (
            <div key={item.label} className={`flex items-center gap-2.5 px-3 py-2 rounded-md text-sm cursor-pointer transition-colors ${item.active ? "bg-primary/10 text-primary font-medium" : "text-muted-foreground hover:text-foreground hover:bg-muted/50"}`}>
              <item.icon className="h-4 w-4" />
              {item.label}
            </div>
          ))}
        </div>
        <Separator />
        <div className="space-y-1">
          {[{ icon: Bell, label: "Notifications" }, { icon: Headphones, label: "Support" }].map((item) => (
            <div key={item.label} className="flex items-center gap-2.5 px-3 py-2 rounded-md text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 cursor-pointer">
              <item.icon className="h-4 w-4" />{item.label}
            </div>
          ))}
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex items-center gap-2 p-2 rounded-lg bg-muted/30">
            <Avatar size="sm"><AvatarFallback className="text-xs">JD</AvatarFallback></Avatar>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-medium truncate">Jane Doe</p>
              <p className="text-[10px] text-muted-foreground truncate">jane@company.com</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 overflow-y-auto">
        {/* Header */}
        <div className="border-b border-border px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold">Dashboard</h1>
            <p className="text-sm text-muted-foreground">Welcome back, Jane</p>
          </div>
          <div className="flex items-center gap-2">
            <Input variant="glass" placeholder="Search..." className="w-48" />
            <Button variant="ghost" size="icon-sm"><Bell className="h-4 w-4" /></Button>
            <Button variant="glow" size="sm"><Download className="h-3.5 w-3.5" /> Export</Button>
          </div>
        </div>

        <div className="p-6 space-y-6">
          {/* KPIs */}
          <div className="grid grid-cols-4 gap-4">
            {[
              { label: "Total Revenue", value: "$124,500", change: "+12.5%", icon: TrendingUp },
              { label: "Active Users", value: "8,234", change: "+24.1%", icon: Users },
              { label: "Conversion", value: "3.24%", change: "+0.4%", icon: Target },
              { label: "Avg Order", value: "$67.50", change: "+8.7%", icon: ShoppingCart },
            ].map((kpi) => (
              <Card key={kpi.label} variant="glass" className="p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <kpi.icon className="h-4 w-4 text-muted-foreground" />
                  <span className="text-xs text-primary font-medium">{kpi.change}</span>
                </div>
                <p className="text-2xl font-bold">{kpi.value}</p>
                <p className="text-xs text-muted-foreground">{kpi.label}</p>
              </Card>
            ))}
          </div>

          {/* Chart + Activity */}
          <div className="grid grid-cols-3 gap-4">
            <Card variant="outline" className="col-span-2 p-5">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-sm">Revenue Overview</h3>
                <div className="flex gap-1">
                  {["7d", "30d", "90d"].map((p, i) => (
                    <Button key={p} variant={i === 1 ? "soft" : "ghost"} size="xs">{p}</Button>
                  ))}
                </div>
              </div>
              <div className="h-48 flex items-end gap-1.5 px-2">
                {[40, 55, 35, 70, 60, 80, 45, 90, 65, 75, 85, 95, 50, 60, 70, 88, 72, 80, 92, 68, 78, 85, 55, 65].map((h, i) => (
                  <div key={i} className="flex-1 bg-gradient-to-t from-primary/30 to-primary/70 rounded-t-sm hover:from-primary/50 hover:to-primary transition-all" style={{ height: `${h}%` }} />
                ))}
              </div>
            </Card>
            <Card variant="outline" className="p-5">
              <h3 className="font-semibold text-sm mb-4">Recent Activity</h3>
              <div className="space-y-3">
                {[
                  { action: "New signup", detail: "sarah@email.com", time: "2m" },
                  { action: "Payment", detail: "$129.00", time: "15m" },
                  { action: "Deploy", detail: "v2.4.1 live", time: "1h" },
                  { action: "Ticket closed", detail: "#1284", time: "2h" },
                  { action: "New signup", detail: "alex@co.io", time: "3h" },
                ].map((a, i) => (
                  <div key={i} className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      <div>
                        <p className="font-medium text-xs">{a.action}</p>
                        <p className="text-xs text-muted-foreground">{a.detail}</p>
                      </div>
                    </div>
                    <span className="text-[10px] text-muted-foreground">{a.time}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Table */}
          <Card variant="outline" className="overflow-hidden">
            <div className="p-4 flex items-center justify-between border-b border-border">
              <h3 className="font-semibold text-sm">Top Customers</h3>
              <Button variant="ghost" size="sm">View All</Button>
            </div>
            <div className="divide-y divide-border">
              {[
                { name: "Acme Corp", email: "billing@acme.co", spent: "$12,400", status: "Active" },
                { name: "Globex Inc", email: "pay@globex.io", spent: "$9,800", status: "Active" },
                { name: "Initech", email: "admin@initech.com", spent: "$7,200", status: "Churned" },
                { name: "Umbrella LLC", email: "ops@umbrella.co", spent: "$6,100", status: "Active" },
              ].map((c) => (
                <div key={c.name} className="flex items-center justify-between px-4 py-3">
                  <div className="flex items-center gap-3">
                    <Avatar size="sm"><AvatarFallback className="text-xs">{c.name.slice(0, 2)}</AvatarFallback></Avatar>
                    <div><p className="text-sm font-medium">{c.name}</p><p className="text-xs text-muted-foreground">{c.email}</p></div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-mono">{c.spent}</span>
                    <Badge variant={c.status === "Active" ? "dot-success" : "dot-warning"} className="text-[10px]">{c.status}</Badge>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   TEMPLATE 3: Creative Portfolio
═══════════════════════════════════════════════════════════════ */
function PortfolioTemplate() {
  return (
    <div>
      {/* Nav */}
      <nav className="flex items-center justify-between p-6">
        <span className="text-xl font-bold">Jane<span className="text-primary">.</span></span>
        <div className="flex items-center gap-6">
          {["Work", "About", "Contact"].map((l) => <a key={l} href="#" className="text-sm text-muted-foreground hover:text-foreground">{l}</a>)}
          <Button variant="soft" size="sm">Hire Me</Button>
        </div>
      </nav>

      {/* Hero */}
      <section className="px-6 py-20 max-w-4xl mx-auto">
        <div className="space-y-6">
          <Badge variant="soft-secondary">Available for freelance</Badge>
          <h1 className="text-5xl font-extrabold tracking-tight leading-tight">
            I craft <span className="gradient-text">digital experiences</span> that people love
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl">
            Product designer & developer with 8+ years of experience building award-winning websites and applications.
          </p>
          <div className="flex gap-3">
            <Button variant="glow" size="lg">View My Work <ArrowRight className="h-4 w-4" /></Button>
            <Button variant="ghost" size="lg"><Mail className="h-4 w-4" /> Get in Touch</Button>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="px-6 py-16 bg-muted/20">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Selected Work</h2>
            <div className="flex gap-1">
              {["All", "Web", "Mobile", "Brand"].map((f, i) => <Button key={f} variant={i === 0 ? "soft" : "ghost"} size="sm">{f}</Button>)}
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "FinTrack Dashboard", tag: "Web App", desc: "Analytics platform redesign" },
              { title: "Bloom Health", tag: "Mobile", desc: "Wellness tracking app" },
              { title: "Vertex Brand", tag: "Branding", desc: "Complete brand identity" },
              { title: "CloudSync", tag: "Web App", desc: "File management platform" },
            ].map((p) => (
              <div key={p.title} className="group cursor-pointer">
                <div className="rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 h-52 flex items-center justify-center relative overflow-hidden">
                  <Image className="h-12 w-12 text-muted-foreground/20" />
                  <div className="absolute inset-0 bg-background/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Button variant="glow" size="sm">View Project</Button>
                  </div>
                </div>
                <div className="mt-3">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">{p.title}</h3>
                    <Badge variant="outline" className="text-[10px]">{p.tag}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl bg-gradient-to-br from-secondary/10 to-primary/10 h-72 flex items-center justify-center">
            <User className="h-20 w-20 text-muted-foreground/15" />
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">About Me</h2>
            <p className="text-muted-foreground">I'm a product designer and developer based in San Francisco. I specialize in creating beautiful, functional digital products that solve real problems.</p>
            <div className="grid grid-cols-2 gap-4">
              {[{ val: "8+", label: "Years Experience" }, { val: "50+", label: "Projects" }, { val: "30+", label: "Happy Clients" }, { val: "12", label: "Awards" }].map((s) => (
                <div key={s.label}><p className="text-xl font-bold text-primary">{s.val}</p><p className="text-xs text-muted-foreground">{s.label}</p></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="px-6 py-16 bg-gradient-to-r from-primary/5 to-secondary/5 text-center space-y-4">
        <h2 className="text-3xl font-bold">Let's work together</h2>
        <p className="text-muted-foreground">Have a project in mind? Let's create something amazing.</p>
        <Button variant="glow" size="lg"><Mail className="h-4 w-4" /> hello@janedoe.com</Button>
      </section>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   TEMPLATE 4: E-Commerce Store
═══════════════════════════════════════════════════════════════ */
function EcommerceTemplate() {
  const products = [
    { name: "Wireless Pro Headphones", price: "$129", oldPrice: "$199", rating: 4.8, tag: "Sale" },
    { name: "Mechanical Keyboard", price: "$89", oldPrice: null, rating: 4.6, tag: "New" },
    { name: "USB-C Hub Ultra", price: "$59", oldPrice: "$79", rating: 4.9, tag: "Popular" },
    { name: "Smart Desk Lamp", price: "$45", oldPrice: null, rating: 4.3, tag: null },
    { name: "Ergonomic Mouse", price: "$69", oldPrice: "$89", rating: 4.7, tag: "Sale" },
    { name: "4K Webcam Pro", price: "$99", oldPrice: null, rating: 4.5, tag: "New" },
  ];

  return (
    <div>
      {/* Nav */}
      <nav className="flex items-center justify-between p-4 border-b border-border">
        <div className="flex items-center gap-6">
          <span className="font-bold">Tech<span className="text-primary">Store</span></span>
          <div className="hidden md:flex gap-4">
            {["All Products", "Deals", "New Arrivals", "Best Sellers"].map((l) => (
              <a key={l} href="#" className="text-sm text-muted-foreground hover:text-foreground">{l}</a>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Input variant="glass" placeholder="Search products..." className="w-48" />
          <Button variant="ghost" size="icon-sm"><Heart className="h-4 w-4" /></Button>
          <Button variant="soft" size="sm"><ShoppingCart className="h-4 w-4" /> Cart (3)</Button>
        </div>
      </nav>

      {/* Promo banner */}
      <div className="bg-primary/10 px-4 py-2.5 text-center text-sm">
        <Sparkles className="h-3.5 w-3.5 inline text-primary mr-1" />
        <strong>Flash Sale!</strong> Up to 35% off on select items. <a href="#" className="text-primary underline">Shop Now</a>
      </div>

      <div className="max-w-6xl mx-auto p-6">
        <div className="flex gap-6">
          {/* Filters sidebar */}
          <aside className="w-48 shrink-0 space-y-6">
            <div>
              <h3 className="text-sm font-semibold mb-2">Category</h3>
              {["All", "Audio", "Keyboards", "Accessories", "Lighting"].map((c, i) => (
                <label key={c} className="flex items-center gap-2 py-1 text-sm text-muted-foreground hover:text-foreground cursor-pointer">
                  <div className={`h-3.5 w-3.5 rounded border ${i === 0 ? "bg-primary border-primary" : "border-border"}`} />
                  {c}
                </label>
              ))}
            </div>
            <Separator />
            <div>
              <h3 className="text-sm font-semibold mb-2">Price Range</h3>
              <div className="flex items-center gap-2">
                <Input className="h-8 text-xs" placeholder="$0" />
                <span className="text-xs text-muted-foreground">—</span>
                <Input className="h-8 text-xs" placeholder="$200" />
              </div>
            </div>
            <Separator />
            <div>
              <h3 className="text-sm font-semibold mb-2">Rating</h3>
              {[4, 3, 2].map((r) => (
                <label key={r} className="flex items-center gap-2 py-1 text-sm text-muted-foreground cursor-pointer">
                  <div className="h-3.5 w-3.5 rounded border border-border" />
                  <div className="flex gap-0.5">{[...Array(5)].map((_, i) => <Star key={i} className={`h-3 w-3 ${i < r ? "fill-primary text-primary" : "text-muted"}`} />)}</div>
                  <span className="text-xs">& up</span>
                </label>
              ))}
            </div>
          </aside>

          {/* Products grid */}
          <div className="flex-1 space-y-4">
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">Showing <strong>6</strong> products</p>
              <Button variant="ghost" size="sm"><Filter className="h-3.5 w-3.5" /> Sort by: Popular</Button>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {products.map((p) => (
                <Card key={p.name} variant="interactive" className="overflow-hidden group">
                  <div className="h-36 bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center relative">
                    <ShoppingCart className="h-8 w-8 text-muted-foreground/20" />
                    {p.tag && <Badge variant="glow" className="absolute top-2 left-2 text-[10px]">{p.tag}</Badge>}
                    <button className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"><Heart className="h-4 w-4 text-muted-foreground hover:text-destructive" /></button>
                  </div>
                  <div className="p-3 space-y-1">
                    <h3 className="font-medium text-sm">{p.name}</h3>
                    <div className="flex items-center gap-1"><Star className="h-3 w-3 fill-primary text-primary" /><span className="text-xs text-muted-foreground">{p.rating}</span></div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-sm">{p.price}</span>
                      {p.oldPrice && <span className="text-xs text-muted-foreground line-through">{p.oldPrice}</span>}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   TEMPLATE 5: Blog / Magazine
═══════════════════════════════════════════════════════════════ */
function BlogTemplate() {
  return (
    <div>
      {/* Nav */}
      <nav className="flex items-center justify-between p-4 border-b border-border">
        <span className="text-xl font-bold">The <span className="text-primary">Craft</span></span>
        <div className="flex items-center gap-4">
          {["Latest", "Tutorials", "Design", "Engineering"].map((l) => <a key={l} href="#" className="text-sm text-muted-foreground hover:text-foreground">{l}</a>)}
          <Input variant="glass" placeholder="Search..." className="w-36" />
        </div>
      </nav>

      {/* Featured post */}
      <section className="max-w-5xl mx-auto p-6">
        <div className="grid md:grid-cols-5 gap-0 rounded-xl overflow-hidden border border-border">
          <div className="md:col-span-3 bg-gradient-to-br from-primary/10 to-secondary/10 h-64 md:h-auto flex items-center justify-center">
            <FileText className="h-16 w-16 text-muted-foreground/15" />
          </div>
          <div className="md:col-span-2 p-8 space-y-4">
            <Badge variant="glow">Featured</Badge>
            <h2 className="text-2xl font-bold">The Future of Design Systems in 2024</h2>
            <p className="text-sm text-muted-foreground">How component-driven development is reshaping the way teams build products at scale.</p>
            <div className="flex items-center gap-3">
              <Avatar size="sm"><AvatarFallback className="text-xs">SC</AvatarFallback></Avatar>
              <div><p className="text-xs font-medium">Sarah Chen</p><p className="text-xs text-muted-foreground">Mar 5, 2024 · 8 min read</p></div>
            </div>
            <Button variant="soft">Read Article <ArrowRight className="h-3.5 w-3.5" /></Button>
          </div>
        </div>
      </section>

      {/* Posts grid */}
      <section className="max-w-5xl mx-auto px-6 pb-12 space-y-6">
        <h2 className="text-xl font-bold">Latest Articles</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "CSS Variables Are Underrated", tag: "CSS", time: "6 min" },
            { title: "Building Accessible Components", tag: "A11y", time: "7 min" },
            { title: "Micro-Interactions That Delight", tag: "Design", time: "5 min" },
            { title: "TypeScript Tips for React", tag: "TypeScript", time: "9 min" },
            { title: "Server Components Deep Dive", tag: "React", time: "12 min" },
            { title: "Design Tokens at Scale", tag: "Systems", time: "8 min" },
          ].map((p) => (
            <Card key={p.title} variant="interactive" className="overflow-hidden">
              <div className="h-32 bg-gradient-to-br from-secondary/10 to-accent/10 flex items-center justify-center"><FileText className="h-8 w-8 text-muted-foreground/15" /></div>
              <div className="p-4 space-y-2">
                <Badge variant="outline" className="text-[10px]">{p.tag}</Badge>
                <h3 className="font-semibold text-sm">{p.title}</h3>
                <p className="text-xs text-muted-foreground">{p.time} read</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-muted/30 py-12 text-center space-y-4">
        <h3 className="text-xl font-bold">Stay updated</h3>
        <p className="text-sm text-muted-foreground">Get the latest articles delivered to your inbox.</p>
        <div className="flex gap-2 max-w-sm mx-auto">
          <Input variant="glow" placeholder="you@email.com" />
          <Button variant="glow">Subscribe</Button>
        </div>
      </section>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   TEMPLATE 6: Pricing Page
═══════════════════════════════════════════════════════════════ */
function PricingTemplate() {
  return (
    <div>
      <nav className="flex items-center justify-between p-4 border-b border-border">
        <div className="flex items-center gap-2"><div className="h-7 w-7 rounded-md bg-primary/20 flex items-center justify-center"><Zap className="h-3.5 w-3.5 text-primary" /></div><span className="font-bold text-sm">LaunchKit</span></div>
        <div className="flex gap-2"><Button variant="ghost" size="sm">Sign In</Button><Button variant="glow" size="sm">Start Free</Button></div>
      </nav>

      <section className="py-16 px-4 text-center space-y-3">
        <h1 className="text-4xl font-extrabold">Plans for every team</h1>
        <p className="text-lg text-muted-foreground">Start free, upgrade when you're ready.</p>
        <div className="flex items-center justify-center gap-2 pt-2">
          <span className="text-sm text-muted-foreground">Monthly</span>
          <Switch />
          <span className="text-sm text-muted-foreground">Yearly <Badge variant="soft" className="ml-1 text-[10px]">-20%</Badge></span>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 pb-16">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: "Free", price: "$0", desc: "For personal projects", features: ["1 project", "1GB storage", "Community support", "Basic analytics"], cta: "Start Free", variant: "outline" as const },
            { name: "Pro", price: "$29", desc: "For growing teams", features: ["Unlimited projects", "100GB storage", "Priority support", "Advanced analytics", "Custom domains", "Team collaboration", "API access"], cta: "Start Trial", variant: "glow" as const, popular: true },
            { name: "Enterprise", price: "$99", desc: "For organizations", features: ["Everything in Pro", "Unlimited storage", "24/7 support", "SSO & SAML", "Audit logs", "SLA guarantee", "Custom integrations", "Dedicated CSM"], cta: "Contact Sales", variant: "outline" as const },
          ].map((p) => (
            <Card key={p.name} variant={p.popular ? "glow" : "outline"} className={`p-6 space-y-5 ${p.popular ? "ring-2 ring-primary scale-105" : ""}`}>
              {p.popular && <Badge variant="glow" className="w-fit">Most Popular</Badge>}
              <div><h3 className="text-xl font-bold">{p.name}</h3><p className="text-sm text-muted-foreground">{p.desc}</p></div>
              <div className="flex items-baseline gap-1"><span className="text-4xl font-extrabold">{p.price}</span><span className="text-muted-foreground">/mo</span></div>
              <Button variant={p.variant} fullWidth>{p.cta}</Button>
              <Separator />
              <ul className="space-y-2">
                {p.features.map((f) => <li key={f} className="flex items-center gap-2 text-sm"><Check className="h-3.5 w-3.5 text-primary shrink-0" /><span className="text-muted-foreground">{f}</span></li>)}
              </ul>
            </Card>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-muted/20 py-16 px-4">
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="text-2xl font-bold text-center">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible>
            {[
              { q: "Can I change plans later?", a: "Yes, you can upgrade or downgrade at any time. Changes take effect immediately." },
              { q: "Is there a free trial?", a: "Pro plan comes with a 14-day free trial. No credit card required." },
              { q: "What payment methods do you accept?", a: "We accept all major credit cards, PayPal, and wire transfers for Enterprise." },
              { q: "Do you offer refunds?", a: "Yes, we offer a 30-day money-back guarantee on all paid plans." },
            ].map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger className="text-left text-sm">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Trust */}
      <section className="py-12 px-4 text-center space-y-4">
        <p className="text-sm text-muted-foreground">Trusted by teams at</p>
        <div className="flex justify-center gap-8">
          {["Acme", "Globex", "Initech", "Umbrella", "Stark"].map((c) => (
            <span key={c} className="text-lg font-bold text-muted-foreground/30">{c}</span>
          ))}
        </div>
      </section>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   TEMPLATE 7: App Settings
═══════════════════════════════════════════════════════════════ */
function SettingsTemplate() {
  const tabs = ["Profile", "Notifications", "Security", "Billing"];

  return (
    <div className="flex h-[700px]">
      {/* Sidebar */}
      <aside className="w-56 border-r border-border bg-card/30 p-4 space-y-6 shrink-0">
        <div className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-md bg-primary/20 flex items-center justify-center"><Settings className="h-3.5 w-3.5 text-primary" /></div>
          <span className="font-bold text-sm">Settings</span>
        </div>
        <div className="space-y-1">
          {[
            { icon: User, label: "Profile", active: true },
            { icon: Bell, label: "Notifications", active: false },
            { icon: Shield, label: "Security", active: false },
            { icon: CreditCard, label: "Billing", active: false },
            { icon: Users, label: "Team", active: false },
            { icon: Code, label: "API Keys", active: false },
            { icon: Palette, label: "Appearance", active: false },
          ].map((item) => (
            <div key={item.label} className={`flex items-center gap-2.5 px-3 py-2 rounded-md text-sm cursor-pointer transition-colors ${item.active ? "bg-primary/10 text-primary font-medium" : "text-muted-foreground hover:text-foreground hover:bg-muted/50"}`}>
              <item.icon className="h-4 w-4" />{item.label}
            </div>
          ))}
        </div>
      </aside>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-8 max-w-2xl">
        <div className="space-y-8">
          <div>
            <h1 className="text-xl font-bold">Profile Settings</h1>
            <p className="text-sm text-muted-foreground">Manage your account information.</p>
          </div>

          {/* Avatar */}
          <div className="flex items-center gap-4">
            <Avatar size="xl"><AvatarFallback className="text-xl">JD</AvatarFallback></Avatar>
            <div className="space-y-1">
              <Button variant="soft" size="sm"><Upload className="h-3.5 w-3.5" /> Change Photo</Button>
              <p className="text-xs text-muted-foreground">JPG, PNG. Max 2MB.</p>
            </div>
          </div>

          <Separator />

          {/* Form */}
          <div className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2"><Label>First Name</Label><Input variant="filled" defaultValue="Jane" /></div>
              <div className="space-y-2"><Label>Last Name</Label><Input variant="filled" defaultValue="Doe" /></div>
            </div>
            <div className="space-y-2"><Label>Email</Label><Input variant="filled" defaultValue="jane@company.com" /></div>
            <div className="space-y-2"><Label>Username</Label><Input variant="filled" defaultValue="@janedoe" /></div>
            <div className="space-y-2"><Label>Bio</Label><Input variant="filled" defaultValue="Product designer & developer" /></div>
            <div className="space-y-2">
              <Label>Timezone</Label>
              <Input variant="filled" defaultValue="Pacific Time (UTC-8)" />
            </div>
          </div>

          <Separator />

          {/* Notification toggles */}
          <div className="space-y-4">
            <h3 className="font-semibold">Notifications</h3>
            {[
              { label: "Email notifications", desc: "Receive email about account activity", on: true },
              { label: "Push notifications", desc: "Get push alerts in your browser", on: true },
              { label: "Marketing emails", desc: "Receive product updates and offers", on: false },
              { label: "Weekly digest", desc: "Summary of activity each week", on: true },
            ].map((n) => (
              <div key={n.label} className="flex items-center justify-between">
                <div><p className="text-sm font-medium">{n.label}</p><p className="text-xs text-muted-foreground">{n.desc}</p></div>
                <Switch defaultChecked={n.on} />
              </div>
            ))}
          </div>

          <Separator />

          <div className="flex justify-between">
            <Button variant="destructive" size="sm">Delete Account</Button>
            <div className="flex gap-2">
              <Button variant="outline">Cancel</Button>
              <Button variant="gradient">Save Changes</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   TEMPLATE 8: Chat / Messaging
═══════════════════════════════════════════════════════════════ */
function ChatTemplate() {
  const conversations = [
    { name: "Design Team", initials: "DT", lastMsg: "Sarah: Updated the mockups", time: "2m", unread: 3 },
    { name: "Alex Rivera", initials: "AR", lastMsg: "Sounds good, let's sync later", time: "15m", unread: 0 },
    { name: "Product Channel", initials: "PC", lastMsg: "Sprint review at 3pm", time: "1h", unread: 1 },
    { name: "Jordan Lee", initials: "JL", lastMsg: "Can you review my PR?", time: "2h", unread: 0 },
    { name: "Maya Patel", initials: "MP", lastMsg: "Thanks for the feedback!", time: "5h", unread: 0 },
  ];

  const messages = [
    { from: "Sarah Chen", initials: "SC", text: "Hey team! I've updated the component designs based on yesterday's feedback.", time: "10:30 AM", self: false },
    { from: "Alex Rivera", initials: "AR", text: "Looking great! Love the new glow effects on the cards.", time: "10:32 AM", self: false },
    { from: "You", initials: "JD", text: "These are perfect. Should we start implementing the new variants?", time: "10:35 AM", self: true },
    { from: "Sarah Chen", initials: "SC", text: "Yes! I'll create the Figma handoff specs today. We can start building tomorrow.", time: "10:37 AM", self: false },
    { from: "You", initials: "JD", text: "Sounds like a plan. I'll set up the CVA variant structure this afternoon.", time: "10:38 AM", self: true },
  ];

  return (
    <div className="flex h-[650px]">
      {/* Conversations sidebar */}
      <aside className="w-72 border-r border-border bg-card/30 flex flex-col shrink-0">
        <div className="p-4 border-b border-border">
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-bold text-sm">Messages</h2>
            <Button variant="ghost" size="icon-sm"><Plus className="h-4 w-4" /></Button>
          </div>
          <Input variant="glass" placeholder="Search conversations..." className="h-8 text-xs" />
        </div>
        <div className="flex-1 overflow-y-auto">
          {conversations.map((c, i) => (
            <div key={c.name} className={`flex items-center gap-3 px-4 py-3 cursor-pointer transition-colors ${i === 0 ? "bg-primary/5 border-l-2 border-primary" : "hover:bg-muted/30"}`}>
              <Avatar size="sm"><AvatarFallback className="text-xs">{c.initials}</AvatarFallback></Avatar>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">{c.name}</span>
                  <span className="text-[10px] text-muted-foreground">{c.time}</span>
                </div>
                <p className="text-xs text-muted-foreground truncate">{c.lastMsg}</p>
              </div>
              {c.unread > 0 && <div className="h-5 w-5 rounded-full bg-primary flex items-center justify-center text-[10px] font-bold text-primary-foreground">{c.unread}</div>}
            </div>
          ))}
        </div>
      </aside>

      {/* Chat area */}
      <div className="flex-1 flex flex-col">
        {/* Chat header */}
        <div className="border-b border-border px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar size="sm"><AvatarFallback className="text-xs">DT</AvatarFallback></Avatar>
            <div>
              <p className="text-sm font-semibold">Design Team</p>
              <p className="text-xs text-muted-foreground">Sarah, Alex, Jordan · 3 online</p>
            </div>
          </div>
          <div className="flex gap-1">
            <Button variant="ghost" size="icon-sm"><Phone className="h-4 w-4" /></Button>
            <Button variant="ghost" size="icon-sm"><Search className="h-4 w-4" /></Button>
            <Button variant="ghost" size="icon-sm"><MoreHorizontal className="h-4 w-4" /></Button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((m, i) => (
            <div key={i} className={`flex gap-3 ${m.self ? "flex-row-reverse" : ""}`}>
              {!m.self && <Avatar size="sm"><AvatarFallback className="text-xs">{m.initials}</AvatarFallback></Avatar>}
              <div className={`max-w-[70%] ${m.self ? "text-right" : ""}`}>
                {!m.self && <p className="text-xs font-medium mb-1">{m.from}</p>}
                <div className={`rounded-2xl px-4 py-2.5 text-sm ${m.self ? "bg-primary text-primary-foreground rounded-br-sm" : "bg-muted rounded-bl-sm"}`}>
                  {m.text}
                </div>
                <p className="text-[10px] text-muted-foreground mt-1">{m.time}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="border-t border-border p-3 flex items-center gap-2">
          <Button variant="ghost" size="icon-sm"><Plus className="h-4 w-4" /></Button>
          <Input variant="glass" placeholder="Type a message..." className="flex-1" />
          <Button variant="ghost" size="icon-sm"><Sparkles className="h-4 w-4" /></Button>
          <Button variant="glow" size="icon"><Send className="h-4 w-4" /></Button>
        </div>
      </div>

      {/* Info panel */}
      <aside className="w-56 border-l border-border bg-card/30 p-4 space-y-4 shrink-0">
        <div className="text-center space-y-2">
          <Avatar size="lg" ring="primary" className="mx-auto"><AvatarFallback>DT</AvatarFallback></Avatar>
          <h3 className="font-semibold text-sm">Design Team</h3>
          <p className="text-xs text-muted-foreground">Created Jan 15, 2024</p>
        </div>
        <Separator />
        <div>
          <h4 className="text-xs font-semibold text-muted-foreground mb-2">MEMBERS (4)</h4>
          {[
            { name: "Sarah Chen", initials: "SC", online: true },
            { name: "Alex Rivera", initials: "AR", online: true },
            { name: "Jordan Lee", initials: "JL", online: true },
            { name: "You", initials: "JD", online: true },
          ].map((m) => (
            <div key={m.name} className="flex items-center gap-2 py-1.5">
              <div className="relative">
                <Avatar size="xs"><AvatarFallback className="text-[9px]">{m.initials}</AvatarFallback></Avatar>
                {m.online && <div className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-primary border-2 border-card" />}
              </div>
              <span className="text-xs">{m.name}</span>
            </div>
          ))}
        </div>
        <Separator />
        <div>
          <h4 className="text-xs font-semibold text-muted-foreground mb-2">SHARED FILES</h4>
          {["design-v3.fig", "components.pdf", "brand-kit.zip"].map((f) => (
            <div key={f} className="flex items-center gap-2 py-1.5 text-xs text-muted-foreground hover:text-foreground cursor-pointer">
              <FileText className="h-3 w-3" />{f}
            </div>
          ))}
        </div>
      </aside>
    </div>
  );
}
