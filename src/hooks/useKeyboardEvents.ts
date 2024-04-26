import { useEffect } from 'react'

const useKeyboardEvents = (keyHandlers: { [key: string]: () => void }) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const keyCombination = (event.altKey ? 'Alt+' : '') + event.key
      const handler = keyHandlers[keyCombination]
      if (handler) {
        handler()
      }
    };

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [keyHandlers])
}

export default useKeyboardEvents


