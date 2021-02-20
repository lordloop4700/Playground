#include <iostream>


int main() {
	char str[] = "qwertyRasdzxc*asdcxznasdcxziasdcxznasdcxzgasdcxz_asdcxzyasdcxz0asdcxzuasdcxzRasdcxz_asdcxzcasdcxzoasdcxzmasdcxzpasdcxz*asdcxztasdcxz3asdcxzrasdcxz_asdcxzEasdcxzoasdcxz_asdcxzhasdcxzoasdcxzuasdcxzrasdcxz!asdcxz!##$@!^";
	char v24 = 0;

	int v5 = 0;
	char* v6 = str;
	int v7 = 0;

	do {
		v7 = (int)(v6 + 7);
		v6 += 6;
		if (v5)
			v6 = (char *)v7;
		*(&v24 + v5++) = *v6;
	} while (v5 <= 31);

	std::cout << v24;
}