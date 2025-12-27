import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarHeader } from "@/components/ui/sidebar";
import { Home, MessageSquare, Wrench, History, Settings, Info, Mail, HelpCircle, Shield, FileText, Sparkles } from "lucide-react";
import { Link, useLocation } from "wouter";

const menuItems = [
  { title: "Dashboard", icon: Home, url: "/" },
  { title: "AI Chat", icon: MessageSquare, url: "/chat" },
  { title: "Content Tools", icon: Wrench, url: "/content-tools" },
  { title: "History", icon: History, url: "/history" },
  { title: "Settings", icon: Settings, url: "/settings" },
];

const supportItems = [
  { title: "About", icon: Info, url: "/about" },
  { title: "Contact", icon: Mail, url: "/contact" },
  { title: "FAQ", icon: HelpCircle, url: "/faq" },
];

const legalItems = [
  { title: "Privacy Policy", icon: Shield, url: "/privacy" },
  { title: "Terms of Service", icon: FileText, url: "/terms" },
];

export function AppSidebar() {
  const [location] = useLocation();

  return (
    <Sidebar variant="sidebar" collapsible="icon">
      <SidebarHeader className="flex items-center gap-2 px-4 py-6">
        <Sparkles className="h-6 w-6 text-primary" />
        <span className="text-xl font-bold tracking-tight">Ahsan AI</span>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild tooltip={item.title} isActive={location === item.url}>
                    <Link href={item.url} className="flex items-center gap-3">
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Support</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {supportItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild tooltip={item.title} isActive={location === item.url}>
                    <Link href={item.url} className="flex items-center gap-3">
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup className="mt-auto">
          <SidebarGroupLabel>Legal</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {legalItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild tooltip={item.title} isActive={location === item.url}>
                    <Link href={item.url} className="flex items-center gap-3">
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
