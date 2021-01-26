var blockNumber = 2;
var countOfDomain;
var rndAuto;
var autoLogCounter = 0;
var historyLog = [];
var abstractMatrix;
var manualArray;

function changeValueManual(e) {
    var obj = e.target;
    if (obj.innerHTML == 1) {
        obj.innerHTML = 0;
    } else if (obj.innerHTML == 0) {
        obj.innerHTML = 1;
    }
    convertTableToArray();
};

var getTable = () => document.getElementById('myTBL').addEventListener('click', changeValueManual);

function matrixArray(rows, columns) {
    rndAuto = parseFloat(document.getElementById('randomAuto').value.replace(/,/, '.')); //parseFloat(document.getElementById("randomAuto").value);
    var arr = new Array();
    for (var i = 0; i < rows; i++) {
        arr[i] = new Array();
        for (var j = 0; j < columns; j++) {
            arr[i][j] = Math.floor(Math.random() * (1 + 0) + rndAuto);
        }
    }
    return arr;
}
var html = '<table><tr>';

function createTableManual() {
    var validNN = validN();
    var validMM = validM();
    if (validNN || validMM) return;
    document.getElementById("countOfDomain").value = 0;
    var xMan = document.getElementById("nnMatrix").value;
    var yMan = document.getElementById("mmMatrix").value;
    html = "";
    document.getElementById("myTBLautoLog").innerHTML = html;
    document.getElementById("myTBLauto").innerHTML = html;
    for (var i = 0; i < xMan; i++) {
        for (var y = 0; y < yMan; y++) {
            html += '<td>' + 0 + '</td>';
        }
        html += '<tr />';
    }
    html += '</tr></table>';
    document.getElementById("myTBL").innerHTML = html;
}

function createTableAuto() {
    var validRR = validR();
    var validNN = validN();
    var validMM = validM();
    if (validRR || validNN || validMM) return;

    var xMan = document.getElementById("nnMatrix").value;
    var yMan = document.getElementById("mmMatrix").value;
    var autoArray = matrixArray(xMan, yMan);
    html = "";
    document.getElementById("myTBL").innerHTML = html;
    for (var i = 0; i < xMan; i++) {
        for (var y = 0; y < yMan; y++) {
            html += '<td>' + autoArray[i][y] + '</td>';
        }
        html += '<tr />';
    }
    html += '</tr></table>';
    document.getElementById("myTBLauto").innerHTML = html;

    blockNumber = 2;
    abstractMatrix = matrixArray(40, 40);
    calculateArrayForDomain(autoArray);
    console.log(autoArray);
    var countDomains = blockNumber - 2;
    document.getElementById("myTBLauto").innerHTML = html;
    document.getElementById("countOfDomain").value = countDomains;

    //autoLog
    historyLog.push({
        chance: rndAuto,
        count: countDomains,
        scale: xMan * yMan
    })
    if (historyLog.length > 10)
        historyLog.shift();
    var htmlLog = '<table><tr><td>Вероятность</td><td>Количество<br /> доменов в<br /> матрице</td><td>Количество<br /> ячеек в<br /> матрице (N*M)</td></tr>';
    for (var i = 0; i < historyLog.length; i++) {
        htmlLog += '<td>' + historyLog[i].chance + '</td>' + '<td>' + historyLog[i].count + '</td>' + '<td>' + historyLog[i].scale + '</td>'; //autoArray[i][y]
        htmlLog += '<tr />';
    }
    htmlLog += '</tr></table>';
    document.getElementById("myTBLautoLog").innerHTML = htmlLog;
    for (i = 0; i < autoArray.length; i++)
        for (y = 0; y < autoArray[i].length; y++)
            document.getElementById("myTBLauto").rows.item(i).cells.item(y).style.backgroundColor = getColorForDomain(autoArray[i][y]);
}

function convertTableToArray() {
    manualArray = [];
    var table = document.querySelector("table tbody");
    var rows = table.children;
    for (var i = 0; i < rows.length; i++) {
        var fields = rows[i].children;
        var rowArray = [];
        for (var j = 0; j < fields.length; j++) {
            rowArray.push(+fields[j].innerHTML);
        }
        manualArray.push(rowArray);
    }
}

//Покраска полей принадлежащих к одному домену//

var getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function getColorForDomain(domainNumber) {
    if (domainNumber == 0)
        return 'white';
    if (this.colors === undefined)
        this.colors = {};
    if (this.colors[domainNumber] !== undefined) {
        return this.colors[domainNumber];
    } else {
        this.colors[domainNumber] = "rgb(" + getRandomInt(domainNumber, 255) + ", " + getRandomInt(domainNumber, 255) + ", " + getRandomInt(domainNumber, 255) + ")";
        return this.colors[domainNumber];
    }
}

