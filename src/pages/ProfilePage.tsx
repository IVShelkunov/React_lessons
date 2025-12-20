import { useQuery } from "@tanstack/react-query";
import { useAppSelector } from "../store/hooks";
import { getUser } from "../api/user";
import { useState } from "react";
import { UserProfileCard } from "../components/UserProfileCard";
import { EditProfileForm } from "../components/EditProfileForm";

export function ProfilePage () {
	const [isEdit , setIsEdit] = useState(false);
	const userId = useAppSelector(state => state.auth.userId);
	const {data , isLoading , isError , error} = useQuery({
		queryKey: ['user' , userId],
		queryFn: () => getUser(userId!),
		enabled: !!userId
	});
	return (
		<div className="profile">
			{isLoading && <p>Загружаем ваши данные...</p>}
			{isError && <p>{error.message}</p>}
			{data && (
				<div className="profile">
					{isEdit?<EditProfileForm user={data} onClose={() => setIsEdit(false)}/>  : 
						<UserProfileCard user={data} onEdit={() => setIsEdit(true)}/>
					}
				</div>
			)}
		</div>
	);
}