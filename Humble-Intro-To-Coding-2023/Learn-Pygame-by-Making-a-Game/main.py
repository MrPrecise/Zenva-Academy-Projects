# importing Pygame to our project
import pygame

# initializing the Pygame library
pygame.init()

# Values for gamewindow width / height and white RGB color
width = 800
height = 800
white_colour = (255, 255, 255)

# Initilzise Game Clock and Window
game_clock = pygame.time.Clock()
game_window = pygame.display.set_mode((width, height))

# Added Background Image and Scaling it
background_image = pygame.image.load("assets/background.png")
background = pygame.transform.scale(background_image, (width, height))

# Added Treasure Image and Scaling it
treasure_image = pygame.image.load("assets/treasure.png")
treasure = pygame.transform.scale(treasure_image, (50, 50))


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

        # Creating game windod with width / height variable

        game_window.fill(white_colour)
        game_window.blit(background, (0, 0))
        game_window.blit(treasure, (375, 50))
        pygame.display.update()
        game_clock.tick(60)


def exitgame():
    # Closing Pygame and our application
    pygame.quit()
    quit()


run_game_loop()
