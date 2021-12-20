const numberOfKey = document.querySelectorAll('.numberOfKey');
const operatorKey = document.querySelectorAll('.operatorKey');
const calc = document.getElementById('calc');
const result = document.getElementById('result');
const clearAllInfo = document.getElementById('clearAll');
const backSpaceKey = document.getElementById('backSpace');
const equalKey = document.getElementById('equal');



let calcResult = "";
let calcArr = [];

const getNumber = (number) => {
    const lastChar = calcResult[calcResult.length - 1];
    if(lastChar === '.' && number === '.'){
        return;
    }
    calcResult += number;
    calcArr.push(number);
    if(calc.innerHTML === '0'){
        calc.innerHTML = '';
    }
    calc.innerHTML += calcArr[calcArr.length -1];
    setResult();
    console.log(calcResult);
}

const getOperator = (operator) =>{
    const lastChar = calcResult[calcResult.length - 1];
    if(lastChar !== '%' && lastChar !== '*' && lastChar !== '/' && lastChar !== '+' && lastChar !== '-' ){
    calcResult += operator;
    calcArr.push(`<span style="color: #ff3e39;margin:0 10px;">${operator}</span>`);
    calc.innerHTML += calcArr[calcArr.length - 1];
    console.log(calcResult);
};}

const setResult = () => {
    result.innerHTML = eval(calcResult);
};
const clearAll = ()=>{
    calcResult = '';
    calcArr = [];
    calc.innerHTML = '0';
    result.innerHTML = '0';
};
const backSpace = ()=>{
    calcArr.splice(-1,1);
    calcResult = calcResult.substring(0,calcResult.length - 1);
    calc.innerHTML = calcArr.join('');
    if(calcResult === '') {
        clearAll();
    }
};
const getEqual = ()=>{
    if(eval(calcResult) !== Infinity){
        resultStr = eval(calcResult).toString();
        calcArr = [];
        for(i=0;i<result.length;i++){
            calcArr.push(resultStr.charAt(i));
        }
        calcResult = eval(calcResult);
        calc.innerHTML = eval(calcResult);
    }  
};

numberOfKey.forEach((el) => {
    el.addEventListener('click' ,(e) =>{
        const keyValue = e.target.innerHTML;
        getNumber(keyValue);
    })
});

operatorKey.forEach(el => {
    el.addEventListener('click' ,(e) =>{
    const keyValue = e.target.innerHTML;
    getOperator(keyValue);
})
});

clearAllInfo.addEventListener('click' , clearAll);
backSpaceKey.addEventListener('click' , backSpace);
equalKey.addEventListener('click', getEqual);
