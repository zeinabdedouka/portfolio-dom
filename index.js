// 1.
const titre = document.getElementById('fullName');
titre.textContent = 'Hey, I\'m ' + datas.fullname;
// 2.
const titre1 = document.getElementById('profil');
titre1.textContent =  datas.profil;
// 3.
const paragraphe = document.getElementById('description');
paragraphe.textContent = datas.description;
// 4.
const image = document.querySelector('.img-fluid');
image.src = datas.picture;
// 5.
 const allUl = document.querySelectorAll('.socials');
for (let i = 0; i < allUl.length; i++) {
  const ul = allUl[i];
  ul.innerHTML = '';
  for (let j = 0; j < datas.socials.length; j++) {
   const icon = datas.socials[j];
    ul.innerHTML += ` <li>
    <a href="${icon.url}"><img src="${icon.link}" alt="${icon.name}"></a>
  </li>`
  }
}

// 6.
function tab(element) {
  let liste = '';
  for (let i = 0; i < element.length; i++) {
         liste +=  `<li>
         <span class="card-link">${element[i]}</span>
       </li>`
  }
  return liste;
}
const divWorks = document.getElementById('works');
for (let i = 0; i < datas.works.length; i++) {
  const objetWorks = datas.works[i];
  divWorks.innerHTML += `<div class="col-xl-4 col-lg-4 col-sm-6 col-12 my-2">
  <div class="card">
    <img class="card-img-top" src="${objetWorks.preview}" alt="${objetWorks.name}">
    <div class="card-body w-100 px-0">
      <h2 class="card-title mt-0 mb-4 text-center">${objetWorks.name}</h2>
      <ul class="list-unstyled w-100 d-flex justify-content-center flex-wrap ">
        ${tab(datas.works[i].technology)}
      </ul>
      <div class="row w-100">
        <div class="d-flex justify-content-center">
          <a href="${objetWorks.url}" class="text-decoration-none px-4 py-3 mt-2 rounded">See Project</a>
        </div>
      </div>
    </div>
  </div>
</div>`
}
// 7.
const idExperiences = document.getElementById('experiences');
for (let i = 0; i < datas.experiences.length; i++) {
  const objetExp = datas.experiences[i];
  idExperiences.innerHTML += `<div class="col-xl-4 col-lg-4 col-sm-6 col-12 my-2">
  <div class="card h-100">
    <img class="card-img-top" src="${objetExp.link}" alt="${objetExp.name}">
    <div class="card-body w-100 px-0">
      <h2 class="card-title mt-0 mb-4 text-center">${objetExp.name}</h2>
      <ul class="list-unstyled w-100 d-flex justify-content-center flex-wrap">
          ${tab(datas.experiences[i].technology)}
      </ul>
    </div>
  </div>
</div>`
}
// 8.
const mail = document.getElementById('mail');
mail.textContent = datas.email;