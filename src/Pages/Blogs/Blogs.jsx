import { useLoaderData } from "react-router-dom";
import '../../Shared/Navbar/Navbar.css'
import Blog from "./Blog/Blog";
import Rightbar from "./RightSection/Rightbar";

const Blogs = () => {

    const datas = useLoaderData();

    return (
        <div>
            <div className="text-center mt-20 mb-16 cursor-pointer">
                <h2 className="text-4xl font-bold text-blue-950 font-ubuntu custom-underline">Welcome to our Blog Section</h2>
            </div>
            <div className="max-w-7xl mx-auto grid grid-cols-3">
                <div className="col-span-2 p-4">
                    {
                        datas.map(data => <Blog key={data.id} data={data}></Blog> )
                    }
                </div>
                <div className="col-span-1">
                    <Rightbar></Rightbar>
                </div>
            </div>
        </div>
    );
};

export default Blogs;