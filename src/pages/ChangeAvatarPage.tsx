import { useForm, type SubmitHandler } from "react-hook-form"
import { changeAvatarSchema, type ChangeAvatarFormValues } from "../schemas/authSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { updateAvatarPath, uploadFile } from "../api/userApi";
import { useMutation } from "@tanstack/react-query";
import type { IUser } from "../types/user";
import { useNavigate } from "react-router-dom";
import { setUserInfo } from "../store/authSlice";


export const ChangeAvatarPage = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const user = useAppSelector(state => state.auth.user);
	const {register,handleSubmit,formState: {errors},setError} = useForm<ChangeAvatarFormValues>({
		resolver:zodResolver(changeAvatarSchema)
	});
	const updateMutation = useMutation({
		mutationFn: ({id,avatar}: Pick<IUser,'id' | 'avatar'>) => updateAvatarPath({id ,avatar}),

	});
	const onSubmit:SubmitHandler<ChangeAvatarFormValues> = async (data:ChangeAvatarFormValues) => {
		try {
			let avatarPath = user!.avatar;
			if(data.avatar && data.avatar.length > 0) {
				const file = data.avatar[0];
				avatarPath = await uploadFile(file);
			}
			const currentUser = await updateMutation.mutateAsync({id: user!.id , avatar: avatarPath});
			dispatch(setUserInfo(currentUser));
			navigate('../');

		} catch(e) {
			if(e instanceof Error) {
				console.error("Ошибка загрузки:", e.message);
				setError('root', {message: e.message});
			}
			
		}
	}
	return (
		<div className="avatar-change-form" >
			<form noValidate onSubmit={handleSubmit(onSubmit)}>
				<div>
					<input type="file" {...register('avatar')}/>
					{errors.avatar && <div className="error">{errors.avatar.message}</div>}
				</div>
				<button type="submit">установить фото</button>
				{errors.root && <div className="error">{errors.root.message}</div>}
			</form>
		</div>
	)
}