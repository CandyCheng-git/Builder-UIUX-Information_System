// Default garden beds data
const defaultGardenBeds = [
  {
    id: 1,
    name: "Berry Bushes",
    temperature: "33°C",
    humidity: "48%",
    status: "Too hot",
    statusColor: "#C23A3A",
    chartColor: "#D57A66",
    location: "North Garden",
    variety: "Blueberries",
    substrate: "Compost Mix",
    plants: 6,
    lastWatered: "6 hours ago",
    wateringEnabled: true,
  },
  {
    id: 2,
    name: "Flower Section",
    temperature: "35°C",
    humidity: "55%",
    status: "Too hot",
    statusColor: "#C23A3A",
    chartColor: "#D57A66",
    location: "East Garden",
    variety: "Marigolds",
    substrate: "Potting Soil",
    plants: 24,
    lastWatered: "1 hour ago",
    wateringEnabled: true,
  },
  {
    id: 3,
    name: "Greenhouse",
    temperature: "26°C",
    humidity: "82%",
    status: "Healthy",
    statusColor: "#3A6A49",
    chartColor: "#688654",
    location: "Greenhouse",
    variety: "Mixed Vegetables",
    substrate: "Hydroponic Medium",
    plants: 18,
    lastWatered: "30 minutes ago",
    wateringEnabled: true,
  },
  {
    id: 4,
    name: "Herb Bed",
    temperature: "29°C",
    humidity: "68%",
    status: "Healthy",
    statusColor: "#3A6A49",
    chartColor: "#688654",
    location: "West Garden",
    variety: "Basil & Oregano",
    substrate: "Garden Soil",
    plants: 12,
    lastWatered: "2 hours ago",
    wateringEnabled: true,
  },
  {
    id: 5,
    name: "Tomato Patch",
    temperature: "28°C",
    humidity: "65%",
    status: "Healthy",
    statusColor: "#3A6A49",
    chartColor: "#688654",
    location: "South Garden",
    variety: "Cherry Tomatoes",
    substrate: "Compost Mix",
    plants: 16,
    lastWatered: "3 hours ago",
    wateringEnabled: true,
  },
  {
    id: 6,
    name: "Vegetable Garden",
    temperature: "32°C",
    humidity: "42%",
    status: "Too dry",
    statusColor: "#D76550",
    chartColor: "#D57A66",
    location: "Central Garden",
    variety: "Lettuce & Spinach",
    substrate: "Potting Soil",
    plants: 28,
    lastWatered: "8 hours ago",
    wateringEnabled: true,
  },
  {
    id: 7,
    name: "Winter Greens",
    temperature: "12°C",
    humidity: "75%",
    status: "Too cold",
    statusColor: "#BFD7EA",
    chartColor: "#BFD7EA",
    location: "Cold Frame",
    variety: "Kale & Brussels Sprouts",
    substrate: "Garden Soil",
    plants: 8,
    lastWatered: "4 hours ago",
    wateringEnabled: true,
  },
];

// Shared data management
function getGardenBedsFromStorage() {
  const stored = localStorage.getItem('harvestPro_gardenBeds');
  if (stored) {
    return JSON.parse(stored);
  } else {
    // Initialize with default data
    localStorage.setItem('harvestPro_gardenBeds', JSON.stringify(defaultGardenBeds));
    return defaultGardenBeds;
  }
}

function saveGardenBedsToStorage(beds) {
  localStorage.setItem('harvestPro_gardenBeds', JSON.stringify(beds));
}

function updateGardenBedInStorage(bedId, updatedBed) {
  const beds = getGardenBedsFromStorage();
  const bedIndex = beds.findIndex(bed => bed.id == bedId);
  if (bedIndex !== -1) {
    beds[bedIndex] = { ...beds[bedIndex], ...updatedBed };
    saveGardenBedsToStorage(beds);
    return beds[bedIndex];
  }
  return null;
}

// Initialize garden beds from storage
let gardenBeds = getGardenBedsFromStorage();

