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

// ajax delete function
document.addEventListener('click', function(e){
  // for user test delete
  if(e.target.classList.contains("deleteUserTest")){
    // stop the default action of <a> from re-directing
    e.preventDefault()
    id = e.target.id
    console.log("my id ", id)
    axios.delete(`/user/delete/${id}`)
    .then((res)=>{
      e.target.parentElement.parentElement.parentElement.remove()
      console.log("successfully deleted", res)

    })
    .catch((err)=>{
      console.error(err)
    })
  }

  else if(e.target.classList.contains("saveUserTest")){
    e.preventDefault()
    id=e.target.id;
    var parentrow =e.target.parentElement.parentElement.parentElement
    var child = parentrow.querySelector(".result-value")

    var result=child.value.trim()
    if (result.length===0){
      alert("Empty Result!!!") 
      return;
    } 
    axios.patch(`/user/update/${id}`,{
      data:result
    })
    .then((dbRes)=>{
      console.log(parentrow.querySelector(".status"))
      parentrow.querySelector(".status").innerText="COMPLETE"
      parentrow.querySelector(".status").classList.add("class-complete");


    })
  }
});
// document.getElementById('fetch-one').onclick = function(e){
  // e.preventDefault()

function testSubmit(){
  const buttontoSubmit=document.getElementById("test-submit")
  
  const values=document.querySelectorAll(".testCheckBox")//got all the checkboxes
  var selectedItems=[];
//  checking which boxes are checked and if checked, its value(which contains the id.. see user.hbs) is pushed into the selectedItems array
  values.forEach((element)=>{
    if(element.checked){
      selectedItems.push(element.value)
    }
  })
  if (selectedItems.length<1){
    return;
  }
  buttontoSubmit.classList.add("button-clicked")
//
// now , ajax sends the array of this checked values which is in selectedItem array by  post request to the route ('/user/test-submit').. now ,so.. go to this route which is in user.js and available by the variablename "data"
  axios.post('/user/test-submit', {
      data:selectedItems
  })
  .then(function (response) {//you are back from user.js ..response.data ma uta bata pathako variables tests and userTests huncha
    var testsData=response.data.tests;
    var userTestsData=response.data.userTests;
    // console.log(response.data)
    userTestsData.forEach((element,index)=>{

      var row=document.createElement("tr")
      row.innerHTML=`
        <td class="table-division">${testsData[index].name}</td>
        <td class="table-division">${element.date}</td>
        <td class="table-division">${testsData[index].normal_value}</td>
        <td class="table-division"><input type="text" class="result-value" value=${element.result}></td>
        <td class="table-division status">${element.status}</td>
        <td>
        <a href="#"><i class="fas fa-save saveUserTest" id=${element._id}></i></a>&nbsp;&nbsp;
        <a href="/user/delete/${element._id}"><i class="fas fa-calendar-times deleteUserTest" id=${element._id}></i></a>
        </td>`
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






