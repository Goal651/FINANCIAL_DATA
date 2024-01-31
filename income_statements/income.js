function submit1(){
    let sales =document.getElementById('sales').value;
    let net_sales =document.getElementById('net_sales').value;
    let cost =document.getElementById('cost').value;
    let http=new XMLHttpRequest();
    http.open("POST","income.php",true);
    http.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    http.onreadystatechange=function (){
        if(http.readyState==4 && http.status==20){
            document.getElementById("response").innerHTML=http.responseText;
        }
    }
    http.send("$sales="+sales + "$net_sales+"+net_sales + "cost=" +cost)
}