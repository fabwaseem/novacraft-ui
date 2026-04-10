import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { PreviewWrapper } from "@/components/PreviewWrapper";
import { ProfileBlocks, NotificationBlocks, OnboardingBlocks, ChangelogBlocks, GalleryBlocks, IntegrationBlocks, EmptyStateBlocks, MetricsBlocks, SocialBlocks } from "./BlocksExtra";
import {
  LayoutGrid, Zap, Users, CreditCard, BarChart3, MessageSquare,
  Mail, Shield, ArrowRight, Check, Star, ChevronRight, Heart,
  Globe, Sparkles, TrendingUp, Clock, Eye, Download, Play,
  Github, Twitter, Linkedin, Instagram, Phone, MapPin,
  Search, Bell, Settings, User, Menu, X, Plus, Minus,
  FileText, Image, Calendar, Activity, Award, Target,
  Rocket, Coffee, BookOpen, Code, Palette, Layers,
  Monitor, Smartphone, Tablet, Lock, Unlock, Send,
  Newspaper, AlertTriangle, Navigation, Megaphone, ShoppingCart,
  UserCircle, BellRing, Compass, History, LayoutDashboard,
  Link2, CircleDashed, PieChart, Share2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const categories = [
  { id: "hero", label: "Hero Sections", icon: Zap, count: 4 },
  { id: "features", label: "Features", icon: LayoutGrid, count: 3 },
  { id: "pricing", label: "Pricing", icon: CreditCard, count: 2 },
  { id: "testimonials", label: "Testimonials", icon: MessageSquare, count: 3 },
  { id: "stats", label: "Stats", icon: BarChart3, count: 2 },
  { id: "cta", label: "Call to Action", icon: Sparkles, count: 3 },
  { id: "auth", label: "Auth / Login", icon: Shield, count: 3 },
  { id: "team", label: "Team", icon: Users, count: 2 },
  { id: "contact", label: "Contact", icon: Mail, count: 2 },
  { id: "footer", label: "Footers", icon: Layers, count: 2 },
  { id: "dashboard", label: "Dashboard", icon: Monitor, count: 2 },
  { id: "faq", label: "FAQ", icon: BookOpen, count: 2 },
  { id: "blog", label: "Blog / Articles", icon: Newspaper, count: 3 },
  { id: "error", label: "Error Pages", icon: AlertTriangle, count: 2 },
  { id: "navbar", label: "Navigation Bars", icon: Navigation, count: 3 },
  { id: "banner", label: "Banners", icon: Megaphone, count: 3 },
  { id: "ecommerce", label: "E-Commerce", icon: ShoppingCart, count: 3 },
  { id: "profile", label: "Profile / Account", icon: UserCircle, count: 3 },
  { id: "notifications", label: "Notifications", icon: BellRing, count: 3 },
  { id: "onboarding", label: "Onboarding", icon: Compass, count: 3 },
  { id: "changelog", label: "Changelog", icon: History, count: 2 },
  { id: "gallery", label: "Gallery / Portfolio", icon: LayoutGrid, count: 3 },
  { id: "integrations", label: "Integrations", icon: Link2, count: 2 },
  { id: "empty", label: "Empty States", icon: CircleDashed, count: 4 },
  { id: "metrics", label: "Metrics / Analytics", icon: PieChart, count: 2 },
  { id: "social", label: "Social / Feed", icon: Share2, count: 3 },
];

export default function Blocks() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get("cat") || "hero";

  return (
    <div className="flex h-[calc(100vh-4rem)] overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 border-r border-border bg-card/30 overflow-y-auto scrollbar-thin shrink-0">
        <div className="p-4">
          <h2 className="text-sm font-semibold text-foreground mb-1">Blocks</h2>
          <p className="text-xs text-muted-foreground mb-4">Pre-built UI sections ready to copy</p>
          <div className="space-y-0.5">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSearchParams({ cat: cat.id })}
                className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-md text-sm transition-colors ${
                  activeCategory === cat.id
                    ? "bg-primary/10 text-primary font-medium"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                <cat.icon className="h-4 w-4 shrink-0" />
                <span className="flex-1 text-left">{cat.label}</span>
                <span className="text-xs opacity-60">{cat.count}</span>
              </button>
            ))}
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto scrollbar-thin">
        <div className="max-w-5xl mx-auto p-8 space-y-12">
          <motion.div key={activeCategory} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }}>
            {activeCategory === "hero" && <HeroBlocks />}
            {activeCategory === "features" && <FeatureBlocks />}
            {activeCategory === "pricing" && <PricingBlocks />}
            {activeCategory === "testimonials" && <TestimonialBlocks />}
            {activeCategory === "stats" && <StatsBlocks />}
            {activeCategory === "cta" && <CTABlocks />}
            {activeCategory === "auth" && <AuthBlocks />}
            {activeCategory === "team" && <TeamBlocks />}
            {activeCategory === "contact" && <ContactBlocks />}
            {activeCategory === "footer" && <FooterBlocks />}
            {activeCategory === "dashboard" && <DashboardBlocks />}
            {activeCategory === "faq" && <FAQBlocks />}
            {activeCategory === "blog" && <BlogBlocks />}
            {activeCategory === "error" && <ErrorBlocks />}
            {activeCategory === "navbar" && <NavbarBlocks />}
            {activeCategory === "banner" && <BannerBlocks />}
            {activeCategory === "ecommerce" && <EcommerceBlocks />}
            {activeCategory === "profile" && <ProfileBlocks />}
            {activeCategory === "notifications" && <NotificationBlocks />}
            {activeCategory === "onboarding" && <OnboardingBlocks />}
            {activeCategory === "changelog" && <ChangelogBlocks />}
            {activeCategory === "gallery" && <GalleryBlocks />}
            {activeCategory === "integrations" && <IntegrationBlocks />}
            {activeCategory === "empty" && <EmptyStateBlocks />}
            {activeCategory === "metrics" && <MetricsBlocks />}
            {activeCategory === "social" && <SocialBlocks />}
          </motion.div>
        </div>
      </main>
    </div>
  );
}

