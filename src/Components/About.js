import React from 'react';



const About = () => {
    return (
        <section id="about">
            <div id="about-wrapper" >
                <div className="row" style={{ justifyContent: 'center' }} >
                    <img 
                    src='https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcSM_RqHrSewyZbyik2DvCcItwSGEj6WJ1P3LU_Vl-5debXy9H6We_Gv6mkXJma9AFXBqY-ClodxXJNm93M'
                     className="img-thumbnail" alt="..." style={{ borderRadius: '50%', maxWidth: '25%', height: 'auto' }}></img>
                    <h2 className='text-center' style={{margin :'1rem'}}>Hello Welcome to my Page!</h2>
                </div>

                <div className="row" style={{ padding: '3rem' }}>

                    <p> I am Gizem Ayaz Yegül, a certified Meta Front-End Developer with a passion for creating user-friendly web applications. With expertise in HTML, CSS, JavaScript, and React, I bring a unique blend of technical skills and project management experience to the table.

                        In my journey as a freelancer, I have conducted comprehensive user testing, providing valuable feedback to enhance website and mobile app usability. As a Product Owner, I have collaborated with stakeholders, led agile ceremonies, and delivered innovative solutions.

                        I thrive in dynamic environments and enjoy collaborating with diverse teams to develop cutting-edge technology and deliver high-quality products. Let's work together to create exceptional user experiences!

                        Feel free to explore my webpage and reach out to me. I am excited to connect and discuss opportunities for collaboration. </p>


                </div>

            </div>
        </section>
    );
};

export default About;