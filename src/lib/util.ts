import { OpenAI } from "openai";


const openai = new OpenAI({
    organization: "YOUR_ORG_ID",
    project: "$PROJECT_ID",
});
const client = new OpenAI();

async function main() {
    const stream = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: "Say this is a test" }],
        stream: true,
    });
    for await (const chunk of stream) {
        process.stdout.write(chunk.choices[0]?.delta?.content || "");
    }
}

main();

const response = await client.chat.completions.create({
    messages: [{ role: 'user', content: 'Say this is a test' }],
    model: 'gpt-4o-mini'
});

console.log(response._request_id);