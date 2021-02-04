from tkinter import *

root = Tk()
root.title("test")
root.geometry("640x480")

listbox = Listbox(root, selectmode="extended", height=0)
#listbox = Listbox(root, selectmode="single", height=0) 리스트를 하나만 선택 가능함
listbox.insert(0, "사과")
listbox.insert(1, "딸기")
listbox.insert(2, "바나나")
listbox.insert(END, "수박")
listbox.insert(END, "포도")
listbox.pack()

def btncmd():
    #listbox.delete(END) 삭제
    #print("리스트 목록 갯수", listbox.size())
    #print("1번째 부터 3번째까지의 목록: ", listbox.get(0, 2))
    #print("선택된 항목", listbox.curselection()) 인덱스 값으로 반환(위치로 반환)
    pass


btn = Button(root, text="클릭", command=btncmd)
btn.pack()


root.mainloop()