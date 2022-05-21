let i=0
let id;


function startshow(){
let imglodata=JSON.parse(localStorage.getItem("image"))

let show=document.querySelector("#slideshow")
// show.append(imglodata[0])
// i=i+1
id=setInterval(function(){

      if(i===imglodata.length){
            i=0;
      }
      show.innerHTML= null
      
      let imagechange=imglodata[i];

      let imgid=document.createElement("img")
      imgid.className="changeimg"
      imgid.src=imagechange;

      show.append(imgid);

      i++;
   },2000)}



function pauseshow(){
      clearInterval(id)
}



let arr=[]
function Moview(name,date,rating,poster_url){ 
      this.MovieName=name;
      this.ReleaseDate=date;
      this.ImdbRating=rating
      this.Poster=poster_url;
}

var mov1=new Moview("Doctor Strange","6 May 2022",7.4,"https://wallpapercave.com/dwp1x/wp2028630.jpg")
var mov2=new Moview("K.G.F Chapter 2","14 April 2022",9.4,"https://wallpapercave.com/dwp1x/wp8029171.jpg")
var mov3=new Moview("RRR","25 March 2022",8.9,"https://wallpapercave.com/dwp1x/wp10944857.jpg")
var mov4=new Moview(" Kashmir Files"," 11 March 2022",8.3,"https://www.bing.com/th?id=A26a84541f18d2ba4bd8538acc9c08cdf&w=180&h=270&c=4&rs=1&qlt=80&o=6&dpr=1.12&pid=SANGAM ")
var mov5=new Moview("Radhe Shyam "," 11 jan 2022",5.7,"https://wallpapercave.com/dwp1x/wp7794635.jpg")
var mov6=new Moview("Gangubai "," 25 feb 2022",7 ,"https://wallpapercave.com/dwp1x/wp10465992.jpg")
var mov7=new Moview("The Batman "," 4 March 2022",8,"https://wallpapercave.com/dwp1x/wp10624275.jpg")
var mov8=new Moview("Minions: The Rise of Gru  "," 1 july 2022",9,"https://wallpapercave.com/fuwp/uwp1347425.jpeg")
var mov9=new Moview(" Avatar: The Way of Water","  15 December 2022",8,"https://wallpapercave.com/dwp1x/vTucv7p.jpg")

arr.push(mov1,mov2,mov3,mov4,mov5,mov6,mov7,mov8,mov9)

displaymov(arr)

function displaymov(data){

      document.querySelector("#movies").innerHTML=null
      data.forEach(function(el){
       
            var movbox=document.createElement("div")
            movbox.className="outermovbox"
            
//for Moview Image
      var imgdiv=document.createElement("div")
      imgdiv.className="posterdiv"
      var imgm=document.createElement("img")
      imgm.className="posterimg"
      imgm.setAttribute("src",el.Poster)
      imgdiv.append(imgm)
      movbox.append(imgdiv)
//------------------------------------------


      //For Moview Data

           var movdata=document.createElement("div")
           movdata.className="movtextdata"
         
      var namem=document.createElement("h4")
      namem.innerText=el.MovieName
      namem.className="Movname"
      movdata.append(namem)

      var datem=document.createElement("h5")
      datem.innerText="Release Date : "+el.ReleaseDate
      datem.className="movdate"
      movdata.append(datem)

      var ratem=document.createElement("p")
      ratem.innerText="IMDB Rating : "+el.ImdbRating
      ratem.className="movrate"
      movdata.append(ratem)


      movbox.append(movdata)
      document.querySelector("#movies").append(movbox)

      })
      

}

displaymov(arr)
//for sorting tags
document.querySelector("#sortmov").addEventListener("change",sortvaluesfunc)
function sortvaluesfunc(){
      var selected=document.querySelector("#sortmov").value


      if(selected=="ac"){
            arr.sort(function(a,b){
                  return b.ImdbRating-a.ImdbRating
            })
            displaymov(arr)

      }
      if(selected=="dc"){
            arr.sort(function(a,b){
                  return a.ImdbRating-b.ImdbRating
            })
            displaymov(arr)

      }
}




