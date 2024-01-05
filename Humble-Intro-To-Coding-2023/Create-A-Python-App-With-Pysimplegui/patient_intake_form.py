import PySimpleGUI as sg

# Reads the 6 inputs from our form window


def read_input_values(values):
    first_name = values["FIRST_NAME"]
    last_name = values["LAST_NAME"]
    date_of_birth = values["DATE_OF_BIRTH"]
    height = values["HEIGHT"]
    weight = values["WEIGHT"]
    is_taking_medication = values["IS_TAKING_MEDICATION"]
    print(first_name)
    print(last_name)
    print(date_of_birth)
    print(height)
    print(weight)
    print(is_taking_medication)

# Creates the layout


def create_layout():
    return [
        [sg.Text("First name"), sg.Input(key="FIRST_NAME")],
        [sg.Text("Last name"), sg.Input(key="LAST_NAME")],
        [sg.Text("Date of birth"), sg.Input(key="DATE_OF_BIRTH"),
         sg.CalendarButton("Select date")],
        [sg.Text("Height"), sg.Input(key="HEIGHT")],
        [sg.Text("Weight"), sg.Input(key="WEIGHT")],
        [sg.Text("Is taking medication?"), sg.Checkbox(
            "Yes", key="IS_TAKING_MEDICATION")],
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
        # If user presses the Save button, we can the read inputs function
        elif event == "Save":
            read_input_values(values)
            break
    patient_intake_window.close()
