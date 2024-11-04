import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types'
const Categories = ({categories}) => {
  
    return (

  <div role="tablist" className="tabs tabs-bordered">
    {
        categories.map(categori => (
            
            <NavLink
             key={categori.id}
              to={`/category/${categori.type}`}
               role="tab"
                className={({isActive}) => `tab ${isActive?'tab-active': ''}`}>
                    {categori.type}
             </NavLink>
        ))
    }

</div>

    );
};

Categories.propTypes = {
    categories: PropTypes.array,
}
export default Categories;