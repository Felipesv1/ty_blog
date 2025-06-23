import { NextResponse } from "next/server";

export async function GET() {
  const users = [
    {
      nome: "wesley",
      email: "wes@email.com",
    },
    {
      nome: "sidney",
      email: "sid@email.com",
    },
  ];
  return new NextResponse(JSON.stringify(users), {
    status: 200,
    statusText: "sucesso",
  });
}
