function calculate(){
    let ppd = parseInt(document.getElementById("dogSize").value);
    let day = parseInt(document.getElementById("numDay").value);
    let pretax = ppd *day;
    let tax = pretax * 0.047;
    let total = pretax + tax;
    document.getElementById("price").textContent = "Price: $" +  pretax;
    document.getElementById("tax").textContent = "Tax: $" +  tax;
    document.getElementById("total").textContent = "Total: $" +  total;
}