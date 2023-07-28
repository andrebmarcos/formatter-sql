
function format() {
    

    
    var query = document.getElementById("input").value;
    var formattedQuery = query.replace(/\n/g, " ");
    
    formattedQuery = formattedQuery.replace(/\s+/g, " ");
    formattedQuery = formattedQuery.replace(/,/g, ",\n");
    
    formattedQuery = formattedQuery.replace(/\bSELECT\b/g, "\nSELECT\n");
    formattedQuery = formattedQuery.replace(/\bselect\b/gi, "\nSELECT\n");
    
    formattedQuery = formattedQuery.replace(/\bFROM\b/g, "\nFROM\n");
    formattedQuery = formattedQuery.replace(/\bfrom\b/gi, "\nFROM\n");
  
    formattedQuery = formattedQuery.replace(/\bWHERE\b/g, "\nWHERE\n");
    formattedQuery = formattedQuery.replace(/\bwhere\b/gi, "\nWHERE\n");

    formattedQuery = formattedQuery.replace(/\bGROUP BY\b/g, "\nGROUP BY\n");
    formattedQuery = formattedQuery.replace(/\bgroup by\b/gi, "\nGROUP BY\n");
 
    formattedQuery = formattedQuery.replace(/\bHAVING\b/g, "\nHAVING");
    formattedQuery = formattedQuery.replace(/\bhaving\b/gi, "\nHAVING");
    
    formattedQuery = formattedQuery.replace(/ORDER BY/g, "\nORDER BY\n");
    formattedQuery = formattedQuery.replace(/\border by\b/gi, "\nORDER BY\n");
    
    formattedQuery = formattedQuery.replace(/\bAND\b/g, "\n    AND");
    formattedQuery = formattedQuery.replace(/\band\b/g, "\n    AND");
    
    formattedQuery = formattedQuery.replace(/\bOR\b/g, "\nOR");
    formattedQuery = formattedQuery.replace(/\bor\b/g, "\nOR");
   
    formattedQuery = formattedQuery.replace(/\bJOIN\b/g, "\nJOIN\n");
    formattedQuery = formattedQuery.replace(/\bjoin\b/g, "\nJOIN\n");
    
    formattedQuery = formattedQuery.replace(/\bINNER JOIN\b/g, "\nINNER JOIN\n");
    formattedQuery = formattedQuery.replace(/\binner join\b/g, "\nINNER JOIN\n");
    
    formattedQuery = formattedQuery.replace(/\bLEFT JOIN\b/g, "\nLEFT JOIN\n");
    formattedQuery = formattedQuery.replace(/\bleft join\b/gi, "\nLEFT JOIN\n");
    
    formattedQuery = formattedQuery.replace(/\bON\b/g, "\nON\n");
    formattedQuery = formattedQuery.replace(/\bon\b/g, "\nON\n");
    
    formattedQuery = formattedQuery.replace(/\bIN\b/g, "\nIN\n");
    formattedQuery = formattedQuery.replace(/\bin\b/g, "\nIN\n");
    
    formattedQuery = formattedQuery.replace(/\bVALUES\b/g, "\nVALUES\n");
    formattedQuery = formattedQuery.replace(/\bvalues\b/g, "\nVALUES\n");
  
    formattedQuery = formattedQuery.replace(/\bSET\b/g, "\nSET");
    formattedQuery = formattedQuery.replace(/\bset\b/g, "\nSET");
    
    formattedQuery = formattedQuery.replace(/\bUPDATE\b/g, "\nUPDATE\n");
    formattedQuery = formattedQuery.replace(/\bupdate\b/g, "\nUPDATE\n");

    formattedQuery = formattedQuery.replace(/\bDECLARE\b/g, "\nDECLARE\n");
    formattedQuery = formattedQuery.replace(/\bdeclare\b/g, "\nDECLARE\n");

    formattedQuery = formattedQuery.replace(/\bAS\b/g, "AS");
    formattedQuery = formattedQuery.replace(/\bas\b/g, "AS");
    
  

   
    document.getElementById("output").innerHTML = formattedQuery;

    




    document.getElementById("output").innerHTML = formattedQuery;
    output.innerHTML = `${formattedQuery.replace(/\t/g, "    ")}
    `;
    
  }

 

  function btncopiar() {

    const copiarTexto = document.getElementById("output");

    navigator.clipboard.writeText(copiarTexto.value);
}

function download() {
    
    var query = document.getElementById("output").innerHTML;
  
  
    var blob = new Blob([query], {type: "text/plain"});
  
    
    var link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = "formatted_query.txt";
  
    
    document.body.appendChild(link);
  
    
    link.click();
  }

