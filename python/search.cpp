#include "search.h"
using namespace file;

FileSearch::FileSearch(){};

FileSearch::FileSearch(const FileSearch&){};

FileSearch::~FileSearch(){};

std::string FileSearch::GetFilePath(){
    return m_folderpath_;
}

void FileSearch::SetFolderPath(std::string folderpath){
    m_folderpath_ = folderpath;
}

/*
bool FileSearch::SetSubFolder(){
    std::string dir = m_folderpath_;
    std::vector<std::string> subfolder_paths;
    //std::unique_ptr<std::vector> up = std::make_

    try{//사실상 표준이 아니라고 봐야하는 듯 따라서 나중에 다시 c++14이하의 표준으로 변경(결국 C함수로 해결하거나, API를 사용해야 할듯)
        for(auto& p : std::experimental::filesystem::directory_iterator(dir)){ //하위 디렉터리 뿐만아니라 모든 파일 명을 다 가져옴
            subfolder_paths.push_back(p.path().string());
        }

        std::copy(subfolder_paths.begin(), subfolder_paths.end(), m_subfolder_path_);
    }
    catch(...){
        return false;
    }
    
    return true;
}
*/

std::string FileSearch::GetTxtFile(std::string sPath, bool checksubdir){ //해당 폴더에서 txt파일을 찾기
	std::string sTmp = sPath + std::string("\\*.txt");
	WIN32_FIND_DATA fd;
	HANDLE hFind = FindFirstFile(sTmp.c_str(), &fd); //여기 오류나는 거는 multi byte 설정을 해주면 된다.
	//std::cout << sTmp << std::endl;

	if (INVALID_HANDLE_VALUE != hFind) { //핸들이 잘 생성되었는지 확인 //이 코드는 무조건 이름 순서로 정렬되기 때문에, 상위 폴더에 폴더이름보다 이름순서가 더 빠른 파일이 있다면, 그 파일 부터 검색됨.
		do {
			if (fd.dwFileAttributes == FILE_ATTRIBUTE_DIRECTORY) {
				if (checksubdir) {
					if (fd.cFileName[0] != '.') {
						sTmp = sPath + std::string("\\") + std::string(fd.cFileName);
						GetTxtFile(sTmp, checksubdir);
					}
				}
			}
			else {
				sTmp = sPath + std::string("\\") + std::string(fd.cFileName);
				m_vlist_.push_back(sTmp);
			}
		} while (FindNextFile(hFind, &fd));
		FindClose(hFind);
	}
}

void FileSearch::SearchString(std::string searchthing){
    std::ifstream ifs;
    std::string fileline;
    std::string::size_type check;

    for(auto filename : m_vlist_){
        ifs.open(filename);
        do{
            std::getline(ifs, fileline);
            check = fileline.find(searchthing, 0);

            if(check != std::string::npos){
                m_findlist_.push_back(filename);
            }

        }while(!ifs.eof());
    }
}

void FileSearch::PrintFindList() const{
    for(auto filename : m_findlist_){
        std::cout << filename << std::endl;
    }
}