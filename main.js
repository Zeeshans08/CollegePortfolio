// Mobile Navigation
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', () => {
    // Toggle Nav
    navLinks.classList.toggle('active');
    
    // Burger Animation
    burger.classList.toggle('toggle');
});

// Close mobile menu when clicking a link
navLinksItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active');
        burger.classList.remove('toggle');
    });
});

// Tab System for Academics Page
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

if (tabBtns.length > 0) {
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons and contents
            tabBtns.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button and corresponding content
            btn.classList.add('active');
            const tabId = btn.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
}

// Animated Number Counter for Stats
const statNumbers = document.querySelectorAll('.stat-number');

if (statNumbers.length > 0) {
    const animateNumbers = () => {
        statNumbers.forEach(stat => {
            const target = +stat.getAttribute('data-target');
            const count = +stat.innerText;
            const increment = target / 50;
            
            if (count < target) {
                stat.innerText = Math.ceil(count + increment);
                setTimeout(animateNumbers, 20);
            } else {
                stat.innerText = target;
            }
        });
    };
    
    // Start animation when stats are in viewport
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateNumbers();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    statNumbers.forEach(stat => {
        observer.observe(stat);
    });
}

// Announcement Slider
const announcementSlider = document.querySelector('.announcement-slider');

if (announcementSlider) {
    const announcements = [
        {
            title: "Registration Open for Tech Fest 2024",
            date: "15 July 2024",
            content: "Register now for the annual technical festival with workshops and competitions."
        },
        {
            title: "New Python Programming Workshop",
            date: "22 July 2024",
            content: "Learn advanced Python concepts from industry experts."
        },
        {
            title: "Campus Recruitment Drive",
            date: "5 August 2024",
            content: "Top IT companies visiting campus for placements."
        }
    ];
    
    let currentAnnouncement = 0;
    
    const showAnnouncement = () => {
        const announcement = announcements[currentAnnouncement];
        announcementSlider.innerHTML = `
            <div class="announcement-card">
                <h3>${announcement.title}</h3>
                <p class="announcement-date">${announcement.date}</p>
                <p class="announcement-content">${announcement.content}</p>
            </div>
        `;
        
        currentAnnouncement = (currentAnnouncement + 1) % announcements.length;
    };
    
    showAnnouncement();
    setInterval(showAnnouncement, 5000);
}

// Faculty Data for About Page
const facultyGrid = document.querySelector('.faculty-grid');

if (facultyGrid) {
    const facultyData = [
        {
            name: "Dr. Rajesh Sharma",
            position: "Head of Department",
            specialization: "Artificial Intelligence",
            img: "faculty1.jpg"
        },
        {
            name: "Prof. Meena Patel",
            position: "Associate Professor",
            specialization: "Database Systems",
            img: "faculty2.jpg"
        },
        // Add more faculty members
    ];
    
    facultyData.forEach(faculty => {
        const facultyCard = document.createElement('div');
        facultyCard.className = 'faculty-card';
        facultyCard.innerHTML = `
            <div class="faculty-img">
                <img src="images/faculty/${faculty.img}" alt="${faculty.name}">
            </div>
            <div class="faculty-info">
                <h3>${faculty.name}</h3>
                <p>${faculty.position}</p>
                <p><small>${faculty.specialization}</small></p>
            </div>
        `;
        facultyGrid.appendChild(facultyCard);
    });
}

// Upcoming Events for Events Page
const eventsList = document.querySelector('.events-list');

if (eventsList) {
    const upcomingEvents = [
        {
            title: "Tech Symposium 2024",
            date: "25 July 2024",
            time: "10:00 AM - 4:00 PM",
            location: "College Auditorium",
            img: "event-upcoming1.jpg"
        },
        {
            title: "Hackathon Competition",
            date: "10 August 2024",
            time: "9:00 AM - 6:00 PM",
            location: "Computer Lab 3",
            img: "event-upcoming2.jpg"
        },
        // Add more events
    ];
    
    upcomingEvents.forEach(event => {
        const eventCard = document.createElement('div');
        eventCard.className = 'event-card';
        eventCard.innerHTML = `
            <div class="event-img">
                <img src="images/events/${event.img}" alt="${event.title}">
            </div>
            <div class="event-info">
                <span class="event-date">${event.date}</span>
                <h3>${event.title}</h3>
                <p>${event.content || 'Join us for this exciting event!'}</p>
                <div class="event-meta">
                    <span><i class="far fa-clock"></i> ${event.time}</span>
                    <span><i class="fas fa-map-marker-alt"></i> ${event.location}</span>
                </div>
            </div>
        `;
        eventsList.appendChild(eventCard);
    });
}
// Preloader
window.addEventListener('load', function() {
  setTimeout(function() {
    document.querySelector('.preloader').style.opacity = '0';
    setTimeout(function() {
      document.querySelector('.preloader').style.display = 'none';
      
      // Animate sections on scroll
      const sections = document.querySelectorAll('.content-section');
      sections.forEach(section => {
        section.classList.add('visible');
      });
    }, 500);
  }, 1500); // Adjust time as needed
});

// Scroll animations
window.addEventListener('scroll', function() {
  document.querySelectorAll('.content-section').forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < window.innerHeight - 100) {
      section.classList.add('visible');
    }
  });
});

// Initialize animations on page load
document.addEventListener('DOMContentLoaded', function() {
  // Trigger hero animations immediately
  document.querySelectorAll('.animate-text, .animate-pop').forEach(el => {
    el.style.opacity = '0'; // Ensure elements start hidden
  });
});