import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { badRequest, created, serverError } from "@/utils/api";

export async function GET() {
  try {
    const carts = await prisma.cart.findMany({
      include: { items: true },
    });
    return NextResponse.json(carts);
  } catch (error) {
    return serverError("Unable to load cart data.");
  }
}

export async function POST(req: NextRequest) {
  try {
    const { userId, productId, quantity } = await req.json();

    if (!userId || !productId || typeof quantity !== "number") {
      return badRequest("userId, productId, and quantity are required.");
    }

    const cart = await prisma.cart.upsert({
      where: { userId },
      create: {
        userId,
        items: {
          create: {
            productId,
            quantity,
          },
        },
      },
      update: {
        items: {
          create: {
            productId,
            quantity,
          },
        },
      },
      include: { items: true },
    });

    return created(cart);
  } catch (error) {
    return serverError("Unable to update cart.");
  }
}
