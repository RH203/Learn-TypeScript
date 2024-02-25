class Mahasiswa {
  private nameMahasiswa: string;
  
  constructor (nameMahasiswa: string) {
    this.nameMahasiswa = nameMahasiswa;
  }

  getName ():string {
    return this.nameMahasiswa;
  }
}

export default Mahasiswa;