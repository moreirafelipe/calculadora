let calc=!1;function insertValues(e){1==calc&&(clearInput(),calc=!1);const t=document.getElementById("input-value").value;document.getElementById("input-value").value=t+e}function calculate(){calc=!0;const input=document.getElementById("input-value").value;document.getElementById("input-value").value=eval(input)}function clearInput(){document.getElementById("input-value").value=""}function invertValue(){calculate();const e=document.getElementById("input-value").value;document.getElementById("input-value").value=-1*e}function percent(){const e=document.getElementById("input-value").value;document.getElementById("input-value").value=parseFloat(.01*e)}