import moment from "moment";

const date1 = moment("2022-07-11");
const date2 = moment("2025-04-03");

let dayDiff = date2.diff(date1, "days"); // perbedaan hari
let monthDiff = date2.diff(date1, "month"); // perbedaan bulan
let yearDiff = date2.diff(date1, "year");
const daysInMonth = new Date(moment().month() + 1,moment().year(), 0).getDate();
const yearCount = 12;

if(monthDiff > yearCount){
    // Cek apakah bulannya melebihi dari 12 bulan atau 1 tahun.
    dayDiff -= (monthDiff * daysInMonth); // 1315(hasil perbedaan hari) - 1290(hasil perbedaan bulan di kali ) = 25 day
    monthDiff -= (yearCount * yearDiff); // 43 - 36 = 7 month
    console.log(`${dayDiff} Day ${monthDiff} Month ${yearDiff} Year`);
}else{
    console.log(`${day} day`);
}
// console.log(yearDiff);
