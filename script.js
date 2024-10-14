function calculate(){
    let ppd = parseInt(document.getElementById("dogSize").value);
    let day = parseInt(document.getElementById("numDay").value);
    let pretax = ppd *day;
    let tax = parseFloat(pretax * 0.047).toFixed(2);
    let total = pretax + parseFloat(tax);
    document.getElementById("price").textContent = "Price: $" +  pretax;
    document.getElementById("tax").textContent = "Tax: $" +  tax;
    document.getElementById("total").textContent = "Total: $" +  total;
}