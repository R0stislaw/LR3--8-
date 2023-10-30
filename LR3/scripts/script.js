let tab;
let tabContent;

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
    let rtl = document.getElementById('rtl').value;
    let rtr = document.getElementById('rtr').value;
    let rbr = document.getElementById('rbr').value;
    let rbl = document.getElementById('rbl').value;

    let ttl = document.getElementById('ttl');
    let ttr = document.getElementById('ttr');
    let tbr = document.getElementById('tbr');
    let tbl = document.getElementById('tbl');

    let block = document.getElementById('block');
    let textarea = document.getElementById('completedCode');
    ttl.value = rtl;
    ttr.value = rtr;
    tbr.value = rbr;
    tbl.value = rbl;

    block.style.borderRadius = rtl + 'px ' + rtr + 'px ' + rbr + 'px ' + rbl + 'px';
    textarea.value = "border-radius: " + block.style.borderRadius+';'

}

function generateBoxShadow() {
    let offsetX = document.getElementById('offsetX').value;
    let offsetY = document.getElementById('offsetY').value;
    let blurRadius = document.getElementById('blurRadius').value;
    let spreadRadius = document.getElementById('spreadRadius').value;
    
    let offsetXValue = document.getElementById('offsetXValue');
    let offsetYValue = document.getElementById('offsetYValue');
    let blurRadiusValue = document.getElementById('blurRadiusValue');
    let spreadRadiusValue = document.getElementById('spreadRadiusValue');
    
    let box = document.getElementById('box');
    let boxShadowCode = document.getElementById('boxShadowCode');
    
    offsetXValue.value = offsetX;
    offsetYValue.value = offsetY;
    blurRadiusValue.value = blurRadius;
    spreadRadiusValue.value = spreadRadius;
    
    
    box.style.boxShadow = offsetX + 'px ' + offsetY + 'px ' + blurRadius + 'px ' + spreadRadius + 'px ' + 'yellow';
    
    boxShadowCode.value = 'box-shadow:' + box.style.boxShadow+';'
}

function generateBoxSizing() {
    let boxSizing = document.getElementById('box-sizing').value;
    let width = document.getElementById('width').value;
    let borderColor = document.getElementById('borderColor').value;
    let padding = document.getElementById('padding').value;
  
    let widthValue = document.getElementById('widthValue');
    let borderColorValue = document.getElementById('borderColorValue');
    let paddingValue = document.getElementById('paddingValue');
  
    let icon = document.getElementById('icon');
    let boxSizingCode = document.getElementById('boxSizingCode');
  
    icon.style.boxSizing = boxSizing
    icon.style.width = width + 'px';
    icon.style.border = borderColor + 'px solid #5B6DCD'; 
    icon.style.padding = padding + 'px';
  
    widthValue.value = width;
    borderColorValue.value = borderColor;
    paddingValue.value = padding;

    boxSizingCode.value = 'box-sizing: ' + boxSizing + '; width: ' + width + 'px; border: ' + borderColor + 'px solid #5B6DCD; padding: ' + padding + 'px;';
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
function applyStylesFromInput() {
    let rtlInput = document.getElementById('rtl');
    let rtrInput = document.getElementById('rtr');
    let rbrInput = document.getElementById('rbr');
    let rblInput = document.getElementById('rbl');
    let block = document.getElementById('block');
    let textarea = document.getElementById('completedCode');

    let rtl = rtlInput.value;
    let rtr = rtrInput.value;
    let rbr = rbrInput.value;
    let rbl = rblInput.value;


    block.style.borderRadius = rtl + 'px ' + rtr + 'px ' + rbr + 'px ' + rbl + 'px';
    textarea.value = "border-radius: " + block.style.borderRadius + ';';
}