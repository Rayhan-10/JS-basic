function woodQuantity(ChairQuantity,tableQuantity,bedQuantity)
{
    const perChairWood =3;
    const perTableWood = 10;
    const perBedWood = 50;
    const ChairTotalWood = ChairQuantity * perChairWood;
    const tableTotalWood = tableQuantity * perTableWood;
    const bedTotalWood = bedQuantity * perBedWood;

    const totalWood = ChairTotalWood + tableTotalWood + bedTotalWood;
    return totalWood;

}
const totalWood = woodQuantity(0,0,3);
console.log('Total Wood : ',totalWood);
