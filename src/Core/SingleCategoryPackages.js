import React from 'react';
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import SingleCategoryPage from "../Components/SingleCategoryPage"


const SingleCategoryPackages = (props) => {
    const x=props.match.params.categoryName;
    return (
        <div>
           
            <Header />
            <div>
            <SingleCategoryPage index={x}/>
            </div>
            
            <Footer />
        </div>
    );
};
export default SingleCategoryPackages;