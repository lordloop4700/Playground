#include <string>
#include <vector>
#include <algorithm>

#include <iostream>

using namespace std;

vector<int> solution(vector<int> array, vector<vector<int>> commands) {
	vector<int> answer;

	for (int i = 0; i < commands.size(); i++) {
		vector<int> test;
		copy(array.begin() + commands[i][0] - 1, array.begin() + commands[i][1], back_inserter(test));
		sort(test.begin(), test.end(), less<int>());

		answer.push_back(test[commands[i][2] - 1]);
	}

	return answer;
}

int main() {

	vector<int> array = { 1, 5, 2, 6, 3, 7, 4 };
	vector<vector<int> > test = { {2,5,3}, { 4,4,1}, {1,7,3} };
	vector<int> answer;

	answer = solution(array, test);

	for (int i = 0; i < test.size(); i++) {
		cout << answer[i] << endl;
	}


}