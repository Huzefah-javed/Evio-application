import { ArrowRight, User, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { blogSummaries } from "../blog/summary.js";

export const Blogs=()=>{

    return(
        <div class="flex flex-col justify-center items-center w-full mt-6">
    <section className="py-20 md:px-6 px-3 bg-white">
      <div className=" mx-auto">
        <div className="mb-6">
          <h2 className="text-4xl font-bold mb-2">Latest <span className="textLinearGrd">Insights</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogSummaries.map((blog) => (
            <div 
              key={blog.id} 
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 flex flex-col"
            >
              <div className="relative overflow-hidden h-60">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="linearGrd text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Real Estate
                  </span>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-4 text-gray-400 text-xs mb-3">
                  <span className="flex items-center gap-1">
                    <User size={14} className="text-amber-500" />
                    {blog.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar size={14} className="text-amber-500" />
                    {blog.date}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#001F3F] mb-3 group-hover:text-amber-600 transition-colors">
                  {blog.title}
                </h3>
                
                <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-2">
                  {blog.excerpt}
                </p>

                <Link 
                  to={`/blogs/${blog.id}`}
                  className="mt-auto flex items-center gap-2 text-[#001F3F] font-bold text-sm hover:gap-4 transition-all"
                >
                  Read More <ArrowRight size={18} className="text-amber-500" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
      </div>
  );
};
 
 