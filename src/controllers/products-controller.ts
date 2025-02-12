import { NextFunction, Request, Response } from "express";
import { knex } from "@/database/knex"
import { z } from "zod"

class ProductsController {
  async index(request: Request, response: Response, next: NextFunction) {
    try {
      
    } catch (error) {
      next(error)
    }
  }

  async create(request: Request, response: Response, next: NextFunction){
    try {
      const bodySchema = z.object({
        name: z.string().trim().min(6),
        price: z.number().gt(0,{message: "value most be grather than 0" })
      })

      const { name, price } = bodySchema.parse(request.body)

      await knex("products").insert({ name, price})

      return response.status(200).json({name, price})

    } catch (error) {
      next(error)
    }
  }
}



export { ProductsController}