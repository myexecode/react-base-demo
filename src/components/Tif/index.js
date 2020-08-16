import React from 'react'

export default function Tif({$if, children}) {
    return $if ? children : null;
}
