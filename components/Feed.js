import { SparklesIcon } from "@heroicons/react/outline";
import Input from "./Input";
import Post from "./Post";

export default function Feed() {
    const posts = [
        {
            id: "1",
            name: "Abinas Behera",
            username: "abinascodes",
            userImg: "https://media-exp1.licdn.com/dms/image/C5603AQEm4KkcTR06oA/profile-displayphoto-shrink_200_200/0/1640081576137?e=1655337600&v=beta&t=NKvXdWGIeiphxv-1tWzq1pHnjpuorA980uYg8oSFHJI",
            img: "https://images.unsplash.com/photo-1606037936435-c57c3dffffaa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1814&q=80",
            text: " Ready to Race!!",
            timestamp: "2 hours ago"
        },
        {
            id: "2",
            name: "Abinas Behera",
            username: "abinascodes",
            userImg: "https://media-exp1.licdn.com/dms/image/C5603AQEm4KkcTR06oA/profile-displayphoto-shrink_200_200/0/1640081576137?e=1655337600&v=beta&t=NKvXdWGIeiphxv-1tWzq1pHnjpuorA980uYg8oSFHJI",
            img: "https://images.unsplash.com/photo-1444464666168-49d633b86797?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
            text: " Stunning!",
            timestamp: "2 days ago"
        },
    ]
  return (
    <div className="xl:ml-[370px] border-l border-r border-gray-200 xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl">
        <div className="flex py-2 px-3 sticky top-0 z-50 bg-white border-gray-200">
            <h2 className="text-lg sm:text-xl font-bold cursor-pointer">Home</h2>
            <div className="hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9">
                <SparklesIcon className="h-5"/>
                </div>
            </div>
            <Input />
            {posts.map((post)=>(
                <Post key={post.id} post={post}/>
            ))}
        </div> 
  )
}
