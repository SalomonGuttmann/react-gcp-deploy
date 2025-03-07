import { axiosClient } from "../axiosClient";
import { User } from "../../models";

const getUsers = async (): Promise<User[]> => {
    try {
        const response = await axiosClient.get('/users');

        const result: User[] = response.data;
        return result;
    } catch (error) {
        console.log(error);
        return [];
    }

}

export { getUsers };