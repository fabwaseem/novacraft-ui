import { ReactNode } from "react";
import {
  ArrowRight, Check, Star, ChevronRight, Heart, Download, Play,
  Github, Twitter, Linkedin, Phone, MapPin, Send, Image,
  Search, Bell, Settings, User, Menu, X, Plus, Minus, Clock,
  FileText, Calendar, Activity, Award, Target, Eye,
  Rocket, Coffee, BookOpen, Code, Palette, Layers,
  Monitor, Smartphone, Lock, Zap, Shield, Globe,
  Sparkles, TrendingUp, BarChart3, CreditCard, Users,
  Mail, MessageSquare, ShoppingCart, Upload, Trash2,
  CheckCircle, XCircle, Info, AlertTriangle, Gift,
  Headphones, Map, Wifi, Battery, Cloud, Flame,
  Crown, Gem, Briefcase, GraduationCap, Lightbulb,
  LayoutGrid, ArrowUp, Filter, MoreHorizontal,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

function BlockWrapper({ title, description, children }: { title: string; description: string; children: ReactNode }) {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <div className="rounded-xl border border-border bg-card/30 overflow-hidden">{children}</div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   PROFILE BLOCKS
═══════════════════════════════════════════════════════════════ */
export function ProfileBlocks() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-1">Profile & Account</h2>
        <p className="text-muted-foreground">User profiles, account pages, and settings.</p>
      </div>

      <BlockWrapper title="Profile Card" description="Compact user profile card.">
        <div className="p-10 flex justify-center">
          <Card variant="glass-strong" className="w-full max-w-sm p-6 text-center space-y-4">
            <div className="relative inline-block mx-auto">
              <Avatar size="xl" ring="glow" className="mx-auto">
                <AvatarFallback className="text-xl">JD</AvatarFallback>
              </Avatar>
              <div className="absolute bottom-0 right-0 h-5 w-5 rounded-full bg-primary border-2 border-card" />
            </div>
            <div>
              <h3 className="text-lg font-bold">Jane Doe</h3>
              <p className="text-sm text-muted-foreground">Senior Product Designer</p>
            </div>
            <div className="flex justify-center gap-6">
              {[{ label: "Projects", value: "48" }, { label: "Followers", value: "2.4K" }, { label: "Following", value: "186" }].map((s) => (
                <div key={s.label} className="text-center">
                  <p className="font-bold">{s.value}</p>
                  <p className="text-xs text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </div>
            <div className="flex gap-2">
              <Button variant="glow" className="flex-1">Follow</Button>
              <Button variant="outline"><MessageSquare className="h-4 w-4" /></Button>
            </div>
          </Card>
        </div>
      </BlockWrapper>

      <BlockWrapper title="Profile Header" description="Full-width profile header with banner.">
        <div>
          <div className="h-32 bg-gradient-to-r from-primary/20 via-secondary/15 to-accent/20" />
          <div className="px-8 pb-6">
            <div className="flex items-end gap-4 -mt-10">
              <Avatar size="xl" ring="primary" className="border-4 border-card">
                <AvatarFallback className="text-xl">AK</AvatarFallback>
              </Avatar>
              <div className="flex-1 pt-12">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-bold flex items-center gap-2">Alex Kim <Badge variant="soft" className="text-[10px]">PRO</Badge></h2>
                    <p className="text-sm text-muted-foreground">@alexkim · Full-Stack Developer · San Francisco</p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm"><Settings className="h-3.5 w-3.5" /></Button>
                    <Button variant="glow" size="sm">Edit Profile</Button>
                  </div>
                </div>
              </div>
            </div>
            <p className="mt-4 text-sm text-muted-foreground max-w-2xl">
              Building the future of web development. Open source contributor. Coffee enthusiast. ☕
            </p>
            <div className="flex gap-6 mt-4">
              {[{ label: "Repositories", val: "64" }, { label: "Stars", val: "1.2K" }, { label: "Contributions", val: "847" }].map((s) => (
                <div key={s.label} className="text-sm">
                  <span className="font-bold">{s.val}</span>{" "}
                  <span className="text-muted-foreground">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </BlockWrapper>

      <BlockWrapper title="Account Settings" description="Profile edit form.">
        <div className="p-8 max-w-lg space-y-6">
          <div>
            <h3 className="font-semibold">Personal Information</h3>
            <p className="text-sm text-muted-foreground">Update your profile details.</p>
          </div>
          <div className="flex items-center gap-4">
            <Avatar size="lg"><AvatarFallback>JD</AvatarFallback></Avatar>
            <div className="space-y-1">
              <Button variant="soft" size="sm"><Upload className="h-3.5 w-3.5" /> Upload Photo</Button>
              <p className="text-xs text-muted-foreground">JPG, PNG. Max 2MB.</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2"><Label>First Name</Label><Input variant="filled" defaultValue="Jane" /></div>
            <div className="space-y-2"><Label>Last Name</Label><Input variant="filled" defaultValue="Doe" /></div>
          </div>
          <div className="space-y-2"><Label>Email</Label><Input variant="filled" defaultValue="jane@example.com" /></div>
          <div className="space-y-2"><Label>Bio</Label><Textarea variant="filled" defaultValue="Senior Product Designer at NovaCraft" /></div>
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
   NOTIFICATION BLOCKS
═══════════════════════════════════════════════════════════════ */
export function NotificationBlocks() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-1">Notifications</h2>
        <p className="text-muted-foreground">Notification panels, toasts, and alerts.</p>
      </div>

      <BlockWrapper title="Notification Panel" description="Dropdown notification list.">
        <div className="p-6 flex justify-center">
          <Card variant="glass-strong" className="w-full max-w-sm overflow-hidden">
            <div className="p-4 border-b border-border flex items-center justify-between">
              <h3 className="font-semibold text-sm">Notifications</h3>
              <Badge variant="glow" className="text-[10px]">3 new</Badge>
            </div>
            <div className="divide-y divide-border">
              {[
                { icon: CheckCircle, color: "text-primary", title: "Deployment successful", desc: "main branch deployed to production", time: "2m ago", unread: true },
                { icon: MessageSquare, color: "text-secondary", title: "New comment", desc: "Sarah commented on your PR #42", time: "15m ago", unread: true },
                { icon: Users, color: "text-accent", title: "Team invitation", desc: "You were added to Design Team", time: "1h ago", unread: true },
                { icon: Star, color: "text-yellow-500", title: "New star", desc: "Someone starred your repository", time: "3h ago", unread: false },
                { icon: AlertTriangle, color: "text-destructive", title: "Build failed", desc: "CI pipeline failed on feature branch", time: "5h ago", unread: false },
              ].map((n, i) => (
                <div key={i} className={`p-3 flex gap-3 hover:bg-muted/30 transition-colors cursor-pointer ${n.unread ? "bg-primary/5" : ""}`}>
                  <div className={`h-8 w-8 rounded-full bg-muted flex items-center justify-center shrink-0`}>
                    <n.icon className={`h-4 w-4 ${n.color}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium">{n.title}</p>
                    <p className="text-xs text-muted-foreground truncate">{n.desc}</p>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className="text-[10px] text-muted-foreground">{n.time}</span>
                    {n.unread && <div className="h-2 w-2 rounded-full bg-primary" />}
                  </div>
                </div>
              ))}
            </div>
            <div className="p-3 border-t border-border text-center">
              <Button variant="ghost" size="sm" className="text-xs w-full">View All Notifications</Button>
            </div>
          </Card>
        </div>
      </BlockWrapper>

      <BlockWrapper title="Toast Notifications" description="Various toast/alert styles.">
        <div className="p-8 space-y-3 max-w-md mx-auto">
          {[
            { icon: CheckCircle, bg: "bg-primary/10", border: "border-primary/30", color: "text-primary", title: "Success!", desc: "Your changes have been saved." },
            { icon: Info, bg: "bg-secondary/10", border: "border-secondary/30", color: "text-secondary", title: "Info", desc: "A new version is available." },
            { icon: AlertTriangle, bg: "bg-yellow-500/10", border: "border-yellow-500/30", color: "text-yellow-500", title: "Warning", desc: "Your trial expires in 3 days." },
            { icon: XCircle, bg: "bg-destructive/10", border: "border-destructive/30", color: "text-destructive", title: "Error", desc: "Failed to process payment." },
          ].map((t, i) => (
            <div key={i} className={`flex items-start gap-3 p-4 rounded-lg border ${t.bg} ${t.border}`}>
              <t.icon className={`h-5 w-5 ${t.color} shrink-0 mt-0.5`} />
              <div className="flex-1">
                <p className="text-sm font-semibold">{t.title}</p>
                <p className="text-xs text-muted-foreground">{t.desc}</p>
              </div>
              <button type="button" className="text-muted-foreground hover:text-foreground" aria-label={`Dismiss ${t.title} notification`}><X className="h-4 w-4" /></button>
            </div>
          ))}
        </div>
      </BlockWrapper>

      <BlockWrapper title="Activity Feed" description="Real-time activity log.">
        <div className="p-6 max-w-md mx-auto">
          <h3 className="font-semibold mb-4">Recent Activity</h3>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />
            {[
              { icon: CheckCircle, color: "bg-primary", title: "Deployed to production", time: "Just now" },
              { icon: Code, color: "bg-secondary", title: "Merged PR #127", time: "25 min ago" },
              { icon: MessageSquare, color: "bg-accent", title: "Code review completed", time: "1 hour ago" },
              { icon: Users, color: "bg-primary", title: "Added to Project Alpha", time: "3 hours ago" },
              { icon: Star, color: "bg-secondary", title: "Reached 1K stars", time: "Yesterday" },
            ].map((a, i) => (
              <div key={i} className="flex gap-4 pb-6 relative">
                <div className={`h-8 w-8 rounded-full ${a.color} flex items-center justify-center shrink-0 z-10 border-2 border-card`}>
                  <a.icon className="h-3.5 w-3.5 text-primary-foreground" />
                </div>
                <div className="pt-1">
                  <p className="text-sm font-medium">{a.title}</p>
                  <p className="text-xs text-muted-foreground">{a.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </BlockWrapper>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   ONBOARDING BLOCKS
═══════════════════════════════════════════════════════════════ */
export function OnboardingBlocks() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-1">Onboarding</h2>
        <p className="text-muted-foreground">Welcome screens, wizards, and setup flows.</p>
      </div>

      <BlockWrapper title="Welcome Screen" description="First-time user welcome.">
        <div className="p-12 text-center space-y-6">
          <div className="mx-auto h-16 w-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
            <Sparkles className="h-8 w-8 text-primary-foreground" />
          </div>
          <h2 className="text-3xl font-bold">Welcome to NovaCraft! 🎉</h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Let's get you set up in just a few steps. It'll only take a minute.
          </p>
          <Button variant="glow" size="lg">Let's Go <ArrowRight className="h-4 w-4" /></Button>
          <p className="text-xs text-muted-foreground">You can always change these later in settings.</p>
        </div>
      </BlockWrapper>

      <BlockWrapper title="Step Wizard" description="Multi-step onboarding progress.">
        <div className="p-8 space-y-8">
          {/* Progress steps */}
          <div className="flex items-center justify-between max-w-lg mx-auto">
            {["Account", "Profile", "Preferences", "Done"].map((step, i) => (
              <div key={step} className="flex items-center gap-2">
                <div className={`h-8 w-8 rounded-full flex items-center justify-center text-xs font-bold ${
                  i < 2 ? "bg-primary text-primary-foreground" : i === 2 ? "border-2 border-primary text-primary" : "border border-border text-muted-foreground"
                }`}>
                  {i < 2 ? <Check className="h-4 w-4" /> : i + 1}
                </div>
                {i < 3 && <div className={`h-0.5 w-12 ${i < 2 ? "bg-primary" : "bg-border"}`} />}
              </div>
            ))}
          </div>
          {/* Current step */}
          <div className="max-w-md mx-auto space-y-4">
            <div>
              <h3 className="text-lg font-bold">Set your preferences</h3>
              <p className="text-sm text-muted-foreground">Customize your experience.</p>
            </div>
            <div className="space-y-4">
              {[
                { label: "Enable email notifications", desc: "Get updates about your projects" },
                { label: "Weekly digest", desc: "Summary of activity each week" },
                { label: "Dark mode by default", desc: "Use dark theme across the app" },
              ].map((pref) => (
                <div key={pref.label} className="flex items-center justify-between py-2">
                  <div>
                    <p className="text-sm font-medium">{pref.label}</p>
                    <p className="text-xs text-muted-foreground">{pref.desc}</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              ))}
            </div>
            <div className="flex justify-between pt-4">
              <Button variant="ghost">Back</Button>
              <Button variant="glow">Continue <ArrowRight className="h-4 w-4" /></Button>
            </div>
          </div>
        </div>
      </BlockWrapper>

      <BlockWrapper title="Feature Tour" description="Highlight key features for new users.">
        <div className="p-10 space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold">Here's what you can do</h2>
            <p className="text-muted-foreground">Explore the key features of your new workspace.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Rocket, title: "Quick Deploy", desc: "Ship to production in one click with zero-config deployments.", color: "text-primary" },
              { icon: Users, title: "Team Collaboration", desc: "Invite your team and work together in real-time.", color: "text-secondary" },
              { icon: BarChart3, title: "Analytics", desc: "Track performance with built-in analytics dashboards.", color: "text-accent" },
            ].map((f) => (
              <Card key={f.title} variant="glass" className="p-6 text-center space-y-3">
                <div className="h-12 w-12 rounded-xl bg-muted flex items-center justify-center mx-auto">
                  <f.icon className={`h-6 w-6 ${f.color}`} />
                </div>
                <h3 className="font-semibold">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Button variant="gradient" size="lg">Start Exploring</Button>
          </div>
        </div>
      </BlockWrapper>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   CHANGELOG BLOCKS
═══════════════════════════════════════════════════════════════ */
export function ChangelogBlocks() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-1">Changelog</h2>
        <p className="text-muted-foreground">Release notes and update logs.</p>
      </div>

      <BlockWrapper title="Timeline Changelog" description="Vertical timeline of releases.">
        <div className="p-8 max-w-2xl mx-auto">
          {[
            { version: "v3.2.0", date: "Mar 5, 2024", tag: "Latest", items: ["Added 20 new component variants", "Dark mode improvements", "Performance optimizations"], breaking: false },
            { version: "v3.1.0", date: "Feb 20, 2024", tag: null, items: ["New Blocks page with 50+ sections", "Theme Studio with live preview", "Export CSS variables"], breaking: false },
            { version: "v3.0.0", date: "Feb 1, 2024", tag: "Major", items: ["Complete design system overhaul", "CVA-based variant system", "New glow and glass effects"], breaking: true },
          ].map((release, i) => (
            <div key={release.version} className="flex gap-4 pb-8 relative">
              <div className="flex flex-col items-center">
                <div className={`h-3 w-3 rounded-full ${i === 0 ? "bg-primary glow-primary" : "bg-border"} shrink-0 mt-1.5`} />
                {i < 2 && <div className="w-px flex-1 bg-border mt-1" />}
              </div>
              <div className="space-y-2 flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-bold">{release.version}</h3>
                  {release.tag && <Badge variant={release.tag === "Latest" ? "glow" : "soft-secondary"} className="text-[10px]">{release.tag}</Badge>}
                  {release.breaking && <Badge variant="destructive" className="text-[10px]">Breaking</Badge>}
                </div>
                <p className="text-xs text-muted-foreground">{release.date}</p>
                <ul className="space-y-1">
                  {release.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="h-3 w-3 text-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </BlockWrapper>

      <BlockWrapper title="Release Cards" description="Card-based release notes.">
        <div className="p-8 space-y-4">
          {[
            { version: "v3.2.0", date: "Mar 5, 2024", title: "Component Expansion Pack", desc: "20 new variants across Button, Card, Badge, and Input components. Plus dark mode refinements.", category: "Feature" },
            { version: "v3.1.0", date: "Feb 20, 2024", title: "Blocks & Theme Studio", desc: "Introducing Blocks — 50+ pre-built UI sections. Theme Studio for real-time customization.", category: "Feature" },
            { version: "v3.0.1", date: "Feb 5, 2024", title: "Bug Fixes", desc: "Fixed glow effect rendering on Safari. Improved checkbox accessibility.", category: "Fix" },
          ].map((r) => (
            <Card key={r.version} variant="interactive" className="p-5">
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Badge variant={r.category === "Feature" ? "soft" : "soft-secondary"} className="text-[10px]">{r.category}</Badge>
                    <span className="text-xs text-muted-foreground font-mono">{r.version}</span>
                    <span className="text-xs text-muted-foreground">· {r.date}</span>
                  </div>
                  <h3 className="font-semibold">{r.title}</h3>
                  <p className="text-sm text-muted-foreground">{r.desc}</p>
                </div>
                <Button variant="ghost" size="sm">Details <ChevronRight className="h-3 w-3" /></Button>
              </div>
            </Card>
          ))}
        </div>
      </BlockWrapper>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   GALLERY / PORTFOLIO BLOCKS
═══════════════════════════════════════════════════════════════ */
export function GalleryBlocks() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-1">Gallery / Portfolio</h2>
        <p className="text-muted-foreground">Image galleries and portfolio layouts.</p>
      </div>

      <BlockWrapper title="Portfolio Grid" description="Project showcase grid.">
        <div className="p-8 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">My Work</h2>
            <div className="flex gap-1">
              {["All", "Web", "Mobile", "Brand"].map((f, i) => (
                <Button key={f} variant={i === 0 ? "soft" : "ghost"} size="sm">{f}</Button>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { title: "E-Commerce Redesign", tag: "Web" },
              { title: "Finance App", tag: "Mobile" },
              { title: "Brand Identity", tag: "Brand" },
              { title: "Dashboard UI", tag: "Web" },
              { title: "Health Tracker", tag: "Mobile" },
              { title: "Marketing Site", tag: "Web" },
            ].map((p) => (
              <div key={p.title} className="group cursor-pointer">
                <div className="rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 h-40 flex items-center justify-center relative overflow-hidden">
                  <Image className="h-10 w-10 text-muted-foreground/20" />
                  <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Button variant="glow" size="sm">View Project</Button>
                  </div>
                </div>
                <div className="mt-2">
                  <p className="font-medium text-sm">{p.title}</p>
                  <p className="text-xs text-muted-foreground">{p.tag}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </BlockWrapper>

      <BlockWrapper title="Case Study Card" description="Detailed project case study.">
        <div className="grid md:grid-cols-2 gap-0">
          <div className="bg-gradient-to-br from-secondary/10 to-primary/10 h-64 md:h-auto flex items-center justify-center">
            <Image className="h-16 w-16 text-muted-foreground/20" />
          </div>
          <div className="p-8 space-y-4">
            <Badge variant="soft-secondary">Case Study</Badge>
            <h3 className="text-2xl font-bold">FinTrack Dashboard</h3>
            <p className="text-sm text-muted-foreground">A complete redesign of a financial analytics platform, improving user engagement by 40% and reducing bounce rate by 25%.</p>
            <div className="grid grid-cols-3 gap-4">
              {[{ label: "Duration", value: "8 weeks" }, { label: "Team Size", value: "4 people" }, { label: "Impact", value: "+40% engagement" }].map((s) => (
                <div key={s.label}>
                  <p className="text-xs text-muted-foreground">{s.label}</p>
                  <p className="text-sm font-semibold">{s.value}</p>
                </div>
              ))}
            </div>
            <Button variant="soft">Read Case Study <ArrowRight className="h-4 w-4" /></Button>
          </div>
        </div>
      </BlockWrapper>

      <BlockWrapper title="Masonry Gallery" description="Pinterest-style image grid.">
        <div className="p-8 columns-3 gap-4 space-y-4">
          {[100, 160, 120, 180, 130, 150, 110, 170, 140].map((h, i) => (
            <div key={i} className="rounded-xl bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center break-inside-avoid overflow-hidden group cursor-pointer" style={{ height: `${h}px` }}>
              <Image className="h-8 w-8 text-muted-foreground/15 group-hover:text-primary/30 transition-colors" />
            </div>
          ))}
        </div>
      </BlockWrapper>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   INTEGRATIONS BLOCKS
═══════════════════════════════════════════════════════════════ */
export function IntegrationBlocks() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-1">Integrations</h2>
        <p className="text-muted-foreground">Integration grids and connection screens.</p>
      </div>

      <BlockWrapper title="Integration Grid" description="Available integrations with status.">
        <div className="p-8 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Integrations</h2>
            <Input variant="glass" placeholder="Search integrations..." className="w-64" />
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { name: "GitHub", desc: "Sync repositories and deploy automatically", icon: Github, connected: true },
              { name: "Slack", desc: "Get notifications in your channels", icon: MessageSquare, connected: true },
              { name: "Stripe", desc: "Accept payments and manage subscriptions", icon: CreditCard, connected: false },
              { name: "Google Cloud", desc: "Cloud infrastructure and services", icon: Cloud, connected: false },
              { name: "Figma", desc: "Import designs directly from Figma", icon: Palette, connected: true },
              { name: "Discord", desc: "Community alerts and bot notifications", icon: Headphones, connected: false },
            ].map((int) => (
              <Card key={int.name} variant="interactive" className="p-5">
                <div className="flex items-start justify-between mb-3">
                  <div className="h-10 w-10 rounded-lg bg-muted flex items-center justify-center">
                    <int.icon className="h-5 w-5 text-foreground" />
                  </div>
                  {int.connected ? (
                    <Badge variant="dot-success">Connected</Badge>
                  ) : (
                    <Button variant="outline" size="xs">Connect</Button>
                  )}
                </div>
                <h3 className="font-semibold text-sm">{int.name}</h3>
                <p className="text-xs text-muted-foreground mt-1">{int.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </BlockWrapper>

      <BlockWrapper title="Connected Apps" description="Manage connected applications.">
        <div className="p-6 space-y-0">
          {[
            { name: "GitHub", scope: "Read & Write", lastSync: "2 min ago", icon: Github },
            { name: "Slack", scope: "Notifications", lastSync: "5 min ago", icon: MessageSquare },
            { name: "Figma", scope: "Read Only", lastSync: "1 hour ago", icon: Palette },
          ].map((app) => (
            <div key={app.name} className="flex items-center justify-between py-4 border-b border-border last:border-0">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-lg bg-muted flex items-center justify-center">
                  <app.icon className="h-4.5 w-4.5 text-foreground" />
                </div>
                <div>
                  <p className="text-sm font-medium">{app.name}</p>
                  <p className="text-xs text-muted-foreground">{app.scope} · Synced {app.lastSync}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="ghost" size="sm">Configure</Button>
                <Button variant="ghost" size="icon-sm" className="text-destructive hover:text-destructive"><Trash2 className="h-3.5 w-3.5" /></Button>
              </div>
            </div>
          ))}
        </div>
      </BlockWrapper>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   EMPTY STATES
═══════════════════════════════════════════════════════════════ */
export function EmptyStateBlocks() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-1">Empty States</h2>
        <p className="text-muted-foreground">Placeholder screens when there's no data.</p>
      </div>

      <BlockWrapper title="No Results" description="Empty search results.">
        <div className="p-16 text-center space-y-4">
          <div className="mx-auto h-16 w-16 rounded-full bg-muted flex items-center justify-center">
            <Search className="h-8 w-8 text-muted-foreground/50" />
          </div>
          <h3 className="text-lg font-semibold">No results found</h3>
          <p className="text-sm text-muted-foreground max-w-sm mx-auto">
            We couldn't find anything matching your search. Try different keywords or check for typos.
          </p>
          <Button variant="soft">Clear Search</Button>
        </div>
      </BlockWrapper>

      <BlockWrapper title="Empty Project" description="No projects yet.">
        <div className="p-16 text-center space-y-4">
          <div className="mx-auto h-16 w-16 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
            <Layers className="h-8 w-8 text-primary/50" />
          </div>
          <h3 className="text-lg font-semibold">No projects yet</h3>
          <p className="text-sm text-muted-foreground max-w-sm mx-auto">
            Create your first project to get started. It only takes a minute.
          </p>
          <Button variant="glow"><Plus className="h-4 w-4" /> Create Project</Button>
        </div>
      </BlockWrapper>

      <BlockWrapper title="No Notifications" description="All caught up.">
        <div className="p-16 text-center space-y-4">
          <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
            <Bell className="h-8 w-8 text-primary/40" />
          </div>
          <h3 className="text-lg font-semibold">You're all caught up! 🎉</h3>
          <p className="text-sm text-muted-foreground max-w-sm mx-auto">
            No new notifications. We'll let you know when something needs your attention.
          </p>
        </div>
      </BlockWrapper>

      <BlockWrapper title="Upload Area" description="File upload empty state.">
        <div className="p-10 flex justify-center">
          <div className="w-full max-w-md border-2 border-dashed border-border rounded-xl p-12 text-center space-y-4 hover:border-primary/50 transition-colors cursor-pointer">
            <div className="mx-auto h-12 w-12 rounded-full bg-muted flex items-center justify-center">
              <Upload className="h-6 w-6 text-muted-foreground" />
            </div>
            <div>
              <p className="font-medium">Drop files here or <span className="text-primary">browse</span></p>
              <p className="text-xs text-muted-foreground mt-1">PNG, JPG, GIF up to 10MB</p>
            </div>
          </div>
        </div>
      </BlockWrapper>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   METRICS / ANALYTICS BLOCKS
═══════════════════════════════════════════════════════════════ */
export function MetricsBlocks() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-1">Metrics & Analytics</h2>
        <p className="text-muted-foreground">Data-rich analytics and reporting sections.</p>
      </div>

      <BlockWrapper title="KPI Dashboard" description="Key performance indicators overview.">
        <div className="p-6 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold">Overview</h3>
            <div className="flex gap-1">
              {["24h", "7d", "30d", "90d"].map((p, i) => (
                <Button key={p} variant={i === 2 ? "soft" : "ghost"} size="xs">{p}</Button>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Total Users", value: "24,589", change: "+12.5%", up: true, icon: Users },
              { label: "Revenue", value: "$89,400", change: "+8.2%", up: true, icon: TrendingUp },
              { label: "Bounce Rate", value: "32.4%", change: "-4.1%", up: false, icon: Activity },
              { label: "Avg Session", value: "4m 32s", change: "+15.3%", up: true, icon: Clock },
            ].map((kpi) => (
              <Card key={kpi.label} variant="glass" className="p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <kpi.icon className="h-4 w-4 text-muted-foreground" />
                  <span className={`text-xs font-medium ${kpi.up ? "text-primary" : "text-destructive"}`}>
                    {kpi.up ? <ArrowUp className="h-3 w-3 inline" /> : null} {kpi.change}
                  </span>
                </div>
                <p className="text-2xl font-bold">{kpi.value}</p>
                <p className="text-xs text-muted-foreground">{kpi.label}</p>
              </Card>
            ))}
          </div>
          {/* Mini chart placeholder */}
          <Card variant="outline" className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-semibold text-sm">Revenue Over Time</h4>
              <Button variant="ghost" size="sm"><Filter className="h-3.5 w-3.5" /> Filter</Button>
            </div>
            <div className="h-40 flex items-end justify-between gap-1 px-2">
              {[40, 55, 35, 70, 60, 80, 45, 90, 65, 75, 85, 95].map((h, i) => (
                <div key={i} className="flex-1 bg-gradient-to-t from-primary/40 to-primary/80 rounded-t-sm transition-all hover:from-primary/60 hover:to-primary" style={{ height: `${h}%` }} />
              ))}
            </div>
            <div className="flex justify-between mt-2 px-2">
              {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map((m) => (
                <span key={m} className="text-[10px] text-muted-foreground flex-1 text-center">{m}</span>
              ))}
            </div>
          </Card>
        </div>
      </BlockWrapper>

      <BlockWrapper title="Leaderboard" description="Rankings and scoreboards.">
        <div className="p-6">
          <h3 className="font-semibold mb-4">Top Contributors</h3>
          <div className="space-y-2">
            {[
              { name: "Sarah Chen", score: "1,284", initials: "SC", rank: 1 },
              { name: "Alex Rivera", score: "1,102", initials: "AR", rank: 2 },
              { name: "Jordan Lee", score: "987", initials: "JL", rank: 3 },
              { name: "Maya Patel", score: "854", initials: "MP", rank: 4 },
              { name: "David Kim", score: "721", initials: "DK", rank: 5 },
            ].map((u) => (
              <div key={u.name} className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/30 transition-colors">
                <span className={`text-sm font-bold w-6 text-center ${u.rank <= 3 ? "text-primary" : "text-muted-foreground"}`}>
                  {u.rank <= 3 ? ["🥇", "🥈", "🥉"][u.rank - 1] : `#${u.rank}`}
                </span>
                <Avatar size="sm"><AvatarFallback className="text-xs">{u.initials}</AvatarFallback></Avatar>
                <span className="flex-1 font-medium text-sm">{u.name}</span>
                <span className="text-sm font-mono text-muted-foreground">{u.score} pts</span>
              </div>
            ))}
          </div>
        </div>
      </BlockWrapper>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SOCIAL / FEED BLOCKS
═══════════════════════════════════════════════════════════════ */
export function SocialBlocks() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-1">Social / Feed</h2>
        <p className="text-muted-foreground">Social media cards and feed layouts.</p>
      </div>

      <BlockWrapper title="Post Card" description="Social media style post.">
        <div className="p-6 flex justify-center">
          <Card variant="glass-strong" className="w-full max-w-md p-0 overflow-hidden">
            <div className="p-4 flex items-center gap-3">
              <Avatar size="sm" ring="primary"><AvatarFallback className="text-xs">SC</AvatarFallback></Avatar>
              <div className="flex-1">
                <p className="text-sm font-semibold">Sarah Chen</p>
                <p className="text-xs text-muted-foreground">2 hours ago</p>
              </div>
              <Button variant="ghost" size="icon-sm"><MoreHorizontal className="h-4 w-4" /></Button>
            </div>
            <div className="h-56 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
              <Image className="h-12 w-12 text-muted-foreground/20" />
            </div>
            <div className="p-4 space-y-3">
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-destructive transition-colors">
                  <Heart className="h-4 w-4" /> 234
                </button>
                <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <MessageSquare className="h-4 w-4" /> 18
                </button>
                <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <Send className="h-4 w-4" />
                </button>
              </div>
              <p className="text-sm">
                <span className="font-semibold">Sarah Chen</span>{" "}
                <span className="text-muted-foreground">Just shipped the new design system! Check out the component library 🚀✨</span>
              </p>
            </div>
          </Card>
        </div>
      </BlockWrapper>

      <BlockWrapper title="Comment Thread" description="Nested comment discussion.">
        <div className="p-6 max-w-md mx-auto space-y-4">
          {[
            { name: "Alex Rivera", initials: "AR", time: "1h", comment: "This looks amazing! Love the glow effects.", likes: 12, replies: [
              { name: "Sarah Chen", initials: "SC", time: "45m", comment: "Thanks Alex! We spent a lot of time on the light physics.", likes: 3 },
            ]},
            { name: "Jordan Lee", initials: "JL", time: "30m", comment: "The CVA variant system is so clean. Great DX.", likes: 8, replies: [] },
          ].map((c, i) => (
            <div key={i} className="space-y-3">
              <div className="flex gap-3">
                <Avatar size="sm"><AvatarFallback className="text-xs">{c.initials}</AvatarFallback></Avatar>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold">{c.name}</span>
                    <span className="text-xs text-muted-foreground">{c.time}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">{c.comment}</p>
                  <div className="flex items-center gap-3 mt-2">
                    <button className="text-xs text-muted-foreground hover:text-primary flex items-center gap-1"><Heart className="h-3 w-3" /> {c.likes}</button>
                    <button className="text-xs text-muted-foreground hover:text-primary">Reply</button>
                  </div>
                </div>
              </div>
              {c.replies.map((r, j) => (
                <div key={j} className="flex gap-3 ml-10">
                  <Avatar size="xs"><AvatarFallback className="text-[9px]">{r.initials}</AvatarFallback></Avatar>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold">{r.name}</span>
                      <span className="text-xs text-muted-foreground">{r.time}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">{r.comment}</p>
                    <button className="text-xs text-muted-foreground hover:text-primary flex items-center gap-1 mt-1"><Heart className="h-3 w-3" /> {r.likes}</button>
                  </div>
                </div>
              ))}
            </div>
          ))}
          <div className="flex gap-2 pt-2 border-t border-border">
            <Avatar size="sm"><AvatarFallback className="text-xs">ME</AvatarFallback></Avatar>
            <Input variant="glass" placeholder="Write a comment..." className="flex-1" />
            <Button variant="soft" size="icon" aria-label="Send comment"><Send className="h-4 w-4" /></Button>
          </div>
        </div>
      </BlockWrapper>

      <BlockWrapper title="User List" description="Follow suggestions.">
        <div className="p-6 max-w-md mx-auto">
          <h3 className="font-semibold mb-4">Suggested for you</h3>
          {[
            { name: "Maya Patel", handle: "@mayapatel", initials: "MP", mutual: 12 },
            { name: "David Kim", handle: "@davidkim", initials: "DK", mutual: 8 },
            { name: "Emma Wilson", handle: "@emmaw", initials: "EW", mutual: 5 },
            { name: "Chris Taylor", handle: "@christaylor", initials: "CT", mutual: 3 },
          ].map((u) => (
            <div key={u.name} className="flex items-center justify-between py-3 border-b border-border last:border-0">
              <div className="flex items-center gap-3">
                <Avatar size="sm"><AvatarFallback className="text-xs">{u.initials}</AvatarFallback></Avatar>
                <div>
                  <p className="text-sm font-medium">{u.name}</p>
                  <p className="text-xs text-muted-foreground">{u.handle} · {u.mutual} mutual</p>
                </div>
              </div>
              <Button variant="soft" size="sm">Follow</Button>
            </div>
          ))}
        </div>
      </BlockWrapper>
    </div>
  );
}
