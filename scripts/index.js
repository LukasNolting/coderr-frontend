async function indexInit() {
    let response = await getBaseInfo();
    if (response.ok) {
        renderBaseInfo(response.data)
    }
    let auth = localStorage.getItem('auth-token');
    let authUser = localStorage.getItem('auth-user');
    let authUserId = localStorage.getItem('auth-user-id');
    if(auth && authUser && authUserId){
        document.getElementById('index_section').innerHTML+=`
        <div class="searchbar w_full">
                    <input id="index_search_field" placeholder="Wonach suchst du?" type="text">
                    <button class="d_flex_cc_gm" onclick="redirectToOfferListWSearch()">
                        <img src="./assets/icons/search.svg" alt="">
                    </button>
                </div>
        `
    }
    
}


async function getBaseInfo() {
    let response = await getData(BASE_INFO_URL);
    if (response.ok) {
        currentUser = response.data;
    } else {
        showToastMessage(true, ['Einige Daten konnten nicht geladen werden'])
    }
    return response;
}

function renderBaseInfo(baseInfo) {
    for (let key in baseInfo) {
        if (baseInfo.hasOwnProperty(key)) {
            let element = document.getElementById(`base_info_` + key);
            if (element) {
                element.innerText = baseInfo[key];
            }
        }
    }
}

function redirectToOfferListWSearch() {
    let inputRef = document.getElementById("index_search_field");
    redirectToOfferList(inputRef.value);
}