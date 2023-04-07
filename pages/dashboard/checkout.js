import DashboardSidebar from '@/components/dashboardSidebar';
import { products } from '@/constant';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const Checkout = () => {
    const [login, setLogin] = useState('wait');
    const router = useRouter();


    const [all_product, setAllProduct] = useState([]);
    const [shippingInfo, setShippingInfo] = useState({
        address: '',
        city: '',
        postcode: ''
    });

    if (!login) {
        router.push('/login')
    }

    let price = 0;
    let orderProduct = [];

    useEffect(() => {
        const people = localStorage.getItem('people');
        const log = JSON.parse(people);
        const json_product = localStorage.getItem('product');
        const all_products = JSON.parse(json_product);
        setAllProduct(all_products);
        setLogin(log);
    }, []);


    all_product.map(pro => {
        const singleProduct = products.find(product => product.id === pro.id);
        const a = { product: singleProduct.name, quantity: pro.quantity, price: singleProduct.price };
        orderProduct.push(a);
        const total = singleProduct.price * pro.quantity;
        price = price + total;
    });

    shippingInfo.price = price;
    shippingInfo.product = orderProduct;

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(shippingInfo);
    }

    return (
        <DashboardSidebar login={login}>
            <div className="p-2">
                <h1 className='text-center text-primary text-lg sm:text-2xl font-bold'>Welcome to Your Dashboard</h1>
            </div>            <div className="overflow-x-auto px-5">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {all_product.length ? all_product?.map((pro, index) => {
                            const singleProduct = products.find(product => product.id === pro.id);
                            const total = singleProduct.price * pro.quantity;
                            return (
                                <tr key={index}>
                                    <th>{index + 1}</th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div>
                                                <div className="font-bold">{singleProduct.name}</div>
                                                <div className="text-sm font-bold opacity-50">Price: <span className='text-primary'>${singleProduct.price}</span></div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{pro.quantity}</td>
                                    <td>{total}</td>
                                </tr>

                            )
                        })
                            :
                            <tr>
                                <td></td>
                                <td className='md:text-xl text-center font-bold'>You didn't add any product on your <span className='btn btn-outline btn-primary btn-xs'>cart</span></td>
                                <td></td>
                                <td></td>
                            </tr>
                        }
                        <tr>
                            <td></td>
                            <td>For adding more product, Go to <Link href='/cart' className='text-primary text-lg font-semibold cursor-pointer'>Cart</Link> page.</td>
                            <th>Total</th>
                            <th>{price}</th>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="px-5">
                <h3 className='text-center my-5 text-lg sm:text-2xl font-bold'>Please Give Shipping Address for Confirm Your Order</h3>
                <div className='flex flex-col justify-center rounded-2xl bg-white pt-5 overflow-x-auto px-5 items-center gap-4'>
                    <div className="form-control w-full max-w-xs">
                        <label className='label'>
                            <span className="label-text">Name</span>
                        </label>
                        <p className='input input-bordered w-full max-w-xs py-3'>{login?.name}</p>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className='label'>
                            <span className="label-text">Mobile Number</span>
                        </label>
                        <p className='input input-bordered w-full max-w-xs py-3'>{login?.phone}</p>
                    </div>
                </div>
                <form onSubmit={handleSubmit} className='flex flex-col justify-center rounded-2xl bg-white pb-5 overflow-x-auto px-5 items-center gap-4'>
                    <div className="form-control w-full max-w-xs">
                        <label className='label'>
                            <span className="label-text">Address</span>
                        </label>
                        <input type="text" name="address" className='input input-bordered w-full max-w-xs' required onChange={(e) => setShippingInfo({ ...shippingInfo, address: e.target.value })} />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className='label'>
                            <span className="label-text">City</span>
                        </label>
                        <input type="text" name="city" className='input input-bordered w-full max-w-xs' required onChange={(e) => setShippingInfo({ ...shippingInfo, city: e.target.value })} />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className='label'>
                            <span className="label-text">Postal Code</span>
                        </label>
                        <input type="text" name="post" className='input input-bordered w-full max-w-xs' required onChange={(e) => setShippingInfo({ ...shippingInfo, postcode: e.target.value })} />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <button className="btn btn-primary text-white font-bold">Confirm Order</button>
                    </div>
                </form>
            </div>

        </DashboardSidebar>
    );
};


export default Checkout;