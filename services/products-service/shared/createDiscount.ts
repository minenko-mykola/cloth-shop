import {Discounts} from "../entities/mongoose/discounts";

export async function createDiscount()
{
    try
    {
        const discount = await Discounts.create({
            percentage : 40,
            products : [
                "6ace3059c5897256252718eb",
                "6ace30b908234e698cf8dde5"
            ],
            auditory : "all",
            seller : "6a9d28615473a0876e35d601"
        })

        console.log(discount.products[0]);
        console.log(discount.products[0].toString());

        console.log(discount.seller);
        console.log(discount.seller.toString());
    }
    catch(err)
    {
        console.log(`Error while creating discounts:${err}`)
        throw err
    }
}