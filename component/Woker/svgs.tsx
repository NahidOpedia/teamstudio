import React from 'react';

export const RightArrowLarge = () => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
    )
}

export const RightArraowSmall = () => {
    return (
        <svg fill='currentColor'
            xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M9.29 15.88L13.17 12 9.29 8.12a.996.996 0 111.41-1.41l4.59 4.59c.39.39.39 1.02 0 1.41L10.7 17.3a.996.996 0 01-1.41 0c-.38-.39-.39-1.03 0-1.42z" fill-rule="evenodd"></path>
        </svg>
    )
}

export const LeftArrowSmall = () => {
    return (<>
        <svg fill='currentColor' id="leftArraowSmall"
            xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M9.29 15.88L13.17 12 9.29 8.12a.996.996 0 111.41-1.41l4.59 4.59c.39.39.39 1.02 0 1.41L10.7 17.3a.996.996 0 01-1.41 0c-.38-.39-.39-1.03 0-1.42z" fill-rule="evenodd"></path>
        </svg>
        <style jsx>
            {`
                #leftArraowSmall{
                    transform: rotate(180deg)
                }
            `}
        </style>
    </>
    )
}
