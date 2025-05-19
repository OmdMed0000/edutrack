import { OctagonAlert } from "lucide-react"
import { useModalContext } from "../../utils/Context/ModalContext"
import { useEffect, useRef } from 'react'

export default function ResetPasswordModal({ topic, children }) {
  const { selectedItem, setSelectedItem, setActiveModal } = useModalContext()
  
  const handleCancel = () => {
    setActiveModal(null)
    setSelectedItem(null)
  }

  const popoverRef = useRef(null);
  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        handleCancel()
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm">
      <div className="relative w-full max-w-md mx-4">
        <div ref={popoverRef} className="relative rounded-xl bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="px-6 py-5 flex flex-col items-center gap-4">
            <div className="p-3 rounded-full bg-purple-50 dark:bg-purple-900/20">
              <OctagonAlert size={32} className="text-purple-500 dark:text-purple-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white text-center">
              Reset Password
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
              Are you sure you want to reset {topic === 'admin' 
                ? 'your password' 
                : `the password of ${topic} ${selectedItem?.fullName}`}?
            </p>
          </div>

          <div className="flex items-center justify-end gap-3 px-6 py-4 bg-gray-50 dark:bg-gray-800/50 border-t border-gray-200 dark:border-gray-700">
            <button
              type="button"
              className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
              onClick={handleCancel}
            >
              Cancel
            </button>
            <button
              type="button"
              className="px-4 py-2 text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
            >
              Reset Password
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}