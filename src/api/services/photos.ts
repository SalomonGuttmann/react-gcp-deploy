import { axiosClient } from "../axiosClient";
import { Photo } from "../../models";

const getPhotosByAlbumId = async (albumId: number): Promise<Photo[]> => {
    try {
        const response = await axiosClient.get('/photos', {
            params: {
                albumId: albumId
            }
        });

        const result: Photo[] = response.data;
        return result;
    } catch (error) {
        console.log(error);
        return [];
    }

}


export { getPhotosByAlbumId };
