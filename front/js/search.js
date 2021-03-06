import API from "./api.js";
function main() {
    sendLog();
    const targets = document.querySelectorAll(".result-box");
    const len = targets.length;
    let text = "";
    if(len===0){
        text = "検索結果が見つかりませんでした。別のキーワードで調べてみて下さい。"
    }
    else if (0< len && len < 20){
        text = `検索の結果が${len}件見つかりました。`
    }
    else {
        text = "検索結果の表示は最大20件です。"
    }
    const searchTitle = document.querySelector('#search-title');
    const notify = document.querySelector('#notify');
    searchTitle.innerHTML = `${getQuery()["search"]}`;
    notify.innerHTML = text;
}

function getQuery() {
    const query = window.location.search.slice(1);
    const queryObj = {};
    query.split("&").map(o => queryObj[o.split("=")[0]] = decodeURI(o.split("=")[1]));
    return queryObj;
}

function sendLog(){
    const resultA = document.querySelectorAll('.results');
    for (let a of resultA) {
        a.addEventListener("click", () => {
            const href = a.getAttribute('href');
            API.sendUrl(href);
        })
    }
}

main();
