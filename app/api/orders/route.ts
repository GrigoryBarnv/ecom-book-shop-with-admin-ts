import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { badRequest, created, serverError } from "@/utils/api";

export async function GET() {
  try {
    const orders = await prisma.order.findMany({
      include: { items: true },
    });
    return NextResponse.json(orders);
  } catch (error) {
    return serverError("Unable to load orders.");
  }
}

export async function POST(req: NextRequest) {
  try {
    const { userId, items, total, status } = await req.json();

    if (!userId || !Array.isArray(items) || typeof total !== "number") {
      return badRequest("userId, items, and total are required.");
    }

    const order = await prisma.order.create({
      data: {
        userId,
        total,
        status: status ?? "pending",
        items: {
          create: items.map((item: any) => ({
            productId: item.productId,
            quantity: item.quantity,
            price: item.price,
          })),
        },
      },
      include: { items: true },
    });

    return created(order);
  } catch (error) {
    return serverError("Unable to create order.");
  }
}
