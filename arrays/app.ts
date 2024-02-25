let mahasiswa: Array<string> = [];

mahasiswa.forEach((name) => {
  console.log({name})
})

let nameMahasiswa: Array<string> = ["Makoto", "Shinkai", "Ibuki"]

mahasiswa.push(...nameMahasiswa);

mahasiswa.forEach((name) => {
  console.log({name})
})
