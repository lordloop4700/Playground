#include <string>
#include <vector>
#include <bitset>
#include <iostream>

using namespace std;

vector<string> solution(int n, vector<int> arr1, vector<int> arr2) {
	vector<string> answer;
	vector<int> arr_wall;

	for (int i = 0; i < n; i++) {
		arr_wall.push_back(arr1[i] | arr2[i]);
	}

	for (int i = 0; i < n; i++) {
		string str = "";

		for (int j = 0; j < n; j++) {
			if (arr_wall[i] % 2 == 1) {
				str = "#" + str;
			}
			else {
				str = " " + str;
			}

			arr_wall[i] /= 2;
		}

		answer.push_back(str);
	}

	return answer;
}

int main() {

	vector<int> arr1 = { 9, 20, 28, 18, 11 };
	vector<int> arr2 = { 30, 1, 21, 17, 28 };

	vector<string> answer;
	answer = solution(5, arr1, arr2);

	for (int i = 0; i < 5; i++) {
		cout << answer[i] << endl;
	}
}