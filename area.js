function calculateTriangleArea(){
    const baseField = document.getElementById('triangle-base');
    const baseValueStr = baseField.value;
    const base = parseFloat(baseValueStr);
    

    const heightField = document.getElementById('triangle-height');
    const heightValueStr = heightField.value;
    const height = parseFloat(heightValueStr);
    
    const area = 0.5 * base * height
    
   
    const triangleArea = document.getElementById('triangle-area');
    triangleArea.innerText = area;
    
}

function calculateRectangleArea(){
    const widthField = document.getElementById('rectangle-width');
    const widthValue = widthField.value;
    const width = parseFloat(widthValue);
    
    
    const lengthField = document.getElementById('rectangle-length');
    const lengthValue = lengthField.value;
    const length = parseFloat(lengthValue)
    const area = width * length;
    const rectangleArea = document.getElementById('rectangle-area');
    rectangleArea.innerText = area;
}

function calculateParallelogramArea(){
    const base = getInputField('parallelogram-base');
    console.log(base);
    const height = getInputField('parallelogram-height');
    console.log(height);
    const area = base * height;
    getArea('parallelogram-area',area)
}
function calculateEllipseArea(){
    const major = getInputField('ellipse-first-radius');
    const minor = getInputField('ellipse-second-radius');
    const area = 3.14 * major * minor;
    getArea('ellipse-area', area)
}
function getInputField(fieldId){
    const inputField = document.getElementById(fieldId);
    const inputValue = inputField.value;
    const input = parseFloat(inputValue);
    return input;
}
function getArea(FindArea, area){
    const setArea = document.getElementById(FindArea);
    setArea.innerText = area;
}