#include <string>
#include <vector>
#include <iostream>
#include <algorithm>
#include <iterator>

using namespace std;

vector<int> solution(vector<int> answers) {
	vector<int> answer;
	vector<int> p1 = { 1, 2, 3, 4, 5 };
	vector<int> p2 = { 2, 1, 2, 3, 2, 4, 2, 5 };
	vector<int> p3 = { 3, 3, 1, 1, 2, 2, 4, 4, 5, 5 };
	int temp[] = { 0, 0, 0 };

	for (int i = 0; i < answers.size(); i++) {
		int count1 = i % p1.size();
		int count2 = i % p2.size();
		int count3 = i % p3.size();

		if (answers[i] == p1[count1]) {
			temp[0]++;
		}
		if (answers[i] == p2[count2]) {
			temp[1]++;
		}
		if (answers[i] == p3[count3]) {
			temp[2]++;
		}
	}

	int winner = temp[0];
	for (int value : temp) {
		if (winner < value) {
			winner = value;
		}
	}

	for (int i = 0; i < 3; i++) {
		if (winner == temp[i]) {
			answer.push_back(i + 1);
		}
	}

	return answer;
}

int main() {

	vector<int> num = { 1,3,2,4, 2 };
	vector<int> answer;

	answer = solution(num);
	
	copy(answer.begin(), answer.end(), std::ostream_iterator<int>(cout, " "));

	return 0;

}