for(var i=1;i<=9;i++){
    var result='';
    for(var j=1;j<=i;j++){
        result+=`${i}*${j}=${i*j}\t`;    //末尾\t为转义字符表示下一个制表符位置，若\n表示换行
    }
    console.log(result);
}