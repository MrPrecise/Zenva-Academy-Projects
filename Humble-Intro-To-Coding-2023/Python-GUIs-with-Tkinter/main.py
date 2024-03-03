from tkinter import *


class MyApp:
    def __init__(self, root):

        root.title("Cool Stuff")
        root.geometry("250x100")
        root.maxsize(1000, 800)

        label = Label(root, text="Testing out this")
        label.pack()


root = Tk()
MyApp(root)
root.mainloop()
