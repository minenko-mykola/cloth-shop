import {DirectOrders} from "../entities/mongoose/direct-orders";

export async function createDirectOrder()
{
    try
    {
        const directOrder = await DirectOrders.create({
            user : "6a9d26522d7ff66271b4a885",
            payment : "6ace3e7bcf91db144e50a2ba",
            items : [{
                product : "6ace3059c5897256252718eb",
                unitPrice : 0.05,
                quantity : 5,
                finalPrice : 0.25
            }],
            status : "pending",
            commissionPercent : 5,
            totalAmount : 0.25,
            shippingData : {
                firstName : "Kitten",
                lastName : "Vasya",
                phone : "+380 012 345 67 89",
                city : "Vasyansk",
                address : "Kotyachyi Prospect 12",
                postalCode : "12345"
            }
        })
    }
    catch(err){
        console.log(`Error creating DirectOrder:${err}`);
        throw err
    }
}