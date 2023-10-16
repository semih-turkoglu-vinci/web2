const divs = document.querySelectorAll('div');
divs.forEach((div) => {
    let big = false;
  div.addEventListener('click', (e) => {
    if (!big) {
e.target.innerText = e.target.style.backgroundColor;
    e.target.style.width = "100px";
    e.target.style.height = "100px";
    big = true;
  }
     else {
        div.addEventListener('click', (e) => {
    e.target.innerText="";
    e.target.style.width="50px";
    e.target.style.height="50px";
    e.target.display= "inline-block";
    big = false;
  });
}
    
  
})});