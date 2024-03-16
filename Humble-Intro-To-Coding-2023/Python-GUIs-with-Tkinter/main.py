from tkinter import *
import tkinter as tk


class MyApp:
    def __init__(self, root):

        # Root configuration
        root.title("Cool Stuff")
        frame = Frame(
            root,
            borderwidth=10,
            relief="sunken"
        )
        frame.grid(column=1, row=1, sticky=(N, E, S, W))
        root.columnconfigure(1, weight=1)
        root.rowconfigure(1, weight=1)

        # Label variable and configuration for the page
        self.label_text = StringVar()
        self.label_text.set("Enter Full Name")
        label = Label(frame)

        label.configure(
            font=("Courier", 20),
            textvariable=self.label_text
        )

        # Input box and variable for the page
        self.entry_text = StringVar()
        entry = Entry(
            frame,
            textvariable=self.entry_text
        )

        # Button on the page
        button = Button(
            frame,
            text="Confirm",
            command=self.button_pressed
        )

        # List of Greetings
        self.list_item_strings = ["Hey", "Hi", "Hello", "Greetings"]
        list_items = StringVar(value=self.list_item_strings)
        listbox = Listbox(
            frame,
            listvariable=list_items,
            height=5
        )

        listbox.bind("<<ListboxSelect>>",
                     lambda s: self.select_item(listbox.curselection()))

        # Everything packed in order

    def button_pressed(self):
        self.label_text.set(self.entry_text.get())

    def select_item(self, index):
        selected_item = self.list_item_strings[index[0]]
        print(selected_item)


root = Tk()
MyApp(root)
root.mainloop()
