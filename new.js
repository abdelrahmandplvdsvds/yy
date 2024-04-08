function ExportToExcel(type, fn, dl); 
        {
            //Get values from inputs to table
            document.getElementById("td1").innerHTML = document.getElementById("First name").value;
            document.getElementById("td2").innerHTML = document.getElementById("lastName").value;
            document.getElementById("td3").innerHTML = document.getElementById("username").value;
            document.getElementById("td4").innerHTML = document.getElementById("email").value;
            document.getElementById("td5").innerHTML = document.getElementById("address").value;
            document.getElementById("td6").innerHTML = document.getElementById("address2").value;
            document.getElementById("td7").innerHTML = document.getElementById("country").value;
            document.getElementById("td8").innerHTML = document.getElementById("state").value;
            document.getElementById("td9").innerHTML = document.getElementById("zip").value;
            document.getElementById("td10").innerHTML = document.getElementById("credit").value;
            document.getElementById("td11").innerHTML = document.getElementById("debit").value;
            document.getElementById("td12").innerHTML = document.getElementById("paypal").value;
            document.getElementById("td13").innerHTML = document.getElementById("cc-name").value;
            document.getElementById("td14").innerHTML = document.getElementById("cc-number").value;
            document.getElementById("td15").innerHTML = document.getElementById("cc-expiration").value;
            document.getElementById("td16").innerHTML = document.getElementById("cc-cvv").value;

            var elt = document.getElementById('tbl');
            var wb = XLSX.utils.table_to_book(elt, { sheet: "sheet1" });
            return dl ?
            XLSX.write(wb, { bookType: type, bookSST: true, type: 'base64' }) :
            XLSX.writeFile(wb, fn || ('Billing address' + (type || 'xlsx')));
        }