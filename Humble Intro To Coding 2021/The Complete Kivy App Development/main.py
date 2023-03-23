from kivy.app import App
from kivy.uix.button import Button


class CoolButton(Button):
    def __init__(self, **kwargs):
        super(CoolButton, self).__init__(**kwargs)
        self.text="Cool Button"
        self.pos=(100,100)
        self.size_hint=(.25,.25)


class LanguageApp(App):
    def build(self):
        return CoolButton()
    
if __name__ == '__main__':
    LanguageApp().run()