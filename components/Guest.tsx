"use client";

import { SignInButton } from "@clerk/nextjs";
import { CardCarousel } from "@/components/ui/card-carousel";

const Guest = () => {
  return (
    <div className="font-sans bg-white dark:bg-black text-neutral-900 dark:text-neutral-100 transition-colors duration-300 min-h-screen">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center py-20 px-6 sm:px-8 bg-neutral-50 dark:bg-neutral-950 border-b border-neutral-200/40 dark:border-neutral-800/40 overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-neutral-100 dark:bg-neutral-900 text-blue-600 dark:text-blue-400 px-4 py-1.5 rounded-full text-sm font-medium mb-6 shadow-sm">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            AI-Powered Financial Management
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            Welcome to{" "}
            <span className="text-blue-600 dark:text-blue-400">
              Expenza&nbsp;AI
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 mb-8 max-w-2xl mx-auto">
            Track your expenses, manage your budget, and get AI-powered insights
            to take control of your finances with intelligent automation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <SignInButton>
              <button className="group relative bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold shadow-md hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-1">
                Get Started Free →
              </button>
            </SignInButton>
            <button className="border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800 px-8 py-4 rounded-xl font-semibold transition-all duration-300">
              Learn More
            </button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                icon: "🤖",
                title: "AI Insights",
                text: "Smart analysis of your spending patterns",
              },
              {
                icon: "✨",
                title: "Auto Categories",
                text: "Intelligent expense categorization",
              },
              {
                icon: "📊",
                title: "Smart Dashboard",
                text: "Beautiful, intuitive financial overview",
              },
            ].map((f, i) => (
              <div
                key={i}
                className="bg-white dark:bg-neutral-900 p-6 rounded-xl shadow-sm border border-neutral-200 dark:border-neutral-800 hover:border-blue-500/60 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 transform hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4 mx-auto text-lg shadow-md animate-fade-in">
                  <span className="text-white">{f.icon}</span>
                </div>
                <h3 className="text-lg font-bold text-center mb-2">
                  {f.title}
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 text-center">
                  {f.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 sm:px-8 bg-white dark:bg-black border-t border-neutral-200/40 dark:border-neutral-800/40">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold mb-4">
              Frequently Asked{" "}
              <span className="text-blue-600 dark:text-blue-400">
                Questions
              </span>
            </h2>
            <p className="text-base text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              Everything you need to know about Expenza AI and how it can
              transform your financial management.
            </p>
          </div>
          <div className="space-y-6">
            {[
              {
                q: "What is Expenza AI?",
                a: "Expenza AI is an intelligent financial management tool that uses artificial intelligence to help you monitor your spending patterns, get smart category suggestions, and receive personalized insights.",
              },
              {
                q: "How does the AI work?",
                a: "Our AI analyzes your spending data to automatically categorize expenses, detect patterns, and provide personalized recommendations.",
              },
              {
                q: "Is Expenza AI free?",
                a: "Yes, Expenza AI offers a free plan with essential features. Premium plans unlock advanced analytics and unlimited AI insights.",
              },
            ].map((faq, i) => (
              <div
                key={i}
                className="bg-white dark:bg-neutral-900 p-6 rounded-xl shadow-sm border border-neutral-200 dark:border-neutral-800 hover:border-blue-500/60 hover:shadow-blue-500/20 transition-all duration-300 hover:shadow-md transform hover:-translate-y-1"
              >
                <h3 className="text-lg font-bold mb-2">{faq.q}</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CardCarousel
        items={[
          {
            highlight: "AI Insights",
            title: "Smarter Decisions",
            description:
              "Our AI analyzes your spending patterns and gives you personalized recommendations.",
          },
          {
            highlight: "Seamless Sync",
            title: "Real-Time Tracking",
            description:
              "Stay updated with automatic syncing across your bank accounts.",
          },
          {
            highlight: "Smart Categories",
            title: "Zero Manual Work",
            description:
              "Transactions are categorized instantly with near-perfect accuracy.",
          },
          {
            highlight: "Goal Tracking",
            title: "Stay Motivated",
            description:
              "Visualize your financial journey and crush your savings goals.",
          },
          {
            highlight: "Global Reach",
            title: "Worldwide Support",
            description:
              "Track money in multiple currencies and regions effortlessly.",
          },
          {
            highlight: "Alerts",
            title: "Stay Informed",
            description:
              "Get instant notifications for unusual activity or overspending.",
          },
          {
            highlight: "Security",
            title: "Bank-Grade Protection",
            description:
              "Your financial data is encrypted and safeguarded at every step.",
          },
        ]}
      />

      {/* Testimonials Section */}
      <section className="py-20 px-6 sm:px-8 bg-neutral-50 dark:bg-neutral-950 border-t border-neutral-200/40 dark:border-neutral-800/40">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold mb-4">
              What Our Users{" "}
              <span className="text-blue-600 dark:text-blue-400">Say</span>
            </h2>
            <p className="text-base text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              Join thousands of satisfied users who have transformed their
              financial habits with Expenza AI.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah L.",
                initial: "S",
                text: "Expenza AI has completely transformed my budgeting. The AI insights are incredibly helpful and I now have full control over my finances!",
              },
              {
                name: "John D.",
                initial: "J",
                text: "The AI-powered insights from Expenza helped me reduce unnecessary spending. The smart categorization is amazing!",
              },
              {
                name: "Emily R.",
                initial: "E",
                text: "Expenza AI is so intelligent and easy to use. The AI recommendations are spot-on and have genuinely improved my financial habits!",
              },
            ].map((t, i) => (
              <div
                key={i}
                className="bg-white dark:bg-neutral-900 p-6 rounded-xl shadow-sm border border-neutral-200 dark:border-neutral-800 hover:border-blue-500/60 hover:shadow-blue-500/20 hover:-translate-y-1 transition-all duration-300 transform"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold shadow-md">
                    {t.initial}
                  </div>
                  <div>
                    <div className="font-bold">{t.name}</div>
                    <div className="text-sm text-neutral-500 dark:text-neutral-400">
                      Verified User
                    </div>
                  </div>
                </div>
                <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-4">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="text-blue-500">⭐⭐⭐⭐⭐</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Guest;
