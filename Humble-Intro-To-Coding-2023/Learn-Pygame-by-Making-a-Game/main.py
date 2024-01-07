# importing Pygame to our project
import pygame

# initializing the Pygame library
pygame.init()


def exitgame():
    # Closing Pygame and our application
    pygame.quit()
    quit()


# Game code goes here!
# For example: a game loop that prints a message to the console
while True:
    print("Pygame is running!")

    # Values for gamewindow width / height
    width = 800
    height = 800

    # Creating game windod with width / height variable
    game_window = pygame.display.set_mode((width, height))

    white_colour = (255, 255, 255)
    game_window.fill(white_colour)

    pygame.display.update()

    pygame.time.delay(5000)
    if (True):
        print("Exiting")
        exitgame()
