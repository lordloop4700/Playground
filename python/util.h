#ifndef UTIL_H_
#define UTIL_H_

//사용자에게 폴더(경로)를 선택받는 클래스(queue에 경로를 차곡 차곡 넣어두기)
//유틸을 위해 출력해줄 클래스(알고리즘과 반복자)
//template 작성

#include <iostream>
#include <queue>
#include <iterator>
#include <algorithm>
#include <string>

namespace utility{
    class Util{
        private:
            std::queue<std::string> m_que_;
        public:
            Util();
            Util(const Util&);
            ~Util();

            void PushQue(std::string path);
            void PopQue();
            void PrintQue();
            //std::queue EmptyCheck();
    };
}


#endif