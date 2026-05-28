import { NextResponse } from "next/server";

export function badRequest(message: string) {
  return NextResponse.json({ error: message }, { status: 400 });
}

export function notFound(message = "Not found") {
  return NextResponse.json({ error: message }, { status: 404 });
}

export function conflict(message: string) {
  return NextResponse.json({ error: message }, { status: 409 });
}

export function serverError(message = "Server error") {
  return NextResponse.json({ error: message }, { status: 500 });
}

export function created(data: unknown) {
  return NextResponse.json(data, { status: 201 });
}
