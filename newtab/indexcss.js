window.onload= function(){
    let imageGroup= document.getElementsByClassName("imageGroup")
    let imageGroupNum= imageGroup.length
    for (let k =0 ; k< imageGroupNum; k++){

        imageGroup[k].style.border ="red 2px solid"
    }
    let imageGroupQuery =document.querySelectorall("img:not(alt)")
    imageGroupQuery.innerHTML="graffiti image"
 
}