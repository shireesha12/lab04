/*eslint-env browser*/

var customerType;
var invoiceTotal;
var discountPercent;
var discountAmount;
var newInvoiceTotal;

window.document.write("<h3> Welcome To The Invoice Application</h3>");

customerType = window.prompt("enter customer type (r/w)");
invoiceTotal = parseFloat(window.prompt("enter the invoice total"));

if (customerType === "r") {
    if(invoiceTotal > 0 && invoiceTotal < 100) {
        discountPercent = 0;        
    } else if (invoiceTotal >= 100 && invoiceTotal < 250) {
        discountPercent = 0.1;        
    } else if (invoiceTotal >= 250 && invoiceTotal < 500) {
        discountPercent = 0.2;
        
    } else {
        discountPercent = 0.25;
        
    }
    
    
} else if (customerType === "w") {
    if (invoiceTotal > 0 && invoiceTotal < 500){
        discountPercent = 0.4;
    } else {
        discountPercent =0.5;
    }
    
} else {
    discountPercent = 0;    
}

discountAmount = invoiceTotal * discountPercent;
newInvoiceTotal = invoiceTotal - discountAmount;

window.document.write ("invoice total:" + invoiceTotal + "<br>");
window.document.write ("DiscountPercent:" + discountPercent * 100+ " %<br>");
window.document.write ("DiscountAmount:" + discountAmount + "<br>");
window.document.write ("newInvoiceTotal:" + newInvoiceTotal+ "<br>");
