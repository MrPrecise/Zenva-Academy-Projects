from kivy.app import App
from kivy.uix.button import Button

class LanguageApp(App):
    def build(self):
        return Button(text='Click Me')
    
if __name__ == '__main__':
    LanguageApp().run()