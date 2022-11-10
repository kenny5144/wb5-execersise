window.onload=function(){
    let allParagraph = document.getElementsByTagName("p");
    let allParagraphNum = allParagraph.length;
    for (let k= 0; k < allParagraphNum; k++){

        allParagraph[k].style.border="3px black solid ";
    }
};