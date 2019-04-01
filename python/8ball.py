from tkinter import *
from random import randint

window = Tk()

topArea = Frame(window)
topArea.pack()
bottomArea = Frame(window)
bottomArea.pack(side=BOTTOM)

button1 = Button(topArea,text="ask!",fg="grey")
button2 = Button(topArea,text="ask!!",fg="green")
button3 = Button(topArea,text="ask!!!",fg="blue")
button4 = Button(bottomArea,text="ask!!!",fg="red")

button1.pack(side=LEFT)
button2.pack(side=LEFT)
button3.pack(side=LEFT)
button4.pack()

window.mainloop()

answers = [
    "yes",
    "no",
    "maybe",
]

def ask(question):
    number = randint(0, len(answers)-1)
    print("You asked "+question+" and the 8ball says: "+answers[number])

def addAnswer(answer):
    answers.append(answer)
    print("The answer '"+answer+"' has been added!")

def listAnswers():
    print("The current available answers are: ", answers) 