// Generate 12 hours of water usage data for each bed
function generateWaterUsageData(bedId) {
  const now = new Date();
  const data = [];
  const labels = [];

  for (let i = 11; i >= 0; i--) {
    const hour = new Date(now.getTime() - i * 60 * 60 * 1000);
    // Format as 24hr time (e.g., "14:00", "09:00")
    const hourStr = hour.getHours().toString().padStart(2, "0") + ":00";
    labels.push(hourStr);

    // Generate realistic water usage data (liters per hour)
    // Different beds have different base usage patterns
    let baseUsage = 0;
    const hourOfDay = hour.getHours();

    // Morning and evening peak usage (6-8 AM, 6-8 PM)
    if (
      (hourOfDay >= 6 && hourOfDay <= 8) ||
      (hourOfDay >= 18 && hourOfDay <= 20)
    ) {
      baseUsage = Math.floor(Math.random() * 15) + 8; // 8-23 liters
    } else if (hourOfDay >= 10 && hourOfDay <= 16) {
      // Midday usage (lower due to evaporation concerns)
      baseUsage = Math.floor(Math.random() * 8) + 2; // 2-10 liters
    } else {
      // Night/early morning (minimal usage)
      baseUsage = Math.floor(Math.random() * 5) + 1; // 1-6 liters
    }

    // Adjust based on bed size (more plants = more water)
    const bed = gardenBeds.find((b) => b.id === bedId);
    if (bed) {
      const plantMultiplier = Math.max(0.5, bed.plants / 20); // Scale based on plant count
      baseUsage = Math.ceil(baseUsage * plantMultiplier);
    }

    data.push(baseUsage);
  }

  return { data, labels };
}

// Generate and render summary cards
function renderSummaryCards() {
  const container = document.getElementById("summary-cards");

  // Calculate statistics from garden beds
  const totalActiveBeds = gardenBeds.length;
  const totalHealthyBeds = gardenBeds.filter(
    (bed) => bed.status === "Healthy",
  ).length;
  const tooDryBeds = gardenBeds.filter(
    (bed) => bed.status === "Too dry",
  ).length;
  const tooHotBeds = gardenBeds.filter(
    (bed) => bed.status === "Too hot",
  ).length;
  const tooColdBeds = gardenBeds.filter(
    (bed) => bed.status === "Too cold",
  ).length;
  const tooWetBeds = gardenBeds.filter(
    (bed) => bed.status === "Too wet",
  ).length;
  const totalWaterUsage = "367L"; // Example total

  const summaryData = [
    {
      title: "Active Beds",
      value: totalActiveBeds,
      color: "#356C48", // Forest Green
    },
    {
      title: "Healthy",
      value: totalHealthyBeds,
      color: "#3A6A49", // Healthy green
    },
    {
      title: "Too dry",
      value: tooDryBeds,
      color: "#D76550", // Too dry orange
    },
    {
      title: "Too hot",
      value: tooHotBeds,
      color: "#C23A3A", // Too hot red
    },
    {
      title: "Too cold",
      value: tooColdBeds,
      color: "#BFD7EA", // Sky blue tint
    },
    {
      title: "Too wet",
      value: tooWetBeds,
      color: "#9B59B6", // Purple for too wet
    },
  ];

  container.innerHTML = "";

  summaryData.forEach((item) => {
    const cardElement = document.createElement("div");
    cardElement.className = "bg-white rounded-lg p-4 shadow-sm";
    cardElement.innerHTML = `
      <div class="flex items-start justify-between h-20">
        <div class="flex-1">
          <p class="text-xs font-medium h-5" style="color: #688654;">${item.title}</p>
          <p class="text-2xl font-bold flex-1" style="color: ${item.color};">${item.value}</p>
        </div>
        <div class="w-2 h-2 rounded-full mt-1 flex-shrink-0 ml-2" style="background-color: ${item.color};"></div>
      </div>
    `;
    container.appendChild(cardElement);
  });
}

// Create a water usage chart for each garden bed
function createChart(canvasId, color, bedId) {
  const ctx = document.getElementById(canvasId).getContext("2d");
  const chartData = generateWaterUsageData(bedId);

  return new Chart(ctx, {
    type: "bar",
    data: {
      labels: chartData.labels,
      datasets: [
        {
          data: chartData.data,
          backgroundColor: color,
          borderWidth: 0,
          borderRadius: 3,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          enabled: true,
          backgroundColor: "rgba(51, 49, 46, 0.9)",
          titleColor: "#ffffff",
          bodyColor: "#ffffff",
          borderColor: "#356C48",
          borderWidth: 1,
          cornerRadius: 6,
          displayColors: false,
          callbacks: {
            title: function (context) {
              return "Time: " + context[0].label;
            },
            label: function (context) {
              return "Water Used: " + context.parsed.y + " L";
            },
            afterLabel: function (context) {
              return "Hourly usage";
            },
          },
        },
      },
      scales: {
        x: {
          display: false,
          grid: {
            display: false,
          },
        },
        y: {
          display: false,
          grid: {
            display: false,
          },
        },
      },
      elements: {
        bar: {
          borderRadius: 3,
        },
      },
    },
  });
}

