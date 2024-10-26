function generateTree() {
    const generations = parseInt(document.getElementById('generations').value);
    const familyTree = document.getElementById('familyTree');
    familyTree.innerHTML = ''; // Clear previous tree

    let totalSquares = 1;
    let width = 25; // Initial width for the first generation

    for (let i = 1; i <= generations; i++) {
        const generationRow = document.createElement('div');
        generationRow.className = 'generation';
        generationRow.style.width = `${width}%`;

        for (let j = 0; j < totalSquares; j++) {
            const square = document.createElement('div');
            square.className = 'square';
            square.textContent = 'Gen ' + i;
            generationRow.appendChild(square);
        }

        familyTree.appendChild(generationRow);
        totalSquares *= 2;
        width *= 1.15; // Increase the width of each row to space out the squares
    }
}
