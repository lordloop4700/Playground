//input 에서 사용 가능한 속성
<StyledTextInput value={name} onChangeText={text => setName(text)} placeholder="name" ref={refName} returnKeyType="next" onSubmitEditing={() => refEmail.current.focus()} />