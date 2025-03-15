// Dynamic members list
const members = [
    {
        role: 'President',
        name: 'Ziyad Al-Shahrani',
        image: '',
        major: 'Computer Science',
        linkedin: 'https://www.linkedin.com/in/ziyad-al-shahrani'
    },
    {
        role: 'Vice President',
        name: 'Meshal Al-Juber',
        image: '../images/members/vice-president.jpg',
        major: 'Engineering',
        linkedin: 'https://www.linkedin.com/in/meshal-al-juber'
    },
    {
        role: 'Head of Marketing Dept.',
        name: 'Abdulmalik Mohameden',
        image: '../images/members/head-marketing.jpg',
        major: 'Business Administration',
        linkedin: 'https://www.linkedin.com/in/abdulmalik-mohameden'
    },
    {
        role: 'Head of Dept 1',
        name: 'Member Name 1',
        image: '../images/members/head-dept1.jpg',
        major: 'Major 1',
        linkedin: 'https://www.linkedin.com/in/member-name-1'
    },
    {
        role: 'Head of Dept 2',
        name: 'Member Name 2',
        image: '../images/members/head-dept2.jpg',
        major: 'Major 2',
        linkedin: 'https://www.linkedin.com/in/member-name-2'
    },
    {
        role: 'Head of Dept 3',
        name: 'Member Name 3',
        image: '../images/members/head-dept3.jpg',
        major: 'Major 3',
        linkedin: 'https://www.linkedin.com/in/member-name-3'
    }
];

const membersContainer = document.getElementById('members-container');
members.forEach(member => {
    const memberDiv = document.createElement('div');
    memberDiv.classList.add('team-member');
    memberDiv.innerHTML = `
        <div class="card">
            <div class="card-front">
                <img src="${member.image}" alt="${member.name}" class="member-photo">
                <strong>${member.role}</strong><br>${member.name}
            </div>
            <div class="card-back">
                <p>${member.major}</p>
                <p>Leading department with expertise and dedication.</p>
                <a href="${member.linkedin}" target="_blank" class="linkedin-button">LinkedIn</a>
            </div>
        </div>
    `;
    membersContainer.appendChild(memberDiv);
});