//Ручной поиск доменов//

function findDomain() {
    document.getElementById("myTBLauto").innerHTML = "";
    document.getElementById("myTBLautoLog").innerHTML = "";
    document.getElementById("countOfDomain").value = 0;
    convertTableToArray();
    blockNumber = 2;
    abstractMatrix = matrixArray(40, 40);
    calculateArrayForDomain(manualArray);

    document.getElementById("countOfDomain").value = blockNumber - 2;

    for (i = 0; i < manualArray.length; i++)
        for (y = 0; y < manualArray[i].length; y++)
            document.getElementById("myTBL").rows.item(i).cells.item(y).style.backgroundColor = getColorForDomain(manualArray[i][y]);
}

//Валидация полей//

function validN() {
    var failN = false;
    document.getElementById("manMod").disabled = failN;
    document.getElementById("autoMod").disabled = failN;
    document.getElementById("validN").innerHTML = "";
    var valueN = document.getElementById('nnMatrix').value;
    if (isNaN(parseInt(valueN)))
        failN = "Введенные данные некорректны"
    if (valueN == "" || valueN.length > 2)
        failN = "Введите значение";
    if (valueN >= 40)
        failN = "Превышен диапазон"
    if (failN) {
        document.getElementById("validN").innerHTML = failN;
        document.getElementById("manMod").disabled = failN;
        document.getElementById("autoMod").disabled = failN;
    }
    return failN;
}

function validM() {
    var failM = false;
    document.getElementById("manMod").disabled = failM;
    document.getElementById("autoMod").disabled = failM;
    document.getElementById("validM").innerHTML = "";
    var valueM = document.getElementById('mmMatrix').value;
    if (isNaN(parseInt(valueM)))
        failM = "Введенные данные некорректны"
    if (valueM == "" || valueM == " ")
        failM = "Введите значение";
    if (valueM >= 40)
        failM = "Превышен диапазон"
    if (failM) {
        document.getElementById("validM").innerHTML = failM;
        document.getElementById("autoMod").disabled = failM;
        document.getElementById("manMod").disabled = failM;
    }
    return failM;
}

function validR() {
    var failR = false;
    document.getElementById("autoMod").disabled = failR;
    document.getElementById("validRnd").innerHTML = "";
    var valueRnd = parseFloat(document.getElementById('randomAuto').value.replace(/,/, '.'));
    if (isNaN(parseInt(valueRnd)))
        failR = "Введенные данные некорректны"
    if (valueRnd == "" || valueRnd == " ")
        failR = "Введите значение";
    if (valueRnd >= 1 || valueRnd < 0)
        failR = "Превышен диапазон"
    if (failR) {
        document.getElementById("validRnd").innerHTML = failR;
        document.getElementById("autoMod").disabled = failR;
    }
    return failR;
}

//Функции нахождения числа доменов//

function calculateArrayForDomain(matrix) {

    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 1) {
                matrix[i][j] = blockNumber;
                findDomains(i, j, matrix);
                blockNumber++;
            }
        }
    }
}

function findDomains(i, j, matrix) {
    abstractMatrix[i][j] = blockNumber;
    if (j + 1 < matrix[i].length && matrix[i][j + 1] > 0 && matrix[i][j + 1] !== blockNumber) {
        matrix[i][j + 1] = blockNumber;
    }
    if (j - 1 >= 0 && matrix[i][j - 1] > 0 && matrix[i][j - 1] !== blockNumber) {
        matrix[i][j - 1] = blockNumber;
    }
    if (i + 1 < matrix.length && matrix[i + 1][j] > 0 && matrix[i + 1][j] !== blockNumber) {
        matrix[i + 1][j] = blockNumber;
    }
    if (i - 1 >= 0 && matrix[i - 1][j] > 0 && matrix[i - 1][j] !== blockNumber) {
        matrix[i - 1][j] = blockNumber;
    }

    if (j + 1 < matrix[i].length && matrix[i][j + 1] === blockNumber && abstractMatrix[i][j + 1] !== blockNumber)
        findDomains(i, j + 1, matrix);
    if (i + 1 < matrix.length && matrix[i + 1][j] === blockNumber && abstractMatrix[i + 1][j] !== blockNumber)
        findDomains(i + 1, j, matrix);
    if (j - 1 >= 0 && matrix[i][j - 1] === blockNumber && abstractMatrix[i][j - 1] !== blockNumber)
        findDomains(i, j - 1, matrix);
    if (i - 1 >= 0 && matrix[i - 1][j] === blockNumber && abstractMatrix[i - 1][j] !== blockNumber)
        findDomains(i - 1, j, matrix);
}