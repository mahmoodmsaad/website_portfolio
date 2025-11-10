// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', newTheme);
    themeToggle.textContent = newTheme === 'dark' ? '☀️' : '🌙';
    localStorage.setItem('theme', newTheme);
});

const savedTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', savedTheme);
themeToggle.textContent = savedTheme === 'dark' ? '☀️' : '🌙';

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
            document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
            this.classList.add('active');
        }
    });
});

// Editable Research Cards
document.querySelectorAll('.research-card').forEach(card => {
    const key = card.getAttribute('data-key');
    const saved = localStorage.getItem(key);
    if (saved) card.innerHTML = saved;
    
    card.addEventListener('blur', () => {
        localStorage.setItem(key, card.innerHTML);
    });
});

// Activities Management
let activities = JSON.parse(localStorage.getItem('activities')) || [];

document.getElementById('activityDate').valueAsDate = new Date();

function addActivity() {
    const activity = {
        id: Date.now(),
        date: document.getElementById('activityDate').value,
        title: document.getElementById('activityTitle').value,
        category: document.getElementById('activityCategory').value,
        hours: parseFloat(document.getElementById('activityHours').value) || 0,
        notes: document.getElementById('activityNotes').value
    };
    
    if (!activity.title) {
        alert('Please enter an activity title');
        return;
    }
    
    activities.unshift(activity);
    localStorage.setItem('activities', JSON.stringify(activities));
    
    document.getElementById('activityTitle').value = '';
    document.getElementById('activityHours').value = '';
    document.getElementById('activityNotes').value = '';
    
    renderActivities();
    updateStats();
    updateCharts();
}

function deleteActivity(id) {
    activities = activities.filter(a => a.id !== id);
    localStorage.setItem('activities', JSON.stringify(activities));
    renderActivities();
    updateStats();
    updateCharts();
}

function renderActivities() {
    const list = document.getElementById('activitiesList');
    if (activities.length === 0) {
        list.innerHTML = '<p style="color: var(--text-light);">No activities logged yet.</p>';
        return;
    }
    
    list.innerHTML = activities.map(a => `
        <div class="activity-item">
            <h4>${a.title}</h4>
            <div class="activity-meta">
                <span>📅 ${a.date}</span>
                <span>🏷️ ${a.category}</span>
                <span>⏱️ ${a.hours}h</span>
            </div>
            <p>${a.notes}</p>
            <button class="activity-delete" onclick="deleteActivity(${a.id})">Delete</button>
        </div>
    `).join('');
}

// Publications Management
let publications = JSON.parse(localStorage.getItem('publications')) || [
    {
        id: 1,
        title: "Sensing applications of graphitic carbon nitride (C6N8) for Nitrogen oxides: A DFT study",
        authors: "M Saad Mahmood, et al.",
        venue: "Research Journal",
        year: "2023",
        link: ""
    },
    {
        id: 2,
        title: "A Novel 2-D Phosphorene-Based Drug Delivery System for Anti-HIV Zidovudine Drug to Enhance the Therapeutic Effects: A DFT Study",
        authors: "M Saad Mahmood, et al.",
        venue: "Research Journal",
        year: "2023",
        link: ""
    },
    {
        id: 3,
        title: "Rational designing of a methoxy diphenylamine-substituted fluorene-based hole transporting materials for proficient perovskites solar cells",
        authors: "M Saad Mahmood, et al.",
        venue: "Submitted for Publication",
        year: "2024",
        link: ""
    }
];

function addPublication() {
    const pub = {
        id: Date.now(),
        title: document.getElementById('pubTitle').value,
        authors: document.getElementById('pubAuthors').value,
        venue: document.getElementById('pubVenue').value,
        year: document.getElementById('pubYear').value,
        link: document.getElementById('pubLink').value
    };
    
    if (!pub.title) {
        alert('Please enter a title');
        return;
    }
    
    publications.unshift(pub);
    localStorage.setItem('publications', JSON.stringify(publications));
    
    document.getElementById('pubTitle').value = '';
    document.getElementById('pubAuthors').value = '';
    document.getElementById('pubVenue').value = '';
    document.getElementById('pubYear').value = '';
    document.getElementById('pubLink').value = '';
    
    renderPublications();
    updateStats();
}

function renderPublications() {
    const list = document.getElementById('publicationsList');
    if (publications.length === 0) {
        list.innerHTML = '<p style="color: var(--text-light);">No publications added yet.</p>';
        return;
    }
    
    list.innerHTML = publications.map(p => `
        <div class="pub-item">
            <h4>${p.title}</h4>
            <p><strong>Authors:</strong> ${p.authors}</p>
            <p><strong>Venue:</strong> ${p.venue} (${p.year})</p>
            ${p.link ? `<p><a href="${p.link}" target="_blank">View Publication →</a></p>` : ''}
        </div>
    `).join('');
}

function updateStats() {
    document.getElementById('totalPublications').textContent = publications.length;
    document.getElementById('totalProjects').textContent = publications.length;
    document.getElementById('totalActivities').textContent = activities.length;
}

