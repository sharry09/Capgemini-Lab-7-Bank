// <!-- <script>
//         function compute(){
//             var text=" ";
//             var principal=document.getElementById("amount").value
            
//             var years=document.getElementById("years").value
//             var interest=document.getElementById("roi").value
//             var p=parseInt(principal,10)
//             var y=parseInt(years,10)
//           
//             else{
//             var first=1+parseInt(interest,10)/100;
//             var second=Math.pow(first,years);
//             var third=parseInt(principal,10) * second;
//             var res=third-parseInt(principal);
//             var total=p + res;
//             var last=total/12;
            
//              document.writeln("Monthly Payment will be "+ last+"<br>");
//             document.writeln("Total Payment" + total+"<br>");
//             document.writeln("Total Interest Payments "+ res)

           
//         }
            
//         }
//     </script> -->
function compute() {
    var text=" ";
                var principal=document.getElementById("amount").value
                
                var years=document.getElementById("years").value
                var interest=document.getElementById("roi").value
                var p=parseInt(principal,10)
                var y=parseInt(years,10)
                if(p> 1500000){
                    window.location.href = 'error1.html';   
                   
                }
                else if(y <7 || y>15){
                    window.location.href = 'error2.html';   
                }
                else{
                                var first=1+parseInt(interest,10)/100;
                                var second=Math.pow(first,years);
                                var third=parseInt(principal,10) * second;
                                var res=third-parseInt(principal);
                                var total=p + res;
                                var last=total/12;
                                let monthlypayment=last.toString();
                                let totalPayment=total.toString();
                                let totalInterestPayment=res.toString();

    var x = document.createElement("FORM");
    x.setAttribute("id", "myForm");
    document.body.appendChild(x);
  
    var x = document.createElement("LABEL");
  var t = document.createTextNode("Monthly Payment");
  x.setAttribute("for", "monthlypayment");
  x.appendChild(t);
  document.getElementById("myForm").insertBefore(
      x,document.getElementById("monthlypayment"));

    var y = document.createElement("INPUT");
    y.setAttribute("readOnly",true);
    y.setAttribute("type", "text");
    y.setAttribute("value", monthlypayment);
    document.getElementById("myForm").appendChild(y);

    var x = document.createElement("LABEL");
    var t = document.createTextNode("Total Payment");
    x.setAttribute("for", "totalPayment");
    x.appendChild(t);
    document.getElementById("myForm").insertBefore(
        x,document.getElementById("totalPayment"));

    var y = document.createElement("INPUT");
    y.setAttribute("readOnly",true);
    y.setAttribute("type", "text");
    y.setAttribute("value", totalPayment);
    document.getElementById("myForm").appendChild(y);

    var x = document.createElement("LABEL");
    var t = document.createTextNode("Total Interest Payment");
    x.setAttribute("for", "totalInterestPayment");
    x.appendChild(t);
    document.getElementById("myForm").insertBefore(
        x,document.getElementById("totalInterestPayment"));

    var y = document.createElement("INPUT");
    y.setAttribute("readOnly",true);
    y.setAttribute("type", "text");
    y.setAttribute("value", totalInterestPayment);
    document.getElementById("myForm").appendChild(y);
                }
  }