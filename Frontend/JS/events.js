const eventsData = [
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
    
    const image = document.getElementById('gallery-image');
    image.classList.remove('fade-in');
    
    // Trigger reflow to restart animation
    void image.offsetWidth;
    
    image.src = eventData.image;
    image.classList.add('fade-in');
    
    document.getElementById('current-index').textContent = currentIndex + 1;
  }
  
  function navigate(direction) {
    currentIndex = (currentIndex + direction + totalImages) % totalImages;
    updateEventInfo();
  }
  
  // Initialize with first event
  updateEventInfo();