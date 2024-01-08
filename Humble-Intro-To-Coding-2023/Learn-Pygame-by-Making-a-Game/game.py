import pygame
from game_object import GameObject
from player import Player


class Game:

    def __init__(self):
        # Values for gamewindow width / height and white RGB color
        self.width = 600
        self.height = 600
        self.white_colour = (255, 255, 255)

        # Initilzise Game Clock and Window
        self.game_clock = pygame.time.Clock()
        self.game_window = pygame.display.set_mode((self.width, self.height))

        # Create game object Background
        self.background = GameObject(
            0, 0, self.width, self.height, "assets/background.png")

        # Create game object Treasure
        self.treasure = GameObject(
            280, 35, 40, 40, "assets/treasure.png")

        # Create game object Player
        self.player = Player(
            280, 530, 40, 40, "assets/player.png", 10)

    def draw_objects(self):
        # Creating game windod with width / height variable
        self.game_window.fill(self.white_colour)

        # Draw Background
        self.game_window.blit(
            self.background.image, (self.background.x, self.background.y))

        # Draw Treasure
        self.game_window.blit(
            self.treasure.image, (self.treasure.x, self.treasure.y))

        # Draw Player
        self.game_window.blit(
            self.player.image, (self.player.x, self.player.y))

        pygame.display.update()

    def run_game_loop(self):
        player_direction = 0
        while True:
            events = pygame.event.get()
            for event in events:
                if event.type == pygame.QUIT:
                    self.exit_game()

                elif event.type == pygame.KEYDOWN:
                    player_direction = self.check_dir(event)

                elif event.type == pygame.KEYUP:
                    player_direction = self.stop_player(event)

            self.player.move(player_direction, self.height)
            self.draw_objects()
            self.game_clock.tick(60)

    def exit_game(self):
        # Closing Pygame and our application
        pygame.quit()
        quit()

    def check_dir(self, e):
        if e.key == pygame.K_UP:
            return -1
        elif e.key == pygame.K_DOWN:
            return 1

    def stop_player(self, e):
        if e.key == pygame.K_UP or pygame.K_DOWN:
            return 0
