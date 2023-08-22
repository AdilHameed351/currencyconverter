console.log("Main.js is working");


const populate = async (value, currency) => {
    let myStr = "";
    url = "https://api.currencyapi.com/v3/latest?apikey=cur_live_8kmaBjXW8VKan7UkqJHEf8cgAYOOo7GxK6vHHq0Y&base_currency=" + currency;
    let response = await fetch(url);
    let rJson = await response.json();
    document.querySelector(".output").style.display = "block";
    
    for(let key of Object.keys(rJson["data"])) {
        myStr += `<tr>
            <td>${key}</td>
            <td>${rJson["data"][key]["code"]}</td>
            <td>${(rJson["data"][key]["value"] * value).toFixed(4)}</td>
        </tr>`
    }

    const tableBody = document.querySelector("tbody");
    tableBody.innerHTML = myStr;


}

const btn = document.querySelector(".btn");
btn.addEventListener("click", (e) => {
    e.preventDefault();
    const value = parseInt(document.querySelector("input[name='quantity']").value);
    const currency = document.querySelector("select[name='currency']").value;
    populate(value, currency);
});


const myFunc = async () => {
    let str = ""
    url = "https://api.currencyapi.com/v3/latest?apikey=cur_live_8kmaBjXW8VKan7UkqJHEf8cgAYOOo7GxK6vHHq0Y&base_currency=";
    let response = await fetch(url);
    let rJson = await response.json();
    const selectElem = document.querySelector("select[name='currency']");

    for (let key of Object.keys(rJson["data"])) {
        str += `<option value='${rJson["data"][key]["code"]}'>${rJson["data"][key]["code"]}</option>`;
    }

    selectElem.innerHTML = str;
};

window.addEventListener("load", myFunc);