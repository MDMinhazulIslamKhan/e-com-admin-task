import DashboardSidebar from '@/components/dashboardSidebar';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const SuccessOrder = () => {
    const [login, setLogin] = useState('wait');
    const router = useRouter();

    if (login?.x === '000') {
        router.push('/dashboard/checkout')
    }
    else if (!login) {
        router.push('/login')
    }

    useEffect(() => {
        const people = localStorage.getItem('people');
        const login = JSON.parse(people);
        setLogin(login);
    }, []);

    return (
        <DashboardSidebar login={login}>
            <h1 className='text-center my-5 text-lg sm:text-2xl font-bold'>Delivered Order</h1>
            <div className="overflow-x-auto px-5">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                        </tr>
                        {/* row 2 */}
                        <tr>
                            <th>2</th>
                            <td>Hart Hagerty</td>
                            <td>Desktop Support Technician</td>
                            <td>Purple</td>
                        </tr>
                        {/* row 3 */}
                        <tr>
                            <th>3</th>
                            <td>Brice Swyre</td>
                            <td>Tax Accountant</td>
                            <td>Red</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </DashboardSidebar>
    );
};


export default SuccessOrder;