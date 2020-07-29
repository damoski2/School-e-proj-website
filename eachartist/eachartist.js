/*Global DOM selectors*/
var select = document.querySelector("select");
var discount = document.querySelector("#discount span");
var price = document.querySelector("#price span")
var btn = document.getElementById("btn");

class Artist {
    constructor(id,name,description,discount,demosession,image){
        this.id=id;
        this.name=name;
        this.description=description;
        this.discount=discount;
        this.demosession=demosession;
        this.image = image;
    }
}
 var artist = [
     {'id':1,'name':'bisola art','description':'best make up artist you can get inthe whole of ogun state....','discount':100,'demosession':true,'image':'pageimages/bisola.jpg'},
     {'id':2,'name':'shaloms delight','description':'for decades now shalom has been the best in town, immproving on our society beauty requirements,check out our works and contact us','discount':'No discount available','demosession':false,'image':'pageimages/shalom.jpg'},
     {'id':3,'name':'alpha omega','description':'from matte to face cleansing to all the make up you can thing of,alpha omega gats your beauty','discount':150,'demosession':true,'image':'pageimages/alphaomega.jpg'}
 ]

Artist.prototype.eachArtist = function(){
    
    var submit = document.getElementById("aForm");
    var contain = document.getElementById("list");
    var pic = document.createElement("img");
    pic.setAttribute("src",this.image);
    var head = document.createElement("h1");
    head.textContent=this.name;
    var info = document.createElement("p");
    info.textContent=this.description;
    submit.addEventListener('submit', submitform);


    function submitform(e){
        e.preventDefault();
        var div = document.createElement('div');
        div.className="servicediv"
        var checkimg = document.createElement("img");
        checkimg.src="https://media.giphy.com/media/ibolLe3mOqHE3PQTtk/giphy.gif"
        var cancel = document.createElement('button');
        cancel.textContent="X";
        subpara = document.createElement("p");
        subpara.textContent=`your service of ${select.options[select.selectedIndex].value}has been submitted to the artist`
        div.append(cancel);
        div.append(subpara);
        div.append(checkimg);
        document.body.append(div);

        cancel.onclick = function(){
            div.style.display="none"
        }
    }

    if(this.demosession==true){ 
        var demo = document.createElement("p");
        demo.setAttribute("id","demosession");
        demo.textContent="Demosession available!! :#1000";
        demo.style.position="absolute";
        demo.style.top="29em";
        demo.style.left="10em";
        contain.append(demo);
    }
    else{
        var demo = document.createElement("p");
        demo.setAttribute("id","demosession");
        demo.textContent="Sorry no demosession available";
        demo.style.position="absolute";
        demo.style.top="29em";
        demo.style.left="10em";
        contain.append(demo);
    }

    /*demosession button */
    var butn = document.createElement("button");
    butn.setAttribute("id","demobtn");
    butn.textContent="hide demosession"
    butn.addEventListener('click',function(){
        if(demo.style.visibility=="hidden"){
            demo.style.visibility="visible"
            butn.textContent="hide demosession"
        }else{
            demo.style.visibility="hidden"
            butn.textContent="show demosession"
        }
    })

    contain.append(butn)
    contain.append(pic)
    contain.append(head)
    contain.append(info)
    //console.log(contain);

}

        select.onchange = function(){
            if(discount.innerHTML!==null){
                discount.innerHTML="";
            }
            if(price.innerHTML){
                price.innerHTML="";
            }
            if(select.options[select.selectedIndex].value=="Bridal makeup"){
                discount.innerHTML="#2300"
                price.innerHTML ="#1700";
            }
            else if(select.options[select.selectedIndex].value=="Groom makeup"){
                discount.innerHTML="#2000"
                price.innerHTML="#1400";
            }
            else if(select.options[select.selectedIndex].value=="Family Makeup"){
                discount.innerHTML ="No discount available for this option";
                price.innerHTML="#4000";
            }
            else if(select.options[select.selectedIndex].value=="Touch up services"){
                discount.innerHTML="#1200"
                price.innerHTML="#750"
            }
        }
    /*Setting up key pairs for each pages */
  var key = document.querySelector('#identify p').textContent;
  var identify = Number(key);
  //console.log(identify)

