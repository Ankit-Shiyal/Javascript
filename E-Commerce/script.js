const products = [
  { name: "Shoes", price: 999, img: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg" },
  { name: "Watch", price: 1499, img: "https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg" },
  { name: "Headphones", price: 799, img: "https://images.pexels.com/photos/3394664/pexels-photo-3394664.jpeg" },
  { name: "T-shirt", price: 499, img: "https://images.pexels.com/photos/1002645/pexels-photo-1002645.jpeg" },
  { name: "Laptop", price: 45000, img: "https://images.pexels.com/photos/18105/pexels-photo.jpg" },
  { name: "Mobile", price: 20000, img: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg" },
  { name: "Bag", price: 1200, img: "https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg" },
  { name: "Sunglasses", price: 699, img: "https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg" },
  { name: "Camera", price: 30000, img: "https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg" },
  { name: "Keyboard", price: 999, img: "https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg" },

  { name: "Mouse", price: 499, img: "https://images.pexels.com/photos/5082566/pexels-photo-5082566.jpeg" },
  { name: "Speaker", price: 1500, img: "https://images.pexels.com/photos/63703/pexels-photo-63703.jpeg" },
  { name: "Chair", price: 3500, img: "https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg" },
  { name: "Table", price: 5000, img: "https://images.pexels.com/photos/276528/pexels-photo-276528.jpeg" },
  { name: "Bottle", price: 299, img: "https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg" },
  { name: "Shoes Sport", price: 1299, img: "https://images.pexels.com/photos/19090/pexels-photo.jpg" },
  { name: "Jacket", price: 1999, img: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg" },
  { name: "Cap", price: 399, img: "https://images.pexels.com/photos/1124465/pexels-photo-1124465.jpeg" },
  { name: "Smart TV", price: 35000, img: "https://images.pexels.com/photos/678256/pexels-photo-678256.jpeg" },
  { name: "Tablet", price: 15000, img: "https://images.pexels.com/photos/5082565/pexels-photo-5082565.jpeg" }
];

products.forEach((a) => {
  const productlist = document.getElementById("productlist")

  productlist.innerHTML += `
    <div class="col-md-3 mt-3">
   
<div class="card"">
  <img src="${a.img}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${a.name}</h5>
    <p class="card-text">₹${a.price}</p>
    <button class="btn btn-outline-primary">Add To Cart</button>
    
  </div>
</div>
    `
})


