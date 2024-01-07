# importing Pygame to our project
import pygame

# initializing the Pygame library
pygame.init()


# Initilzise Clock
game_clock = pygame.time.Clock()


# Game code goes here!
# For example: a game loop that prints a message to the console
def run_game_loop():
    while True:
        # Handle events
        events = pygame.event.get()

        # Loops for all occurring events
        for event in events:
            # Checks if any of them is the QUIT event
            if event.type == pygame.QUIT:
                print("Quit")
                # Breaks the game loop by exiting the whole function
                exitgame()

        # Values for gamewindow width / height
        width = 800
        height = 800

        # Creating game windod with width / height variable
        game_window = pygame.display.set_mode((width, height))

        white_colour = (255, 255, 255)
        game_window.fill(white_colour)

        pygame.display.update()
        game_clock.tick(60)


def exitgame():
    # Closing Pygame and our application
    pygame.quit()
    quit()


run_game_loop()
