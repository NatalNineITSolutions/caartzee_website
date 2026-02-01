import HeroCartAnimation from "../components/HeroCartAnimation";

export default function Home() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
            {/* DARK HERO */}
            <section className="bg-brand-dark text-white">
                <div className="max-w-7xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-16 items-center">

                    {/* LEFT */}
                    <div>
                        <p className="text-sm uppercase tracking-widest text-brand-soft">
                            Commerce Platform
                        </p>

                        <h1 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight">
                            Building tailored commerce <br />
                            platforms for modern <br />
                            businesses
                        </h1>

                        <p className="mt-6 text-lg text-gray-300 max-w-xl">
                            We design, build, and scale high-performance commerce solutions
                            engineered for growth, flexibility, and global reach.
                        </p>

                        <div className="mt-8 flex items-center gap-4">
                            <button className="h-11 px-6 rounded-md bg-brand-primary hover:bg-brand-accent transition text-white text-sm font-medium">
                                Get started
                            </button>

                            <button className="h-11 px-6 rounded-md border border-brand-soft text-white hover:bg-white hover:text-brand-dark transition text-sm font-medium">
                                View capabilities
                            </button>
                        </div>
                    </div>

                    {/* RIGHT VISUAL */}
                    <div className="relative flex justify-center">
                        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary to-brand-accent opacity-20 blur-3xl rounded-full"></div>
                        <HeroCartAnimation />
                    </div>


                </div>
            </section>

            {/* TRUSTED BRANDS SCROLL */}
            <section className="bg-brand-dark py-16 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">

                    <p className="text-center text-sm uppercase tracking-widest text-brand-soft">
                        Trusted by fast-growing brands
                    </p>

                    <div className="mt-10 overflow-hidden">
                        <div className="flex gap-12 marquee">

                            {[
                                "FRAME",
                                "NABX",
                                "PortAventura",
                                "UltiMaker",
                                "Greetwell",
                                "DRAPID",
                                "WATERMARK",
                            ].map((brand, i) => (
                                <div
                                    key={`brand-${i}`}
                                    className="flex items-center justify-center min-w-[180px] h-20 rounded-lg border border-brand-primary text-white text-lg font-semibold opacity-80"
                                >
                                    {brand}
                                </div>
                            ))}

                            {/* duplicate for loop */}
                            {[
                                "FRAME",
                                "NABX",
                                "PortAventura",
                                "UltiMaker",
                                "Greetwell",
                                "DRAPID",
                                "WATERMARK",
                            ].map((brand, i) => (
                                <div
                                    key={`brand-dup-${i}`}
                                    className="flex items-center justify-center min-w-[180px] h-20 rounded-lg border border-brand-primary text-white text-lg font-semibold opacity-80"
                                >
                                    {brand}
                                </div>
                            ))}

                        </div>
                    </div>

                </div>
            </section>

            <section className="relative py-20 bg-gradient-to-br from-brand-soft via-white to-brand-soft">
                <div className="max-w-7xl mx-auto px-6">

                    {/* Section Header */}
                    <div className="text-center max-w-3xl mx-auto mb-14">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            Your Global Commerce Partner
                        </h2>
                        <p className="mt-4 text-gray-600 text-lg">
                            Everything you need to launch, scale, and manage modern commerce —
                            built for performance and growth.
                        </p>
                    </div>

                    {/* Feature Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                        {/* Card */}
                        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                Launch Faster
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Go live quickly with optimized storefronts, ready-to-use integrations,
                                and modern tooling.
                            </p>
                        </div>

                        {/* Card */}
                        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                Scale Confidently
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Handle high traffic, complex catalogs, and global customers without
                                compromising speed.
                            </p>
                        </div>

                        {/* Card */}
                        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                Enterprise-Ready
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Security, reliability, and performance designed for serious businesses.
                            </p>
                        </div>

                        {/* Card */}
                        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                Built to Convert
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                UX-focused design patterns that improve engagement and conversions.
                            </p>
                        </div>

                    </div>

                    {/* Accent Line */}
                    <div className="mt-16 flex justify-center">
                        <div className="h-1 w-24 rounded-full bg-brand-primary"></div>
                    </div>

                </div>
            </section>


            {/* ================= STOREFRONT FOUNDATION ================= */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">

                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            Start with professionally designed storefronts
                        </h2>
                        <p className="mt-4 text-lg text-gray-600">
                            Launch quickly with modern, conversion-focused storefronts
                            that you can customize as your business grows.
                        </p>
                    </div>

                    <div className="mt-16 grid sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {[
                            "Modern layouts",
                            "Mobile optimized",
                            "Customizable design",
                            "Conversion-focused",
                            "Fast performance",
                            "Scalable foundation",
                        ].map((item) => (
                            <div
                                key={item}
                                className="
                  bg-white
                  p-6
                  rounded-xl
                  border border-gray-100
                  shadow-[0_10px_30px_-10px_rgba(109,40,217,0.25)]
                  hover:shadow-[0_18px_45px_-12px_rgba(109,40,217,0.35)]
                  hover:-translate-y-1
                  transition-all
                  duration-300
                "
                            >
                                <h4 className="text-lg font-semibold text-gray-900">
                                    {item}
                                </h4>
                                <p className="mt-2 text-sm text-gray-600">
                                    Designed to help you start strong and grow seamlessly.
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* THEMES SHOWCASE */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">

                    {/* Header */}
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            Launch with conversion-ready themes
                        </h2>
                        <p className="mt-4 text-lg text-gray-600">
                            Professionally designed storefronts built for speed,
                            flexibility, and modern commerce.
                        </p>
                    </div>

                    {/* Themes Grid */}
                    <div className="mt-16 grid sm:grid-cols-2 md:grid-cols-3 gap-10">
                        {["Titan", "Aura", "Linen", "Mono", "Riviera", "Nova"].map((theme) => (
                            <div
                                key={theme}
                                className="
            group
            rounded-2xl
            overflow-hidden
            bg-white
            border border-gray-100
            shadow-[0_12px_35px_-12px_rgba(109,40,217,0.25)]
            hover:shadow-[0_22px_55px_-15px_rgba(109,40,217,0.35)]
            hover:-translate-y-1
            transition-all
            duration-300
          "
                            >
                                {/* Image placeholder */}
                                <div className="h-48 bg-gradient-to-br from-brand-soft to-white flex items-center justify-center">
                                    <span className="text-brand-primary font-semibold text-lg">
                                        {theme}
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="p-5">
                                    <h4 className="text-lg font-semibold text-gray-900">
                                        {theme}
                                    </h4>
                                    <p className="mt-1 text-sm text-gray-600">
                                        Clean, fast, and optimized for conversions.
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Bottom accent */}
                    <div className="mt-20 flex justify-center">
                        <div className="h-1 w-28 rounded-full bg-brand-primary"></div>
                    </div>

                </div>
            </section>

            {/* ================= FINAL CTA ================= */}
            <section className="bg-brand-dark py-24 text-white text-center">
                <div className="max-w-3xl mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold">
                        Start selling with CaartZee today
                    </h2>
                    <p className="mt-4 text-gray-300 text-lg">
                        Build your store, manage your business, and grow with confidence —
                        all on one powerful platform.
                    </p>
                    <button className="mt-8 h-11 px-8 rounded-md bg-brand-primary hover:bg-brand-accent text-white text-sm font-medium transition">
                        Get started for free
                    </button>
                </div>
            </section>
        </section>
    );
}
