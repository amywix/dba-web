import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import linkBanner from "@assets/link_img_nobg.png";

const links = [
  { label: "Home",      href: "/"             },
  { label: "Services",  href: "/#services"    },
  { label: "About",     href: "/about"        },
  { label: "Blog",      href: "/blog"         },
  { label: "FAQ",       href: "/faq"          },
  { label: "Contact",   href: "/contact"      },
];

export default function Navbar() {
  const [location] = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-background/80 backdrop-blur-xl border-b border-white/[0.04] shadow-sm py-3" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center group" data-testid="nav-logo">
          <img 
            src={linkBanner} 
            alt="Done By Amy" 
            className="h-9 md:h-11 object-contain transition-transform group-hover:scale-[1.02]" 
          />
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              data-testid={`nav-link-${label.toLowerCase()}`}
              className={`transition-colors ${
                isActive(href)
                  ? "text-white"
                  : "text-muted-foreground hover:text-white"
              }`}
            >
              {label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link href="/get-started" className="hidden sm:block">
            <Button
              data-testid="nav-cta-button"
              className="bg-white hover:bg-white/90 text-black rounded-full px-6 font-bold text-sm shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]"
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
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/10 text-white hover:bg-white/5 transition-colors"
          >
            {open ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out border-t border-white/5 bg-background/95 backdrop-blur-xl absolute w-full ${
          open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 border-transparent"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8 flex flex-col gap-2">
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              data-testid={`nav-mobile-link-${label.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className={`px-4 py-3.5 rounded-xl text-base font-semibold transition-colors ${
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
              className="mt-4 w-full h-14 bg-white hover:bg-white/90 text-black rounded-full font-bold shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            >
              Get Your Free Audit
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
