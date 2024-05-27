import React from 'react'
import { useAppStore } from '~/store/useAppStore'

const Modal = () => {
    const { contentModal, setModal } = useAppStore()
    return (
        <div
            onClick={() => setModal(false, null)}
            className='absolute z-[1000] w-screen h-screen bg-overlay-70 flex justify-center items-center'>
            {contentModal}
        </div>
    )
}

export default Modal
