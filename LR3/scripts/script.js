var tab;
var tabContent;

window.onload = function () {
    tabContent = document.getElementsByClassName('tabContent');
    tab = document.getElementsByClassName('tab');
    hideTabsContent(1);
}

function hideTabsContent(a) {
    for (var i = a; i < tabContent.length; i++) {
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
    var target = event.target;
    if (target.className == 'tab') {
        for (var i = 0; i < tab.length; i++) {
            if (target == tab[i]) {
                showTabsContent(i);
                break;
            }
        }
    }
}
function generate1() {
    var rtl = document.getElementById('rtl').value;
    var rtr = document.getElementById('rtr').value;
    var rbr = document.getElementById('rbr').value;
    var rbl = document.getElementById('rbl').value;

    var ttl = document.getElementById('ttl');
    var ttr = document.getElementById('ttr');
    var tbr = document.getElementById('tbr');
    var tbl = document.getElementById('tbl');

    var block = document.getElementById('block');
    var textarea = document.getElementById('completedCode');
    ttl.value = rtl;
    ttr.value = rtr;
    tbr.value = rbr;
    tbl.value = rbl;

    block.style.borderRadius = rtl + 'px ' + rtr + 'px ' + rbr + 'px ' + rbl + 'px';
    textarea.value = "border-radius: " + block.style.borderRadius+';'

}

function generateBoxShadow() {
    var offsetX = document.getElementById('offsetX').value;
    var offsetY = document.getElementById('offsetY').value;
    var blurRadius = document.getElementById('blurRadius').value;
    var spreadRadius = document.getElementById('spreadRadius').value;
    
    var offsetXValue = document.getElementById('offsetXValue');
    var offsetYValue = document.getElementById('offsetYValue');
    var blurRadiusValue = document.getElementById('blurRadiusValue');
    var spreadRadiusValue = document.getElementById('spreadRadiusValue');
    
    var box = document.getElementById('box');
    var boxShadowCode = document.getElementById('boxShadowCode');
    
    offsetXValue.value = offsetX;
    offsetYValue.value = offsetY;
    blurRadiusValue.value = blurRadius;
    spreadRadiusValue.value = spreadRadius;
    
    
    box.style.boxShadow = offsetX + 'px ' + offsetY + 'px ' + blurRadius + 'px ' + spreadRadius + 'px ' + 'yellow';
    
    boxShadowCode.value = 'box-shadow:' + box.style.boxShadow+';'
}

function generateBoxSizing() {
    var boxSizing = document.getElementById('box-sizing').value;
    var width = document.getElementById('width').value;
    var borderColor = document.getElementById('borderColor').value;
    var padding = document.getElementById('padding').value;
  
    var widthValue = document.getElementById('widthValue');
    var borderColorValue = document.getElementById('borderColorValue');
    var paddingValue = document.getElementById('paddingValue');
  
    var icon = document.getElementById('icon');
    var boxSizingCode = document.getElementById('boxSizingCode');
  
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
    var selectedRadio = document.querySelector('input[name="fontSize"]:checked');
    var selectedValue = selectedRadio.value;
    
    var editText = document.getElementById('editText');
    var editTextCode = document.getElementById('editTextCode');

    if (selectedValue === "absolute-size") {
        editText.style.fontSize = document.getElementById('absoluteSize').value;
    } else if (selectedValue === "relative-size") {
        editText.style.fontSize = document.getElementById('relativeSize').value;
    } else if (selectedValue === "length") {
        var lengthValue = document.getElementById('widthText').value;
        var lengthUnit = document.getElementById('lengthUnit').value;
        editText.style.fontSize = lengthValue + lengthUnit;
    } else if (selectedValue === "global-values") {
        editText.style.fontSize = document.getElementById('globalValues').value;
    }

    editTextCode.value = 'font-size: ' + editText.style.fontSize + ';';
}


var radio = document.getElementById('displayRadio');
var select = document.getElementById('displayValue');
var previousSelectValue = select.value;

function checkRadioState() {
    var currentSelectValue = select.value;
    if (previousSelectValue !== currentSelectValue) {
        radio.checked = false;
    }
    previousSelectValue = currentSelectValue;
    generateDisplay();
}

function generateDisplay() {
    var paragraph1 = document.getElementById('paragraph1');
    var editTextCode1 = document.getElementById('editTextCode1');

    if (radio.checked) {
        var selectedDisplayValue = select.value;
        paragraph1.style.display = selectedDisplayValue;
        editTextCode1.value = 'display: ' + paragraph1.style.display + ';';
    }
}


// редагування параметрів за допомогою input
function applyStylesFromInput() {
    var rtlInput = document.getElementById('rtl');
    var rtrInput = document.getElementById('rtr');
    var rbrInput = document.getElementById('rbr');
    var rblInput = document.getElementById('rbl');

    var rtl = rtlInput.value;
    var rtr = rtrInput.value;
    var rbr = rbrInput.value;
    var rbl = rblInput.value;

    var block = document.getElementById('block');
    var textarea = document.getElementById('completedCode');

    block.style.borderRadius = rtl + 'px ' + rtr + 'px ' + rbr + 'px ' + rbl + 'px';
    textarea.value = "border-radius: " + block.style.borderRadius + ';';
}

function applyStylesFromTextarea() {
    var textarea = document.getElementById('completedCode');
    var block = document.getElementById('block');

    var styles = textarea.value;

    var styleArray = styles.split(';');
    var styleObject = {};

    styleArray.forEach(function (style) {
        var [property, value] = style.split(':');
        if (property && value) {
            styleObject[property.trim()] = value.trim();
        }
    });

    if (styleObject['border-radius']) {
        var borderRadius = styleObject['border-radius'].split(' ');
        var rtl = borderRadius[0].replace('px', '').trim();
        var rtr = borderRadius[1].replace('px', '').trim();
        var rbr = borderRadius[2].replace('px', '').trim();
        var rbl = borderRadius[3].replace('px', '').trim();

        document.getElementById('rtl').value = rtl;
        document.getElementById('rtr').value = rtr;
        document.getElementById('rbr').value = rbr;
        document.getElementById('rbl').value = rbl;

        document.getElementById('ttl').value = rtl;
        document.getElementById('ttr').value = rtr;
        document.getElementById('tbr').value = rbr;
        document.getElementById('tbl').value = rbl;
    }
    block.style.cssText = styles;

}


