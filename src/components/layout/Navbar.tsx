import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../../assets/logo2.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Products", hasDropdown: true },
    { label: "Company", hasDropdown: true },
    { label: "Resources", hasDropdown: true },
    { label: "Pricing", hasDropdown: false },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative flex items-center h-16">

          {/* LEFT: Logo */}
          <div className="flex items-center gap-2 cursor-pointer">
            <img
              src={logo}
              alt="CaartZee logo"
              className="h-9 w-9 object-contain"
            />
            <span className="text-lg font-semibold text-gray-900 tracking-tight">
              CaartZee
            </span>
          </div>

          {/* CENTER: Desktop Navigation */}
          <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-7 text-[15px] font-medium text-gray-800">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-1 cursor-pointer hover:text-brand-primary transition-colors"
              >
                {item.label}
                {item.hasDropdown && (
                  <ChevronDown className="w-4 h-4 mt-[1px]" />
                )}
              </div>
            ))}
          </nav>

          {/* RIGHT: Desktop Actions */}
          <div className="ml-auto hidden md:flex items-center gap-6">
            <button className="text-[15px] font-medium text-gray-700 hover:text-brand-primary transition-colors">
              Sign in
            </button>

            <button className="h-9 px-5 rounded-md bg-brand-primary hover:bg-brand-accent text-white text-sm font-medium transition">
              Start free
            </button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="ml-auto md:hidden">
            <button
              onClick={() => setOpen(!open)}
              className="p-2 rounded-md text-gray-700 hover:bg-gray-100 transition"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-6 py-4 space-y-3">

            {navItems.map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-between py-2 text-sm font-medium text-gray-800 cursor-pointer hover:text-brand-primary"
              >
                {item.label}
                {item.hasDropdown && (
                  <ChevronDown className="w-4 h-4" />
                )}
              </div>
            ))}

            <div className="pt-4 space-y-3 border-t border-gray-200">
              <button className="w-full text-left text-sm font-medium text-gray-700 hover:text-brand-primary">
                Sign in
              </button>

              <button className="w-full h-10 rounded-md bg-brand-primary hover:bg-brand-accent text-white text-sm font-medium transition">
                Start free
              </button>
            </div>

          </div>
        </div>
      )}
    </header>
  );
}
