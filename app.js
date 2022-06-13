function start(ev) {
  ev.preventDefault();
  let inputnumber1 = document.querySelector("#IN_1").value;
  let inputnumber2 = document.querySelector("#IN_2").value;

  let target1 = document.querySelector("#value_input_div1");
  let target2 = document.querySelector("#value_input_div2");

  if (inputnumber1 != inputnumber2) {
    alert("Rows must be equal to Columns");
    return false;
  }
  for (let i = 0; i < inputnumber1; i++) {
    for (let j = 0; j < inputnumber2; j++) {
      target1.innerHTML += `<input type="number" class="input_boxes" size="1" id="IN_1${i}${j}" value="0";>`;
    }
    target1.innerHTML += "<br>";
  }
  for (let i = 0; i < inputnumber1; i++) {
    for (let j = 0; j < inputnumber2; j++) {
      target2.innerHTML += `<input type="number" class="input_boxes" size="1" id="IN_2${i}${j}" value="0" ;>`;
    }
    target2.innerHTML += "<br>";
  }
  // console.log (inputnumber1)
  // console.log (inputnumber2)
  // /Frm1.styles.visibility = "none"/
}
function sum(ev) {
  ev.preventDefault();
  let inputnumber1 = document.querySelector("#IN_1").value;
  let inputnumber2 = document.querySelector("#IN_2").value;
  let resultDiv = document.querySelector("#result");

  for (let i = 0; i < inputnumber1; i++) {
    for (let j = 0; j < inputnumber2; j++) {
      let value1 = parseInt(document.querySelector(`#IN_1${i}${j}`).value);
      let value2 = parseInt(document.querySelector(`#IN_2${i}${j}`).value);
      // let result = value1 + value2;
      // console.log(result);
      // resultDiv.innerHTML = result;
      resultDiv.innerHTML += `<input type="text" class="input_boxes" size="1" id="IN_2${i}${j}" disabled value="${
        value1 + value2
      }";>`;
    }
    resultDiv.innerHTML += "<br>";
  }
}
