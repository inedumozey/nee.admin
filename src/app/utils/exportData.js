import * as XLSX from 'xlsx';
import fileName from './fileName';

export default async function exportToExcel(data, setMsg) {
    try {
        if (!data.length) {
            setMsg({ text: `No data to extract!`, type: 'error' });
        }
        else {
            const worksheet = XLSX.utils.json_to_sheet(data);
            const workbook = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
            XLSX.writeFile(workbook, fileName("data", "xlsx"));

            setMsg({ text: `Data extracted`, type: 'success' });
        }
    }
    catch (e) {
        setMsg({ text: "Error exporting data; try again!", type: 'error' })
    }
}
