from tkinter import *


class MyApp:
    def __init__(self, root):

        root.title("Cool Stuff")
        root.geometry("500x400")
        root.maxsize(1000, 800)


root = Tk()
MyApp(root)
root.mainloop()
