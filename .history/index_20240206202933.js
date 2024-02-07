import "dotenv/config"; // This should be at the very top of your index.js
import OpenAI from "openai";
import express from "express";

const openai = new OpenAI({
  organization: "org-oezLVIEEl0GUfg45T9r0ysFd",
  apiKey: "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",
});

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "You are a helpful assistant." }],
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices[0]);
}

main();

// create a simple express api that calls the function above

const app = express();
const port = 3080;

app.post("/", async (req, res) => {
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: "Say this is a test",
    max_tokens: 7,
    temperature: 0,
  });
  console.log(response.data.choices[0].text);
  res.json({
    data: response.data,
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
