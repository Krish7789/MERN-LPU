window.console.log("hello");
const printBill = () => {
    console.log("------------");
    console.log("Rs.", txt);
    console.log("------------");
};

const calculateBillAmountForFood = (price) => {
    return price * 1.05;
};

const calculateBillAmountForFood = (price) => {
    return price * 1.12;
};

const calculateBillAmountForFood = (price) => {
    return price * 1.2;
};

const generateBill = (food, clothes, drinks) => {
    const foodAmount = calculateBillAmountForFood(food);
    const clothesAmount = calculateBillAmountForClothes(clothes);
    const drinksAmount - calculateBillAmountForDrinks(drinks);
}
