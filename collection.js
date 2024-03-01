var checkboxes = document.getElementsByName("check")

var overall_prodcuts = document.getElementById("overall_prodcuts")
var divlist = overall_prodcuts.querySelectorAll("div")
// console.log(checkbox[0].value)
console.log(divlist)

var tagsElement = document.getElementById('tags');
var tags = tagsElement.textContent.split(','); // Assuming the content is comma-separated
console.log(tags);

function filterProducts(event) {
    var checkboxes = document.getElementsByName("check");
    var products = document.querySelectorAll('.Products_1');

    var anyCheckboxChecked = Array.from(checkboxes).some(checkbox => checkbox.checked);

    products.forEach(product => {
        var tag = product.querySelector('tags');
        var showProduct = false;

        checkboxes.forEach(checkbox => {
            if (checkbox.checked &&
                ((checkbox.value === "Summer" && tag.textContent.includes("Summer")) ||
                    (checkbox.value === "Party" && tag.textContent.includes("Party")) ||
                    (checkbox.value === "Beach" && tag.textContent.includes("Beach")))) {
                showProduct = true;
            }
        });

        product.style.display = showProduct || !anyCheckboxChecked ? 'block' : 'none';
    });

}


function colorfilter(event) {

    var color_check = document.getElementsByName('color_check')

    var products = document.querySelectorAll('.Products_1');

    var anycolorfilterchecked = Array.from(color_check).some(colorcheckbox => colorcheckbox.checked);



    products.forEach(products => {
        var tag = products.querySelector('tags')
        var showProduct = false;

        color_check.forEach(color_checkes => {
            if (color_checkes.checked &&
                ((color_checkes.value === "Red" && tag.textContent.includes("Red")) ||
                    (color_checkes.value === "Blue" && tag.textContent.includes("Blue")) ||
                    ( color_checkes.value === "Green" && tag.textContent.includes("Green"))||
                    (color_checkes.value === "White" && tag.textContent.includes("White")))) {
                showProduct = true;
            }
        });
products.style.display = showProduct ||!anycolorfilterchecked? "block":"none"

    });
}


