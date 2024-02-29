const loadPhone = async (serchWhat) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${serchWhat}`)
    const data = await res.json();
    display(data.data)
    
}

function display(datas) {
 datas=datas.slice(0,5);
    
    for (const data of datas) {
        
        const phone_container = document.getElementById('phone_container');
        const div = document.createElement('div');
        div.classList = 'card w-96 bg-base-100 shadow-xl';
        div.innerHTML = ` <figure><img src="${data.image}" /></figure>
        <div class="card-body">
          <h2 class="card-title">${data.phone_name}</h2>
          <p>${data.slug}</p>
          <div class="card-actions justify-end">
            <button onclick='showDetail("${data.slug}"); my_modal_3.showModal()' class="btn btn-primary">Buy Now</button>
          </div>
        </div> `;

        phone_container.appendChild(div)

        
    }

}

const search = () => {
    const search_result= document.querySelector('.input');
    console.log();
    loadPhone(search_result.value);
}

const showDetail = async (id)=>{
    const res= await fetch(`https://openapi.programming-hero.com/api/phone/${id}`)
    const data= await res.json();
    console.log(data.data)
    const phone_name=document.getElementById('phone_name');
  
    const container= document.getElementById('container')
    container.innerHTML=`
    <img src="${data.data.image}" alt="">
    `
    phone_name.innerHTML=data.data.name;
    showModal(data.data)
   
}

function showModal(data){
  my_modal_3.showModal();
  console.log(data.name);
}




