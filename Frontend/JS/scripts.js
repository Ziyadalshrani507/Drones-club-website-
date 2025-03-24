// Dynamic members list
const members = [
    {
        role: 'Dean of CCIS',
        name: 'Dr. Mohammed Alshara',
        image: '../images/dralshara.png',
        type: 'faculty',
        department: 'College of Computer and Information Sciences',
        linkedin: 'https://www.linkedin.com/in/mohammed-alshara-b9551688'
    },
    {
        role: "Club's Supervisor",
        name: 'Dr. Muhammad Bilal Kadri',
        image: '../images/drkadri.png',
        type: 'faculty',
        department: 'College of Computer and Information Sciences',
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
        role: 'Head of IT',
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
        role: 'Head of Public Relations',
        name: 'Saud Fahad Almujarri',
        image: '../images/saud.jpeg',
        type: 'student',
        major: ' Civil and environmental engineering',
        linkedin: 'https://www.linkedin.com/in/saud-almujarri-9ba5a82a8/'
    }
];

const membersContainer = document.getElementById('members-container');
members.forEach(member => {
    const memberDiv = document.createElement('div');
    memberDiv.classList.add('member');
    
    // Define the appropriate label based on member type
    let fieldLabel = member.type === 'faculty' ? 'Department' : 'Major';
    let fieldValue = member.type === 'faculty' ? member.department : member.major;
    
    memberDiv.innerHTML = `
        <img src="${member.image}" alt="${member.name}" style="width: 150px; height: 150px;">
        <div class="member-info">
            <strong>${member.name}</strong>
            <span class="role">${member.role}</span>
            <strong>${fieldLabel}:</strong> ${fieldValue}<br>
            <a href="${member.linkedin}" target="_blank" class="linkedin-button">LinkedIn</a>
        </div>
    `;
    membersContainer.appendChild(memberDiv);
});