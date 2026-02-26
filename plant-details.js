// Metrics data for the plant details page
const metricsData = [
  {
    title: "Soil Moisture",
    current: "54.8%",
    average: "54.9%",
    status: "Status Monitor",
    statusColor: "text-warning",
    change: "-3.6%",
    changeColor: "text-red-500",
    chartColor: "#BFD7EA", // Sky Blue Tint
    icon: "💧",
  },
  {
    title: "Soil Temperature",
    current: "36.9°C",
    average: "35.2°C",
    status: "Status Monitor",
    statusColor: "text-warning",
    change: "+3.2°C",
    changeColor: "text-red-500",
    chartColor: "#D57A66", // Terracotta Clay
    icon: "🌡️",
  },
  {
    title: "Air Temperature",
    current: "24.5°C",
    average: "23.8°C",
    status: "Status Optimal",
    statusColor: "text-healthy",
    change: "+1.2°C",
    changeColor: "text-green-500",
    chartColor: "#A789A2", // Cool Sage
    icon: "🌤️",
  },
  {
    title: "Air Humidity",
    current: "58.3%",
    average: "61.5%",
    status: "Status Optimal",
    statusColor: "text-healthy",
    change: "-2.8%",
    changeColor: "text-green-500",
    chartColor: "#356C48", // Forest Green
    icon: "🌬️",
  },
];

