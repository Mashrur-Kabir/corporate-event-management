import PropTypes from 'prop-types'; // ES6
import { Link } from 'react-router-dom';

const Features = ({data}) => {

    const {name, short_info, logo, id} = data;

    return (
        <Link to={`/data/${id}`} className='bg-white rounded-lg cursor-pointer flex items-center gap-6 border px-5 py-10 shadow-xl transition-shadow duration-300 hover:shadow-none'>
            <div>
                <img className='w-35 transition-transform duration-300 hover:scale-110 hover:opacity-100 opacity-80' src={logo} alt="" />
            </div>
            <div>
                <h2 className="font-ubuntu mb-1 text-xl font-bold text-blue-950">{name}</h2>
                <p className="font-poppins text-gray-600 leading-[1.8rem]">{short_info}</p>
            </div>
        </Link>
    );
};

Features.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        short_info: PropTypes.string.isRequired,
        logo: PropTypes.string.isRequired,
    }),
}

export default Features;