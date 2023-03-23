from kivy.app import App
from kivy.uix.button import Button
from kivy.uix.widget import Widget
from kivy.uix.label import Label
from kivy.uix.image import Image
from kivy.properties import StringProperty
from kivy.properties import NumericProperty

class GameScreen(Widget):
  def press_button(self):
    print("Button pressed!")

class LanguageApp(App):
    def build(self):
        game_screen = GameScreen()
        return game_screen
    
if __name__ == '__main__':
    LanguageApp().run()