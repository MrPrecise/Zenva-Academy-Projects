from openai import OpenAI

# Create OpenAI Client with API Key
client = OpenAI(
    api_key=""
)

# Added messages
message = {'role': 'user',
           'content': 'What is the square root of four houndred?'
           }

# Added array that can be filled with messages later on
messages = []

# Append prior message
messages.append(message)

# Used ChatGPT 3.5 that was used in the course
# However there are many options we can find under here:
# https://platform.openai.com/account/limits
response = client.chat.completions.create(
    messages=messages, model="gpt-3.5-turbo"
)

# Print Full Response
print(response)

# Print Actual Message
print(response.choices[0].message.content)
