from kivy.app import App
from kivy.uix.button import Button
from kivy.uix.widget import Widget
from kivy.uix.label import Label


class GameScreen(Widget):
    pass

class LanguageApp(App):
    def build(self):
        game_screen = GameScreen()
        game_screen.add_widget(
            Label(text='Hello World')
        )
        return game_screen
    
if __name__ == '__main__':
    LanguageApp().run()