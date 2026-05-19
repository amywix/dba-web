import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import logoMark from "@assets/ChatGPT_Image_May_14,_2026,_04_49_39_PM_-_Copy_1779201943316.png";
import daLogoWordmark from "@assets/da_logo_1779201943317.png";

const links = [
  { label: "Home",      href: "/"             },
  { label: "Services",  href: "/#services"   },
  { label: "Products",  href: "/#tradiecatch" },
  { label: "Pricing",   href: "/#pricing"     },
  { label: "About",     href: "/about"        },
  { label: "FAQ",       href: "/faq"          },
  { label: "Contact",   href: "/contact"      },
];

export default function Navbar() {
  const [location] = useLocation();

  const isActive = (href: string) => {
    if (href.startsWith("/#")) return location === "/";
    return location === href;
  };

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3" data-testid="nav-logo">
          <img src={logoMark} alt="Done By Amy" className="w-10 h-10 object-contain" />
          <img src={daLogoWordmark} alt="Done By Amy" className="h-5 hidden sm:block object-contain" />
        </Link>

        <div className="hidden md:flex items-center gap-7 text-sm font-medium">
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              data-testid={`nav-link-${label.toLowerCase()}`}
              className={`transition-colors ${
                isActive(href)
                  ? "text-white"
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              {label}
            </a>
          ))}
        </div>

        <Link href="/get-started">
          <Button
            data-testid="nav-cta-button"
            className="bg-primary hover:bg-primary/90 text-white rounded-full px-6 font-semibold shadow-[0_0_20px_rgba(168,85,247,0.4)]"
          >
            Tell Us About Your Business
          </Button>
        </Link>
      </div>
    </nav>
  );
}
