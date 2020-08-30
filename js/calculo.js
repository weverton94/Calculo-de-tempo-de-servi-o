
    function formula(){
        var numero = parseInt(document.getElementById("entrada").value);
        var ano = parseInt(numero / 365);
        var ano1 = ano * 365;
        var result1 = numero - ano1;
        var mes = parseInt(result1 / 30);
        var mes1 = mes * 30;
        var dia = result1 - mes1;

        document.getElementById("anos").innerHTML = ano;
        document.getElementById("meses").innerHTML = mes;
        document.getElementById("dias").innerHTML = dia;
                
    }

    
    


