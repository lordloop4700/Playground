class BigNumberError(Exception):
    def __init__(self, msg):
        self.msg = msg

    def __str__(self):
        return self.msg

try:
    test1 = int(input())
    test2 = int(input())
    if test1 >= 10 or test2 >= 10:
        raise BigNumberError("입력값: {0}, {1}".format(test1, test2))

except ValueError:
    print("잘못된 값을 입력")

except BigNumberError:
    print("에러")
    print(BigNumberError)
finally:
    print("무조건 finally구문은 실행된다")