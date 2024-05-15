import React from 'react';
import '../../styles/css/pricing.css'

const PricingPage = () => {
    return (
        <div className="container mt-4">
            {/* <div className="text-center">
                <div className="nav price-tabs" role="tablist">
                    <a className="nav-link active" href="#yearly" role="tab" data-toggle="tab">Yearly</a>
                    <a className="nav-link" href="#monthly" role="tab" data-toggle="tab">Monthly</a>
                </div>
            </div> */}
            <div className="tab-content wow fadeIn" style={{ visibility: 'visible', animationName: 'fadeIn' }}>
                <div role="tabpanel" className="tab-pane fade show active" id="yearly">
                    <div className="row justify-content-center">
                        <div className="col-md-6 col-lg-4 mb-30">
                            <div className="price-item text-center">
                                <div className="price-top">
                                    <h4>Индивидуални уроци</h4>
                                    <h2 className="mb-0">70 BGN</h2>
                                    <span className="text-capitalize">цена за урок</span>
                                </div>
                                <div className="price-content">
                                    <ul className="border-bottom mb-30 mt-md-4 pb-3 text-left">
                                        <li>
                                            <p class="mb-2">
                                                <i class="mdi mdi-checkbox-marked-circle text-success f-18 mr-2"></i>
                                                <b>Персонализирани сесии:</b> Индивидуални уроци, специално разработени за начинаещи, за да се изгради солидна основа.
                                            </p>
                                        </li>
                                        <li>
                                            <p class="mb-2">
                                                <i class="mdi mdi-checkbox-marked-circle text-success f-18 mr-2"></i>
                                                <b>Гъвкав график:</b>  Изберете сами времето за уроците си, като можете да се възползвате от възможността да ги провеждате вечер и през уикендите, за да се вместите и в най-натоварените графици.
                                            </p>
                                        </li>
                                        <li>
                                            <p class="mb-2">
                                                <i class="mdi mdi-checkbox-marked-circle text-success f-18 mr-2"></i>
                                                <b>Персонализирана учебна програма: </b>Включете се в обучение, което е пряко свързано с вашите лични интереси и професионални цели.
                                            </p>
                                        </li>
                                        <li>
                                            <p class="mb-2">
                                                <i class="mdi mdi-checkbox-marked-circle text-success f-18 mr-2"></i>
                                                <b>Незабавна обратна връзка: </b>Получете незабавна, персонализирана обратна връзка, за да подобрите бързо уменията си за програмиране.
                                            </p>
                                        </li>
                                        <li>
                                            <p class="mb-2">
                                                <i class="mdi mdi-checkbox-marked-circle text-success f-18 mr-2"></i>
                                                <b>Бързо обучение:</b> Изпитайте ускорено учене с фокусирано индивидуално внимание, което далеч надхвърля темпото на традиционното обучение в курсовете.
                                            </p>
                                        </li>
                                        <li>
                                            <p class="mb-2">
                                                <i class="mdi  mdi-tag-heart  text-primary f-18 mr-2"></i>
                                                <b>Първи урок на половин цена:</b> Започнете обучението си с встъпителна оферта, като платите само половината за първия си урок.
                                            </p>
                                        </li>
                                    </ul>
                                    <a href="#" className="btn btn-custom">Buy now</a>
                                </div>
                            </div>
                        </div>
                        {/* Business */}
                        <div className="col-md-6 col-lg-4 mb-30">
                            <div className="price-item text-center">
                                <div className="price-top">
                                    <h4>Уроци за <b>студенти и ученици</b></h4>
                                    <h2 className="mb-0">50 BGN</h2>
                                    <span className="text-capitalize">цена за урок</span>
                                </div>
                                <div className="price-content">
                                    <ul className="border-bottom mb-30 mt-md-4 pb-3 text-left">
                                        <li>
                                            <p class="mb-2">
                                                <i class="mdi mdi-checkbox-marked-circle text-success f-18 mr-2"></i>
                                                <b>Специални цени: </b>Достъпни цени, съобразени със студентските бюджети, които правят качественото образование достъпно.
                                            </p>
                                        </li>
                                        <li>
                                            <p class="mb-2">
                                                <i class="mdi mdi-checkbox-marked-circle text-success f-18 mr-2"></i>
                                                <b>Гъвкави плащания: </b> Възможности за плащане на урок или на удобни вноски, съобразени с различни финансови ситуации.
                                            </p>
                                        </li>
                                        <li>
                                            <p class="mb-2">
                                                <i class="mdi mdi-checkbox-marked-circle text-success f-18 mr-2"></i>
                                                <b>Персонализирани сесии:</b> Персонализирани уроци, които се адаптират към стила на учене и темпото на всеки ученик, като осигуряват ефективно разбиране и ангажираност.
                                            </p>
                                        </li>
                                        <li>
                                            <p class="mb-2">
                                                <i class="mdi mdi-tag-heart text-primary f-18 mr-2"></i>
                                                <b>Първи урок на половин цена: </b> Започнете обучението си с въвеждаща оферта, като платите само половината от цената за първия си урок.
                                            </p>
                                        </li>
                                    </ul>
                                    <a href="#" className="btn btn-custom">Buy now</a>
                                </div>
                            </div>
                        </div>
                        {/* enterprise */}
                        <div className="col-md-6 col-lg-4 mb-30">
                            <div className="price-item text-center">
                                <div className="price-top">
                                    <h4>Месечно плащане</h4>
                                    <h2 className="mb-0"><sup>$</sup>550</h2>
                                    <span className="text-capitalize">за 10 урока</span>
                                </div>
                                <div className="price-content">
                                    <ul className="border-bottom mb-30 mt-md-4 pb-3 text-left">
                                        <li>
                                            <p class="mb-2">
                                                <i class="mdi mdi-checkbox-marked-circle text-success f-18 mr-2"></i>
                                                <b>Абонаментен план: </b>
                                                Плащайте фиксирана месечна такса за редовни уроци по график, което гарантира последователно обучение и напредък.                                                </p>
                                        </li>
                                        <li>
                                            <p class="mb-2">
                                                <i class="mdi mdi-close-circle text-success f-18 mr-2"></i>
                                                <b>Последователно обучение: </b>
                                                Уроците са планирани така, че да поддържат постоянен образователен напредък, съобразен с вашата обучителна програма.                                      </p>
                                        </li>
                                        <li>
                                            <p class="mb-2">
                                                <i class="mdi mdi-close-circle text-danger f-18 mr-2"></i>
                                                <b>Приоритетно резервиране: </b>
                                                Получавате право на първи избор при планирането, като си гарантирате предпочитаните от вас часове.</p>
                                        </li>
                                        <li>
                                            <p class="mb-2">
                                                <i class="mdi mdi-close-circle text-danger f-18 mr-2"></i>
                                                <b>Ексклузивни ресурси:  </b>
                                                Получавате достъп до специални материали и бонус сесии, които не са достъпни за неабонати.                                     </p>
                                        </li>
                                        <li>
                                            <p class="mb-2">
                                                <i class="mdi mdi-tag-heart text-primary f-18 mr-2"></i>
                                                <b>Първи урок на половин цена: </b>  Започнете пътуването си с 50 % отстъпка за първия урок.
                                            </p>
                                        </li>
                                        <li>
                                            <p class="mb-2">
                                                <i class="mdi mdi-tag-heart text-primary f-18 mr-2"></i>
                                                <b>Безплатен професионален преглед на вашето CV: </b>Подобрете перспективите си за работа с безплатен преглед на автобиографията, съобразен с технологичната индустрия.
                                            </p>
                                        </li>
                                        <li>
                                            <p class="mb-2">
                                                <i class="mdi mdi-tag-heart text-primary f-18 mr-2"></i>
                                                <b>Отстъпки за лоялни клиенти: </b>  Насладете се на намалени цени при подновяване на абонамента си или при преминаване към по-интензивни планове за обучение.
                                            </p>
                                        </li>
                                    </ul>
                                    <a href="#" className="btn btn-custom">Buy now</a>
                                </div>
                            </div>
                        </div>
                        {/* Repeat similar structure for Business and Enterprise plans */}
                    </div>
                </div>

            </div>
        </div>
    );
}

export default PricingPage;
