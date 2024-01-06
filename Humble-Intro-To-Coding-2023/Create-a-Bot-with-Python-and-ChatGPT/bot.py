from openai import OpenAI

client = OpenAI(
    api_key=""
)

message = {'role': 'user',
           'content': 'What is the square root of four houndred?'
           }
messages = []
messages.append(message)

response = client.chat.completions.create(
    messages=messages, model="gpt-3.5-turbo"
)

print(response)
