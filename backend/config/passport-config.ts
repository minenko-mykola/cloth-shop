import axios from "axios";

const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
import dotenv from "dotenv";

dotenv.config({ path: "config/envs/.env.hashing",override : false });
console.log(`Secret key:${process.env.ACCESS_SECRET_KEY}`);
const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.ACCESS_SECRET_KEY
}

export const passport = (_passport : any) =>
{
    _passport.use(new JwtStrategy(options, async (payload : any , done  : any) => {

        try
        {
            const response = await axios.get(`https://localhost:5000/api/user/get/${payload.id}`);

            if (!response.data.user)
            {
                return done(null, false)
            }else{
                return done(null, response.data.user)
            }
        }
        catch (error)
        {
            return done(error,false);
        }
    }))
}

