import request from "./request";

/**
 * 获取博客列表数据
 */
export async function getBlogs(options) {
  return await request.get("/api/blog", {
    params: options
  });
}

/**
 * 获取博客分类
 */
 export async function getBlogTypes() {
  return await request.get("/api/blogtype");
}