// Charts
let charts = {};
let chartData = JSON.parse(localStorage.getItem('chartData')) || {
    timeChart: {
        labels: ['Research', 'Writing', 'Experiments', 'Reading', 'Meetings', 'Teaching'],
        data: [30, 20, 25, 15, 5, 5]
    },
    progressChart: {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        data: [65, 75, 80, 85]
    },
    milestonesChart: {
        labels: ['Literature Review', 'Proposal', 'Data Collection', 'Analysis', 'Writing'],
        data: [100, 100, 80, 60, 40]
    },
    publicationsChart: {
        labels: ['2021', '2022', '2023', '2024'],
        data: [1, 2, 3, 4]
    }
};

function initCharts() {
    const categoryData = {};
    activities.forEach(a => {
        categoryData[a.category] = (categoryData[a.category] || 0) + a.hours;
    });
    
    if (Object.keys(categoryData).length > 0) {
        chartData.timeChart.labels = Object.keys(categoryData);
        chartData.timeChart.data = Object.values(categoryData);
    }
    
    charts.timeChart = new Chart(document.getElementById('timeChart'), {
        type: 'doughnut',
        data: {
            labels: chartData.timeChart.labels,
            datasets: [{
                data: chartData.timeChart.data,
                backgroundColor: ['#3b82f6', '#8b5cf6', '#ec4899', '#f59e0b', '#10b981', '#6366f1']
            }]
        },
        options: { responsive: true, maintainAspectRatio: true }
    });
    
    charts.progressChart = new Chart(document.getElementById('progressChart'), {
        type: 'line',
        data: {
            labels: chartData.progressChart.labels,
            datasets: [{
                label: 'Progress %',
                data: chartData.progressChart.data,
                borderColor: '#3b82f6',
                backgroundColor: 'rgba(59, 130, 246, 0.1)',
                tension: 0.4,
                fill: true
            }]
        },
        options: { responsive: true, maintainAspectRatio: true }
    });
    
    charts.milestonesChart = new Chart(document.getElementById('milestonesChart'), {
        type: 'bar',
        data: {
            labels: chartData.milestonesChart.labels,
            datasets: [{
                label: 'Completion %',
                data: chartData.milestonesChart.data,
                backgroundColor: '#8b5cf6'
            }]
        },
        options: { responsive: true, maintainAspectRatio: true }
    });
    
    charts.publicationsChart = new Chart(document.getElementById('publicationsChart'), {
        type: 'bar',
        data: {
            labels: chartData.publicationsChart.labels,
            datasets: [{
                label: 'Publications',
                data: chartData.publicationsChart.data,
                backgroundColor: '#10b981'
            }]
        },
        options: { responsive: true, maintainAspectRatio: true }
    });
}

function updateCharts() {
    const categoryData = {};
    activities.forEach(a => {
        categoryData[a.category] = (categoryData[a.category] || 0) + a.hours;
    });
    
    if (Object.keys(categoryData).length > 0) {
        charts.timeChart.data.labels = Object.keys(categoryData);
        charts.timeChart.data.datasets[0].data = Object.values(categoryData);
        charts.timeChart.update();
    }
}

let currentEditChart = null;

function editChartData(chartId) {
    currentEditChart = chartId;
    const data = chartData[chartId];
    const modal = document.getElementById('editModal');
    const modalBody = document.getElementById('modalBody');
    
    let html = '<div>';
    data.labels.forEach((label, i) => {
        html += `
            <div style="margin-bottom: 1rem;">
                <input type="text" value="${label}" id="label_${i}" class="input-field" placeholder="Label">
                <input type="number" value="${data.data[i]}" id="value_${i}" class="input-field" placeholder="Value">
            </div>
        `;
    });
    html += '<button onclick="addChartRow()" class="btn-small">Add Row</button></div>';
    
    modalBody.innerHTML = html;
    modal.style.display = 'block';
}

function addChartRow() {
    const data = chartData[currentEditChart];
    const modalBody = document.getElementById('modalBody');
    const index = data.labels.length;
    
    const newRow = document.createElement('div');
    newRow.style.marginBottom = '1rem';
    newRow.innerHTML = `
        <input type="text" value="" id="label_${index}" class="input-field" placeholder="Label">
        <input type="number" value="0" id="value_${index}" class="input-field" placeholder="Value">
    `;
    modalBody.querySelector('div').insertBefore(newRow, modalBody.querySelector('button'));
}

function saveChartData() {
    const data = chartData[currentEditChart];
    const labels = [];
    const values = [];
    
    let i = 0;
    while (document.getElementById(`label_${i}`)) {
        const label = document.getElementById(`label_${i}`).value;
        const value = parseFloat(document.getElementById(`value_${i}`).value) || 0;
        if (label) {
            labels.push(label);
            values.push(value);
        }
        i++;
    }
    
    chartData[currentEditChart].labels = labels;
    chartData[currentEditChart].data = values;
    
    charts[currentEditChart].data.labels = labels;
    charts[currentEditChart].data.datasets[0].data = values;
    charts[currentEditChart].update();
    
    localStorage.setItem('chartData', JSON.stringify(chartData));
    closeModal();
}

function closeModal() {
    document.getElementById('editModal').style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('editModal');
    if (event.target === modal) {
        closeModal();
    }
}

// Initialize
document.getElementById('currentYear').textContent = new Date().getFullYear();
renderActivities();
renderPublications();
updateStats();
initCharts();
