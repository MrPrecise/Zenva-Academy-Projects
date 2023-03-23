from kivy.app import App
from kivy.uix.button import Button
from kivy.uix.widget import Widget
from kivy.uix.label import Label
from kivy.uix.image import Image
from kivy.properties import StringProperty
from kivy.properties import NumericProperty
from kivy.core.window import Window

Window.clearcolor = (1, 1, 1, 1)
Window.size = (400, 600)

class ImageBox(Widget):
  pass

class GameScreen(Widget):
  pass

class LanguageApp(App):
    def build(self):
        game_screen = GameScreen()
        return game_screen
    
if __name__ == '__main__':
    LanguageApp().run()