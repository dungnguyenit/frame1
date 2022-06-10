import React from 'react';
import classNames from 'classnames/bind';
import styles from './Layout.module.scss'
import Footer from '~/components/Footer';
import Header from '~/components/Header';



const cx = classNames.bind(styles)
const Layout = ({ children }) => {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div>{children}</div>
            <Footer />
        </div>
    );
};

export default Layout;
