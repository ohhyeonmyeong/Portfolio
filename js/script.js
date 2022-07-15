
const photoArr = [
    ["B&O.png", "[B&O]", "HTML5 / CSS / (publish)", "publish", "https://ohhyeonmyeong.github.io/B-O/"],
    ["Aisle.png", "[Aisle]", "HTML5 / CSS / (publish)", "publish", " https://ohhyeonmyeong.github.io/Aisle/"],
    ["CASHMERE.png", "[CASHMERE]", "HTML5 / CSS / (publish)", "publish", "https://ohhyeonmyeong.github.io/CASHMERE/"],
    ["Origin.png", "[Origin]", "HTML5 / CSS / (publish)", "publish", "https://ohhyeonmyeong.github.io/Origin/"],
    ["Inspace.png", "[Inspace]", "HTML5 / CSS / Jquery / (publish)", "publish", "https://ohhyeonmyeong.github.io/Inspace/"],
    ["Kuliner.png", "[kuliner]", "HTML5 / CSS / (publish)", "publish", "https://ohhyeonmyeong.github.io/kuliner/"],
    ["Investplan.png", "[Investplan]", "HTML5 / CSS / (publish)", "publish", "https://ohhyeonmyeong.github.io/Investcompony/"],
    ["Oclass.png", "[oclass]", "HTML5 / CSS / Jquery / Javacaript / PHP (develop)", "develop", "http://gusaud9424.dothome.co.kr/oclass/"],
    ["Cakecious.png", "[Cakecious]", "HTML5 / CSS / (publish)", "publish", "https://ohhyeonmyeong.github.io/Cakecious/"],
    ["coffeemake.png", "[coffeemake]", "HTML5 / CSS / Jquery / Javacaript / PHP (develop)", "develop", "http://gusauddl9424.pe.kr/coffeemake/"],
];

const sectionSpace = document.querySelector("#grid_system");
let sectionCont = "";

for(v of photoArr){
    sectionCont += `
        <article class = "${v[3]}">
            <div class="photo">
                <img src="./img/${v[0]}" alt="">
                <h3>${v[1]}</h3>
                <p>${v[2]}</p>
                <a href="${v[4]}">Detail_view</a>
            </div>
        </article>
    ` 
}

sectionSpace.innerHTML = sectionCont;

let grid;
const timeOut = setTimeout(() => {
    grid = new Isotope("#grid_system", {
        itemSelector : "article",
        transitionDuration : "0.5s"
    });
}, 500);

// 클릭한 곳의 이미지를 보여주는 구현
const sortBtns = document.querySelectorAll(".sort_btn li");
console.log(sortBtns);

for(v of sortBtns){
    v.addEventListener("click", (e) => {
        e.preventDefault();
        const dataSort = e.currentTarget.querySelector("a").getAttribute("data-sort");
        grid.arrange({
            filter : dataSort
        });

        // 전체 버튼의 클래스명 active 제거
        for(v of sortBtns){
            v.classList.remove("active");
        }

        // 클릭한 곳의 버튼만 클래스명 active 부여
        e.currentTarget.classList.add("active");

    });  
}

const $arrow = document.querySelector("header span");
const $header = document.querySelector("header");
console.log($arrow);

$arrow.addEventListener("click", () => {
    const isActive = $header.closest("header").classList.contains("active");
    if(!isActive){
        $arrow.closest("header").classList.add("active");
    }else{
        $arrow.closest("header").classList.remove("active");
    }

    
});
