const elementOfSynonyms = (word)=>
{
    const lala = word.map( el =>`<span class="btn">${el}</span>`);
  return lala.join(" ");

}

function learnLesson()
{
    const url = "https://openapi.programming-hero.com/api/levels/all"
    fetch(url)
    .then(res => res.json())
    .then(data => getLesson (data.data));

}

const removeActive = ()=>
{
    const uniqueBtn = document.querySelectorAll(".lesson-btn");
    uniqueBtn.forEach(btn =>btn.classList.remove("active"));

}

const manageSpinner = (status)=>
{
    if(status == true)
    {
        document.getElementById("spinner").classList.remove("hidden");
        document.getElementById("word-container").classList.add("hidden");
    }
    else{
        document.getElementById("word-container").classList.remove("hidden");
        document.getElementById("spinner").classList.add("hidden");
    }


}
function buttonClick(id)
{
   
    const url = `https://openapi.programming-hero.com/api/level/${id}`
    fetch(url)
    .then(res => res.json())
    .then(data =>{
        removeActive();
        const newBtn = document.getElementById(`lesson-btn-${id}`);
        newBtn.classList.add("active");
;      getWord(data.data);
    });
       
}


const loadDataDetails = async(id)=>
{

    const url = `https://openapi.programming-hero.com/api/word/${id}`;
    const res = await fetch(url);
    const result = await res.json();
    getDataDetails(result.data);

}
const getDataDetails = (loadWord)=>
{

    const loadData = document.getElementById("load-data");
    loadData.innerHTML =`
    <div class="">
        <h2 class="font-bold text-3xl">${loadWord.word} : ${loadWord.pronunciation}</h2>
    </div>

    <div class="">
        <h4 class="font-bold text-2xl">Meaning</h4>
        <p class="">${loadWord.meaning}</p>
    </div>


    <div class="">
        <h4 class="font-semibold text-2xl">Example</h4>
        <p class="">${loadWord.sentence}</p>
    </div>

    <div class="space-y-3">
    <h3 class="font-semibold text-2xl" >Synonyms </h3>
    <div>${elementOfSynonyms(loadWord.synonyms)}</div>
    <button class=>Complete learning</button>
    `;
    
 document.getlementById("my_modal_5").showModal();
 
   

}


const getWord = (word)=>
{
    manageSpinner(true);
    const mainDiv = document.getElementById("word-container");
     mainDiv.innerHTML ="";

    if(word.length == 0)
    {
        mainDiv.innerHTML = `
        
        <div class="word-child-container text-center bg-slate-200 col-span-full py-10 space-y-3 font-bangla rounded-lg shadow-sm">
            <img src="assets/alert-error.png" alt="" class=" mx-auto ">

            <p class="text-gray-500">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
            <h1 class="font-semibold text-4xl">নেক্সট Lesson এ যান </h1>

        </div>
 `;
 manageSpinner(false);

 return;
    }
    word.forEach(element => {
        const newWord = document.createElement("div");
        newWord.innerHTML = `
          <div class="bg-white rounded-md shadow-sm text-center py-15">
                         <h2 class="font-bold text-2xl">${element.word ? element.word : "কোনো শব্দ যুক্ত করা হয়নি"}</h2>
            <p class="my-3">Meaning /Pronounciation</p>
            <h2 class="fon-bangla font-semibold text-2xl text-gray-700">
            ${element.meaning ? element.meaning : "কোনো শব্দ যুক্ত করা হয়নি"} /${element.pronunciation ? element.pronunciation : "কোনো  Pronunciation যুক্ত করা হয়নি"}</h2>

            <div class="flex justify-between m-5">
                <buttion  onclick="loadDataDetails(${element.id})" class="btn bg-[#1A91FF10] hover:bg-[#1A91FF80] "><i class="fa-solid fa-circle-info"></i></buttion>
                <buttion  class="btn bg-[#1A91FF10] hover:bg-[#1A91FF80]"><i class="fa-solid fa-volume-high"></i></buttion>
            </div>
            </div>


        `
        mainDiv.appendChild(newWord);
        
    });
        manageSpinner(false);
    
    };

const getLesson = (lesson)=>
{

    const mainContainer = document.getElementById("level-container");
    mainContainer.innerHTML = "";

    for(let leson of lesson)
    {
        const newElement = document.createElement("div");
        newElement.innerHTML=
        `
        <button id="lesson-btn-${leson.level_no}" onclick = "buttonClick(${leson.level_no})
        " class="btn btn-outline btn-primary lesson-btn">
        <i class="fa-solid fa-book-open-reader"></i> Lesson-${leson.level_no}</button>

        `
        mainContainer.appendChild(newElement);
    }
}

learnLesson();