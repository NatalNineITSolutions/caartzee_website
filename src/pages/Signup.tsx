import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff, ArrowRight, Mail, User, Phone, CheckCircle2 } from "lucide-react";
import Logo from "@/components/Logo";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual signup logic
    console.log("Signup attempt:", formData);
    navigate("/");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const benefits = [
    "Launch your store for just ₹1",
    "No credit card required",
    "Free setup assistance",
    "24/7 customer support",
  ];

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Form */}
      <div className="flex-1 flex flex-col justify-center px-4 sm:px-6 lg:px-8 py-12">
        <div className="mx-auto w-full max-w-md">
          {/* Logo */}
          <div className="mb-8">
            <Logo />
          </div>

          {/* Header */}
          <div className="mb-8">
            <h1 className="font-display text-3xl font-bold text-foreground mb-2">
              Start your journey
            </h1>
            <p className="text-muted-foreground">
              Create your account and launch your business today
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  className="pl-10"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="pl-10"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={handleChange}
                  className="pl-10"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a strong password"
                  value={formData.password}
                  onChange={handleChange}
                  className="pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground group">
              Create Account
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>

            <p className="text-xs text-center text-muted-foreground">
              By signing up, you agree to our{" "}
              <a href="#" className="text-primary hover:underline">Terms of Service</a>
              {" "}and{" "}
              <a href="#" className="text-primary hover:underline">Privacy Policy</a>
            </p>
          </form>

          {/* Divider */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-background px-4 text-muted-foreground">Or continue with</span>
            </div>
          </div>

          {/* Social Login */}
          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" className="w-full">
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Google
            </Button>
            <Button variant="outline" className="w-full">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"/>
              </svg>
              Apple
            </Button>
          </div>

          {/* Sign In Link */}
          <p className="mt-8 text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link to="/login" className="text-primary font-medium hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>

      {/* Right Side - Benefits */}
      <div className="hidden lg:flex flex-1 hero-section items-center justify-center p-12">
        <div className="max-w-lg">
          <h2 className="font-display text-4xl font-bold text-white mb-6">
            Launch Your Website for Just ₹1
          </h2>
          <p className="text-lg text-white/80 mb-8">
            Start selling online with CaartZee. No technical hassle. No long-term commitment.
          </p>
          
          <ul className="space-y-4 mb-10">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent" />
                <span className="text-white/90">{benefit}</span>
              </li>
            ))}
          </ul>

          <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm">
            <div className="text-sm text-white/60 mb-2">Trusted by</div>
            <div className="font-display text-3xl font-bold text-white">5000+ Businesses</div>
            <div className="text-white/60 mt-1">across India</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
