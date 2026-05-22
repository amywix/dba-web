import { Link } from "wouter";
import daLogoWordmark from "@assets/da_logo_1779201943317.png";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.04] bg-background pt-20 pb-10 px-6 mt-auto">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16">
          <div className="md:col-span-5 lg:col-span-4">
            <Link href="/" className="inline-block mb-6">
              <img src={daLogoWordmark} alt="Done By Amy" className="h-10 object-contain" />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mb-6">
              Premium AI automation systems for Australian small businesses. We build the infrastructure that lets you scale without the overwhelm.
            </p>
            <p className="text-sm font-medium text-white/70">
              <a href="mailto:admin@donebyamy.com" className="hover:text-primary transition-colors">admin@donebyamy.com</a>
            </p>
          </div>
          
          <div className="md:col-span-7 lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-white font-bold mb-5 text-xs tracking-widest uppercase">Products</h4>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li><Link href="/#tradiecatch" className="hover:text-white transition-colors">TradieCatch</Link></li>
                <li><Link href="/#autodial" className="hover:text-white transition-colors">AutoDial</Link></li>
                <li><Link href="/#services" className="hover:text-white transition-colors">AI Chatbots</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-5 text-xs tracking-widest uppercase">Services</h4>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li><Link href="/#services" className="hover:text-white transition-colors">Workflow Automation</Link></li>
                <li><Link href="/#services" className="hover:text-white transition-colors">Websites</Link></li>
                <li><Link href="/#services" className="hover:text-white transition-colors">Custom Apps</Link></li>
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h4 className="text-white font-bold mb-5 text-xs tracking-widest uppercase">Company</h4>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li><Link href="/about" className="hover:text-white transition-colors">About Amy</Link></li>
                <li><Link href="/blog" className="hover:text-white transition-colors">Playbooks & Blog</Link></li>
                <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/[0.04] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground/60">
          <p>&copy; {new Date().getFullYear()} Done By Amy. All rights reserved.</p>
          <p>Australia-based, working with businesses nationally.</p>
        </div>
      </div>
    </footer>
  );
}
