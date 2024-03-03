from tkinter import *


class MyApp:
    def __init__(self, root):

        root.title("Cool Stuff")
        root.geometry("250x100")
        root.maxsize(1000, 800)

        self.label_text = StringVar()
        self.label_text.set("Enter Full Name")
        label = Label(root)
        label.pack()
        label.configure(
            font=("Courier", 20),
            textvariable=self.label_text
        )

        self.entry_text = StringVar()
        entry = Entry(
            root,
            textvariable=self.entry_text
        )
        entry.pack()

        button = Button(
            root,
            text="Confirm",
            command=self.button_pressed
        )
        button.pack()

    def button_pressed(self):
        self.label_text.set(self.entry_text.get())


root = Tk()
MyApp(root)
root.mainloop()
