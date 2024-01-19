function get_calc(btn) {
    const ops = ['+', '-', '×', '÷'];
    if (btn.value == "="){
        if (document.calc.display.value== "") {
            return ;
        }
        else if (ops.includes(document.calc.display.value.substr(-1))) {
            document.calc.display.value = document.calc.display.value.replace(/[+-×÷]$/gu, '');
        }
        const divrgx = /÷/gu;
        const mulrgx = /×/gu;
        document.calc.display.value = document.calc.display.value.replace(mulrgx,'*');
        document.calc.display.value = document.calc.display.value.replace(divrgx,'/');
        document.calc.display.value = eval(document.calc.display.value);
    } else if (btn.value == "C"){
        document.calc.display.value= "";
    } else if (ops.includes(document.calc.display.value.substr(-1)) && ops.includes(btn.value)){
        document.calc.display.value = document.calc.display.value.replace(/[+-×÷]$/gu, btn.value);
    } else if (ops.includes(btn.value) && document.calc.display.value== "") {
        return ;
    } else {
        document.calc.display.value += btn.value;
    }
}