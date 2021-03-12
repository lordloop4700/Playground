def solution(board, moves):
    answer = 0
    stack = []
    
    for i in range(len(moves)):
        check = moves[i] - 1;
        for j in range(len(board)):
            if board[j][check] != 0:
                if stack and stack[-1] == board[j][check]:
                    stack.pop()
                    answer += 2

                else:
                    stack.append(board[j][check])

                board[j][check] = 0
                break;
                
    return answer


board = [[0, 0, 0, 0, 0], [0, 0, 1, 0, 3], [0, 2, 5, 0, 1], [4, 2, 4, 4, 2], [3, 5, 1, 3, 1]]
moves = [1, 5, 3, 5, 1, 2, 1, 4]

print(solution(board, moves))