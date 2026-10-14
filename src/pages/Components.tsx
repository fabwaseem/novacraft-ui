import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  RectangleHorizontal, TextCursorInput, ToggleLeft, SlidersHorizontal,
  CheckSquare, CircleDot, Square, Type, LayoutGrid, Layers,
  Table2, Award, UserCircle, BarChart3, Activity,
  Bell, AlertTriangle, MessageSquare, PanelTop, Sparkles,
  ChevronRight, List, Image, Calendar as CalendarIcon, GalleryHorizontal,
  PieChart, Command as CommandIcon, MousePointerClick, GripVertical,
  PanelLeft, ChevronsUpDown, Keyboard, Tag, AlignLeft,
  Navigation, ChevronLeft, Maximize2, ScrollText, SplitSquareVertical,
  Minus, PanelRight, SidebarIcon, Box, Loader2, ToggleRight,
  Rows, TypeIcon, Hash, Menu, FileText, CircleDashed, FormInput,
  ArrowUpDown, ChevronDown,
  type LucideIcon,
} from "lucide-react";
import { ComponentPreview } from "@/components/ComponentPreview";
import { CodeBlock } from "@/components/CodeBlock";
import { PropsTable } from "@/components/PropsTable";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { toast } from "sonner";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Calendar } from "@/components/ui/calendar";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger } from "@/components/ui/context-menu";
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator } from "@/components/ui/input-otp";
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarTrigger } from "@/components/ui/menubar";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Skeleton } from "@/components/ui/skeleton";
import { Toggle } from "@/components/ui/toggle";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Spinner } from "@/components/ui/spinner";
import { Kbd } from "@/components/ui/kbd";

interface ComponentDef {
  id: string;
  name: string;
  icon: LucideIcon;
  category: string;
  description: string;
  preview: React.ReactNode;
  code: string;
  props: { name: string; type: string; default?: string; description: string }[];
}

