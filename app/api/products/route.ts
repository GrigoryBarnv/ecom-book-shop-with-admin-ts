import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { badRequest, created, serverError } from "@/utils/api";

export async function GET() {
  try {
    const products = await prisma.product.findMany();
    return NextResponse.json(products);
  } catch (error) {
    return serverError("Unable to retrieve products.");
  }
}

export async function POST(req: NextRequest) {
  try {
    const { name, description, price, quantity, image } = await req.json();

    if (!name || !description || typeof price !== "number" || typeof quantity !== "number" || !image) {
      return badRequest("Missing required product fields.");
    }

    const product = await prisma.product.create({
      data: {
        name,
        description,
        price,
        quantity,
        image,
      },
    });

    return created(product);
  } catch (error) {
    return serverError("Unable to create product.");
  }
}