// Sort garden beds based on selected option
function sortGardenBeds(beds, sortOption) {
  const bedsCopy = [...beds];

  switch (sortOption) {
    case "A-Z Alphabetical":
      return bedsCopy.sort((a, b) => a.name.localeCompare(b.name));
    case "Newest - Oldest":
      return bedsCopy.sort((a, b) => b.id - a.id);
    case "Oldest - Newest":
      return bedsCopy.sort((a, b) => a.id - b.id);
    case "By Status":
      // Sort by status priority: Too dry, Too hot, Too cold, Too wet, Healthy
      const statusPriority = {
        "Too dry": 1,
        "Too hot": 2,
        "Too cold": 3,
        "Too wet": 4,
        "Healthy": 5,
      };
      return bedsCopy.sort((a, b) => {
        const priorityA = statusPriority[a.status] || 5;
        const priorityB = statusPriority[b.status] || 5;
        return priorityA - priorityB;
      });
    default:
      return bedsCopy;
  }
}

// Handle sort dropdown change
function handleSortChange() {
  const sortDropdown = document.getElementById("sort-dropdown");
  const selectedOption = sortDropdown.value;
  renderGardenBeds(selectedOption);
}

// Render garden beds
function renderGardenBeds(sortOption = "A-Z Alphabetical") {
  const container = document.getElementById("garden-beds-grid");
  container.innerHTML = "";

  const sortedBeds = sortGardenBeds(gardenBeds, sortOption);

  sortedBeds.forEach((bed) => {
    const bedElement = document.createElement("div");
    bedElement.className = "border border-gray-200 rounded-lg p-3 sm:p-4 transition-all overflow-hidden flex flex-col";
    bedElement.style.backgroundColor = "#FAFAFA"; // Off-white
    bedElement.id = `bed-${bed.id}`;
    const disabledClass = bed.wateringEnabled ? "" : " opacity-50 grayscale";
    bedElement.classList.add(...disabledClass.split(" ").filter(c => c));
    bedElement.innerHTML = `
      <div class="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-2 mb-3">
        <div class="flex flex-col gap-2 flex-1 min-w-0">
          <h3 class="font-medium truncate" style="color: #356C48;">${bed.name}</h3>
          <div class="flex items-center space-x-1.5">
            <input type="checkbox" id="watering-toggle-${bed.id}" class="watering-toggle toggle-switch" data-bed-id="${bed.id}" ${bed.wateringEnabled ? 'checked' : ''}>
            <label for="watering-toggle-${bed.id}" style="font-size: 0.875rem; color: #688654; cursor: pointer; margin: 0; font-weight: 500; white-space: nowrap; line-height: 1.25;">Watering Enabled</label>
          </div>
        </div>
        <span class="status-badge flex-shrink-0" style="background-color: ${bed.statusColor}; color: #FFFFFF;">
          ${bed.status}
        </span>
      </div>

                  <div class="flex items-center space-x-4 mb-3 text-sm" style="color: #33312E;">
        <div class="flex items-center space-x-1">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
          </svg>
          <span>${bed.temperature}</span>
        </div>
        <div class="flex items-center space-x-1">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path>
          </svg>
          <span>${bed.humidity}</span>
        </div>
      </div>

            <div class="mb-4">
        <div class="flex items-center justify-between mb-2">
          <span class="text-xs font-medium" style="color: #356C48;">Water Usage (Last 12 Hours)</span>
          <span class="text-xs" style="color: #688654;">Liters</span>
        </div>
        ${bed.lastWatered === "Just added" ? `
          <div class="chart-container flex items-center justify-center bg-gray-100 rounded" style="height: 80px;">
            <div class="text-center">
              <p class="text-xs" style="color: #688654;">No data available yet</p>
              <p class="text-xs" style="color: #a0a0a0; margin-top: 4px;">Data will appear as the bed is monitored</p>
            </div>
          </div>
        ` : `
          <div class="chart-container">
            <canvas id="chart-${bed.id}"></canvas>
          </div>
        `}
      </div>

                        <div class="text-xs space-y-1" style="color: #33312E;">
        <div class="flex items-center space-x-1">
          <span class="w-2 h-2 rounded-full" style="background-color: #D57A66;"></span>
          <span>${bed.location}</span>
        </div>
        <div class="flex items-center space-x-1">
          <span class="w-2 h-2 rounded-full" style="background-color: #356C48;"></span>
          <span>${bed.variety || "Mixed Variety"}</span>
        </div>
        <div class="flex items-center space-x-1">
          <span class="w-2 h-2 rounded-full" style="background-color: #BFD7EA;"></span>
          <span>${bed.substrate || "Potting Soil"}</span>
        </div>
        <div class="flex items-center space-x-1">
          <span class="w-2 h-2 rounded-full" style="background-color: #A789A2;"></span>
          <span>${bed.plants} plants</span>
        </div>
        <div class="flex items-center space-x-1">
          <span class="w-2 h-2 rounded-full" style="background-color: #688654;"></span>
          <span>Last watered: ${bed.lastWatered}</span>
        </div>
      </div>

      <div class="flex space-x-2 mt-4">
        <a href="plant-details.html?id=${bed.id}" class="flex-1 btn btn-secondary-gray justify-center" style="padding: 0.625rem 1rem; font-size: 0.875rem;">
          <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
          </svg>
          Details
        </a>
      </div>
    `;
    container.appendChild(bedElement);

    // Create chart for this bed (only if data is available)
    if (bed.lastWatered !== "Just added") {
      setTimeout(() => {
        createChart(`chart-${bed.id}`, bed.chartColor, bed.id);
      }, 100);
    }
  });

  // Add event listeners for watering toggles
  document.querySelectorAll(".watering-toggle").forEach((toggle) => {
    toggle.addEventListener("change", function () {
      const bedId = parseInt(this.getAttribute("data-bed-id"));
      const bedElement = document.getElementById(`bed-${bedId}`);
      const bed = gardenBeds.find((b) => b.id === bedId);

      if (bed) {
        bed.wateringEnabled = this.checked;
        updateGardenBedInStorage(bedId, { wateringEnabled: this.checked });

        // Update visual styling
        if (this.checked) {
          bedElement.classList.remove("opacity-50", "grayscale");
        } else {
          bedElement.classList.add("opacity-50", "grayscale");
        }
      }
    });
  });

}