// Shared data management functions
function getGardenBedsFromStorage() {
  const stored = localStorage.getItem('harvestPro_gardenBeds');
  return stored ? JSON.parse(stored) : [];
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

// Default garden beds data (fallback if no localStorage data exists)
const defaultGardenBeds = [
  {
    id: 1,
    name: "Berry Bushes",
    location: "North Garden",
    variety: "Blueberries",
    substrate: "Compost Mix",
    plants: 6,
    status: "Too hot",
    statusColor: "#C23A3A",
    wateringEnabled: true,
  },
  {
    id: 2,
    name: "Flower Section",
    location: "East Garden",
    variety: "Marigolds",
    substrate: "Potting Soil",
    plants: 24,
    status: "Too hot",
    statusColor: "#C23A3A",
    wateringEnabled: true,
  },
  {
    id: 3,
    name: "Greenhouse",
    location: "Greenhouse",
    variety: "Mixed Vegetables",
    substrate: "Hydroponic Medium",
    plants: 18,
    status: "Healthy",
    statusColor: "#3A6A49",
    wateringEnabled: true,
  },
  {
    id: 4,
    name: "Herb Bed",
    location: "West Garden",
    variety: "Basil & Oregano",
    substrate: "Garden Soil",
    plants: 12,
    status: "Healthy",
    statusColor: "#3A6A49",
    wateringEnabled: true,
  },
  {
    id: 5,
    name: "Tomato Patch",
    location: "South Garden",
    variety: "Cherry Tomatoes",
    substrate: "Compost Mix",
    plants: 16,
    status: "Healthy",
    statusColor: "#3A6A49",
    wateringEnabled: true,
  },
  {
    id: 6,
    name: "Vegetable Garden",
    location: "Central Garden",
    variety: "Lettuce & Spinach",
    substrate: "Potting Soil",
    plants: 28,
    status: "Too dry",
    statusColor: "#D76550",
    wateringEnabled: true,
  },
  {
    id: 7,
    name: "Winter Greens",
    location: "Cold Frame",
    variety: "Kale & Brussels Sprouts",
    substrate: "Garden Soil",
    plants: 8,
    status: "Too cold",
    statusColor: "#BFD7EA",
    wateringEnabled: true,
  },
];

// Initialize garden beds from storage, fallback to default if empty
let gardenBeds = getGardenBedsFromStorage();
if (gardenBeds.length === 0) {
  gardenBeds = defaultGardenBeds;
  saveGardenBedsToStorage(gardenBeds);
}

// Generate random chart data for metrics
function generateMetricChartData() {
  return Array.from({ length: 30 }, () => Math.floor(Math.random() * 100));
}

// Create a metric chart
function createMetricChart(canvasId, color, type = "bar") {
  const ctx = document.getElementById(canvasId).getContext("2d");
  return new Chart(ctx, {
    type: type,
    data: {
      labels: Array.from({ length: 30 }, (_, i) => i + 1),
      datasets: [
        {
          data: generateMetricChartData(),
          backgroundColor: color,
          borderColor: color,
          borderWidth: type === "line" ? 2 : 0,
          fill: type === "line" ? false : true,
          tension: 0.4,
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
      },
      scales: {
        x: {
          display: false,
        },
        y: {
          display: false,
        },
      },
      elements: {
        bar: {
          borderRadius: 2,
        },
        point: {
          radius: 0,
        },
      },
    },
  });
}

// Get status color class
function getStatusColorClass(statusColor) {
  if (statusColor === "text-healthy") return "text-green-500";
  if (statusColor === "text-warning") return "text-yellow-500";
  return "text-gray-500";
}

// Render metrics grid
function renderMetrics() {
  const plantId = getUrlParameter("id");
  const plant = gardenBeds.find((bed) => bed.id == plantId);
  const noDataMessage = document.getElementById("no-data-message");
  const container = document.getElementById("metrics-grid");

  // Check if newly added bed
  if (plant && plant.lastWatered === "Just added") {
    noDataMessage.classList.remove("hidden");
    container.innerHTML = "";
    return;
  }

  noDataMessage.classList.add("hidden");
  container.innerHTML = "";

  metricsData.forEach((metric, index) => {
    const metricElement = document.createElement("div");
    metricElement.className = "bg-white rounded-lg shadow-sm p-6";
    metricElement.innerHTML = `
      <div class="flex items-center justify-between mb-4">
        <div class="flex items-center space-x-2">
          <span class="text-2xl">${metric.icon}</span>
                    <h3 class="font-semibold" style="color: #356C48;">${metric.title}</h3>
        </div>
        <span class="text-yellow-500">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92z"></path>
          </svg>
        </span>
      </div>

            <div class="text-sm mb-2" style="color: #688654;">
        Real-time monitoring and 7-day trends
      </div>

      <div class="grid grid-cols-3 gap-4 mb-4">
        <div>
                    <div class="text-xs" style="color: #688654;">Current</div>
          <div class="text-lg font-bold" style="color: #356C48;">${metric.current}</div>
        </div>
        <div>
          <div class="text-xs" style="color: #688654;">Avg (7d)</div>
          <div class="text-lg font-bold" style="color: #356C48;">${metric.average}</div>
        </div>
        <div>
          <div class="text-xs" style="color: #688654;">Status</div>
          <div class="${getStatusColorClass(metric.statusColor)} text-sm font-medium">
            ${metric.status.split(" ")[1]}
          </div>
        </div>
      </div>

      <div class="metric-chart mb-4">
        <canvas id="metric-chart-${index}"></canvas>
      </div>

            <div class="flex justify-between items-center text-xs" style="color: #688654;">
        <span>24h ago</span>
        <span class="${metric.changeColor} font-medium">
          24h change: ${metric.change}
        </span>
      </div>
    `;
    container.appendChild(metricElement);

    // Create chart for this metric
    setTimeout(() => {
      createMetricChart(`metric-chart-${index}`, metric.chartColor, "bar");
    }, 100);
  });
}

// Get URL parameter
function getUrlParameter(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

// Update page content based on plant ID
function updatePlantInfo() {
  const plantId = getUrlParameter("id");
  if (plantId) {
    const plant = gardenBeds.find((bed) => bed.id == plantId);
    if (plant) {
      document.getElementById("plant-name").textContent = plant.name;
      document.getElementById("plant-details").innerHTML = `
        <span>${plant.location}</span>
        <span>•</span>
        <span>${plant.variety}</span>
        <span>•</span>
        <span>${plant.plants} plants</span>
      `;

      const statusElement = document.getElementById("plant-status");
      statusElement.textContent = plant.status;
      statusElement.className = "px-2 py-1 text-white text-xs rounded-full";
      statusElement.style.backgroundColor = plant.statusColor;

      // Update watering enabled toggle
      const wateringToggle = document.getElementById("watering-enabled-toggle");
      wateringToggle.checked = plant.wateringEnabled !== false;

      // Update page opacity based on watering enabled status
      updatePageVisualState(plant.wateringEnabled);
    }
  }
}

function updatePageVisualState(wateringEnabled) {
  const mainContent = document.querySelector(".flex-1");
  if (wateringEnabled) {
    mainContent.classList.remove("opacity-50", "grayscale");
  } else {
    mainContent.classList.add("opacity-50", "grayscale");
  }
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

// Notes storage
let plantNotes = JSON.parse(localStorage.getItem("plantNotes") || "{}");

// Notes functionality
function openAddNoteModal() {
  const modal = document.getElementById("add-note-modal");
  modal.classList.remove("hidden");
}

function closeAddNoteModal() {
  const modal = document.getElementById("add-note-modal");
  modal.classList.add("hidden");
  document.getElementById("add-note-form").reset();
}

function handleAddNoteSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const plantId = getUrlParameter("id") || "default";

  if (!plantNotes[plantId]) {
    plantNotes[plantId] = [];
  }

  const newNote = {
    id: Date.now(),
    content: formData.get("noteContent"),
    category: formData.get("noteCategory"),
    timestamp: new Date().toISOString(),
    date: new Date().toLocaleDateString(),
    time: new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    }),
  };

  plantNotes[plantId].unshift(newNote);
  localStorage.setItem("plantNotes", JSON.stringify(plantNotes));

  renderNotes();
  closeAddNoteModal();
}

function deleteNote(noteId) {
  const plantId = getUrlParameter("id") || "default";
  if (plantNotes[plantId]) {
    plantNotes[plantId] = plantNotes[plantId].filter(
      (note) => note.id !== noteId,
    );
    localStorage.setItem("plantNotes", JSON.stringify(plantNotes));
    renderNotes();
  }
}

function renderNotes() {
  const plantId = getUrlParameter("id") || "default";
  const container = document.getElementById("notes-container");
  const noNotesDiv = document.getElementById("no-notes");

  const notes = plantNotes[plantId] || [];

  if (notes.length === 0) {
    container.style.display = "none";
    noNotesDiv.style.display = "block";
    return;
  }

  container.style.display = "block";
  noNotesDiv.style.display = "none";

  const categoryColors = {
    watering: "#BFD7EA",
    observation: "#688654",
    maintenance: "#D57A66",
    health: "#A789A2",
    growth: "#356C48",
    other: "#F5F3EF",
  };

  const categoryTextColors = {
    watering: "#1e40af",
    observation: "#ffffff",
    maintenance: "#ffffff",
    health: "#ffffff",
    growth: "#ffffff",
    other: "#356C48",
  };

  container.innerHTML = notes
    .map(
      (note) => `
    <div class="border border-gray-200 rounded-lg p-4 bg-gray-50">
      <div class="flex items-start justify-between mb-2">
        <div class="flex items-center space-x-2">
          <span class="px-2 py-1 rounded-full text-xs font-medium"
                style="background-color: ${categoryColors[note.category]}; color: ${categoryTextColors[note.category]};">
            ${note.category.charAt(0).toUpperCase() + note.category.slice(1)}
          </span>
          <span class="text-xs text-gray-500">${note.date} at ${note.time}</span>
        </div>
        <button
          onclick="deleteNote(${note.id})"
          class="text-gray-400 hover:text-red-500 transition-colors"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
          </svg>
        </button>
      </div>
      <p class="text-sm text-gray-700">${note.content}</p>
    </div>
  `,
    )
    .join("");
}

// Edit garden bed functionality
function openEditModal() {
  const modal = document.getElementById("edit-garden-modal");
  modal.classList.remove("hidden");

  // Get current plant data
  const plantId = getUrlParameter("id");
  if (plantId) {
    const plant = gardenBeds.find((bed) => bed.id == plantId);
    if (plant) {
      // Pre-populate the form with current values
      document.getElementById("edit-bed-name").value = plant.name;
      document.getElementById("edit-bed-location").value = plant.location;
      document.getElementById("edit-bed-variety").value = plant.variety;
      document.getElementById("edit-bed-plants").value = plant.plants;

      // Set the substrate dropdown
      const substrateSelect = document.getElementById("edit-bed-substrate");
      // Convert display name back to value
      const substrateMap = {
        "Potting Soil": "potting-soil",
        "Garden Soil": "garden-soil",
        "Compost Mix": "compost-mix",
        "Sphagnum Moss": "sphagnum-moss",
        "Coco Coir": "coco-coir",
        "Hydroponic Medium": "hydroponic",
        "Perlite Mix": "perlite-mix"
      };
      const substrateValue = substrateMap[plant.substrate] || "other";
      substrateSelect.value = substrateValue;
    }
  }
}

function closeEditModal() {
  const modal = document.getElementById("edit-garden-modal");
  modal.classList.add("hidden");
  document.getElementById("edit-garden-form").reset();
}

function handleEditSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const newName = formData.get("bedName");
  const newLocation = formData.get("bedLocation");
  const newVariety = formData.get("bedVariety");
  const newSubstrate = formData.get("bedSubstrate");
  const newPlants = parseInt(formData.get("bedPlants"));

  // Convert substrate value to display name
  const substrateDisplayMap = {
    "potting-soil": "Potting Soil",
    "garden-soil": "Garden Soil",
    "compost-mix": "Compost Mix",
    "sphagnum-moss": "Sphagnum Moss",
    "coco-coir": "Coco Coir",
    "hydroponic": "Hydroponic Medium",
    "perlite-mix": "Perlite Mix",
    "other": "Other"
  };
  const substrateDisplay = substrateDisplayMap[newSubstrate] || "Other";

  // Update the page display
  document.getElementById("plant-name").textContent = newName;
  document.getElementById("plant-details").innerHTML = `
    <span>${newLocation}</span>
    <span>•</span>
    <span>${newVariety}</span>
    <span>•</span>
    <span>${newPlants} plants</span>
  `;

  // Update the garden beds data and save to shared storage
  const plantId = getUrlParameter("id");
  if (plantId) {
    const updatedData = {
      name: newName,
      location: newLocation,
      variety: newVariety,
      substrate: substrateDisplay,
      plants: newPlants
    };

    const updatedBed = updateGardenBedInStorage(plantId, updatedData);
    if (updatedBed) {
      // Update local array for immediate UI updates
      const localBedIndex = gardenBeds.findIndex(bed => bed.id == plantId);
      if (localBedIndex !== -1) {
        gardenBeds[localBedIndex] = updatedBed;
      }
    }
  }

  alert(`Garden bed updated successfully!`);
  closeEditModal();
}

