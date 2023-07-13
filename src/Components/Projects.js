import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import myPhoto from './assests/myphoto-min.png';


const Projects = () => {
    return ( 
        <section id="project" >
            <h1>Projects</h1>
            <div id="wrapper" className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
                    <div className="card h-100">
                        <img src={myPhoto} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">My Personal WebPage/Bootstrap</h5>
                                <p className="card-text">Welcome to my personal webpage! This site serves as a platform for me to showcase my skills, experiences, and projects. Using the power of Bootstrap and React, I've created a visually appealing and user-friendly interface to present my work and provide insights into my professional journey.</p>
                                <a href="#home">Check it</a>
                            </div>
                    </div>
                </div>
              
                <div className="col">
                    <div className="card h-100">
                        <img src="https://gizemayegul.github.io/LittleLemonRestaurant/lemon%20dessert.jpg" className="card-img-top"  alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Little Lemon Restaurant</h5>
                                <p className="card-text">Little Lemon Restaurant is a captivating webpage designed to provide users with an immersive and visually pleasing dining experience. Developed using HTML, CSS, React, and the Chakra library, this project showcases the seamless integration of front-end technologies to create a user-friendly and interactive reservation system. </p>
                                <a href="https://gizemayegul.github.io/LittleLemonRestaurant/">Check it</a>

                            </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src="https://images.mktw.net/im-808349/social" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Tech News Page</h5>
                                <p className="card-text">The News Aggregator is a web page designed to keep users up-to-date with the latest news from various sources. Developed using HTML, CSS, and JavaScript, this project leverages an API to retrieve news data and displays it in an organized manner. To overcome limitations with API integration on GitHub, a JSON file is utilized to retrieve the data seamlessly. Whether you're a news enthusiast or simply looking for a convenient way to stay informed, the News Aggregator provides a user-friendly interface to access and explore current news articles.</p>
                                <a href="https://gizemayegul.github.io/technews/">Check it</a>
                            </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src="https://gizemayegul.github.io/PersonalPortfolio/static/media/photo2.7d510936625768642967.jpg" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">One Page Portfolio</h5>
                                <p className="card-text">The Personal Portfolio is a one-page website developed as part of the Meta Frontend Certification on Coursera. The primary objective of this project was to create a form and learn how to perform verification using external libraries. Designed using HTML, CSS, and JavaScript, the portfolio page serves as a showcase of the developer's skills, expertise, and achievements. Through the implementation of a form with verification capabilities, this project highlights the practical application of front-end technologies in creating interactive and user-friendly web experiences.</p>
                                <a href="https://gizemayegul.github.io/PersonalPortfolio/">Check it</a>
                            </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src="https://www.asianefficiency.com/wp-content/uploads/2021/03/writing-lists-paper-scaled.jpg" className="card-img-top" alt="..."/>
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