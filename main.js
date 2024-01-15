let switcherlis = document.querySelectorAll(".switcher li");
let imgs = Array.from(document.images);

  
  switcherlis.forEach((li)=> {
    li.addEventListener("click",removeactive);
    li.addEventListener("click",mangeimages);
  });

  // remove Active Class
  function removeactive () {
    switcherlis.forEach((li) => {
      li.classList.remove("active");
      this.classList.add("active");
    })
  }

  // Mange Images
  function mangeimages () {
    imgs.forEach((img)=> {
      img.style.display = "none"
    })
    document.querySelectorAll(this.dataset.value).forEach((el)=> {
      el.style.display = "block"
    })
  }

