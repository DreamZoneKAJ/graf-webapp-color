function updateColor() {
    let red = document.getElementById("redRange").value;
    let green = document.getElementById("greenRange").value;
    let blue = document.getElementById("blueRange").value;

    document.getElementById("redInput").value = red;
    document.getElementById("greenInput").value = green;
    document.getElementById("blueInput").value = blue;

    let hex = rgbToHex(red, green, blue);
    document.getElementById("colorPicker").value = hex;
    
    applyColor(hex);
}

function updateColorFromInput() {
    let red = document.getElementById("redInput").value;
    let green = document.getElementById("greenInput").value;
    let blue = document.getElementById("blueInput").value;

    document.getElementById("redRange").value = red;
    document.getElementById("greenRange").value = green;
    document.getElementById("blueRange").value = blue;

    let hex = rgbToHex(red, green, blue);
    document.getElementById("colorPicker").value = hex;
    
    applyColor(hex);
}

function updateFromColorPicker() {
    let hex = document.getElementById("colorPicker").value;
    let rgb = hexToRgb(hex);

    document.getElementById("redRange").value = rgb.r;
    document.getElementById("greenRange").value = rgb.g;
    document.getElementById("blueRange").value = rgb.b;

    document.getElementById("redInput").value = rgb.r;
    document.getElementById("greenInput").value = rgb.g;
    document.getElementById("blueInput").value = rgb.b;

    applyColor(hex);
}

function applyColor(hex) {
    document.getElementById("colorBox").style.backgroundColor = hex;
    document.getElementById("hexCode").textContent = hex.toUpperCase();
}

function rgbToHex(r, g, b) {
    return `#${Number(r).toString(16).padStart(2, '0')}${Number(g).toString(16).padStart(2, '0')}${Number(b).toString(16).padStart(2, '0')}`;
}

function hexToRgb(hex) {
    let bigint = parseInt(hex.substring(1), 16);
    return {
        r: (bigint >> 16) & 255,
        g: (bigint >> 8) & 255,
        b: bigint & 255
    };
}
