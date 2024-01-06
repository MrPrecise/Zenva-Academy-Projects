from openai import OpenAI
import os

# Create OpenAI Client with API Key
client = OpenAI(
    api_key=os.environ.get('OPENAI_API_KEY')
)

messages = [{
    'role': 'system',
    'content': 'You are a quiz. Present the user with a multiple-choice question to practice for a python interview, they have to respond by typing a, b, c, d or e. Only one question at a time. Wait until the user responds before presenting a new question or the answer to the previous question'
}]

while True:
    # send the api call
    response = client.chat.completions.create(
        messages=messages, model="gpt-3.5-turbo")
    # display response in console
    print(response.choices[0].message.content)
    # expanding the conversation
    messages.append(response.choices[0].message)

    # adding prompt again to continue with the quiz
    messages.append(prompt)
    # capture user input
    user_input = input('Enter your answer: ')
    # quit loop if user presses "q"
    if user_input == 'q':
        exit()
    # prompt preparation
    messages.append({'role': 'user', 'content': user_input})
