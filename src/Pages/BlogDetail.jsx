import { useParams } from "react-router-dom";
import { blogDetails } from "../blog/detail.js";
import { User, Calendar, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

export const BlogDetail = () => {
  const { blogId } = useParams();

  const [activeId, setActiveId] = useState("");
  const blog = blogDetails[blogId];
  const subTopic = useRef(null);

  const handleObserver = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActiveId(entry.target.id);
      }
    });
  };

  useEffect(() => {
  

    const observer = new IntersectionObserver(handleObserver,{threshold:1});

    const sections = document.querySelectorAll("h2[id]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [blogId]);

  if (!blog) {
    return (
      <div className=" h-lvh w-lvh text-3xl font-bold flex items-center justify-center">
        Blog not found.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white scroll-smooth">
      <div className="w-full h-[400px] relative">
        <img
          src={blog.headerImage}
          alt={blog.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-end p-10">
          <div className="max-w-7xl mx-auto w-full">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              {blog.title}
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-16 px-6">
        <div className="flex flex-col lg:flex-row gap-12">
          <aside className="lg:w-1/4">
            <div className="sticky top-28 space-y-6">
              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                <h3 className="text-lg font-bold text-[#001F3F] mb-4">
                  On this page
                </h3>
                <nav className="space-y-4">
                  {blog.fullContent.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      onClick={()=>setActiveId(section.id)}
                      className={`block text-left text-sm transition-all border-l-2 pl-3 ${
                        activeId === section.id
                          ? "text-amber-600 border-amber-600 font-bold"
                          : "text-gray-500 border-transparent"
                      }`}
                    >
                      {section.subTitle}
                    </a>
                  ))}
                </nav>
              </div>
              <div className="p-6 border-t border-gray-100">
                <div className="flex items-center gap-3 mb-2 text-[#001F3F] font-bold">
                  <User size={18} className="text-amber-500" /> {blog.author}
                </div>
                <div className="flex items-center gap-3 text-gray-400 text-sm">
                  <Calendar size={18} /> {blog.date}
                </div>
              </div>
            </div>
          </aside>

          <main className="lg:w-3/4">
            <article className="prose prose-lg max-w-none">
              {blog.fullContent.map((section) => (
                <section
                  key={section.id}
                  id={section.id}
                  className="mb-16 scroll-mt-28"
                >
                  <h2 className="text-3xl font-bold text-[#001F3F] mb-6 flex items-center gap-3" id={section.id}>
                    <span className="w-1.5 h-8 linearGrd rounded-full block"></span>
                    {section.subTitle}
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {section.text}
                  </p>
                </section>
              ))}
            </article>
          </main>
        </div>
      </div>
    </div>
  );
};
