from tkinter import *
import tkinter as tk


class ToDoItem:
    def __init__(self, name, description):
        self.name = name
        self.description = description


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

        self.items = [
            ToDoItem("A", "1"),
            ToDoItem("B", "2"),
            ToDoItem("C", "3")
        ]
        self.to_do_names = StringVar(value=list(
            map(lambda x: x.name, self.items)))
        item_list = Listbox(frame, listvariable=self.to_do_names)
        item_list.bind("<<ListboxSelect>>",
                       lambda s: self.select_item(item_list.curselection()))
        item_list.grid(column=1, row=2, sticky=(E, W), rowspan=5)

        # Label variable and configuration for the page

        label = Label(frame)

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
        listbox = Listbox(
            frame,
            listvariable=self.to_do_names
        )

    def button_pressed(self):
        self.label_text.set(self.entry_text.get())

    def select_item(self, index):
        selected_item = self.to_do_names[index[0]]
        print("selected_item")


root = Tk()
MyApp(root)
root.mainloop()
