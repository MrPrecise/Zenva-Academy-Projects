from openai import OpenAI
import os

# Create OpenAI Client with API Key
client = OpenAI(
    api_key=os.environ.get('OPENAI_API_KEY')
)

# Array with messages
messages = []

while True:
    # capture user input
    user_input = input('Enter your prompt: ')
    # quit loop if user presses "q"
    if user_input == 'q':
        exit()
    # prompt preparation
    messages.append({'role': 'user', 'content': user_input})
    # send the api call
    response = client.chat.completions.create(
        messages=messages, model="gpt-3.5-turbo")
    # display response in console
    print(response.choices[0].message.content)
    # expanding the conversation
    messages.append(response.choices[0])
