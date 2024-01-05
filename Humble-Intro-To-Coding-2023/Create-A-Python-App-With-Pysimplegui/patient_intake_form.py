import PySimpleGUI as sg

# Creates the layout


def create_layout():
    return [
        [sg.Text("First name"), sg.Input()],
        [sg.Text("Last name"), sg.Input()],
        [sg.Text("Date of birth"), sg.Input(),
         sg.CalendarButton("Select date")],
        [sg.Text("Height"), sg.Input()],
        [sg.Text("Weight"), sg.Input()],
        [sg.Text("Is taking medication?"), sg.Checkbox("Yes")],
        [sg.Cancel(), sg.Button("Save")]
    ]

# Creates the patient intake window, displays it, and listens for events


def display_intake_form():
    patient_intake_layout = create_layout()
    patient_intake_window = sg.Window(
        "New Patient Form", patient_intake_layout)

    while True:
        event, values = patient_intake_window.read()
        if event == sg.WIN_CLOSED or event == "Cancel":
            break
    patient_intake_window.close()
