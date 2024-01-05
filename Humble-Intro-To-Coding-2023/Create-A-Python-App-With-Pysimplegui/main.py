import PySimpleGUI as sg
import data_function

# Patients table column titles
table_headings = [
    "First name", "Last name", "Date of birth", "Height", "Weight", "Is taking medication?"
]

# Patients table rows data
table_data = data_function.convert_patients_to_table_data()

# Patients table layout
patients_window_layout = [
    [sg.Table(headings=table_headings, values=table_data)]
]

# Displays our table
patients_window = sg.Window('Patients List', patients_window_layout)

while True:
    event, values = patients_window.read()
    if event == sg.WIN_CLOSED:
        break
# Closes the window
patients_window.close()
