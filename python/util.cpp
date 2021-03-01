#include "util.h"
using namespace utility;

Util::Util(){};

Util::Util(const Util&){};

Util::~Util(){};

void Util::PushQue(std::string path){
    m_que_.push(path);
}

void Util::PopQue(){
    m_que_.pop();
}

//std::m_que_ue Util::EmptyCheck(){
//    return m_que_.empty();
//}

void Util::PrintQue(){
    while(!m_que_.empty()){
        std::cout << m_que_.front() << std::endl;
        m_que_.pop();
    }
}
