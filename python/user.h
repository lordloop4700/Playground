#ifndef USER_H_
#define USER_H_

#include <string>
#include <iostream>
using std::string;

namespace UserInfo{

    class User{
        public:
            User(string name, string nick_name, string password) : perm(3), level(1), name(name), nick_name(nick_name), password(password){};

            void SetUserName(string name);
            void SetUserNickName(string nick_name);

            string GetUserName() const;
            string GetUserNickName() const;
            unsigned int GetPerm() const;
            unsigned int GetLevel() const;            

        private:
            unsigned int perm;
            unsigned int level;
            string name;
            string nick_name;
            string password; 
    };
    
}

#endif