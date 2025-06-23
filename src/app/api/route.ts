import { NextResponse } from "next/server";

export async function GET() {
  const users = {
    name: "rodine",
    idade: 42,
  };
  return new NextResponse(JSON.stringify(users), {
    status: 200,
    statusText: "sucesso",
  });
}
