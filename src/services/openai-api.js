const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
  apiKey: process.env.REACT_APP_OPENAI_KEY,
});
const openai = new OpenAIApi(configuration);

const openaiSearch = async (name) => {
  try {
    const response = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: `Write a six line rhyming space-themed birthday poem for ${name}`,
      temperature: 0.3,
      max_tokens: 150,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    });
    console.log(response.data.choices[0].text);
    return response.data.choices[0].text;
  } catch (error) {
    console.log(`openai api error: ${error}`);
    throw error;
  }
};

export default openaiSearch;
