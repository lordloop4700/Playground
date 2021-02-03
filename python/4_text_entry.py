from tkinter import *

root = Tk()
root.title("test")
root.geometry("640x480")

txt = Text(root, width=30, height=5)
txt.pack()

txt.insert(END, "글자를 입력하세요")

e = Entry(root, width=30)#한줄만 가능(여러줄이 안된다(enter가 안됨))
e.pack()

e.insert(END, "글자를 입력하세요")

def btncmd():
    print(txt.get("1.0", END)) #1은 라인 1부터 가져와라, 0은 컬럼기준으로 0번째 인덱스 부터 가져와라라는 뜻(사실상 고정이네)
    print(e.get())#entry는 .get만 해도 된다

    txt.delete("1.0", END)
    e.delete(0, END)

btn = Button(root, text="클릭", command=btncmd)
btn.pack()

root.mainloop()