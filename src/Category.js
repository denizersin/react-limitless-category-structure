import React, { useEffect, useState } from 'react'
import Container from './CategoriesContainer';

export default function Category({ categoryData, categoriesData }) {
    const [active, setActive] = useState(false);
    const childs = categoriesData.filter(data => data.parentId == categoryData.id);
    return (
        <div className={'Recursive component'}> <span>Recursive</span>
            {categoryData.title} {` (id:${categoryData.id})`}
            {childs.length != 0 && <button onClick={() => setActive(!active)} className={"bg-purple-500 border border-b-gray-900"}>show{`(${childs.length} sub)`}</button>}
            {childs.length != 0 && active && <Container parentId={categoryData.id} categoriesData={categoriesData} />}
        </div>
    )
}