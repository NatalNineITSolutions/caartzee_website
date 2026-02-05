import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";
import Logo from "./Logo";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    products: [
      { name: "E-commerce Platform", href: "/products" },
      { name: "ERP Software", href: "/products" },
      { name: "CaartZee Snap", href: "/products" },
      { name: "Sales Navigation", href: "/products" },
      { name: "CaartZee Prime", href: "/products" },
    ],
    company: [
      { name: "About Us", href: "/company" },
      { name: "Careers", href: "/company" },
      { name: "Blog", href: "/resources" },
      { name: "Press Kit", href: "/resources" },
      { name: "Partners", href: "/company" },
    ],
    support: [
      { name: "Help Center", href: "/resources" },
      { name: "Documentation", href: "/resources" },
      { name: "API Reference", href: "/resources" },
      { name: "Community", href: "/resources" },
      { name: "Contact Us", href: "/company" },
    ],
    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Cookie Policy", href: "#" },
      { name: "Refund Policy", href: "#" },
    ],
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <div className="mb-4">
              <Logo variant="light" />
            </div>
            <p className="text-background/70 text-sm mb-6 max-w-xs">
              The smart way to build and scale your business. All-in-one platform for e-commerce, ERP, and growth.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center hover:bg-primary transition-colors duration-200"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-display font-semibold mb-4">Products</h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm text-background/70 hover:text-background transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm text-background/70 hover:text-background transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-display font-semibold mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm text-background/70 hover:text-background transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-background/70">
                <Mail className="w-4 h-4" />
                hello@cartzee.com
              </li>
              <li className="flex items-center gap-2 text-sm text-background/70">
                <Phone className="w-4 h-4" />
                +91 98765 43210
              </li>
              <li className="flex items-start gap-2 text-sm text-background/70">
                <MapPin className="w-4 h-4 mt-0.5" />
                Mumbai, India
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-background/60">
            © {currentYear} CaartZee. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            {footerLinks.legal.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-background/60 hover:text-background transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
