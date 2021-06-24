//input 에서 사용 가능한 속성
<StyledTextInput value={name} onChangeText={text => setName(text)} placeholder="name" ref={refName} returnKeyType="next" onSubmitEditing={() => refEmail.current.focus()} />

//context는 어플리케이션 전체에서 알고 있어야 하는 로그인 상태를 관리하거나, 애플리케이션의 테마 혹은 설정 상태를 관리할 때 유용하게 쓰일수 있다