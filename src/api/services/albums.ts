import { axiosClient } from "../axiosClient";
import { Album } from "../../models";

const getAlbumsByUser = async (userId: number): Promise<Album[]> => {
    try {
        const response = await axiosClient.get('/albums', {
            params: {
                userId: userId
            }
        });

        const result: Album[] = response.data;
        return result;
    } catch (error) {
        console.log(error);
        return [];
    }

}
export { getAlbumsByUser };
