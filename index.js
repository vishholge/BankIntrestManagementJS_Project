function calculate(){
    let balance1 = Number(document.getElementById("bank_balance1").value);
    let balance2 = Number(document.getElementById("bank_balance2").value);
    let balance3 = Number(document.getElementById("bank_balance3").value);
    let balance4 = Number(document.getElementById("bank_balance4").value);
    let balance5 = Number(document.getElementById("bank_balance5").value);
    let balance6 = Number(document.getElementById("bank_balance6").value);
    const balances = [balance1,balance2,balance3,balance4,balance5,balance6];
    console.log(balances);
    for(let i = 0; i < balances.length; i++){
        if(balances[i] != null ){
            if(balances[i]> 200000){
                balances[i] = balances[i] * 1.1;
                balances[i] = balances[i] - balances[i] * 0.002;

            }
            else if(balances[i] > 100000){
                balances[i] = balances[i] + balances[i] * 0.05;
                balances[i] = balances[i] - balances[i] * 0.0005;
            }
            else{
                balances[i] = balances[i] + balances[i] * 0.03;
            }
        }

    }
    console.log(balances);
    for(let i = 0; i < balances.length; i++){
        document.getElementById("updated_balance" + Number(i +1)).innerText= balances[i];
    }

}