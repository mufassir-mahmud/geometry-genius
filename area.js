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
    addToCalculationEntry('Triangle', area)
}

function calculateRectangleArea(){
    const widthField = document.getElementById('rectangle-width');
    const widthValue = widthField.value;
    const width = parseFloat(widthValue);
    if(isNaN(width)){
        alert('Please Enter a Valid Number');
        widthField.value = '';
        return
    }
    
    const lengthField = document.getElementById('rectangle-length');
    const lengthValue = lengthField.value;
    const length = parseFloat(lengthValue)
    if(isNaN(length)){
        alert('Please Enter a Valid Number');
        lengthField.value = '';
        return
    }
    const area = width * length;
    const rectangleArea = document.getElementById('rectangle-area');
    rectangleArea.innerText = area;
    addToCalculationEntry('Rectangle', area)
}

function calculateParallelogramArea(){
    const base = getInputField('parallelogram-base');

    const height = getInputField('parallelogram-height');
   
    if(isNaN(base) || isNaN(height)){
        alert('Please Enter A Valid NUmber');
        return;
    }
    const area = base * height;
    getArea('parallelogram-area',area);
    addToCalculationEntry('parallelogram', area)
}
function calculateEllipseArea(){
    const major = getInputField('ellipse-first-radius');
    const minor = getInputField('ellipse-second-radius');
    const area = 3.14 * major * minor;
    getArea('ellipse-area', area);
    addToCalculationEntry('Ellipse', area)
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

function addToCalculationEntry(areaType,area){
        
        const calculationEntry = document.getElementById('calculation-entry');
        const count = calculationEntry.childElementCount;
        const p = document.createElement('p');
        p.classList.add('my-4')
        p.innerHTML = `${count + 1}.
        ${areaType} ${area} cm <sup>2</sup> <button class='py-2 px-3 rounded-lg bg-purple-500'>Calculation</button>
        
        `;
        calculationEntry.appendChild(p)
}
