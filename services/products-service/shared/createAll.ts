import {createAdmin} from "./createAdmin";
import {createApprovedVolunteerApplication} from "./createApprovedVolunteerApplication";
import {createBlouse} from "./createBlouse";
import {createDirectOrder} from "./createDirectOrder";
import {createDiscount} from "./createDiscount";
import {createPayment} from "./createPayment";
import {createPaymentTransaction} from "./createPaymentTransaction";
import {createProduct} from "./createProduct";

export async function createAll()
{
    try
    {
        // await createPayment();
        // await createPaymentTransaction();
        // await createDiscount()
        // await createProduct();
        // await createDirectOrder();
    }
    catch(err)
    {
        console.log(`Error while creating:${err}`);
        throw err
    }
}