function createTable(fname,phone,email,address,date,accnt, password){
    var tbl=document.getElementById("kt-datatable");
    var tbody=document.createElement("tbody");    
    // Rows
    // for(var x=0; x < sessionStorage.clickcount; x++){
        const row= document.createElement("tr");
        
            var cell1 = document.createElement("td");
            var cellText1 = document.createTextNode(fname);
            var cell2 = document.createElement("td");
            var cellText2 = document.createTextNode(phone);
            var cell3 = document.createElement("td");
            var cellText3 = document.createTextNode(email);
            var cell4 = document.createElement("td");
            var cellText4 = document.createTextNode(address);
            var cell5 = document.createElement("td");
            var cellText5 = document.createTextNode(date);
            var cell6 = document.createElement("td");
            var cellText6 = document.createTextNode(accnt);
            var cell7 = document.createElement("td");
            var cellText7 = document.createTextNode(password);
            cell1.appendChild(cellText1);
            cell2.appendChild(cellText2);
            cell3.appendChild(cellText3);
            cell4.appendChild(cellText4);
            cell5.appendChild(cellText5);
            cell6.appendChild(cellText6);
            cell7.appendChild(cellText7);
            row.appendChild(cell1);
            row.appendChild(cell2);
            row.appendChild(cell3);
            row.appendChild(cell4);
            row.appendChild(cell5);
            row.appendChild(cell6);
            row.appendChild(cell7);
            tbody.appendChild(row);
    // }
    tbl.appendChild(tbody);
}