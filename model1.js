function sinhVien(_ma,_ten,_email,_matKhau,_toan,_van){
    this.ma = _ma ;
    this.ten = _ten ;
    this.email = _email;
    this.matKhau = _matKhau ;
    this.toan = _toan ;
    this.van = _van;
    this.diemTb = function tinhDiemTrungBinh(){
        return (this.toan + this.van) / 2;
    }
}