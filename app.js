const votingForm = document.getElementById('votingForm');
const candidateSelect = document.getElementById('candidate');
const resultDiv = document.getElementById('result');

votingForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const selectedCandidate = candidateSelect.value;

    // Implement voting logic here (e.g., store the vote in a database or local storage)

    resultDiv.textContent = `Your vote has been cast for ${selectedCandidate}.`;
});