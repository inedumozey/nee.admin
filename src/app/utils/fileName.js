export default function fileName(prefix, extension = "") {
    const d = new Date();
    const year = d.getFullYear();
    const month = d.getMonth() + 1
    const date = d.getDate()
    const hour = d.getHours();
    const min = d.getMinutes();
    const sec = d.getSeconds();

    const format = (n) => n < 10 ? `0${n}` : n
    const name = `${prefix}_${year}${format(month)}${format(date)}_${format(hour)}${format(min)}${format(sec)}`

    if (extension) {
        return `${name}.${extension}`
    } else {
        return name;
    }
}