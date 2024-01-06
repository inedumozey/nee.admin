import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver'

export default async function exportToExcel(data, setMsg) {
    try {

        if (!data.length) {
            setMsg({ text: `Empty data`, type: 'error' });
        }

        const worksheet = XLSX.utils.json_to_sheet(data);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

        const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: "array" });
        const blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocumnet.spreadsheetml.sheet;charset=UTF-8' });

        console.log(blob)

        saveAs(blob, 'data.xlsx')

        setMsg({ text: `Data extracted`, type: 'success' });
    }
    catch (e) {
        setMsg({ text: "Error exporting data; try again!", type: 'error' })
    }
}
