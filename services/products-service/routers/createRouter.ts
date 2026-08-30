import express from "express";
import {
    createBlouse,
    createBlouseSchema,
    createGloves,
    createGlovesSchema,
    createHead,
    createHeadSchema,
    createHeadWear,
    createHeadWearSchema,
    createOrganisation,
    createOrganisationSchema,
    createShirt,
    createShirtSchema,
    createTShirt,
    createTShirtSchema,
    createUser,
    createUserSchema,
    createVolunteer,
    createVolunteerSchema
} from "../actions/express/create";


export const createRouter = express.Router();
createRouter.post("/blouse",createBlouseSchema,createBlouse)
createRouter.post("/gloves",createGlovesSchema,createGloves)
createRouter.post("/headwear",createHeadWearSchema,createHeadWear)
createRouter.post("/shirt",createShirtSchema,createShirt)
createRouter.post("/tshirt",createTShirtSchema,createTShirt)

createRouter.post("/head",createHeadSchema,createHead)
createRouter.post("/organisation",createOrganisationSchema,createOrganisation)
createRouter.post("/user",createUserSchema,createUser)
createRouter.post("/volunteer",createVolunteerSchema,createVolunteer)
