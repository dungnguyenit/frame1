import React from 'react';
import classNames from 'classnames/bind';
import style from './Card.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

const cx = classNames.bind(style);
const Card = () => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('img')}>
                <img src="" alt="" />
            </div>
            <div className={cx('inner')}>
                <div className={cx('icon')}>
                    <p>Dresses</p>
                    <FontAwesomeIcon icon={faHeart} />
                </div>
                <div className={cx('title')}>
                    <h5>Cropped Foux Leather Jacket</h5>
                </div>
                <div className={cx('mony')}>
                    <p>$36</p>
                </div>
            </div>
        </div>
    );
};

export default Card;
