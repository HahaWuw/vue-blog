import request from "./request";

/**
 * 获取博客列表数据
 */
export async function getBlogs(page = 1, limit = 10, categoryid = -1) {
  return await request.get("/api/blog", {
    params: {
      page,
      limit,
      categoryid
    }
  });
}

/**
 * 获取博客分类
 */
export async function getBlogTypes() {
  return await request.get("/api/blogtype");
}

/**
 * 获取单个博客内容
 */
export async function getBlog(id) {
  return await request.get(`/api/blog/${id}`);
}

/**
 * 提交评论 
 */
 export async function postComment(commentInfo) {
  return await request.post(`/api/comment`, commentInfo);
}

/**
 * 获取评论信息
*/
export async function getComments(blogid, page = 1, limit = 10) {
  return await request.get(`/api/comment`,{
    params: {
      blogid, page, limit
    }
  })
}