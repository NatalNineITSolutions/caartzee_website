export default function Footer() {
  return (
    <footer className="bg-brand-dark text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-20">

        {/* TOP */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">

          {/* BRAND */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-semibold text-white">
              CaartZee
            </h3>
            <p className="mt-4 text-sm text-gray-400 max-w-sm">
              CaartZee is a modern commerce platform that helps businesses
              build, run, and scale their online stores with confidence.
            </p>
          </div>

          {/* PRODUCT */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
              Product
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="hover:text-white cursor-pointer">Features</li>
              <li className="hover:text-white cursor-pointer">Pricing</li>
              <li className="hover:text-white cursor-pointer">Themes</li>
              <li className="hover:text-white cursor-pointer">Integrations</li>
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
              Company
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="hover:text-white cursor-pointer">About</li>
              <li className="hover:text-white cursor-pointer">Careers</li>
              <li className="hover:text-white cursor-pointer">Blog</li>
              <li className="hover:text-white cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* SUPPORT */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
              Support
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="hover:text-white cursor-pointer">Help Center</li>
              <li className="hover:text-white cursor-pointer">Documentation</li>
              <li className="hover:text-white cursor-pointer">Status</li>
              <li className="hover:text-white cursor-pointer">Security</li>
            </ul>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="mt-16 border-t border-gray-800"></div>

        {/* BOTTOM */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <p>
            © {new Date().getFullYear()} CaartZee. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <span className="hover:text-white cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-white cursor-pointer">
              Terms of Service
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