// Delete garden bed functionality
function deleteGardenBed() {
  const modal = document.getElementById("delete-confirmation-modal");
  modal.classList.remove("hidden");
}

function confirmDelete() {
  const plantName = document.getElementById("plant-name").textContent;
  const plantId = getUrlParameter("id");

  if (plantId) {
    // Remove from shared storage
    const beds = getGardenBedsFromStorage();
    const updatedBeds = beds.filter(bed => bed.id != plantId);
    saveGardenBedsToStorage(updatedBeds);
  }

  alert(`Garden bed "${plantName}" has been deleted.`);
  // Redirect back to dashboard
  window.location.href = "index.html";
}

function cancelDelete() {
  const modal = document.getElementById("delete-confirmation-modal");
  modal.classList.add("hidden");
}

// Make functions globally available
window.deleteGardenBed = deleteGardenBed;
window.confirmDelete = confirmDelete;
window.cancelDelete = cancelDelete;
window.openAddNoteModal = openAddNoteModal;
window.closeAddNoteModal = closeAddNoteModal;
window.deleteNote = deleteNote;
window.openEditModal = openEditModal;
window.closeEditModal = closeEditModal;

// Initialize watering toggle
function initWateringToggle() {
  const toggle = document.getElementById("watering-enabled-toggle");
  toggle.addEventListener("change", function () {
    const plantId = getUrlParameter("id");
    const plant = gardenBeds.find((bed) => bed.id == plantId);

    if (plant) {
      plant.wateringEnabled = this.checked;
      updateGardenBedInStorage(plantId, { wateringEnabled: this.checked });
      updatePageVisualState(this.checked);
    }
  });
}

