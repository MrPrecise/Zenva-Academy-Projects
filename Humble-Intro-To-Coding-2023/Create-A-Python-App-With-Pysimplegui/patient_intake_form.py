import PySimpleGUI as sg
import data_function

# Reads the 6 inputs from our form window and tries to create a patient with them


def read_input_values(values):
    first_name = values["FIRST_NAME"]
    last_name = values["LAST_NAME"]
    date_of_birth = values["DATE_OF_BIRTH"]
    height = values["HEIGHT"]
    weight = values["WEIGHT"]
    is_taking_medication = values["IS_TAKING_MEDICATION"]
    could_create_patient = data_function.try_to_create_patient(
        first_name, last_name, date_of_birth, height, weight, is_taking_medication)
    return could_create_patient

# Creates the layout


def create_layout():
    layout = [
        [sg.Text("First name", expand_x=True),
         sg.Input(key="FIRST_NAME", size=(30))],
        [sg.Text("Last name", expand_x=True),
         sg.Input(key="LAST_NAME", size=(30))],
        [sg.Text("Date of birth", expand_x=True), sg.CalendarButton("Select date", format='%Y/%m/%d', target="DATE_OF_BIRTH"),
         sg.Input(key="DATE_OF_BIRTH", size=(30))],
        [sg.Text("Height", expand_x=True), sg.Input(key="HEIGHT", size=(30))],
        [sg.Text("Weight", expand_x=True), sg.Input(key="WEIGHT", size=(30))],
        [sg.Text("Is taking medication?", expand_x=True),
         sg.Checkbox("Yes", key="IS_TAKING_MEDICATION")],
        [sg.Cancel(), sg.Button("Save")]
    ]

    # Wrap the layout in a column with right justification
    return [[sg.Column(layout, justification='right', element_justification='right')]]
# Creates the patient intake window, displays it, and listens for events


def display_intake_form():
    patient_intake_layout = create_layout()
    patient_intake_window = sg.Window(
        "New Patient Form", patient_intake_layout)
    was_save_successful = False

    while True:
        event, values = patient_intake_window.read()
        if event == sg.WIN_CLOSED or event == "Cancel":
            break
        elif event == "Save":
            was_save_successful = read_input_values(values)
            if was_save_successful:
                print("Patient saved")
                break
            else:
                # Prints out the error message, but does NOT break the while loop
                print("Could not save patient, invalid input(s)")
    patient_intake_window.close()
    return was_save_successful
