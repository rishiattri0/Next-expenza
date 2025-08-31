import getRecords from "@/app/actions/getRecords";
import RecordItem from "./RecordItem";
import { Record } from "@/types/Record";

const RecordHistory = async () => {
  const { records, error } = await getRecords();

  if (error) {
    return (
      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 backdrop-blur-sm p-4 sm:p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
        {/* Header */}
        <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
            <span className="text-white text-sm sm:text-lg">📝</span>
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-gray-100">
              Expense History
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
              Your spending timeline
            </p>
          </div>
        </div>

        {/* Error */}
        <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-l-red-500 p-3 sm:p-4 rounded-xl">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-red-100 dark:bg-red-900/40 rounded-lg flex items-center justify-center">
              <span className="text-base sm:text-lg">⚠️</span>
            </div>
            <h4 className="font-bold text-red-600 dark:text-red-400 text-sm">
              Error loading expense history
            </h4>
          </div>
          <p className="text-red-600 dark:text-red-400 ml-8 sm:ml-10 text-xs">
            {error}
          </p>
        </div>
      </div>
    );
  }

  if (!records || records.length === 0) {
    return (
      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 backdrop-blur-sm p-4 sm:p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
        {/* Header */}
        <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
            <span className="text-white text-sm sm:text-lg">📝</span>
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-gray-100">
              Expense History
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
              Your spending timeline
            </p>
          </div>
        </div>

        {/* Empty state */}
        <div className="text-center py-6 sm:py-8">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-100 dark:bg-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md">
            <span className="text-2xl sm:text-3xl text-gray-400 dark:text-gray-300">
              📊
            </span>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-gray-900 dark:text-gray-200 mb-2">
            No Expense Records Found
          </h4>
          <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto text-sm">
            Start tracking your expenses to see your spending history and
            patterns here.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 backdrop-blur-sm p-4 sm:p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
      {/* Header */}
      <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
          <span className="text-white text-sm sm:text-lg">📝</span>
        </div>
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-gray-100">
            Expense History
          </h3>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
            Your spending timeline
          </p>
        </div>
      </div>

      {/* Records grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
        {records.map((record: Record) => (
          <RecordItem key={record.id} record={record} />
        ))}
      </div>
    </div>
  );
};

export default RecordHistory;
