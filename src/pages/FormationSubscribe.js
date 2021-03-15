import React, {Component} from 'react';
import '../styling/Formations.scss';
import '../styling/responsiveness/RespFormations.scss';
import { FiChevronLeft } from 'react-icons/fi';
import SubscribeForm from '../components/formations/SubscribeForm';
import { Link } from 'react-router-dom';

class FormationContact extends Component {

    //Change Nav items color
    componentDidMount() {
        this.props.setNavItems(true)
    };
    componentWillUnmount() {
        this.props.setNavItems(false)
    };

    render() {
        return (
            <div className='formationSubscribe'>
                <header className='subscribeFormHeader'>
                    <button className='backBtn'>
                        <Link to='/formations/entrepreneur/comptabilité' className='link'>
                            <FiChevronLeft/>revenir aux formations
                        </Link>
                    </button>
                    <div className='headingsContainer'>
                        <h1 className='title'>nos formations</h1>
                        <h5 className='subTitle'>Inscrivez-vous ici à la formation de votre choix.</h5>
                    </div>
                </header>
                <SubscribeForm/>
            </div>
        );
    }
}

export default FormationContact;