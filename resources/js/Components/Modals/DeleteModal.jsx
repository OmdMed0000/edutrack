import { useRef } from "react";
import useClickOutSide from "../../utils/Hooks/useClickOutSide";
import { OctagonAlert } from "lucide-react";

export default function DeleteModal({
  name = "item",
  itemName = "",
  resetModal = () => {},
  handleDelete = async () => {},
}) {
  const modalRef = useRef(null);
  useClickOutSide(resetModal, modalRef); // Close when clicking outside

  const onConfirmDelete = async () => {
    try {
      await handleDelete();
    } catch (error) {
      console.error("Delete failed:", error);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm">
      <div className="relative w-full max-w-md mx-4">
        <div
          ref={modalRef}
          className="rounded-xl bg-white dark:bg-gray-800 shadow-xl border border-gray-200 dark:border-gray-700"
        >
          {/* Modal Content */}
          <div className="px-6 py-5 flex flex-col items-center text-center space-y-4">
            <div className="p-3 rounded-full bg-red-100 dark:bg-red-900/30">
              <OctagonAlert size={32} className="text-red-600 dark:text-red-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Delete {name}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Are you sure you want to delete <strong>{itemName || name}</strong>?<br />
              This action cannot be undone.
            </p>
          </div>

          {/* Footer Buttons */}
          <div className="flex items-center justify-end gap-3 px-6 py-4 bg-gray-50 dark:bg-gray-900/40 border-t border-gray-200 dark:border-gray-700">
            <button
              onClick={resetModal}
              className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition"
            >
              Cancel
            </button>
            <button
              onClick={onConfirmDelete}
              className="px-4 py-2 text-sm font-semibold text-white bg-red-600 hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600 rounded-lg transition"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
