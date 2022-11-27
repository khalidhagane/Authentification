
const supertest = require('supertest')
const app = require('../../server') ;
// require('dotenv').config()
// const mongoose = require('mongoose')

// beforeEach(async () => {
//   await mongoose.connect(process.env.MONGO_URI);
// });

describe("POST api/auth/login",() =>{

    // describe("given a email password", () =>{
        it("should res with a 400 status code",async () =>{
            const response = await supertest(app).post("/api/auth/login").send({
                email:"",
                password:""
            })
            expect(response.statusCode).toBe(400)
        })
    // })
    
    // describe("given a email password", () =>{
        it("should res with a 400 status code",async () =>{
            const response = await supertest(app).post("/api/auth/login").send({
                email:"email",
                password:"password"
            })
            expect(response.statusCode).toBe(400)
        })
    // })

    // describe("given a email password", () =>{

        it("should res with a 201 status code",async () =>{
            const response = await supertest(app).post("/api/auth/login").send({
                email:"rand.requan@minutestep.com",
                password:"pass"
            })
            expect(response.statusCode).toBe(201)
        })
    // })
    
    })
