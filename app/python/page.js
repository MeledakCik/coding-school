"use client";
import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';

const TutorialPage = () => {
    const [openSubmenu, setOpenSubmenu] = useState(null);
    const handleBack = () => {
        window.history.back();
    };

    const toggleSubmenu = (menu) => {
        setOpenSubmenu(openSubmenu === menu ? null : menu);
    };

    return (
        <div className="flex min-h-screen bg-gray-100">
            <aside className="w-64 bg-gray-300 border-l border-gray-300 p-4 shadow-lg">
                <h2 className="text-xl font-semibold mb-4">Tutorial Python</h2>
                <ul className="space-y-1">
                    <li>
                        <a
                            href="#pendahuluan"
                            className="block p-2 text-black border-b-2 border-gray-400 hover:bg-blue-100 w-full rounded transition duration-200"
                        >
                            Pendahuluan
                        </a>
                    </li>
                    <li>
                        <a
                            href="#instalasi"
                            className="block p-2 text-black border-b-2 border-gray-400 hover:bg-blue-100 w-full rounded transition duration-200"
                        >
                            Instalasi Python
                        </a>
                    </li>
                    <li>
                        <div
                            onClick={() => toggleSubmenu('pythonSyntax')}
                            className="flex p-2 text-black border-b-2 border-gray-400 hover:bg-blue-100 w-full rounded transition duration-200"
                        >
                            <span className="mr-[70px]">Python Syntax</span>
                            {openSubmenu === 'pythonSyntax' ? (
                                <ChevronUpIcon className="w-5 h-5 text-blue-600 mt-1" />
                            ) : (
                                <ChevronDownIcon className="w-5 h-5 text-blue-600 mt-1" />
                            )}
                        </div>
                        {openSubmenu === 'pythonSyntax' && (
                            <ul className="ml-4 space-y-1 mt-1">
                                <li>
                                    <a
                                        href="#contoh-syntax"
                                        className="block p-2 border-b-2 border-gray-400  text-gray-500 hover:bg-blue-100 rounded transition duration-200"
                                    >
                                        Contoh Syntax
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#penjelasan-syntax"
                                        className="block p-2 text-gray-500 border-b-2 border-gray-400  hover:bg-blue-100 rounded transition duration-200"
                                    >
                                        Penjelasan Syntax
                                    </a>
                                </li>
                            </ul>
                        )}
                    </li>
                </ul>
            </aside>
            <div className="flex-1 p-6">
                <div className='w-full p-3'>
                    <h1 className="text-4xl font-bold mb-4">Tutorial Python</h1>
                    <p className="mb-4">
                        Selamat datang di tutorial Python. Dalam tutorial ini, kita akan membahas berbagai aspek dari bahasa pemrograman Python.
                    </p>
                </div>
                <div className='w-full bg-green-200 p-8'>
                    <h2 className="text-3xl font-semibold mb-2" id="pendahuluan">Pendahuluan</h2>
                    <p className="mt-4">
                        - Python adalah bahasa pemrograman yang populer dan mudah dipelajari.
                    </p>
                    <p className="mt-2">
                        - Python bisa di gunakan dalam server untuk membuat web aplikasi.
                    </p>
                    <p className="mt-2">
                        - Python juga bisa di gunakan dalam bidang scraping atau pun framework.
                    </p>
                </div>
                <div className='w-full p-4 mt-3'>
                    <h2 className="text-3xl font-semibold mb-2">Instalasi</h2>
                    <p className="mt-4">
                        Banyak orang menggunakan Pc dan Mac untuk menginstall python.
                    </p>
                    <p className="mt-4">
                        Untuk Mengecek jika kamu memiliki instalasi python di windows, cari di bar pertama python atau menjalankan di dalam command prompt (cmd.exe):
                    </p>
                    <pre className="bg-gray-200 p-4 mt-4 rounded-lg">
                        <code>
                            <p className='bg-black p-2 text-white rounded-lg'>C:\Users\Your Name\ $python --version</p>
                        </code>
                    </pre>
                    <p className='mt-4'>
                        Untuk Mengecek jika kamu memiliki instalasi python untuk linux atau mac, ketika di dalam linux buka (cmd) atau mac buka terminal dan ketik:
                    </p>
                    <pre className="bg-gray-200 p-4 mt-4 rounded-lg">
                        <code>
                            <p className='bg-black p-2 text-white rounded-lg'>python --version</p>
                        </code>
                    </pre>
                    <p className="mt-4">
                        Jika kamu menemukan bahwa kamu tidak memiliki instalasi python di komputer, kamu bisa download secara gratis dari mengikuti web <a href="https://www.python.org/downloads/" className="text-blue-500">ini</a>.
                    </p>
                    <div className='border-b-2 border-gray-200 mt-7'></div>
                </div>
                <div className='w-full p-4 mt-4'>
                    <h2 className="text-3xl font-semibold mb-2" id="file">Menjalankan FIle Python</h2>
                    <p className='mt-4'>Python adalah bahasa pemrograman yang ditafsirkan, artinya sebagai pengembang Anda menulis file Python (.py) di editor teks dan kemudian memasukkan file tersebut ke dalam interpreter python untuk dieksekusi.</p>
                    <pre className="bg-gray-200 p-4 mt-4 rounded-lg">
                        <code>
                            <button className='bg-gray-500 p-2 rounded-t text-white'>helloworld.py</button>
                            <p className='bg-white p-4'>{`print(Hello, World!)`}</p>
                        </code>
                    </pre>
                    <p className='mt-4'> Mudah nya. simpan file kamu, buka cmd, pindahkan directory kamu ke cmd, dan jalankan:</p>
                    <pre className="bg-gray-200 p-4 mt-4 rounded-lg">
                        <code>
                            <p className='bg-black p-2 text-white rounded-lg'>C:\Users\Your Name\ $python helloworld.py</p>
                        </code>
                    </pre>
                    <p className="mt-4">
                        Pada contoh di atas, program akan mencetak `Hello, World!` ke layar.
                    </p>
                    <pre className="bg-gray-200 p-4 mt-4 rounded-lg">
                        <code>
                            <p className='bg-black p-2 text-white rounded-lg'>Hello, World!</p>
                        </code>
                    </pre>
                    <p className='mt-4'>Selamat!!, kamu berhasil membuat aplikasi program python pertama kamu.</p>
                    <div className='border-b-2 border-gray-200 mt-7'></div>
                </div>
                <div className='w-full p-4 mt-4'>
                    <h2 className="text-3xl font-bold mb-2">Coding School&apos; Python Editor</h2>
                </div>
            </div>

            <button
                onClick={handleBack}
                className="fixed bottom-4 right-4 px-5 p-4 bg-blue-400 text-white rounded-full shadow-lg hover:bg-blue-700 transition duration-200"
                aria-label="Kembali"
            >
                &larr;
            </button>
        </div>
    );
};

export default TutorialPage;
