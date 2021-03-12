#include <string>
#include <vector>
#include <algorithm>
#include <iostream>

using namespace std;

int solution(int n) {
	int answer = 0;
	string check = "";

	for (int i = n; i > 0;) {
		check = to_string(i % 3) + check;
		i /= 3;
	}

	int cube = 1;

	for (int i = 0; i < check.length(); i++) {
		answer += (check[i] - '0') * cube;
		cube *= 3;
	}

	return answer;
}


int main() {

	int num = 45;

	solution(num);

	return 0;
}