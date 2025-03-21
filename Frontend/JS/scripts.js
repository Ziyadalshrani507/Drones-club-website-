// Dynamic members list
const members = [
    {
        role: 'President',
        name: 'Ziyad Al-Shahrani',
        image: '../images/dark blue lLogo.png',
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
        image: '../images/dark blue lLogo.png',
        major: 'Business Administration',
        linkedin: 'https://www.linkedin.com/in/abdulmalik-mohameden'
    },
    {
        role: 'Head of IT Dept.',
        name: 'Ahmad Ammar',
        image: '../images/dark blue lLogo.png',
        major: 'Software Engineering',
        linkedin: 'https://www.linkedin.com/in/member-name-1'
    },
    {
        role: 'Member',
        name: 'Member Name 2',
        image: '../images/dark blue lLogo.png',
        major: 'Major 2',
        linkedin: 'https://www.linkedin.com/in/member-name-2'
    },
    {
        role: 'Member',
        name: 'Member Name 3',
        image: '../images/dark blue lLogo.png',
        major: 'Major 3',
        linkedin: 'https://www.linkedin.com/in/member-name-3'
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