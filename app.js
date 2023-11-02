const key="3kjL1GPDi4suyQdLH-rGdxsaunA23fZYf49P7uMJ0Hs";
let input=document.querySelector(".inp");
let btn=document.querySelector(".btn");
let form=document.querySelector(".frm");
let seeMore=document.querySelector(".see-more");
let output=document.querySelector(".display");
let page=1;
async function search(value){
    
    if(page===1){
        output.innerHTML="";
    }
    let url=`https://api.unsplash.com/search/photos?page=${page}&query=${value}&client_id=${key}&per_page=12`;
    const response=await fetch(url);
    let data=await response.json();
    console.log(data);
    data.results.map((result)=>{
        let image =document.createElement("img");
       image.src=result.urls.small;
       let div=document.createElement("div");
       div.className='images';
       div.appendChild(image);
       let download=document.createElement('a');
       download.href=result.links.download;
       download.textContent='Download-image';
       download.target="_blank";
       download.className='down';
       div.appendChild(download);
       output.appendChild(div);
    })
    
    
}
let value="";
form.addEventListener("submit", (e)=>{
e.preventDefault();
 value=input.value;
 output.innerHTML="";
search(value);
seeMore.style.display='block';
});
seeMore.addEventListener('click', (e)=>{
    page++;
    search(value);
    })

