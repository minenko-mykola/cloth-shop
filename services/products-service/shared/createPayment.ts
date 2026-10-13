import {Payments} from "../entities/mongoose/payments";

export async function createPayment() {
    try {

        console.log("Trying to create a new payment");

        const payment = await Payments.create({
            amount : 1.99,
            currency: "USD",
            status : "pending"
        })
        console.log("Created Payment...");
    }
    catch(err){
        console.log(`Error creating payment:${err}`)
        throw err
    }
}