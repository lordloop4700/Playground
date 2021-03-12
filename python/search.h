#ifndef SEARCH_H_
#define SEARCH_H_

//searching algorithm
//큐에서 하나씩 빼와서 사용

#include <algorithm>
#include <iostream>
#include <fstream>
#include <string>
#include <Windows.h>
#include <vector>
#include <iterator>
#include <list>

namespace file{

    class File{
        protected:
            std::string m_filepath_;
        public:
            ~File();
            
            void SetFilePath();
            std::string RetFilePath();

    };

    class FileSearch : protected File{
        private:
            std::vector<std::string> m_subdir_path_;
            std::vector<std::string> m_vlist_;

        public:
            FileSearch();
            FileSearch(const FileSearch&);
            ~FileSearch();

            void SetSubDirPath(std::string);
            std::string GetTxtFile(std::string sPath, bool checksubdir);
            void SearchString(std::string);
            void PrintFindList() const;
            
    };
}

#endif