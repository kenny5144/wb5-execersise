window.onload = function(){
    listImageOption()
    const listImage = document.getElementById("listImage")
    const addImagesBtn = document.getElementById("addImagesBtn")
    addImagesBtn.onclick= addImagesBtnOnClicked
}

let imageFiles = [
    {name: "images/fireHydrant.jpg", description: "A cute dog"},
    {name: "images/Leopard.jpg", description: "A Leopard"},
    {name: "images/MoreCat.jpg", description: "A cute Cat"},
    {name: "images/Nomes.jpg", description: "More cute cats"},
    ];


function listImageOption(){
    let listImage = document.getElementById("listImages");
    let imagefilesNum = imageFiles.length;
        for (let i = 0 ; i < imagefilesNum; i++ ){
            let theOption = new Option(imageFiles[i].description);
    
            listImage.appendChild(theOption);
    
        };
};

function addImagesBtnOnClicked(){
    const addImagesBtn = document.getElementById("addImagesBtn");
    let listImage = document.getElementById("listImages");
    let imagesStored = document.getElementById("imagesStored")
    let selectedImageDescription = listImage.value;
    let selectedFileName= getImageFileNameByDescription(imageFiles, selectedImageDescription);
    
    let newImg = document.createElement("img");
    newImg.src = selectedFileName
    newImg.alt= selectedImageDescription
    imagesStored.appendChild(newImg)


   
} ;

function getImageFileNameByDescription(imageFiles, description){


    let imagefilesNum = imageFiles.length
    for (let k = 0 ; k < imagefilesNum; k++){
        if (imageFiles[k].description == description)
        return imageFiles[k].name;

    }


}
