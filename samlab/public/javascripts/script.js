document.addEventListener('DOMContentLoaded', () => {

  console.log('IronGenerator JS imported successfully!');

}, false);
const tableBody=document.querySelector(".table-body")

var slideIndex = 0;
showSlides();

function showSlides() {

  var i;
  var slides = document.getElementsByClassName("lab-banner");
 
  if(slides.length>0){
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
  
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 2000);

  }
  
}

function testSubmit(){
  const buttontoSubmit=document.getElementById("test-submit")
  buttontoSubmit.classList.add("button-clicked")
  const values=document.querySelectorAll(".testCheckBox")//got all the checkboxes
  var selectedItems=[];
//  checking which boxes are checked and if checked, its value(which contains the id.. see user.hbs) is pushed into the selectedItems array
  values.forEach((element)=>{
    if(element.checked){
      selectedItems.push(element.value)
    }
  })
//
// now , ajax sends the array of this checked values which is in selectedItem array by  post request to the route ('/user/test-submit').. now ,so.. go to this route which is in user.js and available by the variablename "data"
  axios.post('/user/test-submit', {
      data:selectedItems
  })
  .then(function (response) {//you are back from user.js ..response.data ma uta bata pathako variables tests and userTests huncha
    var testsData=response.data.tests;
    var userTestsData=response.data.userTests;
    console.log(response.data.userTests)
    testsData.forEach((element,index)=>{
      console.log("the index is", index)

      var row=document.createElement("tr")
      row.innerHTML=`
        <td class="table-division">${element.name}</td>
        <td class="table-division">${userTestsData.date}</td>
        <td class="table-division">${userTestsData.status}</td>
         <td> <a href=""><i class="fas fa-calendar-times"></i> </a></td>`
    tableBody.prepend(row);
    values.forEach((element)=>{
      return (element.checked=false)
    })

    buttontoSubmit.classList.remove("button-clicked")

    })
    
  })
  .catch(function (error) {
    console.log(error);
  });

}

console.log(new Date())






