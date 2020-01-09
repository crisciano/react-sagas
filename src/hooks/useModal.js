import { useState } from 'react'

// https://upmostly.com/tutorials/modal-components-react-custom-hooks

const useModal = () => {
    const [isToggle, setIsToggle] = useState(false)
    const toggle = () => { setIsToggle(!isToggle) }

    return { isToggle, toggle }
}

export default useModal