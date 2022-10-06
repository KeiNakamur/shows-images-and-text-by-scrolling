//引数内は.を忘れずに....
let imageItems = [...document.querySelectorAll(".img-wrap")];
let titles = [...document.querySelectorAll("h2")];
let titleMessage = document.querySelector(".title");

let setItemActive = (entries) => {
            entries.map((entry) => {
                if(entry.isIntersecting){
                    entry.target.classList.add("active");
                }else {
                    entry.target.classList.remove("active");
                }
            });
};

let options = {};


//interSeptionObserverを使用(特定の位置で関数を呼び出す)
let observer = new IntersectionObserver(setItemActive, options);

//titleMessageを監視する
observer.observe(titleMessage);

//img-wrapは偶数と奇数で表示する場所が違う
imageItems.map((item, index) => {
   item.children[0].style.backgroundImage = `url(./images/${index + 1}.jpeg)`;
   index % 2 == 0 ? (item.style.left = "55%") : (item.style.left = "5%");
   observer.observe(item);
});


titles.map((title, index) => {
    index % 2 == 0 ? (title.style.left = "55%") : (title.style.left = "5%");
    observer.observe(title);
})



