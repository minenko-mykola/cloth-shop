import {Payments} from "../entities/mongoose/payments";
import {PaymentTransactions} from "../entities/mongoose/payment-transactions";

export async function createPaymentTransaction() {
    try
    {
        const transaction = await PaymentTransactions.create({
            payment : "6ace3bf41da53e575fe5a655",
            provider : "Kitten",
            status : "succeeded"
        })
    }
    catch(err){
        console.log(`Error creating payment:${err}`)
        throw err
    }
}