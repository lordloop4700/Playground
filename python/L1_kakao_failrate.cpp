#include <string>
#include <vector>
#include <algorithm>
#include <iostream>

using namespace std;

vector<int> solution(int N, vector<int> stages) {
	vector<int> answer;
	int user = stages.size();
	vector<double> stages_failrate;

	sort(stages.begin(), stages.end(), less<int>());

	for (int i = 1; i < N; i++) {
		int count = 0;
		for (int j = 0; j < user; j++) {
			if (stages[j] == i) count++;
			else break;
		}

		stages_failrate.push_back((double)count);
	}

	for (int i = 0; i < N; i++) {
		double save = stages_failrate[i];

		stages_failrate[i] /= user;
		user -= save;
	}

	for (int i = 0; i < N; i++) {
		double check = *min_element(stages_failrate.begin(), stages_failrate.end());

		for (int j = 0; j < N; j++) {
			if (stages_failrate[j] == check) {
				answer.push_back(j + 1);
				stages_failrate[j] = N + 1;
				break;
			}
		}
	}



	return answer;
}

int main() {

	int n = 5;
	vector<int> stages = { 2, 1, 2, 6, 2, 4, 3, 3 };
	vector<int> check;

	check = solution(n, stages);
	for (int i = 0; i < check.size(); i++) {
		cout << check[i] << endl;
	}

	return 0;
}