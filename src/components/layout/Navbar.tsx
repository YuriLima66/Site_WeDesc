import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const getNavLinkClass = (path: string) => {
    return cn(
      navigationMenuTriggerStyle(),
      "text-white bg-transparent hover:bg-black/20",
      isActive(path)
        ? "text-wedesc-yellow hover:text-wedesc-yellow bg-black/20"
        : "hover:text-wedesc-yellow"
    );
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        scrolled ? "bg-black shadow-lg" : "bg-black"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img
              src="/public/lovable-uploads/weDesc_branco.png"
              alt="WeDesc Logo"
              className="h-10"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList className="gap-1">
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={`text-white hover:text-wedesc-yellow bg-black ${
                      location.pathname === "/it-support" ||
                      location.pathname === "/security" ||
                      location.pathname === "/cloud"
                        ? "text-wedesc-yellow bg-black/50"
                        : "hover:bg-black/50"
                    }`}
                  >
                    Serviços
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <Link
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-wedesc-yellow/50 to-wedesc-yellow p-6 no-underline outline-none focus:shadow-md"
                            to="/it-support"
                          >
                            <div className="mb-2 mt-4 text-lg font-medium text-white">
                              Soluções WeDesc
                            </div>
                            <p className="text-sm leading-tight text-white/90">
                              Gestão de TI completa para o seu negócio
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <ListItem
                        to="/it-support"
                        title="Gestão e Suporte de TI"
                        active={isActive("/it-support")}
                      >
                        Suporte técnico e gestão completa de TI
                      </ListItem>
                      <ListItem
                        to="/security"
                        title="Soluções em Segurança"
                        active={isActive("/security")}
                      >
                        Proteção total para seus dados e sistemas
                      </ListItem>
                      <ListItem
                        to="/cloud"
                        title="Soluções em Nuvem"
                        active={isActive("/cloud")}
                      >
                        Migração e gestão de serviços em nuvem
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={`text-white hover:text-wedesc-yellow bg-transparent ${
                      location.pathname.includes("/segment/")
                        ? "text-wedesc-yellow bg-black/20"
                        : "hover:bg-black/20"
                    }`}
                  >
                    Segmentos
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                      <ListItem
                        to="/segment/industry"
                        title="Indústria"
                        active={isActive("/segment/industry")}
                      >
                        Soluções de TI para o setor industrial
                      </ListItem>
                      <ListItem
                        to="/segment/service"
                        title="Serviços"
                        active={isActive("/segment/service")}
                      >
                        Tecnologia para empresas de serviço
                      </ListItem>
                      <ListItem
                        to="/transportes"
                        title="Transporte e Logística"
                        active={isActive("/transportes")}
                      >
                        TI e segurança para logística
                      </ListItem>
                      <ListItem
                        to="/segment/retail"
                        title="Varejo"
                        active={isActive("/segment/retail")}
                      >
                        Soluções específicas para o comércio
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/about">
                    <NavigationMenuLink className={getNavLinkClass("/about")}>
                      Sobre
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/career">
                    <NavigationMenuLink className={getNavLinkClass("/career")}>
                      Carreira
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/contact">
                    <NavigationMenuLink className={getNavLinkClass("/contact")}>
                      Contato
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/contact">
                    <button className="bg-wedesc-yellow hover:bg-wedesc-yellow/90 text-black px-5 py-2 rounded-md transition-all duration-300 ease-in-out ml-2">
                      Fale Conosco
                    </button>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 py-2 bg-black/95 rounded-md border border-gray-800 animate-fade-in">
            <Link
              to="/it-support"
              className={`block px-4 py-2 ${
                isActive("/it-support")
                  ? "text-wedesc-yellow"
                  : "text-white hover:text-wedesc-yellow"
              } transition-all duration-300`}
              onClick={toggleMobileMenu}
            >
              Gestão e Suporte de TI
            </Link>
            <Link
              to="/security"
              className={`block px-4 py-2 ${
                isActive("/security")
                  ? "text-wedesc-yellow"
                  : "text-white hover:text-wedesc-yellow"
              } transition-all duration-300`}
              onClick={toggleMobileMenu}
            >
              Soluções em Segurança
            </Link>
            <Link
              to="/cloud"
              className={`block px-4 py-2 ${
                isActive("/cloud")
                  ? "text-wedesc-yellow"
                  : "text-white hover:text-wedesc-yellow"
              } transition-all duration-300`}
              onClick={toggleMobileMenu}
            >
              Soluções em Nuvem
            </Link>
            <Link
              to="/segment/retail"
              className={`block px-4 py-2 ${
                isActive("/segment/retail")
                  ? "text-wedesc-yellow"
                  : "text-white hover:text-wedesc-yellow"
              } transition-all duration-300`}
              onClick={toggleMobileMenu}
            >
              Varejo
            </Link>
            <Link
              to="/segment/industry"
              className={`block px-4 py-2 ${
                isActive("/segment/industry")
                  ? "text-wedesc-yellow"
                  : "text-white hover:text-wedesc-yellow"
              } transition-all duration-300`}
              onClick={toggleMobileMenu}
            >
              Indústria
            </Link>
            <Link
              to="/segment/service"
              className={`block px-4 py-2 ${
                isActive("/segment/service")
                  ? "text-wedesc-yellow"
                  : "text-white hover:text-wedesc-yellow"
              } transition-all duration-300`}
              onClick={toggleMobileMenu}
            >
              Serviços
            </Link>
            <Link
              to="/about"
              className={`block px-4 py-2 ${
                isActive("/about")
                  ? "text-wedesc-yellow"
                  : "text-white hover:text-wedesc-yellow"
              } transition-all duration-300`}
              onClick={toggleMobileMenu}
            >
              Sobre a WeDesc
            </Link>
            <Link
              to="/security"
              className={`block px-4 py-2 ${
                isActive("/security")
                  ? "text-wedesc-yellow"
                  : "text-white hover:text-wedesc-yellow"
              } transition-all duration-300`}
              onClick={toggleMobileMenu}
            >
              Segurança
            </Link>
            <Link
              to="/career"
              className={`block px-4 py-2 ${
                isActive("/career")
                  ? "text-wedesc-yellow"
                  : "text-white hover:text-wedesc-yellow"
              } transition-all duration-300`}
              onClick={toggleMobileMenu}
            >
              Carreira
            </Link>
            <Link
              to="/contact"
              className={`block px-4 py-2 ${
                isActive("/contact")
                  ? "text-wedesc-yellow"
                  : "text-white hover:text-wedesc-yellow"
              } transition-all duration-300`}
              onClick={toggleMobileMenu}
            >
              Contato
            </Link>
            <Link
              to="/contact"
              className="block mx-4 mt-2 py-2 text-center bg-wedesc-yellow hover:bg-wedesc-yellow/90 text-black rounded-md transition-all duration-300 ease-in-out"
              onClick={toggleMobileMenu}
            >
              Fale Conosco
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & {
    to: string;
    title: string;
    active?: boolean;
  }
>(({ className, to, title, active, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          to={to}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors",
            active
              ? "bg-accent text-accent-foreground hover:bg-accent/80 text-wedesc-yellow"
              : "hover:bg-accent hover:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default Navbar;
