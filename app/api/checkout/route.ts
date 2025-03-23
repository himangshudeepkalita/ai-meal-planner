import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const { planType, userId, email } = await request.json()

    if (!planType || !userId || !email) {
        return NextResponse.json(
            {
                error: "Plan type, user id, and email are required."
            },
            { status: 400 }
        )
    }
}