import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const services = [
    { title: "EXIM Services", path: "/services/exim" },
    { title: "Registration Services", path: "/services/registration" },
    { title: "Corporate Compliance", path: "/services/compliance" },
    { title: "Consulting & Advisory", path: "/services/consulting" },
    { title: "NPA & Financial Recovery", path: "/services/npa" },
    { title: "Insurance Claims", path: "/services/insurance" },
    { title: "Additional Support", path: "/services/additional" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="text-2xl font-bold text-gradient">
            Compliance Globe Next
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6 absolute left-1/2 transform -translate-x-1/2">
          <Link
            to="/"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive("/") ? "text-primary" : "text-foreground"
            }`}
          >
            Home
          </Link>

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-medium">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-background border border-border/40 rounded-lg shadow-lg">
                    {services.map((service) => (
                      <li key={service.path}>
                        <NavigationMenuLink asChild>
                          <Link
                            to={service.path}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">
                              {service.title}
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Link
            to="/about"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive("/about") ? "text-primary" : "text-foreground"
            }`}
          >
            About
          </Link>
        </div>

        <div className="hidden md:block">
          <Link to="/contact">
            <Button className="shadow-elegant">Contact Us</Button>
          </Link>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden absolute right-4">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col space-y-4 mt-8">
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium transition-colors hover:text-primary"
              >
                Home
              </Link>
              <div className="space-y-2">
                <div className="text-lg font-medium">Services</div>
                <div className="ml-4 space-y-2">
                  {services.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      onClick={() => setIsOpen(false)}
                      className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              </div>
              <Link
                to="/about"
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium transition-colors hover:text-primary"
              >
                About
              </Link>
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                <Button className="w-full shadow-elegant">Contact Us</Button>
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navigation;
