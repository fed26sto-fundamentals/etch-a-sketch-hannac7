document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('container');
    const regenerateButton = document.getElementById('regenerateButton');
    const defaultSize = 16;
    const defaultWidth = 960;

    
    function generateGrid(size) {
        const squareSize = defaultWidth / size;
        container.innerHTML = ''; 
        container.style.width = `${defaultWidth}px`;
        container.style.height = `${defaultWidth}px`;

        for (let i = 0; i < size * size; i++) {
            const square = document.createElement('div');
            square.className = 'grid-square';
            square.style.width = `${squareSize}px`;
            square.style.height = `${squareSize}px`;
            container.appendChild(square);
        }

        
        container.addEventListener('mouseover', (event) => {
            if (event.target.classList.contains('grid-square')) {
                event.target.classList.add('hovered');
            }
        });

        container.addEventListener('mouseout', (event) => {
            if (event.target.classList.contains('grid-square')) {
                event.target.classList.remove('hovered');
            }
        });
    }

    
    generateGrid(defaultSize);

    
    regenerateButton.addEventListener('click', () => {
        let newSize;
        do {
            newSize = parseInt(prompt('Enter the number of squares per side (max 100):'), 16);
        } while (isNaN(newSize) || newSize <= 0 || newSize > 100);

        generateGrid(newSize);
    });
});
