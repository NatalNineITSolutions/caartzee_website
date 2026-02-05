import { Link } from "react-router-dom";

interface LogoProps {
  variant?: "light" | "dark";
  className?: string;
}

const Logo = ({ variant = "dark", className = "" }: LogoProps) => {
  const isLight = variant === "light";
  
  return (
    <Link to="/" className={`flex items-center gap-2 ${className}`}>
      {/* Logo Icon */}
      <div className="relative w-10 h-10 rounded-xl bg-primary flex items-center justify-center overflow-hidden group">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Letter C with cart icon integrated */}
        <svg 
          viewBox="0 0 24 24" 
          className="w-6 h-6 relative z-10"
          fill="none"
        >
          {/* Cart shape integrated into C */}
          <path 
            d="M4 7h2l1 9h10l1-9h2M8 16h8M10 20a1 1 0 100-2 1 1 0 000 2zM16 20a1 1 0 100-2 1 1 0 000 2z" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className="text-primary-foreground"
          />
          {/* Stylized C */}
          <path 
            d="M6 12C6 8.5 8.5 6 12 6s6 2.5 6 6" 
            stroke="currentColor" 
            strokeWidth="2.5" 
            strokeLinecap="round"
            className="text-primary-foreground"
          />
        </svg>
      </div>
      
      {/* Text */}
      <span className={`font-display font-bold text-xl ${isLight ? 'text-white' : 'text-foreground'}`}>
        Caart<span className="text-primary">Zee</span>
      </span>
    </Link>
  );
};

export default Logo;
