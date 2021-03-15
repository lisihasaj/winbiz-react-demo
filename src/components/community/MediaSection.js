import React, {Component} from 'react';
import data from './json/media.json';
import { FiChevronLeft } from 'react-icons/fi';
import { FiChevronRight } from 'react-icons/fi';
import ScrollMenu from 'react-horizontal-scrolling-menu';

const MenuItem = ({ item, key }) => {
    return <div className='cardWrapper' key={key}>
        <div className='gradientLayer' />
        <img src={item.url} alt='' className='image' />
        <div className='col-12 textWrapper'>
            <h5 className='cardTitle'>{item.title}</h5>
        </div>
    </div>
};

const Menu = () =>
    data.map(element => {
            return <MenuItem item={element} key={element.id} />;
        }
    );

class MediaSection extends Component {
    state = {
        activeSlider: 0
    }
    pageRef = React.createRef();
    menuItems = Menu();

    setActiveSlider = value => {
        this.setState({
            ...this.state,
            activeSlider: parseInt(value)
        })
    }

    goLeft = () => {
        let activeSlider = this.state.activeSlider;
        if (activeSlider - 1 < 0)
            return;

        if (activeSlider - 1 > 0)
            this.setActiveSlider(activeSlider - 1)
        else
            this.setActiveSlider(0)

        this.pageRef.handleArrowClick()
    }

    goRight = () => {
        let activeSlider = this.state.activeSlider;
        if (activeSlider + 1 >= data.length)
            return;

        if (activeSlider + 1 < data.length)
            this.setActiveSlider(activeSlider + 1)
        else
            this.setActiveSlider(data.length - 1)

        this.pageRef.handleArrowClickRight();
    }

    render() {
        const activeSlider = this.state.activeSlider;
        return (
            <section className='mediaSection'>
                <div className='col-12 topWrapper'>
                    <h3 className='title'>Vidéos les plus consultées</h3>
                </div>
                <div className='sliderContainer'>
                    <ScrollMenu
                        alignCenter={false}
                        data={this.menuItems}
                        translate={0}
                        hideArrows={true}
                        ref={ref => this.pageRef = ref}
                        scrollBy={1}
                        scrollToSelected={true}
                        selected={activeSlider}
                        onSelect={this.setActiveSlider}
                        clickWhenDrag={true}
                        wheel={false}
                        inertiaScrolling={false}
                        innerWrapperStyle={{ transition: '' }}
                    />
                </div>
                <div className='pagination col-12 p-0'>
                    <button className='arrowLeft'
                            onClick={this.goLeft}>
                        <FiChevronLeft /></button>
                    <div className='pages'>
                        {
                            data.map(item => {
                                return <span key={item.id}
                                             className={item.id === parseInt(activeSlider )
                                                 ? 'page pageActive'
                                                 : 'page'}
                                />
                            })
                        }
                    </div>
                    <button className='arrowRight'
                            onClick={this.goRight}>
                        <FiChevronRight /></button>
                </div>
            </section>
        );
    }
};

export default MediaSection;