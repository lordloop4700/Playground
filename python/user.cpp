#include "user.h"
#include <iostream>

using namespace UserInfo;

void User::SetUserName(string name){
    this->name = name;
}

void User::SetUserNickName(string nick_name){
    this->nick_name = nick_name;
}

string User::GetUserName() const{
    return this->name;
}

string User::GetUserNickName() const{
    return this->nick_name;
}

unsigned int User::GetPerm() const{
    return this->perm;
}

unsigned int User::GetLevel() const{
    return this->level;
}