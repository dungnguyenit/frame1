import React from 'react';
import classNames from 'classnames/bind';
import style from './Header.module.scss';
import image from '~/assets';
import { Link } from 'react-router-dom';

const cx = classNames.bind(style);
const Header = () => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('menu-text')}>
                    <ul>
                        <Link to="/">
                            <li>
                                <img src={image.logo} alt="" />
                            </li>
                        </Link>
                        <Link to="/">
                            <li>Home</li>
                        </Link>
                        <Link to="/shop">
                            <li>Shop</li>
                        </Link>
                        <Link to="/collection">
                            <li>Collection</li>
                        </Link>
                        <Link to="/journal">
                            <li>Journal</li>
                        </Link>
                        <Link to="/looKBooK">
                            <li>LooKBooK</li>
                        </Link>
                    </ul>
                </div>
                <div className={cx('menu-icon')}>
                    <ul>
                        <li>
                            <img src={image.search} alt="" />
                        </li>
                        <li>
                            <img src={image.people} alt="" />
                        </li>
                        <li>
                            <img src={image.tym} alt="" />
                        </li>
                        <li>
                            <img src={image.bag} alt="" />
                        </li>
                        <li>
                            <img src={image.list} alt="" />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;
