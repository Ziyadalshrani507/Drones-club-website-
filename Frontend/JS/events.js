const eventsData = [
<<<<<<< Updated upstream
    {
      title: "Drone Programming Workshop",
      description: "Guided by Dr. Muhammad Bilal Kadri, PhD, participants explored UAV fundamentals, controlled drones with Python, and gained hands-on flight experience. The session covered drone technology, coding autonomous movements, and an outdoor flight test, bringing their programming to life!",
      date: "February 13, 2025",
      location: " Men’s Campus - Building 105, Room 1-A14",
      time: "9:00 AM - 12:00 PM",
      image: "/images/eventimages/event1.jpg"
    },
    {
      title: "Another Event",
      description: "des sdsk dkjfd  dhfkdjf kdf fk fiadkjhf d",
      date: "April 5, 2025",
      location: "Digital Arena, Downtown",
      time: "2:00 PM - 8:00 PM",
      image: "/images/eventimages/event2.jpg"
    }
  ];
=======
  {
    title: "Drone Programming Workshop 2",
    description: "Code The Sky",
    date: "April, 2025",
    location: "Building 105",
    time: "TBD",
    image: "/images/eventimages/event1.jpg",
    status: "upcoming"
  },

  {
    title: "Drone Programming Workshop",
    description: "Guided by Dr. Muhammad Bilal Kadri, PhD, participants explored UAV fundamentals, controlled drones with Python, and gained hands-on flight experience. The session covered drone technology, coding autonomous movements, and an outdoor flight test, bringing their programming to life!",
    date: "February 13, 2025",
    location: " Men's Campus - Building 105, Room 1-A14",
    time: "9:00 AM - 12:00 PM",
    image: "/images/eventimages/event2.jpg",
    status: "ended"
  }
];

let currentIndex = 0;
const totalImages = eventsData.length;

document.getElementById('total-images').textContent = totalImages;

function updateEventInfo() {
  const eventData = eventsData[currentIndex];
  document.getElementById('event-title').textContent = eventData.title;
  document.getElementById('event-description').innerHTML = `<p>${eventData.description}</p>`;
  document.getElementById('event-date').textContent = eventData.date;
  document.getElementById('event-location').textContent = eventData.location;
  document.getElementById('event-time').textContent = eventData.time;
>>>>>>> Stashed changes
  
  // Make sure we have an image wrapper
  const imageArea = document.querySelector('.image-area');
  let imageWrapper = document.querySelector('.image-wrapper');
  
  // If wrapper doesn't exist, create it
  if (!imageWrapper) {
    // Create a wrapper for the image
    imageWrapper = document.createElement('div');
    imageWrapper.className = 'image-wrapper';
    
    // Move the image inside the wrapper
    const image = document.getElementById('gallery-image');
    const imageClone = image.cloneNode(true);
    imageWrapper.appendChild(imageClone);
    
    // Replace original image with wrapper containing image
    image.parentNode.replaceChild(imageWrapper, image);
  }
  
  // Get the image inside wrapper
  const image = imageWrapper.querySelector('img');
  image.classList.remove('fade-in');
  
  // Trigger reflow to restart animation
  void image.offsetWidth;
  
  image.src = eventData.image;
  image.id = 'gallery-image'; // Ensure ID is preserved
  image.classList.add('fade-in');
  
  // Update or create status label
  let statusLabel = imageWrapper.querySelector('.status-label');
  if (!statusLabel) {
    statusLabel = document.createElement('div');
    statusLabel.id = 'status-label';
    imageWrapper.appendChild(statusLabel);
  }
  
  statusLabel.textContent = eventData.status === 'upcoming' ? 'UPCOMING' : 'ENDED';
  statusLabel.className = `status-label ${eventData.status}`;
  
  document.getElementById('current-index').textContent = currentIndex + 1;
}

function navigate(direction) {
  currentIndex = (currentIndex + direction + totalImages) % totalImages;
  updateEventInfo();
}

// Initialize with first event
updateEventInfo();