import { useDispatch, useSelector } from "react-redux";
import store, { RootState } from "../store";
import { IUser, selected } from "../store/user";

const useApp = () => {
  const users: IUser[] = [
    {
      id: 1,
      name: "Juan Pérez"
    },
    {
      id: 2,
      name: "María Gómez"
    },
    {
      id: 3,
      name: "Carlos Sánchez"
    },
    {
      id: 4,
      name: "Lucía Fernández"
    },
    {
      id: 5,
      name: "Miguel Torres"
    },
    {
      id: 6,
      name: "Ana Martínez"
    },
    {
      id: 7,
      name: "José López"
    },
    {
      id: 8,
      name: "Laura Ramírez"
    },
    {
      id: 9,
      name: "David Rodríguez"
    },
    {
      id: 10,
      name: "Elena Díaz"
    }
  ];

  const user = useSelector((store: RootState) => store.userSelected.user);

  const dispatch = useDispatch<typeof store.dispatch>();

  const selectedUser = (user: IUser) => {
    dispatch(selected({ user }));
  };

  return {
    user,
    users,
    selectedUser
  };
};

export default useApp;
