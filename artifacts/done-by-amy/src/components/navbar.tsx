import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import linkBanner from "@assets/link_img_1779201943317.png";

const links = [
  { label: "Home",      href: "/"             },
  { label: "Services",  href: "/#services"   },
  { label: "Pricing",   href: "/#pricing"     },
  { label: "About",     href: "/about"        },
  { label: "FAQ",       href: "/faq"          },
  { label: "Contact",   href: "/contact"      },
];

export default function Navbar() {
  const [location] = useLocation();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => {
    if (href.startsWith("/#")) return location === "/";
    return location === href;
  };

  useEffect(() => {
    setOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center" data-testid="nav-logo">
          <img src={linkBanner} alt="Done By Amy" className="h-12 object-contain rounded-lg" />
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

        <div className="flex items-center gap-3">
          <Link href="/get-started" className="hidden sm:block">
            <Button
              data-testid="nav-cta-button"
              className="bg-primary hover:bg-primary/90 text-white rounded-full px-6 font-semibold shadow-[0_0_20px_rgba(168,85,247,0.4)]"
            >
              Get Your Free Audit
            </Button>
          </Link>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            data-testid="nav-mobile-toggle"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-full border border-white/10 text-white hover:bg-white/5 transition-colors"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out border-t border-white/5 bg-background/95 backdrop-blur-md ${
          open ? "max-h-[480px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container mx-auto px-6 py-6 flex flex-col gap-1">
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              data-testid={`nav-mobile-link-${label.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className={`px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                isActive(href)
                  ? "text-white bg-white/5"
                  : "text-muted-foreground hover:text-white hover:bg-white/5"
              }`}
            >
              {label}
            </a>
          ))}
          <Link href="/get-started">
            <Button
              data-testid="nav-mobile-cta-button"
              className="mt-4 w-full h-12 bg-primary hover:bg-primary/90 text-white rounded-full font-semibold shadow-[0_0_20px_rgba(168,85,247,0.4)]"
            >
              Get Your Free Audit
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
