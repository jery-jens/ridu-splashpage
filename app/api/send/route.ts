import WaitinglistEmail from "@/app/components/email-template/waitinglist-email";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { email } = await req.json();

  try {
    const { data, error } = await resend.emails.send({
      from: "Ridu <hello@ridu.be>",
      to: "hello@ridu.be",
      subject: "Nieuwe inschrijving op de waitinglist",
      react: WaitinglistEmail({ email }),
    });

    await resend.contacts.create({
      email,
      audienceId: "849f8e8e-bdda-4b56-8cdb-25093a1cdd68",
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}