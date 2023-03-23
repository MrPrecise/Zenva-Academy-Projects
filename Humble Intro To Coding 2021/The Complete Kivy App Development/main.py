from kivy.app import App
from kivy.uix.button import Button


class CoolButton(Button):
    pass


class LanguageApp(App):
    def build(self):
        return CoolButton(
            pos=(100,100),
            size_hint=(None, None),
            size=(200,200)
        )
    
if __name__ == '__main__':
    LanguageApp().run()