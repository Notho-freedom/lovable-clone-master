import { Link } from "react-router-dom";
import logo from "@/assets/logo.jpg";
import { ShoppingBag } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border mt-auto">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-3">
            <Link to="/" className="flex items-center gap-2">
              <img src={logo} alt="ARKCOM IA" className="h-8 w-8 rounded" />
              <span className="text-lg font-bold">ARKCOM IA</span>
            </Link>
            <p className="text-sm text-muted-foreground">🇬🇧 English</p>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-muted-foreground">Links</h4>
            <div className="flex flex-col gap-2">
              <a
                href="https://portal.chariow.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-foreground hover:underline"
              >
                <ShoppingBag className="h-4 w-4" />
                See my orders
              </a>
              <Link to="/about" className="text-sm text-foreground hover:underline">About</Link>
              <Link to="/contact" className="text-sm text-foreground hover:underline">Contact</Link>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-muted-foreground">Legal</h4>
            <div className="flex flex-col gap-2">
              <Link to="/legal-notice" className="text-sm text-foreground hover:underline">Legal notice</Link>
              <Link to="/terms-of-service" className="text-sm text-foreground hover:underline">Terms of use</Link>
              <Link to="/privacy-policy" className="text-sm text-foreground hover:underline">Privacy policy</Link>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border space-y-4">
          <p className="text-xs text-muted-foreground leading-relaxed">
            This website is in no way affiliated with Facebook or Meta. We use advertising to promote our content and products/services to a wider audience. The information provided on this site is for informational purposes only and does not constitute professional or financial advice.
          </p>
          <p className="text-xs text-muted-foreground">
            ARKCOM IA © {new Date().getFullYear()} All rights reserved. Powered by{" "}
            <a href="https://www.chariow.com/" target="_blank" rel="noopener noreferrer" className="underline">
              Chariow
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
