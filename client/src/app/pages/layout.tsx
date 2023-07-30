import React from 'react'

import Header from '../components/header'

export const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <main>{children}</main>
        </>
    )
}
