const names = ["Halo", "Angel", "Nyoman", "Ketut", "Aisyah"];

// TODO: Fungsi utama
// Menerima 2 parameter: list nama dan callback sort
// Mengembalikan array of string dengan format:
// "1. Nama"
// "2. Nama"
// ...
// const sorter = null;

const sorter = (list, sortList) => {
  //invoke sort nya
  sortData = sortList(list);
  
  //isi list nya
  let arr = []
  for (let i = 0; i < sortData.length; i++) {
    arr.push(i+1+". "+sortData[i]);
  }
  return arr;
}
console.log(sorter);
// TODO: Fungsi untuk mengurutkan array of string secara ascending
// mengembalikan array yang sudah diurutkan
// const sortAscending = null;

const sortAscending = (list) => {
  let data = list.sort();
  return data;
}

// TODO: Fungsi untuk mengurutkan array of string secara descending
// mengembalikan array yang sudah diurutkan
// const sortDescending = null;

const sortDescending = (list) => {
  let data = list.sort().reverse();
  return data;
}

// ! JANGAN DIMODIFIKASI
(function main() {
  console.log(sorter?.(names, sortAscending)?.join("\n"));
  console.log(sorter?.(names, sortDescending)?.join("\n"));
})();

module.exports = {
  sorter,
  sortAscending,
  sortDescending,
  names,
};
