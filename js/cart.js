// let api = JSON.parse(localStorage.getItem("product"));
let info = document.getElementById('info');

const diff= () =>{
    let api = JSON.parse(localStorage.getItem("product"));
    api.forEach(item => {
        info.innerHTML += `<div class="col-3">
        <div class="box shadow-lg p-3 mb-5 bg-body rounded border border-primary">
            <div class="imges">
                <img src="${item.thumbnail}" alt="..">
            </div>
            <div class="title py-2">
                <h2>${item.content}</h2>
            </div>
            <p class="text-success">${item.price}</p>
            <a href="#" class="btn btn-warning" onclick="return deleteD(${item.id})">Delete</a>
            <div>
        </div>
    </div>`
});
        
}

const deleteD = (id) =>{
    let cartdelete = JSON.parse(localStorage.getItem('product'));
    let arr = [];

    cartdelete.filter((remove)=>{

        if(remove.id != id){
            arr.push(remove)
        }

        localStorage.setItem('product' , JSON.stringify(arr));
        info.innerHTML = ``;
        diff();
    })
}