// Mobile menu functionality
function initMobileMenu() {
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const sidebar = document.getElementById("sidebar");
  const mobileOverlay = document.getElementById("mobile-overlay");

  function toggleMenu() {
    const isOpen = !sidebar.classList.contains("-translate-x-full");

    if (isOpen) {
      sidebar.classList.add("-translate-x-full");
      mobileOverlay.classList.add("hidden");
      mobileMenuBtn.innerHTML = `
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      `;
    } else {
      sidebar.classList.remove("-translate-x-full");
      mobileOverlay.classList.remove("hidden");
      mobileMenuBtn.innerHTML = `
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      `;
    }
  }

  mobileMenuBtn.addEventListener("click", toggleMenu);
  mobileOverlay.addEventListener("click", toggleMenu);
}

// Modal functionality
function openAddBedModal() {
  const modal = document.getElementById("add-bed-modal");
  modal.classList.remove("hidden");
}

function closeAddBedModal() {
  const modal = document.getElementById("add-bed-modal");
  modal.classList.add("hidden");
  // Reset form
  document.getElementById("add-bed-form").reset();
}

// Add new garden bed
function addNewGardenBed(bedData) {
  // Generate new ID (highest existing ID + 1)
  const newId = Math.max(...gardenBeds.map((bed) => bed.id)) + 1;

  // Generate random initial values for temperature, humidity, etc.
  const statuses = ["Healthy", "Too hot", "Too cold", "Too dry", "Too wet"];
  const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];

  const statusColors = {
    "Healthy": "#3A6A49",
    "Too hot": "#C23A3A",
    "Too cold": "#BFD7EA",
    "Too dry": "#D76550",
    "Too wet": "#9B59B6",
  };

  const chartColors = {
    "Healthy": "#688654",
    "Too hot": "#D57A66",
    "Too cold": "#BFD7EA",
    "Too dry": "#D57A66",
    "Too wet": "#9B59B6",
  };

  const newBed = {
    id: newId,
    name: bedData.bedName,
    temperature: Math.floor(Math.random() * 10 + 20) + "°C", // 20-30°C
    humidity: Math.floor(Math.random() * 30 + 40) + "%", // 40-70%
    status: randomStatus,
    statusColor: statusColors[randomStatus],
    chartColor: chartColors[randomStatus],
    location: bedData.bedLocation,
    variety: bedData.bedVariety,
    substrate: bedData.bedSubstrate,
    plants: parseInt(bedData.bedPlants),
    lastWatered: "Just added",
    wateringEnabled: true,
  };

  // Add to gardenBeds array and save to storage
  gardenBeds.push(newBed);
  saveGardenBedsToStorage(gardenBeds);

  // Re-render summary cards and garden beds
  renderSummaryCards();
  renderGardenBeds();

  // Close modal
  closeAddBedModal();
}

