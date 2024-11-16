import ProfileInfo from "../components/ProfileInfo";
import Search from "../components/Search";
import SortRepos from "../components/SortRepos";

const HomePage = () => {
	return (
		<div className='m-4'>
			<Search />
			<SortRepos />
			<div className='flex gap-4 flex-col lg:flex-row justify-center items-start'>
      <ProfileInfo />
				{/* 
				<Repos />
				<Spinner /> */}
			</div>
		</div>
	);
};

export default HomePage
