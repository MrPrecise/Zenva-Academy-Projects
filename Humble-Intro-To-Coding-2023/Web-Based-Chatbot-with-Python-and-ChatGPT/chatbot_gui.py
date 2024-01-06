import gradio as gr
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

# Adding new responses in the GUI from ChatGPT


# Preserving chat history both for ChatGPT and GUI
# While also sending calls to the API
def respond(history, new_message):
    #  Adding message to message array
    messages.append({
        'role': 'user',
        'content': new_message
    })

    # Calls ChatGPT with the message asked
    response = client.chat.completions.create(
        messages=messages,
        model="gpt-3.5-turbo"
    )

    # Catch the returning message
    assistant_message = response.choices[0].message

    # Append message to history for next ChatGPT Call
    messages.append(assistant_message)

    # Update GUI with the response
    return history + [[new_message, assistant_message.content]]


# Defining gradio
with gr.Blocks() as my_bot:

    # Creating the chat itself for the chatbot
    chatbot = gr.Chatbot()

    # Creating the textbox to write to ChatGPT
    user_input = gr.Text(placeholder="Enter messsage here...")

    # Added functionality to submit the content sent
    user_input.submit(
        respond,
        [chatbot, user_input],
        chatbot
    )


my_bot.launch()
