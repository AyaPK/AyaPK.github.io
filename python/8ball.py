from tkinter import *
from random import randint

window = tk()

label(window, text="Ask a question!").grid(row=1, column=1)
label(window, text="Add an answer!").grid(row=2, column=1)

mainloop()