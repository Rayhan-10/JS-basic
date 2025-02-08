const price =499;
if(price >= 500 && price <= 800)
{
    //10% discount
    const discount= price*20/100;
    const payAmount= price - discount;
    console.log(payAmount);
}
else if(price > 800 && price <= 1500)
{
    const discount= price*20/100;
    const payAmount= price - discount;
    console.log(payAmount);
}
else if(price > 1500)
{
    const discount= price*40/100;
    const payAmount= price - discount;
    console.log(payAmount);
}
else
{
    console.log(price);
}