import {Product, ProductInfo} from "../entities/database/additional";
import {GlovesInfo, HeadWearsInfo} from "../entities/database/models/categories/accessories";
import {MenShirtsInfo, MenTShirtsInfo} from "../entities/database/models/categories/men";
import {BlousesInfo, WomenShirtsInfo, WomenTShirtsInfo} from "../entities/database/models/categories/women";

export const models = [
    { model: GlovesInfo, index: 'gloves' },
    { model: HeadWearsInfo, index: 'headwears' },
    { model: MenShirtsInfo, index: 'men-shirts' },
    { model: MenTShirtsInfo, index: 'men-tshirts' },
    { model: Product, index: 'products' },
    { model: ProductInfo, index: 'product-infos' },
    { model: BlousesInfo, index: 'women-blouses' },
    { model: WomenShirtsInfo, index: 'women-shirts' },
    { model: WomenTShirtsInfo, index: 'women-tshirts' }
];