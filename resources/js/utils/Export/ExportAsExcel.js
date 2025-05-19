import { utils, writeFile } from 'xlsx';

export const exportAsExcel = ({ data, columns, title }) => {
  try {
    // Prepare the data for Excel
    const excelData = data.map(row =>
      columns.reduce((acc, column) => {
        if (column.render) {
          // For custom rendered cells, use the raw value
          acc[column.header] = row[column.field];
        } else if (column.type === 'status') {
          acc[column.header] = row[column.field];
        } else {
          acc[column.header] = row[column.field];
        }
        return acc;
      }, {})
    );

    // Create worksheet
    const ws = utils.json_to_sheet(excelData);

    // Add header row with styling
    const headerRange = utils.decode_range(ws['!ref']);
    const purpleStyle = {
      fill: { fgColor: { rgb: "8B5CF6" } }, // Purple color
      font: { color: { rgb: "FFFFFF" }, bold: true }, // White text and bold
      alignment: { horizontal: "center" }
    };

    // Apply purple style to header row
    for (let col = headerRange.s.c; col <= headerRange.e.c; col++) {
      const cellRef = utils.encode_cell({ r: 0, c: col });
      if (!ws[cellRef]) continue;
      ws[cellRef].s = purpleStyle;
    }

    // Set column widths
    const colWidths = columns.map(() => ({ wch: 20 })); // Set width of 20 for all columns
    ws['!cols'] = colWidths;

    // Create workbook and add the worksheet
    const wb = utils.book_new();
    utils.book_append_sheet(wb, ws, title);

    // Save to file
    writeFile(wb, `${title.toLowerCase().replace(/\s+/g, '-')}-${new Date().toISOString().split('T')[0]}.xlsx`);

    return true;
  } catch (error) {
    console.error('Error exporting to Excel:', error);
    return false;
  }
};