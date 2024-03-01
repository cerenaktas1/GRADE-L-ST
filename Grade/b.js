
let userFormDOM = document.querySelector('#userForm')
userFormDOM.addEventListener('submit', formHandler)
const alertDOM = document.querySelector('#alert')

/*
const ALERT = `
<div class="alert alert-danger alert-dismissible fade show" role="alert">
  <strong>FORMu doldurmadınız!</strong> Lütfen formu doldurduğunuzdan emin olun.
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`
*/

const alertFunction = (title, message) =>`
<div class="alert alert-danger alert-dismissible fade show" role="alert">
  <strong>${title}</strong> ${message}
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`

function formHandler(event) {
    event.preventDefault()
    const USER_NAME = document.querySelector("#username")
    const SCORE = document.querySelector("#score")
    if(USER_NAME.value && SCORE.value){
        addItem(USER_NAME.value, SCORE.value)
        USER_NAME.value="" //göderdikten sonra sıfırladı
        SCORE.value=""
    } else{
        alertDOM.innerHTML = alertFunction(
            "Baslik bilgisi ",
            "Eksik bilgi girdiniz!"
        )
    } 
}


let userListDOM = document.querySelector('#userList');

const addItem = (userName, score) => {
    let liDOM = document.createElement('li');
    liDOM.innerHTML = `
    ${userName} 
    <span class="badge bg-primary rounded-pill"> ${score}</span>
    `;
    liDOM.classList.add(
        'list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
    userListDOM.append(liDOM);
};

// Sil butonlarını seçme
const deleteButtons = document.querySelectorAll('.delete-btn');

// Her bir sil butonuna tıklama olayı ekleme
deleteButtons.forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault(); // Butona tıklamayı engelle

        // Sil butonunun bulunduğu öğrenci notunun li elementini bul
        const listItem = this.closest('li');

        // Öğrenci notunu listeden kaldır
        listItem.remove();
    });
});





