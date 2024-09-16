document.addEventListener('DOMContentLoaded', () => {
    const gridContainer = document.getElementById('grid-container');
    const gridSize = 16; // 16x16 grid

    for (let i = 0; i < gridSize * gridSize; i++) {
        const div = document.createElement('div');
        div.className = 'grid-item';
        gridContainer.appendChild(div);
    }
});