for(let i=0; i<artist.length; i++){
    if(artist[i].id==identify){
        var x = new Artist(artist[i].id,artist[i].name,artist[i].description,artist[i].discount,artist[i].demosession,artist[i].image);
        x.eachArtist();
        break;
    }
}
  var markarr =[{coords:{lat:6.9980,lng:-3.4737},content:`<h2>Meeting location: 23,adegbyin str,off Carson estate,Ibafo</h2>`}]

/*Google map geolocation*/

function initMap(){
    var options = {
        zoom: 8,
        center:{lat:6.9980,lng:-3.4737}
    }
    var map = new google.maps.Map(document.getElementById("map"),options);

    //add Marker
    /*
    var marker = new google.maps.Marker({
        position:{lat:6.9980,lng:-3.4737},
        map:map
    });

    var infoWindow = new google.maps.InfoWindow({
        content:'<h2>Meeting location: 23,adegbyin str,off Carson estate,Ibafo</h2>'
    });
    marker.addListener('click',function(){
        infoWindow.open(map,marker);
    })*/

    //add MArker function
    
    for(let i=0; i<markarr.length; i++){
        addMarker(markarr[i]);
    }

    function addMarker(props){
        var marker = new google.maps.Marker({
            position:props.coords,
            map:map
        });

        if(props.content){
            var infoWindow = new google.maps.InfoWindow({
                content:'<h2>Meeting location: 23,adegbyin str,off Carson estate,Ibafo</h2>'
            });

            marker.addListener('click',function(){
                infoWindow.open(map,marker);
            })
        }
    }
}

/*Feedback database*/
var db;
$(document).ready(function(){
    $('#feedback #sendfd').click(createEntry);
    //loadSettings();
            var shortName = 'makeup';
            var version = '1.0';
            var displayName = 'makeup';
            var maxSize = 65536;
            db = openDatabase(shortName, version, displayName, maxSize);
            db.transaction(
            function(transaction) {
            transaction.executeSql(
            'CREATE TABLE IF NOT EXISTS interact ' +
            ' (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, ' +
            ' recipent CHAR NOT NULL, ' +
            ' message CHAR NOT NULL);'
            );
            }
            );

});

 /*function sendfeedback(){
      localStorage.recipent=$('#recipient-name').val();
      localStorage.message=$('#message-text').val();
    }

 function loadSettings(){
      if(!localStorage.recipent){
          localStorage.recipent="";
      }
      if(!localStorage.message){
          localStorage.message="";
      }

     $('#recipent-name').val(localStorage.recipent);
     $('#message-text').val(localStorage.message);
 }*/

 function createEntry() {
    var recipent = $('#recipient-name').val();
    var message = $('#message-text').val();
    db.transaction(
        function(transaction) {
            transaction.executeSql(
            'INSERT INTO interact (recipent,message) VALUES (?, ?);',
            [recipent, message],
            function(){
            //refreshEntries();
            //jQT.goBack();
            },
            errorHandler
            );
        }
    );
    return false;
   }
function errorHandler(transaction,error){
    alert('Oops . Error  was '+error.message+ ' (Code'+error.code+')');
    return true;
}



/*Comment section functionality using Asyn js */
var review = document.querySelector("#reviewed");
var comments = [
    {user:'seaGirl_2',comment:'Very good services',image:'pageimages/user.png'},
    {user:'fashionstar',comment:'the best place to get your shit running',image:'pageimages/user.png'}
];

function postComment(){
    setTimeout(()=>{
        let output='';
        comments.forEach((review,index)=>{
            output += `<img src=${review.image}></img><h1>${review.user}</h1> <li>${review.comment}</li>`
        });
        review.innerHTML= output;


    },1000)
}

postComment();

 