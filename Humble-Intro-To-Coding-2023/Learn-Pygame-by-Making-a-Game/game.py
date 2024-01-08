import pygame
from game_object import GameObject


class Game:

    def __init__(self):
        # Values for gamewindow width / height and white RGB color
        self.width = 600
        self.height = 600
        self.white_colour = (255, 255, 255)

        # Initilzise Game Clock and Window
        self.game_clock = pygame.time.Clock()
        self.game_window = pygame.display.set_mode((self.width, self.height))

        # Added Background Image and Scaling it
        self.background = GameObject(
            0, 0, self.width, self.height, "assets/background.png")

        # Added Treasure Image and Scaling it
        self.treasure = GameObject(
            280, 35, 40, 40, "assets/treasure.png")

    def draw_objects(self):
        # Creating game windod with width / height variable
        self.game_window.fill(self.white_colour)

        self.game_window.blit(self.background.image,
                              (self.background.x,
                               self.background.y))

        self.game_window.blit(self.treasure.image,
                              (self.treasure.x,
                               self.treasure.y))
        pygame.display.update()

    def run_game_loop(self):
        while True:
            events = pygame.event.get()
            for event in events:
                if event.type == pygame.QUIT:
                    self.exit_game()

            self.draw_objects()
            self.game_clock.tick(60)

    def exit_game(self):
        # Closing Pygame and our application
        pygame.quit()
        quit()
