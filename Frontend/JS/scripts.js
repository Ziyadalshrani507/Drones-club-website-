// Dynamic members list
const members = [
    {
        role: 'President',
        name: 'Ziyad Al-Shahrani',
        image: '../images/ziad.jpeg',
        major: 'Computer Science',
        linkedin: 'https://www.linkedin.com/in/ziyad-al-shahrani'
    },
    {
        role: 'Vice President',
        name: 'Meshal Al-Juber',
        image: '../images/dark blue lLogo.png',
        major: 'Engineering',
        linkedin: 'https://www.linkedin.com/in/meshal-al-juber'
    },
    {
        role: 'Head of Marketing Dept.',
        name: 'Abdulmalik Mohameden',
        image: '../images/abd.jpeg',
        major: 'Software Engineering',
        linkedin: 'https://www.linkedin.com/in/abdulmalik-alshanqiti/'
    },
    {
        role: 'Head of IT Dept.',
        name: 'Ahmad Ammar',
        image: '../images/dark blue lLogo.png',
        major: 'Software Engineering',
        linkedin: 'https://www.linkedin.com/in/ahmad-ammar-003b4434a/'
    },
    {
        role: 'Head of project development',
        name: 'Mohammed Alharthi',
        image: '../images/harthy.jpg',
        major: 'Electrical Engineering',
        linkedin: 'https://www.linkedin.com/in/mohammed-alharthi-b5956524a/'
    },
    {
        role: 'Head of Public Relations',
        name: 'Saud Fahad Almujarri',
        image: '../images/saud.jpeg',
        major: ' Civil and environmental engineering',
        linkedin: 'https://www.linkedin.com/in/saud-almujarri-9ba5a82a8/'
    }
];

const membersContainer = document.getElementById('members-container');
members.forEach(member => {
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
    membersContainer.appendChild(memberDiv);
});