// Initialize action center
function initActionCenter() {
  document
    .getElementById("edit-garden-btn")
    .addEventListener("click", openEditModal);

  document
    .getElementById("add-note-form")
    .addEventListener("submit", handleAddNoteSubmit);

  document
    .getElementById("edit-garden-form")
    .addEventListener("submit", handleEditSubmit);

  // Close modals when clicking outside
  const deleteModal = document.getElementById("delete-confirmation-modal");
  const noteModal = document.getElementById("add-note-modal");
  const editModal = document.getElementById("edit-garden-modal");

  [deleteModal, noteModal, editModal].forEach((modal) => {
    modal.addEventListener("click", function (event) {
      if (event.target === modal) {
        if (modal === deleteModal) cancelDelete();
        else if (modal === noteModal) closeAddNoteModal();
        else if (modal === editModal) closeEditModal();
      }
    });
  });

  // Close modals with Escape key
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      if (!deleteModal.classList.contains("hidden")) cancelDelete();
      else if (!noteModal.classList.contains("hidden")) closeAddNoteModal();
      else if (!editModal.classList.contains("hidden")) closeEditModal();
    }
  });
}

// Refresh data from storage
function refreshDataFromStorage() {
  gardenBeds = getGardenBedsFromStorage();
  updatePlantInfo();
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

// Initialize the plant details page
document.addEventListener("DOMContentLoaded", function () {
  initMobileMenu();
  refreshDataFromStorage(); // Refresh data first
  renderMetrics();
  initWateringToggle();
  initActionCenter();
  renderNotes();
});
