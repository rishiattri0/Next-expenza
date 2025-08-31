"use client";

import { useState, useEffect } from "react";
import { getAIInsights } from "@/app/actions/getAIInsights";
import { generateInsightAnswer } from "@/app/actions/generateInsightAnswer";

interface InsightData {
  id: string;
  type: "warning" | "info" | "success" | "tip";
  title: string;
  message: string;
  action?: string;
  confidence?: number;
}

interface AIAnswer {
  insightId: string;
  answer: string;
  isLoading: boolean;
}

const AIInsights = () => {
  const [insights, setInsights] = useState<InsightData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  const [aiAnswers, setAiAnswers] = useState<AIAnswer[]>([]);

  const loadInsights = async () => {
    setIsLoading(true);
    try {
      const newInsights = await getAIInsights();
      setInsights(newInsights);
      setLastUpdated(new Date());
    } catch (error) {
      console.error("❌ AIInsights: Failed to load AI insights:", error);
      setInsights([
        {
          id: "fallback-1",
          type: "info",
          title: "AI Temporarily Unavailable",
          message:
            "We're working to restore AI insights. Please check back soon.",
          action: "Try again later",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleActionClick = async (insight: InsightData) => {
    if (!insight.action) return;
    const existingAnswer = aiAnswers.find((a) => a.insightId === insight.id);
    if (existingAnswer) {
      setAiAnswers((prev) => prev.filter((a) => a.insightId !== insight.id));
      return;
    }

    setAiAnswers((prev) => [
      ...prev,
      { insightId: insight.id, answer: "", isLoading: true },
    ]);

    try {
      const question = `${insight.title}: ${insight.action}`;
      const answer = await generateInsightAnswer(question);

      setAiAnswers((prev) =>
        prev.map((a) =>
          a.insightId === insight.id ? { ...a, answer, isLoading: false } : a
        )
      );
    } catch {
      setAiAnswers((prev) =>
        prev.map((a) =>
          a.insightId === insight.id
            ? {
                ...a,
                answer:
                  "Sorry, I was unable to generate a detailed answer. Please try again.",
                isLoading: false,
              }
            : a
        )
      );
    }
  };

  useEffect(() => {
    loadInsights();
  }, []);

  const getInsightIcon = (type: string) => {
    switch (type) {
      case "warning":
        return "⚠️";
      case "success":
        return "✅";
      case "tip":
        return "💡";
      case "info":
        return "ℹ️";
      default:
        return "🤖";
    }
  };

  const formatLastUpdated = () => {
    if (!lastUpdated) return "Loading...";
    const now = new Date();
    const diffMs = now.getTime() - lastUpdated.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    if (diffMins < 1) return "Just now";
    if (diffMins < 60) return `${diffMins}m ago`;
    const diffHours = Math.floor(diffMins / 60);
    if (diffHours < 24) return `${diffHours}h ago`;
    return lastUpdated.toLocaleDateString();
  };

  if (isLoading) {
    return (
      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-4 sm:p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
        <div className="flex items-center gap-2 sm:gap-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-md animate-pulse">
            <span className="text-white text-lg">🤖</span>
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-gray-100">
              AI Insights
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Analyzing your spending...
            </p>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <div className="w-6 h-6 border-2 border-blue-400/30 border-t-blue-500 rounded-full animate-spin"></div>
          </div>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="animate-pulse bg-gray-100 dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-700"
            >
              <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded w-3/4 mb-2"></div>
              <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded w-full mb-1"></div>
              <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded w-2/3"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-4 sm:p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-md">
            <span className="text-white text-lg">🤖</span>
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-gray-100">
              AI Insights
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              AI financial analysis
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300">
            {formatLastUpdated()}
          </div>
          <button
            onClick={loadInsights}
            className="w-8 h-8 bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 hover:from-blue-700 hover:via-blue-600 hover:to-indigo-700 text-white rounded-xl flex items-center justify-center shadow-md hover:shadow-xl transition-all duration-200"
            disabled={isLoading}
          >
            🔄
          </button>
        </div>
      </div>

      {/* Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {insights.map((insight) => {
          const currentAnswer = aiAnswers.find(
            (a) => a.insightId === insight.id
          );

          return (
            <div
              key={insight.id}
              className="p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 hover:shadow-lg transition-all duration-200"
            >
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/40 rounded-lg flex items-center justify-center">
                  <span className="text-lg">
                    {getInsightIcon(insight.type)}
                  </span>
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900 dark:text-gray-100 text-sm mb-1">
                    {insight.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-xs mb-3">
                    {insight.message}
                  </p>

                  {insight.action && (
                    <button
                      onClick={() => handleActionClick(insight)}
                      className="px-3 py-1.5 rounded-lg text-xs font-medium bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg transition-all duration-200"
                    >
                      {currentAnswer
                        ? currentAnswer.isLoading
                          ? "Loading..."
                          : "Hide Answer"
                        : insight.action}
                    </button>
                  )}

                  {currentAnswer && (
                    <div className="mt-3 p-3 bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg">
                      <div className="flex items-start gap-2">
                        <div className="w-6 h-6 bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                          <span className="text-white text-xs">🤖</span>
                        </div>
                        <div className="flex-1">
                          <h5 className="font-semibold text-gray-900 dark:text-gray-100 text-xs mb-1">
                            AI Answer
                          </h5>
                          {currentAnswer.isLoading ? (
                            <p className="text-gray-500 dark:text-gray-400 text-xs animate-pulse">
                              Generating answer...
                            </p>
                          ) : (
                            <p className="text-gray-700 dark:text-gray-300 text-xs leading-relaxed">
                              {currentAnswer.answer}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700 flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
          <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900/40 rounded-lg flex items-center justify-center">
            🧠
          </div>
          Powered by AI
        </div>
        <button
          onClick={loadInsights}
          className="px-3 py-1.5 bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 hover:from-blue-700 hover:via-blue-600 hover:to-indigo-700 text-white rounded-lg text-xs font-medium shadow-md hover:shadow-lg transition-all duration-200"
        >
          Refresh Insights →
        </button>
      </div>
    </div>
  );
};

export default AIInsights;
