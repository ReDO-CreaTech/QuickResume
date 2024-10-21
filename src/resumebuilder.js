// builder.js

function showSection(sectionId) {
    document.querySelectorAll('.form-content').forEach(section => {
        section.classList.add('hidden');
    });
    document.getElementById(sectionId).classList.remove('hidden');
}

function updatePreview() {
    document.getElementById('previewName').innerText = document.getElementById('nameInput').value || 'John Doe';
    document.getElementById('previewJob').innerText = document.getElementById('jobInput').value || 'Software Developer';
    document.getElementById('previewCompany').innerText = document.getElementById('companyInput').value || 'ABC Corp';
}
