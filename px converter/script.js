function convertPx() {
    const px = parseFloat(document.getElementById('px').value);
    const userWidth = parseFloat(document.getElementById('user-width').value);
    const userHeight = parseFloat(document.getElementById('user-height').value);

    if (!isNaN(px) && !isNaN(userWidth) && !isNaN(userHeight)) {
        const vw = (px / userWidth) * 100;
        const vh = (px / userHeight) * 100;
        document.getElementById('px-result').textContent = `${px}`;
        document.getElementById('vw-result').textContent = `${vw.toFixed(2)}`;
        document.getElementById('vh-result').textContent = `${vh.toFixed(2)}`;
    } else {
        document.getElementById('px-result').textContent = 'Invalid input';
        document.getElementById('vw-result').textContent = 'Invalid input';
        document.getElementById('vh-result').textContent = 'Invalid input';
    }
}

function convertVw() {
    const vw = parseFloat(document.getElementById('vw').value);
    const userWidth = parseFloat(document.getElementById('user-width').value);
    const userHeight = parseFloat(document.getElementById('user-height').value);

    if (!isNaN(vw) && !isNaN(userWidth) && !isNaN(userHeight)) {
        const px = (vw / 100) * userWidth;
        const vh = (px / userHeight) * 100;
        document.getElementById('px-result').textContent = `${px.toFixed(2)}`;
        document.getElementById('vw-result').textContent = `${vw}`;
        document.getElementById('vh-result').textContent = `${vh.toFixed(2)}`;
    } else {
        document.getElementById('px-result').textContent = 'Invalid input';
        document.getElementById('vw-result').textContent = 'Invalid input';
        document.getElementById('vh-result').textContent = 'Invalid input';
    }
}

function convertVh() {
    const vh = parseFloat(document.getElementById('vh').value);
    const userWidth = parseFloat(document.getElementById('user-width').value);
    const userHeight = parseFloat(document.getElementById('user-height').value);

    if (!isNaN(vh) && !isNaN(userWidth) && !isNaN(userHeight)) {
        const px = (vh / 100) * userHeight;
        const vw = (px / userWidth) * 100;
        document.getElementById('px-result').textContent = `${px.toFixed(2)}`;
        document.getElementById('vw-result').textContent = `${vw.toFixed(2)}`;
        document.getElementById('vh-result').textContent = `${vh}`;
    } else {
        document.getElementById('px-result').textContent = 'Invalid input';
        document.getElementById('vw-result').textContent = 'Invalid input';
        document.getElementById('vh-result').textContent = 'Invalid input';
    }
}

function copyToClipboard(elementId) {
    const text = document.getElementById(elementId).textContent;
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    alert('Copied: ' + text);
}

// Add event listeners for Enter key press
document.getElementById('px').addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        convertPx();
    }
});

document.getElementById('vw').addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        convertVw();
    }
});

document.getElementById('vh').addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        convertVh();
    }
});
