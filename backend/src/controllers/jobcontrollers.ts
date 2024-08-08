import { RequestHandler } from "express";
import pg from "pg";
import env from "dotenv";
import bcrypt from "bcrypt"

const saltrounds = 10;
env.config();

const db = new pg.Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PW,
    port: parseInt(process.env.PORT!)
})

db.connect();

export const handleCompanyLogin: RequestHandler = async (req, res, next) => {

    const { user, password } = (req.body as { user: string, password: string });
    const result = await db.query("select * from companies where username = $1", [user]);

    if (result.rows.length > 0) {
        const savedPw = result.rows[0].password;
        bcrypt.compare(password, savedPw, async (error, result) => {

            if (error) {
                res.json({ message: error });
            }

            else {
                if (result) {
                    res.json({ message: "done" });
                }

                else {
                    res.json({ message: "Falsches Password" });
                }
            }
        })
    }

    else {
        res.json({ message: "Benutzer nicht gefunden" });
    }
}
