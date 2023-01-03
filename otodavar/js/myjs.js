var myData= [];
/*
const todayDate = () => {
    var toPrint = "";
    var curDate =  new Date();
    var y = curDate.getFullYear();
    var m = curDate.getMonth() + 1;
    var d = curDate.getDate();
    toPrint +=`<p>
    ${d + "/" + m + "/" + y}
    </p>`;
    console.log("curDate");
    document.getElementById("body").innerHTML = toPrint;
}
*/
const handleData = () => {
    
    const curDate =  new Date();
    
    
    //document.getElementById("curDate").innerHTML = m + "/" + d + "/" + y;

    const clientName = document.getElementById("clientName").value;
    const clientPhone = +document.getElementById("clientPhone").value;
    const clientAddress = document.getElementById("clientAddress").value;
    const vip = document.getElementById("vip").checked;
    const droneCompany = document.getElementById("droneCompany").value;
    const droneModel = document.getElementById("droneModel").value;
    const issueDesc = document.getElementById("issueDesc").value;
    const fixDesc = document.getElementById("fixDesc").value;
    const etaFix = document.getElementById("etaFix").value;
    console.log(clientName, clientPhone, clientAddress, vip, droneCompany, droneModel,issueDesc,fixDesc,etaFix);
    
    var newClient = new Object();
    newClient.curDate = curDate;
    newClient.clientName = clientName;
    newClient.clientPhone = clientPhone;
    newClient.clientAddress = clientAddress;
    newClient.vip = vip;
    newClient.droneCompany = droneCompany;
    newClient.droneModel = droneModel;
    newClient.issueDesc = issueDesc;
    newClient.fixDesc = fixDesc;
    newClient.etaFix = etaFix;
    
    myData.push(newClient);
    makeTable();
    document.getElementById("myForm").reset();
}

const makeTable = () => {
    var data="";
    myData.map((item) => {
        var y = item.curDate.getFullYear();
        var m = item.curDate.getMonth() + 1;
        var d = item.curDate.getDate();
        console.log(d + "/" + m + "/" + y);
        
        data += `
                <tr>
                    <td>${d + "/" + m + "/" + y}</td>
                    <td>${item.etaFix}</td>    
                </tr>
            `;
      });
      document.getElementById("clientList").innerHTML = data;
      
}

 function newData(date){
    (Number) 
 }
