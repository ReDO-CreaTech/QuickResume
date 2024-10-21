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

//DynamicText Effect

const dynamicText = document.getElementById('dynamic-text');
const phrases = ['Resume', 'Cover Letter', 'Portfolio'];
let currentPhraseIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;

function typeEffect(){
    const currentPhrase = phrases[currentPhraseIndex];
    const displayText = currentPhrase.slice(0, currentCharIndex);

    dynamicText.textContent = displayText;

    if (!isDeleting && currentCharIndex < currentPhrase.length) {
        currentCharIndex++;
        setTimeout(typeEffect, 150);
    } else if (!isDeleting && currentCharIndex > 0){
        currentCharIndex--;
        setTimeout(typeEffect, 100);
    } else {
        isDeleting = isDeleting;

        if (!isDeleting) {
            currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
        }
        setTimeout(typeEffect, 800);
    }
}
//Start the typing on page load
window.onload = typeEffect;