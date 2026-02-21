import { Link, useLocation } from "react-router-dom";
import { Search, ShoppingBag, ChevronDown } from "lucide-react";
import logo from "@/assets/logo.jpg";

const navLinks = [
  { to: "/", label: "Products" },
  { to: "/affiliation", label: "Affiliation" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const Header = () => {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="ARKCOM IA" className="h-8 w-8 rounded" />
          <span className="text-lg font-bold tracking-tight">ARKCOM IA</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium transition-colors hover:text-foreground ${
                location.pathname === link.to
                  ? "text-foreground font-semibold"
                  : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="https://portal.chariow.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ShoppingBag className="h-4 w-4" />
            See my orders
          </a>
          <button className="flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-sm">
            <img
              src="https://cdn.axazara.com/flags/svg/US.svg"
              alt="US"
              className="h-5 w-5 rounded-full object-cover"
            />
            United States($)
            <ChevronDown className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
