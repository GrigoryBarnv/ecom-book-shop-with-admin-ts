import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { badRequest, notFound, serverError } from "@/utils/api";

export async function GET(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const product = await prisma.product.findUnique({
      where: { id },
    });

    if (!product) {
      return notFound("Product not found.");
    }

    return NextResponse.json(product);
  } catch (error) {
    return serverError("Unable to retrieve product.");
  }
}

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const { name, description, price, quantity, image } = await req.json();
    const data: Record<string, unknown> = {};

    if (name) data.name = name;
    if (description) data.description = description;
    if (typeof price === "number") data.price = price;
    if (typeof quantity === "number") data.quantity = quantity;
    if (image) data.image = image;

    if (Object.keys(data).length === 0) {
      return badRequest("No fields provided for update.");
    }

    const product = await prisma.product.update({
      where: { id },
      data,
    });

    return NextResponse.json(product);
  } catch (error) {
    return notFound("Product not found.");
  }
}

export async function DELETE(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    await prisma.product.delete({
      where: { id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return notFound("Product not found.");
  }
}
