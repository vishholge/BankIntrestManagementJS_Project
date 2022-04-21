function calculate(){
    var inputBalances = document.getElementsByClassName("bank-balance");
    
    
    for(let i =0 ; i < inputBalances.length; i++){
         var arr;
         arr[i] = inputBalances[i].value
    }
    // let balance1 = Number(document.getElementById("bank_balance1").value);
    // let balance2 = Number(document.getElementById("bank_balance2").value);
    // let balance3 = Number(document.getElementById("bank_balance3").value);
    // let balance4 = Number(document.getElementById("bank_balance4").value);
    // let balance5 = Number(document.getElementById("bank_balance5").value);
    // let balance6 = Number(document.getElementById("bank_balance6").value);
    // const balances = [balance1,balance2,balance3,balance4,balance5,balance6];
    
    for(let i = 0; i < arr.length; i++){
        if(arr[i] != null ){
            if(arr[i]> 200000){
                arr[i] = arr[i]* 1.1;
                arr[i] = arr[i] - arr[i] * 0.002;

            }
            else if(arr[i] > 100000){
                arr[i] = arr[i] + arr[i] * 0.05;
                arr[i] = arr[i] - arr[i] * 0.0005;
            }
            else{
                arr[i] = arr[i] + arr[i] * 0.03;
            }
        }

    }
    for(let i =0 ; i < arr.length; i++){
        console.log(arr[i]);
    }
    for(let i =0 ; i < arr.length; i++){
        console.log(inputBalances[i].value);
    }
    // console.log(balances);
    // for(let i = 0; i < balances.length; i++){
    //     document.getElementById("updated_balance" + Number(i +1)).innerText= balances[i];
    // }

}