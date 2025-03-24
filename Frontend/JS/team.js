// Dynamic members list
const members = [
    {
        role: 'Dean of CCIS',
        name: 'Dr. Mohammed Alshara',
        image: '../images/dralshara.png',
        type: 'faculty',
        college: 'College of Computer and Information Sciences',
        linkedin: 'https://www.linkedin.com/in/mohammed-alshara-b9551688'
    },
    {
        role: "Club's Supervisor",
        name: 'Dr. Muhammad Bilal Kadri',
        image: '../images/drkadri.png',
        type: 'faculty',
        college: 'College of Computer and Information Sciences',
        linkedin: 'https://www.linkedin.com/in/muhammad-bilal-kadri-phd-277b3811'
    },
    {
        role: 'President',
        name: 'Ziyad Al-Shahrani',
        image: '../images/ziad.jpeg',
        type: 'student',
        major: 'Computer Science',
        linkedin: 'https://www.linkedin.com/in/ziyad-al-shahrani'
    },
    {
        role: 'Vice President',
        name: 'Meshal Al-Juber',
        image: '../images/dark blue lLogo.png',
        type: 'student',
        major: 'Production Engineering Management',
        linkedin: 'https://www.linkedin.com/in/meshal-al-juber'
    },
    {
        role: 'Head of Marketing',
        name: 'Abdulmalik Mohameden',
        image: '../images/abd.jpeg',
        type: 'student',
        major: 'Software Engineering',
        linkedin: 'https://www.linkedin.com/in/abdulmalik-alshanqiti/'
    },
    {
        role: 'Head of Information Technology',
        name: 'Ahmad Ammar',
        image: '../images/ahmad.png',
        type: 'student',
        major: 'Software Engineering',
        linkedin: 'https://www.linkedin.com/in/ahmad-ammar-003b4434a/'
    },
    {
        role: 'Head of Project Development',
        name: 'Mohammed Alharthi',
        image: '../images/harthy.jpg',
        type: 'student',
        major: 'Electrical Engineering',
        linkedin: 'https://www.linkedin.com/in/mohammed-alharthi-b5956524a/'
    },
    {
        role: 'Head of Human Resources',
        name: 'name',
        image: '../images/dark blue lLogo.png',
        type: 'student',
        major: ' major',
        linkedin: 'https://www.linkedin.com'
    },
    {
        role: 'Head of Event Management',
        name: 'name',
        image: '../images/dark blue lLogo.png',
        type: 'student',
        major: 'major',
        linkedin: 'https://www.linkedin.com'
    }
];

// Filter members by type
const facultyMembers = members.filter(member => member.type === 'faculty');
const studentMembers = members.filter(member => member.type === 'student');

// Get the container
const membersContainer = document.getElementById('members-container');

// Clear the container first (in case there's any existing content)
membersContainer.innerHTML = '';

// Create student section
if (studentMembers.length > 0) {
    const studentSection = document.createElement('div');
    studentSection.classList.add('members-section');
    
    // Add section title
    const studentTitle = document.createElement('h3');
    studentTitle.classList.add('section-title');
    studentTitle.textContent = 'Student Leadership';
    studentSection.appendChild(studentTitle);
    
    // Create student members grid
    const studentGrid = document.createElement('div');
    studentGrid.classList.add('members-grid');
    
    // Add each student member
    studentMembers.forEach(member => {
        const memberDiv = document.createElement('div');
        memberDiv.classList.add('member');
        
        memberDiv.innerHTML = `
            <img src="${member.image}" alt="${member.name}" style="width: 150px; height: 150px;">
            <div class="member-info">
                <strong>${member.name}</strong>
                <span class="role">${member.role}</span>
                <strong>Major:</strong> ${member.major}<br>
                <a href="${member.linkedin}" target="_blank" class="linkedin-button">LinkedIn</a>
            </div>
        `;
        studentGrid.appendChild(memberDiv);
    });
    
    studentSection.appendChild(studentGrid);
    membersContainer.appendChild(studentSection);

    // Create faculty section
if (facultyMembers.length > 0) {
    const facultySection = document.createElement('div');
    facultySection.classList.add('members-section');
    
    // Add section title
    const facultyTitle = document.createElement('h3');
    facultyTitle.classList.add('section-title');
    facultyTitle.textContent = 'Faculty Advisors';
    facultySection.appendChild(facultyTitle);
    
    // Create faculty members grid
    const facultyGrid = document.createElement('div');
    facultyGrid.classList.add('members-grid');
    
    // Add each faculty member
    facultyMembers.forEach(member => {
        const memberDiv = document.createElement('div');
        memberDiv.classList.add('member');
        
        memberDiv.innerHTML = `
            <img src="${member.image}" alt="${member.name}" style="width: 150px; height: 150px;">
            <div class="member-info">
                <strong>${member.name}</strong>
                <span class="role">${member.role}</span>
                <strong>college:</strong> ${member.college}<br>
                <a href="${member.linkedin}" target="_blank" class="linkedin-button">LinkedIn</a>
            </div>
        `;
        facultyGrid.appendChild(memberDiv);
    });
    
    facultySection.appendChild(facultyGrid);
    membersContainer.appendChild(facultySection);
}

}