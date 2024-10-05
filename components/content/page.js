"use client"; // Pastikan ini ada di bagian atas file
import React from 'react';
import Link from 'next/link'; // Import Link dari Next.js
import Image from 'next/image'; // Import Image dari Next.js
import { FaBriefcase, FaInfoCircle, FaKey } from 'react-icons/fa';

const Content = () => {
    const data = [
        { name: 'Python', imgSrc: '/python.jpg', des: 'Python Tutorial', tuj: 'Try it Yourself', pen: 'Building to script and app', url: './python' },
        { name: 'Java Script', imgSrc: '/javascript.jpeg', des: 'JavaScript Tutorial', tuj: 'Try it Yourself', pen: 'Building to script and app', url: '/javascript' },
        { name: 'Java', imgSrc: '/prof.webp', des: 'Java Tutorial', tuj: 'Try it Yourself', pen: 'Building to script and app', url: '/java' },
        { name: 'Ruby', imgSrc: '/prof.webp', des: 'Ruby Tutorial', tuj: 'Try it Yourself', pen: 'Building to script and app', url: '/ruby' },
        { name: 'HTML5', imgSrc: '/prof.webp', des: 'HTML5 Tutorial', tuj: 'Try it Yourself', pen: 'Building to script and app', url: '/html5' },
        { name: 'Next Js', imgSrc: '/prof.webp', des: 'Next.js Tutorial', tuj: 'Try it Yourself', pen: 'Building to script and app', url: '/nextjs' },
        { name: 'Golang', imgSrc: '/prof.webp', des: 'Golang Tutorial', tuj: 'Try it Yourself', pen: 'Building to script and app', url: '/golang' },
        { name: 'Node Js', imgSrc: '/prof.webp', des: 'Node.js Tutorial', tuj: 'Try it Yourself', pen: 'Building to script and app', url: '/nodejs' },
        { name: 'React Native', imgSrc: '/prof.webp', des: 'React Native Tutorial', tuj: 'Try it Yourself', pen: 'Building to script and app', url: '/reactnative' },
        { name: 'PHP', imgSrc: '/prof.webp', des: 'PHP Tutorial', tuj: 'Try it Yourself', pen: 'Building to script and app', url: '/php' },
        { name: 'C++', imgSrc: '/prof.webp', des: 'C++ Tutorial', tuj: 'Try it Yourself', pen: 'Building to script and app', url: '/cpp' },
        { name: 'SQL', imgSrc: '/prof.webp', des: 'SQL Tutorial', tuj: 'Try it Yourself', pen: 'Building to script and app', url: '/sql' },
    ];

    return (
        <div className="flex flex-wrap gap-4 max-w-full min-h-full">
            {data.map((item, index) => (
                <Link href={item.url} key={index} className="relative flex w-[350px] h-[150px] bg-white cursor-pointer">
                    <Image
                        src={item.imgSrc}
                        alt={item.name}
                        width={130}
                        height={150}
                        className="object-cover"
                    />
                    <div className="ml-4 flex flex-col space-y-2">
                        <div className="flex items-center">
                            <h2 className="text-lg font-semibold">{item.name}</h2>
                        </div>
                        <div className="flex items-center">
                            <FaBriefcase className="text-gray-500 w-4 h-4 mr-2" />
                            <h2 className="text-[14px] font-semibold">{item.des}</h2>
                        </div>
                        <div className="flex items-center">
                            <FaInfoCircle className="text-gray-500 w-4 h-4 mr-2" />
                            <h2 className="text-[14px] font-semibold">{item.tuj}</h2>
                        </div>
                        <div className="flex items-center">
                            <FaKey className="text-gray-500 w-4 h-4 mr-2" />
                            <h2 className="text-[14px] font-semibold">{item.pen}</h2>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default Content;
