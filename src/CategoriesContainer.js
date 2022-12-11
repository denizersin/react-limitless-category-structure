import React from 'react'
import Category from './Category';

export default function CategoriesContainer({ parentId, categoriesData }) {
    console.log('contaienr',parentId)
    const childs = categoriesData.filter(data => data.parentId == parentId);
    return (
        <div className={'Container component'}> <span>Container</span>
            {childs.map(data => (
                <div key={data.id}>
                    <Category categoryData={data} categoriesData={categoriesData} />
                </div>
            ))}
        </div>
    )
}
