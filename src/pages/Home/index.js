import React from 'react';
import classNames from 'classnames/bind';
import style from './Home.module.scss';
import image from '~/assets';
import Card from '~/components/Card';

const cx = classNames.bind(style);
const Home = () => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('inner-left')}>
                    <span className={cx('inner-text1')}>NEW TREND</span>
                    <span className={cx('inner-text2')}>SUMMER SALE STYLISH</span>
                    <span className={cx('inner-text3')}>WOMENS</span>
                    <span className={cx('inner-text4')}>DISCOVER MORE</span>
                    <div className={cx('circle1-left')}>
                        <img src={image.circle} alt="" />
                    </div>
                    <div className={cx('circle2-left')}>
                        <img src={image.circle} alt="" />
                    </div>
                    <div className={cx('clusterLine-left')}>
                        <img src={image.clusterLine} alt="" />
                    </div>
                    <div className={cx('line1-left')}>
                        <img src={image.line1} alt="" />
                    </div>
                    <div className={cx('line2-left')}>
                        <img src={image.line2} alt="" />
                    </div>
                    <div className={cx('line3-left')}>
                        <img src={image.line3} alt="" />
                    </div>
                    <div className={cx('line4-left')}>
                        <img src={image.line4} alt="" />
                    </div>
                </div>
                <div className={cx('inner-right')}>
                    <div className={cx('people1')}>
                        <img src={image.people1} alt="" />
                    </div>
                    <div className={cx('text_summer')}>
                        <img src={image.text_summer} alt="" />
                    </div>
                    <div className={cx('circle-right')}>
                        <img src={image.circle} alt="" />
                    </div>
                    <div className={cx('wavy-right')}>
                        <img src={image.Wavy} alt="" />
                    </div>
                </div>
            </div>
            <div className={cx('inner1')}>
                <div className={cx('inner1-left')}>
                    <div className={cx('inner1-text')}>
                        <spam className={cx('inner1-text1')}>HOT LIST</spam>
                        <spam className={cx('inner1-text2')}>WOMEN COLLECTION</spam>
                        <spam className={cx('inner1-text3')}>SHOP NOW</spam>
                    </div>
                    <div className={cx('inner1-left-img')}>
                        <img src={image.people2} alt="" />
                    </div>
                </div>
                <div className={cx('inner1-right')}>
                    <div className={cx('inner1-top-right')}>
                        <div className={cx('inner1-text')}>
                            <spam className={cx('inner1-text1')}>HOT LIST</spam>
                            <spam className={cx('inner1-text2')}>MEN COLLECTION</spam>
                            <spam className={cx('inner1-text3')}>SHOP NOW</spam>
                        </div>
                        <div className={cx('inner1-top-img1')}>
                            <img src={image.people3} alt="" />
                        </div>
                    </div>
                    <div className={cx('inner1-bottom-right')}>
                        <div className={cx('inner1-bottom-rr')}>
                            <spam className={cx('inner1-text1')}>HOT LIST</spam>
                            <spam className={cx('inner1-text2')}>MEN COLLECTION</spam>
                            <spam className={cx('inner1-text3')}>SHOP NOW</spam>
                        </div>
                        <div className={cx('inner1-bottom-rl')}>
                            <spam className={cx('inner1-text1')}>HOT LIST</spam>
                            <spam className={cx('inner1-text2')}>MEN COLLECTION</spam>
                            <spam className={cx('inner1-text3')}>SHOP NOW</spam>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('inner2')}>
            <Card/>
            </div>
            <div className={cx('inner3')}></div>
            <div className={cx('inner4')}></div>
            <div className={cx('inner5')}></div>
            <div className={cx('inner6')}></div>
        </div>
    );
};

export default Home;
