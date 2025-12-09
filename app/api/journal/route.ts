import OpenAI from "openai"

const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
})

export async function POST(req: Request) {
    const {content} = await req.json() as {
        content: string;
    }

    const response = await client.chat.completions.create({
        model: "gpt-4.1",
        messages: 
        [
            { 
                role: "system",
                content: `You are a stoic ai philosopher. Provide thoughful and poignant feedback to users day, providing actionable insight, commendations, and improvement techniques. Limit your response to 1 paragraph`
            },
            {
                role: "user",
                content
            }
        ]
    })

    return Response.json({ edited: response.choices[0].message.content})
}