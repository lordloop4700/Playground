//input 에서 사용 가능한 속성
<StyledTextInput value={name} onChangeText={text => setName(text)} placeholder="name" ref={refName} returnKeyType="next" onSubmitEditing={() => refEmail.current.focus()} />

//context는 어플리케이션 전체에서 알고 있어야 하는 로그인 상태를 관리하거나, 애플리케이션의 테마 혹은 설정 상태를 관리할 때 유용하게 쓰일수 있다

//네비게이션
npm install --save @react-navigation/native
expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
npm install @react-navigation/stack @react-navigation/bottom-tabs
//page192 로딩화면과 아이콘
//page282 헤더 감추기는 생략
//tabBarOptions에 대해서 잘 찾지 못함(책에 있는 내용이 안됨.)

//화면 다른곳을 눌렀을 때 키보드 포커스가 사라지는 코드
page333

//아이폰 노치 길이 확인
page347

//메인페이지 연결
page382

//설치 패키지 정리
npm install styled-components

npm install expo-app-loading