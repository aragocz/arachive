function passMatch() {
    const passw = process.env.PASS;
    const inppass = document.getElementById("pass").value;
    if(inppass === passw){
        window.location.replace("https://shadowlegendcz.github.io/pogpack-project/1566523151561532153213516188184646848314853af1d61af35s1f5sa11fas21f23asf51as3f512dsf15as1f5d315f1sa68f31das2fa853f15sf35a1f2as1.html")
    }else{
        window.alert("Wrong!")
    }
}    