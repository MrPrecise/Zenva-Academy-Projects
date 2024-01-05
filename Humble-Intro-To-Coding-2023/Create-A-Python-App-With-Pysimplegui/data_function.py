from patient import Patient
from datetime import datetime

# Dummy Data
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
