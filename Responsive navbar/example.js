let developers =[
{
    name:"Victor kinyanjui",
    role:"front End Lead " ,
    image: "https://avatars.githubusercontent.com/u/65751779?v=4",,
    dept:"front_end",
},
{
    name:"Victor kinyanjui",
    role:"Front End Intern " ,
    img:"C:/Users/user/OneDrive/Desktop/Javascript-for-isters/ImageGallery/img/one.jpg",
    dept:"front_end",
},
{
    name:"Victor kinyanjui",
    role:"Api Designed " ,
    img:"C:/Users/user/OneDrive/Desktop/Javascript-for-isters/ImageGallery/img/one.jpg",
    dept:"backend",
},
{
    name:"Victor kinyanjui",
    role:"UI/UX Lead " ,
    img:"C:/Users/user/OneDrive/Desktop/Javascript-for-isters/ImageGallery/img/one.jpg",
    dept:"desgin",
},
{
    name:"Victor kinyanjui",
    role:"UI/UX Lead" ,
    img:"C:/Users/user/OneDrive/Desktop/Javascript-for-isters/ImageGallery/img/one.jpg",
    dept:"desgin",
},
{
    name:"Victor kinyanjui",
    role:"Testing Lead " ,
    img:"C:/Users/user/OneDrive/Desktop/Javascript-for-isters/ImageGallery/img/one.jpg",
    dept:"testing",
},
{
    name:"Victor kinyanjui",
    role:"Testing Intern " ,
    img:"C:/Users/user/OneDrive/Desktop/Javascript-for-isters/ImageGallery/img/one.jpg",
    dept:"testing",
},
];
function createDeveloperCard(developer){
    return `
    <figure class="bg-gray-800 rounded-md p-8 dark:bg-slate-800 w-96">
    <img class="w-48 h-48 rounded-full mx-auto"
        src="${developer.img}" alt=""
        width="384" height="512" />
    <div class="pt-6 te space-y-4">
        <figcaption class="font-medium">
            <div class="text-sky-500 dark:text-sky-400 text-center">
                ${developer.name}
            </div>
            <div class="text-slate-100 dark:text-slate-500 text-center">
                ${developer.role}, ${developer.dept}
            </div>
        </figcaption>
    </div>
</figure>
    `;
}
    function paintDevelopers(developers){
        let cards = developers.map((developer) => createDeveloperCard(developer));
        document.getElementById("root").innerHTML = cards.join("");
    }
    paintDevelopers(developers);
    document.getElementById("front_end").addEventListener("click" ,() =>{
        let frontEndEngineers = developers.filter(
            (dev) => dev.dept === "front_end"
        );
        paintDevelopers(frontEndEngineers);
    });
    document.getElementById("back_end").addEventListener("click", () => {
        let backEndEngineers = developers.filter((dev) => dev.dept === "backend");
        paintDevelopers(backEndEngineers);
    });
    document.getElementById("design").addEventListener("click", () => {
        let designers = developers.filter((dev) => dev.dept === "design");
        paintDevelopers(designers);
    });
    document.getElementById("testing").addEventListener("click", () => {
        let testingEngineers = developers.filter((dev) => dev.dept === "testing");
        paintDevelopers(testingEngineers);
    });
    document.getElementById("all").addEventListener("click", () => {
        paintDevelopers(developers);
    });

    // implement a search
    document.getElementById("search").addEventListener("change" , (e) => {
        // get what the user typed
        let searchValue = e.target.value;
        // filter developers whose name include the search value
        let searchResult = developers.filter((dev) => {
            return dev.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase());
        });
        paintDevelopers(searchResult);
    });
