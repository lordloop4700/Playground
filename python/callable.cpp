#include <iostream>

struct S {
	void operator()(int a, int b) { std::cout << "a + b = " << a + b << std::endl; }
};

int main() {
	S some_obj;

	some_obj(3, 5); //some_obj.operator()(3, 5)


	//lamda
	auto f = [](int a, int b) {std::cout << "a + b = " << a + b << std::endl; };
	f(3, 5);
}