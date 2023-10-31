let tab;
let tabContent;
let rtl = document.getElementById('rtl');
let rtr = document.getElementById('rtr');
let rbr = document.getElementById('rbr');
let rbl = document.getElementById('rbl');
let ttl = document.getElementById('ttl');
let ttr = document.getElementById('ttr');
let tbr = document.getElementById('tbr');
let tbl = document.getElementById('tbl');
let block = document.getElementById('block');
let textarea = document.getElementById('completedCode');

let offsetX = document.getElementById('offsetX');
let offsetY = document.getElementById('offsetY');
let blurRadius = document.getElementById('blurRadius');
let spreadRadius = document.getElementById('spreadRadius');
let offsetXValue = document.getElementById('offsetXValue');
let offsetYValue = document.getElementById('offsetYValue');
let blurRadiusValue = document.getElementById('blurRadiusValue');
let spreadRadiusValue = document.getElementById('spreadRadiusValue');
let box = document.getElementById('box');
let boxShadowCode = document.getElementById('boxShadowCode');

let boxSizing = document.getElementById('box-sizing');
let width = document.getElementById('width');
let borderColor = document.getElementById('borderColor');
let padding = document.getElementById('padding');
let widthValue = document.getElementById('widthValue');
let borderColorValue = document.getElementById('borderColorValue');
let paddingValue = document.getElementById('paddingValue');
let icon = document.getElementById('icon');
let boxSizingCode = document.getElementById('boxSizingCode');

window.onload = function () {
    tabContent = document.getElementsByClassName('tabContent');
    tab = document.getElementsByClassName('tab');
    hideTabsContent(1);
}

function hideTabsContent(a) {
    for (let i = a; i < tabContent.length; i++) {
        tabContent[i].classList.remove('show');
        tabContent[i].classList.add('hide');
        tab[i].classList.remove('whiteborder');
    }
}

function showTabsContent(b) {
    if (tabContent[b].classList.contains('hide')) {
        hideTabsContent(0);
        tab[b].classList.add('whiteborder');
        tabContent[b].classList.remove('hide');
        tabContent[b].classList.add('show'); 
    }
}

document.getElementById('tabs').onclick = function (event) {
    let target = event.target;
    if (target.className == 'tab') {
        for (let i = 0; i < tab.length; i++) {
            if (target == tab[i]) {
                showTabsContent(i);
                break;
            }
        }
    }
}
function generate1() {
    ttl.value = rtl.value;
    ttr.value = rtr.value;
    tbr.value = rbr.value;
    tbl.value = rbl.value;
    block.style.borderRadius = rtl.value + 'px ' + rtr.value + 'px ' + rbr.value + 'px ' + rbl.value + 'px';
    textarea.value = "border-radius: " + block.style.borderRadius+';'

}

function generateBoxShadow() {
    offsetXValue.value = offsetX.value;
    offsetYValue.value = offsetY.value;
    blurRadiusValue.value = blurRadius.value;
    spreadRadiusValue.value = spreadRadius.value;
    box.style.boxShadow = offsetX.value + 'px ' + offsetY.value + 'px ' + blurRadius.value + 'px ' + spreadRadius.value + 'px ' + 'yellow';
    boxShadowCode.value = 'box-shadow:' + box.style.boxShadow + ';'
}

function generateBoxSizing() {
    widthValue.value = width.value;
    borderColorValue.value = borderColor.value;
    paddingValue.value = padding.value;
  
    icon.style.boxSizing = boxSizing.value
    icon.style.width = width.value + 'px ';
    icon.style.border = borderColor.value + 'px solid #5B6DCD '; 
    icon.style.padding = padding.value + 'px ';
  

    boxSizingCode.value = 'box-sizing: ' + boxSizing.value + " " + width.value + 'px ' + borderColor.value + 'px solid #5B6DCD '  + padding.value + 'px';
  } 

  function generateFontSize() {
    let selectedRadio = document.querySelector('input[name="fontSize"]:checked');
    let selectedValue = selectedRadio.value;
    
    let editText = document.getElementById('editText');
    let editTextCode = document.getElementById('editTextCode');

    if (selectedValue === "absolute-size") {
        editText.style.fontSize = document.getElementById('absoluteSize').value;
    } else if (selectedValue === "relative-size") {
        editText.style.fontSize = document.getElementById('relativeSize').value;
    } else if (selectedValue === "length") {
        let lengthValue = document.getElementById('widthText').value;
        let lengthUnit = document.getElementById('lengthUnit').value;
        editText.style.fontSize = lengthValue + lengthUnit;
    } else if (selectedValue === "global-values") {
        editText.style.fontSize = document.getElementById('globalValues').value;
    }

    editTextCode.value = 'font-size: ' + editText.style.fontSize + ';';
}


let radio = document.getElementById('displayRadio');
let select = document.getElementById('displayValue');
let previousSelectValue = select.value;

function checkRadioState() {
    let currentSelectValue = select.value;
    if (previousSelectValue !== currentSelectValue) {
        radio.checked = false;
    }
    previousSelectValue = currentSelectValue;
    generateDisplay();
}

function generateDisplay() {
    let paragraph1 = document.getElementById('paragraph1');
    let editTextCode1 = document.getElementById('editTextCode1');

    if (radio.checked) {
        let selectedDisplayValue = select.value;
        paragraph1.style.display = selectedDisplayValue;
        editTextCode1.value = 'display: ' + paragraph1.style.display + ';';
    }
}


// редагування параметрів за допомогою input
function change1byinput() {
    rtl.value = ttl.value;
    rtr.value = ttr.value;
    rbr.value = tbr.value;
    rbl.value = tbl.value;


    block.style.borderRadius = rtl.value  + 'px ' + rtr.value  + 'px ' + rbr.value  + 'px ' + rbl.value  + 'px';
    textarea.value = "border-radius: " + block.style.borderRadius + ';';
}
function change2byinput() {
    offsetX.value = offsetXValue.value;
    offsetY.value = offsetYValue.value;
    blurRadius.value = blurRadiusValue.value;
    spreadRadius.value = spreadRadiusValue.value;
    box.style.boxShadow = offsetX.value  + 'px ' + offsetY.value  + 'px ' + blurRadius.value  + 'px ' + spreadRadius.value  + 'px yellow' ;
    boxShadowCode.value = 'box-shadow:' + box.style.boxShadow + ';'
}
function change3byinput(){

    width.value =  widthValue.value;
    borderColor.value = borderColorValue.value;
    padding.value = paddingValue.value;
  
    icon.style.boxSizing = boxSizing.value
    icon.style.width = widthValue.value + 'px ';
    icon.style.border = borderColorValue.value + 'px solid #5B6DCD '; 
    icon.style.padding = paddingValue.value + 'px ';
  

    boxSizingCode.value = 'box-sizing: ' + boxSizing.value + " " + widthValue.value + 'px ' + borderColorValue.value + 'px solid #5B6DCD '  + paddingValue.value + 'px';
}
