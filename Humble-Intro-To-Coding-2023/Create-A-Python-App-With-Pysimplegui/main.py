from patient import Patient
from datetime import datetime
import PySimpleGUI as sg

patients = [
    Patient("1 User", "Test", datetime(1990, 5, 6), 180, 85.3, True),
    Patient("2 User", "Test", datetime(1991, 4, 3), 169, 75, True),
    Patient("3 User", "Test", datetime(1992, 1, 2), 175, 80.3, True)]


# Returns a list with all patients' info
def convert_patients_to_table_data():
    patients_data = []
    for patient in patients:
        strings = patient.convert_value_to_strings()
        patients_data.append(strings)
    return patients_data


# Creating the layout
layout = [
    [sg.Text('X'), sg.Text('O'), sg.Text('X')],
    [sg.Text('O'), sg.Text('X'), sg.Text('O')],
    [sg.Text('O'), sg.Text('O'), sg.Text('X')]
]

# Creating the window
window = sg.Window('Tic Tac Toe', layout)

# Responding to user events
while True:
    event, values = window.read()
    if event == sg.WIN_CLOSED:
        break

# Closing the window
window.close()
