import openai
from openai import OpenAI
import wikipedia
import os

# Create OpenAI Client with API Key
client = OpenAI(
    api_key=os.environ.get('OPENAI_API_KEY')
)

title = input('Title of page: ')
page = wikipedia.page(title=title, auto_suggest=False)


# Array with messages
messages = [
    {'role': 'user',
     'content': f"Create summery of this article: {page.content[:5000]}"
     }]

try:
    # Used ChatGPT 3.5 that was used in the course
    # However there are many options we can find under here:
    # https://platform.openai.com/account/limits
    response = client.chat.completions.create(
        messages=messages,
        model="gpt-3.5-turbo"
        # n = 2 | Get more responses
        # max_tokens | Shorter responses but cheaper api calls
    )

    # Print Actual Message
    print(response.choices[0].message.content + "\n")

except openai.AuthenticationError:
    print('No Valid Token / Authentication Rrror')

except openai.BadRequestError as e:
    print('Invalid request, read the manual: https://platform.openai.com/docs/api-reference' + "\n\n")
    print(e)
