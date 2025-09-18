import React from 'react';
import './style.css'
import { changeLanguageApp } from "../../actions/appActions"; // Điều chỉnh đường dẫn phù hợp
import { LANGUAGES } from "../../utils/constant";
import { useDispatch, useSelector } from 'react-redux';

import enTranslations from "../../translations/en.json";
import viTranslations from "../../translations/vn.json";
const HomePage = () => {
    const dispatch = useDispatch();
    const language = useSelector((state) => state.language);

    const labels = language === LANGUAGES.EN ? enTranslations.homecontent : viTranslations.homecontent;


    const handleLanguageChange = (newLang) => {
        dispatch(changeLanguageApp(newLang));
    };
    return (
        <div>
            <div className='home-page'>
                <div className='home-container'>
                    <div className='subback-ground'>
                        <div>
                            <span>
                                <h1>
                                    {labels["title"]}
                                </h1>
                            </span>
                        </div>
                        <div>
                            <span>
                                <h3>{labels["concept"]}</h3>
                            </span>
                        </div>
                        <div>
                            <span>
                                <li>
                                    {labels["concept-content"]}
                                </li>
                            </span>
                        </div>
                        <div>
                            <span>
                                <h3>{labels["target"]}</h3>
                            </span>
                        </div>
                        <div>
                            <span>
                                <li>
                                    {labels["target-content"]}
                                </li>
                            </span>
                        </div>

                    </div>
                </div>
                <div className='home-container2'>
                    <div className='subback-ground2'>
                        <div>
                            <span>
                                <h1>
                                    {labels["title2"]}
                                </h1>
                            </span>
                        </div>
                        <div>
                            <span>

                                <h3><ul>{labels["principle1"]}</ul></h3>

                            </span>
                        </div>
                        <div>
                            <span>
                                <li>
                                    {labels["principle1-content1"]}
                                </li>
                            </span>
                        </div>
                        <div>
                            <span>

                                <h3>
                                    <ul>{labels["principle2"]}</ul></h3>

                            </span>
                        </div>
                        <div>
                            <span>
                                <li>
                                    {labels["principle1-content2"]}
                                </li>
                            </span>
                        </div>


                    </div>
                </div>
                <div className='home-container3'>
                    <div>
                        <span>

                            <h3>
                                <ul>{labels["home-content"]}</ul></h3>

                        </span>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default HomePage;