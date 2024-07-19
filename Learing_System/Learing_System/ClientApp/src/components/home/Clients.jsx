import React, { useEffect } from 'react';
import zd from '../../styles/photos/zdrawko.jpg';
import clientPhoto2 from '../../styles/photos/vankata1.jpg';
import clientPhoto3 from '../../styles/photos/yanislav.png';
import client04 from '../../styles/photos/clientLiubcho.jpg';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';
import 'animate.css/animate.min.css';
import Client from './Client';
import fadeInAnimation from '../../animation/fadeInAnimation';

const Clients = () => {
    useEffect(() => {
        const elementsToAnimate = document.querySelectorAll('.hidden');
        fadeInAnimation(elementsToAnimate);
    }, []);

    const clients = [
        {
            img: client04,
            fullName: 'Любомир Радунтчев',
            profession: 'Стажант в "Re4Life" и студент по "Информационни технологии"',
            feedback: 'Уроците по C# и JavaScript на WhizTech бяха невероятни. Получих комплексно обучение, което ми позволи да изградя солидни умения в програмирането.'
        },
        {
            img: clientPhoto2,
            fullName: 'Иван Малинков',
            profession: 'Студент по "Софтуерни Технологии и Дизайн"',
            feedback: 'Проучвах различни опции за обучение по C# и най-накрая избрах WhizTech. Беше най-доброто решение, което можех да взема. Научих се не само как да пиша код на C#, но и как да го правя по ефективен начин.'
        },
        {
            img: clientPhoto3,
            fullName: 'Янислав Димитров',
            profession: 'Ученик в Езикова Гимназия',
            feedback: 'Преподавателят ми в "WhizTech" не само ме научи как да пиша код, но и ме насърчи да бъда креативен и да търся нови решения. Без съмнение, неговите уроци бяха ключов фактор за моите успехи учебните часове. Благодаря му за всичко!'
        },
        {
            img: zd,
            fullName: 'Здравко Караджов',
            profession: 'Студент по "Електротехника"',
            feedback: 'След уроците се справих успешно с изпитите по C++, получавайки добри оценки и придобивайки ценни умения в програмирането. Бих препоръчал уроците на всеки!'
        }
    ];

    const carouselStyle = {
        background: '#0a864c', // Darker background for better contrast
        borderRadius: '10px', // Rounded corners for a softer look
        padding: '20px'
    };

    useEffect(() => {
        if (window.$) {
            window.$('.testimonial-carousel').owlCarousel({
                autoplay: true,
                smartSpeed: 1000,
                center: true,
                margin: 24,
                dots: true,
                loop: true,
                nav: false,
                responsive: {
                    0: {
                        items: 1
                    },
                    768: {
                        items: 2
                    },
                    992: {
                        items: 3
                    }
                }
            });
        }
    }, []);

    return (
        <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="container hidden">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h2 className="mb-5 text-white">ДОВОЛНИ КЛИЕНТИ</h2>
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
};

export default Clients;
