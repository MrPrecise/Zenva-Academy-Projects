# importing dependencies to our project
import pygame
from game import Game

# initializing the Pygame library
pygame.init()
game = Game()
pygame.display.set_caption('HAN FLYR!!!')
icon = pygame.image.load("assets/dragon.png")
pygame.display.set_icon(icon)
game.run_game_loop()
