var art =[
    {'id':1,'name':'bisola art','description':'best make up artist you can get inthe whole of ogun state','discount':100,'demossession':true,'url':'eachartist/bisola.html','image':'images/user.png'},
    {'id':2,'name':'shaloms delight','description':'for decades now shalom has been the best in town, immproving on our society beauty requirements,check out our works and contact us','discount':'No discount available','demossession':false,'url':'eachartist/shalom.html','image':'images/user.png'},
    {'id':3,'name':'alpha omega','description':'from matte to face cleansing to all the make up you can thing of,alpha omega gats your beauty','discount':150,'demossession':true,'url':'eachartist/alpha omaga.html','image':'images/user.png'}
]
 
 
 class MakeupArtist {
     constructor(id,name,description,discount,demosession,url,image){                     //demosession:(boolean value)
        this.id=id;
        this.name=name;
        this.description=description;
        this.discount=discount;
        this.demosession=demosession;
        this.url=url;
        this.image = image;
     }
 }

 MakeupArtist.prototype.artistlist =function(){
     var listNode = document.getElementById("list");
     var contain = document.createElement("div");
     contain.className="artist"
     var profile = document.createElement("img");
     profile.setAttribute("src",this.image);
     var info = document.createElement("h1");
     info.innerText=this.name;
     //info.setAttribute("class","display-4");
     var detail = document.createElement("p");
     detail.innerText=this.description;
     var link = document.createElement("a");
     link.setAttribute("href",this.url);
     link.target="_blank";
     link.textContent=this.name;
     link.className="link";
     var span = document.createElement("span");
     span.innerHTML= `<i class="fa fa-angle-double-right"  aria-hidden="true"></i>`;
     link.append(span);
     contain.append(profile);
     contain.append(info);
     contain.append(detail);
     contain.append(link);
     listNode.append(contain);  
 }


   for(let i=0; i<=art.length; i++){
       var x = new MakeupArtist(art[i].id,art[i].name,art[i].description,art[i].discount,art[i].demossession,art[i].url,art[i].image);
       x.artistlist();
       console.log(x)
   }

   /*JQuery ajax call*/
   $(document).ready(function(){
    loadPage();
     });

     function loadPage(url) {     
        $('#information').load(`${url} .container`, hijackLinks);      
        }

     function hijackLinks() {
      $('.artist a').click(function(e){
      e.preventDefault();
      loadPage(e.target.href);
      $.getScript("eachartist.js") 
     
    });
     }
  