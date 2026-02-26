import { Link, useParams } from "react-router-dom";
import Sidebar from "@/components/Sidebar";
import { cn } from "@/lib/utils";

const metricsData = [
  {
    title: "Soil Moisture",
    current: "54.8%",
    average: "54.9%",
    status: "Status Monitor",
    statusColor: "text-warning",
    change: "-3.6%",
    changeColor: "text-red-500",
    chartColor: "fill-blue-500",
    icon: "💧",
  },
  {
    title: "Temperature",
    current: "36.9°C",
    average: "35.2°C",
    status: "Status Monitor",
    statusColor: "text-warning",
    change: "+3.2°C",
    changeColor: "text-red-500",
    chartColor: "fill-red-500",
    icon: "🌡️",
  },
  {
    title: "Humidity",
    current: "66.6%",
    average: "68.0%",
    status: "Status Optimal",
    statusColor: "text-healthy",
    change: "-8.1%",
    changeColor: "text-green-500",
    chartColor: "fill-green-500",
    icon: "☁️",
  },
  {
    title: "Soil pH",
    current: "7.1",
    average: "6.8",
    status: "Status Optimal",
    statusColor: "text-healthy",
    change: "+0.5",
    changeColor: "text-green-500",
    chartColor: "fill-purple-500",
    icon: "🧪",
  },
  {
    title: "Light Exposure",
    current: "73.3%",
    average: "75.4%",
    status: "Status Optimal",
    statusColor: "text-healthy",
    change: "+4.4%",
    changeColor: "text-green-500",
    chartColor: "fill-yellow-500",
    icon: "☀️",
  },
];

const ChartComponent = ({ color }: { color: string }) => (
  <div className="h-20 w-full">
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 200 80"
      className="overflow-visible"
    >
      {Array.from({ length: 40 }, (_, i) => (
        <rect
          key={i}
          x={i * 4.8 + 5}
          y={80 - Math.random() * 60 - 10}
          width="3"
          height={Math.random() * 60 + 10}
          className={color}
        />
      ))}
    </svg>
  </div>
);

export default function PlantDetails() {
  const { id } = useParams();

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />

      <div className="flex-1 overflow-auto lg:ml-0">
        {/* Mobile spacing for menu button */}
        <div className="lg:hidden h-16 w-full"></div>
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-4 lg:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link
                to="/"
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                <span className="text-sm font-medium">Back to Dashboard</span>
              </Link>
              <div className="h-6 w-px bg-gray-300"></div>
              <div>
                <h1 className="text-xl font-semibold text-gray-900">
                  Flower Section
                </h1>
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <span>East Garden</span>
                  <span>•</span>
                  <span>Container B</span>
                  <span>•</span>
                  <span>24 plants</span>
                </div>
              </div>
              <span className="px-2 py-1 bg-red-500 text-white text-xs rounded-full">
                Too Hot
              </span>
            </div>
            <div className="flex flex-col lg:flex-row lg:items-center space-y-2 lg:space-y-0 lg:space-x-4">
              <div className="flex space-x-2">
                <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-900">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                  <span className="text-sm font-medium hidden sm:inline">
                    Live Data
                  </span>
                </button>
                <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-900">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="text-sm font-medium hidden sm:inline">
                    Configure
                  </span>
                </button>
              </div>
              <div className="text-sm text-gray-500">
                Last updated: 2 minutes ago
              </div>
            </div>
          </div>
        </header>

        <div className="p-4 lg:p-6">
          {/* Time Frame Controls */}
          <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <svg
                  className="w-4 h-4 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-sm text-gray-600">Time Frame:</span>
                <select className="text-sm border border-gray-300 rounded px-2 py-1">
                  <option>Last 7 Days</option>
                  <option>Last 30 Days</option>
                  <option>Last 3 Months</option>
                </select>
              </div>
              <div className="flex items-center space-x-2">
                <svg
                  className="w-4 h-4 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
                <span className="text-sm text-gray-600">Average Period:</span>
                <select className="text-sm border border-gray-300 rounded px-2 py-1">
                  <option>7 Days</option>
                  <option>30 Days</option>
                  <option>90 Days</option>
                </select>
              </div>
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {metricsData.map((metric, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">{metric.icon}</span>
                    <h3 className="font-semibold text-gray-900">
                      {metric.title}
                    </h3>
                  </div>
                  <span className="text-yellow-500">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92z" />
                    </svg>
                  </span>
                </div>

                <div className="text-sm text-gray-600 mb-2">
                  Real-time monitoring and 7-day trends
                </div>

                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div>
                    <div className="text-xs text-gray-500">Current</div>
                    <div className="text-lg font-bold text-gray-900">
                      {metric.current}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Avg (7d)</div>
                    <div className="text-lg font-bold text-gray-900">
                      {metric.average}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Status</div>
                    <div
                      className={cn("text-sm font-medium", metric.statusColor)}
                    >
                      {metric.status.split(" ")[1]}
                    </div>
                  </div>
                </div>

                <ChartComponent color={metric.chartColor} />

                <div className="flex justify-between items-center mt-4 text-xs text-gray-500">
                  <span>24h ago</span>
                  <span className={cn("font-medium", metric.changeColor)}>
                    24h change: {metric.change}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white rounded-lg shadow-sm p-4">
              <div className="flex items-center space-x-2 mb-2">
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-sm text-gray-600">Last Watered</span>
              </div>
              <div className="text-lg font-semibold text-gray-900">
                1 hour ago
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-4">
              <div className="flex items-center space-x-2 mb-2">
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-sm text-gray-600">Next Watering</span>
              </div>
              <div className="text-lg font-semibold text-gray-900">
                In 4 hours
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-4">
              <div className="flex items-center space-x-2 mb-2">
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 8.172V5L8 4z"
                  />
                </svg>
                <span className="text-sm text-gray-600">Water Usage (7d)</span>
              </div>
              <div className="text-lg font-semibold text-gray-900">24.5L</div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-4">
              <div className="flex items-center space-x-2 mb-2">
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
                <span className="text-sm text-gray-600">Plant Health</span>
              </div>
              <div className="text-lg font-semibold text-gray-900">82%</div>
            </div>
          </div>

          {/* Action Center */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Action Center
            </h3>
            <p className="text-sm text-gray-600 mb-6">
              Manage watering and maintenance for Flower Section
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <button className="flex items-center justify-center space-x-2 bg-primary text-white px-4 py-3 rounded-lg font-medium">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 8.172V5L8 4z"
                  />
                </svg>
                <span>Water Now</span>
              </button>

              <button className="flex items-center justify-center space-x-2 bg-gray-100 text-gray-700 px-4 py-3 rounded-lg font-medium">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>Adjust Settings</span>
              </button>

              <button className="flex items-center justify-center space-x-2 bg-gray-100 text-gray-700 px-4 py-3 rounded-lg font-medium">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
                <span>View Analytics</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
