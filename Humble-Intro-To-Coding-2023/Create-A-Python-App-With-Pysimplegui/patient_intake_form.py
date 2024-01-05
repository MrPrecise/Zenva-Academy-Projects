import PySimpleGUI as sg

# Creates the patient intake form layout
patient_intake_layout = [
    [sg.Text("First name"), sg.Input()],
    [sg.Text("Last name"), sg.Input()],
    [sg.Text("Date of birth"), sg.Input(), sg.CalendarButton("Select date")],
    [sg.Text("Height"), sg.Input()],
    [sg.Text("Weight"), sg.Input()],
    [sg.Text("Is taking medication?"), sg.Checkbox("Yes")],
    [sg.Cancel(), sg.Button("Save")],
]

# Displays the patient intake form window


def display_intake_form():
    patient_intake_window = sg.Window(
        "New Patient Form", patient_intake_layout)
