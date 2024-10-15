import { useEffect, useState } from "react";
import '../../../Shared/Navbar/Navbar.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Rightbar = () => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    fetch("/blogs.json")
      .then((response) => response.json())
      .then((data) => setDatas(data));
  }, []);

  // To calculate category counts
  const getCategoryCounts = () => {
    return datas.map((data) => ({
      category_name: data.category_name,
      count: data.news.length,
    }));
  };

  // Latest posts logic (assuming sorting by date and getting the first three)
  const getLatestPosts = () => {
    const allNews = datas.flatMap((data) => data.news);
    console.log(allNews)
    return allNews
      .sort((a, b) => new Date(b.date_posted) - new Date(a.date_posted))
      .slice(0, 3);
  };

  const categories = getCategoryCounts();
  const latestPosts = getLatestPosts();

  console.log(categories)
  console.log(latestPosts)

  /* AOS effects */
  useEffect(() => {
    AOS.init({
      duration: 1000, // Adjust duration to control the speed of the animation
      easing: 'ease-in-out', // Animation easing style
      once: true, // Whether animation should happen only once while scrolling
    });
  }, []);  

  return (
        <div className="p-4">
            {/* Search Input */}
            <div className="mb-10">
                <input
                type="text"
                placeholder="Search..."
                className="w-full font-poppins border border-gray-400 p-2 rounded"
                />
            </div>

            {/* Categories Section */}
            <div
              className="mb-10 font-poppins cursor-pointer border-2 border-white rounded-md shadow-xl p-5"
              data-aos="fade-up" // Apply AOS effect
            >
              <h2 className="font-bold text-xl mb-3 font-ubuntu custom-underline">Categories</h2>
              <ul>
                {categories.map((category) => (
                  <li
                    key={category.category_name}
                    className="flex justify-between items-center py-1"
                  >
                    <span className="hover:text-custom-pink">{category.category_name}</span>
                    <span>{category.count.toString().padStart(2, "0")}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Latest Posts Section */}
            <div
              className="mb-10 font-poppins cursor-pointer border-2 border-white rounded-md shadow-xl p-5"
              data-aos="fade-left" // Apply a different AOS effect
            >
              <h2 className="font-bold text-xl mb-6 font-ubuntu custom-underline">Latest Posts</h2>
              <ul>
                {latestPosts.map((post) => (
                  <li key={post.title} className="flex mb-4">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-16 h-16 rounded mr-4 object-cover"
                    />
                    <div>
                      <span className="block text-xs text-gray-500 mb-1">
                        {new Date(post.date_posted).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                      <span className="font-bold text-sm hover:text-custom-pink">{post.title}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
        </div>
  );
};

export default Rightbar;

/*  each category object has a news array inside it. To retrieve all the news articles, 
we need to combine (or "flatten") all these separate news arrays from multiple categories into one single array. 
That way, we can then sort all the news articles by date and select the latest three. 

flatMap() processes each category in datas and retrieves the news array, then merges (flattens) all the arrays into a single array.

*/
