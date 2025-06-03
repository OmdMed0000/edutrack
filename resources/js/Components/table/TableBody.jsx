import { useRef, useState, useEffect } from "react";
import useClickOutSide from "../../utils/Hooks/useClickOutSide";
import { useModalContext } from "../../utils/Context/ModalContext";
import DropDownMenu from "./DropDownMenu";
import { handleRowRightClick } from "../../utils/TableFunction/ContextFunction";
import { useTableContext } from "../../utils/Context/TableContext";
import { MoreVertical } from "lucide-react";

export default function TableBody({ filteredData, tableConfig, gridTemplateColumns }) {
  const { selectable, columns, links, modals, primaryKey, path, actions } = tableConfig;
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);
 console.log(tableConfig);
  

  const { setSelectedItem, selectedItem } = useModalContext();
  const { selectedRows, setSelectedRows } = useTableContext();

  const [contextMenuPosition, setContextMenuPosition] = useState({ top: 0, left: 0 });

  // Close dropdown when clicking outside dropdown and dots button
  useClickOutSide(() => {
    setSelectedItem(null);
  }, [dropdownRef, buttonRef]);

  // Prevent default context menu on grid elements
  useEffect(() => {
    const handleContextMenu = (e) => {
      if (e.target.closest(".grid-container")) {
        e.preventDefault();
      }
    };

    document.addEventListener("contextmenu", handleContextMenu);
    return () => document.removeEventListener("contextmenu", handleContextMenu);
  }, []);

  // Close dropdown on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && selectedItem?.[primaryKey]) {
        setSelectedItem(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [selectedItem, setSelectedItem, primaryKey]);

  const hadnleClick = (row, e) =>
    handleRowRightClick(row, primaryKey, selectedItem, setSelectedItem, setContextMenuPosition, e);

  const handleDotsClick = (row, e) => {
    e.stopPropagation();

    const rect = e.currentTarget.getBoundingClientRect();
    setContextMenuPosition({ top: rect.bottom + window.scrollY, left: rect.left + window.scrollX });

    if (selectedItem?.[primaryKey] === row[primaryKey]) {
      setSelectedItem(null);
    } else {
      setSelectedItem(row);
    }
  };

  return (
    <div className="divide-y divide-gray-300 dark:divide-gray-600 border border-gray-300 dark:border-gray-600 rounded-lg relative">
      {filteredData.map((row, index) => (
        <div
          key={index}
          className={`grid px-4 py-2 gap-4 items-center cursor-pointer
            ${index === 0 ? "rounded-t-lg" : ""}
            ${index === filteredData.length - 1 ? "rounded-b-lg" : ""}
            ${
              selectedItem?.[primaryKey] === row[primaryKey]
                ? "bg-gray-100 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600"
                : "bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800"
            }
            relative`}
          style={{ gridTemplateColumns }}
          onContextMenu={(e) => actions && hadnleClick(row, e)}
        >
          {selectable && (
            <Selectable selectedRows={selectedRows} setSelectedRows={setSelectedRows} row={row} primaryKey={primaryKey} />
          )}

          {columns.map((column, colIndex) => (
            <div key={colIndex}>
              <div className="text-sm">{column.render ? column.render(row) : row[column.field]}</div>
            </div>
          ))}

          {/* 3 dots button */}
          <div ref={buttonRef} className="relative flex justify-center">
            <button
              className="p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
              onClick={(e) => handleDotsClick(row, e)}
              aria-label="Open dropdown menu"
              type="button"
            >
              <MoreVertical size={20} />
            </button>
          </div>

          {/* Dropdown menu */}
          {selectedItem && selectedItem[primaryKey] === row[primaryKey] && (
            <div
              ref={dropdownRef}
              className="fixed z-50"
              style={{
                top: `${contextMenuPosition.top}px`,
                left: `${contextMenuPosition.left}px`,
                transformOrigin: "top",
              }}
            >
            <DropDownMenu
            config={tableConfig}
            item={row}
            />
            </div>
          )}
        </div>
      ))}

      {filteredData.length === 0 && <div className="px-4 py-8 text-center text-gray-500">No results found</div>}
    </div>
  );
}

const Selectable = ({ selectedRows, setSelectedRows, row, primaryKey }) => {
  const isChecked = selectedRows.find((selectedRow) => selectedRow?.[primaryKey] === row?.[primaryKey]);

  const newSelectedRows = selectedRows.filter((selectedRow) => selectedRow?.[primaryKey] !== row?.[primaryKey]);
  return (
    <div>
      <input
        type="checkbox"
        className="rounded accent-purple-700"
        checked={isChecked || false}
        onChange={(e) => {
          setSelectedRows(e.target.checked ? [...selectedRows, row] : newSelectedRows);
        }}
      />
    </div>
  );
};
