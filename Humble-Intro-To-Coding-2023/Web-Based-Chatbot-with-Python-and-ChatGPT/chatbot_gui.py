import gradio as gr


def respond(history, new_message):
    print(history)
    return history + [[new_message, 'YES']]


with gr.Blocks() as my_bot:
    chatbot = gr.Chatbot()
    user_input = gr.Text(placeholder="Enter messsage here...")
    user_input.submit(respond, [chatbot, user_input], chatbot)

my_bot.launch()
