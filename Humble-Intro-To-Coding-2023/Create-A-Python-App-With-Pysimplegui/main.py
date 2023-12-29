from patient import Patient
from datetime import datetime

patients = [
    Patient("1 User", "Test", datetime(1990, 5, 6), 180, 85.3, True),
    Patient("2 User", "Test", datetime(1991, 4, 3), 169, 75, True),
    Patient("3 User", "Test", datetime(1992, 1, 2), 175, 80.3, True)]

print(patients[0].convert_value_to_strings())
