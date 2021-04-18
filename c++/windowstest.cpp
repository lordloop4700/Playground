#include <iostream>
#include <Windows.h>
#include <time.h>

using namespace std;

class Circle {
	int radius;
public:
	void setRadius(int radius);
	double getArea();
};

void Circle::setRadius(int radius) {
	this->radius = radius;
}

double Circle::getArea() {
	return radius * radius * 3.14;
}

int main() {
	srand(time(NULL));

	int arr_length = 0;
	cout << "생성할 원의 개수: ";
	cin >> arr_length;

	Circle * cir_array = new Circle[arr_length];

	for (int i = 0; i < arr_length; i++) {
		int rad = rand() % 100 + 1;
		cir_array[i].setRadius(rad);

		cout << "원 " << i + 1 << "의 반지름 >> " << rad << endl;
	}

	int answer = 0;

	for (int i = 0; i < arr_length; i++) {
		if (cir_array[i].getArea() > 100) {
			answer++;
		}
	}

	delete[] cir_array;

	cout << "면적이 100보다 큰 원은 " << answer << "개 입니다" << endl;

	return 0;
}