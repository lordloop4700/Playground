import tkinter.ttk as ttk
from tkinter import *

root = Tk()
root.title("test")
root.geometry("640x480")

values = [str(i) + "일" for i in range(1, 32)]
combobox = ttk.Combobox(root, height=5, values=values)
combobox.pack()
combobox.set("카드 결제일")

readonbox = ttk.Combobox(root, height=10, values=values, state="readonly")
readonbox.current(0)#0번째 인덱스 값 선택
readonbox.pack()


def btncmd():
    print(combobox.get())
    print(readonbox.get())

btn = Button(root, text="클릭", command=btncmd)
btn.pack()

root.mainloop()