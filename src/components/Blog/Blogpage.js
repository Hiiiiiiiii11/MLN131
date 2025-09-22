import React, { useState, useEffect } from "react";
import './Blogpage.css';

const BlogPage = () => {
    const [blogContent, setBlogContent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Hàm fetch dữ liệu từ API
    useEffect(() => {
        const fetchBlogData = async () => {
            try {
                // Ví dụ: Sử dụng API giả lập (thay bằng API thực tế của bạn)
                const response = await fetch('https://jsonplaceholder.typicode.com/posts/1'); // API mẫu
                if (!response.ok) throw new Error("Không thể tải dữ liệu");
                const data = await response.json();
                setBlogContent(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchBlogData();
    }, []);

    if (loading) return <div className="blog-loading">Đang tải...</div>;
    if (error) return <div className="blog-error">Lỗi: {error}</div>;

    return (
        <div className="blog-container">
            <div className="blog-header">
                <h1 className="blog-title">{blogContent?.title || "Bài viết mẫu"}</h1>
                <p className="blog-date">Ngày đăng: {new Date().toLocaleDateString()}</p>
            </div>
            <div className="blog-content">
                <p>{blogContent?.body || "Nội dung bài viết sẽ được lấy từ API. Đây là một ví dụ về bài viết mẫu khi API chưa sẵn sàng. Bạn có thể thay thế API này bằng API thực tế của mình để lấy nội dung động."}</p>
            </div>
        </div>
    );
};

export default BlogPage;