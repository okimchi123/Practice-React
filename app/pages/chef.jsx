import ChefHeader from "../components/chef/Header";
import ChefMain from "../components/chef/Main";

export default function Chef(){
   return(
    <div className="w-[40%] h-[70%] mt-[2%] flex flex-col justify-start items-center gap-8 bg-white">
        <ChefHeader />
        <ChefMain />
    </div>
        
)
}