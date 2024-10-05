import React from 'react';

const Sidebar = () => {
    return (
        <div className="w-[300px] h-screen bg-gray-800 text-white flex flex-col p-4">
            <h1 className="text-2xl font-bold mb-8">Coding School</h1>
            <ul className="space-y-4">
                <li className="hover:bg-gray-700 p-2 rounded">Home</li>
                <li className="hover:bg-gray-700 p-2 rounded">About</li>
                <li className="hover:bg-gray-700 p-2 rounded">Contact</li>
            </ul>
        </div>
    );
};

export default Sidebar;
