#include <string>
#include <vector>
#include <iostream>

using namespace std;

int solution(int num) {
	int answer = 0;

	for (int i = 0; num != 1; i++) {
		if (i >= 500) {
			answer = -1;
			break;
		}

		if ((num & 1) == 0) {
			num /= 2;
		}
		else {
			num = num * 3 + 1;
		}

		answer++;
	}

	return answer;
}

int main() {
	int n = 6;
	cout << solution(n) << endl;
}