import PySimpleGUI as sg
import data_function
import patient_intake_form

# Patients table column titles
table_headings = [
    "First name", "Last name", "Date of birth", "Height", "Weight", "Is taking medication?"
]
# Patients table rows data
table_data = data_function.convert_patients_to_table_data()

# Handler function for the 'Add new patient' button


def press_add_patient_button(patients_window):
    was_save_successful = patient_intake_form.display_intake_form()
    if was_save_successful:
        table_data = data_function.convert_patients_to_table_data()
        patients_window["PATIENTS_TABLE"].update(values=table_data)


# Patients table layout
patients_window_layout = [
    [sg.Text("All Patient Data"), sg.Button("Add new patient")],
    [sg.Table(headings=table_headings, values=table_data, key="PATIENTS_TABLE")]
]

# Displays our table
patients_window = sg.Window("Patients List", patients_window_layout)

# Listening for events
while True:
    event, values = patients_window.read()
    if event == sg.WIN_CLOSED:
        break
    elif event == "Add new patient":
        press_add_patient_button(patients_window)
# Closes the window
patients_window.close()
