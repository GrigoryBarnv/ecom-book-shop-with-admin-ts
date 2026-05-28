import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { badRequest, conflict, created, serverError } from "@/utils/api";

export async function POST(req: NextRequest) {
  try {
    const { email, password, name } = await req.json();

    if (!email || !password) {
      return badRequest("Email and password are required.");
    }

    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return conflict("User already exists.");
    }

    const user = await prisma.user.create({
      data: {
        email,
        password,
        name: name ?? "",
      },
    });

    const { password: _password, ...userWithoutPassword } = user;
    return created(userWithoutPassword);
  } catch (error) {
    return serverError("Unable to register user.");
  }
}
