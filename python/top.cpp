#include <string>
#include <vector>

using namespace std;

vector<int> solution(vector<int> heights) {
	vector<int> answer;
	int check = 0;

	answer.push_back(0);

	for (int i = 1; i < heights.size(); i++) {
		check = heights[i];
		for (int j = i; j > 0; j--) {
			if (heights[j - 1] > check) {
				check = heights[j - 1];
				answer.push_back(j);
				break;
			}
			if ((j - 1) == 0) {
				answer.push_back(0);
			}
		}
	}
	return answer;
}

/*
#include <string>
#include <vector>

using namespace std;

vector<int> solution(vector<int> heights) {
vector<int> answer;
int check = 0;
int count = 0;
int location = 0;

answer.push_back(0);

for (int i = 1; i < heights.size(); i++) {
check = heights[i];
for (int j = i; j > 0; j--) {
if (heights[j - 1] > check) {
check = heights[j - 1];
location = j;
++count;
break;
}
else if (heights[j - 1] < check) {
continue;
}
else if (heights[j - 1] == check) {
continue;
}
}

if (count > 0) {
answer.push_back(location);
}
else {
answer.push_back(0);
}

count = 0;
location = 0;

}
return answer;
}
*/