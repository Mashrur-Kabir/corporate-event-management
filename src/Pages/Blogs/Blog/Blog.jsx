import PropTypes from 'prop-types';
import './Blog.css' 

const Blog = ({ data }) => {

  const { news } = data;

  return (
      <div>
        {/* Blog post content */}
        <div className="max-w-xl font-poppins cursor-pointer">
          {news.map((post, index) => (
            <div 
              key={index} 
              className="mb-8 bg-white shadow-lg rounded-lg transition-transform duration-300 transform hover:scale-105 group"
            >
              {/* Image container */}
              <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-64 object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-110"
                  />
                  {/* Shiny effect */}
                  <div className="absolute inset-0 z-10">
                    <div className="shiny-effect"></div>
                  </div>
              </div>
              
              <div className="p-7">
                  <h2 className="text-2xl font-bold mb-4 font-ubuntu">{post.title}</h2>
                  <p className="text-gray-500 mb-4">
                    Posted by {post.posted_by} on {post.date_posted}
                  </p>
                  <p className="text-gray-700 mb-4">{post.short_description}</p>
                  <button className="bg-custom-blue border-2 border-custom-blue text-white py-2 px-5 rounded-md font-medium transition-colors duration-200 ease-in-out hover:bg-white hover:text-custom-blue">
                    Read More
                  </button>
              </div>
            </div>
          ))}
        </div>
      </div>
  );
};

Blog.propTypes = {
  data: PropTypes.shape({
    category_name: PropTypes.string.isRequired,
    news: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        posted_by: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        date_posted: PropTypes.string.isRequired,
        short_description: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default Blog;
