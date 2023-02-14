const getNameLink=/[^/]{0,}[\w+#/-]$/gi;const checkLink=new RegExp("(http://|https://)","gi");async function getData(url){const response=await fetch(url);const result=await response.json();return result}function tableGen(data=[],options={}){const{idTableContainer="tablegen",urlFullName=true,theme="light",border="flat",fontSize="normal"}=options;const container=document.getElementById(idTableContainer);container.setAttribute("table-theme",theme);container.setAttribute("table-fontsize",fontSize);container.setAttribute("table-border",border);const table=document.createElement("table");const tbody=document.createElement("tbody");data.forEach(obj=>{const tr=document.createElement("tr");for(const key in obj){const td=document.createElement("td");if(checkLink.test(obj[key])){const link=document.createElement("a");const span=document.createElement("span");span.innerHTML="&ac; ";link.setAttribute("href",obj[key]);link.setAttribute("target","_blank");try{urlFullName?link.textContent=obj[key]:link.textContent=String(obj[key]).trim().match(getNameLink)[0].replace("/","")}catch{console.error("bad format url",obj[key])}td.append(span,link)}else{td.textContent=obj[key]}tr.appendChild(td)}tbody.appendChild(tr)});function tableHeading(el){const ell=document.createElement(`${el}`);const tr=document.createElement("tr");ell.appendChild(tr);for(const key in data[0]){const th=document.createElement("th");th.textContent=`${key}`;tr.appendChild(th)}return ell}const thead=tableHeading("thead");const tfoot=tableHeading("tfoot");table.append(thead,tbody,tfoot);container.appendChild(table)}export{tableGen,getData};