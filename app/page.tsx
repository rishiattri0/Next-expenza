import AddNewRecord from "@/components/AddNewRecord";
import AIInsights from "@/components/AIInsights";
import ExpenseStats from "@/components/ExpenseStats";
import Guest from "@/components/Guest";
import RecordChart from "@/components/RecordChart";
import RecordHistory from "@/components/RecordHistory";
import { currentUser } from "@clerk/nextjs/server";

export default async function HomePage() {
  const user = await currentUser();

  if (!user) {
    return <Guest />;
  }

  // fallback values
  const joinedDate = user.createdAt
    ? new Date(user.createdAt).toLocaleDateString()
    : "Unknown";

  const lastSignIn = user.lastSignInAt
    ? new Date(user.lastSignInAt).toLocaleDateString()
    : "Today";

  return (
    <main className="bg-neutral-100 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 min-h-screen transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Left Column */}
          <div className="space-y-6 sm:space-y-8">
            {/* Welcome card */}
            <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-6 lg:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                {/* Profile */}
                <div className="relative flex-shrink-0">
                  <img
                    src={user.imageUrl}
                    alt={`${user.firstName || "User"}'s profile`}
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl border-2 border-white dark:border-gray-800 shadow-md"
                  />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full border-2 border-white dark:border-gray-900 flex items-center justify-center animate-pulse">
                    <span className="text-xs text-white">✓</span>
                  </div>
                </div>

                {/* User info */}
                <div className="flex-1 text-center sm:text-left">
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-md">
                      <span className="text-white text-lg">👋</span>
                    </div>
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-gray-900 dark:text-gray-100">
                      Welcome Back, {user.firstName || "Friend"}!
                    </h2>
                  </div>
                  <p className="text-base text-gray-600 dark:text-gray-400 mb-6 max-w-md mx-auto sm:mx-0">
                    Here’s a quick overview of your recent expense activity.
                    Track your spending, analyze patterns, and manage your
                    budget efficiently!
                  </p>

                  {/* Badges */}
                  <div className="flex flex-col sm:flex-row gap-3 justify-center sm:justify-start">
                    {/* Joined */}
                    <div className="flex items-center gap-2 px-3 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                      <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center text-white text-xs">
                        📅
                      </div>
                      <div>
                        <span className="block text-xs text-gray-500 dark:text-gray-400">
                          Joined
                        </span>
                        <span className="font-semibold text-gray-900 dark:text-gray-100">
                          {joinedDate}
                        </span>
                      </div>
                    </div>

                    {/* Last Sign In */}
                    <div className="flex items-center gap-2 px-3 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                      <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center text-white text-xs">
                        ⚡
                      </div>
                      <div>
                        <span className="block text-xs text-gray-500 dark:text-gray-400">
                          Last Sign In
                        </span>
                        <span className="font-semibold text-gray-900 dark:text-gray-100">
                          {lastSignIn}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Add Expense */}
            <AddNewRecord />
          </div>

          {/* Right Column */}
          <div className="space-y-6 sm:space-y-8">
            <RecordChart />
            <ExpenseStats />
          </div>
        </div>

        {/* Bottom Sections */}
        <div className="mt-8 sm:mt-10 space-y-6 sm:space-y-8">
          <AIInsights />
          <RecordHistory />
        </div>
      </div>
    </main>
  );
}
