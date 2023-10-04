import React, { useState, useEffect } from 'react';
import clientPhoto1 from '../../styles/photos/client002.png'
import clientPhoto2 from '../../styles/photos/vankata1.jpg'
import clientPhoto3 from '../../styles/photos/yanislav.png'
import client04 from '../../styles/photos/clientLiubcho.jpg';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel'; // Import Owl Carousel
import 'animate.css/animate.min.css';
import Client from './Client';

const Clients = () => {

    // const [clients, setClients] = useState([]);

    const clients = [
        {
            img: client04,
            fullName: 'Любомир Радунтчев',
            profession: 'Стажант в "Re4Life" и студент по "Информационни технологии" ',
            feedback: 'Уроците по C# и JavaScript на Whiz Tech бяха невероятни. Получих комплексно обучение, което ми позволи да изградя солидни умения в програмирането.'
        },
        {
            img: clientPhoto2,
            fullName: 'Иван Малинков',
            profession: 'Студент по "Софтуерни Технологии и Дизайн"',
            feedback: 'Проучвах различни опции за обучение по C# и най-накрая избрах Whiz Tech. Беше най-доброто решение, което можех да взема. Научих се не само как да пиша код на C#, но и как да го правя по ефективен начин.'
        }, {
            img: clientPhoto3,
            fullName: 'Янислав Димитров',
            profession: 'Студент в Software University',
            feedback: 'Преподавателят ми в "Whiz Tech" не само ме научи как да пиша код, но и ме насърчи да бъда креативен и да търся нови решения. Без съмнение, неговите уроци са били ключов фактор за моите успехи в света на програмирането. Благодаря му за всичко!'
        },
    ]


    const carouselStyle = {
        boxShadow: '5px 5px 10px rgba(255, 0, 0, 0.5);', /* Change the color here */
        background: 'white'
    }
    useEffect(() => {
        if (window.$) {
            window.$('.testimonial-carousel').owlCarousel({
                loop: true,
                margin: 10,
                nav: false,
                dots: true,
                autoplay: true,
                autoplayTimeout:5500,

                responsive: {
                    0: {
                        items: 1
                    },
                    450: {
                        items: 2
                    },
                    900: {
                        items: 3
                    }
                }
            });
        }
    }, []);


    return (
        <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="container">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h2 className="mb-5 text-white">Доволни клиенти</h2>
                </div>
                <div className="owl-carousel testimonial-carousel position-relative" style={carouselStyle}>
                    {clients.map((testimonial, index) => (
                        <Client
                            key={index}
                            client={testimonial}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
export default Clients;

