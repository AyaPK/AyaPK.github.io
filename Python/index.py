from random import *
from tkinter import *
broken = False


answers = [
    "yes",
    "no",
    "maybe"
]

main = Tk()
main.title("8Ball")
main.geometry("500x500")


# generate answer
def generate():
    if broken == True:
        ans = Label(text="The Ball is broken and can't be used :(")
        ans.grid(row=2, column=1)
    else:
        num = randint(0, len(answers) - 1)
        answer = answers[num]
        ans = Label(text="You asked: " + q1.get())
        l3 = Label(text="The 8ball says... " + answer + "!!!")
        ans.grid(row=2, column=1)
        l3.grid(row=2, column=2)
def newAns():
    answers.append(q2.get())
    lnew = Label(text="new answer added: ")
    lnew.grid(row=4, column=1)
    lnew1 = Label(text=q2.get())
    lnew1.grid(row=4, column=2)
def listAns():
    lList = Label(text="The current available answers are: ")
    lList.grid(row=7, column=1)
    lList1 = Label(text=answers)
    lList1.grid(row=7, column=2)
def breakBall():
    broken = True

l1 = Label(text="Ask a question!")
l1.grid(row=1, column=1)
l2 = Label(text="Add a new answer!")
l2.grid(row=3, column=1)

q1 = Entry(main)
q1.grid(row=1, column=2)

q2 = Entry(main)
q2.grid(row=3, column=2)

b1 = Button(main, text="Ask!", command=generate).grid(row=1, column=3)
b2 = Button(main, text="Add new answer", command=newAns).grid(row=3, column=3)
b3 = Button(main, text="List answers", command=listAns).grid(row=5, column=2)
b4 = Button(main, text="Break the ball", command=breakBall).grid(row=5, column=3)


main.mainloop()