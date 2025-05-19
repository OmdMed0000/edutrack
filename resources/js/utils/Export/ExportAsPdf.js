import { jsPDF } from "jspdf";
import autoTable from 'jspdf-autotable';

export const exportAsPdf = ({ data, columns, title }) => {
  try {
    // Create new PDF document
    const doc = new jsPDF();

    // Add title
    doc.setFontSize(16);
    doc.text(title, 14, 15);
    
    // Prepare the data for the table
    const tableColumn = columns.map(col => col.header);
    const tableRows = data.map(row =>
      columns.map(col => {
        
        return row[col.field];
      })
    );

    // Generate the table using the autoTable plugin
    autoTable(doc, {
      head: [tableColumn],
      body: tableRows,
      startY: 25,
      styles: {
        fontSize: 10,
        cellPadding: 3,
        lineColor: [200, 200, 200],
        lineWidth: 0.1,
      },
      headStyles: {
        fillColor: [71, 85, 105],
        textColor: 255,
        fontSize: 10,
        fontStyle: 'bold',
      },
      alternateRowStyles: {
        fillColor: [245, 245, 245],
      },
      margin: { top: 20 },
    });

    // Save the PDF
    doc.save(`${title.toLowerCase().replace(/\s+/g, '-')}-${new Date().toISOString().split('T')[0]}.pdf`);

    return true;
  } catch (error) {
    console.error('Error exporting to PDF:', error);
    return false;
  }
};