const components: ComponentDef[] = [
  // ═══════════════ FORM INPUTS ═══════════════
  {
    id: "button", name: "Button", icon: RectangleHorizontal, category: "Form Inputs",
    description: "Highly customizable button with 15+ variants, 9 sizes, shapes, loading state, and icon slots.",
    preview: (
      <div className="space-y-6 w-full">
        <div>
          <p className="text-xs text-muted-foreground mb-2 font-medium uppercase tracking-wider">Variants</p>
          <div className="flex gap-2 flex-wrap">
            <Button>Default</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
            <Button variant="flat">Flat</Button>
          </div>
        </div>
        <div>
          <p className="text-xs text-muted-foreground mb-2 font-medium uppercase tracking-wider">Soft Variants</p>
          <div className="flex gap-2 flex-wrap">
            <Button variant="soft">Soft</Button>
            <Button variant="soft-secondary">Soft Secondary</Button>
            <Button variant="soft-destructive">Soft Destructive</Button>
            <Button variant="soft-accent">Soft Accent</Button>
          </div>
        </div>
        <div>
          <p className="text-xs text-muted-foreground mb-2 font-medium uppercase tracking-wider">Glow & Glass</p>
          <div className="flex gap-2 flex-wrap">
            <Button variant="glow">Glow</Button>
            <Button variant="glow-secondary">Glow Secondary</Button>
            <Button variant="glow-accent">Glow Accent</Button>
            <Button variant="outline-glow">Outline Glow</Button>
            <Button variant="glass">Glass</Button>
            <Button variant="glass-primary">Glass Primary</Button>
            <Button variant="gradient">Gradient</Button>
          </div>
        </div>
        <div>
          <p className="text-xs text-muted-foreground mb-2 font-medium uppercase tracking-wider">Sizes</p>
          <div className="flex gap-2 flex-wrap items-center">
            <Button size="xs">Extra Small</Button>
            <Button size="sm">Small</Button>
            <Button size="default">Default</Button>
            <Button size="lg">Large</Button>
            <Button size="xl">Extra Large</Button>
            <Button size="2xl">2XL</Button>
          </div>
        </div>
        <div>
          <p className="text-xs text-muted-foreground mb-2 font-medium uppercase tracking-wider">Shapes</p>
          <div className="flex gap-2 flex-wrap items-center">
            <Button shape="default">Default</Button>
            <Button shape="pill">Pill Shape</Button>
            <Button shape="square">Square</Button>
            <Button shape="rounded">Rounded</Button>
          </div>
        </div>
        <div>
          <p className="text-xs text-muted-foreground mb-2 font-medium uppercase tracking-wider">States & Features</p>
          <div className="flex gap-2 flex-wrap items-center">
            <Button loading>Loading</Button>
            <Button leftIcon={<Sparkles className="h-4 w-4" />}>With Icon</Button>
            <Button variant="outline" rightIcon={<ChevronRight className="h-4 w-4" />}>Continue</Button>
            <Button disabled>Disabled</Button>
            <Button fullWidth variant="soft" className="max-w-xs">Full Width</Button>
          </div>
        </div>
      </div>
    ),
    code: `import { Button } from "@/components/ui/button"

// Variants: default, outline, secondary, destructive, ghost, link,
//   gradient, soft, soft-secondary, soft-destructive, soft-accent,
//   glow, glow-secondary, glow-accent, outline-glow,
//   glass, glass-primary, flat

<Button variant="glow">Glow Button</Button>
<Button variant="gradient" shape="pill" size="lg">Gradient Pill</Button>
<Button variant="soft-accent" leftIcon={<Star />}>With Icon</Button>
<Button loading>Loading</Button>
<Button variant="glass" fullWidth>Full Width Glass</Button>`,
    props: [
      { name: "variant", type: '"default" | "outline" | "secondary" | "destructive" | "ghost" | "link" | "gradient" | "soft" | "soft-secondary" | "soft-destructive" | "soft-accent" | "glow" | "glow-secondary" | "glow-accent" | "outline-glow" | "glass" | "glass-primary" | "flat"', default: '"default"', description: "Visual style variant" },
      { name: "size", type: '"xs" | "sm" | "default" | "lg" | "xl" | "2xl" | "icon" | "icon-sm" | "icon-lg"', default: '"default"', description: "Button size" },
      { name: "shape", type: '"default" | "pill" | "square" | "rounded"', default: '"default"', description: "Border radius style" },
      { name: "fullWidth", type: "boolean", default: "false", description: "Stretch to full width" },
      { name: "loading", type: "boolean", default: "false", description: "Show loading spinner and disable" },
      { name: "leftIcon", type: "ReactNode", description: "Icon before children" },
      { name: "rightIcon", type: "ReactNode", description: "Icon after children" },
      { name: "asChild", type: "boolean", default: "false", description: "Render as child element" },
    ],
  },
  {
    id: "button-group", name: "Button Group", icon: Rows, category: "Form Inputs",
    description: "Group buttons together for related actions.",
    preview: (
      <div className="space-y-4">
        <div className="inline-flex rounded-lg border border-border overflow-hidden">
          <Button variant="ghost" className="rounded-none border-r border-border">Left</Button>
          <Button variant="ghost" className="rounded-none border-r border-border">Center</Button>
          <Button variant="ghost" className="rounded-none">Right</Button>
        </div>
        <div className="inline-flex rounded-lg border border-border overflow-hidden">
          <Button variant="ghost" size="sm" className="rounded-none border-r border-border"><AlignLeft className="h-4 w-4" /></Button>
          <Button variant="ghost" size="sm" className="rounded-none border-r border-border"><List className="h-4 w-4" /></Button>
          <Button variant="ghost" size="sm" className="rounded-none"><LayoutGrid className="h-4 w-4" /></Button>
        </div>
      </div>
    ),
    code: `<div className="inline-flex rounded-lg border overflow-hidden">\n  <Button variant="ghost" className="rounded-none border-r">Left</Button>\n  <Button variant="ghost" className="rounded-none border-r">Center</Button>\n  <Button variant="ghost" className="rounded-none">Right</Button>\n</div>`,
    props: [],
  },
  {
    id: "input", name: "Input", icon: TextCursorInput, category: "Form Inputs",
    description: "Text input with 6 style variants (default, filled, ghost, underline, glow, glass) and 4 sizes.",
    preview: (
      <div className="w-full max-w-md space-y-6">
        <div>
          <p className="text-xs text-muted-foreground mb-2 font-medium uppercase tracking-wider">Variants</p>
          <div className="space-y-3">
            <Input placeholder="Default input" />
            <Input variant="filled" placeholder="Filled input" />
            <Input variant="ghost" placeholder="Ghost input" />
            <Input variant="underline" placeholder="Underline input" />
            <Input variant="glow" placeholder="Glow input" />
            <Input variant="glass" placeholder="Glass input" />
          </div>
        </div>
        <div>
          <p className="text-xs text-muted-foreground mb-2 font-medium uppercase tracking-wider">Sizes</p>
          <div className="space-y-3">
            <Input inputSize="sm" placeholder="Small" />
            <Input inputSize="default" placeholder="Default" />
            <Input inputSize="lg" placeholder="Large" />
            <Input inputSize="xl" placeholder="Extra Large" />
          </div>
        </div>
      </div>
    ),
    code: `import { Input } from "@/components/ui/input"

// Variants: default, filled, ghost, underline, glow, glass
// Sizes: sm, default, lg, xl

<Input variant="glow" placeholder="Glowing input" />
<Input variant="filled" inputSize="lg" placeholder="Large filled" />
<Input variant="underline" placeholder="Underline style" />
<Input variant="glass" placeholder="Glass effect" />`,
    props: [
      { name: "variant", type: '"default" | "filled" | "ghost" | "underline" | "glow" | "glass"', default: '"default"', description: "Visual style variant" },
      { name: "inputSize", type: '"sm" | "default" | "lg" | "xl"', default: '"default"', description: "Input height and text size" },
      { name: "type", type: "string", default: '"text"', description: "HTML input type" },
      { name: "disabled", type: "boolean", default: "false", description: "Disable input" },
    ],
  },
  {
    id: "input-group", name: "Input Group", icon: FormInput, category: "Form Inputs",
    description: "Input with addons, icons or buttons attached.",
    preview: (
      <div className="w-full max-w-sm space-y-3">
        <div className="flex">
          <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-border bg-muted text-sm text-muted-foreground">https://</span>
          <Input className="rounded-l-none" placeholder="example.com" />
        </div>
        <div className="flex">
          <Input className="rounded-r-none" placeholder="Search..." />
          <Button className="rounded-l-none">Search</Button>
        </div>
      </div>
    ),
    code: `<div className="flex">\n  <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-border bg-muted text-sm text-muted-foreground">https://</span>\n  <Input className="rounded-l-none" placeholder="example.com" />\n</div>`,
    props: [],
  },
  {
    id: "textarea", name: "Textarea", icon: Square, category: "Form Inputs",
    description: "Multi-line input with 6 style variants and 4 sizes.",
    preview: (
      <div className="w-full max-w-md space-y-6">
        <div>
          <p className="text-xs text-muted-foreground mb-2 font-medium uppercase tracking-wider">Variants</p>
          <div className="space-y-3">
            <Textarea placeholder="Default textarea" textareaSize="sm" />
            <Textarea variant="filled" placeholder="Filled textarea" textareaSize="sm" />
            <Textarea variant="ghost" placeholder="Ghost textarea" textareaSize="sm" />
            <Textarea variant="underline" placeholder="Underline textarea" textareaSize="sm" />
            <Textarea variant="glow" placeholder="Glow textarea" textareaSize="sm" />
            <Textarea variant="glass" placeholder="Glass textarea" textareaSize="sm" />
          </div>
        </div>
        <div>
          <p className="text-xs text-muted-foreground mb-2 font-medium uppercase tracking-wider">Sizes</p>
          <div className="space-y-3">
            <Textarea textareaSize="sm" placeholder="Small" />
            <Textarea textareaSize="default" placeholder="Default" />
            <Textarea textareaSize="lg" placeholder="Large" />
          </div>
        </div>
      </div>
    ),
    code: `import { Textarea } from "@/components/ui/textarea"

// Variants: default, filled, ghost, underline, glow, glass
// Sizes: sm, default, lg, xl

<Textarea variant="glow" textareaSize="lg" placeholder="Write..." />`,
    props: [
      { name: "variant", type: '"default" | "filled" | "ghost" | "underline" | "glow" | "glass"', default: '"default"', description: "Visual style variant" },
      { name: "textareaSize", type: '"sm" | "default" | "lg" | "xl"', default: '"default"', description: "Textarea size" },
    ],
  },
  {
    id: "select", name: "Select", icon: Type, category: "Form Inputs",
    description: "Dropdown select with accessible keyboard navigation.",
    preview: (
      <Select>
        <SelectTrigger className="w-[200px]"><SelectValue placeholder="Select framework" /></SelectTrigger>
        <SelectContent>
          <SelectItem value="react">React</SelectItem>
          <SelectItem value="vue">Vue</SelectItem>
          <SelectItem value="svelte">Svelte</SelectItem>
          <SelectItem value="solid">Solid</SelectItem>
        </SelectContent>
      </Select>
    ),
    code: `import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"\n\n<Select>\n  <SelectTrigger><SelectValue placeholder="Pick one" /></SelectTrigger>\n  <SelectContent>\n    <SelectItem value="react">React</SelectItem>\n  </SelectContent>\n</Select>`,
    props: [
      { name: "value", type: "string", description: "Controlled value" },
      { name: "onValueChange", type: "(value: string) => void", description: "Change handler" },
    ],
  },
  {
    id: "native-select", name: "Native Select", icon: ChevronDown, category: "Form Inputs",
    description: "Browser-native select element styled to match the design system.",
    preview: (
      <select className="flex h-10 w-[200px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
        <option value="">Select option</option>
        <option value="react">React</option>
        <option value="vue">Vue</option>
        <option value="svelte">Svelte</option>
      </select>
    ),
    code: `<select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">\n  <option value="">Select option</option>\n  <option value="react">React</option>\n</select>`,
    props: [],
  },
  {
    id: "checkbox", name: "Checkbox", icon: CheckSquare, category: "Form Inputs",
    description: "Checkbox with 7 color variants, 4 sizes, and 2 shapes.",
    preview: (
      <div className="space-y-6 w-full">
        <div>
          <p className="text-xs text-muted-foreground mb-2 font-medium uppercase tracking-wider">Variants</p>
          <div className="flex gap-4 flex-wrap items-center">
            <div className="flex items-center gap-2"><Checkbox id="cv1" defaultChecked /><Label htmlFor="cv1">Default</Label></div>
            <div className="flex items-center gap-2"><Checkbox id="cv2" variant="secondary" defaultChecked /><Label htmlFor="cv2">Secondary</Label></div>
            <div className="flex items-center gap-2"><Checkbox id="cv3" variant="accent" defaultChecked /><Label htmlFor="cv3">Accent</Label></div>
            <div className="flex items-center gap-2"><Checkbox id="cv4" variant="destructive" defaultChecked /><Label htmlFor="cv4">Destructive</Label></div>
            <div className="flex items-center gap-2"><Checkbox id="cv5" variant="outline" defaultChecked /><Label htmlFor="cv5">Outline</Label></div>
            <div className="flex items-center gap-2"><Checkbox id="cv6" variant="soft" defaultChecked /><Label htmlFor="cv6">Soft</Label></div>
            <div className="flex items-center gap-2"><Checkbox id="cv7" variant="glow" defaultChecked /><Label htmlFor="cv7">Glow</Label></div>
          </div>
        </div>
        <div>
          <p className="text-xs text-muted-foreground mb-2 font-medium uppercase tracking-wider">Sizes</p>
          <div className="flex gap-4 items-center">
            <div className="flex items-center gap-2"><Checkbox id="cs1" size="sm" defaultChecked /><Label htmlFor="cs1">Small</Label></div>
            <div className="flex items-center gap-2"><Checkbox id="cs2" size="default" defaultChecked /><Label htmlFor="cs2">Default</Label></div>
            <div className="flex items-center gap-2"><Checkbox id="cs3" size="lg" defaultChecked /><Label htmlFor="cs3">Large</Label></div>
            <div className="flex items-center gap-2"><Checkbox id="cs4" size="xl" defaultChecked /><Label htmlFor="cs4">XL</Label></div>
          </div>
        </div>
        <div>
          <p className="text-xs text-muted-foreground mb-2 font-medium uppercase tracking-wider">Shapes</p>
          <div className="flex gap-4 items-center">
            <div className="flex items-center gap-2"><Checkbox id="cr1" shape="square" defaultChecked /><Label htmlFor="cr1">Square</Label></div>
            <div className="flex items-center gap-2"><Checkbox id="cr2" shape="rounded" defaultChecked /><Label htmlFor="cr2">Rounded</Label></div>
          </div>
        </div>
      </div>
    ),
    code: `import { Checkbox } from "@/components/ui/checkbox"

// 7 variants × 4 sizes × 2 shapes = 56 combinations
<Checkbox variant="glow" size="lg" shape="rounded" />`,
    props: [
      { name: "variant", type: '"default" | "secondary" | "accent" | "destructive" | "outline" | "soft" | "glow"', default: '"default"', description: "Color variant" },
      { name: "size", type: '"sm" | "default" | "lg" | "xl"', default: '"default"', description: "Checkbox size" },
      { name: "shape", type: '"square" | "rounded"', default: '"square"', description: "Border shape" },
      { name: "checked", type: "boolean", description: "Controlled checked state" },
      { name: "onCheckedChange", type: "(checked: boolean) => void", description: "Change handler" },
    ],
  },
  {
    id: "switch", name: "Switch", icon: ToggleLeft, category: "Form Inputs",
    description: "Toggle switch with 8 color variants and 4 sizes.",
    preview: (
      <div className="space-y-6 w-full">
        <div>
          <p className="text-xs text-muted-foreground mb-2 font-medium uppercase tracking-wider">Variants</p>
          <div className="flex gap-4 flex-wrap items-center">
            <div className="flex items-center gap-2"><Switch defaultChecked /><span className="text-xs">Default</span></div>
            <div className="flex items-center gap-2"><Switch variant="secondary" defaultChecked /><span className="text-xs">Secondary</span></div>
            <div className="flex items-center gap-2"><Switch variant="accent" defaultChecked /><span className="text-xs">Accent</span></div>
            <div className="flex items-center gap-2"><Switch variant="destructive" defaultChecked /><span className="text-xs">Destructive</span></div>
            <div className="flex items-center gap-2"><Switch variant="soft" defaultChecked /><span className="text-xs">Soft</span></div>
            <div className="flex items-center gap-2"><Switch variant="glow" defaultChecked /><span className="text-xs">Glow</span></div>
            <div className="flex items-center gap-2"><Switch variant="glow-secondary" defaultChecked /><span className="text-xs">Glow Sec</span></div>
            <div className="flex items-center gap-2"><Switch variant="outline" defaultChecked /><span className="text-xs">Outline</span></div>
          </div>
        </div>
        <div>
          <p className="text-xs text-muted-foreground mb-2 font-medium uppercase tracking-wider">Sizes</p>
          <div className="flex gap-4 items-center">
            <div className="flex items-center gap-2"><Switch size="sm" defaultChecked /><span className="text-xs">Small</span></div>
            <div className="flex items-center gap-2"><Switch size="default" defaultChecked /><span className="text-xs">Default</span></div>
            <div className="flex items-center gap-2"><Switch size="lg" defaultChecked /><span className="text-xs">Large</span></div>
            <div className="flex items-center gap-2"><Switch size="xl" defaultChecked /><span className="text-xs">XL</span></div>
          </div>
        </div>
      </div>
    ),
    code: `import { Switch } from "@/components/ui/switch"

// 8 variants × 4 sizes = 32 combinations
<Switch variant="glow" size="lg" />`,
    props: [
      { name: "variant", type: '"default" | "secondary" | "accent" | "destructive" | "soft" | "glow" | "glow-secondary" | "outline"', default: '"default"', description: "Color variant" },
      { name: "size", type: '"sm" | "default" | "lg" | "xl"', default: '"default"', description: "Switch size" },
      { name: "checked", type: "boolean", description: "Controlled state" },
      { name: "onCheckedChange", type: "(checked: boolean) => void", description: "Change handler" },
    ],
  },
  {
    id: "slider", name: "Slider", icon: SlidersHorizontal, category: "Form Inputs",
    description: "Slider with 3 track styles, 7 range colors, 6 thumb styles, and 4 sizes.",
    preview: (
      <div className="w-full max-w-md space-y-6">
        <div>
          <p className="text-xs text-muted-foreground mb-2 font-medium uppercase tracking-wider">Range Colors</p>
          <div className="space-y-4">
            <Slider defaultValue={[60]} max={100} color="primary" />
            <Slider defaultValue={[60]} max={100} color="secondary" />
            <Slider defaultValue={[60]} max={100} color="accent" />
            <Slider defaultValue={[60]} max={100} color="destructive" />
            <Slider defaultValue={[60]} max={100} color="gradient" />
            <Slider defaultValue={[60]} max={100} color="gradient-accent" />
            <Slider defaultValue={[60]} max={100} color="glow" />
          </div>
        </div>
        <div>
          <p className="text-xs text-muted-foreground mb-2 font-medium uppercase tracking-wider">Track Sizes</p>
          <div className="space-y-4">
            <Slider defaultValue={[50]} max={100} trackSize="sm" />
            <Slider defaultValue={[50]} max={100} trackSize="default" />
            <Slider defaultValue={[50]} max={100} trackSize="lg" />
            <Slider defaultValue={[50]} max={100} trackSize="xl" />
          </div>
        </div>
        <div>
          <p className="text-xs text-muted-foreground mb-2 font-medium uppercase tracking-wider">Thumb Styles</p>
          <div className="space-y-4">
            <Slider defaultValue={[50]} max={100} thumbColor="primary" />
            <Slider defaultValue={[50]} max={100} thumbColor="filled" color="secondary" />
            <Slider defaultValue={[50]} max={100} thumbColor="glow" color="gradient" />
          </div>
        </div>
      </div>
    ),
    code: `import { Slider } from "@/components/ui/slider"

// 7 colors × 4 track sizes × 6 thumb styles = 168 combinations
<Slider defaultValue={[50]} color="gradient" trackSize="lg" thumbColor="glow" />`,
    props: [
      { name: "color", type: '"primary" | "secondary" | "accent" | "destructive" | "gradient" | "gradient-accent" | "glow"', default: '"primary"', description: "Range fill color" },
      { name: "trackSize", type: '"sm" | "default" | "lg" | "xl"', default: '"default"', description: "Track height" },
      { name: "thumbColor", type: '"primary" | "secondary" | "accent" | "destructive" | "filled" | "glow"', default: '"primary"', description: "Thumb style" },
      { name: "thumbSize", type: '"sm" | "default" | "lg" | "xl"', default: '"default"', description: "Thumb size" },
      { name: "variant", type: '"default" | "muted" | "outline"', default: '"default"', description: "Track background style" },
    ],
  },
  {
    id: "radio", name: "Radio Group", icon: CircleDot, category: "Form Inputs",
    description: "Single-selection radio group.",
    preview: (
      <RadioGroup defaultValue="react">
        <div className="flex items-center gap-2"><RadioGroupItem value="react" id="r1" /><Label htmlFor="r1">React</Label></div>
        <div className="flex items-center gap-2"><RadioGroupItem value="vue" id="r2" /><Label htmlFor="r2">Vue</Label></div>
        <div className="flex items-center gap-2"><RadioGroupItem value="svelte" id="r3" /><Label htmlFor="r3">Svelte</Label></div>
      </RadioGroup>
    ),
    code: `import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"\n\n<RadioGroup defaultValue="react">\n  <RadioGroupItem value="react" id="r1" />\n  <Label htmlFor="r1">React</Label>\n</RadioGroup>`,
    props: [
      { name: "value", type: "string", description: "Controlled selected value" },
      { name: "onValueChange", type: "(value: string) => void", description: "Change handler" },
    ],
  },
  {
    id: "toggle", name: "Toggle", icon: ToggleRight, category: "Form Inputs",
    description: "Toggle button with 9 variants, 5 sizes, and 3 shapes.",
    preview: (
      <div className="space-y-6 w-full">
        <div>
          <p className="text-xs text-muted-foreground mb-2 font-medium uppercase tracking-wider">Variants</p>
          <div className="flex gap-2 flex-wrap">
            <Toggle aria-label="a" defaultPressed><strong>Default</strong></Toggle>
            <Toggle aria-label="b" variant="outline" defaultPressed><strong>Outline</strong></Toggle>
            <Toggle aria-label="c" variant="soft" defaultPressed>Soft</Toggle>
            <Toggle aria-label="d" variant="soft-secondary" defaultPressed>Soft Sec</Toggle>
            <Toggle aria-label="e" variant="soft-accent" defaultPressed>Soft Acc</Toggle>
            <Toggle aria-label="f" variant="filled" defaultPressed>Filled</Toggle>
            <Toggle aria-label="g" variant="filled-secondary" defaultPressed>Filled Sec</Toggle>
            <Toggle aria-label="h" variant="glow" defaultPressed>Glow</Toggle>
            <Toggle aria-label="i" variant="ghost" defaultPressed>Ghost</Toggle>
          </div>
        </div>
        <div>
          <p className="text-xs text-muted-foreground mb-2 font-medium uppercase tracking-wider">Sizes</p>
          <div className="flex gap-2 items-center flex-wrap">
            <Toggle aria-label="xs" size="xs" defaultPressed>XS</Toggle>
            <Toggle aria-label="sm" size="sm" defaultPressed>SM</Toggle>
            <Toggle aria-label="md" size="default" defaultPressed>MD</Toggle>
            <Toggle aria-label="lg" size="lg" defaultPressed>LG</Toggle>
            <Toggle aria-label="xl" size="xl" defaultPressed>XL</Toggle>
          </div>
        </div>
        <div>
          <p className="text-xs text-muted-foreground mb-2 font-medium uppercase tracking-wider">Shapes</p>
          <div className="flex gap-2 items-center">
            <Toggle aria-label="d" shape="default" variant="outline" defaultPressed>Default</Toggle>
            <Toggle aria-label="p" shape="pill" variant="outline" defaultPressed>Pill</Toggle>
            <Toggle aria-label="s" shape="square" variant="outline" defaultPressed>Square</Toggle>
          </div>
        </div>
      </div>
    ),
    code: `import { Toggle } from "@/components/ui/toggle"

// 9 variants × 5 sizes × 3 shapes = 135 combinations
<Toggle variant="glow" size="lg" shape="pill">Glow Toggle</Toggle>`,
    props: [
      { name: "variant", type: '"default" | "outline" | "soft" | "soft-secondary" | "soft-accent" | "filled" | "filled-secondary" | "glow" | "ghost"', default: '"default"', description: "Visual variant" },
      { name: "size", type: '"xs" | "sm" | "default" | "lg" | "xl"', default: '"default"', description: "Toggle size" },
      { name: "shape", type: '"default" | "pill" | "square"', default: '"default"', description: "Border shape" },
      { name: "pressed", type: "boolean", description: "Controlled pressed state" },
    ],
  },
  {
    id: "toggle-group", name: "Toggle Group", icon: Rows, category: "Form Inputs",
    description: "A group of toggle buttons where one or multiple can be active.",
    preview: (
      <ToggleGroup type="single" defaultValue="center">
        <ToggleGroupItem value="left"><AlignLeft className="h-4 w-4" /></ToggleGroupItem>
        <ToggleGroupItem value="center"><List className="h-4 w-4" /></ToggleGroupItem>
        <ToggleGroupItem value="right"><LayoutGrid className="h-4 w-4" /></ToggleGroupItem>
      </ToggleGroup>
    ),
    code: `import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"\n\n<ToggleGroup type="single" defaultValue="center">\n  <ToggleGroupItem value="left">Left</ToggleGroupItem>\n  <ToggleGroupItem value="center">Center</ToggleGroupItem>\n</ToggleGroup>`,
    props: [
      { name: "type", type: '"single" | "multiple"', description: "Selection mode" },
      { name: "value", type: "string | string[]", description: "Controlled value" },
    ],
  },
  {
    id: "input-otp", name: "Input OTP", icon: Hash, category: "Form Inputs",
    description: "One-time password input with individual slots.",
    preview: (
      <InputOTP maxLength={6}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
    ),
    code: `import { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator } from "@/components/ui/input-otp"\n\n<InputOTP maxLength={6}>\n  <InputOTPGroup>\n    <InputOTPSlot index={0} />\n    <InputOTPSlot index={1} />\n    <InputOTPSlot index={2} />\n  </InputOTPGroup>\n  <InputOTPSeparator />\n  <InputOTPGroup>\n    <InputOTPSlot index={3} />\n    <InputOTPSlot index={4} />\n    <InputOTPSlot index={5} />\n  </InputOTPGroup>\n</InputOTP>`,
    props: [
      { name: "maxLength", type: "number", description: "Number of OTP digits" },
      { name: "value", type: "string", description: "Controlled value" },
    ],
  },
  {
    id: "label", name: "Label", icon: Tag, category: "Form Inputs",
    description: "Accessible label for form controls.",
    preview: (
      <div className="space-y-2 max-w-sm">
        <Label htmlFor="email-demo">Email</Label>
        <Input id="email-demo" type="email" placeholder="you@example.com" />
      </div>
    ),
    code: `import { Label } from "@/components/ui/label"\n\n<Label htmlFor="email">Email</Label>\n<Input id="email" type="email" placeholder="you@example.com" />`,
    props: [
      { name: "htmlFor", type: "string", description: "ID of the associated form control" },
    ],
  },
  {
    id: "field", name: "Field", icon: FormInput, category: "Form Inputs",
    description: "A label + input + helper text pattern for forms.",
    preview: (
      <div className="space-y-4 max-w-sm">
        <div className="space-y-2">
          <Label>Username</Label>
          <Input placeholder="johndoe" />
          <p className="text-xs text-muted-foreground">This is your public display name.</p>
        </div>
        <div className="space-y-2">
          <Label>Email</Label>
          <Input type="email" placeholder="john@example.com" />
          <p className="text-xs text-destructive">Please enter a valid email address.</p>
        </div>
      </div>
    ),
    code: `<div className="space-y-2">\n  <Label>Username</Label>\n  <Input placeholder="johndoe" />\n  <p className="text-xs text-muted-foreground">This is your public display name.</p>\n</div>`,
    props: [],
  },

  // ═══════════════ LAYOUT & NAVIGATION ═══════════════
  {
    id: "card", name: "Card", icon: LayoutGrid, category: "Layout & Navigation",
    description: "Card with 12 variants including glass, glow, gradient-border, and interactive styles.",
    preview: (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
        <Card variant="default">
          <CardHeader><CardTitle className="text-base">Default</CardTitle></CardHeader>
          <CardContent><p className="text-sm text-muted-foreground">Standard card with border and shadow.</p></CardContent>
        </Card>
        <Card variant="glass">
          <CardHeader><CardTitle className="text-base">Glass</CardTitle></CardHeader>
          <CardContent><p className="text-sm text-muted-foreground">Frosted glass effect with blur.</p></CardContent>
        </Card>
        <Card variant="glow">
          <CardHeader><CardTitle className="text-base">Glow Primary</CardTitle></CardHeader>
          <CardContent><p className="text-sm text-muted-foreground">Glowing primary border.</p></CardContent>
        </Card>
        <Card variant="glow-secondary">
          <CardHeader><CardTitle className="text-base">Glow Secondary</CardTitle></CardHeader>
          <CardContent><p className="text-sm text-muted-foreground">Glowing secondary border.</p></CardContent>
        </Card>
        <Card variant="elevated">
          <CardHeader><CardTitle className="text-base">Elevated</CardTitle></CardHeader>
          <CardContent><p className="text-sm text-muted-foreground">Larger shadow, no border.</p></CardContent>
        </Card>
        <Card variant="outline">
          <CardHeader><CardTitle className="text-base">Outline</CardTitle></CardHeader>
          <CardContent><p className="text-sm text-muted-foreground">Thicker border, transparent bg.</p></CardContent>
        </Card>
        <Card variant="gradient">
          <CardHeader><CardTitle className="text-base">Gradient</CardTitle></CardHeader>
          <CardContent><p className="text-sm text-muted-foreground">Gradient background.</p></CardContent>
        </Card>
        <Card variant="interactive">
          <CardHeader><CardTitle className="text-base">Interactive</CardTitle></CardHeader>
          <CardContent><p className="text-sm text-muted-foreground">Hover to see the effect.</p></CardContent>
        </Card>
        <Card variant="muted">
          <CardHeader><CardTitle className="text-base">Muted</CardTitle></CardHeader>
          <CardContent><p className="text-sm text-muted-foreground">Subtle muted background.</p></CardContent>
        </Card>
        <Card variant="ghost">
          <CardHeader><CardTitle className="text-base">Ghost</CardTitle></CardHeader>
          <CardContent><p className="text-sm text-muted-foreground">No border, no shadow.</p></CardContent>
        </Card>
      </div>
    ),
    code: `import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

// Variants: default, elevated, outline, ghost, glass, glass-strong,
//   glow, glow-secondary, glow-accent, gradient, gradient-border,
//   muted, interactive

<Card variant="glow">
  <CardHeader><CardTitle>Glow Card</CardTitle></CardHeader>
  <CardContent>Content</CardContent>
</Card>`,
    props: [
      { name: "variant", type: '"default" | "elevated" | "outline" | "ghost" | "glass" | "glass-strong" | "glow" | "glow-secondary" | "glow-accent" | "gradient" | "gradient-border" | "muted" | "interactive"', default: '"default"', description: "Card visual style" },
    ],
  },
  {
    id: "tabs", name: "Tabs", icon: Layers, category: "Layout & Navigation",
    description: "Tabbed interface for organizing content.",
    preview: (
      <Tabs defaultValue="overview" className="w-full max-w-md">
        <TabsList className="w-full">
          <TabsTrigger value="overview" className="flex-1">Overview</TabsTrigger>
          <TabsTrigger value="features" className="flex-1">Features</TabsTrigger>
          <TabsTrigger value="code" className="flex-1">Code</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="mt-4 text-sm text-muted-foreground">Overview content goes here.</TabsContent>
        <TabsContent value="features" className="mt-4 text-sm text-muted-foreground">Features content goes here.</TabsContent>
        <TabsContent value="code" className="mt-4 text-sm text-muted-foreground">Code content goes here.</TabsContent>
      </Tabs>
    ),
    code: `import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"\n\n<Tabs defaultValue="tab1">\n  <TabsList>\n    <TabsTrigger value="tab1">Tab 1</TabsTrigger>\n    <TabsTrigger value="tab2">Tab 2</TabsTrigger>\n  </TabsList>\n  <TabsContent value="tab1">Content 1</TabsContent>\n</Tabs>`,
    props: [
      { name: "defaultValue", type: "string", description: "Initially active tab" },
      { name: "value", type: "string", description: "Controlled active tab" },
    ],
  },
  {
    id: "accordion", name: "Accordion", icon: ChevronDown, category: "Layout & Navigation",
    description: "Collapsible content sections, vertically stacked.",
    preview: (
      <Accordion type="single" collapsible className="w-full max-w-md">
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent>Yes. It comes with default styles that match the NovaCraft design system.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is it animated?</AccordionTrigger>
          <AccordionContent>Yes. It&apos;s animated by default, but you can disable it if you prefer.</AccordionContent>
        </AccordionItem>
      </Accordion>
    ),
    code: `import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"\n\n<Accordion type="single" collapsible>\n  <AccordionItem value="item-1">\n    <AccordionTrigger>Question?</AccordionTrigger>\n    <AccordionContent>Answer.</AccordionContent>\n  </AccordionItem>\n</Accordion>`,
    props: [
      { name: "type", type: '"single" | "multiple"', description: "Allow one or multiple open items" },
      { name: "collapsible", type: "boolean", description: "Allow all items to be closed (single mode)" },
    ],
  },
  {
    id: "breadcrumb", name: "Breadcrumb", icon: ChevronRight, category: "Layout & Navigation",
    description: "Navigation breadcrumb trail showing hierarchy.",
    preview: (
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem><BreadcrumbLink href="/">Home</BreadcrumbLink></BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem><BreadcrumbLink href="/components">Components</BreadcrumbLink></BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem><BreadcrumbPage>Breadcrumb</BreadcrumbPage></BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    ),
    code: `import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"\n\n<Breadcrumb>\n  <BreadcrumbList>\n    <BreadcrumbItem><BreadcrumbLink href="/">Home</BreadcrumbLink></BreadcrumbItem>\n    <BreadcrumbSeparator />\n    <BreadcrumbItem><BreadcrumbPage>Current</BreadcrumbPage></BreadcrumbItem>\n  </BreadcrumbList>\n</Breadcrumb>`,
    props: [],
  },
  {
    id: "collapsible", name: "Collapsible", icon: ChevronsUpDown, category: "Layout & Navigation",
    description: "Expandable/collapsible content section.",
    preview: (
      <Collapsible className="w-full max-w-sm">
        <CollapsibleTrigger asChild>
          <Button variant="outline" className="w-full justify-between">
            Toggle content <ChevronsUpDown className="h-4 w-4" />
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent className="mt-2 rounded-md border border-border p-4 text-sm text-muted-foreground">
          This content can be expanded or collapsed.
        </CollapsibleContent>
      </Collapsible>
    ),
    code: `import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"\n\n<Collapsible>\n  <CollapsibleTrigger>Toggle</CollapsibleTrigger>\n  <CollapsibleContent>Hidden content</CollapsibleContent>\n</Collapsible>`,
    props: [
      { name: "open", type: "boolean", description: "Controlled open state" },
      { name: "onOpenChange", type: "(open: boolean) => void", description: "Open change handler" },
    ],
  },
  {
    id: "aspect-ratio", name: "Aspect Ratio", icon: Image, category: "Layout & Navigation",
    description: "Displays content within a desired aspect ratio.",
    preview: (
      <div className="w-full max-w-sm">
        <AspectRatio ratio={16 / 9} className="rounded-lg overflow-hidden border border-border bg-muted flex items-center justify-center">
          <span className="text-muted-foreground text-sm">16:9</span>
        </AspectRatio>
      </div>
    ),
    code: `import { AspectRatio } from "@/components/ui/aspect-ratio"\n\n<AspectRatio ratio={16 / 9}>\n  <img src="..." alt="..." className="object-cover" />\n</AspectRatio>`,
    props: [
      { name: "ratio", type: "number", description: "Desired aspect ratio (e.g., 16/9)" },
    ],
  },
  {
    id: "separator", name: "Separator", icon: Minus, category: "Layout & Navigation",
    description: "Visual divider between content sections.",
    preview: (
      <div className="w-full max-w-sm space-y-4">
        <div>
          <h4 className="text-sm font-medium">NovaCraft UI</h4>
          <p className="text-sm text-muted-foreground">A futuristic component library</p>
        </div>
        <Separator />
        <div className="flex h-5 items-center gap-4 text-sm">
          <span>Docs</span>
          <Separator orientation="vertical" />
          <span>API</span>
          <Separator orientation="vertical" />
          <span>Source</span>
        </div>
      </div>
    ),
    code: `import { Separator } from "@/components/ui/separator"\n\n<Separator />\n<Separator orientation="vertical" />`,
    props: [
      { name: "orientation", type: '"horizontal" | "vertical"', default: '"horizontal"', description: "Separator direction" },
    ],
  },
  {
    id: "resizable", name: "Resizable", icon: SplitSquareVertical, category: "Layout & Navigation",
    description: "Resizable panel groups and layouts.",
    preview: (
      <div className="w-full max-w-md">
        <ResizablePanelGroup direction="horizontal" className="min-h-[120px] rounded-lg border border-border">
          <ResizablePanel defaultSize={50}>
            <div className="flex h-full items-center justify-center p-4">
              <span className="text-sm text-muted-foreground">Panel A</span>
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={50}>
            <div className="flex h-full items-center justify-center p-4">
              <span className="text-sm text-muted-foreground">Panel B</span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    ),
    code: `import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/ui/resizable"\n\n<ResizablePanelGroup direction="horizontal">\n  <ResizablePanel>Panel A</ResizablePanel>\n  <ResizableHandle withHandle />\n  <ResizablePanel>Panel B</ResizablePanel>\n</ResizablePanelGroup>`,
    props: [
      { name: "direction", type: '"horizontal" | "vertical"', description: "Layout direction" },
    ],
  },
  {
    id: "scroll-area", name: "Scroll Area", icon: ScrollText, category: "Layout & Navigation",
    description: "Custom scrollbar container with cross-browser styling.",
    preview: (
      <ScrollArea className="h-48 w-full max-w-sm rounded-md border border-border p-4">
        <div className="space-y-4">
          {Array.from({ length: 15 }).map((_, i) => (
            <div key={i} className="text-sm">
              <div className="font-medium">Item {i + 1}</div>
              <p className="text-muted-foreground">Scrollable list item content</p>
              {i < 14 && <Separator className="mt-4" />}
            </div>
          ))}
        </div>
      </ScrollArea>
    ),
    code: `import { ScrollArea } from "@/components/ui/scroll-area"\n\n<ScrollArea className="h-72 w-48 rounded-md border">\n  {/* scrollable content */}\n</ScrollArea>`,
    props: [
      { name: "className", type: "string", description: "Container styling" },
    ],
  },
  {
    id: "navigation-menu", name: "Navigation Menu", icon: Navigation, category: "Layout & Navigation",
    description: "Accessible top-level navigation with dropdown menus.",
    preview: (
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="p-4 w-[300px]">
                <p className="text-sm text-muted-foreground">Install NovaCraft and start building.</p>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Components</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="p-4 w-[300px]">
                <p className="text-sm text-muted-foreground">Browse all available components.</p>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    ),
    code: `import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu"\n\n<NavigationMenu>\n  <NavigationMenuList>\n    <NavigationMenuItem>\n      <NavigationMenuTrigger>Menu</NavigationMenuTrigger>\n      <NavigationMenuContent>Content</NavigationMenuContent>\n    </NavigationMenuItem>\n  </NavigationMenuList>\n</NavigationMenu>`,
    props: [],
  },
  {
    id: "pagination", name: "Pagination", icon: ChevronLeft, category: "Layout & Navigation",
    description: "Page navigation with previous/next and page numbers.",
    preview: (
      <Pagination>
        <PaginationContent>
          <PaginationItem><PaginationPrevious href="#" /></PaginationItem>
          <PaginationItem><PaginationLink href="#" isActive>1</PaginationLink></PaginationItem>
          <PaginationItem><PaginationLink href="#">2</PaginationLink></PaginationItem>
          <PaginationItem><PaginationLink href="#">3</PaginationLink></PaginationItem>
          <PaginationItem><PaginationNext href="#" /></PaginationItem>
        </PaginationContent>
      </Pagination>
    ),
    code: `import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination"\n\n<Pagination>\n  <PaginationContent>\n    <PaginationItem><PaginationPrevious href="#" /></PaginationItem>\n    <PaginationItem><PaginationLink href="#" isActive>1</PaginationLink></PaginationItem>\n    <PaginationItem><PaginationNext href="#" /></PaginationItem>\n  </PaginationContent>\n</Pagination>`,
    props: [],
  },
  {
    id: "menubar", name: "Menubar", icon: Menu, category: "Layout & Navigation",
    description: "Desktop-style application menu bar.",
    preview: (
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>New</MenubarItem>
            <MenubarItem>Open</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Save</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Edit</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Undo</MenubarItem>
            <MenubarItem>Redo</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    ),
    code: `import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar"\n\n<Menubar>\n  <MenubarMenu>\n    <MenubarTrigger>File</MenubarTrigger>\n    <MenubarContent>\n      <MenubarItem>New</MenubarItem>\n    </MenubarContent>\n  </MenubarMenu>\n</Menubar>`,
    props: [],
  },
  {
    id: "calendar", name: "Calendar", icon: CalendarIcon, category: "Layout & Navigation",
    description: "Date picker calendar with single and range selection.",
    preview: (
      <Calendar mode="single" className="rounded-md border border-border" />
    ),
    code: `import { Calendar } from "@/components/ui/calendar"\n\n<Calendar\n  mode="single"\n  selected={date}\n  onSelect={setDate}\n/>`,
    props: [
      { name: "mode", type: '"single" | "multiple" | "range"', description: "Selection mode" },
      { name: "selected", type: "Date | Date[]", description: "Selected date(s)" },
      { name: "onSelect", type: "(date: Date) => void", description: "Selection handler" },
    ],
  },

  // ═══════════════ DATA DISPLAY ═══════════════
  {
    id: "table", name: "Table", icon: Table2, category: "Data Display",
    description: "Styled data table with headers and rows.",
    preview: (
      <Table>
        <TableHeader>
          <TableRow><TableHead>Component</TableHead><TableHead>Status</TableHead><TableHead>Category</TableHead></TableRow>
        </TableHeader>
        <TableBody>
          <TableRow><TableCell className="font-medium">Button</TableCell><TableCell><Badge className="bg-accent/10 text-accent border-accent/20">Stable</Badge></TableCell><TableCell>Form</TableCell></TableRow>
          <TableRow><TableCell className="font-medium">Card</TableCell><TableCell><Badge className="bg-primary/10 text-primary border-primary/20">Stable</Badge></TableCell><TableCell>Layout</TableCell></TableRow>
          <TableRow><TableCell className="font-medium">Chart</TableCell><TableCell><Badge className="bg-secondary/10 text-secondary border-secondary/20">Beta</Badge></TableCell><TableCell>Data</TableCell></TableRow>
        </TableBody>
      </Table>
    ),
    code: `import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"\n\n<Table>\n  <TableHeader><TableRow><TableHead>Name</TableHead></TableRow></TableHeader>\n  <TableBody><TableRow><TableCell>Data</TableCell></TableRow></TableBody>\n</Table>`,
    props: [{ name: "className", type: "string", description: "Custom styling" }],
  },
  {
    id: "data-table", name: "Data Table", icon: ArrowUpDown, category: "Data Display",
    description: "Advanced data table with sorting, filtering and pagination.",
    preview: (
      <div className="w-full space-y-4">
        <div className="flex items-center gap-2">
          <Input placeholder="Filter names..." className="max-w-sm h-9" />
          <Button variant="outline" size="sm">Columns <ChevronDown className="ml-1 h-4 w-4" /></Button>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead><Button variant="ghost" size="sm" className="h-8 px-2">Name <ArrowUpDown className="ml-1 h-3 w-3" /></Button></TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow><TableCell className="font-medium">Alice</TableCell><TableCell>alice@example.com</TableCell><TableCell><Badge variant="outline">Active</Badge></TableCell></TableRow>
            <TableRow><TableCell className="font-medium">Bob</TableCell><TableCell>bob@example.com</TableCell><TableCell><Badge variant="secondary">Pending</Badge></TableCell></TableRow>
          </TableBody>
        </Table>
      </div>
    ),
    code: `// Data tables are built by composing Table + TanStack Table\n// See the full guide at docs for sortable, filterable tables\n\nimport { Table } from "@/components/ui/table"\n// + @tanstack/react-table for sorting, filtering, pagination`,
    props: [],
  },
  {
    id: "badge", name: "Badge", icon: Award, category: "Data Display",
    description: "Badge with 16 variants including soft, glow, gradient, and dot indicators across 3 sizes.",
    preview: (
      <div className="space-y-6 w-full">
        <div>
          <p className="text-xs text-muted-foreground mb-2 font-medium uppercase tracking-wider">Base Variants</p>
          <div className="flex gap-2 flex-wrap">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="destructive">Destructive</Badge>
          </div>
        </div>
        <div>
          <p className="text-xs text-muted-foreground mb-2 font-medium uppercase tracking-wider">Soft Variants</p>
          <div className="flex gap-2 flex-wrap">
            <Badge variant="soft">Soft Primary</Badge>
            <Badge variant="soft-secondary">Soft Secondary</Badge>
            <Badge variant="soft-destructive">Soft Destructive</Badge>
            <Badge variant="soft-accent">Soft Accent</Badge>
            <Badge variant="soft-muted">Soft Muted</Badge>
          </div>
        </div>
        <div>
          <p className="text-xs text-muted-foreground mb-2 font-medium uppercase tracking-wider">Glow & Gradient</p>
          <div className="flex gap-2 flex-wrap">
            <Badge variant="glow">Glow</Badge>
            <Badge variant="glow-secondary">Glow Secondary</Badge>
            <Badge variant="glow-accent">Glow Accent</Badge>
            <Badge variant="gradient">Gradient</Badge>
          </div>
        </div>
        <div>
          <p className="text-xs text-muted-foreground mb-2 font-medium uppercase tracking-wider">Dot Indicators</p>
          <div className="flex gap-2 flex-wrap">
            <Badge variant="dot">Active</Badge>
            <Badge variant="dot-success">Success</Badge>
            <Badge variant="dot-warning">Warning</Badge>
            <Badge variant="dot-destructive">Error</Badge>
          </div>
        </div>
        <div>
          <p className="text-xs text-muted-foreground mb-2 font-medium uppercase tracking-wider">Sizes</p>
          <div className="flex gap-2 flex-wrap items-center">
            <Badge size="sm">Small</Badge>
            <Badge size="default">Default</Badge>
            <Badge size="lg">Large</Badge>
          </div>
        </div>
      </div>
    ),
    code: `import { Badge } from "@/components/ui/badge"

// 16 variants × 3 sizes = 48 combinations
<Badge variant="glow">Glowing</Badge>
<Badge variant="dot-success" size="lg">Active</Badge>
<Badge variant="gradient">Pro</Badge>`,
    props: [
      { name: "variant", type: '"default" | "secondary" | "destructive" | "outline" | "soft" | "soft-*" | "glow" | "glow-*" | "gradient" | "dot" | "dot-*"', default: '"default"', description: "Visual style" },
      { name: "size", type: '"sm" | "default" | "lg"', default: '"default"', description: "Badge size" },
    ],
  },
  {
    id: "avatar", name: "Avatar", icon: UserCircle, category: "Data Display",
    description: "Avatar with 6 sizes, 3 shapes, and 5 ring styles including glow.",
    preview: (
      <div className="space-y-6 w-full">
        <div>
          <p className="text-xs text-muted-foreground mb-2 font-medium uppercase tracking-wider">Sizes</p>
          <div className="flex gap-3 items-center flex-wrap">
            <Avatar size="xs"><AvatarFallback>XS</AvatarFallback></Avatar>
            <Avatar size="sm"><AvatarFallback>SM</AvatarFallback></Avatar>
            <Avatar size="default"><AvatarFallback className="bg-primary/20 text-primary">MD</AvatarFallback></Avatar>
            <Avatar size="lg"><AvatarFallback className="bg-secondary/20 text-secondary">LG</AvatarFallback></Avatar>
            <Avatar size="xl"><AvatarFallback className="bg-accent/20 text-accent">XL</AvatarFallback></Avatar>
            <Avatar size="2xl"><AvatarFallback>2X</AvatarFallback></Avatar>
          </div>
        </div>
        <div>
          <p className="text-xs text-muted-foreground mb-2 font-medium uppercase tracking-wider">Shapes</p>
          <div className="flex gap-3 items-center flex-wrap">
            <Avatar shape="circle" size="lg"><AvatarFallback className="bg-primary/20 text-primary">C</AvatarFallback></Avatar>
            <Avatar shape="square" size="lg"><AvatarFallback className="bg-secondary/20 text-secondary">S</AvatarFallback></Avatar>
            <Avatar shape="rounded" size="lg"><AvatarFallback className="bg-accent/20 text-accent">R</AvatarFallback></Avatar>
          </div>
        </div>
        <div>
          <p className="text-xs text-muted-foreground mb-2 font-medium uppercase tracking-wider">Ring Styles</p>
          <div className="flex gap-4 items-center flex-wrap">
            <Avatar ring="default" size="lg"><AvatarFallback>D</AvatarFallback></Avatar>
            <Avatar ring="primary" size="lg"><AvatarFallback className="bg-primary/20 text-primary">P</AvatarFallback></Avatar>
            <Avatar ring="secondary" size="lg"><AvatarFallback className="bg-secondary/20 text-secondary">S</AvatarFallback></Avatar>
            <Avatar ring="glow" size="lg"><AvatarFallback className="bg-primary/20 text-primary">G</AvatarFallback></Avatar>
          </div>
        </div>
      </div>
    ),
    code: `import { Avatar, AvatarFallback } from "@/components/ui/avatar"

// 6 sizes × 3 shapes × 6 rings = 108 combinations
<Avatar size="xl" shape="rounded" ring="glow">
  <AvatarFallback>NC</AvatarFallback>
</Avatar>`,
    props: [
      { name: "size", type: '"xs" | "sm" | "default" | "lg" | "xl" | "2xl"', default: '"default"', description: "Avatar dimensions" },
      { name: "shape", type: '"circle" | "square" | "rounded"', default: '"circle"', description: "Border radius style" },
      { name: "ring", type: '"none" | "default" | "primary" | "secondary" | "accent" | "glow"', default: '"none"', description: "Ring decoration" },
    ],
  },
  {
    id: "progress", name: "Progress", icon: Activity, category: "Data Display",
    description: "Progress bar with 3 track variants, 5 sizes, and 8 indicator colors including gradients and glow.",
    preview: (
      <div className="w-full max-w-md space-y-6">
        <div>
          <p className="text-xs text-muted-foreground mb-2 font-medium uppercase tracking-wider">Sizes</p>
          <div className="space-y-3">
            <Progress value={60} size="xs" />
            <Progress value={60} size="sm" />
            <Progress value={60} size="default" />
            <Progress value={60} size="lg" />
          </div>
        </div>
        <div>
          <p className="text-xs text-muted-foreground mb-2 font-medium uppercase tracking-wider">Indicator Colors</p>
          <div className="space-y-3">
            <Progress value={80} size="sm" indicatorColor="primary" />
            <Progress value={65} size="sm" indicatorColor="secondary" />
            <Progress value={90} size="sm" indicatorColor="accent" />
            <Progress value={40} size="sm" indicatorColor="destructive" />
            <Progress value={75} size="sm" indicatorColor="gradient" />
            <Progress value={85} size="sm" indicatorColor="gradient-accent" />
            <Progress value={55} size="sm" indicatorColor="striped" />
            <Progress value={70} size="sm" indicatorColor="glow" />
          </div>
        </div>
      </div>
    ),
    code: `import { Progress } from "@/components/ui/progress"

// 5 sizes × 8 colors × 3 tracks = 120 combinations
<Progress value={75} size="sm" indicatorColor="gradient" />`,
    props: [
      { name: "value", type: "number", description: "Progress percentage (0-100)" },
      { name: "size", type: '"xs" | "sm" | "default" | "lg" | "xl"', default: '"default"', description: "Bar height" },
      { name: "indicatorColor", type: '"primary" | "secondary" | "accent" | "destructive" | "gradient" | "gradient-accent" | "striped" | "glow"', default: '"primary"', description: "Fill color" },
    ],
  },
  {
    id: "skeleton", name: "Skeleton", icon: Box, category: "Data Display",
    description: "Skeleton with 4 animation variants and 4 shapes.",
    preview: (
      <div className="space-y-6 w-full max-w-sm">
        <div>
          <p className="text-xs text-muted-foreground mb-2 font-medium uppercase tracking-wider">Variants</p>
          <div className="space-y-4">
            <div className="flex items-center gap-3"><Skeleton className="h-10 w-10" shape="circle" /><div className="flex-1 space-y-2"><Skeleton className="h-4 w-3/4" /><Skeleton className="h-4 w-1/2" /></div></div>
            <div className="flex items-center gap-3"><Skeleton variant="shimmer" className="h-10 w-10" shape="circle" /><div className="flex-1 space-y-2"><Skeleton variant="shimmer" className="h-4 w-3/4" /><Skeleton variant="shimmer" className="h-4 w-1/2" /></div></div>
            <div className="flex items-center gap-3"><Skeleton variant="glow" className="h-10 w-10" shape="circle" /><div className="flex-1 space-y-2"><Skeleton variant="glow" className="h-4 w-3/4" /><Skeleton variant="glow" className="h-4 w-1/2" /></div></div>
            <div className="flex items-center gap-3"><Skeleton variant="wave" className="h-10 w-10" shape="circle" /><div className="flex-1 space-y-2"><Skeleton variant="wave" className="h-4 w-3/4" /><Skeleton variant="wave" className="h-4 w-1/2" /></div></div>
          </div>
        </div>
        <div>
          <p className="text-xs text-muted-foreground mb-2 font-medium uppercase tracking-wider">Shapes</p>
          <div className="flex gap-3 items-center">
            <Skeleton className="h-12 w-12" shape="default" />
            <Skeleton className="h-12 w-12" shape="circle" />
            <Skeleton className="h-8 w-24" shape="pill" />
            <Skeleton className="h-12 w-12" shape="square" />
          </div>
        </div>
      </div>
    ),
    code: `import { Skeleton } from "@/components/ui/skeleton"

// 4 variants × 4 shapes
<Skeleton variant="shimmer" shape="circle" className="h-12 w-12" />
<Skeleton variant="wave" className="h-4 w-full" />`,
    props: [
      { name: "variant", type: '"default" | "shimmer" | "glow" | "wave"', default: '"default"', description: "Animation style" },
      { name: "shape", type: '"default" | "circle" | "pill" | "square"', default: '"default"', description: "Border shape" },
    ],
  },
  {
    id: "spinner", name: "Spinner", icon: Loader2, category: "Data Display",
    description: "Loading spinner with 5 color variants and 5 sizes.",
    preview: (
      <div className="space-y-6 w-full">
        <div>
          <p className="text-xs text-muted-foreground mb-2 font-medium uppercase tracking-wider">Sizes</p>
          <div className="flex items-center gap-6">
            <Spinner size="xs" />
            <Spinner size="sm" />
            <Spinner size="md" />
            <Spinner size="lg" />
            <Spinner size="xl" />
          </div>
        </div>
        <div>
          <p className="text-xs text-muted-foreground mb-2 font-medium uppercase tracking-wider">Variants</p>
          <div className="flex items-center gap-6">
            <Spinner variant="default" size="lg" />
            <Spinner variant="secondary" size="lg" />
            <Spinner variant="accent" size="lg" />
            <Spinner variant="muted" size="lg" />
            <div className="bg-foreground rounded-lg p-2"><Spinner variant="white" size="lg" /></div>
          </div>
        </div>
      </div>
    ),
    code: `import { Spinner } from "@/components/ui/spinner"

// 5 sizes × 5 variants = 25 combinations
<Spinner size="lg" variant="secondary" />`,
    props: [
      { name: "size", type: '"xs" | "sm" | "md" | "lg" | "xl"', default: '"md"', description: "Spinner size" },
      { name: "variant", type: '"default" | "secondary" | "accent" | "muted" | "white"', default: '"default"', description: "Color variant" },
    ],
  },
  {
    id: "kbd", name: "Kbd", icon: Keyboard, category: "Data Display",
    description: "Keyboard shortcut display with 6 variants and 4 sizes.",
    preview: (
      <div className="space-y-6 w-full">
        <div>
          <p className="text-xs text-muted-foreground mb-2 font-medium uppercase tracking-wider">Variants</p>
          <div className="flex gap-3 flex-wrap items-center">
            <div className="flex items-center gap-1"><Kbd variant="default">⌘</Kbd><Kbd variant="default">K</Kbd></div>
            <div className="flex items-center gap-1"><Kbd variant="outline">Ctrl</Kbd><Kbd variant="outline">C</Kbd></div>
            <div className="flex items-center gap-1"><Kbd variant="ghost">⇧</Kbd><Kbd variant="ghost">P</Kbd></div>
            <div className="flex items-center gap-1"><Kbd variant="filled">⌘</Kbd><Kbd variant="filled">S</Kbd></div>
            <div className="flex items-center gap-1"><Kbd variant="filled-secondary">Alt</Kbd><Kbd variant="filled-secondary">F4</Kbd></div>
            <Kbd variant="dark">Enter</Kbd>
          </div>
        </div>
        <div>
          <p className="text-xs text-muted-foreground mb-2 font-medium uppercase tracking-wider">Sizes</p>
          <div className="flex gap-3 items-center">
            <Kbd size="xs">XS</Kbd>
            <Kbd size="sm">SM</Kbd>
            <Kbd size="default">MD</Kbd>
            <Kbd size="lg">LG</Kbd>
          </div>
        </div>
      </div>
    ),
    code: `import { Kbd } from "@/components/ui/kbd"

// 6 variants × 4 sizes = 24 combinations
<Kbd variant="filled" size="lg">⌘</Kbd>
<Kbd variant="dark">Enter</Kbd>`,
    props: [
      { name: "variant", type: '"default" | "outline" | "ghost" | "filled" | "filled-secondary" | "dark"', default: '"default"', description: "Visual style" },
      { name: "size", type: '"xs" | "sm" | "default" | "lg"', default: '"sm"', description: "Kbd size" },
    ],
  },
  {
    id: "typography", name: "Typography", icon: TypeIcon, category: "Data Display",
    description: "Typographic styles for headings, paragraphs, and prose.",
    preview: (
      <div className="space-y-4 max-w-md">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Heading 1</h1>
        <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight">Heading 2</h2>
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Heading 3</h3>
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">Heading 4</h4>
        <p className="leading-7 text-muted-foreground">The king, seeing how much happier his subjects were, realized the value of design systems.</p>
        <blockquote className="border-l-2 border-primary pl-6 italic text-muted-foreground">"Design is not just what it looks like. Design is how it works."</blockquote>
        <p className="text-sm text-muted-foreground">Inline <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">code</code> looks like this.</p>
      </div>
    ),
    code: `<h1 className="text-4xl font-extrabold tracking-tight">Heading 1</h1>\n<h2 className="text-3xl font-semibold tracking-tight">Heading 2</h2>\n<p className="leading-7 text-muted-foreground">Paragraph text</p>\n<blockquote className="border-l-2 border-primary pl-6 italic">Quote</blockquote>\n<code className="rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">code</code>`,
    props: [],
  },
  {
    id: "empty", name: "Empty", icon: CircleDashed, category: "Data Display",
    description: "Empty state placeholder for when there's no data.",
    preview: (
      <div className="flex flex-col items-center justify-center p-8 text-center rounded-lg border border-dashed border-border">
        <FileText className="h-10 w-10 text-muted-foreground/50 mb-3" />
        <h3 className="text-sm font-medium">No results found</h3>
        <p className="text-xs text-muted-foreground mt-1 max-w-[200px]">Try adjusting your search or filters to find what you're looking for.</p>
        <Button variant="outline" size="sm" className="mt-4">Clear filters</Button>
      </div>
    ),
    code: `<div className="flex flex-col items-center justify-center p-8 text-center rounded-lg border border-dashed border-border">\n  <FileText className="h-10 w-10 text-muted-foreground/50 mb-3" />\n  <h3 className="text-sm font-medium">No results found</h3>\n  <p className="text-xs text-muted-foreground mt-1">Try adjusting your search.</p>\n  <Button variant="outline" size="sm" className="mt-4">Clear filters</Button>\n</div>`,
    props: [],
  },

  // ═══════════════ FEEDBACK & OVERLAYS ═══════════════
  {
    id: "toast", name: "Toast", icon: Bell, category: "Feedback & Overlays",
    description: "Non-intrusive notification toast (Sonner).",
    preview: (
      <div className="flex gap-3 flex-wrap">
        <Button onClick={() => toast("Event has been created")}>Default Toast</Button>
        <Button variant="outline" onClick={() => toast.success("Successfully saved!")}>Success</Button>
        <Button variant="destructive" onClick={() => toast.error("Something went wrong")}>Error</Button>
      </div>
    ),
    code: `import { toast } from "sonner"\n\ntoast("Event created")\ntoast.success("Saved!")\ntoast.error("Something went wrong")`,
    props: [{ name: "message", type: "string", description: "Toast message content" }],
  },
  {
    id: "sonner", name: "Sonner", icon: Bell, category: "Feedback & Overlays",
    description: "Sonner toast provider with rich features like promises and custom content.",
    preview: (
      <div className="flex gap-3 flex-wrap">
        <Button variant="outline" onClick={() => toast("Event created", { description: "Monday, January 3rd at 6:00pm" })}>With description</Button>
        <Button variant="outline" onClick={() => toast.promise(new Promise(r => setTimeout(r, 2000)), { loading: "Loading...", success: "Done!", error: "Error" })}>Promise toast</Button>
        <Button variant="outline" onClick={() => toast("Event created", { action: { label: "Undo", onClick: () => {} } })}>With action</Button>
      </div>
    ),
    code: `import { toast } from "sonner"\n\ntoast("Title", { description: "Description" })\ntoast.promise(promise, { loading: "...", success: "Done!", error: "Error" })\ntoast("Title", { action: { label: "Undo", onClick: () => {} } })`,
    props: [],
  },
  {
    id: "alert", name: "Alert", icon: AlertTriangle, category: "Feedback & Overlays",
    description: "Inline alert banner for important messages.",
    preview: (
      <div className="w-full max-w-md space-y-3">
        <Alert><AlertTriangle className="h-4 w-4" /><AlertTitle>Warning</AlertTitle><AlertDescription>This action cannot be undone.</AlertDescription></Alert>
        <Alert variant="destructive"><AlertTriangle className="h-4 w-4" /><AlertTitle>Error</AlertTitle><AlertDescription>Something went wrong.</AlertDescription></Alert>
      </div>
    ),
    code: `import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"\n\n<Alert>\n  <AlertTitle>Warning</AlertTitle>\n  <AlertDescription>This action cannot be undone.</AlertDescription>\n</Alert>`,
    props: [{ name: "variant", type: '"default" | "destructive"', default: '"default"', description: "Alert variant" }],
  },
  {
    id: "alert-dialog", name: "Alert Dialog", icon: AlertTriangle, category: "Feedback & Overlays",
    description: "Modal dialog for confirmations that require explicit user action.",
    preview: (
      <AlertDialog>
        <AlertDialogTrigger asChild><Button variant="destructive">Delete Account</Button></AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>This action cannot be undone. This will permanently delete your account and remove your data from our servers.</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    ),
    code: `import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"\n\n<AlertDialog>\n  <AlertDialogTrigger>Open</AlertDialogTrigger>\n  <AlertDialogContent>\n    <AlertDialogHeader>\n      <AlertDialogTitle>Are you sure?</AlertDialogTitle>\n      <AlertDialogDescription>This cannot be undone.</AlertDialogDescription>\n    </AlertDialogHeader>\n    <AlertDialogFooter>\n      <AlertDialogCancel>Cancel</AlertDialogCancel>\n      <AlertDialogAction>Continue</AlertDialogAction>\n    </AlertDialogFooter>\n  </AlertDialogContent>\n</AlertDialog>`,
    props: [
      { name: "open", type: "boolean", description: "Controlled open state" },
      { name: "onOpenChange", type: "(open: boolean) => void", description: "Open change handler" },
    ],
  },
  {
    id: "tooltip", name: "Tooltip", icon: MessageSquare, category: "Feedback & Overlays",
    description: "Hover tooltip for additional context.",
    preview: (
      <div className="flex gap-4">
        <Tooltip><TooltipTrigger asChild><Button variant="outline">Top</Button></TooltipTrigger><TooltipContent side="top"><p>Tooltip on top</p></TooltipContent></Tooltip>
        <Tooltip><TooltipTrigger asChild><Button variant="outline">Bottom</Button></TooltipTrigger><TooltipContent side="bottom"><p>Tooltip on bottom</p></TooltipContent></Tooltip>
        <Tooltip><TooltipTrigger asChild><Button variant="outline">Left</Button></TooltipTrigger><TooltipContent side="left"><p>Tooltip on left</p></TooltipContent></Tooltip>
      </div>
    ),
    code: `import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"\n\n<Tooltip>\n  <TooltipTrigger>Hover</TooltipTrigger>\n  <TooltipContent>Tooltip text</TooltipContent>\n</Tooltip>`,
    props: [{ name: "side", type: '"top" | "right" | "bottom" | "left"', default: '"top"', description: "Tooltip position" }],
  },
  {
    id: "popover", name: "Popover", icon: PanelTop, category: "Feedback & Overlays",
    description: "Click-triggered floating content panel.",
    preview: (
      <Popover>
        <PopoverTrigger asChild><Button variant="outline">Open Popover</Button></PopoverTrigger>
        <PopoverContent className="w-64">
          <div className="space-y-2">
            <h4 className="text-sm font-medium">Settings</h4>
            <p className="text-xs text-muted-foreground">Configure your preferences here.</p>
          </div>
        </PopoverContent>
      </Popover>
    ),
    code: `import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"\n\n<Popover>\n  <PopoverTrigger>Open</PopoverTrigger>\n  <PopoverContent>Content here</PopoverContent>\n</Popover>`,
    props: [{ name: "align", type: '"start" | "center" | "end"', default: '"center"', description: "Alignment" }],
  },
  {
    id: "dialog", name: "Dialog", icon: Sparkles, category: "Feedback & Overlays",
    description: "Modal dialog with overlay backdrop.",
    preview: (
      <Dialog>
        <DialogTrigger asChild><Button>Open Dialog</Button></DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you sure?</DialogTitle>
            <DialogDescription>This action cannot be undone.</DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline">Cancel</Button>
            <Button>Confirm</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    ),
    code: `import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"\n\n<Dialog>\n  <DialogTrigger>Open</DialogTrigger>\n  <DialogContent>\n    <DialogHeader><DialogTitle>Title</DialogTitle></DialogHeader>\n    Content here\n  </DialogContent>\n</Dialog>`,
    props: [
      { name: "open", type: "boolean", description: "Controlled open state" },
      { name: "onOpenChange", type: "(open: boolean) => void", description: "Open change handler" },
    ],
  },
  {
    id: "sheet", name: "Sheet", icon: PanelRight, category: "Feedback & Overlays",
    description: "Slide-out panel from screen edge.",
    preview: (
      <Sheet>
        <SheetTrigger asChild><Button variant="outline">Open Sheet</Button></SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Sheet Title</SheetTitle>
            <SheetDescription>This is a sheet panel that slides in from the side.</SheetDescription>
          </SheetHeader>
          <div className="py-4">
            <p className="text-sm text-muted-foreground">Sheet content goes here.</p>
          </div>
        </SheetContent>
      </Sheet>
    ),
    code: `import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"\n\n<Sheet>\n  <SheetTrigger>Open</SheetTrigger>\n  <SheetContent>\n    <SheetHeader><SheetTitle>Title</SheetTitle></SheetHeader>\n    Content\n  </SheetContent>\n</Sheet>`,
    props: [
      { name: "side", type: '"top" | "right" | "bottom" | "left"', default: '"right"', description: "Side the sheet slides from" },
    ],
  },
  {
    id: "drawer", name: "Drawer", icon: PanelLeft, category: "Feedback & Overlays",
    description: "Touch-friendly bottom drawer (mobile-first).",
    preview: (
      <Drawer>
        <DrawerTrigger asChild><Button variant="outline">Open Drawer</Button></DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Move goal</DrawerTitle>
            <DrawerDescription>Set your daily activity goal.</DrawerDescription>
          </DrawerHeader>
          <div className="p-4">
            <Slider defaultValue={[350]} max={500} step={10} />
          </div>
          <DrawerFooter>
            <Button>Submit</Button>
            <DrawerClose asChild><Button variant="outline">Cancel</Button></DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    ),
    code: `import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer"\n\n<Drawer>\n  <DrawerTrigger>Open</DrawerTrigger>\n  <DrawerContent>\n    <DrawerHeader><DrawerTitle>Title</DrawerTitle></DrawerHeader>\n    Content\n  </DrawerContent>\n</Drawer>`,
    props: [],
  },
  {
    id: "hover-card", name: "Hover Card", icon: MousePointerClick, category: "Feedback & Overlays",
    description: "Card that appears on hover for previewing content.",
    preview: (
      <HoverCard>
        <HoverCardTrigger asChild><Button variant="link">@novacraft</Button></HoverCardTrigger>
        <HoverCardContent className="w-72">
          <div className="flex gap-4">
            <Avatar><AvatarFallback className="bg-primary/20 text-primary">NC</AvatarFallback></Avatar>
            <div className="space-y-1">
              <h4 className="text-sm font-semibold">NovaCraft UI</h4>
              <p className="text-xs text-muted-foreground">A futuristic component library for modern web apps.</p>
              <div className="flex items-center gap-2 pt-1">
                <CalendarIcon className="h-3 w-3 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">Joined March 2026</span>
              </div>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    ),
    code: `import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"\n\n<HoverCard>\n  <HoverCardTrigger>Hover me</HoverCardTrigger>\n  <HoverCardContent>Preview content</HoverCardContent>\n</HoverCard>`,
    props: [],
  },
  {
    id: "context-menu", name: "Context Menu", icon: MousePointerClick, category: "Feedback & Overlays",
    description: "Right-click context menu with accessible keyboard navigation.",
    preview: (
      <ContextMenu>
        <ContextMenuTrigger className="flex h-24 w-full max-w-sm items-center justify-center rounded-md border border-dashed border-border text-sm text-muted-foreground">
          Right-click here
        </ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuItem>Back</ContextMenuItem>
          <ContextMenuItem>Forward</ContextMenuItem>
          <ContextMenuItem>Reload</ContextMenuItem>
          <ContextMenuItem>View Source</ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    ),
    code: `import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger } from "@/components/ui/context-menu"\n\n<ContextMenu>\n  <ContextMenuTrigger>Right-click here</ContextMenuTrigger>\n  <ContextMenuContent>\n    <ContextMenuItem>Item 1</ContextMenuItem>\n  </ContextMenuContent>\n</ContextMenu>`,
    props: [],
  },
  {
    id: "dropdown-menu", name: "Dropdown Menu", icon: ChevronDown, category: "Feedback & Overlays",
    description: "Dropdown menu triggered by a button click.",
    preview: (
      <DropdownMenu>
        <DropdownMenuTrigger asChild><Button variant="outline">Open menu <ChevronDown className="ml-1 h-4 w-4" /></Button></DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Log out</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
    code: `import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"\n\n<DropdownMenu>\n  <DropdownMenuTrigger>Open</DropdownMenuTrigger>\n  <DropdownMenuContent>\n    <DropdownMenuItem>Item</DropdownMenuItem>\n  </DropdownMenuContent>\n</DropdownMenu>`,
    props: [],
  },
  {
    id: "command", name: "Command", icon: CommandIcon, category: "Feedback & Overlays",
    description: "Command palette / search dialog (like ⌘K).",
    preview: (
      <Command className="rounded-lg border border-border max-w-sm">
        <CommandInput placeholder="Type a command..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>Calendar</CommandItem>
            <CommandItem>Search</CommandItem>
            <CommandItem>Settings</CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    ),
    code: `import { Command, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem } from "@/components/ui/command"\n\n<Command>\n  <CommandInput placeholder="Search..." />\n  <CommandList>\n    <CommandEmpty>No results.</CommandEmpty>\n    <CommandGroup heading="Items">\n      <CommandItem>Item 1</CommandItem>\n    </CommandGroup>\n  </CommandList>\n</Command>`,
    props: [],
  },
  {
    id: "combobox", name: "Combobox", icon: ChevronsUpDown, category: "Feedback & Overlays",
    description: "Searchable select built with Command + Popover.",
    preview: (
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" className="w-[200px] justify-between">
            Select framework... <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandInput placeholder="Search..." />
            <CommandList>
              <CommandEmpty>No framework found.</CommandEmpty>
              <CommandGroup>
                <CommandItem>React</CommandItem>
                <CommandItem>Vue</CommandItem>
                <CommandItem>Svelte</CommandItem>
                <CommandItem>Angular</CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    ),
    code: `// Combobox = Popover + Command\n\n<Popover>\n  <PopoverTrigger asChild>\n    <Button variant="outline">Select...</Button>\n  </PopoverTrigger>\n  <PopoverContent className="p-0">\n    <Command>\n      <CommandInput placeholder="Search..." />\n      <CommandList>\n        <CommandGroup>\n          <CommandItem>React</CommandItem>\n        </CommandGroup>\n      </CommandList>\n    </Command>\n  </PopoverContent>\n</Popover>`,
    props: [],
  },
  {
    id: "date-picker", name: "Date Picker", icon: CalendarIcon, category: "Feedback & Overlays",
    description: "Date picker built with Calendar + Popover.",
    preview: (
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" className="w-[220px] justify-start text-left font-normal text-muted-foreground">
            <CalendarIcon className="mr-2 h-4 w-4" /> Pick a date
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar mode="single" />
        </PopoverContent>
      </Popover>
    ),
    code: `// Date Picker = Popover + Calendar\n\nimport { Calendar } from "@/components/ui/calendar"\nimport { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"\n\n<Popover>\n  <PopoverTrigger asChild>\n    <Button variant="outline">Pick a date</Button>\n  </PopoverTrigger>\n  <PopoverContent className="w-auto p-0">\n    <Calendar mode="single" selected={date} onSelect={setDate} />\n  </PopoverContent>\n</Popover>`,
    props: [],
  },
];

const categories = ["Form Inputs", "Layout & Navigation", "Data Display", "Feedback & Overlays"];

export default function Components() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeId = searchParams.get("c") || "button";
  const [search, setSearch] = useState("");

  const filtered = components.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  const active = components.find((c) => c.id === activeId) || components[0];

  return (
    <div className="flex h-[calc(100vh-4rem)] overflow-hidden">
      {/* Sidebar — independent scroll */}
      <aside aria-label="Components" className="w-64 border-r border-border hidden md:flex md:flex-col shrink-0">
        <div className="p-4 pb-2">
          <Input
            placeholder="Search components..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="h-9 text-sm"
            aria-label="Search components"
          />
        </div>
        <div className="flex-1 overflow-y-auto px-4 pb-4 scrollbar-thin">
          {categories.map((cat) => {
            const items = filtered.filter((c) => c.category === cat);
            if (items.length === 0) return null;
            return (
              <div key={cat} className="mb-6">
                <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2 px-2">{cat}</h3>
                <div className="space-y-0.5">
                  {items.map((c) => (
                    <button
                      key={c.id}
                      type="button"
                      aria-current={activeId === c.id ? "page" : undefined}
                      onClick={() => setSearchParams({ c: c.id })}
                      className={`w-full flex items-center gap-2 px-2 py-1.5 rounded-md text-sm transition-colors text-left ${
                        activeId === c.id
                          ? "bg-primary/10 text-primary"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                      }`}
                    >
                      <c.icon className="h-3.5 w-3.5 shrink-0" />
                      {c.name}
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </aside>

      {/* Main Content — independent scroll */}
      <main id="main-content" className="flex-1 overflow-y-auto p-6 md:p-10">
        <motion.div
          key={active.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-3 mb-2">
            <active.icon className="h-5 w-5 text-primary" />
            <h1 className="text-3xl font-bold">{active.name}</h1>
          </div>
          <p className="text-muted-foreground mb-8">{active.description}</p>

          {/* Preview */}
          <div className="mb-8">
            <h2 className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-3">Preview</h2>
            <ComponentPreview>{active.preview}</ComponentPreview>
          </div>

          {/* Code */}
          <div className="mb-8">
            <h2 className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-3">Usage</h2>
            <CodeBlock code={active.code} />
          </div>

          {/* Props */}
          {active.props.length > 0 && (
            <div className="mb-12">
              <h2 className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-3">API Reference</h2>
              <PropsTable props={active.props} />
            </div>
          )}
        </motion.div>
      </main>
    </div>
  );
}
