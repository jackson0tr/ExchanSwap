import { useState } from "react";
import axiosApi from "./api/axios";
// import { fetchPosts } from "./components/Posts/Posts";

// interface Plan {
//     id: number;
//     name: string;
//     description: string;
//     price: number;
//     calls: number;
//     type: string;
//     price_id: string | null;
//     created_at: string;
//     updated_at: string;
// }

// const [plans, setPlans] = useState<Plan[]>([]);
// const [loading, setLoading] = useState(false);

// const plansRes = async () => {
//     try {
//         const response = await axiosApi.get('/plan');
//         setPlans(response.data.data);
//     } catch (error) {
//         console.error('Error fetching plans:', error);
//     } finally {
//         setLoading(false);
//     }
// }

export default async function sitemap() {
    const baseUrl = 'https://exchanswap.com'

    // const res: any = await fetchPosts();

    // const blogPosts = res?.map((post: any)=> {
    //     return{
    //         url: `${baseUrl}/posts/${post?.slug}`,
    //         lastModified: post?.created_at,
    //     }
    // })

    return [
        {
            url: baseUrl,
            lastModified: new Date()
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date()
        },
        {
            url: `${baseUrl}/profile`,
            lastModified: new Date()
        },
        {
            url: `${baseUrl}/privacy`,
            lastModified: new Date()
        },
        {
            url: `${baseUrl}/faq`,
            lastModified: new Date()
        },
        // ...blogPosts
    ]
}