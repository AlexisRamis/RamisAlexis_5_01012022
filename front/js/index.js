console.log("coucou");



document.addEventListener("DOMContentLoaded", function() {
    let elt = document.getElementById('test');
    elt.innerHTML = "Nos canapés";
    console.log(elt);
});
fetch("http://localhost:3000/api/products")
  .then(function(res) {
    if (res.ok) {
      return res.json();
    }
  })
  .then(function(value) {
    console.log(value);
  })
  .catch(function(err) {
    console.log(err)
  });


  // (ok) => {console.log(ok)}

  // function truc(ok) {
  //   console.log(ok)
  // }