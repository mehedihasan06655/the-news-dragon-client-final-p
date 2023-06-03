import { Link } from "react-router-dom";

const Terms = () => {
    return (
        <div>
            <h2>Our Terms & Conditions</h2>            
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati veniam, atque, reiciendis voluptatibus, non harum corrupti numquam doloribus eaque quae molestias consequatur odit. Facere, accusantium! Cupiditate quasi animi saepe nulla?</p>
            <p>Go Back to <Link to='/register'>Register</Link></p>
        </div>
    );
};

export default Terms;