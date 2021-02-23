#include <iostream>
#include <string>
#include <vector>
#include <queue>

using namespace std;

/*
	�ְ� �ݺ��� ���� ������ �ؾ� �ϴ°�? �ٸ��� �� ���� Ʈ���� ���� ó���� ���� �ϰų�, !������� Ʈ��.empty() && !�ǳʴ� Ʈ��.empty(), 
	bridge�� �ְ� ���Կ� �Ѿ����� �ȳѾ����� Ȯ��
	Ʈ���� �� �ǳԴ��� Ȯ��
	�ð� ������

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
		//������ bridge���� crossbridge�� �Űܾ���
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