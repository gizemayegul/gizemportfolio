import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import myPhoto from './assests/myphoto-min.png';
import portfolio from './assests/portfolio.png';
import littlelemon from './assests/littlelemon.png';
import expensetracker from './assests/expensetracker.png'


const Projects = () => {
    return (
        <section id="project" >
            <h1>Projects</h1>
            <div id="wrapper" className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div className="card h-100">
                        <img src={expensetracker} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">ExpenseTracker React with Typescript</h5>
                            <p className="card-text">I'm happy to share my new project – an Expense Tracker made using TypeScript and React. This project allowed me to learn TypeScript and improve my React skills.

                                I wanted to create a tool for managing expenses while introducing myself to Typescript</p>
                            <a href="https://gizemayegul.github.io/expensetrackertypescript/">Check it</a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src={myPhoto} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">My Personal WebPage/Bootstrap</h5>
                            <p className="card-text">Welcome to my personal webpage! This site serves as a platform for me to showcase my skills, experiences, and projects. Using the power of Bootstrap and React, I've created a visually appealing and user-friendly interface to present my work and provide insights into my professional journey.</p>
                            <a href="#home">Check it</a>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card h-100">
                        <img src={littlelemon} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Little Lemon Restaurant</h5>
                            <p className="card-text">Little Lemon Restaurant is a captivating webpage designed to provide users with an immersive and visually pleasing dining experience. Developed using HTML, CSS, React, and the Chakra library, this project showcases the seamless integration of front-end technologies to create a user-friendly and interactive reservation system. </p>
                            <a href="https://gizemayegul.github.io/LittleLemonRestaurant/">Check it</a>
                            <p>I've  created a prototype for my Little Lemon Restaurant Project using Figma. This prototype brings my restaurant concept to life visually. If you're curious, I'd love to share it with you.This project really helped me learn how to use Figma and create user-friendly interface prototypes.</p>
                            <a href="https://www.figma.com/file/pYeMWjcfSPbEfnPTsYh6ay/Capstone-prototype?type=design&mode=design&t=v920SM227ltoCv7E-1">Figma Prototype</a>


                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src="https://images.mktw.net/im-808349/social" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Tech News Page</h5>
                            <p className="card-text">The News Aggregator is a web page designed to keep users up-to-date with the latest news from various sources. Developed using HTML, CSS, and JavaScript, this project leverages an API to retrieve news data and displays it in an organized manner. To overcome limitations with API integration on GitHub, a JSON file is utilized to retrieve the data seamlessly. Whether you're a news enthusiast or simply looking for a convenient way to stay informed, the News Aggregator provides a user-friendly interface to access and explore current news articles.</p>
                            <a href="https://gizemayegul.github.io/technews/">Check it</a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src={portfolio} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">One Page Portfolio</h5>
                            <p className="card-text">The Personal Portfolio is a one-page website developed as part of the Meta Frontend Certification on Coursera. The primary objective of this project was to create a form and learn how to perform verification using external libraries. Designed using HTML, CSS, and JavaScript, the portfolio page serves as a showcase of the developer's skills, expertise, and achievements. Through the implementation of a form with verification capabilities, this project highlights the practical application of front-end technologies in creating interactive and user-friendly web experiences.</p>
                            <a href="https://gizemayegul.github.io/PersonalPortfolioProject/">Check it</a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src="https://www.asianefficiency.com/wp-content/uploads/2021/03/writing-lists-paper-scaled.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Todo App</h5>
                            <p className="card-text">The Todo Manager is a web page developed with the primary objective of learning and managing state in React. This project allows users to add new todo items, mark them as complete, delete them, and apply filters to organize their tasks effectively. By utilizing React's state management capabilities, the Todo Manager provides a dynamic and interactive experience for users to track and manage their to-do lists efficiently.</p>
                            <a href="https://gizemayegul.github.io/todo_APP/">Check it</a>

                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};
export default Projects;