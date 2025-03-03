import React from 'react';
import { PROFILE_URL } from '../utils/constants';
import { useSelector } from 'react-redux';


const Home = () => {
    const darkMode = useSelector((state) => state.theme.darkMode);
    const theme = darkMode ? 'dark' : 'light';



    return (
        <>
            <div className={`bg-${theme}-background text-${theme}-textPrimary min-h-screen p-4 relative`}>


                {/* Content */}
                <div className="flex justify-center relative z-10">
                    <div className="w-1/2 m-auto text-center">
                        <div className="flex justify-center">
                            <img
                                src={PROFILE_URL}
                                alt="profilePic"
                                className={`h-40 rounded-full shadow-lg border-4 border-${theme}-surface`}
                            />
                        </div>
                        <h1 className="text-6xl font-bold mt-4">Hi there! I am Pramod</h1>
                        <h2 className="text-4xl font-semibold mt-2">
                            Software Developer from India.
                        </h2>

                        <div className="flex justify-center mt-6">
                            <button
                                className={`p-2 m-2 px-4 text-xl bg-${theme}-primary text-white rounded-lg font-semibold hover:bg-${theme}-secondary`}
                            >
                                Email me
                            </button>
                            <button
                                className={`p-2 m-2 px-4 text-xl bg-${theme}-primary text-white rounded-lg font-semibold hover:bg-${theme}-secondary`}
                            >
                                My resume
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </>

    );
};

export default Home;