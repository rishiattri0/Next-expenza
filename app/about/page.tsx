"use client";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const AboutPage = () => {
  /* ---------- Stats Carousel (Our Impact) ---------- */
  const stats = [
    { label: "Transactions", value: "500K+" },
    { label: "Active users", value: "10K+" },
    { label: "Money tracked", value: "$2M+" },
    { label: "Satisfaction", value: "99%" },
    { label: "Countries served", value: "25+" },
    { label: "Budgets created", value: "100K+" },
    { label: "AI insights delivered", value: "1M+" },
    { label: "Support availability", value: "24/7" },
  ];

  /* ---------- Features Carousel ---------- */
  const features = [
    {
      icon: "🤖",
      title: "AI-Powered Insights",
      body: "Automated categorisation and personalised recommendations that learn from you.",
    },
    {
      icon: "✨",
      title: "Smart Categorisation",
      body: "Near-perfect accuracy without manual tagging. Just spend, we do the rest.",
    },
    {
      icon: "📊",
      title: "Minimalist Dashboard",
      body: "Crystal-clear charts and zero clutter, designed for daily use.",
    },
    {
      icon: "🔒",
      title: "Secure Data",
      body: "Bank-level encryption keeps your financial data safe at all times.",
    },
    {
      icon: "⚡",
      title: "Instant Sync",
      body: "Seamlessly connects with your bank and updates your expenses in real time.",
    },
    {
      icon: "🌍",
      title: "Global Support",
      body: "Track and manage your finances in multiple currencies with ease.",
    },
    {
      icon: "📱",
      title: "Mobile Friendly",
      body: "Optimized for mobile so you can track expenses anywhere, anytime.",
    },
    {
      icon: "🎯",
      title: "Goal Tracking",
      body: "Set financial goals and track your progress with motivating visuals.",
    },
    {
      icon: "🔔",
      title: "Smart Alerts",
      body: "Get notified about overspending, unusual activity, or bill reminders instantly.",
    },
    {
      icon: "🧾",
      title: "Receipt Scanning",
      body: "Upload or scan receipts and let AI automatically extract details.",
    },
  ];

  return (
    <main className="min-h-screen font-sans bg-white text-black dark:bg-black dark:text-white transition-colors duration-300 antialiased">
      {/* Hero Section */}
      <section className="relative isolate grid place-items-center px-6 py-28 sm:px-8 sm:py-36">
        <div className="max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 dark:border-blue-400/30 px-4 py-1.5 text-sm font-medium">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-600 dark:bg-blue-400" />
            AI-powered
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            About{" "}
            <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-500 bg-clip-text text-transparent">
              Expenza&nbsp;AI
            </span>
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-neutral-600 dark:text-neutral-300 sm:text-xl">
            Your intelligent companion for tracking expenses and managing your
            finances with cutting-edge AI-powered insights.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/sign-up"
              className="rounded border border-blue-600 bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700 dark:border-blue-400 dark:bg-blue-400 dark:text-black dark:hover:bg-blue-300 shadow-lg hover:shadow-blue-500/30"
            >
              Get started
            </Link>
            <Link
              href="/contact"
              className="rounded border border-neutral-300 px-6 py-2.5 text-sm font-semibold transition hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-900"
            >
              Learn more
            </Link>
          </div>
        </div>
      </section>

      {/* Our Impact Carousel */}
      <section className="px-6 py-5 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <span className="inline-block rounded-full border border-blue-500/30 dark:border-blue-400/30 px-4 py-1 text-sm font-medium">
              Our Impact
            </span>
            <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
              Transforming financial management with{" "}
              <span className="text-blue-600 dark:text-blue-400">AI</span>
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-base leading-relaxed text-neutral-600 dark:text-neutral-300">
              We combine finance expertise with advanced AI to deliver
              personalised recommendations, making budgeting effortless and
              effective.
            </p>
          </div>

          <div className="mt-14">
            <Swiper
              modules={[Autoplay, Pagination]}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              loop
              spaceBetween={20}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              {stats.map((stat) => (
                <SwiperSlide key={stat.label}>
                  <div
                    className="rounded-xl border border-neutral-300 bg-white/80 dark:bg-black/70
                       dark:border-neutral-700 p-8 text-center backdrop-blur-sm shadow-md
                       transition hover:shadow-lg hover:border-blue-500/40"
                  >
                    <p className="text-5xl font-extrabold text-blue-600 dark:text-blue-400 animate-pulse">
                      {stat.value}
                    </p>
                    <p className="mt-3 text-lg text-neutral-600 dark:text-neutral-400">
                      {stat.label}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* Features Carousel */}
      <section className="px-6 py-20 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <span className="inline-block rounded-full border border-blue-500/30 dark:border-blue-400/30 px-3 py-1 text-xs font-medium">
              Features
            </span>
            <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
              Why choose{" "}
              <span className="text-blue-600 dark:text-blue-400">
                Expenza&nbsp;AI
              </span>
              ?
            </h2>
            <p className="mt-3 max-w-xl mx-auto text-base text-neutral-600 dark:text-neutral-300">
              We built the features we wished existed—clean, smart, and
              effortless.
            </p>
          </div>

          <div className="mt-14">
            <Swiper
              modules={[Autoplay, Pagination]}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              loop
              spaceBetween={20}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              {features.map((f) => (
                <SwiperSlide key={f.title}>
                  <div
                    className="rounded-xl border border-neutral-300 bg-white/80 dark:bg-black/70
                       dark:border-neutral-700 p-6 backdrop-blur-sm shadow-md
                       transition hover:shadow-lg hover:border-blue-500/40"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded border border-blue-500/40 text-2xl dark:border-blue-400/40 shadow-md bg-gradient-to-br from-blue-600 to-sky-500 text-white">
                      {f.icon}
                    </div>
                    <h3 className="mt-5 text-xl font-semibold text-blue-600 dark:text-blue-400">
                      {f.title}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-neutral-600 dark:text-neutral-400">
                      {f.body}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
