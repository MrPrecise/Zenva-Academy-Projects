from kivy.app import App
from kivy.uix.button import Button

class LanguageApp(App):
    def build(self):
        return Button(
            text='Click Me',
            pos=(50,50),
            size=(100,100),
            size_hint=(0.2,0.2))
    
if __name__ == '__main__':
    LanguageApp().run()