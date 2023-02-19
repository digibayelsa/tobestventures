var id_arr=["slider1","slider2","slider3","item1","item2","item3","item4","arrival1","arrival2","arrival3","arrival4","arrival5","arrival6","arrival7","arrival8","arrprice1","arrprice2","arrprice3","arrprice4","arrprice5","arrprice6","arrprice7","arrprice8","section1","popular-pro1","popular-pro2","service1","serinfo1","service2","serinfo2","sotwitter","sofacebook","sopinterest","cat1","cat2","cat3","phone","mail","address"];
var id_2d=Array(41).fill().map(()=>Array(1));
id_2d[0][0]="title";
id_2d[0][1]="Tobest Ventures Nig";
id_2d[1][0]="slider1";
id_2d[1][1]="Pumping Generator";
id_2d[2][0]="slider2";
id_2d[2][1]="Spark Plug";
id_2d[3][0]="slider3";
id_2d[3][1]="The Wheel Barrow";
id_2d[4][0]="item1";
id_2d[4][1]="N5,000";
id_2d[5][0]="item2";
id_2d[5][1]="N400-N500";
id_2d[6][0]="item3";
id_2d[6][1]="N4,500";
id_2d[7][0]="item4";
id_2d[7][1]="N4,000";
id_2d[8][0]="arrival1";
id_2d[8][1]="3\" Sumec ";
id_2d[9][0]="arrival2";
id_2d[9][1]="3\" Honda";
id_2d[10][0]="arrival3";
id_2d[10][1]="Wheel Barrow";
id_2d[11][0]="arrival4";
id_2d[11][1]="Bushcutter";
id_2d[12][0]="arrival5";
id_2d[12][1]="16 liter Sprayer ";
id_2d[13][0]="arrival6";
id_2d[13][1]="3.mm by 100 meters trimmer line";
id_2d[14][0]="arrival7";
id_2d[14][1]="3mm by 100 yards";
id_2d[15][0]="arrival8";
id_2d[15][1]="Bushcutter base";
id_2d[16][0]="arrprice1";
id_2d[16][1]="N75,000";
id_2d[17][0]="arrprice2";
id_2d[17][1]="N75,000";
id_2d[18][0]="arrprice3";
id_2d[18][1]="N30,000";
id_2d[19][0]="arrprice4";
id_2d[19][1]="N58,000";
id_2d[20][0]="arrprice5";
id_2d[20][1]="N4000";
id_2d[21][0]="arrprice6";
id_2d[21][1]="N4,500";
id_2d[22][0]="arrprice7";
id_2d[22][1]="N4,000";
id_2d[23][0]="arrprice8";
id_2d[23][1]="N4,500";
id_2d[24][0]="section1";
id_2d[24][1]="Starting coil bushcutter";
id_2d[25][0]="popular-pro1";
id_2d[25][1]="4,000";
id_2d[26][0]="popular-pro2";
id_2d[26][1]="4,000";
id_2d[27][0]="service1";
id_2d[27][1]="Machine parts Sale";
id_2d[28][0]="serinfo1";
id_2d[28][1]="Order and get Products";
id_2d[29][0]="service2";
id_2d[29][1]="Equipment Hire";
id_2d[30][0]="serinfo2";
id_2d[30][1]="Get durable machines on site";
id_2d[31][0]="sotwitter";
id_2d[31][1]="www.twitter.com/Tobest";
id_2d[32][0]="sofacebook";
id_2d[32][1]="www.twitter.com/Tobest";
id_2d[33][0]="sopinterest";
id_2d[33][1]="www.pinterest.com/Tobest";
id_2d[34][0]="cat1";
id_2d[34][1]="Bushcutter";
id_2d[35][0]="cat2";
id_2d[35][1]="16 liter sprayer";
id_2d[36][0]="cat3";
id_2d[36][1]=" Sumec Pumping Generator";
id_2d[37][0]="phone";
id_2d[37][1]="2348065075111";
id_2d[38][0]="mail";
id_2d[38][1]="NA";
id_2d[39][0]="address";
id_2d[39][1]="Ekeki";
id_2d[40][0]="sectiontitle";
id_2d[40][1]="Machine parts logistics";






//alert(id_2d );
for (let j=0;j<41;j++){
     for (let i=0;i<1;i++){
        try{
                if (j >30 && j<34){
                        document.getElementById(id_2d[j][i]).href=id_2d[j][i+1];
                }else{
  document.getElementById(id_2d[j][i]).innerHTML=id_2d[j][i+1];

                }
          
                }catch{
               }
 }
}

 
var str="";
var search;
const fetchPromise = fetch( 'data.json');
fetchPromise.then((response) => {
const jsonPromise = response.json();
jsonPromise.then((data) => {
     let s="";
  
                s=data[0].id+" "+ data[0].value;
                      fetchPromise.then((response) => {
              
          //   alert(s);
             
        });
//document.getElementById("para").innerHTML=str;
 
  });
});

 


// document.getElementById("slider1").innerHTML="Test slider1";
// document.getElementById("slider2").innerHTML="Test slider2";
// document.getElementById("slider3").innerHTML="Test slider3";
// document.getElementById("item1").innerHTML="Test item1";
// document.getElementById("item2").innerHTML="Test item2";
// document.getElementById("item3").innerHTML="Test item3";
// document.getElementById("item4").innerHTML="Test item4";

// document.getElementById("arrival1").innerHTML="arrival1";
// document.getElementById("arrival2").innerHTML="arrival2";
// document.getElementById("arrival3").innerHTML="arrival3";
// document.getElementById("arrival4").innerHTML="arrival4";
// document.getElementById("arrival5").innerHTML="arrival5";
// document.getElementById("arrival6").innerHTML="arrival6";
// document.getElementById("arrival7").innerHTML="arrival7";
// document.getElementById("arrival8").innerHTML="arrival8";
// document.getElementById("arrprice1").innerHTML="Price: N5,000 arrprice1";
// document.getElementById("arrprice2").innerHTML="Price: N5,000 arrprice2";
// document.getElementById("arrprice3").innerHTML="Price: N5,000 arrprice3";
// document.getElementById("arrprice4").innerHTML="Price: N5,000 arrprice4";
// document.getElementById("arrprice5").innerHTML="Price: N5,000 arrprice5";
// document.getElementById("arrprice6").innerHTML="Price: N5,000 arrprice6";
// document.getElementById("arrprice7").innerHTML="Price: N5,000 arrprice7";
// document.getElementById("arrprice8").innerHTML="Price: N5,000 arrprice8";

// document.getElementById("section1").innerHTML="Section1";
// document.getElementById("popular-pro1").innerHTML="Popular Pro1";
// document.getElementById("popular-pro2").innerHTML="Popular pro2";
// document.getElementById("service1").innerHTML="Service1";
// document.getElementById("serinfo1").innerHTML="info1";
// document.getElementById("service2").innerHTML="Service2";
// document.getElementById("serinfo2").innerHTML="info2";
// document.getElementById("sotwitter").href="www.twitterid.com";
// document.getElementById("sofacebook").href="www.facebookid.com";
// document.getElementById("sopinterest").href="www.Pinterest.com";

// document.getElementById("cat1").innerText="Category1";
// document.getElementById("cat2").innerText="Category2";
// document.getElementById("cat3").innerText="Category3";
// document.getElementById("phone").innerText="080-DIGI-BAYE";
// document.getElementById("mail").innerText="name.digibayelsa.com";
// document.getElementById("address").innerText="34 DigiBayelsa Lane,Yenagoa, Bayelsa";