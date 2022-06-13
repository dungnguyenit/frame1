import React, { useCallback, useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import style from './Card.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { getUser } from '~/api';

const cx = classNames.bind(style);
const Card = () => {
    const [use, setUse] = useState([]);

    useEffect(() => {
        fetchUser();
    }, []);

    const fetchUser = useCallback(async () => {
        const ABC = await getUser();
        setUse(ABC.data);
    }, []);

    const renderItemListDress = useCallback((item) => {
        return (
            
            <div className={cx('wrapper')}  key={item.id}>
                <div className={cx('img')}>
                    <img src={item.img} alt="" />
                </div>
                <div className={cx('inner')}>
                    <div className={cx('icon')}>
                        <p>Dresses</p>
                        <FontAwesomeIcon icon={faHeart} />
                    </div>
                    <div className={cx('title')}>
                        <h5>{item.title}</h5>
                    </div>
                    <div className={cx('mony')}>
                        <p>${item.mony}</p>
                    </div>
                </div>
            </div>
           
        );
    }, []);

    return (
        <>
            {use.map((item) => {
                    return (
                        <>
                           {renderItemListDress(item)}
                        </>
                    );
                })}
        </>
    );
};

export default Card;
