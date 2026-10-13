import {Blouses} from "../entities/mongoose/blouses";

export async function createBlouse()
{
    try
    {
        const blouse = await Blouses.create({
            name : "Blouse 1",
            description : "Description 1",
            price : 99.99,
            quantity : 2,
            owner : "6a9d28615473a0876e35d601",
            size : "xs",
            back : ["straight","fitted"],
            collar : "round",
            style : ["casual","classic"],
            fasteners : ["buttons","none"],
            length : "cropped",
            sleeve : "sleeveless",
            seasons : ["spring"]
        })
    }
    catch(err)
    {
        console.log(`Error creating blouse:${err}`);
        throw err
    }
}