import pygame
from game_object import GameObject
from player import Player
from enemy import Enemy


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

        self.level = 1.0
        self.reset_map()

    def reset_map(self):
      # NOTE: We're using different values and image paths here specifically for the Trinket application
        self.player = Player(280, 530, 40, 40, "assets/player.png", 3)

        # Increases the speed of enemies as the level goes up
        speed = 1 + (self.level * 0.5)

        # Increases the number of enemies as the game level goes up
        if self.level >= 4.0:
            self.enemies = [
                Enemy(0, 450, 40, 40, "assets/enemy.png", speed),
                Enemy(250, 300, 40, 40, "assets/enemy.png", speed),
                Enemy(0, 150, 40, 40, "assets/enemy.png", speed),
            ]
        elif self.level >= 2.0:
            self.enemies = [
                Enemy(0, 450, 40, 40, "assets/enemy.png", speed),
                Enemy(250, 300, 40, 40, "assets/enemy.png", speed),
            ]
        else:
            self.enemies = [
                Enemy(0, 450, 40, 40, "assets/enemy.png", speed),
            ]

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

        # Draw Enemy
        for enemy in self.enemies:
            self.game_window.blit(
                enemy.image, (enemy.x, enemy.y))

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

            # Tell both Player and Enemy to move
            self.move_objects(player_direction)

            self.draw_objects()

            if self.check_if_collided():
                self.reset_map()

            self.game_clock.tick(120)

    def exit_game(self):
        # Closing Pygame and our application
        pygame.quit()
        quit()

    def check_dir(self, e):
        if e.key == pygame.K_UP:
            return -1
        elif e.key == pygame.K_DOWN:
            return 1
        else:
            return 0

    def stop_player(self, e):
        if e.key == pygame.K_UP or pygame.K_DOWN:
            return 0

    def detect_collision(self, object_1, object_2):
        if object_1.y > (object_2.y + object_2.height):
            return False
        elif (object_1.y + object_1.height) < object_2.y:
            return False
        if object_1.x > (object_2.x + object_2.width):
            return False
        elif (object_1.x + object_1.width) < object_2.x:
            return False
        return True

    def move_objects(self, player_direction):
        self.player.move(player_direction, self.height)
        for enemy in self.enemies:
            enemy.move(self.width)

    def check_if_collided(self):
        for enemy in self.enemies:
            if self.detect_collision(self.player, enemy):
                self.level = 1.0
                return True
        if self.detect_collision(self.player, self.treasure):
            self.level += 0.5
            return True
        return False
