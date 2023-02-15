import React, {useState} from 'react';
import './skin.scss';
import icon_dots from './img/icon-dots.svg';
import icon_duplicate from './img/icon-duplicate.svg';
import icon_delete from './img/icon-delete.svg'
import brackets_bg from './img/brackets-bg.svg'

type Card = {
    title: string,
    content: string,
    menuOpen: boolean
}

const cardsConfig = [
    {
        title: 'Card title 1',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor\n' +
            '                                incididunt ut labore et dolore magna aliqua. Metus aliquam eleifend mi in nulla posuere\n' +
            '                                sollicitudin. Consectetur adipiscing elit pellentesque habitant morbi tristique. Nunc\n' +
            '                                vel risus commodo viverra maecenas accumsan lacus vel. Montes nascetur ridiculus mus\n' +
            '                                mauris vitae ultricies leo. Fames ac turpis egestas sed tempus urna. Urna condimentum\n' +
            '                                mattis pellentesque id. Tristique nulla aliquet enim tortor. Et tortor consequat id\n' +
            '                                porta. Duis convallis convallis tellus id interdum velit laoreet id donec. Nulla aliquet\n' +
            '                                enim tortor at auctor urna nunc. Non arcu risus quis varius quam quisque. Sollicitudin\n' +
            '                                aliquam ultrices sagittis orci a. Vulputate sapien nec sagittis aliquam. Aliquam sem\n' +
            '                                fringilla ut morbi tincidunt augue interdum velit euismod. Consectetur purus ut faucibus\n' +
            '                                pulvinar elementum. Lorem ipsum dolor sit amet.',
        menuOpen: false
    },
    {
        title: 'Card title 2',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor\n' +
            '                                incididunt ut labore et dolore magna aliqua. Metus aliquam eleifend mi in nulla posuere\n' +
            '                                sollicitudin. Consectetur adipiscing elit pellentesque habitant morbi tristique. Nunc\n' +
            '                                vel risus commodo viverra maecenas accumsan lacus vel. Montes nascetur ridiculus mus\n' +
            '                                mauris vitae ultricies leo. Fames ac turpis egestas sed tempus urna. Urna condimentum\n' +
            '                                mattis pellentesque id. Tristique nulla aliquet enim tortor. Et tortor consequat id\n' +
            '                                porta. Duis convallis convallis tellus id interdum velit laoreet id donec. Nulla aliquet\n' +
            '                                enim tortor at auctor urna nunc. Non arcu risus quis varius quam quisque. Sollicitudin\n' +
            '                                aliquam ultrices sagittis orci a. Vulputate sapien nec sagittis aliquam. Aliquam sem\n' +
            '                                fringilla ut morbi tincidunt augue interdum velit euismod. Consectetur purus ut faucibus\n' +
            '                                pulvinar elementum. Lorem ipsum dolor sit amet.',
        menuOpen: false
    }
];

export default function App() {

    /**
     * Store cards data
     */
    const [localCards, setLocalCards] = useState<Array<Card> | []>(cardsConfig);

    /**
     * Toggle card options visibility
     * @param index
     * @param hide
     */
    const handleCardOptions = (index: number, hide?: boolean) => {
        const newArr = localCards.map((obj, i) => {
            if (i === index) {
                let menuState = hide ? false : !localCards[index].menuOpen;
                return {...obj, menuOpen: menuState};
            }
            return obj;
        });
        setLocalCards(newArr);
    }

    /**
     * Display card options
     */
    const renderCardMenu = (index: number) => (
        <div className="options">
            <div className="icon-toggle" onClick={(e) => {
                e.stopPropagation();
                handleCardOptions(index);
            }}>
                <img src={icon_dots} alt='icon-toggle'/>
            </div>
            <div className="actions">
                <div className="delete" onClick={(e) => {
                    console.log('delete is clicked');
                    e.stopPropagation();
                }}>
                    <img src={icon_delete} alt='icon delete'/>
                    <span>Delete card</span>
                </div>
                <div className="duplicate" onClick={(e) => {
                    console.log('duplicate is clicked');
                    e.stopPropagation();
                }}>
                    <img src={icon_duplicate} alt='icon duplicate'/>
                    <span>Duplicate card</span>
                </div>
            </div>
        </div>
    )

    /**
     * List available cards
     */
    const renderCards = localCards.map((item, index) => (
        <div className="col-md-6" key={index}>
            <div className="card" data-menu={item.menuOpen} onClick={() => handleCardOptions(index, true)}>
                <header>
                    <div className='title'>{item.title}</div>
                    {renderCardMenu(index)}
                </header>
                <div className="content">
                    <div className="row">
                        <div className="col-lg-5 col-img">
                            <img src={brackets_bg} alt="decor brakcets"/>
                        </div>
                        <div className="col-lg-7">
                            {item.content}
                        </div>
                    </div>
                </div>
                <div className="btn-wrap">
                    <div className="button" onClick={(e) => {
                        console.log('dismiss is clicked');
                        e.stopPropagation();
                    }}>
                        Dismiss
                    </div>
                </div>
            </div>
        </div>
    ))

    return (
        <div className="cards-wrap">
            <div className="container">
                <div className="row">
                    {renderCards}
                </div>
            </div>
        </div>
    );
}
