

// Chỗ này là list product e thêm gì e thêm vào e nhé, thường có thêm cái tên e chèn vào alt ở img ấy e

const listProduct = [
    {
        src: './assets/imgs/nautica-mens-sleepwear-quarter-zip-knit-seaworthy_1_large.webp',
        nameProduct: "Product",
        price: 2000
    },
    {
        src: './assets/imgs/nautica-mens-sleepwear-quarter-zip-knit-seaworthy_1_large.webp',
        nameProduct: "Product",
        price: 2000
    },
    {
        src: './assets/imgs/nautica-mens-sleepwear-quarter-zip-knit-seaworthy_1_large.webp',
        nameProduct: "Product",
        price: 2000
    },
    {
        src: './assets/imgs/nautica-mens-sleepwear-quarter-zip-knit-seaworthy_1_large.webp',
        nameProduct: "Product",
        price: 2000
    }
]

const containerProduct = document.getElementById('containerProduct')
let str = ''
for (let i = 0; i < listProduct.length; i++) {
    str += ` <div class="sale_Products">
                     <div style="display: flex; height: 250px; width: 150px; background-color: #888888;">
                         <img style="margin: auto;" class="sale_Products_Img" src="${listProduct[i].src}" alt="">
                    </div>
                    <div class="product_Name">${listProduct[i].nameProduct}</div>
                    <div class="product_Price">${listProduct[i].price}$</div>
                </div>`

}



containerProduct.innerHTML = str


const elOption = document.getElementById('selectOption');
const elH1 = document.getElementById('selectBoxText');
const listElOption = document.querySelectorAll('#options div');

let isClickSelect = false;

document.getElementById('selectBox').onclick = () => {
    elOption.style.display = (isClickSelect = !isClickSelect) ? 'block' : 'none';
};

listElOption.forEach((option) => {
    option.onclick = (e) => {
        elH1.textContent = e.target.textContent;
        listElOption.forEach((opt) => opt.classList.remove('optionText'));
        e.target.classList.add('optionText');
        elOption.style.display = (isClickSelect = !isClickSelect) ? 'block' : 'none';
    };
});


// slider

const slides = document.querySelectorAll('.slide');
const slider = document.querySelector('.slider');
// const prev = document.querySelector('.prev');
// const next = document.querySelector('.next');
const dots = document.querySelectorAll('.dot');

let index = 0;

function showSlide(n) {
    if (n >= slides.length) {
        index = 0;
    } else if (n < 0) {
        index = slides.length - 1;
    }
    slider.style.transform = `translateX(${-index * 100}%)`;
    updateDots();
}

function updateDots() {
    dots.forEach((dot, i) => {
        if (i === index) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

// next.addEventListener('click', () => {
//     index++;
//     showSlide(index);
// });

// prev.addEventListener('click', () => {
//     index--;
//     showSlide(index);
// });

dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        index = i;
        showSlide(index);
    });
});

// Auto-slide
setInterval(() => {
    index++;
    showSlide(index);
}, 5000); // 5 seconds interval for auto sliding