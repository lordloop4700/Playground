#include <string>
#include <vector>
#include <stack>

using namespace std;

int solution(string arrangement) {
	int answer = 0;
	stack<char> bar_count;

	for (int i = 0; i < arrangement.length(); i++) {
		if (arrangement[i] == '(') {
			bar_count.push('(');
		}
		else {
			bar_count.pop();
			if (arrangement[i - 1] == '(') {
				answer += bar_count.size();
			}
			else {
				answer++;
			}
		}
	}
	return answer;
}

int main() {

	string str = "()(((()())(())()))(())";

	cout << solution(str) << endl;

}