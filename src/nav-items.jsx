import { Home, Video, Phone, User } from "lucide-react";
import Index from "./pages/Index.jsx";
import Call from "./pages/Call.jsx";
import Profile from "./pages/Profile.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Call",
    to: "/call",
    icon: <Video className="h-4 w-4" />,
    page: <Call />,
  },
  {
    title: "Profile",
    to: "/profile",
    icon: <User className="h-4 w-4" />,
    page: <Profile />,
  },
];
