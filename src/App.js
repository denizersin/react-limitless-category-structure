import React, { useState } from 'react'
import CategoriesContainer from './CategoriesContainer';


const initialCategoriesData = [
    { "id": -1, "title": null, "parseInt": null },
    { "id": 0, "title": "A", "parentId": -1 },
    { "id": 1, "title": "B", "parentId": -1 },
    { "id": 2, "title": "C", "parentId": -1 },
    { "id": 3, "title": "A_1", "parentId": 0 },
    { "id": 4, "title": "A_2", "parentId": 0 },
    { "id": 5, "title": "C_1", "parentId": 2 },
    { "id": 6, "title": "A_1_1", "parentId": 3 },
    { "id": 7, "title": "A_1_2", "parentId": 3 },
]




export default function App() {

    const [categoriesData, setCategoriesData] = useState(initialCategoriesData);
    const [parentId, setParentId] = useState('');
    const [title, setTitle] = useState('');
    const [categoryId, setcategoryId] = useState('');


    const getUniqId = () => {
        const idsSet = (new Set(categoriesData.map(data => data.id)))
        for (let i = 0; i < 1000; i++)
            if (!idsSet.has(i)) return i
    }

    const handleAddCategory = (e) => {
        e.preventDefault()
        if (categoriesData.every(categoryData => categoryData.id !== parseInt(parentId))) {
            alert('boyle bir category yok')
            return;
        }
        setCategoriesData([...categoriesData, {
            id: getUniqId(),
            title: title,
            parentId: parseInt(parentId)
        }])
    }
    const handleDeleteCategory = () => {
        const categoryIdAsNum = parseInt(categoryId)
        const filtederArr = categoriesData.filter(data =>
            (data.id !== categoryIdAsNum) || data.parentId === categoryIdAsNum
        )
        setCategoriesData(filtederArr)
    }

    let startParentId = -1;
    console.log(JSON.stringify(categoriesData));
    
    return (

        <div className={'AddCategory component'}> <span>AddCategory</span>
            <form >
                <input onChange={(e) => { setParentId(e.target.value) }} value={parentId} placeholder={"parent-id"} type="text" className={""} />
                <input onChange={(e) => { setTitle(e.target.value) }} value={title} placeholder={"title"} type="text" />
                <button onClick={handleAddCategory} className={'bg-gray-400'}>add</button>
            </form>
            <div>
                <input onChange={(e) => { setcategoryId(e.target.value) }} type="text" value={categoryId} placeholder="category-id" />
                <button onClick={handleDeleteCategory} className={'bg-red-400'}>delete</button>
            </div>
            <div>
                {
                    <CategoriesContainer parentId={startParentId} categoriesData={categoriesData} />
                }
            </div>
        </div>
    )
}
