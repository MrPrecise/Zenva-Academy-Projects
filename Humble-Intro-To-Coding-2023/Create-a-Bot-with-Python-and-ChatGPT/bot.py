from openai import OpenAI

# Create OpenAI Client with API Key
client = OpenAI(
    api_key=""
)


# Array with messages
messages = [
    {'role': 'system',
     'content': 'You are a CTO mentoring developers, dont only provide answers also ask guiding questions'
     },
    {'role': 'user',
     'content': 'Why is my website down?'
     }]

# Used ChatGPT 3.5 that was used in the course
# However there are many options we can find under here:
# https://platform.openai.com/account/limits
response = client.chat.completions.create(
    messages=messages,
    model="gpt-3.5-turbo",
    n=2,
    max_tokens=20
)

# Print Actual Message
print(response.choices[0].message.content + "\n")
print(response.choices[1].message.content + "\n")
