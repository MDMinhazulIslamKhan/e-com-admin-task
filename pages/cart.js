import { addProductToLocalStorage, products } from '@/constant';
import { useEffect, useState } from "react";
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

const Cart = () => {
    const [all_product, setAllProduct] = useState([]);
    const [click, setClick] = useState(0);
    const action = (act, id) => {
        setClick(click + 1);
        if (act === 'add') {
            return addProductToLocalStorage(id, 1);
        }
        else if (act === 'reduce') {
            return addProductToLocalStorage(id, -1);
        }
    }

    useEffect(() => {
        const json_product = localStorage.getItem('product');
        const all_products = JSON.parse(json_product);
        setAllProduct(all_products)
    }, [click]);
    let totalPrice = 0;
    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Short Description</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {all_product.length ? all_product?.map(pro => {
                        const singleProduct = products.find(product => product.id === pro.id);
                        const total = singleProduct.price * pro.quantity;
                        totalPrice = totalPrice + total;
                        return (
                            <tr key={setAllProduct.id}>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="w-16 h-16 rounded-lg">
                                                <Image src={singleProduct.image} />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{singleProduct.name}</div>
                                            <div className="text-sm font-bold opacity-50">Price: <span className='text-primary'>${singleProduct.price}</span></div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {singleProduct.short_dis}
                                </td>
                                <td>{pro.quantity}</td>
                                <td>{total}</td>
                                <th>
                                    <button className="btn btn-outline btn-primary btn-xs" onClick={() => action('add', singleProduct.id)}>Add</button>
                                    <button className="ms-2 btn btn-outline btn-error btn-xs" onClick={() => action('reduce', singleProduct.id)}>Reduce</button>
                                </th>
                            </tr>

                        )
                    })
                        :
                        <tr>
                            <td></td>
                            <td className='sm:text-2xl md:text-3xl font-bold'>You didn't add any product on your cart.</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    }
                    <tr>
                        <td></td>
                        <td></td>
                        <td className='font-bold'>Total Price</td>
                        <td>{totalPrice}</td>
                        <td><Link href='/dashboard/checkout' className={`ms-2 btn btn-outline btn-primary font-bold text-md ${!all_product.length && 'btn-disabled'}`}>Checkout</Link></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Cart;