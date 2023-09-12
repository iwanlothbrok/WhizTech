import img from '../../../styles/ISO_C++_Logo.svg.png';

const reasonsToChooseCpp = {
    performance: "C++ предлага възможности за високопроизводително програмиране.",
    versatility: "Универсалност за системно, игрово и вградено програмиране.",
    efficiency: "Ефективно управление на паметта и нискоуровнев контрол.",
    compatibility: "C++ поддържа стар код и се интегрира с други езици.",
    resourceControl: "Детайлен контрол над системните ресурси.",
    careerOpportunities: "Множество възможности за кариера в области като игрите и финансите.",
};

const cplus = {
    image: img,
    langName: 'C++',
    information: [
        reasonsToChooseCpp.performance,
        reasonsToChooseCpp.versatility,
        reasonsToChooseCpp.efficiency,
        reasonsToChooseCpp.compatibility,
        reasonsToChooseCpp.resourceControl,
        reasonsToChooseCpp.careerOpportunities,
    ],
    photoStyle: {
        width: '300px', /* Set the desired width */
        height: '400px'/* Set the desired height */
    }
}

export default cplus