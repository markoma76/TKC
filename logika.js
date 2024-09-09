let brojIgraca = 0;
let brojPartija = 1;
let imenaIgraca = [];

let upitnik = document.getElementById('iIgraca');




document.getElementById('pocni').addEventListener('click',Pocni);
document.getElementById('potvrdi').addEventListener('click',Potvrdi);





function Pocni(){
    document.querySelector('#prva').style.display = 'none';
    document.getElementById('postavke').style.display = 'block'
};

function Potvrdi() {
    brojIgraca = Number(document.getElementById('bigr').value);
    brojPartija = Number(document.getElementById('bprt').value);
    console.log(brojIgraca);
    console.log(brojPartija);
    
    document.getElementById('umot').style.display = 'none';

    for (let i = 1; i < brojIgraca + 1; i++){
        upitnik.innerHTML = upitnik.innerHTML + ' <label for="upit' + i +'">Ime' + ' ' + i + ' '+ 'Igraca</label>' + '<input type="text" class="iStill" id="upit' + i + '" name="upit' + i +'">' + '</br>';
    };

    upitnik.innerHTML = upitnik.innerHTML +'<button type="submit">potvrdi</button>';

};


    