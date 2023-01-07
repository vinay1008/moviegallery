let cl = console.log;

const showbtn = document.getElementById('btnn');
const backdrop = document.getElementById('backdrop');
const mymodel = document.getElementById('mymodel');
const myclose = [...document.querySelectorAll('.myClose')];
const moviecontainer = document.getElementById('moviecontainer');
const addmovie = document.getElementById('addmovie');
const titlecontrol = document.getElementById('title');
const imgcontrol = document.getElementById('image');
const ratingcontrol = document.getElementById('ratings');

let moviesarray = [
    {title:"Ved",
    imgurl:"https://m.media-amazon.com/images/M/MV5BNTA3OTEzYmQtZDFkMC00MmFjLTkwZWQtYzc3YTYwYmYwOTk4XkEyXkFqcGdeQXVyNjkwOTg4MTA@._V1_UX100_CR0,0,100,100_AL_.jpg",
    rating:"5"}
];


const templating = (arr) =>{

    let result = ``;
    arr.forEach(movie => {
        result += `<div class="col-sm-4">
        <div class="card moviecard">
            <div class="card-header">
                <h3>${movie.title}</h3>
            </div>
            <div class="card-body">
                <figure class="mb-0 movieimg">
                    <img src="${movie.imgurl}" alt="">
                </figure>
            </div>
            <div class="card-footer">
                <p class="text-right font-weight-bold">
                ${movie.rating}/5
                </p>
            </div>
        </div>
        </div>`
    })
moviecontainer.innerHTML = result;
   
}

templating(moviesarray);
{/* <div class="col-sm-4">
<div class="card moviecard">
    <div class="card-header">
        <h3>Movie Title</h3>
    </div>
    <div class="card-body">
        <figure class="mb-0 movieimg">
            <img src="" alt="">
        </figure>
    </div>
    <div class="card-footer">
        <p class="text-right font-weight-bold">
            5/5
        </p>
    </div>
</div>
</div> */}

// const onshow = () =>{
//     backdrop.classList.toggle('show');
//     mymodel.classList.toggle('show');
// }

// const oncancle =() =>{
//     backdrop.classList.toggle('show');
//     mymodel.classList.toggle('show');
// }
const ontoggle =() =>{
    backdrop.classList.toggle('show');
    mymodel.classList.toggle('show');
}

const onaddmovie = (eve) =>{
    // cl("add movie");
    let obj ={
        title:titlecontrol.value,
        imgurl:imgcontrol.value,
        rating:ratingcontrol.value
    }
    moviesarray.unshift(obj);
    titlecontrol.value =``;
    imgcontrol.value =``;
    ratingcontrol.value =``;
    ontoggle();
    templating(moviesarray);

    cl(moviesarray);
}


showbtn.addEventListener("click",ontoggle)

myclose.forEach(ele =>{
    ele.addEventListener("click",ontoggle)
})


addmovie.addEventListener("click",onaddmovie);
