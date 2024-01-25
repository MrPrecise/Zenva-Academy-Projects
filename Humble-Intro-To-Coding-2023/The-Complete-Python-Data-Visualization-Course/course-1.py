import matplotlib.pyplot as plt
import pickle

with open('Data/fruit-sales.pickle', 'rb') as f:
    data = pickle.load(f)

fruit, num_sold = zip(*data)

bar_coords = range(len(fruit))

print(bar_coords)
