var app = {
    console: 'Oyun Konsolu, Playstation, Xbox',
    gumruk : '',
    vergiYok : "",
    tahminiFiyat : ""
};

function onFormSubmit(event){
    event.preventDefault();
    var item = event.target.elements.txtItem.value;
    if(item){
        var toplamVergi = item - (item *58)/100;
        var vergisiz =  item - toplamVergi
        var gumrukVergisi = (vergisiz *20) / 100;
        app.gumruk = gumrukVergisi;
        app.vergiYok = vergisiz;
        app.vergi = toplamVergi;
        console.log(app.vergi);
    }
    else{
        console.log("Sayı girilmedi");
    }
    render();
};


function render(){

var template = <div>
    <h1>Vergi Hesaplama Uygulaması</h1>
    <ul>
        <li>
            {app.console}
        </li>
        <li>
            Vergisiz fiyat :
            {app.vergiYok}
        </li>
        <li>
            Gümrük vergisi(20) :
            {app.gumruk}
        </li>
       
        <li>
            Ötv :
        </li>
        <li>
            Kdv :
        </li>
        <li>
            Toplam vergi(69.92) : 
            {
                (app.vergi == "") ? " Hesaplanmadı" : app.vergi 
            }
        </li>
        <li>Tahmini satış fiyatı</li>
    </ul>

    <form onSubmit={onFormSubmit}>
    <label>Konsol Fiyatı:</label><br></br>
    <input type="text" name="txtItem"></input><br></br><br></br>
    <button type="submit">Hesapla</button>
    <button type="submit">Temizle</button>
    </form>

</div>;



ReactDOM.render(template,root);
};
render();