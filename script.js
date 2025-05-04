// Dark Mode Toggle
const toggleButton = document.querySelector('.toggle-dark-mode');

// Check stored theme preference on page load
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-mode');
} 

toggleButton.addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
  // Store the theme preference in localStorage
  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});

// Search Bar Functionality
document.getElementById("search-bar").addEventListener("input", function() {
  const query = this.value.toLowerCase();
  const tiles = document.querySelectorAll('.tile');
  
  tiles.forEach(tile => {
    const text = tile.textContent.toLowerCase();
    if (text.includes(query)) {
      tile.style.display = "block";
    } else {
      tile.style.display = "none";
    }
  });
});

// Notifications Simulation
const notifications = [
  { message: 'New Exam Dates Released!', link: '/exam-dates' },
  { message: 'Library Books Available for Rent', link: '/library' },
];

const notificationContainer = document.querySelector('.notifications');
notifications.forEach(notification => {
  const notificationElement = document.createElement('div');
  notificationElement.classList.add('notification');
  notificationElement.textContent = notification.message;

  // Event listener for showing notification details
  notificationElement.addEventListener('click', function() {
    window.location.href = notification.link; // Redirect or show details
  });

  notificationContainer.appendChild(notificationElement);
});

// Show Notifications on Load
setTimeout(() => {
  notificationContainer.classList.add('show');
}, 1000);

// Transfer Attendance
document.getElementById("transferForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;
  document.getElementById("transferStatus").textContent =
    `Attendance successfully transferred from ${from} to ${to}!`;
});

// FullCalendar Implementation (Timetable)
const calendarEl = document.getElementById('calendar');
const calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
    },
    themeSystem: 'bootstrap', // Use a theme for better aesthetics
    events: [
        { title: 'Math Class', date: '2025-05-10', color: '#007bff' }, // Blue for classes
        { title: 'Science Exam', date: '2025-05-12', color: '#dc3545' } // Red for exams
    ],
    eventTextColor: '#ffffff', // White text for better contrast
    dayMaxEventRows: true, // Show "+ more" for crowded days
    eventDisplay: 'block', // Better visibility for events
    height: 'auto', // Adjust height dynamically
    navLinks: true, // Allow navigation by clicking on dates
    nowIndicator: true // Highlight the current time
});
calendar.render();
