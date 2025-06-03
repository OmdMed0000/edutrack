import { useState } from 'react';
import { Link, useForm } from '@inertiajs/react';
import Layout from '../../../layouts/Layout';

export default function CreateUser() {
    const { data, setData, post, processing, errors } = useForm({
        full_name: '',
        email: '',
        phone_number: '',
        role_id: '',
        birth_date: '',
        gender: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('admin.humanResources.store'));
    };

    return (
        <Layout>
            <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <div className="md:grid md:grid-cols-3 md:gap-6">
                    <div className="md:col-span-1">
                        <div className="px-4 sm:px-0">
                            <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-gray-100">
                                Create New User
                            </h3>
                            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                                Add a new user to your school's staff.
                            </p>
                        </div>
                    </div>

                    <div className="mt-5 md:mt-0 md:col-span-2">
                        <form action='' method='POST'>
                            
                            <div className="shadow sm:rounded-md sm:overflow-hidden">
                                <div className="px-4 py-5 bg-white dark:bg-gray-800 space-y-6 sm:p-6">
                                    <div>
                                        <label htmlFor="full_name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                            Full Name
                                        </label>
                                        <input
                                            type="text"
                                            name="full_name"
                                            id="full_name"
                                            value={data.full_name}
                                            onChange={e => setData('full_name', e.target.value)}
                                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                        />
                                        {errors.full_name && <div className="text-red-500 text-sm mt-1">{errors.full_name}</div>}
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            value={data.email}
                                            onChange={e => setData('email', e.target.value)}
                                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                        />
                                        {errors.email && <div className="text-red-500 text-sm mt-1">{errors.email}</div>}
                                    </div>

                                    <div>
                                        <label htmlFor="phone_number" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone_number"
                                            id="phone_number"
                                            value={data.phone_number}
                                            onChange={e => setData('phone_number', e.target.value)}
                                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                        />
                                        {errors.phone_number && <div className="text-red-500 text-sm mt-1">{errors.phone_number}</div>}
                                    </div>

                                    <div>
                                        <label htmlFor="role_id" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                            Role
                                        </label>
                                        <select
                                            id="role_id"
                                            name="role_id"
                                            value={data.role_id}
                                            onChange={e => setData('role_id', e.target.value)}
                                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                        >
                                            <option value="">Select a role</option>
                                            <option value="2">Absence Manager</option>
                                            <option value="3">Teacher</option>
                                        </select>
                                        {errors.role_id && <div className="text-red-500 text-sm mt-1">{errors.role_id}</div>}
                                    </div>

                                    <div>
                                        <label htmlFor="birth_date" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                            Birth Date
                                        </label>
                                        <input
                                            type="date"
                                            name="birth_date"
                                            id="birth_date"
                                            value={data.birth_date}
                                            onChange={e => setData('birth_date', e.target.value)}
                                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                        />
                                        {errors.birth_date && <div className="text-red-500 text-sm mt-1">{errors.birth_date}</div>}
                                    </div>

                                    <div>
                                        <label htmlFor="gender" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                            Gender
                                        </label>
                                        <select
                                            id="gender"
                                            name="gender"
                                            value={data.gender}
                                            onChange={e => setData('gender', e.target.value)}
                                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                        >
                                            <option value="">Select gender</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                        </select>
                                        {errors.gender && <div className="text-red-500 text-sm mt-1">{errors.gender}</div>}
                                    </div>
                                </div>

                                <div className="px-4 py-3 bg-gray-50 dark:bg-gray-700 text-right sm:px-6">
                                    <Link
                                        href={route('admin.humanResources')}
                                        className="inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-700"
                                    >
                                        Cancel
                                    </Link>
                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        Create User
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    );
} 