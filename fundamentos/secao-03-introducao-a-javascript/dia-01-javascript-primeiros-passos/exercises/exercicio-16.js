const purchasePrice = 10;
const salePrice = 20;

if (purchasePrice >= 0 && salePrice >= 0) {  
    
    let taxValue = (20 * purchasePrice) / 100;
    let costValue = purchasePrice + taxValue;
    let profitValue = (salePrice - costValue) * 1000;
   
    console.log(profitValue);
} else {
    console.log('Erro, os valores não podem ser negativos!');
};
