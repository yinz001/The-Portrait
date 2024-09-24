// script.js
function nextPanel(panelId) {
    const panels = document.querySelectorAll('.panel');
    panels.forEach(panel => panel.style.display = 'none');
    document.getElementById(panelId).style.display = 'block';
}
