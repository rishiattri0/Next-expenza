// app/contact/page.tsx
"use client";

const ContactPage = () => (
  <main className="min-h-screen font-sans bg-white text-black dark:bg-black dark:text-white transition-colors duration-300 antialiased">
    {/* Hero */}
    <section className="relative isolate grid place-items-center px-6 py-28 sm:px-8 sm:py-36">
      <div className="max-w-3xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-neutral-300 dark:border-neutral-700 px-4 py-1.5 text-sm font-medium">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-neutral-900 dark:bg-neutral-100" />
          Get in Touch
        </span>

        <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Contact{" "}
          <span className="text-black dark:text-white">Expenza&nbsp;AI</span>
        </h1>

        <p className="mt-6 text-lg leading-relaxed text-neutral-600 dark:text-neutral-300 sm:text-xl">
          Have questions about AI-powered expense tracking or need help? We’re
          here to assist you with intelligent financial management.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="mailto:support@expensetracker-ai.com"
            className="rounded border border-black bg-black px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-neutral-800 dark:border-white dark:bg-white dark:text-black dark:hover:bg-neutral-200"
          >
            Send us an Email ✉️
          </a>
          <a
            href="tel:+11234567890"
            className="rounded border border-neutral-300 px-6 py-2.5 text-sm font-semibold transition hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-900"
          >
            Call Us 📞
          </a>
        </div>
      </div>
    </section>

    {/* Contact Cards */}
    <section className="py-20 px-6 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <span className="inline-block rounded-full border border-neutral-300 dark:border-neutral-700 px-3 py-1 text-xs font-medium">
            Contact Information
          </span>
          <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
            Multiple Ways to{" "}
            <span className="text-black dark:text-white">Connect</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-base text-neutral-600 dark:text-neutral-300">
            Choose the most convenient way to reach our AI support team.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Email */}
          <div className="group relative rounded-xl border border-neutral-300 bg-white/80 dark:bg-black/70 dark:border-neutral-700 p-8 text-center backdrop-blur-sm transition-all duration-300 hover:scale-[1.03] hover:border-emerald-500 hover:shadow-[0_0_20px_rgba(16,185,129,0.6)]">
            <div className="w-12 h-12 bg-neutral-900 text-white rounded-lg flex items-center justify-center mx-auto mb-4 text-xl group-hover:bg-emerald-500 transition">
              ✉️
            </div>
            <h3 className="font-bold text-lg mb-2">Email Support</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
              We respond within 24 hours.
            </p>
            <a
              href="mailto:support@expensetracker-ai.com"
              className="text-sm font-medium text-neutral-900 dark:text-neutral-100 underline"
            >
              support@expensetracker-ai.com
            </a>
          </div>

          {/* Phone */}
          <div className="group relative rounded-xl border border-neutral-300 bg-white/80 dark:bg-black/70 dark:border-neutral-700 p-8 text-center backdrop-blur-sm transition-all duration-300 hover:scale-[1.03] hover:border-emerald-500 hover:shadow-[0_0_20px_rgba(16,185,129,0.6)]">
            <div className="w-12 h-12 bg-neutral-900 text-white rounded-lg flex items-center justify-center mx-auto mb-4 text-xl group-hover:bg-emerald-500 transition">
              📞
            </div>
            <h3 className="font-bold text-lg mb-2">Phone Support</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
              Immediate assistance.
            </p>
            <a
              href="tel:+11234567890"
              className="text-sm font-medium text-neutral-900 dark:text-neutral-100"
            >
              +1 (123) 456-7890
            </a>
          </div>

          {/* Office */}
          <div className="group relative rounded-xl border border-neutral-300 bg-white/80 dark:bg-black/70 dark:border-neutral-700 p-8 text-center backdrop-blur-sm transition-all duration-300 hover:scale-[1.03] hover:border-emerald-500 hover:shadow-[0_0_20px_rgba(16,185,129,0.6)]">
            <div className="w-12 h-12 bg-neutral-900 text-white rounded-lg flex items-center justify-center mx-auto mb-4 text-xl group-hover:bg-emerald-500 transition">
              📍
            </div>
            <h3 className="font-bold text-lg mb-2">Office Location</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              123 AI Innovation St
              <br />
              Tech City, USA
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Hours & FAQ */}
  </main>
);

export default ContactPage;
