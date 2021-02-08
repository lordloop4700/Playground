from tkinter import *


root = Tk()
root.title("test")
root.geometry("640x480")

def create_new_file():
    print("새 파일을 만듭니다")

menu = Menu(root)

menu_file = Menu(menu, tearoff=0)
menu_file.add_command(label="New File", command=create_new_file)
menu_file.add_command(label="New Window")
menu_file.add_separator() #구분자
menu_file.add_command(label="Open File...")
menu_file.add_separator()
menu_file.add_command(label="Save All", state="disable")
menu_file.add_separator()
menu_file.add_command(label="exit", command=root.quit)

menu.add_cascade(label="File", menu=menu_file)

menu.add_cascade(label="Edit")

#language 메뉴 추가
menu_lang = Menu(menu, tearoff=0)
menu_lang.add_radiobutton(label="python")
menu_lang.add_radiobutton(label="java")
menu_lang.add_radiobutton(label="c++")
menu.add_cascade(label="Language", menu=menu_lang)

#view 메뉴
menu_view = Menu(menu, tearoff=0)
menu_view.add_checkbutton(label="show minimap")
menu.add_cascade(label="View", menu=menu_view)


root.config(menu=menu)

root.mainloop()