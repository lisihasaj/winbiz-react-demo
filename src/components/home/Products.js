import React, {Component} from 'react';
import { FaPlus } from 'react-icons/fa';
import data from './json/products.json';
import { FiChevronLeft } from 'react-icons/fi';
import { FiChevronRight } from 'react-icons/fi';
import ScrollMenu from 'react-horizontal-scrolling-menu';

const MenuItem = ({ item, key }) => {
    return <div className='cardWrapper' key={key}>
        <div className='imageWrapper p-0'>
            <span className='image' />
        </div>
        <div className='elementsWrapper'>
            <h6 className='title'>{item.title}</h6>
            <span className='thumbnail'>{item.thumbnail}</span>
            <h6 className='price'>{item.price}</h6>
            <div className='buttonsContainer'>
                {
                    item.extensions.map((element, key) => {
                        return <button className='moreInfo' key={key}>{element}</button>
                    })
                }
            </div>
        </div>
    </div>
};

const Menu = () =>
    data.map(el => {
            return <MenuItem item={el} key={el.id} />;
        }
    );

class Products extends Component {
    state = {
        activeSlider: 0
    }
    pageRef = React.createRef();
    menuItems = Menu();

    setActiveSlider = (value) => {
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
            <section className='product'>
                <div className='col-12 topWrapper'>
                    <div className='titleContainer'>
                        <h1 className='title'>
                            WINBIZ <FaPlus className='plus' />
                        </h1>
                        <h5 className='subTitle'>Toutes vos options au même endroit.</h5>
                    </div>
                    <div className='buttonContainer'>
                        <button className='sectionCTA'>aller sur WINBIZ+</button>
                    </div>
                </div>
                <div className='sliderContainer'>
                    <ScrollMenu
                        alignCenter={false}
                        data={this.menuItems}
                        translate={0}
                        hideArrows={true}
                        ref={ref => this.pageRef = ref}
                        scrollBy={1}
                        selected={activeSlider}
                        clickWhenDrag={true}
                        scrollToSelected={true}
                        onSelect={this.setActiveSlider}
                        inertiaScrolling={true}
                        wheel={false}
                        innerWrapperStyle={{ transition: '' }}
                    />
                </div>
                <div className='pagination col-12 p-0'>
                    <button className='arrowLeft' onClick={this.goLeft.bind(this)}><FiChevronLeft /></button>
                    <div className='pages'>
                        {
                            data.map(item => {
                                return <span key={item.id}
                                             className={item.id === parseInt(activeSlider)
                                                 ? 'page pageActive'
                                                 : 'page'}
                                />
                            })
                        }
                    </div>
                    <button className='arrowRight' onClick={this.goRight.bind(this)}><FiChevronRight /></button>
                </div>
            </section>
        );
    }
};

export default Products;
