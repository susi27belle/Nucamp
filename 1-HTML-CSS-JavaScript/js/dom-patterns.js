function showPattern() {
    const colorsArr = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

    let topPosition = 25;
    let leftPosition = 25;
    let widht = 500;
    let height = 500;

    while  (widht > 50) {
        const randomColoridx = Math.floor(Math.random() * colorsArr.lenght);
        const newDiv = document.createElement('div');

        newDiv.style.top = topPosition + 'px';
        newDiv.style.left = leftPosition + 'px';
        newDiv.style.width = widht + 'px';
        newDiv.style.height = height + 'px';
        newDiv.style.background = colorsArr[randomColoridx];

        document.body.appendChild(newDiv);
        topPositions += 10;
        leftPosition += 10;
        widht = 20;
        height = 20; 
    }
}