function BlockWrapper({ title, description, code, children }: { title: string; description: string; code?: string; children: React.ReactNode }) {
  if (code) {
    return (
      <PreviewWrapper title={title} description={description} code={code}>
        {children}
      </PreviewWrapper>
    );
  }
  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <div className="rounded-xl border border-border bg-card/30 overflow-hidden">
        {children}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   HERO BLOCKS
═══════════════════════════════════════════════════════════════ */
function HeroBlocks() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-1">Hero Sections</h2>
        <p className="text-muted-foreground">High-impact hero sections to capture attention.</p>
      </div>

      {/* Hero 1: Centered with gradient */}
      <BlockWrapper title="Centered Hero" description="Clean centered hero with gradient text and CTA buttons." code={`<div className="p-12 text-center space-y-6">
  <Badge variant="outline" className="mb-2">✨ Now in Beta</Badge>
  <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
    Build <span className="gradient-text">beautiful apps</span>
    <br />at lightning speed
  </h1>
  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
    The modern component library that helps you ship stunning
    interfaces faster than ever.
  </p>
  <div className="flex items-center justify-center gap-3">
    <Button size="lg" variant="glow">
      Get Started <ArrowRight className="h-4 w-4" />
    </Button>
    <Button size="lg" variant="outline">
      <Play className="h-4 w-4" /> Watch Demo
    </Button>
  </div>
  <p className="text-xs text-muted-foreground">
    Free forever · No credit card required
  </p>
</div>`}>
        <div className="p-12 text-center space-y-6">
          <Badge variant="outline" className="mb-2">✨ Now in Beta</Badge>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Build <span className="gradient-text">beautiful apps</span><br />at lightning speed
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The modern component library that helps you ship stunning interfaces faster than ever. No compromises on quality or performance.
          </p>
          <div className="flex items-center justify-center gap-3">
            <Button size="lg" variant="glow">
              Get Started <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              <Play className="h-4 w-4" /> Watch Demo
            </Button>
          </div>
          <p className="text-xs text-muted-foreground">Free forever · No credit card required</p>
        </div>
      </BlockWrapper>

      {/* Hero 2: Split with features */}
      <BlockWrapper title="Split Hero" description="Two-column hero with feature highlights." code={`<div className="p-12 grid md:grid-cols-2 gap-12 items-center">
  <div className="space-y-6">
    <Badge variant="soft">New Release v2.0</Badge>
    <h1 className="text-4xl font-bold tracking-tight">
      The developer platform for the modern web
    </h1>
    <p className="text-muted-foreground">
      Everything you need to build production-ready applications.
    </p>
    <div className="flex gap-3">
      <Button variant="gradient" size="lg">Start Building</Button>
      <Button variant="ghost" size="lg">
        Read Docs <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  </div>
  <div className="grid grid-cols-2 gap-3">
    {features.map((f) => (
      <Card key={f.title} variant="glass" className="p-4 space-y-2">
        <f.icon className="h-5 w-5 text-primary" />
        <p className="font-medium text-sm">{f.title}</p>
        <p className="text-xs text-muted-foreground">{f.desc}</p>
      </Card>
    ))}
  </div>
</div>`}>
        <div className="p-12 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Badge variant="soft">New Release v2.0</Badge>
            <h1 className="text-4xl font-bold tracking-tight">
              The developer platform for the modern web
            </h1>
            <p className="text-muted-foreground">
              Everything you need to build production-ready applications. Authentication, database, storage, and more — all in one platform.
            </p>
            <div className="flex gap-3">
              <Button variant="gradient" size="lg">Start Building</Button>
              <Button variant="ghost" size="lg">Read Docs <ChevronRight className="h-4 w-4" /></Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[
              { icon: Zap, title: "Fast", desc: "Sub-second builds" },
              { icon: Shield, title: "Secure", desc: "Enterprise grade" },
              { icon: Globe, title: "Global", desc: "Edge network" },
              { icon: Code, title: "DX", desc: "Developer first" },
            ].map((f) => (
              <Card key={f.title} variant="glass" className="p-4 space-y-2">
                <f.icon className="h-5 w-5 text-primary" />
                <p className="font-medium text-sm">{f.title}</p>
                <p className="text-xs text-muted-foreground">{f.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </BlockWrapper>

      {/* Hero 3: Minimal with input */}
      <BlockWrapper title="Waitlist Hero" description="Minimal hero with email capture." code={`<div className="p-16 text-center space-y-8">
  <div className="flex items-center justify-center gap-2">
    <div className="flex -space-x-2">
      {avatars.map((a) => (
        <Avatar key={a} size="sm" ring="primary">
          <AvatarFallback>{a}</AvatarFallback>
        </Avatar>
      ))}
    </div>
    <span>Join 2,000+ developers</span>
  </div>
  <h1 className="text-5xl font-bold tracking-tight">
    Ship your next project in
    <span className="text-primary text-glow-primary">minutes</span>
  </h1>
  <div className="flex items-center justify-center gap-2 max-w-md mx-auto">
    <Input variant="glow" placeholder="your@email.com" />
    <Button variant="glow">Join Waitlist</Button>
  </div>
</div>`}>
        <div className="p-16 text-center space-y-8">
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <div className="flex -space-x-2">
              {["JD", "AK", "MR", "SL"].map((initials) => (
                <Avatar key={initials} size="sm" ring="primary" className="border-2 border-background">
                  <AvatarFallback className="text-[10px]">{initials}</AvatarFallback>
                </Avatar>
              ))}
            </div>
            <span>Join 2,000+ developers</span>
          </div>
          <h1 className="text-5xl font-bold tracking-tight max-w-3xl mx-auto">
            Ship your next project in <span className="text-primary text-glow-primary">minutes</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Get early access to the future of web development.
          </p>
          <div className="flex items-center justify-center gap-2 max-w-md mx-auto">
            <Input variant="glow" placeholder="your@email.com" className="flex-1" />
            <Button variant="glow">Join Waitlist</Button>
          </div>
        </div>
      </BlockWrapper>

      {/* Hero 4: Dark dramatic */}
      <BlockWrapper title="Dramatic Hero" description="Bold dark hero with stats and glow effects." code={`<div className="p-12 text-center space-y-8 bg-gradient-to-b from-primary/5 to-transparent">
  <Badge variant="glow" className="text-xs">🚀 Launching Soon</Badge>
  <h1 className="text-5xl font-extrabold tracking-tighter">
    <span className="gradient-text">Next Generation</span><br />
    Development Platform
  </h1>
  <Button size="xl" variant="glow" shape="pill">
    Request Access <Sparkles className="h-4 w-4" />
  </Button>
  <div className="flex justify-center gap-12 pt-4">
    {stats.map((s) => (
      <div key={s.label} className="text-center">
        <p className="text-2xl font-bold text-primary">{s.value}</p>
        <p className="text-xs text-muted-foreground">{s.label}</p>
      </div>
    ))}
  </div>
</div>`}>
        <div className="p-12 text-center space-y-8 bg-gradient-to-b from-primary/5 to-transparent">
          <Badge variant="glow" className="text-xs">🚀 Launching Soon</Badge>
          <h1 className="text-5xl font-extrabold tracking-tighter">
            <span className="gradient-text">Next Generation</span><br />
            Development Platform
          </h1>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Redefining how teams build, deploy, and scale web applications.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="xl" variant="glow" shape="pill">
              Request Access <Sparkles className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex justify-center gap-12 pt-4">
            {[
              { value: "10x", label: "Faster deploys" },
              { value: "99.9%", label: "Uptime SLA" },
              { value: "50k+", label: "Developers" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-2xl font-bold text-primary">{s.value}</p>
                <p className="text-xs text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </BlockWrapper>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   FEATURE BLOCKS
═══════════════════════════════════════════════════════════════ */
function FeatureBlocks() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-1">Feature Sections</h2>
        <p className="text-muted-foreground">Showcase your product features beautifully.</p>
      </div>

      {/* Features Grid */}
      <BlockWrapper title="Icon Grid" description="Classic feature grid with icons.">
        <div className="p-10 space-y-8">
          <div className="text-center space-y-2">
            <Badge variant="soft-secondary">Features</Badge>
            <h2 className="text-3xl font-bold">Everything you need</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Built for developers who want speed without sacrificing quality.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Zap, title: "Lightning Fast", desc: "Optimized for speed with edge computing and smart caching." },
              { icon: Shield, title: "Secure by Default", desc: "Enterprise-grade security baked into every layer." },
              { icon: Palette, title: "Fully Customizable", desc: "Make it yours with deep theming and component variants." },
              { icon: Globe, title: "Global CDN", desc: "Content delivered from 200+ edge locations worldwide." },
              { icon: Code, title: "Developer First", desc: "TypeScript, great docs, and intuitive APIs." },
              { icon: TrendingUp, title: "Analytics Built-in", desc: "Track performance and user behavior out of the box." },
            ].map((f) => (
              <Card key={f.title} variant="interactive" className="p-6 space-y-3">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <f.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </BlockWrapper>

      {/* Features Alternating */}
      <BlockWrapper title="Alternating Features" description="Feature rows that alternate image/text placement.">
        <div className="p-10 space-y-12">
          {[
            { icon: Rocket, title: "Deploy in seconds", desc: "Push your code and watch it go live instantly. Zero configuration required.", badge: "Fast" },
            { icon: Lock, title: "Security first", desc: "Every deployment is secured with TLS, DDoS protection, and automated vulnerability scanning.", badge: "Secure" },
            { icon: Activity, title: "Real-time monitoring", desc: "Get instant alerts, detailed logs, and performance metrics for every deployment.", badge: "Monitor" },
          ].map((f, i) => (
            <div key={f.title} className={`flex items-center gap-10 ${i % 2 !== 0 ? "flex-row-reverse" : ""}`}>
              <div className="flex-1 space-y-3">
                <Badge variant="soft">{f.badge}</Badge>
                <h3 className="text-2xl font-bold">{f.title}</h3>
                <p className="text-muted-foreground">{f.desc}</p>
                <Button variant="link" className="px-0">
                  Learn more <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <Card variant="glass" className="flex-1 h-48 flex items-center justify-center">
                <f.icon className="h-16 w-16 text-primary/30" />
              </Card>
            </div>
          ))}
        </div>
      </BlockWrapper>

      {/* Features Bento */}
      <BlockWrapper title="Bento Grid" description="Modern bento-style feature layout.">
        <div className="p-10">
          <div className="grid grid-cols-3 grid-rows-2 gap-4">
            <Card variant="gradient" className="col-span-2 p-8 space-y-3">
              <Zap className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-bold">Blazing Fast Performance</h3>
              <p className="text-sm text-muted-foreground max-w-md">Our edge runtime delivers sub-millisecond responses worldwide. Experience the future of web performance.</p>
            </Card>
            <Card variant="glow" className="p-6 flex flex-col items-center justify-center text-center space-y-2">
              <p className="text-4xl font-bold text-primary">99.9%</p>
              <p className="text-sm text-muted-foreground">Uptime guaranteed</p>
            </Card>
            <Card variant="glass" className="p-6 space-y-3">
              <Shield className="h-6 w-6 text-accent" />
              <h3 className="font-semibold">SOC2 Compliant</h3>
              <p className="text-xs text-muted-foreground">Enterprise security standards</p>
            </Card>
            <Card variant="glass" className="p-6 space-y-3">
              <Globe className="h-6 w-6 text-secondary" />
              <h3 className="font-semibold">200+ Edge Nodes</h3>
              <p className="text-xs text-muted-foreground">Global distribution network</p>
            </Card>
            <Card variant="interactive" className="p-6 space-y-3">
              <Code className="h-6 w-6 text-primary" />
              <h3 className="font-semibold">Open Source</h3>
              <p className="text-xs text-muted-foreground">Community-driven development</p>
            </Card>
          </div>
        </div>
      </BlockWrapper>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   PRICING BLOCKS
═══════════════════════════════════════════════════════════════ */
function PricingBlocks() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-1">Pricing</h2>
        <p className="text-muted-foreground">Pricing tables and plan comparisons.</p>
      </div>

      {/* Pricing 1: Three tier */}
      <BlockWrapper title="Three-Tier Pricing" description="Classic pricing with a highlighted plan." code={`<div className="grid md:grid-cols-3 gap-6 items-start">
  {plans.map((plan) => (
    <Card
      key={plan.name}
      variant={plan.variant}
      className={plan.popular ? "ring-2 ring-primary" : ""}
    >
      {plan.popular && <Badge variant="glow">Most Popular</Badge>}
      <h3 className="text-xl font-bold">{plan.name}</h3>
      <div className="flex items-baseline gap-1">
        <span className="text-4xl font-extrabold">{plan.price}</span>
        <span className="text-muted-foreground">/mo</span>
      </div>
      <Button variant={plan.btnVariant} fullWidth>Get Started</Button>
      <ul className="space-y-2">
        {plan.features.map((f) => (
          <li key={f} className="flex items-center gap-2 text-sm">
            <Check className="h-4 w-4 text-primary" />
            <span className="text-muted-foreground">{f}</span>
          </li>
        ))}
      </ul>
    </Card>
  ))}
</div>`}>
        <div className="p-10 space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold">Simple, transparent pricing</h2>
            <p className="text-muted-foreground">No hidden fees. Cancel anytime.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 items-start">
            {[
              { name: "Starter", price: "$0", period: "/mo", desc: "Perfect for side projects", features: ["1 project", "1GB storage", "Community support", "Basic analytics"], variant: "outline" as const, btnVariant: "outline" as const },
              { name: "Pro", price: "$29", period: "/mo", desc: "For growing teams", features: ["Unlimited projects", "100GB storage", "Priority support", "Advanced analytics", "Custom domains", "Team collaboration"], variant: "glow" as const, btnVariant: "glow" as const, popular: true },
              { name: "Enterprise", price: "$99", period: "/mo", desc: "For large organizations", features: ["Everything in Pro", "Unlimited storage", "24/7 support", "SSO & SAML", "Audit logs", "SLA guarantee"], variant: "outline" as const, btnVariant: "default" as const },
            ].map((plan) => (
              <Card key={plan.name} variant={plan.variant} className={`p-6 space-y-6 ${plan.popular ? "ring-2 ring-primary" : ""}`}>
                {plan.popular && <Badge variant="glow" className="w-fit">Most Popular</Badge>}
                <div>
                  <h3 className="text-xl font-bold">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground">{plan.desc}</p>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <Button variant={plan.btnVariant} fullWidth>Get Started</Button>
                <Separator />
                <ul className="space-y-2">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-primary shrink-0" />
                      <span className="text-muted-foreground">{f}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </BlockWrapper>

      {/* Pricing 2: Compact */}
      <BlockWrapper title="Compact Pricing" description="Minimal pricing cards with toggle.">
        <div className="p-10 space-y-6">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">Choose your plan</h2>
            <div className="flex items-center justify-center gap-3">
              <span className="text-sm text-muted-foreground">Monthly</span>
              <Switch />
              <span className="text-sm text-muted-foreground">Yearly <Badge variant="soft" className="ml-1">-20%</Badge></span>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <Card variant="glass" className="p-6 flex items-center justify-between">
              <div>
                <h3 className="font-semibold">Personal</h3>
                <p className="text-sm text-muted-foreground">For individuals</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold">$9<span className="text-sm font-normal text-muted-foreground">/mo</span></p>
                <Button size="sm" variant="soft" className="mt-2">Select</Button>
              </div>
            </Card>
            <Card variant="glass-strong" className="p-6 flex items-center justify-between ring-1 ring-primary/30">
              <div>
                <h3 className="font-semibold">Team</h3>
                <p className="text-sm text-muted-foreground">For growing teams</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold">$49<span className="text-sm font-normal text-muted-foreground">/mo</span></p>
                <Button size="sm" variant="glow" className="mt-2">Select</Button>
              </div>
            </Card>
          </div>
        </div>
      </BlockWrapper>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   TESTIMONIAL BLOCKS
═══════════════════════════════════════════════════════════════ */
function TestimonialBlocks() {
  const testimonials = [
    { name: "Sarah Chen", role: "CTO, TechFlow", content: "This component library has cut our development time in half. The customization options are unmatched.", initials: "SC" },
    { name: "Alex Rivera", role: "Lead Dev, Pixelfy", content: "Finally a design system that doesn't feel generic. Every variant feels intentional and polished.", initials: "AR" },
    { name: "Jordan Lee", role: "Founder, BuildKit", content: "The best DX I've experienced. Props are intuitive, variants are powerful, and docs are stellar.", initials: "JL" },
    { name: "Maya Patel", role: "Design Lead, Nova", content: "Our designers love it. Consistent theming across light and dark modes just works perfectly.", initials: "MP" },
    { name: "David Kim", role: "Eng Manager, CloudBase", content: "Migrated from a custom system in a week. The variant API made it almost a drop-in replacement.", initials: "DK" },
    { name: "Emma Wilson", role: "Freelancer", content: "I use these blocks on every project now. My clients think I spend weeks on design — it takes hours.", initials: "EW" },
  ];

  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-1">Testimonials</h2>
        <p className="text-muted-foreground">Social proof sections to build trust.</p>
      </div>

      {/* Testimonials Grid */}
      <BlockWrapper title="Card Grid" description="Testimonials in a masonry-like grid.">
        <div className="p-10 space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold">Loved by developers</h2>
            <p className="text-muted-foreground">Here's what our community has to say.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {testimonials.slice(0, 6).map((t) => (
              <Card key={t.name} variant="glass" className="p-5 space-y-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">&ldquo;{t.content}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <Avatar size="sm">
                    <AvatarFallback className="text-xs">{t.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </BlockWrapper>

      {/* Single big testimonial */}
      <BlockWrapper title="Featured Testimonial" description="Single large testimonial with emphasis.">
        <div className="p-12 text-center space-y-6">
          <div className="flex justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-primary text-primary" />
            ))}
          </div>
          <blockquote className="text-2xl font-medium max-w-2xl mx-auto leading-relaxed">
            &ldquo;This is hands down the best component library I've ever used. It transformed how our team builds products.&rdquo;
          </blockquote>
          <div className="flex items-center justify-center gap-3">
            <Avatar ring="glow">
              <AvatarFallback>SC</AvatarFallback>
            </Avatar>
            <div className="text-left">
              <p className="font-semibold">Sarah Chen</p>
              <p className="text-sm text-muted-foreground">CTO at TechFlow</p>
            </div>
          </div>
        </div>
      </BlockWrapper>

      {/* Scrolling logos + testimonial */}
      <BlockWrapper title="Compact Testimonials" description="Inline testimonial cards.">
        <div className="p-10 space-y-6">
          <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-thin">
            {testimonials.map((t) => (
              <Card key={t.name} variant="outline" className="p-4 min-w-[280px] space-y-3 shrink-0">
                <p className="text-sm text-muted-foreground">&ldquo;{t.content}&rdquo;</p>
                <div className="flex items-center gap-2">
                  <Avatar size="sm"><AvatarFallback className="text-xs">{t.initials}</AvatarFallback></Avatar>
                  <div>
                    <p className="text-xs font-medium">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </BlockWrapper>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   STATS BLOCKS
═══════════════════════════════════════════════════════════════ */
function StatsBlocks() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-1">Stats</h2>
        <p className="text-muted-foreground">Highlight key metrics and numbers.</p>
      </div>

      <BlockWrapper title="Stats Bar" description="Horizontal stats row with large numbers.">
        <div className="p-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: "50K+", label: "Active Users", icon: Users },
            { value: "99.9%", label: "Uptime", icon: Activity },
            { value: "2.4M", label: "API Requests/day", icon: TrendingUp },
            { value: "150+", label: "Components", icon: LayoutGrid },
          ].map((s) => (
            <div key={s.label} className="space-y-2">
              <s.icon className="h-5 w-5 text-primary mx-auto" />
              <p className="text-3xl font-extrabold">{s.value}</p>
              <p className="text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </BlockWrapper>

      <BlockWrapper title="Stats Cards" description="Individual stat cards with progress indicators.">
        <div className="p-10 grid md:grid-cols-3 gap-4">
          {[
            { label: "Revenue", value: "$124,500", change: "+12.5%", progress: 72 },
            { label: "New Users", value: "8,234", change: "+24.1%", progress: 85 },
            { label: "Conversion", value: "3.24%", change: "+0.4%", progress: 45 },
          ].map((s) => (
            <Card key={s.label} variant="glass" className="p-5 space-y-3">
              <div className="flex justify-between items-start">
                <p className="text-sm text-muted-foreground">{s.label}</p>
                <Badge variant="dot-success">{s.change}</Badge>
              </div>
              <p className="text-2xl font-bold">{s.value}</p>
              <Progress value={s.progress} size="sm" indicatorColor="gradient" />
            </Card>
          ))}
        </div>
      </BlockWrapper>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   CTA BLOCKS
═══════════════════════════════════════════════════════════════ */
function CTABlocks() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-1">Call to Action</h2>
        <p className="text-muted-foreground">Compelling CTAs to drive conversions.</p>
      </div>

      <BlockWrapper title="Simple CTA" description="Clean, centered call-to-action." code={`<div className="p-12 text-center space-y-4 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5">
  <h2 className="text-3xl font-bold">Ready to get started?</h2>
  <p className="text-muted-foreground max-w-md mx-auto">
    Join thousands of developers building better apps faster.
  </p>
  <div className="flex justify-center gap-3">
    <Button variant="glow" size="lg">Start Free Trial</Button>
    <Button variant="outline" size="lg">Talk to Sales</Button>
  </div>
</div>`}>
        <div className="p-12 text-center space-y-4 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5">
          <h2 className="text-3xl font-bold">Ready to get started?</h2>
          <p className="text-muted-foreground max-w-md mx-auto">Join thousands of developers building better apps faster.</p>
          <div className="flex justify-center gap-3">
            <Button variant="glow" size="lg">Start Free Trial</Button>
            <Button variant="outline" size="lg">Talk to Sales</Button>
          </div>
        </div>
      </BlockWrapper>

      <BlockWrapper title="CTA with Email" description="CTA with inline email capture.">
        <div className="p-12 text-center space-y-6">
          <Sparkles className="h-8 w-8 text-primary mx-auto" />
          <h2 className="text-3xl font-bold">Stay in the loop</h2>
          <p className="text-muted-foreground">Get notified about new components, themes, and updates.</p>
          <div className="flex gap-2 max-w-sm mx-auto">
            <Input placeholder="you@company.com" variant="glass" />
            <Button variant="gradient">Subscribe</Button>
          </div>
          <p className="text-xs text-muted-foreground">No spam. Unsubscribe anytime.</p>
        </div>
      </BlockWrapper>

      <BlockWrapper title="Banner CTA" description="Full-width promotional banner.">
        <div className="p-6 flex flex-col md:flex-row items-center justify-between gap-4 bg-primary/5">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
              <Rocket className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="font-semibold">Launch Special — 50% off Pro Plan</p>
              <p className="text-sm text-muted-foreground">Limited time offer. Ends soon.</p>
            </div>
          </div>
          <Button variant="glow">Claim Offer <ArrowRight className="h-4 w-4" /></Button>
        </div>
      </BlockWrapper>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   AUTH BLOCKS
═══════════════════════════════════════════════════════════════ */
function AuthBlocks() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-1">Auth / Login</h2>
        <p className="text-muted-foreground">Login, signup, and authentication forms.</p>
      </div>

      <BlockWrapper title="Simple Login" description="Clean centered login card." code={`<Card variant="glass-strong" className="w-full max-w-sm p-6 space-y-6">
  <div className="text-center space-y-1">
    <h2 className="text-xl font-bold">Welcome back</h2>
    <p className="text-sm text-muted-foreground">Sign in to your account</p>
  </div>
  <div className="space-y-4">
    <div className="space-y-2">
      <Label>Email</Label>
      <Input variant="filled" placeholder="you@example.com" />
    </div>
    <div className="space-y-2">
      <Label>Password</Label>
      <Input variant="filled" type="password" placeholder="••••••••" />
    </div>
    <Button variant="glow" fullWidth>Sign In</Button>
  </div>
  <Separator />
  <Button variant="outline" fullWidth>
    <Globe className="h-4 w-4" /> Continue with Google
  </Button>
</Card>`}>
        <div className="p-10 flex justify-center">
          <Card variant="glass-strong" className="w-full max-w-sm p-6 space-y-6">
            <div className="text-center space-y-1">
              <h2 className="text-xl font-bold">Welcome back</h2>
              <p className="text-sm text-muted-foreground">Sign in to your account</p>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Email</Label>
                <Input variant="filled" placeholder="you@example.com" />
              </div>
              <div className="space-y-2">
                <Label>Password</Label>
                <Input variant="filled" type="password" placeholder="••••••••" />
              </div>
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 text-sm">
                  <Checkbox size="sm" /> Remember me
                </label>
                <Button variant="link" size="sm" className="px-0 h-auto">Forgot password?</Button>
              </div>
              <Button variant="glow" fullWidth>Sign In</Button>
            </div>
            <Separator />
            <div className="space-y-2">
              <Button variant="outline" fullWidth>
                <Globe className="h-4 w-4" /> Continue with Google
              </Button>
              <Button variant="outline" fullWidth>
                <Github className="h-4 w-4" /> Continue with GitHub
              </Button>
            </div>
            <p className="text-center text-sm text-muted-foreground">
              Don't have an account? <Button variant="link" className="px-0 h-auto text-sm">Sign up</Button>
            </p>
          </Card>
        </div>
      </BlockWrapper>

      <BlockWrapper title="Split Auth" description="Side-by-side branding + form layout.">
        <div className="grid md:grid-cols-2 min-h-[500px]">
          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-10 flex flex-col justify-center space-y-6">
            <div className="h-10 w-10 rounded-lg bg-primary/20 flex items-center justify-center">
              <Zap className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-3xl font-bold">Start building <span className="gradient-text">today</span></h2>
            <p className="text-muted-foreground">Create stunning applications with our comprehensive component library.</p>
            <div className="space-y-3">
              {["100+ Components", "Dark & Light themes", "Fully customizable"].map((f) => (
                <div key={f} className="flex items-center gap-2 text-sm">
                  <Check className="h-4 w-4 text-primary" />
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="p-10 flex items-center justify-center">
            <div className="w-full max-w-sm space-y-6">
              <div className="space-y-1">
                <h2 className="text-xl font-bold">Create account</h2>
                <p className="text-sm text-muted-foreground">Enter your details to get started</p>
              </div>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-2"><Label>First name</Label><Input variant="filled" placeholder="John" /></div>
                  <div className="space-y-2"><Label>Last name</Label><Input variant="filled" placeholder="Doe" /></div>
                </div>
                <div className="space-y-2"><Label>Email</Label><Input variant="filled" placeholder="john@example.com" /></div>
                <div className="space-y-2"><Label>Password</Label><Input variant="filled" type="password" placeholder="••••••••" /></div>
                <Button variant="gradient" fullWidth>Create Account</Button>
              </div>
            </div>
          </div>
        </div>
      </BlockWrapper>

      <BlockWrapper title="OTP Verification" description="Code verification screen.">
        <div className="p-10 flex justify-center">
          <Card variant="glass" className="w-full max-w-sm p-6 text-center space-y-6">
            <div className="mx-auto h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <div className="space-y-1">
              <h2 className="text-xl font-bold">Check your email</h2>
              <p className="text-sm text-muted-foreground">We sent a code to john@example.com</p>
            </div>
            <div className="flex justify-center gap-2">
              {[...Array(6)].map((_, i) => (
                <Input key={i} className="w-10 h-12 text-center text-lg font-mono" maxLength={1} />
              ))}
            </div>
            <Button variant="glow" fullWidth>Verify</Button>
            <p className="text-sm text-muted-foreground">
              Didn't receive? <Button variant="link" className="px-0 h-auto text-sm">Resend code</Button>
            </p>
          </Card>
        </div>
      </BlockWrapper>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   TEAM BLOCKS
═══════════════════════════════════════════════════════════════ */
function TeamBlocks() {
  const members = [
    { name: "Alex Morgan", role: "CEO & Founder", initials: "AM" },
    { name: "Sara Kim", role: "CTO", initials: "SK" },
    { name: "David Chen", role: "Lead Designer", initials: "DC" },
    { name: "Emma Wilson", role: "Head of Product", initials: "EW" },
  ];

  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-1">Team</h2>
        <p className="text-muted-foreground">Showcase your team members.</p>
      </div>

      <BlockWrapper title="Team Grid" description="Clean team member cards.">
        <div className="p-10 space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold">Meet the team</h2>
            <p className="text-muted-foreground">The people behind the product.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-4">
            {members.map((m) => (
              <Card key={m.name} variant="interactive" className="p-6 text-center space-y-3">
                <Avatar size="lg" ring="primary" className="mx-auto">
                  <AvatarFallback>{m.initials}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">{m.name}</p>
                  <p className="text-sm text-muted-foreground">{m.role}</p>
                </div>
                <div className="flex justify-center gap-2">
                  <Button variant="ghost" size="icon-sm"><Twitter className="h-3.5 w-3.5" /></Button>
                  <Button variant="ghost" size="icon-sm"><Linkedin className="h-3.5 w-3.5" /></Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </BlockWrapper>

      <BlockWrapper title="Team List" description="Compact horizontal team list.">
        <div className="p-10 space-y-6">
          {members.map((m) => (
            <div key={m.name} className="flex items-center justify-between py-3 border-b border-border last:border-0">
              <div className="flex items-center gap-3">
                <Avatar size="sm"><AvatarFallback className="text-xs">{m.initials}</AvatarFallback></Avatar>
                <div>
                  <p className="font-medium text-sm">{m.name}</p>
                  <p className="text-xs text-muted-foreground">{m.role}</p>
                </div>
              </div>
              <div className="flex gap-1">
                <Button variant="ghost" size="icon-sm"><Mail className="h-3.5 w-3.5" /></Button>
                <Button variant="ghost" size="icon-sm"><Linkedin className="h-3.5 w-3.5" /></Button>
              </div>
            </div>
          ))}
        </div>
      </BlockWrapper>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   CONTACT BLOCKS
═══════════════════════════════════════════════════════════════ */
function ContactBlocks() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-1">Contact</h2>
        <p className="text-muted-foreground">Contact forms and info sections.</p>
      </div>

      <BlockWrapper title="Contact Form" description="Standard contact form with info sidebar.">
        <div className="grid md:grid-cols-5 gap-0">
          <div className="md:col-span-2 bg-primary/5 p-8 space-y-6">
            <h3 className="text-xl font-bold">Get in touch</h3>
            <p className="text-sm text-muted-foreground">We'd love to hear from you. Fill out the form and we'll get back within 24 hours.</p>
            <div className="space-y-4">
              {[
                { icon: Mail, label: "hello@novacraft.dev" },
                { icon: Phone, label: "+1 (555) 000-0000" },
                { icon: MapPin, label: "San Francisco, CA" },
              ].map((c) => (
                <div key={c.label} className="flex items-center gap-3 text-sm">
                  <c.icon className="h-4 w-4 text-primary" />
                  <span className="text-muted-foreground">{c.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="md:col-span-3 p-8 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2"><Label>First name</Label><Input variant="filled" placeholder="John" /></div>
              <div className="space-y-2"><Label>Last name</Label><Input variant="filled" placeholder="Doe" /></div>
            </div>
            <div className="space-y-2"><Label>Email</Label><Input variant="filled" placeholder="john@example.com" /></div>
            <div className="space-y-2"><Label>Subject</Label><Input variant="filled" placeholder="How can we help?" /></div>
            <div className="space-y-2"><Label>Message</Label><Textarea variant="filled" placeholder="Tell us more..." rows={4} /></div>
            <Button variant="gradient" fullWidth>Send Message <Send className="h-4 w-4" /></Button>
          </div>
        </div>
      </BlockWrapper>

      <BlockWrapper title="Minimal Contact" description="Simple centered form.">
        <div className="p-10 max-w-md mx-auto space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold">Contact us</h2>
            <p className="text-sm text-muted-foreground">We usually respond within a few hours.</p>
          </div>
          <div className="space-y-4">
            <div className="space-y-2"><Label>Email</Label><Input variant="glow" placeholder="your@email.com" /></div>
            <div className="space-y-2"><Label>Message</Label><Textarea variant="glow" placeholder="What's on your mind?" rows={4} /></div>
            <Button variant="glow" fullWidth>Send</Button>
          </div>
        </div>
      </BlockWrapper>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   FOOTER BLOCKS
═══════════════════════════════════════════════════════════════ */
function FooterBlocks() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-1">Footers</h2>
        <p className="text-muted-foreground">Website footer layouts.</p>
      </div>

      <BlockWrapper title="Multi-Column Footer" description="Standard footer with links and branding.">
        <div className="p-10 space-y-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="h-7 w-7 rounded bg-primary/20 flex items-center justify-center">
                  <Zap className="h-3.5 w-3.5 text-primary" />
                </div>
                <span className="font-bold">NovaCraft</span>
              </div>
              <p className="text-sm text-muted-foreground">Build beautiful, accessible applications faster than ever.</p>
              <div className="flex gap-2">
                <Button variant="ghost" size="icon-sm"><Twitter className="h-3.5 w-3.5" /></Button>
                <Button variant="ghost" size="icon-sm"><Github className="h-3.5 w-3.5" /></Button>
                <Button variant="ghost" size="icon-sm"><Linkedin className="h-3.5 w-3.5" /></Button>
              </div>
            </div>
            {[
              { title: "Product", links: ["Components", "Blocks", "Themes", "Pricing", "Changelog"] },
              { title: "Resources", links: ["Docs", "Guides", "API Ref", "Examples", "Blog"] },
              { title: "Company", links: ["About", "Careers", "Contact", "Privacy", "Terms"] },
            ].map((col) => (
              <div key={col.title} className="space-y-3">
                <h4 className="text-sm font-semibold">{col.title}</h4>
                <ul className="space-y-2">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <Separator />
          <div className="flex flex-col md:flex-row justify-between items-center gap-2 text-sm text-muted-foreground">
            <p>© 2024 NovaCraft. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms</a>
              <a href="#" className="hover:text-foreground transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </BlockWrapper>

      <BlockWrapper title="Minimal Footer" description="Simple centered footer.">
        <div className="p-6 text-center space-y-4">
          <div className="flex justify-center gap-4">
            {["Docs", "Components", "Themes", "Blog", "GitHub"].map((link) => (
              <a key={link} href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{link}</a>
            ))}
          </div>
          <p className="text-xs text-muted-foreground">© 2024 NovaCraft · Built with ❤️</p>
        </div>
      </BlockWrapper>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   DASHBOARD BLOCKS
═══════════════════════════════════════════════════════════════ */
function DashboardBlocks() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-1">Dashboard</h2>
        <p className="text-muted-foreground">Dashboard components and layouts.</p>
      </div>

      <BlockWrapper title="Stats Dashboard" description="Dashboard header with KPI cards and activity.">
        <div className="p-6 space-y-6">
          {/* KPI row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Total Revenue", value: "$45,231", change: "+20.1%", icon: CreditCard },
              { label: "Subscriptions", value: "2,350", change: "+18.2%", icon: Users },
              { label: "Active Now", value: "573", change: "+4.1%", icon: Activity },
              { label: "Conversion", value: "3.2%", change: "+0.8%", icon: TrendingUp },
            ].map((kpi) => (
              <Card key={kpi.label} variant="glass" className="p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <p className="text-xs text-muted-foreground">{kpi.label}</p>
                  <kpi.icon className="h-4 w-4 text-muted-foreground" />
                </div>
                <p className="text-xl font-bold">{kpi.value}</p>
                <p className="text-xs text-primary">{kpi.change} from last month</p>
              </Card>
            ))}
          </div>
          {/* Recent activity */}
          <Card variant="outline" className="p-4">
            <h3 className="font-semibold mb-4">Recent Activity</h3>
            <div className="space-y-3">
              {[
                { action: "New user signup", user: "sarah@example.com", time: "2 min ago" },
                { action: "Payment received", user: "alex@company.co", time: "15 min ago" },
                { action: "Project deployed", user: "dev-team", time: "1 hour ago" },
                { action: "Support ticket closed", user: "support@help.io", time: "3 hours ago" },
              ].map((a, i) => (
                <div key={i} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    <div>
                      <p className="text-sm font-medium">{a.action}</p>
                      <p className="text-xs text-muted-foreground">{a.user}</p>
                    </div>
                  </div>
                  <span className="text-xs text-muted-foreground">{a.time}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </BlockWrapper>

      <BlockWrapper title="Settings Panel" description="Account settings layout.">
        <div className="p-6 space-y-6">
          <div>
            <h3 className="font-semibold">Account Settings</h3>
            <p className="text-sm text-muted-foreground">Manage your account preferences.</p>
          </div>
          <div className="space-y-4">
            {[
              { label: "Email Notifications", desc: "Receive email updates about your account", checked: true },
              { label: "Marketing Emails", desc: "Get notified about new features and offers", checked: false },
              { label: "Two-Factor Auth", desc: "Add an extra layer of security", checked: true },
              { label: "Public Profile", desc: "Make your profile visible to others", checked: false },
            ].map((s) => (
              <div key={s.label} className="flex items-center justify-between py-3 border-b border-border last:border-0">
                <div>
                  <p className="text-sm font-medium">{s.label}</p>
                  <p className="text-xs text-muted-foreground">{s.desc}</p>
                </div>
                <Switch defaultChecked={s.checked} />
              </div>
            ))}
          </div>
          <div className="flex justify-end gap-2">
            <Button variant="outline">Cancel</Button>
            <Button variant="gradient">Save Changes</Button>
          </div>
        </div>
      </BlockWrapper>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   FAQ BLOCKS
═══════════════════════════════════════════════════════════════ */
function FAQBlocks() {
  const faqs = [
    { q: "Is there a free plan?", a: "Yes! Our Starter plan is completely free with no time limits. You get access to core components and community support." },
    { q: "Can I use it for commercial projects?", a: "Absolutely. All plans include a commercial license. Use it for client projects, SaaS products, or anything else." },
    { q: "How does theming work?", a: "Our design system uses CSS variables with HSL values. Switch themes instantly by changing a few variables — no rebuild required." },
    { q: "Do you offer custom development?", a: "Yes, we offer custom component development and design system consulting for enterprise clients." },
    { q: "What frameworks are supported?", a: "Currently we support React with TypeScript. Vue and Svelte support is on our roadmap." },
    { q: "Can I customize the components?", a: "Every component uses class-variance-authority (CVA) for deep customization. Override styles, add variants, or extend the design tokens." },
  ];

  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-1">FAQ</h2>
        <p className="text-muted-foreground">Frequently asked questions sections.</p>
      </div>

      <BlockWrapper title="Accordion FAQ" description="Expandable FAQ list.">
        <div className="p-10 max-w-2xl mx-auto space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">Everything you need to know.</p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </BlockWrapper>

      <BlockWrapper title="Card FAQ" description="FAQ as individual cards.">
        <div className="p-10 space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold">Common Questions</h2>
            <p className="text-muted-foreground">Quick answers to help you get started.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {faqs.map((faq, i) => (
              <Card key={i} variant="glass" className="p-5 space-y-2">
                <h3 className="font-semibold text-sm">{faq.q}</h3>
                <p className="text-sm text-muted-foreground">{faq.a}</p>
              </Card>
            ))}
          </div>
        </div>
      </BlockWrapper>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   BLOG BLOCKS
═══════════════════════════════════════════════════════════════ */
function BlogBlocks() {
  const posts = [
    { title: "Building Design Systems at Scale", desc: "How we architected a component library used by 500+ developers across 30 teams.", tag: "Engineering", date: "Mar 5, 2024", readTime: "8 min", initials: "SC" },
    { title: "The Art of Micro-Interactions", desc: "Small animations that make a big difference in user experience and delight.", tag: "Design", date: "Mar 2, 2024", readTime: "5 min", initials: "AR" },
    { title: "CSS Variables Are Underrated", desc: "Dynamic theming, runtime customization, and why CSS custom properties are the future.", tag: "CSS", date: "Feb 28, 2024", readTime: "6 min", initials: "JL" },
    { title: "Accessible by Default", desc: "Why accessibility shouldn't be an afterthought and how we bake it into every component.", tag: "A11y", date: "Feb 24, 2024", readTime: "7 min", initials: "MP" },
  ];

  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-1">Blog / Articles</h2>
        <p className="text-muted-foreground">Blog post layouts and article cards.</p>
      </div>

      {/* Blog Grid */}
      <BlockWrapper title="Blog Card Grid" description="Standard blog post card layout.">
        <div className="p-10 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Latest Articles</h2>
            <Button variant="ghost">View All <ArrowRight className="h-4 w-4" /></Button>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {posts.map((post) => (
              <Card key={post.title} variant="interactive" className="overflow-hidden">
                <div className="h-40 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                  <FileText className="h-10 w-10 text-primary/30" />
                </div>
                <div className="p-5 space-y-3">
                  <div className="flex items-center gap-2">
                    <Badge variant="soft" className="text-xs">{post.tag}</Badge>
                    <span className="text-xs text-muted-foreground">{post.readTime} read</span>
                  </div>
                  <h3 className="font-bold">{post.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">{post.desc}</p>
                  <div className="flex items-center gap-2 pt-1">
                    <Avatar size="xs"><AvatarFallback className="text-[9px]">{post.initials}</AvatarFallback></Avatar>
                    <span className="text-xs text-muted-foreground">{post.date}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </BlockWrapper>

      {/* Featured Post */}
      <BlockWrapper title="Featured Article" description="Large featured post with sidebar list.">
        <div className="grid md:grid-cols-5 gap-0">
          <div className="md:col-span-3 p-8 space-y-4">
            <Badge variant="glow">Featured</Badge>
            <h2 className="text-2xl font-bold">{posts[0].title}</h2>
            <p className="text-muted-foreground">{posts[0].desc}</p>
            <div className="flex items-center gap-3">
              <Avatar size="sm"><AvatarFallback className="text-xs">{posts[0].initials}</AvatarFallback></Avatar>
              <div>
                <p className="text-sm font-medium">Sarah Chen</p>
                <p className="text-xs text-muted-foreground">{posts[0].date} · {posts[0].readTime} read</p>
              </div>
            </div>
            <Button variant="soft">Read Article <ArrowRight className="h-4 w-4" /></Button>
          </div>
          <div className="md:col-span-2 border-l border-border p-6 space-y-4">
            <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider">More Articles</h3>
            {posts.slice(1).map((p, i) => (
              <div key={i} className="space-y-1 pb-3 border-b border-border last:border-0">
                <Badge variant="outline" className="text-[10px]">{p.tag}</Badge>
                <h4 className="font-medium text-sm hover:text-primary cursor-pointer transition-colors">{p.title}</h4>
                <p className="text-xs text-muted-foreground">{p.date}</p>
              </div>
            ))}
          </div>
        </div>
      </BlockWrapper>

      {/* Minimal List */}
      <BlockWrapper title="Article List" description="Compact list-style blog layout.">
        <div className="p-8 space-y-0">
          {posts.map((p, i) => (
            <div key={i} className="flex items-center justify-between py-4 border-b border-border last:border-0 group cursor-pointer">
              <div className="flex items-center gap-4 flex-1">
                <span className="text-xs text-muted-foreground font-mono w-6">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="font-medium group-hover:text-primary transition-colors">{p.title}</h3>
                  <p className="text-xs text-muted-foreground mt-0.5">{p.tag} · {p.readTime} read</p>
                </div>
              </div>
              <span className="text-xs text-muted-foreground">{p.date}</span>
            </div>
          ))}
        </div>
      </BlockWrapper>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   ERROR BLOCKS
═══════════════════════════════════════════════════════════════ */
function ErrorBlocks() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-1">Error Pages</h2>
        <p className="text-muted-foreground">404, 500, and maintenance pages.</p>
      </div>

      <BlockWrapper title="404 Not Found" description="Clean 404 error page.">
        <div className="p-16 text-center space-y-6">
          <p className="text-8xl font-extrabold gradient-text">404</p>
          <h2 className="text-2xl font-bold">Page not found</h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved. Let's get you back on track.
          </p>
          <div className="flex justify-center gap-3">
            <Button variant="glow">Go Home</Button>
            <Button variant="outline">Contact Support</Button>
          </div>
        </div>
      </BlockWrapper>

      <BlockWrapper title="Maintenance" description="Scheduled maintenance page.">
        <div className="p-16 text-center space-y-6 bg-gradient-to-b from-secondary/5 to-transparent">
          <div className="mx-auto h-16 w-16 rounded-full bg-secondary/10 flex items-center justify-center">
            <Settings className="h-8 w-8 text-secondary animate-spin" style={{ animationDuration: "3s" }} />
          </div>
          <h2 className="text-2xl font-bold">Under Maintenance</h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            We're performing scheduled maintenance. We'll be back shortly. Thank you for your patience.
          </p>
          <Card variant="glass" className="inline-flex items-center gap-3 px-6 py-3">
            <Clock className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">Estimated downtime: ~30 minutes</span>
          </Card>
          <div className="flex justify-center gap-3">
            <Button variant="soft">
              <Bell className="h-4 w-4" /> Notify Me
            </Button>
            <Button variant="ghost">Check Status</Button>
          </div>
        </div>
      </BlockWrapper>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   NAVBAR BLOCKS
═══════════════════════════════════════════════════════════════ */
function NavbarBlocks() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-1">Navigation Bars</h2>
        <p className="text-muted-foreground">Header and navigation patterns.</p>
      </div>

      <BlockWrapper title="Standard Nav" description="Classic top navigation with links.">
        <div className="p-4 flex items-center justify-between border-b border-border">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="h-7 w-7 rounded-md bg-primary/20 flex items-center justify-center">
                <Zap className="h-3.5 w-3.5 text-primary" />
              </div>
              <span className="font-bold text-sm">NovaCraft</span>
            </div>
            <nav className="hidden md:flex items-center gap-1">
              {["Products", "Features", "Pricing", "Blog"].map((link) => (
                <a key={link} href="#" className="px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted/50">{link}</a>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm">Sign In</Button>
            <Button variant="glow" size="sm">Get Started</Button>
          </div>
        </div>
      </BlockWrapper>

      <BlockWrapper title="Glass Nav" description="Glassmorphism navigation bar.">
        <div className="p-4 flex items-center justify-between glass rounded-xl mx-4 my-4">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-full bg-primary/20 flex items-center justify-center">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
            </div>
            <span className="font-bold text-sm">Sparkle</span>
          </div>
          <nav className="hidden md:flex items-center gap-0.5">
            {["Home", "About", "Services", "Contact"].map((link, i) => (
              <a key={link} href="#" className={`px-3 py-1.5 text-sm rounded-full transition-colors ${i === 0 ? "bg-primary/10 text-primary" : "text-muted-foreground hover:text-foreground"}`}>{link}</a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon-sm"><Search className="h-4 w-4" /></Button>
            <Button variant="glass-primary" size="sm" shape="pill">Launch App</Button>
          </div>
        </div>
      </BlockWrapper>

      <BlockWrapper title="Centered Nav" description="Navigation with centered logo.">
        <div className="p-4">
          <div className="flex items-center justify-between">
            <nav className="hidden md:flex items-center gap-4">
              {["Features", "Pricing", "Blog"].map((link) => (
                <a key={link} href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{link}</a>
              ))}
            </nav>
            <div className="flex items-center gap-2 mx-auto md:mx-0">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Code className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="font-bold">CodeLab</span>
            </div>
            <div className="hidden md:flex items-center gap-4">
              {["Docs", "Support", "Login"].map((link) => (
                <a key={link} href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{link}</a>
              ))}
            </div>
          </div>
        </div>
      </BlockWrapper>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   BANNER BLOCKS
═══════════════════════════════════════════════════════════════ */
function BannerBlocks() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-1">Banners</h2>
        <p className="text-muted-foreground">Announcement and notification banners.</p>
      </div>

      <BlockWrapper title="Top Announcement" description="Slim announcement bar.">
        <div className="bg-primary/10 px-4 py-2.5 flex items-center justify-center gap-3 text-sm">
          <Sparkles className="h-3.5 w-3.5 text-primary" />
          <span>🎉 <strong>NovaCraft v3.0</strong> is here — packed with new components and themes.</span>
          <Button variant="soft" size="xs" shape="pill">Learn more</Button>
          <button className="ml-2 text-muted-foreground hover:text-foreground"><X className="h-3.5 w-3.5" /></button>
        </div>
      </BlockWrapper>

      <BlockWrapper title="Gradient Banner" description="Eye-catching gradient banner with CTA.">
        <div className="bg-gradient-to-r from-primary/20 via-secondary/10 to-accent/20 p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
              <Megaphone className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="font-semibold">Early Access — Limited Spots</p>
              <p className="text-sm text-muted-foreground">Be the first to try our new AI-powered design tools.</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="glow" size="sm">Join Now</Button>
            <Button variant="ghost" size="sm">Maybe Later</Button>
          </div>
        </div>
      </BlockWrapper>

      <BlockWrapper title="Cookie Consent" description="GDPR-style cookie banner.">
        <div className="p-4 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-border bg-card/80">
          <div className="flex items-center gap-3 flex-1">
            <span className="text-lg">🍪</span>
            <p className="text-sm text-muted-foreground">
              We use cookies to improve your experience. By continuing, you agree to our{" "}
              <a href="#" className="text-primary hover:underline">Privacy Policy</a>.
            </p>
          </div>
          <div className="flex gap-2 shrink-0">
            <Button variant="outline" size="sm">Customize</Button>
            <Button variant="default" size="sm">Accept All</Button>
          </div>
        </div>
      </BlockWrapper>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   E-COMMERCE BLOCKS
═══════════════════════════════════════════════════════════════ */
function EcommerceBlocks() {
  const products = [
    { name: "Wireless Headphones", price: "$129", oldPrice: "$199", tag: "Sale", rating: 4.8 },
    { name: "Mechanical Keyboard", price: "$89", oldPrice: null, tag: "New", rating: 4.6 },
    { name: "USB-C Hub Pro", price: "$59", oldPrice: "$79", tag: "Popular", rating: 4.9 },
    { name: "Desk Lamp LED", price: "$45", oldPrice: null, tag: null, rating: 4.3 },
  ];

  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-1">E-Commerce</h2>
        <p className="text-muted-foreground">Product cards, carts, and shopping layouts.</p>
      </div>

      <BlockWrapper title="Product Grid" description="Standard product card layout.">
        <div className="p-10 grid md:grid-cols-4 gap-4">
          {products.map((p) => (
            <Card key={p.name} variant="interactive" className="overflow-hidden group">
              <div className="h-40 bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center relative">
                <ShoppingCart className="h-10 w-10 text-muted-foreground/30" />
                {p.tag && <Badge variant="glow" className="absolute top-3 left-3 text-[10px]">{p.tag}</Badge>}
              </div>
              <div className="p-4 space-y-2">
                <h3 className="font-medium text-sm">{p.name}</h3>
                <div className="flex items-center gap-1">
                  <Star className="h-3 w-3 fill-primary text-primary" />
                  <span className="text-xs text-muted-foreground">{p.rating}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-bold">{p.price}</span>
                  {p.oldPrice && <span className="text-sm text-muted-foreground line-through">{p.oldPrice}</span>}
                </div>
                <Button variant="soft" size="sm" fullWidth className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <ShoppingCart className="h-3.5 w-3.5" /> Add to Cart
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </BlockWrapper>

      <BlockWrapper title="Product Detail" description="Product detail page header.">
        <div className="p-10 grid md:grid-cols-2 gap-10">
          <div className="rounded-xl bg-gradient-to-br from-muted to-muted/50 h-80 flex items-center justify-center">
            <Image className="h-20 w-20 text-muted-foreground/20" />
          </div>
          <div className="space-y-5">
            <div>
              <Badge variant="dot-success">In Stock</Badge>
              <h2 className="text-2xl font-bold mt-2">Wireless Pro Headphones</h2>
              <div className="flex items-center gap-2 mt-1">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`h-4 w-4 ${i < 4 ? "fill-primary text-primary" : "text-muted-foreground"}`} />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">(128 reviews)</span>
              </div>
            </div>
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-extrabold">$129</span>
              <span className="text-lg text-muted-foreground line-through">$199</span>
              <Badge variant="destructive" className="text-xs">35% OFF</Badge>
            </div>
            <p className="text-sm text-muted-foreground">Premium wireless headphones with active noise cancellation, 30-hour battery life, and studio-quality sound.</p>
            <Separator />
            <div className="space-y-3">
              <Label className="text-sm">Color</Label>
              <div className="flex gap-2">
                {["0 0% 10%", "0 0% 90%", "220 70% 50%"].map((c) => (
                  <button key={c} className="h-8 w-8 rounded-full border-2 border-border hover:border-primary transition-colors" style={{ background: `hsl(${c})` }} />
                ))}
              </div>
            </div>
            <div className="flex gap-3">
              <Button variant="glow" size="lg" className="flex-1">
                <ShoppingCart className="h-4 w-4" /> Add to Cart
              </Button>
              <Button variant="outline" size="lg">
                <Heart className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </BlockWrapper>

      <BlockWrapper title="Shopping Cart" description="Mini cart / checkout summary.">
        <div className="p-8 max-w-md mx-auto space-y-4">
          <h3 className="font-bold text-lg">Your Cart (3)</h3>
          {[
            { name: "Wireless Headphones", qty: 1, price: "$129" },
            { name: "USB-C Hub Pro", qty: 2, price: "$118" },
            { name: "Desk Lamp LED", qty: 1, price: "$45" },
          ].map((item) => (
            <div key={item.name} className="flex items-center justify-between py-3 border-b border-border">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-lg bg-muted flex items-center justify-center">
                  <ShoppingCart className="h-5 w-5 text-muted-foreground/50" />
                </div>
                <div>
                  <p className="text-sm font-medium">{item.name}</p>
                  <p className="text-xs text-muted-foreground">Qty: {item.qty}</p>
                </div>
              </div>
              <span className="font-semibold text-sm">{item.price}</span>
            </div>
          ))}
          <Separator />
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">Subtotal</span>
            <span className="font-bold text-lg">$292</span>
          </div>
          <Button variant="gradient" fullWidth size="lg">Checkout <ArrowRight className="h-4 w-4" /></Button>
          <p className="text-center text-xs text-muted-foreground">Free shipping on orders over $100</p>
        </div>
      </BlockWrapper>
    </div>
  );
}
