document.querySelectorAll('.product-list img').forEach(item => {
    item.addEventListener('click', () => {
        let price = item.alt === "Manzana" ? 2 : item.alt === "Cereal" ? 6 : 1; // Agrega precios para los productos
        let current = document.getElementById('screen').value;
        document.getElementById('screen').value = current ? current + " + " + price : price;
    });
});

document.getElementById('clear').addEventListener('click', () => {
    document.getElementById('screen').value = "";
});
