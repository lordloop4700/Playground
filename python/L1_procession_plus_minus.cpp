#include <string>
#include <vector>
#include <iostream>

using namespace std;

vector<vector<int>> solution(vector<vector<int>> arr1, vector<vector<int>> arr2) {
	vector<vector<int>> answer;
	vector<int> check;

	for (int i = 0; i < arr1.size(); i++) {
		for (int j = 0; j < arr1[0].size(); j++) {
			check.push_back(arr1[i][j] + arr2[i][j]);
		}
		answer.push_back(check);
	}

	return answer;
}

ostream& operator<<(ostream& os, const vector<vector<int>>& answer) {
	for (int i = 0; i < answer.size(); i++) {
		os << '[';
		for (int j = 0; j < answer[0].size(); j++) {
			os << answer[i][j];
		}
	}

	return os;
}

int main() {

	cout << solution({ { 1, 2 },{ 2, 3 } }, { { 3,4 },{ 5,6 } }) << endl;
}