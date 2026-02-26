import { Link } from "react-router-dom";
import Sidebar from "@/components/Sidebar";
import { cn } from "@/lib/utils";

const summaryData = [
  {
    title: "Beds OK",
    value: "3",
    color: "text-healthy",
    bgColor: "bg-green-50",
  },
  {
    title: "Needs Water",
    value: "1",
    color: "text-danger",
    bgColor: "bg-red-50",
  },
  {
    title: "Temperature",
    value: "29°C",
    color: "text-info",
    bgColor: "bg-blue-50",
  },
  {
    title: "Water Usage",
    value: "245L",
    color: "text-muted-foreground",
    bgColor: "bg-gray-50",
  },
];

const gardenBeds = [
  {
    id: 1,
    name: "Berry Bushes",
    temperature: "33°C",
    humidity: "48%",
    status: "Too Hot",
    statusColor: "bg-red-500",
    chartColor: "bg-red-200",
    location: "North Garden",
    plants: 6,
    lastWatered: "6 hours ago",
  },
  {
    id: 2,
    name: "Flower Section",
    temperature: "35°C",
    humidity: "55%",
    status: "Too Hot",
    statusColor: "bg-red-500",
    chartColor: "bg-orange-200",
    location: "East Garden",
    plants: 24,
    lastWatered: "1 hour ago",
  },
  {
    id: 3,
    name: "Greenhouse",
    temperature: "26°C",
    humidity: "82%",
    status: "Healthy",
    statusColor: "bg-green-500",
    chartColor: "bg-green-200",
    location: "Greenhouse",
    plants: 18,
    lastWatered: "30 minutes ago",
  },
  {
    id: 4,
    name: "Herb Bed",
    temperature: "29°C",
    humidity: "68%",
    status: "Healthy",
    statusColor: "bg-green-500",
    chartColor: "bg-green-200",
    location: "West Garden",
    plants: 12,
    lastWatered: "2 hours ago",
  },
  {
    id: 5,
    name: "Tomato Patch",
    temperature: "28°C",
    humidity: "65%",
    status: "Healthy",
    statusColor: "bg-green-500",
    chartColor: "bg-green-200",
    location: "South Garden",
    plants: 16,
    lastWatered: "3 hours ago",
  },
  {
    id: 6,
    name: "Vegetable Garden",
    temperature: "32°C",
    humidity: "42%",
    status: "Needs Water",
    statusColor: "bg-red-500",
    chartColor: "bg-red-200",
    location: "Central Garden",
    plants: 28,
    lastWatered: "8 hours ago",
  },
];

const ChartComponent = ({ color }: { color: string }) => (
  <div className={cn("h-16 w-full rounded", color)}>
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 100 40"
      className="overflow-visible"
    >
      {Array.from({ length: 20 }, (_, i) => (
        <rect
          key={i}
          x={i * 4.5 + 5}
          y={40 - Math.random() * 30 - 5}
          width="3"
          height={Math.random() * 30 + 5}
          className="fill-current opacity-60"
        />
      ))}
    </svg>
  </div>
);

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />

      <div className="flex-1 overflow-auto lg:ml-0">
        {/* Mobile spacing for menu button */}
        <div className="lg:hidden h-16 w-full"></div>
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-4 lg:px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-semibold text-gray-900">
                Welcome back, Sarah!
              </h1>
              <p className="text-sm text-gray-500">Last updated: 3 mins ago</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative hidden sm:block">
                <svg
                  className="w-6 h-6 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 17h5l-5 5-5-5h5z"
                  />
                </svg>
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-3 h-3 flex items-center justify-center">
                  1
                </span>
              </div>
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">S</span>
              </div>
            </div>
          </div>
        </header>

        <div className="p-4 lg:p-6">
          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            {summaryData.map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">{item.title}</p>
                    <p className={cn("text-2xl font-bold", item.color)}>
                      {item.value}
                    </p>
                  </div>
                  <div
                    className={cn("w-2 h-2 rounded-full", item.statusColor)}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* My Garden Section */}
          <div className="bg-white rounded-lg shadow-sm">
            <div className="px-6 py-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">
                    My Garden
                  </h2>
                  <p className="text-sm text-gray-500">Dashboard</p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-600">Sort by:</span>
                    <select className="text-sm border border-gray-300 rounded px-2 py-1">
                      <option>A-Z Alphabetical</option>
                    </select>
                  </div>
                  <button className="bg-primary text-white px-3 py-1.5 rounded text-sm font-medium">
                    + Add Bed
                  </button>
                </div>
              </div>
            </div>

            {/* Garden Beds Grid */}
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {gardenBeds.map((bed) => (
                  <div
                    key={bed.id}
                    className="border border-gray-200 rounded-lg p-4"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-medium text-gray-900">{bed.name}</h3>
                      <span
                        className={cn(
                          "px-2 py-1 rounded-full text-xs text-white",
                          bed.statusColor,
                        )}
                      >
                        {bed.status}
                      </span>
                    </div>

                    <div className="flex items-center space-x-4 mb-3 text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <svg
                          className="w-4 h-4"
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
                        <span>{bed.temperature}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                          />
                        </svg>
                        <span>{bed.humidity}</span>
                      </div>
                    </div>

                    <ChartComponent color={bed.chartColor} />

                    <div className="mt-4 text-xs text-gray-500 space-y-1">
                      <div className="flex items-center space-x-1">
                        <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                        <span>{bed.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                        <span>Container A</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                        <span>{bed.plants} plants</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        <span>Last watered: {bed.lastWatered}</span>
                      </div>
                    </div>

                    <div className="flex space-x-2 mt-4">
                      <button className="flex-1 bg-primary text-white px-3 py-2 rounded text-sm font-medium">
                        <svg
                          className="w-4 h-4 mr-1 inline"
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
                        Water Now
                      </button>
                      <Link
                        to={`/plant-details/${bed.id}`}
                        className="flex-1 bg-gray-100 text-gray-700 px-3 py-2 rounded text-sm font-medium text-center"
                      >
                        <svg
                          className="w-4 h-4 mr-1 inline"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                        Details
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Weather and Tips */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
            {/* Weather Today */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-4">
                <svg
                  className="w-5 h-5 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                  />
                </svg>
                <h3 className="font-semibold text-gray-900">Weather Today</h3>
              </div>

              <div className="mb-4">
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  75°F
                </div>
                <div className="text-sm text-gray-600 mb-4">Partly Cloudy</div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <div className="text-sm text-gray-600">Humidity</div>
                  <div className="font-semibold">62%</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600">Precipitation</div>
                  <div className="font-semibold">0%</div>
                </div>
              </div>

              <div>
                <div className="text-sm font-medium text-gray-900 mb-2">
                  4-Day Forecast
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Today</span>
                    <span className="font-medium">76°/64°</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Tomorrow</span>
                    <span className="font-medium">82°/68°</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Wednesday</span>
                    <span className="font-medium">79°/63°</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Thursday</span>
                    <span className="font-medium">76°/62°</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Smart Watering Tips */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-4">
                <svg
                  className="w-5 h-5 text-yellow-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <h3 className="font-semibold text-gray-900">
                  Smart Watering Tips
                </h3>
              </div>

              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div className="text-sm text-gray-700">
                    Consider watering early morning for better absorption.
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div className="text-sm text-gray-700">
                    Rain forecasted — hold off watering.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
