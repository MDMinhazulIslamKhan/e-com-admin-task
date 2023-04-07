import { bata, iphone, leather_shoes, monitor, pair_trainers, samsung, sandle, sharee, shirt, t_shirt, tv } from '../assets'

const products = [
    {
        id: 1,
        image: bata,
        name: 'Bata shoe',
        short_dis: 'Bata Summer Sandal Shoe for Men',
        long_dis: 'Comfortable, Stylish & Elegant Bata Summer Sandal for men. There are three different color: blue, black and chocolate.',
        price: 1200
    },
    {
        id: 2,
        image: samsung,
        name: 'Samsung S20',
        short_dis: 'Manufactured by Samsung Electronics as part of its Galaxy S series.',
        long_dis: `The Galaxy S20 Ultra is Samsung's newest Flagship Smartphone with the latest most advanced state-of-the-art OLED Display with a Full Screen design. Size: 6.2 inches. Android 10, upgradable to Android 13, One UI 5. Internal: 128GB 8GB RAM.`,
        price: 80000
    },
    {
        id: 3,
        image: tv,
        name: 'Vision LED TV',
        short_dis: 'Vision 24" LED TV S2',
        long_dis: `MVA  Panel technology with Contrast ratio 3000:1 & Brightness-185 cd/m2 & Resolution : 1366 x 768 & 4 ohms 5 Watt*2 Watt speakers & Over Voltage and current protection & 16.7 Million (8 bit) Colors & 1-USB,1-HDMI,VGA supported & Backlight Adjustment Facility & MPEG Noise Reduction Facility & Earphone out facility.
        Warranty: After sales service warranty 2 years.`,
        price: 13000
    },
    {
        id: 4,
        image: iphone,
        name: 'iPhone 14 Pro Max',
        short_dis: `The iPhone 14 and the iPhone 14 Plus are Apple's "affordable" flagship iPhones.`,
        long_dis: `The iPhone 14 Pro and Pro Max feature a Super Retina XDR OLED display with a typical maximum brightness of 1,000 nits. However, it can go all the way up to 1,600 nits while watching HDR videos, and 2,000 nits outdoors. The display has a refresh rate of 120 Hz and utilizes LTPO technology.`,
        price: 210000
    },
    {
        id: 5,
        image: shirt,
        name: 'Long Sleeve Shirt',
        short_dis: 'New Stylish Long Sleeve Casual Shirt for Men.',
        long_dis: `The Galaxy S20 Ultra is Samsung's newest Flagship Smartphone with the latest most advanced state-of-the-art OLED Display with a Full Screen design. Size: 6.2 inches. Android 10, upgradable to Android 13, One UI 5. Internal: 128GB 8GB RAM.`,
        price: 1500
    },
    {
        id: 6,
        image: sharee,
        name: 'Silk Katan Sharee',
        short_dis: 'Dot Printed Indian Silk Katan Sharee',
        long_dis: `Dot printed black and red color with simple design. This saree is long so can be draped around the body and over the shoulder. ***Katan material, ***Regular style, ***12 haat, ***46 Inch bohor, ***Size 4.8 meter.`,
        price: 3500
    },
    {
        id: 7,
        image: leather_shoes,
        name: 'Lather Shoe',
        short_dis: 'Original lather shoe with gorgeous look.',
        long_dis: `Comfortable, Stylish & Elegant Bata Summer Sandal for men. There are three different color: blue, black and chocolate.`,
        price: 4000
    },
    {
        id: 8,
        image: monitor,
        name: 'Gaming monitor',
        short_dis: 'ASUS BE229QLBH 21.5" Full HD IPS Business Monitor',
        long_dis: `ASUS BE229QLBH 21.5" Full HD IPS Business Monitor
        Resolution: FHD (1920x1080)
        Display: IPS, 60Hz, 5ms
        Ports: HDMI, VGA, 2x USB 3.2 Gen 1 Type-A
        Features: Flicker Free, Low Blue Light`,
        price: 18000
    },
    {
        id: 9,
        image: pair_trainers,
        name: 'Trainers ',
        short_dis: 'Dot Printed Indian Silk Katan Sharee',
        long_dis: `Dot printed black and red color with simple design. This saree is long so can be draped around the body and over the shoulder. ***Katan material, ***Regular style, ***12 haat, ***46 Inch bohor, ***Size 4.8 meter.`,
        price: 2200
    },
    {
        id: 10,
        image: sandle,
        name: 'Leather Sandal',
        short_dis: 'Beautiful and comfortable sandal.',
        long_dis: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias impedit quo eaque officia nobis unde dolorum rerum maiores praesentium at!',
        price: 1300
    },
    {
        id: 11,
        image: t_shirt,
        name: '100% cotton black t-shirt.',
        short_dis: 'Dot Printed Indian Silk Katan Sharee',
        long_dis: `Dot printed black and red color with simple design. This saree is long so can be draped around the body and over the shoulder. ***Katan material, ***Regular style, ***12 haat, ***46 Inch bohor, ***Size 4.8 meter.`,
        price: 400
    },
];

const navLinks = [
    {
        id: "#about",
        title: "About us",
    },
    {
        id: "/dashboard",
        title: "Dashboard",
    },
    {
        id: "/cart",
        title: "Cart",
    },
];

const addProductToLocalStorage = (id, quantity) => {
    const item = {
        id: parseInt(id),
        quantity: parseInt(quantity)
    };
    const storage = localStorage.getItem('product');
    const added_all_product = JSON.parse(storage);
    if (added_all_product) {
        const selected_product = added_all_product.find(p => p?.id == id);
        if (selected_product) {
            const index = added_all_product.indexOf(selected_product);
            const edited_item = {
                id: parseInt(selected_product.id),
                quantity: parseInt(selected_product.quantity) + parseInt(quantity)
            };
            if (edited_item.quantity === 0) {
                added_all_product.splice(index, 1);
            }
            else { added_all_product[index] = edited_item; }
            localStorage.setItem('product', JSON.stringify(added_all_product))
        }
        else {
            added_all_product.push(item)
            localStorage.setItem('product', JSON.stringify(added_all_product))
        }
    }
    else {
        localStorage.setItem('product', JSON.stringify([item]))
    }
};

const backend = 'https://e-com-backend-ten.vercel.app';
// const backend = 'http://localhost:5000/';

export { products, navLinks, addProductToLocalStorage, backend }