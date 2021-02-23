#include <iostream>
#include <string>
#include <vector>
#include <queue>

using namespace std;

/*
	최고 반복은 뭐로 설정을 해야 하는가? 다리를 다 지난 트럭의 수가 처음과 같게 하거나, !대기중인 트럭.empty() && !건너는 트럭.empty(), 
	bridge의 최고 무게에 넘었는지 안넘었는지 확인
	트럭이 다 건넜는지 확인
	시간 세야함

*/

int solution(int bridge_length, int weight, vector<int> truck_weights) {
	int answer = 0;
	queue<int> bridge;
	queue<int> crossbridge;
	int truck_count = truck_weights.size();

	while (crossbridge.size() == truck_count) {

		for (int i = 0; i < bridge_length; i++) {
			int bridge_weight;
			for (int j = 0; j < bridge.size(); j++) {
				bridge_weight += j;
			}
			if (truck_weights.front() + bridge_weight <= weight) {
				bridge.push(truck_weights.front());
				truck_weights.erase(truck_weights.begin());
			}
			else {
				crossbridge.push(bridge.front());
				bridge.pop();
			}
		}
		//끝나면 bridge에서 crossbridge로 옮겨야함
	}
	

	return answer;
}

int main() {
	int bridge_length = 2;
	int weight = 10;
	vector<int> truck = { 7, 4, 5, 6 };

	cout << solution(bridge_length, weight, truck) << endl;

	return 0;
}