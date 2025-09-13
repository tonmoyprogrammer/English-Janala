
// const learnLesson = ()=>
// {
//     fetch("https://openapi.programming-hero.com/api/levels/all")
//     .then(res => res.json())
//     .then(data => getLesson(data.data));
// }


// function buttonClick(id)
// {
//     const url = `https://openapi.programming-hero.com/api/level/${id}`
//    fetch(url)
//    .then( res => res.json())
//     .then(data => getWord(data.data))
// }


// // {id: 19, level: 1, word: 'Sincere', meaning: 'সত্‍ / আন্তরিক', pronunciation: 'সিনসিয়ার'}

// const getWord = (words) =>
// {
//     const mainContainer = document.getElementById("word-container");
//     mainContainer.innerHTML = "";
    
//   for(let word of words)
//   {
    
//       const newDiv =  document.createElement("div");
//     newDiv.innerHTML = `
//       <div class="bg-white rounded-xl shadow-sm py-15 text-center space-y-4" >

            // <h2 class="font-bold text-2xl">${word.word}</h2>
            // <p class="my-3">Meaning /Pronounciation</p>
            // <h2 class="fon-bangla font-semibold text-2xl text-gray-700">${word.meaning} /${word.pronunciation}</h2>

            // <div class="flex justify-between m-5">

            //     <buttion class="btn bg-[#1A91FF10] hover:bg-[#1A91FF80]"><i class="fa-solid fa-circle-info"></i></buttion>
            //     <buttion class="btn bg-[#1A91FF10] hover:bg-[#1A91FF80]"><i class="fa-solid fa-volume-high"></i></buttion>

            // </div>
//         </div>


//     `
//     mainContainer.appendChild(newDiv);
//   }
// }




// const getLesson = (arrayOfData)=>
// {

//     const mainDiv = document.getElementById("level-container");
//     mainDiv.innerHTML="";

//     arrayOfData.forEach((value)=>
//     {
//         const newElement = document.createElement("div");
//         newElement.innerHTML = `
        
//                  <button onclick = "buttonClick(${value.level_no}) "class="btn btn-outline btn-primary"><i class="fa-solid fa-book-open-reader"></i>Learn - ${value.level_no}</button>
//         `
//         mainDiv.appendChild(newElement);
//     });
    

// }
// learnLesson();

function learnLesson()
{
    const url = "https://openapi.programming-hero.com/api/levels/all"
    fetch(url)
    .then(res => res.json())
    .then(data => getLesson (data.data));

    "level-container"
}
function buttonClick(id)
{
    const url = `https://openapi.programming-hero.com/api/level/${id}`
    fetch(url)
    .then(res => res.json())
    .then(data => getWord(data.data));
}

const getWord = (word)=>
{
    console.log(word);

    const mainDiv = document.getElementById("word-container");
     mainDiv.innerHTML ="";
    word.forEach(element => {
        const newWord = document.createElement("div");
        newWord.innerHTML = `
          <div class="bg-white rounded-md shadow-sm text-center py-15">
                         <h2 class="font-bold text-2xl">${element.word}</h2>
            <p class="my-3">Meaning /Pronounciation</p>
            <h2 class="fon-bangla font-semibold text-2xl text-gray-700">${element.meaning} /${element.pronunciation}</h2>

            <div class="flex justify-between m-5">
                <buttion class="btn bg-[#1A91FF10] hover:bg-[#1A91FF80]"><i class="fa-solid fa-circle-info"></i></buttion>
                <buttion class="btn bg-[#1A91FF10] hover:bg-[#1A91FF80]"><i class="fa-solid fa-volume-high"></i></buttion>

            </div>
            </div>


        `
        mainDiv.appendChild(newWord);
        
    });
    
}

const getLesson = (lesson)=>
{

    const mainContainer = document.getElementById("level-container");
    mainContainer.innerHTML = "";

    for(let leson of lesson)
    {
        const newElement = document.createElement("div");
        newElement.innerHTML=
        `
        <button onclick = "buttonClick(${leson.level_no})" class="btn btn-outline btn-primary">
        <i class="fa-solid fa-book-open-reader"></i> Lesson-${leson.level_no}</button>

        `
        mainContainer.appendChild(newElement);
    }
}
learnLesson();