// Handle form submission
function handleAddBedForm(event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const bedData = {
    bedName: formData.get("bedName"),
    bedLocation: formData.get("bedLocation"),
    bedVariety: formData.get("bedVariety"),
    bedSubstrate: formData.get("bedSubstrate"),
    bedPlants: formData.get("bedPlants"),
  };

  // Validate required fields
  if (
    !bedData.bedName ||
    !bedData.bedLocation ||
    !bedData.bedVariety ||
    !bedData.bedSubstrate ||
    !bedData.bedPlants
  ) {
    alert("Please fill in all required fields.");
    return;
  }

  addNewGardenBed(bedData);
}

// Make functions globally available
window.openAddBedModal = openAddBedModal;
window.closeAddBedModal = closeAddBedModal;
window.handleSortChange = handleSortChange;

// Refresh data from storage (useful when returning from other pages)
function refreshDataFromStorage() {
  gardenBeds = getGardenBedsFromStorage();
  renderSummaryCards();
  renderGardenBeds();
}

// Listen for storage changes (when data is updated from other tabs/pages)
window.addEventListener('storage', function(e) {
  if (e.key === 'harvestPro_gardenBeds') {
    refreshDataFromStorage();
  }
});

// Refresh data when page becomes visible (user returns to tab)
document.addEventListener('visibilitychange', function() {
  if (!document.hidden) {
    refreshDataFromStorage();
  }
});

// Sidebar collapse functionality
function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const collapseIcon = document.getElementById("collapse-icon");

  sidebar.classList.toggle("collapsed");

  // Rotate the icon when collapsed/expanded
  if (sidebar.classList.contains("collapsed")) {
    collapseIcon.style.transform = "rotate(180deg)";
    localStorage.setItem("sidebarCollapsed", "true");
  } else {
    collapseIcon.style.transform = "rotate(0deg)";
    localStorage.setItem("sidebarCollapsed", "false");
  }
}

// Restore sidebar state on page load
function restoreSidebarState() {
  const isCollapsed = localStorage.getItem("sidebarCollapsed") === "true";
  if (isCollapsed) {
    const sidebar = document.getElementById("sidebar");
    const collapseIcon = document.getElementById("collapse-icon");
    sidebar.classList.add("collapsed");
    collapseIcon.style.transform = "rotate(180deg)";
  }
}

// Make toggleSidebar globally available
window.toggleSidebar = toggleSidebar;

// Initialize the dashboard
document.addEventListener("DOMContentLoaded", function () {
  initMobileMenu();
  restoreSidebarState();
  refreshDataFromStorage(); // Use refresh instead of direct render calls

  // Initialize modal event listeners
  const closeModalBtn = document.getElementById("close-modal");
  const cancelBtn = document.getElementById("cancel-btn");
  const addBedForm = document.getElementById("add-bed-form");
  const modal = document.getElementById("add-bed-modal");

  // Close modal events
  closeModalBtn.addEventListener("click", closeAddBedModal);
  cancelBtn.addEventListener("click", closeAddBedModal);

  // Close modal when clicking outside
  modal.addEventListener("click", function (event) {
    if (event.target === modal) {
      closeAddBedModal();
    }
  });

  // Handle form submission
  addBedForm.addEventListener("submit", handleAddBedForm);

  // Close modal with Escape key
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && !modal.classList.contains("hidden")) {
      closeAddBedModal();
    }
  });
});
