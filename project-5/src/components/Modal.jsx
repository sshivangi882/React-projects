import { AiOutlineClose } from "react-icons/ai"


const Modal = (onClose, isOpen, children) => {
  return (
    <>{isOpen && ( <div className="min-h-[200px] max-w-[80%] bg-white p-4">
        <div className="flex justify-end">
            <AiOutlineClose onClick={onClose} className="self-end text-2xl" />
        </div>
    </div>
    )}</>
  )
}

export default Modal