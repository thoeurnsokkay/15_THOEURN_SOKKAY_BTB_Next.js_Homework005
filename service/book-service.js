export const getAllBooks = async(categoryId = "") => {
    const res = await fetch(`https://nextjs-homework005.vercel.app/api/book?query=${categoryId}`);
    const books = await res.json();
    return books;
}

export const getAllBookCategories = async() => {
    const res = await fetch(`https://nextjs-homework005.vercel.app/api/book_category`);
    const categories = await res.json();
    return categories;
}

export const getAllCartoons = async(categoryId = "") => {
    const res = await fetch(`https://nextjs-homework005.vercel.app/api/book?query=${categoryId}`);
    const cartoons = await res.json();
    return cartoons;
}

export const getAllOldSchoolCartoons = async() => {
    const res = await fetch(`https://nextjs-homework005.vercel.app/api/cartoon_genre`);
    const categories = await res.json();
    return categories;
}
