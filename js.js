a = prompt('Nhập tên người dùng','');
if(a=='Admin'){
    b = prompt('Nhập mật khẩu');
    if(b=='TheMaster'){
        alert('Welcome');
    }
    else if(b==null){
        alert('Canceled');
    }
    else {
        alert('Wrong password')
    }
}
else if(a=null) {
    alert('Canceled');
}
else {
    alert('I dont know you!')
}