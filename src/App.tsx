import React, {
  useState,
  useEffect,
  useMemo,
  useCallback,
  useRef,
  useContext,
  useReducer,
  useImperativeHandle,
} from 'react';

interface User {
  name: string
  email: string
  avatar_url: string
}

function App() {
  const inputRef = useRef<HTMLInputElement>(null)
  const [users, setUsers] = useState<[User]>()
  
  const names = useMemo(() => users?.map(user => user.name).join(', ') || '', [users])

  const greeting = useCallback((user: User) => alert(`Hello ${user.name}`), [])

  function focusOnInput() {
    inputRef.current?.focus()
  }

  return (
    <form action="">
      <input type="text" ref={inputRef} />
    </form>
  );
}

export default App;
